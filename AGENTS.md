# AGENTS.md - ResearcherRAG-helper

## 🤖 Codex Agent Instructions

This file provides executable instructions for Codex and other autonomous coding agents working with the ResearcherRAG-helper homepage repository.

## 📋 Repository Context

**Type**: Public-facing documentation website
**Purpose**: Homepage, guides, and marketing for ResearcherRAG project
**Technology**: Next.js 15 + TypeScript + Tailwind CSS
**Deployment**: Vercel (auto-deploy from main branch)

**⚠️ Critical Distinction**:
- **This repo**: Homepage and documentation website
- **researcherRAG repo**: Actual research automation code

## 🎯 Primary Tasks

### Task 1: Content Updates

**When**: User asks to update documentation or guides

**Steps**:
1. Identify the target file:
   ```bash
   cd "/Volumes/External SSD/Projects/Research/ResearcherRAG-helper"
   find frontend/app -name "*.tsx" | grep -i "keyword"
   ```

2. Read the file to understand structure
3. Make updates preserving existing formatting
4. Update search index if new content added:
   ```bash
   # Edit frontend/components/SearchBar.tsx
   # Add new entry to searchIndex array
   ```

5. Test locally:
   ```bash
   cd frontend
   npm run dev
   ```

6. Commit and push:
   ```bash
   git add .
   git commit -m "docs: Update [page name] with [changes]"
   git push origin main
   ```

7. **Verify Vercel deployment**:
   - Check https://vercel.com/hosung-yous-projects/researcher-rag-helper
   - Confirm build succeeds (2-3 minutes)

---

### Task 2: Add New Guide Chapter

**When**: User requests a new documentation page

**Steps**:
1. Create page file:
   ```bash
   cd "/Volumes/External SSD/Projects/Research/ResearcherRAG-helper/frontend"
   mkdir -p app/guide/0X-chapter-name
   touch app/guide/0X-chapter-name/page.tsx
   ```

2. Write content following template:
   ```typescript
   import GuideLayout from '@/components/GuideLayout'

   export default function ChapterPage() {
     return (
       <GuideLayout githubUrl="https://github.com/HosungYou/researcherRAG/...">
         <h1>Chapter Title</h1>
         {/* Content here */}
       </GuideLayout>
     )
   }
   ```

3. Update chapter navigation in `components/GuideLayout.tsx`:
   ```typescript
   const chapters: Chapter[] = [
     // ... existing chapters
     { number: X, title: 'New Chapter', href: '/guide/0X-chapter-name' },
   ]
   ```

4. Add to search index in `components/SearchBar.tsx`:
   ```typescript
   const searchIndex: SearchResult[] = [
     // ... existing entries
     {
       title: 'New Chapter',
       href: '/guide/0X-chapter-name',
       excerpt: 'Description for search results',
       chapter: 'Chapter X'
     },
   ]
   ```

5. Test locally, commit, push (same as Task 1)

---

### Task 3: Update Search Functionality

**When**: User reports missing search results or wants to improve search

**Steps**:
1. Navigate to search component:
   ```bash
   cd "/Volumes/External SSD/Projects/Research/ResearcherRAG-helper"
   code frontend/components/SearchBar.tsx
   ```

2. Add entries to `searchIndex` array:
   ```typescript
   {
     title: 'Searchable Term',
     href: '/guide/page#section',
     excerpt: 'Include synonyms, related terms, common queries',
     chapter: 'Optional chapter label'
   }
   ```

3. **Improve excerpt text** with search keywords:
   - Include synonyms
   - Add common variations
   - Use terms users might search

4. Test search queries:
   ```bash
   cd frontend
   npm run dev
   # Open http://localhost:3000/guide
   # Test: Press Cmd+K, type various queries
   ```

5. Commit and push changes

---

### Task 4: Troubleshoot Vercel Deployment

**When**: Push succeeds but Vercel doesn't update

**Diagnostic Steps**:

1. **Check local git status**:
   ```bash
   cd "/Volumes/External SSD/Projects/Research/ResearcherRAG-helper"
   git status
   git log --oneline -5
   ```

2. **Verify remote sync**:
   ```bash
   git log origin/main --oneline -5
   # Should match local commits
   ```

3. **Check Vercel connection**:
   ```bash
   cd frontend
   vercel --version
   vercel ls
   # Should show: researcher-rag-helper
   ```

4. **Force Vercel redeploy**:
   ```bash
   cd frontend
   vercel --prod --force
   ```

5. **Check build logs**:
   - Visit https://vercel.com/hosung-yous-projects/researcher-rag-helper/deployments
   - Click latest deployment
   - Review build logs for errors

**Common Issues**:

- **Issue**: "Build failed - TypeScript errors"
  - **Fix**: Run `npm run build` locally first
  - Check for type errors in `.tsx` files

- **Issue**: "Deployment successful but changes not visible"
  - **Fix**: Clear browser cache (Cmd+Shift+R)
  - Check correct URL (not preview URL)

- **Issue**: "No new deployment triggered"
  - **Fix**: Verify `.vercel` folder exists
  - Check Vercel GitHub integration settings

---

### Task 5: Add Subfolder CLAUDE.md / AGENTS.md

**When**: User requests context files for subfolders

**Steps**:
1. Identify subfolders:
   ```bash
   cd "/Volumes/External SSD/Projects/Research/ResearcherRAG-helper"
   find . -type d -maxdepth 2 | grep -v node_modules | grep -v .git
   ```

2. For each subfolder, create appropriate context:

**Example: frontend/CLAUDE.md**
```markdown
# Frontend Folder - Claude Code Instructions

## Purpose
Next.js 15 application for ResearcherRAG homepage

## Structure
- app/ - Next.js App Router pages
- components/ - Reusable React components
- lib/ - Utilities and helpers

## Development
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # Check code quality

## Important Notes
- All changes trigger Vercel redeploy
- Test locally before pushing
- Update SearchBar.tsx when adding content
```

**Example: docs/CLAUDE.md**
```markdown
# Docs Folder - Claude Code Instructions

## Purpose
Markdown documentation source files and reference materials

## Contents
- workshop/ - Workshop materials
- releases/ - Release notes
- discussions/ - Design discussions
- prompts/ - Prompt templates
- templates/ - Document templates

## Usage
These docs support the main website but are not directly rendered
For website updates, edit frontend/app/guide/ instead
```

3. Create files programmatically:
   ```bash
   # Frontend
   cat > frontend/CLAUDE.md << 'EOF'
   [content here]
   EOF

   # Docs
   cat > docs/CLAUDE.md << 'EOF'
   [content here]
   EOF

   # Repeat for other folders
   ```

4. Commit all context files:
   ```bash
   git add */CLAUDE.md */AGENTS.md
   git commit -m "docs: Add context files to all subfolders"
   git push origin main
   ```

---

## 🔍 Validation Checklist

After any changes, verify:

### Local Build Success
```bash
cd frontend
npm run build
# ✓ Should complete without errors
```

### Search Functionality
```bash
cd frontend
npm run dev
# Open http://localhost:3000/guide
# Press Cmd+K
# Test queries: "PRISMA", "RAG", "installation"
# ✓ Should return relevant results
```

### Git Sync
```bash
git status
# ✓ Should show "nothing to commit, working tree clean"

git log origin/main --oneline -3
# ✓ Should include your latest commits
```

### Vercel Deployment
- Visit: https://vercel.com/hosung-yous-projects/researcher-rag-helper/deployments
- ✓ Latest deployment should be "Ready" with green checkmark
- ✓ Deployment timestamp should be within 5 minutes of push

### Live Website
- Visit: https://researcher-rag-helper.vercel.app/
- ✓ Changes should be visible
- ✓ Search should work (Cmd+K)
- ✓ No console errors (F12)

---

## 📊 Common Workflows

### Workflow 1: Quick Content Fix

```bash
# 1. Navigate to repo
cd "/Volumes/External SSD/Projects/Research/ResearcherRAG-helper"

# 2. Edit file (via Read/Edit tools)
# [make changes]

# 3. Test locally
cd frontend && npm run dev

# 4. Commit and push
cd ..
git add .
git commit -m "docs: Fix typo in [page]"
git push origin main

# 5. Wait 2-3 min, verify at https://researcher-rag-helper.vercel.app/
```

### Workflow 2: Add Major Feature

```bash
# 1. Create feature branch (optional but recommended)
git checkout -b feature/new-search-filters

# 2. Implement changes
# [create files, update components]

# 3. Test thoroughly locally
cd frontend
npm run build  # Production build test
npm run dev    # Interactive testing

# 4. Commit changes
cd ..
git add .
git commit -m "feat: Add search filters to documentation"

# 5. Merge to main
git checkout main
git merge feature/new-search-filters
git push origin main

# 6. Verify Vercel deployment
```

### Workflow 3: Sync with Main Repo

When researcherRAG code updates, sync documentation:

```bash
# 1. Check main repo for changes
cd "/Volumes/External SSD/Projects/Research/researcherRAG"
git log --oneline -10

# 2. Identify documentation impacts
# [review prompts/, scripts/ changes]

# 3. Update helper docs
cd "/Volumes/External SSD/Projects/Research/ResearcherRAG-helper"
# [update frontend/app/guide/ pages]

# 4. Update search index for new terms
# [edit components/SearchBar.tsx]

# 5. Commit and push
git add .
git commit -m "docs: Sync with researcherRAG v1.0.X updates"
git push origin main
```

---

## 🚨 Error Recovery

### Build Failure

```bash
# 1. Check error logs
cd frontend
npm run build 2>&1 | tee build-error.log

# 2. Common fixes
npm install          # Reinstall dependencies
npm update           # Update packages
rm -rf .next         # Clear build cache
rm -rf node_modules  # Nuclear option
npm install

# 3. Check TypeScript errors
npm run lint
```

### Deployment Stuck

```bash
# 1. Cancel stuck deployment (via Vercel dashboard)

# 2. Force new deployment
cd frontend
vercel --prod --force

# 3. If still stuck, check Vercel project settings
# Ensure correct Build Command: "cd frontend && npm run build"
# Ensure correct Output Directory: "frontend/.next"
```

### Search Not Working

```bash
# 1. Verify SearchBar component exists
ls frontend/components/SearchBar.tsx

# 2. Check import in GuideLayout
grep "SearchBar" frontend/components/GuideLayout.tsx

# 3. Test search index
cd frontend
npm run dev
# Open dev tools (F12), check for JavaScript errors
```

---

## 📝 Documentation Standards

### File Naming

- Guide chapters: `0X-kebab-case/page.tsx`
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`

### Commit Messages

Follow Conventional Commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Formatting changes
- `refactor:` - Code restructuring
- `test:` - Testing updates
- `chore:` - Maintenance tasks

### Code Style

- Use TypeScript for all React components
- Follow existing Tailwind CSS patterns
- Maintain consistent indentation (2 spaces)
- Add comments for complex logic
- Use semantic HTML elements

---

## 🔗 External Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **MDX**: https://mdxjs.com/docs/

---

## ⚡ Quick Reference

### Important Paths

```
frontend/app/guide/              # Documentation pages
frontend/components/             # React components
frontend/components/SearchBar.tsx  # Search implementation
frontend/components/GuideLayout.tsx  # Doc layout + TOC
vercel.json                      # Vercel config (root)
```

### Key Commands

```bash
# Development
cd frontend && npm run dev

# Build
cd frontend && npm run build

# Deploy
git push origin main  # Auto-deploys via Vercel

# Force deploy
cd frontend && vercel --prod --force
```

### Important URLs

- Homepage: https://researcher-rag-helper.vercel.app/
- Docs: https://researcher-rag-helper.vercel.app/guide
- GitHub: https://github.com/HosungYou/ResearcherRAG-helper
- Vercel: https://vercel.com/hosung-yous-projects/researcher-rag-helper
