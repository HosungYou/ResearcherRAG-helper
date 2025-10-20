import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function GettingStartedPage() {
  return (
    <GuideLayout>
      <h1 id="getting-started">Getting Started</h1>

      <p className="text-xl text-muted mt-6 mb-8">
        Set up ScholarRAG in 30 minutes. Install prerequisites, clone the repository, and start your first systematic literature review workflow.
      </p>

      <h2 id="prerequisites">Step 1: Install Prerequisites</h2>

      <p>You'll need Python, VS Code, and an AI coding assistant. Install everything before proceeding.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-3">Required Software</h4>
          <ul className="text-sm space-y-2 mb-0">
            <li><a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="underline">Python 3.10-3.14</a> (recommended: 3.12+)</li>
            <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="underline">VS Code</a> latest version</li>
            <li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="underline">Git</a> for cloning</li>
          </ul>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-3">AI Assistant Subscription</h4>
          <ul className="text-sm space-y-2 mb-0">
            <li><strong>Option A:</strong> <a href="https://claude.ai/settings" target="_blank" rel="noopener noreferrer" className="underline">Claude Pro</a> $20/mo (★ Recommended)</li>
            <li><strong>Option B:</strong> <a href="https://chat.openai.com/settings" target="_blank" rel="noopener noreferrer" className="underline">ChatGPT Plus</a> $20/mo</li>
            <li>⚠️ API keys work but cost more ($15-50+ per project)</li>
          </ul>
        </div>
      </div>

      <h3 id="install-extension">Installing Claude Code Extension</h3>

      <p>ScholarRAG works best with Claude Code. Here's how to install and set it up:</p>

      <ol className="space-y-3 my-6">
        <li>
          <strong>1. Open VS Code</strong>
          <p className="text-sm text-muted-foreground">Launch Visual Studio Code</p>
        </li>
        <li>
          <strong>2. Open Extensions Panel</strong>
          <p className="text-sm text-muted-foreground">Press <code>Cmd/Ctrl + Shift + X</code> or click Extensions icon in sidebar</p>
        </li>
        <li>
          <strong>3. Search for "Claude Code"</strong>
          <p className="text-sm text-muted-foreground">Type "Claude Code" by Anthropic in search box</p>
        </li>
        <li>
          <strong>4. Install Extension</strong>
          <p className="text-sm text-muted-foreground">Click <strong>Install</strong> button</p>
        </li>
        <li>
          <strong>5. Sign In</strong>
          <p className="text-sm text-muted-foreground">Click Claude icon in sidebar → Sign in with your <a href="https://claude.ai/settings" target="_blank" rel="noopener noreferrer" className="underline">Claude Pro account</a></p>
        </li>
        <li>
          <strong>6. Verify Installation</strong>
          <p className="text-sm text-muted-foreground">You should see Claude chat interface in the sidebar</p>
        </li>
      </ol>

      <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 my-6">
        <p className="font-semibold mb-2">✅ Quick Test</p>
        <p className="text-sm mb-2">Open Claude Code chat and type "Hello" to verify it's working.</p>
        <p className="text-xs text-muted-foreground">💡 Extension link: <a href="https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-code" target="_blank" rel="noopener noreferrer" className="underline">marketplace.visualstudio.com/claude-code</a></p>
      </div>

      <h2 id="setup">Step 2: Setup ScholarRAG</h2>

      <p>Clone the repository and install dependencies using these commands:</p>

      <CodeBlock
        language="bash"
        code={`# Clone the repository
git clone https://github.com/HosungYou/ScholarRAG.git
cd ScholarRAG

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\\Scripts\\activate

# Install CLI dependencies
pip install --upgrade pip
pip install click pyyaml

# Initialize your first project
python scholarag_cli.py init`}
      />

      <p className="mt-4">You'll be prompted for:</p>

      <div className="border border-gray-300 rounded-lg p-4 my-4 bg-white">
        <div className="space-y-2 text-sm">
          <div>
            <span className="text-muted-foreground">Project name:</span> <strong>AI-Healthcare-Adoption</strong>
            <p className="text-xs text-muted-foreground ml-4">Use hyphens, no spaces</p>
          </div>
          <div>
            <span className="text-muted-foreground">Research question:</span> <strong>What factors influence AI adoption in hospitals?</strong>
          </div>
          <div>
            <span className="text-muted-foreground">Domain:</span> <strong>medicine</strong>
            <p className="text-xs text-muted-foreground ml-4">Options: education | medicine | psychology | social-science</p>
          </div>
        </div>
      </div>

      <h3 id="project-structure">What Gets Created</h3>

      <CodeBlock
        language="bash"
        code={`projects/2025-10-15_AI-Healthcare-Adoption/
├── config.yaml             ← Project settings (with AI-PRISMA rubric)
├── README.md
├── data/
│   ├── open_access/        ← Open access database results
│   │   ├── semantic_scholar.csv
│   │   ├── openalex.csv
│   │   └── arxiv.csv
│   ├── institutional/      ← Institutional database results (optional)
│   │   ├── scopus.csv
│   │   └── wos.csv
│   ├── combined/           ← Deduplicated merged results
│   ├── prisma/             ← AI-PRISMA rubric and evaluation
│   └── pdfs/               ← Downloaded PDFs
├── rag/
│   └── chroma_db/          ← Vector database
├── outputs/                ← PRISMA diagrams
└── conversations/          ← RAG session logs`}
      />

      <h2 id="first-workflow">Step 3: Start Your First Workflow</h2>

      <p>Open your project in VS Code and start Claude Code:</p>

      <CodeBlock
        language="bash"
        code={`# Navigate to your project
cd projects/2025-10-15_AI-Healthcare-Adoption

# Open in VS Code
code .`}
      />

      <p className="mt-4">Once VS Code opens:</p>

      <ol className="space-y-2 my-6">
        <li><strong>1. Open Claude Code</strong>: Press <code>Cmd/Ctrl + Shift + P</code> → Type "Claude: Open Chat"</li>
        <li><strong>2. Copy Stage 1 Prompt</strong>: Open <code>prompts/01_research_domain_setup.md</code> in the ScholarRAG root folder</li>
        <li><strong>3. Paste to Claude Code</strong>: Copy the entire prompt and paste into Claude chat</li>
        <li><strong>4. Follow Claude's Guidance</strong>: Answer its questions about your research scope</li>
      </ol>

      <h3 id="stage-workflow">7-Stage Workflow</h3>

      <CodeBlock
        language="text"
        code={`Stage 1: Research Domain Setup (15 min)
    → Define scope, research questions, constraints

Stage 2: Query Strategy (10 min)
    → Design Boolean queries, select databases

Stage 3: PRISMA Configuration (20 min)
    → Configure AI-PRISMA rubric with multi-dimensional criteria

Stage 4: Paper Retrieval (1-2 hrs)
    → Fetch ALL papers from databases (complete retrieval)
    → Interactive confirmation for large datasets
    → Newest-first ordering with year cutoff options

Stage 5: Screening & Validation (30-60 min)
    → AI-powered multi-dimensional paper evaluation
    → Confidence-based auto-include/exclude decisions
    → Optional human validation with agreement metrics

Stage 6: RAG Building (1-2 hrs)
    → Download PDFs, build vector database (automated)

Stage 7: Research Conversation & Documentation (ongoing)
    → Query your RAG system for insights
    → Generate PRISMA diagrams and reports`}
      />

      <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 my-8">
        <p className="font-semibold mb-2">💡 Enhanced Features</p>
        <p className="text-sm mb-2">
          <strong>Complete Retrieval:</strong> ScholarRAG fetches ALL available papers (no arbitrary limits), with smart pagination and user confirmation for large datasets.
        </p>
        <p className="text-sm mb-2">
          <strong>AI-PRISMA Rubric:</strong> Multi-dimensional paper evaluation using large language models with transparent criteria, evidence grounding, and optional human validation.
        </p>
        <p className="text-sm mb-0">
          <strong>Total time:</strong> ~4-5 hours for initial setup (including validation), then ongoing for research conversations.
        </p>
      </div>

      <h2 id="verify">Verifying Setup</h2>

      <p>Check that everything is installed correctly:</p>

      <CodeBlock
        language="bash"
        code={`# Check Python version
python3 --version
# Should show: Python 3.10+ (preferably 3.12+)

# Verify CLI tool works
python scholarag_cli.py --help
# Should show: Available commands

# List your projects
python scholarag_cli.py list
# Should show: Your created project`}
      />

      <div className="border border-gray-300 rounded-lg p-4 bg-white my-6">
        <p className="font-semibold mb-2">✅ Setup Complete!</p>
        <p className="text-sm mb-0">
          If all commands work, you're ready to build your RAG system. Proceed to <Link href="/guide/03-core-concepts" className="underline">Chapter 3: Core Concepts</Link>.
        </p>
      </div>

      <h2 id="troubleshooting">Common Issues</h2>

      <details className="border border-gray-300 rounded-lg p-4 my-4">
        <summary className="font-semibold cursor-pointer">Python not found</summary>
        <div className="mt-3 text-sm">
          <p><strong>Error:</strong> <code>command not found: python3</code></p>
          <p><strong>Solution:</strong> Install Python from <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="underline">python.org/downloads</a></p>
        </div>
      </details>

      <details className="border border-gray-300 rounded-lg p-4 my-4">
        <summary className="font-semibold cursor-pointer">Claude Code not responding</summary>
        <div className="mt-3 text-sm">
          <p><strong>Solution:</strong></p>
          <ol className="ml-4 space-y-1">
            <li>Press <code>Cmd/Ctrl + Shift + P</code> → "Reload Window"</li>
            <li>Re-authenticate: Claude icon → Sign out → Sign in</li>
            <li>Update extension to latest version</li>
          </ol>
        </div>
      </details>

      <details className="border border-gray-300 rounded-lg p-4 my-4">
        <summary className="font-semibold cursor-pointer">Virtual environment activation fails</summary>
        <div className="mt-3 text-sm">
          <p><strong>Windows users:</strong> Use <code>venv\Scripts\activate</code> (not forward slash)</p>
          <p><strong>Permission denied:</strong> Try <code>chmod +x venv/bin/activate</code> first</p>
        </div>
      </details>

      <h2 id="one-click-setup" className="mt-12 pt-8 border-t border-gray-300">One-Click Automated Setup</h2>

      <p>
        <strong>Prefer fully automated setup?</strong> Copy this single prompt to Claude Code and it will handle all steps automatically:
      </p>

      <div className="border-2 border-gray-900 rounded-lg p-6 bg-gray-50 my-6">
        <p className="font-semibold mb-3">📋 Copy → Paste to Claude Code → Done</p>

        <CodeBlock
          language="text"
          code={`Please set up ScholarRAG for me automatically:

1. Clone https://github.com/HosungYou/ScholarRAG.git
2. Navigate into ScholarRAG directory
3. Create Python virtual environment (venv)
4. Activate the virtual environment
5. Install dependencies: pip install click pyyaml
6. Initialize a new project: python scholarag_cli.py init
7. Verify setup: python scholarag_cli.py --help

Execute these steps one by one and let me know if any issues occur.`}
        />
      </div>

      <div className="border-l-4 border-gray-900 bg-white rounded-lg p-4 my-6">
        <p className="font-semibold mb-2">✨ What Claude Code Will Do:</p>
        <ul className="text-sm space-y-1 mb-0">
          <li>✅ Clone repository</li>
          <li>✅ Create and activate virtual environment</li>
          <li>✅ Install Python dependencies</li>
          <li>✅ Run CLI initialization</li>
          <li>✅ Verify setup succeeded</li>
        </ul>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        <strong>Estimated time:</strong> 2-3 minutes (fully automated). You'll be prompted for project name during initialization.
      </p>

      <h2 id="next-steps" className="mt-12">Next Steps</h2>

      <p>
        Now that ScholarRAG is set up, learn about the underlying concepts: <Link href="/guide/03-core-concepts" className="underline">Chapter 3: Core Concepts</Link>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <Link href="/guide/03-core-concepts" className="border border-gray-300 hover:border-gray-900 rounded-lg p-4 transition-colors bg-white">
          <h4 className="font-semibold mb-2">📖 Core Concepts</h4>
          <p className="text-sm text-muted-foreground mb-0">
            Learn about PRISMA, RAG architecture, and vector databases
          </p>
        </Link>
        <Link href="/guide/prompt-library" className="border border-gray-300 hover:border-gray-900 rounded-lg p-4 transition-colors bg-white">
          <h4 className="font-semibold mb-2">💡 Prompt Library</h4>
          <p className="text-sm text-muted-foreground mb-0">
            Browse 7 specialized prompts for Stage 6 research conversations
          </p>
        </Link>
      </div>
    </GuideLayout>
  )
}
