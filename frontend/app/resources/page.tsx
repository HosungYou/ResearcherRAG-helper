import Link from 'next/link'
import { BookOpen, Download, FileText, Github, Package, Terminal, Globe, FileCode } from 'lucide-react'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-medium tracking-tight">ScholaRAG</div>
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <Link href="/guide" className="hover:text-primary-600">Guide</Link>
            <Link href="/resources" className="text-primary-600 font-semibold">Resources</Link>
            <a href="https://github.com/HosungYou/ScholaRAG-helper" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Download Resources</h2>
          <p className="text-gray-600 text-lg">
            Templates, examples, and materials to get you started quickly
          </p>
        </div>

        {/* Resources Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Chat Interfaces - NEW! */}
          <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-primary-600" />
              Chat Interfaces (After Building Your RAG)
            </h3>
            <p className="text-gray-600 mb-6">
              After completing Stages 1-5, use these interfaces to interact with your research papers
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 hover:shadow-lg hover:border-gray-900 transition-all border-l-4 border-gray-900">
                <div className="flex items-center gap-2 mb-3">
                  <FileCode className="w-5 h-5 text-gray-900" />
                  <h4 className="font-bold">Claude Code Interface</h4>
                </div>
                <div className="inline-block bg-gray-900 text-white text-xs px-2 py-1 rounded mb-3">
                  Recommended
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Run directly in Claude Code. No setup needed. Best for iterative research.
                </p>
                <div className="space-y-1 mb-4 text-xs text-gray-600">
                  <div>✓ CLI interactive mode</div>
                  <div>✓ Single query mode</div>
                  <div>✓ Real-time citations</div>
                </div>
                <a
                  href="https://github.com/HosungYou/researcherRAG/blob/main/interfaces/claude_code_interface.py"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-900 hover:underline flex items-center gap-1 font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download Script
                </a>
              </div>

              <div className="card p-6 hover:shadow-lg hover:border-gray-900 transition-all border-l-4 border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-gray-900" />
                  <h4 className="font-bold">Streamlit Interface</h4>
                </div>
                <div className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mb-3">
                  Visual UI
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Web GUI with chat history, export features, and paper statistics.
                </p>
                <div className="space-y-1 mb-4 text-xs text-gray-600">
                  <div>✓ Chat history export</div>
                  <div>✓ Citation tracking</div>
                  <div>✓ Statistics dashboard</div>
                </div>
                <a
                  href="https://github.com/HosungYou/researcherRAG/blob/main/interfaces/streamlit_app.py"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-900 hover:underline flex items-center gap-1 font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download Script
                </a>
              </div>

              <div className="card p-6 hover:shadow-lg hover:border-gray-900 transition-all border-l-4 border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <FileCode className="w-5 h-5 text-gray-900" />
                  <h4 className="font-bold">FastAPI Server</h4>
                </div>
                <div className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mb-3">
                  Production
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  REST API server for building custom frontends. Full documentation.
                </p>
                <div className="space-y-1 mb-4 text-xs text-gray-600">
                  <div>✓ REST API endpoints</div>
                  <div>✓ Custom frontend</div>
                  <div>✓ OpenAPI docs</div>
                </div>
                <a
                  href="https://github.com/HosungYou/researcherRAG/blob/main/interfaces/fastapi_server.py"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-900 hover:underline flex items-center gap-1 font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download Script
                </a>
              </div>
            </div>
            <div className="mt-6 bg-gray-50 border border-gray-300 rounded-lg p-4">
              <p className="text-sm text-gray-800">
                <strong>📚 Note:</strong> These interfaces require a Vector DB built using ScholaRAG Stages 1-5.
                See the <Link href="/guide/04-implementation" className="underline font-medium">Implementation Guide</Link> to get started.
              </p>
            </div>
          </section>

          {/* Templates */}
          <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary-600" />
              Research Profile Templates
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <ResourceCard
                title="Education Template"
                description="K-12, higher education, learning sciences, edtech research"
                fileSize="2.3 KB"
                format="YAML"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/templates/research_profiles/education_template.yaml"
              />
              <ResourceCard
                title="Medicine Template"
                description="Clinical trials, EHR, public health, telemedicine"
                fileSize="2.5 KB"
                format="YAML"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/templates/research_profiles/medicine_template.yaml"
              />
              <ResourceCard
                title="Social Science Template"
                description="Psychology, sociology, economics, political science"
                fileSize="2.4 KB"
                format="YAML"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/templates/research_profiles/social_science_template.yaml"
              />
            </div>
          </section>

          {/* Prompts */}
          <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Package className="w-6 h-6 text-primary-600" />
              5-Stage Workflow Prompts
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard
                title="Stage 1: Research Domain Setup"
                description="Define research scope, questions, and constraints"
                fileSize="12 KB"
                format="Markdown"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/prompts/01_research_domain_setup.md"
              />
              <ResourceCard
                title="Stage 2: Query Strategy"
                description="Design boolean queries, choose data sources"
                fileSize="15 KB"
                format="Markdown"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/prompts/02_query_strategy.md"
              />
              <ResourceCard
                title="Stage 3: PRISMA Configuration"
                description="Build multi-dimensional screening criteria"
                fileSize="18 KB"
                format="Markdown"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/prompts/03_prisma_configuration.md"
              />
              <ResourceCard
                title="Stage 4: RAG Design"
                description="PDF acquisition, text extraction, vector DB setup"
                fileSize="14 KB"
                format="Markdown"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/prompts/04_rag_design.md"
              />
              <ResourceCard
                title="Stage 5: Execution Plan"
                description="Run pipeline, troubleshoot, validate results"
                fileSize="16 KB"
                format="Markdown"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/prompts/05_execution_plan.md"
              />
            </div>
          </section>

          {/* Documentation */}
          <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary-600" />
              Documentation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard
                title="CLAUDE.md"
                description="Complete 18,000-word implementation guide for Claude Code"
                fileSize="120 KB"
                format="Markdown"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/CLAUDE.md"
              />
              <ResourceCard
                title="Workshop Guide"
                description="3-hour hands-on workshop curriculum"
                fileSize="45 KB"
                format="Markdown"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/workshop/hands_on_guide.md"
              />
              <ResourceCard
                title="Quick Start Guide"
                description="Get started in 5 minutes"
                fileSize="25 KB"
                format="Markdown"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/QUICK_START.md"
              />
              <ResourceCard
                title="Release Notes v1.2.0"
                description="Latest features and changes"
                fileSize="30 KB"
                format="Markdown"
                href="https://github.com/HosungYou/ScholaRAG/blob/main/docs/RELEASE_NOTES_v1.2.0.md"
              />
            </div>
          </section>

          {/* Main Repository */}
          <section className="card p-8 text-center">
            <Github className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">ScholaRAG Repository</h3>
            <p className="text-gray-600 mb-6">
              Clone the complete repository to access all resources and start building your RAG system
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-left overflow-x-auto mb-6">
              <code>{`git clone https://github.com/HosungYou/ScholaRAG.git
cd ScholaRAG
pip install -r requirements.txt
code .`}</code>
            </pre>
            <a
              href="https://github.com/HosungYou/ScholaRAG"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

function ResourceCard({ title, description, fileSize, format, href }: {
  title: string
  description: string
  fileSize: string
  format: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-6 hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-bold text-lg">{title}</h4>
        <Download className="w-5 h-5 text-primary-600 flex-shrink-0" />
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded">
          {format}
        </span>
        <span>{fileSize}</span>
      </div>
    </a>
  )
}
