import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function GrantPromptPage() {
  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/researcherRAG/blob/main/researcherrag_cli.py#L1041-L1048"
      githubLabel="View CLI Source"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">🚀</span>
        <h1 className="mb-0">Future Research Design</h1>
      </div>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Design follow-up studies based on identified research gaps. Perfect for grant proposals, dissertation planning, and identifying high-impact research opportunities.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📋 When to Use This Prompt</p>
        <ul className="text-sm space-y-1">
          <li>✓ Writing grant proposals</li>
          <li>✓ Planning dissertation or thesis research</li>
          <li>✓ Identifying novel research directions</li>
          <li>✓ Justifying the need for your study</li>
        </ul>
      </div>

      <h2 id="prompt-template">Prompt Template</h2>

      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-6">
        <CodeBlock
          language="text"
          code={`Based on the research gaps identified in my database, propose a follow-up study design.

Include:
1. Research question and hypotheses
2. Study design (methodology, sample, measures)
3. Analysis plan
4. Expected contributions to the field
5. Budget estimate and timeline`}
        />
      </div>

      <h2 id="expected-output">Expected Output Structure</h2>

      <div className="bg-white border rounded-lg p-6 my-6">
        <CodeBlock
          language="markdown"
          code={`## Proposed Study: AI Chatbot Effectiveness by Proficiency Level

### Research Question
**Main RQ**: How does the effectiveness of AI chatbots for speaking practice vary by learner proficiency level (beginner, intermediate, advanced)?

**Sub-questions**:
1. Do beginners benefit more than advanced learners?
2. What moderates effectiveness at each proficiency level?
3. How do engagement patterns differ across proficiency levels?

### Rationale and Gap Identification
**Gap in Literature**: Mixed findings for advanced learners [Park et al., 2023 vs Lee & Kim, 2022]. Only 3 of 18 RCT studies stratified by proficiency [systematic gap].

**Evidence of Need**:
- 73% of studies used heterogeneous samples (mixed proficiency) [meta-analysis finding]
- No RCT has directly compared effectiveness across 3+ proficiency levels
- Theoretical gap: No clear mechanism explaining proficiency moderation

**Expected Impact**: Inform targeted implementation (which students benefit most?)

---

### Study Design

**Design**: 3-arm RCT with proficiency stratification

**Arms**:
1. AI chatbot practice (3x/week, 20 min/session)
2. Human conversation partner practice (matched time)
3. Control (standard curriculum only)

**Duration**: 16 weeks (one semester)

**Sample**:
- N = 360 students (120 per arm)
  - 40 beginners (CEFR A1-A2)
  - 40 intermediate (CEFR B1-B2)
  - 40 advanced (CEFR C1-C2)
- University ESL students (ages 18-35)
- Stratified random assignment by proficiency

**Power Analysis**: 80% power to detect d = 0.40 at α = .05

---

### Measures

**Primary Outcome**: Speaking proficiency
- TOEFL iBT Speaking (0-30 scale)
- Pre, mid (8 weeks), post (16 weeks)
- Scored by blind raters (inter-rater reliability > .85)

**Secondary Outcomes**:
1. **Engagement**: Practice frequency (logged automatically)
2. **Motivation**: Language Learning Motivation (LLM) scale [validated]
3. **Anxiety**: Foreign Language Speaking Anxiety (FLSA) scale
4. **User Experience**: Custom satisfaction survey (10 items)

**Moderators**:
- Personality (Big Five Inventory)
- Technology self-efficacy
- Baseline anxiety

**Mediators**:
- Practice frequency
- Error correction acceptance
- Self-efficacy changes

---

### Procedures

**Week 1-2**: Baseline measures + randomization
**Week 3-10**: Intervention (8 weeks)
- Chatbot group: Access to GPT-4-based chatbot, 3 sessions/week
- Human partner group: Matched with peers, 3 sessions/week
- Control: Standard curriculum
**Week 11**: Mid-point measures + engagement survey
**Week 12-18**: Continue intervention
**Week 19-20**: Post-intervention measures + focus groups

**Fidelity Checks**:
- Weekly logs reviewed
- Spot-check chatbot conversation logs
- Monitor human partner attendance

---

### Analysis Plan

**Primary Analysis**:
- 3 (Arm) × 3 (Proficiency) × 3 (Time) mixed ANOVA
- Primary hypothesis: Arm × Proficiency interaction (p < .05)
- Planned contrasts:
  1. Chatbot vs Control at each proficiency level
  2. Chatbot vs Human Partner at each proficiency level

**Secondary Analyses**:
1. Mediation analysis: Does practice frequency mediate effects?
2. Moderation analysis: Do personality/anxiety moderate effects?
3. Trajectory analysis: Growth curve modeling for individual differences
4. Cost-effectiveness: $/effect size comparison across arms

**Qualitative Component**:
- 6 focus groups (2 per arm) with 6-8 students each
- Thematic analysis of barriers, facilitators, preferences
- Integration: Explain quantitative findings

---

### Expected Contributions

**Theoretical**:
1. Clarify proficiency-as-moderator mechanism (first rigorous test)
2. Extend technology acceptance models to proficiency-specific contexts
3. Inform instructional design theory for adaptive learning

**Practical**:
1. Evidence-based recommendations for schools (who should use chatbots?)
2. Cost-benefit data for administrators
3. Design guidelines for chatbot developers (adaptive difficulty)

**Methodological**:
1. Demonstrate importance of proficiency stratification
2. Provide benchmark effect sizes by proficiency level
3. Validate mixed methods integration for complex interventions

---

### Budget Estimate

| Category | Item | Cost |
|----------|------|------|
| **Personnel** | PI (10% effort, 2 years) | $24,000 |
| | Graduate RAs (2 × 50% × 2 years) | $64,000 |
| | Undergraduate RAs (4 × $15/hr × 400 hrs) | $24,000 |
| **Materials** | Chatbot API (360 students × $25/yr) | $9,000 |
| | TOEFL testing (360 × 3 tests × $30) | $32,400 |
| | Survey incentives ($10 × 360 × 3) | $10,800 |
| **Travel** | Conference presentations (2 × $2,000) | $4,000 |
| **Other** | Data transcription/coding | $8,000 |
| | Publication costs | $3,000 |
| | Indirect costs (20%) | $35,840 |

**Total Budget**: $215,040 (2 years)

---

### Timeline (24 months)

**Months 1-3**: IRB approval, recruit participants, finalize measures
**Months 4-5**: Baseline data collection (n = 360)
**Months 6-9**: First semester intervention (Wave 1, n = 180)
**Months 10-13**: Second semester intervention (Wave 2, n = 180)
**Months 14-16**: Data analysis (quantitative + qualitative)
**Months 17-20**: Manuscript writing (3 papers planned)
**Months 21-24**: Conference presentations, revisions, dissemination

**Deliverables**:
- 3 peer-reviewed journal articles
- 2 conference presentations
- Policy brief for K-12 administrators
- Open dataset (anonymized) for meta-analysis

---

### Risk Mitigation

**Risk 1: Recruitment challenges**
- Mitigation: Partner with 3 universities (backup sites)
- Over-recruit by 20% to account for attrition

**Risk 2: Technology failures**
- Mitigation: Backup chatbot vendor, IT support on-call

**Risk 3: High attrition (>20%)**
- Mitigation: Weekly engagement reminders, incentive structure

**Risk 4: Null findings**
- Mitigation: Still valuable (clarifies contradictions); focus on moderators

---

### Preliminary Data

We have piloted this design with n = 30 students (10 per arm, mixed proficiency):
- Feasibility: 87% retention, average 2.5 sessions/week
- Preliminary effect: d = 0.52 for intermediate learners (promising)
- User satisfaction: 8.2/10 for chatbot arm

---

### Significance Statement

This study addresses a critical gap: **who benefits from AI chatbots?** By directly testing proficiency as a moderator with rigorous RCT design, we will provide actionable guidance for educators and developers. Expected outcomes include:
1. Clear recommendations for targeted implementation
2. Theoretical advancement in adaptive learning
3. Cost-benefit data for resource allocation

**This research has the potential to transform how educational technology is deployed, moving from "one-size-fits-all" to "precision education."**`}
        />
      </div>

      <h2 id="customization">Customization Options</h2>

      <div className="grid grid-cols-1 gap-4 my-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Focus on Specific Gap
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`I identified this specific gap: "[describe the gap]"

Design a study to address it:
1. Research question and hypotheses (specific to this gap)
2. Optimal study design and sample
3. Measures and procedures
4. Expected contribution
5. Why this gap matters (significance)`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Replication Study Design
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Design a replication study for [Author, Year]:
1. Why replication is needed (limitations of original?)
2. What would be IDENTICAL (to test replicability)
3. What would be DIFFERENT (to extend generalizability)
4. Sample size and power analysis
5. Expected outcomes (replicate, fail to replicate, extend)`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Meta-Analysis Proposal
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Based on my database, propose a meta-analysis:
1. Research question for meta-analysis
2. Inclusion/exclusion criteria
3. Estimated k (number of studies to include)
4. Coding scheme (variables to extract)
5. Planned moderator analyses
6. Timeline and resources needed`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Dissertation Proposal
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Design a 3-study dissertation:
Study 1: [e.g., Meta-analysis of existing research]
Study 2: [e.g., RCT testing key moderator]
Study 3: [e.g., Qualitative exploration of mechanisms]

For EACH study:
- Research question
- Method (brief)
- Expected contribution
- How studies integrate

Total timeline: 3-4 years`}
            />
          </div>
        </details>
      </div>

      <h2 id="follow-up">Common Follow-up Questions</h2>

      <div className="bg-gray-50 border rounded-lg p-4 my-6">
        <ul className="text-sm space-y-2">
          <li><strong>Q:</strong> "What are the most critical gaps in my literature database?"</li>
          <li><strong>Q:</strong> "Which gap has the most funding opportunities?"</li>
          <li><strong>Q:</strong> "Show me studies that attempted similar designs and their lessons learned"</li>
          <li><strong>Q:</strong> "What measures have been validated in this population?"</li>
          <li><strong>Q:</strong> "Write a significance statement for a grant proposal"</li>
        </ul>
      </div>

      <h2 id="tips">Pro Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">🎯 Start with Gaps</h4>
          <p className="text-sm">
            Use "Contradiction Detection" or "Context Scanning" prompts first to identify gaps, then design study.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">📊 Be Realistic</h4>
          <p className="text-sm">
            Reference similar studies for realistic timelines, budgets, and sample sizes. Don't underestimate resources needed.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">🔗 Connect to Literature</h4>
          <p className="text-sm">
            Every design choice should cite your literature: "Based on X studies showing Y, we will use Z design..."
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">💡 Think Impact</h4>
          <p className="text-sm">
            Funders want to know "So what?" Clearly articulate theoretical AND practical contributions.
          </p>
        </div>
      </div>

      <h2 id="grant-writing-workflow">Grant Writing Workflow</h2>

      <p>Use this prompt as part of a comprehensive grant proposal process:</p>

      <div className="bg-gray-50 border rounded-lg p-4 my-6">
        <ol className="text-sm space-y-2">
          <li><strong>Step 1:</strong> Use "Context Scanning" to understand the field</li>
          <li><strong>Step 2:</strong> Use "Contradiction Detection" to identify gaps</li>
          <li><strong>Step 3:</strong> Use "Methodology Comparison" to choose optimal design</li>
          <li><strong>Step 4:</strong> Use THIS prompt to generate full study proposal</li>
          <li><strong>Step 5:</strong> Use "Hypothesis Validation" to strengthen rationale</li>
          <li><strong>Step 6:</strong> Use "Statistical Extraction" for power analysis benchmarks</li>
        </ol>
      </div>

      <h2 id="related-prompts">Related Prompts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link href="/guide/prompt-library/contradictions" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">⚡</span>
            <h4 className="font-semibold">Contradiction Detection</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Identify gaps and contradictions to justify your study
          </p>
        </Link>

        <Link href="/guide/prompt-library/methods" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🔬</span>
            <h4 className="font-semibold">Methodology Comparison</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Choose the optimal research design for your study
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
