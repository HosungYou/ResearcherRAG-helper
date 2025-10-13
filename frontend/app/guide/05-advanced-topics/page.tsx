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

      <div className="border-2 border-gray-900 dark:border-gray-100 rounded-lg p-6 bg-white dark:bg-black mb-8">
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
            <p className="italic border-l-4 border-gray-900 dark:border-gray-100 pl-3">
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

      <div className="border rounded-lg p-4 my-4 bg-gray-50 dark:bg-gray-900">
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
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-950/20">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">👤 You (User Prompt):</p>
          <CodeBlock
            language="markdown"
            code={`I'm starting a new ResearcherRAG project: AI-Chatbots-Language-Learning
Research question: Do AI chatbots improve speaking proficiency in university language learners?
Domain: education

Please read my config.yaml and guide me through Stage 1 (Research Domain Setup).`}
          />
        </div>

        {/* Claude's Response */}
        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 dark:bg-purple-950/20">
          <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-2">🤖 Claude Code:</p>
          <div className="prose prose-sm dark:prose-invert max-w-none">
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
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-950/20">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">👤 You:</p>
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
        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 dark:bg-purple-950/20">
          <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-2">🤖 Claude Code:</p>
          <div className="prose prose-sm dark:prose-invert max-w-none">
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
  - pubmed
  - scopus
  - eric

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
          <div className="prose prose-sm dark:prose-invert max-w-none mt-4">
            <p className="font-semibold">📊 Estimated Results (based on my knowledge):</p>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• <strong>PubMed</strong>: ~50-80 papers (health/psychology journals)</li>
              <li>• <strong>Scopus</strong>: ~200-300 papers (broad coverage)</li>
              <li>• <strong>ERIC</strong>: ~100-150 papers (education focus)</li>
              <li>• <strong>After deduplication</strong>: ~400-500 papers</li>
              <li>• <strong>After PRISMA screening</strong>: ~60-100 papers ← Your target!</li>
            </ul>
            <p className="mt-4">Ready to move to <strong>Stage 2 (Query Design)</strong>? 🚀</p>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
        <p className="font-semibold text-sm mb-2">📁 Files Created in Stage 1:</p>
        <CodeBlock
          language="text"
          code={`projects/2025-10-13_AI-Chatbots-Language-Learning/
└── config.yaml  (updated with refined inclusion/exclusion criteria)`}
        />
      </div>

      <h2 id="stage2-query-design">Stage 2: Query Strategy Design (10 minutes)</h2>

      <p>
        Claude Code designs effective search queries tailored to different academic databases. This stage is critical—good queries = relevant papers.
      </p>

      <div className="space-y-6 my-8">
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-950/20">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">👤 You:</p>
          <p className="text-sm">I'm ready for Stage 2. Please design the search queries.</p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 dark:bg-purple-950/20">
          <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-2">🤖 Claude Code:</p>
          <div className="prose prose-sm dark:prose-invert max-w-none">
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

            <details className="border rounded p-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/20">
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

          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="font-semibold">Which query would you like to use?</p>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-950/20">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">👤 You:</p>
          <p className="text-sm">Let's go with Query 2 (Focused). Can you generate database-specific formats for PubMed, Scopus, and ERIC?</p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 dark:bg-purple-950/20">
          <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-2">🤖 Claude Code:</p>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>Great choice! Here are the database-specific query formats:</p>
          </div>

          <div className="my-4 space-y-4">
            <div>
              <p className="font-semibold text-sm mb-2">PubMed (Medical/Psychology):</p>
              <CodeBlock
                language="sql"
                code={`(("chatbot"[Title/Abstract] OR "conversational agent"[Title/Abstract] OR "dialogue system"[Title/Abstract])
AND ("language learning"[Title/Abstract] OR "second language"[Title/Abstract] OR "L2"[Title/Abstract] OR "ESL"[Title/Abstract])
AND ("speaking"[Title/Abstract] OR "oral"[Title/Abstract] OR "pronunciation"[Title/Abstract] OR "fluency"[Title/Abstract])
AND ("university"[Title/Abstract] OR "college"[Title/Abstract] OR "higher education"[Title/Abstract]))
AND 2015:2025[pdat]`}
              />
            </div>

            <div>
              <p className="font-semibold text-sm mb-2">Scopus (Broad Multidisciplinary):</p>
              <CodeBlock
                language="sql"
                code={`TITLE-ABS-KEY((chatbot OR "conversational agent" OR "dialogue system")
AND ("language learning" OR "second language" OR L2 OR ESL)
AND (speaking OR oral OR pronunciation OR fluency)
AND (university OR college OR "higher education"))
AND PUBYEAR > 2014 AND PUBYEAR < 2026`}
              />
            </div>

            <div>
              <p className="font-semibold text-sm mb-2">ERIC (Education Research):</p>
              <CodeBlock
                language="sql"
                code={`(chatbot OR "conversational agent") AND ("language learning" OR ESL)
AND (speaking OR oral) AND (university OR college)
publicationdate:[2015 TO 2025]`}
              />
            </div>
          </div>

          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>I've saved these queries to <code>data/01_identification/search_queries.md</code></p>
            <p className="mt-2">Ready to proceed to <strong>Stage 3 (Database Search & PRISMA Execution)</strong>?</p>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
        <p className="font-semibold text-sm mb-2">📁 Files Created in Stage 2:</p>
        <CodeBlock
          language="text"
          code={`projects/2025-10-13_AI-Chatbots-Language-Learning/
└── data/
    └── 01_identification/
        └── search_queries.md  (PubMed, Scopus, ERIC queries)`}
        />
      </div>

      <h2 id="stage3-prisma">Stage 3: PRISMA Execution (2 hours, mostly automated)</h2>

      <p>
        This is where the magic happens! Claude Code guides you through database searches, deduplication, and PRISMA screening—all automated with Python scripts.
      </p>

      <h3 id="database-search">Step 3.1: Database Search (30 minutes)</h3>

      <div className="callout callout-info mb-6">
        <p className="font-semibold mb-2">💡 Manual vs. Automated Search</p>
        <p className="text-sm">
          You have two options: (1) <strong>Manual</strong>—copy queries to PubMed/Scopus/ERIC websites, export CSVs manually, or (2) <strong>Automated</strong>—Claude Code generates Python scripts using APIs. We'll show the automated approach here.
        </p>
      </div>

      <div className="space-y-4 my-6">
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-950/20">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">👤 You:</p>
          <p className="text-sm">Yes, let's search the databases. Can you create API scripts for PubMed, Scopus, and ERIC?</p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 dark:bg-purple-950/20">
          <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-2">🤖 Claude Code:</p>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>I'll create automated search scripts. Note: You'll need API keys (all free):</p>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• <strong>PubMed</strong>: No API key needed (open access)</li>
              <li>• <strong>Scopus</strong>: Register at dev.elsevier.com (free tier: 5000 requests/week)</li>
              <li>• <strong>ERIC</strong>: No API key needed (open access)</li>
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
from datetime import datetime

def fetch_pubmed(query, year_start, year_end):
    """Fetch papers from PubMed API"""
    base_url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"

    # Search for paper IDs
    search_params = {
        'db': 'pubmed',
        'term': query,
        'retmax': 1000,
        'datetype': 'pdat',
        'mindate': year_start,
        'maxdate': year_end
    }

    search_response = requests.get(f"{base_url}esearch.fcgi", params=search_params)
    ids = search_response.json()['esearchresult']['idlist']

    print(f"Found {len(ids)} papers from PubMed")

    # Fetch paper details
    papers = []
    for pmid in ids:
        fetch_params = {'db': 'pubmed', 'id': pmid, 'retmode': 'xml'}
        response = requests.get(f"{base_url}efetch.fcgi", params=fetch_params)
        # Parse XML and extract title, abstract, authors, etc.
        # ... (parsing logic)
        papers.append({
            'pmid': pmid,
            'title': title,
            'abstract': abstract,
            'authors': authors,
            'year': year,
            'journal': journal,
            'doi': doi
        })

    return pd.DataFrame(papers)

# Run searches
pubmed_results = fetch_pubmed(
    query="(chatbot OR conversational agent) AND language learning...",
    year_start=2015,
    year_end=2025
)

# Save results
pubmed_results.to_csv('data/01_identification/pubmed_results.csv', index=False)
print(f"✓ Saved {len(pubmed_results)} papers to pubmed_results.csv")`}
          />
        </div>
      </details>

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
        <p className="font-semibold text-sm mb-2">📊 Search Results (Example Output):</p>
        <CodeBlock
          language="text"
          code={`$ python scripts/01_fetch_papers.py

Searching PubMed...
Found 78 papers from PubMed
✓ Saved to data/01_identification/pubmed_results.csv

Searching Scopus...
Found 245 papers from Scopus
✓ Saved to data/01_identification/scopus_results.csv

Searching ERIC...
Found 134 papers from ERIC
✓ Saved to data/01_identification/eric_results.csv

Total papers collected: 457`}
        />
      </div>

      <h3 id="deduplication">Step 3.2: Deduplication (5 minutes)</h3>

      <p>
        Many papers appear in multiple databases. Claude Code creates a deduplication script that identifies duplicates by DOI, title similarity, and author overlap.
      </p>

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
        <p className="font-semibold text-sm mb-2">📊 Deduplication Results:</p>
        <CodeBlock
          language="text"
          code={`$ python scripts/02_deduplicate.py

Processing 457 papers...
Found 115 exact DOI matches
Found 23 title similarity matches (>95% similar)
Found 8 author+year matches

Total duplicates removed: 146
Final dataset: 311 unique papers

✓ Saved to data/01_identification/deduplicated.csv`}
        />
      </div>

      <h3 id="screening">Step 3.3: PRISMA Screening (1 hour)</h3>

      <p>
        Claude Code applies your inclusion/exclusion criteria from <code>config.yaml</code> to automatically screen papers based on title and abstract.
      </p>

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
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

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
        <p className="font-semibold text-sm mb-2">📁 Files Created in Stage 3:</p>
        <CodeBlock
          language="text"
          code={`projects/2025-10-13_AI-Chatbots-Language-Learning/
└── data/
    ├── 01_identification/
    │   ├── pubmed_results.csv (78 papers)
    │   ├── scopus_results.csv (245 papers)
    │   ├── eric_results.csv (134 papers)
    │   └── deduplicated.csv (311 unique papers)
    └── 02_screening/
        ├── title_abstract.csv (139 passed)
        ├── excluded.csv (172 excluded)
        └── decisions.json (screening decisions log)`}
        />
      </div>

      <h2 id="stage4-rag-setup">Stage 4: RAG System Setup (30 minutes)</h2>

      <p>
        Now you have 139 papers that passed screening. Claude Code helps you build a vector database from these papers' PDFs.
      </p>

      <h3 id="pdf-download">Step 4.1: PDF Download (20 minutes)</h3>

      <div className="callout callout-warning mb-4">
        <p className="font-semibold mb-2">📄 PDF Availability Reality Check</p>
        <p className="text-sm">
          Not all papers have freely available PDFs. Expect <strong>50-60% success rate</strong> for open access papers. Claude Code tries multiple sources: Unpaywall, OpenAlex, institutional access, and author websites.
        </p>
      </div>

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
        <p className="font-semibold text-sm mb-2">📊 PDF Download Results:</p>
        <CodeBlock
          language="text"
          code={`$ python scripts/04_download_pdfs.py

Downloading PDFs for 139 papers...

Sources tried:
  1. Unpaywall (open access): 48 found
  2. OpenAlex (institution): 23 found
  3. Author ResearchGate: 4 found

Total PDFs downloaded: 75/139 (54%)
Missing PDFs: 64/139 (46%)

For missing PDFs, consider:
- Emailing authors directly
- Using institutional VPN/proxy
- Substituting with abstract-only (reduced context)

✓ Saved PDFs to data/pdfs/
✓ Saved missing list to data/pdfs/missing_pdfs.txt`}
        />
      </div>

      <h3 id="vector-db">Step 4.2: Vector Database Creation (10 minutes)</h3>

      <p>
        Claude Code extracts text from PDFs, chunks them, generates embeddings, and stores everything in ChromaDB.
      </p>

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
        <p className="font-semibold text-sm mb-2">📊 RAG Ingestion Results:</p>
        <CodeBlock
          language="text"
          code={`$ python scripts/05_build_rag.py

Processing 75 PDFs...

Text Extraction:
  PyMuPDF: 71 successful
  OCR fallback: 4 successful
  Failed: 0

Chunking Strategy:
  Chunk size: 1000 tokens
  Overlap: 200 tokens
  Total chunks: 867

Embedding Generation:
  Model: text-embedding-3-small
  Dimensions: 1536
  Time: 3m 45s
  Cost: $0.02

Vector Database:
  Type: ChromaDB
  Storage: rag/chroma_db/
  Size: 45 MB

✓ RAG system ready!
Test query: python scripts/06_query_rag.py "What improves speaking fluency?"`}
        />
      </div>

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
        <p className="font-semibold text-sm mb-2">📁 Files Created in Stage 4:</p>
        <CodeBlock
          language="text"
          code={`projects/2025-10-13_AI-Chatbots-Language-Learning/
├── data/
│   ├── 03_full_text/
│   │   └── final_dataset.csv (75 papers with PDFs)
│   └── pdfs/ (75 PDF files)
├── rag/
│   ├── chroma_db/ (vector database, 867 chunks)
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
        <div className="border-2 border-gray-900 dark:border-gray-100 rounded-lg p-6">
          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-950/20 mb-4">
            <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">🔍 Query 1:</p>
            <p className="font-semibold">"What are the main effects of AI chatbots on speaking fluency?"</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 dark:bg-green-950/20">
            <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-3">🤖 RAG Response:</p>
            <div className="prose prose-sm dark:prose-invert max-w-none">
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
        <div className="border-2 border-gray-900 dark:border-gray-100 rounded-lg p-6">
          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-950/20 mb-4">
            <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">🔍 Query 2:</p>
            <p className="font-semibold">"Which chatbot features are most effective for pronunciation improvement?"</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 dark:bg-green-950/20">
            <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-3">🤖 RAG Response:</p>
            <div className="prose prose-sm dark:prose-invert max-w-none">
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

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
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

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
        <p className="font-semibold text-sm mb-2">📊 Generated Outputs:</p>
        <CodeBlock
          language="text"
          code={`$ python scripts/07_generate_prisma.py

Creating PRISMA 2020 flowchart...

Records identified through:
  • PubMed: 78
  • Scopus: 245
  • ERIC: 134
  Total: 457

Records after deduplication: 311
Records screened (title/abstract): 311
Records excluded: 172
  - Wrong outcome: 45
  - Wrong population: 38
  - Wrong intervention: 32
  - Study design: 28
  - Other: 29

Full-text articles assessed: 139
Full-text articles excluded: 64
  - PDF not available: 64

Studies included: 75

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
            <tr className="border-b bg-gray-50 dark:bg-gray-900">
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
            <tr className="border-b bg-gray-50 dark:bg-gray-900">
              <td className="p-3">3. PRISMA Execution</td>
              <td className="p-3">2 hours</td>
              <td className="p-3">🧑 Low</td>
              <td className="p-3">✅ 90%</td>
              <td className="p-3">Monitor scripts, review borderline cases</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">4. RAG Setup</td>
              <td className="p-3">30 min</td>
              <td className="p-3">🧑 Low</td>
              <td className="p-3">✅ 95%</td>
              <td className="p-3">Wait for downloads, test queries</td>
            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-900">
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
              <td className="p-3">~3 hours</td>
              <td className="p-3" colSpan={3}>
                Time saved vs. manual: <strong>~120 hours (2 weeks)</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <h2 id="final-structure">Final Project Structure</h2>

      <div className="border rounded-lg p-4 my-6 bg-gray-50 dark:bg-gray-900">
        <CodeBlock
          language="text"
          code={`projects/2025-10-13_AI-Chatbots-Language-Learning/
├── .researcherrag               # Metadata for dashboard
├── config.yaml                  # Project configuration
├── README.md                    # Project documentation
│
├── data/
│   ├── 01_identification/
│   │   ├── pubmed_results.csv       (78 papers)
│   │   ├── scopus_results.csv       (245 papers)
│   │   ├── eric_results.csv         (134 papers)
│   │   ├── deduplicated.csv         (311 unique)
│   │   └── search_queries.md        (database queries)
│   │
│   ├── 02_screening/
│   │   ├── title_abstract.csv       (139 passed)
│   │   ├── excluded.csv             (172 excluded)
│   │   └── decisions.json           (screening log)
│   │
│   ├── 03_full_text/
│   │   ├── final_dataset.csv        (75 included)
│   │   └── exclusion_reasons.csv    (64 excluded)
│   │
│   └── pdfs/                        (75 PDF files)
│       └── missing_pdfs.txt         (64 unavailable)
│
├── rag/
│   ├── chroma_db/                   (vector database)
│   │   └── [867 chunks, 45 MB]
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

      <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6 my-12">
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
