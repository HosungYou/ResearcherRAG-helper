# CLAUDE.md - Release Notes Generation Guide

This file provides instructions for Claude Code to automatically generate comprehensive release notes for ScholarRAG project deployments.

## Purpose

When creating release notes for this project, Claude Code should follow the structured format defined in [README.md](README.md) to ensure consistency, completeness, and maximum value for developers and researchers.

## Target Audience

Release notes are written for:
- **Developers**: Team members and contributors
- **Researchers**: Users conducting systematic literature reviews
- **Technical Leads**: Architecture and planning decisions
- **Contributors**: Open-source community members

They should include:
- Technical implementation details
- Actual code snippets (before/after)
- Documentation updates
- API modifications
- Deployment instructions
- Migration paths

---

## Automated Generation Process

### Step 1: Gather Context

**Required Information**:
```bash
# Get git commits since last release
git log --oneline --since="YYYY-MM-DD" --until="YYYY-MM-DD"

# Get detailed commits with file changes
git log --stat --since="YYYY-MM-DD"

# Get diff for specific commits
git show COMMIT_HASH

# Check current version
cat package.json | grep version  # Frontend
cat setup.py | grep version      # Backend (if applicable)
```

**Extract**:
- Commit hashes
- Commit messages
- Files changed (with line counts)
- Code diffs for major changes
- New files added

### Step 2: Categorize Changes

**Group commits by type**:
- 🐍 **Python Backend**: Scripts, algorithms, data processing
- 🌐 **Frontend**: Next.js pages, components, UI/UX
- 📚 **Documentation**: Guides, tutorials, API docs
- 🔧 **Technical**: Architecture, refactoring, dependencies
- 🚀 **Deployment**: Vercel, configuration, infrastructure
- 🎨 **UI/UX**: Visual design, user experience
- 🐛 **Bug Fixes**: Corrections to broken functionality

### Step 3: Identify Critical Information

**Must Extract**:
1. **Breaking Changes**: Any API/schema/config changes requiring migration
2. **New Scripts**: Python automation scripts added
3. **Database Strategy**: Changes to supported databases or APIs
4. **Environment Variables**: New or changed configuration
5. **Dependencies**: Updated packages or new requirements
6. **Documentation**: New guides, tutorials, or examples

---

## Release Note Template

**Use this template structure**:

```markdown
# Release Notes v1.0.X - [Clear Descriptive Title]

**Release Date**: October XX, 2025
**Priority**: [Low | Medium | High | Critical]
**Type**: [Feature | Enhancement | Bug Fix | Documentation]

---

## 🎯 Overview

[2-3 paragraph summary of the release]
- What changed
- Why it changed
- Impact on users/developers

### Quick Stats
- **Files Changed**: X files
- **Python Scripts Added**: X
- **Documentation Added**: X pages
- **Lines Added**: X
- **Lines Removed**: X

---

## ✨ Major Features

### 1) [Feature Name]
**What Changed**: [Description]
**Why**: [Justification]
**Impact**: [Who benefits and how]
**Commits**: `hash1`, `hash2`

**Files Added**:
- `path/to/file1.py`
- `path/to/file2.md`

**Implementation** ([file.py:line](file.py#Lline)):
\`\`\`python
# New functionality
[code example]
\`\`\`

**Usage Example**:
\`\`\`bash
python scripts/script_name.py --option value
\`\`\`

---

## 📚 Documentation Updates

### 1) [Documentation Name]
**What Changed**: [Description]
**Location**: `docs/path/to/file.md`
**Purpose**: [Why this documentation was needed]

**Key Sections**:
- Section 1: Description
- Section 2: Description

---

## 🔧 Technical Changes

- **Architecture**: [Any architectural changes]
- **Dependencies**: [New or updated dependencies]
- **Configuration**: [Environment variable or config changes]
- **Performance**: [Performance improvements]

**New Dependencies** (if applicable):
\`\`\`txt
anthropic==0.X.X
langchain==0.X.X
chromadb==0.X.X
\`\`\`

---

## 🚀 Deployment Checklist

### Frontend (Vercel)
No changes required - automatically deploys from main branch

### Backend (Python Scripts)
1. **Install Dependencies**:
   \`\`\`bash
   cd ScholarRAG
   pip install -r requirements.txt
   \`\`\`

2. **Environment Setup**:
   \`\`\`bash
   # Copy .env.example to .env
   cp .env.example .env

   # Add your API keys
   echo "ANTHROPIC_API_KEY=sk-ant-api03-xxxxx" >> .env
   \`\`\`

3. **Verify Installation**:
   \`\`\`bash
   python scripts/01_fetch_papers.py --help
   \`\`\`

---

## 🧪 Verification Steps

### Frontend
1. ✅ Navigate to https://scholarag.vercel.app
2. ✅ Check all guide pages load correctly
3. ✅ Verify no console errors

### Python Scripts
1. **Test Script Import**:
   \`\`\`bash
   python -c "from scripts.01_fetch_papers import PaperFetcher; print('OK')"
   \`\`\`

2. **Run Help Command**:
   \`\`\`bash
   python scripts/01_fetch_papers.py --help
   \`\`\`

3. **Test with Example Project**:
   \`\`\`bash
   cd examples/ai-chatbots-language-learning
   python ../../scripts/01_fetch_papers.py --project . --query "test"
   \`\`\`

---

## ⚠️ Breaking Changes

[If no breaking changes, state "None"]

### 1) [Breaking Change Name] (if applicable)
- **What Changed**: [Description]
- **Action Required**: [What developers must do]
- **Impact**: [Who is affected]
- **Migration**: [Step-by-step migration guide]

---

## 📊 Code Statistics

**Files Changed**: X files
- **Added**: X files
- **Modified**: X files
- **Deleted**: X files (if any)
- **Lines Added**: X
- **Lines Removed**: X

**Commits in This Release**:
1. `hash1` - Commit message 1
2. `hash2` - Commit message 2
3. `hash3` - Commit message 3

**File Breakdown**:
- Python scripts: X files
- Documentation: X files
- Frontend: X files
- Configuration: X files

---

## 📚 Developer Notes

### Working with New Python Scripts

[Instructions for developers using new scripts]

**Script Dependencies**:
\`\`\`python
# Required imports
import anthropic
import pandas as pd
from langchain_community.embeddings import HuggingFaceEmbeddings
\`\`\`

**Common Patterns**:
\`\`\`python
# Pattern 1: API initialization
from dotenv import load_dotenv
load_dotenv()
api_key = os.getenv('ANTHROPIC_API_KEY')
\`\`\`

### Testing New Features

[Testing instructions and strategies]

\`\`\`bash
# Run with test data
python scripts/script_name.py --project tests/fixtures/sample_project
\`\`\`

### Debugging Common Issues

**Issue 1: API Key Not Found**
\`\`\`bash
# Solution:
export ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
# Or add to .env file
\`\`\`

**Issue 2: Dependencies Missing**
\`\`\`bash
# Solution:
pip install -r requirements.txt --upgrade
\`\`\`

---

## 🔮 Known Issues & Limitations

[List any known issues or limitations]

1. **[Issue Name]**:
   - Description: [What doesn't work]
   - Workaround: [How to work around it]
   - Fix Planned: [When it will be fixed]

---

## 🎯 What's Next

### Upcoming in v1.0.X+1
- [Feature 1]
- [Feature 2]
- [Documentation 1]

### Future Roadmap (v1.1.0)
- [Major feature 1]
- [Major feature 2]
- [Infrastructure improvement]

---

## 🙏 Acknowledgments

- [Contributors or special thanks]
- Built with Claude Code
- Community feedback incorporated

---

## 📞 Support

For issues or questions:
- **GitHub Issues**: [https://github.com/HosungYou/ScholarRAG/issues](https://github.com/HosungYou/ScholarRAG/issues)
- **Documentation**: See `docs/` folder
- **Email**: newhosung@gmail.com

---

**🚀 Happy Researching!**

🤖 _Generated with [Claude Code](https://claude.com/claude-code)_
```

---

## Special Instructions for Claude Code

### When Asked to Create Release Notes:

1. **Automatically gather git information**:
   ```bash
   # Get commits since last release
   git log --oneline v1.0.2..HEAD

   # Get file changes
   git diff v1.0.2..HEAD --stat

   # Get detailed changes for Python files
   git diff v1.0.2..HEAD --  '*.py'
   ```

2. **Read modified/new files** to extract actual code:
   ```bash
   # For each major new file, read it
   Read file at path
   ```

3. **Check for breaking changes**:
   - Database strategy changes
   - API signature changes
   - Environment variable changes
   - Configuration updates
   - Deprecated features

4. **Generate comprehensive examples**:
   - For each new Python script, include usage example
   - Show actual implementation code
   - Include file paths and line numbers
   - Demonstrate with realistic scenarios

5. **Create deployment guide**:
   - List all new environment variables
   - Document pip install steps
   - Provide verification commands

### Version Numbering Logic

**Automatically determine version increment**:

```python
def determine_version_increment(changes):
    # For ScholarRAG, we use patch versions for incremental features
    # because we're in early development (v1.0.x)

    if has_breaking_changes(changes):
        return "MAJOR"  # X.0.0
    elif has_multiple_new_scripts(changes) or has_architecture_change(changes):
        return "MINOR"  # X.Y.0
    else:
        return "PATCH"  # X.Y.Z

def has_breaking_changes(changes):
    return any([
        "breaking:" in commit_messages,
        "removed deprecated" in changes,
        "changed API signature" in changes
    ])

def has_multiple_new_scripts(changes):
    # Count new Python scripts
    new_scripts = [f for f in changed_files if f.startswith('scripts/') and f.endswith('.py')]
    return len(new_scripts) >= 3
```

### File Path References

**Always use relative paths from project root**:
- ✅ `scripts/01_fetch_papers.py`
- ✅ `docs/API_SETUP_GUIDE.md`
- ❌ `/Users/hosung/project/scripts/file.py` (absolute path)
- ❌ `file.py` (too vague)

**Link to GitHub** (when applicable):
```markdown
[scripts/01_fetch_papers.py:42](https://github.com/HosungYou/ScholarRAG/blob/main/scripts/01_fetch_papers.py#L42)
```

### Python Code Examples

**Format Python code examples**:
```markdown
**Implementation** (\`scripts/01_fetch_papers.py:125\`):
\`\`\`python
class PaperFetcher:
    """Fetch papers from multiple academic databases"""

    def fetch_semantic_scholar(self, query: str) -> pd.DataFrame:
        """
        Fetch papers from Semantic Scholar API

        Args:
            query: Search query string

        Returns:
            DataFrame with paper metadata and PDF URLs
        """
        # Implementation details
        pass
\`\`\`
```

---

## Quality Standards

### Minimum Requirements

**Every release note MUST include**:
1. Clear overview (2-3 paragraphs)
2. At least one code example per new script/feature
3. Complete deployment checklist
4. Verification steps
5. Code statistics with commit hashes
6. Developer notes section

### Excellent Release Notes Include:
- Usage examples for all new Python scripts
- Before/after comparisons for changes
- Complete migration guide (if applicable)
- Testing strategies
- Troubleshooting section
- Known issues and workarounds
- Future roadmap hints

### Avoid:
- Vague descriptions without code
- Missing file paths
- Untested code examples
- Incomplete deployment steps
- Missing environment variable documentation

---

## Example Workflow

**User Request**:
```
"방금 진행된 내용을 기반으로 v1.0.3 릴리스 노트를 작성해 줘"
```

**Claude Code Actions**:
1. Run `git log v1.0.2..HEAD --oneline`
2. Read each new Python script to get code context
3. Read new documentation files
4. Identify: 7 new scripts, database strategy update, example project
5. Extract code examples from key scripts
6. Document environment variables from .env.example
7. Generate comprehensive release notes following template
8. Save as `docs/releases/RELEASE_NOTES_v1.0.3.md`
9. Update `docs/releases/README.md` with new version
10. Suggest git commit command

---

## Output Location

**File**: `docs/releases/RELEASE_NOTES_vX.Y.Z.md`
**Naming**: Semantic versioning (e.g., `RELEASE_NOTES_v1.0.3.md`)
**Format**: Markdown with proper headings and code blocks

---

## Related Files

- [README.md](README.md) - Release notes directory overview
- [RELEASE_NOTES_v1.0.0.md](RELEASE_NOTES_v1.0.0.md) - Initial release example
- [RELEASE_NOTES_v1.0.2.md](RELEASE_NOTES_v1.0.2.md) - Theme update example

---

**📝 This file is designed to be read by Claude Code for automated release note generation. Follow these instructions exactly to maintain consistency across all releases.**

**🤖 Generated with Claude Code assistance**
**📅 Last Updated**: October 14, 2025
**✍️ Author**: ScholarRAG Development Team
