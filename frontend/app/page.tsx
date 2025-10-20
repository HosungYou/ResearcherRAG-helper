'use client'

import Link from 'next/link'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import TypewriterText from '@/components/TypewriterText'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header - Minimal (No animation, always static) */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-lg font-medium tracking-tight">ScholaRAG</div>
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm">
            <AnimatedLink href="/guide">Documentation</AnimatedLink>
            <AnimatedLink href="/chat">Chatbot</AnimatedLink>
            <AnimatedLink href="/resources">Resources</AnimatedLink>
            <AnimatedLink href="/about">About</AnimatedLink>
            <a
              href="https://github.com/HosungYou/ScholaRAG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero - Large Typography with Animations */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 overflow-hidden">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[clamp(3rem,8vw,5.5rem)] font-bold tracking-tighter leading-[0.95] mb-8"
          >
            Build AI-Powered
            <br />
            <TypewriterText
              words={['Research Systems', 'Literature Reviews', 'Meta-Analysis', 'PRISMA Reports']}
              typingSpeed={80}
              deletingSpeed={50}
              delayBetweenWords={3000}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-muted leading-relaxed mb-10 max-w-2xl"
          >
            An open-source platform for creating RAG-based literature review tools.
            From academic papers to systematic research in hours, not weeks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex gap-4"
          >
            <Link
              href="/guide"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-md text-sm font-medium hover:border-foreground hover:scale-105 transition-all"
            >
              Try Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid with Number Counters */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 py-20 border-t border-border"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter
              end={3}
              suffix=" hrs"
              className="text-4xl font-bold tracking-tight mb-2"
            />
            <div className="text-sm text-muted">Setup to deployment</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter
              end={75}
              suffix="%"
              className="text-4xl font-bold tracking-tight mb-2"
            />
            <div className="text-sm text-muted">Time saved on review</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter
              end={7}
              suffix=" stages"
              className="text-4xl font-bold tracking-tight mb-2"
            />
            <div className="text-sm text-muted">From zero to production</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features - Grid Table */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 py-20 border-t border-border"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12">Everything you need</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
          <FeatureCell
            title="Interactive Documentation"
            description="Step-by-step guides with code examples and best practices for building RAG systems"
            href="/guide"
            delay={0}
          />
          <FeatureCell
            title="AI-Powered Chatbot"
            description="Get instant answers about ScholaRAG with Claude 3.5 Sonnet integration"
            href="/chat"
            delay={0.1}
          />
          <FeatureCell
            title="Ready-to-Use Templates"
            description="Pre-configured workflows for PRISMA reviews, meta-analysis, and systematic research"
            href="/resources"
            delay={0.2}
          />
          <FeatureCell
            title="Video Tutorials"
            description="Visual walkthroughs of the complete 7-stage research workflow"
            href="/resources#videos"
            delay={0.3}
          />
        </div>
      </motion.section>

      {/* Quick Start */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 py-20 border-t border-border"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">Quick Start</h2>
        <div className="border border-border rounded-lg p-8 bg-gray-50">
          <ol className="space-y-4 mb-8 text-sm">
            {[
              'Clone the repository and install dependencies',
              'Configure your API keys and environment',
              'Follow the 7-stage workflow in VS Code',
              'Deploy your custom RAG system'
            ].map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <span className="text-muted font-mono">0{i + 1}</span>
                <span>{step}</span>
              </motion.li>
            ))}
          </ol>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-foreground text-background p-6 rounded-md font-mono text-sm overflow-x-auto"
          >
            <div className="text-gray-400"># Install ScholaRAG</div>
            <div>git clone https://github.com/HosungYou/ScholaRAG.git</div>
            <div>cd ScholaRAG</div>
            <div>pip install -r requirements.txt</div>
            <div className="mt-4 text-gray-400"># Open in VS Code</div>
            <div>code .</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 py-20 border-t border-border"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8">Built with modern tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {[
            { name: 'Claude 3.5', description: 'Sonnet API' },
            { name: 'ChromaDB', description: 'Vector database' },
            { name: 'LangChain', description: 'RAG framework' },
            { name: 'Python', description: 'Backend stack' },
            { name: 'Next.js', description: 'Frontend' },
            { name: 'Tailwind CSS', description: 'Styling' },
            { name: 'Vercel', description: 'Deployment' },
            { name: 'TypeScript', description: 'Type safety' }
          ].map((tech, i) => (
            <TechCell key={i} name={tech.name} description={tech.description} delay={i * 0.05} />
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 py-24 border-t border-border"
      >
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
              className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md text-sm font-medium hover:bg-gray-800 hover:scale-105 transition-all"
            >
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com/HosungYou/ScholaRAG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-md text-sm font-medium hover:border-foreground hover:scale-105 transition-all"
            >
              View on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer (Static, no animation) */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="font-medium mb-2">ScholaRAG</div>
              <p className="text-sm text-muted">
                Open-source research AI platform
              </p>
            </div>
            <div className="flex gap-6 text-sm text-muted">
              <AnimatedLink href="/guide">Documentation</AnimatedLink>
              <a
                href="https://github.com/HosungYou/ScholaRAG"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <AnimatedLink href="/resources">Resources</AnimatedLink>
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

// Animated Link with underline expand effect
function AnimatedLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative text-muted hover:text-foreground transition-colors group">
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300" />
      </span>
    </Link>
  )
}

function FeatureCell({ title, description, href, delay }: { title: string; description: string; href: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className="block bg-background p-8 hover:bg-gray-50 transition-colors group h-full"
      >
        <h3 className="text-lg font-semibold mb-2 relative">
          {title}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300" />
        </h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center gap-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more
          <ArrowRight className="w-3 h-3" />
        </div>
      </Link>
    </motion.div>
  )
}

function TechCell({ name, description, delay }: { name: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="bg-background p-6 hover:bg-gray-50 transition-colors"
    >
      <div className="font-medium text-sm mb-1">{name}</div>
      <div className="text-xs text-muted">{description}</div>
    </motion.div>
  )
}
