import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export default function ScriptsWorkflowPage() {
  return (
    <GuideLayout>
      <div className="max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/codebook" className="hover:text-gray-900 hover:underline">Codebook</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Scripts Workflow</span>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-gray-900">🔄 Scripts Workflow</h1>

        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          Understanding why scripts must run in a specific sequence (30% of Codebook content).
        </p>

        {/* Introduction */}
        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 mb-10">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-900">
            <span className="text-2xl">🔗</span>
            The Data Dependency Chain
          </h2>
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
        <div className="bg-white border-2 border-gray-300 p-6 rounded-lg mb-12 overflow-x-auto">
          <p className="text-sm text-gray-600 mb-4 font-semibold">Complete ResearcherRAG Pipeline:</p>
          <pre className="text-xs leading-relaxed text-gray-800 font-mono">
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

        <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-300 pb-2">Script-by-Script Breakdown</h2>

        {/* Script 01 */}
        <section className="mb-12 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
              01
            </div>
            <h3 className="text-xl font-bold text-gray-900">Fetch Papers - The Foundation</h3>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 rounded-lg mb-4">
            <p className="font-semibold mb-2 text-gray-900">🎯 What it does:</p>
            <p className="text-sm text-gray-700">Searches academic databases (Semantic Scholar, PubMed, ERIC, etc.) and downloads paper metadata (title, authors, abstract, DOI, year).</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📥 Inputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">config.yaml</code> - Research question, databases, date range</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">.env</code> - API keys for database access</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📤 Outputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/papers.json</code> - All fetched papers with metadata</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="font-semibold text-sm mb-2 text-gray-900">❓ Why run this FIRST?</p>
            <p className="text-sm text-gray-700">You need papers before you can screen them! This creates the initial dataset. Without papers.json, scripts 02-07 have nothing to work with.</p>
          </div>
        </section>

        {/* Script 02 */}
        <section className="mb-12 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
              02
            </div>
            <h3 className="text-xl font-bold text-gray-900">Title/Abstract Screening - Quick Filter</h3>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 rounded-lg mb-4">
            <p className="font-semibold mb-2 text-gray-900">🎯 What it does:</p>
            <p className="text-sm text-gray-700">Claude AI reads each paper's title and abstract, applies your PRISMA inclusion/exclusion criteria, and marks papers as included/excluded with reasoning.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📥 Inputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/papers.json</code> - From script 01</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">config.yaml</code> - PRISMA screening criteria</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">.env</code> - Anthropic API key for Claude</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📤 Outputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/screened.json</code> - Papers with screening decisions</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="font-semibold text-sm mb-2 text-gray-900">❓ Why run this AFTER 01?</p>
            <p className="text-sm text-gray-700">Depends on papers.json existing. Can't screen papers you haven't fetched yet! This reduces 5000 papers to ~500 relevant ones quickly (reading only abstracts, not full PDFs).</p>
          </div>
        </section>

        {/* Script 03 */}
        <section className="mb-12 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
              03
            </div>
            <h3 className="text-xl font-bold text-gray-900">Full-Text Screening - Deep Dive</h3>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 rounded-lg mb-4">
            <p className="font-semibold mb-2 text-gray-900">🎯 What it does:</p>
            <p className="text-sm text-gray-700">Downloads and reads FULL PDFs of papers that passed abstract screening. Claude evaluates methodology, data quality, and detailed inclusion criteria.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📥 Inputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/screened.json</code> - From script 02 (only included=true)</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">config.yaml</code> - Detailed eligibility criteria</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📤 Outputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/eligible.json</code> - Final included papers with quality ratings</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">pdfs/</code> folder - Downloaded full-text PDFs</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="font-semibold text-sm mb-2 text-gray-900">❓ Why run this AFTER 02?</p>
            <p className="text-sm text-gray-700">Only screens papers that passed abstract screening (screened.json where included=true). Reading 500 full PDFs is expensive and slow - script 02 filters it down to ~100 first. Saves time and API costs!</p>
          </div>
        </section>

        {/* Script 04 */}
        <section className="mb-12 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
              04
            </div>
            <h3 className="text-xl font-bold text-gray-900">Build Embeddings - Create Search Index</h3>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 rounded-lg mb-4">
            <p className="font-semibold mb-2 text-gray-900">🎯 What it does:</p>
            <p className="text-sm text-gray-700">Converts each eligible paper into a semantic vector (1536 numbers) using OpenAI embeddings. Stores vectors in ChromaDB for lightning-fast semantic search.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📥 Inputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/eligible.json</code> - From script 03 (final papers only)</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">.env</code> - OpenAI API key</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📤 Outputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">chroma_db/</code> - Vector database with paper embeddings</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="font-semibold text-sm mb-2 text-gray-900">❓ Why run this AFTER 03?</p>
            <p className="text-sm text-gray-700">Only embeds papers that passed FULL screening (eligible.json). No point creating vectors for papers you're going to exclude! This is like creating an index for a book - but the book (eligible papers) must exist first.</p>
          </div>
        </section>

        {/* Script 05 */}
        <section className="mb-12 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
              05
            </div>
            <h3 className="text-xl font-bold text-gray-900">RAG Query - Interactive Research</h3>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 rounded-lg mb-4">
            <p className="font-semibold mb-2 text-gray-900">🎯 What it does:</p>
            <p className="text-sm text-gray-700">You ask research questions in natural language. The system searches ChromaDB for relevant papers, then Claude answers using evidence from those papers with citations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📥 Inputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">chroma_db/</code> - From script 04 (populated vector database)</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/eligible.json</code> - Paper metadata for citations</li>
                <li>• Your questions (interactive)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📤 Outputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/insights.json</code> - Q&A pairs with citations</li>
                <li>• Console output (your research conversation)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="font-semibold text-sm mb-2 text-gray-900">❓ Why run this AFTER 04?</p>
            <p className="text-sm text-gray-700">Requires ChromaDB to be populated with embeddings! Can't do semantic search on an empty database. Think of it like asking a librarian questions - the library must have books (vectors) first!</p>
          </div>
        </section>

        {/* Script 06 */}
        <section className="mb-12 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
              06
            </div>
            <h3 className="text-xl font-bold text-gray-900">Synthesis - Meta-Analysis</h3>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 rounded-lg mb-4">
            <p className="font-semibold mb-2 text-gray-900">🎯 What it does:</p>
            <p className="text-sm text-gray-700">Claude analyzes ALL eligible papers together, identifying patterns, calculating aggregate statistics, finding research gaps, and synthesizing themes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📥 Inputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/insights.json</code> - From script 05 (research findings)</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/eligible.json</code> - All final papers</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📤 Outputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/synthesis.json</code> - Meta-analysis results</li>
                <li>• Themes, patterns, effect sizes, recommendations</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="font-semibold text-sm mb-2 text-gray-900">❓ Why run this AFTER 05?</p>
            <p className="text-sm text-gray-700">Builds on insights from RAG queries. Uses both insights.json (specific findings) and eligible.json (all papers) to identify cross-study patterns. Can't synthesize what you haven't analyzed yet!</p>
          </div>
        </section>

        {/* Script 07 */}
        <section className="mb-12 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
              07
            </div>
            <h3 className="text-xl font-bold text-gray-900">Documentation - Publication Ready</h3>
          </div>

          <div className="bg-gray-50 border border-gray-300 p-5 rounded-lg mb-4">
            <p className="font-semibold mb-2 text-gray-900">🎯 What it does:</p>
            <p className="text-sm text-gray-700">Generates publication-ready documentation: PRISMA flowchart, methods section, results tables, discussion, bibliography in APA/BibTeX format.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📥 Inputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/papers.json</code> - Total fetched (for flowchart numbers)</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/screened.json</code> - Abstract screening results</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/eligible.json</code> - Final included papers</li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">data/synthesis.json</code> - Meta-analysis findings</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="font-semibold mb-3 text-gray-900 text-sm">📤 Outputs:</p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">outputs/prisma_flowchart.md</code></li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">outputs/methods_section.md</code></li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">outputs/results_tables.md</code></li>
                <li>• <code className="bg-gray-100 px-2 py-1 rounded border border-gray-300 font-mono text-xs">outputs/bibliography.bib</code></li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="font-semibold text-sm mb-2 text-gray-900">❓ Why run this LAST?</p>
            <p className="text-sm text-gray-700">Needs data from ALL previous scripts! PRISMA flowchart shows the entire journey (fetched → screened → eligible). Methods describe the full pipeline. Results come from synthesis. This is the final report that ties everything together.</p>
          </div>
        </section>

        {/* What Happens If You Skip Steps */}
        <div className="bg-gray-900 text-white border-2 border-gray-900 rounded-lg p-6 mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            What Happens If You Skip Steps?
          </h2>

          <div className="space-y-4 text-sm">
            <div className="bg-gray-800 p-4 rounded border-l-4 border-white">
              <p className="font-semibold mb-1">❌ Skip 01 (Fetch) → Run 02 (Screen)</p>
              <p className="text-gray-300 mb-1"><strong>Error:</strong> FileNotFoundError: data/papers.json does not exist</p>
              <p className="text-gray-400 italic text-xs">Can't screen papers that don't exist!</p>
            </div>

            <div className="bg-gray-800 p-4 rounded border-l-4 border-white">
              <p className="font-semibold mb-1">❌ Skip 03 (Full-text) → Run 04 (Embeddings)</p>
              <p className="text-gray-300 mb-1"><strong>Error:</strong> FileNotFoundError: data/eligible.json does not exist</p>
              <p className="text-gray-400 italic text-xs">Can't vectorize papers that haven't been screened!</p>
            </div>

            <div className="bg-gray-800 p-4 rounded border-l-4 border-white">
              <p className="font-semibold mb-1">❌ Skip 04 (Embeddings) → Run 05 (RAG)</p>
              <p className="text-gray-300 mb-1"><strong>Error:</strong> ChromaDB collection is empty or doesn't exist</p>
              <p className="text-gray-400 italic text-xs">Can't search an empty vector database!</p>
            </div>

            <div className="bg-gray-800 p-4 rounded border-l-4 border-white">
              <p className="font-semibold mb-1">❌ Skip 05-06 → Run 07 (Documentation)</p>
              <p className="text-gray-300 mb-1"><strong>Result:</strong> Incomplete documentation with missing synthesis and insights</p>
              <p className="text-gray-400 italic text-xs">Documentation needs ALL previous outputs to be complete!</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
            <span className="text-2xl">💡</span>
            Key Takeaway
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The pipeline is a <strong>dependency chain</strong>. Each script is like a Lego brick that builds on the previous one.
            You can't build the roof before the foundation!
          </p>
          <div className="bg-white border border-gray-300 p-5 rounded-lg">
            <p className="font-semibold mb-3 text-gray-900">The Order Ensures:</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-6 list-disc">
              <li><strong>Data integrity:</strong> Each stage validates and transforms data correctly</li>
              <li><strong>Efficiency:</strong> Filter early (abstract screening) before expensive operations (full-text, embeddings)</li>
              <li><strong>Reproducibility:</strong> Same order = same results every time</li>
              <li><strong>Traceability:</strong> PRISMA flowchart tracks papers through every stage</li>
            </ul>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-300">
          <Link href="/codebook/tools" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
            ← Previous: Tools & Technologies
          </Link>
          <Link href="/codebook" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
            Back to Codebook
          </Link>
        </div>

      </div>
    </GuideLayout>
  )
}
