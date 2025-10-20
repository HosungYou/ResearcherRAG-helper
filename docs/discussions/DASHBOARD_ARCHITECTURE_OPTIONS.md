# 프로젝트 대시보드 아키텍처 옵션

**Date**: 2025-01-12
**Topic**: 연구자들이 자신의 프로젝트 진행상황을 웹에서 확인하는 방법

---

## 🤔 핵심 문제

```
연구자의 로컬 환경:
/Users/researcher/researcherRAG/projects/2025-01-12_AI-Healthcare/
└── data/
    └── 01_identification/
        └── pubmed_results.csv  (450 papers)

웹사이트 (Vercel):
https://scholar-rag-helper.vercel.app/dashboard
└── ??? 이 CSV 파일을 어떻게 읽지?
```

**문제점**: 웹사이트는 사용자의 로컬 파일에 접근할 수 없음 (보안상 당연함)

---

## 💡 해결방안 비교

### Option 1: CLI 기반 로컬 대시보드 (가장 간단)

**구조**:
```bash
# 터미널에서 실행
scholarag dashboard

# 출력:
┌─────────────────────────────────────────────────────────────┐
│  Project: AI-Healthcare-Adoption                             │
│  Created: 2025-01-12                                         │
│  Status: ⚙️ Stage 3 - Full-text review                       │
└─────────────────────────────────────────────────────────────┘

📊 PRISMA Progress
├─ Stage 1: ✅ Done (612 papers identified)
├─ Stage 2: ✅ Done (264 papers screened)
├─ Stage 3: ⚙️ Active (142 papers included)
└─ Stage 4: ⏳ Pending

📁 Files Generated
├─ data/01_identification/deduplicated.csv (612 papers)
├─ data/02_screening/title_abstract.csv (264 passed)
└─ data/03_full_text/final_dataset.csv (142 included) ✅

🔗 Quick Links
• View PRISMA flowchart: open outputs/prisma_flowchart.png
• Open project folder: cd /Users/you/researcherRAG/projects/2025-01-12_AI-Healthcare
• Start RAG system: python interfaces/claude_code_interface.py --project 2025-01-12_AI-Healthcare
```

**장점**:
- ✅ 구현 간단 (Python script만 작성)
- ✅ 프라이버시 완벽 (로컬에서만 실행)
- ✅ 빠름 (네트워크 필요 없음)

**단점**:
- ❌ 터미널에서만 사용 가능
- ❌ 다른 사람과 공유 어려움
- ❌ 시각적으로 덜 예쁨

**구현**:
```python
# scripts/dashboard.py
import os
import pandas as pd
from rich.console import Console
from rich.table import Table

def show_dashboard(project_path: str):
    console = Console()

    # 프로젝트 정보 읽기
    config = yaml.safe_load(open(f"{project_path}/config.yaml"))

    # PRISMA 진행상황 체크
    stages = {
        "Stage 1": check_stage_1_files(project_path),
        "Stage 2": check_stage_2_files(project_path),
        "Stage 3": check_stage_3_files(project_path),
        "Stage 4": check_stage_4_files(project_path),
    }

    # 예쁜 테이블 출력
    table = Table(title="PRISMA Progress")
    table.add_column("Stage", style="cyan")
    table.add_column("Status", style="green")
    table.add_column("Files", style="yellow")

    for stage, status in stages.items():
        table.add_row(stage, status["icon"], status["files"])

    console.print(table)
```

---

### Option 2: 로컬 웹서버 (중간 난이도)

**구조**:
```bash
# 터미널에서 실행
scholarag serve --port 8080

# 브라우저에서 접속:
http://localhost:8080/dashboard
```

**웹 UI 예시**:
```
┌──────────────────────────────────────────────────────────┐
│  ScholaRAG Dashboard - Running on localhost:8080     │
└──────────────────────────────────────────────────────────┘

Select Project:
[v] 2025-01-12_AI-Healthcare-Adoption
[ ] 2025-01-05_Teacher-Technology
[ ] 2024-12-20_LLM-Education

┌─────────────────────────────────────────────────────────┐
│  AI-Healthcare-Adoption                                  │
│  Status: ⚙️ Stage 3 Active                               │
└─────────────────────────────────────────────────────────┘

[View Files] [Download PRISMA Chart] [Start RAG Chat]
```

**장점**:
- ✅ 브라우저에서 사용 (시각적으로 예쁨)
- ✅ 프라이버시 유지 (로컬 서버)
- ✅ 파일 다운로드, RAG 인터페이스 통합 가능

**단점**:
- ❌ 서버 실행 필요 (python 프로세스 떠있어야 함)
- ❌ 다른 기기에서 접근 불가
- ❌ 구현 복잡도 중간

**구현**:
```python
# scripts/dashboard_server.py
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
import uvicorn

app = FastAPI()

@app.get("/dashboard")
async def dashboard():
    # 프로젝트 폴더 스캔
    projects = scan_projects_folder()

    # HTML 생성
    html = generate_dashboard_html(projects)
    return HTMLResponse(content=html)

@app.get("/api/project/{project_name}/status")
async def project_status(project_name: str):
    # 프로젝트 상태 JSON 반환
    return {
        "name": project_name,
        "stage": "stage_3",
        "papers_identified": 612,
        "papers_screened": 264,
        "papers_included": 142
    }

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8080)
```

---

### Option 3: GitHub + Website 연동 (고급, 공개 프로젝트용)

**구조**:
```
연구자 로컬:
1. PRISMA 완료 → status.json 생성
2. GitHub에 push

GitHub Repository:
projects/2025-01-12_AI-Healthcare/
├── status.json          ← 진행상황 메타데이터
├── prisma_flowchart.png
└── summary.md

Website (Vercel):
https://scholar-rag-helper.vercel.app/dashboard?repo=HosungYou/researcherRAG
└── GitHub API로 status.json 읽어서 표시
```

**예시 status.json**:
```json
{
  "project_name": "AI-Healthcare-Adoption",
  "created": "2025-01-12",
  "updated": "2025-01-13",
  "status": "stage_3_active",
  "prisma": {
    "stage_1": {
      "status": "completed",
      "papers_identified": 612,
      "files": ["data/01_identification/deduplicated.csv"]
    },
    "stage_2": {
      "status": "completed",
      "papers_screened": 264,
      "papers_excluded": 348
    },
    "stage_3": {
      "status": "active",
      "papers_included": 142,
      "last_updated": "2025-01-13T14:30:00Z"
    }
  },
  "visualizations": {
    "prisma_flowchart": "outputs/prisma_flowchart.png"
  }
}
```

**웹사이트 UI**:
```tsx
// app/dashboard/page.tsx
import { Octokit } from "@octokit/rest"

export default async function DashboardPage({ searchParams }) {
  const repo = searchParams.repo // "HosungYou/researcherRAG"

  // GitHub API로 status.json 가져오기
  const octokit = new Octokit()
  const { data } = await octokit.repos.getContent({
    owner: "HosungYou",
    repo: "researcherRAG",
    path: "projects/2025-01-12_AI-Healthcare/status.json"
  })

  const status = JSON.parse(atob(data.content))

  return (
    <div>
      <h1>{status.project_name}</h1>
      <p>Status: {status.status}</p>
      <p>Papers Identified: {status.prisma.stage_1.papers_identified}</p>
      <img src={`https://raw.githubusercontent.com/${repo}/main/${status.visualizations.prisma_flowchart}`} />
    </div>
  )
}
```

**장점**:
- ✅ 다른 사람과 공유 가능 (URL 하나로)
- ✅ 진행상황 실시간 업데이트 (GitHub push만 하면)
- ✅ 웹사이트에서 직접 확인 (서버 실행 불필요)
- ✅ 포트폴리오로 활용 가능

**단점**:
- ❌ GitHub repository가 public이어야 함 (민감한 데이터는 불가)
- ❌ 구현 복잡도 높음
- ❌ GitHub API rate limit 존재

---

### Option 4: 클라우드 동기화 (가장 고급)

**구조**:
```
연구자 로컬:
1. PRISMA 완료
2. scholarag sync --cloud  ← 클라우드에 업로드

Cloud Storage (S3, Google Drive, etc):
/users/researcher123/
└── projects/
    └── 2025-01-12_AI-Healthcare/
        ├── status.json
        └── prisma_flowchart.png

Website:
https://scholar-rag-helper.vercel.app/dashboard
└── 로그인 후 자신의 프로젝트만 표시
```

**장점**:
- ✅ 완전한 프라이버시 (로그인 필요)
- ✅ 어디서나 접근 가능
- ✅ 협업 가능 (팀원 초대)
- ✅ 자동 백업

**단점**:
- ❌ 인증 시스템 필요 (Auth0, Clerk, etc.)
- ❌ 클라우드 스토리지 비용
- ❌ 구현 복잡도 매우 높음
- ❌ 유지보수 부담

---

## 🎯 추천 방안

### 단계별 구현 전략

#### Phase 1 (지금 당장): Option 1 - CLI 대시보드
```bash
# 간단하게 시작
scholarag status

# 출력:
✅ Stage 1: 612 papers identified
✅ Stage 2: 264 papers screened
⚙️  Stage 3: 142 papers included
⏳ Stage 4: RAG setup pending
```

**이유**:
- 1-2시간 안에 구현 가능
- 사용자에게 즉각적인 가치 제공
- 나중에 웹 버전으로 업그레이드 가능

#### Phase 2 (1-2주 후): Option 2 - 로컬 웹서버
```bash
scholarag serve

# 브라우저에서:
http://localhost:8080
```

**이유**:
- CLI 대시보드 코드 재사용
- 시각적으로 더 나은 UX
- 여전히 로컬이라 프라이버시 안전

#### Phase 3 (1-2개월 후, optional): Option 3 - GitHub 연동
```
# 공개 프로젝트만 선택적으로 공유
scholarag publish --github --public

# URL 생성:
https://scholar-rag-helper.vercel.app/showcase/HosungYou/researcherRAG/2025-01-12_AI-Healthcare
```

**이유**:
- 성과 공유 및 포트폴리오 용도
- 다른 연구자들이 참고 가능
- 선택적 공개 (민감한 프로젝트는 로컬에만)

---

## 🚀 구현 우선순위 (지금 시작)

### 1. CLI 대시보드 (2-3시간)

**파일 생성**:
```
researcherRAG/
├── scripts/
│   ├── dashboard.py         ← 새로 생성
│   └── status_checker.py    ← 새로 생성
└── pyproject.toml           ← CLI 명령어 등록
```

**CLI 명령어 설계**:
```bash
# 기본 상태 확인
scholarag status

# 특정 프로젝트
scholarag status --project 2025-01-12_AI-Healthcare

# 자세한 정보
scholarag status --verbose

# JSON 출력 (프로그래밍 용도)
scholarag status --json
```

**예시 출력**:
```
╔════════════════════════════════════════════════════════════╗
║  ScholaRAG Project Status                              ║
╚════════════════════════════════════════════════════════════╝

📂 Project: AI-Healthcare-Adoption
📅 Created: 2025-01-12
⏱️  Last Updated: 2 hours ago

┌─────────────────────────────────────────────────────────┐
│  PRISMA Pipeline Progress                                │
├─────────────────────────────────────────────────────────┤
│  ✅ Stage 1: Identification                              │
│     • PubMed: 450 papers                                 │
│     • Scopus: 380 papers                                 │
│     • Deduplicated: 612 unique papers                    │
│                                                          │
│  ✅ Stage 2: Screening                                   │
│     • Title/Abstract reviewed: 612 papers                │
│     • Passed: 264 papers (43.1%)                         │
│     • Excluded: 348 papers (56.9%)                       │
│                                                          │
│  ⚙️  Stage 3: Full-text Assessment (In Progress)         │
│     • Reviewed: 142 papers                               │
│     • Remaining: 122 papers                              │
│     • Progress: 53.8% complete                           │
│                                                          │
│  ⏳ Stage 4: RAG System Setup (Pending)                  │
│     Ready to start after Stage 3 completes               │
└─────────────────────────────────────────────────────────┘

📁 Files Generated:
├─ data/01_identification/deduplicated.csv (612 rows)
├─ data/02_screening/title_abstract.csv (264 rows)
├─ data/03_full_text/final_dataset.csv (142 rows) ✅
└─ outputs/prisma_flowchart.png ✅

🔗 Quick Actions:
• View PRISMA chart: scholarag view-prisma
• Open project folder: scholarag open
• Start RAG system: scholarag rag start
• Generate report: scholarag report

💡 Next Step:
  Complete Stage 3 full-text review (122 papers remaining)
  Then run: scholarag rag setup
```

### 2. 웹사이트에 "How to Check Your Progress" 섹션 추가

**Chapter 4에 추가**:
```markdown
## Checking Your Progress

After each stage, you can check your progress:

### Method 1: CLI Dashboard (Recommended)
```bash
scholarag status
```

This will show you:
- Current stage and completion percentage
- Number of papers at each stage
- Files generated
- Next recommended action

### Method 2: Manual File Check
```bash
# Check paper counts
wc -l data/*//*.csv

# View PRISMA flowchart
open outputs/prisma_flowchart.png
```

### Method 3: Project README
Each project has a `README.md` that's automatically updated:
```bash
cat projects/2025-01-12_AI-Healthcare/README.md
```
```

---

## 🤝 결론

**즉시 시작**: Option 1 (CLI 대시보드)
- 가장 간단하고 실용적
- 프라이버시 완벽 보장
- 2-3시간 안에 구현 가능

**미래 확장**: Option 2 (로컬 웹서버) → Option 3 (GitHub 공유)
- 필요에 따라 단계적 업그레이드
- CLI 코드 재사용 가능

**지금 할 작업**:
1. CLI 대시보드 구현
2. 웹사이트에 사용법 추가
3. 사용자 피드백 수집

시작할까요? 🚀
