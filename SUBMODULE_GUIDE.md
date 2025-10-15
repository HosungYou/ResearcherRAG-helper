# Git Submodule Usage Guide

**ResearcherRAG-helper Submodule Integration**

This guide explains how the ResearcherRAG-helper repository uses git submodules to eliminate code duplication with the main ResearcherRAG repository.

---

## 🎯 What is a Git Submodule?

A **git submodule** is a repository embedded inside another repository. It allows us to:
- Keep the main ResearcherRAG codebase (scripts, prompts, CLI) in one place
- Reference that code from the documentation site (ResearcherRAG-helper)
- Maintain a single source of truth without file duplication

**Analogy**: Think of it like a **symbolic link** but for entire repositories.

---

## 📂 Current Structure

```
ResearcherRAG-helper/              # Documentation site (this repo)
├── frontend/                       # Next.js documentation site
├── chatbot/                        # RAG-based chatbot
│
├── submodules/                     # ← Submodule container
│   └── researcherRAG/             # ← Main ResearcherRAG repo (as submodule)
│       ├── scripts/               # 7-stage Python scripts
│       ├── prompts/               # Stage prompts (01-07)
│       ├── researcherrag_cli.py   # CLI tool
│       └── requirements.txt       # Python dependencies
│
├── researcherrag_cli.py           # Symlink → submodules/researcherRAG/
└── docs/
    └── prompts/                   # Symlink → submodules/researcherRAG/prompts/
```

---

## 🚀 For Users: Cloning This Repository

### First-Time Clone (Recommended)

Clone with submodules in one command:

```bash
git clone --recurse-submodules https://github.com/HosungYou/ResearcherRAG-helper.git
cd ResearcherRAG-helper
```

**What this does**:
1. Clones ResearcherRAG-helper
2. Automatically clones the ResearcherRAG submodule
3. Sets up symlinks so `researcherrag_cli.py` and `docs/prompts/` work

### If You Already Cloned Without Submodules

If you see empty `submodules/researcherRAG/` folder:

```bash
cd ResearcherRAG-helper
git submodule update --init --recursive
```

**Verification**:
```bash
# Check submodule status
git submodule status
# Expected output:
# bf07c7dff5fedc331e18bfa56f0532c445512408 submodules/researcherRAG (v1.0.4-9-gbf07c7d)

# Check symlinks work
ls -la researcherrag_cli.py
# Expected: researcherrag_cli.py -> submodules/researcherRAG/researcherrag_cli.py

cat docs/prompts/01_research_domain_setup.md | head -5
# Should display content (not "file not found")
```

---

## 🔄 For Contributors: Working with Submodules

### Updating the Submodule to Latest Main Repo

When the main ResearcherRAG repository is updated (e.g., new prompts added):

```bash
cd ResearcherRAG-helper

# Update submodule to latest commit from main repo
git submodule update --remote submodules/researcherRAG

# Check what changed
cd submodules/researcherRAG
git log --oneline -5

# Commit the submodule pointer update
cd ../..
git add submodules/researcherRAG
git commit -m "chore: Update researcherRAG submodule to latest"
git push
```

### Making Changes to Main Repo Code

**Important**: Do NOT edit files in `submodules/researcherRAG/` directly!

Instead, work in the main ResearcherRAG repository:

```bash
# Clone main repo separately
cd ~/projects
git clone https://github.com/HosungYou/researcherRAG.git
cd researcherRAG

# Make changes
echo "new feature" >> scripts/08_new_script.py
git add scripts/08_new_script.py
git commit -m "feat: Add new script"
git push

# Then update submodule in Helper repo (see above)
```

### Checking Submodule Status

```bash
# See which commit the submodule is pointing to
git submodule status

# See submodule configuration
cat .gitmodules

# See detailed submodule info
git submodule foreach git log --oneline -1
```

---

## 🔍 Verifying Submodule on GitHub

### Method 1: Check `.gitmodules` File

1. Go to: https://github.com/HosungYou/ResearcherRAG-helper
2. Open `.gitmodules` file
3. You'll see:
```ini
[submodule "submodules/researcherRAG"]
	path = submodules/researcherRAG
	url = https://github.com/HosungYou/researcherRAG.git
```

### Method 2: Browse Submodule Folder

1. Navigate to `submodules/` folder on GitHub
2. Click on `researcherRAG`
3. You'll see a special icon (📎 or ➡️) and commit hash like:
   ```
   researcherRAG @ bf07c7d
   ```
4. Clicking it takes you to that specific commit in the main repo

### Method 3: View PR Changes

1. Go to PR: https://github.com/HosungYou/ResearcherRAG-helper/pull/1
2. Click "Files changed" tab
3. Look for:
   ```diff
   + .gitmodules
   + submodules/researcherRAG
   ```

The `submodules/researcherRAG` line shows **mode 160000** (special Git object type for submodules).

---

## 🛠️ Troubleshooting

### Issue 1: Submodule Folder is Empty

**Symptom**:
```bash
ls submodules/researcherRAG
# Empty or missing files
```

**Solution**:
```bash
git submodule update --init --recursive
```

### Issue 2: Symlinks Don't Work

**Symptom** (Windows):
```
Error: symlink not supported on this system
```

**Solution**:
Enable symlinks in Git (requires admin):
```bash
git config --global core.symlinks true
```

Or manually copy files instead of using symlinks:
```bash
cp submodules/researcherRAG/researcherrag_cli.py ./
cp -r submodules/researcherRAG/prompts/ docs/
```

### Issue 3: Submodule Shows "Modified" Status

**Symptom**:
```bash
git status
# modified:   submodules/researcherRAG (modified content)
```

**Cause**: You accidentally edited files inside the submodule.

**Solution**:
```bash
cd submodules/researcherRAG
git reset --hard  # Discard changes
cd ../..
```

### Issue 4: "Detached HEAD" in Submodule

**Symptom**:
```bash
cd submodules/researcherRAG
git branch
# * (HEAD detached at bf07c7d)
```

**Explanation**: This is normal! Submodules point to specific commits, not branches.

**If you need to work on the submodule**:
```bash
cd submodules/researcherRAG
git checkout main  # Switch to main branch
# Make changes and push to main repo
```

---

## 📚 Benefits of This Architecture

### ✅ Single Source of Truth
- CLI tool (`researcherrag_cli.py`): Only maintained in main repo
- Prompts (`prompts/01-07`): Only maintained in main repo
- Documentation automatically references latest code

### ✅ Automatic Synchronization
When main repo updates:
```bash
git submodule update --remote
```
Documentation site now has the latest code!

### ✅ Version Pinning
The submodule points to a specific commit:
- Main repo can evolve independently
- Helper repo stays stable until explicitly updated
- No surprise breakages from main repo changes

### ✅ Reduced Maintenance
Before submodule (duplicated code):
```
Main repo: Update CLI → 585 lines changed
Helper repo: Copy paste → 585 lines changed (manual)
Total effort: 2x work
```

After submodule:
```
Main repo: Update CLI → 585 lines changed
Helper repo: git submodule update → Done!
Total effort: 1x work
```

---

## 🔗 Related Commands Cheat Sheet

```bash
# Clone with submodules
git clone --recurse-submodules <repo-url>

# Initialize submodules after cloning
git submodule update --init --recursive

# Update submodule to latest from remote
git submodule update --remote

# Update specific submodule
git submodule update --remote submodules/researcherRAG

# Check submodule status
git submodule status

# Run command in all submodules
git submodule foreach <command>

# Example: Show branch in all submodules
git submodule foreach git branch

# Remove a submodule (if needed)
git submodule deinit submodules/researcherRAG
git rm submodules/researcherRAG
rm -rf .git/modules/submodules/researcherRAG
```

---

## 📖 Further Reading

- [Git Submodules Official Docs](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- [GitHub Submodules Guide](https://github.blog/2016-02-01-working-with-submodules/)
- [Atlassian Submodules Tutorial](https://www.atlassian.com/git/tutorials/git-submodule)

---

## ❓ FAQ

### Q: Why not just copy the files?
**A**: Copying creates maintenance burden. With submodules:
- One update in main repo → automatically available in Helper
- No risk of files getting out of sync
- Clear dependency relationship

### Q: Can I edit submodule files directly?
**A**: Technically yes, but **don't**. Always edit in the main repository, then update the submodule pointer in Helper.

### Q: What happens if main repo breaks?
**A**: Helper repo is safe! The submodule points to a specific commit (e.g., `bf07c7d`). Main repo can experiment on new commits without affecting Helper until you explicitly update.

### Q: How do I see what commit the submodule uses?
**A**:
```bash
git submodule status
# Output: bf07c7dff5fedc331e18bfa56f0532c445512408 submodules/researcherRAG
```

### Q: Can I use a different branch for the submodule?
**A**: Yes! Edit `.gitmodules`:
```ini
[submodule "submodules/researcherRAG"]
	path = submodules/researcherRAG
	url = https://github.com/HosungYou/researcherRAG.git
	branch = develop  # Track develop branch instead of main
```

---

## 🤝 Contributing

If you find issues with the submodule setup, please:
1. Check this guide first
2. Run troubleshooting steps
3. Open an issue: https://github.com/HosungYou/ResearcherRAG-helper/issues

---

**Last Updated**: 2025-10-14
**Submodule Commit**: bf07c7d (ResearcherRAG v1.0.4+)
**Compatible with**: Git 2.13+
