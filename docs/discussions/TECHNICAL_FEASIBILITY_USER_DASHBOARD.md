# 기술적 가능성 분석: 사용자별 프로젝트 대시보드

**Date**: 2025-01-12
**Question**: GitHub 코드 + 웹사이트 로그인 → 개인 프로젝트 대시보드 가능한가?

---

## ✅ 결론: 완전히 가능합니다

**Architecture**:
```
┌─────────────────────────────────────────────────────────────────┐
│  연구자 로컬 환경 (Claude Code / VS Code)                        │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  1. researcherRAG 코드 실행                                 │ │
│  │  2. PRISMA 완료 → status.json 생성                         │ │
│  │  3. scholarag sync --user hosung@example.com           │ │
│  └────────────────────────────────────────────────────────────┘ │
└────────────────────────┬────────────────────────────────────────┘
                         │ HTTPS POST
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│  Backend API (Vercel Edge Functions / Supabase)                 │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Authentication: hosung@example.com 확인                    │ │
│  │  Storage: 사용자별 폴더에 데이터 저장                        │ │
│  │    /users/hosung@example.com/                              │ │
│  │      └── projects/2025-01-12_AI-Healthcare/               │ │
│  │          ├── status.json                                   │ │
│  │          └── prisma_flowchart.png                          │ │
│  └────────────────────────────────────────────────────────────┘ │
└────────────────────────┬────────────────────────────────────────┘
                         │ API Request
                         ↓
┌─────────────────────────────────────────────────────────────────┐
│  Frontend (Next.js on Vercel)                                   │
│  https://scholar-rag-helper.vercel.app/dashboard             │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  1. 사용자 로그인 (Google / GitHub OAuth)                   │ │
│  │  2. 자신의 프로젝트 목록 표시                                │ │
│  │  3. 선택한 프로젝트 대시보드 표시                            │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ 구체적 구현 방안

### 1. 사용자 인증 (Authentication)

#### Option A: Clerk (추천 - 가장 쉬움)

**Setup (5분)**:
```bash
npm install @clerk/nextjs
```

**코드**:
```tsx
// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}

// app/dashboard/page.tsx
import { auth } from '@clerk/nextjs'

export default async function DashboardPage() {
  const { userId, user } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  // 이제 user.emailAddress로 사용자 식별 가능
  const projects = await fetchUserProjects(user.emailAddress)

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <ProjectList projects={projects} />
    </div>
  )
}
```

**장점**:
- ✅ Google, GitHub, Email 로그인 모두 지원
- ✅ Free tier: 10,000 MAU (월간 활성 사용자)
- ✅ 설정 매우 간단 (5분)
- ✅ 보안 완벽 (JWT, session 관리 자동)

#### Option B: NextAuth.js (오픈소스)

**Setup**:
```bash
npm install next-auth
```

**코드**:
```ts
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
}

export default NextAuth(authOptions)
```

**장점**:
- ✅ 완전 무료
- ✅ 자체 호스팅 가능
- ✅ OAuth 2.0 표준

**단점**:
- ❌ 설정 복잡도 높음 (30분+)
- ❌ 보안 관리 직접 해야 함

---

### 2. 데이터 저장 (Storage)

#### Option A: Supabase (추천)

**Setup**:
```bash
npm install @supabase/supabase-js
```

**Database Schema**:
```sql
-- users 테이블 (Clerk/NextAuth에서 자동 생성)
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- projects 테이블
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  name TEXT NOT NULL,  -- "AI-Healthcare-Adoption"
  created_at TIMESTAMP NOT NULL,  -- "2025-01-12"
  updated_at TIMESTAMP DEFAULT NOW(),
  status JSONB,  -- PRISMA 진행상황
  config JSONB   -- rag_config.yaml 내용
);

-- files 테이블
CREATE TABLE project_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id),
  file_type TEXT,  -- "csv", "png", "pdf"
  file_path TEXT,  -- "data/01_identification/pubmed_results.csv"
  file_url TEXT,   -- Supabase Storage URL
  metadata JSONB   -- { "row_count": 450, "size_bytes": 123456 }
);
```

**Storage Structure**:
```
Supabase Storage Bucket: "researcher-projects"
├── users/
│   ├── hosung@example.com/
│   │   ├── 2025-01-12_AI-Healthcare/
│   │   │   ├── status.json
│   │   │   ├── prisma_flowchart.png
│   │   │   ├── data/
│   │   │   │   └── final_dataset.csv
│   │   │   └── config.yaml
│   │   └── 2025-01-05_Teacher-Tech/
│   │       └── ...
│   └── jane@university.edu/
│       └── ...
```

**장점**:
- ✅ Free tier: 500MB storage, 2GB bandwidth/월
- ✅ PostgreSQL (SQL 쿼리 가능)
- ✅ Real-time subscriptions (변경사항 즉시 반영)
- ✅ Row Level Security (RLS) - 사용자별 데이터 격리

#### Option B: AWS S3 + DynamoDB

**Storage (S3)**:
```
s3://scholarag-projects/
└── users/
    └── hosung@example.com/
        └── projects/
```

**Database (DynamoDB)**:
```json
{
  "userId": "hosung@example.com",
  "projectId": "2025-01-12_AI-Healthcare",
  "status": {
    "stage_1": { "completed": true, "papers": 612 },
    "stage_2": { "completed": true, "papers": 264 }
  }
}
```

**장점**:
- ✅ 무제한 확장 가능
- ✅ 매우 빠름

**단점**:
- ❌ 설정 복잡
- ❌ 비용 (S3: $0.023/GB, DynamoDB: $0.25/GB)

---

### 3. 로컬 → 클라우드 동기화 (Sync)

#### CLI 명령어 구현

**파일**: `researcherRAG/scripts/sync.py`

```python
import requests
import os
import json
from pathlib import Path

def sync_project_to_cloud(project_path: str, user_email: str, api_key: str):
    """
    로컬 프로젝트를 클라우드에 동기화

    Args:
        project_path: 로컬 프로젝트 경로
        user_email: 사용자 이메일
        api_key: ScholarRAG API 키 (웹사이트에서 발급)
    """

    # 1. 프로젝트 메타데이터 수집
    project_name = Path(project_path).name  # "2025-01-12_AI-Healthcare"
    config = yaml.safe_load(open(f"{project_path}/config.yaml"))

    # 2. status.json 생성
    status = generate_status_json(project_path)

    # 3. API 엔드포인트로 전송
    API_BASE = "https://scholar-rag-helper.vercel.app/api"

    # 3a. 프로젝트 정보 전송
    response = requests.post(
        f"{API_BASE}/projects",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        },
        json={
            "user_email": user_email,
            "project_name": project_name,
            "status": status,
            "config": config
        }
    )

    if response.status_code != 200:
        print(f"❌ Error: {response.json()['error']}")
        return

    project_id = response.json()["project_id"]
    print(f"✅ Project created: {project_id}")

    # 3b. 파일 업로드 (PRISMA flowchart, CSV 등)
    files_to_upload = [
        "outputs/prisma_flowchart.png",
        "data/03_full_text/final_dataset.csv",
    ]

    for file_path in files_to_upload:
        full_path = f"{project_path}/{file_path}"
        if not os.path.exists(full_path):
            continue

        with open(full_path, "rb") as f:
            response = requests.post(
                f"{API_BASE}/projects/{project_id}/files",
                headers={"Authorization": f"Bearer {api_key}"},
                files={"file": (file_path, f)},
                data={"file_path": file_path}
            )

        if response.status_code == 200:
            print(f"  ✅ Uploaded: {file_path}")
        else:
            print(f"  ❌ Failed: {file_path}")

    print(f"\n🎉 Sync complete!")
    print(f"View online: https://scholar-rag-helper.vercel.app/dashboard/{project_id}")


def generate_status_json(project_path: str) -> dict:
    """프로젝트 진행상황 JSON 생성"""
    status = {}

    # Stage 1 체크
    if os.path.exists(f"{project_path}/data/01_identification/deduplicated.csv"):
        df = pd.read_csv(f"{project_path}/data/01_identification/deduplicated.csv")
        status["stage_1"] = {
            "status": "completed",
            "papers_identified": len(df),
            "completed_at": os.path.getmtime(f"{project_path}/data/01_identification/deduplicated.csv")
        }

    # Stage 2 체크
    if os.path.exists(f"{project_path}/data/02_screening/title_abstract.csv"):
        df = pd.read_csv(f"{project_path}/data/02_screening/title_abstract.csv")
        status["stage_2"] = {
            "status": "completed",
            "papers_screened": len(df)
        }

    # Stage 3 체크
    if os.path.exists(f"{project_path}/data/03_full_text/final_dataset.csv"):
        df = pd.read_csv(f"{project_path}/data/03_full_text/final_dataset.csv")
        status["stage_3"] = {
            "status": "completed",
            "papers_included": len(df)
        }

    return status
```

#### 사용법

```bash
# 1. API 키 발급 (웹사이트에서)
# https://scholar-rag-helper.vercel.app/settings/api-keys
# → "Create API Key" 클릭
# → sk_live_abc123xyz... 복사

# 2. 환경변수 설정
export SCHOLARAG_API_KEY="sk_live_abc123xyz..."
export SCHOLARAG_EMAIL="hosung@example.com"

# 3. 동기화 실행
cd projects/2025-01-12_AI-Healthcare
scholarag sync

# 출력:
# 📤 Syncing to cloud...
# ✅ Project created: proj_xyz123
# ✅ Uploaded: outputs/prisma_flowchart.png
# ✅ Uploaded: data/03_full_text/final_dataset.csv
# 🎉 Sync complete!
# View online: https://scholar-rag-helper.vercel.app/dashboard/proj_xyz123
```

---

### 4. 웹사이트 대시보드 UI

**URL**: `https://scholar-rag-helper.vercel.app/dashboard`

#### 로그인 후 화면

```tsx
// app/dashboard/page.tsx
import { auth } from '@clerk/nextjs'
import { createClient } from '@supabase/supabase-js'

export default async function DashboardPage() {
  const { user } = auth()
  const supabase = createClient(...)

  // 사용자의 프로젝트 목록 가져오기
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <button className="btn-primary">
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const status = project.status  // JSON from database

  return (
    <Link href={`/dashboard/${project.id}`}>
      <div className="border rounded-lg p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Created: {new Date(project.created_at).toLocaleDateString()}
        </p>

        {/* 진행상황 표시 */}
        <div className="space-y-2">
          <ProgressBar
            label="Stage 1: Identification"
            completed={status.stage_1?.status === "completed"}
            count={status.stage_1?.papers_identified}
          />
          <ProgressBar
            label="Stage 2: Screening"
            completed={status.stage_2?.status === "completed"}
            count={status.stage_2?.papers_screened}
          />
          <ProgressBar
            label="Stage 3: Full-text"
            completed={status.stage_3?.status === "completed"}
            count={status.stage_3?.papers_included}
          />
        </div>

        <div className="mt-4 pt-4 border-t">
          <span className="text-sm font-medium">
            {getCurrentStage(status)}
          </span>
        </div>
      </div>
    </Link>
  )
}
```

#### 개별 프로젝트 대시보드

**URL**: `https://scholar-rag-helper.vercel.app/dashboard/proj_xyz123`

```tsx
// app/dashboard/[projectId]/page.tsx
export default async function ProjectDetailPage({ params }) {
  const { projectId } = params
  const { user } = auth()

  // 프로젝트 데이터 가져오기
  const { data: project } = await supabase
    .from('projects')
    .select('*, project_files(*)')
    .eq('id', projectId)
    .eq('user_id', user.id)  // 보안: 자신의 프로젝트만
    .single()

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="container mx-auto p-6">
      {/* 헤더 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <p className="text-gray-500">
          Created {new Date(project.created_at).toLocaleDateString()}
        </p>
      </div>

      {/* PRISMA 진행상황 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            PRISMA Progress
          </h2>
          <PrismaProgressChart status={project.status} />
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            PRISMA Flowchart
          </h2>
          {/* Supabase Storage에서 이미지 가져오기 */}
          <img
            src={getFileUrl('outputs/prisma_flowchart.png')}
            alt="PRISMA Flowchart"
            className="w-full"
          />
        </div>
      </div>

      {/* 파일 목록 */}
      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Generated Files
        </h2>
        <FileList files={project.project_files} />
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => downloadFile('data/03_full_text/final_dataset.csv')}
          className="btn-primary"
        >
          Download Dataset
        </button>
        <button
          onClick={() => syncFromLocal()}
          className="btn-secondary"
        >
          Sync from Local
        </button>
      </div>
    </div>
  )
}
```

---

## 🔒 보안 고려사항

### 1. Row Level Security (RLS)

**Supabase Policy**:
```sql
-- 사용자는 자신의 프로젝트만 볼 수 있음
CREATE POLICY "Users can view own projects"
  ON projects
  FOR SELECT
  USING (auth.uid() = user_id);

-- 사용자는 자신의 프로젝트만 수정 가능
CREATE POLICY "Users can update own projects"
  ON projects
  FOR UPDATE
  USING (auth.uid() = user_id);
```

### 2. API Key 검증

```ts
// app/api/projects/route.ts
export async function POST(request: Request) {
  // Authorization header 확인
  const apiKey = request.headers.get('Authorization')?.replace('Bearer ', '')

  if (!apiKey) {
    return Response.json({ error: 'API key required' }, { status: 401 })
  }

  // API key 유효성 검증
  const { data: keyData } = await supabase
    .from('api_keys')
    .select('user_id, is_active')
    .eq('key', apiKey)
    .single()

  if (!keyData || !keyData.is_active) {
    return Response.json({ error: 'Invalid API key' }, { status: 401 })
  }

  // 이제 keyData.user_id로 사용자 식별 가능
  // ...
}
```

### 3. 파일 크기 제한

```ts
// 큰 CSV 파일은 업로드 금지 (abuse 방지)
const MAX_FILE_SIZE = 10 * 1024 * 1024  // 10MB

if (file.size > MAX_FILE_SIZE) {
  return Response.json(
    { error: 'File too large. Max 10MB.' },
    { status: 413 }
  )
}
```

---

## 💰 비용 추정

### Free Tier로 충분한 경우

**Assumptions**:
- 연구자 100명
- 각자 프로젝트 3개
- 프로젝트당 데이터 5MB

**Clerk (Auth)**:
- Free tier: 10,000 MAU
- 비용: $0 ✅

**Supabase (Storage + DB)**:
- Storage: 100 users × 3 projects × 5MB = 1.5GB
- Free tier: 500MB → **❌ 초과**
- Pro tier ($25/month): 8GB → ✅ 충분

**Vercel (Hosting)**:
- Edge Functions: 100,000 requests/월
- Free tier: 충분 ✅

**총 비용**: $25/월 (Supabase Pro만)

### 대안: 완전 무료 구성

**Storage를 Cloudflare R2로 변경**:
- Free tier: 10GB storage, 10M reads/월
- 비용: $0 ✅

**총 비용**: $0/월

---

## 🚀 구현 타임라인

### Week 1: 인증 + 기본 UI
- [ ] Clerk 설치 및 설정 (2시간)
- [ ] 로그인/회원가입 페이지 (3시간)
- [ ] 대시보드 기본 레이아웃 (3시간)

### Week 2: 백엔드 API
- [ ] Supabase 설정 (2시간)
- [ ] Database schema 생성 (2시간)
- [ ] API 엔드포인트 구현 (6시간)
  - POST /api/projects (프로젝트 생성)
  - GET /api/projects (목록 조회)
  - POST /api/projects/:id/files (파일 업로드)

### Week 3: CLI 동기화
- [ ] `scholarag sync` 명령어 (6시간)
- [ ] API key 생성/관리 UI (3시간)
- [ ] 에러 처리 및 재시도 로직 (3시간)

### Week 4: 대시보드 완성
- [ ] 프로젝트 상세 페이지 (6시간)
- [ ] 파일 다운로드 기능 (2시간)
- [ ] PRISMA 차트 표시 (3시간)
- [ ] 테스트 및 버그 수정 (3시간)

**총 구현 시간**: 약 40-45시간 (1개월)

---

## ✅ 결론

**완전히 가능합니다!**

**Architecture 요약**:
```
로컬 환경 (Claude Code)
  ↓ scholarag sync
API (Vercel Edge Functions)
  ↓ 인증 확인 (Clerk)
Database (Supabase)
  ↓ 데이터 저장
웹사이트 (Next.js)
  ↓ 로그인 후 조회
사용자 대시보드 표시 ✅
```

**장점**:
- ✅ 사용자별로 완전히 격리된 프라이버시
- ✅ 어디서나 접근 가능 (웹 브라우저만 있으면)
- ✅ 협업 가능 (팀원 초대 기능 추가 가능)
- ✅ 자동 백업
- ✅ 버전 관리 (프로젝트 히스토리)

**다음 단계**:
1. 프로토타입 구현 (1주일)
2. 사용자 테스트
3. 피드백 반영

시작할까요? 🚀
