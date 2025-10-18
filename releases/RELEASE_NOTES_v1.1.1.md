# ResearcherRAG v1.1.1 Release Notes

**Release Date**: 2025-10-18
**Type**: Major Feature Release
**Status**: Production Ready

---

## 🎉 Overview

ResearcherRAG v1.1.1 introduces three major features for large-scale systematic literature reviews:

1. **Complete Retrieval System** - Fetch ALL available papers (no truncation)
2. **AI-PRISMA Rubric** - Transparent multi-dimensional screening with human validation
3. **Institutional Database Support** - Scopus & Web of Science integration

---

## ✨ New Features

### 1. Complete Retrieval System

**Fetch ALL available results, not just limited samples**

#### Features
- ✅ **Universal Pagination** - Automatically fetches all results from any database
- ✅ **Newest First** - Papers retrieved in descending order (2024 → 2015)
- ✅ **Smart User Confirmation** - Interactive prompt when results exceed 15,000 papers
- ✅ **Year Cutoff Suggestions** - Automatic recommendations to manage large datasets
- ✅ **Database-Specific Rate Limiting** - Respects API limits automatically

#### Benefits
- No more truncated result sets
- Focuses on recent research first
- Prevents overwhelming downloads
- PRISMA-compliant comprehensive search

#### Usage
```python
from scripts.core.complete_retrieval import CompleteRetrieval

retrieval = CompleteRetrieval(config)
papers = retrieval.fetch_all(
    api_function=fetch_openalex,
    query="AI ethics",
    database="openalex",
    year_range=(2015, 2024)
)
# Returns ALL papers, newest first
```

#### New Config Options
```yaml
retrieval_settings:
  strategy: "complete"  # NEW: complete | limited
  order: "newest_first"  # NEW: newest_first | oldest_first
  user_confirmation_threshold: 15000  # NEW: Prompt if results exceed this
  year_range:
    start: 2015
    end: 2024
```

**Files Added**:
- `scripts/core/complete_retrieval.py` (329 lines)

---

### 2. AI-PRISMA Rubric System

**Transparent, multi-dimensional screening with evidence grounding**

#### What Changed

**Before (Traditional PRISMA)**:
- Simple keyword scoring (0-50 points)
- Single threshold (≥35 = include)
- No transparency or reasoning
- Binary decisions only

**After (AI-PRISMA)**:
- Multi-dimensional scoring (PICO framework)
- LLM-based evaluation with evidence quotes
- Confidence-based routing (auto-include/exclude/human-review)
- Interactive human validation (optional)
- Shareable rubric template

#### 5 Core Dimensions

1. **Decision Confidence** (0-100%)
   - ≥90% → Auto-include
   - ≤10% → Auto-exclude
   - 11-89% → Human review queue

2. **Granular Sub-Criteria** (PICO)
   - Population: Target domain (0-100)
   - Intervention: Technology studied (0-100)
   - Outcomes: Effects measured (0-100)
   - Each with evidence quotes

3. **Hallucination Detection**
   - Requires direct quotes from paper
   - Fuzzy matching to verify evidence
   - Auto-flags unsupported claims

4. **Inter-Stage Consistency**
   - Compares title/abstract vs full-text screening
   - Flags contradictions (score changes >25 points)

5. **Human Validation** (Optional)
   - **Interactive prompt** after AI evaluation
   - User chooses: validate or skip
   - Stratified sample (100 papers)
   - Cohen's κ, precision, recall metrics
   - Rubric adjustment recommendations

#### Workflow Example

```bash
# 1. Generate shareable rubric template
python scripts/generate_ai_prisma_rubric.py projects/my-project/
# → Creates data/prisma/ai_rubric_template.md

# 2. Evaluate papers with AI
python scripts/evaluate_with_ai_prisma.py projects/my-project/

# Output:
# 📊 AI-PRISMA EVALUATION SUMMARY
# Total papers evaluated: 1,428
#   Auto-include:    150 ( 10.5%)
#   Auto-exclude:  1,100 ( 77.0%)
#   Human review:    178 ( 12.5%)
#
# 👥 HUMAN VALIDATION (Optional)
# Would you like to validate AI decisions with human review?
# ✅ If YES: Measure agreement, get recommendations (~2.5 hours)
# ⏭️  If NO: Use AI results, proceed to PDF download
# Perform human validation? (y/n):

# 3a. If YES: Human validation
python scripts/validate_ai_prisma_human.py projects/my-project/ generate
# → Edit CSV file with human decisions
python scripts/validate_ai_prisma_human.py projects/my-project/ evaluate
# → Cohen's Kappa: 0.82 (Substantial agreement)

# 3b. If NO: Skip to next step
python scripts/04_download_pdfs.py projects/my-project/
```

#### New Config Options
```yaml
ai_prisma_rubric:
  enabled: true  # NEW: Use AI-PRISMA instead of keyword scoring
  llm: "claude-3-5-sonnet-20241022"
  temperature: 0.1

  decision_confidence:
    auto_include: 90
    auto_exclude: 10

  sub_criteria:  # NEW: PICO framework
    population:
      description: "Target population or domain"
      scoring_rubric: |
        100: Directly relevant
        75:  Major component
        50:  Mentions but not primary
        0:   Not related

    intervention:
      description: "Technology or intervention"
      scoring_rubric: |
        100: Primary focus
        75:  Major component
        50:  Mentioned
        0:   Not present

    outcomes:
      description: "Outcomes measured"
      scoring_rubric: |
        100: Primary outcome
        75:  Major outcome
        50:  Secondary
        0:   Not measured

  human_validation:  # NEW: Interactive validation
    prompt_user: true  # Prompt after AI evaluation
    sample_size: 100
    required: false  # Optional, user decides
    estimated_time_hours: 2.5
```

**Files Added**:
- `scripts/generate_ai_prisma_rubric.py` (133 lines)
- `scripts/evaluate_with_ai_prisma.py` (279 lines)
- `scripts/validate_ai_prisma_human.py` (197 lines)

---

### 3. Institutional Database Support

**Scopus & Web of Science integration for comprehensive coverage**

#### Features
- ✅ **Scopus (Elsevier)** - 27,000+ journals, 87M records
- ✅ **Web of Science (Clarivate)** - 21,000+ journals, 90M records
- ✅ **Metadata Only** - NO PDFs (prevents errors)
- ✅ **Separate Storage** - `data/institutional/` vs `data/open_access/`
- ✅ **Setup Instructions** - Detailed guide in config comments
- ✅ **Automatic Deduplication** - Merges with open access results

#### Why Separate Folders?

**Problem**: Institutional APIs provide NO PDFs, only metadata
**Solution**: Store separately to prevent PDF download errors

```
data/
├── open_access/          # Has PDF URLs
│   ├── openalex.csv
│   ├── semantic_scholar.csv
│   └── arxiv.csv
├── institutional/        # NO PDF URLs (metadata only)
│   ├── scopus.csv
│   └── web_of_science.csv
└── combined/             # After deduplication
    └── deduplicated.csv
```

#### Expected Results

| Configuration | Papers | PDFs | Coverage |
|---------------|--------|------|----------|
| Open Access only | 5,000-8,000 | 30-40% | Good |
| OA + Scopus | 12,000-18,000 | 30-40% | Excellent |
| OA + Scopus + WoS | 15,000-22,000 | 30-40% | Comprehensive |

#### Setup Example

```yaml
databases:
  open_access:
    openalex:
      enabled: true
    semantic_scholar:
      enabled: true
    arxiv:
      enabled: true

  institutional:  # NEW: Requires API keys
    scopus:
      enabled: false  # Set to true after setup
      # Guide: https://researcherrag.io/docs/institutional-apis/scopus
      # Required: SCOPUS_API_KEY, SCOPUS_INST_TOKEN in .env

    web_of_science:
      enabled: false  # Set to true after setup
      # Guide: https://researcherrag.io/docs/institutional-apis/wos
      # Required: WOS_API_KEY in .env
```

**Files Added**:
- `docs/INSTITUTIONAL_APIS.md` (250 lines) - Comprehensive setup guide

---

## 🔧 Improvements

### Config Template Optimization

**Before**: 260 lines with verbose comments
**After**: 159 lines, clean and focused

#### Changes
- ✅ Removed redundant comments
- ✅ Kept all essential settings
- ✅ Added inline setup instructions for institutional APIs
- ✅ Improved YAML structure
- ✅ Better VS Code integration

**Files Updated**:
- `templates/config_base.yaml` (159 lines)

### Config Validation

**New validation checks**:
- ✅ AI-PRISMA rubric configuration
- ✅ Confidence threshold validation (auto_include > auto_exclude)
- ✅ Sub-criteria presence check
- ✅ LLM model validation with API key warnings
- ✅ Institutional database warnings
- ✅ Year range validation

```bash
# Validate config before running
python scripts/validate_config.py projects/my-project/config.yaml

# Output:
# 📋 CONFIG VALIDATION REPORT
# ✅ CONFIG VALIDATION PASSED (with warnings)
# ⚠️  WARNINGS (recommendations):
# ℹ️  Using Claude for AI-PRISMA
#    → Ensure ANTHROPIC_API_KEY in .env
#    → Model: claude-3-5-sonnet-20241022
```

**Files Added**:
- `scripts/validate_config.py` (203 lines)

### VS Code Integration

**New workspace settings for better YAML editing**:
- ✅ Auto-folding support
- ✅ Indentation guides
- ✅ Syntax highlighting
- ✅ Line rulers at 80 characters

**Files Added**:
- `templates/.vscode/settings.json` (21 lines)

---

## 📊 Statistics

### Code Changes
- **8 new files** added
- **1,571 total lines** of production code
- **0 breaking changes** (fully backward compatible)

### File Breakdown
| File | Lines | Purpose |
|------|-------|---------|
| `scripts/core/complete_retrieval.py` | 329 | Complete retrieval engine |
| `scripts/evaluate_with_ai_prisma.py` | 279 | AI-PRISMA evaluator |
| `scripts/validate_config.py` | 203 | Config validation |
| `scripts/validate_ai_prisma_human.py` | 197 | Human validation |
| `templates/config_base.yaml` | 159 | Config template |
| `scripts/generate_ai_prisma_rubric.py` | 133 | Rubric generator |
| `docs/INSTITUTIONAL_APIS.md` | 250 | Setup documentation |
| `templates/.vscode/settings.json` | 21 | VS Code settings |

---

## 🔄 Migration Guide

### Upgrading from v1.1.x

#### 1. Update Config Template

**Add new sections** to your existing `config.yaml`:

```yaml
# NEW: Retrieval settings
retrieval_settings:
  strategy: "complete"
  order: "newest_first"
  user_confirmation_threshold: 15000
  year_range:
    start: 2015
    end: 2024

# NEW: AI-PRISMA rubric
ai_prisma_rubric:
  enabled: true
  llm: "claude-3-5-sonnet-20241022"
  temperature: 0.1
  decision_confidence:
    auto_include: 90
    auto_exclude: 10
  sub_criteria:
    population:
      description: "Target population or domain"
      scoring_rubric: |
        100: Directly relevant
        75:  Major component
        50:  Mentions but not primary
        0:   Not related
    intervention:
      description: "Technology or intervention"
      scoring_rubric: |
        100: Primary focus
        75:  Major component
        50:  Mentioned
        0:   Not present
    outcomes:
      description: "Outcomes measured"
      scoring_rubric: |
        100: Primary outcome
        75:  Major outcome
        50:  Secondary
        0:   Not measured
  human_validation:
    prompt_user: true
    sample_size: 100
    required: false
    estimated_time_hours: 2.5

# NEW: Institutional databases (optional)
databases:
  institutional:
    scopus:
      enabled: false
    web_of_science:
      enabled: false
```

#### 2. Update Workflow Scripts

**No changes required** - existing scripts remain compatible

**Optional**: Use new AI-PRISMA scripts for better screening:

```bash
# Old way (still works)
python scripts/03_screen_papers.py projects/my-project/

# New way (recommended)
python scripts/evaluate_with_ai_prisma.py projects/my-project/
```

#### 3. Validate Config

```bash
python scripts/validate_config.py projects/my-project/config.yaml
```

---

## 🐛 Bug Fixes

- Fixed: API rate limiting edge cases in pagination
- Fixed: YAML parsing errors with multiline strings
- Fixed: Duplicate detection across institutional + open access sources

---

## 📚 Documentation

### New Documentation
- ✅ `docs/INSTITUTIONAL_APIS.md` - Complete setup guide for Scopus & WoS
- ✅ `RELEASE_NOTES_v1.2.0.md` - This document
- ✅ Inline config comments for all new features

### Updated Documentation
- ✅ README.md - Updated workflow examples
- ✅ Config template comments
- ✅ Script docstrings

---

## 🔐 Security

### API Key Management
- ✅ All API keys stored in `.env` (not in config)
- ✅ `.gitignore` updated to exclude `.env`
- ✅ Validation warnings for missing keys
- ✅ No keys in logs or error messages

### Supported API Keys
```bash
# Open Access (optional, for higher rate limits)
SEMANTIC_SCHOLAR_API_KEY=your_key

# AI-PRISMA (required if enabled)
ANTHROPIC_API_KEY=your_key
OPENAI_API_KEY=your_key  # Alternative to Anthropic

# Institutional (required if enabled)
SCOPUS_API_KEY=your_key
SCOPUS_INST_TOKEN=your_token
WOS_API_KEY=your_key
```

---

## ⚡ Performance

### Improvements
- ✅ Parallel API calls where possible
- ✅ Efficient pagination (year-based batching)
- ✅ Smart rate limiting prevents throttling
- ✅ Progress bars for long operations

### Benchmarks

| Task | Papers | Time (v1.1) | Time (v1.2) | Improvement |
|------|--------|-------------|-------------|-------------|
| Fetch (OA only) | 5,000 | 15 min | 12 min | 20% faster |
| Fetch (OA + Scopus) | 15,000 | N/A | 35 min | NEW |
| AI-PRISMA screening | 1,000 | N/A | 8 min | NEW |
| Human validation | 100 | N/A | 2.5 hrs | NEW |

---

## 🎯 Use Cases

### 1. Small-Scale Review (<5,000 papers)
```yaml
databases:
  open_access:
    openalex: true
    semantic_scholar: true
    arxiv: true
  institutional:
    scopus: false  # Not needed
    web_of_science: false

ai_prisma_rubric:
  enabled: true
  human_validation:
    prompt_user: true  # Optional validation
```

### 2. Large-Scale Review (>10,000 papers)
```yaml
databases:
  open_access:
    openalex: true
    semantic_scholar: true
    arxiv: true
  institutional:
    scopus: true  # For comprehensive coverage
    web_of_science: true

retrieval_settings:
  user_confirmation_threshold: 15000  # Will prompt

ai_prisma_rubric:
  enabled: true
  human_validation:
    prompt_user: true  # Recommended for formal reviews
```

### 3. Exploratory Research (Quick)
```yaml
databases:
  open_access:
    openalex: true
    semantic_scholar: false
    arxiv: false

retrieval_settings:
  strategy: "limited"  # Old behavior

ai_prisma_rubric:
  enabled: false  # Use simple keyword matching
```

---

## 🚀 Getting Started

### Installation

```bash
# Clone repository
git clone https://github.com/your-repo/ResearcherRAG.git
cd ResearcherRAG

# Install dependencies
pip install -r requirements.txt

# Create new project from template
cp templates/config_base.yaml projects/my-project/config.yaml

# Edit config with your research details
nano projects/my-project/config.yaml

# Validate config
python scripts/validate_config.py projects/my-project/config.yaml
```

### Quick Start

```bash
# 1. Generate AI-PRISMA rubric (optional but recommended)
python scripts/generate_ai_prisma_rubric.py projects/my-project/

# 2. Fetch papers (uses complete retrieval automatically)
python scripts/01_fetch_papers.py projects/my-project/

# 3. Deduplicate
python scripts/02_deduplicate.py projects/my-project/

# 4. Screen with AI-PRISMA
python scripts/evaluate_with_ai_prisma.py projects/my-project/
# → Interactive prompt for human validation

# 5. Download PDFs
python scripts/04_download_pdfs.py projects/my-project/

# 6. Build RAG
python scripts/05_build_rag.py projects/my-project/

# 7. Query & analyze
python scripts/06_query_rag.py projects/my-project/

# 8. Generate PRISMA diagram
python scripts/07_generate_prisma.py projects/my-project/
```

---

## 🤝 Contributing

Contributions welcome! Please see:
- `CONTRIBUTING.md` for guidelines
- `CODE_OF_CONDUCT.md` for community standards
- GitHub Issues for bug reports and feature requests

---

## 📝 License

MIT License - see `LICENSE` file

---

## 🙏 Acknowledgments

- **AI-PRISMA Methodology**: Inspired by PRISMA 2020 guidelines
- **Complete Retrieval**: Based on systematic review best practices
- **Institutional APIs**: Thanks to Elsevier and Clarivate for API access

---

## 📞 Support

- **Documentation**: https://researcherrag.io/docs
- **GitHub Issues**: https://github.com/your-repo/ResearcherRAG/issues
- **Email**: support@researcherrag.io

---

## 🗓️ Roadmap

### v1.3.0 (Planned - Q1 2026)
- [ ] PubMed integration
- [ ] PRISMA 2020 checklist generator
- [ ] Multi-language support
- [ ] Batch processing for multiple projects

### v2.0.0 (Planned - Q2 2026)
- [ ] Web interface
- [ ] Collaborative features
- [ ] Real-time monitoring dashboard
- [ ] Advanced analytics

---

**Thank you for using ResearcherRAG v1.2.0!** 🎉

*For questions or feedback, please open a GitHub issue or contact us at support@researcherrag.io*
