# ScholaRAG 병렬 진행 로드맵 - Project Type 구분 강화

## 📅 Week 1-4 상세 계획

---

## Week 1: 문서 개선 + 초기 구현

### Content Writer Tasks

#### 1. Introduction Page 수정 ✍️
**파일**: `/tmp/scholarag-helper/frontend/app/guide/01-introduction/page.tsx`
**위치**: After "What You'll Build" section (before "Database Strategy", ~line 106)

**추가 내용**:
```tsx
<h2 id="choose-project-type">Choose Your Project Type</h2>

<p className="mb-6">
  Before starting, decide which type of project best fits your needs. This determines the level of rigor and validation required.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  {/* Knowledge Repository Card */}
  <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50 hover:border-gray-900 transition-colors">
    {/* ... 전체 내용은 PROJECT_TYPE_DISTINCTION.md 참조 ... */}
  </div>

  {/* Systematic Review Card */}
  <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50 hover:border-blue-700 transition-colors">
    {/* ... */}
  </div>
</div>

<div className="callout callout-warning mt-8">
  <p className="font-semibold mb-2">⚠️ Important Decision</p>
  <p className="mb-2">
    You will select your project type in <strong>Stage 1: Research Domain Setup</strong>.
  </p>
  {/* ... */}
</div>
```

**예상 시간**: 2 hours

---

#### 2. Core Concepts Page 수정 ✍️
**파일**: `/tmp/scholarag-helper/frontend/app/guide/03-core-concepts/page.tsx`
**위치**: After AI-PRISMA section (before "Database Strategy")

**추가 섹션**:
```tsx
<h2 id="project-types">Project Type Workflows</h2>

<p>
  ScholaRAG supports two distinct workflows based on your research goals. The project type you choose determines screening rigor, validation requirements, and final output.
</p>

<Tabs defaultValue="systematic">
  <TabsList>
    <TabsTrigger value="systematic">Systematic Review 📄</TabsTrigger>
    <TabsTrigger value="repository">Knowledge Repository 🗂️</TabsTrigger>
  </TabsList>

  <TabsContent value="systematic">
    <h3>Systematic Review: AI-PRISMA Full Protocol</h3>
    <p>For publication-quality systematic reviews following PRISMA 2020 guidelines.</p>

    {/* Workflow diagram */}
    <Mermaid chart={`
graph LR
    A[Stage 1-2<br/>PICO Design] --> B[Stage 3<br/>6-D Rubric]
    B --> C[Stage 5<br/>AI Screening]
    C --> D[Human Review<br/>10-20% Sample]
    D --> E[Cohen's Kappa<br/>≥ 0.61]
    E --> F[PRISMA Output]
    `} />

    {/* Requirements list */}
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
      <h4>✅ Requirements (MANDATORY)</h4>
      <ul>
        <li>PICO-based 6-dimension scoring rubric</li>
        <li>Human validation on 10-20% random sample</li>
        <li>Cohen's Kappa ≥ 0.61 (substantial agreement)</li>
        <li>PRISMA 2020 flow diagram with AI transparency</li>
      </ul>
    </div>
  </TabsContent>

  <TabsContent value="repository">
    <h3>Knowledge Repository: Lenient Filtering</h3>
    <p>For comprehensive domain coverage without publication intent.</p>

    {/* Workflow diagram */}
    <Mermaid chart={`
graph LR
    A[Stage 1-2<br/>Broad Queries] --> B[Stage 3<br/>Minimal Filter]
    B --> C[Stage 5<br/>AI Screening]
    C --> D[RAG System<br/>10K-20K papers]
    `} />

    {/* Characteristics */}
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 my-6">
      <h4>📊 Characteristics</h4>
      <ul>
        <li>Lenient thresholds (50/20 confidence)</li>
        <li>AI-only screening (no human review required)</li>
        <li>No Cohen's Kappa validation</li>
        <li>Output: RAG chatbot for domain Q&A</li>
      </ul>
    </div>
  </TabsContent>
</Tabs>
```

**예상 시간**: 3 hours

---

#### 3. Stage 1 Prompt 개선 ✍️
**파일**: `/tmp/scholarag/prompts/01_research_domain_setup.md`
**위치**: Lines 100-120 (기존 "Step 0" 섹션 대체)

**개선된 내용** (이미 PROJECT_TYPE_DISTINCTION.md에 작성됨):
```markdown
## 🚨 Step 0: Choose Your Project Type (REQUIRED)

**BEFORE PROCEEDING**: Select your project type. This decision affects the entire workflow and CANNOT be changed after Stage 3.

### Option A: Knowledge Repository 🗂️

**Select this if you answer YES to:**
- ❓ Are you doing exploratory research or background reading?
- ❓ Do you need comprehensive coverage (10,000+ papers)?
- ❓ Do you NOT plan to publish a systematic review paper?
- ❓ Do you want a RAG chatbot for quick literature queries?

**⚠️ NOT suitable for:**
- Academic journal publication
- Meta-analysis or quantitative synthesis
- Dissertation systematic review chapter

**What happens with this choice:**
✓ Lenient screening (80-90% retention)
✓ AI-only screening (human review optional)
✗ Cohen's Kappa validation NOT required
→ Output: RAG chatbot for domain Q&A

---

### Option B: Systematic Review 📄

**Select this if you answer YES to:**
- ❓ Do you plan to publish in academic journals (BMJ, Lancet, etc.)?
- ❓ Are you conducting meta-analysis or quantitative synthesis?
- ❓ Are you writing a dissertation systematic review chapter?
- ❓ Do you need PRISMA 2020 compliant output?

**REQUIREMENTS (MANDATORY):**
- ✅ Human validation (10-20% random sample)
- ✅ Cohen's Kappa ≥ 0.61 validation
- ✅ PRISMA 2020 flow diagram
- ✅ Transparency statement for publication

**What happens with this choice:**
✓ Strict screening (10-20% final inclusion)
✓ MANDATORY human validation
✓ MANDATORY Cohen's Kappa ≥ 0.61
→ Output: Publication-ready systematic review

---

**⚠️ CRITICAL: This decision affects Stages 3-7. You cannot change project type after Stage 3.**

---
```

**예상 시간**: 1 hour

---

### Developer Tasks

#### 4. config.yaml 템플릿 강제화 💻
**파일**: `/tmp/scholarag/templates/config.yaml` (새로 생성)

```yaml
# ═══════════════════════════════════════════════════════════════════
# ScholaRAG Project Configuration
# ═══════════════════════════════════════════════════════════════════

# ⚠️ REQUIRED: Project Type Selection
# ═══════════════════════════════════════════════════════════════════
# You MUST change this to one of the following:
# - knowledge_repository: Exploratory research, comprehensive coverage, no publication
# - systematic_review: Academic publication, PRISMA 2020, human validation REQUIRED
#
# ⚠️ WARNING: Cannot change after Stage 3 (screening)
# ═══════════════════════════════════════════════════════════════════

project_type: REQUIRED_CHANGE_THIS  # ← MANDATORY: User must select

# ═══════════════════════════════════════════════════════════════════
# Project Metadata
# ═══════════════════════════════════════════════════════════════════

project_name: "My ScholaRAG Project"
research_question: "Your specific research question here"
research_field: "Your research field (e.g., Education, Medicine)"
created_date: "2025-10-24"

# ═══════════════════════════════════════════════════════════════════
# AI-PRISMA Rubric Configuration
# ═══════════════════════════════════════════════════════════════════

ai_prisma_rubric:
  # Decision Confidence Thresholds
  # These are auto-adjusted based on project_type:
  # - knowledge_repository: auto_include=50, auto_exclude=20 (lenient)
  # - systematic_review: auto_include=90, auto_exclude=10 (strict)
  decision_confidence:
    auto_include: null  # Auto-set based on project_type
    auto_exclude: null  # Auto-set based on project_type

  # Human Validation Settings
  # These are auto-adjusted based on project_type:
  # - knowledge_repository: required=false
  # - systematic_review: required=true (MANDATORY)
  human_validation:
    required: null          # Auto-set based on project_type
    sample_size: 50         # Random sample for Cohen's Kappa (if required)
    kappa_threshold: 0.61   # Minimum acceptable κ (substantial agreement)

  # 6-Dimension Scoring Rubric (PICO-based)
  # User will configure this in Stage 3
  scoring_rubric:
    domain_keywords: []
    intervention_keywords: []
    method_keywords: []
    outcome_keywords: []
    exclusion_keywords: []

# ═══════════════════════════════════════════════════════════════════
# Database Configuration
# ═══════════════════════════════════════════════════════════════════

databases:
  open_access:
    semantic_scholar: true
    openalex: true
    arxiv: true

  institutional:
    scopus:
      enabled: false
    web_of_science:
      enabled: false
    pubmed:
      enabled: false
```

**예상 시간**: 30 minutes

---

#### 5. validate_config.py 스크립트 💻
**파일**: `/tmp/scholarag/scripts/validate_config.py` (새로 생성)

```python
#!/usr/bin/env python3
"""
Validate ScholaRAG project configuration

Ensures project_type is properly set and thresholds are auto-configured.
"""

import yaml
import sys
from pathlib import Path
from typing import Dict

def validate_project_type(config: Dict) -> str:
    """Validate and return project_type"""

    project_type = config.get('project_type')

    # Check if set
    if not project_type or project_type == 'REQUIRED_CHANGE_THIS':
        print("\n" + "="*60)
        print("❌ ERROR: project_type not set in config.yaml")
        print("="*60)
        print("\nYou must choose your project type:")
        print("\n1. knowledge_repository")
        print("   - Exploratory research, comprehensive coverage")
        print("   - NO human validation required")
        print("   - NOT suitable for academic publication")
        print("\n2. systematic_review")
        print("   - Academic publication, PRISMA 2020 compliant")
        print("   - MANDATORY human validation + Cohen's Kappa ≥ 0.61")
        print("   - Publication-ready output")
        print("\nEdit config.yaml and set:")
        print("   project_type: knowledge_repository  # OR")
        print("   project_type: systematic_review")
        print("="*60 + "\n")
        sys.exit(1)

    # Check if valid
    if project_type not in ['knowledge_repository', 'systematic_review']:
        print(f"\n❌ ERROR: Invalid project_type: '{project_type}'")
        print("   Must be 'knowledge_repository' or 'systematic_review'")
        sys.exit(1)

    return project_type

def auto_configure_thresholds(config: Dict, project_type: str) -> Dict:
    """Auto-configure thresholds based on project_type"""

    if project_type == 'knowledge_repository':
        # Lenient thresholds for comprehensive coverage
        config['ai_prisma_rubric']['decision_confidence']['auto_include'] = 50
        config['ai_prisma_rubric']['decision_confidence']['auto_exclude'] = 20
        config['ai_prisma_rubric']['human_validation']['required'] = False

        print("\n📊 Project Type: Knowledge Repository")
        print("   ✓ Lenient thresholds configured (50/20)")
        print("   ✓ Human validation: NOT required")
        print("   → Expected retention: 80-90%")

    elif project_type == 'systematic_review':
        # Strict thresholds for publication quality
        config['ai_prisma_rubric']['decision_confidence']['auto_include'] = 90
        config['ai_prisma_rubric']['decision_confidence']['auto_exclude'] = 10
        config['ai_prisma_rubric']['human_validation']['required'] = True

        print("\n" + "="*60)
        print("📄 Project Type: Systematic Review (PRISMA 2020)")
        print("="*60)
        print("\n✅ Strict thresholds configured (90/10)")
        print("✅ Human validation: REQUIRED (10-20% sample)")
        print("✅ Cohen's Kappa ≥ 0.61 threshold enforced")
        print("\n⚠️  This project requires:")
        print("   1. PICO-based 6-dimension scoring rubric (Stage 3)")
        print("   2. Human validation on random sample (Stage 5)")
        print("   3. Cohen's Kappa ≥ 0.61 validation")
        print("   4. PRISMA 2020 flow diagram")
        print("\n→ Expected final inclusion: 10-20% of initial papers")
        print("→ Expected workload: 4-8 weeks")
        print("="*60 + "\n")

        # Confirmation
        confirm = input("   Continue with Systematic Review? (yes/no): ").lower()
        if confirm != 'yes':
            print("\n   Exiting. If you don't plan to publish, consider:")
            print("   project_type: knowledge_repository")
            sys.exit(0)

    return config

def validate_config_file(config_path: Path):
    """Main validation function"""

    if not config_path.exists():
        print(f"❌ Error: Config file not found: {config_path}")
        sys.exit(1)

    # Load config
    with open(config_path, 'r') as f:
        config = yaml.safe_load(f)

    # Validate project type
    project_type = validate_project_type(config)

    # Auto-configure thresholds
    config = auto_configure_thresholds(config, project_type)

    # Save updated config
    with open(config_path, 'w') as f:
        yaml.dump(config, f, default_flow_style=False, sort_keys=False)

    print(f"\n✅ Configuration validated: {config_path}")
    print(f"   Project type: {project_type}")

    return config

def main():
    import argparse

    parser = argparse.ArgumentParser(
        description="Validate ScholaRAG project configuration"
    )
    parser.add_argument(
        '--config',
        type=Path,
        default='config.yaml',
        help='Path to config.yaml file'
    )
    args = parser.parse_args()

    validate_config_file(args.config)

if __name__ == '__main__':
    main()
```

**예상 시간**: 2 hours

---

#### 6. scholarag_cli.py 수정 💻
**파일**: `/tmp/scholarag/scholarag_cli.py`
**위치**: `cmd_init()` function (lines ~50-100)

**수정**:
```python
def cmd_init(args):
    """Initialize new ScholaRAG project with project type selection"""

    print("\n" + "="*60)
    print("ScholaRAG Project Initialization")
    print("="*60)

    # Project name
    project_name = input("\nProject name: ").strip()
    if not project_name:
        print("❌ Error: Project name cannot be empty")
        sys.exit(1)

    # Project type selection
    print("\n" + "="*60)
    print("📋 Step 1: Choose Your Project Type")
    print("="*60)
    print("\n1. Knowledge Repository 🗂️")
    print("   ├─ Goal: Comprehensive domain knowledge base")
    print("   ├─ Coverage: 10,000-20,000 papers")
    print("   ├─ Screening: Lenient (AI-only, 80-90% retention)")
    print("   ├─ Validation: NOT required")
    print("   └─ Output: RAG chatbot for Q&A")
    print()
    print("2. Systematic Review 📄")
    print("   ├─ Goal: Publication-quality systematic review")
    print("   ├─ Coverage: 50-500 papers")
    print("   ├─ Screening: Strict (10-20% final inclusion)")
    print("   ├─ Validation: MANDATORY (Cohen's Kappa ≥ 0.61)")
    print("   └─ Output: PRISMA 2020 compliant paper")
    print()

    while True:
        choice = input("Select project type (1 or 2): ").strip()

        if choice == '1':
            project_type = 'knowledge_repository'
            print("\n✓ Selected: Knowledge Repository")
            break

        elif choice == '2':
            project_type = 'systematic_review'
            print("\n" + "="*60)
            print("⚠️  SYSTEMATIC REVIEW MODE")
            print("="*60)
            print("\nThis project requires:")
            print("  ✅ Human validation (10-20% random sample)")
            print("  ✅ Cohen's Kappa ≥ 0.61 validation")
            print("  ✅ PRISMA 2020 flow diagram")
            print("  ✅ 4-8 weeks of work")
            print()
            confirm = input("Do you plan to publish academically? (yes/no): ").lower()

            if confirm == 'yes':
                print("\n✓ Selected: Systematic Review")
                break
            else:
                print("\n→ Recommendation: Choose 'Knowledge Repository' instead")
                print("  (Re-selecting project type...)\n")
                continue

        else:
            print("❌ Invalid choice. Please enter 1 or 2.")

    # Create project directory
    project_path = Path(args.output) / project_name
    project_path.mkdir(parents=True, exist_ok=True)

    # Create directory structure
    (project_path / "data" / "01_identification").mkdir(parents=True, exist_ok=True)
    (project_path / "data" / "02_screening").mkdir(parents=True, exist_ok=True)
    (project_path / "config").mkdir(parents=True, exist_ok=True)

    # Create config.yaml from template
    config = {
        'project_type': project_type,
        'project_name': project_name,
        'research_question': '',
        'created_date': datetime.now().strftime('%Y-%m-%d'),
        'ai_prisma_rubric': {
            'decision_confidence': {
                'auto_include': 90 if project_type == 'systematic_review' else 50,
                'auto_exclude': 10 if project_type == 'systematic_review' else 20
            },
            'human_validation': {
                'required': project_type == 'systematic_review',
                'sample_size': 50,
                'kappa_threshold': 0.61
            },
            'scoring_rubric': {
                'domain_keywords': [],
                'intervention_keywords': [],
                'method_keywords': [],
                'outcome_keywords': [],
                'exclusion_keywords': []
            }
        }
    }

    config_file = project_path / "config.yaml"
    with open(config_file, 'w') as f:
        yaml.dump(config, f, default_flow_style=False, sort_keys=False)

    print(f"\n✅ Project initialized: {project_path}")
    print(f"   Config file: {config_file}")

    # Next steps based on project type
    if project_type == 'systematic_review':
        print("\n📋 Next Steps (Systematic Review):")
        print("   1. Stage 1: Define PICO-based research question")
        print("   2. Stage 2: Design Boolean search queries")
        print("   3. Stage 3: Configure 6-dimension PRISMA rubric")
        print("   4. Stage 5: Run AI screening → Human validation → Cohen's Kappa")
    else:
        print("\n📋 Next Steps (Knowledge Repository):")
        print("   1. Stage 1: Define broad research topic")
        print("   2. Stage 2: Design comprehensive queries")
        print("   3. Stage 3: Minimal filtering configuration")
        print("   4. Stage 5: AI-only screening (no validation needed)")
```

**예상 시간**: 2 hours

---

## Week 2: 검증 + 런칭

### Content Writer Tasks

#### 7. 최종 문서 리뷰 및 통합 ✍️
- [ ] Introduction page 최종 검토
- [ ] Core Concepts page 최종 검토
- [ ] 모든 Stage prompts에 project type 분기 추가
- [ ] FAQ 섹션 업데이트 (project type 관련 질문)

**예상 시간**: 3 hours

---

#### 8. Blog Post 작성 ✍️
**제목**: "Knowledge Repository vs. Systematic Review: Which ScholaRAG Workflow is Right for You?"

**목차**:
1. Introduction: Two Paths, One Tool
2. Quick Decision Guide (flowchart)
3. Knowledge Repository Deep Dive
4. Systematic Review Deep Dive
5. Case Studies (1 for each type)
6. Conclusion: Choose Wisely

**예상 시간**: 4 hours

---

### Developer Tasks

#### 9. 03_screen_papers.py 개선 시작 💻
**파일**: `/tmp/scholarag/scripts/03_screen_papers.py`

**Phase 2.1**: 6-dimension scoring prompt 구현
- [ ] `build_prisma_prompt()` 메서드 작성
- [ ] Response parsing 수정 (6-D scores)
- [ ] Evidence grounding validation 추가

**예상 시간**: 4 hours

---

#### 10. 테스트 데이터 준비 💻
- [ ] Sample papers (10-20 papers) with ground truth
- [ ] Test knowledge_repository mode
- [ ] Test systematic_review mode (manual screening for Kappa)

**예상 시간**: 2 hours

---

## Week 3-4: 전체 AI-PRISMA 구현

### Developer Tasks (Systematic Review Mode)

#### 11. 6-Dimension Scoring 완성 💻
- [ ] `validate_evidence_grounding()` 완성
- [ ] `determine_decision()` 3-zone logic 완성
- [ ] `save_results()` 3개 파일 분리 (auto-include, auto-exclude, human-review)
- [ ] Test on 50-100 papers

**예상 시간**: 4 hours

---

#### 12. Human Review Workflow 💻
**파일**: `/tmp/scholarag/scripts/03b_human_review.py` (새로 생성)

- [ ] Interactive CLI for human review
- [ ] Paper display with AI rationale
- [ ] Decision recording (include/exclude + reasoning)
- [ ] Progress saving

**예상 시간**: 3 hours

---

#### 13. Cohen's Kappa Integration 💻
- [ ] Integrate `validate_human_ai_agreement.py` into main workflow
- [ ] Auto-generate validation report
- [ ] Add to Stage 5 execution pipeline

**예상 시간**: 2 hours

---

#### 14. End-to-End Testing 💻
- [ ] Run full pipeline on real systematic review project
- [ ] Measure Cohen's Kappa (target: ≥ 0.61)
- [ ] Refine rubric if needed
- [ ] Document results

**예상 시간**: 6 hours

---

## 📊 Total Time Estimates

| Phase | Content Writer | Developer | Total |
|-------|----------------|-----------|-------|
| **Week 1** | 6 hours | 4.5 hours | 10.5 hours |
| **Week 2** | 7 hours | 6 hours | 13 hours |
| **Week 3-4** | 0 hours | 15 hours | 15 hours |
| **TOTAL** | **13 hours** | **25.5 hours** | **38.5 hours** |

---

## 📁 생성/수정할 파일 목록

### 새로 생성
1. ✅ `/tmp/scholarag-helper/docs/PROJECT_TYPE_DISTINCTION.md`
2. ⏳ `/tmp/scholarag/templates/config.yaml`
3. ⏳ `/tmp/scholarag/scripts/validate_config.py`
4. ⏳ `/tmp/scholarag/scripts/03b_human_review.py`

### 수정 필요
5. ⏳ `/tmp/scholarag-helper/frontend/app/guide/01-introduction/page.tsx` (lines ~106, add "Choose Project Type")
6. ⏳ `/tmp/scholarag-helper/frontend/app/guide/03-core-concepts/page.tsx` (add "Project Type Workflows")
7. ✅ `/tmp/scholarag/prompts/01_research_domain_setup.md` (lines 100-120, enhance "Step 0")
8. ⏳ `/tmp/scholarag/scholarag_cli.py` (`cmd_init()` function)
9. ⏳ `/tmp/scholarag/scripts/03_screen_papers.py` (6-D scoring, 3-zone separation)

---

## ✅ 완료된 작업

- [x] PROJECT_TYPE_DISTINCTION.md 작성 (종합 가이드)
- [x] AI_PRISMA_IMPLEMENTATION_PLAN.md 작성 (파��프라인 구현 계획)
- [x] VALIDATION_PROTOCOL.md 작성 (Cohen's Kappa 프로토콜)
- [x] validate_human_ai_agreement.py 구현 (검증 스크립트)
- [x] Stage 1 prompt 분석 (개선 방향 파악)

---

## 🎯 우선순위 (병렬 진행)

### 이번 주 (Week 1) 필수 작업
1. **Content Writer**: Introduction page project type 섹션 추가
2. **Developer**: config.yaml 템플릿 + validate_config.py 작성
3. **Developer**: scholarag_cli.py project type 선택 구현

### 다음 주 (Week 2) 필수 작업
4. **Content Writer**: Core Concepts page workflow 분기 추가
5. **Developer**: 03_screen_papers.py 6-D scoring 시작

---

## 📞 다음 단계

**즉시 시작 가능한 작업**:
1. Introduction page TSX 파일 수정 (Content Writer)
2. config.yaml 템플릿 작성 (Developer)
3. validate_config.py 스크립트 작성 (Developer)

**지금 어떤 파일부터 시작할까요?**
