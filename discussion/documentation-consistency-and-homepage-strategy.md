# Documentation Consistency and Homepage Strategy

**Date**: 2025-10-14
**Context**: Strategic discussion on resolving documentation inconsistencies, homepage structure, and user experience improvements
**Participants**: User, Claude Code
**Status**: Action plan finalized

---

## 📋 Background

### Initial Issues Identified

Based on comprehensive analysis of ResearcherRAG system:

| Issue | Score | Severity | Status |
|-------|-------|----------|--------|
| PRISMA-RAG Integration | 75/100 | ⚠️ Medium | Action planned |
| User Understanding | 65/100 | ⚠️ Medium | Action planned |
| Documentation Consistency | 70/100 | ⚠️ Medium | **Prioritized** |
| Homepage Connectivity | 60/100 | ❌ High | **Prioritized** |

---

## 🎯 Core Problem Analysis

### Problem 1: PRISMA-RAG Integration Unclear (75/100)

**Root Cause**:
- Users don't understand WHY PRISMA comes before RAG
- Value proposition not clear: "Can't I just build RAG without PRISMA?"
- Terminology confusion: "PRISMA + RAG" sounds like two separate systems

**Example User Confusion**:
```
User: "I want to build a RAG system, why do I need PRISMA first?
       PRISMA is a paper selection methodology, RAG is an AI system.
       What's the connection?"

Current docs: Explain WHAT (PRISMA ensures rigor, RAG enables depth)
Missing: Explain WHY and SHOW consequences of skipping PRISMA
```

**Proposed Solution**: Visual comparison on homepage
```markdown
❌ Without PRISMA:
500 papers → RAG database → Mixed quality answers
(includes blog posts, non-peer-reviewed, irrelevant papers)

✅ With PRISMA:
500 papers → PRISMA screening → 75 high-quality papers → RAG database → High-quality answers
(peer-reviewed, relevant, methodologically sound)
```

---

### Problem 2: Stage Number Inconsistency (User Understanding 65/100)

**Current State**:
- Homepage (ResearcherRAG-helper): **5 stages**
- Implementation (ResearcherRAG): **7 stages**
- Prompt files: **7 files** (01-07.md)

**User Confusion Scenario**:
```
User: "Homepage says 5 stages, but I see 7 prompt files. Which is correct?"
Current docs: No explanation of mapping
```

**Mapping Table** (needed but missing):
| Homepage (User-Facing) | Prompts (Technical) | Scripts | Duration |
|----------------------|-------------------|---------|----------|
| **Stage 1: Planning** | 01_research_domain_setup.md | - | 15-20 min |
|                      | 02_query_strategy.md | - | 20-30 min |
| **Stage 2: PRISMA Setup** | 03_prisma_configuration.md | - | 25-35 min |
| **Stage 3: RAG Design** | 04_rag_design.md | - | 20-30 min |
| **Stage 4: Execution** | 05_execution_plan.md | 01-05.py | 2-4 hours |
| **Stage 5: Analysis** | 06_research_conversation.md | 06.py | Ongoing |
| **(Optional) Documentation** | 07_documentation_writing.md | 07.py | 30-60 min |

---

### Problem 3: Documentation Consistency (70/100)

**Terminology Inconsistencies Found**:

| Concept | README.md | CLAUDE.md | Prompts | Scripts |
|---------|-----------|-----------|---------|---------|
| Stage 3 | "PRISMA Configuration" | "PRISMA Configuration" | "03_prisma_configuration.md" | "03_screen_papers.py" |
| **Issue** | Configuration ≠ Screening (execution) |
| Stage 4 | "Execution" | "RAG Design" | "04_rag_design.md" | "04_download_pdfs.py" |
| **Issue** | Stage 4 is RAG Design, not Execution |
| Vector DB | "Custom Vector Database" | "ChromaDB" | "RAG system" | "Build RAG System" |
| **Issue** | Same thing, different names |

**Root Cause**: No standard glossary → Each document uses different terms

---

### Problem 4: Homepage Connectivity (60/100)

**404 Errors Found**:
1. `/guide/02-getting-started` → 404
2. "Documentation" link → Non-existent pages
3. Homepage doesn't link to prompts folder

**Root Cause**:
- ResearcherRAG-helper (Vercel site) and ResearcherRAG (GitHub repo) are disconnected
- Next.js site has "Coming Soon" placeholders that were never built
- No clear navigation from homepage → prompts → scripts → outputs

---

## 💡 User's Strategic Direction

### Decision 1: Keep "ResearcherRAG" Name

**Rationale** (from user):
> "Researcher라는 언어가 주는 강력한 의미가 있기 때문에 남겨놓을거야."

**Action**: Keep name, improve PRISMA-RAG integration explanation on homepage

---

### Decision 2: Homepage vs Code Have Different Roles

**User's Insight**:
> "stage 번호 불일치는 홈페이지와 프롬프트 코드의 역할이 다르기 때문이야.
> 홈페이지는 프롬프트 혹은 스크립트 코드의 진행을 연구자들에게 쉽게 설명하기 위해 필요한 것이지."

**Key Understanding**:
- **Homepage**: User-friendly presentation (5 stages, simplified)
- **Prompts/Scripts**: Technical implementation (7 stages, accurate)
- **Solution**: Create EXPLICIT MAPPING on homepage

**Homepage Must Answer**:
1. ✅ "What happens in each stage?" (clear explanation)
2. ✅ "When do I use prompts vs scripts?" (explicit guidance)
3. ✅ "What outputs should I expect?" (concrete examples)
4. ✅ "How do stages connect?" (flow visualization)

---

### Decision 3: Documentation Structure

**User's Vision**:
```
Documentation/
├── Overview
├── Glossary ← NEW (searchable)
├── Getting Started
├── Stages (1-5)
└── Reference
```

**Inspiration**: https://docs.openalex.org/
- Clean, searchable
- Clear hierarchy
- Explicit API references
- Visual examples

**Required Features**:
1. **Glossary** with search functionality
2. **Visual flow diagrams** (PRISMA → RAG)
3. **Expected outputs** for each stage
4. **Explicit prompt/script mapping**

---

### Decision 4: Migrate to GitHub Pages

**Rationale**:
- Single source of truth (code + docs in same repo)
- No 404 errors (files exist or don't)
- Version control with Git
- Free hosting

**Migration Plan**:
```
ResearcherRAG/
├── docs/                    # GitHub Pages source
│   ├── index.md            # Homepage
│   ├── overview.md
│   ├── glossary.md         # NEW
│   ├── getting-started.md
│   ├── stages/
│   │   ├── 01-planning.md
│   │   ├── 02-prisma.md
│   │   ├── 03-rag-design.md
│   │   ├── 04-execution.md
│   │   ├── 05-analysis.md
│   │   └── optional-documentation.md
│   ├── reference/
│   │   ├── prompts.md
│   │   ├── scripts.md
│   │   └── outputs.md
│   └── _config.yml         # Jekyll configuration
```

---

## 📊 Action Plan

### Phase 1: Review & Gap Analysis ✅ (Current)

**Tasks**:
1. ✅ Review homepage content for knowledge gaps
2. ✅ Identify terminology inconsistencies
3. ✅ Map 5-stage (homepage) ↔ 7-stage (prompts) relationship
4. ✅ Identify missing connections (prompts → scripts → outputs)

**Deliverables**:
- This discussion document
- Gap analysis report

---

### Phase 2: Create Glossary (Next)

**Tasks**:
1. Create `docs/glossary.md` with standardized terms
2. Add search functionality (Jekyll search plugin)
3. Cross-reference all documentation

**Glossary Structure**:
```markdown
# Glossary

## Stages
- **Stage 1 (Planning)**: Maps to prompts 01-02...
- **Stage 2 (PRISMA Setup)**: Maps to prompt 03...

## Components
- **Vector Database**: ChromaDB implementation storing paper embeddings
- **RAG System**: Complete system = Vector DB + Retrieval + LLM
- **PRISMA Screening**: Applying criteria (execution), NOT configuration

## Processes
- **Configure**: Set up criteria/settings (Stages 1-3)
- **Execute**: Run automated scripts (Stage 4)
- **Query**: Ask RAG questions (Stage 5)
```

---

### Phase 3: Homepage Content Improvement

**Critical Additions Needed**:

#### 3.1 Visual PRISMA-RAG Flow
```markdown
## Why PRISMA + RAG?

[Visual diagram]

Step 1: PRISMA Screening
500 papers identified
  ↓ Apply 6-dimension criteria
75 high-quality papers selected
  ↓ Only peer-reviewed, relevant, methodologically sound

Step 2: RAG Analysis
75 selected papers → Vector database
  ↓ Semantic search
Your question → Citation-backed answer from vetted papers
```

#### 3.2 Stage Mapping Table
```markdown
## The 5-Stage Workflow

| User Stage | What You Do | Behind the Scenes | Expected Output |
|------------|-------------|-------------------|-----------------|
| **1. Planning** | Define research question, design query | Prompts 01-02 guide you | config.yaml created |
| **2. PRISMA Setup** | Configure screening criteria | Prompt 03 guides criteria | PRISMA profile saved |
| **3. RAG Design** | Design vector database | Prompt 04 guides architecture | RAG config saved |
| **4. Execution** | Click "Execute" | Prompts 05 runs scripts 01-05 | Papers fetched, screened, RAG built |
| **5. Analysis** | Ask questions | Prompt 06 launches RAG interface | Answers with citations |
```

#### 3.3 Explicit Prompt/Script Connections
```markdown
## Stage 4: Execution (What Actually Happens)

When you complete Stage 4 conversation, Claude Code automatically runs:

1. **01_fetch_papers.py** (10-30 min)
   - Queries Semantic Scholar, OpenAlex, arXiv
   - **Expected output**: 100-5000 papers in `data/01_identification/`

2. **02_deduplicate.py** (1-5 min)
   - Removes duplicates by DOI/title
   - **Expected output**: ~20-40% reduction, `deduplicated.csv` created

3. **03_screen_papers.py** (5-20 min)
   - Applies your PRISMA criteria
   - **Expected output**: 15-40% pass rate, `relevant_papers.csv` created

4. **04_download_pdfs.py** (1-3 hours)
   - Downloads PDFs for screened papers
   - **Expected output**: 30-80% success rate, PDFs in `data/03_pdfs/`

5. **05_build_rag.py** (10-30 min)
   - Builds vector database from PDFs
   - **Expected output**: ChromaDB created in `data/04_rag/`
```

---

### Phase 4: Migrate to GitHub Pages

**Setup**:
```yaml
# docs/_config.yml
theme: jekyll-theme-minimal
title: ResearcherRAG Documentation
description: PRISMA 2020 + RAG for systematic literature reviews
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-search  # Search functionality
```

**Navigation**:
```yaml
# docs/_data/navigation.yml
main:
  - title: "Overview"
    url: /overview/
  - title: "Glossary"
    url: /glossary/
  - title: "Getting Started"
    url: /getting-started/
  - title: "5-Stage Workflow"
    children:
      - title: "Stage 1: Planning"
        url: /stages/01-planning/
      - title: "Stage 2: PRISMA Setup"
        url: /stages/02-prisma/
      - title: "Stage 3: RAG Design"
        url: /stages/03-rag-design/
      - title: "Stage 4: Execution"
        url: /stages/04-execution/
      - title: "Stage 5: Analysis"
        url: /stages/05-analysis/
  - title: "Reference"
    children:
      - title: "Prompts"
        url: /reference/prompts/
      - title: "Scripts"
        url: /reference/scripts/
      - title: "Outputs"
        url: /reference/outputs/
```

---

### Phase 5: Ensure Consistency

**Checklist**:
- [ ] All documents use glossary terms
- [ ] Stage numbers explicitly mapped (5 ↔ 7)
- [ ] Every homepage stage links to relevant prompts
- [ ] Expected outputs documented for each stage
- [ ] No 404 links
- [ ] Search functionality works

---

## 🎨 OpenAlex-Inspired Design Elements

### 1. Clean Navigation
```
[Logo] ResearcherRAG

Overview | Glossary | Getting Started | Stages | Reference | Search 🔍
```

### 2. Visual API-Style Documentation
```markdown
## Stage 4: Execution

**Endpoint**: `python scripts/05_build_rag.py --project <path>`

**Parameters**:
- `--project` (required): Path to project folder
- `--chunk-size` (optional): Default 1000

**Request**:
```bash
python scripts/05_build_rag.py --project examples/ai-chatbots-language-learning
```

**Response**:
```json
{
  "status": "success",
  "total_papers": 45,
  "total_chunks": 1350,
  "embedding_model": "sentence-transformers/all-MiniLM-L6-v2"
}
```

**Expected Output Files**:
- `data/04_rag/chroma_db/` (vector database)
- `data/04_rag/rag_config.json` (configuration)
```

### 3. Searchable Glossary
```markdown
# Glossary

[Search box: "Type to search..."]

---

### PRISMA 2020
Preferred Reporting Items for Systematic Reviews and Meta-Analyses.
A methodology for conducting transparent, rigorous literature reviews.

**Used in**: Stages 1-4
**Related**: Screening, PRISMA Flowchart
**Learn more**: [PRISMA Stage →](/stages/02-prisma/)

---

### RAG (Retrieval-Augmented Generation)
AI system that retrieves relevant document chunks and uses LLM to generate answers.

**Used in**: Stages 3-5
**Components**: Vector Database, Embeddings, LLM
**Related**: ChromaDB, Semantic Search
**Learn more**: [RAG Design Stage →](/stages/03-rag-design/)
```

---

## 📈 Success Metrics

**Documentation should achieve**:
1. ✅ No 404 errors
2. ✅ 100% stage coverage (all 5 stages documented)
3. ✅ Explicit prompt/script/output mapping
4. ✅ Searchable glossary
5. ✅ Clear PRISMA-RAG value proposition

**User should be able to**:
1. ✅ Understand WHY PRISMA comes before RAG
2. ✅ Know WHEN to use prompts vs scripts
3. ✅ Predict WHAT outputs to expect at each stage
4. ✅ Navigate from homepage → prompts → scripts seamlessly
5. ✅ Search for any term and find clear definition

---

## 🔄 Next Steps

### Immediate (This Session)
1. ✅ Save this discussion to `ResearcherRAG-helper/discussion/`
2. Create glossary.md
3. Review ResearcherRAG-helper homepage content
4. Identify specific knowledge gaps

### This Week
1. Set up GitHub Pages structure
2. Migrate homepage content
3. Add search functionality
4. Create visual flow diagrams

### Next Week
1. User testing (5 researchers)
2. Iterate based on feedback
3. Update all cross-references

---

## 💬 Key Takeaways

### User's Core Insight
> "홈페이지는 프롬프트 혹은 스크립트 코드의 진행을 연구자들에게 쉽게 설명하기 위해 필요한 것이지."

**Translation**: Homepage exists to explain prompts/scripts to researchers in user-friendly way.

**Implication**:
- 5 stages (homepage) = Simplified presentation for users
- 7 stages (prompts) = Technical accuracy for execution
- **Both are correct** - serve different purposes
- **Must be explicitly mapped** to avoid confusion

### Design Philosophy
- **Consistency** > Duplication (one source of truth)
- **Clarity** > Completeness (explain well, not exhaustively)
- **User-friendly** > Technically accurate (for homepage)
- **Searchable** > Organized (glossary is key)

### Inspiration
- OpenAlex docs: Clean, searchable, API-style
- GitHub Pages: Version controlled, no 404s
- Jekyll: Simple, powerful, free

---

**Status**: Ready to execute
**Next Action**: Create glossary and begin GitHub Pages migration
**Timeline**: Complete within 1 week

---

**Last Updated**: 2025-10-14
**Document Type**: Strategic Discussion & Action Plan
**Related Files**:
- ResearcherRAG-helper/discussion/multi-tool-context-architecture.md
- ResearcherRAG-helper/discussion/prompt-script-integration-plan.md
