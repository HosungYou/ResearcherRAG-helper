import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export default function ToolsPage() {
  return (
    <GuideLayout>
      <div className="max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/codebook" className="hover:text-gray-900 hover:underline">Codebook</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Tools & Technologies</span>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-gray-900">🛠️ Tools & Technologies</h1>

        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          Why ResearcherRAG uses specific tools and technologies.
        </p>

        {/* ChromaDB */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">ChromaDB - The Vector Database</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            ChromaDB is a <strong>vector database</strong> - a special kind of database that understands <strong>meaning</strong>, not just exact matches.
            We covered what a vector database is earlier, but why ChromaDB specifically?
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">Why ChromaDB?</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4 list-disc">
              <li><strong>Easy to use:</strong> No complex database setup - just install and run</li>
              <li><strong>Runs locally:</strong> Your data stays on your computer (privacy!)</li>
              <li><strong>Python-friendly:</strong> Integrates seamlessly with research scripts</li>
              <li><strong>Fast semantic search:</strong> Find similar papers in milliseconds</li>
            </ul>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>💡 In ResearcherRAG:</strong>
            </p>
            <p className="text-sm text-gray-700 mb-3">
              ChromaDB stores all your papers as "embeddings" (meaning vectors). When you ask a question, it finds the most relevant papers based on <strong>conceptual similarity</strong>, not keyword matching.
            </p>
            <p className="text-sm text-gray-700">
              <em>Example:</em> Searching "learning outcomes" will also find papers about "educational achievement" and "student performance" - without you specifying those exact terms!
            </p>
          </div>
        </section>

        {/* Claude AI */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Claude AI - The Screening Assistant</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Claude is Anthropic's AI assistant - think of it as your <strong>tireless research assistant</strong> who can read hundreds of papers,
            apply screening criteria, and explain its reasoning.
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">Why Claude for screening?</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4 list-disc">
              <li><strong>Large context window:</strong> Can read entire papers (200,000+ tokens)</li>
              <li><strong>Strong reasoning:</strong> Applies complex inclusion/exclusion criteria accurately</li>
              <li><strong>Explains decisions:</strong> Shows <em>why</em> a paper was included or excluded</li>
              <li><strong>Consistent:</strong> Doesn't get tired or biased like human reviewers can</li>
            </ul>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg mb-6">
            <p className="text-sm text-gray-800 mb-2">
              <strong>⚠️ AI as Assistant, Not Replacement</strong>
            </p>
            <p className="text-sm text-gray-700">
              Claude helps with initial screening and organization, but researchers should always review final decisions. AI accelerates the process; you maintain the quality.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>💡 In ResearcherRAG:</strong>
            </p>
            <p className="text-sm text-gray-700">
              Claude runs the 02_screening and 03_eligibility stages, applying your PRISMA criteria to hundreds of papers in minutes instead of weeks.
            </p>
          </div>
        </section>

        {/* OpenAI */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">OpenAI - The Embedding Engine</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            OpenAI (the company behind ChatGPT) provides the <strong>embedding models</strong> that convert your papers into
            semantic vectors. Think of it as the <strong>translator</strong> that turns text into meaning-coordinates.
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">Why OpenAI embeddings?</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4 list-disc">
              <li><strong>Industry standard:</strong> text-embedding-3-small is fast, accurate, and affordable</li>
              <li><strong>Semantic quality:</strong> Captures nuanced meaning and context</li>
              <li><strong>Multilingual:</strong> Works across languages (useful for international research)</li>
              <li><strong>Well-documented:</strong> Easy to integrate and troubleshoot</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-5 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-3 font-semibold">How embeddings work:</p>
            <div className="flex items-center gap-3 text-sm overflow-x-auto">
              <span className="font-mono bg-gray-100 px-3 py-2 rounded border border-gray-300 whitespace-nowrap">Paper text</span>
              <span className="text-gray-400">→</span>
              <span className="font-mono bg-gray-100 px-3 py-2 rounded border border-gray-300 whitespace-nowrap">OpenAI API</span>
              <span className="text-gray-400">→</span>
              <span className="font-mono bg-gray-100 px-3 py-2 rounded border border-gray-300">[0.23, -0.15, 0.89, ...]</span>
            </div>
            <p className="text-gray-600 text-xs mt-3">
              The vector contains 1536 numbers representing the paper's meaning in "semantic space"
            </p>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>💡 In ResearcherRAG:</strong>
            </p>
            <p className="text-sm text-gray-700">
              Script 04 uses OpenAI to create embeddings for all your papers, then stores them in ChromaDB for fast semantic search during the RAG stage.
            </p>
          </div>
        </section>

        {/* GitHub */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">GitHub - The Code Repository</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            GitHub is where we store and share code. Think of it as <strong>Google Drive for programmers</strong> - but with
            powerful features like version history, collaboration, and automatic backups.
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">Why GitHub?</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4 list-disc">
              <li><strong>Version control:</strong> Every change is tracked - you can go back to any previous version</li>
              <li><strong>Collaboration:</strong> Multiple researchers can work on the same project</li>
              <li><strong>Open source:</strong> Share your methods with the research community</li>
              <li><strong>Documentation:</strong> README files, wikis, and issue tracking built-in</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-5 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-3 font-semibold">Key GitHub concepts:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Repository (repo):</strong> A project folder containing all files and history</li>
              <li><strong>Commit:</strong> A saved snapshot of your changes (like "Save Version")</li>
              <li><strong>Clone:</strong> Download a copy of a repository to your computer</li>
              <li><strong>Fork:</strong> Create your own copy to customize</li>
              <li><strong>Pull:</strong> Download latest updates from the repository</li>
            </ul>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>💡 In ResearcherRAG:</strong>
            </p>
            <p className="text-sm text-gray-700">
              The ResearcherRAG code lives on GitHub at{' '}
              <code className="bg-white px-2 py-1 rounded border border-gray-300 font-mono text-xs">github.com/HosungYou/researcherRAG</code>.
              You clone it to your computer, customize for your research, and can contribute improvements back to the community.
            </p>
          </div>
        </section>

        {/* Git */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Git - The Version Control System</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Git is the <strong>underlying technology</strong> that powers GitHub. While GitHub is the website, Git is the
            tool that tracks changes. Think: Git = the engine, GitHub = the car.
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">Why Git?</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4 list-disc">
              <li><strong>Time machine:</strong> Go back to any previous version of your code</li>
              <li><strong>Safe experimentation:</strong> Try changes in "branches" without breaking your main code</li>
              <li><strong>Accountability:</strong> See who changed what and when</li>
              <li><strong>Industry standard:</strong> Used by virtually all software developers</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-5 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-3 font-semibold">Basic Git workflow:</p>
            <div className="space-y-3 text-sm font-mono">
              <div className="bg-gray-900 text-green-400 p-3 rounded">
                <code>git clone [repository-url]</code>
                <p className="text-gray-500 mt-1 text-xs"># Download project</p>
              </div>
              <div className="bg-gray-900 text-green-400 p-3 rounded">
                <code>git pull</code>
                <p className="text-gray-500 mt-1 text-xs"># Get latest updates</p>
              </div>
              <div className="bg-gray-900 text-green-400 p-3 rounded">
                <code>git add .</code>
                <p className="text-gray-500 mt-1 text-xs"># Stage your changes</p>
              </div>
              <div className="bg-gray-900 text-green-400 p-3 rounded">
                <code>git commit -m "message"</code>
                <p className="text-gray-500 mt-1 text-xs"># Save snapshot</p>
              </div>
              <div className="bg-gray-900 text-green-400 p-3 rounded">
                <code>git push</code>
                <p className="text-gray-500 mt-1 text-xs"># Upload to GitHub</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>⚠️ For researchers:</strong>
            </p>
            <p className="text-sm text-gray-700">
              You don't need to master Git to use ResearcherRAG! Basic commands (clone, pull) are enough to get started. Think of it like using Word - you don't need to know how spell-check works internally.
            </p>
          </div>
        </section>

        {/* Python Libraries */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Python Libraries (Packages)</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Python libraries are <strong>pre-built tools</strong> that add functionality to Python. Think of them as
            <strong> specialized kitchen appliances</strong> - you don't build a blender from scratch, you just use one!
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">Key libraries in ResearcherRAG:</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4 list-disc">
              <li><strong>anthropic:</strong> Communicates with Claude AI</li>
              <li><strong>openai:</strong> Creates semantic embeddings</li>
              <li><strong>chromadb:</strong> Vector database for semantic search</li>
              <li><strong>requests:</strong> Fetches data from academic APIs</li>
              <li><strong>pandas:</strong> Organizes data in tables (like Excel, but in Python)</li>
              <li><strong>python-dotenv:</strong> Reads API keys from .env files</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-5 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-3 font-semibold">Installing libraries:</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm font-mono">
pip install anthropic openai chromadb
            </pre>
            <p className="text-gray-600 text-sm mt-3">
              This command downloads and installs all necessary tools automatically!
            </p>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>💡 In ResearcherRAG:</strong>
            </p>
            <p className="text-sm text-gray-700">
              All required libraries are listed in{' '}
              <code className="bg-white px-2 py-1 rounded border border-gray-300 font-mono text-xs">requirements.txt</code>.
              Just run{' '}
              <code className="bg-white px-2 py-1 rounded border border-gray-300 font-mono text-xs">pip install -r requirements.txt</code>
              {' '}and everything installs automatically!
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-300">
          <Link href="/codebook/file-formats" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
            ← Previous: File Formats
          </Link>
          <Link href="/codebook/scripts-workflow" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
            Next: Scripts Workflow →
          </Link>
        </div>

      </div>
    </GuideLayout>
  )
}
