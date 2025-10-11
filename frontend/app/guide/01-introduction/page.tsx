import GuideLayout from '@/components/GuideLayout'

export default function IntroductionPage() {
  return (
    <GuideLayout>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 id="introduction">Chapter 1: Introduction to ResearcherRAG</h1>

        <h2 id="what-is-researcherrag">What is ResearcherRAG?</h2>
        <p>
          ResearcherRAG is a <strong>conversational AI-guided system</strong> that helps researchers build
          custom RAG (Retrieval-Augmented Generation) systems for their literature review using Claude Code in VS Code.
        </p>

        <h2 id="problem">The Problem It Solves</h2>
        <h3 id="traditional">Traditional Literature Review (6-8 weeks)</h3>
        <ol>
          <li>Manual database searches (PubMed, ERIC, Web of Science)</li>
          <li>Export to Excel, read 500+ abstracts one by one</li>
          <li>Full-text review of 200+ papers</li>
          <li>Extract findings manually</li>
          <li>Constantly re-read papers for citations</li>
        </ol>

        <h3 id="with-researcherrag">With ResearcherRAG (2-3 weeks)</h3>
        <ol>
          <li><strong>3-hour workshop</strong>: Build RAG system with Claude Code guidance</li>
          <li><strong>2 hours</strong>: PRISMA screens thousands of papers automatically</li>
          <li><strong>Ongoing</strong>: Query RAG for instant answers with citations</li>
          <li><strong>Result</strong>: 67-75% time savings, never forget a relevant paper</li>
        </ol>

        <h2 id="what-youll-build">What You'll Build</h2>
        <p>In 3 hours, you'll create:</p>
        <ul>
          <li>✅ <strong>PRISMA Systematic Review Pipeline</strong>: Screen 500+ papers down to 50-150 highly relevant ones</li>
          <li>✅ <strong>Custom Vector Database</strong>: Semantic search across your included papers</li>
          <li>✅ <strong>Research-Focused RAG</strong>: Query system that cites specific papers with methods and findings</li>
        </ul>

        <h2 id="core-concepts">Core Concepts</h2>

        <h3 id="prisma-screening">1. PRISMA Screening</h3>
        <p>
          PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is a methodology for
          systematically filtering academic papers based on relevance criteria.
        </p>

        <h3 id="rag">2. RAG (Retrieval-Augmented Generation)</h3>
        <p>
          RAG combines vector search (finding relevant papers) with LLM generation (answering questions).
          This ensures your AI responses are grounded in actual research, not hallucinations.
        </p>

        <h3 id="workflow">3. 5-Stage Workflow</h3>
        <p>ResearcherRAG breaks down the complex process into 5 manageable stages:</p>
        <ol>
          <li><strong>Research Domain Setup</strong> (15 min): Define your research scope</li>
          <li><strong>Query Strategy</strong> (10 min): Design search queries</li>
          <li><strong>PRISMA Configuration</strong> (20 min + 2 hours automated): Screen papers</li>
          <li><strong>RAG Design</strong> (15 min): Configure vector database</li>
          <li><strong>Execution</strong> (3-4 hours automated): Download PDFs, build RAG</li>
        </ol>

        <h2 id="who-should-use">Who Should Use ResearcherRAG?</h2>
        <ul>
          <li><strong>PhD Students</strong>: Dissertation literature reviews</li>
          <li><strong>Researchers</strong>: Meta-analysis preparation</li>
          <li><strong>Professors</strong>: Grant proposal background sections</li>
          <li><strong>Research Librarians</strong>: Systematic review assistance</li>
        </ul>

        <h2 id="prerequisites">Prerequisites</h2>
        <ul>
          <li>VS Code with Claude Code extension</li>
          <li>Python 3.9+</li>
          <li>3 hours for initial setup</li>
          <li>Basic understanding of your research domain</li>
        </ul>

        <h2 id="next-steps">Next Steps</h2>
        <p>
          Ready to dive deeper? Proceed to Chapter 2: 5-Stage Workflow to understand each stage in detail.
        </p>
      </div>
    </GuideLayout>
  )
}
