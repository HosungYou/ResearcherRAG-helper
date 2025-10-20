'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  title: string
  href: string
  excerpt: string
  chapter?: string
}

// Index of all searchable content
const searchIndex: SearchResult[] = [
  // Guide pages
  {
    title: 'Introduction',
    href: '/guide/01-introduction',
    excerpt: 'Learn about ScholarRAG, PRISMA 2020, and RAG technology for systematic literature reviews',
    chapter: 'Chapter 1'
  },
  {
    title: 'Getting Started',
    href: '/guide/02-getting-started',
    excerpt: 'Installation guide, setup instructions, and first steps with ScholarRAG',
    chapter: 'Chapter 2'
  },
  {
    title: 'Core Concepts',
    href: '/guide/03-core-concepts',
    excerpt: 'PRISMA methodology, RAG architecture, vector databases, and semantic search',
    chapter: 'Chapter 3'
  },
  {
    title: 'Implementation Guide',
    href: '/guide/04-implementation',
    excerpt: 'Step-by-step implementation of PRISMA screening and RAG system building',
    chapter: 'Chapter 4'
  },
  {
    title: 'Practical Guide',
    href: '/guide/05-advanced-topics',
    excerpt: 'Advanced topics, optimization, troubleshooting, and best practices',
    chapter: 'Chapter 5'
  },
  {
    title: 'Research Conversation',
    href: '/guide/06-research-conversation',
    excerpt: 'Query RAG system, extract insights, and conduct AI-powered research conversations',
    chapter: 'Chapter 6'
  },
  {
    title: 'Documentation & Writing',
    href: '/guide/07-documentation-writing',
    excerpt: 'Generate research reports, create PRISMA flowcharts, and document findings',
    chapter: 'Chapter 7'
  },
  // Common search terms
  {
    title: 'PRISMA 2020',
    href: '/guide/03-core-concepts#prisma-methodology',
    excerpt: 'Systematic literature review methodology for transparent research'
  },
  {
    title: 'RAG System',
    href: '/guide/03-core-concepts#rag-architecture',
    excerpt: 'Retrieval-Augmented Generation for AI-powered document analysis'
  },
  {
    title: 'Vector Database',
    href: '/guide/03-core-concepts#vector-database',
    excerpt: 'ChromaDB for semantic search and embeddings storage'
  },
  {
    title: 'Installation',
    href: '/guide/02-getting-started#installation',
    excerpt: 'Install ScholarRAG and dependencies'
  },
  {
    title: 'Configuration',
    href: '/guide/04-implementation#configuration',
    excerpt: 'Configure PRISMA criteria and RAG settings'
  },
  {
    title: 'Troubleshooting',
    href: '/guide/05-advanced-topics#troubleshooting',
    excerpt: 'Common issues and solutions for ScholarRAG'
  },
  // Codebook - Main pages
  {
    title: 'Codebook',
    href: '/codebook',
    excerpt: 'Knowledge base for beginners: fundamentals, file formats, tools, workflow explained for researchers with no programming experience'
  },

  // Codebook - Fundamentals Page
  {
    title: 'Fundamentals',
    href: '/codebook/fundamentals',
    excerpt: 'Core concepts for beginners: What is a Script, Python, Terminal, API, Vector Database, RAG, PRISMA 2020'
  },
  {
    title: 'What is a Script?',
    href: '/codebook/fundamentals',
    excerpt: 'Understanding Python scripts as automated recipes for research tasks'
  },
  {
    title: 'What is Python?',
    href: '/codebook/fundamentals',
    excerpt: 'Python programming language for research: easy to read, powerful libraries, used by researchers, free and open source'
  },
  {
    title: 'What is Terminal?',
    href: '/codebook/fundamentals',
    excerpt: 'Command line interface for running scripts and controlling your computer with text commands'
  },
  {
    title: 'What is an API?',
    href: '/codebook/fundamentals',
    excerpt: 'API keys for Claude AI, OpenAI, Semantic Scholar - understanding how programs communicate with services'
  },
  {
    title: 'What is a Vector Database?',
    href: '/codebook/fundamentals',
    excerpt: 'ChromaDB vector database for semantic search - finding similar papers by meaning, not keywords'
  },
  {
    title: 'What is RAG?',
    href: '/codebook/fundamentals',
    excerpt: 'Retrieval-Augmented Generation: retrieve relevant papers, augment with context, generate answers with citations'
  },
  {
    title: 'PRISMA 2020',
    href: '/codebook/fundamentals',
    excerpt: 'Systematic review methodology: Identification → Screening → Eligibility → Included papers'
  },

  // Codebook - File Formats Page
  {
    title: 'File Formats',
    href: '/codebook/file-formats',
    excerpt: 'Understanding YAML, JSON, Markdown, Python, and .env files used in ScholarRAG'
  },
  {
    title: 'YAML Files (.yaml)',
    href: '/codebook/file-formats',
    excerpt: 'Configuration files: human-readable settings for research projects, PRISMA criteria, AI models'
  },
  {
    title: 'JSON Files (.json)',
    href: '/codebook/file-formats',
    excerpt: 'Data storage format: structured data for papers.json, screened.json, eligible.json, synthesis.json'
  },
  {
    title: 'Markdown Files (.md)',
    href: '/codebook/file-formats',
    excerpt: 'Documentation format: simple formatting language for prompts, README, methods sections'
  },
  {
    title: 'Python Files (.py)',
    href: '/codebook/file-formats',
    excerpt: 'Script files: imports, configuration, functions, main execution - structure of Python programs'
  },
  {
    title: 'Environment Files (.env)',
    href: '/codebook/file-formats',
    excerpt: 'API keys and secrets - NEVER share or commit to Git, use .env.example templates instead'
  },

  // Codebook - Tools & Technologies Page
  {
    title: 'Tools & Technologies',
    href: '/codebook/tools',
    excerpt: 'Why ScholarRAG uses ChromaDB, Claude AI, OpenAI, GitHub, Git, and Python libraries'
  },
  {
    title: 'ChromaDB',
    href: '/codebook/tools',
    excerpt: 'Vector database for ScholarRAG: easy to use, runs locally, Python-friendly, fast semantic search'
  },
  {
    title: 'Claude AI',
    href: '/codebook/tools',
    excerpt: 'AI screening assistant: large context window, strong reasoning, explains decisions, runs PRISMA screening'
  },
  {
    title: 'OpenAI Embeddings',
    href: '/codebook/tools',
    excerpt: 'Text embedding engine: text-embedding-3-small converts papers into 1536-dimensional semantic vectors'
  },
  {
    title: 'GitHub',
    href: '/codebook/tools',
    excerpt: 'Code repository platform: version control, collaboration, open source sharing, documentation'
  },
  {
    title: 'Git',
    href: '/codebook/tools',
    excerpt: 'Version control system: time machine for code, track changes, create branches, industry standard'
  },
  {
    title: 'Python Libraries',
    href: '/codebook/tools',
    excerpt: 'Packages for ScholarRAG: anthropic, openai, chromadb, requests, pandas, python-dotenv'
  },

  // Codebook - Scripts Workflow Page
  {
    title: 'Scripts Workflow',
    href: '/codebook/scripts-workflow',
    excerpt: 'Why scripts run 01→02→03→04→05→06→07: data dependency chain, pipeline visualization, script breakdown'
  },
  {
    title: 'Script 01: Fetch Papers',
    href: '/codebook/scripts-workflow',
    excerpt: 'Foundation step: search databases, download metadata to papers.json - needed before screening can begin'
  },
  {
    title: 'Script 02: Title/Abstract Screening',
    href: '/codebook/scripts-workflow',
    excerpt: 'Quick filter: Claude reads abstracts, applies PRISMA criteria, creates screened.json - reduces 5000→500 papers'
  },
  {
    title: 'Script 03: Full-Text Screening',
    href: '/codebook/scripts-workflow',
    excerpt: 'Deep dive: downloads PDFs, detailed eligibility check, creates eligible.json - filters 500→100 papers'
  },
  {
    title: 'Script 04: Build Embeddings',
    href: '/codebook/scripts-workflow',
    excerpt: 'Create search index: OpenAI converts papers to vectors, stores in ChromaDB - enables semantic search'
  },
  {
    title: 'Script 05: RAG Query',
    href: '/codebook/scripts-workflow',
    excerpt: 'Interactive research: ask questions, semantic search ChromaDB, Claude answers with citations from papers'
  },
  {
    title: 'Script 06: Synthesis',
    href: '/codebook/scripts-workflow',
    excerpt: 'Meta-analysis: identify patterns, calculate statistics, find gaps, synthesize themes across all papers'
  },
  {
    title: 'Script 07: Documentation',
    href: '/codebook/scripts-workflow',
    excerpt: 'Publication ready: generate PRISMA flowchart, methods section, results tables, bibliography'
  },
  {
    title: 'Pipeline Dependencies',
    href: '/codebook/scripts-workflow',
    excerpt: 'What happens if you skip steps: FileNotFoundError, empty databases, incomplete documentation'
  },
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Search function
  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    const searchTerms = query.toLowerCase().split(' ')
    const filtered = searchIndex
      .map(item => {
        const titleMatch = searchTerms.filter(term =>
          item.title.toLowerCase().includes(term)
        ).length
        const excerptMatch = searchTerms.filter(term =>
          item.excerpt.toLowerCase().includes(term)
        ).length
        const score = (titleMatch * 3) + excerptMatch

        return { ...item, score }
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)

    setResults(filtered)
    setSelectedIndex(0)
  }, [query])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to focus search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
        inputRef.current?.focus()
      }

      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
      }

      // Arrow keys for navigation
      if (isOpen && results.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex(prev => (prev + 1) % results.length)
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex(prev => (prev - 1 + results.length) % results.length)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results.length])

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleClear = () => {
    setQuery('')
    setResults([])
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search documentation... (⌘K)"
          className="w-full pl-10 pr-10 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <Link
              key={result.href + index}
              href={result.href}
              onClick={() => {
                setIsOpen(false)
                setQuery('')
              }}
              className={`block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-gray-900 mb-1">
                    {result.title}
                  </div>
                  <div className="text-xs text-gray-600 line-clamp-2">
                    {result.excerpt}
                  </div>
                </div>
                {result.chapter && (
                  <div className="text-xs text-gray-400 whitespace-nowrap">
                    {result.chapter}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-50 px-4 py-8 text-center">
          <div className="text-sm text-gray-500">
            No results found for &quot;{query}&quot;
          </div>
          <div className="text-xs text-gray-400 mt-2">
            Try searching for: PRISMA, RAG, vector database, or installation
          </div>
        </div>
      )}
    </div>
  )
}
