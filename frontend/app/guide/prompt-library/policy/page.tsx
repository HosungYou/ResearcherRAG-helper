import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function PolicyPromptPage() {
  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/researcherRAG/blob/main/researcherrag_cli.py#L1033-L1039"
      githubLabel="View CLI Source"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">📋</span>
        <h1 className="mb-0">Policy Translation</h1>
      </div>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Convert research findings into actionable policy recommendations. Bridge the gap between academic research and real-world implementation for practitioners and administrators.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📋 When to Use This Prompt</p>
        <ul className="text-sm space-y-1">
          <li>✓ Creating policy briefs for stakeholders</li>
          <li>✓ Translating research for non-academic audiences</li>
          <li>✓ Developing implementation guides</li>
          <li>✓ Writing practical recommendations sections</li>
        </ul>
      </div>

      <h2 id="prompt-template">Prompt Template</h2>

      <p>Customize the audience (education administrators, policymakers, healthcare providers, etc.):</p>

      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-6">
        <CodeBlock
          language="text"
          code={`Based on my RAG database, create a policy memo for education administrators.

Include:
1. Executive summary (3 key takeaways)
2. Policy recommendations (3-5 actionable items)
3. Implementation checklist for practitioners
4. Evidence citations supporting each recommendation`}
        />
      </div>

      <h2 id="expected-output">Expected Output Structure</h2>

      <div className="bg-white border rounded-lg p-6 my-6">
        <CodeBlock
          language="markdown"
          code={`# POLICY MEMO: AI Chatbots for Language Learning
**To:** K-12 Education Administrators
**From:** Systematic Review of 137 Studies (2010-2024)
**Date:** January 2025

---

## Executive Summary

Based on synthesis of 137 peer-reviewed studies, we recommend cautious adoption of AI chatbots for speaking practice in language classrooms. Key findings:

1. **Effectiveness**: Moderate positive effects on speaking proficiency (d = 0.65), comparable to human tutoring [Smith et al., 2023]
2. **Cost-Efficiency**: 73% reduction in practice costs vs hiring conversation partners [Martinez, 2024]
3. **Implementation Challenges**: 45% of schools report technical barriers and teacher training needs [Johnson, 2021]

---

## Policy Recommendations

### Recommendation 1: Pilot Before Scaling
**Evidence**: Early adopters with pilot programs reported 2.3x higher success rates than district-wide rollouts [Lee & Kim, 2022, p.89]

**Action Items**:
- Start with 2-3 volunteer classrooms
- Run for minimum one semester (12-16 weeks)
- Collect user feedback from teachers AND students
- Measure outcomes vs control classrooms

**Budget**: $5,000-$15,000 for pilot (software + training)

---

### Recommendation 2: Invest in Teacher Professional Development
**Evidence**: 81% of failed implementations cited inadequate teacher training [Park et al., 2023]. Successful schools provided 6+ hours of PD [Chen, 2022].

**Action Items**:
- Minimum 6 hours initial training (hands-on)
- Ongoing support: monthly check-ins for first semester
- Create teacher learning communities for sharing best practices
- Provide technical support hotline

**Budget**: $200-400 per teacher for PD

---

### Recommendation 3: Set Realistic Expectations
**Evidence**: Mixed results for advanced learners [Park, 2023]. Greatest benefits for beginners [Martinez, 2024].

**Action Items**:
- Target beginning/intermediate students first
- Frame as SUPPLEMENT, not replacement for human interaction
- Set measurable goals (e.g., +5 points on speaking test)
- Communicate limitations to parents/stakeholders

**Risk Mitigation**: Avoid overpromising; manage expectations

---

### Recommendation 4: Ensure Equity and Access
**Evidence**: Schools with 1:1 device programs saw 3x higher adoption than BYOD [Johnson & Davis, 2021]

**Action Items**:
- Provide school devices if students lack smartphones
- Ensure internet access (on-campus WiFi, hotspot lending)
- Offer alternative practice options (not mandatory chatbot use)
- Monitor participation rates across demographics

**Equity Check**: Disadvantaged students should have EQUAL access

---

### Recommendation 5: Monitor and Evaluate Continuously
**Evidence**: Successful programs adjusted based on data [Wilson, 2020]. Failures ignored early warning signs [Chen, 2022].

**Action Items**:
- Track usage data (frequency, duration, engagement)
- Survey students monthly (motivation, anxiety, satisfaction)
- Test speaking proficiency pre/mid/post intervention
- Compare with control classes or historical data

**Decision Rule**: If no improvement after 8 weeks, revise or discontinue

---

## Implementation Checklist

### Phase 1: Planning (Month 1-2)
- [ ] Form implementation team (admin, teachers, IT)
- [ ] Review AI chatbot vendors (compare 3-5 options)
- [ ] Conduct needs assessment (survey teachers/students)
- [ ] Develop budget proposal
- [ ] Identify pilot classrooms

### Phase 2: Preparation (Month 3-4)
- [ ] Purchase software licenses
- [ ] Conduct teacher training (6+ hours)
- [ ] Test technology (devices, internet, chatbot)
- [ ] Create parent communication materials
- [ ] Establish data collection protocols

### Phase 3: Implementation (Month 5-8)
- [ ] Launch pilot in 2-3 classrooms
- [ ] Provide weekly teacher support
- [ ] Monitor student engagement data
- [ ] Collect mid-point feedback
- [ ] Adjust implementation as needed

### Phase 4: Evaluation (Month 9-10)
- [ ] Administer post-intervention tests
- [ ] Conduct teacher/student focus groups
- [ ] Analyze quantitative and qualitative data
- [ ] Compare with control classrooms
- [ ] Write evaluation report

### Phase 5: Decision (Month 11-12)
- [ ] Present findings to stakeholders
- [ ] Decide: Scale, Revise, or Discontinue
- [ ] Share lessons learned with other schools
- [ ] Plan next steps (if scaling)

---

## Evidence Base

**High-Quality Studies (RCT, n > 50)**
- Smith et al. (2023): 120-student RCT, d = 0.87, p < .001
- Lee & Kim (2022): 88-student RCT, d = 0.91, p < .001
- Martinez (2024): 150-student cluster-RCT, d = 0.64, p = .002

**Implementation Studies**
- Johnson & Davis (2021): 15 schools, success factors analysis
- Chen (2022): 8 schools, barriers and facilitators
- Wilson (2020): 12 schools, cost-benefit analysis

**Meta-Analyses**
- Park et al. (2023): k = 23 studies, overall ES = 0.72

---

## Frequently Asked Questions

**Q: How much does it cost?**
A: $8-25 per student annually for software, plus $200-400 per teacher for training [Wilson, 2020]

**Q: Will it replace teachers?**
A: No. Evidence shows chatbots are SUPPLEMENTS for practice, not replacements for instruction [Smith, 2023]

**Q: What about data privacy?**
A: Use FERPA-compliant vendors; avoid storing personal conversations; review privacy policies [Chen, 2022]

**Q: How long before we see results?**
A: Minimum 8-12 weeks of regular use (2-3x per week) [Martinez, 2024]

---

## Conclusion

AI chatbots represent a promising but unproven tool for K-12 language learning. A cautious, evidence-based approach—starting with pilots, investing in teacher support, and continuously evaluating—maximizes chances of success while minimizing risks.

**Recommended Next Step**: Form an exploratory committee to review this memo and evaluate feasibility for your district.`}
        />
      </div>

      <h2 id="customization">Customization Options</h2>

      <div className="grid grid-cols-1 gap-4 my-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Different Audiences
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Create a policy brief for [AUDIENCE]:
- Healthcare administrators
- Corporate training managers
- Government policymakers
- Non-profit program directors

Tailor language, priorities, and recommendations to the audience.`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            One-Page Executive Summary
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Create a ONE-PAGE executive summary for busy administrators:
1. Problem statement (1 paragraph)
2. Key finding (1 statistic)
3. Top 3 recommendations (bulleted)
4. Next step (1 sentence)
5. Contact for questions

Maximum 300 words. Use evidence citations.`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Implementation Roadmap Focus
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Create a detailed 12-month implementation roadmap:
- Monthly milestones
- Resource requirements (budget, staff, time)
- Risk mitigation strategies
- Success metrics for each phase
- Decision points (go/no-go criteria)

Based on successful implementation studies in my database.`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Cost-Benefit Analysis
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Create a cost-benefit analysis:
1. Implementation costs (software, training, devices, support)
2. Expected benefits (learning outcomes, cost savings, efficiency)
3. Break-even timeline
4. Return on investment (ROI) estimates
5. Comparison to alternative interventions

Include evidence citations for all cost/benefit estimates.`}
            />
          </div>
        </details>
      </div>

      <h2 id="follow-up">Common Follow-up Questions</h2>

      <div className="bg-gray-50 border rounded-lg p-4 my-6">
        <ul className="text-sm space-y-2">
          <li><strong>Q:</strong> "What are the most common implementation barriers?"</li>
          <li><strong>Q:</strong> "Show me case studies of successful vs failed implementations"</li>
          <li><strong>Q:</strong> "What's the typical timeline from pilot to scale?"</li>
          <li><strong>Q:</strong> "Which stakeholder groups need to be involved?"</li>
          <li><strong>Q:</strong> "Create a FAQ document for parents/teachers"</li>
        </ul>
      </div>

      <h2 id="tips">Pro Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4">
          <h4 className="font-semibold mb-2">🎯 Know Your Audience</h4>
          <p className="text-sm">
            Administrators care about cost, feasibility, and risk. Adjust emphasis based on audience priorities.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
          <h4 className="font-semibold mb-2">📊 Use Concrete Numbers</h4>
          <p className="text-sm">
            Avoid vague claims. Use specific statistics, timelines, and budget figures from your literature.
          </p>
        </div>

        <div className="border-l-4 border-green-500 bg-green-50 p-4">
          <h4 className="font-semibold mb-2">✅ Make It Actionable</h4>
          <p className="text-sm">
            Every recommendation should have clear action items. Checklists &gt; vague suggestions.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 bg-purple-50 p-4">
          <h4 className="font-semibold mb-2">⚠️ Address Risks Honestly</h4>
          <p className="text-sm">
            Don't oversell. Acknowledge limitations and challenges to build credibility with stakeholders.
          </p>
        </div>
      </div>

      <h2 id="related-prompts">Related Prompts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link href="/guide/prompt-library/overview" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🔍</span>
            <h4 className="font-semibold">Context Scanning</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Get high-level overview before creating policy recommendations
          </p>
        </Link>

        <Link href="/guide/prompt-library/contradictions" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">⚡</span>
            <h4 className="font-semibold">Contradiction Detection</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Identify nuances and caveats for honest policy recommendations
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
