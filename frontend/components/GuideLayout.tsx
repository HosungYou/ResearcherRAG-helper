'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Menu, X, ChevronRight } from 'lucide-react'

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

const chapters: Chapter[] = [
  { number: 1, title: 'Introduction', href: '/guide/01-introduction' },
  { number: 2, title: 'Getting Started', href: '/guide/02-getting-started' },
  { number: 3, title: 'Core Concepts', href: '/guide/03-core-concepts' },
  { number: 4, title: 'Implementation Guide', href: '/guide/04-implementation' },
  { number: 5, title: 'Advanced Topics', href: '/guide/05-advanced' },
  { number: 6, title: 'Best Practices', href: '/guide/06-best-practices' },
  { number: 7, title: 'Troubleshooting', href: '/guide/07-troubleshooting' },
]

export default function GuideLayout({ children }: { children: React.ReactNode }) {
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
              RAG.lab
            </Link>
            <Link href="/guide" className="text-sm text-muted hover:text-foreground hidden md:block">
              Documentation
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/chat" className="text-sm text-muted hover:text-foreground hidden md:block">
              Chatbot
            </Link>
            <a
              href="https://github.com/HosungYou/ResearcherRAG"
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
