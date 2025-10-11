import Link from 'next/link'
import { BookOpen, Github, ArrowRight } from 'lucide-react'

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary-600" />
            <h1 className="text-2xl font-bold">ResearcherRAG Helper</h1>
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <Link href="/guide" className="text-primary-600 font-semibold">Guide</Link>
            <Link href="/chat" className="hover:text-primary-600">Chatbot</Link>
            <Link href="/resources" className="hover:text-primary-600">Resources</Link>
            <a href="https://github.com/HosungYou/ResearcherRAG-helper" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive Guide</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Learn ResearcherRAG step-by-step with detailed examples and best practices
          </p>
        </div>

        {/* Guide Chapters */}
        <div className="grid md:grid-cols-2 gap-6">
          <GuideChapter
            number={1}
            title="Introduction to ResearcherRAG"
            description="What is ResearcherRAG? Why use it for literature review? Key concepts and benefits."
            href="/guide/01-introduction"
            status="available"
          />
          <GuideChapter
            number={2}
            title="5-Stage Workflow Deep Dive"
            description="Understand each stage: Research Domain, Query Strategy, PRISMA, RAG Design, Execution"
            href="/guide/02-workflow"
            status="available"
          />
          <GuideChapter
            number={3}
            title="PRISMA Configuration Guide"
            description="Multi-dimensional screening, relevance scoring, and paper selection strategies"
            href="/guide/03-prisma"
            status="available"
          />
          <GuideChapter
            number={4}
            title="RAG System Design Patterns"
            description="Vector databases, embeddings, chunking strategies, and prompt engineering"
            href="/guide/04-rag-design"
            status="available"
          />
          <GuideChapter
            number={5}
            title="Case Studies"
            description="Real-world examples: Education, Medicine, Psychology research projects"
            href="/guide/05-case-studies"
            status="available"
          />
          <GuideChapter
            number={6}
            title="Troubleshooting & FAQ"
            description="Common issues, debugging tips, and frequently asked questions"
            href="/guide/06-troubleshooting"
            status="available"
          />
          <GuideChapter
            number={7}
            title="Advanced Topics"
            description="Meta-analysis, citation graphs, multi-lingual RAG, and automation"
            href="/guide/07-advanced"
            status="coming-soon"
          />
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <h3 className="font-bold mb-3">New to RAG?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Start with Chapter 1 to learn the fundamentals
            </p>
            <Link href="/guide/01-introduction" className="btn btn-primary btn-sm">
              Start Here
            </Link>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-bold mb-3">Need Help?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Ask our AI chatbot any questions
            </p>
            <Link href="/chat" className="btn btn-secondary btn-sm">
              Open Chatbot
            </Link>
          </div>
          <div className="card p-6 text-center">
            <h3 className="font-bold mb-3">Ready to Build?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Download templates and examples
            </p>
            <Link href="/resources" className="btn btn-secondary btn-sm">
              Get Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function GuideChapter({ number, title, description, href, status }: {
  number: number
  title: string
  description: string
  href: string
  status: 'available' | 'coming-soon'
}) {
  if (status === 'coming-soon') {
    return (
      <div className="card p-6 opacity-60">
        <div className="flex items-start gap-4">
          <div className="bg-gray-300 dark:bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
            {number}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{description}</p>
            <span className="text-xs text-gray-500">Coming Soon</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link href={href} className="card p-6 hover:shadow-lg transition-all">
      <div className="flex items-start gap-4">
        <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{description}</p>
          <div className="flex items-center text-primary-600 text-sm font-medium">
            Read Chapter
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
