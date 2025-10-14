import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export default function CodebookPage() {
  return (
    <GuideLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Codebook</h1>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-6 rounded-r-lg mb-8">
          <p className="text-lg mb-4 text-gray-900">
            <strong>ResearcherRAG Knowledge Base for Beginners</strong>
          </p>
          <p className="text-gray-700 leading-relaxed">
            This section is designed for researchers with <strong>no programming experience</strong>.
            We explain fundamental concepts, file formats, and technologies in plain language.
            Think of this as a <strong>reference dictionary</strong> you can search anytime using{' '}
            <kbd className="bg-white px-2 py-1 rounded border border-gray-300 text-xs font-mono">⌘K</kbd>.
          </p>
        </div>

        <div className="bg-gray-100 border border-gray-300 p-5 mb-10 rounded-lg">
          <p className="text-sm text-gray-800 mb-2">
            <strong>How is Codebook different from Chapters 1-7?</strong>
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• <strong>Chapters 1-7</strong>: "How to use ResearcherRAG" (Step-by-step workflow)</li>
            <li>• <strong>Codebook</strong>: "What is this and why does it exist?" (Foundational knowledge)</li>
          </ul>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Fundamentals Card */}
          <Link
            href="/codebook/fundamentals"
            className="block border-2 border-gray-300 rounded-lg p-6 hover:border-gray-900 hover:shadow-lg transition-all group bg-white"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">🌱</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-black">
                  Fundamentals
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  Core concepts for absolute beginners
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• What is a Script?</li>
                  <li>• What is Python?</li>
                  <li>• What is Terminal?</li>
                  <li>• What is an API?</li>
                  <li>• What is a Vector Database?</li>
                  <li>• What is RAG?</li>
                  <li>• What is PRISMA 2020?</li>
                </ul>
              </div>
            </div>
          </Link>

          {/* File Formats Card */}
          <Link
            href="/codebook/file-formats"
            className="block border-2 border-gray-300 rounded-lg p-6 hover:border-gray-900 hover:shadow-lg transition-all group bg-white"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">📄</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-black">
                  File Formats
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  Understanding different file types
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• YAML files (.yaml)</li>
                  <li>• JSON files (.json)</li>
                  <li>• Markdown files (.md)</li>
                  <li>• Python files (.py)</li>
                  <li>• Environment files (.env)</li>
                </ul>
              </div>
            </div>
          </Link>

          {/* Tools & Technologies Card */}
          <Link
            href="/codebook/tools"
            className="block border-2 border-gray-300 rounded-lg p-6 hover:border-gray-900 hover:shadow-lg transition-all group bg-white"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">🛠️</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-black">
                  Tools & Technologies
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  Why we use specific tools
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• ChromaDB</li>
                  <li>• Claude AI</li>
                  <li>• OpenAI Embeddings</li>
                  <li>• GitHub & Git</li>
                  <li>• Python Libraries</li>
                </ul>
              </div>
            </div>
          </Link>

          {/* Scripts Workflow Card */}
          <Link
            href="/codebook/scripts-workflow"
            className="block border-2 border-gray-300 rounded-lg p-6 hover:border-gray-900 hover:shadow-lg transition-all group bg-white"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">🔄</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-black">
                  Scripts Workflow
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  Why scripts run in this order
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Data dependency chain</li>
                  <li>• Pipeline visualization</li>
                  <li>• Script-by-script breakdown</li>
                  <li>• Common errors explained</li>
                </ul>
              </div>
            </div>
          </Link>

        </div>

        {/* Bottom Note */}
        <div className="border-t border-gray-300 pt-6 mt-8">
          <p className="text-sm text-gray-600">
            <strong>💡 Tip:</strong> Use <kbd className="bg-white px-2 py-1 rounded border border-gray-300 text-xs font-mono">⌘K</kbd> to quickly search
            for any concept across all Codebook pages.
          </p>
        </div>

      </div>
    </GuideLayout>
  )
}
