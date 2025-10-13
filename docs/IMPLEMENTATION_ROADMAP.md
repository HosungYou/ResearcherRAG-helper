# ResearcherRAG Helper - Implementation Roadmap

**Date**: 2025-01-12
**Goal**: Conceptual Clarity + Practical Usability + GitHub-Website Integration + User Dashboard

---

## 📚 Related Documents

- [Design Discussion](./discussions/DISCUSSION_2025-01-12_REDESIGN.md) - 전체 재설계 논의
- [Dashboard Architecture](./discussions/DASHBOARD_ARCHITECTURE_OPTIONS.md) - 대시보드 아키텍처 옵션
- [Technical Feasibility](./discussions/TECHNICAL_FEASIBILITY_USER_DASHBOARD.md) - 사용자 대시보드 기술적 가능성

---

## 🎯 4단계 통합 계획

### Phase 1: Conceptual Clarity (개념의 명확화)
**목표**: "왜 PRISMA가 RAG 시스템에 필수인가?" 학술적 당위성 설명

**작업**:
1. Chapter 3에 새로운 섹션 추가: "Why PRISMA for RAG?"
2. "일반 RAG vs 연구용 RAG" 비교표
3. 학술적 references 추가 (PRISMA 2020, AMSTAR 2, Hallucination studies)
4. 논문 심사자 대응 시나리오 예시

**결과물**:
- Chapter 3 업데이트
- References 페이지 (선택사항)

---

### Phase 2: Practical Usability (실용적 유용성)
**목표**: 실제 파일 구조, 명령어, 결과물을 명확히 표시

**작업**:
1. **CodeBlock 컴포넌트 전체 적용** (copy 버튼)
2. **FileTree 컴포넌트로 폴더 구조 시각화**
3. **각 단계별 예상 결과물 명시**:
   ```
   Stage 1 실행 → data/01_identification/pubmed_results.csv (450 papers)
   Stage 2 실행 → data/02_screening/title_abstract.csv (264 papers)
   ```
4. **검증 명령어 추가**:
   ```bash
   # 결과 확인
   wc -l data/01_identification/*.csv
   # 출력: 450 pubmed_results.csv
   ```

**결과물**:
- 모든 챕터에 CodeBlock 적용
- FileTree로 각 단계별 폴더 구조 표시
- "How to Verify Your Results" 섹션 추가

---

### Phase 3: GitHub-Website Integration (코드-문서 연결)
**목표**: 웹사이트 설명 ↔ GitHub 코드 양방향 연결

**작업**:
1. **웹사이트 → GitHub 링크**:
   ```tsx
   <div className="code-reference">
     <p>이 단계의 실제 코드:</p>
     <a href="https://github.com/HosungYou/researcherRAG/blob/main/scripts/01_fetch_papers.py">
       📄 scripts/01_fetch_papers.py
     </a>
   </div>
   ```

2. **GitHub → 웹사이트 링크**:
   ```markdown
   # README.md
   ## Stage 1: Paper Collection

   📖 Detailed Guide: [Chapter 4: Stage 1](https://researcher-rag-helper.vercel.app/guide/04-implementation#stage-1)
   ```

3. **실행 예시와 결과물 연결**:
   ```tsx
   <CodeBlock
     code={`python scripts/01_fetch_papers.py --database pubmed`}
     filename="terminal"
   />

   <FileTree structure={[
     { name: 'data/01_identification/pubmed_results.csv',
       description: '450 papers',
       highlight: true }
   ]} />
   ```

**결과물**:
- GitHub README 업데이트
- 모든 챕터에 GitHub 링크 추가
- 양방향 navigation 가능

---

### Phase 4: User Dashboard Connection (사용자 작업 현황 체크)
**목표**: 로컬 작업 → 웹 대시보드에서 진행상황 확인

#### 4-1. 로컬 CLI 대시보드 (즉시 구현 가능)

**구현**:
```python
# scripts/dashboard.py
def show_status(project_path: str):
    """로컬 프로젝트 진행상황 표시"""

    # 각 단계 체크
    stages = check_all_stages(project_path)

    # 예쁘게 출력
    console = Console()
    table = Table(title="ResearcherRAG Project Status")
    table.add_column("Stage", style="cyan")
    table.add_column("Status", style="green")
    table.add_column("Files", style="yellow")

    for stage, info in stages.items():
        table.add_row(
            stage,
            "✅ Complete" if info['complete'] else "⏳ Pending",
            info['files']
        )

    console.print(table)
```

**사용법**:
```bash
cd projects/2025-01-12_AI-Healthcare
researcherrag status

# 출력:
┌─────────────────────────────────────────────────────────┐
│  Stage 1: Identification       ✅ Complete               │
│  → 612 papers identified                                 │
│  → Files: data/01_identification/deduplicated.csv       │
├─────────────────────────────────────────────────────────┤
│  Stage 2: Screening           ✅ Complete                │
│  → 264 papers passed screening                           │
├─────────────────────────────────────────────────────────┤
│  Stage 3: Full-text           ⚙️  In Progress            │
│  → 142 papers included so far                            │
└─────────────────────────────────────────────────────────┘
```

**웹사이트 설명 추가**:
Chapter 4에 "Checking Your Progress" 섹션:
```markdown
## How to Check Your Progress

After completing each stage, verify your work:

### Method 1: CLI Dashboard (Recommended)
\`\`\`bash
researcherrag status
\`\`\`

### Method 2: Manual File Check
\`\`\`bash
ls -lh data/01_identification/
wc -l data/01_identification/*.csv
\`\`\`

### Method 3: Open PRISMA Flowchart
\`\`\`bash
open outputs/prisma_flowchart.png
\`\`\`
```

#### 4-2. 클라우드 동기화 + 웹 대시보드 (향후 구현)

**단계**:

1. **API Key 발급 페이지 추가**:
   ```
   https://researcher-rag-helper.vercel.app/settings/api-keys

   [Generate New API Key] 버튼
   → sk_live_abc123... 생성
   → 복사해서 로컬 환경변수에 저장
   ```

2. **로컬에서 동기화**:
   ```bash
   export RESEARCHERRAG_API_KEY="sk_live_abc123..."

   researcherrag sync

   # 출력:
   📤 Syncing project to cloud...
   ✅ Project uploaded: proj_xyz123
   ✅ Files synced: 5 files (2.3 MB)
   🎉 Complete! View online:
   https://researcher-rag-helper.vercel.app/dashboard/proj_xyz123
   ```

3. **웹 대시보드에서 확인**:
   ```
   https://researcher-rag-helper.vercel.app/dashboard

   [로그인] → [My Projects]

   ┌─────────────────────────────────────────────────┐
   │  AI-Healthcare-Adoption                          │
   │  Created: 2025-01-12                            │
   │  Status: Stage 3 - Full-text review             │
   │                                                  │
   │  📊 Progress:                                    │
   │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 70% Complete             │
   │                                                  │
   │  📁 Files:                                       │
   │  • final_dataset.csv (142 papers)               │
   │  • prisma_flowchart.png                         │
   │                                                  │
   │  [View Details] [Download Data] [Sync Now]     │
   └─────────────────────────────────────────────────┘
   ```

**웹사이트 설명 추가**:
새로운 페이지: "Using the Dashboard"
```markdown
## Syncing Your Project to the Cloud

Want to view your progress from anywhere? Sync to the cloud!

### Step 1: Get Your API Key
1. Visit https://researcher-rag-helper.vercel.app/settings/api-keys
2. Click "Generate New API Key"
3. Copy the key (starts with `sk_live_...`)

### Step 2: Configure Local Environment
\`\`\`bash
export RESEARCHERRAG_API_KEY="sk_live_abc123..."
\`\`\`

### Step 3: Sync Your Project
\`\`\`bash
cd projects/2025-01-12_AI-Healthcare
researcherrag sync
\`\`\`

### Step 4: View Online
Open the URL shown in the output, or visit:
https://researcher-rag-helper.vercel.app/dashboard

You can now:
- ✅ View progress from any device
- ✅ Share with collaborators
- ✅ Download files remotely
- ✅ Track project history
```

---

## 📅 실행 타임라인

### Week 1: Phase 1 + Phase 2 (개념 + 실용성)
**월요일-화요일** (8-10 hours):
- [ ] Chapter 3에 "Why PRISMA for RAG?" 섹션 추가
- [ ] References 추가 및 검증
- [ ] "일반 RAG vs 연구용 RAG" 비교표 작성

**수요일-목요일** (8-10 hours):
- [ ] CodeBlock 컴포넌트 전 챕터 적용
- [ ] FileTree 컴포넌트로 폴더 구조 표시
- [ ] "How to Verify Results" 섹션 추가

**금요일** (4-6 hours):
- [ ] 빌드 및 배포
- [ ] 테스트 및 버그 수정

### Week 2: Phase 3 (GitHub-Website 통합)
**월요일-화요일** (6-8 hours):
- [ ] 웹사이트 각 챕터에 GitHub 링크 추가
- [ ] GitHub README 업데이트 (웹사이트 링크)
- [ ] 양방향 navigation 테스트

**수요일-목요일** (8-10 hours):
- [ ] CodeBlock과 FileTree 연결 완성
- [ ] 실행 예시 → 결과물 시각화
- [ ] Cross-reference 링크 검증

**금요일** (4-6 hours):
- [ ] 빌드 및 배포
- [ ] 통합 테스트

### Week 3: Phase 4-1 (로컬 CLI 대시보드)
**월요일-화요일** (8-10 hours):
- [ ] `scripts/dashboard.py` 구현
- [ ] `researcherrag status` CLI 명령어
- [ ] Rich/Beautiful 터미널 출력

**수요일-목요일** (6-8 hours):
- [ ] Chapter 4에 "Checking Progress" 섹션 추가
- [ ] 사용법 문서 작성
- [ ] 예제 스크린샷 추가

**금요일** (4 hours):
- [ ] 빌드 및 배포
- [ ] 사용자 테스트

### Week 4: Phase 4-2 (클라우드 동기화) - Optional
**월요일-수요일** (12-15 hours):
- [ ] Clerk 인증 설정
- [ ] Supabase 데이터베이스 설계
- [ ] API 엔드포인트 구현

**목요일-금요일** (8-10 hours):
- [ ] `researcherrag sync` 명령어
- [ ] 웹 대시보드 UI
- [ ] API Key 관리 페이지

---

## 🚦 체크포인트

각 Phase 완료 후 다음 질문에 답하기:

### Phase 1 완료 후:
- [ ] "PRISMA가 왜 필요한지" 명확히 이해되는가?
- [ ] References가 충분히 신뢰할 만한가?
- [ ] 학술적 당위성이 설득력 있는가?

### Phase 2 완료 후:
- [ ] 모든 코드 블록에 copy 버튼이 있는가?
- [ ] 각 단계별 폴더 구조가 명확한가?
- [ ] 사용자가 결과물을 쉽게 검증할 수 있는가?

### Phase 3 완료 후:
- [ ] 웹사이트 → GitHub 링크가 모두 작동하는가?
- [ ] GitHub → 웹사이트 링크가 모두 작동하는가?
- [ ] 코드와 설명이 일치하는가?

### Phase 4-1 완료 후:
- [ ] CLI 대시보드가 예쁘고 유용한가?
- [ ] 사용법이 명확한가?
- [ ] 웹사이트 설명이 충분한가?

### Phase 4-2 완료 후 (Optional):
- [ ] 동기화가 안전하고 빠른가?
- [ ] 웹 대시보드가 직관적인가?
- [ ] 로그인 플로우가 매끄러운가?

---

## ❓ 지금 궁금한 점

시작하기 전에 확인하고 싶은 사항:

1. **우선순위**:
   - Phase 1-3를 먼저 완료하고 Phase 4는 나중에? ✅
   - 아니면 Phase 4-1 (CLI 대시보드)를 먼저 구현?

2. **References**:
   - PRISMA 2020, AMSTAR 2 외에 추가할 reference가 있나요?
   - Hallucination 관련 특정 논문 선호도가 있나요?

3. **GitHub Repository**:
   - ResearcherRAG GitHub repository에 직접 접근 가능한가요?
   - README 수정 권한이 있나요?

4. **코드 예시**:
   - 실제 scripts/01_fetch_papers.py 같은 파일이 존재하나요?
   - 아니면 예시 코드를 새로 작성해야 하나요?

5. **사용자 테스트**:
   - Phase 완료 후 실제 사용자에게 테스트할 계획인가요?
   - 피드백 받을 채널이 있나요?

---

## 🚀 다음 단계

위 질문에 대한 답변을 받은 후:
1. Phase 1부터 순차적으로 시작
2. 각 Phase 완료 후 체크포인트 확인
3. 피드백 반영하며 진행

**지금 바로 시작 가능한 작업**:
- Phase 1: Chapter 3 개념 명확화 섹션 작성
- Phase 2: CodeBlock 컴포넌트 1-2개 챕터에 적용 (예시)

어떤 것부터 시작할까요? 🎯
