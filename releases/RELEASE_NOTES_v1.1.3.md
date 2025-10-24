# Release Notes v1.1.3 - Documentation Architecture Update

**Release Date**: October 24, 2025
**Type**: Documentation Enhancement
**Status**: Stable

---

## 🎯 Overview

This release establishes a **clear documentation architecture** for ScholaRAG, addressing the overlap between CLAUDE.md, SKILL.md, and AGENTS.md. We've implemented **Option 3: Role Separation** to provide optimal guidance for different AI assistants and use cases.

---

## 📚 Documentation Architecture (New)

### Three-Tier Documentation System

| File | Target Audience | Purpose | Size | Usage Pattern |
|------|----------------|---------|------|---------------|
| **SKILL.md** | Claude Code (Skills) | Skills metadata + quick reference | ~380 lines | Auto-loaded by Anthropic Skills system |
| **CLAUDE.md** | Claude Code (Direct) | Detailed implementation guide | ~350 lines | Directly read by Claude Code |
| **AGENTS.md** | Codex/Cursor/Copilot | Task-based bash workflows | ~800 lines | Terminal-oriented agents |

### Why This Architecture?

**Previous Problem** (v1.1.2 and earlier):
- CLAUDE.md deleted in v2.0 refactor (commit 7ddb07d)
- SKILL.md became the only Claude Code guide
- Confusion about which file to update
- Duplication concerns

**Solution** (v1.1.3):
- ✅ **SKILL.md**: Compact, Skills-optimized, progressive disclosure
- ✅ **CLAUDE.md**: Comprehensive, researcher-first automation
- ✅ **AGENTS.md**: Bash-first, task-oriented workflows
- ✅ Clear cross-references between files

---

## 🆕 What's New in Each File

### CLAUDE.md (Completely Rewritten)

**New Sections**:
1. **🎓 User Profile: Researchers with Limited Coding Experience**
   - Critical understanding: Users are researchers, not developers
   - Clear DO/DON'T guidelines for Claude Code behavior
   - Emphasis on auto-execution over manual instructions

2. **Auto-Execution Patterns**
   ```bash
   # ✅ GOOD: Auto-execute with echo pipe
   echo -e "Project\nQuestion\neducation\nsystematic_review" | python scholarag_cli.py init

   # ✅ GOOD: Use CLI arguments
   python scholarag_cli.py init --name "Project" --question "..." --domain education --project-type systematic_review

   # ❌ BAD: Interactive mode (blocks automation)
   python scholarag_cli.py init
   ```

3. **Stage-Aware Behavior (Detailed)**
   - How to read HTML metadata blocks
   - Conversation flow patterns
   - Divergence handling with examples
   - Completion validation checklists

4. **Full CLI Reference**
   - All `scholarag_cli.py` commands with `--project-type` option
   - Echo pipe examples for every interactive command
   - Project status and stage management

5. **Project Types Deep Dive**
   - `knowledge_repository` (50% threshold, 15K-20K papers)
   - `systematic_review` (90% threshold, 50-300 papers)
   - Decision criteria and use cases

**Key Philosophy**:
> "Researchers should NEVER touch terminal. Claude Code executes all scripts automatically."

---

### SKILL.md (Streamlined for Skills System)

**Changes**:
- ✅ Maintained compact size (~380 lines) for token efficiency
- ✅ Added "Additional Resources" section pointing to CLAUDE.md
- ✅ Updated footer to reference companion files
- ✅ Removed legacy note: ~~"Replaces: CLAUDE.md (legacy, now redirect file)"~~
- ✅ Clarified progressive disclosure strategy

**New Cross-Reference Section**:
```markdown
## Additional Resources

**Detailed implementation guide**: See CLAUDE.md for:
- 🎓 User profile (researchers with limited coding experience)
- How Claude Code should behave (DO/DON'T guidelines)
- Auto-execution patterns (echo pipes, CLI arguments)
- Full CLI reference and troubleshooting

**For Codex/Cursor users**: See AGENTS.md for task-based bash workflows
```

---

### AGENTS.md (Updated for v1.2.0)

**Updates**:
- ✅ Synced with ScholaRAG v1.2.0 architecture
- ✅ Updated `project_type` decision tree references
- ✅ Added `--project-type` CLI option to all examples
- ✅ Clarified Quick Context embedding strategy
- ✅ Updated 7-stage pipeline with v1.2.0 script names

**New Features**:
- Progressive disclosure patterns for Codex agents
- Exit code validation examples
- Task-based workflow templates

---

## 🔄 Key Changes

### 1. Role Clarification

**Before v1.1.3**:
- SKILL.md was the only Claude Code guide (after CLAUDE.md deletion)
- Confusion about documentation hierarchy
- No clear separation between Skills metadata and detailed guides

**After v1.1.3**:
- SKILL.md: Skills system metadata + quick reference
- CLAUDE.md: Comprehensive implementation guide
- AGENTS.md: Task-oriented bash workflows
- Clear cross-references prevent confusion

### 2. Researcher-First Automation

**New Philosophy** (CLAUDE.md):
```markdown
**DO:**
- ✅ Auto-execute commands whenever possible
- ✅ Handle interactive inputs automatically using echo pipes or CLI arguments
- ✅ Provide default values for test/demo scenarios

**DON'T:**
- ❌ Say "You'll need to run: `python script.py`" (run it for them instead!)
- ❌ Stop at interactive prompts (use automation techniques)
- ❌ Assume users can debug Python/shell errors
```

This ensures researchers (who may have limited coding experience) get a seamless experience.

### 3. CLI Automation Patterns

**All `scholarag_cli.py init` examples now include `--project-type`**:

```bash
# Before v1.1.3 (missing project_type)
python scholarag_cli.py init --name "Project" --question "..." --domain education

# After v1.1.3 (complete)
python scholarag_cli.py init \
  --name "Project" \
  --question "..." \
  --domain education \
  --project-type systematic_review
```

---

## �� Statistics

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| CLAUDE.md | 0 lines (deleted) | 351 lines | +351 ✅ |
| SKILL.md | 368 lines | 382 lines | +14 |
| AGENTS.md | 650 lines | 830 lines | +180 |
| **Total documentation** | 1,018 lines | 1,563 lines | +545 (+53%) |
| **Redundancy** | High (unclear roles) | Low (clear separation) | ✅ |

---

## 🚀 Migration Guide

### For Existing Users

**If you were using SKILL.md only** (v1.1.2 or earlier):
- ✅ Continue using SKILL.md (no changes required)
- 💡 Reference CLAUDE.md for detailed automation patterns
- 💡 Use AGENTS.md if switching to Codex/Cursor

**If you need detailed Claude Code guidance**:
- 📖 Read CLAUDE.md for comprehensive workflows
- 📖 SKILL.md provides quick reference and stage pointers

**If you're using Codex/Cursor/Copilot**:
- 📖 AGENTS.md is your primary guide
- 📖 SKILL.md and CLAUDE.md are for Claude Code only

### For New Users

1. **Start with SKILL.md** (quick overview)
2. **Reference CLAUDE.md** when you need detailed implementation patterns
3. **Use AGENTS.md** if you prefer terminal commands over conversation

---

## 🐛 Bug Fixes

- Fixed missing `--project-type` in CLI examples
- Removed legacy note about CLAUDE.md being deleted
- Clarified progressive disclosure strategy
- Added proper cross-references between documentation files

---

## 🔮 What's Next (v1.1.4)

- [ ] Add visual documentation architecture diagram
- [ ] Create quick start cheat sheet (1-page PDF)
- [ ] Add troubleshooting decision tree
- [ ] Document Skills system integration patterns

---

## 📝 Technical Details

### Commits Included

**ScholaRAG repository**:
- `7326e9e` - Add CLAUDE.md with researcher-first automation guidelines
- `3d9c66a` - Update CLAUDE.md with --project-type CLI option
- `f956077` - docs: Clarify SKILL.md vs CLAUDE.md roles (Option 3)

**ScholaRAG-helper repository** (this release):
- Documentation architecture update
- Sync with ScholaRAG v1.2.0

### Files Changed

```
 AGENTS.md | 1093 ++++++++++++++++++++++++++++++++++++++++-----
 CLAUDE.md |  558 ++++++++++++++++---------------
 SKILL.md  |  419 +++++++++++++++++++++---
 3 files changed, 1398 insertions(+), 672 deletions(-)
```

---

## 🙏 Acknowledgments

This release addresses feedback about documentation clarity and establishes a sustainable architecture for future documentation updates. Special thanks to the community for identifying the confusion around CLAUDE.md's removal in v2.0.

---

## 📎 Links

- **ScholaRAG GitHub**: https://github.com/HosungYou/ScholaRAG
- **Documentation Website**: https://researcher-rag-helper.vercel.app/
- **Previous Release**: [v1.1.2](RELEASE_NOTES_v1.1.2.md)
- **Next Release**: v1.1.4 (planned)

---

**Installation**:
```bash
# Clone the repository
git clone https://github.com/HosungYou/ScholaRAG-helper.git
cd ScholaRAG-helper

# Checkout v1.1.3
git checkout v1.1.3
```

**Questions?** Open an issue at https://github.com/HosungYou/ScholaRAG/issues
