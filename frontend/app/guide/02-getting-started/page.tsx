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

      <h3 id="step1-ai-assistant">Step 1: Choose Your AI Coding Assistant</h3>

      <p>
        ResearcherRAG works with multiple AI coding assistants. Choose one based on your preference—<strong>both work perfectly!</strong>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        <div className="border-2 border-blue-500 dark:border-blue-400 rounded-lg p-6 bg-blue-50 dark:bg-blue-950/20">
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-lg font-semibold m-0">Claude Code</h4>
            <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Recommended</span>
          </div>
          <p className="text-sm mb-4">
            Anthropic's official VS Code extension with 200K token context window—optimized for ResearcherRAG's long prompts and academic workflows.
          </p>
          <ul className="text-sm space-y-2 mb-4">
            <li>✅ Best for 5-stage PRISMA workflow</li>
            <li>✅ Handles large literature reviews</li>
            <li>✅ Academic research focus</li>
            <li>✅ Seamless with Stage prompts</li>
          </ul>
          <div className="space-y-2">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded no-underline"
            >
              Install Claude Code →
            </a>
            <p className="text-xs text-center text-muted-foreground">
              Requires: <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">Anthropic API key</a>
            </p>
          </div>
        </div>

        <div className="border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-lg font-semibold m-0">OpenAI Codex</h4>
            <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">GPT-5-Codex</span>
          </div>
          <p className="text-sm mb-4">
            OpenAI's agentic coding assistant with powerful reasoning. Works in VS Code, Cursor, Windsurf, and VS Code Insiders.
          </p>
          <ul className="text-sm space-y-2 mb-4">
            <li>✅ GPT-5-Codex model available</li>
            <li>✅ Adjustable reasoning effort</li>
            <li>✅ Multi-IDE support (Cursor, Windsurf)</li>
            <li>✅ Agent mode for automation</li>
          </ul>
          <div className="space-y-2">
            <a
              href="https://developers.openai.com/codex/ide"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded no-underline"
            >
              Install Codex Extension →
            </a>
            <p className="text-xs text-center text-muted-foreground">
              Requires: <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">OpenAI API key</a> or ChatGPT account
            </p>
          </div>
        </div>
      </div>

      <details className="border rounded-lg my-6">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          🔍 Detailed Installation: Claude Code
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <ol className="space-y-2 text-sm">
            <li><strong>Download VS Code</strong>: Install from <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a></li>
            <li><strong>Open Extensions</strong>: Press <code>Cmd/Ctrl + Shift + X</code></li>
            <li><strong>Search</strong>: Type "Claude Code" by Anthropic</li>
            <li><strong>Install</strong>: Click Install button</li>
            <li><strong>Restart VS Code</strong>: Reload window if prompted</li>
            <li><strong>Sign in</strong>: Click Claude icon in sidebar → Sign in with Anthropic account</li>
            <li><strong>Verify</strong>: Claude icon appears in left sidebar, ready to chat</li>
          </ol>
          <p className="text-xs text-muted-foreground mt-3">
            💡 Learn more: <a href="https://claude.ai/claude-code" target="_blank" rel="noopener noreferrer">claude.ai/claude-code</a>
          </p>
        </div>
      </details>

      <details className="border rounded-lg my-6">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          🔍 Detailed Installation: OpenAI Codex (GPT-5-Codex)
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <ol className="space-y-2 text-sm">
            <li><strong>Choose Your IDE</strong>:
              <ul className="ml-4 mt-1 space-y-1 text-xs">
                <li><a href="https://marketplace.visualstudio.com/items?itemName=openai.codex" target="_blank" rel="noopener noreferrer">VS Code</a> (marketplace)</li>
                <li><a href="https://developers.openai.com/codex/ide" target="_blank" rel="noopener noreferrer">Cursor</a> (download from docs)</li>
                <li><a href="https://developers.openai.com/codex/ide" target="_blank" rel="noopener noreferrer">Windsurf</a> (download from docs)</li>
                <li><a href="https://developers.openai.com/codex/ide" target="_blank" rel="noopener noreferrer">VS Code Insiders</a> (download from docs)</li>
              </ul>
            </li>
            <li><strong>Install Extension</strong>: Search "Codex" in your IDE's extension marketplace</li>
            <li><strong>Restart IDE</strong>: Reload to see Codex in sidebar</li>
            <li><strong>Sign In</strong>: Use ChatGPT account (recommended) or API key</li>
            <li><strong>Switch Model</strong>: Click model switcher → Select <strong>"GPT-5-Codex"</strong></li>
            <li><strong>Set Approval Mode</strong>: Choose <strong>"Agent"</strong> for automated workflows</li>
            <li><strong>Adjust Reasoning</strong>: Set to "Medium" or "High" for complex PRISMA tasks</li>
          </ol>
          <div className="callout callout-info mt-3">
            <p className="text-xs mb-1"><strong>⚠️ Windows Users</strong>: Use WSL (Windows Subsystem for Linux) for best experience. See <a href="https://developers.openai.com/codex/ide" target="_blank" rel="noopener noreferrer">Windows setup guide</a>.</p>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            💡 Learn more: <a href="https://developers.openai.com/codex/ide" target="_blank" rel="noopener noreferrer">developers.openai.com/codex/ide</a>
          </p>
        </div>
      </details>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">🤔 Which Should I Choose?</p>
        <div className="text-sm space-y-2 mb-0">
          <p><strong>Choose Claude Code if you:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>Want the easiest setup for ResearcherRAG</li>
            <li>Prefer Anthropic's focus on reasoning and research</li>
            <li>Need 200K token context for large systematic reviews</li>
            <li>Value tight integration with 5-stage prompts</li>
          </ul>
          <p className="mt-3"><strong>Choose OpenAI Codex if you:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>Already use Cursor, Windsurf, or another VS Code fork</li>
            <li>Want adjustable reasoning effort (low/medium/high)</li>
            <li>Prefer OpenAI's GPT-5-Codex model</li>
            <li>Need multi-IDE flexibility</li>
          </ul>
          <p className="mt-3 font-semibold text-center">✅ Both are fully compatible with ResearcherRAG!</p>
          <p className="text-xs text-muted-foreground mt-2">
            <em>Note</em>: ResearcherRAG's prompts are LLM-agnostic, but they're optimized for Claude's long context window. Codex users may need to split Stage 3 PRISMA prompts into smaller chunks.
          </p>
        </div>
      </div>

      <h3 id="step2-api-key">Step 2: Obtain Your API Key</h3>

      <p>Choose based on which assistant you installed in Step 1:</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="text-base font-semibold mb-2">For Claude Code Users</h4>
          <ol className="text-sm space-y-1">
            <li>Visit <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">console.anthropic.com</a></li>
            <li>Navigate to <strong>API Keys</strong></li>
            <li>Click <strong>Create Key</strong> → Name it "ResearcherRAG"</li>
            <li>Copy key (starts with <code>sk-ant-...</code>)</li>
            <li>Store securely (you'll use it in Step 5)</li>
          </ol>
          <div className="bg-gray-50 dark:bg-gray-900 border rounded p-2 mt-3 text-xs">
            <p className="font-semibold mb-1">Pricing (Jan 2025):</p>
            <p>Claude 3.5 Sonnet: $3/1M input, $15/1M output<br />
            <strong>Typical cost</strong>: $5-15 per literature review</p>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="text-base font-semibold mb-2">For OpenAI Codex Users</h4>
          <ol className="text-sm space-y-1">
            <li>Visit <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">platform.openai.com/api-keys</a></li>
            <li>Click <strong>+ Create new secret key</strong></li>
            <li>Name it "ResearcherRAG" → <strong>Create</strong></li>
            <li>Copy key (starts with <code>sk-proj-...</code>)</li>
            <li><strong>Alternative</strong>: Sign in with ChatGPT account (no API key needed)</li>
          </ol>
          <div className="bg-gray-50 dark:bg-gray-900 border rounded p-2 mt-3 text-xs">
            <p className="font-semibold mb-1">Pricing (Jan 2025):</p>
            <p>GPT-5: $4/1M input, $16/1M output<br />
            GPT-5-Codex: (Check <a href="https://openai.com/api/pricing/" target="_blank" rel="noopener noreferrer">pricing page</a>)</p>
          </div>
        </div>
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

      <p>Create a <code>.env</code> file in the project root to store your API key:</p>

      <CodeBlock
        language="bash"
        code={`# Create .env file
touch .env

# Open in your editor
code .env`}
      />

      <p>Add your API key based on which AI assistant you're using:</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="text-base font-semibold mb-2">For Claude Code</h4>
          <CodeBlock
            filename=".env"
            language="bash"
            code={`# Anthropic API Configuration
ANTHROPIC_API_KEY=sk-ant-your-key-here

# Optional: Model selection
ANTHROPIC_MODEL=claude-3-5-sonnet-20241022

# Optional: Max tokens
ANTHROPIC_MAX_TOKENS=4096`}
          />
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="text-base font-semibold mb-2">For OpenAI Codex</h4>
          <CodeBlock
            filename=".env"
            language="bash"
            code={`# OpenAI API Configuration
OPENAI_API_KEY=sk-proj-your-key-here

# Optional: Model selection
OPENAI_MODEL=gpt-5-codex

# Optional: Max tokens
OPENAI_MAX_TOKENS=4096`}
          />
        </div>
      </div>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 Using Both?</p>
        <p className="text-sm mb-0">
          You can include both API keys in your <code>.env</code> file. ResearcherRAG will use the one that matches your active AI assistant. This is useful for testing or switching between models.
        </p>
      </div>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">🔒 Security Warning</p>
        <p className="mb-0">
          Never commit your <code>.env</code> file to Git! It's already in <code>.gitignore</code>, but double-check before pushing to GitHub. Treat API keys like passwords—never share them publicly.
        </p>
      </div>

      <h2 id="first-workflow">Your First Workflow</h2>

      <h3 id="open-project">Opening the Project in Your IDE</h3>

      <p>Choose instructions based on your AI assistant:</p>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          For Claude Code Users
        </summary>
        <div className="p-4 pt-0 border-t">
          <ol className="text-sm space-y-2">
            <li>Open VS Code: <strong>File → Open Folder</strong></li>
            <li>Select the <code>ResearcherRAG</code> directory</li>
            <li>Click <strong>Trust Folder</strong> when prompted</li>
            <li>Open Claude Code panel:
              <ul className="ml-4 mt-1">
                <li>Click Claude icon in sidebar, OR</li>
                <li>Press <code>Cmd/Ctrl + Shift + P</code> → Type "Claude Code"</li>
              </ul>
            </li>
            <li>Verify Claude is ready: You should see the chat input at the bottom</li>
          </ol>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          For OpenAI Codex Users
        </summary>
        <div className="p-4 pt-0 border-t">
          <ol className="text-sm space-y-2">
            <li>Open your IDE (VS Code, Cursor, or Windsurf)</li>
            <li><strong>File → Open Folder</strong> → Select <code>ResearcherRAG</code></li>
            <li>Trust the workspace when prompted</li>
            <li>Open Codex panel:
              <ul className="ml-4 mt-1">
                <li>Click Codex icon in sidebar (may be in "..." collapsed menu)</li>
                <li>Pin it to right sidebar for easy access</li>
              </ul>
            </li>
            <li><strong>Verify settings</strong>:
              <ul className="ml-4 mt-1">
                <li>Model: <strong>GPT-5-Codex</strong></li>
                <li>Approval mode: <strong>Agent</strong></li>
                <li>Reasoning: <strong>Medium</strong> or <strong>High</strong></li>
              </ul>
            </li>
          </ol>
        </div>
      </details>

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
