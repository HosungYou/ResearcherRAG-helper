import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Mermaid from '@/components/Mermaid'
import { CodeBlock } from '@/components/CodeBlock'

export default function CoreConceptsPage() {
  return (
    <GuideLayout>
      <h1 id="core-concepts">Core Concepts</h1>

      <p className="text-xl text-muted mt-6 mb-8">
        Deep dive into the fundamental technologies and methodologies that power ResearcherRAG: PRISMA, RAG architecture, vector databases, and embeddings.
      </p>

      <h2 id="prisma-methodology">PRISMA Methodology</h2>

      <p>
        <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer">PRISMA</a> (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is an evidence-based minimum set of items for reporting in systematic reviews and meta-analyses. Originally published in 2009 and updated in 2020, PRISMA provides a standardized framework for conducting transparent and reproducible literature reviews.
      </p>

      <h3 id="why-prisma-for-rag">Why PRISMA is Essential for Research RAG</h3>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Critical Distinction</p>
        <p className="mb-0">
          PRISMA is <strong>NOT</strong> a parallel component to RAG—it's a <strong>prerequisite step</strong>. You must complete PRISMA screening (Stages 1-3) BEFORE building your RAG system (Stages 4-5).
        </p>
      </div>

      <p>
        Many generic RAG systems simply dump PDFs into a vector database without systematic screening. This approach fails for academic research because:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-3 text-lg">🚫 Generic RAG</h4>
          <ul className="text-sm space-y-2 text-muted">
            <li>❌ Includes irrelevant papers</li>
            <li>❌ No quality control</li>
            <li>❌ Can't defend inclusion criteria</li>
            <li>❌ Mixes high/low quality sources</li>
            <li>❌ Not replicable by others</li>
            <li>❌ Violates academic standards</li>
          </ul>
          <p className="text-xs mt-4 text-muted-foreground italic">
            "I just threw 500 PDFs I found on Google Scholar into ChromaDB."
          </p>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-3 text-lg">✅ Research RAG (with PRISMA)</h4>
          <ul className="text-sm space-y-2 text-muted">
            <li>✅ Every paper meets defined criteria</li>
            <li>✅ Systematic screening process</li>
            <li>✅ Transparent exclusion reasons</li>
            <li>✅ Quality-controlled knowledge base</li>
            <li>✅ Fully replicable methodology</li>
            <li>✅ Meets journal requirements</li>
          </ul>
          <p className="text-xs mt-4 text-muted-foreground italic">
            "I systematically screened 1,247 papers using PRISMA 2020 guidelines and included 137 that met all criteria."
          </p>
        </div>
      </div>

      <h4 className="text-lg font-semibold mt-8 mb-4">Academic Validity</h4>

      <p className="text-sm text-muted mb-4">
        Without PRISMA, your RAG system cannot answer the fundamental question reviewers will ask:
      </p>

      <div className="bg-gray-50 border-l-4 border-gray-900 p-4 my-6">
        <p className="text-sm font-semibold mb-2">Reviewer Question:</p>
        <p className="text-sm italic mb-2">
          "How did you ensure comprehensive coverage of the literature while maintaining quality standards?"
        </p>
        <p className="text-xs text-muted-foreground mt-3">
          <strong>With PRISMA:</strong> "We followed PRISMA 2020 guidelines (Page et al., 2021). Search strategy yielded 1,247 records from PubMed, Scopus, and ERIC. After screening against predefined criteria, 137 papers were included. See supplementary materials for full PRISMA flowchart."
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          <strong>Without PRISMA:</strong> "We collected papers that seemed relevant..." ← <span className="text-foreground font-semibold">Desk rejection</span>
        </p>
      </div>

      <h4 className="text-lg font-semibold mt-8 mb-4">The Sequential Workflow</h4>

      <p>
        ResearcherRAG implements PRISMA as the <strong>input pipeline</strong> that feeds your RAG system:
      </p>

      <Mermaid chart={`
graph LR
    subgraph "Prerequisites: PRISMA (Stages 1-3)"
        A[Stage 1:<br/>Define Scope] --> B[Stage 2:<br/>Query Databases]
        B --> C[Stage 3:<br/>Screen Papers]
        C --> D[Final Dataset<br/>50-150 papers]
    end

    subgraph "RAG System (Stages 4-5)"
        D --> E[Stage 4:<br/>Build Vector DB]
        E --> F[Stage 5:<br/>Query & Chat]
    end

    style A fill:#e0e7ff
    style C fill:#fce7f3
    style D fill:#dcfce7
    style E fill:#fef3c7
    style F fill:#bbf7d0
      `} />

      <div className="space-y-3 my-6 text-sm">
        <div className="flex items-start gap-3">
          <span className="font-semibold text-lg">1→3</span>
          <p className="text-muted">
            <strong>PRISMA Stages</strong>: Collect and screen papers systematically. Output: CSV file with approved papers + exclusion log.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-semibold text-lg">4→5</span>
          <p className="text-muted">
            <strong>RAG Stages</strong>: Convert approved papers into a queryable knowledge base. Output: Vector database + chat interface.
          </p>
        </div>
      </div>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 Key Insight</p>
        <p className="mb-0">
          PRISMA <strong>reduces noise</strong> (from 1,000+ papers to 100-200), ensuring your RAG system only contains relevant, high-quality sources. This prevents hallucinations and improves answer accuracy.
        </p>
      </div>

      <h4 className="text-lg font-semibold mt-8 mb-4">Supporting Research</h4>

      <div className="text-sm space-y-2 my-6">
        <p>
          <strong>PRISMA 2020 Statement</strong> (Page et al., 2021): "Systematic reviews should describe methods to minimize bias and error in the identification and selection of studies."
          <a href="https://www.bmj.com/content/372/bmj.n71" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 hover:underline">
            BMJ 2021;372:n71
          </a>
        </p>
        <p>
          <strong>Hallucinations in RAG Systems</strong> (Lewis et al., 2020): RAG models trained on unfiltered corpora show 2-3× higher hallucination rates compared to those using curated knowledge bases.
          <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 hover:underline">
            arXiv:2005.11401
          </a>
        </p>
        <p>
          <strong>AMSTAR 2 Guidelines</strong> (Shea et al., 2017): Lack of systematic search strategy is a "critical weakness" that can invalidate entire review findings.
          <a href="https://www.bmj.com/content/358/bmj.j4008" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 hover:underline">
            BMJ 2017;358:j4008
          </a>
        </p>
      </div>

      <h3 id="prisma-stages">The Four PRISMA Stages</h3>

      <Mermaid chart={`
graph TD
    A[1. Identification<br/>Search databases] --> B[Records Found<br/>n papers]
    B --> C[2. Screening<br/>Review titles/abstracts]
    C --> D{Meet<br/>criteria?}
    D -->|No| E[Excluded<br/>Reasons documented]
    D -->|Yes| F[3. Eligibility<br/>Full-text review]
    F --> G{Detailed<br/>assessment?}
    G -->|No| H[Excluded<br/>Specific reasons]
    G -->|Yes| I[4. Included<br/>Final dataset]
    I --> J[Qualitative Synthesis]
    I --> K[Quantitative Synthesis<br/>Meta-analysis]

    style A fill:#e0e7ff
    style C fill:#ddd6fe
    style F fill:#fce7f3
    style I fill:#dcfce7
    style J fill:#fef3c7
    style K fill:#fef3c7
      `} />

      <div className="space-y-6 my-8">
        <div className="border-l-4 border-gray-900 pl-6 py-2">
          <h4 className="font-semibold mb-2">1. Identification</h4>
          <p className="text-sm text-muted mb-2">
            Search multiple databases (PubMed, Scopus, Web of Science, etc.) using carefully designed queries. Document the number of records found from each source.
          </p>
          <p className="text-xs text-muted-foreground font-mono">Example: PubMed (450), Scopus (380), ERIC (320) → Total: 1,150 records</p>
        </div>

        <div className="border-l-4 border-gray-900 pl-6 py-2">
          <h4 className="font-semibold mb-2">2. Screening</h4>
          <p className="text-sm text-muted mb-2">
            Review titles and abstracts against predefined inclusion/exclusion criteria. This is where AI assistance (like ResearcherRAG) provides the most value.
          </p>
          <p className="text-xs text-muted-foreground font-mono">Typical screening reduces papers by 70-80%</p>
        </div>

        <div className="border-l-4 border-gray-900 pl-6 py-2">
          <h4 className="font-semibold mb-2">3. Eligibility</h4>
          <p className="text-sm text-muted mb-2">
            Assess full-text articles in detail. Check methodology, sample size, outcome measures, and other quality criteria.
          </p>
          <p className="text-xs text-muted-foreground font-mono">Further reduces by 40-60% based on detailed assessment</p>
        </div>

        <div className="border-l-4 border-gray-900 pl-6 py-2">
          <h4 className="font-semibold mb-2">4. Included</h4>
          <p className="text-sm text-muted mb-2">
            Final set of papers that meet all criteria. These form your knowledge base for synthesis or meta-analysis.
          </p>
          <p className="text-xs text-muted-foreground font-mono">Typical final count: 50-150 papers for doctoral dissertations</p>
        </div>
      </div>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 Why PRISMA Matters</p>
        <p className="mb-0">
          Following PRISMA ensures your literature review is <strong>systematic</strong> (replicable), <strong>transparent</strong> (auditable), and <strong>comprehensive</strong> (minimizes bias). Top journals require PRISMA compliance for systematic reviews.
        </p>
      </div>

      <h2 id="database-apis">Database APIs for Automation</h2>

      <p>
        ResearcherRAG uses <strong>three free, API-accessible databases</strong> chosen specifically for automation, PDF availability, and comprehensive coverage. Traditional databases like PubMed, Scopus, and Web of Science require expensive institutional subscriptions and don't provide automated PDF access.
      </p>

      <h3 id="why-these-databases">Why Semantic Scholar, OpenAlex, and arXiv?</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-3 text-lg">🚫 Traditional Databases</h4>
          <ul className="text-sm space-y-2 text-muted">
            <li>❌ <strong>PubMed</strong>: No direct PDF access via API</li>
            <li>❌ <strong>Scopus</strong>: Requires expensive institutional license</li>
            <li>❌ <strong>Web of Science</strong>: API access restricted</li>
            <li>❌ <strong>ERIC</strong>: Limited open access PDFs (~20%)</li>
            <li>❌ Manual download workflows required</li>
          </ul>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-3 text-lg">✅ ResearcherRAG Databases</h4>
          <ul className="text-sm space-y-2 text-muted">
            <li>✅ <strong>100% free</strong> API access (no authentication for basic use)</li>
            <li>✅ <strong>REST APIs</strong> for full automation</li>
            <li>✅ <strong>Open access PDF links</strong> included in metadata</li>
            <li>✅ <strong>50-60% PDF retrieval</strong> success rate combined</li>
            <li>✅ Covers most research domains comprehensively</li>
          </ul>
        </div>
      </div>

      <h3 id="database-comparison">Database Comparison Table</h3>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50 border-b-2 border-border">
            <tr>
              <th className="text-left p-3">Database</th>
              <th className="text-left p-3">Coverage</th>
              <th className="text-left p-3">Open Access Rate</th>
              <th className="text-left p-3">API Key</th>
              <th className="text-left p-3">Rate Limits</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-gray-50">
              <td className="p-3">
                <div className="font-semibold">📚 Semantic Scholar</div>
                <div className="text-xs text-muted">CS, Engineering, Sciences</div>
              </td>
              <td className="p-3 font-mono text-xs">200M+ papers</td>
              <td className="p-3">
                <span className="font-semibold text-foreground">~40%</span>
                <div className="text-xs text-muted">AI-generated TL;DRs</div>
              </td>
              <td className="p-3">
                <span className="text-orange-600 font-semibold">Required</span>
                <div className="text-xs text-muted">
                  <a href="https://www.semanticscholar.org/product/api" target="_blank" rel="noopener noreferrer" className="underline">Get API key</a>
                </div>
              </td>
              <td className="p-3 text-xs">100 requests/5 min</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3">
                <div className="font-semibold">🌍 OpenAlex</div>
                <div className="text-xs text-muted">All fields, comprehensive</div>
              </td>
              <td className="p-3 font-mono text-xs">250M+ works</td>
              <td className="p-3">
                <span className="font-semibold text-foreground">~50%</span>
                <div className="text-xs text-muted">Rich metadata</div>
              </td>
              <td className="p-3">
                <span className="text-green-600 font-semibold">Not required</span>
              </td>
              <td className="p-3 text-xs">10 req/sec (polite pool)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3">
                <div className="font-semibold">📄 arXiv</div>
                <div className="text-xs text-muted">STEM preprints</div>
              </td>
              <td className="p-3 font-mono text-xs">2.4M+ preprints</td>
              <td className="p-3">
                <span className="font-semibold text-green-600">100%</span>
                <div className="text-xs text-muted">All papers free</div>
              </td>
              <td className="p-3">
                <span className="text-green-600 font-semibold">Not required</span>
              </td>
              <td className="p-3 text-xs">3-second delay</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-usage-examples">API Usage Examples</h3>

      <div className="space-y-6 my-8">
        <details className="border border-border rounded-lg p-4 open:bg-gray-50">
          <summary className="font-semibold cursor-pointer">📚 Semantic Scholar API</summary>
          <div className="mt-3 text-sm space-y-2">
            <p className="text-muted">Search for papers and retrieve open access PDFs:</p>
            <CodeBlock
        language="python"
        code={`import requests

# Search query
query = "chatbot language learning"
url = f"https://api.semanticscholar.org/graph/v1/paper/search"
params = {
    "query": query,
    "fields": "title,authors,year,abstract,openAccessPdf",
    "limit": 100
}

response = requests.get(url, params=params)
papers = response.json()["data"]

# Extract PDF URLs
for paper in papers:
    if paper.get("openAccessPdf"):
        pdf_url = paper["openAccessPdf"]["url"]
        print(f"Title: {paper['title']}")
        print(f"PDF: {pdf_url}\\n")`}
      />
            <p className="text-muted mt-3">
              <strong>Key Features</strong>: AI-generated TL;DR summaries, citation counts, influence metrics, semantic similarity search
            </p>
          </div>
        </details>

        <details className="border border-border rounded-lg p-4 open:bg-gray-50">
          <summary className="font-semibold cursor-pointer">🌍 OpenAlex API</summary>
          <div className="mt-3 text-sm space-y-2">
            <p className="text-muted">Query with filters and retrieve comprehensive metadata:</p>
            <CodeBlock
        language="python"
        code={`import requests

# Search with filters
url = "https://api.openalex.org/works"
params = {
    "filter": "title.search:chatbot language learning,publication_year:2020-2024",
    "per-page": 100,
    "mailto": "your-email@example.com"  # Polite pool access
}

response = requests.get(url, params=params)
works = response.json()["results"]

# Extract open access PDFs
for work in works:
    if work.get("open_access", {}).get("oa_url"):
        pdf_url = work["open_access"]["oa_url"]
        print(f"Title: {work['title']}")
        print(f"Citations: {work['cited_by_count']}")
        print(f"PDF: {pdf_url}\\n")`}
      />
            <p className="text-muted mt-3">
              <strong>Key Features</strong>: Author affiliations, funder information, citation network, concept tagging, institutional repositories
            </p>
          </div>
        </details>

        <details className="border border-border rounded-lg p-4 open:bg-gray-50">
          <summary className="font-semibold cursor-pointer">📄 arXiv API</summary>
          <div className="mt-3 text-sm space-y-2">
            <p className="text-muted">Search preprints with 100% PDF access:</p>
            <CodeBlock
        language="python"
        code={`import requests
import time

# Search arXiv
base_url = "http://export.arxiv.org/api/query"
query = "chatbot AND language learning"
params = {
    "search_query": f"all:{query}",
    "start": 0,
    "max_results": 100
}

response = requests.get(base_url, params=params)
time.sleep(3)  # Required delay between requests

# Parse XML response
import xml.etree.ElementTree as ET
root = ET.fromstring(response.content)

for entry in root.findall('{http://www.w3.org/2005/Atom}entry'):
    title = entry.find('{http://www.w3.org/2005/Atom}title').text
    arxiv_id = entry.find('{http://www.w3.org/2005/Atom}id').text.split('/')[-1]
    pdf_url = f"https://arxiv.org/pdf/{arxiv_id}.pdf"
    print(f"Title: {title}")
    print(f"PDF: {pdf_url}\\n")`}
      />
            <p className="text-muted mt-3">
              <strong>Key Features</strong>: Latest preprints (pre-publication), LaTeX source available, version tracking, cross-lists across categories
            </p>
          </div>
        </details>
      </div>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">✅ Combined Strategy</p>
        <p className="text-sm mb-2">
          ResearcherRAG queries <strong>all three databases</strong> and deduplicates results by DOI, arXiv ID, and title similarity. This multi-source approach:
        </p>
        <ul className="text-sm space-y-1 mb-0">
          <li>✓ Maximizes coverage across research domains</li>
          <li>✓ Achieves ~50-60% PDF retrieval success rate</li>
          <li>✓ Provides fallback when one source is incomplete</li>
          <li>✓ Ensures comprehensive literature coverage</li>
        </ul>
      </div>

      <h2 id="rag-architecture">RAG Architecture</h2>

      <p>
        <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer">Retrieval-Augmented Generation</a> (RAG) combines the best of information retrieval and language generation. Instead of relying solely on an LLM's training data (which can be outdated or lead to hallucinations), RAG retrieves relevant documents first, then generates answers grounded in those documents.
      </p>

      <h3 id="rag-pipeline">How RAG Works</h3>

      <Mermaid chart={`
sequenceDiagram
    participant U as User
    participant R as RAG System
    participant V as Vector DB
    participant L as LLM

    U->>R: Ask question
    R->>R: Convert to embedding
    R->>V: Search similar documents
    V-->>R: Top-k relevant chunks
    R->>R: Build context prompt
    R->>L: Send context + question
    L-->>R: Generate answer
    R->>R: Add citations
    R-->>U: Answer with sources

    Note over R,V: Semantic Search<br/>(embeddings)
    Note over R,L: Contextual Generation<br/>(grounded response)
      `} />

      <ol className="space-y-4 my-8">
        <li>
          <strong className="text-foreground">Query Processing</strong>
          <p className="text-sm text-muted mt-1">User's question is converted to a vector embedding (mathematical representation)</p>
        </li>
        <li>
          <strong className="text-foreground">Semantic Search</strong>
          <p className="text-sm text-muted mt-1">Vector database finds the most similar document chunks based on cosine similarity or other metrics</p>
        </li>
        <li>
          <strong className="text-foreground">Context Assembly</strong>
          <p className="text-sm text-muted mt-1">Top-k results (usually 3-10) are combined into a context window</p>
        </li>
        <li>
          <strong className="text-foreground">Prompted Generation</strong>
          <p className="text-sm text-muted mt-1">LLM receives: system prompt + retrieved context + user question</p>
        </li>
        <li>
          <strong className="text-foreground">Citation Addition</strong>
          <p className="text-sm text-muted mt-1">Responses include specific paper citations and page numbers</p>
        </li>
      </ol>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">✅ RAG Benefits</p>
        <ul className="text-sm space-y-1 mb-0">
          <li><strong>No hallucinations</strong>: Answers grounded in actual papers</li>
          <li><strong>Citable</strong>: Every claim has a source</li>
          <li><strong>Up-to-date</strong>: Add new papers anytime</li>
          <li><strong>Domain-specific</strong>: Only uses your curated knowledge base</li>
        </ul>
      </div>

      <h2 id="vector-databases">Vector Databases</h2>

      <p>
        Vector databases store high-dimensional embeddings and enable fast similarity search. Unlike traditional databases (which use exact matching), vector databases use <strong>approximate nearest neighbor</strong> (ANN) algorithms to find semantically similar content.
      </p>

      <h3 id="database-options">Popular Options for ResearcherRAG</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <span className="text-2xl">🦜</span>
            <a href="https://www.trychroma.com/" target="_blank" rel="noopener noreferrer">ChromaDB</a>
          </h4>
          <p className="text-sm text-muted mb-3">Lightweight, open-source, Python-native</p>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted">Best for:</span>
              <span className="font-medium">Beginners, small-medium projects</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Max papers:</span>
              <span className="font-medium">~10,000 papers</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Setup:</span>
              <span className="font-medium text-foreground">Extremely easy</span>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <a href="https://github.com/facebookresearch/faiss" target="_blank" rel="noopener noreferrer">FAISS</a>
          </h4>
          <p className="text-sm text-muted mb-3">Facebook's high-performance library</p>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted">Best for:</span>
              <span className="font-medium">Large-scale, production</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Max papers:</span>
              <span className="font-medium">Millions</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Setup:</span>
              <span className="font-medium text-foreground">Moderate</span>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <span className="text-2xl">🔵</span>
            <a href="https://qdrant.tech/" target="_blank" rel="noopener noreferrer">Qdrant</a>
          </h4>
          <p className="text-sm text-muted mb-3">Cloud-native with filtering capabilities</p>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted">Best for:</span>
              <span className="font-medium">Production, cloud deployment</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Max papers:</span>
              <span className="font-medium">Millions</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Setup:</span>
              <span className="font-medium text-foreground">Moderate</span>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <span className="text-2xl">🐘</span>
            <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener noreferrer">pgvector</a>
          </h4>
          <p className="text-sm text-muted mb-3">PostgreSQL extension for vectors</p>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted">Best for:</span>
              <span className="font-medium">Existing PostgreSQL users</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Max papers:</span>
              <span className="font-medium">~100,000 papers</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Setup:</span>
              <span className="font-medium text-foreground">Complex</span>
            </div>
          </div>
        </div>
      </div>

      <div className="callout">
        <p className="font-semibold mb-2">📝 ResearcherRAG Default</p>
        <p className="mb-0">
          We recommend <strong>ChromaDB</strong> for most users. It requires zero configuration, works locally, and handles typical literature review sizes (50-500 papers) with ease. You can always migrate to FAISS or Qdrant later if needed.
        </p>
      </div>

      <h2 id="embeddings">Embeddings Explained</h2>

      <p>
        Embeddings are vector representations of text that capture semantic meaning. Similar concepts are close together in high-dimensional space, enabling semantic search.
      </p>

      <Mermaid chart={`
graph LR
    A[Text Input] --> B[Embedding Model]
    B --> C[Vector<br/>768 or 1536 dimensions]

    D["Machine Learning"] --> E[Model]
    E --> F["[0.23, -0.45, 0.12, ...]"]

    G["Artificial Intelligence"] --> H[Model]
    H --> I["[0.21, -0.43, 0.15, ...]"]

    J["Pizza Recipe"] --> K[Model]
    K --> L["[-0.67, 0.82, -0.34, ...]"]

    F -.Close in space.-> I
    F -.Far in space.-> L

    style A fill:#e0e7ff
    style C fill:#dcfce7
      `} />

      <h3 id="embedding-models">Popular Embedding Models</h3>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50 border-b-2 border-border">
            <tr>
              <th className="text-left p-3">Model</th>
              <th className="text-left p-3">Dimensions</th>
              <th className="text-left p-3">Performance</th>
              <th className="text-left p-3">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-medium">
                <a href="https://openai.com/index/new-embedding-models-and-api-updates/" target="_blank" rel="noopener noreferrer">
                  text-embedding-3-small
                </a>
              </td>
              <td className="p-3 font-mono text-xs">1536</td>
              <td className="p-3">
                <span className="font-semibold">Excellent</span>
              </td>
              <td className="p-3 text-muted">General purpose, cost-effective</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-medium">
                <a href="https://openai.com/index/new-embedding-models-and-api-updates/" target="_blank" rel="noopener noreferrer">
                  text-embedding-3-large
                </a>
              </td>
              <td className="p-3 font-mono text-xs">3072</td>
              <td className="p-3">
                <span className="font-semibold">Best</span>
              </td>
              <td className="p-3 text-muted">Maximum accuracy, research</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-medium">
                <a href="https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2" target="_blank" rel="noopener noreferrer">
                  all-MiniLM-L6-v2
                </a>
              </td>
              <td className="p-3 font-mono text-xs">384</td>
              <td className="p-3">
                <span className="font-semibold">Good</span>
              </td>
              <td className="p-3 text-muted">Free, local, privacy-focused</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-medium">
                <a href="https://huggingface.co/BAAI/bge-large-en-v1.5" target="_blank" rel="noopener noreferrer">
                  bge-large-en-v1.5
                </a>
              </td>
              <td className="p-3 font-mono text-xs">1024</td>
              <td className="p-3">
                <span className="font-semibold">Excellent</span>
              </td>
              <td className="p-3 text-muted">Open-source, high quality</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">💰 Cost Considerations</p>
        <p className="text-sm mb-2">
          OpenAI embeddings cost: <code>$0.00002 per 1k tokens</code> (text-embedding-3-small)
        </p>
        <p className="text-sm mb-0">
          For 150 papers × 20 pages × 500 words each: <strong>~$3 in embedding costs</strong>. Local models like all-MiniLM-L6-v2 are free but require more setup.
        </p>
      </div>

      <h2 id="chunking-strategies">Text Chunking Strategies</h2>

      <p>
        Academic papers are too long to embed as a single unit (typical limit: 8,192 tokens ≈ 6,000 words). We must split them into chunks while preserving context.
      </p>

      <Mermaid chart={`
graph TD
    A[Full Paper<br/>20 pages] --> B{Chunking Strategy}
    B --> C[Fixed-size Chunks<br/>500 tokens]
    B --> D[Semantic Chunks<br/>By paragraphs]
    B --> E[Hierarchical Chunks<br/>Section-aware]

    C --> F[Pros: Simple, Fast<br/>Cons: May split mid-sentence]
    D --> G[Pros: Context preserved<br/>Cons: Variable size]
    E --> H[Pros: Best quality<br/>Cons: Complex parsing]

    style A fill:#e0e7ff
    style C fill:#fce7f3
    style D fill:#fef3c7
    style E fill:#dcfce7
      `} />

      <div className="space-y-4 my-8">
        <details className="border border-border rounded-lg p-4 open:bg-gray-50">
          <summary className="font-semibold cursor-pointer">Fixed-Size Chunking (Simple)</summary>
          <div className="mt-3 text-sm space-y-2">
            <p className="text-muted">Split every N tokens, with optional overlap.</p>
            <CodeBlock
        language="text"
        code={`chunk_size = 500  # tokens
overlap = 50      # overlap between chunks

# Example output:
# Chunk 1: tokens 0-500
# Chunk 2: tokens 450-950
# Chunk 3: tokens 900-1400`}
      />
            <p className="text-muted"><strong>Best for</strong>: Quick prototyping, homogeneous texts</p>
          </div>
        </details>

        <details className="border border-border rounded-lg p-4 open:bg-gray-50">
          <summary className="font-semibold cursor-pointer">Semantic Chunking (Recommended)</summary>
          <div className="mt-3 text-sm space-y-2">
            <p className="text-muted">Split at paragraph boundaries, respecting sentence integrity.</p>
            <CodeBlock
        language="yaml"
        code={`# Pseudo-code
paragraphs = split_by_double_newline(text)
chunks = []
current_chunk = ""

for para in paragraphs:
    if len(current_chunk + para) < max_size:
        current_chunk += para
    else:
        chunks.append(current_chunk)
        current_chunk = para`}
      />
            <p className="text-muted"><strong>Best for</strong>: Most academic papers</p>
          </div>
        </details>

        <details className="border border-border rounded-lg p-4 open:bg-gray-50">
          <summary className="font-semibold cursor-pointer">Hierarchical Chunking (Advanced)</summary>
          <div className="mt-3 text-sm space-y-2">
            <p className="text-muted">Parse PDF structure (sections, subsections) and chunk by logical units.</p>
            <p className="text-muted">Each chunk includes metadata: <code>{`{"section": "Methods", "subsection": "Participants"}`}</code></p>
            <p className="text-muted"><strong>Best for</strong>: Large corpus, complex queries</p>
          </div>
        </details>
      </div>

      <h2 id="putting-it-together">Putting It All Together</h2>

      <p>
        ResearcherRAG combines all these concepts into a cohesive workflow:
      </p>

      <Mermaid chart={`
graph TB
    subgraph "Stage 3: PRISMA"
        A[Raw Papers] --> B[Screen with AI]
        B --> C[Approved Papers]
    end

    subgraph "Stage 4: RAG Build"
        C --> D[Extract PDF Text]
        D --> E[Chunk Documents]
        E --> F[Generate Embeddings]
        F --> G[Store in Vector DB]
    end

    subgraph "Stage 5: Query"
        H[User Question] --> I[Query Embedding]
        I --> J[Search Vector DB]
        J --> K[Retrieve Top-k]
        K --> L[LLM Generation]
        L --> M[Answer + Citations]
    end

    G -.->|Powers| J

    style B fill:#fce7f3
    style F fill:#fef3c7
    style L fill:#dcfce7
      `} />

      <h2 id="next-steps">Next Steps</h2>

      <p>
        Now that you understand the core concepts, you're ready to implement your own RAG system. Continue to <Link href="/guide/04-implementation">Chapter 4: Implementation Guide</Link> for a detailed walkthrough of all 7 stages.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-6 my-8">
        <p className="text-sm text-gray-400 mb-2">Key takeaways:</p>
        <ul className="text-sm space-y-1 mb-0 font-mono">
          <li>✓ PRISMA ensures systematic, transparent reviews</li>
          <li>✓ RAG combines retrieval + generation for grounded answers</li>
          <li>✓ ChromaDB is perfect for most literature reviews</li>
          <li>✓ OpenAI embeddings offer best quality/cost balance</li>
          <li>✓ Semantic chunking preserves context better than fixed-size</li>
        </ul>
      </div>

      <p className="text-sm text-muted mt-8">
        <strong>Further Reading</strong>: <a href="https://www.prisma-statement.org/prisma-2020-flow-diagram" target="_blank" rel="noopener noreferrer">PRISMA 2020 Flow Diagram</a> · <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer">RAG Paper (Lewis et al.)</a> · <a href="https://www.pinecone.io/learn/vector-database/" target="_blank" rel="noopener noreferrer">Vector Database Guide</a>
      </p>
    </GuideLayout>
  )
}
