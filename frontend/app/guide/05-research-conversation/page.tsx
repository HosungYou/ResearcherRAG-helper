import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Mermaid from '@/components/Mermaid'
import { CodeBlock } from '@/components/CodeBlock'

export default function ResearchConversationPage() {
  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/researcherRAG/blob/main/prompts/06_research_conversation.md"
      githubLabel="View Stage 6 Prompt"
    >
      <h1>Research Conversation & Analysis</h1>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Now that your RAG system is built, learn how to conduct systematic literature analysis through effective conversational AI interactions. This chapter covers query strategies, iterative research workflows, citation management, and best practices for extracting insights from your knowledge base.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📋 Prerequisites</p>
        <ul className="text-sm space-y-1">
          <li>✓ Completed Stages 1-5 (Vector DB built and validated)</li>
          <li>✓ One of the chat interfaces installed (Claude Code, Streamlit, or FastAPI)</li>
          <li>✓ Familiarity with your research domain and questions</li>
        </ul>
      </div>

      <h2 id="rag-vs-general">⚠️ IMPORTANT: RAG vs General Knowledge</h2>

      <p>
        Before starting your research conversations, it's critical to understand the difference between asking Claude directly versus using your RAG system interface.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border-2 border-gray-300 rounded-lg p-6 bg-white">
          <h3 className="text-lg font-semibold mb-3">❌ WITHOUT Interface</h3>
          <p className="text-sm mb-3 text-muted-foreground">Direct Claude Code chat uses general knowledge:</p>
          <div className="bg-black text-white rounded p-3 text-xs font-mono">
            <p className="mb-2"><span className="text-gray-400">You:</span> "Which methodologies are most commonly used?"</p>
            <p className="mb-2"><span className="text-gray-400">Claude:</span> "Based on my training data, common methodologies include surveys, experiments..."</p>
            <p className="mt-2 font-bold">← NOT from your database!</p>
          </div>
        </div>

        <div className="border-2 border-gray-900 rounded-lg p-6 bg-gray-50">
          <h3 className="text-lg font-semibold mb-3">✅ WITH ScholaRAG Interface</h3>
          <p className="text-sm mb-3 text-muted-foreground">Interface searches YOUR Vector Database:</p>
          <div className="bg-black text-white rounded p-3 text-xs font-mono">
            <p className="mb-1"><span className="text-gray-400">System:</span> Loaded 150 papers from Vector DB</p>
            <p className="mb-1"><span className="text-gray-400">You:</span> "Which methodologies are most commonly used?"</p>
            <p className="mb-1"><span className="text-gray-400">System:</span> 📚 Found 5 relevant papers:</p>
            <ul className="ml-4 mb-1 list-disc text-gray-300">
              <li>Smith et al. (2023)</li>
              <li>Jones & Lee (2022)</li>
            </ul>
            <p><span className="text-gray-400">Claude:</span> "Based on 5 papers in YOUR database: Qualitative methods: 3 papers [Smith, 2023]..."</p>
          </div>
        </div>
      </div>

      <h3 id="key-differences">Key Differences</h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2">
              <th className="text-left p-3">Aspect</th>
              <th className="text-left p-3">Direct Claude Chat</th>
              <th className="text-left p-3">ScholaRAG Interface</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-semibold">Data Source</td>
              <td className="p-3 text-muted-foreground">General knowledge (training data)</td>
              <td className="p-3"><strong>YOUR Vector Database</strong></td>
            </tr>
            <tr className="border-b bg-muted/30">
              <td className="p-3 font-semibold">Transparency</td>
              <td className="p-3 text-muted-foreground">No visibility into sources</td>
              <td className="p-3"><strong>Shows which papers retrieved</strong></td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Citations</td>
              <td className="p-3 text-muted-foreground">No paper citations</td>
              <td className="p-3"><strong>Every claim linked to papers</strong></td>
            </tr>
            <tr className="border-b bg-muted/30">
              <td className="p-3 font-semibold">Verification</td>
              <td className="p-3 text-muted-foreground">Cannot verify sources</td>
              <td className="p-3"><strong>Trace back to originals</strong></td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Limitations</td>
              <td className="p-3 text-muted-foreground">Doesn't know what it doesn't have</td>
              <td className="p-3"><strong>Says "not in your database"</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">🔐 How to Run the RAG Interface</p>
        <div className="space-y-3">
          <p className="text-sm"><strong>Step 1: Open your terminal</strong> and navigate to your project:</p>
          <pre className="bg-white p-2 rounded text-xs"><code>cd /path/to/your/researcherRAG-project</code></pre>

          <p className="text-sm"><strong>Step 2: Run the interface script:</strong></p>
          <pre className="bg-white p-2 rounded text-xs"><code>python interfaces/claude_code_interface.py</code></pre>

          <p className="text-sm"><strong>Step 3: You'll see this prompt:</strong></p>
          <CodeBlock
        language="sql"
        code={`📂 Loading Vector DB from ./chroma_db...
✅ Loaded 137 papers from collection 'papers'
✅ Connected to Claude API

Type your questions (or 'exit' to quit)

You: `}
      />

          <p className="text-sm"><strong>Step 4: Ask questions!</strong></p>
          <CodeBlock
        language="sql"
        code={`You: What are the main adoption barriers?
You: Show me papers from 2023
You: exit  # when done`}
      />

          <p className="text-sm mt-3"><strong>✓ How to verify it's using YOUR papers:</strong></p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• System shows "📚 Found X relevant papers"</li>
            <li>• Answers include [Author, Year] citations</li>
            <li>• Can query specific papers you know are in your DB</li>
          </ul>
        </div>
      </div>

      <h2 id="query-strategies">Effective Query Strategies</h2>

      <div className="callout callout-success mb-6">
        <p className="font-semibold mb-2">💡 New: Ready-to-Use Prompt Library</p>
        <p className="text-sm mb-2">
          We've created 7 specialized prompt templates for common research scenarios. Copy, customize, and use them directly in your RAG interface.
        </p>
        <Link href="/guide/prompt-library" className="text-sm font-medium text-blue-600 hover:underline">
          → Browse Prompt Library
        </Link>
      </div>

      <p>
        Different types of queries serve different research purposes. Use this framework to formulate effective questions for your literature analysis:
      </p>

      <Mermaid chart={`
graph TD
    A[Research Goal] --> B{Query Type?}
    B -->|Broad Understanding| C[Exploratory Queries]
    B -->|Specific Facts| D[Information Queries]
    B -->|Find Relationships| E[Comparative Queries]
    B -->|Identify Gaps| F[Gap-Finding Queries]

    C --> G[Themes, Methods,<br/>Authors, Trends]
    D --> H[Factors, Rates,<br/>Frameworks, Limitations]
    E --> I[Compare Across<br/>Dimensions]
    F --> J[Under-researched<br/>Areas]

    style A fill:#f5f5f5
    style C fill:#e5e5e5
    style D fill:#d4d4d4
    style E fill:#e5e5e5
    style F fill:#f5f5f5
      `} />

      <div className="grid grid-cols-1 gap-4 my-8">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            1. Exploratory Queries - Understand the Landscape
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm">Start broad to get an overview of your corpus:</p>
            <CodeBlock
        language="text"
        code={`"What are the main research themes in my corpus?"
"Which methodologies are most commonly used?"
"Who are the key authors and their contributions?"
"What time periods are covered?"
"Show me the most cited papers"`}
      />
            <p className="text-sm mt-3"><strong>When to use:</strong> Beginning of analysis, understanding domain coverage</p>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            2. Specific Information Queries - Deep Dive
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm">Ask focused questions about specific topics:</p>
            <CodeBlock
        language="text"
        code={`"What factors influence technology adoption in healthcare?"
"What are the reported adoption rates in developing countries?"
"Which theoretical frameworks are most cited?"
"What limitations are mentioned in recent studies?"
"How is 'organizational readiness' defined?"}`}
      />
            <p className="text-sm mt-3"><strong>When to use:</strong> Targeted investigation, extracting specific data points</p>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            3. Comparative Queries - Find Patterns
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm">Compare across different dimensions:</p>
            <CodeBlock
        language="sql"
        code={`"How do adoption rates differ between developed and developing countries?"
"Compare quantitative vs qualitative studies on this topic"
"What changed in the literature before and after 2020?"
"How do TAM and UTAUT frameworks compare?"
"Compare findings from healthcare vs education sectors"`}
      />
            <p className="text-sm mt-3"><strong>When to use:</strong> Identifying trends, contrasting approaches, temporal analysis</p>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            4. Gap-Finding Queries - Identify Future Research
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm">Discover under-researched areas:</p>
            <CodeBlock
        language="text"
        code={`"What populations or contexts are under-represented?"
"Which methods have NOT been used to study this?"
"What gaps or limitations do authors identify?"
"Are there contradictory findings that need resolution?"
"What future research directions are suggested?"`}
      />
            <p className="text-sm mt-3"><strong>When to use:</strong> Writing discussion/future work sections, identifying research opportunities</p>
          </div>
        </details>
      </div>

      <h2 id="iterative-process">Iterative Research Process</h2>

      <p>
        Effective literature analysis is iterative, not linear. Use this session-based approach to systematically explore your knowledge base:
      </p>

      <Mermaid chart={`
graph LR
    A[Session 1<br/>Initial Exploration<br/>30-60 min] --> B[Session 2<br/>Deep Dive by Theme<br/>1-2 hrs]
    B --> C[Session 3<br/>Cross-Paper Synthesis<br/>1-2 hrs]
    C --> D[Session 4<br/>Gap Analysis<br/>1 hr]
    D --> E[Research Insights<br/>Ready for Writing]

    style A fill:#f5f5f5
    style B fill:#e5e5e5
    style C fill:#d4d4d4
    style D fill:#e5e5e5
    style E fill:#f5f5f5
      `} />

      <h3 id="session-1">Session 1: Initial Exploration (30-60 min)</h3>

      <p className="text-sm mb-3"><strong>Goal:</strong> Get familiar with your knowledge base, understand scope and coverage</p>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-4">
        <p className="font-semibold mb-2">Example Session Flow:</p>
        <div className="space-y-2 text-sm">
          <p><strong>Q1:</strong> "How many papers are in my knowledge base?"</p>
          <p><strong>Q2:</strong> "What are the 5 most common research topics?"</p>
          <p><strong>Q3:</strong> "Show me the most cited papers"</p>
          <p><strong>Q4:</strong> "What time range do these papers cover?"</p>
          <p><strong>Q5:</strong> "Which methodologies appear most frequently?"</p>
        </div>
      </div>

      <h3 id="session-2">Session 2: Deep Dive by Theme (1-2 hrs)</h3>

      <p className="text-sm mb-3"><strong>Goal:</strong> Investigate specific themes or topics in depth</p>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-4">
        <p className="font-semibold mb-2">Example: Deep Dive on "Adoption Barriers"</p>
        <div className="space-y-2 text-sm">
          <p><strong>Q1:</strong> "What barriers to technology adoption are mentioned?"</p>
          <p><strong>Q2:</strong> "For each barrier, which papers discuss it?"</p>
          <p><strong>Q3:</strong> "How frequently is cost mentioned as a barrier?"</p>
          <p><strong>Q4:</strong> "Do barriers differ by geographic region?"</p>
          <p><strong>Q5:</strong> "What solutions or mitigation strategies are proposed?"</p>
        </div>
      </div>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 Pro Tip: Follow-up Questions</p>
        <p className="text-sm mb-0">
          Don't stop at the first answer. Ask follow-ups like "Which paper provides the most detail on this?" or "Are there contradictory findings?" to dig deeper.
        </p>
      </div>

      <h3 id="session-3">Session 3: Cross-Paper Synthesis (1-2 hrs)</h3>

      <p className="text-sm mb-3"><strong>Goal:</strong> Synthesize findings across multiple papers, identify patterns</p>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-4">
        <p className="font-semibold mb-2">Example: Synthesizing Adoption Factors</p>
        <div className="space-y-2 text-sm">
          <p><strong>Q1:</strong> "Create a table of all adoption factors mentioned, with paper citations"</p>
          <p><strong>Q2:</strong> "Which factors are mentioned in 3+ papers?"</p>
          <p><strong>Q3:</strong> "Compare how developed vs developing countries differ"</p>
          <p><strong>Q4:</strong> "Organize findings by theoretical framework (TAM, UTAUT, etc.)"</p>
          <p><strong>Q5:</strong> "Summarize consensus vs contradictions in the literature"</p>
        </div>
      </div>

      <h3 id="session-4">Session 4: Gap Analysis (1 hr)</h3>

      <p className="text-sm mb-3"><strong>Goal:</strong> Identify gaps, limitations, and future research directions</p>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-4">
        <p className="font-semibold mb-2">Example: Finding Research Gaps</p>
        <div className="space-y-2 text-sm">
          <p><strong>Q1:</strong> "What limitations do authors mention in their studies?"</p>
          <p><strong>Q2:</strong> "Which populations or contexts are under-studied?"</p>
          <p><strong>Q3:</strong> "What methodological approaches are missing?"</p>
          <p><strong>Q4:</strong> "What future research directions are suggested?"</p>
          <p><strong>Q5:</strong> "Where are the contradictions that need resolution?"</p>
        </div>
      </div>

      <h2 id="citation-management">Citation Management & Verification</h2>

      <p>
        Maintaining accurate citations is critical for academic integrity. Your RAG system should provide citations for every claim, but you must verify them.
      </p>

      <h3 id="citation-workflow">Citation Validation Workflow</h3>

      <Mermaid chart={`
sequenceDiagram
    participant Y as You
    participant R as RAG System
    participant V as Validation

    Y->>R: Ask question
    R->>R: Retrieve relevant papers
    R->>R: Generate answer with citations
    R-->>Y: Answer + [Author, Year] citations

    Y->>V: Verify citations
    V->>V: Check paper exists in DB
    V->>V: Verify claim matches source
    V->>V: Confirm DOI/URL valid
    V-->>Y: ✓ Valid or ⚠ Warning

    Y->>Y: Record in notes with validation status
      `} />

      <div className="border rounded-lg my-6">
        <div className="border-b p-4 bg-muted/30">
          <h4 className="font-semibold">Citation Quality Checklist</h4>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="font-bold">✓</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">Every Claim Has a Citation</p>
              <p className="text-xs text-muted-foreground">No unsourced statements in your notes</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold">✓</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">Citations Use Correct Format</p>
              <p className="text-xs text-muted-foreground">[Author, Year] or [Author et al., Year] for 3+ authors</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold">✓</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">Paper Actually in Your Database</p>
              <p className="text-xs text-muted-foreground">No hallucinated citations</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold">✓</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">Claim Matches Source Material</p>
              <p className="text-xs text-muted-foreground">Spot-check by reading original paper section</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold">✓</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">DOI or URL Accessible</p>
              <p className="text-xs text-muted-foreground">Test links to ensure readers can access papers</p>
            </div>
          </div>
        </div>
      </div>

      <h2 id="session-management">Managing Research Sessions</h2>

      <p>
        Keep your research organized by documenting sessions, tracking questions, and exporting findings.
      </p>

      <h3 id="documentation-template">Session Documentation Template</h3>

      <CodeBlock
        language="yaml"
        code={`# Research Session Log

## Session 1: Initial Exploration
**Date:** 2024-01-15
**Duration:** 45 minutes
**Goal:** Understand corpus coverage and identify main themes

### Questions Asked:
1. Q: "How many papers in my database?"
   A: 137 papers (2010-2024)

2. Q: "What are the top 5 research themes?"
   A: 1) Technology adoption (45 papers)
      2) Implementation barriers (38 papers)
      3) User acceptance (32 papers)
      ...

### Key Findings:
- Adoption barriers most discussed topic
- Limited research on developing countries (only 18 papers)
- Qualitative methods dominate (67 papers vs 45 quantitative)

### Follow-up Questions for Next Session:
- Deep dive on adoption barriers
- Compare developed vs developing country findings
- Investigate methodological gaps

### Papers to Read in Full:
- [Smith, 2023] - Comprehensive systematic review
- [Johnson, 2022] - Novel framework for barriers
`}
      />

      <h3 id="export-tools">Export & Organization Tools</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📊 Export Conversation Logs</h4>
          <CodeBlock
        language="bash"
        code={`# Save conversation history
python interfaces/export_logs.py \\
  --session session1 \\
  --output research_notes.md`}
      />
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📑 Generate Citation List</h4>
          <CodeBlock
        language="bash"
        code={`# Extract all cited papers
python interfaces/export_citations.py \\
  --format bibtex \\
  --output references.bib`}
      />
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📈 Create Summary Statistics</h4>
          <CodeBlock
        language="bash"
        code={`# Generate corpus statistics
python interfaces/generate_stats.py \\
  --output corpus_stats.html`}
      />
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">🔍 Find Specific Citations</h4>
          <CodeBlock
        language="bash"
        code={`# Query specific papers
python interfaces/claude_code_interface.py \\
  --query "Show papers by Smith"`}
      />
        </div>
      </div>

      <h2 id="best-practices-summary">Research Conversation Best Practices</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="border-l-4 border-gray-900 bg-white p-4 border rounded-lg">
          <h4 className="font-semibold mb-2 text-gray-900">✅ Do This</h4>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>✓ Always use the interface scripts, not direct chat</li>
            <li>✓ Start broad, then narrow down</li>
            <li>✓ Ask follow-up questions to dig deeper</li>
            <li>✓ Document sessions as you go</li>
            <li>✓ Verify citations by spot-checking sources</li>
            <li>✓ Export findings regularly</li>
            <li>✓ Organize by research themes</li>
          </ul>
        </div>

        <div className="border-l-4 border-gray-900 bg-white p-4 border rounded-lg">
          <h4 className="font-semibold mb-2 text-gray-900">❌ Avoid This</h4>
          <ul className="text-sm space-y-1">
            <li>✗ Using direct Claude chat (gets general knowledge)</li>
            <li>✗ Accepting answers without verifying citations</li>
            <li>✗ Asking only one question per topic</li>
            <li>✗ Forgetting to document your sessions</li>
            <li>✗ Not following up on interesting findings</li>
            <li>✗ Ignoring contradictory results</li>
            <li>✗ Skipping spot-checks of source material</li>
          </ul>
        </div>
      </div>

      <h2 id="next-chapter">Next: Documentation & Writing</h2>

      <p>
        Once you've completed your research conversations and gathered insights, you're ready to write up your findings. Continue to the next chapter to learn how to structure your literature review, generate PRISMA diagrams, and create publication-ready documentation.
      </p>

      <div className="my-6">
        <Link href="/guide/07-troubleshooting" className="border rounded-lg p-6 block hover:bg-muted/30 transition-colors">
          <h3 className="font-semibold mb-2">📝 Chapter 7: Documentation & Writing</h3>
          <p className="text-sm text-muted-foreground">
            Learn how to structure your systematic review, generate PRISMA diagrams, manage bibliographies, and prepare publication-ready materials using RAG assistance.
          </p>
        </Link>
      </div>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">🎯 Ready to Start Researching?</p>
        <p className="mb-0">
          Fire up your interface script (<code>python interfaces/claude_code_interface.py</code>) and start with exploratory queries. Remember: transparency and verification are key to trustworthy research.
        </p>
      </div>
    </GuideLayout>
  )
}
