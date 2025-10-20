# ScholaRAG 재설계 토론 문서

**Date**: 2025-01-12
**Participants**: Hosung You, Claude
**Topic**: Conceptual Clarity, Practical Usability, GitHub-Website Integration

---

## 🎯 핵심 문제 정의

### 현재 상황
현재 ScholaRAG Helper 웹사이트는:
- ❌ **개념적 혼란**: PRISMA와 RAG의 관계가 불명확
- ❌ **추상적 설명**: "왜 이 순서인지" 당위성 부족
- ❌ **단절된 경험**: 웹사이트 → GitHub 코드 연결성 약함
- ❌ **결과물 불투명**: 어떤 파일이 생성되는지, 어디서 확인하는지 불분명

### 사용자 여정의 단절
```
User Journey (현재):
웹사이트 읽기 → "이해 안됨" → GitHub 코드 보기 → "이게 뭐지?" → 포기

User Journey (목표):
웹사이트 읽기 → "이해됨!" → GitHub 코드 보기 → "아, 이거구나!" → 성공
```

---

## 📚 요구사항 1: 개념의 명확화 (Conceptual Clarity)

### 문제: "왜 PRISMA가 RAG 시스템 가이드에 나오는가?"

**현재 설명**: "PRISMA를 사용하면 체계적인 문헌 검토가 가능합니다."
**문제점**: RAG 시스템 구축에 왜 PRISMA가 **필수적**인지 설명 부족

### 제안: 학술적 타당성 중심의 내러티브

#### A. RAG의 근본적 한계
```
일반 RAG 시스템의 문제:
❌ "인터넷에서 긁어온 문서" → 품질 보장 없음
❌ "임의로 선택한 논문" → 선택 편향 (selection bias)
❌ "검증되지 않은 출처" → 연구 타당도 훼손
```

**Reference 필요**:
- Hallucination in LLMs (Ji et al., 2023)
- Selection bias in literature reviews (Rothstein et al., 2005)

#### B. PRISMA의 역할: 데이터 품질 보증
```
PRISMA가 해결하는 것:
✅ 체계적 검색 (Systematic Search) → 누락 최소화
✅ 명시적 기준 (Explicit Criteria) → 재현 가능성
✅ 투명한 절차 (Transparent Process) → 선택 편향 제거
✅ 품질 평가 (Quality Assessment) → 타당도 확보
```

**Reference 필요**:
- PRISMA 2020 (Page et al., 2021)
- Systematic reviews quality (Shea et al., 2017 - AMSTAR 2)

#### C. PRISMA → RAG 연결의 당위성

```markdown
## 왜 RAG 시스템에 PRISMA가 필수인가?

### 학술 연구의 요구사항
학술 연구에서 AI 도구를 사용할 때 가장 중요한 것은 **재현성(reproducibility)**과 **타당성(validity)**입니다.

> "The quality of a literature review depends fundamentally on the quality of the
> included studies and the transparency of the selection process."
> — Page et al. (2021), PRISMA 2020 Statement

### 일반 RAG vs. 연구용 RAG

| 구분 | 일반 RAG (예: ChatGPT) | ScholaRAG (PRISMA 기반) |
|------|----------------------|--------------------------|
| **데이터 출처** | 불명확 | 체계적 검색으로 수집 |
| **선택 기준** | 알고리즘 기반 | 명시적 inclusion/exclusion criteria |
| **재현성** | 불가능 | PRISMA flowchart로 완전 재현 |
| **학술 신뢰도** | 낮음 (인용 불가) | 높음 (체계적 문헌고찰로 인정) |

### 구체적 이점

**1. 논문 게재 시 심사자 대응**
```
심사자 질문: "어떤 기준으로 이 142개 논문을 선택했나요?"

PRISMA 없이:
❌ "관련성이 높아 보이는 논문들을 선택했습니다"
→ Reject: Selection bias 가능성

PRISMA 사용:
✅ "PRISMA 2020 가이드라인에 따라, 다음 inclusion criteria를 사용했습니다:
   - Peer-reviewed journals (2010-2024)
   - Empirical studies on technology adoption
   - Healthcare settings only
   → 1,150개 검색 → 612개 중복 제거 → 264개 초록 screening
   → 142개 full-text review → Supplementary Table S1 참고"
→ Accept: 체계적이고 투명함
```

**2. 연구 타당도 확보**
```python
# 일반 RAG 시스템의 문제
papers = google_scholar.search("AI adoption")[:100]  # ❌ 무작위 100개
vector_db.ingest(papers)  # ❌ 어떤 논문이 포함되었는지 불명확

# ScholaRAG의 접근
papers = prisma_pipeline(
    databases=["PubMed", "Scopus", "ERIC"],
    inclusion_criteria={"year": "2010-2024", "study_type": "empirical"},
    screening_method="dual_independent_review"  # ✅ 2명이 독립적으로 검토
)  # ✅ 142개 논문, 모든 결정 기록됨
vector_db.ingest(papers, metadata=prisma_metadata)  # ✅ 추적 가능
```

### References
- Page, M. J., et al. (2021). The PRISMA 2020 statement. *BMJ*, 372, n71.
- Shea, B. J., et al. (2017). AMSTAR 2: a critical appraisal tool for systematic reviews. *BMJ*, 358, j4008.
- Ji, Z., et al. (2023). Survey of hallucination in natural language generation. *ACM Computing Surveys*, 55(12), 1-38.
- Rothstein, H. R., et al. (2005). *Publication bias in meta-analysis: Prevention, assessment and adjustments*. Wiley.
```

---

## 🔗 요구사항 2: GitHub-Website 통합 (Practical Integration)

### 문제: "웹사이트 설명과 GitHub 코드가 따로 논다"

**현재 상황**:
```
Website (Chapter 3): "PRISMA 4단계로 문헌을 수집합니다"
GitHub (README.md): "python 01_fetch_papers.py를 실행하세요"

User: "??? 이 두 개가 어떻게 연결되는 거지?"
```

### 제안: 양방향 Cross-Referencing 시스템

#### A. 웹사이트 → GitHub 링크

**Example: Chapter 4, Stage 1 섹션**
```tsx
<h3 id="stage-1-identification">Stage 1: Identification & Search</h3>

<div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 my-4">
  <div className="flex items-start gap-3">
    <span className="text-2xl">📁</span>
    <div className="flex-1">
      <p className="font-semibold mb-2">실제 코드 위치</p>
      <p className="text-sm mb-3">
        이 단계는 GitHub repository의 다음 파일들로 구현됩니다:
      </p>
      <div className="space-y-2">
        <a
          href="https://github.com/HosungYou/researcherRAG/blob/main/scripts/01_fetch_papers.py"
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <svg className="w-4 h-4">...</svg>
          scripts/01_fetch_papers.py
        </a>
        <a
          href="https://github.com/HosungYou/researcherRAG/blob/main/scripts/02_deduplicate.py"
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <svg className="w-4 h-4">...</svg>
          scripts/02_deduplicate.py
        </a>
      </div>
    </div>
  </div>
</div>

<p>실행 방법:</p>
<CodeBlock
  code={`# 1. PubMed에서 검색
python scripts/01_fetch_papers.py \\
  --database pubmed \\
  --query "(technology OR digital) AND adoption" \\
  --output data/01_identification/pubmed_results.csv

# 결과 확인
cat data/01_identification/pubmed_results.csv | wc -l
# 출력: 450  ← PubMed에서 450개 논문 검색됨`}
  filename="terminal"
/>

<div className="callout callout-info mt-4">
  <p className="font-semibold mb-2">✅ 예상 결과물</p>
  <FileTree structure={[
    { name: 'data/', type: 'folder', children: [
      { name: '01_identification/', type: 'folder', children: [
        {
          name: 'pubmed_results.csv',
          type: 'file',
          description: '450 papers from PubMed',
          highlight: true
        },
        { name: 'scopus_results.csv', type: 'file', description: '380 papers' },
      ]}
    ]}
  ]} />
</div>
```

#### B. GitHub → Website 링크

**Example: GitHub README.md**
```markdown
# ScholaRAG

## Quick Start

### Stage 1: Paper Collection (PRISMA Identification)

Run the following to search databases:

\`\`\`bash
python scripts/01_fetch_papers.py --database pubmed --query "..."
\`\`\`

**📖 Detailed Guide**: See [Chapter 4: Stage 1](https://scholar-rag-helper.vercel.app/guide/04-implementation#stage-1-identification) for:
- Choosing the right databases
- Crafting effective Boolean queries
- Handling API rate limits
- Expected output format

**Expected Output**:
- `data/01_identification/pubmed_results.csv` (450 papers)
- See [File Structure Guide](https://scholar-rag-helper.vercel.app/guide/03-core-concepts#file-structure)
```

---

## 📂 요구사항 3: 프로젝트 기반 폴더 구조 (Project-Based Organization)

### 문제: "여러 연구 프로젝트를 어떻게 관리하나?"

**현재 구조** (1개 프로젝트만 가정):
```
researcherRAG/
├── data/
│   ├── 01_identification/
│   └── 02_screening/
└── chroma_db/
```

❌ **문제점**:
- 새 프로젝트 시작하면 기존 데이터 덮어쓰기
- 프로젝트 간 비교 불가능
- 이전 프로젝트 복구 어려움

### 제안: 날짜와 프로젝트명 기반 구조

#### A. 새로운 폴더 구조
```
researcherRAG/
├── projects/
│   ├── 2025-01-12_AI-Healthcare-Adoption/
│   │   ├── config.yaml                    ← 프로젝트 설정
│   │   ├── README.md                      ← 프로젝트 설명
│   │   ├── data/
│   │   │   ├── 01_identification/
│   │   │   │   ├── pubmed_results.csv      (450 papers)
│   │   │   │   ├── scopus_results.csv      (380 papers)
│   │   │   │   ├── deduplicated.csv        (612 papers)
│   │   │   │   └── search_log.md           ← 검색 전략 기록
│   │   │   ├── 02_screening/
│   │   │   │   ├── title_abstract.csv      (264 passed)
│   │   │   │   ├── excluded.csv            (348 excluded)
│   │   │   │   ├── decisions.json          ← 모든 결정 기록
│   │   │   │   └── screening_session_2025-01-12_14-30.md  ← 세션 로그
│   │   │   ├── 03_full_text/
│   │   │   │   ├── assessment.csv          (142 included)
│   │   │   │   ├── final_dataset.csv       ✅ RAG 입력용
│   │   │   │   └── exclusion_reasons.csv   (122 excluded, with reasons)
│   │   │   └── pdfs/
│   │   │       ├── Smith2023.pdf
│   │   │       └── ... (142 files)
│   │   ├── rag/
│   │   │   ├── chroma_db/                  ← Vector database
│   │   │   ├── rag_config.yaml
│   │   │   └── ingestion_log_2025-01-12_16-45.txt
│   │   ├── outputs/
│   │   │   ├── prisma_flowchart.png
│   │   │   ├── prisma_flowchart.mmd        ← Mermaid source
│   │   │   └── search_strategy.md          ← For Methods section
│   │   └── conversations/                  ← RAG 세션 기록
│   │       ├── 2025-01-12_initial-exploration.md
│   │       ├── 2025-01-13_adoption-barriers.md
│   │       └── 2025-01-14_framework-comparison.md
│   │
│   ├── 2025-01-05_Teacher-Technology-Training/
│   │   └── ... (같은 구조)
│   │
│   └── 2024-12-20_LLM-Education-Apps/
│       └── ... (같은 구조)
│
├── templates/
│   ├── project_template/              ← 새 프로젝트 시작 시 복사
│   ├── config_template.yaml
│   └── README_template.md
│
└── scripts/
    ├── 01_fetch_papers.py
    ├── 02_deduplicate.py
    ├── new_project.py                 ← 새 프로젝트 생성 스크립트
    └── ...
```

#### B. 프로젝트 생성 스크립트

```python
# scripts/new_project.py

import os
from datetime import datetime
import shutil

def create_new_project(project_name: str, research_question: str):
    """
    새 ScholaRAG 프로젝트 생성

    Args:
        project_name: 프로젝트 이름 (예: "AI-Healthcare-Adoption")
        research_question: 연구 질문
    """
    # 1. 날짜 기반 폴더명 생성
    today = datetime.now().strftime("%Y-%m-%d")
    project_folder = f"projects/{today}_{project_name}"

    # 2. 폴더 구조 생성
    folders = [
        f"{project_folder}/data/01_identification",
        f"{project_folder}/data/02_screening",
        f"{project_folder}/data/03_full_text",
        f"{project_folder}/data/pdfs",
        f"{project_folder}/rag",
        f"{project_folder}/outputs",
        f"{project_folder}/conversations",
    ]

    for folder in folders:
        os.makedirs(folder, exist_ok=True)

    # 3. README 생성
    readme_content = f"""# {project_name}

**Created**: {today}
**Research Question**: {research_question}

## Project Overview

This project uses ScholaRAG to conduct a systematic literature review.

### Current Status
- [ ] Stage 1: Identification (Paper search)
- [ ] Stage 2: Screening (Title/abstract review)
- [ ] Stage 3: Full-text assessment
- [ ] Stage 4: RAG system setup
- [ ] Stage 5: Research conversation
- [ ] Stage 6: Documentation

### Key Numbers
- Papers identified: TBD
- Papers screened: TBD
- Papers included: TBD

## File Structure

See [projects/{today}_{project_name}/data/](./data/) for all datasets.

## Next Steps

1. Run paper search:
   \`\`\`bash
   python scripts/01_fetch_papers.py \\
     --project {project_folder} \\
     --database pubmed \\
     --query "YOUR QUERY HERE"
   \`\`\`

2. Review results:
   \`\`\`bash
   cat {project_folder}/data/01_identification/pubmed_results.csv | wc -l
   \`\`\`
"""

    with open(f"{project_folder}/README.md", "w") as f:
        f.write(readme_content)

    # 4. config.yaml 생성
    config_content = f"""# ScholaRAG Project Configuration

project:
  name: "{project_name}"
  created: "{today}"
  research_question: "{research_question}"

databases:
  - pubmed
  - scopus
  - eric

inclusion_criteria:
  year_start: 2010
  year_end: 2024
  study_types:
    - empirical
    - systematic_review
  languages:
    - english

rag:
  vector_db: chromadb
  embeddings: text-embedding-3-small
  llm: claude-3-5-sonnet-20241022
"""

    with open(f"{project_folder}/config.yaml", "w") as f:
        f.write(config_content)

    print(f"✅ 프로젝트 생성 완료: {project_folder}")
    print(f"📂 다음 명령어로 시작하세요:")
    print(f"   cd {project_folder}")
    print(f"   python ../../scripts/01_fetch_papers.py --config config.yaml")

# Usage:
if __name__ == "__main__":
    create_new_project(
        project_name="AI-Healthcare-Adoption",
        research_question="What are the factors influencing AI adoption in healthcare organizations?"
    )
```

#### C. 사용자가 파일 쉽게 리뷰하기

**프로젝트 대시보드 페이지 제안**:
```
https://scholar-rag-helper.vercel.app/dashboard?project=2025-01-12_AI-Healthcare-Adoption
```

표시 내용:
```
┌─────────────────────────────────────────────────────────────┐
│  Project: AI-Healthcare-Adoption                             │
│  Created: 2025-01-12                                         │
│  Status: ⚙️ In Progress (Stage 3 - Full-text review)         │
└─────────────────────────────────────────────────────────────┘

📊 PRISMA Progress

┌─────────────────┬──────────┬──────────────────────────────┐
│ Stage           │ Status   │ Files                        │
├─────────────────┼──────────┼──────────────────────────────┤
│ 1. Identification│ ✅ Done  │ pubmed_results.csv (450)     │
│                 │          │ scopus_results.csv (380)     │
│                 │          │ deduplicated.csv (612)       │
├─────────────────┼──────────┼──────────────────────────────┤
│ 2. Screening    │ ✅ Done  │ title_abstract.csv (264)     │
│                 │          │ excluded.csv (348)           │
├─────────────────┼──────────┼──────────────────────────────┤
│ 3. Full-text    │ ⚙️ Active│ assessment.csv (142)         │
│                 │          │ final_dataset.csv ✅          │
├─────────────────┼──────────┼──────────────────────────────┤
│ 4. RAG Setup    │ ⏳ Pending│ -                           │
└─────────────────┴──────────┴──────────────────────────────┘

📁 Quick File Access

• View included papers: [final_dataset.csv](data/03_full_text/final_dataset.csv)
• Download PRISMA flowchart: [prisma_flowchart.png](outputs/prisma_flowchart.png)
• Review exclusion reasons: [exclusion_reasons.csv](data/03_full_text/exclusion_reasons.csv)

🔎 Data Validation

✅ 142 papers in final_dataset.csv
✅ 142 PDFs downloaded
✅ All DOIs valid
⚠️ 3 PDFs missing (see [missing_pdfs.txt](data/pdfs/missing_pdfs.txt))
```

---

## 🎬 작업 계획

### Phase 1: 개념 문서화 (2-3 hours)
- [ ] Chapter 3에 "PRISMA의 당위성" 섹션 추가
- [ ] References 추가 (PRISMA 2020, AMSTAR 2, Hallucination survey)
- [ ] "일반 RAG vs 연구용 RAG" 비교표 작성

### Phase 2: GitHub-Website 통합 (3-4 hours)
- [ ] GitHub README에 website 링크 추가
- [ ] Website 각 챕터에 GitHub 코드 링크 추가
- [ ] CodeBlock 컴포넌트 전 챕터 적용
- [ ] FileTree 컴포넌트로 예상 결과물 표시

### Phase 3: 프로젝트 기반 구조 구현 (4-5 hours)
- [ ] `new_project.py` 스크립트 작성
- [ ] 프로젝트 템플릿 생성
- [ ] 모든 스크립트에 `--project` 인자 추가
- [ ] 프로젝트 대시보드 페이지 생성 (optional)

### Phase 4: 문서 업데이트 (2-3 hours)
- [ ] Chapter 3: 개념 명확화
- [ ] Chapter 4: 프로젝트 기반 워크플로우
- [ ] All chapters: CodeBlock + FileTree 적용

---

## 💬 토론 질문

1. **프로젝트 대시보드**:
   - Web 기반 대시보드 vs. CLI 도구 (예: `scholarag status`)
   - 우선순위는?

2. **References 추가 위치**:
   - 각 챕터 끝에 "Further Reading" 섹션?
   - 별도 "References" 페이지?

3. **기존 사용자 마이그레이션**:
   - 기존 flat 구조 → 프로젝트 기반 구조 migration 스크립트 필요?

4. **작업 순서**:
   - Option A: 개념 문서화 먼저 → 코드 구조 나중
   - Option B: 코드 구조 먼저 → 문서화 나중
   - 추천: Option A (문서가 코드 설계 가이드 역할)

---

## 다음 단계

이 토론 문서를 검토 후:
1. 우선순위 결정
2. Phase 1부터 순차적 구현
3. 각 Phase 완료 후 피드백

시작할까요? 🚀
