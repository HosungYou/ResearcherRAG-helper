import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function MethodsPromptPage() {
  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/researcherRAG/blob/main/scholarag_cli.py#L1014-L1023"
      githubLabel="View CLI Source"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">🔬</span>
        <h1 className="mb-0">Methodology Comparison</h1>
      </div>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Compare different research methodologies used in your literature corpus. Understand the strengths, limitations, and appropriate use cases for each approach.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📋 When to Use This Prompt</p>
        <ul className="text-sm space-y-1">
          <li>✓ Justifying your chosen methodology for a study</li>
          <li>✓ Understanding methodological diversity in the field</li>
          <li>✓ Identifying gaps in research approaches</li>
          <li>✓ Writing methodology sections of papers</li>
        </ul>
      </div>

      <h2 id="prompt-template">Prompt Template</h2>

      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-6">
        <CodeBlock
          language="text"
          code={`Compare the three main methodologies used in my papers:
1. Experimental (RCT)
2. Quasi-experimental
3. Mixed methods

For each, provide:
- Strengths
- Limitations
- Recommended use scenarios
- Cite specific papers as examples`}
        />
      </div>

      <h2 id="expected-output">Expected Output Structure</h2>

      <div className="bg-white border rounded-lg p-6 my-6">
        <CodeBlock
          language="markdown"
          code={`## Methodology Comparison (137 papers)

### 1. Experimental (RCT) - 18 papers (13.1%)

**Strengths**
- Strongest causal inference [Smith et al., 2023]
- Control for confounds through randomization
- Gold standard for intervention effectiveness
- Clear treatment vs control comparison

**Limitations**
- Resource intensive (time, cost) [Lee & Kim, 2022]
- Limited external validity (lab settings)
- Ethical concerns for educational interventions
- High attrition rates (avg 18.5% in reviewed studies)

**Recommended Use Scenarios**
- Testing new intervention effectiveness
- Comparing two or more teaching methods
- When causal claims are priority
- Sufficient sample and resources available

**Example Papers**
- [Smith et al., 2023] - 12-week RCT with 120 students, waitlist control
- [Martinez, 2024] - Cluster-randomized trial (15 classrooms)
- [Park et al., 2023] - Pre-registered RCT with active control

---

### 2. Quasi-Experimental - 32 papers (23.4%)

**Strengths**
- More practical in real-world settings [Johnson, 2021]
- Lower cost and faster to implement
- Better external validity (naturalistic)
- Feasible when randomization impossible

**Limitations**
- Cannot rule out selection bias
- Confounding variables harder to control
- Weaker causal claims than RCT
- Requires careful statistical adjustments

**Recommended Use Scenarios**
- Evaluating existing programs
- When randomization is unethical/impractical
- Large-scale educational implementations
- Exploratory intervention research

**Example Papers**
- [Johnson & Davis, 2021] - Non-equivalent control group design
- [Chen, 2022] - Propensity score matching to reduce bias
- [Wilson, 2020] - Interrupted time series design

---

### 3. Mixed Methods - 25 papers (18.3%)

**Strengths**
- Comprehensive understanding (why + what) [Martinez, 2024]
- Qualitative explains quantitative findings
- Captures context and nuance
- Triangulation increases validity

**Limitations**
- Time and resource intensive
- Requires expertise in both paradigms
- Integration challenges (qual + quant)
- Longer timeline than single-method

**Recommended Use Scenarios**
- Complex interventions with multiple outcomes
- Understanding mechanisms behind effects
- Exploratory + confirmatory research
- When numbers alone insufficient

**Example Papers**
- [Martinez, 2024] - Convergent design (survey + interviews)
- [Lee & Kim, 2022] - Explanatory sequential (RCT → focus groups)
- [Park, 2023] - Embedded design (RCT with qual observations)

---

### Summary: Choosing a Methodology

| Criterion | RCT | Quasi-Experimental | Mixed Methods |
|-----------|-----|-------------------|---------------|
| **Causal inference** | Strongest | Moderate | Varies |
| **Resource needs** | High | Moderate | High |
| **External validity** | Lower | Higher | Highest |
| **Flexibility** | Low | Moderate | High |
| **Timeline** | 6-12 months | 3-6 months | 9-18 months |
| **Sample size needs** | Large (>50/group) | Moderate | Moderate |

### Trends in the Literature
- **2010-2015**: RCT dominance (64% of studies)
- **2016-2020**: Shift to quasi-experimental (practical constraints)
- **2021-2024**: Rise of mixed methods (complexity demands)`}
        />
      </div>

      <h2 id="customization">Customization Options</h2>

      <div className="grid grid-cols-1 gap-4 my-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Compare Different Methodologies
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Compare these methodologies used in my papers:
1. Case studies
2. Ethnography
3. Grounded theory

For each, provide strengths, limitations, use cases, and example citations.`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Focus on Data Analysis Methods
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Compare data analysis methods used across studies:
1. Structural equation modeling (SEM)
2. Regression analysis
3. Thematic analysis
4. Content analysis

For each:
- When used (sample, design)
- Software tools mentioned
- Strengths/limitations
- Example papers`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Qualitative Methods Only
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Compare qualitative approaches in my database:
1. Interviews (structured, semi-structured, unstructured)
2. Focus groups
3. Observations (participant, non-participant)
4. Document analysis

For each:
- Sample sizes typically used
- Data collection procedures
- Analysis approaches
- Quality criteria (credibility, transferability)`}
            />
          </div>
        </details>
      </div>

      <h2 id="follow-up">Common Follow-up Questions</h2>

      <div className="bg-gray-50 border rounded-lg p-4 my-6">
        <ul className="text-sm space-y-2">
          <li><strong>Q:</strong> "Which methodology had the highest citation counts?"</li>
          <li><strong>Q:</strong> "Show me RCT studies with strong internal validity"</li>
          <li><strong>Q:</strong> "What are common threats to validity in quasi-experimental studies?"</li>
          <li><strong>Q:</strong> "Which mixed methods designs are most popular?"</li>
          <li><strong>Q:</strong> "Compare quantitative vs qualitative sample sizes"</li>
        </ul>
      </div>

      <h2 id="tips">Pro Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">🎯 Justify Your Choice</h4>
          <p className="text-sm">
            Use this comparison to justify your methodology: "Based on 18 RCT studies in similar contexts [citations], this design is appropriate for..."
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">📊 Identify Gaps</h4>
          <p className="text-sm">
            If one methodology is underused, that's a research opportunity. "Only 5 studies used longitudinal designs, representing a gap..."
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">🔍 Quality Assessment</h4>
          <p className="text-sm">
            Not all RCTs are equal. Ask follow-ups about quality indicators (randomization procedure, blinding, attrition, etc.)
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">📖 Learn from Examples</h4>
          <p className="text-sm">
            Read the cited example papers to see how researchers executed each methodology well (or poorly).
          </p>
        </div>
      </div>

      <h2 id="related-prompts">Related Prompts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link href="/guide/prompt-library/statistics" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📊</span>
            <h4 className="font-semibold">Statistical Extraction</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Extract detailed statistics from specific study types
          </p>
        </Link>

        <Link href="/guide/prompt-library/grant" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🚀</span>
            <h4 className="font-semibold">Future Research Design</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Design your own study based on methodological insights
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
