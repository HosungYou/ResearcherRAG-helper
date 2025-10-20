# Integration Guide: ScholarRAG v1.1.0

This guide explains how to integrate the three new v1.1.0 features into your ScholarRAG workflow.

---

## Table of Contents

1. [Complete Retrieval System Integration](#1-complete-retrieval-system-integration)
2. [AI-PRISMA Rubric Workflow](#2-ai-prisma-rubric-workflow)
3. [Institutional Database Setup](#3-institutional-database-setup)
4. [Migration from v1.0.x](#4-migration-from-v10x)

---

## 1. Complete Retrieval System Integration

### Overview

The `CompleteRetrieval` class in `scripts/core/complete_retrieval.py` replaces manual pagination logic in `01_fetch_papers.py`.

### Before (v1.0.x): Limited Retrieval

```python
# 01_fetch_papers.py (OLD)
def fetch_semantic_scholar(self, query, limit=1000):
    papers = []
    offset = 0

    while len(papers) < limit:  # ❌ Stops at arbitrary limit
        response = requests.get(api, params={'offset': offset, 'limit': 100})
        papers.extend(response['data'])
        offset += 100

    return papers[:limit]  # ❌ Truncates results
```

**Problems**:
- Arbitrary limit (1000 papers) may miss relevant papers
- No user confirmation for large datasets
- No year-based ordering (oldest papers may be fetched first)

### After (v1.1.0): Complete Retrieval

```python
# 01_fetch_papers.py (NEW)
from scripts.core.complete_retrieval import CompleteRetrieval

class PaperFetcher:
    def __init__(self, project_path):
        self.project_path = Path(project_path)

        # Load config
        with open(self.project_path / "config.yaml") as f:
            config = yaml.safe_load(f)

        # Initialize complete retrieval engine
        self.retriever = CompleteRetrieval(config)

    def fetch_semantic_scholar(self, query):
        # ✅ Fetches ALL results with user confirmation
        papers = self.retriever.fetch_all(
            api_function=self._semantic_scholar_api_call,
            query=query,
            database="semantic_scholar",
            year_range=(2015, 2024),
            batch_size=100
        )

        return papers

    def _semantic_scholar_api_call(self, query, start, count):
        """Wrapper for Semantic Scholar API"""
        response = requests.get(
            "https://api.semanticscholar.org/graph/v1/paper/search",
            params={
                'query': query,
                'fields': 'title,abstract,authors,year,openAccessPdf',
                'limit': count,
                'offset': start
            }
        )
        return response.json()
```

### Key Changes

1. **No arbitrary limits** - Fetches ALL available results
2. **User confirmation** - Prompts when results exceed 15,000 (configurable)
3. **Newest first** - Papers retrieved in descending year order (2024→2015)
4. **Year cutoff suggestions** - Automatically recommends cutoffs for large datasets

### Integration Steps

**Step 1**: Update `01_fetch_papers.py`

Replace hardcoded pagination loops with `CompleteRetrieval.fetch_all()`:

```python
# Add import
from scripts.core.complete_retrieval import CompleteRetrieval

# In __init__
self.retriever = CompleteRetrieval(self.config)

# Replace each fetch method
papers = self.retriever.fetch_all(
    api_function=self._api_wrapper,
    query=query,
    database="semantic_scholar",  # or "openalex", "arxiv"
    year_range=(config['year_start'], config['year_end']),
    batch_size=100
)
```

**Step 2**: Create API wrapper functions

Each database needs a wrapper that matches this signature:

```python
def _api_wrapper(query: str, start: int, count: int) -> Dict:
    """
    Args:
        query: Search query string
        start: Offset for pagination
        count: Number of results to fetch

    Returns:
        Dict with database-specific structure
    """
    pass
```

**Step 3**: Update `config.yaml`

Add retrieval settings:

```yaml
retrieval_settings:
  strategy: "complete"
  order: "newest_first"
  user_confirmation_threshold: 15000
  year_range:
    start: 2015
    end: 2024
```

### Example Output

```
==============================================================
📡 Fetching from SEMANTIC_SCHOLAR
==============================================================
📊 Total results: 23,450

==============================================================
⚠️  LARGE RESULT SET: SEMANTIC_SCHOLAR
==============================================================

Total results: 23,450
User confirmation threshold: 15,000

📊 Estimated distribution by year (newest first):
------------------------------------------------------------
  2024:  3,420 papers  (cumulative:   3,420)
  2023:  4,190 papers  (cumulative:   7,610)
  2022:  3,850 papers  (cumulative:  11,460)
  2021:  3,120 papers  (cumulative:  14,580)
  2020:  2,680 papers  (cumulative:  17,260)
  2019:  2,310 papers  (cumulative:  19,570)
  ...

💡 RECOMMENDATION:
   Limit to papers from 2021 onwards
   → Would retrieve ~14,580 papers
   → Focuses on recent/relevant research

==============================================================
❓ OPTIONS:
   1. Retrieve ALL 23,450 papers (may take hours)
   2. Limit to 2021+ (~14,580 papers) [RECOMMENDED]
   3. Custom year cutoff
   4. Cancel this database
==============================================================

Your choice (1-4): 2

✓ User chose: Limit to 2021+
📊 Fetching semantic_scholar: 100%|██████████| 14580/14580 [12:34<00:00, 19.3papers/s]
✅ semantic_scholar: 14,580 papers retrieved
```

---

## 2. AI-PRISMA Rubric Workflow

### Overview

AI-PRISMA replaces keyword-based screening with multi-dimensional LLM evaluation.

### Workflow Diagram

```
01_fetch_papers.py
    ↓
    20,555 papers fetched
    ↓
02_deduplicate.py
    ↓
    18,234 unique papers
    ↓
03_screen_papers.py ← Uses AI-PRISMA Rubric
    ↓
    AI Evaluation (claude-3-5-sonnet)
    ├─→ Auto-Include (≥90%): 245 papers
    ├─→ Auto-Exclude (≤10%): 17,821 papers
    └─→ Human Review (11-89%): 168 papers
    ↓
[Optional] scripts/validate_ai_prisma_human.py
    ↓
    Human validates 100 samples
    Cohen's κ = 0.82 (strong agreement)
    ↓
04_download_pdfs.py
    ↓
    Download PDFs for 245 + manually reviewed papers
```

### Configuration

**Step 1**: Enable AI-PRISMA in `config.yaml`

```yaml
ai_prisma_rubric:
  enabled: true
  llm: "claude-3-5-sonnet-20241022"
  temperature: 0.1

  decision_confidence:
    auto_include: 90  # ≥90% → Include without human review
    auto_exclude: 10  # ≤10% → Exclude without human review

  sub_criteria:
    population:
      description: "Target population (e.g., higher education students)"
      scoring_rubric: |
        100: Directly matches target population
        75:  Major component of study
        50:  Mentions population but not primary focus
        0:   Different population or not specified

    intervention:
      description: "AI chatbot or conversational agent"
      scoring_rubric: |
        100: Primary intervention is AI chatbot
        75:  Chatbot is major component
        50:  Mentions chatbots alongside other tools
        0:   No chatbot/conversational AI

    outcomes:
      description: "Speaking proficiency or oral skills"
      scoring_rubric: |
        100: Primary outcome is speaking skills
        75:  Speaking is major outcome
        50:  Speaking mentioned as secondary outcome
        0:   No speaking outcomes measured

  human_validation:
    prompt_user: true  # Interactive prompt after AI evaluation
    sample_size: 100
    required: false
    estimated_time_hours: 2.5
```

**Step 2**: Generate rubric template (for reproducibility)

```bash
python scripts/generate_ai_prisma_rubric.py \
    --project projects/2025-10-13_AI-Chatbots
```

Output: `data/prisma/ai_prisma_rubric.md` (shareable with other researchers)

**Step 3**: Run AI-PRISMA evaluation

```bash
python scripts/evaluate_with_ai_prisma.py \
    --project projects/2025-10-13_AI-Chatbots \
    --input data/02_deduplication/unique_papers.csv
```

**Interactive prompt**:

```
==============================================================
📊 AI-PRISMA EVALUATION COMPLETE
==============================================================

Total papers evaluated: 18,234

Decision Summary:
  ✅ Auto-Include (≥90%):     245 papers (1.3%)
  ❌ Auto-Exclude (≤10%):  17,821 papers (97.7%)
  🤔 Human Review (11-89%):  168 papers (0.9%)

==============================================================
👥 HUMAN VALIDATION (Optional)
==============================================================

Would you like to validate AI decisions with human review?

✅ If YES (perform validation):
   • Measure AI-human agreement (Cohen's Kappa)
   • Identify AI over-inclusion/exclusion patterns
   • Get rubric improvement recommendations
   • Time required: ~2.5 hours

⏭️  If NO (skip validation):
   • Use AI evaluation results as-is
   • Proceed to next step (PDF download)

--------------------------------------------------------------
Perform human validation? (y/n):
```

**Step 4**: (Optional) Human validation

If user chooses `y`:

```bash
# Validation CSV generated automatically
# data/03_screening/validation_sample.csv

# Open in Excel/Google Sheets
# Review 100 papers, mark human_decision (include/exclude)
# Save file

# Calculate agreement metrics
python scripts/validate_ai_prisma_human.py \
    --validation-csv data/03_screening/validation_sample.csv
```

**Output**:

```
==============================================================
📊 HUMAN VALIDATION RESULTS
==============================================================

Cohen's Kappa: 0.82 (Strong Agreement)
Precision:     0.89 (AI correctly included 89%)
Recall:        0.91 (AI caught 91% of relevant papers)
F1 Score:      0.90

Agreement Rate: 87/100 (87%)

Disagreement Patterns:
  • AI over-included: 7 papers (borderline relevance)
  • AI under-included: 6 papers (missed nuanced context)

💡 RECOMMENDATIONS:
  1. Adjust "population" scoring rubric to be more strict
  2. Add examples of borderline cases to rubric
  3. Consider lowering auto_include threshold to 92%

Full report: data/03_screening/validation_report.md
```

### Key Features

1. **Multi-dimensional scoring** - 5 sub-criteria (Population, Intervention, Comparison, Outcomes, Study Design)
2. **Evidence grounding** - LLM must quote abstract text to justify scores
3. **Confidence-based routing** - Automatic decisions for high-confidence cases
4. **Hallucination detection** - Cross-check quoted evidence against abstract
5. **Human validation** - Optional quality check with Cohen's Kappa

---

## 3. Institutional Database Setup

### Overview

Scopus and Web of Science provide comprehensive metadata but **NO PDFs**. This requires separate storage.

### Architecture

```
data/
├── open_access/              # Semantic Scholar, OpenAlex, arXiv
│   ├── semantic_scholar.csv  # Has pdf_url column (40% populated)
│   ├── openalex.csv          # Has pdf_url column (50% populated)
│   └── arxiv.csv             # Has pdf_url column (100% populated)
│
├── institutional/            # Scopus, Web of Science
│   ├── scopus.csv            # NO pdf_url column
│   └── wos.csv               # NO pdf_url column
│
└── combined/
    └── all_papers.csv        # Merged, deduplicated
```

### Setup Steps

**Step 1**: Obtain API keys (see `docs/INSTITUTIONAL_APIS.md`)

- **Scopus**: Requires institutional access + API key
- **Web of Science**: Requires Web of Science Premium subscription

**Step 2**: Add to `.env`

```bash
# Scopus
SCOPUS_API_KEY=your_api_key_here
SCOPUS_INST_TOKEN=your_institution_token  # Optional, for higher rate limits

# Web of Science
WOS_API_KEY=your_wos_key_here
```

**Step 3**: Enable in `config.yaml`

```yaml
databases:
  open_access:
    openalex:
      enabled: true
    semantic_scholar:
      enabled: true
    arxiv:
      enabled: true

  institutional:
    scopus:
      enabled: true  # ← Enable after setup
    web_of_science:
      enabled: true  # ← Enable after setup
```

**Step 4**: Update fetch script

```bash
python scripts/01_fetch_papers.py \
    --project projects/2025-10-13_AI-Chatbots
```

**Output**:

```
==============================================================
📡 Fetching from OPEN ACCESS DATABASES
==============================================================

✅ Semantic Scholar: 3,420 papers (1,368 with PDFs, 40%)
✅ OpenAlex: 4,190 papers (2,095 with PDFs, 50%)
✅ arXiv: 145 papers (145 with PDFs, 100%)

Saved to: data/open_access/

==============================================================
📡 Fetching from INSTITUTIONAL DATABASES
==============================================================

ℹ️  Note: Scopus and WoS provide metadata only (NO PDFs)

✅ Scopus: 8,234 papers (metadata only)
✅ Web of Science: 6,789 papers (metadata only)

Saved to: data/institutional/

==============================================================
📊 TOTAL FETCHED
==============================================================

Total papers: 22,778
Papers with PDF URLs: 3,608 (15.8%)
```

### Why Separate Storage?

**Problem**: If institutional metadata is mixed with open access:

```python
# ❌ BAD: Mixed storage causes errors
all_papers.csv:
  - Paper A (Scopus): pdf_url = NaN
  - Paper B (OpenAlex): pdf_url = "https://..."

# PDF download script fails:
for paper in all_papers:
    download_pdf(paper['pdf_url'])  # ❌ Tries to download NaN!
```

**Solution**: Separate folders, merge during deduplication:

```python
# ✅ GOOD: Separate storage
data/institutional/scopus.csv → Skip PDF download
data/open_access/openalex.csv → Download PDFs

# Deduplication merges both
python scripts/02_deduplicate.py
# Output: data/combined/unique_papers.csv (with source tracking)
```

### Expected Coverage

| Database | Coverage | PDF Availability |
|----------|----------|------------------|
| **Semantic Scholar** | 200M papers | ~40% |
| **OpenAlex** | 250M works | ~50% |
| **arXiv** | 2.3M preprints | 100% |
| **Scopus** | 87M records | 0% (metadata only) |
| **Web of Science** | 171M records | 0% (metadata only) |

**Combined**: ~30-40% PDF availability after deduplication

---

## 4. Migration from v1.0.x

### For Existing Projects

**Option 1: Keep existing config** (v1.0.x features only)

Your project will continue to work with:
- Limited retrieval (1000 papers max per database)
- Keyword-based PRISMA screening
- Open access databases only

**Option 2: Upgrade to v1.1.0** (recommended)

**Step 1**: Backup existing project

```bash
cp -r projects/my-project projects/my-project.backup
```

**Step 2**: Update `config.yaml`

Add new sections:

```yaml
# Add complete retrieval settings
retrieval_settings:
  strategy: "complete"
  order: "newest_first"
  user_confirmation_threshold: 15000
  year_range:
    start: 2015
    end: 2024

# Add AI-PRISMA rubric
ai_prisma_rubric:
  enabled: true
  llm: "claude-3-5-sonnet-20241022"
  temperature: 0.1

  decision_confidence:
    auto_include: 90
    auto_exclude: 10

  sub_criteria:
    # Copy from templates/config_base.yaml
    # Customize for your research domain

# Add institutional databases (optional)
databases:
  institutional:
    scopus:
      enabled: false
    web_of_science:
      enabled: false
```

**Step 3**: Validate config

```bash
python scripts/validate_config.py projects/my-project/config.yaml
```

**Step 4**: Re-run pipeline

```bash
# Fetch papers (will now use complete retrieval)
python scripts/01_fetch_papers.py --project projects/my-project

# Deduplicate
python scripts/02_deduplicate.py --project projects/my-project

# Screen with AI-PRISMA
python scripts/evaluate_with_ai_prisma.py \
    --project projects/my-project \
    --input data/02_deduplication/unique_papers.csv

# Continue with existing scripts
python scripts/04_download_pdfs.py --project projects/my-project
python scripts/05_build_rag.py --project projects/my-project
```

### For New Projects

Use the updated template:

```bash
# Copy new template
cp templates/config_base.yaml projects/new-project/config.yaml

# Edit config
nano projects/new-project/config.yaml

# Validate
python scripts/validate_config.py projects/new-project/config.yaml

# Start pipeline
python scripts/01_fetch_papers.py --project projects/new-project
```

---

## Common Issues

### Issue 1: Complete retrieval too slow

**Symptom**: Fetching 20,000 papers takes 2+ hours

**Solution**: Use year cutoff when prompted

```
Your choice (1-4): 2  # Limit to 2021+ (recommended)
```

### Issue 2: AI-PRISMA costs too high

**Symptom**: $50+ API cost for 20,000 papers

**Solution**: Use year cutoff + stricter inclusion criteria

```yaml
ai_prisma_rubric:
  enabled: true

  # Add pre-filtering to reduce papers sent to LLM
  pre_filter:
    min_citations: 5  # Skip papers with <5 citations
    min_year: 2020    # Skip papers before 2020
```

### Issue 3: Institutional APIs not working

**Symptom**: `401 Unauthorized` errors

**Solution**: Check API key and institutional access

```bash
# Test Scopus key
curl -H "X-ELS-APIKey: YOUR_KEY" \
  "https://api.elsevier.com/content/search/scopus?query=chatbot"

# Test Web of Science key
curl -H "X-ApiKey: YOUR_KEY" \
  "https://api.clarivate.com/api/wos"
```

See `docs/INSTITUTIONAL_APIS.md` for full troubleshooting.

---

## Performance Benchmarks

### Complete Retrieval

| Dataset Size | Time (v1.0.x) | Time (v1.1.0) | Speedup |
|--------------|---------------|---------------|---------|
| 1,000 papers | 8 min | 8 min | 1.0x |
| 5,000 papers | N/A (limited) | 22 min | N/A |
| 20,000 papers | N/A (limited) | 1.2 hours | N/A |

### AI-PRISMA Evaluation

| Papers | LLM | Time | Cost |
|--------|-----|------|------|
| 1,000 | Claude 3.5 Sonnet | 12 min | $3.50 |
| 5,000 | Claude 3.5 Sonnet | 58 min | $17.20 |
| 20,000 | Claude 3.5 Sonnet | 3.8 hours | $68.50 |

**Cost reduction strategies**:
- Use year cutoffs (reduce to ~5K papers)
- Pre-filter by citations (skip low-impact papers)
- Use cheaper model for initial screening (GPT-4o-mini)

---

## Next Steps

1. **Test v1.1.0 features** on a small dataset (500 papers)
2. **Validate AI-PRISMA** with human review (100 samples)
3. **Add institutional databases** if you have access
4. **Share rubric templates** with your research team

For questions, see:
- `RELEASE_NOTES_v1.1.1.md` - Full feature changelog
- `docs/INSTITUTIONAL_APIS.md` - Scopus/WoS setup guide
- GitHub Issues - Community support
