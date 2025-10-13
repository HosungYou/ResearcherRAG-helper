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
            <li><a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python 3.10-3.14</a></li>
            <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a> latest version</li>
            <li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a> for cloning</li>
            <li>AI assistant subscription (see Step 1)</li>
          </ul>
        </div>
      </div>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">✅ Python Version Support</p>
        <p className="mb-2">
          ResearcherRAG supports <strong>Python 3.10 through 3.14</strong>. The latest stable version is <strong>Python 3.14.0</strong> (released October 2025).
        </p>
        <p className="text-sm mb-0">
          <strong>Recommended</strong>: Python 3.12+ for best performance and latest features. Python 3.9 and earlier are no longer supported (end of life in 2025).
        </p>
      </div>

      <h2 id="python-installation">Python Installation</h2>

      <p>
        If you don't have Python installed or need to upgrade, follow these steps:
      </p>

      <details className="border rounded-lg my-6">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          🐍 Installing Python on macOS
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="text-sm"><strong>Option 1: Official Installer (Recommended)</strong></p>
          <ol className="text-sm space-y-2">
            <li>Visit <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="underline">python.org/downloads</a></li>
            <li>Download <strong>Python 3.14.0</strong> (or latest 3.12+)</li>
            <li>Run the <code>.pkg</code> installer</li>
            <li>Follow installation wizard (use default settings)</li>
            <li>Verify installation:
              <CodeBlock
                language="bash"
                code={`python3 --version
# Should output: Python 3.14.0`}
                className="mt-2"
              />
            </li>
          </ol>

          <p className="text-sm mt-4"><strong>Option 2: Homebrew (For Advanced Users)</strong></p>
          <CodeBlock
            language="bash"
            code={`# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Python
brew install python@3.14

# Verify
python3 --version`}
          />
        </div>
      </details>

      <details className="border rounded-lg my-6">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          🪟 Installing Python on Windows
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <ol className="text-sm space-y-2">
            <li>Visit <a href="https://www.python.org/downloads/windows/" target="_blank" rel="noopener noreferrer" className="underline">python.org/downloads/windows</a></li>
            <li>Download <strong>Python 3.14.0</strong> Windows installer (64-bit)</li>
            <li><strong>Important</strong>: Check ☑️ "Add Python to PATH" during installation</li>
            <li>Click <strong>Install Now</strong></li>
            <li>Verify installation:
              <CodeBlock
                language="bash"
                code={`python --version
# Should output: Python 3.14.0

# If that doesn't work, try:
py --version`}
                className="mt-2"
              />
            </li>
          </ol>

          <div className="callout callout-warning text-sm mt-3">
            <p className="font-semibold mb-1">⚠️ PATH Not Set?</p>
            <p className="mb-0">
              If <code>python --version</code> doesn't work, you need to add Python to PATH manually. Search "Edit the system environment variables" in Windows, then add Python's installation directory to PATH.
            </p>
          </div>
        </div>
      </details>

      <details className="border rounded-lg my-6">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          🐧 Installing Python on Linux
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="text-sm"><strong>Ubuntu/Debian:</strong></p>
          <CodeBlock
            language="bash"
            code={`sudo apt update
sudo apt install python3.14 python3.14-venv python3-pip

# Verify
python3 --version`}
          />

          <p className="text-sm mt-3"><strong>Fedora/RHEL:</strong></p>
          <CodeBlock
            language="bash"
            code={`sudo dnf install python3.14

# Verify
python3 --version`}
          />

          <p className="text-sm text-muted-foreground mt-3">
            💡 If Python 3.14 isn't available in your distro's repositories yet, use Python 3.12 or 3.13 instead.
          </p>
        </div>
      </details>

      <h2 id="installation">Installation Steps</h2>

      <h3 id="step1-ai-assistant">Step 1: Choose Your AI Coding Assistant</h3>

      <p>
        ResearcherRAG works with multiple AI coding assistants. Choose one based on your preference—<strong>both work perfectly!</strong>
      </p>

      <div className="border-2 border-gray-900 dark:border-gray-100 rounded-lg p-6 bg-white dark:bg-black mb-6">
        <p className="font-semibold mb-2">💰 Important: Use Subscription Plans, Not API Keys!</p>
        <p className="text-sm mb-2">
          <strong>Strongly recommended</strong>: Sign in with your <strong>ChatGPT Plus ($20/month)</strong> or <strong>Claude Pro ($20/month)</strong> subscription instead of using API keys. Here's why:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm my-3">
          <div className="border-l-4 border-gray-900 dark:border-gray-100 rounded p-3 bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold mb-1">❌ API Key (Pay-as-you-go)</p>
            <ul className="text-xs space-y-1 ml-4">
              <li>Claude: $3-15 per 1M tokens</li>
              <li>GPT-5: $4-16 per 1M tokens</li>
              <li><strong>One PRISMA run: $15-50+</strong></li>
              <li>Costs add up quickly with iterations</li>
            </ul>
          </div>
          <div className="border-l-4 border-gray-900 dark:border-gray-100 rounded p-3 bg-gray-50 dark:bg-gray-900">
            <p className="font-semibold mb-1">✅ Subscription (Fixed $20/month)</p>
            <ul className="text-xs space-y-1 ml-4">
              <li>ChatGPT Plus: <strong>Generous token allowance</strong></li>
              <li>Claude Pro: <strong>~500K tokens/month</strong> (limited)</li>
              <li>Unlimited projects within limits</li>
              <li>Predictable budgeting</li>
            </ul>
          </div>
        </div>
        <p className="text-xs mt-2">
          <strong>💡 Pro Tip</strong>: ChatGPT Plus ($20) offers more generous token limits than Claude Pro ($20) for heavy ResearcherRAG usage. Consider <strong>using both</strong>: Claude for Stage 1-2 (planning), Codex for Stage 3-5 (heavy processing).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        <div className="border-2 border-gray-900 dark:border-gray-100 rounded-lg p-6 bg-white dark:bg-black">
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-lg font-semibold m-0">Claude Code</h4>
            <span className="text-xs border border-gray-900 dark:border-gray-100 px-2 py-1 rounded font-semibold">★ Recommended</span>
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
              className="block text-center bg-foreground text-background hover:bg-gray-800 dark:hover:bg-gray-200 font-semibold py-2 px-4 rounded no-underline transition-colors"
            >
              Install Claude Code →
            </a>
            <p className="text-xs text-center">
              <strong>✓ Recommended: </strong>
              <a href="https://claude.ai/settings" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Claude Pro ($20/mo)</a>
            </p>
            <p className="text-xs text-center text-muted-foreground">
              Alternative: <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" className="underline">API key</a> (pay-as-you-go, expensive)
            </p>
          </div>
        </div>

        <div className="border-2 border-gray-900 dark:border-gray-100 rounded-lg p-6 bg-gray-50 dark:bg-gray-950">
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-lg font-semibold m-0">OpenAI Codex</h4>
            <span className="text-xs border border-gray-900 dark:border-gray-100 px-2 py-1 rounded font-semibold">$ Best Value</span>
          </div>
          <p className="text-sm mb-4">
            OpenAI's agentic coding assistant with powerful reasoning. <strong>Generous token limits</strong> make it ideal for heavy PRISMA workflows.
          </p>
          <ul className="text-sm space-y-2 mb-4">
            <li>✅ GPT-5-Codex model available</li>
            <li>✅ <strong>More tokens per $20 than Claude</strong></li>
            <li>✅ Multi-IDE support (Cursor, Windsurf)</li>
            <li>✅ Agent mode for automation</li>
          </ul>
          <div className="space-y-2">
            <a
              href="https://developers.openai.com/codex/ide"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-foreground text-background hover:bg-gray-800 dark:hover:bg-gray-200 font-semibold py-2 px-4 rounded no-underline transition-colors"
            >
              Install Codex Extension →
            </a>
            <p className="text-xs text-center">
              <strong>✓ Recommended: </strong>
              <a href="https://chat.openai.com/settings" target="_blank" rel="noopener noreferrer" className="font-semibold underline">ChatGPT Plus ($20/mo)</a>
            </p>
            <p className="text-xs text-center text-muted-foreground">
              Alternative: <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline">API key</a> (pay-as-you-go, expensive)
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
            <li>Want the <strong>easiest setup</strong> for ResearcherRAG</li>
            <li>Prefer Anthropic's focus on reasoning and academic research</li>
            <li>Need 200K token context for large systematic reviews</li>
            <li>Are doing a <strong>single, focused</strong> PRISMA project</li>
          </ul>
          <p className="mt-3"><strong>Choose OpenAI Codex if you:</strong></p>
          <ul className="ml-4 space-y-1">
            <li>Need <strong>more tokens per month</strong> for heavy usage</li>
            <li>Plan to run <strong>multiple PRISMA projects</strong> concurrently</li>
            <li>Already use Cursor, Windsurf, or another VS Code fork</li>
            <li>Want adjustable reasoning effort (low/medium/high)</li>
          </ul>
          <p className="mt-3"><strong>💡 Hybrid Approach (Recommended for Power Users):</strong></p>
          <ul className="ml-4 space-y-1">
            <li><strong>Claude Code</strong>: Stage 1-2 (research planning, query design)</li>
            <li><strong>OpenAI Codex</strong>: Stage 3-5 (PRISMA automation, RAG execution)</li>
            <li>Benefit: Use Claude's reasoning for setup, Codex's generous tokens for heavy lifting</li>
            <li><strong>Total cost</strong>: $40/month (both subscriptions) vs $50-100+ API usage</li>
          </ul>
          <p className="mt-3 font-semibold text-center">✅ Both are fully compatible with ResearcherRAG!</p>
          <p className="text-xs text-muted-foreground mt-2">
            <em>Note</em>: ResearcherRAG's prompts are LLM-agnostic, but they're optimized for Claude's long context window. Codex users may need to split Stage 3 PRISMA prompts into smaller chunks.
          </p>
        </div>
      </div>

      <h3 id="step2-authentication">Step 2: Authentication Setup</h3>

      <p className="mb-4">
        <strong>Recommended approach</strong>: Sign in with your subscription account. This gives you fixed monthly costs and generous token limits.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
        <div className="border-2 border-gray-900 dark:border-gray-100 rounded-lg p-4 bg-white dark:bg-black">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-base font-semibold m-0">Option A: Claude Pro ($20/mo)</h4>
            <span className="text-xs border border-gray-900 dark:border-gray-100 px-2 py-1 rounded font-semibold">★ Recommended</span>
          </div>
          <p className="text-sm mb-3">Best for single-project workflows and academic reasoning.</p>
          <ol className="text-sm space-y-2 mb-3">
            <li><strong>Subscribe</strong>: Visit <a href="https://claude.ai/settings" target="_blank" rel="noopener noreferrer" className="underline">claude.ai/settings</a> → Upgrade to Pro</li>
            <li><strong>Install Extension</strong>: Add Claude Code to VS Code (Step 1)</li>
            <li><strong>Sign In</strong>: Click Claude icon → <strong>Sign in with your Pro account</strong></li>
            <li><strong>Verify</strong>: You'll see "Pro" badge in the extension</li>
          </ol>
          <div className="border-l-4 border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-900 rounded p-2 text-xs">
            <p className="font-semibold mb-1">What you get:</p>
            <ul className="ml-4 space-y-1">
              <li>✅ ~500K tokens/month (~10-15 PRISMA projects)</li>
              <li>✅ Priority access during peak hours</li>
              <li>✅ 200K context window per request</li>
              <li>⚠️ <strong>Token limit resets monthly</strong></li>
            </ul>
          </div>
        </div>

        <div className="border-2 border-gray-900 dark:border-gray-100 rounded-lg p-4 bg-gray-50 dark:bg-gray-950">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-base font-semibold m-0">Option B: ChatGPT Plus ($20/mo)</h4>
            <span className="text-xs border border-gray-900 dark:border-gray-100 px-2 py-1 rounded font-semibold">$ Best Value</span>
          </div>
          <p className="text-sm mb-3">Best for heavy usage and multiple concurrent projects.</p>
          <ol className="text-sm space-y-2 mb-3">
            <li><strong>Subscribe</strong>: Visit <a href="https://chat.openai.com/settings" target="_blank" rel="noopener noreferrer" className="underline">chat.openai.com/settings</a> → Upgrade to Plus</li>
            <li><strong>Install Extension</strong>: Add Codex to your IDE (Step 1)</li>
            <li><strong>Sign In</strong>: Click Codex icon → <strong>Sign in with ChatGPT account</strong></li>
            <li><strong>Select Model</strong>: Switch to <strong>GPT-5-Codex</strong></li>
          </ol>
          <div className="border-l-4 border-gray-900 dark:border-gray-100 bg-white dark:bg-black rounded p-2 text-xs">
            <p className="font-semibold mb-1">What you get:</p>
            <ul className="ml-4 space-y-1">
              <li>✅ <strong>More generous token limits</strong> than Claude Pro</li>
              <li>✅ Suitable for 20-30+ PRISMA projects/month</li>
              <li>✅ Adjustable reasoning effort (low/med/high)</li>
              <li>✅ Better for parallel workflows</li>
            </ul>
          </div>
        </div>
      </div>

      <details className="border-2 border-gray-600 dark:border-gray-400 rounded-lg my-6 bg-gray-100 dark:bg-gray-900">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          ⚠️ Alternative: API Keys (Not Recommended for Beginners)
        </summary>
        <div className="p-4 pt-0 border-t border-gray-600 dark:border-gray-400">
          <p className="text-sm mb-3">
            <strong>Only use API keys if</strong>: You need programmatic access, are building a commercial service, or have institutional API credits. For individual research, subscriptions are far more cost-effective.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
            <div className="border rounded p-3">
              <h5 className="text-sm font-semibold mb-2">Anthropic API Key</h5>
              <ol className="text-xs space-y-1">
                <li>Visit <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">console.anthropic.com</a></li>
                <li>Navigate to <strong>API Keys</strong></li>
                <li>Create key → Copy (starts with <code>sk-ant-...</code>)</li>
                <li>Add to <code>.env</code> file (Step 5)</li>
              </ol>
              <p className="text-xs mt-2 text-muted-foreground">
                <strong>Cost</strong>: $3-15 per 1M tokens<br />
                <strong>One PRISMA run</strong>: $15-50+ depending on corpus size
              </p>
            </div>

            <div className="border rounded p-3">
              <h5 className="text-sm font-semibold mb-2">OpenAI API Key</h5>
              <ol className="text-xs space-y-1">
                <li>Visit <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline">platform.openai.com/api-keys</a></li>
                <li>Click <strong>+ Create new secret key</strong></li>
                <li>Copy key (starts with <code>sk-proj-...</code>)</li>
                <li>Add to <code>.env</code> file (Step 5)</li>
              </ol>
              <p className="text-xs mt-2 text-muted-foreground">
                <strong>Cost</strong>: $4-16 per 1M tokens<br />
                <strong>One PRISMA run</strong>: $20-60+ for large datasets
              </p>
            </div>
          </div>

          <div className="callout callout-warning text-sm">
            <p className="font-semibold mb-1">💸 Cost Comparison Example</p>
            <p className="text-xs mb-0">
              Running 3 PRISMA projects in a month:<br />
              • <strong>Subscription</strong>: $20 (fixed)<br />
              • <strong>API Pay-as-you-go</strong>: $45-150+ (variable, unpredictable)
            </p>
          </div>
        </div>
      </details>

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
├── researcherrag_cli.py   # CLI tool for project management
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

      <p>Install required packages for the CLI tool:</p>

      <CodeBlock
        language="bash"
        code={`# Upgrade pip first
pip install --upgrade pip

# Install CLI dependencies
pip install click pyyaml

# Verify CLI tool works
python researcherrag_cli.py --help`}
      />

      <div className="callout callout-success">
        <p className="font-semibold mb-2">✅ Pro Tip</p>
        <p className="mb-0">
          Keep your virtual environment activated throughout the workflow. If you close your terminal, remember to run <code>source venv/bin/activate</code> again before continuing.
        </p>
      </div>

      <h3 id="step0-init-project">Step 0: Initialize Your Project (🆕 Required)</h3>

      <div className="border-2 border-gray-900 dark:border-gray-100 rounded-lg p-6 bg-white dark:bg-black mb-6">
        <p className="font-semibold mb-2">🚨 Important: Create Standardized Project Structure</p>
        <p className="text-sm mb-3">
          Before starting any research work, you <strong>must</strong> initialize a project using the CLI tool. This ensures:
        </p>
        <ul className="text-sm space-y-1 mb-3">
          <li>✅ <strong>Consistent folder structure</strong> (PRISMA 2020 compliant)</li>
          <li>✅ <strong>Dashboard tracking</strong> - Monitor progress on the web</li>
          <li>✅ <strong>Claude Code guidance</strong> - LLM knows where to save files</li>
          <li>✅ <strong>Reproducibility</strong> - Share projects with collaborators easily</li>
        </ul>
        <p className="text-xs text-muted-foreground">
          ⚠️ <strong>Without CLI initialization</strong>: Claude Code may create inconsistent folders, dashboard won't work, and you'll waste time fixing file locations.
        </p>
      </div>

      <p><strong>Run the project initialization command:</strong></p>

      <CodeBlock
        language="bash"
        code={`python researcherrag_cli.py init`}
      />

      <p>You'll be prompted to enter:</p>

      <div className="border rounded-lg p-4 my-4 bg-gray-50 dark:bg-gray-900">
        <div className="space-y-3 text-sm font-mono">
          <div>
            <span className="text-muted-foreground">Project name:</span> <strong>AI-Healthcare-Adoption</strong>
            <p className="text-xs text-muted-foreground ml-4">Use hyphens, no spaces (e.g., "Teacher-Training-Analysis")</p>
          </div>
          <div>
            <span className="text-muted-foreground">Research question:</span> <strong>What factors influence AI adoption in hospitals?</strong>
            <p className="text-xs text-muted-foreground ml-4">Your main research question</p>
          </div>
          <div>
            <span className="text-muted-foreground">Research domain:</span> <strong>medicine</strong>
            <p className="text-xs text-muted-foreground ml-4">Options: education | medicine | psychology | social-science | custom</p>
          </div>
        </div>
      </div>

      <p><strong>What gets created:</strong></p>

      <CodeBlock
        language="bash"
        code={`projects/2025-10-13_AI-Healthcare-Adoption/
├── .researcherrag          ← Metadata for dashboard tracking
├── config.yaml             ← Project settings (domains, criteria, RAG config)
├── README.md               ← Project documentation
├── data/
│   ├── 01_identification/  ← Stage 1: Database search results
│   ├── 02_screening/       ← Stage 2: PRISMA screening decisions
│   ├── 03_full_text/       ← Stage 3: Final included papers
│   └── pdfs/               ← Downloaded PDF files
├── rag/
│   └── chroma_db/          ← Vector database (created in Stage 4)
├── outputs/                ← PRISMA flowchart, search strategy docs
└── conversations/          ← RAG session logs (Stage 5)`}
      />

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📁 Understanding the Project Structure</p>
        <div className="text-sm space-y-2 mb-0">
          <p><strong>Why this structure?</strong></p>
          <ul className="ml-4 space-y-1">
            <li><code>data/01_identification/</code>: Raw search results from PubMed, Scopus, etc.</li>
            <li><code>data/02_screening/</code>: Papers that passed title/abstract review</li>
            <li><code>data/03_full_text/</code>: <strong>Final dataset for RAG</strong> (most important!)</li>
            <li><code>rag/chroma_db/</code>: Vector embeddings for semantic search</li>
            <li><code>conversations/</code>: Chat logs with citations (your research notes)</li>
          </ul>
          <p className="mt-3"><strong>Why date prefix?</strong></p>
          <p className="ml-4 text-xs">
            <code>2025-10-13_</code> prefix allows you to manage multiple projects over time, see project history, and easily sort by creation date.
          </p>
        </div>
      </div>

      <p className="mt-6"><strong>Verify project creation:</strong></p>

      <CodeBlock
        language="bash"
        code={`# List all your projects
python researcherrag_cli.py list

# Check project status
python researcherrag_cli.py status projects/2025-10-13_AI-Healthcare-Adoption`}
      />

      <details className="border rounded-lg my-6">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          📖 Example: CLI Output After Initialization
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <CodeBlock
            language="bash"
            code={`======================================================================
✅ Project created successfully!
======================================================================

📂 Project Location: projects/2025-10-13_AI-Healthcare-Adoption

📋 Next Steps:

1️⃣  Open the project in VS Code:
   cd projects/2025-10-13_AI-Healthcare-Adoption
   code .

2️⃣  Start Claude Code chat:
   • Press: Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows/Linux)
   • Type: 'Claude: Open Chat'
   • Press Enter

3️⃣  Copy-paste this prompt to Claude Code:
   ------------------------------------------------------------------
   I'm starting a new ResearcherRAG project: AI-Healthcare-Adoption
   Research question: What factors influence AI adoption in hospitals?
   Domain: medicine

   Please read my config.yaml and guide me through Stage 1
   (Research Domain Setup) using the 5-stage workflow.

   Make sure to save all outputs to the correct folders:
   - Stage 1 → data/01_identification/
   - Stage 2 → data/02_screening/
   - Stage 3 → data/03_full_text/
   ------------------------------------------------------------------

📖 Documentation:
   https://researcher-rag-helper.vercel.app/guide/02-getting-started

📊 Dashboard (check progress anytime):
   https://researcher-rag-helper.vercel.app/dashboard?project=2025-10-13_AI-Healthcare-Adoption

💡 Check project status anytime:
   python researcherrag_cli.py status projects/2025-10-13_AI-Healthcare-Adoption`}
          />
        </div>
      </details>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Don't Skip This Step!</p>
        <p className="text-sm mb-0">
          You might be tempted to skip CLI initialization and just start coding with Claude Code. <strong>Don't!</strong> Without the standardized structure, you'll spend hours debugging file paths, Claude Code will create inconsistent folders, and the dashboard won't work. The 2 minutes spent on <code>researcherrag_cli.py init</code> will save you hours later.
        </p>
      </div>

      <h3 id="step5-environment-old">Step 5: Additional Python Dependencies (Within Your Project)</h3>

      <p>Now that you have a project, navigate into it and install research-specific packages:</p>

      <CodeBlock
        language="bash"
        code={`# Navigate to your project
cd projects/2025-10-13_AI-Healthcare-Adoption

# Install additional dependencies (will be guided by Claude Code)
# For now, install basic research tools:
pip install anthropic langchain chromadb python-dotenv

# If using OpenAI Codex:
pip install openai`}
      />

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 About Dependencies</p>
        <p className="text-sm mb-0">
          You don't need to install all dependencies upfront. Claude Code will guide you to install packages as needed during each stage. The above commands are just for basic setup.
        </p>
      </div>

      <h3 id="step6-env-file">Step 6: Configure Environment Variables (Optional)</h3>

      <div className="callout callout-success mb-6">
        <p className="font-semibold mb-2">✅ Using Subscription Login? You Can Skip This Step!</p>
        <p className="text-sm mb-0">
          If you signed in with <strong>Claude Pro</strong> or <strong>ChatGPT Plus</strong> in Step 2, you don't need to configure a <code>.env</code> file. The extensions authenticate directly through your subscription. <strong>Proceed to Step 6.</strong>
        </p>
      </div>

      <details className="border rounded-lg my-6">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          ⚙️ Advanced: API Key Configuration (For API Users Only)
        </summary>
        <div className="p-4 pt-0 border-t space-y-4">
          <p className="text-sm">
            If you chose to use API keys instead of subscriptions, create a <code>.env</code> file:
          </p>

          <CodeBlock
            language="bash"
            code={`# Create .env file
touch .env

# Open in your editor
code .env`}
          />

          <p className="text-sm">Add your API key based on which AI assistant you're using:</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
            <div className="border rounded p-3">
              <h4 className="text-sm font-semibold mb-2">For Claude Code (API)</h4>
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

            <div className="border rounded p-3">
              <h4 className="text-sm font-semibold mb-2">For OpenAI Codex (API)</h4>
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

          <div className="callout callout-info text-sm">
            <p className="font-semibold mb-1">💡 Using Both APIs?</p>
            <p className="mb-0">
              You can include both API keys in your <code>.env</code> file. ResearcherRAG will use the one that matches your active AI assistant.
            </p>
          </div>

          <div className="callout callout-warning text-sm">
            <p className="font-semibold mb-1">🔒 Security Warning</p>
            <p className="mb-0">
              Never commit your <code>.env</code> file to Git! It's already in <code>.gitignore</code>, but double-check before pushing to GitHub. Treat API keys like passwords—never share them publicly.
            </p>
          </div>
        </div>
      </details>

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
