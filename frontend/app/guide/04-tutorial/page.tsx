import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function CompleteTutorialPage() {
  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/ScholaRAG/tree/main/prompts"
      githubLabel="View All Stage Prompts"
    >
      <h1>Complete Tutorial: Building Your First RAG System</h1>

      <p className="text-xl text-muted leading-relaxed mb-8">
        Follow a real-world example project step-by-step. This tutorial shows you exactly what prompts to copy-paste, what conversations to have with Claude Code, and what results to expect at each stage.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📖 Before You Start</p>
        <p className="mb-0">
          Make sure you've completed <Link href="/guide/02-getting-started" className="underline">Getting Started</Link>. You should have ScholaRAG cloned and Claude Code installed.
        </p>
      </div>

      <div className="border-2 border-gray-900 rounded-lg p-6 bg-white mb-8">
        <h3 className="text-lg font-semibold mb-3">📚 Example Project</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-2">Context:</p>
            <ul className="space-y-1">
              <li>• <strong>Researcher</strong>: PhD student in Education</li>
              <li>• <strong>Field</strong>: Language Learning</li>
              <li>• <strong>Time</strong>: 30 min active + 2 hrs automated</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Research Question:</p>
            <p className="italic border-l-4 border-gray-900 pl-3">
              "Do AI chatbots improve speaking proficiency in university language learners?"
            </p>
            <p className="mt-2"><strong>Goal</strong>: 60-80 papers for dissertation</p>
          </div>
        </div>
      </div>

      <h2 id="workflow-overview">The 7-Stage Workflow</h2>

      <p>
        Each stage uses a dedicated prompt that you copy-paste to Claude Code. Claude reads the prompt, has a conversation with you, then automatically executes Python scripts when ready.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="text-xs font-semibold text-gray-600 mb-1">STAGES 1-3</p>
          <p className="font-semibold mb-2">Planning</p>
          <p className="text-sm text-muted">Define scope, design queries, configure PRISMA criteria</p>
          <p className="text-xs text-gray-600 mt-2">⏱️ ~25 minutes</p>
        </div>
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="text-xs font-semibold text-gray-600 mb-1">STAGES 4-5</p>
          <p className="font-semibold mb-2">Building</p>
          <p className="text-sm text-muted">Fetch papers, screen with AI-PRISMA, build vector DB</p>
          <p className="text-xs text-gray-600 mt-2">⏱️ ~1-2 hours (automated)</p>
        </div>
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="text-xs font-semibold text-gray-600 mb-1">STAGES 6-7</p>
          <p className="font-semibold mb-2">Research</p>
          <p className="text-sm text-muted">Query your RAG, write documentation</p>
          <p className="text-xs text-gray-600 mt-2">⏱️ Ongoing</p>
        </div>
      </div>

      <h2 id="initialization">Step 0: Initialize Project</h2>

      <p>Before starting Stage 1, create your project folder:</p>

      <CodeBlock
        language="bash"
        code={`cd ScholaRAG
python scholarag_cli.py init

# Answer the prompts:
# Project name: AI-Chatbots-Language-Learning
# Research question: Do AI chatbots improve speaking proficiency?
# Domain: education`}
      />

      <p className="mt-4">This creates a timestamped project folder with standardized structure:</p>

      <CodeBlock
        language="text"
        code={`projects/2025-10-24_AI-Chatbots-Language-Learning/
├── config.yaml
├── data/
├── rag/
└── outputs/`}
      />

      <h2 id="stage1">Stage 1: Research Domain Setup (15 min)</h2>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-4">
        <p className="font-semibold mb-2">📋 What This Stage Does</p>
        <p className="text-sm mb-0">Refines your research question through conversation. Claude asks clarifying questions about scope, constraints, and criteria. Result: Updated <code>config.yaml</code> with precise parameters.</p>
      </div>

      <h3>How to Run</h3>

      <ol className="space-y-3 my-4">
        <li>
          <strong>1. Open project in VS Code:</strong>
          <CodeBlock language="bash" code="cd projects/2025-10-24_AI-Chatbots-Language-Learning" />
        </li>
        <li>
          <strong>2. Open Claude Code:</strong> Press <code>Cmd/Ctrl + Shift + P</code> → "Claude: Open Chat"
        </li>
        <li>
          <strong>3. Copy Stage 1 prompt:</strong> Open <code>ScholaRAG/prompts/01_research_domain_setup.md</code>
        </li>
        <li>
          <strong>4. Paste to Claude Code and follow conversation</strong>
        </li>
      </ol>

      <details className="border rounded-lg my-6">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-gray-50">
          💬 Example Conversation
        </summary>
        <div className="p-4 space-y-4">
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm font-semibold mb-1">Claude:</p>
            <p className="text-sm">"Are you focusing on ESL or all foreign languages?"</p>
          </div>
          <div className="bg-white p-3 rounded border">
            <p className="text-sm font-semibold mb-1">You:</p>
            <p className="text-sm">"Both ESL and foreign languages"</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm font-semibold mb-1">Claude:</p>
            <p className="text-sm">"Should we include rule-based chatbots or only AI-powered?"</p>
          </div>
          <div className="bg-white p-3 rounded border">
            <p className="text-sm font-semibold mb-1">You:</p>
            <p className="text-sm">"Only AI-powered (neural networks)"</p>
          </div>
          <p className="text-xs text-gray-600">...and so on for 3-5 rounds</p>
        </div>
      </details>

      <div className="bg-white border rounded p-4 my-4">
        <p className="font-semibold text-sm mb-2">✅ Stage 1 Complete When:</p>
        <ul className="text-sm space-y-1">
          <li>• <code>config.yaml</code> updated with refined criteria</li>
          <li>• Research question is specific and answerable</li>
          <li>• Expected paper count is reasonable (20-500)</li>
        </ul>
      </div>

      <h2 id="stage2">Stage 2: Query Strategy (10 min)</h2>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-4">
        <p className="font-semibold mb-2">📋 What This Stage Does</p>
        <p className="text-sm mb-0">Designs Boolean search queries for each database (Semantic Scholar, OpenAlex, arXiv). Claude suggests keywords, synonyms, and exclusion terms. Result: Search queries in <code>config.yaml</code>.</p>
      </div>

      <h3>How to Run</h3>

      <ol className="space-y-2 my-4 text-sm">
        <li><strong>1.</strong> Open <code>ScholaRAG/prompts/02_query_strategy.md</code></li>
        <li><strong>2.</strong> Copy entire prompt → Paste to Claude Code</li>
        <li><strong>3.</strong> Claude generates queries → You review and approve</li>
      </ol>

      <details className="border rounded-lg my-6">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-gray-50">
          📝 Example Query Output
        </summary>
        <div className="p-4">
          <CodeBlock
            language="text"
            code={`Semantic Scholar Query:
(chatbot OR "conversational agent" OR "dialogue system") AND
(language learning OR "second language" OR "foreign language") AND
(speaking OR pronunciation OR fluency OR "oral proficiency")

Exclusion:
NOT (children OR "primary school" OR "elementary")`}
          />
        </div>
      </details>

      <h2 id="stage3">Stage 3: PRISMA Configuration (20 min)</h2>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-4">
        <p className="font-semibold mb-2">📋 What This Stage Does</p>
        <p className="text-sm mb-0">Creates AI-PRISMA rubric with inclusion/exclusion criteria. Defines how AI will evaluate papers. Result: <code>data/prisma/ai_prisma_rubric.yaml</code></p>
      </div>

      <h3>How to Run</h3>

      <ol className="space-y-2 my-4 text-sm">
        <li><strong>1.</strong> Copy <code>prompts/03_prisma_configuration.md</code> to Claude</li>
        <li><strong>2.</strong> Define criteria through conversation (research design, outcome measures, etc.)</li>
        <li><strong>3.</strong> Claude generates rubric → You review</li>
      </ol>

      <h2 id="stage4">Stage 4: RAG Design (15 min)</h2>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-4">
        <p className="font-semibold mb-2">📋 What This Stage Does</p>
        <p className="text-sm mb-0">Plans vector database configuration (chunk size, embedding model, etc.). Result: RAG config in <code>config.yaml</code></p>
      </div>

      <p className="text-sm text-gray-600 my-4">
        This stage is mostly automated. Claude uses sensible defaults (ChromaDB, 512-token chunks, OpenAI embeddings). You just confirm.
      </p>

      <h2 id="stage5">Stage 5: Execution (1-2 hours, automated)</h2>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-4">
        <p className="font-semibold mb-2">📋 What This Stage Does</p>
        <p className="text-sm mb-0">Runs 5 Python scripts sequentially: fetch → deduplicate → screen → download PDFs → build RAG. Claude executes these automatically. You can monitor progress.</p>
      </div>

      <h3>Automated Steps</h3>

      <div className="space-y-3 my-6">
        <div className="border-l-4 border-gray-600 pl-4 py-2">
          <p className="font-semibold text-sm">01_fetch_papers.py</p>
          <p className="text-xs text-gray-600">Queries Semantic Scholar, OpenAlex, arXiv</p>
          <p className="text-xs mt-1">Output: <code>data/open_access/*.csv</code></p>
        </div>
        <div className="border-l-4 border-gray-600 pl-4 py-2">
          <p className="font-semibold text-sm">02_deduplicate.py</p>
          <p className="text-xs text-gray-600">Removes duplicates by DOI, title similarity</p>
          <p className="text-xs mt-1">Output: <code>data/combined/deduplicated.csv</code></p>
        </div>
        <div className="border-l-4 border-gray-600 pl-4 py-2">
          <p className="font-semibold text-sm">03_screen_papers.py</p>
          <p className="text-xs text-gray-600">AI-PRISMA screening with Claude</p>
          <p className="text-xs mt-1">Output: <code>data/prisma/screened.csv</code></p>
        </div>
        <div className="border-l-4 border-gray-600 pl-4 py-2">
          <p className="font-semibold text-sm">04_download_pdfs.py</p>
          <p className="text-xs text-gray-600">Downloads PDFs from open access URLs</p>
          <p className="text-xs mt-1">Output: <code>data/pdfs/*.pdf</code></p>
        </div>
        <div className="border-l-4 border-gray-600 pl-4 py-2">
          <p className="font-semibold text-sm">05_build_rag.py</p>
          <p className="text-xs text-gray-600">Chunks PDFs, generates embeddings, builds ChromaDB</p>
          <p className="text-xs mt-1">Output: <code>rag/chroma_db/</code></p>
        </div>
      </div>

      <div className="bg-white border rounded p-4 my-4">
        <p className="font-semibold text-sm mb-2">✅ Stage 5 Complete When:</p>
        <ul className="text-sm space-y-1">
          <li>• Vector database built: <code>rag/chroma_db/</code></li>
          <li>• PDFs downloaded: <code>data/pdfs/</code></li>
          <li>• PRISMA diagram generated: <code>outputs/prisma_diagram.png</code></li>
        </ul>
      </div>

      <h2 id="stage6">Stage 6: Research Conversation (ongoing)</h2>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-4">
        <p className="font-semibold mb-2">📋 What This Stage Does</p>
        <p className="text-sm mb-0">Query your RAG system to extract insights. Use specialized prompts from <Link href="/guide/prompt-library" className="underline">Prompt Library</Link>.</p>
      </div>

      <p className="my-4">Instead of direct Claude chat, you use the RAG interface:</p>

      <CodeBlock
        language="bash"
        code="python scripts/06_query_rag.py"
      />

      <p className="mt-4">This ensures all answers are grounded in your screened papers, not Claude's general knowledge.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link href="/guide/05-research-conversation" className="border hover:border-gray-900 rounded-lg p-4 transition-colors">
          <h4 className="font-semibold mb-2">📖 Research Conversation Guide</h4>
          <p className="text-sm text-gray-600">Learn query strategies and best practices</p>
        </Link>
        <Link href="/guide/prompt-library" className="border hover:border-gray-900 rounded-lg p-4 transition-colors">
          <h4 className="font-semibold mb-2">💡 Prompt Library</h4>
          <p className="text-sm text-gray-600">7 ready-to-use research prompts</p>
        </Link>
      </div>

      <h2 id="stage7">Stage 7: Documentation & Writing (ongoing)</h2>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-4">
        <p className="font-semibold mb-2">📋 What This Stage Does</p>
        <p className="text-sm mb-0">Generate PRISMA diagrams, organize findings, prepare publication materials.</p>
      </div>

      <p className="my-4">Generate PRISMA diagram:</p>

      <CodeBlock
        language="bash"
        code="python scripts/07_generate_prisma.py"
      />

      <p className="mt-4">This creates publication-ready PRISMA 2020 flow diagram with your paper counts.</p>

      <Link href="/guide/06-documentation-writing" className="block border hover:border-gray-900 rounded-lg p-4 transition-colors my-6">
        <h4 className="font-semibold mb-2">📄 Documentation & Writing Guide</h4>
        <p className="text-sm text-gray-600">Learn how to structure systematic reviews and manage bibliographies</p>
      </Link>

      <h2 id="troubleshooting">Common Issues</h2>

      <details className="border rounded-lg p-4 my-4">
        <summary className="font-semibold cursor-pointer">No papers found in Stage 5</summary>
        <div className="mt-3 text-sm space-y-2">
          <p><strong>Cause:</strong> Query too restrictive or databases don't have papers in your domain</p>
          <p><strong>Solution:</strong></p>
          <ol className="ml-4 space-y-1">
            <li>1. Go back to Stage 2, broaden queries</li>
            <li>2. Adjust year range (e.g., 2010-2025 instead of 2020-2025)</li>
            <li>3. Add more synonym keywords</li>
          </ol>
        </div>
      </details>

      <details className="border rounded-lg p-4 my-4">
        <summary className="font-semibold cursor-pointer">AI-PRISMA screening rejected all papers</summary>
        <div className="mt-3 text-sm space-y-2">
          <p><strong>Cause:</strong> Inclusion criteria too strict</p>
          <p><strong>Solution:</strong></p>
          <ol className="ml-4 space-y-1">
            <li>1. Review <code>data/prisma/ai_prisma_rubric.yaml</code></li>
            <li>2. Relax criteria (e.g., allow quasi-experimental, not just RCT)</li>
            <li>3. Re-run <code>python scripts/03_screen_papers.py</code></li>
          </ol>
        </div>
      </details>

      <details className="border rounded-lg p-4 my-4">
        <summary className="font-semibold cursor-pointer">PDF download rate very low (&lt;30%)</summary>
        <div className="mt-3 text-sm space-y-2">
          <p><strong>Cause:</strong> Most papers behind paywalls (common in medicine/psychology)</p>
          <p><strong>Solution:</strong></p>
          <ol className="ml-4 space-y-1">
            <li>1. Use institutional access if available</li>
            <li>2. Add arXiv preprints to search</li>
            <li>3. Consider "Knowledge Repository Mode" (see README) for broader coverage</li>
          </ol>
        </div>
      </details>

      <h2 id="next-steps">What's Next?</h2>

      <p>
        You now have a working RAG system! The real research begins in Stage 6. Explore the <Link href="/guide/prompt-library" className="underline">Prompt Library</Link> for specialized query templates, or dive into <Link href="/guide/05-research-conversation" className="underline">Research Conversation</Link> to learn advanced querying techniques.
      </p>
    </GuideLayout>
  )
}
