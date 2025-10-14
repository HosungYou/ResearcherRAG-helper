# ResearcherRAG Helper Release Notes

This directory contains detailed release notes for all versions of ResearcherRAG Helper.

---

## 📋 Available Releases

### Latest Release
- **[v1.0.1](RELEASE_NOTES_v1.0.1.md)** (2025-10-13) - Dark Mode Bug Fix
  - 🐛 Critical fix for white text on white background in dark mode
  - 🎨 Added CSS variables for proper dark mode support
  - ✅ WCAG AA contrast compliance verified
  - 📝 Comprehensive technical documentation

### Previous Releases
- **[v1.0.0](RELEASE_NOTES_v1.0.0.md)** (2025-10-11) - Initial Launch
  - 🎉 First public release of ResearcherRAG Helper
  - 📚 Bookdown-style documentation platform
  - 🤖 AI-powered chatbot with RAG
  - 📥 Resource download center
  - 🛠️ Complete technology stack setup

---

## 📖 Release Note Format

Each release note includes:

### Standard Sections
1. **Overview**: What's new in this release
2. **Features/Fixes**: Detailed changes
3. **Technical Details**: Code-level implementation
4. **Migration Guide**: How to upgrade (if applicable)
5. **Known Issues**: Current limitations
6. **Changelog**: Quick reference of all changes

### Bug Fix Releases (x.x.1, x.x.2, etc.)
- **Problem Summary**: What was broken
- **Root Cause Analysis**: Why it happened
- **Solution**: How it was fixed
- **Verification**: Testing performed
- **Impact**: Who was affected

### Feature Releases (x.1.0, x.2.0, etc.)
- **New Features**: What's been added
- **Improvements**: Enhanced existing functionality
- **Deprecations**: What's being phased out
- **Breaking Changes**: Compatibility notes

### Major Releases (2.0.0, 3.0.0, etc.)
- **Vision**: Strategic direction
- **Architecture Changes**: Major refactoring
- **Migration Path**: Upgrade instructions
- **Roadmap**: Future plans

---

## 🔗 Quick Links

### GitHub Releases
- **All Releases**: https://github.com/HosungYou/ResearcherRAG-helper/releases
- **Latest**: https://github.com/HosungYou/ResearcherRAG-helper/releases/latest

### Version History
```
v1.0.1 (2025-10-13) - Dark Mode Bug Fix        [Current]
v1.0.0 (2025-10-11) - Initial Launch
```

---

## 📝 Versioning Scheme

ResearcherRAG Helper follows [Semantic Versioning](https://semver.org/) (SemVer):

```
MAJOR.MINOR.PATCH

Example: 1.2.3
         │ │ │
         │ │ └─ Patch: Bug fixes, no new features
         │ └─── Minor: New features, backward compatible
         └───── Major: Breaking changes
```

### Version Increment Rules

**MAJOR (x.0.0)**:
- Breaking API changes
- Major architecture refactoring
- Non-backward compatible updates
- Example: v1.0.0 → v2.0.0

**MINOR (1.x.0)**:
- New features added
- Backward compatible changes
- Significant improvements
- Example: v1.0.0 → v1.1.0

**PATCH (1.0.x)**:
- Bug fixes
- Security patches
- Performance improvements (no API changes)
- Example: v1.0.0 → v1.0.1

---

## 🎯 Release Process

### 1. Development
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature
```

### 2. Testing
- Run `npm run build` to verify build
- Test locally with `npm run dev`
- Manual testing on staging environment
- Verify all links and functionality

### 3. Documentation
```bash
# Create release notes
cd docs/releases
cp RELEASE_NOTES_TEMPLATE.md RELEASE_NOTES_v1.x.x.md

# Edit release notes with:
# - What changed
# - Why it changed
# - How to upgrade
# - Known issues
```

### 4. Release
```bash
# Merge to main
git checkout main
git merge feature/new-feature

# Create Git tag
git tag -a v1.x.x -m "Release v1.x.x"
git push origin v1.x.x

# Create GitHub release
gh release create v1.x.x \
  --title "v1.x.x - Release Title" \
  --notes-file docs/releases/RELEASE_NOTES_v1.x.x.md
```

### 5. Deployment
- Vercel automatically deploys from `main` branch
- Monitor deployment at https://vercel.com/dashboard
- Verify live site functionality

---

## 📊 Release Statistics

### v1.0.x Series
- **Total Releases**: 2
- **Release Frequency**: 1 every 1.5 days
- **Bug Fixes**: 1 critical
- **New Features**: 0 (initial series)
- **Breaking Changes**: 0

### Upcoming
- **v1.1.0** (Planned: November 2025)
  - Complete all 7 documentation chapters
  - Chatbot UI implementation
  - Resource download center
  - Manual dark mode toggle

---

## 🐛 Reporting Issues

Found a bug? Please report it:

1. **Check existing releases** for known issues
2. **Search GitHub Issues** to avoid duplicates
3. **Create new issue** with:
   - Version number
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if UI issue)
   - Browser and OS details

**Issue Template**: https://github.com/HosungYou/ResearcherRAG-helper/issues/new

---

## 📞 Support

### Questions about a release?
- **GitHub Discussions**: https://github.com/HosungYou/ResearcherRAG-helper/discussions
- **Email**: newhosung@gmail.com
- **Main Repository**: https://github.com/HosungYou/ResearcherRAG

### Security Issues
For security vulnerabilities, please email privately rather than opening a public issue:
- **Email**: newhosung@gmail.com
- **Subject**: "[SECURITY] ResearcherRAG Helper - Brief Description"

---

## 📜 License

All release notes are part of the ResearcherRAG Helper project and are licensed under the MIT License.

See [LICENSE](../../LICENSE) for details.

---

## 🙏 Contributing

Want to help improve release notes?

### Guidelines
- **Clarity**: Write for users, not just developers
- **Completeness**: Include what/why/how
- **Examples**: Show code snippets and screenshots
- **Links**: Reference related documentation
- **Testing**: Document verification steps

### Submitting Improvements
```bash
# Fork repository
# Edit release notes
# Submit pull request with:
# - Clear description of improvements
# - Version number in PR title
```

---

**Last Updated**: 2025-10-13
**Maintained by**: Hosung You (@HosungYou)

🤖 _This README is generated and maintained with [Claude Code](https://claude.com/claude-code)_
