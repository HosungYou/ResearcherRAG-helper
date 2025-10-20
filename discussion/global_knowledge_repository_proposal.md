# Global Knowledge Repository Proposal

**Date**: 2025-10-15
**Status**: Proposal
**Target Version**: v2.0.0

## Problem Statement

Currently, ScholarRAG operates with **project-isolated RAG systems**:

```
Project A: 50 papers → Embed all 50 → Store in data/04_rag/chroma_db/
Project B: 60 papers → Embed all 60 → Store in data/04_rag/chroma_db/
                        ↑ 20 papers overlap → Re-embedded unnecessarily
```

**Inefficiencies:**
1. **Duplicate processing**: Same papers re-embedded across projects
2. **Wasted storage**: Duplicate PDFs and embeddings
3. **No cross-project insights**: Cannot query "What do ALL my projects say about X?"
4. **Slow startup**: New projects must re-process common papers

## Proposed Solution: Two-Tier Architecture

### Tier 1: Global Knowledge Repository (Shared)

Central storage for ALL papers ever indexed:

```
~/.scholarag/global/
├── vector_db/
│   └── chroma_global/              # Universal vector DB
├── pdfs/
│   └── <sha256_hash>.pdf           # Deduplicated PDFs
├── papers_registry.db              # SQLite metadata
└── config.json                     # Global settings
```

**Schema: papers_registry.db**
```sql
CREATE TABLE papers (
    paper_id TEXT PRIMARY KEY,           -- SHA-256 hash of DOI
    doi TEXT UNIQUE,
    arxiv_id TEXT,
    title TEXT NOT NULL,
    authors TEXT,
    year INTEGER,
    abstract TEXT,
    pdf_path TEXT,                       -- Path to deduplicated PDF
    embedding_id TEXT,                   -- ChromaDB document ID
    first_indexed TIMESTAMP,
    last_accessed TIMESTAMP,
    access_count INTEGER DEFAULT 1
);

CREATE TABLE paper_projects (
    paper_id TEXT,
    project_name TEXT,
    inclusion_stage TEXT,               -- "identified", "screened", "included"
    added_date TIMESTAMP,
    FOREIGN KEY (paper_id) REFERENCES papers(paper_id)
);

CREATE INDEX idx_doi ON papers(doi);
CREATE INDEX idx_year ON papers(year);
CREATE INDEX idx_projects ON paper_projects(project_name);
```

### Tier 2: Project-Specific Views (Lightweight)

Each project stores ONLY references to global papers:

```
ScholarRAG/projects/ai-chatbots-language-learning/
├── config.yaml                      # Same as before
├── project_metadata.json            # Project scope definition
└── paper_references.json            # ONLY paper IDs, not full data
```

**Schema: paper_references.json**
```json
{
  "project_name": "AI Chatbots for Language Learning",
  "created": "2025-10-13",
  "total_papers": 45,
  "papers": [
    {
      "paper_id": "sha256_abc123...",
      "inclusion_reason": "Relevant to speaking skills",
      "prisma_stage": "included_after_full_text",
      "custom_notes": "Key paper for methodology"
    }
  ],
  "query_filters": {
    "year_range": [2015, 2025],
    "required_keywords": ["speaking", "chatbot"],
    "excluded_keywords": ["reading", "writing"]
  }
}
```

## Architecture Components

### 1. Global Knowledge Manager

```python
class GlobalKnowledgeManager:
    """
    Centralized manager for all papers across projects.

    Responsibilities:
    - Deduplicate papers by DOI/arXiv ID
    - Store papers once, reuse across projects
    - Maintain global vector database
    - Track paper usage across projects
    """

    def __init__(self, global_path: str = "~/.scholarag/global"):
        self.global_path = Path(global_path).expanduser()
        self.db_path = self.global_path / "papers_registry.db"
        self.vector_db_path = self.global_path / "vector_db" / "chroma_global"
        self.pdf_storage = self.global_path / "pdfs"

        self._init_storage()

    def add_paper(self, paper_metadata: dict, pdf_path: str = None) -> str:
        """
        Add paper to global registry (with deduplication).

        Returns:
            paper_id: Unique identifier for the paper
        """
        # Generate paper ID from DOI or arXiv ID
        paper_id = self._generate_paper_id(paper_metadata)

        # Check if already exists
        if self.paper_exists(paper_id):
            self._increment_access_count(paper_id)
            return paper_id

        # Store PDF (deduplicated)
        stored_pdf_path = self._store_pdf(paper_id, pdf_path)

        # Generate embeddings (one-time processing)
        embedding_id = self._generate_and_store_embeddings(
            paper_id, stored_pdf_path, paper_metadata
        )

        # Save to registry
        self._save_to_registry(paper_id, paper_metadata, stored_pdf_path, embedding_id)

        return paper_id

    def get_paper(self, paper_id: str) -> dict:
        """Retrieve paper metadata from global registry"""
        pass

    def link_paper_to_project(self, paper_id: str, project_name: str,
                             inclusion_stage: str):
        """Record that a project is using this paper"""
        pass
```

### 2. Project-Specific RAG (Lightweight Wrapper)

```python
class ProjectRAG:
    """
    Project-specific RAG interface.

    Responsibilities:
    - Reference papers from global registry
    - Apply project-specific filters
    - Provide isolated query interface
    """

    def __init__(self, project_path: str):
        self.project_path = Path(project_path)
        self.global_manager = GlobalKnowledgeManager()
        self.paper_refs = self._load_paper_references()

    def add_paper_to_project(self, paper_metadata: dict, pdf_path: str = None):
        """
        Add paper to THIS project (via global registry).
        """
        # 1. Add to global registry (or reuse if exists)
        paper_id = self.global_manager.add_paper(paper_metadata, pdf_path)

        # 2. Link to this project
        self.global_manager.link_paper_to_project(
            paper_id, self.project_path.name, "identified"
        )

        # 3. Add to project's paper_references.json
        self._add_paper_reference(paper_id)

    def query(self, question: str, top_k: int = 10):
        """
        Query ONLY papers in this project.
        """
        # Filter ChromaDB query to this project's paper IDs
        paper_ids = [p['paper_id'] for p in self.paper_refs]

        results = self.global_manager.query_vector_db(
            question=question,
            filter_paper_ids=paper_ids,  # Project-specific filter
            top_k=top_k
        )

        return results
```

### 3. Cross-Project Insights

```python
class CrossProjectAnalyzer:
    """
    Analyze papers across multiple projects.
    """

    def __init__(self):
        self.global_manager = GlobalKnowledgeManager()

    def query_all_projects(self, question: str):
        """Query across ALL papers in global registry"""
        return self.global_manager.query_vector_db(
            question=question,
            filter_paper_ids=None  # No filter = search everything
        )

    def compare_projects(self, project_a: str, project_b: str, question: str):
        """Compare how two projects answer the same question"""
        results_a = ProjectRAG(project_a).query(question)
        results_b = ProjectRAG(project_b).query(question)

        return {
            'project_a': results_a,
            'project_b': results_b,
            'overlap': self._find_overlapping_papers(results_a, results_b)
        }

    def find_common_themes(self, projects: List[str]):
        """Find papers cited across multiple projects"""
        pass
```

## Implementation Plan

### Phase 1: Core Infrastructure (v2.0.0-alpha)
- [ ] Create `GlobalKnowledgeManager` class
- [ ] Implement SQLite registry with schema
- [ ] Implement paper deduplication logic (DOI/arXiv ID/title similarity)
- [ ] Implement global ChromaDB storage
- [ ] Add migration script: Convert existing projects → global registry

**Deliverables:**
- `scripts/global_knowledge_manager.py`
- `scripts/migrate_to_global.py`
- Documentation: Migration guide

### Phase 2: Project Integration (v2.0.0-beta)
- [ ] Refactor `05_build_rag.py` to use global registry
- [ ] Update `ProjectRAG` class to use lightweight references
- [ ] Add CLI commands:
  - `scholarag global-status` (show global registry stats)
  - `scholarag global-search <query>` (search all papers)
  - `scholarag project-papers <project>` (list project's papers)

**Deliverables:**
- Updated `scripts/05_build_rag.py`
- `scripts/project_rag.py`
- CLI updates in `scholarag_cli.py`

### Phase 3: Cross-Project Features (v2.0.0)
- [ ] Implement `CrossProjectAnalyzer`
- [ ] Add CLI command: `scholarag compare-projects <project_a> <project_b>`
- [ ] Add web interface: Global knowledge dashboard
- [ ] Add visualization: Paper overlap across projects

**Deliverables:**
- `scripts/cross_project_analyzer.py`
- Web dashboard (Streamlit or React)
- Documentation: Cross-project analysis guide

### Phase 4: Advanced Features (v2.1.0)
- [ ] Implement incremental updates (add papers without re-embedding)
- [ ] Add paper recommendation: "Papers similar to your project"
- [ ] Add collaboration features: Share global registry across team
- [ ] Add cloud sync: Backup global registry to cloud storage

## Backward Compatibility

**Migration Strategy:**
1. Detect legacy project structure: `data/04_rag/chroma_db/`
2. Auto-migrate on first run of v2.0:
   - Extract all papers from project's ChromaDB
   - Add to global registry
   - Generate `paper_references.json`
   - Keep original files as backup
3. Support both modes:
   - Legacy mode: Continue with isolated RAG (deprecated)
   - Global mode: Use new two-tier architecture (default)

**CLI flag:**
```bash
# Use legacy isolated RAG
scholarag query --mode=legacy

# Use global RAG (default in v2.0+)
scholarag query --mode=global
```

## Benefits Summary

| Metric | Before (Isolated) | After (Global) | Improvement |
|--------|-------------------|----------------|-------------|
| **Storage** | 500MB per project | 500MB total | 90% reduction (10 projects) |
| **Processing time** | 30 min per project | 3 min (reuse) | 90% faster |
| **Cross-project query** | Impossible | Native support | New feature |
| **Duplicate detection** | Per-project only | Global dedup | Better quality |
| **Knowledge accumulation** | Scattered | Centralized | Better UX |

## Risks & Mitigations

**Risk 1: Breaking changes for existing users**
- **Mitigation**: Auto-migration script with backup

**Risk 2: Global DB corruption affects all projects**
- **Mitigation**: Regular backups, export/import functionality

**Risk 3: Privacy concerns (shared knowledge base)**
- **Mitigation**: Local-only by default, optional cloud sync

**Risk 4: Complexity increase**
- **Mitigation**: Abstract complexity, maintain simple CLI interface

## Timeline

- **Week 1-2**: Phase 1 (Core infrastructure)
- **Week 3**: Phase 2 (Project integration)
- **Week 4**: Phase 3 (Cross-project features)
- **Week 5-6**: Testing, documentation, release

**Target Release**: December 2025

## Discussion Questions

1. Should global registry be mandatory or optional?
2. Should we support team collaboration (shared global registry)?
3. How to handle private/confidential papers (per-project only)?
4. Should we implement cloud sync in v2.0 or later?

---

**Next Steps:**
- [ ] Review this proposal
- [ ] Gather feedback from users
- [ ] Create GitHub issue for tracking
- [ ] Start Phase 1 implementation
