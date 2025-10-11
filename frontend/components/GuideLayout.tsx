'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Menu, X, ChevronRight, ChevronDown, Github, Home } from 'lucide-react'

interface Chapter {
  number: number
  title: string
  href: string
  sections?: { title: string; id: string }[]
}

const chapters: Chapter[] = [
  { number: 1, title: 'Introduction to ResearcherRAG', href: '/guide/01-introduction' },
  { number: 2, title: '5-Stage Workflow Deep Dive', href: '/guide/02-workflow' },
  { number: 3, title: 'PRISMA Configuration Guide', href: '/guide/03-prisma' },
  { number: 4, title: 'RAG System Design Patterns', href: '/guide/04-rag-design' },
  { number: 5, title: 'Case Studies', href: '/guide/05-case-studies' },
  { number: 6, title: 'Troubleshooting & FAQ', href: '/guide/06-troubleshooting' },
  { number: 7, title: 'Advanced Topics', href: '/guide/07-advanced' },
]

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null)
  const pathname = usePathname()

  // Auto-generate TOC from content
  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3')
    const currentChapter = chapters.find(c => pathname?.includes(c.href))

    if (currentChapter && headings.length > 0) {
      const sections = Array.from(headings).map((h) => ({
        title: h.textContent || '',
        id: h.id || h.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
      }))

      // Update chapter with sections
      currentChapter.sections = sections
      setExpandedChapter(currentChapter.number)
    }
  }, [pathname])

  const currentChapterIndex = chapters.findIndex(c => pathname?.includes(c.href))
  const prevChapter = currentChapterIndex > 0 ? chapters[currentChapterIndex - 1] : null
  const nextChapter = currentChapterIndex < chapters.length - 1 ? chapters[currentChapterIndex + 1] : null

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1.5 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                ResearcherRAG
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link href="/chat" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              Chatbot
            </Link>
            <Link href="/resources" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              Resources
            </Link>
            <a href="https://github.com/HosungYou/ResearcherRAG-helper" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <Github className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-[73px] left-0 bottom-0 z-40
            w-72 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
            overflow-y-auto transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <nav className="p-6 space-y-2">
            <Link
              href="/guide"
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/guide'
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Overview
            </Link>

            {chapters.map((chapter) => {
              const isActive = pathname?.includes(chapter.href)
              const isExpanded = expandedChapter === chapter.number

              return (
                <div key={chapter.number}>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setExpandedChapter(isExpanded ? null : chapter.number)}
                      className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                      aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                    <Link
                      href={chapter.href}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="text-gray-500 dark:text-gray-400 mr-2">{chapter.number}.</span>
                      {chapter.title}
                    </Link>
                  </div>

                  {/* Sub-sections (TOC) */}
                  {isExpanded && chapter.sections && chapter.sections.length > 0 && (
                    <div className="ml-10 mt-1 space-y-1">
                      {chapter.sections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className="block px-3 py-1.5 text-xs text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          {section.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              {prevChapter ? (
                <Link
                  href={prevChapter.href}
                  className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Previous</div>
                    <div>{prevChapter.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextChapter ? (
                <Link
                  href={nextChapter.href}
                  className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Next</div>
                    <div>{nextChapter.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
