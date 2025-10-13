# PRISMA → RAG: Practical Workflow

## Understanding the Relationship

**PRISMA and RAG are NOT the same thing**. They are sequential stages:

```
┌─────────────────────────────────────────────────────────────┐
│  Stage 1-3: PRISMA Screening (Literature Collection)        │
│  ↓                                                           │
│  INPUT:  Research question + database queries               │
│  OUTPUT: data/final_dataset.csv (142 papers)                │
│          data/pdfs/ (142 PDF files)                         │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  Stage 4: RAG System Design (Vector Database Creation)      │
│  ↓                                                           │
│  INPUT:  data/pdfs/ + rag_config.yaml                       │
│  OUTPUT: chroma_db/ (vector database)                       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  Stage 5-6: Research Conversation (Q&A System)              │
│  ↓                                                           │
│  INPUT:  Your questions                                     │
│  OUTPUT: Answers with paper citations                       │
└─────────────────────────────────────────────────────────────┘
```

---

## Practical Example: After Completing PRISMA

Let's say you've just finished Stage 3 (PRISMA Configuration) using the prompt. Here's what you'll have:

### Your Project Folder Structure

```
researcherRAG/
├── data/
│   ├── 01_identification/
│   │   ├── pubmed_results.csv           ← 450 papers from PubMed
│   │   ├── scopus_results.csv           ← 380 papers from Scopus
│   │   ├── eric_results.csv             ← 320 papers from ERIC
│   │   └── deduplicated.csv             ← 612 unique papers (188 duplicates removed)
│   │
│   ├── 02_screening/
│   │   ├── title_abstract_screening.csv ← 264 papers passed abstract screening
│   │   ├── excluded_reasons.csv         ← 348 excluded (with reasons)
│   │   └── screening_log.md             ← Decision log for reproducibility
│   │
│   ├── 03_full_text/
│   │   ├── full_text_assessment.csv     ← 142 papers included after full-text review
│   │   ├── final_dataset.csv            ← ✅ THIS IS YOUR RAG INPUT
│   │   └── exclusion_reasons.csv        ← 122 excluded at full-text stage
│   │
│   └── pdfs/
│       ├── Smith2023_TechnologyAdoption.pdf
│       ├── Johnson2022_AIResistance.pdf
│       └── ... (142 PDF files total)
│
├── outputs/
│   ├── prisma_flowchart.png             ← Visual flowchart of your screening
│   └── search_strategy.md               ← Documentation for Methods section
│
└── README.md
```

### How to Verify Your PRISMA Results

**1. Check paper counts:**
```bash
# Count papers at each stage
wc -l data/01_identification/deduplicated.csv
# Output: 612

wc -l data/02_screening/title_abstract_screening.csv
# Output: 264

wc -l data/03_full_text/final_dataset.csv
# Output: 142  ✅ This is your final count
```

**2. View your final dataset:**
```bash
# See first 10 papers in your final dataset
head -10 data/03_full_text/final_dataset.csv
```

**Example output:**
```csv
title,authors,year,doi,database,inclusion_reason
"Technology adoption in healthcare...",Smith et al.,2023,10.1234/abc,PubMed,"Meets all criteria"
"AI resistance among teachers...",Johnson & Lee,2022,10.5678/def,Scopus,"Primary study on adoption"
...
```

**3. Verify PDFs are downloaded:**
```bash
# Count PDF files
ls data/pdfs/*.pdf | wc -l
# Output: 142  ✅ Should match final_dataset.csv count
```

**4. Review your PRISMA flowchart:**
```bash
# Open the flowchart
open outputs/prisma_flowchart.png
```

You should see numbers like:
```
Records identified (n=1,150)
  ↓ Duplicates removed (n=188)
Records screened (n=612)
  ↓ Title/abstract excluded (n=348)
Full-text assessed (n=264)
  ↓ Full-text excluded (n=122)
Final included (n=142) ✅
```

---

## Bridging PRISMA → RAG

Now that you have:
- ✅ `data/03_full_text/final_dataset.csv` (142 papers)
- ✅ `data/pdfs/` (142 PDF files)

You're ready for **Stage 4: RAG System Design**.

### What Happens in Stage 4?

1. **Create `rag_config.yaml`:**
```yaml
# rag_config.yaml
vector_db:
  type: "chromadb"
  persist_directory: "./chroma_db"

embeddings:
  model: "text-embedding-3-small"
  provider: "openai"

chunking:
  strategy: "recursive"
  chunk_size: 500
  chunk_overlap: 50

llm:
  model: "claude-3-5-sonnet-20241022"
  provider: "anthropic"
```

2. **Run RAG ingestion:**
```bash
python scripts/ingest_papers.py \
  --input data/pdfs/ \
  --config rag_config.yaml \
  --output chroma_db/
```

**Output:**
```
📂 Reading 142 PDFs from data/pdfs/...
✅ Processed 142/142 papers
📊 Generated 3,487 chunks
💾 Stored in chroma_db/
⏱️  Completed in 4 min 32 sec
```

3. **Your NEW folder structure:**
```
researcherRAG/
├── chroma_db/               ← ✅ NEW: Vector database created
│   ├── chroma.sqlite3
│   └── embeddings/
├── data/                    ← Your PRISMA results
│   └── ...
├── rag_config.yaml          ← ✅ NEW: Configuration file
└── outputs/
```

---

## Using Your RAG System

Now you can ask questions!

**Method 1: Terminal interface**
```bash
python interfaces/claude_code_interface.py
```

**Example conversation:**
```
📂 Loading Vector DB from ./chroma_db...
✅ Loaded 142 papers from collection 'papers'
✅ Connected to Claude API

You: What are the main barriers to technology adoption mentioned in the literature?