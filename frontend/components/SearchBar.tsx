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
    excerpt: 'Learn about ResearcherRAG, PRISMA 2020, and RAG technology for systematic literature reviews',
    chapter: 'Chapter 1'
  },
  {
    title: 'Getting Started',
    href: '/guide/02-getting-started',
    excerpt: 'Installation guide, setup instructions, and first steps with ResearcherRAG',
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
    excerpt: 'Install ResearcherRAG and dependencies'
  },
  {
    title: 'Configuration',
    href: '/guide/04-implementation#configuration',
    excerpt: 'Configure PRISMA criteria and RAG settings'
  },
  {
    title: 'Troubleshooting',
    href: '/guide/05-advanced-topics#troubleshooting',
    excerpt: 'Common issues and solutions for ResearcherRAG'
  },
  // Codebook entries
  {
    title: 'Codebook',
    href: '/codebook',
    excerpt: 'Technical reference for scripts, prompts, config files, data structures, CLI commands'
  },
  {
    title: 'Scripts Reference',
    href: '/codebook#scripts',
    excerpt: '01-07.py Python scripts: fetch papers, deduplicate, screen, download PDFs, build RAG, query, generate PRISMA'
  },
  {
    title: 'Prompts Guide',
    href: '/codebook#prompts',
    excerpt: '01-07.md conversational prompts for Claude Code: domain setup, query strategy, PRISMA config, RAG design'
  },
  {
    title: 'config.yaml',
    href: '/codebook#config',
    excerpt: 'Configuration file structure: PRISMA criteria, RAG settings, API keys, search query'
  },
  {
    title: 'Data Structures',
    href: '/codebook#data',
    excerpt: 'JSON formats: papers.json, prisma_results.json, rag_config.json metadata structures'
  },
  {
    title: 'CLI Commands',
    href: '/codebook#cli',
    excerpt: 'Command line usage: run scripts, query RAG, generate PRISMA diagram, check status'
  },
  {
    title: 'Folder Structure',
    href: '/codebook#folders',
    excerpt: 'Repository organization: prompts/, scripts/, data/, examples/, templates/'
  },
  {
    title: '01_fetch_papers.py',
    href: '/codebook#script-01',
    excerpt: 'Fetch papers from Semantic Scholar, OpenAlex, arXiv with search query'
  },
  {
    title: '02_deduplicate.py',
    href: '/codebook#script-02',
    excerpt: 'Remove duplicate papers by DOI, title similarity, or arXiv ID'
  },
  {
    title: '03_screen_papers.py',
    href: '/codebook#script-03',
    excerpt: 'PRISMA screening with 6-dimension criteria: domain, method, topic, context, exclusion, title'
  },
  {
    title: '04_download_pdfs.py',
    href: '/codebook#script-04',
    excerpt: 'Download full-text PDFs from Open Access sources: Unpaywall, CORE, arXiv'
  },
  {
    title: '05_build_rag.py',
    href: '/codebook#script-05',
    excerpt: 'Build vector database: extract text, chunk documents, generate embeddings, store in ChromaDB'
  },
  {
    title: '06_query_rag.py',
    href: '/codebook#script-06',
    excerpt: 'Interactive RAG querying: retrieve chunks, generate answers with citations'
  },
  {
    title: '07_generate_prisma.py',
    href: '/codebook#script-07',
    excerpt: 'Generate PRISMA 2020 flowchart, methods section, bibliography'
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
