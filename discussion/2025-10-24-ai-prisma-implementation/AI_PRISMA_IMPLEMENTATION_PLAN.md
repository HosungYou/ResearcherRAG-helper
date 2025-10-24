# AI-PRISMA Implementation Plan for ScholaRAG Pipeline

## 🎯 목표

현재 ScholaRAG 파이프라인을 **AI-PRISMA 프로토콜**에 맞게 개선:
1. **6-Dimension Scoring System** 구현 (현재: 단순 relevant/irrelevant)
2. **Human Review Queue** 추가 (confidence 11-89% 논문)
3. **Cohen's Kappa Validation** 워크플로우 통합
4. **Evidence Grounding** (AI가 abstract에서 직접 인용)

---

## 📊 현재 파이프라인 분석

### Stage 2: Deduplication (`02_deduplicate.py`)
**현재 상태**: ✅ **Zone 1 (100% AI)** 완벽하게 구현됨
- DOI 기반 중복 제거
- Title similarity 기반 중복 제거
- 완전 자동화 (human validation 불필요)

**변경 필요**: 없음 (이미 AI-PRISMA Zone 1에 부합)

---

### Stage 3: Screening (`03_screen_papers.py`)
**현재 상태**: ❌ **AI-PRISMA 미구현**

**문제점**:
1. **단순 boolean 판단** (relevant: true/false)
   ```python
   {
       'relevant': true/false,
       'confidence': 'high/medium/low',  # 정성적 (qualitative)
       'reasoning': '...'
   }
   ```

2. **6-Dimension Scoring 없음**
   - PICO framework 기반 scoring 미구현
   - Domain, Intervention, Method, Outcomes, Exclusion, Title Bonus 계산 안 함

3. **Confidence가 정성적**
   - 'high/medium/low' → 정량적 0-100% 점수로 변환 불가
   - Threshold (90%, 10%) 적용 불가능

4. **Human Review Queue 미구현**
   - 11-89% confidence 논문을 별도로 flagging 안 함
   - 모든 논문이 auto-include or auto-exclude

5. **Evidence Grounding 없음**
   - AI reasoning만 있고 직접 인용구 (quoted evidence) 없음
   - Hallucination 검증 불가

**필요한 변경**:
```python
# OLD (현재)
{
    'relevant': true/false,
    'confidence': 'high/medium/low',
    'reasoning': '...'
}

# NEW (AI-PRISMA)
{
    'scores': {
        'domain': 8,           # 0-10
        'intervention': 10,    # 0-10
        'method': 5,           # 0-5
        'outcomes': 9,         # 0-10
        'exclusion': 0,        # -20 to 0
        'title_bonus': 10      # 0 or 10
    },
    'total_score': 42,         # Sum of all dimensions
    'confidence': 85,          # 0-100 (quantitative)
    'decision': 'auto-include',  # auto-include / auto-exclude / human-review
    'reasoning': '...',
    'evidence_quotes': [       # NEW: Grounded evidence
        "The study found significant improvement...",
        "University ESL learners participated..."
    ]
}
```

---

### Stage 4: PDF Download (`04_download_pdfs.py`)
**현재 상태**: ✅ 변경 불필요
- Relevant papers의 PDF 다운로드
- AI-PRISMA와 독립적

---

### Stage 5-7: RAG Building, Querying, PRISMA Diagram
**현재 상태**: ✅ 변경 불필요
- RAG 시스템 구축은 screening 이후 단계
- AI-PRISMA는 Stage 3에만 영향

---

## 🛠️ 구현 계획

### Task 1: config.yaml에 6-Dimension Keywords 추가

**현재 config.yaml 구조** (추정):
```yaml
project_type: systematic_review  # or knowledge_repository
research_question: "..."
databases: [...]

ai_prisma_rubric:
  decision_confidence:
    auto_include: 90
    auto_exclude: 10
  human_validation:
    required: true
```

**NEW: 6-Dimension Keywords 추가**:
```yaml
ai_prisma_rubric:
  # Existing thresholds
  decision_confidence:
    auto_include: 90      # ≥90% → auto-include
    auto_exclude: 10      # ≤10% → auto-exclude
    # 11-89% → human-review queue

  human_validation:
    required: true        # Systematic review requires human validation
    sample_size: 50       # Random sample for Cohen's Kappa
    kappa_threshold: 0.61 # Minimum acceptable κ

  # NEW: 6-Dimension Scoring Rubric (PICO-based)
  scoring_rubric:
    # PICO: Population → Domain Keywords
    domain_keywords:
      - keyword: "language learning"
        weight: 10
      - keyword: "second language acquisition"
        weight: 9
      - keyword: "L2"
        weight: 9
      - keyword: "foreign language"
        weight: 8
      - keyword: "ESL"
        weight: 7
      - keyword: "EFL"
        weight: 7

    # PICO: Intervention → Intervention Keywords
    intervention_keywords:
      - keyword: "chatbot"
        weight: 10
      - keyword: "conversational agent"
        weight: 10
      - keyword: "dialogue system"
        weight: 9
      - keyword: "virtual agent"
        weight: 8
      - keyword: "AI tutor"
        weight: 8

    # PICO: Comparison → Method Keywords
    method_keywords:
      - keyword: "RCT"
        weight: 5
      - keyword: "randomized"
        weight: 5
      - keyword: "experimental"
        weight: 5
      - keyword: "quasi-experimental"
        weight: 4
      - keyword: "mixed methods"
        weight: 3
      - keyword: "survey"
        weight: 3
      - keyword: "interview"
        weight: 3
      - keyword: "qualitative"
        weight: 2
      - keyword: "case study"
        weight: 2

    # PICO: Outcomes → Outcome Keywords
    outcome_keywords:
      - keyword: "speaking proficiency"
        weight: 10
      - keyword: "oral proficiency"
        weight: 10
      - keyword: "fluency"
        weight: 9
      - keyword: "pronunciation"
        weight: 8
      - keyword: "accuracy"
        weight: 7
      - keyword: "complexity"
        weight: 7

    # Exclusion Keywords (Hard exclusions)
    exclusion_keywords:
      - keyword: "animal study"
        penalty: -20  # Hard exclusion (auto-fail)
      - keyword: "in vitro"
        penalty: -20
      - keyword: "K-12"
        penalty: -15
      - keyword: "elementary"
        penalty: -15
      - keyword: "children"
        penalty: -15
      - keyword: "review article"
        penalty: -15
      - keyword: "meta-analysis"
        penalty: -15
      - keyword: "secondary school"
        penalty: -5   # Soft exclusion
```

---

### Task 2: 03_screen_papers.py 개선

#### 2.1 새로운 Prompt 템플릿

**위치**: `screen_paper()` 메서드 (lines 119-140)

**OLD Prompt**:
```python
prompt = f"""You are a research assistant conducting a systematic literature review.

Research Question: {self.research_question}

Paper Title: {title}
Abstract: {abstract}

Task: Determine if this paper is relevant to the research question.

Respond in JSON format:
{{
  "relevant": true/false,
  "confidence": "high/medium/low",
  "reasoning": "Brief explanation (1-2 sentences)"
}}

Screening Criteria:
- INCLUDE if the paper directly addresses the research question
- INCLUDE if the paper provides relevant methodology or theoretical framework
- EXCLUDE if the paper is off-topic or only tangentially related
- EXCLUDE if the abstract is too vague to determine relevance"""
```

**NEW Prompt (AI-PRISMA with 6-Dimension Scoring)**:
```python
def build_prisma_prompt(self, title: str, abstract: str) -> str:
    """Build AI-PRISMA scoring prompt with 6-dimension rubric"""

    rubric = self.config.get('ai_prisma_rubric', {}).get('scoring_rubric', {})

    # Format keyword lists for prompt
    domain_kw = "\n   ".join([f"- \"{kw['keyword']}\" ({kw['weight']} points)"
                               for kw in rubric.get('domain_keywords', [])])
    intervention_kw = "\n   ".join([f"- \"{kw['keyword']}\" ({kw['weight']} points)"
                                    for kw in rubric.get('intervention_keywords', [])])
    method_kw = "\n   ".join([f"- \"{kw['keyword']}\" ({kw['weight']} points)"
                               for kw in rubric.get('method_keywords', [])])
    outcome_kw = "\n   ".join([f"- \"{kw['keyword']}\" ({kw['weight']} points)"
                                for kw in rubric.get('outcome_keywords', [])])
    exclusion_kw = "\n   ".join([f"- \"{kw['keyword']}\" ({kw['penalty']} points)"
                                  for kw in rubric.get('exclusion_keywords', [])])

    prompt = f"""You are a research assistant conducting a PRISMA 2020 systematic literature review using AI-PRISMA methodology.

Research Question: {self.research_question}

Paper Title: {title}

Abstract: {abstract}

═══════════════════════════════════════════════════════════════════
TASK: Evaluate this paper using the 6-dimension scoring rubric based on PICO framework.
═══════════════════════════════════════════════════════════════════

SCORING RUBRIC:

1. DOMAIN KEYWORDS (PICO: Population) - 0-10 points
   Evaluate relevance to core research field.
   {domain_kw}

   → Award points if keywords appear in title or abstract
   → Multiple matches = highest weight keyword score

2. INTERVENTION KEYWORDS (PICO: Intervention) - 0-10 points
   Evaluate specific treatment/tool discussed.
   {intervention_kw}

   → Award points if intervention is central to the study

3. METHOD KEYWORDS (PICO: Comparison) - 0-5 points
   Evaluate study design quality.
   {method_kw}

   → Award points based on methodological rigor

4. OUTCOME KEYWORDS (PICO: Outcomes) - 0-10 points
   Evaluate measured results.
   {outcome_kw}

   → Award points if outcomes are explicitly measured

5. EXCLUSION KEYWORDS - (-20 to 0 points)
   Penalize irrelevant contexts.
   {exclusion_kw}

   → Apply penalty if exclusion criteria are met
   → -20 penalty = automatic exclusion

6. TITLE BONUS - 0 or +10 points
   → Award +10 if domain keywords appear in title
   → Rationale: Keywords in title indicate stronger relevance signal

═══════════════════════════════════════════════════════════════════
TOTAL SCORE RANGE: -20 to 50 points
═══════════════════════════════════════════════════════════════════

IMPORTANT REQUIREMENTS:

1. EVIDENCE GROUNDING:
   - You MUST provide direct quotes from the abstract to justify each dimension score
   - Use exact quotes (in "quotation marks")
   - If no evidence exists for a dimension, score it 0

2. NO HALLUCINATIONS:
   - Only use information explicitly stated in title or abstract
   - Do not infer or assume information not present
   - If abstract is vague, assign lower scores with explanation

3. CONFIDENCE CALCULATION:
   - confidence = 0-100 (quantitative percentage)
   - High confidence (90-100): Clear evidence for all dimensions
   - Medium confidence (40-89): Some dimensions unclear
   - Low confidence (0-39): Abstract too vague or off-topic

Respond in JSON format:
{{
  "scores": {{
    "domain": <0-10>,
    "intervention": <0-10>,
    "method": <0-5>,
    "outcomes": <0-10>,
    "exclusion": <-20 to 0>,
    "title_bonus": <0 or 10>
  }},
  "total_score": <sum of all scores>,
  "confidence": <0-100>,
  "decision": "auto-include" | "auto-exclude" | "human-review",
  "reasoning": "Brief explanation of overall decision (2-3 sentences)",
  "evidence_quotes": [
    "Direct quote from abstract supporting domain score",
    "Direct quote supporting intervention score",
    ...
  ]
}}

DECISION RULES:
- confidence ≥ 90 AND total_score ≥ 30 → "auto-include"
- confidence ≤ 10 OR total_score < 0 → "auto-exclude"
- Otherwise → "human-review" (requires expert validation)
"""
    return prompt
```

#### 2.2 새로운 Response 파싱

**위치**: `screen_paper()` 메서드

```python
def screen_paper(self, title: str, abstract: str) -> Dict[str, any]:
    """
    Screen a single paper using AI-PRISMA 6-dimension scoring

    Returns:
        Dictionary with scores, decision, and evidence
    """
    if pd.isna(abstract) or not abstract or abstract.strip() == "":
        return {
            'scores': {
                'domain': 0,
                'intervention': 0,
                'method': 0,
                'outcomes': 0,
                'exclusion': 0,
                'title_bonus': 0
            },
            'total_score': 0,
            'confidence': 0,
            'decision': 'auto-exclude',
            'reasoning': 'No abstract available for screening',
            'evidence_quotes': []
        }

    # Build AI-PRISMA prompt
    prompt = self.build_prisma_prompt(title, abstract)

    try:
        response = self.client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=1000,  # Increased for detailed evidence quotes
            messages=[
                {"role": "user", "content": prompt}
            ]
        )

        result_text = response.content[0].text.strip()

        # Parse JSON response
        import json
        result = json.loads(result_text)

        # Validate evidence grounding
        if not self.validate_evidence_grounding(result['evidence_quotes'], abstract):
            print(f"   ⚠️  WARNING: Hallucination detected in evidence quotes")
            result['confidence'] = max(0, result['confidence'] - 20)  # Penalty

        # Apply decision rules based on confidence and score
        result['decision'] = self.determine_decision(
            result['confidence'],
            result['total_score']
        )

        return result

    except Exception as e:
        print(f"   ⚠️  API Error: {e}")
        return {
            'scores': {'domain': 0, 'intervention': 0, 'method': 0,
                      'outcomes': 0, 'exclusion': 0, 'title_bonus': 0},
            'total_score': 0,
            'confidence': 0,
            'decision': 'error',
            'reasoning': str(e),
            'evidence_quotes': []
        }

def validate_evidence_grounding(self, quotes: List[str], abstract: str) -> bool:
    """
    Validate that AI evidence quotes are actually in the abstract

    Returns:
        True if all quotes are grounded, False if hallucination detected
    """
    for quote in quotes:
        # Check if quote exists in abstract (case-insensitive, ignore punctuation)
        if quote.lower().strip() not in abstract.lower():
            print(f"   ⚠️  Hallucination detected: \"{quote[:50]}...\"")
            return False
    return True

def determine_decision(self, confidence: int, total_score: int) -> str:
    """
    Determine decision based on confidence and total score

    Decision rules (configurable):
    - High confidence (≥90%) AND high score (≥30) → auto-include
    - Low confidence (≤10%) OR negative score → auto-exclude
    - Medium confidence (11-89%) → human-review
    """
    auto_include_threshold = self.config.get('ai_prisma_rubric', {})\
                                 .get('decision_confidence', {})\
                                 .get('auto_include', 90)
    auto_exclude_threshold = self.config.get('ai_prisma_rubric', {})\
                                  .get('decision_confidence', {})\
                                  .get('auto_exclude', 10)

    if confidence >= auto_include_threshold and total_score >= 30:
        return 'auto-include'
    elif confidence <= auto_exclude_threshold or total_score < 0:
        return 'auto-exclude'
    else:
        return 'human-review'
```

#### 2.3 결과 저장 개선

**위치**: `save_results()` 메서드 (lines 262-308)

**변경사항**:
- 3개 파일로 분리: `auto_included.csv`, `auto_excluded.csv`, `human_review_queue.csv`
- 각 파일에 6-dimension scores 포함

```python
def save_results(self, df: pd.DataFrame):
    """
    Save screening results with AI-PRISMA 3-zone separation
    """
    print("\n" + "="*60)
    print("📊 AI-PRISMA SCREENING RESULTS")
    print("="*60)

    # Calculate statistics by decision
    total = len(df)
    auto_included = (df['decision'] == 'auto-include').sum()
    auto_excluded = (df['decision'] == 'auto-exclude').sum()
    human_review = (df['decision'] == 'human-review').sum()
    errors = (df['decision'] == 'error').sum()

    print(f"\nTotal papers: {total}")
    print(f"✅ Auto-include (≥90% confidence): {auto_included} ({auto_included/total*100:.1f}%)")
    print(f"⛔ Auto-exclude (≤10% confidence): {auto_excluded} ({auto_excluded/total*100:.1f}%)")
    print(f"⚠️  Human review required (11-89%): {human_review} ({human_review/total*100:.1f}%)")
    if errors > 0:
        print(f"❌ Errors: {errors} ({errors/total*100:.1f}%)")

    # Score distribution
    print(f"\nTotal Score Distribution:")
    print(f"  Mean: {df['total_score'].mean():.1f}")
    print(f"  Median: {df['total_score'].median():.1f}")
    print(f"  Range: {df['total_score'].min():.0f} to {df['total_score'].max():.0f}")

    # Save by decision type (3-Zone Model)

    # Zone 2: Auto-include (high confidence)
    df_auto_include = df[df['decision'] == 'auto-include'].copy()
    auto_include_file = self.output_dir / "auto_included.csv"
    df_auto_include.to_csv(auto_include_file, index=False)
    print(f"\n💾 Auto-included papers: {auto_include_file}")

    # Zone 2: Auto-exclude (high confidence)
    df_auto_exclude = df[df['decision'] == 'auto-exclude'].copy()
    auto_exclude_file = self.output_dir / "auto_excluded.csv"
    df_auto_exclude.to_csv(auto_exclude_file, index=False)
    print(f"💾 Auto-excluded papers: {auto_exclude_file}")

    # Zone 3: Human review queue (medium confidence)
    df_human_review = df[df['decision'] == 'human-review'].copy()
    human_review_file = self.output_dir / "human_review_queue.csv"
    df_human_review.to_csv(human_review_file, index=False)
    print(f"💾 Human review queue: {human_review_file}")

    # Save all with full details
    all_file = self.output_dir / "all_screened_papers.csv"
    df.to_csv(all_file, index=False)
    print(f"💾 All papers with AI-PRISMA scores: {all_file}")

    print("="*60)

    # Show samples from each zone
    if auto_included > 0:
        print("\n📋 Sample Auto-Included Papers:")
        for idx, row in df_auto_include.head(2).iterrows():
            print(f"\n  • {row['title'][:60]}...")
            print(f"    Total Score: {row['total_score']}/50")
            print(f"    Confidence: {row['confidence']}%")
            print(f"    Reasoning: {row['reasoning'][:80]}...")

    if human_review > 0:
        print("\n⚠️  Sample Papers Requiring Human Review:")
        for idx, row in df_human_review.head(2).iterrows():
            print(f"\n  • {row['title'][:60]}...")
            print(f"    Total Score: {row['total_score']}/50")
            print(f"    Confidence: {row['confidence']}%")
            print(f"    Reasoning: {row['reasoning'][:80]}...")

    # Validation reminder
    if self.require_human_review and human_review > 0:
        print(f"\n⚠️  HUMAN VALIDATION REQUIRED")
        print(f"   → {human_review} papers flagged for expert review")
        print(f"   → Open: {human_review_file}")
        print(f"   → Review each paper and make final include/exclude decision")
        print(f"\n   Next step: Run validation after human review")
        print(f"   python scripts/validate_human_ai_agreement.py \\")
        print(f"       --ai-decisions {all_file} \\")
        print(f"       --human-validation data/02_screening/human_decisions.csv \\")
        print(f"       --output data/02_screening/kappa_report.md")
```

---

### Task 3: 새로운 스크립트 추가

#### 3.1 `scripts/03b_human_review.py` (NEW)

Human review queue를 처리하는 인터랙티브 스크립트:

```python
#!/usr/bin/env python3
"""
Stage 3b: Human Review of Borderline Papers

Interactive CLI for human reviewers to make final decisions on papers
flagged by AI-PRISMA as requiring expert validation (11-89% confidence).

Usage:
    python scripts/03b_human_review.py --project <project_path>
"""

import pandas as pd
import argparse
from pathlib import Path
import sys

def review_papers(project_path: Path):
    """Interactive human review of borderline papers"""

    input_dir = project_path / "data" / "02_screening"
    review_file = input_dir / "human_review_queue.csv"

    if not review_file.exists():
        print("❌ Error: Human review queue not found")
        print(f"   Expected: {review_file}")
        print("   Run screening first: python scripts/03_screen_papers.py")
        sys.exit(1)

    df = pd.read_csv(review_file)
    print(f"\n📋 Human Review Queue: {len(df)} papers")
    print("="*60)

    results = []

    for idx, row in df.iterrows():
        print(f"\n[{idx+1}/{len(df)}] Paper Review")
        print("-" * 60)
        print(f"Title: {row['title']}")
        print(f"Authors: {row.get('authors', 'N/A')}")
        print(f"Year: {row.get('year', 'N/A')}")
        print()
        print(f"Abstract:\n{row['abstract'][:500]}...")
        print()
        print(f"AI Decision:")
        print(f"  Total Score: {row['total_score']}/50")
        print(f"  Confidence: {row['confidence']}%")
        print(f"  AI Reasoning: {row['reasoning']}")
        print()
        print(f"AI Evidence Quotes:")
        for quote in eval(row['evidence_quotes']):  # Safe eval of list
            print(f"  - \"{quote}\"")
        print()

        # Human decision
        while True:
            decision = input("Your decision (i=include, e=exclude, s=skip, q=quit): ").lower()
            if decision in ['i', 'e', 's', 'q']:
                break
            print("Invalid input. Please enter i, e, s, or q.")

        if decision == 'q':
            print("\n⚠️  Review interrupted. Progress saved.")
            break
        elif decision == 's':
            continue

        reasoning = input("Reasoning (brief): ")

        results.append({
            'paper_id': row.get('paper_id', idx),
            'title': row['title'],
            'ai_decision': 'include' if row['decision'] == 'auto-include' else 'exclude',
            'ai_confidence': row['confidence'],
            'human_decision': 'include' if decision == 'i' else 'exclude',
            'human_reasoning': reasoning,
            'agreement': (decision == 'i' and row['decision'] == 'auto-include') or \
                        (decision == 'e' and row['decision'] == 'auto-exclude')
        })

        print(f"✓ Recorded: {decision.upper()}")

    # Save results
    output_file = input_dir / "human_review_decisions.csv"
    df_results = pd.DataFrame(results)
    df_results.to_csv(output_file, index=False)

    print(f"\n✅ Human review completed: {len(results)}/{len(df)} papers")
    print(f"💾 Saved to: {output_file}")

    # Quick stats
    included = (df_results['human_decision'] == 'include').sum()
    excluded = (df_results['human_decision'] == 'exclude').sum()
    agreement_rate = df_results['agreement'].mean() * 100

    print(f"\nResults:")
    print(f"  Included: {included}")
    print(f"  Excluded: {excluded}")
    print(f"  Agreement with AI: {agreement_rate:.1f}%")

def main():
    parser = argparse.ArgumentParser(
        description="Interactive human review of borderline papers"
    )
    parser.add_argument('--project', required=True, help='Project directory path')
    args = parser.parse_args()

    project_path = Path(args.project)
    if not project_path.exists():
        print(f"❌ Error: Project path not found: {project_path}")
        sys.exit(1)

    review_papers(project_path)

if __name__ == '__main__':
    main()
```

---

## 📋 Implementation Checklist

### Phase 1: Configuration (1-2 hours)
- [ ] Update `config.yaml` template with 6-dimension keywords
- [ ] Update `prompts/03_prisma_configuration.md` to guide keyword selection
- [ ] Test config loading in `03_screen_papers.py`

### Phase 2: Core Screening Logic (3-4 hours)
- [ ] Implement `build_prisma_prompt()` method
- [ ] Update `screen_paper()` to use 6-dimension scoring
- [ ] Implement `validate_evidence_grounding()` hallucination check
- [ ] Implement `determine_decision()` with 3-zone logic
- [ ] Test on sample papers (5-10 papers)

### Phase 3: Result Handling (1-2 hours)
- [ ] Update `save_results()` to separate 3 zones
- [ ] Create CSV output templates with score columns
- [ ] Test full pipeline on 50-100 papers

### Phase 4: Human Review Workflow (2-3 hours)
- [ ] Create `03b_human_review.py` interactive script
- [ ] Test human review workflow
- [ ] Integrate with Cohen's Kappa validation

### Phase 5: Validation Integration (1-2 hours)
- [ ] Update documentation with validation workflow
- [ ] Test `validate_human_ai_agreement.py` with real data
- [ ] Generate sample κ report

**Total Estimated Time**: 8-13 hours

---

## 🧪 Testing Strategy

### Unit Tests
1. `test_evidence_grounding()`: Verify hallucination detection
2. `test_score_calculation()`: Verify 6-dimension scoring
3. `test_decision_rules()`: Verify auto-include/exclude/human-review logic

### Integration Tests
1. End-to-end test on 10 sample papers with known ground truth
2. Verify CSV outputs match expected format
3. Test human review workflow with mock data

### Validation Tests
1. Calculate Cohen's Kappa on pilot sample (50 papers)
2. Verify κ ≥ 0.61 threshold
3. Analyze disagreement patterns

---

## 📊 Expected Outcomes

### Before AI-PRISMA
```
Stage 3 Output:
├── relevant_papers.csv (300 papers, 60%)
└── excluded_papers.csv (200 papers, 40%)

Problems:
❌ No transparency (why was paper included?)
❌ No validation (is AI reliable?)
❌ Binary decision (no human review for borderline cases)
```

### After AI-PRISMA
```
Stage 3 Output:
├── auto_included.csv (150 papers, 30%, ≥90% confidence)
├── auto_excluded.csv (250 papers, 50%, ≤10% confidence)
├── human_review_queue.csv (100 papers, 20%, 11-89% confidence)
└── all_screened_papers.csv (500 papers with full scores)

Benefits:
✅ Transparent scoring (6 dimensions with evidence quotes)
✅ Validated reliability (Cohen's Kappa ≥ 0.61)
✅ Human oversight (100 borderline cases reviewed by expert)
✅ Publication-ready (PRISMA 2020 compliant)
```

---

## 🔗 Next Steps

1. **Review this plan** with team/advisor
2. **Prioritize implementation** (which phase first?)
3. **Prepare test data** (50-100 papers with ground truth)
4. **Start Phase 1** (config.yaml update)

Questions to resolve:
- Should we implement all phases at once or incrementally?
- Do we need backward compatibility with old screening format?
- What's the target launch date for AI-PRISMA v1.0?
