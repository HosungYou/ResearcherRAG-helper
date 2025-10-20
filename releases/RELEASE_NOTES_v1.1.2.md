# ScholaRAG v1.1.2 Release Notes

**Release Date**: 2025-10-20
**Type**: Rebranding Release
**Status**: Production Ready

---

## 🎉 Overview

ScholaRAG v1.1.2 is a **complete rebranding** from "ResearcherRAG" to "ScholaRAG", establishing a unique brand identity for the platform.

---

## ✨ What Changed

### Complete Rebranding: ResearcherRAG → ScholaRAG

**New Brand Identity**
- ✅ **New Name**: ScholaRAG (from Latin "schola" meaning school/learning)
- ✅ **New Domain**: scholarag.com (previously researcher-rag-helper.vercel.app)
- ✅ **Updated Logo**: Header and footer now display "ScholaRAG"
- ✅ **Consistent Branding**: All 711+ references updated across codebase

---

## 📊 Statistics

### Files Changed
- **ScholaRAG-helper**: 74 files, 711 references updated
- **ScholaRAG**: 24 files, 117 references updated
- **Total**: 98 files updated

### Changed References
| Repository | Files | References | Time |
|------------|-------|------------|------|
| ScholaRAG-helper | 74 | 711 | ~30 min |
| ScholaRAG | 24 | 117 | ~15 min |

---

## 🔄 Changes by Category

### 1. Frontend (Website)

**Updated Components**:
- Landing page header: "RAG.lab" → "ScholaRAG"
- Footer brand name: "RAG.lab" → "ScholaRAG"
- GitHub repository links updated
- All navigation references updated

**Files Updated**:
- `frontend/app/page.tsx` - Main landing page
- `frontend/components/*.tsx` - All React components
- `frontend/app/guide/**/*.tsx` - All guide pages
- `frontend/app/codebook/**/*.tsx` - All codebook pages

### 2. Documentation

**Updated Files**:
- All release notes (v1.0.0 - v1.1.1)
- README.md files
- API setup guides
- Implementation roadmaps
- Discussion documents
- Workshop materials

**Locations**:
- `releases/*.md` - All release documentation
- `docs/*.md` - All technical documentation
- `discussion/*.md` - All planning documents
- `examples/*.md` - All example documentation

### 3. Backend (Main Repository)

**Updated Files**:
- CLI tool: `scholarag_cli.py`
- All Python scripts
- YAML configuration files
- CLAUDE.md instructions
- Stage prompts

**Locations**:
- `scripts/*.py` - All Python scripts
- `prompts/*.md` - All prompt templates
- `interfaces/*.py` - All interface modules
- `.claude/stages.yaml` - Stage configuration

---

## 🌐 Domain Setup

### New Domain Configuration

**Domain**: scholarag.com
**DNS Provider**: Namecheap
**Hosting**: Vercel

**DNS Records**:
```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic

Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

**Deployment**:
- ✅ Automatic deployment from GitHub
- ✅ Production URL: https://scholarag.com
- ✅ www redirect configured
- ✅ SSL certificate auto-provisioned

---

## 🔧 Technical Details

### Repository Changes

**GitHub Repositories**:
- Main: `HosungYou/ScholaRAG` (formerly ScholarRAG)
- Helper: `HosungYou/ScholaRAG-helper` (formerly ScholarRAG-helper)

**Directory Changes**:
- Local directory renamed: `ScholarRAG` → `ScholaRAG`
- Helper directory renamed: `ScholarRAG-helper` → `ScholaRAG-helper`

### Commit History

```bash
# ScholaRAG-helper
59804a0 Rebrand: Update all ScholarRAG references to ScholaRAG
c7e838b Trigger Vercel deployment
585463b Deploy: ScholaRAG rebranding complete
0fde6d0 Redeploy: Force new Vercel deployment after server issues

# ScholaRAG
b02901e Rebrand: Update all ScholarRAG references to ScholaRAG
```

---

## 🚀 Migration Guide

### For Existing Users

**No action required!**

All changes are cosmetic - functionality remains identical.

**If you cloned the repository before Oct 20, 2025**:

```bash
# Update remote URLs
cd ScholaRAG
git remote set-url origin https://github.com/HosungYou/ScholaRAG.git
git pull

cd ../ScholaRAG-helper
git remote set-url origin https://github.com/HosungYou/ScholaRAG-helper.git
git pull
```

**If you have custom configurations**:

No changes needed - all CLI commands remain the same:

```bash
# Still works exactly the same
python scholarag_cli.py init
python scripts/01_fetch_papers.py projects/my-project/
```

---

## 🐛 Bug Fixes

### Vercel Deployment Issues (Resolved)

**Issue**: Deployment stuck in "Queued" state during rebranding
- Cause: Vercel server instability on Oct 20, 2025
- Resolution: Multiple deployment retries, eventual success
- Status: ✅ Resolved, site live at scholarag.com

---

## 📚 Documentation Updates

### Updated URLs

**Old**:
- researcher-rag-helper.vercel.app
- References to "ResearcherRAG" and "ScholarRAG"

**New**:
- scholarag.com
- Consistent "ScholaRAG" branding

### External Links

All external documentation links remain functional:
- GitHub repository links updated
- API documentation unchanged
- Tutorial videos unchanged (content still valid)

---

## 🎯 Brand Rationale

### Why "ScholaRAG"?

**Etymology**:
- "Schola" (Latin) = school, place of learning
- "RAG" = Retrieval-Augmented Generation

**Benefits**:
- ✅ Unique, memorable name
- ✅ Clear educational focus
- ✅ Domain available (scholarag.com)
- ✅ Searchable, SEO-friendly
- ✅ Academic heritage (Latin roots)

**vs. "ResearcherRAG"**:
- ResearcherRAG: Generic, descriptive
- ScholaRAG: Distinctive, brandable
- scholarag.com: Professional custom domain

---

## 🔐 Security

### No Security Changes

All security measures remain identical:
- API keys stored in `.env`
- `.gitignore` unchanged
- No new dependencies
- No permission changes

---

## ⚡ Performance

### No Performance Impact

Rebranding is purely cosmetic:
- ✅ Same codebase architecture
- ✅ Same build times
- ✅ Same runtime performance
- ✅ Same API rate limits

**Build Statistics**:
- Build time: ~1m 7s (unchanged)
- Bundle size: 150 kB (unchanged)
- Static pages: 33 (unchanged)

---

## 🤝 Contributing

Repository structure unchanged - same contribution workflow:

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/ScholaRAG-helper.git

# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git commit -m "Add your feature"

# Push and create PR
git push origin feature/your-feature
```

---

## 📝 Compatibility

### Backward Compatibility

**100% backward compatible** with v1.1.1:
- All configuration files work unchanged
- All CLI commands identical
- All scripts function the same
- All APIs unchanged

**Breaking Changes**: **None**

---

## 🗓️ Release Timeline

| Date | Event | Status |
|------|-------|--------|
| Oct 20, 2025 | Domain purchased (scholarag.com) | ✅ Complete |
| Oct 20, 2025 | Rebranding executed (711+ refs) | ✅ Complete |
| Oct 20, 2025 | GitHub repositories renamed | ✅ Complete |
| Oct 20, 2025 | DNS configured (Namecheap) | ✅ Complete |
| Oct 20, 2025 | Deployed to production (Vercel) | ✅ Complete |
| Oct 20, 2025 | v1.1.2 release published | ✅ Complete |

---

## 📞 Support

**Questions about the rebranding?**

- **GitHub Issues**: https://github.com/HosungYou/ScholaRAG/issues
- **Discussions**: https://github.com/HosungYou/ScholaRAG/discussions
- **Website**: https://scholarag.com

---

## 🙏 Acknowledgments

Special thanks to:
- **Claude Code** for automated rebranding assistance
- **Vercel** for hosting platform
- **Namecheap** for domain registration

---

**Welcome to ScholaRAG v1.1.2!** 🎓

*The platform formerly known as ResearcherRAG, now with a stronger brand identity and custom domain.*

---

**Next Release**: v1.2.0 (Planned features from v1.1.1 roadmap)
