import Link from 'next/link'
import { BookOpen, ArrowLeft, ArrowRight } from 'lucide-react'

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary-600" />
            <span className="font-bold">ResearcherRAG Helper</span>
          </Link>
          <Link href="/guide" className="text-sm text-primary-600 hover:underline">
            Back to Guide
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose dark:prose-dark max-w-none">
          <h1>Chapter 1: Introduction to ResearcherRAG</h1>

          <h2>What is ResearcherRAG?</h2>
          <p>
            ResearcherRAG is a <strong>conversational AI-guided system</strong> that helps researchers build
            custom RAG (Retrieval-Augmented Generation) systems for their literature review using Claude Code in VS Code.
          </p>

          <h2>The Problem It Solves</h2>
          <h3>Traditional Literature Review (6-8 weeks)</h3>
          <ol>
            <li>Manual database searches (PubMed, ERIC, Web of Science)</li>
            <li>Export to Excel, read 500+ abstracts one by one</li>
            <li>Full-text review of 200+ papers</li>
            <li>Extract findings manually</li>
            <li>Constantly re-read papers for citations</li>
          </ol>

          <h3>With ResearcherRAG (2-3 weeks)</h3>
          <ol>
            <li><strong>3-hour workshop</strong>: Build RAG system with Claude Code guidance</li>
            <li><strong>2 hours</strong>: PRISMA screens thousands of papers automatically</li>
            <li><strong>Ongoing</strong>: Query RAG for instant answers with citations</li>
            <li><strong>Result</strong>: 67-75% time savings, never forget a relevant paper</li>
          </ol>

          <h2>What You'll Build</h2>
          <p>In 3 hours, you'll create:</p>
          <ul>
            <li>✅ <strong>PRISMA Systematic Review Pipeline</strong>: Screen 500+ papers down to 50-150 highly relevant ones</li>
            <li>✅ <strong>Custom Vector Database</strong>: Semantic search across your included papers</li>
            <li>✅ <strong>Research-Focused RAG</strong>: Query system that cites specific papers with methods and findings</li>
          </ul>

          <h2>Core Concepts</h2>

          <h3>1. PRISMA Screening</h3>
          <p>
            PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is a methodology for
            systematically filtering academic papers based on relevance criteria.
          </p>

          <h3>2. RAG (Retrieval-Augmented Generation)</h3>
          <p>
            RAG combines vector search (finding relevant papers) with LLM generation (answering questions).
            This ensures your AI responses are grounded in actual research, not hallucinations.
          </p>

          <h3>3. 5-Stage Workflow</h3>
          <p>ResearcherRAG breaks down the complex process into 5 manageable stages:</p>
          <ol>
            <li><strong>Research Domain Setup</strong> (15 min): Define your research scope</li>
            <li><strong>Query Strategy</strong> (10 min): Design search queries</li>
            <li><strong>PRISMA Configuration</strong> (20 min + 2 hours automated): Screen papers</li>
            <li><strong>RAG Design</strong> (15 min): Configure vector database</li>
            <li><strong>Execution</strong> (3-4 hours automated): Download PDFs, build RAG</li>
          </ol>

          <h2>Who Should Use ResearcherRAG?</h2>
          <ul>
            <li><strong>PhD Students</strong>: Dissertation literature reviews</li>
            <li><strong>Researchers</strong>: Meta-analysis preparation</li>
            <li><strong>Professors</strong>: Grant proposal background sections</li>
            <li><strong>Research Librarians</strong>: Systematic review assistance</li>
          </ul>

          <h2>Prerequisites</h2>
          <ul>
            <li>VS Code with Claude Code extension</li>
            <li>Python 3.9+</li>
            <li>3 hours for initial setup</li>
            <li>Basic understanding of your research domain</li>
          </ul>

          <h2>Next Steps</h2>
          <p>
            Ready to dive deeper? Proceed to <Link href="/guide/02-workflow">Chapter 2: 5-Stage Workflow</Link> to
            understand each stage in detail.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link href="/guide" className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
            <ArrowLeft className="w-4 h-4" />
            Back to Guide
          </Link>
          <Link href="/guide/02-workflow" className="flex items-center gap-2 text-primary-600 font-medium">
            Next: 5-Stage Workflow
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
