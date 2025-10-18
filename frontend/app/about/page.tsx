'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Github, Mail, BookOpen, Code, Database, Brain } from 'lucide-react'

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = "Empowering researchers with AI-driven systematic literature reviews"

  useEffect(() => {
    setMounted(true)
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 hover:text-gray-600 transition-colors">
              ResearcherRAG
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/guide" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Documentation
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-900">
                About
              </Link>
              <a
                href="https://github.com/HosungYou/ResearcherRAG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-gradient">
                About
              </span>
            </h1>
            <div className="h-16 mb-8">
              <p className="text-xl text-gray-600 font-light">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="border-l-2 border-gray-900 pl-8">
              <p className="text-2xl sm:text-3xl font-light text-gray-900 leading-relaxed mb-6">
                ResearcherRAG democratizes access to systematic literature review automation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe researchers should spend more time analyzing findings and less time on mechanical tasks.
                By combining <span className="font-semibold text-gray-900">PRISMA 2020 guidelines</span> with modern{' '}
                <span className="font-semibold text-gray-900">RAG technology</span>, we help academics conduct
                rigorous reviews in weeks instead of months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "Complete Retrieval",
                description: "Fetch all available papers from multiple academic databases with comprehensive coverage and direct PDF access.",
                metrics: "20K+ papers · 5 databases · 100% coverage"
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI-PRISMA Screening",
                description: "Multi-dimensional paper evaluation using LLMs with transparent criteria, confidence scoring, and human validation.",
                metrics: "PICO framework · Cohen's κ · 10-20% precision"
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Custom RAG Systems",
                description: "Build semantic search over your papers using vector databases for instant literature queries with citations.",
                metrics: "ChromaDB · FAISS · Contextual retrieval"
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Conversational Workflow",
                description: "Step-by-step guidance through Claude Code in VS Code, making systematic reviews accessible without coding.",
                metrics: "7 stages · 4-5 hours · Interactive prompts"
              }
            ].map((capability, index) => (
              <div
                key={index}
                className={`group border border-gray-200 p-8 hover:border-gray-900 transition-all duration-300 hover:shadow-lg ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-gray-900 group-hover:scale-110 transition-transform">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <p className="text-xs font-mono text-gray-400 tracking-wide">
                  {capability.metrics}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { category: "AI Models", items: ["Claude Sonnet 4.5", "Claude Haiku 4.5", "GPT-5-Codex"] },
              { category: "Databases", items: ["Semantic Scholar", "OpenAlex", "arXiv", "Scopus"] },
              { category: "Vector Stores", items: ["ChromaDB", "FAISS", "Qdrant"] },
              { category: "Framework", items: ["Python 3.9+", "LangChain", "VS Code"] }
            ].map((stack, index) => (
              <div
                key={index}
                className={`border border-gray-200 p-6 bg-white transition-all duration-500 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-4">
                  {stack.category}
                </div>
                <ul className="space-y-2">
                  {stack.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 font-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Efficiency */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-500 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              State-of-the-Art AI Coding Models
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-900">
                ResearcherRAG leverages the latest AI coding models optimized for research automation,
                keeping operational costs <strong>under $20-40 per project</strong> for typical systematic reviews.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-2 border-gray-900 pl-4">
                  <p className="font-semibold text-gray-900 mb-2">Claude Sonnet 4.5</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Latest release (Jan 2025) - currently the most effective coding model for research automation.
                    Achieves state-of-the-art performance on SWE-bench for complex workflow generation.
                  </p>
                  <p className="text-xs font-mono text-gray-400">Best for automation · Advanced reasoning</p>
                </div>
                <div className="border-l-2 border-gray-900 pl-4">
                  <p className="font-semibold text-gray-900 mb-2">GPT-5-Codex</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Advanced code generation with superior reasoning for complex research workflows.
                    Excellent for systematic review pipeline design and execution.
                  </p>
                  <p className="text-xs font-mono text-gray-400">Advanced codegen · Research-optimized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Research Impact</h2>
          <div className="space-y-8">
            {[
              {
                role: "PhD Students",
                use: "Dissertation literature reviews, qualifying exams, comprehensive analysis",
                impact: "2-3 weeks vs 6-8 weeks"
              },
              {
                role: "Academic Researchers",
                use: "Meta-analysis preparation, grant proposals, PRISMA 2020 reviews",
                impact: "67-75% time savings"
              },
              {
                role: "Professors & Faculty",
                use: "Course updates, research synthesis, student mentoring",
                impact: "Never forget citations"
              },
              {
                role: "Research Librarians",
                use: "Systematic review consulting, evidence-based practice workshops",
                impact: "Scalable support"
              }
            ].map((persona, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200 last:border-0 transition-all duration-500 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="md:w-48 flex-shrink-0">
                  <h3 className="text-lg font-semibold text-gray-900">{persona.role}</h3>
                  <p className="text-sm font-mono text-gray-400 mt-1">{persona.impact}</p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed">{persona.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Open Source & Free</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              MIT Licensed · Community Driven · Fully Transparent
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Use for academic or commercial research",
                "Customize workflows for specific domains",
                "Contribute improvements and templates",
                "Run locally with full data control"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
            <a
              href="https://github.com/HosungYou/ResearcherRAG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={`transition-all duration-500 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Project Maintainer
              </h3>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-gray-900">Hosung You</p>
                <p className="text-gray-600">PhD Candidate</p>
                <p className="text-gray-600">Learning, Design, and Technology</p>
                <p className="text-gray-600">The Pennsylvania State University</p>
              </div>
            </div>
            <div className={`transition-all duration-500 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:hfy5138@psu.edu"
                  className="flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">hfy5138@psu.edu</span>
                </a>
                <div className="pt-4 space-y-2 text-sm text-gray-600">
                  <p><span className="font-semibold text-gray-900">Bug reports:</span> GitHub Issues</p>
                  <p><span className="font-semibold text-gray-900">Questions:</span> GitHub Discussions</p>
                  <p><span className="font-semibold text-gray-900">Collaboration:</span> Email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Citation</h2>
          <p className="text-gray-600 mb-6">If you use ResearcherRAG in your research:</p>
          <div className="bg-white border border-gray-200 p-8 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-700">{`@software{researcherrag2025,
  author = {You, Hosung},
  title = {ResearcherRAG: AI-Powered Systematic
           Literature Review Automation},
  year = {2025},
  url = {https://github.com/HosungYou/ResearcherRAG},
  note = {Open-source PRISMA-compliant RAG system}
}`}</pre>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-1000 delay-900 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to transform your literature review?
            </h2>
            <Link
              href="/guide/01-introduction"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              ResearcherRAG · Open Source · MIT License · 2025
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="https://github.com/HosungYou/ResearcherRAG" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                GitHub
              </a>
              <Link href="/guide" className="hover:text-gray-900 transition-colors">
                Documentation
              </Link>
              <Link href="/about" className="hover:text-gray-900 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
