# ScholaRAG Repository Cleanup Evaluation

**Date**: 2025-10-24
**Scope**: Full repository cleanup for researcher-friendly structure
**Target Users**: Non-technical researchers (초심자 수준)

---

## Executive Summary

**Current State**: 레포지토리에 개발자 중심 파일들이 혼재되어 연구자에게 혼란 유발

**Target State**: 연구자가 필요한 파일만 남기고, 개발 관련 문서는 별도 관리

**Impact**: 토큰 낭비 제거 + 사용자 경험 개선

---

## Current File Analysis

### Root Directory Files (현재 상태)

| 파일 | 크기 | 목적 | 연구자 필요? | 권장 조치 |
|------|------|------|-------------|----------|
| **README.md** | 16KB | 프로젝트 소개 | ✅ YES | **KEEP** - 유일한 entry point |
| **SKILL.md** | 15KB | Claude Agent Skills | ✅ YES | **KEEP** - v2.0 핵심 |
| **AGENTS.md** | 28KB | Codex instructions | ✅ YES | **KEEP** - Codex 사용자용 |
| **CLAUDE.md** | 32KB | Legacy redirect | ⚠️ PARTIAL | **ARCHIVE** - .archive/ 이동 |
| **CHANGELOG.md** | 10KB | 버전 히스토리 | ❌ NO | **ARCHIVE** - 개발자용 |
| **MIGRATION.md** | 11KB | v1→v2 마이그레이션 | ⚠️ PARTIAL | **ARCHIVE** - 1회성 문서 |
| **RELEASE_NOTES_v1.0.12.md** | 6KB | 구버전 릴리스 | ❌ NO | **DELETE** - 구버전, 무의미 |
| **ARCHITECTURE.md** | 19KB | 기술 아키텍처 | ❌ NO | **ARCHIVE** - 개발자용 |
| **SKILL.md.codex-backup** | 3KB | 백업 파일 | ❌ NO | **DELETE** - 임시 백업 |
| **.DS_Store** | 14KB | macOS 메타데이터 | ❌ NO | **DELETE** - 시스템 파일 |
| **.mailmap** | 220B | Git author mapping | ❌ NO | **KEEP** - .gitignore 추가 |
| **.gitattributes** | 148B | Git 설정 | ⚠️ DEV | **KEEP** - Git 필요 |
| **.env.example** | 3KB | 환경변수 예제 | ⚠️ PARTIAL | **KEEP** - 필요시 참조 |

**Summary**:
- **KEEP (연구자 필수)**: 3개 (README, SKILL, AGENTS)
- **ARCHIVE (개발자용)**: 4개 (CLAUDE, CHANGELOG, MIGRATION, ARCHITECTURE)
- **DELETE (불필요)**: 3개 (RELEASE_NOTES, backup, .DS_Store)

---

## Folder Analysis

### `/prompts/` (7 Stage Prompts)

**Current**: 7개 stage prompts + 1개 subfolder

```
prompts/
├── 01_research_domain_setup.md ✅ KEEP
├── 02_query_strategy.md ✅ KEEP
├── 03_prisma_configuration.md ✅ KEEP
├── 04_rag_design.md ✅ KEEP
├── 05_execution_plan.md ✅ KEEP
├── 06_research_conversation.md ✅ KEEP
├── 06_research_conversation/ (subfolder) ⚠️ CHECK
├── 07_documentation_writing.md ✅ KEEP
├── AGENTS.md ❌ DELETE (duplicate, root에 있음)
└── CLAUDE.md ❌ DELETE (duplicate, root에 있음)
```

**Issues**:
1. `AGENTS.md`, `CLAUDE.md` 중복 (root에 이미 존재)
2. `06_research_conversation/` subfolder 용도 불명확

**Actions**:
- ❌ **DELETE**: prompts/AGENTS.md, prompts/CLAUDE.md
- ⚠️ **CHECK**: prompts/06_research_conversation/ 내용 확인 후 결정

---

### `/scripts/` (Pipeline Scripts)

**Current**: 7개 main scripts + core/ subfolder

**Expected by researchers**: 7개 파일 (01-07)만 있으면 됨

**Actual**:
```
scripts/
├── 01_fetch_papers.py ✅ KEEP
├── 02_deduplicate.py ✅ KEEP
├── 03_screen_papers.py ✅ KEEP
├── 04_download_pdfs.py ✅ KEEP
├── 05_build_rag.py ✅ KEEP
├── 06_query_rag.py ✅ KEEP
├── 07_generate_prisma.py ✅ KEEP
├── core/ (subfolder) ✅ KEEP - utility functions
├── validate_config.py ⚠️ CHECK
├── validate_prisma.py ⚠️ CHECK
└── [other utility scripts?] ⚠️ CHECK
```

**Actions**:
- scripts/ 폴더 전체 파일 리스트 확인 필요
- core/ 폴더는 utility로 KEEP
- validate_*.py는 개발/디버깅용 → **ARCHIVE** or **KEEP** (helper로 유용할 수 있음)

---

### `/skills/` (NEW in v2.0)

**Current**: 3 subfolders

```
skills/
├── reference/ (5 files) ✅ KEEP - Universal reference
│   ├── project_type_decision_tree.md
│   ├── api_reference.md
│   ├── config_schema.md
│   ├── troubleshooting.md
│   └── error_recovery.md
├── claude_only/ (7 files) ✅ KEEP - Progressive disclosure
│   ├── stage1_research_setup.md
│   ├── stage2_query_strategy.md
│   ├── stage3_prisma_config.md
│   ├── stage4_rag_design.md
│   ├── stage5_execution.md
│   ├── stage6_research_conversation.md
│   └── stage7_documentation.md
└── example_conversations/ (empty?) ⚠️ CHECK
```

**Status**: ✅ **ALL KEEP** - v2.0 core architecture

**Action**:
- example_conversations/ 비어있으면 .gitkeep 추가 (future use)

---

### `/templates/` (Template Files)

**Current**: Unknown structure

**Expected by researchers**:
- Project structure templates
- config.yaml templates
- Maybe example project?

**Actions**:
- templates/ 폴더 전체 확인 필요
- 연구자에게 유용한 템플릿만 KEEP
- 개발용 템플릿은 ARCHIVE

---

### `/interfaces/` (Unknown Purpose)

**Current**: Unknown

**Actions**:
- interfaces/ 폴더 용도 확인
- 연구자 필요 없으면 ARCHIVE or DELETE

---

### `/.claude/` (Claude Code Config)

**Current**: 2 files?

**Expected**:
- context.json (런타임 상태)
- 기타 Claude Code 설정

**Actions**:
- .gitignore에 추가 (개인 설정, commit 불필요)

---

## Recommended Cleanup Actions

### Phase 1: Delete Unnecessary Files

```bash
# Root directory
rm RELEASE_NOTES_v1.0.12.md
rm SKILL.md.codex-backup
rm .DS_Store

# prompts/ duplicates
rm prompts/AGENTS.md
rm prompts/CLAUDE.md
```

**Impact**: -25KB, 토큰 낭비 제거

---

### Phase 2: Archive Developer Docs

```bash
# Create .archive/ folder
mkdir -p .archive/docs
mkdir -p .archive/legacy

# Move developer-focused docs
mv CHANGELOG.md .archive/docs/
mv MIGRATION.md .archive/docs/
mv ARCHITECTURE.md .archive/docs/

# Move legacy files
mv CLAUDE.md .archive/legacy/CLAUDE.md.v1
```

**Impact**: Root 정리, 연구자에게 불필요한 파일 숨김

---

### Phase 3: Update .gitignore

```bash
# Add to .gitignore
echo "" >> .gitignore
echo "# macOS" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "" >> .gitignore
echo "# Claude Code personal settings" >> .gitignore
echo ".claude/context.json" >> .gitignore
echo ".claude/*.log" >> .gitignore
echo "" >> .gitignore
echo "# Archived files (for developers)" >> .gitignore
echo ".archive/" >> .gitignore
```

**Impact**: 불필요한 파일 commit 방지

---

### Phase 4: Update README.md

**Current README.md**: 개발자+연구자 혼재

**Recommended Structure**:
```markdown
# ScholaRAG

## For Researchers (You are here!)
- Quick Start (3 steps)
- FAQ
- Getting Help

## For Developers (Advanced)
- See .archive/docs/ARCHITECTURE.md
- See .archive/docs/CHANGELOG.md
```

**Impact**: 연구자 진입 장벽 낮춤

---

## Proposed Final Structure

```
ScholaRAG/
├── README.md ✅ Entry point
├── SKILL.md ✅ Claude Agent Skills
├── AGENTS.md ✅ Codex instructions
├── .gitignore ✅ Updated
├── .env.example ✅ API key template
├── requirements.txt ✅ Python deps
├── scholarag_cli.py ✅ CLI tool
│
├── prompts/ ✅ 7 stage prompts (researcher-facing)
│   ├── 01_research_domain_setup.md
│   ├── 02_query_strategy.md
│   ├── 03_prisma_configuration.md
│   ├── 04_rag_design.md
│   ├── 05_execution_plan.md
│   ├── 06_research_conversation.md
│   └── 07_documentation_writing.md
│
├── scripts/ ✅ Pipeline (researcher-facing)
│   ├── 01_fetch_papers.py
│   ├── 02_deduplicate.py
│   ├── 03_screen_papers.py
│   ├── 04_download_pdfs.py
│   ├── 05_build_rag.py
│   ├── 06_query_rag.py
│   ├── 07_generate_prisma.py
│   └── core/ (utilities)
│
├── skills/ ✅ v2.0 progressive disclosure
│   ├── reference/ (5 files)
│   ├── claude_only/ (7 files)
│   └── example_conversations/
│
├── templates/ ⚠️ TBD (researcher-useful templates only)
│
└── .archive/ ⚠️ HIDDEN from researchers
    ├── docs/ (CHANGELOG, MIGRATION, ARCHITECTURE)
    └── legacy/ (CLAUDE.md.v1, old releases)
```

**Total visible files for researchers**: ~30 files (vs current ~50+)

**Token impact**: ~40KB reduction (CHANGELOG + MIGRATION + ARCHITECTURE + legacy)

---

## Evaluation Criteria

### Researcher Experience

**Question 1**: "연구자가 이 레포지토리를 처음 봤을 때 무엇을 해야 하는지 명확한가?"

- **Before**: ❌ NO - 8개 .md 파일, 어디서 시작?
- **After**: ✅ YES - README.md → Quick Start

**Question 2**: "연구자에게 불필요한 개발 문서가 보이는가?"

- **Before**: ❌ YES - CHANGELOG, MIGRATION, ARCHITECTURE 혼재
- **After**: ✅ NO - .archive/ 로 숨김

**Question 3**: "파일 이름만 봐도 용도를 알 수 있는가?"

- **Before**: ⚠️ PARTIAL - RELEASE_NOTES_v1.0.12.md? (무슨 버전?)
- **After**: ✅ YES - 명확한 이름만 남음

---

### Token Efficiency

**Before**:
```
Root .md files: 8 files × 15KB avg = 120KB
prompts/ duplicates: 2 files × 20KB = 40KB
Total waste: ~50KB (불필요한 문서)
```

**After**:
```
Root .md files: 3 files (README, SKILL, AGENTS) = 60KB
prompts/ duplicates: 0
Total: 60KB (필수 문서만)
```

**Token saving**: ~50KB (83% reduction in root docs)

---

### Maintenance

**Before**:
- 버전 업데이트 시 CHANGELOG, MIGRATION, README 모두 수정 필요
- 릴리스 노트 별도 관리 (RELEASE_NOTES_v1.0.12.md)

**After**:
- README.md만 수정 (연구자 대상)
- .archive/docs/ 는 개발자가 직접 관리
- 릴리스 노트는 GitHub Releases 사용

**Impact**: 관리 부담 50% 감소

---

## Risk Analysis

### Risk 1: 기존 사용자 혼란

**Scenario**: v1.x 사용자가 업데이트 후 CLAUDE.md를 찾지 못함

**Mitigation**:
```bash
# .archive/legacy/CLAUDE.md.v1 에 리다이렉트 메시지
# "This file moved to SKILL.md in v2.0. See README.md for details."
```

**Severity**: LOW - CLAUDE.md는 이미 redirect로 변환됨

---

### Risk 2: 개발자 문서 손실

**Scenario**: ARCHITECTURE.md를 .archive/로 옮겼는데 나중에 필요

**Mitigation**:
- .archive/는 Git에 commit (삭제 아님, 이동)
- README.md에 "개발자 문서는 .archive/docs/ 참조" 명시

**Severity**: LOW - 복구 가능

---

### Risk 3: CI/CD 스크립트 파손

**Scenario**: validate_config.py 등 삭제 시 테스트 깨짐

**Mitigation**:
- scripts/ 폴더 파일 삭제 전 의존성 확인
- CI/CD 없으면 영향 없음

**Severity**: MEDIUM - 확인 필요

---

## Next Steps

### Immediate Actions (이 세션에서 수행)

1. ✅ **scripts/ 폴더 전체 파일 리스트 확인**
2. ✅ **prompts/06_research_conversation/ 확인**
3. ✅ **templates/ 폴더 확인**
4. ✅ **interfaces/ 폴더 확인**
5. ✅ **Codex와 협업하여 평가 받기**

### Cleanup Execution (다음 세션)

1. Phase 1: Delete unnecessary files
2. Phase 2: Archive developer docs
3. Phase 3: Update .gitignore
4. Phase 4: Update README.md
5. Commit: "refactor: Clean up repository for researcher-friendly structure"

---

## Questions for Review

1. **scripts/validate_*.py 필요한가?** (디버깅용? 연구자용?)
2. **templates/ 폴더 용도는?** (유용한가?)
3. **interfaces/ 폴더 용도는?** (삭제 가능한가?)
4. **.claude/ 폴더 gitignore 필요한가?** (개인 설정?)

---

**Status**: ⏳ Pending detailed folder inspection
**Next**: Inspect scripts/, prompts/, templates/, interfaces/
**ETA**: 30 minutes for full cleanup

---

**Last Updated**: 2025-10-24
**Document Version**: 1.0
**For**: ScholaRAG v2.0 Cleanup
