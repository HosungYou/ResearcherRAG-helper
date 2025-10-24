#!/usr/bin/env python3
"""
Human-AI Agreement Validation using Cohen's Kappa

Calculates inter-rater reliability between AI screening decisions and human validation.
Ensures AI-assisted PRISMA screening meets academic standards (κ ≥ 0.61).

Usage:
    python scripts/validate_human_ai_agreement.py \
        --ai-decisions data/02_screening/ai_screening.csv \
        --human-validation data/02_screening/human_sample.csv \
        --output data/02_screening/kappa_report.md

References:
    - Cohen, J. (1960). A coefficient of agreement for nominal scales.
    - Landis & Koch (1977). The measurement of observer agreement for categorical data.
"""

import argparse
import pandas as pd
import numpy as np
from pathlib import Path
from typing import Tuple, Dict
from sklearn.metrics import cohen_kappa_score, confusion_matrix
import sys


class KappaValidator:
    """Calculate Cohen's Kappa for AI-Human agreement"""

    def __init__(self, ai_file: str, human_file: str, output_file: str):
        self.ai_file = Path(ai_file)
        self.human_file = Path(human_file)
        self.output_file = Path(output_file)

        # Landis & Koch (1977) interpretation
        self.kappa_interpretation = {
            (-1.0, 0.0): ("Poor", "⛔ Re-design screening criteria"),
            (0.0, 0.20): ("Slight", "⛔ Major revision needed"),
            (0.20, 0.40): ("Fair", "⚠️  Improve rubric clarity"),
            (0.40, 0.60): ("Moderate", "⚠️  Consider additional training"),
            (0.60, 0.80): ("Substantial", "✅ Acceptable for publication"),
            (0.80, 1.0): ("Almost Perfect", "✅ Excellent agreement")
        }

    def load_data(self) -> Tuple[pd.DataFrame, pd.DataFrame]:
        """Load AI and human screening decisions"""

        if not self.ai_file.exists():
            print(f"❌ Error: AI decisions file not found: {self.ai_file}")
            sys.exit(1)

        if not self.human_file.exists():
            print(f"❌ Error: Human validation file not found: {self.human_file}")
            sys.exit(1)

        ai_df = pd.read_csv(self.ai_file)
        human_df = pd.read_csv(self.human_file)

        # Validate required columns
        required_ai_cols = ['paper_id', 'ai_decision']
        required_human_cols = ['paper_id', 'human_decision']

        if not all(col in ai_df.columns for col in required_ai_cols):
            print(f"❌ Error: AI file must contain columns: {required_ai_cols}")
            print(f"   Found: {list(ai_df.columns)}")
            sys.exit(1)

        if not all(col in human_df.columns for col in required_human_cols):
            print(f"❌ Error: Human file must contain columns: {required_human_cols}")
            print(f"   Found: {list(human_df.columns)}")
            sys.exit(1)

        return ai_df, human_df

    def merge_decisions(self, ai_df: pd.DataFrame, human_df: pd.DataFrame) -> pd.DataFrame:
        """Merge AI and human decisions on paper_id"""

        merged = pd.merge(
            ai_df[['paper_id', 'ai_decision']],
            human_df[['paper_id', 'human_decision']],
            on='paper_id',
            how='inner'
        )

        if len(merged) == 0:
            print("❌ Error: No matching paper_ids found between AI and human files")
            print(f"   AI papers: {len(ai_df)}")
            print(f"   Human papers: {len(human_df)}")
            sys.exit(1)

        if len(merged) < 20:
            print(f"⚠️  Warning: Small sample size ({len(merged)} papers)")
            print("   Recommend at least 50 papers for reliable κ estimation")

        return merged

    def normalize_decisions(self, merged: pd.DataFrame) -> pd.DataFrame:
        """Normalize decision labels to binary (include/exclude)"""

        include_labels = ['include', 'included', 'yes', 'accept', 'relevant', 'pass']
        exclude_labels = ['exclude', 'excluded', 'no', 'reject', 'irrelevant', 'fail']

        def normalize(decision):
            if pd.isna(decision):
                return None
            decision = str(decision).strip().lower()
            if decision in include_labels:
                return 'include'
            elif decision in exclude_labels:
                return 'exclude'
            else:
                return None  # Unknown label

        merged['ai_decision_norm'] = merged['ai_decision'].apply(normalize)
        merged['human_decision_norm'] = merged['human_decision'].apply(normalize)

        # Remove rows with unknown labels
        before = len(merged)
        merged = merged.dropna(subset=['ai_decision_norm', 'human_decision_norm'])
        after = len(merged)

        if before > after:
            print(f"⚠️  Removed {before - after} rows with unrecognized decision labels")

        return merged

    def calculate_kappa(self, merged: pd.DataFrame) -> Dict:
        """Calculate Cohen's Kappa and related metrics"""

        ai_decisions = merged['ai_decision_norm'].values
        human_decisions = merged['human_decision_norm'].values

        # Cohen's Kappa
        kappa = cohen_kappa_score(human_decisions, ai_decisions)

        # Confusion matrix
        cm = confusion_matrix(
            human_decisions,
            ai_decisions,
            labels=['include', 'exclude']
        )

        # Agreement metrics
        n_total = len(merged)
        n_agree = np.sum(ai_decisions == human_decisions)
        p_observed = n_agree / n_total

        # Expected agreement by chance
        ai_include = np.sum(ai_decisions == 'include')
        ai_exclude = np.sum(ai_decisions == 'exclude')
        human_include = np.sum(human_decisions == 'include')
        human_exclude = np.sum(human_decisions == 'exclude')

        p_expected = (
            (ai_include * human_include + ai_exclude * human_exclude) /
            (n_total ** 2)
        )

        # Interpretation
        interpretation = None
        recommendation = None
        for (lower, upper), (interp, rec) in self.kappa_interpretation.items():
            if lower <= kappa < upper:
                interpretation = interp
                recommendation = rec
                break

        return {
            'kappa': kappa,
            'confusion_matrix': cm,
            'n_total': n_total,
            'n_agree': n_agree,
            'p_observed': p_observed,
            'p_expected': p_expected,
            'ai_include': ai_include,
            'ai_exclude': ai_exclude,
            'human_include': human_include,
            'human_exclude': human_exclude,
            'interpretation': interpretation,
            'recommendation': recommendation,
            'passed': kappa >= 0.61  # Substantial agreement threshold
        }

    def generate_report(self, metrics: Dict, merged: pd.DataFrame) -> str:
        """Generate markdown report"""

        cm = metrics['confusion_matrix']

        # Disagreement analysis
        disagreements = merged[
            merged['ai_decision_norm'] != merged['human_decision_norm']
        ]

        # Format report
        report = f"""# Cohen's Kappa Validation Report

## Summary

**Sample Size:** {metrics['n_total']} papers
**Cohen's Kappa:** κ = {metrics['kappa']:.3f} ({metrics['interpretation']})
**Validation Status:** {'✅ PASSED' if metrics['passed'] else '⛔ FAILED'} (threshold: κ ≥ 0.61)

{metrics['recommendation']}

---

## Agreement Metrics

| Metric | Value | Interpretation |
|--------|-------|----------------|
| **Observed Agreement** | {metrics['p_observed']:.1%} ({metrics['n_agree']}/{metrics['n_total']}) | Percentage of papers where AI and human agreed |
| **Expected Agreement** | {metrics['p_expected']:.1%} | Agreement expected by random chance |
| **Cohen's Kappa** | **{metrics['kappa']:.3f}** | Agreement adjusted for chance |
| **Agreement Level** | **{metrics['interpretation']}** | Landis & Koch (1977) interpretation |

---

## Confusion Matrix

|                   | Human: Include | Human: Exclude | Total |
|-------------------|----------------|----------------|-------|
| **AI: Include**   | {cm[0,0]:>14} | {cm[0,1]:>14} | {cm[0,0] + cm[0,1]:>5} |
| **AI: Exclude**   | {cm[1,0]:>14} | {cm[1,1]:>14} | {cm[1,0] + cm[1,1]:>5} |
| **Total**         | {cm[0,0] + cm[1,0]:>14} | {cm[0,1] + cm[1,1]:>14} | {metrics['n_total']:>5} |

**Interpretation:**
- **Top-left ({cm[0,0]})**: AI and human both included → ✅ True positives
- **Bottom-right ({cm[1,1]})**: AI and human both excluded → ✅ True negatives
- **Top-right ({cm[0,1]})**: AI included, human excluded → ⚠️ **False positives** (AI too lenient)
- **Bottom-left ({cm[1,0]})**: AI excluded, human included → ⚠️ **False negatives** (AI too strict)

---

## Disagreement Analysis

**Total Disagreements:** {len(disagreements)} papers ({len(disagreements)/metrics['n_total']:.1%})

### Disagreement Breakdown

| AI Decision | Human Decision | Count | % of Disagreements |
|-------------|----------------|-------|--------------------|
| Include | Exclude | {cm[0,1]} | {cm[0,1]/max(len(disagreements), 1)*100:.1f}% |
| Exclude | Include | {cm[1,0]} | {cm[1,0]/max(len(disagreements), 1)*100:.1f}% |

"""

        if len(disagreements) > 0:
            report += "\n### Sample Disagreements (First 5)\n\n"
            report += "| Paper ID | AI Decision | Human Decision | Title |\n"
            report += "|----------|-------------|----------------|-------|\n"

            for _, row in disagreements.head(5).iterrows():
                paper_id = row['paper_id']
                ai_dec = row['ai_decision_norm']
                human_dec = row['human_decision_norm']
                title = row.get('title', 'N/A')[:60] + "..."
                report += f"| {paper_id} | {ai_dec} | {human_dec} | {title} |\n"

            report += f"\n**Full disagreement list:** See `data/02_screening/disagreements.csv`\n"

        report += f"""
---

## Recommendations

"""

        if metrics['kappa'] < 0.61:
            report += """
### ⛔ Validation Failed

Your AI screening does not meet the minimum reliability threshold (κ ≥ 0.61).

**Next Steps:**

1. **Review Disagreements**: Analyze `data/02_screening/disagreements.csv` to identify patterns
2. **Refine Rubric**: Adjust keyword weights in `config/research_profile.yaml`
3. **Calibrate Thresholds**: Modify `auto_include` and `auto_exclude` confidence levels
4. **Re-run Validation**: Test on new sample after adjustments

**Common Issues:**

"""
            if cm[0,1] > cm[1,0]:
                report += "- **AI too lenient** (many false positives) → Increase `auto_include` threshold\n"
            elif cm[1,0] > cm[0,1]:
                report += "- **AI too strict** (many false negatives) → Decrease `auto_exclude` threshold\n"

            report += "- Ambiguous keyword weights → Use more specific domain terms\n"
            report += "- Exclusion criteria unclear → Add hard exclusions (-20 penalty)\n"

        elif metrics['kappa'] < 0.80:
            report += """
### ✅ Acceptable Reliability

Your AI screening meets academic standards (κ = {:.3f}, Substantial agreement).

**Publication Readiness:**

- ✅ Can be used for PRISMA systematic review
- ✅ Report κ value in Methods section
- ✅ Include transparency statement (see `docs/VALIDATION_PROTOCOL.md`)

**Optional Improvements:**

- Review disagreements to further refine rubric
- Consider dual human screening for borderline cases (11-89% confidence)

""".format(metrics['kappa'])

        else:
            report += """
### ✅ Excellent Reliability

Your AI screening achieves almost perfect agreement (κ = {:.3f}).

**Publication Readiness:**

- ✅ Exceeds academic standards for systematic reviews
- ✅ Can confidently use AI for high-volume screening
- ✅ Minimal human review needed (spot-check 5-10% for quality control)

**Transparency:**

- Report κ value in Methods section
- Include sample size and confidence intervals
- Acknowledge AI assistance with proper citation

""".format(metrics['kappa'])

        report += f"""
---

## Validation Checklist

- [{'x' if metrics['passed'] else ' '}] Cohen's Kappa ≥ 0.61 (current: {metrics['kappa']:.3f})
- [ ] Sample size ≥ 50 papers (current: {metrics['n_total']})
- [ ] Random sampling (stratified by include/exclude)
- [ ] Independent human reviewer (no access to AI decisions during screening)
- [ ] Disagreements documented and analyzed
- [ ] Transparency statement prepared for Methods section

---

## Academic References

**Cohen, J. (1960).** A coefficient of agreement for nominal scales. *Educational and Psychological Measurement*, 20(1), 37-46.

**Landis, J. R., & Koch, G. G. (1977).** The measurement of observer agreement for categorical data. *Biometrics*, 33(1), 159-174.

**McHugh, M. L. (2012).** Interrater reliability: the kappa statistic. *Biochemia Medica*, 22(3), 276-282.

---

**Report generated:** {pd.Timestamp.now().strftime('%Y-%m-%d %H:%M:%S')}
**AI Decisions:** `{self.ai_file}`
**Human Validation:** `{self.human_file}`
"""

        return report

    def save_disagreements(self, merged: pd.DataFrame):
        """Save disagreement list for review"""

        disagreements = merged[
            merged['ai_decision_norm'] != merged['human_decision_norm']
        ].copy()

        if len(disagreements) == 0:
            print("   ✓ No disagreements found (perfect agreement!)")
            return

        output_dir = self.output_file.parent
        disagreement_file = output_dir / "disagreements.csv"

        disagreements.to_csv(disagreement_file, index=False)
        print(f"   ✓ Saved {len(disagreements)} disagreements to: {disagreement_file}")

    def run(self):
        """Execute validation workflow"""

        print("\n" + "="*60)
        print("Cohen's Kappa Validation for AI-Assisted Screening")
        print("="*60 + "\n")

        # Load data
        print("📂 Loading data...")
        ai_df, human_df = self.load_data()
        print(f"   ✓ AI decisions: {len(ai_df)} papers")
        print(f"   ✓ Human validation: {len(human_df)} papers")

        # Merge
        print("\n🔗 Merging decisions...")
        merged = self.merge_decisions(ai_df, human_df)
        print(f"   ✓ Matched {len(merged)} papers")

        # Normalize
        print("\n🔧 Normalizing decision labels...")
        merged = self.normalize_decisions(merged)
        print(f"   ✓ {len(merged)} papers with valid labels")

        # Calculate kappa
        print("\n📊 Calculating Cohen's Kappa...")
        metrics = self.calculate_kappa(merged)
        print(f"   ✓ κ = {metrics['kappa']:.3f} ({metrics['interpretation']})")

        # Generate report
        print("\n📝 Generating validation report...")
        report = self.generate_report(metrics, merged)

        # Save report
        self.output_file.parent.mkdir(parents=True, exist_ok=True)
        with open(self.output_file, 'w') as f:
            f.write(report)
        print(f"   ✓ Saved report to: {self.output_file}")

        # Save disagreements
        self.save_disagreements(merged)

        # Final verdict
        print("\n" + "="*60)
        if metrics['passed']:
            print("✅ VALIDATION PASSED")
            print(f"   κ = {metrics['kappa']:.3f} ({metrics['interpretation']})")
            print("   Your AI screening meets academic standards.")
        else:
            print("⛔ VALIDATION FAILED")
            print(f"   κ = {metrics['kappa']:.3f} ({metrics['interpretation']})")
            print("   Minimum requirement: κ ≥ 0.61 (Substantial agreement)")
            print("\n   Next steps:")
            print("   1. Review disagreements.csv for patterns")
            print("   2. Refine screening rubric in config/research_profile.yaml")
            print("   3. Re-run validation after adjustments")
        print("="*60 + "\n")

        return metrics['passed']


def main():
    parser = argparse.ArgumentParser(
        description="Validate AI-Human agreement using Cohen's Kappa",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:

  # Basic validation
  python scripts/validate_human_ai_agreement.py \\
      --ai-decisions data/02_screening/ai_screening.csv \\
      --human-validation data/02_screening/human_sample.csv \\
      --output data/02_screening/kappa_report.md

  # After running, review the report
  cat data/02_screening/kappa_report.md

  # Check disagreements
  head data/02_screening/disagreements.csv

File Format Requirements:

  AI decisions file (CSV):
    - Required columns: paper_id, ai_decision
    - ai_decision values: include/exclude (or variants)
    - Optional: ai_confidence, ai_reasoning

  Human validation file (CSV):
    - Required columns: paper_id, human_decision
    - human_decision values: include/exclude (or variants)
    - Optional: human_reasoning

  Both files must have matching paper_id values for comparison.
        """
    )

    parser.add_argument(
        '--ai-decisions',
        required=True,
        help='Path to AI screening decisions CSV'
    )

    parser.add_argument(
        '--human-validation',
        required=True,
        help='Path to human validation sample CSV'
    )

    parser.add_argument(
        '--output',
        required=True,
        help='Path to output validation report (markdown)'
    )

    args = parser.parse_args()

    validator = KappaValidator(
        ai_file=args.ai_decisions,
        human_file=args.human_validation,
        output_file=args.output
    )

    passed = validator.run()
    sys.exit(0 if passed else 1)


if __name__ == "__main__":
    main()
