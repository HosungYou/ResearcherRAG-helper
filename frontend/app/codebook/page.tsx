import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export default function CodebookPage() {
  return (
    <GuideLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Codebook</h1>

        <p className="text-lg text-gray-600 mb-8">
          Complete reference for ResearcherRAG code, scripts, configuration files, and data structures.
          Use this as a technical dictionary when working with the{' '}
          <a
            href="https://github.com/HosungYou/researcherRAG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            researcherRAG repository
          </a>.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-sm text-blue-900">
            <strong>💡 Tip:</strong> This codebook explains the technical implementation.
            For conceptual understanding, see the <Link href="/guide" className="underline font-medium">Guide chapters</Link>.
          </p>
        </div>

        {/* Quick Navigation */}
        <nav className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="#scripts" className="text-blue-600 hover:text-blue-800 hover:underline">📜 Scripts Reference (01-07.py)</a>
            <a href="#prompts" className="text-blue-600 hover:text-blue-800 hover:underline">💬 Prompts Guide (01-07.md)</a>
            <a href="#config" className="text-blue-600 hover:text-blue-800 hover:underline">⚙️ Configuration Files</a>
            <a href="#data" className="text-blue-600 hover:text-blue-800 hover:underline">📊 Data Structures</a>
            <a href="#cli" className="text-blue-600 hover:text-blue-800 hover:underline">⌨️ CLI Commands</a>
            <a href="#folders" className="text-blue-600 hover:text-blue-800 hover:underline">📁 Folder Structure</a>
          </div>
        </nav>

        {/* Scripts Reference */}
        <section id="scripts" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">📜 Scripts Reference</h2>
          <p className="text-gray-600 mb-6">
            Seven Python scripts that execute the PRISMA+RAG pipeline. Located in <code className="bg-gray-100 px-2 py-1 rounded">scripts/</code>.
          </p>

          {/* Script 01 */}
          <div className="mb-8 border-l-4 border-purple-500 pl-6">
            <h3 className="text-2xl font-semibold mb-3" id="script-01">01_fetch_papers.py</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Purpose:</strong> Fetch papers from academic databases</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Duration:</strong> 10-30 minutes</p>
              <p className="text-sm text-gray-600"><strong>Stage:</strong> PRISMA Identification</p>
            </div>

            <h4 className="font-semibold mt-4 mb-2">What it does:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Queries Semantic Scholar, OpenAlex, arXiv with your search query</li>
              <li>Fetches metadata: title, authors, abstract, DOI, publication year</li>
              <li>Saves to <code className="bg-gray-100 px-2 py-1 rounded text-sm">data/01_fetch/papers.json</code></li>
              <li>Typical output: 100-5000 papers</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Usage:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
{`python scripts/01_fetch_papers.py --project /path/to/project`}
            </pre>

            <h4 className="font-semibold mt-4 mb-2">Key Parameters (in config.yaml):</h4>
            <div className="bg-white border rounded-lg p-4 mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">Parameter</th>
                    <th className="text-left py-2 pr-4">Type</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4"><code>search_query</code></td>
                    <td className="py-2 pr-4">string</td>
                    <td className="py-2">Boolean search query</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4"><code>year_range</code></td>
                    <td className="py-2 pr-4">array</td>
                    <td className="py-2">E.g., [2018, 2024]</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4"><code>max_papers</code></td>
                    <td className="py-2 pr-4">integer</td>
                    <td className="py-2">Max papers to fetch (default: 1000)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-semibold mt-4 mb-2">Output Format:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "papers": [
    {
      "id": "semantic_scholar:abc123",
      "title": "AI Chatbots in Language Learning",
      "authors": ["Smith, J.", "Jones, A."],
      "abstract": "This study investigates...",
      "doi": "10.1234/example.2023.001",
      "year": 2023,
      "venue": "Journal of Educational Technology",
      "citation_count": 15,
      "url": "https://..."
    }
  ],
  "metadata": {
    "total_fetched": 403,
    "sources": ["semantic_scholar", "openalex"],
    "query": "(chatbot OR conversational agent) AND ..."
  }
}`}
            </pre>

            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
                🔧 Troubleshooting
              </summary>
              <div className="mt-2 pl-4 text-sm text-gray-700">
                <p className="mb-2"><strong>Issue:</strong> "No papers found"</p>
                <p className="mb-2">→ Query may be too narrow. Try broader terms.</p>
                <p className="mb-2"><strong>Issue:</strong> "API rate limit exceeded"</p>
                <p>→ Add delays between requests or use API keys.</p>
              </div>
            </details>
          </div>

          {/* Script 02 */}
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-semibold mb-3" id="script-02">02_deduplicate.py</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Purpose:</strong> Remove duplicate papers</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Duration:</strong> 1-5 minutes</p>
              <p className="text-sm text-gray-600"><strong>Stage:</strong> PRISMA Identification</p>
            </div>

            <h4 className="font-semibold mt-4 mb-2">What it does:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Identifies duplicates by DOI, title similarity, or arXiv ID</li>
              <li>Uses fuzzy matching (90% similarity threshold)</li>
              <li>Keeps newest version if multiple exist</li>
              <li>Typical reduction: 20-40%</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Usage:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
{`python scripts/02_deduplicate.py --project /path/to/project`}
            </pre>

            <h4 className="font-semibold mt-4 mb-2">Deduplication Logic:</h4>
            <div className="bg-white border rounded-lg p-4 mb-4 text-sm">
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Exact DOI match:</strong> If DOI identical → duplicate</li>
                <li><strong>Title similarity:</strong> If titles &gt;90% similar → duplicate</li>
                <li><strong>ArXiv ID match:</strong> Same arXiv ID → duplicate</li>
                <li><strong>Keep strategy:</strong> Keep paper with most citations</li>
              </ol>
            </div>

            <h4 className="font-semibold mt-4 mb-2">Output:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`data/02_deduplicate/
├── unique_papers.json        # Deduplicated papers
└── duplicates_removed.json   # Removed duplicates log`}
            </pre>
          </div>

          {/* Script 03 */}
          <div className="mb-8 border-l-4 border-green-500 pl-6">
            <h3 className="text-2xl font-semibold mb-3" id="script-03">03_screen_papers.py</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Purpose:</strong> PRISMA systematic screening</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Duration:</strong> 5-20 minutes</p>
              <p className="text-sm text-gray-600"><strong>Stage:</strong> PRISMA Screening</p>
            </div>

            <h4 className="font-semibold mt-4 mb-2">What it does:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Evaluates papers against 6-dimension PRISMA criteria</li>
              <li>Uses Claude API for intelligent screening</li>
              <li>Scores each paper (0-100) per criterion</li>
              <li>Applies thresholds from config.yaml</li>
              <li>Typical pass rate: 20-70%</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">6-Dimension PRISMA Criteria:</h4>
            <div className="bg-white border rounded-lg p-4 mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4">Dimension</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-mono text-xs">domain</td>
                    <td className="py-2">Academic field match (e.g., education, medicine)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-mono text-xs">method</td>
                    <td className="py-2">Research methodology (RCT, survey, qualitative)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-mono text-xs">topic</td>
                    <td className="py-2">Specific research topic relevance</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-mono text-xs">context</td>
                    <td className="py-2">Setting/population (K-12, higher ed, etc.)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-mono text-xs">exclusion</td>
                    <td className="py-2">Exclusion criteria check (opinion pieces, etc.)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-xs">title</td>
                    <td className="py-2">Title relevance to research question</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-semibold mt-4 mb-2">Usage:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
{`python scripts/03_screen_papers.py --project /path/to/project

# Requires: ANTHROPIC_API_KEY environment variable`}
            </pre>

            <h4 className="font-semibold mt-4 mb-2">Output Format:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "screened_papers": [
    {
      "id": "semantic_scholar:abc123",
      "title": "AI Chatbots in Language Learning",
      "scores": {
        "domain": 95,
        "method": 80,
        "topic": 90,
        "context": 85,
        "exclusion": 100,
        "title": 92
      },
      "average_score": 90.3,
      "passed": true,
      "reason": "Highly relevant to research question"
    }
  ],
  "statistics": {
    "total_screened": 400,
    "passed": 79,
    "failed": 321,
    "pass_rate": 0.1975
  }
}`}
            </pre>
          </div>

          {/* Script 04 */}
          <div className="mb-8 border-l-4 border-yellow-500 pl-6">
            <h3 className="text-2xl font-semibold mb-3" id="script-04">04_download_pdfs.py</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Purpose:</strong> Download full-text PDFs</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Duration:</strong> 1-3 hours</p>
              <p className="text-sm text-gray-600"><strong>Stage:</strong> PRISMA Full-text Retrieval</p>
            </div>

            <h4 className="font-semibold mt-4 mb-2">What it does:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Downloads PDFs from Open Access sources (Unpaywall, CORE)</li>
              <li>Attempts institutional access if configured</li>
              <li>Validates PDF integrity (not HTML errors)</li>
              <li>Typical success rate: 30-80%</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Download Sources (in priority order):</h4>
            <div className="bg-white border rounded-lg p-4 mb-4 text-sm">
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Unpaywall:</strong> Open Access PDFs (free, no API key)</li>
                <li><strong>CORE:</strong> Open Access repository (requires API key)</li>
                <li><strong>ArXiv:</strong> Preprints (free)</li>
                <li><strong>Institutional access:</strong> If configured</li>
              </ol>
            </div>

            <h4 className="font-semibold mt-4 mb-2">Usage:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
{`python scripts/04_download_pdfs.py --project /path/to/project

# Optional: CORE_API_KEY for better success rate`}
            </pre>
          </div>

          {/* Script 05 */}
          <div className="mb-8 border-l-4 border-red-500 pl-6">
            <h3 className="text-2xl font-semibold mb-3" id="script-05">05_build_rag.py</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Purpose:</strong> Build vector database for RAG</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Duration:</strong> 10-30 minutes</p>
              <p className="text-sm text-gray-600"><strong>Stage:</strong> RAG Construction</p>
            </div>

            <h4 className="font-semibold mt-4 mb-2">What it does:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Extracts text from PDFs (PyMuPDF + OCR fallback)</li>
              <li>Chunks documents into semantic units (~1000 tokens)</li>
              <li>Generates embeddings (OpenAI or sentence-transformers)</li>
              <li>Stores in ChromaDB vector database</li>
              <li>Preserves metadata (paper ID, page number, citations)</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Processing Pipeline:</h4>
            <div className="bg-white border rounded-lg p-4 mb-4 text-sm">
              <pre className="text-xs overflow-x-auto">
{`PDF → Text Extraction → Chunking → Embedding → Vector DB

Example:
45 PDFs → 450 pages → 2,250 chunks → 2,250 embeddings → ChromaDB

Chunk example (1000 tokens):
"This study investigated the effectiveness of AI chatbots
 in language learning contexts. A randomized controlled trial
 with 120 participants showed significant improvements..."
[page 3, Smith et al. 2023]`}
              </pre>
            </div>

            <h4 className="font-semibold mt-4 mb-2">Usage:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
{`python scripts/05_build_rag.py --project /path/to/project

# Requires: OPENAI_API_KEY (for embeddings)`}
            </pre>

            <h4 className="font-semibold mt-4 mb-2">Output:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`data/04_rag/
├── chroma_db/              # Vector database
│   ├── chroma.sqlite3
│   └── [embeddings]
└── rag_config.json         # RAG metadata`}
            </pre>
          </div>

          {/* Script 06 */}
          <div className="mb-8 border-l-4 border-indigo-500 pl-6">
            <h3 className="text-2xl font-semibold mb-3" id="script-06">06_query_rag.py</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Purpose:</strong> Interactive RAG querying</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Duration:</strong> Ongoing (research phase)</p>
              <p className="text-sm text-gray-600"><strong>Stage:</strong> Research Conversation</p>
            </div>

            <h4 className="font-semibold mt-4 mb-2">What it does:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Provides interactive chat interface for querying papers</li>
              <li>Retrieves relevant chunks from vector database</li>
              <li>Generates answers with Claude + retrieved context</li>
              <li>Includes citations to specific papers and pages</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Usage:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
{`python scripts/06_query_rag.py --project /path/to/project

> What methodologies are used in chatbot studies?
> Which studies show positive learning outcomes?
> What are the research gaps in this literature?`}
            </pre>

            <h4 className="font-semibold mt-4 mb-2">Query Flow:</h4>
            <div className="bg-white border rounded-lg p-4 mb-4 text-sm">
              <pre className="text-xs overflow-x-auto">
{`1. User Query: "What methodologies are used?"
2. Embed query → vector
3. Search ChromaDB → top 5 relevant chunks
4. Retrieve chunks:
   - "RCT with 120 participants..." [Smith 2023, p.3]
   - "Qualitative interviews..." [Jones 2022, p.5]
   - "Mixed methods design..." [Lee 2024, p.2]
5. Generate answer with Claude:
   "Based on the PRISMA-selected literature, three main
    methodologies emerge: RCT studies (Smith 2023),
    qualitative approaches (Jones 2022), and mixed
    methods (Lee 2024)..."`}
              </pre>
            </div>
          </div>

          {/* Script 07 */}
          <div className="mb-8 border-l-4 border-pink-500 pl-6">
            <h3 className="text-2xl font-semibold mb-3" id="script-07">07_generate_prisma.py</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2"><strong>Purpose:</strong> Generate PRISMA 2020 flowchart</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Duration:</strong> 1-5 minutes</p>
              <p className="text-sm text-gray-600"><strong>Stage:</strong> Documentation</p>
            </div>

            <h4 className="font-semibold mt-4 mb-2">What it does:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Reads pipeline statistics from previous scripts</li>
              <li>Generates PRISMA 2020 compliant flowchart</li>
              <li>Exports as PNG and Mermaid diagram</li>
              <li>Creates methods section draft</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Usage:</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
{`python scripts/07_generate_prisma.py --project /path/to/project`}
            </pre>
          </div>
        </section>

        {/* Prompts Guide */}
        <section id="prompts" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">💬 Prompts Guide</h2>
          <p className="text-gray-600 mb-6">
            Seven conversational prompts for interactive research setup with Claude Code. Located in <code className="bg-gray-100 px-2 py-1 rounded">prompts/</code>.
          </p>

          <div className="grid gap-4 mb-6">
            {[
              { num: '01', name: 'Research Domain Setup', duration: '15-20 min', color: 'purple' },
              { num: '02', name: 'Query Strategy', duration: '20-30 min', color: 'blue' },
              { num: '03', name: 'PRISMA Configuration', duration: '25-35 min', color: 'green' },
              { num: '04', name: 'RAG Design', duration: '20-30 min', color: 'yellow' },
              { num: '05', name: 'Execution Plan', duration: '2-4 hours', color: 'red' },
              { num: '06', name: 'Research Conversation', duration: 'Ongoing', color: 'indigo' },
              { num: '07', name: 'Documentation Writing', duration: '1-3 hours', color: 'pink' }
            ].map((prompt) => (
              <div key={prompt.num} className={`border-l-4 border-${prompt.color}-500 pl-4 py-2 bg-gray-50 rounded`}>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-sm font-semibold">{prompt.num}_*.md</span>
                    <span className="ml-3 text-gray-700">{prompt.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{prompt.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border rounded-lg p-4">
            <h4 className="font-semibold mb-2">How Prompts Work:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
              <li>Copy prompt content from <code className="bg-white px-2 py-1 rounded">prompts/0X_*.md</code></li>
              <li>Paste into Claude Code conversation</li>
              <li>Answer Claude's questions interactively</li>
              <li>Claude generates config files and code</li>
              <li>Progress to next stage when ready</li>
            </ol>
          </div>
        </section>

        {/* Configuration Files */}
        <section id="config" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">⚙️ Configuration Files</h2>

          <div className="space-y-6">
            {/* config.yaml */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">config.yaml</h3>
              <p className="text-gray-600 mb-4">Master configuration file for your research project</p>

              <h4 className="font-semibold mt-4 mb-2">Structure:</h4>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs mb-4">
{`# Project Metadata
project_name: "AI_Chatbot_Language_Learning"
research_question: "How effective are AI chatbots..."
year_range: [2018, 2024]

# Search Query (Stage 2)
search_query: "(chatbot OR conversational agent) AND..."

# PRISMA Criteria (Stage 3)
prisma_criteria:
  domain:
    keywords: ["education", "language learning"]
    threshold: 70
  method:
    keywords: ["RCT", "experimental", "quasi-experimental"]
    threshold: 60
  topic:
    keywords: ["chatbot", "AI tutor", "conversational agent"]
    threshold: 80
  context:
    keywords: ["K-12", "higher education", "adult learning"]
    threshold: 65
  exclusion:
    keywords: ["opinion", "editorial", "commentary"]
    threshold: 80
  title:
    threshold: 75

# RAG Configuration (Stage 4)
rag_config:
  chunk_size: 1000
  chunk_overlap: 200
  embedding_model: "text-embedding-3-small"
  top_k: 5
  similarity_threshold: 0.7

# API Keys
api_keys:
  anthropic: \${ANTHROPIC_API_KEY}
  openai: \${OPENAI_API_KEY}
  semantic_scholar: null  # Optional
  core: \${CORE_API_KEY}  # Optional`}
              </pre>
            </div>

            {/* .env */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">.env</h3>
              <p className="text-gray-600 mb-4">Environment variables for API keys</p>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs mb-4">
{`# Required
ANTHROPIC_API_KEY=sk-ant-...

# Required for RAG embeddings
OPENAI_API_KEY=sk-...

# Optional (improves PDF download success)
CORE_API_KEY=...

# Optional (for institutional access)
SEMANTIC_SCHOLAR_API_KEY=...`}
              </pre>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 text-sm">
                <p className="text-yellow-900">
                  <strong>⚠️ Security:</strong> Never commit <code className="bg-yellow-100 px-1 rounded">.env</code> to git!
                  It's included in <code className="bg-yellow-100 px-1 rounded">.gitignore</code> by default.
                </p>
              </div>
            </div>

            {/* .researcherrag/ */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">.researcherrag/</h3>
              <p className="text-gray-600 mb-4">Internal state tracking (auto-generated)</p>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`.researcherrag/
├── context.json          # Current stage, progress tracking
└── conversation_log.md   # Conversation history`}
              </pre>
            </div>
          </div>
        </section>

        {/* Data Structures */}
        <section id="data" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">📊 Data Structures</h2>
          <p className="text-gray-600 mb-6">
            JSON formats used throughout the pipeline. Located in <code className="bg-gray-100 px-2 py-1 rounded">data/</code> folder.
          </p>

          <div className="space-y-6">
            {/* papers.json */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">papers.json</h3>
              <p className="text-sm text-gray-600 mb-3">Paper metadata structure (from scripts 01-04)</p>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "id": "semantic_scholar:abc123",
  "title": "AI Chatbots in Language Learning",
  "authors": ["Smith, J.", "Jones, A."],
  "abstract": "This study investigates...",
  "doi": "10.1234/example.2023.001",
  "year": 2023,
  "venue": "Journal of Educational Technology",
  "citation_count": 15,
  "url": "https://...",
  "pdf_url": "https://...",  // Added in script 04
  "pdf_downloaded": true     // Added in script 04
}`}
              </pre>
            </div>

            {/* prisma_results.json */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">prisma_results.json</h3>
              <p className="text-sm text-gray-600 mb-3">PRISMA screening results (from script 03)</p>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "id": "semantic_scholar:abc123",
  "scores": {
    "domain": 95,
    "method": 80,
    "topic": 90,
    "context": 85,
    "exclusion": 100,
    "title": 92
  },
  "average_score": 90.3,
  "passed": true,
  "reason": "Highly relevant: education domain, RCT method, chatbot topic"
}`}
              </pre>
            </div>

            {/* rag_config.json */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">rag_config.json</h3>
              <p className="text-sm text-gray-600 mb-3">RAG system metadata (from script 05)</p>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "total_papers": 45,
  "total_chunks": 2250,
  "chunks_per_paper": 50,
  "embedding_model": "text-embedding-3-small",
  "embedding_dimension": 1536,
  "chunk_size": 1000,
  "chunk_overlap": 200,
  "vector_db_path": "data/04_rag/chroma_db"
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* CLI Commands */}
        <section id="cli" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">⌨️ CLI Commands</h2>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Run Full Pipeline:</h4>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto text-sm">
{`cd /path/to/project
python scripts/01_fetch_papers.py && \\
python scripts/02_deduplicate.py && \\
python scripts/03_screen_papers.py && \\
python scripts/04_download_pdfs.py && \\
python scripts/05_build_rag.py`}
              </pre>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Query RAG System:</h4>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto text-sm">
{`python scripts/06_query_rag.py --project /path/to/project`}
              </pre>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Generate PRISMA Diagram:</h4>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto text-sm">
{`python scripts/07_generate_prisma.py --project /path/to/project`}
              </pre>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Check Status:</h4>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto text-sm">
{`cat .researcherrag/context.json`}
              </pre>
            </div>
          </div>
        </section>

        {/* Folder Structure */}
        <section id="folders" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">📁 Folder Structure</h2>

          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
{`researcherRAG/
├── prompts/                    # Conversational prompts (01-07)
│   ├── 01_research_domain_setup.md
│   ├── 02_query_strategy.md
│   ├── 03_prisma_configuration.md
│   ├── 04_rag_design.md
│   ├── 05_execution_plan.md
│   ├── 06_research_conversation.md
│   └── 07_documentation_writing.md
│
├── scripts/                    # Python automation scripts
│   ├── 01_fetch_papers.py
│   ├── 02_deduplicate.py
│   ├── 03_screen_papers.py
│   ├── 04_download_pdfs.py
│   ├── 05_build_rag.py
│   ├── 06_query_rag.py
│   └── 07_generate_prisma.py
│
├── examples/                   # Example projects
│   └── education_chatbot_example/
│
├── templates/                  # Project templates
│   └── default_project/
│
├── docs/                       # Documentation
│   ├── index.md
│   ├── glossary.md
│   └── search-guide.md
│
└── CLAUDE.md                   # AI assistant instructions`}
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">Your Project Structure</h3>
          <p className="text-gray-600 mb-4">When you create a project, it will have:</p>

          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
{`my_research_project/
├── config.yaml                 # Your configuration
├── .env                        # Your API keys
├── .researcherrag/            # Progress tracking
│   └── context.json
│
└── data/                       # Generated data
    ├── 01_fetch/
    │   └── papers.json         # Fetched papers
    ├── 02_deduplicate/
    │   └── unique_papers.json  # Deduplicated
    ├── 03_screen/
    │   └── screened_papers.json # PRISMA screened
    ├── 04_pdfs/
    │   ├── pdf_files/          # Downloaded PDFs
    │   └── download_log.json
    └── 04_rag/
        ├── chroma_db/          # Vector database
        └── rag_config.json     # RAG metadata`}
          </pre>
        </section>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border rounded-lg p-6 mt-12">
          <h3 className="text-xl font-semibold mb-3">Need More Help?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">📚 Documentation</h4>
              <ul className="space-y-1 text-gray-700">
                <li>→ <Link href="/guide" className="text-blue-600 hover:underline">Guide Chapters</Link> (Conceptual)</li>
                <li>→ <Link href="/guide/05-advanced-topics" className="text-blue-600 hover:underline">Troubleshooting Guide</Link></li>
                <li>→ Press <kbd className="bg-white px-2 py-1 rounded border">⌘K</kbd> to search</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">💻 Code Repository</h4>
              <ul className="space-y-1 text-gray-700">
                <li>→ <a href="https://github.com/HosungYou/researcherRAG" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repository</a></li>
                <li>→ <a href="https://github.com/HosungYou/researcherRAG/tree/main/scripts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Browse Scripts</a></li>
                <li>→ <a href="https://github.com/HosungYou/researcherRAG/tree/main/prompts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Browse Prompts</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </GuideLayout>
  )
}
