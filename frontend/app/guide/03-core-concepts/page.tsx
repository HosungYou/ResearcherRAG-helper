import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Mermaid from '@/components/Mermaid'
import { CodeBlock } from '@/components/CodeBlock'

export default function CoreConceptsPage() {
  return (
    <GuideLayout>
      <h1 id="core-concepts">Core Concepts</h1>

      <p className="text-xl text-muted mt-6 mb-8">
        Understand the key technologies and methodologies behind ScholaRAG: why we use PRISMA for systematic reviews, why RAG beats generic chatbots, and why these specific tools were chosen.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 For Researchers</p>
        <p className="mb-0">
          This chapter explains <strong>why</strong> ScholaRAG works this way, not <strong>how</strong> to code it. Technical implementation details are in the <Link href="/codebook" className="underline">Codebook</Link>.
        </p>
      </div>

      <h2 id="prisma-methodology">PRISMA: The Gold Standard for Systematic Reviews</h2>

      <p>
        <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer" className="underline">PRISMA</a> (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is an evidence-based framework for conducting transparent, reproducible literature reviews. Updated in 2020, it's the standard for academic systematic reviews and meta-analyses.
      </p>

      <h3 id="why-prisma">Why ScholaRAG Uses PRISMA</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-3 text-lg">🚫 Generic RAG Systems</h4>
          <ul className="text-sm space-y-2 text-muted">
            <li>❌ Dump random PDFs into vector DB</li>
            <li>❌ No quality control or screening</li>
            <li>❌ Can't defend why papers were included</li>
            <li>❌ Mix high-quality and low-quality sources</li>
            <li>❌ Not reproducible by other researchers</li>
            <li>❌ Can't publish findings</li>
          </ul>
          <p className="text-xs mt-4 text-muted-foreground italic">
            "I threw 500 random PDFs from Google Scholar into a database."
          </p>
        </div>

        <div className="border-2 border-gray-900 rounded-lg p-6 bg-gray-50">
          <h4 className="font-semibold mb-3 text-lg">✅ ScholaRAG with PRISMA</h4>
          <ul className="text-sm space-y-2 text-gray-900">
            <li>✓ Systematic database search with documented queries</li>
            <li>✓ Clear inclusion/exclusion criteria</li>
            <li>✓ AI-powered screening with transparent rubric</li>
            <li>✓ Only high-quality, relevant papers included</li>
            <li>✓ Fully reproducible methodology</li>
            <li>✓ Publication-ready systematic review</li>
          </ul>
          <p className="text-xs mt-4 font-medium">
            "67 papers screened from 1,243 using PRISMA 2020 guidelines."
          </p>
        </div>
      </div>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Critical Understanding</p>
        <p className="mb-0">
          PRISMA is <strong>NOT</strong> optional—it's what makes your RAG system academically valid. Stages 1-3 (PRISMA screening) happen BEFORE building your vector database (Stages 4-5).
        </p>
      </div>

      <h3 id="prisma-flow">PRISMA 2020 Flow</h3>

      <Mermaid chart={`
graph TD
    A[Identification:<br/>Search databases] --> B[Screening:<br/>Remove duplicates]
    B --> C[Screening:<br/>Title/abstract review]
    C --> D[Eligibility:<br/>Full-text review]
    D --> E[Included:<br/>Build RAG system]

    A --> A1[Semantic Scholar<br/>OpenAlex<br/>arXiv]
    B --> B1[2,000 papers → 1,200 unique]
    C --> C1[AI-PRISMA screening]
    D --> D1[Manual validation]
    E --> E1[Vector Database]

    style E fill:#dcfce7
    style E1 fill:#dcfce7
      `} />

      <p className="mt-6">
        <strong>ScholaRAG automates</strong> the screening stages (C and D) using AI-PRISMA rubrics, saving weeks of manual work while maintaining academic rigor.
      </p>

      <h2 id="why-these-databases">Why Semantic Scholar, OpenAlex, and arXiv?</h2>

      <p>
        Traditional databases like PubMed, Scopus, and Web of Science don't provide automated PDF access. ScholaRAG uses three open-access databases specifically chosen for their APIs and PDF availability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="border rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">
            <a href="https://www.semanticscholar.org/" target="_blank" rel="noopener noreferrer" className="underline">
              Semantic Scholar
            </a>
          </h4>
          <p className="text-sm text-muted mb-3">AI-powered academic search</p>
          <div className="space-y-1 text-xs">
            <p><strong>Coverage:</strong> 200M+ papers across all fields</p>
            <p><strong>Open Access:</strong> ~40% have PDF URLs</p>
            <p><strong>API:</strong> Free, no authentication required</p>
            <p><strong>Best for:</strong> Broad interdisciplinary searches</p>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">
            <a href="https://openalex.org/" target="_blank" rel="noopener noreferrer" className="underline">
              OpenAlex
            </a>
          </h4>
          <p className="text-sm text-muted mb-3">Open catalog of scholarly papers</p>
          <div className="space-y-1 text-xs">
            <p><strong>Coverage:</strong> 240M+ works</p>
            <p><strong>Open Access:</strong> ~50% with OA URLs</p>
            <p><strong>API:</strong> Free, polite pool available</p>
            <p><strong>Best for:</strong> Comprehensive coverage</p>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">
            <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" className="underline">
              arXiv
            </a>
          </h4>
          <p className="text-sm text-muted mb-3">Preprint repository</p>
          <div className="space-y-1 text-xs">
            <p><strong>Coverage:</strong> 2.4M+ preprints</p>
            <p><strong>Open Access:</strong> 100% free PDFs</p>
            <p><strong>API:</strong> Free XML API</p>
            <p><strong>Best for:</strong> CS, physics, math, stats</p>
          </div>
        </div>
      </div>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">✅ Combined Strategy</p>
        <p className="text-sm mb-2">
          ScholaRAG queries <strong>all three</strong> and deduplicates by DOI/title. This achieves:
        </p>
        <ul className="text-sm space-y-1 mb-0">
          <li>✓ ~50-60% overall PDF retrieval success</li>
          <li>✓ Maximum coverage across domains</li>
          <li>✓ Fallback when one source is incomplete</li>
          <li>✓ No institutional subscriptions required</li>
        </ul>
      </div>

      <h2 id="rag-vs-chatgpt">RAG vs. Generic Chatbots: Why RAG?</h2>

      <p>
        You might wonder: "Why not just ask ChatGPT or Claude about my research topic?" Here's why RAG is essential for academic work:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg p-5 bg-white">
          <h4 className="font-semibold mb-3">❌ Direct ChatGPT/Claude</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold mb-1">Training Data Cutoff</p>
              <p className="text-muted">Doesn't know papers published after training</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Hallucinations</p>
              <p className="text-muted">Can invent citations that don't exist</p>
            </div>
            <div>
              <p className="font-semibold mb-1">No Verification</p>
              <p className="text-muted">Can't check if claims are accurate</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Generic Knowledge</p>
              <p className="text-muted">Doesn't focus on your specific corpus</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-gray-900 rounded-lg p-5 bg-gray-50">
          <h4 className="font-semibold mb-3">✅ ScholaRAG System</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold mb-1">Current & Complete</p>
              <p className="text-gray-900">Searches up-to-date databases (2025)</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Grounded Answers</p>
              <p className="text-gray-900">Every claim backed by actual paper in your DB</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Verifiable Citations</p>
              <p className="text-gray-900">Includes paper titles, authors, page numbers</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Your Curated Knowledge</p>
              <p className="text-gray-900">Only searches PRISMA-screened papers</p>
            </div>
          </div>
        </div>
      </div>

      <h3 id="rag-workflow">How RAG Works</h3>

      <Mermaid chart={`
sequenceDiagram
    participant U as Researcher
    participant R as ScholaRAG
    participant V as Vector DB<br/>(Your 67 Papers)
    participant L as Claude/GPT

    U->>R: "What are the main findings?"
    R->>V: Search similar content
    V-->>R: 5 most relevant paper chunks
    R->>L: Context + Question
    L-->>R: Answer based ONLY on context
    R-->>U: Answer + Citations

    Note over V: Semantic Search<br/>(finds relevant papers)
    Note over L: Grounded Generation<br/>(no hallucinations)
      `} />

      <p className="mt-6">
        <strong>Key insight:</strong> The LLM (Claude/GPT) doesn't "remember" papers—it only sees the 5-10 most relevant chunks you give it. This prevents hallucinations and ensures citations are real.
      </p>

      <h2 id="vector-databases">Why Vector Databases?</h2>

      <p>
        Traditional databases use exact keyword matching. Vector databases enable <strong>semantic search</strong>—finding papers by meaning, not just keywords.
      </p>

      <div className="bg-gray-50 border rounded-lg p-5 my-6">
        <h4 className="font-semibold mb-3">Example: Semantic Search</h4>
        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border">
            <p className="font-semibold mb-1">Your Question:</p>
            <p>"What are the benefits of conversational AI for pronunciation?"</p>
          </div>
          <div className="bg-white p-3 rounded border">
            <p className="font-semibold mb-1">Papers Found (semantically similar):</p>
            <ul className="mt-2 space-y-1">
              <li>✓ "Effects of chatbot interaction on L2 speaking fluency"</li>
              <li>✓ "Dialogue systems for accent reduction in ESL learners"</li>
              <li>✓ "AI-powered feedback on oral proficiency"</li>
            </ul>
            <p className="text-xs text-muted mt-2">
              Note: None use exact words "conversational AI" or "pronunciation"
            </p>
          </div>
        </div>
      </div>

      <h3 id="chromadb-choice">Why ChromaDB for ScholaRAG?</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">
            <a href="https://www.trychroma.com/" target="_blank" rel="noopener noreferrer" className="underline">
              ChromaDB
            </a> (Recommended)
          </h4>
          <ul className="text-sm space-y-2">
            <li>✓ Zero configuration setup</li>
            <li>✓ Works locally (no cloud required)</li>
            <li>✓ Handles 50-500 papers easily</li>
            <li>✓ Python-native integration</li>
            <li>✓ Open-source and free</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 bg-gray-50">
          <h4 className="font-semibold mb-2">Alternatives</h4>
          <p className="text-sm mb-3"><strong>FAISS:</strong> For 10,000+ papers (complex setup)</p>
          <p className="text-sm mb-3"><strong>Qdrant:</strong> For cloud deployment (requires server)</p>
          <p className="text-sm mb-0"><strong>pgvector:</strong> For PostgreSQL users (complex)</p>
        </div>
      </div>

      <div className="callout">
        <p className="font-semibold mb-2">📝 ScholaRAG Default</p>
        <p className="mb-0">
          Start with <strong>ChromaDB</strong>. It's what Claude Code sets up automatically. You can migrate to FAISS/Qdrant later if you scale to thousands of papers.
        </p>
      </div>

      <h2 id="embeddings-simple">What Are Embeddings? (Simplified)</h2>

      <p>
        Embeddings convert text into numbers (vectors) that capture meaning. Similar concepts get similar numbers, enabling semantic search.
      </p>

      <div className="bg-gray-50 border rounded-lg p-5 my-6">
        <h4 className="font-semibold mb-3">Intuitive Example</h4>
        <div className="space-y-2 text-sm font-mono">
          <p>"Machine Learning" → [0.23, -0.45, 0.12, ...] <span className="text-xs text-muted">(768 numbers)</span></p>
          <p>"Artificial Intelligence" → [0.21, -0.43, 0.15, ...] <span className="text-xs text-muted">(close to above)</span></p>
          <p>"Pizza Recipe" → [-0.67, 0.82, -0.34, ...] <span className="text-xs text-muted">(far from above)</span></p>
        </div>
        <p className="text-xs text-muted mt-3">
          The database calculates distance between vectors to find similar papers.
        </p>
      </div>

      <h3 id="embedding-model-choice">Which Embedding Model?</h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border-b">Model</th>
              <th className="text-left p-3 border-b">Cost</th>
              <th className="text-left p-3 border-b">Quality</th>
              <th className="text-left p-3 border-b">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-semibold">
                <a href="https://openai.com/index/new-embedding-models-and-api-updates/" target="_blank" rel="noopener noreferrer" className="underline">
                  OpenAI text-embedding-3-small
                </a>
              </td>
              <td className="p-3">$0.02 / 1M tokens</td>
              <td className="p-3">⭐⭐⭐⭐</td>
              <td className="p-3">Most users (default)</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">
                <a href="https://huggingface.co/sentence-transformers" target="_blank" rel="noopener noreferrer" className="underline">
                  sentence-transformers
                </a>
              </td>
              <td className="p-3">Free (local)</td>
              <td className="p-3">⭐⭐⭐</td>
              <td className="p-3">Budget-conscious</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">Voyage AI</td>
              <td className="p-3">$0.10 / 1M tokens</td>
              <td className="p-3">⭐⭐⭐⭐⭐</td>
              <td className="p-3">Highest accuracy needed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout">
        <p className="font-semibold mb-2">📝 ScholaRAG Default</p>
        <p className="mb-0">
          Uses <strong>OpenAI text-embedding-3-small</strong>. For a typical project (100 papers), embedding costs ~$0.50 total. High quality, low cost.
        </p>
      </div>

      <h2 id="putting-it-together">Putting It All Together</h2>

      <Mermaid chart={`
graph TD
    A[PRISMA Screening<br/>Stages 1-3] --> B[1,243 papers]
    B --> C[AI-PRISMA Rubric]
    C --> D[67 screened papers]
    D --> E[Download PDFs]
    E --> F[Chunk into passages]
    F --> G[Generate embeddings<br/>OpenAI API]
    G --> H[ChromaDB<br/>Vector Database]
    H --> I[Ready for RAG queries]

    style A fill:#e0e7ff
    style C fill:#fce7f3
    style H fill:#dcfce7
    style I fill:#dcfce7
      `} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="text-xs font-semibold text-gray-600 mb-2">STEP 1-3</p>
          <p className="font-semibold mb-2">PRISMA Screening</p>
          <p className="text-sm text-muted">Ensures only high-quality, relevant papers</p>
        </div>
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="text-xs font-semibold text-gray-600 mb-2">STEP 4-5</p>
          <p className="font-semibold mb-2">Vector Database</p>
          <p className="text-sm text-muted">Enables semantic search across papers</p>
        </div>
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="text-xs font-semibold text-gray-600 mb-2">STEP 6-7</p>
          <p className="font-semibold mb-2">RAG Queries</p>
          <p className="text-sm text-muted">Grounded answers with real citations</p>
        </div>
      </div>

      <h2 id="next-steps">What's Next?</h2>

      <p>
        Now that you understand <strong>why</strong> ScholaRAG uses these technologies, you're ready to build your own system. The <Link href="/guide/04-tutorial" className="underline">Complete Tutorial</Link> walks you through all 7 stages with a real example.
      </p>

      <h2 id="further-reading">Learn More</h2>

      <div className="space-y-3 my-6 text-sm">
        <p>
          <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            PRISMA 2020 Official Guidelines
          </a> — Comprehensive guide to systematic reviews
        </p>
        <p>
          <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            RAG Paper (Lewis et al., 2020)
          </a> — Original research on Retrieval-Augmented Generation
        </p>
        <p>
          <a href="https://www.trychroma.com/docs" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            ChromaDB Documentation
          </a> — Learn more about vector databases
        </p>
        <p>
          <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            Contextual Retrieval (Anthropic)
          </a> — Advanced RAG techniques
        </p>
      </div>
    </GuideLayout>
  )
}
