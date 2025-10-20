import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function OverviewPromptPage() {
  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/researcherRAG/blob/main/scholarag_cli.py#L991-L996"
      githubLabel="View CLI Source"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">🔍</span>
        <h1 className="mb-0">Context Scanning</h1>
      </div>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Get a high-level overview of your literature corpus. Ideal for initial exploration when you need to understand the structure, themes, and methodological approaches in your database.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📋 When to Use This Prompt</p>
        <ul className="text-sm space-y-1">
          <li>✓ Starting your literature analysis (Stage 6, Session 1)</li>
          <li>✓ Need to understand corpus coverage and scope</li>
          <li>✓ Want to identify main themes before deep diving</li>
          <li>✓ Preparing for targeted follow-up queries</li>
        </ul>
      </div>

      <h2 id="prompt-template">Prompt Template</h2>

      <p>Copy this prompt and paste it into your RAG interface:</p>

      <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 my-6">
        <CodeBlock
          language="text"
          code={`Analyze the papers in my database and provide a structured overview of:
1. Core themes and topics
2. Methodological approaches
3. Key findings and outcomes

Organize the response hierarchically with citations and page ranges for each category.`}
        />
      </div>

      <h2 id="example-output">Expected Output Structure</h2>

      <p>Your RAG system should return something like this:</p>

      <div className="bg-white border rounded-lg p-6 my-6">
        <CodeBlock
          language="markdown"
          code={`## Literature Overview (137 papers, 2010-2024)

### 1. Core Themes and Topics

**Technology Adoption (45 papers, 32.8%)**
- Adoption barriers and facilitators [Smith, 2023; Jones et al., 2022]
- Implementation strategies [Lee & Kim, 2021]
- Organizational readiness [Martinez, 2020]

**User Acceptance and Attitudes (38 papers, 27.7%)**
- TAM/UTAUT applications [Davis et al., 2023]
- User resistance and change management [Park, 2022]

**Implementation Outcomes (32 papers, 23.4%)**
- Success metrics and KPIs [Wilson, 2024]
- Long-term sustainability [Chen & Liu, 2021]

### 2. Methodological Approaches

**Quantitative (67 papers, 48.9%)**
- Surveys with structural equation modeling (35 papers)
- Experimental studies (RCT) (18 papers)
- Longitudinal tracking (14 papers)

**Qualitative (45 papers, 32.8%)**
- Case studies (25 papers)
- Interviews and focus groups (20 papers)

**Mixed Methods (25 papers, 18.3%)**
- Convergent design (15 papers)
- Explanatory sequential (10 papers)

### 3. Key Findings and Outcomes

**Positive Outcomes**
- 73% of studies report improved efficiency [Smith, 2023, p.45]
- Cost reduction in 62% of cases [Johnson, 2022, p.112]

**Negative Outcomes or Challenges**
- Initial resistance in 81% of implementations [Lee, 2021, p.67]
- Training costs underestimated in 45% [Martinez, 2020, p.89]

**Conflicting Results**
- User satisfaction: Mixed results (positive: 55%, negative: 25%, neutral: 20%)
- Long-term adoption: Varies by sector [Chen, 2021]`}
        />
      </div>

      <h2 id="customization">Customization Options</h2>

      <p>Modify the prompt to focus on specific aspects:</p>

      <div className="grid grid-cols-1 gap-4 my-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Focus on Specific Time Period
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Analyze the papers published AFTER 2020 in my database and provide...
(rest of prompt remains the same)`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Compare Two Time Periods
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Compare papers published BEFORE 2020 vs AFTER 2020:
1. How have core themes evolved?
2. Have methodological approaches shifted?
3. What new findings emerged in recent years?

Organize side-by-side with citations.`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Focus on Methodology Only
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Analyze the methodological approaches in my database:
1. Quantitative vs Qualitative vs Mixed Methods (distribution)
2. Specific research designs used (RCT, case study, survey, etc.)
3. Sample sizes and populations
4. Data analysis techniques

For each category, provide counts and example citations.`}
            />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Geographic or Contextual Focus
          </summary>
          <div className="p-4 pt-0 border-t">
            <CodeBlock
              language="text"
              code={`Analyze the papers by geographic region or context:
1. Core themes by region (Asia, Europe, North America, etc.)
2. Methodological preferences by region
3. Key findings specific to each region

Highlight regional differences and similarities.`}
            />
          </div>
        </details>
      </div>

      <h2 id="follow-up-questions">Common Follow-up Questions</h2>

      <p>After getting your overview, dig deeper with these follow-up prompts:</p>

      <div className="bg-gray-50 border rounded-lg p-4 my-6">
        <ul className="text-sm space-y-2">
          <li><strong>Q:</strong> "Which papers are most cited in my database?"</li>
          <li><strong>Q:</strong> "Show me 5 representative papers for each theme"</li>
          <li><strong>Q:</strong> "What are the most common limitations mentioned?"</li>
          <li><strong>Q:</strong> "Which authors have published multiple papers in my corpus?"</li>
          <li><strong>Q:</strong> "What gaps or future research directions are suggested?"</li>
        </ul>
      </div>

      <h2 id="tips">Pro Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">💡 Start Broad</h4>
          <p className="text-sm">
            Use this prompt as your first query in any research session. It gives you a mental map of your corpus before diving into specific questions.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">📊 Export & Save</h4>
          <p className="text-sm">
            Save the overview output to a markdown file. Use it as a reference document throughout your analysis to avoid repeating this query.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">🔍 Verify Counts</h4>
          <p className="text-sm">
            The AI may not have perfect counts. Spot-check by asking "How many papers mention [specific term]?" to validate the overview.
          </p>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <h4 className="font-semibold mb-2">🎯 Use for Reporting</h4>
          <p className="text-sm">
            This overview format is perfect for the "Corpus Description" section of your systematic review manuscript.
          </p>
        </div>
      </div>

      <h2 id="related-prompts">Related Prompts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link href="/guide/prompt-library/methods" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🔬</span>
            <h4 className="font-semibold">Methodology Comparison</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Deep dive into methodological approaches after getting your overview
          </p>
        </Link>

        <Link href="/guide/prompt-library/hypothesis" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧪</span>
            <h4 className="font-semibold">Hypothesis Validation</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Test specific hypotheses based on themes identified in your overview
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
