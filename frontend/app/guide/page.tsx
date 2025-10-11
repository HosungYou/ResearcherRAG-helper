import Link from 'next/link'
import { BookOpen, Github, ArrowRight } from 'lucide-react'

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-semibold tracking-tight">ResearcherRAG</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Helper</div>
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
            description="What is ResearcherRAG? PRISMA methodology, 5-stage workflow overview, and benefits for researchers."
            href="/guide/01-introduction"
            status="available"
            github="https://github.com/HosungYou/researcherRAG/tree/main/prompts"
          />
          <GuideChapter
            number={2}
            title="Getting Started"
            description="Installation guide, system requirements, API key setup, and your first workflow walkthrough."
            href="/guide/02-getting-started"
            status="available"
            github="https://github.com/HosungYou/researcherRAG#installation"
          />
          <GuideChapter
            number={3}
            title="Core Concepts"
            description="Deep dive into PRISMA, RAG architecture, vector databases, embeddings, and chunking strategies."
            href="/guide/03-core-concepts"
            status="available"
            github="https://github.com/HosungYou/researcherRAG#core-concepts"
          />
          <GuideChapter
            number={4}
            title="Implementation Guide"
            description="Complete 5-stage workflow: Research Domain, Query Strategy, PRISMA Config, RAG Design, Execution."
            href="/guide/04-implementation"
            status="available"
            github="https://github.com/HosungYou/researcherRAG/tree/main/prompts"
          />
          <GuideChapter
            number={5}
            title="Advanced Topics"
            description="Custom embeddings, multi-language support, hybrid search, caching, and production optimization."
            href="/guide/05-advanced-topics"
            status="available"
            github="https://github.com/HosungYou/researcherRAG/tree/main/interfaces"
          />
          <GuideChapter
            number={6}
            title="Best Practices"
            description="Research methodology, citation management, reproducibility guidelines, and ethical considerations."
            href="/guide/06-best-practices"
            status="available"
          />
          <GuideChapter
            number={7}
            title="Troubleshooting & FAQ"
            description="Common issues, debugging strategies, installation problems, and comprehensive FAQ section."
            href="/guide/07-troubleshooting"
            status="available"
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

function GuideChapter({ number, title, description, href, status, github }: {
  number: number
  title: string
  description: string
  href: string
  status: 'available' | 'coming-soon'
  github?: string
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
    <div className="card p-6 hover:shadow-lg transition-all">
      <div className="flex items-start gap-4">
        <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{description}</p>
          <div className="flex items-center gap-3">
            <Link href={href} className="flex items-center text-primary-600 text-sm font-medium hover:underline">
              Read Chapter
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 text-sm hover:text-primary-600"
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
