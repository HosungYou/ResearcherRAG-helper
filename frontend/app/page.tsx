'use client'

import Link from 'next/link'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header - Minimal */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-lg font-medium tracking-tight">RAG.lab</div>
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm">
            <Link href="/guide" className="text-muted hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/chat" className="text-muted hover:text-foreground transition-colors">
              Chatbot
            </Link>
            <Link href="/resources" className="text-muted hover:text-foreground transition-colors">
              Resources
            </Link>
            <a
              href="https://github.com/HosungYou/ResearcherRAG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero - Large Typography */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl">
          <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-bold tracking-tighter leading-[0.95] mb-8">
            Build AI-Powered
            <br />
            Research Systems
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            An open-source platform for creating RAG-based literature review tools.
            From academic papers to systematic research in hours, not weeks.
          </p>
          <div className="flex gap-4">
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-md text-sm font-medium hover:border-border-strong transition-colors"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="grid grid-cols-3 gap-12">
          <div>
            <div className="text-4xl font-bold tracking-tight mb-2">3 hrs</div>
            <div className="text-sm text-muted">Setup to deployment</div>
          </div>
          <div>
            <div className="text-4xl font-bold tracking-tight mb-2">75%</div>
            <div className="text-sm text-muted">Time saved on review</div>
          </div>
          <div>
            <div className="text-4xl font-bold tracking-tight mb-2">5 steps</div>
            <div className="text-sm text-muted">From zero to production</div>
          </div>
        </div>
      </section>

      {/* Features - Grid Table */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Everything you need</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
          <FeatureCell
            title="Interactive Documentation"
            description="Step-by-step guides with code examples and best practices for building RAG systems"
            href="/guide"
          />
          <FeatureCell
            title="AI-Powered Chatbot"
            description="Get instant answers about ResearcherRAG with Claude 3.5 Sonnet integration"
            href="/chat"
          />
          <FeatureCell
            title="Ready-to-Use Templates"
            description="Pre-configured workflows for PRISMA reviews, meta-analysis, and systematic research"
            href="/resources"
          />
          <FeatureCell
            title="Video Tutorials"
            description="Visual walkthroughs of the complete 5-stage research workflow"
            href="/resources#videos"
          />
        </div>
      </section>

      {/* Quick Start */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Quick Start</h2>
        <div className="border border-border rounded-lg p-8 bg-gray-50">
          <ol className="space-y-4 mb-8 text-sm">
            <li className="flex gap-3">
              <span className="text-muted font-mono">01</span>
              <span>Clone the repository and install dependencies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted font-mono">02</span>
              <span>Configure your API keys and environment</span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted font-mono">03</span>
              <span>Follow the 5-stage workflow in VS Code</span>
            </li>
            <li className="flex gap-3">
              <span className="text-muted font-mono">04</span>
              <span>Deploy your custom RAG system</span>
            </li>
          </ol>
          <div className="bg-foreground text-background p-6 rounded-md font-mono text-sm overflow-x-auto">
            <div className="text-gray-400"># Install ResearcherRAG</div>
            <div>git clone https://github.com/HosungYou/ResearcherRAG.git</div>
            <div>cd ResearcherRAG</div>
            <div>pip install -r requirements.txt</div>
            <div className="mt-4 text-gray-400"># Open in VS Code</div>
            <div>code .</div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Built with modern tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden">
          <TechCell name="Claude 3.5" description="Sonnet API" />
          <TechCell name="ChromaDB" description="Vector database" />
          <TechCell name="LangChain" description="RAG framework" />
          <TechCell name="Python" description="Backend stack" />
          <TechCell name="Next.js" description="Frontend" />
          <TechCell name="Tailwind CSS" description="Styling" />
          <TechCell name="Vercel" description="Deployment" />
          <TechCell name="TypeScript" description="Type safety" />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Ready to transform your research workflow?
          </h2>
          <p className="text-lg text-muted mb-8">
            Join researchers worldwide saving 67-75% of literature review time with AI-powered tools.
          </p>
          <div className="flex gap-4">
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Start Building
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/HosungYou/ResearcherRAG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-md text-sm font-medium hover:border-border-strong transition-colors"
            >
              View on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="font-medium mb-2">RAG.lab</div>
              <p className="text-sm text-muted">
                Open-source research AI platform
              </p>
            </div>
            <div className="flex gap-6 text-sm text-muted">
              <Link href="/guide" className="hover:text-foreground transition-colors">
                Documentation
              </Link>
              <a
                href="https://github.com/HosungYou/ResearcherRAG"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <Link href="/resources" className="hover:text-foreground transition-colors">
                Resources
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-xs text-muted">
            Built with Next.js, Tailwind CSS, and Claude AI. Deployed on Vercel.
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCell({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link
      href={href}
      className="bg-background p-8 hover:bg-gray-50 transition-colors group"
    >
      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more
        <ArrowRight className="w-3 h-3" />
      </div>
    </Link>
  )
}

function TechCell({ name, description }: { name: string; description: string }) {
  return (
    <div className="bg-background p-6 hover:bg-gray-50 transition-colors">
      <div className="font-medium text-sm mb-1">{name}</div>
      <div className="text-xs text-muted">{description}</div>
    </div>
  )
}
