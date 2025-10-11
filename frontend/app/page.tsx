'use client'

import Link from 'next/link'
import { BookOpen, MessageCircle, Download, Video, Github, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'
import ChatWidget from '@/components/ChatWidget'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50">
      <ChatWidget />

      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 backdrop-blur-sm bg-white/70 border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              ResearcherRAG Helper
            </h1>
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/guide" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Guide</Link>
            <Link href="/chat" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Chatbot</Link>
            <Link href="/resources" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Resources</Link>
            <a
              href="https://github.com/HosungYou/ResearcherRAG"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-primary-200 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">AI-Powered Research Assistant</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in">
            Build Your Own{' '}
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Research RAG System
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Interactive platform for learning ResearcherRAG - the conversational AI-guided system
            for academic literature review and systematic research
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link
              href="/guide"
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/60 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Start Learning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/chat"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-white hover:border-primary-300 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Try Chatbot
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">3hrs</div>
              <div className="text-sm text-gray-600 mt-1">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">75%</div>
              <div className="text-sm text-gray-600 mt-1">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">5</div>
              <div className="text-sm text-gray-600 mt-1">Easy Steps</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Glassmorphism Cards */}
      <section className="relative container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything You Need
          </h3>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Powerful tools to accelerate your research workflow
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<BookOpen className="w-10 h-10" />}
              title="Interactive Guide"
              description="Step-by-step tutorials with code examples and best practices"
              href="/guide"
              color="from-blue-500 to-cyan-500"
            />
            <FeatureCard
              icon={<MessageCircle className="w-10 h-10" />}
              title="AI Chatbot"
              description="Get instant answers with RAG-powered assistance"
              href="/chat"
              color="from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon={<Download className="w-10 h-10" />}
              title="Templates"
              description="Ready-to-use templates and example projects"
              href="/resources"
              color="from-green-500 to-emerald-500"
            />
            <FeatureCard
              icon={<Video className="w-10 h-10" />}
              title="Tutorials"
              description="Video walkthroughs of the 5-stage workflow"
              href="/resources#videos"
              color="from-orange-500 to-red-500"
            />
          </div>
        </div>
      </section>

      {/* Quick Start - Glass Card */}
      <section className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

            {/* Card */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Quick Start</h3>
              </div>

              <ol className="space-y-4 mb-8">
                <QuickStartStep number={1} text="Clone the ResearcherRAG repository" href="https://github.com/HosungYou/ResearcherRAG" />
                <QuickStartStep number={2} text="Open in VS Code with Claude Code extension" />
                <QuickStartStep number={3} text="Follow the 5-stage workflow" href="/guide" />
                <QuickStartStep number={4} text="Build your custom RAG system in 3 hours!" />
              </ol>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl blur-sm"></div>
                <pre className="relative bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto border border-gray-700 font-mono text-sm">
                  <code>{`git clone https://github.com/HosungYou/ResearcherRAG.git
cd ResearcherRAG
pip install -r requirements.txt
code .`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-12 md:p-16 shadow-2xl">
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Research?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join researchers worldwide who are saving 67-75% of their literature review time
            </p>
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200/50 backdrop-blur-sm bg-white/50 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p className="font-medium">Built with ❤️ for researchers, by researchers</p>
          <p className="mt-2 text-sm">
            Powered by{' '}
            <a href="https://nextjs.org" className="text-primary-600 hover:text-primary-700 font-medium">Next.js</a>
            {' '}+{' '}
            <a href="https://anthropic.com" className="text-primary-600 hover:text-primary-700 font-medium">Claude 3.5 Sonnet</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description, href, color }: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  color: string
}) {
  return (
    <Link href={href} className="group relative">
      {/* Hover glow */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>

      {/* Glass card */}
      <div className="relative h-full bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
        <div className={`inline-flex p-3 bg-gradient-to-br ${color} rounded-xl mb-4 text-white`}>
          {icon}
        </div>
        <h4 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}

function QuickStartStep({ number, text, href }: { number: number; text: string; href?: string }) {
  const content = (
    <div className="flex gap-4 items-start group cursor-pointer">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 text-white font-bold flex items-center justify-center text-sm shadow-lg">
        {number}
      </div>
      <span className="text-gray-700 font-medium group-hover:text-primary-600 transition-colors flex-1">
        {text}
        {href && <span className="text-primary-500 ml-1">→</span>}
      </span>
    </div>
  )

  if (href) {
    return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>{content}</a>
  }

  return content
}
