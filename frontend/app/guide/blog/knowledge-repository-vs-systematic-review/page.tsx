import { promises as fs } from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'
import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export default async function BlogPostPage() {
  // Read the markdown file
  const filePath = path.join(process.cwd(), 'app/guide/blog/knowledge-repository-vs-systematic-review/knowledge-repository-vs-systematic-review.md')
  const fileContents = await fs.readFile(filePath, 'utf8')

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(fileContents)
  const contentHtml = processedContent.toString()

  return (
    <GuideLayout>
      <div className="space-y-6">
        {/* Back to Blog */}
        <Link
          href="/guide/blog"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <header className="border-b border-gray-200 pb-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <time dateTime="2024-10-24">
              October 24, 2024
            </time>
            <span>•</span>
            <span>12 min read</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {['AI-PRISMA', 'Workflow', 'Tutorial', 'Decision Framework'].map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article
          className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-blue-600 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8 mt-12">
          <Link
            href="/guide/blog"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            ← Back to all posts
          </Link>
        </footer>
      </div>
    </GuideLayout>
  )
}

export async function generateMetadata() {
  return {
    title: 'Knowledge Repository vs. Systematic Review | ScholaRAG Blog',
    description: 'A comprehensive guide to choosing between Knowledge Repository and Systematic Review workflows in ScholaRAG.',
  }
}
