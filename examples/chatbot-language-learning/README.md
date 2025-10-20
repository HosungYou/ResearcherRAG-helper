# Example Project: AI Chatbots for Language Learning

This is a complete example of a ScholaRAG project following the 7-stage workflow. It demonstrates how to conduct a systematic literature review on "How AI chatbots improve speaking proficiency in university-level language learners."

## Project Overview

- **Research Question**: "Do AI chatbots improve speaking proficiency in university-level language learners?"
- **Research Domain**: Education (Language Learning)
- **Target Papers**: 60-80 papers
- **Year Range**: 2015-2024
- **Databases Used**: Semantic Scholar, OpenAlex, arXiv

## 7-Stage Workflow Demonstrated

### Stage 1: Research Domain Setup (15 min)
**Location**: `stage1_research_domain/`

**Outputs**:
- `config.yaml` - Project configuration
- `research_scope.md` - Documented research scope and objectives

**Key Decisions**:
- Scope limited to university-level students (excluding K-12, children)
- Focus on **speaking** proficiency (not reading/writing/listening)
- AI chatbots only (excluding other technologies like VR, apps without conversational AI)
- Year range: 2015-2024 (post-modern NLP era)

---

### Stage 2: Query Strategy Design (10 min)
**Location**: `stage2_query_strategy/`

**Outputs**:
- `query_design.md` - Boolean queries for each database
- `synonym_analysis.md` - Core concepts and their synonyms

**Query Examples**:

**Semantic Scholar**:
```
(chatbot OR "conversational agent" OR "dialogue system") AND
("language learning" OR "second language" OR L2 OR ESL) AND
(speaking OR oral OR pronunciation OR fluency) AND
(university OR college OR "higher education")
```

**OpenAlex**:
```
title.search:(chatbot OR agent) AND
abstract.search:("language learning" AND speaking)
```

**arXiv**:
```
all:(chatbot AND "language learning" AND speaking)
```

---

### Stage 3: PRISMA Configuration (20 min)
**Location**: `stage3_prisma_config/`

**Outputs**:
- `inclusion_criteria.md` - What papers to include
- `exclusion_criteria.md` - What papers to exclude
- `screening_config.yaml` - AI screening configuration

**Inclusion Criteria**:
- ✅ Empirical studies (quantitative or qualitative data)
- ✅ University-level students (ages 18+)
- ✅ AI chatbot as primary intervention
- ✅ Speaking proficiency as measured outcome
- ✅ Published 2015-2024
- ✅ Full text available in English

**Exclusion Criteria**:
- ❌ Review papers, editorials, opinion pieces
- ❌ K-12 or children studies
- ❌ Non-chatbot technologies (apps, VR, games without conversational AI)
- ❌ No speaking outcome measures
- ❌ Conference abstracts without full papers

---

### Stage 4: RAG System Design (15 min)
**Location**: `stage4_rag_design/`

**Outputs**:
- `rag_config.yaml` - RAG system configuration
- `embedding_strategy.md` - Embedding model choice and rationale

**Configuration Decisions**:
- **Vector Database**: ChromaDB (sufficient for expected ~70 papers)
- **Embedding Model**: text-embedding-3-small (cost-effective, good quality)
- **Chunking Strategy**: 500 tokens, 50 overlap
- **Retrieval**: top-5 chunks, threshold 0.7
- **LLM**: Claude 3.5 Sonnet (reasoning + citations)

**Cost Estimate**:
- Embeddings: ~$2.50 (70 papers × 20 pages × 500 words)
- Queries: ~$0.50 (20-30 research queries)
- **Total**: < $5

---

### Stage 5: Execution Plan (10 min)
**Location**: `stage5_execution_plan/`

**Outputs**:
- `execution_checklist.md` - Pre-flight validation checklist
- `pipeline_sequence.md` - Order of script execution

**Validation Steps**:
1. ✅ All 3 database APIs accessible (no auth errors)
2. ✅ PRISMA criteria finalized and saved
3. ✅ RAG config valid (embeddings, chunk size, retrieval settings)
4. ✅ Disk space available (5GB for PDFs + vector DB)
5. ✅ API keys set (ANTHROPIC_API_KEY for screening)

**Pipeline Sequence**:
```
01_fetch_papers.py     → Fetch from Semantic Scholar, OpenAlex, arXiv
02_deduplicate.py      → Remove duplicates by DOI, title
03_screen_papers.py    → AI-assisted PRISMA screening
04_download_pdfs.py    → Download open access PDFs
05_build_rag.py        → Create vector database
06_query_rag.py        → Interactive research queries
07_generate_prisma.py  → Generate PRISMA diagram
```

---

### Stage 6: Research Conversation (2-3 hrs automated)
**Location**: `stage6_research_queries/`

**Outputs**:
- `data/` - All fetched, screened, and deduplicated papers
  - `01_identification/` - Raw search results (347 papers)
  - `02_screening/` - Screened papers (78 passed)
  - `03_full_text/` - Final dataset (43 papers with PDFs)
  - `pdfs/` - Downloaded PDF files
- `rag/chroma_db/` - Vector database (487 chunks from 43 papers)
- `conversations/` - Research query logs with citations
- `screening_log.csv` - PRISMA screening decisions

**Example Research Queries**:
1. "What are the most effective chatbot features for improving speaking fluency?"
2. "How do learners perceive AI chatbots compared to human conversation partners?"
3. "What assessment methods are used to measure speaking improvement?"
4. "Are there differences in effectiveness across language proficiency levels?"

**Results Summary**:
- **Papers fetched**: 347 (Semantic Scholar: 180, OpenAlex: 145, arXiv: 22)
- **After deduplication**: 289 unique papers
- **After AI screening**: 78 papers passed inclusion criteria
- **PDFs downloaded**: 43 papers (55% success rate)
- **Vector database**: 487 chunks indexed
- **Execution time**: 2.5 hours (fully automated)

---

### Stage 7: Documentation Writing (1 hr)
**Location**: `stage7_documentation/`

**Outputs**:
- `prisma_diagram.png` - PRISMA 2020 flow chart (347 → 43 papers)
- `search_strategy.md` - Complete search strategy documentation
- `references.bib` - BibTeX file with all 43 papers
- `research_summary.md` - Key findings and themes
- `methods_section.md` - Draft methods section for publication

**PRISMA Diagram Shows**:
- **Identification**: 347 records identified (180 + 145 + 22)
- **Screening**: 289 after duplicates removed
- **Eligibility**: 78 after title/abstract screening
- **Included**: 43 studies in synthesis

**Key Findings** (from RAG queries):
1. **Effective Features**: Real-time feedback, personalized practice, anxiety reduction
2. **Learner Perceptions**: Positive for practice, prefer human for complex conversations
3. **Assessment Methods**: Pre-post tests, fluency metrics, pronunciation accuracy
4. **Proficiency Differences**: More effective for intermediate learners (A2-B1)

---

## File Structure

```
chatbot-language-learning/
├── README.md                          (this file)
├── config.yaml                        (project configuration)
├── stage1_research_domain/
│   ├── research_scope.md
│   └── feasibility_notes.md
├── stage2_query_strategy/
│   ├── query_design.md
│   └── synonym_analysis.md
├── stage3_prisma_config/
│   ├── inclusion_criteria.md
│   ├── exclusion_criteria.md
│   └── screening_config.yaml
├── stage4_rag_design/
│   ├── rag_config.yaml
│   └── embedding_strategy.md
├── stage5_execution_plan/
│   ├── execution_checklist.md
│   └── pipeline_sequence.md
├── stage6_research_queries/
│   ├── data/
│   │   ├── 01_identification/        (347 papers)
│   │   ├── 02_screening/             (78 papers)
│   │   ├── 03_full_text/             (43 papers)
│   │   └── pdfs/                     (43 PDFs)
│   ├── rag/
│   │   └── chroma_db/                (vector database)
│   ├── conversations/
│   │   ├── query_001_effective_features.md
│   │   ├── query_002_learner_perceptions.md
│   │   └── query_003_assessment_methods.md
│   └── screening_log.csv
└── stage7_documentation/
    ├── prisma_diagram.png
    ├── search_strategy.md
    ├── references.bib
    ├── research_summary.md
    └── methods_section.md
```

---

## How to Use This Example

### Option 1: Study the Structure
Browse the files to understand the complete workflow and what outputs each stage produces.

### Option 2: Replicate the Project
1. Clone ScholaRAG repository
2. Copy `config.yaml` to your project
3. Modify research question and criteria for your domain
4. Follow the 7-stage workflow

### Option 3: Use as Template
```bash
# Copy example structure
cp -r examples/chatbot-language-learning my-research-project
cd my-research-project

# Update config.yaml with your research question
# Run through stages 1-7
```

---

## Timeline

This example project took **4.5 hours total**:
- **Stage 1**: 15 min (interactive conversation with Claude)
- **Stage 2**: 10 min (query design)
- **Stage 3**: 20 min (PRISMA criteria setup)
- **Stage 4**: 15 min (RAG configuration)
- **Stage 5**: 10 min (validation)
- **Stage 6**: 2.5 hrs (automated execution - no human intervention)
- **Stage 7**: 1 hr (documentation generation)

**Compare to traditional manual review**: 2-3 weeks

---

## Cost Breakdown

- **Semantic Scholar API**: Free
- **OpenAlex API**: Free
- **arXiv API**: Free
- **Embeddings** (text-embedding-3-small): $2.50
- **AI Screening** (Claude 3.5): $1.20
- **Research Queries** (Claude 3.5): $0.80
- **Total**: **$4.50**

**Compare to manual screening**: 40-60 hours of researcher time

---

## Key Learnings

### What Worked Well
✅ **Database Strategy**: Semantic Scholar + OpenAlex + arXiv provided good coverage for this interdisciplinary topic (education + AI)
✅ **AI Screening**: 92% agreement with human screening decisions (validated on 20-paper sample)
✅ **Query Refinement**: Started with 500+ papers estimate, refined to 347 actual, perfect for PRISMA workflow
✅ **PDF Access**: 55% success rate was sufficient for comprehensive review

### Challenges Encountered
⚠️ **Terminology Variance**: "Chatbot" vs "conversational agent" vs "dialogue system" - required careful synonym analysis
⚠️ **PDF Availability**: Some highly-cited papers locked behind paywalls - required manual author contact (not included in automation)
⚠️ **arXiv Coverage**: Only 22 papers from arXiv (mostly recent 2022-2024) - education research less common on arXiv

### Recommendations
1. **Start Broad**: Initial query should be slightly broader than needed - easier to narrow during screening
2. **Validate AI Screening**: Always manually check 10-20 papers to ensure AI screening is accurate
3. **Multiple Databases**: Using 3 databases increased coverage by ~40% vs single database
4. **Budget Extra Time**: Stage 6 (execution) can take longer if many PDFs need OCR

---

## Reproducibility

All files in this example are sufficient to replicate the study:
- `config.yaml` contains all settings
- `search_strategy.md` documents exact queries
- `screening_log.csv` shows all inclusion/exclusion decisions
- `prisma_diagram.png` visualizes the full process

**To replicate**:
```bash
git clone https://github.com/HosungYou/ScholaRAG.git
cd ScholaRAG
cp examples/chatbot-language-learning/config.yaml config.yaml
python scholarag_cli.py run-all
```

---

## Citation

If you use this example project structure, please cite:

```bibtex
@software{scholarag2024,
  title={ScholaRAG: AI-Powered Systematic Literature Review},
  author={You, Hosung},
  year={2024},
  url={https://github.com/HosungYou/ScholaRAG}
}
```

---

## Questions?

- **Documentation**: https://scholar-rag-helper.vercel.app/guide
- **Issues**: https://github.com/HosungYou/ScholaRAG/issues
- **Discussions**: https://github.com/HosungYou/ScholaRAG/discussions
