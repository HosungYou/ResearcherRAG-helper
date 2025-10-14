import GuideLayout from '@/components/GuideLayout'

export default function CodebookPage() {
  return (
    <GuideLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Codebook</h1>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
          <p className="text-lg mb-4">
            <strong>Welcome to the ResearcherRAG Knowledge Base!</strong>
          </p>
          <p className="text-gray-700">
            This section is designed for researchers with <strong>no programming experience</strong>.
            We explain fundamental concepts, file formats, and technologies in plain language.
            Think of this as a <strong>reference dictionary</strong> you can search anytime using <kbd className="bg-white px-2 py-1 rounded border text-xs">⌘K</kbd>.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
          <p className="text-sm text-yellow-900">
            <strong>💡 How is Codebook different from Chapters 1-7?</strong>
          </p>
          <ul className="mt-2 space-y-1 text-sm text-yellow-800">
            <li>→ <strong>Chapters 1-7</strong>: "How to use ResearcherRAG" (Step-by-step workflow)</li>
            <li>→ <strong>Codebook</strong>: "What is this and why does it exist?" (Foundational knowledge)</li>
          </ul>
        </div>

        {/* Quick Navigation */}
        <nav className="bg-gray-50 rounded-lg p-6 mb-12 border">
          <h2 className="text-xl font-semibold mb-4">📑 Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="#fundamentals" className="text-blue-600 hover:text-blue-800 hover:underline">
              🌱 Fundamentals - Core Concepts for Beginners
            </a>
            <a href="#file-formats" className="text-blue-600 hover:text-blue-800 hover:underline">
              📄 File Formats - YAML, JSON, Markdown, Python
            </a>
            <a href="#tools" className="text-blue-600 hover:text-blue-800 hover:underline">
              🛠️ Tools & Technologies - Why we use what we use
            </a>
            <a href="#scripts-workflow" className="text-blue-600 hover:text-blue-800 hover:underline">
              🔄 Scripts Workflow - Why this execution order?
            </a>
          </div>
        </nav>

        {/* FUNDAMENTALS SECTION - 70% */}
        <section id="fundamentals" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-500 pb-2">
            🌱 Fundamentals
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            If you've never written code before, start here. We explain the basic building blocks
            of ResearcherRAG in simple, non-technical language.
          </p>

          {/* What is a Script? */}
          <div className="mb-12 bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">What is a "Script"?</h3>

            <p className="text-lg mb-4">
              A <strong>script</strong> is a file containing step-by-step instructions for a computer to follow.
              Think of it like a <strong>recipe</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-200">
                <h4 className="font-semibold mb-3 text-purple-900 flex items-center">
                  <span className="text-2xl mr-2">🍰</span>
                  Cooking Recipe
                </h4>
                <ol className="text-sm space-y-2 text-purple-800 ml-4">
                  <li>1. Preheat oven to 350°F</li>
                  <li>2. Mix flour and sugar</li>
                  <li>3. Add eggs and butter</li>
                  <li>4. Bake for 30 minutes</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-200">
                <h4 className="font-semibold mb-3 text-blue-900 flex items-center">
                  <span className="text-2xl mr-2">💻</span>
                  Python Script
                </h4>
                <ol className="text-sm space-y-2 text-blue-800 ml-4">
                  <li>1. Connect to database</li>
                  <li>2. Search for papers</li>
                  <li>3. Filter by year</li>
                  <li>4. Save results to file</li>
                </ol>
              </div>
            </div>

            <p className="mb-4 text-gray-700">
              In ResearcherRAG, we have <strong>7 scripts</strong> (named <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">01_fetch_papers.py</code> through <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">07_generate_prisma.py</code>).
              Each script does one specific job in your research workflow.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4 rounded">
              <p className="text-sm text-green-900">
                <strong>✓ Key Point:</strong> You don't need to understand <em>how</em> the script works internally.
                You just need to know <em>what</em> it does and <em>when</em> to run it—like using a microwave without understanding electronics.
              </p>
            </div>
          </div>

          {/* What is Python? */}
          <div className="mb-12 bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">What is Python?</h3>

            <p className="text-lg mb-4">
              <strong>Python</strong> is a programming language—a way for humans to give instructions to computers.
              It's designed to be readable and beginner-friendly.
            </p>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-4 text-blue-900">Why Python for Research?</h4>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">📖</span>
                    <p className="font-semibold text-sm">Easy to Read</p>
                  </div>
                  <p className="text-sm text-gray-700">Looks almost like English sentences, not cryptic symbols</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🔧</span>
                    <p className="font-semibold text-sm">Powerful Libraries</p>
                  </div>
                  <p className="text-sm text-gray-700">Pre-built tools for data analysis, AI, statistics</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🎓</span>
                    <p className="font-semibold text-sm">Used by Researchers</p>
                  </div>
                  <p className="text-sm text-gray-700">Standard in academia and scientific computing</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">💰</span>
                    <p className="font-semibold text-sm">Free & Open Source</p>
                  </div>
                  <p className="text-sm text-gray-700">No expensive software licenses needed</p>
                </div>
              </div>
            </div>

            <p className="mb-4 text-gray-700">
              When you see a file ending in <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">.py</code>
              (like <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">01_fetch_papers.py</code>),
              that's a Python script.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4 rounded">
              <p className="text-sm text-yellow-900">
                <strong>💡 Do I need to learn Python?</strong><br/>
                <span className="font-semibold text-yellow-950">No!</span> ResearcherRAG is designed so you can use it through conversations with Claude Code.
                You describe what you want in plain English, and Claude generates the Python code for you.
              </p>
            </div>
          </div>

          {/* What is Terminal? */}
          <div className="mb-12 bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">What is a Terminal (Command Line)?</h3>

            <p className="text-lg mb-4">
              The <strong>terminal</strong> is a text-based way to communicate with your computer—instead of clicking icons,
              you type commands.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 p-5 rounded-lg border-2 border-gray-300">
                <h4 className="font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🖱️</span>
                  Graphical Interface (GUI)
                </h4>
                <p className="text-sm text-gray-700 mb-3">What you're used to:</p>
                <ul className="text-sm space-y-2 text-gray-600 ml-4">
                  <li>• Click icons with mouse</li>
                  <li>• Drag and drop files</li>
                  <li>• Visual menus and buttons</li>
                </ul>
              </div>

              <div className="bg-gray-900 text-gray-100 p-5 rounded-lg border-2 border-gray-700">
                <h4 className="font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">⌨️</span>
                  Terminal (Text-based)
                </h4>
                <p className="text-sm mb-3">Type commands:</p>
                <pre className="text-xs bg-black p-3 rounded font-mono">
{`$ python script.py
$ ls
$ cd Documents`}
                </pre>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4 rounded">
              <p className="text-sm text-green-900 mb-2">
                <strong>✓ Example:</strong> Running a Python script
              </p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto font-mono">
{`python scripts/01_fetch_papers.py`}
              </pre>
              <p className="text-sm text-green-800 mt-2">
                This tells the computer: "Run the Python program called 01_fetch_papers.py"
              </p>
            </div>

            <p className="text-sm text-gray-600 italic">
              Don't worry—Claude Code will show you exactly what commands to type. You just copy and paste!
            </p>
          </div>

          {/* What is an API? */}
          <div className="mb-12 bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">What is an API?</h3>

            <p className="text-lg mb-4">
              <strong>API</strong> (Application Programming Interface) is like a <strong>waiter in a restaurant</strong>
              who takes your order to the kitchen and brings back food.
            </p>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 my-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-4xl mb-2">👨‍💼</div>
                  <p className="font-semibold text-sm">You</p>
                  <p className="text-xs text-gray-600 mt-1">Make request</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🧑‍🍳</div>
                  <p className="font-semibold text-sm">API (Waiter)</p>
                  <p className="text-xs text-gray-600 mt-1">Delivers request</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🗄️</div>
                  <p className="font-semibold text-sm">Database</p>
                  <p className="text-xs text-gray-600 mt-1">Provides data</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5 my-6">
              <p className="text-sm font-semibold mb-3 text-blue-900">📌 APIs ResearcherRAG uses:</p>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-semibold">Anthropic API</p>
                  <p className="text-gray-700 text-xs">Accesses Claude AI for intelligent PRISMA screening and analysis</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-semibold">OpenAI API</p>
                  <p className="text-gray-700 text-xs">Generates embeddings for semantic search in vector database</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="font-semibold">Semantic Scholar API</p>
                  <p className="text-gray-700 text-xs">Searches millions of academic papers for your research query</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-sm text-yellow-900">
                <strong>🔑 API Keys:</strong> APIs require a "key" (like a password) to use them.
                ResearcherRAG needs keys for Anthropic and OpenAI. You store these securely in a <code className="bg-yellow-100 px-1 rounded">.env</code> file.
              </p>
            </div>
          </div>

          {/* What is a Vector Database? */}
          <div className="mb-12 bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">What is a Vector Database?</h3>

            <p className="text-lg mb-4">
              A <strong>vector database</strong> stores information based on <strong>meaning</strong>, not just exact words.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-red-50 p-5 rounded-lg border-2 border-red-200">
                <h4 className="font-semibold mb-3 text-red-900 flex items-center">
                  <span className="mr-2">❌</span> Traditional Database
                </h4>
                <p className="text-sm mb-3 text-red-800">Exact word matching only</p>
                <div className="bg-white p-3 rounded text-xs">
                  <p className="mb-2"><strong>Search:</strong> "AI chatbot"</p>
                  <p className="text-green-700">✓ Finds: "AI chatbot in education"</p>
                  <p className="text-red-700">✗ Misses: "Conversational agent"</p>
                  <p className="text-gray-500 mt-2 italic">Same meaning, different words = not found</p>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border-2 border-green-200">
                <h4 className="font-semibold mb-3 text-green-900 flex items-center">
                  <span className="mr-2">✓</span> Vector Database
                </h4>
                <p className="text-sm mb-3 text-green-800">Meaning-based matching</p>
                <div className="bg-white p-3 rounded text-xs">
                  <p className="mb-2"><strong>Search:</strong> "AI chatbot"</p>
                  <p className="text-green-700">✓ Finds: "AI chatbot in education"</p>
                  <p className="text-green-700">✓ Finds: "Conversational agent"</p>
                  <p className="text-gray-500 mt-2 italic">Understands they mean the same!</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>ResearcherRAG uses ChromaDB</strong>—a vector database that enables semantic search.
              Find papers by meaning, not just keywords.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-sm text-green-900">
                <strong>✓ Why this matters:</strong> Ask "What are the main findings?" and the system finds
                relevant sections even without those exact words.
              </p>
            </div>
          </div>

          {/* What is RAG? */}
          <div className="mb-12 bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">What is RAG?</h3>

            <p className="text-lg mb-4">
              <strong>RAG</strong> (Retrieval-Augmented Generation) combines searching your documents with AI
              to give accurate, cited answers.
            </p>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-4 text-center text-purple-900">How RAG Works</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-xs mb-1">1️⃣ You Ask</p>
                  <p className="text-xs italic">"What methodologies do studies use?"</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-xs mb-1">2️⃣ Retrieval</p>
                  <p className="text-xs">Search 45 papers, find 5 most relevant sections</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-semibold text-xs mb-1">3️⃣ Augmentation</p>
                  <p className="text-xs">Give those 5 sections to Claude AI as context</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-purple-500">
                  <p className="font-semibold text-xs mb-1">4️⃣ Generation</p>
                  <p className="text-xs">Claude writes answer based ONLY on those sections, with citations</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-sm text-blue-900">
                <strong>📚 Simple analogy:</strong><br/>
                <strong>Without RAG:</strong> Claude gives general advice<br/>
                <strong>With RAG:</strong> Claude is a research assistant who read all 45 of your papers and can quote them
              </p>
            </div>
          </div>

          {/* What is PRISMA? */}
          <div className="mb-12 bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">What is PRISMA 2020?</h3>

            <p className="text-lg mb-4">
              <strong>PRISMA</strong> guidelines ensure your literature review is systematic, transparent, and publishable.
            </p>

            <div className="my-6 space-y-3">
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <span className="font-bold text-blue-600 mr-3 text-lg">1.</span>
                <div>
                  <p className="font-semibold text-sm">Identification</p>
                  <p className="text-xs text-gray-700">Search databases (500+ papers)</p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <span className="font-bold text-blue-600 mr-3 text-lg">2.</span>
                <div>
                  <p className="font-semibold text-sm">Screening</p>
                  <p className="text-xs text-gray-700">Remove duplicates, irrelevant papers (→ 75 papers)</p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <span className="font-bold text-blue-600 mr-3 text-lg">3.</span>
                <div>
                  <p className="font-semibold text-sm">Eligibility</p>
                  <p className="text-xs text-gray-700">Get PDFs, assess quality (→ 45 papers)</p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <span className="font-bold text-blue-600 mr-3 text-lg">4.</span>
                <div>
                  <p className="font-semibold text-sm">Included</p>
                  <p className="text-xs text-gray-700">Analyze final high-quality papers</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-sm text-green-900">
                <strong>✓ Why ResearcherRAG uses PRISMA:</strong> Academic journals require systematic reviews
                to follow PRISMA guidelines for publication.
              </p>
            </div>
          </div>

        </section>

        {/* FILE FORMATS SECTION */}
        <section id="file-formats" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-purple-500 pb-2">
            📄 File Formats Explained
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            ResearcherRAG uses different file formats for different purposes. Here's what each one is and why it exists.
          </p>

          {/* YAML Files */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">⚙️</span>
              What is a YAML file? (.yaml)
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              YAML stands for "YAML Ain't Markup Language" (yes, it's recursive!). Think of it as a <strong>configuration checklist</strong>
              - like filling out a form where you set all your preferences.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="font-semibold mb-2">🎯 Why YAML for configuration?</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Human-readable</strong>: Easy to read and edit, even without programming knowledge</li>
                <li><strong>Hierarchical</strong>: Shows relationships clearly with indentation (like an outline)</li>
                <li><strong>No mess</strong>: No curly braces {`{}`} or commas - just clean text</li>
                <li><strong>Standard</strong>: Used across research tools, AI systems, and web services</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Example: config.yaml</strong></p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Research Project Settings
project_name: "AI in Education Meta-Analysis"
research_question: "How effective is AI tutoring?"

# Which databases to search
databases:
  - semantic_scholar
  - pubmed
  - eric

# AI settings
ai_model: "claude-3-5-sonnet"
max_papers: 5000`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="font-semibold mb-2">⚠️ Important: Indentation matters!</p>
              <p className="text-sm">YAML uses spaces (not tabs) for indentation. Two spaces = one level deeper. If spacing is wrong, the file won't work.</p>
            </div>
          </div>

          {/* JSON Files */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">📦</span>
              What is a JSON file? (.json)
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              JSON stands for "JavaScript Object Notation". Think of it as a <strong>structured storage container</strong>
              - like organizing your research data in labeled boxes within boxes.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="font-semibold mb-2">🎯 Why JSON for data?</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Structured</strong>: Data organized in key-value pairs (like a dictionary)</li>
                <li><strong>Machine-readable</strong>: Easy for programs to read and write</li>
                <li><strong>Flexible</strong>: Can store numbers, text, lists, and nested data</li>
                <li><strong>Universal</strong>: Works across all programming languages and platforms</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Example: papers.json</strong></p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`{
  "papers": [
    {
      "title": "AI Tutoring Systems: A Meta-Analysis",
      "authors": ["Smith, J.", "Lee, K."],
      "year": 2023,
      "doi": "10.1234/example",
      "citations": 45,
      "screened": true,
      "included": false,
      "exclusion_reason": "Not RCT design"
    }
  ],
  "total_count": 503,
  "last_updated": "2024-01-15"
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="font-semibold mb-2">💡 In ResearcherRAG:</p>
              <p className="text-sm">JSON files store your fetched papers, screening results, and analysis outputs. They're like your research filing cabinet - organized and searchable.</p>
            </div>
          </div>

          {/* Markdown Files */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">📝</span>
              What is a Markdown file? (.md)
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Markdown is a <strong>simple formatting language</strong> - like writing with basic formatting shortcuts.
              Think of it as "Microsoft Word, but using symbols instead of toolbar buttons."
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="font-semibold mb-2">🎯 Why Markdown for documentation?</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Simple syntax</strong>: # = heading, ** = bold, - = bullet point</li>
                <li><strong>Plain text</strong>: Works everywhere, never becomes outdated</li>
                <li><strong>Version control friendly</strong>: Easy to track changes in Git</li>
                <li><strong>Converts easily</strong>: Can become PDF, HTML, Word docs</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2"><strong>You write this:</strong></p>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Methods

## Inclusion Criteria

- Published 2020-2024
- **RCT design**
- Sample size > 30

> Important: Must report
> effect sizes.`}
                </pre>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                <p className="text-sm text-gray-600 mb-2"><strong>It becomes this:</strong></p>
                <div className="prose">
                  <h1 className="text-2xl font-bold mb-2">Methods</h1>
                  <h2 className="text-xl font-semibold mb-2">Inclusion Criteria</h2>
                  <ul className="list-disc ml-6 mb-2">
                    <li>Published 2020-2024</li>
                    <li><strong>RCT design</strong></li>
                    <li>Sample size &gt; 30</li>
                  </ul>
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                    Important: Must report effect sizes.
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="font-semibold mb-2">💡 In ResearcherRAG:</p>
              <p className="text-sm">All prompts (01-07.md) and documentation are written in Markdown. It's the universal language for research documentation and GitHub.</p>
            </div>
          </div>

          {/* Python Files */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">🐍</span>
              What is a Python file? (.py)
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              A .py file contains <strong>Python code</strong> - the actual instructions that make things happen.
              We covered Python earlier, but here's what the <strong>file itself</strong> represents.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="font-semibold mb-2">🎯 Structure of a Python script:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Imports</strong>: Loading tools and libraries (like importing cookware)</li>
                <li><strong>Configuration</strong>: Setting up variables and settings</li>
                <li><strong>Functions</strong>: Reusable blocks of code (like sub-recipes)</li>
                <li><strong>Main execution</strong>: The actual work that runs when you execute the script</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Example: 01_fetch_papers.py (simplified)</strong></p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# 1. IMPORTS - Load tools
import requests
from datetime import datetime

# 2. CONFIGURATION - Settings
API_KEY = "your-key-here"
MAX_PAPERS = 5000

# 3. FUNCTIONS - Reusable logic
def fetch_from_database(query):
    """Fetch papers from API"""
    # ... code here ...
    return papers

# 4. MAIN EXECUTION - What runs
if __name__ == "__main__":
    results = fetch_from_database("AI tutoring")
    print(f"Found {len(results)} papers")`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="font-semibold mb-2">⚠️ Don't edit Python files unless:</p>
              <p className="text-sm">You know what you're doing! Changing code can break the entire pipeline. Start with configuration files (YAML) instead.</p>
            </div>
          </div>

          {/* .env Files */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">🔒</span>
              What is a .env file? (Environment Variables)
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              A .env file stores <strong>secret information</strong> like passwords and API keys.
              Think of it as your <strong>personal keychain</strong> - you don't share it with anyone!
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <p className="font-semibold mb-2">🚨 CRITICAL: Security Rules</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Never share</strong>: .env files contain sensitive secrets</li>
                <li><strong>Never commit to Git</strong>: These should NOT be uploaded to GitHub</li>
                <li><strong>Use .env.example</strong>: Share templates without real keys</li>
                <li><strong>Regenerate if exposed</strong>: If leaked, create new API keys immediately</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2"><strong>❌ Bad: .env (real secrets)</strong></p>
                <pre className="bg-gray-900 text-red-400 p-4 rounded overflow-x-auto text-sm">
{`# NEVER SHARE THIS FILE!
ANTHROPIC_API_KEY=sk-ant-abc123...
OPENAI_API_KEY=sk-proj-xyz789...
DATABASE_PASSWORD=MySecret123`}
                </pre>
                <p className="text-red-600 text-sm mt-2">⚠️ Do NOT upload to GitHub!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2"><strong>✅ Good: .env.example (template)</strong></p>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`# Share this template safely
ANTHROPIC_API_KEY=your-key-here
OPENAI_API_KEY=your-key-here
DATABASE_PASSWORD=your-password-here`}
                </pre>
                <p className="text-green-600 text-sm mt-2">✅ Safe to share as template</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold mb-2">💡 How it works:</p>
              <ol className="list-decimal ml-6 space-y-1 text-sm">
                <li>Create <code className="bg-gray-200 px-1 rounded">.env</code> file in project root</li>
                <li>Add your API keys: <code className="bg-gray-200 px-1 rounded">ANTHROPIC_API_KEY=sk-ant-...</code></li>
                <li>Python scripts read these variables automatically</li>
                <li>Keys stay private, code stays shareable</li>
              </ol>
            </div>
          </div>
        </section>

        {/* TOOLS & TECHNOLOGIES */}
        <section id="tools" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-green-500 pb-2">
            🛠️ Tools & Technologies
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            Why ResearcherRAG uses specific tools and technologies.
          </p>

          {/* ChromaDB */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">🗄️</span>
              ChromaDB - The Vector Database
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              ChromaDB is a <strong>vector database</strong> - a special kind of database that understands <strong>meaning</strong>, not just exact matches.
              We covered what a vector database is earlier, but why ChromaDB specifically?
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="font-semibold mb-2">🎯 Why ChromaDB?</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Easy to use</strong>: No complex database setup - just install and run</li>
                <li><strong>Runs locally</strong>: Your data stays on your computer (privacy!)</li>
                <li><strong>Python-friendly</strong>: Integrates seamlessly with research scripts</li>
                <li><strong>Fast semantic search</strong>: Find similar papers in milliseconds</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="font-semibold mb-2">💡 In ResearcherRAG:</p>
              <p className="text-sm mb-2">ChromaDB stores all your papers as "embeddings" (meaning vectors). When you ask a question, it finds the most relevant papers based on <strong>conceptual similarity</strong>, not keyword matching.</p>
              <p className="text-sm">Example: Searching "learning outcomes" will also find papers about "educational achievement" and "student performance" - without you specifying those exact terms!</p>
            </div>
          </div>

          {/* Claude AI */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">🤖</span>
              Claude AI - The Screening Assistant
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Claude is Anthropic's AI assistant - think of it as your <strong>tireless research assistant</strong> who can read hundreds of papers,
              apply screening criteria, and explain its reasoning.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="font-semibold mb-2">🎯 Why Claude for screening?</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Large context window</strong>: Can read entire papers (200,000+ tokens)</li>
                <li><strong>Strong reasoning</strong>: Applies complex inclusion/exclusion criteria accurately</li>
                <li><strong>Explains decisions</strong>: Shows <em>why</em> a paper was included or excluded</li>
                <li><strong>Consistent</strong>: Doesn't get tired or biased like human reviewers can</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="font-semibold mb-2">⚠️ AI as Assistant, Not Replacement</p>
              <p className="text-sm">Claude helps with initial screening and organization, but researchers should always review final decisions. AI accelerates the process; you maintain the quality.</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="font-semibold mb-2">💡 In ResearcherRAG:</p>
              <p className="text-sm">Claude runs the 02_screening and 03_eligibility stages, applying your PRISMA criteria to hundreds of papers in minutes instead of weeks.</p>
            </div>
          </div>

          {/* OpenAI */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">🧠</span>
              OpenAI - The Embedding Engine
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              OpenAI (the company behind ChatGPT) provides the <strong>embedding models</strong> that convert your papers into
              semantic vectors. Think of it as the <strong>translator</strong> that turns text into meaning-coordinates.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="font-semibold mb-2">🎯 Why OpenAI embeddings?</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Industry standard</strong>: text-embedding-3-small is fast, accurate, and affordable</li>
                <li><strong>Semantic quality</strong>: Captures nuanced meaning and context</li>
                <li><strong>Multilingual</strong>: Works across languages (useful for international research)</li>
                <li><strong>Well-documented</strong>: Easy to integrate and troubleshoot</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>How embeddings work:</strong></p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-mono bg-blue-100 px-2 py-1 rounded">Paper text</span>
                  <span>→</span>
                  <span className="font-mono bg-green-100 px-2 py-1 rounded">OpenAI API</span>
                  <span>→</span>
                  <span className="font-mono bg-purple-100 px-2 py-1 rounded">[0.23, -0.15, 0.89, ...]</span>
                </div>
                <p className="text-gray-600 ml-4">The vector contains 1536 numbers representing the paper's meaning in "semantic space"</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="font-semibold mb-2">💡 In ResearcherRAG:</p>
              <p className="text-sm">Script 04 uses OpenAI to create embeddings for all your papers, then stores them in ChromaDB for fast semantic search during the RAG stage.</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">📚</span>
              GitHub - The Code Repository
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              GitHub is where we store and share code. Think of it as <strong>Google Drive for programmers</strong> - but with
              powerful features like version history, collaboration, and automatic backups.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="font-semibold mb-2">🎯 Why GitHub?</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Version control</strong>: Every change is tracked - you can go back to any previous version</li>
                <li><strong>Collaboration</strong>: Multiple researchers can work on the same project</li>
                <li><strong>Open source</strong>: Share your methods with the research community</li>
                <li><strong>Documentation</strong>: README files, wikis, and issue tracking built-in</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Key GitHub concepts:</strong></p>
              <ul className="space-y-2 text-sm">
                <li><strong>Repository (repo)</strong>: A project folder containing all files and history</li>
                <li><strong>Commit</strong>: A saved snapshot of your changes (like "Save Version")</li>
                <li><strong>Clone</strong>: Download a copy of a repository to your computer</li>
                <li><strong>Fork</strong>: Create your own copy to customize</li>
                <li><strong>Pull</strong>: Download latest updates from the repository</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="font-semibold mb-2">💡 In ResearcherRAG:</p>
              <p className="text-sm">The ResearcherRAG code lives on GitHub at <code className="bg-gray-200 px-1 rounded">github.com/HosungYou/researcherRAG</code>. You clone it to your computer, customize for your research, and can contribute improvements back to the community.</p>
            </div>
          </div>

          {/* Git */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">🌳</span>
              Git - The Version Control System
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Git is the <strong>underlying technology</strong> that powers GitHub. While GitHub is the website, Git is the
              tool that tracks changes. Think: Git = the engine, GitHub = the car.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="font-semibold mb-2">🎯 Why Git?</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Time machine</strong>: Go back to any previous version of your code</li>
                <li><strong>Safe experimentation</strong>: Try changes in "branches" without breaking your main code</li>
                <li><strong>Accountability</strong>: See who changed what and when</li>
                <li><strong>Industry standard</strong>: Used by virtually all software developers</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Basic Git workflow:</strong></p>
              <div className="space-y-2 text-sm font-mono bg-gray-900 text-green-400 p-4 rounded">
                <div>git clone [repository-url]    <span className="text-gray-500"># Download project</span></div>
                <div>git pull                       <span className="text-gray-500"># Get latest updates</span></div>
                <div>git add .                      <span className="text-gray-500"># Stage your changes</span></div>
                <div>git commit -m "message"        <span className="text-gray-500"># Save snapshot</span></div>
                <div>git push                       <span className="text-gray-500"># Upload to GitHub</span></div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="font-semibold mb-2">⚠️ For researchers:</p>
              <p className="text-sm">You don't need to master Git to use ResearcherRAG! Basic commands (clone, pull) are enough to get started. Think of it like using Word - you don't need to know how spell-check works internally.</p>
            </div>
          </div>

          {/* Python Libraries */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-3xl">📦</span>
              Python Libraries (Packages)
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Python libraries are <strong>pre-built tools</strong> that add functionality to Python. Think of them as
              <strong>specialized kitchen appliances</strong> - you don't build a blender from scratch, you just use one!
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="font-semibold mb-2">🎯 Key libraries in ResearcherRAG:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>anthropic</strong>: Communicates with Claude AI</li>
                <li><strong>openai</strong>: Creates semantic embeddings</li>
                <li><strong>chromadb</strong>: Vector database for semantic search</li>
                <li><strong>requests</strong>: Fetches data from academic APIs</li>
                <li><strong>pandas</strong>: Organizes data in tables (like Excel, but in Python)</li>
                <li><strong>python-dotenv</strong>: Reads API keys from .env files</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Installing libraries:</strong></p>
              <div className="space-y-2">
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm font-mono">
pip install anthropic openai chromadb
                </pre>
                <p className="text-sm text-gray-600">This command downloads and installs all necessary tools automatically!</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="font-semibold mb-2">💡 In ResearcherRAG:</p>
              <p className="text-sm">All required libraries are listed in <code className="bg-gray-200 px-1 rounded">requirements.txt</code>. Just run <code className="bg-gray-200 px-1 rounded">pip install -r requirements.txt</code> and everything installs automatically!</p>
            </div>
          </div>
        </section>

        {/* SCRIPTS WORKFLOW */}
        <section id="scripts-workflow" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-orange-500 pb-2">
            🔄 Scripts Workflow - Why This Order?
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            Understanding why scripts must run in a specific sequence (30% of Codebook content).
          </p>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">🔗</span>
              The Data Dependency Chain
            </h3>
            <p className="text-gray-700 mb-3 leading-relaxed">
              ResearcherRAG's scripts MUST run in order (01 → 02 → 03 → 04 → 05 → 06 → 07) because each script
              <strong> depends on the output of the previous one</strong>. It's like cooking - you can't frost a cake before baking it!
            </p>
            <p className="text-gray-700 leading-relaxed">
              Think of it as an <strong>assembly line</strong>: raw materials → processing → quality check → packaging → shipping.
              Each stage transforms the output of the previous stage.
            </p>
          </div>

          {/* Visual Pipeline */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8 overflow-x-auto">
            <p className="text-sm text-gray-600 mb-4 font-semibold">Complete ResearcherRAG Pipeline:</p>
            <pre className="text-xs leading-relaxed">
{`┌────────────────────────────────────────────────────────────────────────┐
│                         RESEARCHERRAG PIPELINE                         │
│                  Data flows DOWN through each stage                    │
└────────────────────────────────────────────────────────────────────────┘

   📝 config.yaml + .env
         │
         ├─────────────────────────────────────────────────┐
         │                                                 │
         ▼                                                 ▼
┌─────────────────────┐                          ┌──────────────────┐
│  01_fetch_papers    │                          │   Your research  │
│  🔍 Search & Fetch  │                          │   question &     │
│                     │                          │   criteria       │
│  Queries databases  │◄─────────────────────────┤                  │
│  Downloads metadata │                          └──────────────────┘
└──────────┬──────────┘
           │
           │ papers.json (500-5000 papers)
           │ [title, authors, abstract, year, DOI...]
           │
           ▼
┌─────────────────────┐
│  02_title_abstract  │
│  📋 Initial Screen  │
│                     │
│  Claude reads:      │
│  - Title            │◄──── Needs: papers.json
│  - Abstract         │      Your PRISMA criteria
│  Fast filtering     │
└──────────┬──────────┘
           │
           │ screened.json (100-500 papers)
           │ [included=true/false, reason...]
           │
           ▼
┌─────────────────────┐
│  03_full_text       │
│  📄 Deep Screen     │
│                     │
│  Claude reads:      │
│  - Full paper PDF   │◄──── Needs: screened.json
│  - Methods section  │      (only included=true)
│  Detailed analysis  │
└──────────┬──────────┘
           │
           │ eligible.json (30-100 papers)
           │ [final_included=true, quality_score...]
           │
           ▼
┌─────────────────────┐
│  04_embeddings      │
│  🧠 Vectorize       │
│                     │
│  OpenAI converts:   │
│  Text → Vectors     │◄──── Needs: eligible.json
│  Stores in ChromaDB │      (only final papers)
└──────────┬──────────┘
           │
           │ ChromaDB collection
           │ [1536-dimensional vectors for each paper]
           │
           ▼
┌─────────────────────┐
│  05_rag_query       │
│  💬 Interactive Q&A │
│                     │
│  Your questions →   │
│  Semantic search →  │◄──── Needs: ChromaDB populated
│  Claude answers     │      with paper vectors
│  with evidence      │
└──────────┬──────────┘
           │
           │ insights.json
           │ [queries, answers, citations...]
           │
           ▼
┌─────────────────────┐
│  06_synthesis       │
│  📊 Meta-Analysis   │
│                     │
│  Claude analyzes:   │
│  - Patterns         │◄──── Needs: insights.json
│  - Effect sizes     │      eligible.json
│  - Gaps             │
└──────────┬──────────┘
           │
           │ synthesis.json
           │ [themes, statistics, recommendations...]
           │
           ▼
┌─────────────────────┐
│  07_documentation   │
│  📝 Write Report    │
│                     │
│  Generates:         │
│  - PRISMA flowchart │◄──── Needs: ALL previous outputs
│  - Methods section  │      (papers → screened →
│  - Results tables   │       eligible → synthesis)
│  - Bibliography     │
└─────────────────────┘
           │
           │ Final outputs/
           │ ├── prisma_flowchart.md
           │ ├── methods_section.md
           │ ├── results_tables.md
           │ └── bibliography.bib
           │
           ▼
     Publication Ready! 🎉`}
            </pre>
          </div>

          {/* Script-by-Script Breakdown */}
          <div className="space-y-8">

            {/* Script 01 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">01</span>
                Fetch Papers - The Foundation
              </h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">🎯 What it does:</p>
                <p className="text-sm text-gray-700">Searches academic databases (Semantic Scholar, PubMed, ERIC, etc.) and downloads paper metadata (title, authors, abstract, DOI, year).</p>
              </div>

              <div className="bg-white border-2 border-blue-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📥 Inputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">config.yaml</code> - Research question, databases, date range</li>
                  <li><code className="bg-gray-100 px-1 rounded">.env</code> - API keys for database access</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📤 Outputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">data/papers.json</code> - All fetched papers with metadata</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                <p className="font-semibold text-sm mb-1">❓ Why run this FIRST?</p>
                <p className="text-sm text-gray-700">You need papers before you can screen them! This creates the initial dataset. Without papers.json, scripts 02-07 have nothing to work with.</p>
              </div>
            </div>

            {/* Script 02 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">02</span>
                Title/Abstract Screening - Quick Filter
              </h3>

              <div className="bg-green-50 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">🎯 What it does:</p>
                <p className="text-sm text-gray-700">Claude AI reads each paper's title and abstract, applies your PRISMA inclusion/exclusion criteria, and marks papers as included/excluded with reasoning.</p>
              </div>

              <div className="bg-white border-2 border-green-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📥 Inputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">data/papers.json</code> - From script 01</li>
                  <li><code className="bg-gray-100 px-1 rounded">config.yaml</code> - PRISMA screening criteria</li>
                  <li><code className="bg-gray-100 px-1 rounded">.env</code> - Anthropic API key for Claude</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-green-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📤 Outputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">data/screened.json</code> - Papers with screening decisions</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                <p className="font-semibold text-sm mb-1">❓ Why run this AFTER 01?</p>
                <p className="text-sm text-gray-700">Depends on papers.json existing. Can't screen papers you haven't fetched yet! This reduces 5000 papers to ~500 relevant ones quickly (reading only abstracts, not full PDFs).</p>
              </div>
            </div>

            {/* Script 03 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">03</span>
                Full-Text Screening - Deep Dive
              </h3>

              <div className="bg-purple-50 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">🎯 What it does:</p>
                <p className="text-sm text-gray-700">Downloads and reads FULL PDFs of papers that passed abstract screening. Claude evaluates methodology, data quality, and detailed inclusion criteria.</p>
              </div>

              <div className="bg-white border-2 border-purple-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📥 Inputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">data/screened.json</code> - From script 02 (only included=true)</li>
                  <li><code className="bg-gray-100 px-1 rounded">config.yaml</code> - Detailed eligibility criteria</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-purple-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📤 Outputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">data/eligible.json</code> - Final included papers with quality ratings</li>
                  <li><code className="bg-gray-100 px-1 rounded">pdfs/</code> folder - Downloaded full-text PDFs</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                <p className="font-semibold text-sm mb-1">❓ Why run this AFTER 02?</p>
                <p className="text-sm text-gray-700">Only screens papers that passed abstract screening (screened.json where included=true). Reading 500 full PDFs is expensive and slow - script 02 filters it down to ~100 first. Saves time and API costs!</p>
              </div>
            </div>

            {/* Script 04 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">04</span>
                Build Embeddings - Create Search Index
              </h3>

              <div className="bg-orange-50 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">🎯 What it does:</p>
                <p className="text-sm text-gray-700">Converts each eligible paper into a semantic vector (1536 numbers) using OpenAI embeddings. Stores vectors in ChromaDB for lightning-fast semantic search.</p>
              </div>

              <div className="bg-white border-2 border-orange-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📥 Inputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">data/eligible.json</code> - From script 03 (final papers only)</li>
                  <li><code className="bg-gray-100 px-1 rounded">.env</code> - OpenAI API key</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-orange-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📤 Outputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">chroma_db/</code> - Vector database with paper embeddings</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                <p className="font-semibold text-sm mb-1">❓ Why run this AFTER 03?</p>
                <p className="text-sm text-gray-700">Only embeds papers that passed FULL screening (eligible.json). No point creating vectors for papers you're going to exclude! This is like creating an index for a book - but the book (eligible papers) must exist first.</p>
              </div>
            </div>

            {/* Script 05 */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">05</span>
                RAG Query - Interactive Research
              </h3>

              <div className="bg-pink-50 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">🎯 What it does:</p>
                <p className="text-sm text-gray-700">You ask research questions in natural language. The system searches ChromaDB for relevant papers, then Claude answers using evidence from those papers with citations.</p>
              </div>

              <div className="bg-white border-2 border-pink-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📥 Inputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">chroma_db/</code> - From script 04 (populated vector database)</li>
                  <li><code className="bg-gray-100 px-1 rounded">data/eligible.json</code> - Paper metadata for citations</li>
                  <li>Your questions (interactive)</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-pink-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📤 Outputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">data/insights.json</code> - Q&A pairs with citations</li>
                  <li>Console output (your research conversation)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                <p className="font-semibold text-sm mb-1">❓ Why run this AFTER 04?</p>
                <p className="text-sm text-gray-700">Requires ChromaDB to be populated with embeddings! Can't do semantic search on an empty database. Think of it like asking a librarian questions - the library must have books (vectors) first!</p>
              </div>
            </div>

            {/* Script 06 */}
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">06</span>
                Synthesis - Meta-Analysis
              </h3>

              <div className="bg-indigo-50 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">🎯 What it does:</p>
                <p className="text-sm text-gray-700">Claude analyzes ALL eligible papers together, identifying patterns, calculating aggregate statistics, finding research gaps, and synthesizing themes.</p>
              </div>

              <div className="bg-white border-2 border-indigo-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📥 Inputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">data/insights.json</code> - From script 05 (research findings)</li>
                  <li><code className="bg-gray-100 px-1 rounded">data/eligible.json</code> - All final papers</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-indigo-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📤 Outputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">data/synthesis.json</code> - Meta-analysis results</li>
                  <li>Themes, patterns, effect sizes, recommendations</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                <p className="font-semibold text-sm mb-1">❓ Why run this AFTER 05?</p>
                <p className="text-sm text-gray-700">Builds on insights from RAG queries. Uses both insights.json (specific findings) and eligible.json (all papers) to identify cross-study patterns. Can't synthesize what you haven't analyzed yet!</p>
              </div>
            </div>

            {/* Script 07 */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">07</span>
                Documentation - Publication Ready
              </h3>

              <div className="bg-red-50 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">🎯 What it does:</p>
                <p className="text-sm text-gray-700">Generates publication-ready documentation: PRISMA flowchart, methods section, results tables, discussion, bibliography in APA/BibTeX format.</p>
              </div>

              <div className="bg-white border-2 border-red-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📥 Inputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">data/papers.json</code> - Total fetched (for flowchart numbers)</li>
                  <li><code className="bg-gray-100 px-1 rounded">data/screened.json</code> - Abstract screening results</li>
                  <li><code className="bg-gray-100 px-1 rounded">data/eligible.json</code> - Final included papers</li>
                  <li><code className="bg-gray-100 px-1 rounded">data/synthesis.json</code> - Meta-analysis findings</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-red-200 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">📤 Outputs:</p>
                <ul className="text-sm space-y-1 ml-6 list-disc">
                  <li><code className="bg-gray-100 px-1 rounded">outputs/prisma_flowchart.md</code></li>
                  <li><code className="bg-gray-100 px-1 rounded">outputs/methods_section.md</code></li>
                  <li><code className="bg-gray-100 px-1 rounded">outputs/results_tables.md</code></li>
                  <li><code className="bg-gray-100 px-1 rounded">outputs/bibliography.bib</code></li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                <p className="font-semibold text-sm mb-1">❓ Why run this LAST?</p>
                <p className="text-sm text-gray-700">Needs data from ALL previous scripts! PRISMA flowchart shows the entire journey (fetched → screened → eligible). Methods describe the full pipeline. Results come from synthesis. This is the final report that ties everything together.</p>
              </div>
            </div>

          </div>

          {/* What Happens If You Skip Steps */}
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              What Happens If You Skip Steps?
            </h3>

            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded border-l-4 border-red-400">
                <p className="font-semibold">❌ Skip 01 (Fetch) → Run 02 (Screen)</p>
                <p className="text-gray-700"><strong>Error:</strong> FileNotFoundError: data/papers.json does not exist</p>
                <p className="text-gray-600 italic">Can't screen papers that don't exist!</p>
              </div>

              <div className="bg-white p-3 rounded border-l-4 border-red-400">
                <p className="font-semibold">❌ Skip 03 (Full-text) → Run 04 (Embeddings)</p>
                <p className="text-gray-700"><strong>Error:</strong> FileNotFoundError: data/eligible.json does not exist</p>
                <p className="text-gray-600 italic">Can't vectorize papers that haven't been screened!</p>
              </div>

              <div className="bg-white p-3 rounded border-l-4 border-red-400">
                <p className="font-semibold">❌ Skip 04 (Embeddings) → Run 05 (RAG)</p>
                <p className="text-gray-700"><strong>Error:</strong> ChromaDB collection is empty or doesn't exist</p>
                <p className="text-gray-600 italic">Can't search an empty vector database!</p>
              </div>

              <div className="bg-white p-3 rounded border-l-4 border-red-400">
                <p className="font-semibold">❌ Skip 05-06 → Run 07 (Documentation)</p>
                <p className="text-gray-700"><strong>Result:</strong> Incomplete documentation with missing synthesis and insights</p>
                <p className="text-gray-600 italic">Documentation needs ALL previous outputs to be complete!</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Key Takeaway
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              The pipeline is a <strong>dependency chain</strong>. Each script is like a Lego brick that builds on the previous one.
              You can't build the roof before the foundation!
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold mb-2">The Order Ensures:</p>
              <ul className="space-y-1 ml-6 list-disc text-sm text-gray-700">
                <li><strong>Data integrity</strong>: Each stage validates and transforms data correctly</li>
                <li><strong>Efficiency</strong>: Filter early (abstract screening) before expensive operations (full-text, embeddings)</li>
                <li><strong>Reproducibility</strong>: Same order = same results every time</li>
                <li><strong>Traceability</strong>: PRISMA flowchart tracks papers through every stage</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </GuideLayout>
  )
}
