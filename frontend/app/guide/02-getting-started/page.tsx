import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function GettingStartedPage() {
  return (
    <GuideLayout>
      <h1 id="getting-started">Getting Started</h1>

      <p className="text-xl text-muted mt-6 mb-8">
        Set up your environment, clone the repository, and run your first ResearcherRAG workflow in under 30 minutes.
      </p>

      <h2 id="system-requirements">System Requirements</h2>

      <p>
        Before we begin, ensure your system meets these requirements:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-3">Minimum Specifications</h4>
          <ul className="text-sm space-y-2 mb-0">
            <li>macOS 11+, Windows 10+, or Linux</li>
            <li>8GB RAM (16GB recommended)</li>
            <li>5GB free disk space</li>
            <li>Internet connection</li>
          </ul>
        </div>
        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-3">Software Dependencies</h4>
          <ul className="text-sm space-y-2 mb-0">
            <li><a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python 3.9-3.11</a></li>
            <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> latest version</li>
            <li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a> for cloning</li>
            <li><a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic API key</a></li>
          </ul>
        </div>
      </div>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Python Version Note</p>
        <p className="mb-0">
          Python 3.12+ is not yet fully compatible due to some dependencies. Stick with <strong>Python 3.9-3.11</strong> for now.
        </p>
      </div>

      <h2 id="installation">Installation Steps</h2>

      <h3 id="step1-vscode">Step 1: Install VS Code and Claude Code Extension</h3>

      <ol>
        <li>Download and install <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a></li>
        <li>Open VS Code and navigate to Extensions (<code>Cmd/Ctrl + Shift + X</code>)</li>
        <li>Search for "Claude Code" and click <strong>Install</strong></li>
        <li>Sign in with your Anthropic account when prompted</li>
      </ol>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 First Time with Claude Code?</p>
        <p className="mb-0">
          Claude Code is an AI pair programmer that lives in VS Code. It can read your files, suggest code, and guide you through complex workflows. Learn more at <a href="https://claude.ai/claude-code" target="_blank" rel="noopener noreferrer">claude.ai/claude-code</a>.
        </p>
      </div>

      <h3 id="step2-api-key">Step 2: Obtain Anthropic API Key</h3>

      <ol>
        <li>Visit <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">console.anthropic.com</a> and sign up/in</li>
        <li>Navigate to <strong>API Keys</strong> in the dashboard</li>
        <li>Click <strong>Create Key</strong> and give it a name (e.g., "ResearcherRAG")</li>
        <li>Copy the key (starts with <code>sk-ant-...</code>) immediately—it won't be shown again</li>
        <li>Store it securely (we'll use it in Step 4)</li>
      </ol>

      <div className="bg-gray-50 border border-border rounded-lg p-6 my-6">
        <p className="text-sm font-semibold mb-3 text-muted-foreground">API Pricing Reference (as of 2024)</p>
        <table className="w-full text-sm">
          <thead className="border-b border-border">
            <tr>
              <th className="text-left py-2">Model</th>
              <th className="text-left py-2">Input</th>
              <th className="text-left py-2">Output</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr className="border-b border-border">
              <td className="py-2">Claude 3.5 Sonnet</td>
              <td>$3 / 1M tokens</td>
              <td>$15 / 1M tokens</td>
            </tr>
            <tr>
              <td className="py-2 text-muted-foreground">Typical literature review</td>
              <td colSpan={2} className="py-2 font-semibold text-foreground">$5-15 total</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="step3-clone">Step 3: Clone ResearcherRAG Repository</h3>

      <p>Open your terminal and run:</p>

      <CodeBlock
        language="bash"
        code={`# Clone the repository
git clone https://github.com/HosungYou/ResearcherRAG.git

# Navigate into the directory
cd ResearcherRAG

# Verify the structure
ls -la`}
      />

      <p>You should see:</p>

      <CodeBlock
        language="bash"
        code={`ResearcherRAG/
├── README.md              # Project overview
├── QUICK_START.md         # Fast setup guide
├── CLAUDE.md              # Instructions for Claude Code
├── prompts/               # Stage 1-5 prompt templates
│   ├── 01_research_domain_setup.md
│   ├── 02_query_strategy.md
│   ├── 03_prisma_configuration.md
│   ├── 04_rag_design.md
│   └── 05_execution_plan.md
├── templates/             # Output templates
└── workshop/              # Example workflows`}
      />

      <h3 id="step4-environment">Step 4: Set Up Python Environment</h3>

      <p>Create a virtual environment to isolate dependencies:</p>

      <CodeBlock
        language="text"
        code={`# Create virtual environment
python3 -m venv venv

# Activate it
# On macOS/Linux:
source venv/bin/activate

# On Windows:
venv\\Scripts\\activate

# You should see (venv) in your terminal prompt`}
      />

      <p>Install required packages:</p>

      <CodeBlock
        language="bash"
        code={`# Upgrade pip first
pip install --upgrade pip

# Install dependencies (will be created during workflow)
# For now, install basic tools:
pip install anthropic langchain chromadb python-dotenv`}
      />

      <div className="callout callout-success">
        <p className="font-semibold mb-2">✅ Pro Tip</p>
        <p className="mb-0">
          Keep your virtual environment activated throughout the workshop. If you close your terminal, remember to run <code>source venv/bin/activate</code> again.
        </p>
      </div>

      <h3 id="step5-env-file">Step 5: Configure Environment Variables</h3>

      <p>Create a <code>.env</code> file in the project root:</p>

      <CodeBlock
        language="bash"
        code={`# Create .env file
touch .env

# Open in VS Code
code .env`}
      />

      <p>Add your API key:</p>

      <CodeBlock
        filename=".env"
        language="bash"
        code={`# .env file contents
ANTHROPIC_API_KEY=sk-ant-your-key-here

# Optional: Specify model (defaults to claude-3-5-sonnet-20241022)
ANTHROPIC_MODEL=claude-3-5-sonnet-20241022

# Optional: Max tokens per request
ANTHROPIC_MAX_TOKENS=4096`}
      />

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">🔒 Security Warning</p>
        <p className="mb-0">
          Never commit your <code>.env</code> file to Git! It's already in <code>.gitignore</code>, but double-check before pushing to GitHub.
        </p>
      </div>

      <h2 id="first-workflow">Your First Workflow</h2>

      <h3 id="open-claude">Opening the Project in Claude Code</h3>

      <ol>
        <li>In VS Code, go to <strong>File → Open Folder</strong></li>
        <li>Select the <code>ResearcherRAG</code> directory</li>
        <li>Trust the workspace when prompted</li>
        <li>Open the Claude Code panel (sidebar icon or <code>Cmd/Ctrl + Shift + P</code> → "Claude Code")</li>
      </ol>

      <h3 id="stage1-conversation">Starting Stage 1: Research Domain Setup</h3>

      <p>Open <code>prompts/01_research_domain_setup.md</code> and copy the template. Here's a quick example:</p>

      <CodeBlock
        language="markdown"
        code={`I want to build a RAG system for my research project.

**My Research Topic**: Effectiveness of spaced repetition algorithms
in vocabulary acquisition for language learners.

**Research Field**: Education (Applied Linguistics, EdTech)

**Research Questions**:
- Do adaptive spaced repetition systems outperform fixed-interval review?
- What factors (word frequency, learner proficiency) moderate effectiveness?

**Scope Constraints**:
- Year range: 2010-2024
- Publication types: Peer-reviewed journals
- Languages: English only
- Study designs: Experimental or quasi-experimental

**Existing Knowledge**:
- Preliminary search: ~300 papers on "spaced repetition vocabulary"
- Aware of: Leitner system, SuperMemo, Anki

**My Goal**:
- Target: 60-80 papers for thesis lit review
- Intended use: Literature review chapter

**My Technical Background**:
- Programming experience: Basic Python
- RAG/AI experience: First time

Please help me design an effective literature search strategy.`}
      />

      <p>Paste this into Claude Code chat and press Enter. Claude will:</p>

      <ol>
        <li>Ask clarifying questions about your research scope</li>
        <li>Suggest additional keywords and concepts</li>
        <li>Estimate expected paper counts</li>
        <li>Recommend data sources</li>
        <li>Create a <code>research_domain.json</code> file with your setup</li>
      </ol>

      <h3 id="conversation-flow">Understanding the Conversation Flow</h3>

      <p>The workflow follows this pattern:</p>

      <div className="bg-gray-50 border border-border rounded-lg p-6 my-8">
        <CodeBlock
        language="yaml"
        code={`Stage 1: Research Domain Setup (15 min)
    ↓
Stage 2: Query Strategy Design (10 min)
    ↓
Stage 3: PRISMA Configuration (20 min)
    ↓
Stage 4: RAG System Design (15 min)
    ↓
Stage 5: Execution & Validation (3-4 hours automated)
    ↓
✓ Your RAG system is ready!`}
      />
      </div>

      <p>Each stage builds on the previous one. Claude Code will:</p>

      <ul>
        <li>Generate configuration files (<code>.json</code>, <code>.yaml</code>)</li>
        <li>Create Python scripts for automation</li>
        <li>Provide commands to run at each step</li>
        <li>Validate outputs before moving to the next stage</li>
      </ul>

      <h2 id="verifying-setup">Verifying Your Setup</h2>

      <h3 id="test-api">Test Your API Connection</h3>

      <p>Create a test script:</p>

      <CodeBlock
        filename="test_api.py"
        language="python"
        code={`import os
from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv()

client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=100,
    messages=[{"role": "user", "content": "Hello, Claude!"}]
)

print(message.content[0].text)
print("✓ API connection successful!")`}
      />

      <p>Run it:</p>

      <CodeBlock
        language="bash"
        code={`python test_api.py

# Expected output:
# "Hello! I'm Claude, an AI assistant..."
# ✓ API connection successful!`}
      />

      <div className="callout callout-success">
        <p className="font-semibold mb-2">✅ Setup Complete!</p>
        <p className="mb-0">
          If you see the success message, you're ready to start building your RAG system. Proceed to <Link href="/guide/03-core-concepts">Chapter 3: Core Concepts</Link> to understand the underlying architecture.
        </p>
      </div>

      <h2 id="common-issues">Common Setup Issues</h2>

      <div className="space-y-4 my-8">
        <details className="border border-border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Python version mismatch</summary>
          <div className="mt-3 text-sm text-muted">
            <p><strong>Error</strong>: <code>ModuleNotFoundError</code> or incompatible package versions</p>
            <p><strong>Solution</strong>: Check your Python version with <code>python --version</code>. If it's 3.12+, downgrade to 3.11:</p>
            <CodeBlock
              language="bash"
              code={`# Using pyenv:
pyenv install 3.11.6
pyenv local 3.11.6

# Or download from python.org and reinstall`}
              className="mt-2"
            />
          </div>
        </details>

        <details className="border border-border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">API key not recognized</summary>
          <div className="mt-3 text-sm text-muted">
            <p><strong>Error</strong>: <code>AuthenticationError</code> or <code>Invalid API key</code></p>
            <p><strong>Solution</strong>:</p>
            <ol className="ml-4 space-y-1">
              <li>Verify <code>.env</code> file exists in project root (not in a subdirectory)</li>
              <li>Check for typos in <code>ANTHROPIC_API_KEY</code> (no quotes needed)</li>
              <li>Ensure <code>load_dotenv()</code> is called before accessing <code>os.getenv()</code></li>
              <li>Restart VS Code after changing <code>.env</code></li>
            </ol>
          </div>
        </details>

        <details className="border border-border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer">Claude Code extension not responding</summary>
          <div className="mt-3 text-sm text-muted">
            <p><strong>Solution</strong>:</p>
            <ol className="ml-4 space-y-1">
              <li>Check VS Code bottom-right for error messages</li>
              <li>Reload window: <code>Cmd/Ctrl + Shift + P</code> → "Reload Window"</li>
              <li>Re-authenticate: Click Claude icon → Sign out → Sign in</li>
              <li>Update extension to latest version</li>
            </ol>
          </div>
        </details>
      </div>

      <h2 id="next-steps">Next Steps</h2>

      <p>
        Now that your environment is set up, you're ready to dive deeper into the concepts that power ResearcherRAG. Continue to <Link href="/guide/03-core-concepts">Chapter 3: Core Concepts</Link> to learn about PRISMA, RAG architecture, and vector databases.
      </p>

      <CodeBlock
        language="bash"
        code={`# Activate environment
source venv/bin/activate

# Start VS Code
code .

# Test API
python test_api.py

# View stage prompts
cat prompts/01_research_domain_setup.md`}
        className="my-8"
      />

      <p className="text-sm text-muted mt-8">
        <strong>Resources</strong>: <a href="https://code.visualstudio.com/docs" target="_blank" rel="noopener noreferrer">VS Code Docs</a> · <a href="https://docs.anthropic.com/claude/docs" target="_blank" rel="noopener noreferrer">Anthropic API Docs</a> · <a href="https://github.com/HosungYou/ResearcherRAG" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </GuideLayout>
  )
}
