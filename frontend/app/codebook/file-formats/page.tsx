import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export default function FileFormatsPage() {
  return (
    <GuideLayout>
      <div className="max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/codebook" className="hover:text-gray-900 hover:underline">Codebook</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">File Formats</span>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-gray-900">📄 File Formats</h1>

        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          ResearcherRAG uses different file formats for different purposes. Here's what each one is and why it exists.
        </p>

        {/* YAML Files */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">YAML Files (.yaml)</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            YAML stands for "YAML Ain't Markup Language" (yes, it's recursive!). Think of it as a <strong>configuration checklist</strong>
            - like filling out a form where you set all your preferences.
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">Why YAML for configuration?</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4 list-disc">
              <li><strong>Human-readable:</strong> Easy to read and edit, even without programming knowledge</li>
              <li><strong>Hierarchical:</strong> Shows relationships clearly with indentation (like an outline)</li>
              <li><strong>No mess:</strong> No curly braces or commas - just clean text</li>
              <li><strong>Standard:</strong> Used across research tools, AI systems, and web services</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-5 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-3 font-semibold">Example: config.yaml</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm font-mono">
{`# Research Project Settings
project_name: "AI in Education Meta-Analysis"
research_question: "How effective is AI tutoring?"

# Which databases to search
databases:
  - semantic_scholar
  - pubmed
  - eric

# AI settings
ai_model: "claude-3-5-sonnet"
max_papers: 5000`}
            </pre>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>⚠️ Important: Indentation matters!</strong>
            </p>
            <p className="text-sm text-gray-700">
              YAML uses spaces (not tabs) for indentation. Two spaces = one level deeper. If spacing is wrong, the file won't work.
            </p>
          </div>
        </section>

        {/* JSON Files */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">JSON Files (.json)</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            JSON stands for "JavaScript Object Notation". Think of it as a <strong>structured storage container</strong>
            - like organizing your research data in labeled boxes within boxes.
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">Why JSON for data?</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4 list-disc">
              <li><strong>Structured:</strong> Data organized in key-value pairs (like a dictionary)</li>
              <li><strong>Machine-readable:</strong> Easy for programs to read and write</li>
              <li><strong>Flexible:</strong> Can store numbers, text, lists, and nested data</li>
              <li><strong>Universal:</strong> Works across all programming languages and platforms</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-5 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-3 font-semibold">Example: papers.json</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm font-mono">
{`{
  "papers": [
    {
      "title": "AI Tutoring Systems: A Meta-Analysis",
      "authors": ["Smith, J.", "Lee, K."],
      "year": 2023,
      "doi": "10.1234/example",
      "citations": 45,
      "screened": true,
      "included": false,
      "exclusion_reason": "Not RCT design"
    }
  ],
  "total_count": 503,
  "last_updated": "2024-01-15"
}`}
            </pre>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>💡 In ResearcherRAG:</strong>
            </p>
            <p className="text-sm text-gray-700">
              JSON files store your fetched papers, screening results, and analysis outputs. They're like your research filing cabinet - organized and searchable.
            </p>
          </div>
        </section>

        {/* Markdown Files */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Markdown Files (.md)</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Markdown is a <strong>simple formatting language</strong> - like writing with basic formatting shortcuts.
            Think of it as "Microsoft Word, but using symbols instead of toolbar buttons."
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">Why Markdown for documentation?</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4 list-disc">
              <li><strong>Simple syntax:</strong> # = heading, ** = bold, - = bullet point</li>
              <li><strong>Plain text:</strong> Works everywhere, never becomes outdated</li>
              <li><strong>Version control friendly:</strong> Easy to track changes in Git</li>
              <li><strong>Converts easily:</strong> Can become PDF, HTML, Word docs</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="text-sm text-gray-600 mb-3 font-semibold">You write this:</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm font-mono">
{`# Methods

## Inclusion Criteria

- Published 2020-2024
- **RCT design**
- Sample size > 30

> Important: Must report
> effect sizes.`}
              </pre>
            </div>
            <div className="bg-gray-50 border border-gray-300 p-5 rounded-lg">
              <p className="text-sm text-gray-600 mb-3 font-semibold">It becomes this:</p>
              <div className="prose prose-sm">
                <h1 className="text-xl font-bold mb-2">Methods</h1>
                <h2 className="text-lg font-semibold mb-2">Inclusion Criteria</h2>
                <ul className="list-disc ml-6 mb-2 text-sm">
                  <li>Published 2020-2024</li>
                  <li><strong>RCT design</strong></li>
                  <li>Sample size &gt; 30</li>
                </ul>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 text-sm">
                  Important: Must report effect sizes.
                </blockquote>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>💡 In ResearcherRAG:</strong>
            </p>
            <p className="text-sm text-gray-700">
              All prompts (01-07.md) and documentation are written in Markdown. It's the universal language for research documentation and GitHub.
            </p>
          </div>
        </section>

        {/* Python Files */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Python Files (.py)</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            A .py file contains <strong>Python code</strong> - the actual instructions that make things happen.
            We covered Python earlier, but here's what the <strong>file itself</strong> represents.
          </p>

          <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4 text-gray-900">Structure of a Python script:</p>
            <ul className="space-y-2 text-sm text-gray-700 ml-4 list-disc">
              <li><strong>Imports:</strong> Loading tools and libraries (like importing cookware)</li>
              <li><strong>Configuration:</strong> Setting up variables and settings</li>
              <li><strong>Functions:</strong> Reusable blocks of code (like sub-recipes)</li>
              <li><strong>Main execution:</strong> The actual work that runs when you execute the script</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-300 p-5 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-3 font-semibold">Example: 01_fetch_papers.py (simplified)</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm font-mono">
{`# 1. IMPORTS - Load tools
import requests
from datetime import datetime

# 2. CONFIGURATION - Settings
API_KEY = "your-key-here"
MAX_PAPERS = 5000

# 3. FUNCTIONS - Reusable logic
def fetch_from_database(query):
    """Fetch papers from API"""
    # ... code here ...
    return papers

# 4. MAIN EXECUTION - What runs
if __name__ == "__main__":
    results = fetch_from_database("AI tutoring")
    print(f"Found {len(results)} papers")`}
            </pre>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-2">
              <strong>⚠️ Don't edit Python files unless:</strong>
            </p>
            <p className="text-sm text-gray-700">
              You know what you're doing! Changing code can break the entire pipeline. Start with configuration files (YAML) instead.
            </p>
          </div>
        </section>

        {/* .env Files */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Environment Files (.env)</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            A .env file stores <strong>secret information</strong> like passwords and API keys.
            Think of it as your <strong>personal keychain</strong> - you don't share it with anyone!
          </p>

          <div className="bg-gray-900 border-2 border-gray-900 p-6 rounded-lg mb-6">
            <p className="text-white font-semibold mb-4">🚨 CRITICAL: Security Rules</p>
            <ul className="space-y-2 text-sm text-gray-300 ml-4 list-disc">
              <li><strong>Never share:</strong> .env files contain sensitive secrets</li>
              <li><strong>Never commit to Git:</strong> These should NOT be uploaded to GitHub</li>
              <li><strong>Use .env.example:</strong> Share templates without real keys</li>
              <li><strong>Regenerate if exposed:</strong> If leaked, create new API keys immediately</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border-2 border-gray-900 p-5 rounded-lg">
              <p className="text-sm text-gray-600 mb-3 font-semibold">❌ Bad: .env (real secrets)</p>
              <pre className="bg-gray-900 text-red-400 p-4 rounded overflow-x-auto text-sm font-mono">
{`# NEVER SHARE THIS FILE!
ANTHROPIC_API_KEY=sk-ant-abc123...
OPENAI_API_KEY=sk-proj-xyz789...
DATABASE_PASSWORD=MySecret123`}
              </pre>
              <p className="text-gray-900 text-sm mt-3 font-semibold">⚠️ Do NOT upload to GitHub!</p>
            </div>
            <div className="bg-white border border-gray-300 p-5 rounded-lg">
              <p className="text-sm text-gray-600 mb-3 font-semibold">✅ Good: .env.example (template)</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm font-mono">
{`# Share this template safely
ANTHROPIC_API_KEY=your-key-here
OPENAI_API_KEY=your-key-here
DATABASE_PASSWORD=your-password-here`}
              </pre>
              <p className="text-gray-600 text-sm mt-3">✅ Safe to share as template</p>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <p className="text-sm text-gray-800 mb-3 font-semibold">💡 How it works:</p>
            <ol className="space-y-2 text-sm text-gray-700 ml-6 list-decimal">
              <li>Create <code className="bg-white px-2 py-1 rounded border border-gray-300 font-mono text-xs">.env</code> file in project root</li>
              <li>Add your API keys: <code className="bg-white px-2 py-1 rounded border border-gray-300 font-mono text-xs">ANTHROPIC_API_KEY=sk-ant-...</code></li>
              <li>Python scripts read these variables automatically</li>
              <li>Keys stay private, code stays shareable</li>
            </ol>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-300">
          <Link href="/codebook/fundamentals" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
            ← Previous: Fundamentals
          </Link>
          <Link href="/codebook/tools" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
            Next: Tools & Technologies →
          </Link>
        </div>

      </div>
    </GuideLayout>
  )
}
