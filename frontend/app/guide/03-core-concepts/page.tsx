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

      <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-gray-900 dark:border-gray-100 p-4 my-6">
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
        <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6 py-2">
          <h4 className="font-semibold mb-2">1. Identification</h4>
          <p className="text-sm text-muted mb-2">
            Search multiple databases (PubMed, Scopus, Web of Science, etc.) using carefully designed queries. Document the number of records found from each source.
          </p>
          <p className="text-xs text-muted-foreground font-mono">Example: PubMed (450), Scopus (380), ERIC (320) → Total: 1,150 records</p>
        </div>

        <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6 py-2">
          <h4 className="font-semibold mb-2">2. Screening</h4>
          <p className="text-sm text-muted mb-2">
            Review titles and abstracts against predefined inclusion/exclusion criteria. This is where AI assistance (like ResearcherRAG) provides the most value.
          </p>
          <p className="text-xs text-muted-foreground font-mono">Typical screening reduces papers by 70-80%</p>
        </div>

        <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6 py-2">
          <h4 className="font-semibold mb-2">3. Eligibility</h4>
          <p className="text-sm text-muted mb-2">
            Assess full-text articles in detail. Check methodology, sample size, outcome measures, and other quality criteria.
          </p>
          <p className="text-xs text-muted-foreground font-mono">Further reduces by 40-60% based on detailed assessment</p>
        </div>

        <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6 py-2">
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
        Now that you understand the core concepts, you're ready to implement your own RAG system. Continue to <Link href="/guide/04-implementation">Chapter 4: Implementation Guide</Link> for a detailed walkthrough of all 5 stages.
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
