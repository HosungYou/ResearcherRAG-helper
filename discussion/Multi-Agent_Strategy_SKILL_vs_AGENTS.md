# 멀티-에이전트 전략: SKILL.md vs AGENTS.md

**작성일**: 2025-10-23
**목적**: Claude Code와 OpenAI Codex 모두 지원하기 위한 컨텍스트 파일 전략 수립

---

## 🤔 문제 정의

### 현재 상황
- **ScholaRAG**: `SKILL.md` (Codex 전용, 40 lines) + `CLAUDE.md` (Claude 전용, 100 lines)
- **ScholaRAG-helper**: `AGENTS.md` (Codex 전용, 523 lines) + `CLAUDE.md` (Claude 전용, minimal)

### 질문들
1. **SKILL.md는 다른 연구자에게도 필요한가?**
   - → 답: **아니요**, SKILL.md는 AI 에이전트(Claude/Codex)가 읽는 파일입니다
   - 연구자는 **웹사이트 문서**를 읽습니다 (https://www.scholarag.com/guide)

2. **Codex와 Claude 모두 지원하려면?**
   - → 답: **SKILL.md (Claude) + AGENTS.md (Codex) 병행 유지**
   - 하지만 내용 중복을 최소화해야 함

3. **중복 폴더(ResearcherRAG-helper 2) 필요한가?**
   - → 답: **삭제 권장**
   - 메인은 ScholaRAG-helper, 백업은 .backup으로 충분

---

## 📋 전략 1: SKILL.md vs AGENTS.md 역할 분담

### 기본 원칙: DRY (Don't Repeat Yourself)

**문제**: SKILL.md와 AGENTS.md가 같은 정보를 다른 형식으로 중복 저장
**해결**: 역할을 명확히 분리하고, 공통 정보는 한 곳에만 저장

---

### 역할 분담 Matrix

| 파일 | 대상 에이전트 | 주요 역할 | 포함 내용 | 배제 내용 |
|------|--------------|----------|----------|----------|
| **SKILL.md** | Claude Code | Progressive disclosure, Stage-aware workflow | - Quick Start<br/>- Stage 링크 (skills/*.md)<br/>- Critical branching points<br/>- Reference links | - 상세 설명<br/>- 긴 예시 코드<br/>- Troubleshooting (별도 파일)<br/>- 스크립트 (실행 파일로 분리) |
| **AGENTS.md** | OpenAI Codex, GPT-5-Codex | Task-based commands, Executable workflows | - Bash 명령어 체인<br/>- Common workflows<br/>- Error recovery procedures<br/>- Validation checklists | - 긴 개념 설명<br/>- Architecture 이론<br/>- 연구 방법론 설명<br/>- Stage 대화 흐름 |
| **CLAUDE.md** | Claude Code (legacy) | Backward compatibility | - 기존 프로젝트 지원<br/>- SKILL.md로 리다이렉트<br/>- Migration 가이드 | - 새로운 기능<br/>- 상세 문서 (SKILL.md에 위임) |

---

## 📊 전략 2: 계층적 컨텍스트 시스템 (3-Tier)

### Tier 1: 루트 레벨 (Universal Context)

**목적**: 모든 에이전트가 읽는 공통 메타데이터

```
ScholaRAG/
├── SKILL.md (400 lines max)
│   ├── Metadata (name, description)
│   ├── Quick Start (5 min setup)
│   ├── 7-Stage overview (table only)
│   └── Links to skills/*.md
│
├── AGENTS.md (500 lines max)
│   ├── Repository context
│   ├── Task-based workflows
│   ├── Bash command chains
│   └── Validation checklists
│
└── CLAUDE.md (50 lines)
    ├── "This is legacy, see SKILL.md"
    ├── Quick migration guide
    └── Link to skills/ folder
```

**핵심**: 루트 파일은 **인덱스 역할**만 수행, 상세 내용은 하위 폴더에 위임

---

### Tier 2: 도메인별 스킬 폴더 (Domain-Specific Skills)

**목적**: Claude가 progressive disclosure로 로드하는 상세 컨텍스트

```
skills/
├── stage1_research_setup.md (~300 lines)
├── stage2_query_strategy.md (~300 lines)
├── stage3_prisma_config.md (~400 lines)
├── stage4_rag_design.md (~300 lines)
├── stage5_execution.md (~250 lines)
├── stage6_research_conversation.md (~500 lines)
├── stage7_documentation.md (~200 lines)
├── scenarios/
│   ├── overview.md
│   ├── hypothesis.md
│   ├── statistics.md
│   └── ... (7 scenarios)
├── reference/
│   ├── api_reference.md
│   ├── config_schema.md
│   ├── project_type_decision_tree.md
│   └── troubleshooting.md
└── example_conversations/
    ├── stage1_example.md
    ├── stage6_overview_example.md
    └── stage6_hypothesis_example.md
```

**특징**:
- Claude만 읽음 (Codex는 AGENTS.md의 bash 명령어 선호)
- On-demand loading (필요할 때만)
- 500-line limit per file

---

### Tier 3: 실행 가능한 유틸리티 (Executable Scripts)

**목적**: 에이전트가 직접 실행하는 스크립트 (컨텍스트 로드 불필요)

```
scripts/utils/
├── generate_prompt_metadata.py
├── validate_config.py
├── check_stage_completion.py
└── sync_context.py
```

**특징**:
- SKILL.md나 AGENTS.md에서 참조만 함 (전체 코드 포함 안 함)
- Claude/Codex 모두 `python scripts/utils/xxx.py` 형태로 실행
- 결과를 파싱해서 다음 액션 결정

---

## 🔄 전략 3: Codex와 Claude의 워크플로우 차이 대응

### Claude Code 워크플로우 (Conversation-First)

**특징**:
- 연구자와 대화하며 Stage별 진행
- Progressive disclosure (단계별로 skills/*.md 로드)
- Validation 자동 수행 (metadata 기반)

**SKILL.md 구조**:
```markdown
---
name: scholarag
description: PRISMA 2020 systematic review with RAG. Use when researcher needs automated paper retrieval, screening, or research conversation.
---

# Quick Start
[5-minute setup guide]

# 7-Stage Overview
| Stage | Name | Read This | Duration |
|-------|------|-----------|----------|
| 1 | Research Setup | [skills/stage1_research_setup.md](skills/stage1_research_setup.md) | 15-20 min |
| ... | ... | ... | ... |

# Critical Branching Points
- **project_type**: knowledge_repository (50%) vs systematic_review (90%)
- **Stage 6**: 7 scenarios available

# Error Recovery
See [skills/error_recovery.md](skills/error_recovery.md)
```

**토큰 효율**:
- SKILL.md: ~400 lines (로드 1회)
- Current stage file: ~300 lines (단계별 1회)
- **Total per conversation**: ~700 lines (vs 기존 2,000 lines)

---

### OpenAI Codex 워크플로우 (Task-First)

**특징**:
- 사용자가 명확한 Task 제시 (e.g., "Stage 3 완료", "PDF 다운로드")
- Bash 명령어 체인 직접 실행
- Validation은 명령어 종료 코드로 판단

**AGENTS.md 구조**:
```markdown
# AGENTS.md - ScholaRAG

## Task 1: Initialize New Project

**When**: User says "Start new systematic review"

**Steps**:
1. Check prerequisites
   ```bash
   python --version  # >= 3.9
   which git
   ```

2. Initialize project
   ```bash
   cd "/path/to/ScholaRAG"
   python scholarag_cli.py init \
     --name "Project-Name" \
     --question "Research question?" \
     --domain education
   ```

3. Validate creation
   ```bash
   ls projects/YYYY-MM-DD_Project-Name/config.yaml
   # Expected: File exists
   ```

4. Report to user:
   - ✅ Project created at: [path]
   - ✅ config.yaml verified
   - ➡️ Next: Run Task 2 (Query Design)

---

## Task 2: Design and Test Query

**When**: User says "Design search query" or "Stage 2"

**Steps**:
[Similar bash-centric workflow]
```

**차이점**:
| Aspect | Claude (SKILL.md) | Codex (AGENTS.md) |
|--------|-------------------|-------------------|
| 스타일 | Conversation turns, validation rules | Bash commands, exit codes |
| 예시 | "Ask user about project_type" | `python scholarag_cli.py init --name $NAME` |
| 에러 처리 | Metadata validation | `if [ $? -ne 0 ]; then ...` |
| 진행 상황 | `.claude/context.json` | Git commits, file existence checks |

---

## 📝 전략 4: 실제 파일 구조 제안

### ScholaRAG 메인 저장소

```
ScholaRAG/
├── SKILL.md (400 lines) ← Claude Agent Skills 메인 파일
│   ├── Metadata (name: "scholarag", description: ...)
│   ├── Quick Start
│   ├── 7-Stage table with links
│   └── Critical branching points
│
├── AGENTS.md (500 lines) ← Codex 워크플로우
│   ├── Task 1: Initialize Project
│   ├── Task 2: Design Query
│   ├── Task 3: Run PRISMA Screening
│   ├── ... (7 tasks = 7 stages)
│   └── Validation checklists
│
├── CLAUDE.md (50 lines) ← Legacy redirect
│   └── "See SKILL.md for Agent Skills framework"
│
├── skills/ (Claude 전용)
│   ├── stage1_research_setup.md
│   ├── stage2_query_strategy.md
│   ├── ... (7 files)
│   ├── error_recovery.md
│   ├── scenarios/
│   ├── reference/
│   └── example_conversations/
│
└── scripts/
    ├── 01_fetch_papers.py
    ├── 02_deduplicate.py
    ├── ... (실제 실행 스크립트)
    └── utils/
        ├── generate_prompt_metadata.py
        └── validate_config.py
```

### ScholaRAG-helper 문서 저장소

```
ScholaRAG-helper/
├── AGENTS.md (523 lines) ← Codex 전용 (Next.js 프로젝트)
│   ├── Task 1: Content Updates
│   ├── Task 2: Add New Guide Chapter
│   ├── Task 3: Update Search
│   └── Task 4: Troubleshoot Vercel
│
├── CLAUDE.md (50 lines) ← Claude 전용 (최소)
│   ├── "This is documentation website"
│   ├── "For ScholaRAG code, see ../ScholaRAG/"
│   └── "Update guide pages in frontend/app/guide/"
│
├── frontend/
│   ├── CLAUDE.md (100 lines)
│   │   ├── "Next.js 15 project"
│   │   ├── "Update components/SearchBar.tsx when adding content"
│   │   └── "Test with npm run dev before push"
│   │
│   └── AGENTS.md (200 lines)
│       ├── Task 1: Add search index entry
│       ├── Task 2: Update guide chapter
│       └── Task 3: Deploy to Vercel
│
└── discussion/
    ├── ScholaRAG_Refactoring_Plan.md ← 방금 이동한 파일
    └── Multi-Agent_Strategy_SKILL_vs_AGENTS.md ← 이 파일
```

---

## 🎯 전략 5: 내용 중복 최소화 규칙

### 규칙 1: Single Source of Truth (SSOT)

**각 정보는 한 곳에만 저장**:

| 정보 유형 | SSOT 위치 | 참조 방법 |
|----------|-----------|----------|
| 7-Stage 개요 | SKILL.md | AGENTS.md에서 "See SKILL.md for stage overview" |
| project_type decision tree | skills/reference/project_type_decision_tree.md | SKILL.md, AGENTS.md 모두 링크만 |
| API 엔드포인트 | skills/reference/api_reference.md | 직접 복사 금지, 링크만 |
| Bash 명령어 | AGENTS.md | SKILL.md에서 "Run via Codex: see AGENTS.md Task X" |
| 에러 복구 절차 | skills/error_recovery.md | 양쪽 모두 링크 |

### 규칙 2: 형식별 분리

**Claude (SKILL.md)**: 설명 중심
```markdown
## Stage 1: Research Setup

**Goal**: Choose project_type and define research question

**Key decision**: knowledge_repository (50%) vs systematic_review (90%)

**Read decision tree**: [skills/reference/project_type_decision_tree.md](...)
```

**Codex (AGENTS.md)**: 명령 중심
```markdown
## Task 1: Initialize Project

```bash
# Step 1: Ask user for project details
read -p "Project name: " PROJECT_NAME
read -p "Research question: " QUESTION

# Step 2: Initialize
python scholarag_cli.py init \
  --name "$PROJECT_NAME" \
  --question "$QUESTION"

# Step 3: Validate
ls projects/*/config.yaml || echo "ERROR: Initialization failed"
```
```

### 규칙 3: Cross-Reference 명확화

**SKILL.md에서 AGENTS.md 참조 시**:
```markdown
## Executing Stage 5 (Automated Pipeline)

Claude will auto-execute scripts in sequence. If you're using Codex instead:

**Codex users**: See [AGENTS.md Task 5](AGENTS.md#task-5-run-stage-5-pipeline)
for bash-based workflow.
```

**AGENTS.md에서 SKILL.md 참조 시**:
```markdown
## Task 3: Configure PRISMA Criteria

**For conceptual background** on project_type thresholds:
- See [SKILL.md: Critical Branching Points](SKILL.md#critical-branching-points)
- Or [skills/reference/project_type_decision_tree.md](skills/reference/project_type_decision_tree.md)

**Executable steps**:
```bash
# Edit config.yaml
vim config.yaml
# Change line: project_type: systematic_review
```
```

---

## 🔧 전략 6: 실제 구현 예시

### SKILL.md (Claude Agent Skills)

```markdown
---
name: scholarag
description: Build PRISMA 2020-compliant systematic literature review systems with RAG-powered analysis. Use when researcher needs automated paper retrieval (Semantic Scholar, OpenAlex, arXiv), AI-assisted PRISMA screening, vector database creation, or research conversation interface. Supports knowledge_repository (comprehensive, 50% threshold) and systematic_review (publication-quality, 90% threshold) modes.
---

# ScholaRAG: Systematic Review Automation Skill

## Quick Start (5 minutes)

**For researchers**:
1. `python scholarag_cli.py init`
2. Paste Stage 1 prompt from https://www.scholarag.com/guide/01-introduction
3. Answer Claude's questions → Auto-creates project
4. Proceed through 7 stages conversationally

**For AI assistants (Claude Code)**:
- Read HTML metadata from prompts/*.md
- Follow conversation_flow patterns
- Validate using validation_rules
- Auto-execute when auto_execute: true
- Update .claude/context.json

## 7-Stage Workflow

| Stage | File to Read | Duration | Auto-Execute |
|-------|--------------|----------|--------------|
| 1 | [skills/stage1_research_setup.md](skills/stage1_research_setup.md) | 15-20 min | ✅ scholarag init |
| 2 | [skills/stage2_query_strategy.md](skills/stage2_query_strategy.md) | 15-25 min | ❌ Manual |
| 3 | [skills/stage3_prisma_config.md](skills/stage3_prisma_config.md) | 20-30 min | ❌ Manual |
| 4 | [skills/stage4_rag_design.md](skills/stage4_rag_design.md) | 10-15 min | ❌ Manual |
| 5 | [skills/stage5_execution.md](skills/stage5_execution.md) | 2-4 hours | ✅ All scripts |
| 6 | [skills/stage6_research_conversation.md](skills/stage6_research_conversation.md) | Ongoing | ❌ Interactive |
| 7 | [skills/stage7_documentation.md](skills/stage7_documentation.md) | 30-60 min | ✅ PRISMA diagram |

**Progressive disclosure**: Load stage file only when researcher enters that stage.

## Critical Branching Points

### project_type (Stage 1)
- `knowledge_repository`: 50% threshold → 15K-20K papers
- `systematic_review`: 90% threshold → 50-300 papers
- **Decision tree**: [skills/reference/project_type_decision_tree.md](skills/reference/project_type_decision_tree.md)

### Stage 6 Scenarios
7 research conversation modes:
- overview, hypothesis, statistics, methods, contradictions, policy, grant
- **Details**: [skills/stage6_research_conversation.md](skills/stage6_research_conversation.md)

## Error Recovery

**When errors occur**: [skills/error_recovery.md](skills/error_recovery.md)

**Quick fixes**:
- Too many papers: Refine query, re-run Stage 2
- API key missing: Add ANTHROPIC_API_KEY to .env
- Low PDF success: Filter open_access, see error_recovery.md §4.3

## Reference Materials

**API docs**: [skills/reference/api_reference.md](skills/reference/api_reference.md)
**Config schema**: [skills/reference/config_schema.md](skills/reference/config_schema.md)
**PRISMA checklist**: [skills/reference/prisma_guidelines.md](skills/reference/prisma_guidelines.md)
**Architecture**: https://www.scholarag.com/codebook/architecture

---

**For Codex users**: See [AGENTS.md](AGENTS.md) for bash-based task workflows.

**Token optimization**: This file ~400 lines. Stage files ~300 lines (load on-demand). Total per conversation: ~700 lines (65% reduction).
```

---

### AGENTS.md (OpenAI Codex)

```markdown
# AGENTS.md - ScholaRAG

**For**: OpenAI Codex, GPT-5-Codex autonomous agents
**Purpose**: Task-based bash workflows for ScholaRAG systematic review automation

---

## 📋 Repository Context

**Type**: Research automation tool
**Purpose**: PRISMA 2020 systematic review + RAG-powered analysis
**Tech Stack**: Python 3.9+, ChromaDB, Claude API, Semantic Scholar API
**Main CLI**: `scholarag_cli.py`

**For conceptual overview**: See [SKILL.md](SKILL.md) (Claude-optimized)
**For architecture**: https://www.scholarag.com/codebook/architecture

---

## 🎯 Task-Based Workflows

### Task 1: Initialize New Project

**When**: User says "Start new systematic review" or "Initialize ScholaRAG"

**Prerequisites Check**:
```bash
# Verify Python version
python --version | grep -E "3\.(9|10|11|12)"
# Expected: Python 3.9+ detected

# Verify git (for version control)
which git
# Expected: /usr/bin/git or similar

# Verify ScholaRAG repo
ls scholarag_cli.py
# Expected: File exists
```

**Execution**:
```bash
# Step 1: Prompt user for details
read -p "Project name (e.g., AI-Chatbots-Language-Learning): " PROJECT_NAME
read -p "Research question: " QUESTION
read -p "Domain (education/medicine/psychology/custom): " DOMAIN

# Step 2: Initialize project
python scholarag_cli.py init \
  --name "$PROJECT_NAME" \
  --question "$QUESTION" \
  --domain "$DOMAIN"

# Step 3: Validate creation
PROJECT_DIR=$(ls -td projects/* | head -1)
ls "$PROJECT_DIR/config.yaml"
# Expected: config.yaml exists

# Step 4: Check folder structure
ls "$PROJECT_DIR/data/01_identification"
ls "$PROJECT_DIR/data/02_screening"
ls "$PROJECT_DIR/rag/chroma_db"
# Expected: All folders exist
```

**Validation Checklist**:
- [ ] config.yaml created
- [ ] .scholarag metadata file exists
- [ ] data/ folders created (01_identification, 02_screening, pdfs)
- [ ] rag/chroma_db/ folder exists
- [ ] README.md generated

**Report to User**:
```
✅ Project initialized: $PROJECT_DIR
✅ config.yaml verified
➡️ Next Task: Design search query (Task 2)
```

---

### Task 2: Design and Test Search Query

**When**: User says "Design query" or "Stage 2"

**Conceptual Background**: See [SKILL.md: Stage 2](SKILL.md#stage-2-query-strategy)

**Execution**:
```bash
# Step 1: Navigate to project
cd "$PROJECT_DIR"

# Step 2: Show current config
grep "research_question" config.yaml

# Step 3: Help user design query
# (Interactive: Ask user for key concepts)
read -p "Main intervention term (e.g., chatbot): " INTERVENTION
read -p "Main outcome term (e.g., speaking proficiency): " OUTCOME
read -p "Population term (e.g., language learners): " POPULATION

# Step 4: Construct Boolean query
QUERY="($INTERVENTION OR \"conversational agent\") AND ($OUTCOME OR fluency) AND ($POPULATION OR EFL OR ESL)"

# Step 5: Update config.yaml
sed -i '' "s/search_query: \"\"/search_query: \"$QUERY\"/" config.yaml

# Step 6: Validate
grep "search_query" config.yaml
# Expected: search_query: "(chatbot OR ...)"
```

**Test Query** (optional):
```bash
# Preview paper count from Semantic Scholar
python scripts/01_fetch_papers.py --project . --dry-run

# Expected output:
# 🔍 Searching Semantic Scholar (dry run)...
#    Estimated papers: ~3,245
# ✅ Paper count within optimal range (1,000-5,000)
```

**Validation Checklist**:
- [ ] search_query added to config.yaml
- [ ] Query includes intervention, outcome, population terms
- [ ] Dry run shows 1,000-5,000 papers (optimal)
- [ ] User confirms query accuracy

**Report to User**:
```
✅ Query designed: $QUERY
✅ Estimated papers: ~3,245
➡️ Next Task: Configure PRISMA criteria (Task 3)
```

---

### Task 3: Configure PRISMA Criteria

**When**: User says "Configure PRISMA" or "Stage 3"

**Conceptual Background**: [SKILL.md: Critical Branching Points](SKILL.md#critical-branching-points)
**Decision tree**: [skills/reference/project_type_decision_tree.md](skills/reference/project_type_decision_tree.md)

**Execution**:
```bash
# Step 1: Choose project_type
echo "Choose project type:"
echo "  1) knowledge_repository (50% threshold, comprehensive)"
echo "  2) systematic_review (90% threshold, publication-quality)"
read -p "Enter 1 or 2: " CHOICE

if [ "$CHOICE" = "1" ]; then
  PROJECT_TYPE="knowledge_repository"
elif [ "$CHOICE" = "2" ]; then
  PROJECT_TYPE="systematic_review"
else
  echo "Invalid choice"
  exit 1
fi

# Step 2: Update config.yaml
sed -i '' "s/project_type: .*/project_type: $PROJECT_TYPE/" config.yaml

# Step 3: Configure AI PRISMA rubric
cat >> config.yaml << 'EOF'

ai_prisma_rubric:
  criteria:
    - name: "Population"
      description: "University-level EFL learners"
    - name: "Intervention"
      description: "AI chatbot with speech interaction"
    - name: "Outcome"
      description: "Speaking proficiency (fluency + accuracy)"
    - name: "Study Design"
      description: "Empirical studies (RCT, quasi-experimental, pre-post)"

  decision_confidence:
    auto_include: 90  # For systematic_review
    auto_exclude: 10
    human_review_range: [85, 95]
EOF

# Step 4: Validate
python scripts/validate_config.py --project .
# Expected: ✅ config.yaml valid
```

**Validation Checklist**:
- [ ] project_type set (knowledge_repository OR systematic_review)
- [ ] ai_prisma_rubric.criteria defined (4+ criteria)
- [ ] decision_confidence thresholds set
- [ ] config.yaml passes validation

**Report to User**:
```
✅ PRISMA configured: $PROJECT_TYPE mode
✅ Screening threshold: 90%
➡️ Next Task: Design RAG settings (Task 4)
```

---

### Task 4: Design RAG Settings

**When**: User says "Configure RAG" or "Stage 4"

**Execution**:
```bash
# Step 1: Add RAG settings to config.yaml
cat >> config.yaml << 'EOF'

rag_settings:
  vector_db: "chromadb"
  embedding_model: "text-embedding-3-small"  # 1536 dimensions
  llm: "claude-3-5-sonnet-20241022"
  chunk_size: 1000
  chunk_overlap: 200
  retrieval_k: 10
  temperature: 0.3
EOF

# Step 2: Validate API keys
if [ -z "$ANTHROPIC_API_KEY" ]; then
  echo "⚠️ ANTHROPIC_API_KEY not set"
  echo "Add to .env: ANTHROPIC_API_KEY=sk-ant-api03-xxxxx"
  exit 1
fi

# Step 3: Validate config
python scripts/validate_config.py --project .
# Expected: ✅ All settings valid
```

**Validation Checklist**:
- [ ] rag_settings added to config.yaml
- [ ] ANTHROPIC_API_KEY in .env
- [ ] embedding_model valid (OpenAI model name)
- [ ] llm valid (Claude model name)

**Report to User**:
```
✅ RAG settings configured
✅ API keys validated
➡️ Next Task: Execute pipeline (Task 5)
⏱️ Estimated time: 2-4 hours (mostly automated)
```

---

### Task 5: Run Stage 5 Pipeline (Automated)

**When**: User says "Run pipeline" or "Execute all stages"

**Warning**: This task takes 2-4 hours. Run in background or tmux session.

**Execution**:
```bash
# Step 1: Fetch papers from databases
echo "📥 Stage 5.1: Fetching papers..."
python scripts/01_fetch_papers.py --project .
# Expected: data/01_identification/*.csv created

# Step 2: Deduplicate
echo "🔄 Stage 5.2: Deduplicating..."
python scripts/02_deduplicate.py --project .
# Expected: data/01_identification/deduplicated.csv

# Step 3: Screen papers with AI
echo "✅ Stage 5.3: AI-assisted screening..."
python scripts/03_screen_papers.py --project .
# Expected: data/02_screening/relevant.csv

# Step 4: Download PDFs
echo "📄 Stage 5.4: Downloading PDFs..."
python scripts/04_download_pdfs.py --project .
# Expected: data/pdfs/*.pdf (40-60% success rate typical)

# Step 5: Build RAG
echo "🗄️ Stage 5.5: Building vector database..."
python scripts/05_build_rag.py --project .
# Expected: data/chroma/ populated with embeddings

# Step 6: Report statistics
echo ""
echo "📊 Pipeline Complete! Statistics:"
echo "  Papers fetched: $(wc -l < data/01_identification/deduplicated.csv)"
echo "  Papers after screening: $(wc -l < data/02_screening/relevant.csv)"
echo "  PDFs downloaded: $(ls data/pdfs/*.pdf 2>/dev/null | wc -l)"
echo "  RAG database size: $(du -sh data/chroma/ | awk '{print $1}')"
```

**Error Handling**:
```bash
# If any script fails, capture error
if [ $? -ne 0 ]; then
  echo "❌ Pipeline failed at step: $CURRENT_STEP"
  echo "Check logs: data/*/logs/*.txt"
  echo "For troubleshooting: See SKILL.md error_recovery.md"
  exit 1
fi
```

**Validation Checklist**:
- [ ] All 5 scripts executed successfully
- [ ] data/02_screening/relevant.csv has 50-5,000 papers
- [ ] PDFs downloaded (>30% success rate)
- [ ] data/chroma/ exists and non-empty
- [ ] No error messages in logs

**Report to User**:
```
✅ Pipeline executed successfully!
📊 Papers screened: XXX
📄 PDFs downloaded: YYY
🗄️ RAG database ready

➡️ Next Task: Start research conversations (Task 6)
```

---

### Task 6: Query RAG System (Interactive)

**When**: User says "Query RAG" or "Ask questions" or "Stage 6"

**Conceptual Background**: [SKILL.md: Stage 6](SKILL.md#stage-6-research-conversation)
**7 Scenarios**: [skills/stage6_research_conversation.md](skills/stage6_research_conversation.md)

**Execution**:
```bash
# Step 1: Start interactive query interface
python scripts/06_query_rag.py --project .

# User will see:
# 🗄️ RAG database loaded: 234 papers
# 💬 Enter your research query (or 'exit' to quit):
#
# Available scenarios:
#   1. Context Scanning (overview)
#   2. Hypothesis Validation
#   3. Statistical Extraction
#   4. Methodology Comparison
#   5. Contradiction Detection
#   6. Policy Translation
#   7. Future Research Design
#
# Choose scenario (1-7) or enter custom query:
```

**Example Queries** (provide to user):
```
# Scenario 1: Overview
"Summarize the main themes and methodologies in my database"

# Scenario 2: Hypothesis
"My hypothesis: AI chatbots improve speaking fluency more than accuracy.
List evidence for and against."

# Scenario 3: Statistics
"Extract effect sizes (Cohen's d) from all RCT studies measuring speaking proficiency"

# Scenario 4: Methods
"Compare RCT vs quasi-experimental studies: sample sizes, interventions, outcomes"

# Scenario 5: Contradictions
"Find studies with conflicting results on chatbot effectiveness"

# Scenario 6: Policy
"Create 3 policy recommendations for implementing chatbots in university EFL programs"

# Scenario 7: Grant
"Design a follow-up study addressing gaps in current literature"
```

**Validation**: User satisfaction (qualitative)

**Report to User**:
```
💬 RAG system ready for queries
📚 Database: XXX papers
🎯 Choose scenario or ask custom questions

➡️ Next Task (optional): Generate documentation (Task 7)
```

---

### Task 7: Generate PRISMA Diagram

**When**: User says "Generate PRISMA" or "Create flowchart" or "Stage 7"

**Execution**:
```bash
# Step 1: Generate PRISMA flowchart
echo "📊 Generating PRISMA 2020 flowchart..."
python scripts/07_generate_prisma.py --project .

# Expected output:
# ✅ PRISMA flowchart generated:
#    - outputs/prisma_flowchart.png
#    - outputs/prisma_flowchart.mmd (Mermaid source)

# Step 2: Open diagram (macOS)
open outputs/prisma_flowchart.png

# Step 3: Display statistics
cat outputs/prisma_statistics.txt
```

**Validation Checklist**:
- [ ] outputs/prisma_flowchart.png created
- [ ] Diagram title matches project_type (Knowledge Repository vs Systematic Review)
- [ ] Paper counts accurate at each stage
- [ ] Exclusion reasons listed

**Report to User**:
```
✅ PRISMA diagram generated!
📊 View at: outputs/prisma_flowchart.png
📈 Statistics: outputs/prisma_statistics.txt

🎉 All 7 stages complete!
Your systematic review RAG system is ready.
```

---

## 🔍 Validation Checklists

### Global Validation (Any Stage)

```bash
# Check project structure
ls config.yaml .scholarag README.md
ls -d data/01_identification data/02_screening data/pdfs rag/chroma_db outputs

# Check git status
git status
# Expected: No uncommitted changes (if version controlled)

# Check Python environment
python --version
pip list | grep -E "anthropic|chromadb|pandas"
```

### Per-Stage Validation

See Task X sections above for specific checklists.

---

## 🚨 Error Recovery

### Common Errors

**Error 1: `config.yaml not found`**
```bash
# Solution: Re-run Task 1 (Initialize)
python scholarag_cli.py init
```

**Error 2: `ANTHROPIC_API_KEY not set`**
```bash
# Solution: Create .env file
echo "ANTHROPIC_API_KEY=sk-ant-api03-xxxxx" > .env
source .env
```

**Error 3: `Too many papers (>30,000)`**
```bash
# Solution: Refine query (Task 2)
# Edit config.yaml, add more specific terms
vim config.yaml  # Narrow search_query

# Re-run fetch
python scripts/01_fetch_papers.py --project .
```

**Error 4: `Low PDF success (<30%)`**
```bash
# Solution: Filter for open access
# Edit scripts/01_fetch_papers.py, line ~82
# Add: 'openAccessPdf': 'true'

# Re-run download
python scripts/04_download_pdfs.py --project .
```

**For detailed recovery**: [skills/error_recovery.md](skills/error_recovery.md) (Claude-optimized guide)

---

## 📊 Common Workflows

### Workflow 1: Complete 7-Stage Pipeline

```bash
# Run all tasks sequentially
python scholarag_cli.py init && \
python scripts/01_fetch_papers.py --project . && \
python scripts/02_deduplicate.py --project . && \
python scripts/03_screen_papers.py --project . && \
python scripts/04_download_pdfs.py --project . && \
python scripts/05_build_rag.py --project . && \
python scripts/06_query_rag.py --project . && \
python scripts/07_generate_prisma.py --project .
```

### Workflow 2: Rollback and Re-run Stage

```bash
# Example: Re-run Stage 3 (screening) with new threshold
rm -rf data/02_screening/*
vim config.yaml  # Change project_type
python scripts/03_screen_papers.py --project .
```

### Workflow 3: Batch Processing Multiple Projects

```bash
# Initialize 3 projects
for PROJECT in "AI-Healthcare" "AI-Education" "AI-Psychology"; do
  python scholarag_cli.py init \
    --name "$PROJECT" \
    --question "How does AI impact $PROJECT?" \
    --domain custom
done

# Process all projects
for PROJECT_DIR in projects/*; do
  python scripts/01_fetch_papers.py --project "$PROJECT_DIR"
  python scripts/02_deduplicate.py --project "$PROJECT_DIR"
  # ... continue pipeline
done
```

---

## 🔗 External Resources

**For Claude-optimized guides**: [SKILL.md](SKILL.md)
**For architecture**: https://www.scholarag.com/codebook/architecture
**For web documentation**: https://www.scholarag.com/guide
**For API reference**: [skills/reference/api_reference.md](skills/reference/api_reference.md)

---

**Last Updated**: 2025-10-23
**Codex Version**: Compatible with GPT-5-Codex, OpenAI Codex CLI
**ScholaRAG Version**: v1.0.8+
```

---

## 📁 폴더 정리 권장 사항

### 중복 폴더 삭제

```bash
# 1. ResearcherRAG-helper 2 삭제 (불필요한 중복)
rm -rf "/Volumes/External SSD/Projects/Research/ResearcherRAG-helper 2"

# 2. 이미 백업이 있으므로 안전
ls -la "/Volumes/External SSD/Projects/Research/" | grep backup
# ResearcherRAG.backup (2024-10-18)
# ResearcherRAG-helper.backup (2024-10-18)
```

### 최종 구조

```
/Volumes/External SSD/Projects/Research/
├── ScholaRAG/                    ← 메인 코드 저장소
│   ├── SKILL.md                  ← Claude Agent Skills
│   ├── AGENTS.md                 ← Codex 워크플로우
│   ├── CLAUDE.md                 ← Legacy redirect
│   └── skills/                   ← Claude 상세 컨텍스트
│
├── ScholaRAG-helper/             ← 문서 웹사이트
│   ├── AGENTS.md                 ← Codex (Next.js 프로젝트)
│   ├── CLAUDE.md                 ← Claude (최소)
│   ├── discussion/
│   │   ├── ScholaRAG_Refactoring_Plan.md
│   │   └── Multi-Agent_Strategy_SKILL_vs_AGENTS.md
│   └── frontend/
│       ├── CLAUDE.md             ← Frontend 전용
│       └── AGENTS.md             ← Frontend 전용
│
├── ResearcherRAG.backup/         ← 백업 (2024-10-18)
└── ResearcherRAG-helper.backup/  ← 백업 (2024-10-18)
```

---

## ✅ 실행 계획

### Phase 1: 파일 정리 (즉시)

```bash
# 1. 중복 폴더 삭제
rm -rf "/Volumes/External SSD/Projects/Research/ResearcherRAG-helper 2"

# 2. 확인
ls -la "/Volumes/External SSD/Projects/Research/" | grep -i researcher
# 결과: ScholaRAG-helper, *.backup만 존재 ✅
```

### Phase 2: SKILL.md 작성 (1-2 days)

```bash
cd "/Volumes/External SSD/Projects/Research/ScholaRAG"

# 1. 기존 SKILL.md 백업
mv SKILL.md SKILL.md.codex-backup

# 2. 새 SKILL.md 작성 (위 템플릿 사용)
vim SKILL.md
# [위 "SKILL.md (Claude Agent Skills)" 섹션 내용 붙여넣기]

# 3. AGENTS.md 작성
vim AGENTS.md
# [위 "AGENTS.md (OpenAI Codex)" 섹션 내용 붙여넣기]

# 4. CLAUDE.md 간소화
cat > CLAUDE.md << 'EOF'
# ScholaRAG - Legacy Context File

**⚠️ This file is for backward compatibility only.**

For new projects, use:
- **Claude Code**: See [SKILL.md](SKILL.md) (Agent Skills framework)
- **OpenAI Codex**: See [AGENTS.md](AGENTS.md) (Task-based workflows)

## Quick Migration

If you have an existing project using this CLAUDE.md:
1. Your project will continue to work (no breaking changes)
2. Update to SKILL.md for better token efficiency (65% reduction)
3. Read migration guide: [skills/migration_from_claude_md.md](skills/migration_from_claude_md.md)

## What Changed?

- **Before**: All context in CLAUDE.md (100 lines, loaded every conversation)
- **After**: SKILL.md (50 lines) + skills/*.md (300 lines each, loaded on-demand)
- **Benefit**: 65% token reduction, faster responses

For full refactoring plan: [ScholaRAG-helper/discussion/ScholaRAG_Refactoring_Plan.md](../ScholaRAG-helper/discussion/ScholaRAG_Refactoring_Plan.md)
EOF
```

### Phase 3: skills/ 폴더 구축 (1 week)

```bash
# 1. 폴더 생성
mkdir -p skills/scenarios skills/reference skills/example_conversations

# 2. Stage별 파일 작성 (Phase 1 of Refactoring Plan 참조)
vim skills/stage1_research_setup.md
vim skills/stage2_query_strategy.md
# ... (7 files total)

# 3. Reference 문서 작성
vim skills/reference/project_type_decision_tree.md
vim skills/reference/api_reference.md
vim skills/reference/config_schema.md
vim skills/error_recovery.md
```

---

## 🎯 요약

### 질문 답변

1. **SKILL.md는 다른 연구자에게도 필요한가?**
   - **아니요**. SKILL.md는 AI 에이전트(Claude/Codex)가 읽는 파일입니다.
   - 연구자는 웹사이트(https://www.scholarag.com)를 읽습니다.

2. **Codex와 Claude 모두 지원하려면?**
   - **SKILL.md** (Claude) + **AGENTS.md** (Codex) 병행 유지
   - 내용 중복 최소화: SSOT 원칙, cross-reference 활용
   - 역할 분리: SKILL.md = 설명 중심, AGENTS.md = 명령 중심

3. **ResearcherRAG-helper 2 필요한가?**
   - **삭제 권장**
   - 메인: ScholaRAG-helper
   - 백업: .backup 폴더로 충분

### 핵심 전략

| Aspect | Claude (SKILL.md) | Codex (AGENTS.md) |
|--------|-------------------|-------------------|
| 스타일 | Conversation-first, progressive disclosure | Task-first, bash commands |
| 길이 | ~400 lines (메인) + ~300 lines/stage | ~500 lines (all tasks) |
| 구조 | 계층적 (skills/*.md 분리) | 평면적 (한 파일에 모든 task) |
| 로딩 | On-demand (단계별) | Upfront (전체 로드) |
| 에러 처리 | Metadata validation | Exit codes, if-else |
| 예시 | "Ask user about project_type" | `read -p "Choose 1 or 2:" CHOICE` |

### 다음 단계

1. ✅ 중복 폴더 삭제 (즉시)
2. 📝 SKILL.md 작성 (1-2 days, 위 템플릿 사용)
3. 📝 AGENTS.md 작성 (1-2 days, 위 템플릿 사용)
4. 📁 skills/ 폴더 구축 (1 week, Refactoring Plan Phase 1 참조)

---

**문서 버전**: 1.0
**작성일**: 2025-10-23
**작성자**: Claude (Anthropic) + HosungYou
