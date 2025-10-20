import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function ContradictionsPromptPage() {
  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/researcherRAG/blob/main/scholarag_cli.py#L1025-L1031"
      githubLabel="View CLI Source"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">⚡</span>
        <h1 className="mb-0">Contradiction Detection</h1>
      </div>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Identify conflicting results across studies and analyze potential reasons for discrepancies. Critical for understanding nuances in your research domain.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📋 When to Use This Prompt</p>
        <ul className="text-sm space-y-1">
          <li>✓ Identifying inconsistent findings across studies</li>
          <li>✓ Writing critical analysis or discussion sections</li>
          <li>✓ Understanding moderating factors</li>
          <li>✓ Proposing future research to resolve contradictions</li>
        </ul>
      </div>

      <h2 id="prompt-template">Prompt Template</h2>

      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-6">
        <CodeBlock
          language="text"
          code={`Identify cases where studies report conflicting results (e.g., positive vs. negative outcomes).

For each contradiction:
1. Describe the conflicting findings
2. Analyze potential reasons (sample, duration, tools, context)
3. Provide direct quotes from the papers
4. Suggest follow-up research to resolve the contradiction`}
        />
      </div>

      <h2 id="expected-output">Expected Output Structure</h2>

      <div className="bg-white border rounded-lg p-6 my-6">
        <CodeBlock
          language="markdown"
          code={`## Contradictions Identified (5 cases)

### Contradiction 1: AI Chatbot Effectiveness for Advanced Learners

**Conflicting Findings**
- **Positive**: [Lee & Kim, 2022] found significant improvement for advanced learners (+9.2 points, p < .001)
- **Negative**: [Park et al., 2023] found NO improvement for advanced learners (+2.1 points, p = .18)

**Potential Reasons for Discrepancy**

1. **Duration Difference**
   - Lee & Kim: 16-week intervention
   - Park et al.: 8-week intervention
   - → Advanced learners may need longer exposure

2. **Chatbot Sophistication**
   - Lee & Kim: "Advanced chatbot with GPT-4 backend" (p.45)
   - Park et al.: "Rule-based chatbot with limited vocabulary" (p.134)
   - → Technology quality matters

3. **Outcome Measurement**
   - Lee & Kim: IELTS Speaking (holistic scoring)
   - Park et al.: Custom rubric (focus on grammar accuracy)
   - → Different aspects of speaking

4. **Sample Characteristics**
   - Lee & Kim: University students (age 19-24)
   - Park et al.: High school students (age 16-18)
   - → Age/maturity may moderate effectiveness

**Direct Quotes**

Lee & Kim (2022, p.45):
> "Advanced learners showed the greatest gains, suggesting that sophisticated conversational AI is particularly beneficial for students who have mastered basic grammar."

Park et al. (2023, p.134):
> "We were surprised to find no significant improvement for advanced learners. The chatbot's limited response variety may have failed to challenge them sufficiently."

**Suggested Follow-up Research**
- RCT comparing simple vs sophisticated chatbots for advanced learners
- Meta-analysis examining chatbot technology as a moderator
- Qualitative study: Do advanced learners engage differently with chatbots?

---

### Contradiction 2: Anxiety Reduction Effects

**Conflicting Findings**
- **Reduced**: [Martinez, 2024] found 32% reduction in speaking anxiety (p < .001)
- **No change**: [Johnson, 2021] found no significant anxiety reduction (p = .45)
- **Increased**: [Wilson, 2020] found 15% INCREASE in anxiety (p = .03)

**Potential Reasons**

1. **Chatbot Design**
   - Martinez: Supportive feedback, emoji reactions
   - Johnson: Neutral feedback only
   - Wilson: Immediate error correction (potentially intimidating)

2. **Student Personality**
   - Martinez: Screened for high-anxiety students
   - Johnson & Wilson: Did not screen for baseline anxiety
   - → Intervention works for specific population

3. **Implementation Context**
   - Martinez: Optional practice (voluntary)
   - Wilson: Required homework (graded)
   - → Pressure may counteract benefits

**Direct Quotes**

Martinez (2024, p.201):
> "Students reported feeling 'safe to make mistakes' with the chatbot, unlike human conversations where judgment was feared."

Wilson (2020, p.78):
> "Some students found the chatbot's immediate error corrections 'stressful' and 'judgmental,' similar to strict teacher feedback."

**Suggested Follow-up Research**
- Compare feedback styles (supportive vs corrective)
- Examine personality traits as moderators (trait anxiety, introversion)
- Longitudinal study: Does anxiety reduction persist over time?

---

### Contradiction 3: Engagement and Practice Frequency

**Conflicting Findings**
- **More practice**: [Smith et al., 2023] - Students practiced 40% more with chatbot
- **Less practice**: [Chen, 2022] - Students practiced 25% LESS with chatbot vs human partners

**Potential Reasons**

1. **Novelty Effect**
   - Smith: 4-week intervention (novelty maintained)
   - Chen: 16-week intervention (novelty wore off)
   - → Engagement may decline over time

2. **Social Motivation**
   - Smith: Individual practice (no peer comparison)
   - Chen: Visible practice logs (peer pressure reduced intrinsic motivation)

3. **Chatbot Quality**
   - Smith: "Conversational and engaging responses" (p.67)
   - Chen: "Repetitive and predictable interactions" (p.189)

**Direct Quotes**

Smith et al. (2023, p.67):
> "The chatbot's 24/7 availability led to spontaneous practice sessions, especially late at night when peers were unavailable."

Chen (2022, p.189):
> "After 8 weeks, students complained the chatbot felt 'robotic' and preferred human conversation partners for practice."

**Suggested Follow-up Research**
- Longitudinal study tracking engagement decay over time
- Compare chatbot vs human partner motivation
- Design study: Can chatbot updates maintain engagement?

---

### Summary

**Common Moderators Across Contradictions**
1. **Intervention duration** (short vs long-term effects differ)
2. **Technology sophistication** (advanced vs simple chatbots)
3. **Sample characteristics** (proficiency level, age, personality)
4. **Implementation context** (voluntary vs required, graded vs ungraded)
5. **Outcome measurement** (different tools capture different aspects)

**Research Agenda to Resolve Contradictions**
1. Meta-analysis with moderator analysis (technology × duration × population)
2. Standardized measurement protocols across studies
3. Mixed methods to understand mechanisms behind contradictions
4. Pre-registered replication studies in diverse contexts`}
        />
      </div>

      <h2 id="customization">Customization Options</h2>

      <div className="grid grid-cols-1 gap-4 my-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Focus on Specific Contradiction
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Identify studies with conflicting results on THIS specific issue:
"[Insert specific research question or variable]"

For each contradiction:
1. Conflicting findings with exact statistics
2. Detailed comparison of methods (sample, measures, context)
3. Direct quotes from papers
4. Your assessment of which finding is more credible and why`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Methodological Quality Focus
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Identify contradictory findings and assess methodological quality:

For each contradiction:
1. Describe conflicting results
2. Rate methodological rigor of each study (sample size, design, controls)
3. Identify which study has stronger evidence
4. Recommend which finding to trust based on quality`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Systematic Discrepancy Analysis
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Create a discrepancy matrix:

| Finding | Positive Studies | Negative Studies | Moderators | Resolution Strategy |
|---------|------------------|------------------|------------|---------------------|

For each row:
- Count supporting vs refuting papers
- Identify methodological differences
- Propose meta-analysis or replication needs`}
            />
          </div>
        </details>
      </div>

      <h2 id="follow-up">Common Follow-up Questions</h2>

      <div className="bg-gray-50 border rounded-lg p-4 my-6">
        <ul className="text-sm space-y-2">
          <li><strong>Q:</strong> "Which contradiction has the most studies on each side?"</li>
          <li><strong>Q:</strong> "Show me the exact methods sections from contradicting studies"</li>
          <li><strong>Q:</strong> "Are there temporal trends? (earlier vs recent studies)"</li>
          <li><strong>Q:</strong> "Which authors have published on both sides of a contradiction?"</li>
          <li><strong>Q:</strong> "Propose a study design that could reconcile these contradictions"</li>
        </ul>
      </div>

      <h2 id="tips">Pro Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">⚠️ Don't Ignore Conflicts</h4>
          <p className="text-sm">
            Contradictions are not flaws—they're opportunities. Address them explicitly in your discussion section.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">🔍 Dig Deeper</h4>
          <p className="text-sm">
            Always ask "WHY?" when finding contradictions. The answer often reveals important moderating factors.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">📊 Weight by Quality</h4>
          <p className="text-sm">
            One rigorous study may outweigh three weak ones. Consider methodological quality when interpreting contradictions.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">🎯 Propose Solutions</h4>
          <p className="text-sm">
            Use contradictions to justify your own research. "To resolve this discrepancy, our study will..."
          </p>
        </div>
      </div>

      <h2 id="related-prompts">Related Prompts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link href="/guide/prompt-library/hypothesis" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧪</span>
            <h4 className="font-semibold">Hypothesis Validation</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Test hypotheses about why contradictions exist
          </p>
        </Link>

        <Link href="/guide/prompt-library/grant" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🚀</span>
            <h4 className="font-semibold">Future Research Design</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Design studies to resolve identified contradictions
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
