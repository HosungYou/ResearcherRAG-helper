import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export default function BlogIndexPage() {
  const posts = [
    {
      title: 'Knowledge Repository vs. Systematic Review: Which ScholaRAG Workflow is Right for You?',
      slug: 'knowledge-repository-vs-systematic-review',
      date: '2024-10-24',
      description: 'A comprehensive guide to choosing between Knowledge Repository (50/20 thresholds) and Systematic Review (90/10 thresholds) workflows in ScholaRAG.',
      readTime: '12 min read',
      tags: ['AI-PRISMA', 'Workflow', 'Tutorial', 'Decision Framework']
    }
  ]

  return (
    <GuideLayout>
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold mb-4">ScholaRAG Blog</h1>
          <p className="text-lg text-gray-600">
            In-depth guides, case studies, and best practices for automated systematic literature reviews.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Link href={`/guide/blog/${post.slug}`} className="group">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-gray-700 mb-4">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </GuideLayout>
  )
}
