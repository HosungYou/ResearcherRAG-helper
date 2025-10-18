import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              ResearcherRAG
            </Link>
            <div className="flex gap-6">
              <Link href="/guide" className="text-gray-600 hover:text-gray-900 transition-colors">
                Documentation
              </Link>
              <Link href="/about" className="text-gray-900 font-medium">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">About ResearcherRAG</h1>
            <p className="text-xl text-gray-600">
              An open-source AI-powered system for systematic literature reviews
            </p>
          </div>

          {/* Mission */}
          <section className="bg-white rounded-lg border border-gray-200 p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              ResearcherRAG was created to democratize access to systematic literature review automation.
              We believe that researchers should spend more time analyzing findings and less time on
              mechanical tasks like paper screening, data extraction, and citation management.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By combining <strong>PRISMA 2020 guidelines</strong> with modern <strong>RAG (Retrieval-Augmented Generation)</strong> technology,
              ResearcherRAG helps PhD students, postdocs, and professors conduct rigorous systematic reviews
              in weeks instead of months.
            </p>
          </section>

          {/* What We Do */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">What ResearcherRAG Does</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3">
                <div className="text-3xl">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900">Automated Paper Retrieval</h3>
                <p className="text-sm text-gray-700">
                  Fetch papers from multiple academic databases (Semantic Scholar, OpenAlex, arXiv, and more)
                  with comprehensive coverage and direct PDF access.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-3">
                <div className="text-3xl">📊</div>
                <h3 className="text-lg font-semibold text-gray-900">AI-Powered PRISMA Screening</h3>
                <p className="text-sm text-gray-700">
                  Multi-dimensional paper evaluation using large language models with transparent criteria,
                  confidence scoring, and optional human validation.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 space-y-3">
                <div className="text-3xl">🗄️</div>
                <h3 className="text-lg font-semibold text-gray-900">Custom RAG Systems</h3>
                <p className="text-sm text-gray-700">
                  Build semantic search systems over your included papers using vector databases
                  (ChromaDB, FAISS) for instant literature queries.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 space-y-3">
                <div className="text-3xl">🤖</div>
                <h3 className="text-lg font-semibold text-gray-900">Conversational Workflow</h3>
                <p className="text-sm text-gray-700">
                  Step-by-step guidance through Claude Code in VS Code, making complex systematic
                  reviews accessible without coding expertise.
                </p>
              </div>
            </div>
          </section>

          {/* Technology */}
          <section className="bg-gray-50 rounded-lg border border-gray-200 p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-semibold text-gray-900 mb-1">AI Models</div>
                <ul className="text-gray-600 space-y-1">
                  <li>Claude 3.5 Sonnet</li>
                  <li>GPT-4 (optional)</li>
                  <li>Local LLMs</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">Databases</div>
                <ul className="text-gray-600 space-y-1">
                  <li>Semantic Scholar</li>
                  <li>OpenAlex</li>
                  <li>arXiv</li>
                  <li>Scopus</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">Vector DBs</div>
                <ul className="text-gray-600 space-y-1">
                  <li>ChromaDB</li>
                  <li>FAISS</li>
                  <li>Qdrant</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">Framework</div>
                <ul className="text-gray-600 space-y-1">
                  <li>Python 3.9+</li>
                  <li>LangChain</li>
                  <li>VS Code</li>
                  <li>Claude Code</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Who Uses ResearcherRAG?</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="text-2xl flex-shrink-0">🎓</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">PhD Students</h3>
                  <p className="text-sm text-gray-700">
                    Dissertation literature reviews, qualifying exams, and comprehensive literature analysis
                    for thesis proposals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl flex-shrink-0">🔬</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Academic Researchers</h3>
                  <p className="text-sm text-gray-700">
                    Meta-analysis preparation, grant proposal background sections, and systematic reviews
                    following PRISMA 2020 guidelines.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl flex-shrink-0">👨‍🏫</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Professors & Faculty</h3>
                  <p className="text-sm text-gray-700">
                    Course material updates with latest research, research synthesis for publications,
                    and mentoring students through literature reviews.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl flex-shrink-0">📚</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Research Librarians</h3>
                  <p className="text-sm text-gray-700">
                    Systematic review consulting services, research data management workshops,
                    and teaching evidence-based practice methods.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Open Source */}
          <section className="bg-green-50 border border-green-200 rounded-lg p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Open Source & Free</h2>
            <p className="text-gray-700 leading-relaxed">
              ResearcherRAG is completely <strong>open source</strong> and <strong>free to use</strong>.
              The codebase is available on GitHub under the MIT License, allowing researchers to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Use ResearcherRAG for any research purpose (academic or commercial)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Customize workflows and screening criteria for specific domains</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Contribute improvements and share domain-specific templates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Run everything locally with full control over data and privacy</span>
              </li>
            </ul>
            <div className="pt-4">
              <a
                href="https://github.com/HosungYou/ResearcherRAG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white rounded-lg border border-gray-200 p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Project Maintainer</h3>
                <p className="text-gray-700">
                  <strong>Hosung You</strong><br />
                  PhD Candidate, Learning, Design, and Technology<br />
                  The Pennsylvania State University
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:hfy5138@psu.edu"
                  className="text-blue-600 hover:text-blue-800 hover:underline font-mono"
                >
                  hfy5138@psu.edu
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Questions & Support</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Bug reports & feature requests:</strong>{' '}
                    <a
                      href="https://github.com/HosungYou/ResearcherRAG/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub Issues
                    </a>
                  </li>
                  <li>
                    <strong>General questions:</strong>{' '}
                    <a
                      href="https://github.com/HosungYou/ResearcherRAG/discussions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub Discussions
                    </a>
                  </li>
                  <li>
                    <strong>Collaboration inquiries:</strong> Email{' '}
                    <a href="mailto:hfy5138@psu.edu" className="text-blue-600 hover:underline">
                      hfy5138@psu.edu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Citation */}
          <section className="bg-gray-50 rounded-lg border border-gray-200 p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Citing ResearcherRAG</h2>
            <p className="text-gray-700">
              If you use ResearcherRAG in your research, please cite:
            </p>
            <pre className="bg-white border border-gray-300 rounded p-4 text-sm overflow-x-auto">
{`@software{researcherrag2025,
  author = {You, Hosung},
  title = {ResearcherRAG: AI-Powered Systematic Literature Review Automation},
  year = {2025},
  url = {https://github.com/HosungYou/ResearcherRAG},
  note = {Open-source PRISMA-compliant RAG system for academic research}
}`}
            </pre>
          </section>

          {/* Acknowledgments */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Acknowledgments</h2>
            <p className="text-gray-700 leading-relaxed">
              ResearcherRAG was developed with support from the Learning, Design, and Technology program
              at Penn State University. Special thanks to the research community for feedback, testing,
              and contributions that have shaped this project.
            </p>
            <p className="text-sm text-gray-600">
              Built with Claude Code by Anthropic · Powered by open-source tools and academic databases
            </p>
          </section>

          {/* CTA */}
          <div className="text-center pt-8 pb-4">
            <Link
              href="/guide/01-introduction"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Get Started with ResearcherRAG
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-600">
            <p>ResearcherRAG · Open Source · MIT License</p>
            <p className="mt-2">
              <a href="https://github.com/HosungYou/ResearcherRAG" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                GitHub
              </a>
              {' · '}
              <Link href="/guide" className="hover:text-gray-900">
                Documentation
              </Link>
              {' · '}
              <Link href="/about" className="hover:text-gray-900">
                About
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
