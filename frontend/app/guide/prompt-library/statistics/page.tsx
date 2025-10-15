import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function StatisticsPromptPage() {
  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/researcherRAG/blob/main/researcherrag_cli.py#L1006-L1012"
      githubLabel="View CLI Source"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">📊</span>
        <h1 className="mb-0">Statistical Extraction</h1>
      </div>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Systematically extract quantitative data from your literature database. Essential for meta-analysis preparation and creating comprehensive data synthesis tables.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📋 When to Use This Prompt</p>
        <ul className="text-sm space-y-1">
          <li>✓ Preparing data for meta-analysis</li>
          <li>✓ Creating comparison tables across studies</li>
          <li>✓ Extracting effect sizes and sample sizes</li>
          <li>✓ Identifying measurement tools used</li>
        </ul>
      </div>

      <h2 id="prompt-template">Prompt Template</h2>

      <p>Copy this prompt and customize the <code>[outcome]</code> variable:</p>

      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-6">
        <CodeBlock
          language="text"
          code={`Extract from all RCT studies:
1. Measurement tools used for [outcome] assessment
2. Effect sizes (Cohen's d or similar)
3. Sample sizes (intervention and control groups)
4. Organize in a table format

For missing values, indicate "Not reported".`}
        />
      </div>

      <h2 id="example-usage">Example Usage</h2>

      <div className="bg-white border rounded-lg p-6 my-6">
        <CodeBlock
          language="text"
          code={`Extract from all RCT studies:
1. Measurement tools used for speaking proficiency assessment
2. Effect sizes (Cohen's d or similar)
3. Sample sizes (intervention and control groups)
4. Organize in a table format

For missing values, indicate "Not reported".`}
        />
      </div>

      <h2 id="expected-output">Expected Output Structure</h2>

      <div className="bg-white border rounded-lg p-6 my-6">
        <CodeBlock
          language="markdown"
          code={`## Statistical Extraction: Speaking Proficiency RCT Studies

| Study | Year | N (Int) | N (Ctrl) | Measurement Tool | Effect Size (d) | 95% CI | p-value | Notes |
|-------|------|---------|----------|------------------|-----------------|--------|---------|-------|
| Smith et al. | 2023 | 60 | 60 | TOEFL Speaking | 0.87 | [0.52, 1.22] | <.001 | 12-week intervention |
| Lee & Kim | 2022 | 45 | 43 | IELTS Speaking | 0.91 | [0.48, 1.34] | <.001 | University students |
| Martinez | 2024 | 75 | 75 | OPI (ACTFL) | 0.64 | [0.31, 0.97] | .002 | High school |
| Johnson | 2021 | 55 | 57 | Custom rubric | 0.12 | [-0.25, 0.49] | .23 | Not significant |
| Park et al. | 2023 | 40 | 38 | TOEFL Speaking | 0.73 | [0.28, 1.18] | .004 | Beginners only |
| Chen | 2022 | 33 | 31 | IELTS Speaking | Not reported | - | <.05 | Only reported p-value |
| Wilson | 2020 | 28 | 26 | Not reported | Not reported | - | .12 | Insufficient data |

### Summary Statistics
- **Total Studies**: 7 RCT studies identified
- **Total Participants**:
  - Intervention: 336 students
  - Control: 330 students
- **Effect Size Range**: d = 0.12 to 0.91
- **Mean Effect Size**: d = 0.65 (moderate to large)
- **Significant Results**: 5/7 studies (71%)

### Measurement Tools Used
1. **TOEFL Speaking Test** (2 studies)
2. **IELTS Speaking Test** (2 studies)
3. **OPI (ACTFL)** (1 study)
4. **Custom rubric** (1 study)
5. **Not reported** (1 study)

### Missing Data Issues
- 2 studies did not report effect sizes (Chen, Wilson)
- 1 study did not report measurement tool (Wilson)
- 3 studies did not report 95% confidence intervals`}
        />
      </div>

      <h2 id="customization">Customization Options</h2>

      <div className="grid grid-cols-1 gap-4 my-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Extract All Study Designs (Not Just RCT)
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Extract from ALL quantitative studies (RCT, quasi-experimental, correlational):
1. Study design (RCT, quasi, correlational)
2. Measurement tools for [outcome]
3. Effect sizes or correlation coefficients
4. Sample sizes
5. Organize in a table

Separate tables by study design.`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Multi-Outcome Extraction
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Extract from RCT studies, for EACH outcome:
- Speaking proficiency
- Motivation
- Anxiety

Create separate tables for each outcome with:
1. Measurement tool
2. Effect size
3. Sample size
4. p-value`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Detailed Statistical Information
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Extract comprehensive statistical data from RCT studies:
1. Descriptive statistics (M, SD) for pre/post intervention and control
2. Effect sizes (Cohen's d, Hedges' g, partial η²)
3. Test statistics (t, F, χ²)
4. Sample characteristics (age range, gender %, attrition)
5. Power analysis (if reported)

Format as a detailed table with all available values.`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Reliability and Validity Data
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`For each measurement tool used:
1. Tool name and citation
2. Reliability coefficients (Cronbach's α, test-retest)
3. Validity evidence mentioned
4. Number of items/subscales
5. Score range

Create a "Measurement Properties" table.`}
            />
          </div>
        </details>
      </div>

      <h2 id="follow-up">Common Follow-up Questions</h2>

      <div className="bg-gray-50 border rounded-lg p-4 my-6">
        <ul className="text-sm space-y-2">
          <li><strong>Q:</strong> "Which studies used the same measurement tool? (for direct comparison)"</li>
          <li><strong>Q:</strong> "What's the weighted average effect size?"</li>
          <li><strong>Q:</strong> "Show me studies with sample sizes &gt; 50 per group"</li>
          <li><strong>Q:</strong> "Which studies reported insufficient statistical details?"</li>
          <li><strong>Q:</strong> "Export this table to CSV format"</li>
        </ul>
      </div>

      <h2 id="tips">Pro Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border-l-4 border-green-500 bg-green-50 p-4">
          <h4 className="font-semibold mb-2">📋 Export to Excel</h4>
          <p className="text-sm">
            Copy the markdown table and paste into Excel for further analysis. Or ask the AI to format as CSV.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
          <h4 className="font-semibold mb-2">🔍 Check Missing Data</h4>
          <p className="text-sm">
            Always include "For missing values, indicate 'Not reported'" to identify studies with incomplete data.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 bg-purple-50 p-4">
          <h4 className="font-semibold mb-2">📊 Verify Effect Sizes</h4>
          <p className="text-sm">
            Spot-check a few effect sizes by reading the original papers. AI may miscalculate if data is ambiguous.
          </p>
        </div>

        <div className="border-l-4 border-orange-500 bg-orange-50 p-4">
          <h4 className="font-semibold mb-2">⚖️ Note Heterogeneity</h4>
          <p className="text-sm">
            If effect sizes vary widely, ask follow-up questions about moderators (age, context, duration, etc.)
          </p>
        </div>
      </div>

      <h2 id="meta-analysis-workflow">Meta-Analysis Workflow</h2>

      <p>Use this prompt as part of a systematic meta-analysis pipeline:</p>

      <div className="bg-gray-50 border rounded-lg p-4 my-6">
        <ol className="text-sm space-y-2">
          <li><strong>Step 1:</strong> Use this prompt to extract effect sizes and sample sizes</li>
          <li><strong>Step 2:</strong> Export table to Excel/R/STATA</li>
          <li><strong>Step 3:</strong> Calculate weighted average effect size</li>
          <li><strong>Step 4:</strong> Test for heterogeneity (I², Q statistic)</li>
          <li><strong>Step 5:</strong> Conduct moderator analysis if heterogeneous</li>
          <li><strong>Step 6:</strong> Check publication bias (funnel plot, Egger's test)</li>
        </ol>
      </div>

      <h2 id="related-prompts">Related Prompts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link href="/guide/prompt-library/hypothesis" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧪</span>
            <h4 className="font-semibold">Hypothesis Validation</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Test hypotheses using the extracted statistical data
          </p>
        </Link>

        <Link href="/guide/prompt-library/methods" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🔬</span>
            <h4 className="font-semibold">Methodology Comparison</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Compare methodological quality across studies
          </p>
        </Link>
      </div>

      <div className="my-6">
        <Link href="/guide/prompt-library" className="text-sm text-blue-600 hover:underline">
          ← Back to Prompt Library
        </Link>
      </div>
    </GuideLayout>
  )
}
