# Release v1.0.5 - Comprehensive Codebook & Enhanced Prompts

**Release Date:** October 14, 2025

This release dramatically improves documentation for researchers with no programming experience, restructures the Codebook with better organization, and enhances prompts 05-07 with rich examples.

---

## 🎯 Highlights

- ✅ **Complete Codebook Restructure** with 4 separate subpages and monochrome design
- ✅ **Enhanced Prompts 05-07** with pipeline visualizations and realistic examples
- ✅ **Beginner-Friendly Documentation** for researchers with zero coding experience
- ✅ **Improved Navigation** with collapsible subsections and breadcrumbs
- ✅ **40+ Search Entries** for quick concept lookup

---

## 📚 Codebook: Complete Restructure

### New Structure

**Before:** Single 1,374-line page with all content
**After:** Main index + 4 focused subpages (~2,500 lines total)

```
/codebook (Index with navigation cards)
├── /codebook/fundamentals (867 lines)
├── /codebook/file-formats (422 lines)
├── /codebook/tools (438 lines)
└── /codebook/scripts-workflow (621 lines)
```

### 1. Fundamentals (`/codebook/fundamentals`)

Core concepts for absolute beginners:

- **What is a Script?** - Recipe analogy with side-by-side comparison
- **What is Python?** - 4 reasons researchers use it (readability, libraries, community, free)
- **What is Terminal?** - GUI vs CLI comparison with common commands
- **What is an API?** - Restaurant waiter analogy explaining Anthropic, OpenAI, Semantic Scholar APIs
- **What is a Vector Database?** - Traditional vs Vector DB comparison with meaning-based search
- **What is RAG?** - 4-step process (Ask → Retrieval → Augmentation → Generation)
- **What is PRISMA 2020?** - 4-stage systematic review methodology

### 2. File Formats (`/codebook/file-formats`)

Detailed explanations of all file types:

- **YAML (.yaml)** - Configuration checklist format with example config
- **JSON (.json)** - Structured data storage with papers.json example
- **Markdown (.md)** - Simple formatting language with side-by-side rendering
- **Python (.py)** - Script structure breakdown (imports, config, functions, execution)
- **Environment (.env)** - API keys security with bad/good examples and critical warnings

### 3. Tools & Technologies (`/codebook/tools`)

Why ScholaRAG uses specific tools:

- **ChromaDB** - Local vector database for semantic search
- **Claude AI** - Large context window (200K+ tokens) for PRISMA screening
- **OpenAI Embeddings** - text-embedding-3-small for 1536-dimensional vectors
- **GitHub** - Version control and code repository (Google Drive for programmers)
- **Git** - Time machine for code with basic workflow commands
- **Python Libraries** - anthropic, openai, chromadb, requests, pandas, python-dotenv

### 4. Scripts Workflow (`/codebook/scripts-workflow`)

**30% of Codebook content** explaining execution order:

- **Complete Pipeline Visualization** - ASCII diagram showing data flow through all 7 scripts
- **Script-by-Script Breakdown** - Each script's inputs, outputs, and purpose:
  - 01: Fetch Papers (foundation)
  - 02: Title/Abstract Screening (quick filter: 5000→500)
  - 03: Full-Text Screening (deep dive: 500→100)
  - 04: Build Embeddings (create search index)
  - 05: RAG Query (interactive research)
  - 06: Synthesis (meta-analysis)
  - 07: Documentation (publication ready)
- **Dependency Chain Explanation** - Why order matters
- **Error Examples** - What happens if you skip steps (FileNotFoundError, empty databases)
- **Key Takeaway** - Data integrity, efficiency, reproducibility, traceability

---

## 🎨 Design: Monochrome Philosophy

### Problem: Too Colorful
Previous design used 8+ colors (blue, purple, yellow, green, orange, pink, red, indigo) creating visual chaos.

### Solution: Clean Monochrome Palette

- **Primary Text:** `gray-900` (headings, important text)
- **Secondary Text:** `gray-700` (body text)
- **Borders:** `gray-300` (dividers, card outlines)
- **Backgrounds:** `gray-50`, `gray-100` (cards, callouts)
- **Accents:** Only black/white for critical warnings (e.g., .env security)
- **Hover States:** `gray-100` → `gray-200`
- **Active States:** `gray-200` background with `gray-900` text

### Visual Consistency

- Uniform border radius (`rounded-lg`)
- Consistent spacing (padding, margins)
- Clear hierarchy with font sizes (4xl → 2xl → xl → base)
- Border-left indicators for navigation subsections

---

## 🧭 Navigation: Improved UX

### Sidebar Navigation

**Codebook section now shows subsections:**

```
📖 Codebook
  └─ 🌱 Fundamentals
  └─ 📄 File Formats
  └─ 🛠️ Tools
  └─ 🔄 Scripts Workflow
```

Features:
- Collapsible subsections with border-left indicator
- Active state highlighting for current page
- Hover effects for better interactivity
- Positioned after Chapter 7 with margin separation

### Page Navigation

Each subpage includes:
- **Breadcrumbs:** `Codebook / Fundamentals`
- **Previous/Next Links:** Navigate between subpages sequentially
- **Back to Codebook:** Return to main index

---

## 🔍 Search: 40+ Entries

Updated SearchBar (`⌘K`) with comprehensive coverage:

**Main Pages:**
- Codebook, Fundamentals, File Formats, Tools, Scripts Workflow

**Fundamentals Concepts:**
- What is a Script?, What is Python?, What is Terminal?, What is an API?, What is a Vector Database?, What is RAG?, PRISMA 2020

**File Formats:**
- YAML Files (.yaml), JSON Files (.json), Markdown Files (.md), Python Files (.py), Environment Files (.env)

**Tools:**
- ChromaDB, Claude AI, OpenAI Embeddings, GitHub, Git, Python Libraries

**Scripts:**
- Script 01: Fetch Papers
- Script 02: Title/Abstract Screening
- Script 03: Full-Text Screening
- Script 04: Build Embeddings
- Script 05: RAG Query
- Script 06: Synthesis
- Script 07: Documentation
- Pipeline Dependencies

All entries updated to point to new subpage URLs (`/codebook/fundamentals`, etc.)

---

## 📝 Prompts: Enhanced 05-07

### Prompt 05: Execution & Build (`prompts/05_execution_plan.md`)

**Added (~200 lines):**

#### Complete Pipeline Visualization
- ASCII flowchart showing 5 scripts (01-05) with dependencies
- Realistic durations (10-30 min for fetch, 30-90 min for screening, etc.)
- Expected paper counts at each stage
- Input→Output flow diagram

#### Realistic Script Outputs
- **Script 01 (Fetch):** Live terminal output with timestamps
  ```
  [10:00:00] Querying Semantic Scholar...
  [10:05:23] Found 312 papers
  ✅ Total fetched: 503 papers
  ```
- **Script 02 (Deduplicate):** DOI matching, title similarity detection
- **Script 03 (Screen):** PRISMA criteria application with reasoning
- **Script 04 (Download PDFs):** Unpaywall, CORE, arXiv with success rates
- **Script 05 (Build RAG):** Chunking, embedding generation, ChromaDB storage

#### Troubleshooting Guide
- Common errors (API rate limits, missing keys, ChromaDB issues)
- File structure verification
- Success criteria for each stage

**Total added:** ~210 lines of realistic examples and workflow guidance

---

### Prompt 06: Research Conversation (`prompts/06_research_conversation.md`)

**Added (~210 lines):**

#### 3 Complete Research Session Examples

**Session 1: Understanding Methodologies**
- Query: "What research methodologies were used?"
- Response: Detailed breakdown (60% RCT, 25% qualitative, 15% observational)
- Citations with paper IDs

**Session 2: Learning Outcomes Analysis**
- Query: "What learning outcomes were measured?"
- Response: Effect sizes (d=0.72 for test scores, d=0.58 for retention)
- Statistical analysis with confidence intervals

**Session 3: Research Gap Identification**
- Query: "What are the main research gaps?"
- Response: 7 major gaps identified with explanations

#### Advanced Query Techniques (5 types)

1. **Comparative Queries:** "Compare intervention A vs B"
2. **Methodological Queries:** "Which studies used randomized designs?"
3. **Temporal Queries:** "How has effect size changed over time?"
4. **Gap Identification:** "What hasn't been studied yet?"
5. **Citation Extraction:** "Which papers support finding X?"

#### Query Optimization Tips
- Be specific (good: "RCT studies 2020-2024" vs bad: "recent papers")
- Ask follow-ups to drill deeper
- Request citations for verification
- Combine multiple dimensions

**Total added:** ~210 lines of interactive research examples

---

### Prompt 07: Documentation & Writing (`prompts/07_documentation_writing.md`)

**Added (~430 lines):**

#### Complete PRISMA 2020 Flowchart
- ASCII art version for quick reference
- Mermaid diagram code for rendering
- All 4 stages with exact numbers (Identification: 5,234 → Screening: 503 → Eligibility: 97 → Included: 34)

#### Full Methods Section Example (800+ words)
- Search strategy with databases and date ranges
- Inclusion/exclusion criteria (6 dimensions)
- Screening process with inter-rater reliability
- Data extraction procedures
- Quality assessment approach
- Synthesis methods

#### Bibliography Examples

**APA 7th Edition:**
```
Smith, J., & Lee, K. (2023). AI tutoring systems: A meta-analysis.
  Journal of Educational Technology, 45(2), 123-145.
  https://doi.org/10.1234/example
```

**BibTeX Format:**
```bibtex
@article{smith2023ai,
  title={AI tutoring systems: A meta-analysis},
  author={Smith, John and Lee, Karen},
  journal={Journal of Educational Technology},
  volume={45},
  number={2},
  pages={123--145},
  year={2023},
  doi={10.1234/example}
}
```

#### Search Strategy Documentation
- Boolean operators and search strings
- Database-specific syntax
- Filters applied
- Date of search execution

#### PRISMA 2020 Checklist
- 27-item checklist with completion status
- Section-by-section breakdown
- Page number references

#### Screening Criteria Details
- 6-dimension framework explained
- Examples for each criterion
- Edge cases and how they were handled

#### File Locations Map
```
outputs/
├── prisma_flowchart.md       # For manuscript Figure 1
├── methods_section.md         # Copy into manuscript
├── search_strategy.md         # Supplementary material
├── screening_criteria.md      # Supplementary material
├── bibliography.bib           # Import to reference manager
└── prisma_checklist.md        # Supplementary material
```

#### Usage Guidance
- **For journal submission:** Which files to include
- **For thesis/dissertation:** How to integrate
- **For presentations:** Extract key figures
- **For grant reports:** Demonstrate rigor

**Total added:** ~430 lines of publication-ready documentation

---

## 📊 Content Distribution

Maintained 70/30 split as designed:

- **70% Fundamentals:** Core concepts for non-programmers (Fundamentals + File Formats + Tools)
- **30% Workflow:** Why scripts run in specific order (Scripts Workflow + enhanced prompts 05-07)

---

## 🗂️ Files Changed

### ScholaRAG-helper Repository (Codebook)

**Modified:**
- `frontend/app/codebook/page.tsx` - Simplified to index with 4 navigation cards
- `frontend/components/GuideLayout.tsx` - Added collapsible Codebook subsections
- `frontend/components/SearchBar.tsx` - Updated 40+ entries to new URLs

**Created:**
- `frontend/app/codebook/fundamentals/page.tsx` (867 lines)
- `frontend/app/codebook/file-formats/page.tsx` (422 lines)
- `frontend/app/codebook/tools/page.tsx` (438 lines)
- `frontend/app/codebook/scripts-workflow/page.tsx` (621 lines)

**Total:** 7 files changed, 1,738 insertions, 1,390 deletions

### ScholaRAG Repository (Prompts)

**Enhanced:**
- `prompts/05_execution_plan.md` (+210 lines)
- `prompts/06_research_conversation.md` (+210 lines)
- `prompts/07_documentation_writing.md` (+430 lines)

**Total:** 3 files changed, ~850 lines added

---

## 🚀 Deployment

All changes automatically deployed via Vercel:

**Live URLs:**
- https://scholar-rag-helper.vercel.app/codebook
- https://scholar-rag-helper.vercel.app/codebook/fundamentals
- https://scholar-rag-helper.vercel.app/codebook/file-formats
- https://scholar-rag-helper.vercel.app/codebook/tools
- https://scholar-rag-helper.vercel.app/codebook/scripts-workflow

---

## 🎓 Target Audience

This release specifically serves:

✅ **Researchers with ZERO programming experience**
- Plain language explanations
- Analogies and visual comparisons
- No assumed technical knowledge

✅ **First-time ScholaRAG users**
- Step-by-step guidance
- Realistic examples
- Troubleshooting help

✅ **Academic researchers conducting systematic reviews**
- PRISMA 2020 compliant
- Publication-ready outputs
- Citation management

---

## 📈 Impact

- **Accessibility:** Lowered barrier to entry for non-technical researchers
- **Clarity:** Visual pipeline diagrams replace abstract descriptions
- **Completeness:** 40+ searchable concepts cover all fundamentals
- **Professionalism:** Monochrome design improves readability and focus
- **Efficiency:** Organized subpages reduce cognitive load

---

## 🔄 Migration Guide

No breaking changes. Existing users can:

1. **Access new Codebook immediately** - No configuration needed
2. **Use improved search** - Press `⌘K` and search for any concept
3. **Reference enhanced prompts** - Check prompts 05-07 for detailed examples

Old `/codebook` URL still works and redirects to new index page.

---

## 🙏 Acknowledgments

Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>

---

## 📦 Download

- **Homepage:** https://scholar-rag-helper.vercel.app
- **Documentation:** https://scholar-rag-helper.vercel.app/guide
- **Codebook:** https://scholar-rag-helper.vercel.app/codebook
- **Source Code:** https://github.com/HosungYou/ScholaRAG-helper

---

**Full Changelog:** v1.0.4...v1.0.5
