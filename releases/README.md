# ScholaRAG Release Notes

This directory contains comprehensive release documentation for all versions of ScholaRAG, organized chronologically for easy navigation and reference.

## 📁 Directory Structure

```
releases/
├── README.md                    # This overview file
├── CLAUDE.md                    # Claude Code automation guide
├── RELEASE_NOTES_v1.0.0.md     # Initial release
├── RELEASE_NOTES_v1.0.1.md     # Dark mode bug fix
├── RELEASE_NOTES_v1.0.2.md     # Theme simplification
├── RELEASE_NOTES_v1.0.3.md     # Python scripts & backend automation
├── RELEASE_NOTES_v1.0.5.md     # Codebook restructure & enhanced prompts
└── RELEASE_NOTES_v1.0.6.md     # Stage-aware automation (3-tier architecture)
```

## 🚀 Version Overview

### [v1.0.6](RELEASE_NOTES_v1.0.6.md) - Current Release
**Release Date**: October 21, 2025
**Type**: Stage-Aware Automation (3-Tier Architecture)

**Key Highlights**:
- 🎯 **3-Tier Configuration Architecture** (Prompts / .claude/ / CLAUDE.md)
- 🤖 **Stage-Aware CLI** with 4 new commands
- 📊 **Automatic State Tracking** via context.json
- ✅ **Prerequisite Validation** to prevent workflow errors
- 🚀 **Zero Terminal Commands** - fully conversational workflow

**Breaking Changes**: No
**Migration Required**: No (opt-in with `scholarag upgrade`)

---

### [v1.0.5](RELEASE_NOTES_v1.0.5.md)
**Release Date**: October 14, 2025
**Type**: Comprehensive Codebook & Enhanced Prompts

**Key Highlights**:
- 📖 **Complete Codebook Restructure** with 4 separate subpages
- 🎨 **Monochrome Design** for better readability
- 📝 **Enhanced Prompts 05-07** with pipeline visualizations
- 🔍 **40+ Search Entries** for quick concept lookup
- 🧭 **Improved Navigation** with collapsible subsections

**Breaking Changes**: No
**Migration Required**: No

---

### [v1.0.3](RELEASE_NOTES_v1.0.3.md)
**Release Date**: October 14, 2025
**Type**: Major Backend Enhancement / Python Automation Scripts

**Key Highlights**:
- 🐍 **7 Python Scripts** for complete systematic review automation
- 📊 **Database Strategy Update** (Semantic Scholar, OpenAlex, arXiv)
- 📚 **API Setup Guide** (Claude API, embeddings, vector databases)
- 🎯 **Example Project** with expected results and validation
- 📝 **Complete Documentation** (CLAUDE.md, .env.example, guides)
- 🔧 **CLI Tool Extensions** planned (search, download_pdfs commands)

**Breaking Changes**: No - all changes are additive
**Migration Required**: No - existing projects unaffected

---

### [v1.0.2](RELEASE_NOTES_v1.0.2.md)
**Release Date**: October 14, 2025
**Type**: Theme Simplification

**Key Highlights**:
- 🎨 Disabled dark mode completely
- 💡 Simplified to single light theme
- 📦 Reduced CSS bundle size (45.4KB → 44.8KB)
- 🧹 Removed all `dark:*` utility classes

**Breaking Changes**: No
**Migration Required**: No

---

### [v1.0.1](RELEASE_NOTES_v1.0.1.md)
**Release Date**: October 14, 2025
**Type**: Bug Fix / Dark Mode Implementation

**Key Highlights**:
- 🐛 Fixed white-on-white text visibility in dark mode
- 🎨 Added proper CSS variables for theme support
- ♿ Improved WCAG contrast ratios (17.8:1)
- 🌙 Implemented automatic dark mode detection

**Breaking Changes**: No
**Migration Required**: No

---

### [v1.0.0](RELEASE_NOTES_v1.0.0.md) - Initial Release
**Release Date**: October 13, 2025
**Type**: Initial Public Release

**Key Highlights**:
- 🎓 Educational platform for RAG-based systematic reviews
- 📖 Complete practical guide (5 stages)
- 🌐 Next.js 15.5.4 frontend with Tailwind CSS
- 📚 Comprehensive documentation and tutorials
- 🔍 Interactive web interface

**Breaking Changes**: N/A
**Migration Required**: N/A

---

## 🔄 Release Cadence

### Major Releases (X.0.0)
- **Frequency**: Every 6-12 months
- **Content**: New features, architectural changes, breaking changes
- **Migration**: Upgrade guide provided
- **Support**: Previous major version supported for 6 months

### Minor Releases (X.Y.0)
- **Frequency**: Every 1-2 months
- **Content**: New features, enhancements, non-breaking changes
- **Migration**: Backward compatible, minimal changes required
- **Support**: Latest minor version recommended

### Patch Releases (X.Y.Z)
- **Frequency**: As needed for critical fixes and incremental features
- **Content**: Bug fixes, small features, documentation updates
- **Migration**: Drop-in replacement, no changes required
- **Support**: Immediate upgrade recommended for bug fixes

---

## 📊 Release Metrics Comparison

| Metric | v1.0.0 | v1.0.1 | v1.0.2 | v1.0.3 | v1.0.5 | v1.0.6 | Latest Change |
|--------|--------|--------|--------|--------|--------|--------|---------------|
| Frontend Pages | 8 | 8 | 8 | 8 | 12 | 12 | Stable |
| Python Scripts | 0 | 0 | 0 | 7 | 7 | 7 | Stable |
| Documentation Files | 12 | 14 | 16 | 21 | 25 | 28 | +12% |
| Example Projects | 0 | 0 | 0 | 1 | 1 | 2 | **+100%** |
| Database APIs | 3 | 3 | 3 | 3 | 3 | 3 | Stable |
| Dark Mode Support | Yes | Yes | No | No | No | No | Removed |
| CSS Bundle Size | 45.4KB | 45.4KB | 44.8KB | 44.8KB | 44.8KB | 44.8KB | Stable |
| Automation Level | 0% | 0% | 0% | 100% | 100% | 100% | **Full** |
| CLI Commands | 1 | 1 | 1 | 3 (planned) | 3 (planned) | 5 | **+400%** |
| Codebook Pages | 1 | 1 | 1 | 1 | 4 | 4 | Stable |
| Search Entries | 15 | 15 | 15 | 15 | 40+ | 40+ | Stable |
| Stage Tracking | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | **New** |

---

## 🛠️ Technical Evolution

### Architecture Changes
- **v1.0.0**: Documentation-only platform (Next.js frontend)
- **v1.0.3**: Full-stack platform (Next.js + Python backend automation)

### Database Strategy Evolution
- **v1.0.0**: Mentioned PubMed/Scopus/ERIC (traditional databases)
- **v1.0.3**: **Switched to Semantic Scholar/OpenAlex/arXiv** (automation-focused)

### Python Automation
- **v1.0.0-1.0.2**: No automation scripts
- **v1.0.3**: **7-stage pipeline** (fetch, dedupe, screen, download, RAG, query, PRISMA)

### Documentation Maturity
- **v1.0.0**: Basic setup instructions
- **v1.0.3**: Comprehensive guides (API setup, cost calculator, validation checklist)

---

## 📚 Documentation Evolution

### v1.0.0 Documentation
- Basic README
- Frontend guide (5 stages)
- Simple installation instructions

### v1.0.3 Documentation
- **Enhanced CLAUDE.md** with database strategy and 7-stage pipeline
- **API Setup Guide** (650+ lines) with cost calculator
- **Example Project** with validation checklist
- **.env.example** with all environment variables
- **Expected Statistics** for result validation

---

## 🔍 Migration Guidance

### From v1.0.0-1.0.2 to v1.0.3

**Recommended Approach**: Install Python backend alongside existing frontend
**Estimated Time**: 15-30 minutes
**Complexity**: Low - all changes are additive

**Key Steps**:
1. Install Python dependencies: `pip install -r requirements.txt`
2. Add `ANTHROPIC_API_KEY` to `.env` file
3. Test with example project: `python scripts/01_fetch_papers.py --help`
4. No frontend changes required - works alongside existing docs

**Rollback Strategy**: Simply don't use new Python scripts - frontend unaffected

### Future Migration Considerations
- **Semantic Versioning**: Breaking changes only in major versions
- **Backward Compatibility**: Frontend and backend independently upgradable
- **Migration Tools**: Automated where possible, manual steps documented
- **Testing**: Comprehensive upgrade testing protocols

---

## 🐛 Known Issues & Support

### Current Known Issues
- **v1.0.3**: CLI extensions (search, download_pdfs) planned but not yet implemented
- **All versions**: No known critical bugs

### Support Channels
- **GitHub Issues**: Bug reports and feature requests
- **Documentation**: Comprehensive guides in `docs/` folder
- **Email**: newhosung@gmail.com

---

## 📅 Release History

```
v1.0.6 (2025-10-21) ← Current Release
└── Stage-Aware Automation (3-Tier Architecture)
    ├── 3-Tier Configuration (.claude/ folder)
    ├── 4 new CLI commands (stage-status, run-stage, next, upgrade)
    ├── Automatic state tracking (context.json)
    ├── Prerequisite validation system
    ├── Education AI Tutoring example project
    └── Zero terminal commands workflow

v1.0.5 (2025-10-14)
└── Comprehensive Codebook & Enhanced Prompts
    ├── Codebook restructured into 4 subpages
    ├── Monochrome design philosophy
    ├── Enhanced prompts 05-07 (+850 lines)
    ├── 40+ search entries
    ├── Improved navigation with collapsible sections
    └── Publication-ready documentation templates

v1.0.3 (2025-10-14)
└── Python Automation Backend
    ├── 7 automated scripts (PRISMA pipeline)
    ├── Database strategy update (S2/OpenAlex/arXiv)
    ├── API setup guide (650+ lines)
    ├── Example project with validation
    ├── .env.example template
    ├── CLAUDE.md documentation
    └── CLI tool foundation

v1.0.2 (2025-10-14)
└── Theme Simplification
    ├── Disabled dark mode
    ├── CSS bundle optimization
    └── Removed dark:* classes

v1.0.1 (2025-10-14)
└── Dark Mode Fix
    ├── Fixed visibility issues
    ├── CSS variable system
    └── WCAG compliance

v1.0.0 (2025-10-13)
└── Initial Public Release
    ├── Next.js frontend
    ├── 5-stage practical guide
    ├── Documentation site
    └── Interactive UI
```

---

## 🎯 Future Roadmap Preview

### v1.1.0 (Planned: Q4 2025)
- Complete CLI tool implementation (search, download_pdfs commands)
- Batch processing improvements
- Progress tracking UI for web interface

### v1.2.0 (Planned: Q1 2026)
- Web interface for running Python scripts
- Real-time progress monitoring
- Project management dashboard

### v2.0.0 (Vision: Q2 2026)
- Full web-based automation (no local Python needed)
- Cloud vector database integration
- Multi-user project collaboration
- Advanced analytics and reporting

---

## 📋 Release Notes Writing Guide

### Purpose
Release notes serve as comprehensive documentation for developers, providing:
- **Change Tracking**: What changed, why, and how
- **Code Examples**: Actual code snippets showing before/after
- **Migration Guidance**: Step-by-step upgrade instructions
- **Technical Context**: Architecture decisions and trade-offs

### Target Audience
- **Developers**: Team members and contributors
- **Researchers**: Users of the automation scripts
- **Technical Leads**: Architecture and planning decisions

### Required Sections

See [CLAUDE.md](CLAUDE.md) for detailed instructions on generating release notes.

### File Naming Convention
- **Format**: `RELEASE_NOTES_vX.Y.Z.md`
- **Examples**: `RELEASE_NOTES_v1.0.3.md`, `RELEASE_NOTES_v2.0.0.md`
- **Location**: `releases/` directory (top-level)

### Version Numbering (Semantic Versioning)

**Major Version (X.0.0)**:
- Breaking changes
- Major features
- Architecture rewrites
- API incompatibilities

**Minor Version (X.Y.0)**:
- New features
- Non-breaking enhancements
- New modules
- Backward compatible changes

**Patch Version (X.Y.Z)**:
- Bug fixes
- Security patches
- Minor improvements
- Documentation updates

---

**📝 Note**: Each release note contains detailed documentation, code examples, and migration guidance. Always refer to the specific version file for accurate technical details.

**🔄 Last Updated**: October 21, 2025
**📊 Current Version**: v1.0.6
**👥 Maintained By**: ScholaRAG Development Team

🤖 _This README is generated and maintained with [Claude Code](https://claude.com/claude-code)_
