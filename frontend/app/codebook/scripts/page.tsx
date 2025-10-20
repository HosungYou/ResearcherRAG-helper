import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function ScriptsDocumentationPage() {
  return (
    <GuideLayout>
      <div className="max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">Script Documentation</h1>

        <div className="callout callout-info mb-8">
          <p className="font-semibold mb-2">🔬 For Code Reviewers & Contributors</p>
          <p className="mb-0">
            Deep dive into each Python script: parameters, logic, error handling, and extension points.
            Essential for understanding implementation details and contributing improvements.
          </p>
        </div>

        {/* Script Index */}
        <section className="mb-12">
          <h2>Pipeline Scripts (7 Stages)</h2>
          <div className="grid gap-4">
            {SCRIPTS.map((script, index) => (
              <ScriptCard key={index} {...script} />
            ))}
          </div>
        </section>

        {/* Detailed Documentation */}
        {SCRIPTS.map((script, index) => (
          <section key={index} id={script.id} className="mb-16 border-t pt-8">
            <h2 className="text-3xl font-bold mb-4">{script.name}</h2>

            {/* Purpose */}
            <div className="mb-6">
              <h3>Purpose</h3>
              <p>{script.purpose}</p>
            </div>

            {/* Usage */}
            <div className="mb-6">
              <h3>Command Line Usage</h3>
              <CodeBlock language="bash" code={script.usage} />
            </div>

            {/* Parameters */}
            <div className="mb-6">
              <h3>Parameters</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border p-3 text-left">Parameter</th>
                    <th className="border p-3 text-left">Type</th>
                    <th className="border p-3 text-left">Required</th>
                    <th className="border p-3 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {script.parameters.map((param, i) => (
                    <tr key={i}>
                      <td className="border p-3 font-mono text-sm">{param.name}</td>
                      <td className="border p-3 text-sm">{param.type}</td>
                      <td className="border p-3 text-sm">{param.required ? '✓ Yes' : '○ No'}</td>
                      <td className="border p-3 text-sm">{param.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Config Dependencies */}
            <div className="mb-6">
              <h3>config.yaml Dependencies</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border">
                <ul className="space-y-2 text-sm">
                  {script.configDeps.map((dep, i) => (
                    <li key={i} className="font-mono">
                      {dep.critical && <span className="text-red-500">⚠️ </span>}
                      <code className={dep.critical ? 'text-red-600 dark:text-red-400' : ''}>{dep.field}</code>
                      {' → '}{dep.usage}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Logic Flow */}
            <div className="mb-6">
              <h3>Core Logic</h3>
              <ol className="space-y-2">
                {script.logic.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Error Handling */}
            <div className="mb-6">
              <h3>Error Handling</h3>
              <div className="space-y-3">
                {script.errors.map((error, i) => (
                  <div key={i} className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950 p-3 rounded-r">
                    <p className="font-semibold text-sm">{error.error}</p>
                    <p className="text-sm text-muted-foreground mt-1">→ {error.solution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extension Points */}
            {script.extensions && (
              <div className="mb-6">
                <h3>Extension Points</h3>
                <div className="callout callout-success">
                  <p className="font-semibold mb-2">💡 How to Extend This Script</p>
                  <ul className="space-y-2 text-sm">
                    {script.extensions.map((ext, i) => (
                      <li key={i}><strong>{ext.title}:</strong> {ext.description}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Code Example */}
            {script.codeExample && (
              <div className="mb-6">
                <h3>Key Code Snippet</h3>
                <CodeBlock language="python" code={script.codeExample} />
              </div>
            )}
          </section>
        ))}

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold mb-3">Ready to Review Code?</h3>
          <p className="mb-4">
            Check out the Code Review Guide for best practices, testing strategies, and contribution guidelines.
          </p>
          <Link
            href="/codebook/code-review"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Code Review Guide →
          </Link>
        </div>
      </div>
    </GuideLayout>
  )
}

// Component: Script Card
function ScriptCard({
  name,
  id,
  stage,
  purpose,
  complexity
}: {
  name: string;
  id: string;
  stage: string;
  purpose: string;
  complexity: string;
}) {
  return (
    <Link
      href={`#${id}`}
      className="block border rounded-lg p-4 hover:border-gray-900 dark:hover:border-gray-300 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <code className="font-bold text-lg">{name}</code>
            <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{stage}</span>
          </div>
          <p className="text-sm text-muted-foreground">{purpose}</p>
        </div>
        <div className="text-sm">
          <ComplexityBadge level={complexity} />
        </div>
      </div>
    </Link>
  );
}

// Component: Complexity Badge
function ComplexityBadge({ level }: { level: string }) {
  const colors = {
    'Low': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    'Medium': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    'High': 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${colors[level as keyof typeof colors]}`}>
      {level}
    </span>
  );
}

// Data: Scripts Documentation
const SCRIPTS = [
  {
    id: 'fetch-papers',
    name: '01_fetch_papers.py',
    stage: 'Stage 5: Fetch',
    purpose: 'Fetches papers from Semantic Scholar, OpenAlex, and arXiv using configured query',
    complexity: 'Medium',
    usage: `python scripts/01_fetch_papers.py --project projects/my-project`,
    parameters: [
      { name: '--project', type: 'Path', required: true, description: 'Path to project directory containing config.yaml' }
    ],
    configDeps: [
      { field: 'search_query.simple', usage: 'Main search query string', critical: true },
      { field: 'databases.open_access.*', usage: 'Which databases to search', critical: false },
      { field: 'retrieval_settings.year_range', usage: 'Filter papers by publication year', critical: false }
    ],
    logic: [
      'Loads config.yaml and reads search query',
      'For each enabled database (Semantic Scholar, OpenAlex, arXiv):',
      '  - Constructs API request with query and filters',
      '  - Fetches results with pagination (handles rate limits)',
      '  - Parses response and extracts metadata (title, abstract, DOI, etc.)',
      '  - Saves to data/01_identification/{database}_results.csv',
      'Logs total papers fetched from each database'
    ],
    errors: [
      {
        error: '❌ API rate limit exceeded',
        solution: 'Script automatically retries with exponential backoff. If persists, add Semantic Scholar API key to .env'
      },
      {
        error: '❌ No results found',
        solution: 'Query too narrow. Broaden search terms or remove year constraints in config.yaml'
      },
      {
        error: '❌ Network timeout',
        solution: 'Check internet connection. Script will retry failed requests automatically'
      }
    ],
    extensions: [
      {
        title: 'Add new database',
        description: 'Create new method fetch_from_X(), add to database loop, update config.yaml schema'
      },
      {
        title: 'Custom filters',
        description: 'Add field-specific filters (e.g., only open access) by modifying API request parameters'
      }
    ],
    codeExample: `def fetch_from_semantic_scholar(self, query: str) -> List[Dict]:
    """Fetch papers from Semantic Scholar API"""
    url = "https://api.semanticscholar.org/graph/v1/paper/search"
    params = {
        "query": query,
        "fields": "title,abstract,authors,year,doi,openAccessPdf",
        "limit": 100
    }

    # Add API key if available
    headers = {}
    if self.api_key:
        headers["x-api-key"] = self.api_key

    response = requests.get(url, params=params, headers=headers)
    response.raise_for_status()

    return response.json().get("data", [])`
  },
  {
    id: 'deduplicate',
    name: '02_deduplicate.py',
    stage: 'Stage 5: Dedup',
    purpose: 'Removes duplicate papers using DOI, arXiv ID, and title similarity',
    complexity: 'Low',
    usage: `python scripts/02_deduplicate.py --project projects/my-project`,
    parameters: [
      { name: '--project', type: 'Path', required: true, description: 'Path to project directory' }
    ],
    configDeps: [
      { field: 'None', usage: 'This script does not read config.yaml', critical: false }
    ],
    logic: [
      'Loads all CSV files from data/01_identification/',
      'Combines into single DataFrame',
      'Deduplication strategy (in order):',
      '  1. Exact DOI match → Keep first occurrence',
      '  2. Exact arXiv ID match → Keep first occurrence',
      '  3. Title similarity > 90% (fuzzy matching) → Keep first occurrence',
      'Saves deduplicated results to data/01_identification/deduplicated.csv',
      'Logs: X papers → Y papers (Z duplicates removed)'
    ],
    errors: [
      {
        error: '❌ No CSV files found',
        solution: 'Run 01_fetch_papers.py first to generate identification data'
      },
      {
        error: '❌ Empty CSV files',
        solution: 'Check if 01_fetch_papers.py succeeded. Verify API keys if needed'
      }
    ],
    extensions: [
      {
        title: 'Custom similarity threshold',
        description: 'Adjust SIMILARITY_THRESHOLD constant (default 0.9) for stricter/looser matching'
      },
      {
        title: 'Manual review',
        description: 'Add --interactive flag to review borderline duplicates before removing'
      }
    ],
    codeExample: `from difflib import SequenceMatcher

def is_duplicate_title(title1: str, title2: str, threshold=0.9) -> bool:
    """Check if two titles are similar enough to be duplicates"""
    similarity = SequenceMatcher(None, title1.lower(), title2.lower()).ratio()
    return similarity >= threshold`
  },
  {
    id: 'screen-papers',
    name: '03_screen_papers.py',
    stage: 'Stage 5: Screen',
    purpose: 'AI-assisted screening using Claude API with project_type-aware thresholds',
    complexity: 'High',
    usage: `python scripts/03_screen_papers.py --project projects/my-project`,
    parameters: [
      { name: '--project', type: 'Path', required: true, description: 'Path to project directory' },
      { name: '--batch-size', type: 'int', required: false, description: 'Number of papers to screen per API call (default: 1)' }
    ],
    configDeps: [
      { field: 'project_type', usage: 'CRITICAL: Sets screening thresholds', critical: true },
      { field: 'ai_prisma_rubric.decision_confidence.auto_include', usage: 'Minimum confidence % to auto-include', critical: true },
      { field: 'ai_prisma_rubric.decision_confidence.auto_exclude', usage: 'Maximum confidence % to auto-exclude', critical: true },
      { field: 'ai_prisma_rubric.human_validation.required', usage: 'Whether to prompt for human review', critical: false },
      { field: 'research_question', usage: 'Used in AI prompt for relevance assessment', critical: true }
    ],
    logic: [
      'Loads config.yaml and sets thresholds based on project_type:',
      '  - knowledge_repository: auto_include=50, auto_exclude=20, no human review',
      '  - systematic_review: auto_include=90, auto_exclude=10, optional human review',
      'For each paper in deduplicated.csv:',
      '  - Constructs prompt: "Is this relevant to [research_question]?"',
      '  - Calls Claude API with title + abstract',
      '  - Parses response: relevance score (0-100) + reasoning',
      '  - Classifies: Include (≥threshold), Exclude (<threshold), or Review (borderline)',
      'Saves relevant.csv, excluded.csv, and review_queue.csv',
      'If human review required: prompts user to review borderline cases'
    ],
    errors: [
      {
        error: '❌ ANTHROPIC_API_KEY not found',
        solution: 'Add ANTHROPIC_API_KEY=sk-ant-... to .env file'
      },
      {
        error: '❌ Rate limit exceeded',
        solution: 'Script pauses automatically. Upgrade to Claude Pro for higher limits'
      },
      {
        error: '❌ Paper has no abstract',
        solution: 'Script auto-excludes papers without abstracts (cannot assess relevance)'
      }
    ],
    extensions: [
      {
        title: 'Multi-criteria scoring',
        description: 'Modify prompt to score on multiple dimensions (methodology, population, outcomes) instead of single relevance score'
      },
      {
        title: 'Batch processing',
        description: 'Increase --batch-size to screen multiple papers per API call (faster but less accurate)'
      }
    ],
    codeExample: `def load_config(self):
    """Load config and set thresholds based on project_type"""
    config_file = self.project_path / "config.yaml"
    with open(config_file) as f:
        self.config = yaml.safe_load(f)

    project_type = self.config.get('project_type', 'systematic_review')

    if project_type == 'knowledge_repository':
        # Lenient thresholds for comprehensive coverage
        self.screening_threshold = 50
        self.exclude_threshold = 20
        self.require_human_review = False
    else:
        # Strict thresholds for systematic review
        self.screening_threshold = 90
        self.exclude_threshold = 10
        self.require_human_review = True`
  },
  {
    id: 'download-pdfs',
    name: '04_download_pdfs.py',
    stage: 'Stage 5: Download',
    purpose: 'Downloads PDFs from open_access URLs with retry logic and error handling',
    complexity: 'Medium',
    usage: `python scripts/04_download_pdfs.py --project projects/my-project`,
    parameters: [
      { name: '--project', type: 'Path', required: true, description: 'Path to project directory' },
      { name: '--max-workers', type: 'int', required: false, description: 'Number of parallel downloads (default: 5)' }
    ],
    configDeps: [
      { field: 'None', usage: 'Reads from data/02_screening/relevant.csv', critical: false }
    ],
    logic: [
      'Loads relevant.csv (papers that passed screening)',
      'For each paper with pdf_url:',
      '  - Attempts download with timeout (30 seconds)',
      '  - Saves to data/pdfs/{doi or arxiv_id}.pdf',
      '  - If fails: retries up to 3 times with exponential backoff',
      '  - If still fails: logs error and continues',
      'Reports: X/Y PDFs downloaded successfully',
      'Creates data/pdfs/failed.csv with papers that failed to download'
    ],
    errors: [
      {
        error: '❌ Download timeout',
        solution: 'Increase timeout in script or skip large PDFs (>50MB). Failed papers logged to failed.csv'
      },
      {
        error: '❌ 403 Forbidden / 404 Not Found',
        solution: 'PDF URL expired or restricted. Paper will be excluded from RAG (but kept in metadata)'
      },
      {
        error: '❌ Disk space full',
        solution: 'Free up space or move data/ to external drive'
      }
    ],
    extensions: [
      {
        title: 'Publisher authentication',
        description: 'Add institution proxy support for paywalled papers (requires login credentials)'
      },
      {
        title: 'OCR fallback',
        description: 'For scanned PDFs, add OCR processing using Tesseract'
      }
    ],
    codeExample: `def download_pdf(self, url: str, output_path: Path, retries=3):
    """Download PDF with retry logic"""
    for attempt in range(retries):
        try:
            response = requests.get(url, timeout=30, stream=True)
            response.raise_for_status()

            with open(output_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)

            return True
        except Exception as e:
            if attempt == retries - 1:
                print(f"❌ Failed after {retries} attempts: {e}")
                return False
            time.sleep(2 ** attempt)  # Exponential backoff`
  },
  {
    id: 'build-rag',
    name: '05_build_rag.py',
    stage: 'Stage 5: RAG Build',
    purpose: 'Chunks PDFs, generates embeddings, and stores in ChromaDB vector database',
    complexity: 'High',
    usage: `python scripts/05_build_rag.py --project projects/my-project`,
    parameters: [
      { name: '--project', type: 'Path', required: true, description: 'Path to project directory' }
    ],
    configDeps: [
      { field: 'rag_settings.embedding_model', usage: 'Which embedding model to use (affects quality)', critical: true },
      { field: 'rag_settings.chunk_size', usage: 'Size of text chunks (default: 1000)', critical: false },
      { field: 'rag_settings.chunk_overlap', usage: 'Overlap between chunks (default: 200)', critical: false },
      { field: 'rag_settings.vector_db', usage: 'Database backend (chromadb or faiss)', critical: false }
    ],
    logic: [
      'Loads all PDFs from data/pdfs/',
      'For each PDF:',
      '  - Extracts text using PyMuPDF',
      '  - Splits into chunks (chunk_size with chunk_overlap)',
      '  - Generates embeddings using OpenAI API or local model',
      '  - Stores chunks + embeddings in ChromaDB',
      'Creates collection in data/chroma/ with metadata:',
      '  - paper_id, title, authors, year, doi',
      '  - chunk_index, page_number',
      'Reports: X papers → Y chunks → ChromaDB'
    ],
    errors: [
      {
        error: '❌ OPENAI_API_KEY not found',
        solution: 'Add OPENAI_API_KEY=sk-... to .env if using OpenAI embeddings'
      },
      {
        error: '❌ PDF extraction failed (corrupted PDF)',
        solution: 'Script skips corrupted PDFs and logs warning. Paper metadata kept but no embeddings'
      },
      {
        error: '❌ Out of memory',
        solution: 'Reduce chunk_size or process PDFs in smaller batches'
      }
    ],
    extensions: [
      {
        title: 'Custom chunking strategy',
        description: 'Instead of fixed-size chunks, split by sections (Introduction, Methods, etc.)'
      },
      {
        title: 'Multi-modal embeddings',
        description: 'Extract figures/tables and embed separately using vision models'
      }
    ],
    codeExample: `def chunk_text(self, text: str, chunk_size: int, overlap: int):
    """Split text into overlapping chunks"""
    chunks = []
    start = 0

    while start < len(text):
        end = start + chunk_size
        chunk = text[start:end]
        chunks.append(chunk)
        start += chunk_size - overlap  # Overlap

    return chunks`
  },
  {
    id: 'query-rag',
    name: '06_query_rag.py',
    stage: 'Stage 6: Query',
    purpose: 'Interactive RAG query system with semantic search and LLM answer generation',
    complexity: 'Medium',
    usage: `python scripts/06_query_rag.py --project projects/my-project`,
    parameters: [
      { name: '--project', type: 'Path', required: true, description: 'Path to project directory' },
      { name: '--query', type: 'str', required: false, description: 'Direct query (non-interactive mode)' }
    ],
    configDeps: [
      { field: 'rag_settings.retrieval_k', usage: 'Number of chunks to retrieve (default: 10)', critical: false },
      { field: 'rag_settings.llm', usage: 'Which LLM to use for answer generation', critical: true },
      { field: 'rag_settings.llm_temperature', usage: 'Randomness of answers (0.0-1.0)', critical: false }
    ],
    logic: [
      'Loads ChromaDB collection from data/chroma/',
      'Starts interactive loop:',
      '  - User enters query',
      '  - Generates query embedding',
      '  - Searches ChromaDB for top-k most similar chunks',
      '  - Constructs prompt: "Answer based on these papers: [chunks]"',
      '  - Calls LLM (Claude/GPT) to generate answer',
      '  - Displays answer with paper citations',
      'User can ask follow-up questions in same session'
    ],
    errors: [
      {
        error: '❌ ChromaDB not found',
        solution: 'Run 05_build_rag.py first to create vector database'
      },
      {
        error: '❌ No relevant chunks found',
        solution: 'Query too specific or outside domain. Try broader query terms'
      },
      {
        error: '❌ LLM timeout',
        solution: 'Reduce retrieval_k to retrieve fewer chunks (less context)'
      }
    ],
    extensions: [
      {
        title: 'Conversation history',
        description: 'Maintain conversation context across multiple queries for follow-up questions'
      },
      {
        title: 'Citation formatting',
        description: 'Auto-format citations in APA/MLA style'
      }
    ],
    codeExample: `def query(self, question: str):
    """Query RAG system and generate answer"""
    # Retrieve relevant chunks
    results = self.collection.query(
        query_texts=[question],
        n_results=self.k
    )

    # Construct prompt with context
    context = "\\n\\n".join(results['documents'][0])
    prompt = f"Answer this question based on the papers:\\n{context}\\n\\nQuestion: {question}"

    # Generate answer
    response = self.llm.generate(prompt)

    return {
        "answer": response,
        "sources": results['metadatas'][0]  # Paper citations
    }`
  },
  {
    id: 'generate-prisma',
    name: '07_generate_prisma.py',
    stage: 'Stage 7: PRISMA',
    purpose: 'Generates PRISMA 2020 flow diagram with project_type-aware title',
    complexity: 'Low',
    usage: `python scripts/07_generate_prisma.py --project projects/my-project`,
    parameters: [
      { name: '--project', type: 'Path', required: true, description: 'Path to project directory' }
    ],
    configDeps: [
      { field: 'project_type', usage: 'CRITICAL: Changes diagram title', critical: true },
      { field: 'project_name', usage: 'Displayed on diagram', critical: false }
    ],
    logic: [
      'Collects statistics from all data/ folders:',
      '  - data/01_identification/*.csv → papers fetched',
      '  - data/01_identification/deduplicated.csv → duplicates removed',
      '  - data/02_screening/*.csv → papers screened and excluded',
      '  - data/pdfs/ → PDFs downloaded',
      '  - data/chroma/ → papers in RAG',
      'Generates PRISMA 2020 flow diagram using matplotlib',
      'Title changes based on project_type:',
      '  - knowledge_repository → "Paper Processing Pipeline"',
      '  - systematic_review → "PRISMA 2020 Flow Diagram"',
      'Saves to outputs/prisma_diagram.png'
    ],
    errors: [
      {
        error: '❌ Missing data files',
        solution: 'Ensure all previous stages completed successfully'
      },
      {
        error: '❌ Matplotlib font errors',
        solution: 'Install system fonts or use default sans-serif'
      }
    ],
    extensions: [
      {
        title: 'Interactive PRISMA',
        description: 'Generate HTML version with clickable stages that show detailed breakdowns'
      },
      {
        title: 'Export to LaTeX',
        description: 'Generate TikZ code for publication-quality diagrams'
      }
    ],
    codeExample: `def create_prisma_diagram(self, stats):
    """Generate PRISMA diagram with project-type-aware title"""
    project_type = self.config.get('project_type', 'systematic_review')

    if project_type == 'knowledge_repository':
        title = 'Paper Processing Pipeline'
        subtitle = 'Comprehensive Knowledge Repository'
    else:
        title = 'PRISMA 2020 Flow Diagram'
        subtitle = 'Systematic Literature Review'

    # Create matplotlib figure
    fig, ax = plt.subplots(figsize=(12, 14))
    ax.text(5, 13.5, title, ha='center', fontsize=16, fontweight='bold')
    ax.text(5, 13, subtitle, ha='center', fontsize=12, style='italic')`
  }
];
