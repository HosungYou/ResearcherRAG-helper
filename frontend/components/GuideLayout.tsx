'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Menu, X, ChevronRight } from 'lucide-react'
import SearchBar from './SearchBar'

interface Chapter {
  number: number
  title: string
  href: string
}

interface TOCItem {
  id: string
  text: string
  level: number
}

interface GuideLayoutProps {
  children: React.ReactNode
  githubUrl?: string
  githubLabel?: string
}

const chapters: Chapter[] = [
  { number: 1, title: 'Introduction', href: '/guide/01-introduction' },
  { number: 2, title: 'Getting Started', href: '/guide/02-getting-started' },
  { number: 3, title: 'Core Concepts', href: '/guide/03-core-concepts' },
  { number: 4, title: 'Implementation Guide', href: '/guide/04-implementation' },
  { number: 5, title: 'Practical Guide', href: '/guide/05-advanced-topics' },
  { number: 6, title: 'Research Conversation', href: '/guide/06-research-conversation' },
  { number: 7, title: 'Documentation & Writing', href: '/guide/07-documentation-writing' },
]

const additionalPages: { title: string; href: string }[] = [
  { title: 'Workflow Map', href: '/guide/workflow-map' },
]

export default function GuideLayout({ children, githubUrl, githubLabel = "View on GitHub" }: GuideLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [tocItems, setTocItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const pathname = usePathname()

  // Extract TOC from content
  useEffect(() => {
    const headings = document.querySelectorAll('article h2, article h3')
    const items: TOCItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent || '',
      level: heading.tagName === 'H2' ? 2 : 3,
    }))
    setTocItems(items)

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66% 0px' }
    )

    headings.forEach((heading) => observer.observe(heading))
    return () => observer.disconnect()
  }, [pathname, children])

  const currentChapterIndex = chapters.findIndex((c) => pathname?.includes(c.href))
  const prevChapter = currentChapterIndex > 0 ? chapters[currentChapterIndex - 1] : null
  const nextChapter = currentChapterIndex < chapters.length - 1 ? chapters[currentChapterIndex + 1] : null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link href="/" className="text-lg font-medium">
              ScholaRAG
            </Link>
            <Link href="/guide" className="text-sm text-muted hover:text-foreground hidden md:block">
              Documentation
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:block flex-1 max-w-md">
              <SearchBar />
            </div>
            <Link href="/chat" className="text-sm text-muted hover:text-foreground hidden md:block">
              Chatbot
            </Link>
            <Link href="/about" className="text-sm text-muted hover:text-foreground hidden md:block">
              About
            </Link>
            <a
              href="https://github.com/HosungYou/ScholaRAG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-[1800px] mx-auto flex">
        {/* Left Sidebar - Chapter TOC */}
        <aside
          className={`
            fixed lg:sticky top-16 bottom-0 z-40 w-64
            border-r border-border bg-background
            overflow-y-auto transition-transform
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <nav className="p-6 space-y-1">
            <Link
              href="/guide"
              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                pathname === '/guide'
                  ? 'bg-gray-100 font-medium'
                  : 'text-muted hover:bg-gray-50 hover:text-foreground'
              }`}
            >
              Overview
            </Link>
            {chapters.map((chapter) => {
              const isActive = pathname?.includes(chapter.href)
              return (
                <Link
                  key={chapter.number}
                  href={chapter.href}
                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive
                      ? 'bg-gray-100 font-medium'
                      : 'text-muted hover:bg-gray-50 hover:text-foreground'
                  }`}
                >
                  <span className="text-muted-foreground mr-2 text-xs">{chapter.number}.</span>
                  {chapter.title}
                </Link>
              )
            })}

            {/* Additional Pages */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              {additionalPages.map((page) => {
                const isActive = pathname === page.href
                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive
                        ? 'bg-gray-100 font-medium'
                        : 'text-muted hover:bg-gray-50 hover:text-foreground'
                    }`}
                  >
                    {page.title}
                  </Link>
                )
              })}
            </div>

            {/* Prompt Library - After additional pages */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                href="/guide/prompt-library"
                className={`block px-3 py-2 text-sm rounded-md transition-colors font-medium ${
                  pathname?.includes('/guide/prompt-library')
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                💡 Prompt Library
              </Link>

              {/* Prompt Library Subsections */}
              <div className="ml-3 mt-1 space-y-1 border-l-2 border-gray-200 pl-3">
                <Link
                  href="/guide/prompt-library/overview"
                  className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                    pathname === '/guide/prompt-library/overview'
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  🔍 Context Scanning
                </Link>
                <Link
                  href="/guide/prompt-library/hypothesis"
                  className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                    pathname === '/guide/prompt-library/hypothesis'
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  🧪 Hypothesis Validation
                </Link>
                <Link
                  href="/guide/prompt-library/statistics"
                  className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                    pathname === '/guide/prompt-library/statistics'
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  📊 Statistical Extraction
                </Link>
                <Link
                  href="/guide/prompt-library/methods"
                  className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                    pathname === '/guide/prompt-library/methods'
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  🔬 Methodology Comparison
                </Link>
                <Link
                  href="/guide/prompt-library/contradictions"
                  className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                    pathname === '/guide/prompt-library/contradictions'
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  ⚡ Contradiction Detection
                </Link>
                <Link
                  href="/guide/prompt-library/policy"
                  className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                    pathname === '/guide/prompt-library/policy'
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  📋 Policy Translation
                </Link>
                <Link
                  href="/guide/prompt-library/grant"
                  className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                    pathname === '/guide/prompt-library/grant'
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  🚀 Future Research Design
                </Link>
              </div>
            </div>

            {/* Codebook - Separate section after all chapters */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                href="/codebook"
                className={`block px-3 py-2 text-sm rounded-md transition-colors font-medium ${
                  pathname === '/codebook'
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                📖 Codebook
              </Link>

              {/* Codebook Subsections */}
              <div className="ml-3 mt-1 space-y-1 border-l-2 border-gray-200 pl-3">
                <Link
                  href="/codebook/fundamentals"
                  className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                    pathname === '/codebook/fundamentals'
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  🌱 Fundamentals
                </Link>
                <Link
                  href="/codebook/file-formats"
                  className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                    pathname === '/codebook/file-formats'
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  📄 File Formats
                </Link>
                <Link
                  href="/codebook/tools"
                  className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                    pathname === '/codebook/tools'
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  🛠️ Tools
                </Link>
                <Link
                  href="/codebook/scripts-workflow"
                  className={`block px-2 py-1.5 text-xs rounded-md transition-colors ${
                    pathname === '/codebook/scripts-workflow'
                      ? 'bg-gray-200 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  🔄 Scripts Workflow
                </Link>
              </div>
            </div>
          </nav>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-5xl mx-auto lg:flex lg:gap-12">
            <article className="flex-1 px-6 py-12 min-w-0">
              {githubUrl && (
                <div className="mb-8 pb-6 border-b border-border flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    This chapter corresponds to code in the researcherRAG repository
                  </div>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary-600 transition-colors group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {githubLabel}
                  </a>
                </div>
              )}
              {children}

              {/* Navigation */}
              {(prevChapter || nextChapter) && (
                <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
                  {prevChapter ? (
                    <Link
                      href={prevChapter.href}
                      className="group flex items-center gap-2 text-sm text-muted hover:text-foreground"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                      <div>
                        <div className="text-xs text-muted-foreground">Previous</div>
                        <div className="font-medium">{prevChapter.title}</div>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextChapter ? (
                    <Link
                      href={nextChapter.href}
                      className="group flex items-center gap-2 text-sm text-muted hover:text-foreground text-right"
                    >
                      <div>
                        <div className="text-xs text-muted-foreground">Next</div>
                        <div className="font-medium">{nextChapter.title}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              )}
            </article>

            {/* Right Sidebar - Page TOC */}
            {tocItems.length > 0 && (
              <aside className="hidden xl:block w-64 py-12 pr-6">
                <div className="sticky top-28">
                  <h3 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wider">
                    On This Page
                  </h3>
                  <nav className="space-y-2">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-xs transition-colors ${
                          item.level === 3 ? 'pl-4' : ''
                        } ${
                          activeId === item.id
                            ? 'text-foreground font-medium'
                            : 'text-muted hover:text-foreground'
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
