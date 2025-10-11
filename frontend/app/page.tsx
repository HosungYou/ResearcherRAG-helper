import Link from 'next/link'
import { BookOpen, MessageCircle, Download, Video, Github } from 'lucide-react'
import ChatWidget from '@/components/ChatWidget'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <ChatWidget />
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary-600" />
            <h1 className="text-2xl font-bold">ResearcherRAG Helper</h1>
          </div>
          <nav className="flex gap-6">
            <Link href="/guide" className="hover:text-primary-600">Guide</Link>
            <Link href="/chat" className="hover:text-primary-600">Chatbot</Link>
            <Link href="/resources" className="hover:text-primary-600">Resources</Link>
            <a href="https://github.com/HosungYou/ResearcherRAG" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Build Your Own <span className="text-primary-600">Research RAG System</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Interactive platform for learning ResearcherRAG - the conversational AI-guided system
          for academic literature review and systematic research
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/guide" className="btn btn-primary">
            Start Learning
          </Link>
          <Link href="/chat" className="btn btn-secondary">
            Try Chatbot
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<BookOpen className="w-10 h-10 text-primary-600" />}
            title="Interactive Guide"
            description="Step-by-step tutorials with code examples and best practices"
            href="/guide"
          />
          <FeatureCard
            icon={<MessageCircle className="w-10 h-10 text-primary-600" />}
            title="AI Chatbot"
            description="Get instant answers to your questions with RAG-powered assistance"
            href="/chat"
          />
          <FeatureCard
            icon={<Download className="w-10 h-10 text-primary-600" />}
            title="Templates & Examples"
            description="Download ready-to-use templates and complete example projects"
            href="/resources"
          />
          <FeatureCard
            icon={<Video className="w-10 h-10 text-primary-600" />}
            title="Video Tutorials"
            description="Watch video walkthroughs of the 5-stage workflow"
            href="/resources#videos"
          />
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-4 py-16">
        <div className="card max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Quick Start</h3>
          <ol className="space-y-3 text-left">
            <li className="flex gap-3">
              <span className="font-bold text-primary-600">1.</span>
              <span>Clone the <a href="https://github.com/HosungYou/ResearcherRAG" className="underline">ResearcherRAG repository</a></span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary-600">2.</span>
              <span>Open in VS Code with Claude Code extension</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary-600">3.</span>
              <span>Follow the <Link href="/guide" className="underline">5-stage workflow</Link></span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary-600">4.</span>
              <span>Build your custom RAG system in 3 hours!</span>
            </li>
          </ol>
          <div className="mt-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`git clone https://github.com/HosungYou/ResearcherRAG.git
cd ResearcherRAG
pip install -r requirements.txt
code .`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>Built with ❤️ for researchers, by researchers</p>
          <p className="mt-2">
            Powered by <a href="https://nextjs.org" className="underline">Next.js</a> +
            <a href="https://anthropic.com" className="underline ml-1">Claude 3.5 Sonnet</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description, href }: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <Link href={href} className="card hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </Link>
  )
}
