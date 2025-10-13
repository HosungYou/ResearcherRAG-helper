# API Key Workflow 상세 설명

**Date**: 2025-01-12
**Question**: API Key 한번 발급 후 로그인만으로 현황 확인 가능한가?

---

## ✅ 답: 네, 가능합니다!

**핵심 개념**: API Key는 **로컬 환경과 클라우드를 연결하는 용도**일 뿐, 웹사이트에서는 **로그인만** 필요합니다.

---

## 🔄 전체 워크플로우

### 1단계: 초기 설정 (딱 한번만)

```
┌─────────────────────────────────────────────────────────────┐
│  웹사이트 (https://researcher-rag-helper.vercel.app)        │
│                                                              │
│  [로그인 with Google]                                        │
│  ↓                                                           │
│  [Settings] → [API Keys] → [Generate New Key]              │
│  ↓                                                           │
│  sk_live_abc123xyz...  [Copy]                              │
└─────────────────────────────────────────────────────────────┘
                         │
                         │ Copy to clipboard
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  로컬 터미널                                                  │
│                                                              │
│  $ export RESEARCHERRAG_API_KEY="sk_live_abc123..."        │
│  $ echo 'export RESEARCHERRAG_API_KEY="sk_live_abc123..."' \│
│    >> ~/.zshrc  # 영구 저장                                  │
│                                                              │
│  ✅ 이제 설정 끝! 더 이상 API Key 신경 쓸 필요 없음          │
└─────────────────────────────────────────────────────────────┘
```

**이후 모든 프로젝트**: API Key 자동 사용, 추가 설정 불필요

---

### 2단계: 프로젝트 작업 + 자동 동기화

```
┌─────────────────────────────────────────────────────────────┐
│  로컬 작업                                                    │
│                                                              │
│  $ cd projects/2025-01-12_AI-Healthcare                     │
│  $ python scripts/01_fetch_papers.py                        │
│  $ python scripts/02_deduplicate.py                         │
│  ... (PRISMA 작업 진행)                                      │
│                                                              │
│  $ researcherrag sync  ← API Key 자동으로 ~/.zshrc에서 읽음 │
│                                                              │
│  📤 Syncing...                                               │
│  ✅ Project synced: proj_xyz123                             │
└─────────────────────────────────────────────────────────────┘
                         │
                         │ HTTPS POST with API Key
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  Backend (Vercel)                                            │
│                                                              │
│  1. API Key 검증: sk_live_abc123... → hosung@example.com   │
│  2. 데이터 저장:                                             │
│     /users/hosung@example.com/                              │
│       └── projects/2025-01-12_AI-Healthcare/               │
│           ├── status.json                                   │
│           └── prisma_flowchart.png                          │
└─────────────────────────────────────────────────────────────┘
```

---

### 3단계: 웹에서 확인 (로그인만)

```
┌─────────────────────────────────────────────────────────────┐
│  다른 컴퓨터 / 핸드폰 / 회사에서...                          │
│                                                              │
│  https://researcher-rag-helper.vercel.app/dashboard         │
│  ↓                                                           │
│  [로그인 with Google]  ← API Key 필요 없음!                 │
│  ↓                                                           │
│  ✅ 자동으로 hosung@example.com 계정의 모든 프로젝트 표시    │
└─────────────────────────────────────────────────────────────┘

표시 내용:
┌─────────────────────────────────────────────────────────┐
│  My Projects                                             │
│                                                          │
│  📂 2025-01-12_AI-Healthcare-Adoption                    │
│     Stage 3 완료 (142 papers)                            │
│     Last synced: 2 hours ago                            │
│     [View Details]                                       │
│                                                          │
│  📂 2025-01-05_Teacher-Technology                        │
│     Stage 2 진행중 (264 papers)                          │
│     Last synced: 1 day ago                              │
│     [View Details]                                       │
└─────────────────────────────────────────────────────────┘
```

**중요**: 웹사이트에서는 **로그인만 필요**, API Key 입력 불필요!

---

## 🔐 보안 구조

### API Key vs. 로그인 구분

```
API Key (sk_live_abc123...):
├─ 용도: 로컬 터미널 → 클라우드 업로드
├─ 위치: 로컬 컴퓨터 (~/.zshrc)
├─ 권한: 자신의 프로젝트만 업로드 가능
└─ 만료: 없음 (직접 revoke 전까지 유효)

로그인 (Google OAuth):
├─ 용도: 웹 브라우저 → 대시보드 접근
├─ 위치: 브라우저 쿠키/세션
├─ 권한: 자신의 프로젝트만 조회 가능
└─ 만료: 30일 (자동 갱신)
```

### 매칭 메커니즘

```sql
-- Database Schema

-- 1. users 테이블 (로그인으로 생성)
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,  -- "hosung@example.com"
  google_id TEXT,
  created_at TIMESTAMP
);

-- 2. api_keys 테이블 (API Key 발급 시 생성)
CREATE TABLE api_keys (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),  -- hosung@example.com의 ID
  key TEXT UNIQUE NOT NULL,  -- "sk_live_abc123..."
  name TEXT,  -- "My MacBook"
  created_at TIMESTAMP,
  last_used TIMESTAMP,
  is_active BOOLEAN DEFAULT true
);

-- 3. projects 테이블 (sync 시 생성)
CREATE TABLE projects (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),  -- hosung@example.com의 ID
  name TEXT,
  status JSONB,
  created_at TIMESTAMP
);
```

### 흐름도

```
로컬에서 sync:
  researcherrag sync
    ↓
  API Key 전송: sk_live_abc123...
    ↓
  Backend: SELECT user_id FROM api_keys WHERE key = 'sk_live_abc123...'
    ↓
  user_id = uuid-hosung  ← hosung@example.com의 ID
    ↓
  INSERT INTO projects (user_id, ...) VALUES (uuid-hosung, ...)
    ↓
  ✅ 프로젝트가 hosung@example.com 계정에 저장됨

웹에서 로그인:
  Google 로그인: hosung@example.com
    ↓
  Backend: SELECT id FROM users WHERE email = 'hosung@example.com'
    ↓
  user_id = uuid-hosung
    ↓
  SELECT * FROM projects WHERE user_id = uuid-hosung
    ↓
  ✅ hosung@example.com의 모든 프로젝트 표시
```

**핵심**: `user_id`로 연결되므로, API Key로 업로드한 프로젝트를 로그인으로 볼 수 있음!

---

## 📱 다양한 시나리오

### 시나리오 1: 여러 컴퓨터 사용

```
🖥️ 회사 컴퓨터:
  $ export RESEARCHERRAG_API_KEY="sk_live_abc123..."
  $ researcherrag sync  # 프로젝트 A 업로드

💻 집 컴퓨터:
  $ export RESEARCHERRAG_API_KEY="sk_live_abc123..."  # 같은 키
  $ researcherrag sync  # 프로젝트 B 업로드

📱 핸드폰 브라우저:
  로그인 → 프로젝트 A, B 둘 다 보임 ✅
```

### 시나리오 2: API Key 분실

```
문제: API Key를 잃어버렸어요!

해결:
1. 웹사이트 로그인 → Settings → API Keys
2. 기존 키 확인 (마지막 4자리만 표시)
   sk_live_***********xyz789

3. 새 키 발급:
   [Generate New Key] 클릭
   sk_live_def456uvw...

4. 로컬 업데이트:
   $ export RESEARCHERRAG_API_KEY="sk_live_def456..."

5. 기존 키 revoke (선택사항):
   [Revoke] 버튼 클릭 → sk_live_abc123... 비활성화
```

**중요**: 기존에 업로드한 프로젝트는 그대로 유지됨! 새 키로 새 프로젝트만 업로드하면 됨.

### 시나리오 3: 협업자 추가

```
상황: 지도교수님이 내 프로젝트 진행상황을 보고 싶어함

방법 1: 프로젝트 공유 (추천):
  웹사이트 → 프로젝트 → [Share] → professor@university.edu 입력
  → 교수님 이메일로 초대 링크 전송
  → 교수님 로그인하면 해당 프로젝트만 볼 수 있음

방법 2: Read-Only 링크:
  웹사이트 → 프로젝트 → [Generate Public Link]
  → https://researcher-rag-helper.vercel.app/public/proj_xyz123
  → 이 링크는 누구나 볼 수 있음 (수정 불가)

❌ 하지 말아야 할 것: API Key 공유
  → API Key는 개인 것! 공유하면 안 됨
```

---

## 🎯 사용자 입장에서 정리

### ✅ 해야 할 것 (딱 한번만)

```bash
# 1. 웹사이트에서 로그인 & API Key 발급
https://researcher-rag-helper.vercel.app/settings/api-keys

# 2. 로컬에 저장 (한번만)
echo 'export RESEARCHERRAG_API_KEY="sk_live_abc123..."' >> ~/.zshrc
source ~/.zshrc

# 끝! 이제 설정 완료
```

### ✅ 이후 계속 할 것

```bash
# 프로젝트 작업 후 동기화 (API Key 자동으로 사용됨)
researcherrag sync
```

### ✅ 웹에서 확인

```
# 아무 컴퓨터에서 (API Key 필요 없음)
https://researcher-rag-helper.vercel.app/dashboard
→ 로그인 → 모든 프로젝트 표시
```

---

## 💡 비유로 이해하기

**API Key = 집 열쇠**
- 로컬 컴퓨터에 보관
- 클라우드에 "물건 넣기" 위해 필요
- 잃어버려도 새로 발급 가능

**로그인 = 신분증**
- 웹사이트에서 "내 물건 보기" 위해 필요
- 어느 기기에서든 신분증만 있으면 확인 가능
- 열쇠 없어도 괜찮음

**집 (클라우드 스토리지)**
- 내가 열쇠로 넣은 물건들이 보관됨
- 신분증으로 확인하면 내 물건만 보임
- 다른 사람은 내 물건 못 봄

---

## 🔧 구현 코드 예시

### API Key로 업로드 (로컬)

```python
# researcherrag sync 실행 시

import os
import requests

# 1. 환경변수에서 API Key 읽기
api_key = os.environ.get('RESEARCHERRAG_API_KEY')

if not api_key:
    print("❌ Error: RESEARCHERRAG_API_KEY not set")
    print("Get your key at: https://researcher-rag-helper.vercel.app/settings/api-keys")
    exit(1)

# 2. 프로젝트 데이터 준비
project_data = {
    "name": "2025-01-12_AI-Healthcare",
    "status": generate_status_json(),
    "files": ["prisma_flowchart.png", "final_dataset.csv"]
}

# 3. API 호출
response = requests.post(
    "https://researcher-rag-helper.vercel.app/api/projects",
    headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    },
    json=project_data
)

if response.status_code == 200:
    print("✅ Project synced!")
else:
    print(f"❌ Error: {response.json()['error']}")
```

### 로그인으로 조회 (웹)

```tsx
// app/dashboard/page.tsx

import { auth } from '@clerk/nextjs'
import { createClient } from '@supabase/supabase-js'

export default async function DashboardPage() {
  // 1. 현재 로그인한 사용자 정보 가져오기
  const { userId, user } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  // 2. 사용자의 프로젝트 조회
  const supabase = createClient(...)
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', userId)  // 자신의 프로젝트만
    .order('created_at', { ascending: false })

  // 3. 표시
  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
```

**핵심**: API Key와 로그인은 서로 다른 인증 방식이지만, 같은 `userId`로 연결됨!

---

## 🎓 결론

**질문**: API Key 한번 발급하면 로그인만으로 현황 볼 수 있나?
**답변**: **네! 완전히 가능합니다.**

1. **API Key**: 로컬 → 클라우드 업로드용 (한번 설정)
2. **로그인**: 웹 → 프로젝트 조회용 (매번 로그인)
3. **연결**: `user_id`로 자동 매칭

**사용자 경험**:
```
초기 설정 (5분):
  웹 로그인 → API Key 발급 → 로컬 저장

이후 (평생):
  로컬: researcherrag sync  (API Key 자동 사용)
  웹: 로그인 → 대시보드 확인  (API Key 필요 없음)
```

**추가 보너스**:
- ✅ 여러 컴퓨터에서 작업 가능 (같은 API Key 사용)
- ✅ 어디서나 웹 접속으로 확인 가능
- ✅ 협업자와 공유 가능
- ✅ API Key 분실해도 새로 발급 가능

완벽한 워크플로우입니다! 🎉
