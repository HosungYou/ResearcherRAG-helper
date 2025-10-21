import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export default function PracticalTutorialRedirect() {
  return (
    <GuideLayout>
      <div className="max-w-3xl mx-auto py-16 text-center">
        <div className="mb-8">
          <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-4">Content Relocated</h1>

        <p className="text-xl text-muted-foreground mb-8">
          The practical tutorial content has been integrated into the Implementation Guide for a more cohesive learning experience.
        </p>

        <div className="bg-muted/30 border rounded-lg p-6 mb-8">
          <p className="text-lg font-semibold mb-4">📖 What Changed?</p>
          <div className="text-left space-y-3 text-sm">
            <p>
              <strong>Previously:</strong> Chapter 4 (Theory) + Chapter 5 (Tutorial) were separate
            </p>
            <p>
              <strong>Now:</strong> Chapter 4 combines both technical reference and practical examples in one comprehensive guide
            </p>
            <p className="text-muted-foreground">
              This change eliminates redundancy and provides a better learning flow from concepts to implementation to examples.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/guide/04-implementation"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            → Go to Implementation Guide (Chapter 4)
          </Link>

          <div className="text-sm text-muted-foreground">
            <p>Looking for specific content?</p>
            <div className="flex gap-4 justify-center mt-2">
              <Link href="/guide/04-implementation#real-world-example" className="underline hover:text-foreground">
                Real-World Example
              </Link>
              <Link href="/guide/04-implementation#troubleshooting" className="underline hover:text-foreground">
                Troubleshooting
              </Link>
              <Link href="/guide/workflow-map" className="underline hover:text-foreground">
                Workflow Map
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">
            Or continue to the next chapter:
          </p>
          <Link
            href="/guide/06-research-conversation"
            className="inline-block border border-gray-300 px-6 py-3 rounded-lg hover:bg-muted/30 transition-colors"
          >
            Chapter 6: Research Conversation →
          </Link>
        </div>
      </div>
    </GuideLayout>
  )
}
