import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Mermaid from '@/components/Mermaid'

export default function IntroductionPage() {
  return (
    <GuideLayout>
      <h1 id="introduction">Introduction to ResearcherRAG</h1>

      <p className="text-xl text-muted mt-6 mb-8">
        Learn how ResearcherRAG transforms the traditional literature review process from weeks of manual work into hours of AI-powered efficiency.
      </p>

      <h2 id="what-is-researcherrag">What is ResearcherRAG?</h2>

      <p>
        ResearcherRAG is an <strong>open-source, conversational AI-guided system</strong> that helps researchers build custom <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener noreferrer">RAG (Retrieval-Augmented Generation)</a> systems for academic literature review. Built on top of <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> and <a href="https://claude.ai/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a>, it guides you through every step of creating a systematic review pipeline.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 Key Insight</p>
        <p className="mb-0">
          Unlike generic chatbots, ResearcherRAG creates a <em>dedicated knowledge base</em> from your specific research domain, ensuring every answer is grounded in the papers you've screened and approved.
        </p>
      </div>

      <h2 id="the-problem">The Problem It Solves</h2>

      <h3 id="traditional-workflow">Traditional Literature Review (6-8 weeks)</h3>

      <p>
        If you've ever conducted a systematic review, you know the pain:
      </p>

      <ol>
        <li><strong>Database Search</strong>: Spend days crafting queries for <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">PubMed</a>, <a href="https://eric.ed.gov/" target="_blank" rel="noopener noreferrer">ERIC</a>, <a href="https://www.webofscience.com/" target="_blank" rel="noopener noreferrer">Web of Science</a></li>
        <li><strong>Export & Screen</strong>: Download 500+ papers, export to Excel, read abstracts one by one</li>
        <li><strong>Full-Text Review</strong>: Manually review 200+ PDFs for inclusion criteria</li>
        <li><strong>Data Extraction</strong>: Copy-paste findings, methods, and statistics into spreadsheets</li>
        <li><strong>Citation Hell</strong>: Constantly re-read papers to verify citations and quotes</li>
      </ol>

      <p>
        The result? <strong>67-75% of your time</strong> spent on mechanical tasks instead of analysis.
      </p>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Common Pain Point</p>
        <p className="mb-0">
          "I've read this paper three times, but I still can't remember which one had the meta-analysis on sample size calculations." — Every PhD student, ever.
        </p>
      </div>

      <h3 id="with-researcherrag">With ResearcherRAG (2-3 weeks)</h3>

      <ol>
        <li><strong>3-hour Setup</strong>: Build your RAG system with step-by-step Claude Code guidance</li>
        <li><strong>2-hour Screening</strong>: <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer">PRISMA</a> pipeline screens thousands of papers automatically</li>
        <li><strong>Instant Queries</strong>: Ask questions and get answers with specific paper citations</li>
        <li><strong>Never Forget</strong>: Your RAG system remembers every relevant detail across all papers</li>
      </ol>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">✅ Real Results</p>
        <p className="mb-0">
          PhD students using ResearcherRAG complete literature reviews in <strong>2-3 weeks instead of 6-8 weeks</strong>, spending more time on analysis and writing.
        </p>
      </div>

      <h2 id="what-youll-build">What You'll Build</h2>

      <p>
        In approximately <strong>3 hours</strong> of active work (plus 3-4 hours of automated processing), you'll create:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
          <div className="text-2xl mb-2">🔍</div>
          <h4 className="font-semibold mb-2">PRISMA Pipeline</h4>
          <p className="text-sm text-muted mb-0">Screen 500+ papers down to 50-150 highly relevant ones using systematic criteria</p>
        </div>
        <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
          <div className="text-2xl mb-2">🗄️</div>
          <h4 className="font-semibold mb-2">Vector Database</h4>
          <p className="text-sm text-muted mb-0">Semantic search across your papers using <a href="https://www.trychroma.com/" target="_blank" rel="noopener noreferrer">ChromaDB</a> or <a href="https://github.com/facebookresearch/faiss" target="_blank" rel="noopener noreferrer">FAISS</a></p>
        </div>
        <div className="border border-border rounded-lg p-6 hover:border-border-strong transition-colors">
          <div className="text-2xl mb-2">🤖</div>
          <h4 className="font-semibold mb-2">Research RAG</h4>
          <p className="text-sm text-muted mb-0">Query system powered by <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer">Claude 3.5 Sonnet</a> with paper-specific citations</p>
        </div>
      </div>

      <h2 id="core-concepts">Core Concepts</h2>

      <h3 id="prisma">1. PRISMA Screening</h3>

      <p>
        <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer">PRISMA</a> (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is the gold standard for systematic reviews. ResearcherRAG implements:
      </p>

      <ul>
        <li><strong>Identification</strong>: Search multiple databases with Boolean queries</li>
        <li><strong>Screening</strong>: AI-powered abstract review against inclusion criteria</li>
        <li><strong>Eligibility</strong>: Full-text assessment with customizable rules</li>
        <li><strong>Inclusion</strong>: Final set of papers for your RAG knowledge base</li>
      </ul>

      <Mermaid chart={`
graph TD
    A[Records Identified<br/>n = 1,247] --> B[Records Screened<br/>n = 1,247]
    B --> C[Excluded<br/>n = 983<br/>Not Relevant]
    B --> D[Full-text Assessed<br/>n = 264]
    D --> E[Excluded<br/>n = 127<br/>Wrong Methodology]
    D --> F[Studies Included<br/>n = 137]
    F --> G[RAG Knowledge Base]

    style A fill:#e0e7ff
    style F fill:#dcfce7
    style G fill:#fef3c7
      `} />

      <h3 id="rag">2. RAG (Retrieval-Augmented Generation)</h3>

      <p>
        RAG combines two powerful capabilities:
      </p>

      <ol>
        <li><strong>Retrieval</strong>: Semantic search finds the most relevant papers and sections</li>
        <li><strong>Generation</strong>: LLM synthesizes answers grounded in retrieved content</li>
      </ol>

      <p>
        This architecture prevents hallucinations by ensuring every statement is backed by actual research. Learn more about RAG in our <Link href="/guide/04-implementation">Implementation Guide</Link>.
      </p>

      <h3 id="workflow">3. 5-Stage Workflow</h3>

      <p>
        ResearcherRAG breaks down the complex process into 5 conversational stages with Claude Code:
      </p>

      <Mermaid chart={`
graph LR
    A[Stage 1<br/>Research Domain<br/>15 min] --> B[Stage 2<br/>Query Strategy<br/>10 min]
    B --> C[Stage 3<br/>PRISMA Config<br/>20 min + 2 hrs]
    C --> D[Stage 4<br/>RAG Design<br/>15 min]
    D --> E[Stage 5<br/>Execution<br/>3-4 hrs]
    E --> F[Your RAG System]

    style A fill:#e0e7ff
    style B fill:#ddd6fe
    style C fill:#fce7f3
    style D fill:#fef3c7
    style E fill:#dcfce7
    style F fill:#bbf7d0
      `} />

      <div className="space-y-4 my-8">
        {[
          { stage: 1, title: 'Research Domain Setup', time: '15 min', desc: 'Define your research question, scope, and objectives' },
          { stage: 2, title: 'Query Strategy Design', time: '10 min', desc: 'Craft Boolean search queries for multiple databases' },
          { stage: 3, title: 'PRISMA Configuration', time: '20 min + 2 hrs automated', desc: 'Set inclusion criteria and screen papers' },
          { stage: 4, title: 'RAG System Design', time: '15 min', desc: 'Configure vector database and embedding model' },
          { stage: 5, title: 'Execution & Validation', time: '3-4 hrs automated', desc: 'Download PDFs, build RAG, validate results' },
        ].map((stage) => (
          <div key={stage.stage} className="flex gap-4 items-start border-l-2 border-border pl-4">
            <div className="text-xl font-bold text-muted-foreground w-8 flex-shrink-0">{stage.stage}</div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">{stage.title}</h4>
              <p className="text-sm text-muted mb-1">{stage.desc}</p>
              <p className="text-xs text-muted-foreground font-mono">{stage.time}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="who-should-use">Who Should Use ResearcherRAG?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div>
          <h4 className="font-semibold mb-2">🎓 PhD Students</h4>
          <p className="text-sm text-muted mb-0">
            Dissertation literature reviews, qualifying exams, and proposal development
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">🔬 Researchers</h4>
          <p className="text-sm text-muted mb-0">
            Meta-analysis preparation, grant writing, and systematic reviews
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">👨‍🏫 Professors</h4>
          <p className="text-sm text-muted mb-0">
            Course material updates, research synthesis, and mentoring students
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">📚 Librarians</h4>
          <p className="text-sm text-muted mb-0">
            Systematic review consulting and research data management
          </p>
        </div>
      </div>

      <h2 id="prerequisites">Prerequisites</h2>

      <p>Before starting, ensure you have:</p>

      <ul>
        <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> with <a href="https://claude.ai/claude-code" target="_blank" rel="noopener noreferrer">Claude Code extension</a> installed</li>
        <li><a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python 3.9+</a> on your system</li>
        <li><a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic API key</a> (free tier available)</li>
        <li>3 hours for initial setup + 3-4 hours for automated processing</li>
        <li>Basic familiarity with your research domain</li>
      </ul>

      <div className="callout">
        <p className="font-semibold mb-2">📝 Note on API Costs</p>
        <p className="mb-0">
          A typical literature review (500 papers screened, 150 included) costs approximately <strong>$5-15 in API fees</strong> using Claude 3.5 Sonnet. Compare this to weeks of manual labor!
        </p>
      </div>

      <h2 id="next-steps">Next Steps</h2>

      <p>
        Ready to start building? Head to <Link href="/guide/02-getting-started">Chapter 2: Getting Started</Link> to set up your environment and run your first ResearcherRAG workflow.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-8">
        <p className="text-sm text-gray-400 mb-2">Quick start preview:</p>
        <pre className="mb-0"><code>{`# Clone the repository
git clone https://github.com/HosungYou/ResearcherRAG.git
cd ResearcherRAG

# Install dependencies
pip install -r requirements.txt

# Open in VS Code with Claude Code
code .`}</code></pre>
      </div>

      <p className="text-sm text-muted mt-8">
        <strong>Further Reading</strong>: <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer">PRISMA Guidelines</a> · <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener noreferrer">Contextual Retrieval (Anthropic)</a> · <Link href="/resources">Templates & Examples</Link>
      </p>
    </GuideLayout>
  )
}
