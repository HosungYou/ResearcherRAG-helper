import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function HypothesisPromptPage() {
  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/researcherRAG/blob/main/researcherrag_cli.py#L998-L1004"
      githubLabel="View CLI Source"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">🧪</span>
        <h1 className="mb-0">Hypothesis Validation</h1>
      </div>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Test your research hypotheses by systematically identifying supporting and refuting evidence from your literature database. Perfect for building rigorous arguments backed by empirical data.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📋 When to Use This Prompt</p>
        <ul className="text-sm space-y-1">
          <li>✓ Testing specific research hypotheses or claims</li>
          <li>✓ Building evidence-based arguments for papers</li>
          <li>✓ Identifying contradictory findings</li>
          <li>✓ Validating theoretical predictions</li>
        </ul>
      </div>

      <h2 id="prompt-template">Prompt Template</h2>

      <p>Copy this prompt and replace <code>YOUR_HYPOTHESIS_HERE</code> with your hypothesis:</p>

      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-6">
        <CodeBlock
          language="text"
          code={`My hypothesis: "YOUR_HYPOTHESIS_HERE"

Please:
1. List evidence SUPPORTING this hypothesis
2. List evidence REFUTING or contradicting this hypothesis
3. Provide reasoning for each piece of evidence
4. Include effect sizes, statistical values, and page numbers`}
        />
      </div>

      <h2 id="example-usage">Example Usage</h2>

      <p>Here's how you might customize this prompt:</p>

      <div className="bg-white border rounded-lg p-6 my-6">
        <CodeBlock
          language="text"
          code={`My hypothesis: "AI chatbots improve speaking proficiency more effectively than traditional language labs"

Please:
1. List evidence SUPPORTING this hypothesis
2. List evidence REFUTING or contradicting this hypothesis
3. Provide reasoning for each piece of evidence
4. Include effect sizes, statistical values, and page numbers`}
        />
      </div>

      <h2 id="expected-output">Expected Output Structure</h2>

      <div className="bg-white border rounded-lg p-6 my-6">
        <CodeBlock
          language="markdown"
          code={`## Hypothesis Validation: AI Chatbots vs Traditional Language Labs

### Supporting Evidence (5 papers)

**Strong Support**
1. **[Smith et al., 2023, p.145]** - RCT with 120 students
   - AI chatbot group: +12.3 points on speaking test (Cohen's d = 0.87)
   - Language lab group: +6.1 points (Cohen's d = 0.42)
   - Difference significant (p < .001)
   - Reasoning: Personalized feedback and adaptive difficulty

2. **[Lee & Kim, 2022, p.67]** - 8-week intervention study
   - AI group showed 2.3x more improvement (ES = 0.91)
   - Students practiced 40% more with AI (engagement factor)

**Moderate Support**
3. **[Martinez, 2024, p.201]** - Qualitative study
   - Students reported lower anxiety with AI (no human judgment)
   - More willingness to practice (self-reported)
   - No quantitative comparison to traditional methods

### Refuting/Contradictory Evidence (3 papers)

**Direct Contradiction**
1. **[Johnson & Davis, 2021, p.89]** - No significant difference
   - AI chatbot: +7.2 points (d = 0.54)
   - Language lab: +6.8 points (d = 0.51)
   - Difference NOT significant (p = .23)
   - Reasoning: Both groups received equal practice time

**Partial Contradiction**
2. **[Park et al., 2023, p.134]** - Mixed results by proficiency level
   - Beginners: AI better (+8.5 vs +5.1, p < .05)
   - Advanced: Language lab better (+9.2 vs +7.8, p < .05)
   - Reasoning: Advanced learners benefit from peer interaction

**Methodological Concerns**
3. **[Chen, 2022, p.178]** - Questions measurement validity
   - Current speaking tests may not capture AI-trained skills
   - AI students excel in fluency but not pragmatic competence

### Summary
- **Balance of Evidence**: 5 supporting vs 3 refuting (63% support)
- **Effect Size Range**: d = 0.42 to 0.91 (moderate to large)
- **Confidence Level**: Moderate (heterogeneous findings)
- **Key Moderators**: Student proficiency level, measurement tools, practice time`}
        />
      </div>

      <h2 id="customization">Customization Examples</h2>

      <div className="grid grid-cols-1 gap-4 my-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Multiple Hypotheses
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`I have three related hypotheses:
1. "AI chatbots improve speaking proficiency"
2. "AI chatbots reduce language anxiety"
3. "AI chatbots increase practice frequency"

For EACH hypothesis:
1. List supporting evidence
2. List refuting evidence
3. Rate strength of evidence (Strong/Moderate/Weak)
4. Include effect sizes and citations`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Focus on Specific Study Types
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`My hypothesis: "[your hypothesis]"

Consider ONLY experimental studies (RCT or quasi-experimental).

For each supporting/refuting paper:
1. Specify experimental design
2. Report control condition
3. Note sample size and power
4. Include effect sizes with 95% CI`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Meta-Analysis Format
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`My hypothesis: "[your hypothesis]"

Create a table for meta-analysis:
| Study | Year | N | Design | Effect Size | 95% CI | p-value | Direction |
(For each paper reporting quantitative outcomes)

Then summarize:
- Weighted average effect size
- Heterogeneity (I²)
- Publication bias indicators`}
            />
          </div>
        </details>
      </div>

      <h2 id="follow-up">Common Follow-up Questions</h2>

      <div className="bg-gray-50 border rounded-lg p-4 my-6">
        <ul className="text-sm space-y-2">
          <li><strong>Q:</strong> "Why do Smith (2023) and Johnson (2021) report conflicting results?"</li>
          <li><strong>Q:</strong> "Are there moderating variables that explain the contradictions?"</li>
          <li><strong>Q:</strong> "Which study has the strongest methodology for testing this hypothesis?"</li>
          <li><strong>Q:</strong> "What sample sizes were used in supporting vs refuting studies?"</li>
          <li><strong>Q:</strong> "Show me the exact quotes from papers refuting my hypothesis"</li>
        </ul>
      </div>

      <h2 id="tips">Pro Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">⚖️ Seek Disconfirmation</h4>
          <p className="text-sm">
            Actively look for refuting evidence. Confirmation bias is real—don't ignore contradictory findings.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">📊 Compare Effect Sizes</h4>
          <p className="text-sm">
            Don't just count papers. Weight by effect size and study quality. One rigorous RCT may outweigh three weak correlational studies.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">🔍 Check Moderators</h4>
          <p className="text-sm">
            If results are mixed, ask "What factors differ between supporting and refuting studies?" (sample, context, measurement)
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">✅ Verify Claims</h4>
          <p className="text-sm">
            Read the original papers for critical claims. AI may misinterpret nuanced findings. Always spot-check.
          </p>
        </div>
      </div>

      <h2 id="related-prompts">Related Prompts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link href="/guide/prompt-library/contradictions" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">⚡</span>
            <h4 className="font-semibold">Contradiction Detection</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Deep dive into conflicting results after identifying contradictions
          </p>
        </Link>

        <Link href="/guide/prompt-library/statistics" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📊</span>
            <h4 className="font-semibold">Statistical Extraction</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Extract detailed quantitative data for meta-analysis
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
