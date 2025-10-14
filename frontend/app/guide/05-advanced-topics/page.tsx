import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function PracticalGuidePage() {
  return (
    <GuideLayout>
      <h1>Practical Research Guide</h1>

      <p className="text-xl text-muted leading-relaxed mb-8">
        Follow a complete real-world research project from start to finish. This chapter shows actual conversations with Claude Code, generated files, and example outputs—everything you need to confidently build your own ResearcherRAG system.
      </p>

      <div className="border-2 border-gray-900 rounded-lg p-6 bg-white mb-8">
        <h3 className="text-lg font-semibold mb-3">📚 Example Project Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-2">Project Details:</p>
            <ul className="space-y-1">
              <li>• <strong>Researcher</strong>: PhD student in Applied Linguistics</li>
              <li>• <strong>Domain</strong>: Education (Language Learning)</li>
              <li>• <strong>Time</strong>: 3 hours setup + 2 weeks analysis</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Research Question:</p>
            <p className="italic border-l-4 border-gray-900 pl-3">
              "Do AI chatbots improve speaking proficiency in university-level language learners?"
            </p>
            <p className="mt-2"><strong>Target Output</strong>: 60-80 papers for dissertation</p>
          </div>
        </div>
      </div>

      <h2 id="stage0-initialization">Stage 0: Project Initialization (2 minutes)</h2>

      <p>
        <strong>Before anything else</strong>, initialize your project with the CLI tool. This creates the standardized folder structure that Claude Code expects.
      </p>

      <div className="border rounded-lg p-4 my-4 bg-gray-50">
        <p className="font-semibold text-sm mb-2">Terminal Command:</p>
        <CodeBlock
          language="bash"
          code={`cd ResearcherRAG
python researcherrag_cli.py init`}
        />
      </div>

      <details className="border rounded-lg my-6">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          📖 CLI Initialization Dialog
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <CodeBlock
            language="text"
            code={`Project name: AI-Chatbots-Language-Learning
Research question: Do AI chatbots improve speaking proficiency in university language learners?
Research domain: education

======================================================================
✅ Project created successfully!
======================================================================

📂 Project Location: projects/2025-10-13_AI-Chatbots-Language-Learning

📋 Next Steps:

1️⃣  Open the project in VS Code:
   cd projects/2025-10-13_AI-Chatbots-Language-Learning
   code .

2️⃣  Start Claude Code chat:
   • Press: Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows/Linux)
   • Type: 'Claude: Open Chat'
   • Press Enter`}
          />
        </div>
      </details>

      <h2 id="stage1-domain-setup">Stage 1: Research Domain Setup (15 minutes)</h2>

      <p>
        Open VS Code in your project folder and start Claude Code. This stage refines your research scope through conversation.
      </p>

      <h3 id="initial-conversation">Initial Conversation with Claude Code</h3>

      <div className="space-y-6 my-8">
        {/* User's First Message */}
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
          <p className="text-sm font-semibold text-blue-900 mb-2">👤 You (User Prompt):</p>
          <CodeBlock
            language="markdown"
            code={`I'm starting a new ResearcherRAG project: AI-Chatbots-Language-Learning
Research question: Do AI chatbots improve speaking proficiency in university language learners?
Domain: education

Please read my config.yaml and guide me through Stage 1 (Research Domain Setup).`}
          />
        </div>

        {/* Claude's Response */}
        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
          <p className="text-sm font-semibold text-purple-900 mb-2">🤖 Claude Code:</p>
          <div className="prose prose-sm max-w-none">
            <p>Great! I've read your config.yaml. Let me help you refine your research scope with some clarifying questions:</p>

            <p className="font-semibold mt-4">1. Language Type - Are you focusing on:</p>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• ESL (English as Second Language)?</li>
              <li>• Foreign language in general?</li>
              <li>• Specific languages (Spanish, French, Korean, etc.)?</li>
            </ul>

            <p className="font-semibold mt-4">2. Chatbot Type - Should we include:</p>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• All AI-powered chatbots?</li>
              <li>• Only conversational AI (exclude rule-based)?</li>
              <li>• Specific platforms (Duolingo, ELSA Speak, Replika)?</li>
            </ul>

            <p className="font-semibold mt-4">3. Speaking Proficiency Metrics - Which outcomes:</p>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• Fluency (words per minute, pause duration)?</li>
              <li>• Accuracy (grammar errors, pronunciation)?</li>
              <li>• Complexity (vocabulary diversity, sentence length)?</li>
              <li>• All of the above?</li>
            </ul>

            <p className="font-semibold mt-4">4. Study Designs - Which types of research:</p>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• Only RCTs (randomized controlled trials)?</li>
              <li>• Include quasi-experimental studies?</li>
              <li>• Include correlational/observational studies?</li>
            </ul>

            <p className="font-semibold mt-4">5. Time Range:</p>
            <p className="text-sm ml-4">Your config says 2010-2025. I recommend <strong>2015-2025</strong> since most AI chatbot research started post-2015. Should I update this?</p>
          </div>
        </div>

        {/* User's Response */}
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
          <p className="text-sm font-semibold text-blue-900 mb-2">👤 You:</p>
          <CodeBlock
            language="markdown"
            code={`1. ESL + Foreign language (both)
2. Only AI-powered (neural networks, not rule-based)
3. All speaking metrics (fluency, accuracy, complexity)
4. RCT + quasi-experimental only (exclude correlational)
5. Yes, 2015-2025 is better`}
          />
        </div>

        {/* Claude's Updated Response */}
        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
          <p className="text-sm font-semibold text-purple-900 mb-2">🤖 Claude Code:</p>
          <div className="prose prose-sm max-w-none">
            <p>Perfect! I'm updating your <code>config.yaml</code> with these refined criteria:</p>
          </div>
          <CodeBlock
            language="yaml"
            code={`project:
  name: "AI-Chatbots-Language-Learning"
  created: "2025-10-13"
  research_question: "Do AI chatbots improve speaking proficiency in university language learners?"
  domain: education

databases:
  - semantic_scholar
  - openalex
  - arxiv

inclusion_criteria:
  year_start: 2015
  year_end: 2025
  study_types:
    - rct
    - quasi_experimental
  languages:
    - english

  # Domain-specific filters
  domain_filters:
    chatbot_type:
      - neural
      - ai_powered
      - conversational_ai
    learning_context:
      - university
      - higher_education
      - college
    outcome_measures:
      - fluency
      - accuracy
      - complexity
      - pronunciation
      - speaking_rate

exclusion_criteria:
  - "rule-based chatbot"
  - "scripted dialogue"
  - "K-12" # excluding primary/secondary education
  - "chatbot-free control"

rag:
  vector_db: chromadb
  embeddings: text-embedding-3-small
  llm: claude-3-5-sonnet-20241022`}
          />
          <div className="prose prose-sm max-w-none mt-4">
            <p className="font-semibold">📊 Estimated Results (based on my knowledge):</p>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• <strong>Semantic Scholar</strong>: ~200-250 papers (AI/CS/interdisciplinary)</li>
              <li>• <strong>OpenAlex</strong>: ~150-200 papers (broad coverage, high OA rate)</li>
              <li>• <strong>arXiv</strong>: ~15-25 papers (cutting-edge preprints)</li>
              <li>• <strong>After deduplication</strong>: ~300-400 papers</li>
              <li>• <strong>After screening</strong>: ~100-150 papers ← Your target!</li>
              <li>• <strong>With PDF access</strong>: ~50-80 papers (50-60% automation rate)</li>
            </ul>
            <p className="mt-4">Ready to move to <strong>Stage 2 (Query Design)</strong>? 🚀</p>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <p className="font-semibold text-sm mb-2">📁 Files Created in Stage 1:</p>
        <CodeBlock
          language="text"
          code={`projects/2025-10-13_AI-Chatbots-Language-Learning/
└── config.yaml  (updated with refined inclusion/exclusion criteria)`}
        />
      </div>

      <h2 id="stage2-query-design">Stage 2: Database Selection & Query Design (10 minutes)</h2>

      <p>
        Claude Code helps you select automation-friendly databases and design effective queries. This stage is critical—the right databases = automated PDF access.
      </p>

      <div className="callout callout-info my-6">
        <p className="font-semibold mb-2">🤖 Why These Databases?</p>
        <p className="text-sm mb-3">
          ResearcherRAG prioritizes <strong>automation-friendly</strong> databases that provide both metadata AND direct PDF access through APIs:
        </p>
        <div className="space-y-2 text-sm">
          <div className="border-l-2 border-gray-900 pl-3">
            <p className="font-semibold">Semantic Scholar</p>
            <p className="text-xs">200M+ papers • 40% with PDF URLs • Excellent for AI/CS/interdisciplinary research</p>
          </div>
          <div className="border-l-2 border-gray-900 pl-3">
            <p className="font-semibold">OpenAlex</p>
            <p className="text-xs">240M+ papers • 50% open access • Comprehensive coverage across all fields</p>
          </div>
          <div className="border-l-2 border-gray-900 pl-3">
            <p className="font-semibold">arXiv</p>
            <p className="text-xs">2.3M+ preprints • 100% PDF access • Cutting-edge research (AI/ML/Physics)</p>
          </div>
        </div>
        <details className="mt-3">
          <summary className="text-sm cursor-pointer font-semibold">Why not PubMed/Scopus/Web of Science?</summary>
          <div className="text-xs mt-2 space-y-2">
            <p>
              Traditional databases like PubMed, Scopus, and Web of Science are excellent for comprehensive literature searches,
              but they <strong>don't provide automated PDF access</strong> through APIs.
            </p>
            <p className="font-semibold">What this means:</p>
            <ul className="ml-4 space-y-1">
              <li>• PubMed: Only 20% papers in PubMed Central (PMC) have full-text XML</li>
              <li>• Scopus: Metadata only; PDFs require institutional subscriptions</li>
              <li>• Result: 70-80% of papers need <strong>manual retrieval</strong> (VPN, author emails, interlibrary loan)</li>
            </ul>
            <p className="mt-2">
              For ResearcherRAG's <strong>"3-hour automated setup"</strong> promise, we use databases with API-accessible PDFs.
              This gives you <strong>50-60% automated PDF access</strong> vs. 20-30% with traditional databases.
            </p>
            <p className="mt-2 font-semibold">Can I still use PubMed/Scopus?</p>
            <p>
              Yes! You can add them for comprehensive coverage, but be prepared for lower automation rates.
              Claude Code will guide you through this in the conversation.
            </p>
          </div>
        </details>
      </div>

      <div className="space-y-6 my-8">
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
          <p className="text-sm font-semibold text-blue-900 mb-2">👤 You:</p>
          <p className="text-sm">I'm ready for Stage 2. Please design the search queries.</p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
          <p className="text-sm font-semibold text-purple-900 mb-2">🤖 Claude Code:</p>
          <div className="prose prose-sm max-w-none">
            <p>I've designed <strong>3 query strategies</strong> with different precision/recall tradeoffs:</p>
          </div>

          <div className="my-4 space-y-4">
            <details className="border rounded p-3">
              <summary className="font-semibold cursor-pointer">Query 1: Broad (~500 papers)</summary>
              <div className="mt-2 text-sm space-y-2">
                <CodeBlock
                  language="text"
                  code={`"AI chatbot language learning speaking proficiency"`}
                />
                <p><strong>Pros</strong>: High recall, won't miss relevant papers</p>
                <p><strong>Cons</strong>: Many irrelevant results, more screening work</p>
                <p><strong>Use when</strong>: Exploratory research, comprehensive review</p>
              </div>
            </details>

            <details className="border rounded p-3 border-2 border-green-500 bg-green-50">
              <summary className="font-semibold cursor-pointer">Query 2: Focused (~250 papers) ⭐ RECOMMENDED</summary>
              <div className="mt-2 text-sm space-y-2">
                <CodeBlock
                  language="text"
                  code={`(chatbot OR "conversational agent" OR "dialogue system") AND
("language learning" OR "second language" OR L2 OR ESL) AND
(speaking OR oral OR pronunciation OR fluency) AND
(university OR college OR "higher education")`}
                />
                <p><strong>Pros</strong>: Balanced precision/recall, manageable screening</p>
                <p><strong>Cons</strong>: Some papers with different terminology might be missed</p>
                <p><strong>Use when</strong>: Dissertation, thesis, systematic review</p>
              </div>
            </details>

            <details className="border rounded p-3">
              <summary className="font-semibold cursor-pointer">Query 3: Narrow (~100 papers)</summary>
              <div className="mt-2 text-sm space-y-2">
                <CodeBlock
                  language="text"
                  code={`("neural chatbot" OR "AI conversational agent") AND
(ESL OR "foreign language acquisition") AND
("speaking proficiency" OR "oral production") AND
(randomized OR "quasi-experimental" OR RCT)`}
                />
                <p><strong>Pros</strong>: High precision, minimal screening</p>
                <p><strong>Cons</strong>: Might miss papers with different phrasing</p>
                <p><strong>Use when</strong>: Time-constrained, focused meta-analysis</p>
              </div>
            </details>
          </div>

          <div className="prose prose-sm max-w-none">
            <p className="font-semibold">Which query would you like to use?</p>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
          <p className="text-sm font-semibold text-blue-900 mb-2">👤 You:</p>
          <p className="text-sm">Let's go with Query 2 (Focused). Which databases should we search?</p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
          <p className="text-sm font-semibold text-purple-900 mb-2">🤖 Claude Code:</p>
          <div className="prose prose-sm max-w-none">
            <p>For <strong>automated PDF access</strong> and language learning research, I recommend:</p>
            <ul className="ml-4 space-y-1 text-sm my-3">
              <li>• <strong>Semantic Scholar</strong>: Best for AI/education interdisciplinary papers</li>
              <li>• <strong>OpenAlex</strong>: Comprehensive coverage, high open access rate</li>
              <li>• <strong>arXiv</strong>: Latest AI/NLP research (if applicable to your topic)</li>
            </ul>
            <p className="text-sm">
              These databases provide <strong>API access to both metadata and PDFs</strong>, enabling full automation.
            </p>
            <p className="mt-3">Here are the API query formats:</p>
          </div>

          <div className="my-4 space-y-4">
            <div>
              <p className="font-semibold text-sm mb-2">Semantic Scholar API:</p>
              <CodeBlock
                language="python"
                code={`query = """
(chatbot OR conversational agent OR dialogue system) AND
(language learning OR second language OR L2 OR ESL) AND
(speaking OR oral OR pronunciation OR fluency) AND
(university OR college OR higher education)
"""

# API parameters
params = {
    'query': query,
    'year': '2015-2025',
    'fields': 'title,abstract,authors,year,citationCount,openAccessPdf',
    'limit': 1000
}`}
              />
              <p className="text-xs text-muted mt-1">
                ✓ Returns papers with <code>openAccessPdf.url</code> for direct download
              </p>
            </div>

            <div>
              <p className="font-semibold text-sm mb-2">OpenAlex API:</p>
              <CodeBlock
                language="python"
                code={`query = """
(chatbot OR conversational agent) AND
(language learning OR ESL) AND
(speaking OR oral) AND
(university OR college)
"""

# API filter
filter_params = {
    'search': query,
    'filter': 'publication_year:2015-2025,is_oa:true',
    'select': 'title,abstract,authorships,open_access',
    'per_page': 200
}`}
              />
              <p className="text-xs text-muted mt-1">
                ✓ <code>is_oa:true</code> ensures papers have PDF URLs in <code>open_access.oa_url</code>
              </p>
            </div>

            <div>
              <p className="font-semibold text-sm mb-2">arXiv API (if applicable):</p>
              <CodeBlock
                language="python"
                code={`# For AI/NLP papers on arXiv
query = "all:chatbot AND all:language AND all:learning"

# arXiv categories
categories = ["cs.CL", "cs.AI", "cs.LG"]  # Computation & Language, AI, ML

# All arXiv papers have direct PDF access
pdf_url = f"https://arxiv.org/pdf/{arxiv_id}.pdf"`}
              />
              <p className="text-xs text-muted mt-1">
                ✓ 100% PDF access for all arXiv papers
              </p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none">
            <p>I've saved these queries to <code>data/01_identification/search_queries.md</code></p>
            <p className="mt-2">
              <strong>Estimated results</strong>: Semantic Scholar (~200-250), OpenAlex (~150-200), arXiv (~20-30)
            </p>
            <p className="mt-2">Ready to proceed to <strong>Stage 3 (Automated Database Search)</strong>?</p>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <p className="font-semibold text-sm mb-2">📁 Files Created in Stage 2:</p>
        <CodeBlock
          language="text"
          code={`projects/2025-10-13_AI-Chatbots-Language-Learning/
└── data/
    └── 01_identification/
        └── search_queries.md  (Semantic Scholar, OpenAlex, arXiv queries)`}
        />
      </div>

      <h2 id="stage3-prisma">Stage 3: Automated Database Search (1 hour, fully automated)</h2>

      <p>
        This is where automation shines! Claude Code generates Python scripts that search databases via APIs and automatically download PDFs.
      </p>

      <h3 id="database-search">Step 3.1: API-Based Search & PDF Collection (30 minutes)</h3>

      <div className="callout callout-success mb-6">
        <p className="font-semibold mb-2">✅ Fully Automated Process</p>
        <p className="text-sm mb-2">
          Unlike traditional databases that require manual website visits and CSV exports,
          <strong>Semantic Scholar/OpenAlex/arXiv provide everything through APIs</strong>:
        </p>
        <ul className="text-sm space-y-1 ml-4">
          <li>✓ Metadata (title, abstract, authors, year)</li>
          <li>✓ PDF URLs (for open access papers)</li>
          <li>✓ Citation counts and references</li>
        </ul>
        <p className="text-sm mt-2">
          The entire process runs automatically—no manual downloads, no browser interactions.
        </p>
      </div>

      <div className="space-y-4 my-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
          <p className="text-sm font-semibold text-blue-900 mb-2">👤 You:</p>
          <p className="text-sm">Let's run the automated search. Can you create the API scripts?</p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
          <p className="text-sm font-semibold text-purple-900 mb-2">🤖 Claude Code:</p>
          <div className="prose prose-sm max-w-none">
            <p>I'll create the automated search script. API keys needed (all free):</p>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• <strong>Semantic Scholar</strong>: No API key (5000 requests/5min rate limit)</li>
              <li>• <strong>OpenAlex</strong>: No API key (polite pool: 10 req/sec with email in user-agent)</li>
              <li>• <strong>arXiv</strong>: No API key (3 sec delay between requests recommended)</li>
            </ul>
            <p className="mt-3">I'm creating <code>scripts/01_fetch_papers.py</code>...</p>
          </div>
        </div>
      </div>

      <details className="border rounded-lg my-6">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          📄 View Generated Script: 01_fetch_papers.py
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <CodeBlock
            language="python"
            code={`import requests
import pandas as pd
import time
from datetime import datetime

def fetch_semantic_scholar(query, year_start, year_end):
    """Fetch papers from Semantic Scholar API with PDF URLs"""
    base_url = "https://api.semanticscholar.org/graph/v1/paper/search"

    papers = []
    offset = 0
    limit = 100

    while True:
        params = {
            'query': query,
            'year': f'{year_start}-{year_end}',
            'fields': 'title,abstract,authors,year,citationCount,openAccessPdf,externalIds',
            'limit': limit,
            'offset': offset
        }

        response = requests.get(base_url, params=params)
        if response.status_code != 200:
            break

        data = response.json()
        batch = data.get('data', [])

        if not batch:
            break

        for paper in batch:
            papers.append({
                'title': paper.get('title'),
                'abstract': paper.get('abstract'),
                'authors': '; '.join([a['name'] for a in paper.get('authors', [])]),
                'year': paper.get('year'),
                'citations': paper.get('citationCount', 0),
                'doi': paper.get('externalIds', {}).get('DOI'),
                'pdf_url': paper.get('openAccessPdf', {}).get('url') if paper.get('openAccessPdf') else None,
                'source': 'Semantic Scholar'
            })

        offset += limit
        if offset >= 1000:  # Limit to 1000 papers
            break

        time.sleep(0.5)  # Rate limiting

    print(f"Found {len(papers)} papers from Semantic Scholar ({sum(1 for p in papers if p['pdf_url'])} with PDF URLs)")
    return pd.DataFrame(papers)

def fetch_openalex(query, year_start, year_end):
    """Fetch papers from OpenAlex API with open access PDFs"""
    base_url = "https://api.openalex.org/works"

    papers = []
    page = 1
    per_page = 200

    while True:
        params = {
            'search': query,
            'filter': f'publication_year:{year_start}-{year_end},is_oa:true',
            'per_page': per_page,
            'page': page,
            'mailto': 'your-email@example.com'  # Polite pool access
        }

        response = requests.get(base_url, params=params)
        if response.status_code != 200:
            break

        data = response.json()
        results = data.get('results', [])

        if not results:
            break

        for work in results:
            papers.append({
                'title': work.get('title'),
                'abstract': work.get('abstract_inverted_index'),  # Needs processing
                'authors': '; '.join([a['author']['display_name'] for a in work.get('authorships', [])]),
                'year': work.get('publication_year'),
                'citations': work.get('cited_by_count', 0),
                'doi': work.get('doi', '').replace('https://doi.org/', ''),
                'pdf_url': work.get('open_access', {}).get('oa_url'),
                'source': 'OpenAlex'
            })

        page += 1
        if page > 5:  # Limit to 1000 papers (5 pages × 200)
            break

    print(f"Found {len(papers)} papers from OpenAlex ({sum(1 for p in papers if p['pdf_url'])} with PDF URLs)")
    return pd.DataFrame(papers)

def fetch_arxiv(query, year_start, year_end):
    """Fetch papers from arXiv API (100% PDF access)"""
    import urllib.parse

    base_url = "http://export.arxiv.org/api/query"
    encoded_query = urllib.parse.quote(query)

    papers = []
    start = 0
    max_results = 100

    while True:
        url = f"{base_url}?search_query={encoded_query}&start={start}&max_results={max_results}"
        response = requests.get(url)

        # Parse XML response
        import xml.etree.ElementTree as ET
        root = ET.fromstring(response.content)

        entries = root.findall('{http://www.w3.org/2005/Atom}entry')
        if not entries:
            break

        for entry in entries:
            year = int(entry.find('{http://www.w3.org/2005/Atom}published').text[:4])
            if year_start <= year <= year_end:
                papers.append({
                    'title': entry.find('{http://www.w3.org/2005/Atom}title').text.strip(),
                    'abstract': entry.find('{http://www.w3.org/2005/Atom}summary').text.strip(),
                    'authors': '; '.join([a.find('{http://www.w3.org/2005/Atom}name').text
                                        for a in entry.findall('{http://www.w3.org/2005/Atom}author')]),
                    'year': year,
                    'citations': 0,  # arXiv doesn't provide citation counts
                    'doi': entry.find('{http://arxiv.org/schemas/atom}doi').text if entry.find('{http://arxiv.org/schemas/atom}doi') is not None else None,
                    'pdf_url': entry.find('{http://www.w3.org/2005/Atom}id').text.replace('abs', 'pdf') + '.pdf',
                    'source': 'arXiv'
                })

        start += max_results
        if start >= 500:  # Limit to 500 papers
            break

        time.sleep(3)  # arXiv requires 3-second delay

    print(f"Found {len(papers)} papers from arXiv ({len(papers)} with PDF URLs)")
    return pd.DataFrame(papers)

# Run searches
print("\\n🔍 Searching databases for automated PDF access...\\n")

semantic_results = fetch_semantic_scholar(
    query="(chatbot OR conversational agent OR dialogue system) AND (language learning OR second language OR ESL) AND (speaking OR pronunciation)",
    year_start=2015,
    year_end=2025
)

openalex_results = fetch_openalex(
    query="chatbot language learning speaking",
    year_start=2015,
    year_end=2025
)

arxiv_results = fetch_arxiv(
    query="all:chatbot AND all:language AND all:learning",
    year_start=2015,
    year_end=2025
)

# Combine and save
all_papers = pd.concat([semantic_results, openalex_results, arxiv_results], ignore_index=True)
all_papers.to_csv('data/01_identification/all_papers.csv', index=False)

print(f"\\n✓ Total papers collected: {len(all_papers)}")
print(f"✓ Papers with PDF URLs: {all_papers['pdf_url'].notna().sum()} ({all_papers['pdf_url'].notna().sum() / len(all_papers) * 100:.1f}%)")`}
          />
        </div>
      </details>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <p className="font-semibold text-sm mb-2">📊 Search Results (Example Output):</p>
        <CodeBlock
          language="text"
          code={`$ python scripts/01_fetch_papers.py

🔍 Searching databases for automated PDF access...

Searching Semantic Scholar...
Found 218 papers from Semantic Scholar (94 with PDF URLs)

Searching OpenAlex...
Found 182 papers from OpenAlex (97 with PDF URLs)

Searching arXiv...
Found 23 papers from arXiv (23 with PDF URLs)

✓ Total papers collected: 423
✓ Papers with PDF URLs: 214 (50.6%)
✓ Saved to data/01_identification/all_papers.csv`}
        />
      </div>

      <h3 id="deduplication">Step 3.2: Deduplication (5 minutes)</h3>

      <p>
        Many papers appear in multiple databases. Claude Code creates a deduplication script that identifies duplicates by DOI, title similarity, and author overlap.
      </p>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <p className="font-semibold text-sm mb-2">📊 Deduplication Results:</p>
        <CodeBlock
          language="text"
          code={`$ python scripts/02_deduplicate.py

Processing 423 papers...
Found 87 exact DOI matches
Found 19 title similarity matches (>95% similar)
Found 6 author+year matches

Total duplicates removed: 112
Final dataset: 311 unique papers

✓ Saved to data/01_identification/deduplicated.csv`}
        />
      </div>

      <h3 id="screening">Step 3.3: PRISMA Screening (1 hour)</h3>

      <p>
        Claude Code applies your inclusion/exclusion criteria from <code>config.yaml</code> to automatically screen papers based on title and abstract.
      </p>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <p className="font-semibold text-sm mb-2">📊 PRISMA Screening Results:</p>
        <CodeBlock
          language="text"
          code={`$ python scripts/03_prisma_screening.py

Stage 2: Title/Abstract Screening
==================================

Applying inclusion criteria:
✓ Year range: 2015-2025
✓ Study types: RCT, quasi-experimental
✓ Keywords: chatbot, language learning, speaking
✓ Context: university, higher education

Results:
- Input: 311 papers
- Passed all criteria: 139 papers (44.7%)
- Excluded: 172 papers (55.3%)

Top exclusion reasons:
  1. Wrong outcome measure (n=45) - e.g., reading, writing only
  2. Wrong population (n=38) - K-12 students, not university
  3. Wrong intervention (n=32) - rule-based chatbots
  4. Study design (n=28) - correlational, not experimental
  5. Other (n=29)

✓ Saved passed papers to data/02_screening/title_abstract.csv
✓ Saved excluded papers to data/02_screening/excluded.csv`}
        />
      </div>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <p className="font-semibold text-sm mb-2">📁 Files Created in Stage 3:</p>
        <CodeBlock
          language="text"
          code={`projects/2025-10-13_AI-Chatbots-Language-Learning/
└── data/
    ├── 01_identification/
    │   ├── semantic_scholar_results.csv (210 papers, 89 with PDFs)
    │   ├── openalex_results.csv (175 papers, 91 with PDFs)
    │   ├── arxiv_results.csv (18 papers, 18 with PDFs)
    │   └── deduplicated.csv (338 unique papers, 198 with PDF URLs)
    └── 02_screening/
        ├── title_abstract.csv (139 passed, 68 with PDFs)
        ├── excluded.csv (199 excluded)
        └── decisions.json (screening decisions log)`}
        />
      </div>

      <h2 id="stage4-rag-setup">Stage 4: RAG System Setup (30 minutes)</h2>

      <p>
        Now you have 139 papers that passed screening (68 with direct PDF URLs from Stage 3). Claude Code downloads the PDFs and builds a vector database.
      </p>

      <h3 id="pdf-download">Step 4.1: PDF Download (15 minutes)</h3>

      <div className="callout callout-success mb-4">
        <p className="font-semibold mb-2">✅ API-Collected PDF URLs</p>
        <p className="text-sm">
          Good news! <strong>68/139 papers (49%)</strong> already have PDF URLs collected from Semantic Scholar, OpenAlex, and arXiv APIs in Stage 3. These download automatically.
        </p>
        <p className="text-sm mt-2">
          For the remaining 71 papers (51%), Claude Code tries additional sources: Unpaywall, SciHub-alternatives, and institutional access.
        </p>
      </div>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <p className="font-semibold text-sm mb-2">📊 PDF Download Results:</p>
        <CodeBlock
          language="text"
          code={`$ python scripts/04_download_pdfs.py

Downloading PDFs for 139 papers...

✅ From API URLs (Stage 3):
  - Semantic Scholar: 35 PDFs
  - OpenAlex: 28 PDFs
  - arXiv: 5 PDFs
  Subtotal: 68 PDFs (49%) - automatic

🔍 Additional sources (71 remaining papers):
  - Unpaywall API: 8 PDFs found
  - Institutional access: 3 PDFs found
  - Manual fallback: 0 PDFs
  Subtotal: 11 PDFs (15% of remaining)

Total PDFs downloaded: 79/139 (57%)
Missing PDFs: 60/139 (43%)

For missing PDFs, you can:
- ✉️ Email authors directly (most respond within 2-3 days)
- 🏛️ Try institutional VPN/proxy
- 📝 Use abstract-only for RAG (reduced context quality)

✓ Saved PDFs to data/pdfs/
✓ Saved missing list to data/pdfs/missing_pdfs.txt`}
        />
      </div>

      <h3 id="vector-db">Step 4.2: Vector Database Creation (10 minutes)</h3>

      <p>
        Claude Code extracts text from PDFs, chunks them, generates embeddings, and stores everything in ChromaDB.
      </p>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <p className="font-semibold text-sm mb-2">📊 RAG Ingestion Results:</p>
        <CodeBlock
          language="text"
          code={`$ python scripts/05_build_rag.py

Processing 79 PDFs...

Text Extraction:
  PyMuPDF: 75 successful
  OCR fallback: 4 successful
  Failed: 0

Chunking Strategy:
  Chunk size: 1000 tokens
  Overlap: 200 tokens
  Total chunks: 912

Embedding Generation:
  Model: text-embedding-3-small
  Dimensions: 1536
  Time: 4m 15s
  Cost: $0.03

Vector Database:
  Type: ChromaDB
  Storage: rag/chroma_db/
  Size: 48 MB

✓ RAG system ready!
Test query: python scripts/06_query_rag.py "What improves speaking fluency?"`}
        />
      </div>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <p className="font-semibold text-sm mb-2">📁 Files Created in Stage 4:</p>
        <CodeBlock
          language="text"
          code={`projects/2025-10-13_AI-Chatbots-Language-Learning/
├── data/
│   ├── 03_full_text/
│   │   └── final_dataset.csv (139 papers, 79 with PDFs)
│   └── pdfs/ (79 PDF files)
├── rag/
│   ├── chroma_db/ (vector database, 912 chunks)
│   ├── rag_config.yaml
│   └── ingestion_log.txt
└── scripts/
    └── 06_query_rag.py (query interface)`}
        />
      </div>

      <h2 id="stage5-research">Stage 5: Research Conversations (Ongoing)</h2>

      <p>
        Your RAG system is ready! Now query it like you're talking to an expert who has read all 75 papers.
      </p>

      <h3 id="example-queries">Example Research Conversations</h3>

      <div className="space-y-8 my-8">
        {/* Query 1 */}
        <div className="border-2 border-gray-900 rounded-lg p-6">
          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 mb-4">
            <p className="text-sm font-semibold text-blue-900 mb-2">🔍 Query 1:</p>
            <p className="font-semibold">"What are the main effects of AI chatbots on speaking fluency?"</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
            <p className="text-sm font-semibold text-green-900 mb-3">🤖 RAG Response:</p>
            <div className="prose prose-sm max-w-none">
              <p className="mb-3">Based on <strong>8 studies</strong> in your dataset, AI chatbots show <strong>moderate to large positive effects</strong> on speaking fluency:</p>

              <p className="font-semibold mt-4 mb-2">1. Speaking Rate Improvements:</p>
              <ul className="ml-4 space-y-2 text-sm">
                <li>• <strong>15-30% increase</strong> in words per minute [Kim et al., 2023, RCT, N=120, d=0.68, p&lt;.001]
                  <br/><span className="text-xs text-muted">Pre-test: 85 wpm → Post-test: 108 wpm (8-week intervention)</span>
                </li>
                <li>• Gains maintained at <strong>3-month follow-up</strong> [Martinez et al., 2023, d=0.52]</li>
              </ul>

              <p className="font-semibold mt-4 mb-2">2. Fluency Ratings (IELTS/TOEFL):</p>
              <ul className="ml-4 space-y-2 text-sm">
                <li>• Chatbot group: <strong>+0.9 band improvement</strong> vs control: +0.3 bands
                  <br/>[Lee & Park, 2022, Quasi-exp, N=89, η²=0.42, p&lt;.01]</li>
                <li>• Effect size larger for <strong>lower-proficiency learners</strong> (d=0.85 vs 0.42)</li>
              </ul>

              <p className="font-semibold mt-4 mb-2">3. Pause Duration Reduction:</p>
              <ul className="ml-4 space-y-2 text-sm">
                <li>• <strong>40% reduction</strong> in hesitation pauses [Chen, 2024, RCT, N=156, d=0.51]</li>
                <li>• Silent pauses decreased from 2.3s to 1.4s average</li>
              </ul>

              <p className="font-semibold mt-4 mb-2">⚠️ Moderating Factors:</p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• <strong>Practice frequency matters</strong>: 3×/week &gt; 1×/week (d=0.74 vs 0.38)</li>
                <li>• <strong>Duration</strong>: Effects emerge after 4+ weeks of consistent use</li>
                <li>• <strong>Proficiency</strong>: Stronger effects for A2-B1 learners than B2+ learners</li>
              </ul>

              <p className="font-semibold mt-4 mb-2">📌 Limitations to Consider:</p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• Most studies &lt;3 months (long-term sustainability unclear)</li>
                <li>• Majority of participants: Chinese/Korean EFL learners (limited L1 diversity)</li>
                <li>• Self-reported measures prone to social desirability bias</li>
                <li>• Publication bias likely (few null results published)</li>
              </ul>

              <p className="mt-4 text-xs">📚 <strong>8 papers cited</strong> | Avg. similarity: 0.82 | <a href="#" className="underline">View sources</a></p>
            </div>
          </div>
        </div>

        {/* Query 2 */}
        <div className="border-2 border-gray-900 rounded-lg p-6">
          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 mb-4">
            <p className="text-sm font-semibold text-blue-900 mb-2">🔍 Query 2:</p>
            <p className="font-semibold">"Which chatbot features are most effective for pronunciation improvement?"</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
            <p className="text-sm font-semibold text-green-900 mb-3">🤖 RAG Response:</p>
            <div className="prose prose-sm max-w-none">
              <p className="mb-3">Based on <strong>5 studies</strong> comparing chatbot features:</p>

              <p className="font-semibold mt-4 mb-2">Top 3 Effective Features:</p>
              <ol className="ml-4 space-y-3 text-sm">
                <li><strong>1. Real-time Pronunciation Feedback</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• <strong>Visual waveforms</strong> + correctness scores most effective [Zhang et al., 2023]</li>
                    <li>• Effect size: d=0.71 (large) for feedback vs. d=0.31 (small) for no feedback</li>
                    <li>• Users reported higher motivation with immediate correction</li>
                  </ul>
                </li>
                <li><strong>2. Adaptive Difficulty Adjustment</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Chatbots that adapt to learner level outperform fixed difficulty [Wilson, 2024]</li>
                    <li>• Adaptive: 18% accuracy improvement vs. Fixed: 9% improvement (p&lt;.05)</li>
                  </ul>
                </li>
                <li><strong>3. Conversational Context (vs. Isolated Words)</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Practicing pronunciation in dialogue <strong>2× more effective</strong> than word lists</li>
                    <li>• Transfer to spontaneous speech better with conversational practice</li>
                  </ul>
                </li>
              </ol>

              <p className="font-semibold mt-4 mb-2">❌ Less Effective Features:</p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• Gamification alone (no significant effect on pronunciation accuracy)</li>
                <li>• Text-only feedback (users need audio examples for comparison)</li>
              </ul>

              <p className="mt-4 text-xs">📚 <strong>5 papers cited</strong> | <a href="#" className="underline">View sources</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <p className="font-semibold text-sm mb-2">📁 Files Created in Stage 5:</p>
        <CodeBlock
          language="text"
          code={`projects/2025-10-13_AI-Chatbots-Language-Learning/
└── conversations/
    ├── 2025-10-15_fluency-effects.md
    ├── 2025-10-16_pronunciation-features.md
    └── 2025-10-17_moderators-analysis.md`}
        />
      </div>

      <h2 id="stage6-documentation">Stage 6: Documentation & Export (1 hour)</h2>

      <p>
        Generate publication-ready PRISMA flowcharts and export your literature review data.
      </p>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <p className="font-semibold text-sm mb-2">📊 Generated Outputs:</p>
        <CodeBlock
          language="text"
          code={`$ python scripts/07_generate_prisma.py

Creating PRISMA 2020 flowchart...

Records identified through:
  • Semantic Scholar: 210 (89 with PDFs)
  • OpenAlex: 175 (91 with PDFs)
  • arXiv: 18 (18 with PDFs)
  Total: 403 (198 with PDFs - 49%)

Records after deduplication: 338 (198 with PDFs)
Records screened (title/abstract): 338
Records excluded: 199
  - Wrong outcome: 52
  - Wrong population: 45
  - Wrong intervention: 38
  - Study design: 34
  - Other: 30

Full-text articles assessed: 139 (68 with PDFs)
Additional PDFs downloaded: 11 (via Unpaywall, institutional access)
Total PDFs available: 79 (57%)

Studies included for RAG: 79 (with PDFs)
Studies tracked but not in RAG: 60 (PDF unavailable)

✓ Generated outputs/prisma_flowchart.png
✓ Generated outputs/prisma_flowchart.mmd (Mermaid format)
✓ Generated outputs/search_strategy.md (for Methods section)`}
        />
      </div>

      <h2 id="timeline">Complete Project Timeline</h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2">
              <th className="text-left p-3">Stage</th>
              <th className="text-left p-3">Duration</th>
              <th className="text-left p-3">Your Effort</th>
              <th className="text-left p-3">Automation</th>
              <th className="text-left p-3">Key Activities</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">0. Initialization</td>
              <td className="p-3">2 min</td>
              <td className="p-3">🧑 Minimal</td>
              <td className="p-3">-</td>
              <td className="p-3">Run CLI, answer prompts</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-3">1. Domain Setup</td>
              <td className="p-3">15 min</td>
              <td className="p-3">🧑🧑🧑 High</td>
              <td className="p-3">-</td>
              <td className="p-3">Clarify scope, refine criteria</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">2. Query Design</td>
              <td className="p-3">10 min</td>
              <td className="p-3">🧑🧑 Medium</td>
              <td className="p-3">✅ 70%</td>
              <td className="p-3">Review queries, select strategy</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-3">3. Automated Search</td>
              <td className="p-3">1 hour</td>
              <td className="p-3">🧑 Low</td>
              <td className="p-3">✅ 95%</td>
              <td className="p-3">API searches + screening, review borderline cases</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">4. RAG Setup</td>
              <td className="p-3">30 min</td>
              <td className="p-3">🧑 Low</td>
              <td className="p-3">✅ 95%</td>
              <td className="p-3">Wait for downloads, test queries</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-3">5. Research Use</td>
              <td className="p-3">Ongoing</td>
              <td className="p-3">🧑🧑🧑 High</td>
              <td className="p-3">✅ 50%</td>
              <td className="p-3">Ask questions, synthesize findings</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">6. Documentation</td>
              <td className="p-3">1 hour</td>
              <td className="p-3">🧑 Low</td>
              <td className="p-3">✅ 85%</td>
              <td className="p-3">Review flowchart, export data</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t-2 font-semibold">
              <td className="p-3">Total</td>
              <td className="p-3">~2 hours</td>
              <td className="p-3" colSpan={3}>
                Time saved vs. manual: <strong>~120 hours (3 weeks)</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <h2 id="final-structure">Final Project Structure</h2>

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <CodeBlock
          language="text"
          code={`projects/2025-10-13_AI-Chatbots-Language-Learning/
├── .researcherrag               # Metadata for dashboard
├── config.yaml                  # Project configuration
├── README.md                    # Project documentation
│
├── data/
│   ├── 01_identification/
│   │   ├── semantic_scholar_results.csv  (210 papers, 89 PDFs)
│   │   ├── openalex_results.csv          (175 papers, 91 PDFs)
│   │   ├── arxiv_results.csv             (18 papers, 18 PDFs)
│   │   ├── deduplicated.csv              (338 unique, 198 PDFs)
│   │   └── search_queries.md             (API queries)
│   │
│   ├── 02_screening/
│   │   ├── title_abstract.csv       (139 passed, 68 PDFs)
│   │   ├── excluded.csv             (199 excluded)
│   │   └── decisions.json           (screening log)
│   │
│   ├── 03_full_text/
│   │   ├── final_dataset.csv        (139 papers, 79 with PDFs)
│   │   └── exclusion_reasons.csv    (additional exclusions)
│   │
│   └── pdfs/                        (79 PDF files)
│       └── missing_pdfs.txt         (60 unavailable)
│
├── rag/
│   ├── chroma_db/                   (vector database)
│   │   └── [912 chunks, 48 MB]
│   ├── rag_config.yaml              (RAG settings)
│   └── ingestion_log.txt            (processing log)
│
├── outputs/
│   ├── prisma_flowchart.png         (publication-ready)
│   ├── prisma_flowchart.mmd         (Mermaid source)
│   └── search_strategy.md           (Methods section)
│
├── conversations/                   (research notes)
│   ├── 2025-10-15_fluency-effects.md
│   ├── 2025-10-16_pronunciation-features.md
│   └── 2025-10-17_moderators-analysis.md
│
└── scripts/                         (automation)
    ├── 01_fetch_papers.py
    ├── 02_deduplicate.py
    ├── 03_prisma_screening.py
    ├── 04_download_pdfs.py
    ├── 05_build_rag.py
    ├── 06_query_rag.py
    └── 07_generate_prisma.py`}
        />
      </div>

      <h2 id="tips">Tips for Success</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-3">✅ Do's</h3>
          <ul className="text-sm space-y-2">
            <li>• <strong>Start narrow</strong>: Test with focused query first, broaden if needed</li>
            <li>• <strong>Iterate</strong>: Refine criteria after seeing initial results</li>
            <li>• <strong>Document</strong>: Save important conversations in conversations/ folder</li>
            <li>• <strong>Verify</strong>: Always check AI citations against original papers</li>
            <li>• <strong>Use CLI</strong>: Check progress with <code>researcherrag_cli.py status</code></li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-3">❌ Don'ts</h3>
          <ul className="text-sm space-y-2">
            <li>• <strong>Don't skip CLI init</strong>: You'll regret inconsistent folder structure</li>
            <li>• <strong>Don't trust blindly</strong>: RAG can hallucinate, verify important claims</li>
            <li>• <strong>Don't expect 100% PDFs</strong>: 50-60% success rate is normal</li>
            <li>• <strong>Don't ignore exclusions</strong>: Review borderline cases manually</li>
            <li>• <strong>Don't forget backups</strong>: Push to GitHub regularly</li>
          </ul>
        </div>
      </div>

      <h2 id="troubleshooting">Common Issues & Quick Fixes</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          "My PDF download rate is only 30%, not 50-60%"
        </summary>
        <div className="p-4 pt-0 border-t space-y-2 text-sm">
          <p><strong>Solutions</strong>:</p>
          <ul className="ml-4 space-y-1">
            <li>1. Add <code>Unpaywall API key</code> (free) for better open access coverage</li>
            <li>2. Use institutional VPN if your university has subscriptions</li>
            <li>3. Email authors directly—80% response rate for recent papers</li>
            <li>4. For dissertation: 30-40 papers with full text is often enough</li>
          </ul>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          "Claude Code created files in wrong folders"
        </summary>
        <div className="p-4 pt-0 border-t space-y-2 text-sm">
          <p><strong>Cause</strong>: You didn't initialize with CLI, or Claude didn't read <code>.researcherrag</code></p>
          <p><strong>Fix</strong>:</p>
          <ol className="ml-4 space-y-1">
            <li>1. Stop current work</li>
            <li>2. Run <code>python researcherrag_cli.py init</code> in a new folder</li>
            <li>3. Manually move files to correct locations</li>
            <li>4. Remind Claude: "Please save to data/01_identification/ as specified in CLAUDE.md"</li>
          </ol>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          "RAG is citing papers not in my dataset"
        </summary>
        <div className="p-4 pt-0 border-t space-y-2 text-sm">
          <p><strong>This is hallucination</strong>. RAG should ONLY cite papers from your 75 included papers.</p>
          <p><strong>Fix</strong>:</p>
          <ul className="ml-4 space-y-1">
            <li>• Check <code>rag_config.yaml</code>: Set <code>retrieval_only: true</code></li>
            <li>• Verify chunk metadata includes paper IDs</li>
            <li>• Add system prompt: "Only cite papers from the retrieved context"</li>
          </ul>
        </div>
      </details>

      <h2 id="next-chapter">What's Next?</h2>

      <p>
        You've seen a complete real-world example. Now apply this to your own research domain! Next chapters cover:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <Link href="/guide/06-research-conversation" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <h3 className="font-semibold mb-2">📖 Chapter 6: Research Conversations</h3>
          <p className="text-sm text-muted">
            Advanced querying techniques, citation management, and how to use RAG for literature synthesis.
          </p>
        </Link>

        <Link href="/guide/07-documentation-writing" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <h3 className="font-semibold mb-2">✍️ Chapter 7: Documentation & Writing</h3>
          <p className="text-sm text-muted">
            Export findings, write Methods sections, create Tables, and generate reproducible reports.
          </p>
        </Link>
      </div>

      <div className="border-l-4 border-gray-900 pl-6 my-12">
        <p className="text-sm text-muted mb-2">
          <strong>Ready to start your own project?</strong>
        </p>
        <Link
          href="/guide/02-getting-started#step0-init-project"
          className="inline-flex items-center gap-2 text-foreground hover:underline font-semibold"
        >
          Initialize your first project with CLI →
        </Link>
      </div>
    </GuideLayout>
  )
}
