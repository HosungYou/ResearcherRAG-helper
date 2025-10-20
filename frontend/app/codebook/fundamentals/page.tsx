import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export default function FundamentalsPage() {
  return (
    <GuideLayout>
      <div className="max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/codebook" className="hover:text-gray-900 hover:underline">Codebook</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Fundamentals</span>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-gray-900">🌱 Fundamentals</h1>

        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          If you've never written code before, start here. We explain the basic building blocks
          of ScholarRAG in simple, non-technical language.
        </p>

        {/* What is a Script? */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What is a "Script"?</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            A <strong>script</strong> is a file containing step-by-step instructions for a computer to follow.
            Think of it like a <strong>recipe</strong>:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg">
              <h3 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <span className="text-2xl">🍰</span>
                Cooking Recipe
              </h3>
              <ol className="text-sm space-y-2 text-gray-700 ml-4 list-decimal">
                <li>Preheat oven to 350°F</li>
                <li>Mix flour and sugar</li>
                <li>Add eggs and butter</li>
                <li>Bake for 30 minutes</li>
              </ol>
            </div>

            <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg">
              <h3 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <span className="text-2xl">💻</span>
                Python Script
              </h3>
              <ol className="text-sm space-y-2 text-gray-700 ml-4 list-decimal">
                <li>Connect to database</li>
                <li>Search for papers</li>
                <li>Filter by year</li>
                <li>Save results to file</li>
              </ol>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            In ScholarRAG, we have <strong>7 scripts</strong> (named{' '}
            <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm border border-gray-300">01_fetch_papers.py</code>{' '}
            through{' '}
            <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm border border-gray-300">07_generate_prisma.py</code>).
            Each script does one specific job in your research workflow.
          </p>
        </section>

        {/* What is Python? */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What is Python?</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>Python</strong> is a programming language - the "language" that scripts are written in.
            Think of it like English is a language for humans; Python is a language for computers.
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">Why Python for research?</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">1. Easy to Read</h3>
                <p className="text-sm text-gray-700">Python looks almost like English. Even non-programmers can understand what code is trying to do.</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">2. Powerful Libraries</h3>
                <p className="text-sm text-gray-700">Has thousands of pre-built tools for AI, data analysis, and scientific computing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">3. Used by Researchers</h3>
                <p className="text-sm text-gray-700">The most popular language in academia - used in biology, psychology, economics, physics.</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">4. Free and Open Source</h3>
                <p className="text-sm text-gray-700">Anyone can download and use Python for free. No licenses or subscriptions needed.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>💡 For ScholarRAG users:</strong>
            </p>
            <p className="text-sm text-gray-700">
              You don't need to learn Python deeply! ScholarRAG scripts are already written.
              You just need to understand <em>what they do</em>, not <em>how they work internally</em>.
            </p>
          </div>
        </section>

        {/* What is Terminal? */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What is Terminal / Command Line?</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The <strong>Terminal</strong> (also called "Command Line" or "Shell") is a text-based way to control your computer.
            Instead of clicking buttons with a mouse, you type commands with your keyboard.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-gray-900">🖱️ GUI (Graphical User Interface)</h3>
              <p className="text-sm text-gray-700 mb-3">What you're used to:</p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                <li>Click folder icons to open them</li>
                <li>Drag files to move them</li>
                <li>Use mouse to navigate</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-gray-900">⌨️ Terminal (Command Line)</h3>
              <p className="text-sm text-gray-700 mb-3">Text-based control:</p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                <li>Type <code className="bg-gray-100 px-1 rounded text-xs font-mono border border-gray-300">cd folder</code> to open it</li>
                <li>Type <code className="bg-gray-100 px-1 rounded text-xs font-mono border border-gray-300">mv file.txt new/</code> to move</li>
                <li>Use keyboard only</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-3 text-gray-900">Common Terminal commands for ScholarRAG:</p>
            <div className="space-y-3 text-sm font-mono">
              <div className="bg-white border border-gray-300 p-3 rounded">
                <code className="text-gray-900">cd /path/to/project</code>
                <p className="text-gray-600 mt-1 font-sans text-xs">Change directory - move to your project folder</p>
              </div>
              <div className="bg-white border border-gray-300 p-3 rounded">
                <code className="text-gray-900">python 01_fetch_papers.py</code>
                <p className="text-gray-600 mt-1 font-sans text-xs">Run a Python script</p>
              </div>
              <div className="bg-white border border-gray-300 p-3 rounded">
                <code className="text-gray-900">ls</code>
                <p className="text-gray-600 mt-1 font-sans text-xs">List files in current directory</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>⚠️ Don't worry if Terminal feels scary!</strong>
            </p>
            <p className="text-sm text-gray-700">
              You'll only need to type a few simple commands. The documentation provides exact commands to copy and paste.
            </p>
          </div>
        </section>

        {/* What is an API? */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What is an API?</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>API</strong> stands for "Application Programming Interface." Think of it as a <strong>waiter at a restaurant</strong>:
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">👤</div>
                <h3 className="font-semibold text-sm text-gray-900 mb-2">You (Customer)</h3>
                <p className="text-xs text-gray-700">You want food but can't go to the kitchen</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🍽️</div>
                <h3 className="font-semibold text-sm text-gray-900 mb-2">Waiter (API)</h3>
                <p className="text-xs text-gray-700">Takes your order to the kitchen and brings back your food</p>
              </div>
              <div>
                <div className="text-3xl mb-2">👨‍🍳</div>
                <h3 className="font-semibold text-sm text-gray-900 mb-2">Kitchen (Service)</h3>
                <p className="text-xs text-gray-700">Prepares the food but doesn't interact with you directly</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            In ScholarRAG, APIs let your scripts communicate with external services:
          </p>

          <div className="space-y-3 mb-6">
            <div className="border border-gray-300 p-4 rounded-lg bg-white">
              <p className="font-semibold text-sm text-gray-900 mb-1">Anthropic API (Claude AI)</p>
              <p className="text-xs text-gray-600">Your script sends a paper → Claude reads and screens it → Returns include/exclude decision</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg bg-white">
              <p className="font-semibold text-sm text-gray-900 mb-1">OpenAI API</p>
              <p className="text-xs text-gray-600">Your script sends text → OpenAI creates semantic embedding → Returns vector (numbers)</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg bg-white">
              <p className="font-semibold text-sm text-gray-900 mb-1">Semantic Scholar API</p>
              <p className="text-xs text-gray-600">Your script sends search query → Semantic Scholar searches database → Returns matching papers</p>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>🔑 API Keys:</strong>
            </p>
            <p className="text-sm text-gray-700">
              To use an API, you need an <strong>API key</strong> - like a password that identifies you. Keep these secret!
            </p>
          </div>
        </section>

        {/* What is a Vector Database? */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What is a Vector Database?</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            A <strong>vector database</strong> is a special kind of database that stores information as
            <strong> meaning-based coordinates</strong> instead of exact text.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-gray-900">Traditional Database</h3>
              <p className="text-sm text-gray-700 mb-3">Exact matching only:</p>
              <div className="bg-white border border-gray-300 p-3 rounded text-xs font-mono mb-2">
                Search: "machine learning"
              </div>
              <p className="text-xs text-gray-600">Finds: Papers with exact phrase "machine learning"</p>
              <p className="text-xs text-gray-600">Misses: Papers about "neural networks", "deep learning", "AI models"</p>
            </div>

            <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-gray-900">Vector Database</h3>
              <p className="text-sm text-gray-700 mb-3">Meaning-based search:</p>
              <div className="bg-white border border-gray-300 p-3 rounded text-xs font-mono mb-2">
                Search: "machine learning"
              </div>
              <p className="text-xs text-gray-600">Finds: Papers about "machine learning"</p>
              <p className="text-xs text-gray-600">Also finds: "neural networks", "deep learning", "AI models" (similar concepts!)</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-3 text-gray-900">How it works:</p>
            <ol className="space-y-3 text-sm text-gray-700 ml-4 list-decimal">
              <li>
                <strong>Convert to vectors:</strong> Each paper becomes a list of numbers (e.g., [0.23, -0.15, 0.89, ...])
                that represents its meaning in "semantic space"
              </li>
              <li>
                <strong>Store vectors:</strong> The database stores these number lists instead of raw text
              </li>
              <li>
                <strong>Search by similarity:</strong> When you search, it finds papers with <em>similar</em> number patterns,
                which means similar meanings
              </li>
            </ol>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>💡 In ScholarRAG:</strong>
            </p>
            <p className="text-sm text-gray-700">
              We use <strong>ChromaDB</strong> as our vector database. It lets you ask questions in natural language
              and find relevant papers based on meaning, not just keywords.
            </p>
          </div>
        </section>

        {/* What is RAG? */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What is RAG (Retrieval-Augmented Generation)?</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>RAG</strong> combines searching for information with AI-generated answers.
            It's like having a research assistant who can read all your papers and answer questions with citations.
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">The RAG Process (4 steps):</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">Ask a Question</h3>
                  <p className="text-sm text-gray-700">"What learning outcomes were reported in AI tutoring studies?"</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">Retrieval</h3>
                  <p className="text-sm text-gray-700">Search vector database for papers about "learning outcomes" and "AI tutoring"</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">Augmentation</h3>
                  <p className="text-sm text-gray-700">Give Claude AI your question + relevant paper excerpts as context</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">Generation</h3>
                  <p className="text-sm text-gray-700">Claude reads the excerpts and writes an answer with citations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-300 p-5 rounded-lg bg-white">
              <h3 className="font-semibold mb-3 text-gray-900 text-sm">❌ Without RAG:</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Question:</strong> "What effect sizes were reported?"</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Claude AI:</strong> "I don't have access to your specific papers. I can only provide general information."</p>
              <p className="text-xs text-gray-600 italic">No citations, generic answer</p>
            </div>

            <div className="border border-gray-300 p-5 rounded-lg bg-white">
              <h3 className="font-semibold mb-3 text-gray-900 text-sm">✅ With RAG:</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Question:</strong> "What effect sizes were reported?"</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Claude AI:</strong> "Based on your papers: Smith (2023) reported d=0.72 for test scores. Lee (2024) found d=0.58 for retention..."</p>
              <p className="text-xs text-gray-600 italic">Specific to your research, with citations!</p>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>💡 Why RAG is powerful:</strong>
            </p>
            <p className="text-sm text-gray-700">
              AI models like Claude don't "know" about your specific research papers. RAG gives the AI <em>temporary access</em>
              to your papers during each conversation, so it can answer based on <em>your actual data</em>.
            </p>
          </div>
        </section>

        {/* What is PRISMA 2020? */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What is PRISMA 2020?</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>PRISMA 2020</strong> (Preferred Reporting Items for Systematic Reviews and Meta-Analyses)
            is a <strong>quality standard</strong> for conducting systematic literature reviews.
            Think of it as a <strong>checklist and roadmap</strong> that ensures your review is rigorous and transparent.
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">The 4-Stage PRISMA Process:</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">Identification</h3>
                  <p className="text-sm text-gray-700">Search databases and identify all potentially relevant papers (e.g., 5000 papers)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">Screening</h3>
                  <p className="text-sm text-gray-700">Read titles and abstracts, remove clearly irrelevant papers (5000 → 500 papers)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">Eligibility</h3>
                  <p className="text-sm text-gray-700">Read full texts, apply detailed inclusion criteria (500 → 100 papers)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">Included</h3>
                  <p className="text-sm text-gray-700">Final set of papers for your systematic review and meta-analysis (100 papers)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-3 text-gray-900">Why PRISMA matters:</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4 list-disc">
              <li><strong>Reproducibility:</strong> Other researchers can follow your exact process and get the same results</li>
              <li><strong>Transparency:</strong> You document every decision (why papers were included or excluded)</li>
              <li><strong>Publication requirement:</strong> Most journals require PRISMA compliance for systematic reviews</li>
              <li><strong>Quality assurance:</strong> Reduces bias and ensures comprehensive coverage</li>
            </ul>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>💡 In ScholarRAG:</strong>
            </p>
            <p className="text-sm text-gray-700">
              ScholarRAG automates the PRISMA workflow! Scripts 01-03 handle Identification, Screening, and Eligibility.
              Script 07 generates the PRISMA flowchart diagram required for publication.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-300">
          <Link href="/codebook" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
            ← Back to Codebook
          </Link>
          <Link href="/codebook/file-formats" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
            Next: File Formats →
          </Link>
        </div>

      </div>
    </GuideLayout>
  )
}
