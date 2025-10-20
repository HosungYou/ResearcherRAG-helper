import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Project Dashboard
          </h1>
          <p className="text-xl text-muted">
            Monitor your ScholarRAG projects and track PRISMA progress
          </p>
        </div>

        {/* Status Banner */}
        <div className="border-2 border-gray-900 rounded-lg p-6 bg-white mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🚧</span>
            <div>
              <p className="font-semibold text-lg mb-2">Web Dashboard Coming Soon</p>
              <p className="text-sm mb-3">
                The web-based dashboard is planned for <strong>v1.3.0</strong> (Q1 2026).
                For now, use the powerful CLI tool to check your project status locally.
              </p>
              <p className="text-xs text-muted">
                Why CLI-first? It's faster, works offline, and doesn't require backend infrastructure.
                The web dashboard will be added as a bonus feature for visual tracking.
              </p>
            </div>
          </div>
        </div>

        {/* CLI Instructions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Check Your Project Status</h2>

          <div className="space-y-6">
            {/* Command 1: Status */}
            <div>
              <h3 className="text-xl font-semibold mb-3">📊 View Detailed Project Status</h3>
              <p className="text-sm text-muted mb-3">
                See progress through all 6 stages, file counts, and quick statistics:
              </p>
              <CodeBlock
                language="bash"
                code={`# Navigate to ScholarRAG root directory
cd ScholarRAG

# Check status of a specific project
python scholarag_cli.py status projects/2025-10-13_AI-Healthcare-Adoption`}
              />
            </div>

            {/* Command 2: List */}
            <div>
              <h3 className="text-xl font-semibold mb-3">📚 List All Projects</h3>
              <p className="text-sm text-muted mb-3">
                View all your ScholarRAG projects at a glance:
              </p>
              <CodeBlock
                language="bash"
                code={`python scholarag_cli.py list`}
              />
            </div>
          </div>
        </div>

        {/* Example Output */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Example CLI Output</h2>

          <div className="border rounded-lg p-6 bg-gray-50">
            <CodeBlock
              language="bash"
              code={`$ python scholarag_cli.py status projects/2025-10-13_AI-Healthcare-Adoption

======================================================================
📊 Project Status: AI-Healthcare-Adoption
======================================================================

📅 Created: 2025-10-13
📝 Question: What factors influence AI adoption in hospitals?
🏷️  Domain: medicine
📍 Stage: 3/6
🔄 Last Updated: 2025-10-13

📁 File Status:

  1. Identification
    ✅ PubMed results: 450 rows
    ✅ Scopus results: 380 rows
    ✅ Deduplicated dataset: 612 rows

  2. Screening
    ✅ Passed title/abstract screening: 264 rows
    ✅ Excluded papers: 348 rows

  3. Full-text Review
    ⚙️ Active
    ✅ Final included papers: 142 rows
    ⏳ Exclusion reasons: Not yet created

  4. RAG Setup
    ⏳ Vector database: Empty directory
    ⏳ RAG configuration: Not yet created

  5. Research Conversations
    ⏳ Conversation logs: Empty directory

  6. Documentation
    ⏳ PRISMA flowchart: Not yet created
    ⏳ Search strategy document: Not yet created

📈 Quick Statistics:

  • Papers identified: 612
  • Papers screened: 264
  • Papers included: 142
  • PDFs downloaded: 75
  • RAG system: ⏳ Not built

📊 View in Dashboard:
   https://scholar-rag-helper.vercel.app/dashboard?project=2025-10-13_AI-Healthcare-Adoption

💡 Next Action:
   Run Stage 4: Build RAG system (vector database + embeddings)`}
            />
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">CLI vs. Web Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CLI Features */}
            <div className="border-2 border-gray-900 rounded-lg p-6 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-semibold">CLI Tool</h3>
                <span className="text-xs border border-gray-900 px-2 py-1 rounded font-semibold">
                  ✅ Available Now
                </span>
              </div>
              <ul className="text-sm space-y-2">
                <li>✅ <strong>Instant</strong> - No loading, works offline</li>
                <li>✅ <strong>Detailed</strong> - CSV row counts, file sizes</li>
                <li>✅ <strong>Scriptable</strong> - Integrate with CI/CD</li>
                <li>✅ <strong>Privacy</strong> - All data stays local</li>
                <li>✅ <strong>No setup</strong> - Just Python + 2 packages</li>
              </ul>
              <div className="mt-4 text-xs text-muted">
                Perfect for: Daily development, debugging, automation
              </div>
            </div>

            {/* Web Dashboard Features */}
            <div className="border-2 border-gray-600 rounded-lg p-6 bg-gray-50">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-semibold">Web Dashboard</h3>
                <span className="text-xs border border-gray-600 px-2 py-1 rounded font-semibold">
                  🚧 Coming v1.3.0
                </span>
              </div>
              <ul className="text-sm space-y-2 text-muted">
                <li>🔮 <strong>Visual</strong> - Charts, graphs, PRISMA flow</li>
                <li>🔮 <strong>Shareable</strong> - Send links to collaborators</li>
                <li>🔮 <strong>Interactive</strong> - Click to explore files</li>
                <li>🔮 <strong>Timeline</strong> - Track progress over time</li>
                <li>🔮 <strong>Comparison</strong> - Compare multiple projects</li>
              </ul>
              <div className="mt-4 text-xs text-muted">
                Perfect for: Presentations, collaboration, grant reports
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border rounded-lg p-6 bg-gray-50">
          <h3 className="text-lg font-semibold mb-4">📚 Related Resources</h3>
          <div className="space-y-2 text-sm">
            <div>
              <Link href="/guide/02-getting-started#step0-init-project" className="text-foreground hover:underline font-semibold">
                Getting Started: Initialize Your First Project →
              </Link>
              <p className="text-xs text-muted ml-4">Learn how to use <code>scholarag_cli.py init</code></p>
            </div>
            <div>
              <Link href="/guide/04-implementation" className="text-foreground hover:underline font-semibold">
                Implementation Guide: 6-Stage Workflow →
              </Link>
              <p className="text-xs text-muted ml-4">Understand what files are created at each stage</p>
            </div>
            <div>
              <Link href="/guide/05-advanced-topics" className="text-foreground hover:underline font-semibold">
                Practical Guide: Real Research Examples →
              </Link>
              <p className="text-xs text-muted ml-4">See complete conversations and example outputs</p>
            </div>
          </div>
        </div>

        {/* Installation Reminder */}
        <div className="mt-12 border-l-4 border-gray-900 pl-4">
          <p className="text-sm text-muted mb-2">
            <strong>Don't have the CLI tool yet?</strong>
          </p>
          <CodeBlock
            language="bash"
            code={`# Clone ScholarRAG repository
git clone https://github.com/HosungYou/ScholarRAG.git
cd ScholarRAG

# Install CLI dependencies
pip install click pyyaml

# Verify installation
python scholarag_cli.py --help`}
          />
        </div>

        {/* Back to Docs */}
        <div className="mt-12 text-center">
          <Link
            href="/guide"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            ← Back to Documentation
          </Link>
        </div>
      </div>
    </div>
  )
}
