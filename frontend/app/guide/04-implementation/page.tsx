import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Mermaid from '@/components/Mermaid'
import { CodeBlock } from '@/components/CodeBlock'
import { FileTree } from '@/components/FileTree'

export default function ImplementationGuidePage() {
  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/researcherRAG/tree/main/prompts"
      githubLabel="View Stages 1-7 Prompts"
    >
      <h1>Implementation Guide</h1>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        This chapter walks you through the complete implementation process of ScholarRAG, from initial setup to final deployment. We'll cover all seven stages in detail with real-world examples, practical tips, and troubleshooting advice to help you build your own systematic literature review RAG system.
      </p>

      <Mermaid chart={`
graph LR
    A[🎯 Stage 1<br/>Research Domain] --> B[🔍 Stage 2<br/>Query Strategy]
    B --> C[📋 Stage 3<br/>PRISMA Config]
    C --> D[🏗️ Stage 4<br/>RAG Design]
    D --> E[📝 Stage 5<br/>Execution Plan]
    E --> F[💬 Stage 6<br/>Research Queries]
    F --> G[📄 Stage 7<br/>Documentation]
    G --> H[✅ Your RAG System]

    style A fill:#e0e7ff,stroke:#6366f1,stroke-width:2px
    style B fill:#ddd6fe,stroke:#8b5cf6,stroke-width:2px
    style C fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style D fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style E fill:#dcfce7,stroke:#10b981,stroke-width:2px
    style F fill:#c7f3e7,stroke:#14b8a6,stroke-width:2px
    style G fill:#f3e7c7,stroke:#d97706,stroke-width:2px
    style H fill:#bbf7d0,stroke:#059669,stroke-width:3px
`} />

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📖 Before You Start</p>
        <p className="mb-0">
          Make sure you've completed the <Link href="/guide/02-getting-started">Getting Started</Link> guide and understand the <Link href="/guide/03-core-concepts">Core Concepts</Link>. This implementation guide assumes you have ScholarRAG installed and your API keys configured.
        </p>
      </div>

      <h2 id="overview">Implementation Overview</h2>

      <p>
        ScholarRAG's seven-stage workflow is designed to guide you through building a RAG system systematically. Each stage builds upon the previous one, and the prompts are carefully crafted to help Claude Code understand your research domain and generate appropriate code.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">⏱️ Total Time</h3>
          <p className="text-sm text-muted-foreground mb-3">Expected completion time for a typical project</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Planning (Stages 1-2)</span>
              <span className="font-mono">~25 min</span>
            </div>
            <div className="flex justify-between">
              <span>PRISMA (Stage 3)</span>
              <span className="font-mono">~20 min</span>
            </div>
            <div className="flex justify-between">
              <span>RAG Design (Stage 4)</span>
              <span className="font-mono">~15 min</span>
            </div>
            <div className="flex justify-between">
              <span>Execution Plan (Stage 5)</span>
              <span className="font-mono">~10 min</span>
            </div>
            <div className="flex justify-between">
              <span>Research Queries (Stage 6)</span>
              <span className="font-mono">~2-3 hrs</span>
            </div>
            <div className="flex justify-between">
              <span>Documentation (Stage 7)</span>
              <span className="font-mono">~1-2 hrs</span>
            </div>
            <div className="flex justify-between border-t pt-2 font-semibold">
              <span>Total</span>
              <span className="font-mono">~4-7 hrs</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">🎯 Success Metrics</h3>
          <p className="text-sm text-muted-foreground mb-3">What to expect from your RAG system</p>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>100-1,000+ papers</strong> in final dataset (depends on query breadth and use case)</li>
            <li>✅ <strong>Sub-second</strong> query response times</li>
            <li>✅ <strong>3-5 relevant citations</strong> per answer</li>
            <li>✅ <strong>90%+ accuracy</strong> in source attribution</li>
            <li>✅ <strong>Reproducible</strong> research workflow</li>
          </ul>
        </div>
      </div>

      <h2 id="stage-1">Stage 1: Research Domain Setup</h2>

      <p>
        The first stage is all about defining your research question and domain. This is the foundation of your entire project—spend time getting this right, and everything else will fall into place.
      </p>

      <h3 id="stage-1-prompt">Using the Stage 1 Prompt</h3>

      <p>
        Navigate to the <code>docs/prompts/01_research_domain_setup.md</code> file in your ScholarRAG repository. This prompt template guides you through defining your research domain.
      </p>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">💡 Pro Tip: Be Specific</p>
        <p className="mb-0">
          The more specific you are about your research question, the better your RAG system will perform. Instead of "AI in education," try "The impact of large language models on personalized learning outcomes in K-12 mathematics education."
        </p>
      </div>

      <h3 id="stage-1-example">Real-World Example</h3>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-6">
        <p className="font-semibold mb-2">Research Question:</p>
        <p className="mb-4 italic">
          "What are the factors influencing technology adoption in healthcare organizations, and how do these factors differ across developed and developing countries?"
        </p>

        <p className="font-semibold mb-2">Domain Specification:</p>
        <ul className="space-y-1 text-sm">
          <li><strong>Field:</strong> Health Informatics, Technology Adoption</li>
          <li><strong>Scope:</strong> Healthcare organizations (hospitals, clinics)</li>
          <li><strong>Geography:</strong> Global, with comparison focus</li>
          <li><strong>Timeframe:</strong> 2010-2024 (last 15 years)</li>
          <li><strong>Key Concepts:</strong> Technology adoption, TAM, UTAUT, organizational readiness</li>
        </ul>
      </div>

      <p>
        After completing the Stage 1 prompt with Claude Code, you'll receive:
      </p>

      <ul>
        <li>📁 A project directory structure</li>
        <li>📝 Research domain documentation</li>
        <li>🔑 Key concepts and terminology list</li>
        <li>🎯 Refined research question</li>
      </ul>

      <h3 id="stage-1-output">Stage 1 Output Structure</h3>

      <p>
        After Stage 1 completes, Claude will create your initial project structure. Here's what gets generated:
      </p>

      <FileTree structure={[
        {
          name: 'ScholarRAG/',
          type: 'folder',
          children: [
            {
              name: 'config/',
              type: 'folder',
              description: 'Configuration files for your project',
              children: [
                {
                  name: 'research_domain.json',
                  type: 'file',
                  description: 'Your research scope, questions, and domain definition',
                  highlight: true
                },
                {
                  name: 'keywords.json',
                  type: 'file',
                  description: 'Key concepts and terminology extracted from Stage 1'
                }
              ]
            },
            {
              name: 'data/',
              type: 'folder',
              description: 'Will store papers at each PRISMA stage',
              children: [
                {
                  name: '01_identification/',
                  type: 'folder',
                  description: 'Raw search results from databases'
                },
                {
                  name: '02_screening/',
                  type: 'folder',
                  description: 'Papers after title/abstract screening'
                },
                {
                  name: '03_full_text/',
                  type: 'folder',
                  description: 'Final approved papers'
                }
              ]
            },
            {
              name: 'logs/',
              type: 'folder',
              description: 'Execution logs and exclusion reasons'
            },
            {
              name: 'outputs/',
              type: 'folder',
              description: 'Generated reports and visualizations'
            }
          ]
        }
      ]} />

      <div className="callout callout-info my-6">
        <p className="font-semibold mb-2">📂 Verify Stage 1 Completion</p>
        <p className="mb-2">Check that these files were created:</p>
        <CodeBlock
          language="bash"
          code={`# Check project structure
ls -la ScholarRAG/

# View research domain configuration
cat config/research_domain.json

# Expected output: JSON with research_question, scope, keywords, etc.`}
        />
      </div>

      <Mermaid chart={`
graph TD
    A[Start Stage 1] --> B{Research Question<br/>Clear?}
    B -->|No| C[Refine with<br/>5W1H Framework]
    C --> B
    B -->|Yes| D[Define Domain<br/>Boundaries]
    D --> E[Identify Key<br/>Concepts]
    E --> F[List Synonyms &<br/>Related Terms]
    F --> G[Document Expected<br/>Study Types]
    G --> H[Stage 1 Complete]

    style A fill:#e0e7ff
    style H fill:#dcfce7
    style B fill:#fef3c7
`} />

      <h2 id="stage-2">Stage 2: Query Strategy Design</h2>

      <p>
        Stage 2 focuses on developing a comprehensive search strategy. This is where you translate your research question into effective database queries that will find all relevant papers while minimizing noise.
      </p>

      <h3 id="stage-2-components">Query Strategy Components</h3>

      <div className="grid grid-cols-1 gap-4 my-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            1. Boolean Operators
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p>Use AND, OR, NOT to combine search terms:</p>
            <CodeBlock
        language="sql"
        code={`(technology OR digital OR electronic)
AND
(adoption OR implementation OR integration)
AND
(healthcare OR hospital OR clinic)
NOT
(veterinary OR dental)`}
      />
            <p className="text-sm text-muted-foreground">
              This query finds papers about technology adoption in healthcare, excluding veterinary and dental studies.
            </p>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            2. Wildcards and Phrase Search
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p>Use * for wildcards and quotes for exact phrases:</p>
            <CodeBlock
        language="sql"
        code={`"large language model*" OR "LLM"
"technology acceptance" OR "TAM"
adopt* (captures: adopt, adoption, adopting, adopted)`}
      />
            <p className="text-sm text-muted-foreground">
              Wildcards help capture variations, while phrase search ensures precise matches.
            </p>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            3. Field-Specific Search
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p>Target specific fields for precision:</p>
            <CodeBlock
        language="sql"
        code={`title:(artificial intelligence)
abstract:(machine learning)
keywords:(deep learning)
author:(Smith OR Johnson)
year:[2020 TO 2024]`}
      />
            <p className="text-sm text-muted-foreground">
              Field-specific searches reduce false positives and improve relevance.
            </p>
          </div>
        </details>
      </div>

      <h3 id="stage-2-databases">Database Selection</h3>

      <p>
        Different databases have different coverage. For technology adoption in healthcare, you might query:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Database</th>
              <th className="text-left p-2">Coverage</th>
              <th className="text-left p-2">Best For</th>
              <th className="text-left p-2">Access</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-semibold">PubMed</td>
              <td className="p-2">35M+ biomedical papers</td>
              <td className="p-2">Clinical studies, health informatics</td>
              <td className="p-2">Free API</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">IEEE Xplore</td>
              <td className="p-2">5M+ engineering papers</td>
              <td className="p-2">Health IT systems, technical aspects</td>
              <td className="p-2">Subscription</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">Web of Science</td>
              <td className="p-2">Cross-disciplinary</td>
              <td className="p-2">High-impact journals, citations</td>
              <td className="p-2">Subscription</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">Scopus</td>
              <td className="p-2">80M+ multidisciplinary</td>
              <td className="p-2">Comprehensive coverage</td>
              <td className="p-2">Subscription</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">CORE</td>
              <td className="p-2">240M+ open access</td>
              <td className="p-2">Free alternative, broad coverage</td>
              <td className="p-2">Free API</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Database Access Note</p>
        <p className="mb-0">
          Many academic databases require institutional subscriptions. If you don't have access, start with <strong>PubMed</strong> (biomedical) and <strong>CORE</strong> (open access) which offer free APIs. ScholarRAG includes helper scripts for both.
        </p>
      </div>

      <h3 id="stage-2-output">Stage 2 Outputs</h3>

      <p>
        After completing Stage 2, Claude Code will generate:
      </p>

      <ul>
        <li>🔍 <code>query_strategy.md</code> - Documented search strategy</li>
        <li>📊 <code>database_config.json</code> - Database API configurations</li>
        <li>🐍 <code>search_executor.py</code> - Python script to run queries</li>
        <li>📈 <code>expected_results.md</code> - Estimated paper counts per database</li>
      </ul>

      <Mermaid chart={`
graph LR
    A[Research Question] --> B[Extract Keywords]
    B --> C[Find Synonyms]
    C --> D[Build Boolean Query]
    D --> E[Select Databases]
    E --> F[Test Query]
    F --> G{Results<br/>Reasonable?}
    G -->|Too Many| H[Add Filters]
    G -->|Too Few| I[Broaden Terms]
    H --> F
    I --> F
    G -->|Just Right| J[Document Strategy]

    style A fill:#e0e7ff
    style J fill:#dcfce7
    style G fill:#fef3c7
`} />

      <h2 id="stage-3">Stage 3: PRISMA Configuration</h2>

      <p>
        Stage 3 is the most time-intensive stage because it involves actually executing your search queries, downloading papers, and applying PRISMA screening criteria. This is where your systematic literature review takes shape.
      </p>

      <h3 id="stage-3-workflow">PRISMA Workflow</h3>

      <Mermaid chart={`
graph TB
    subgraph Identification
        A[Run Database Queries] --> B[Collect Results<br/>n = 1,247]
        B --> C[Remove Duplicates<br/>n = 1,089]
    end

    subgraph Screening
        C --> D[Title/Abstract Review<br/>n = 1,089]
        D --> E{Inclusion<br/>Criteria?}
        E -->|No| F[Excluded<br/>n = 825<br/>Reasons logged]
        E -->|Yes| G[Keep for Full-Text<br/>n = 264]
    end

    subgraph Eligibility
        G --> H[Download Full-Text PDFs<br/>n = 264]
        H --> I[Detailed Assessment]
        I --> J{Meets All<br/>Criteria?}
        J -->|No| K[Excluded<br/>n = 127<br/>Document reasons]
        J -->|Yes| L[Final Dataset<br/>n = 137]
    end

    subgraph Included
        L --> M[Extract to Vector DB]
        M --> N[Ready for RAG]
    end

    style A fill:#e0e7ff
    style C fill:#ddd6fe
    style G fill:#fce7f3
    style L fill:#dcfce7
    style N fill:#bbf7d0
`} />

      <h3 id="stage-3-criteria">Defining Inclusion/Exclusion Criteria</h3>

      <p>
        Clear criteria are essential for reproducibility. Here's an example for our healthcare technology adoption study:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border-2 border-gray-900 rounded-lg p-6 bg-gray-50">
          <h4 className="text-lg font-semibold mb-3">✅ Inclusion Criteria</h4>
          <ul className="space-y-2 text-sm">
            <li>✓ Empirical studies (quantitative or qualitative)</li>
            <li>✓ Focus on healthcare organizations</li>
            <li>✓ Technology adoption as primary topic</li>
            <li>✓ Published 2010-2024</li>
            <li>✓ Peer-reviewed journals or conferences</li>
            <li>✓ English language</li>
            <li>✓ Full-text available</li>
          </ul>
        </div>

        <div className="border-2 border-gray-300 rounded-lg p-6 bg-white">
          <h4 className="text-lg font-semibold mb-3">❌ Exclusion Criteria</h4>
          <ul className="space-y-2 text-sm">
            <li>✗ Opinion pieces, editorials, reviews</li>
            <li>✗ Non-healthcare settings (e.g., education, finance)</li>
            <li>✗ Patient-facing consumer apps</li>
            <li>✗ Technical papers without adoption focus</li>
            <li>✗ Duplicate publications</li>
            <li>✗ Conference abstracts without full paper</li>
            <li>✗ Gray literature (reports, white papers)</li>
          </ul>
        </div>
      </div>

      <h3 id="stage-3-automation">Automation Tools</h3>

      <p>
        ScholarRAG provides scripts to automate parts of the PRISMA process:
      </p>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          <code>01_fetch_papers.py</code> - Query Execution
          <a
            href="https://github.com/HosungYou/researcherRAG/blob/main/scripts/01_fetch_papers.py"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline ml-3"
          >
            📄 View Source
          </a>
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p>Queries multiple databases and collects results:</p>
          <CodeBlock
        language="sql"
        code={`python 01_fetch_papers.py \\
  --config database_config.json \\
  --output raw_results/

# Output:
# - raw_results/pubmed_results.csv
# - raw_results/core_results.csv
# - raw_results/combined_results.csv`}
      />
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          <code>02_deduplicate.py</code> - Remove Duplicates
          <a
            href="https://github.com/HosungYou/researcherRAG/blob/main/scripts/02_deduplicate.py"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline ml-3"
          >
            📄 View Source
          </a>
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p>Identifies and removes duplicate papers using fuzzy matching:</p>
          <CodeBlock
        language="sql"
        code={`python 02_deduplicate.py \\
  --input raw_results/combined_results.csv \\
  --output deduplicated_results.csv \\
  --threshold 0.85

# Uses title similarity, DOI matching, and author overlap`}
      />
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          <code>03_screen_abstracts.py</code> - LLM-Assisted Screening
          <a
            href="https://github.com/HosungYou/researcherRAG/blob/main/scripts/03_screen_abstracts.py"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline ml-3"
          >
            📄 View Source
          </a>
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p>Uses Claude to assess title/abstract against inclusion criteria:</p>
          <CodeBlock
        language="sql"
        code={`python 03_screen_abstracts.py \\
  --input deduplicated_results.csv \\
  --criteria inclusion_criteria.md \\
  --output screened_results.csv

# Each paper gets:
# - Include/Exclude decision
# - Confidence score (0-100)
# - Reasoning explanation`}
      />
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> Always manually review LLM decisions, especially borderline cases (confidence 40-60%).
          </p>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          <code>04_download_pdfs.py</code> - Full-Text Retrieval
          <a
            href="https://github.com/HosungYou/researcherRAG/blob/main/scripts/04_download_pdfs.py"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline ml-3"
          >
            📄 View Source
          </a>
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p>Downloads PDFs for papers that passed screening:</p>
          <CodeBlock
        language="sql"
        code={`python 04_download_pdfs.py \\
  --input screened_results.csv \\
  --output pdfs/ \\
  --sources scihub,doi,open_access

# Tries multiple sources in order:
# 1. Open access repositories
# 2. DOI resolution
# 3. Sci-Hub (check your institution's policy)`}
      />
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          <code>05_full_text_review.py</code> - Eligibility Assessment
          <a
            href="https://github.com/HosungYou/researcherRAG/blob/main/scripts/05_full_text_review.py"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline ml-3"
          >
            📄 View Source
          </a>
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p>Detailed review of full-text papers:</p>
          <CodeBlock
        language="sql"
        code={`python 05_full_text_review.py \\
  --input pdfs/ \\
  --criteria detailed_criteria.md \\
  --output final_dataset.csv

# For each paper:
# - Extracts full text (OCR if needed)
# - Checks all inclusion criteria
# - Documents exclusion reasons
# - Flags for manual review if uncertain`}
      />
        </div>
      </details>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">🕐 Time Estimate for Stage 3</p>
        <p className="mb-0">
          With ~1000 initial results: <strong>2-3 hours</strong> for automated steps + <strong>2-4 hours</strong> for manual review of borderline cases. The LLM-assisted screening dramatically reduces manual effort compared to traditional PRISMA.
        </p>
      </div>

      <h3 id="stage-3-visualization">PRISMA Flow Diagram</h3>

      <p>
        After Stage 3, generate a PRISMA flow diagram to visualize your screening process:
      </p>

      <CodeBlock
        language="bash"
        code={`python generate_prisma_diagram.py \\
  --input final_dataset.csv \\
  --output prisma_flow.png

# Creates publication-ready PRISMA 2020 flow diagram`}
      />

      <h3 id="stage-3-output">Stage 3 Output: PRISMA Complete</h3>

      <p>
        After completing PRISMA screening, your project structure contains the filtered dataset ready for RAG:
      </p>

      <FileTree structure={[
        {
          name: 'ScholarRAG/',
          type: 'folder',
          children: [
            {
              name: 'data/',
              type: 'folder',
              description: 'Papers organized by PRISMA stage',
              children: [
                {
                  name: '01_identification/',
                  type: 'folder',
                  children: [
                    {
                      name: 'pubmed_results.csv',
                      type: 'file',
                      description: '450 papers from PubMed'
                    },
                    {
                      name: 'core_results.csv',
                      type: 'file',
                      description: '639 papers from CORE API'
                    },
                    {
                      name: 'combined_results.csv',
                      type: 'file',
                      description: '1,089 unique papers (after deduplication)'
                    }
                  ]
                },
                {
                  name: '02_screening/',
                  type: 'folder',
                  children: [
                    {
                      name: 'approved_papers.csv',
                      type: 'file',
                      description: '264 papers passing title/abstract screening',
                      highlight: true
                    },
                    {
                      name: 'excluded_papers.csv',
                      type: 'file',
                      description: '825 papers with exclusion reasons'
                    }
                  ]
                },
                {
                  name: '03_full_text/',
                  type: 'folder',
                  children: [
                    {
                      name: 'final_dataset.csv',
                      type: 'file',
                      description: '137 papers meeting all criteria',
                      highlight: true
                    },
                    {
                      name: 'pdfs/',
                      type: 'folder',
                      description: 'Full-text PDFs of included papers'
                    }
                  ]
                }
              ]
            },
            {
              name: 'logs/',
              type: 'folder',
              children: [
                {
                  name: 'exclusion_log.csv',
                  type: 'file',
                  description: 'Detailed reasons for each exclusion'
                },
                {
                  name: 'screening_stats.json',
                  type: 'file',
                  description: 'Statistics for PRISMA diagram'
                }
              ]
            },
            {
              name: 'outputs/',
              type: 'folder',
              children: [
                {
                  name: 'prisma_flow.png',
                  type: 'file',
                  description: 'PRISMA 2020 flow diagram',
                  highlight: true
                }
              ]
            }
          ]
        }
      ]} />

      <div className="callout callout-success my-6">
        <p className="font-semibold mb-2">✅ Verify Stage 3 Completion</p>
        <p className="mb-2">Check your final dataset:</p>
        <CodeBlock
          language="bash"
          code={`# Count final papers
wc -l data/03_full_text/final_dataset.csv
# → 137 lines (136 papers + 1 header)

# Preview first 5 papers
head -5 data/03_full_text/final_dataset.csv

# Check exclusion reasons distribution
cut -d',' -f2 logs/exclusion_log.csv | sort | uniq -c | sort -rn
# → Shows most common exclusion reasons`}
        />
      </div>

      <h2 id="stage-4">Stage 4: RAG System Design</h2>

      <p>
        Now that you have your curated dataset, it's time to design your RAG system. Stage 4 focuses on configuring the vector database, embedding model, chunking strategy, and retrieval parameters.
      </p>

      <h3 id="stage-4-decisions">Key Design Decisions</h3>

      <Mermaid chart={`
graph TD
    A[Start RAG Design] --> B{Vector DB Choice}
    B -->|Local, Simple| C[ChromaDB]
    B -->|Performance| D[FAISS]
    B -->|Production| E[Qdrant/Pinecone]

    C --> F{Embedding Model}
    D --> F
    E --> F

    F -->|Best Quality| G[text-embedding-3-large]
    F -->|Balanced| H[text-embedding-3-small]
    F -->|Local/Free| I[all-MiniLM-L6-v2]

    G --> J{Chunking Strategy}
    H --> J
    I --> J

    J -->|Simple| K[Fixed 500 tokens]
    J -->|Semantic| L[LangChain Recursive]
    J -->|Advanced| M[Hierarchical Chunks]

    K --> N[Configure Retrieval]
    L --> N
    M --> N

    N --> O[Stage 4 Complete]

    style A fill:#e0e7ff
    style O fill:#dcfce7
    style B fill:#fef3c7
    style F fill:#fef3c7
    style J fill:#fef3c7
`} />

      <h3 id="stage-4-configuration">Configuration File</h3>

      <p>
        Claude Code generates a <code>rag_config.yaml</code> file with your choices:
      </p>

      <CodeBlock
        language="sql"
        code={`# rag_config.yaml

vector_db:
  type: chromadb
  path: ./chroma_db
  collection_name: healthcare_tech_adoption

embedding:
  model: text-embedding-3-small
  dimensions: 1536
  batch_size: 100

chunking:
  strategy: recursive
  chunk_size: 500
  chunk_overlap: 50
  separators: ["\\n\\n", "\\n", ". ", " "]

retrieval:
  top_k: 5
  similarity_threshold: 0.7
  rerank: true
  rerank_model: cross-encoder/ms-marco-MiniLM-L-6-v2

llm:
  provider: anthropic
  model: claude-3-5-sonnet-20241022
  max_tokens: 2048
  temperature: 0

prompts:
  system: "You are an expert research assistant..."
  context_template: "Based on these papers: {context}\\n\\nQuestion: {question}"
  citation_format: "[Author, Year]"
`}
      />

      <h3 id="stage-4-optimization">Optimization Tips</h3>

      <div className="grid grid-cols-1 gap-4 my-6">
        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <p className="font-semibold mb-2">🎯 Chunk Size Tuning</p>
          <p className="text-sm mb-2">
            Start with 500 tokens, then experiment:
          </p>
          <ul className="text-sm space-y-1">
            <li><strong>Larger chunks (800-1000):</strong> Better context, but less precise retrieval</li>
            <li><strong>Smaller chunks (300-500):</strong> More precise, but may miss context</li>
            <li><strong>Test with sample queries</strong> and measure relevance</li>
          </ul>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <p className="font-semibold mb-2">💰 Cost Optimization</p>
          <p className="text-sm mb-2">
            Reduce costs without sacrificing quality:
          </p>
          <ul className="text-sm space-y-1">
            <li><strong>Use text-embedding-3-small</strong> instead of large (4x cheaper)</li>
            <li><strong>Cache embeddings</strong> to avoid re-computing</li>
            <li><strong>Set similarity threshold</strong> to filter low-quality results</li>
            <li><strong>Use local models</strong> for high-volume applications</li>
          </ul>
        </div>

        <div className="border-l-4 border-gray-900 bg-gray-50 p-4">
          <p className="font-semibold mb-2">⚡ Performance Tuning</p>
          <p className="text-sm mb-2">
            Speed up queries:
          </p>
          <ul className="text-sm space-y-1">
            <li><strong>Use FAISS</strong> for large datasets (&gt;10k chunks)</li>
            <li><strong>Enable GPU</strong> for embedding generation if available</li>
            <li><strong>Implement caching</strong> for common queries</li>
            <li><strong>Batch process</strong> during ingestion</li>
          </ul>
        </div>
      </div>

      <h2 id="stage-5">Stage 5: Execution Plan</h2>

      <p>
        Stage 5 is where you review the complete automation pipeline before execution. This planning stage ensures all scripts, configurations, and data flows are correct before running the time-intensive PDF download and RAG building process.
      </p>

      <h3 id="stage-5-pipeline-review">Pipeline Review</h3>

      <p>
        Review the execution sequence that will run automatically:
      </p>

      <Mermaid chart={`
graph TD
    A[01_fetch_papers.py] --> B[02_deduplicate.py]
    B --> C[03_screen_papers.py]
    C --> D[04_download_pdfs.py]
    D --> E[05_build_rag.py]
    E --> F[06_query_rag.py]
    F --> G[07_generate_prisma.py]

    style A fill:#e0e7ff
    style C fill:#fce7f3
    style E fill:#fef3c7
    style G fill:#dcfce7
`} />

      <p className="text-sm text-muted-foreground mt-4">
        Each script logs progress and errors. You can pause and resume at any stage if issues occur.
      </p>

      <h3 id="stage-5-validation">Pre-Execution Validation</h3>

      <p>
        Before running the pipeline, validate your configuration:
      </p>

      <CodeBlock
        language="bash"
        code={`# Run validation checks
python scholarag_cli.py validate

# Expected output:
# ✓ config.yaml found and valid
# ✓ Database APIs configured (3/3)
# ✓ PRISMA criteria defined
# ✓ RAG settings complete
# ✓ Output directories exist
# ⚠ API key for Anthropic not set (optional)
#
# Ready to proceed with execution!`}
      />

      <h3 id="stage-5-execution">Starting the Automation</h3>

      <p>
        Once validated, initiate the full pipeline:
      </p>

      <CodeBlock
        language="bash"
        code={`# Start automated execution
python scholarag_cli.py run-all

# Or run stages individually:
python scholarag_cli.py run-stage 6  # Research Conversation only`}
      />

      <div className="callout callout-info">
        <p className="font-semibold mb-2">⏱️ Execution Time</p>
        <p className="text-sm mb-0">
          Stage 6 (automated execution) typically takes 2-5 hours depending on dataset size (100-1,000+ papers). Stage 7 (documentation) takes another 1-2 hours. Plan accordingly and ensure stable internet connection.
        </p>
      </div>

      <h2 id="stage-6">Stage 6: Research Conversation (Automated Execution)</h2>

      <p>
        Stage 6 is the automated execution phase where papers are fetched, deduplicated, screened, downloaded, and ingested into your RAG system. This stage runs largely unattended.
      </p>

      <h3 id="stage-6-ingestion">Document Ingestion Pipeline</h3>

      <p>
        The ingestion pipeline processes your PRISMA-selected papers:
      </p>

      <Mermaid chart={`
sequenceDiagram
    participant P as PDF Files
    participant E as Extractor
    participant C as Chunker
    participant M as Embedding Model
    participant V as Vector DB

    P->>E: Load PDF
    E->>E: Extract text (PyMuPDF)
    E->>E: OCR if needed (Tesseract)
    E->>C: Send extracted text
    C->>C: Split into chunks
    C->>C: Add metadata
    loop For each chunk
        C->>M: Generate embedding
        M-->>C: Return vector
        C->>V: Store chunk + vector
    end
    V-->>V: Build index
    V->>V: Ready for queries
`} />

      <p>
        Run the ingestion script:
      </p>

      <CodeBlock
        language="sql"
        code={`python ingest_papers.py \\
  --input final_dataset.csv \\
  --pdfs pdfs/ \\
  --config rag_config.yaml \\
  --output chroma_db/

# Progress output:
# [1/137] Processing: Smith2020_technology_adoption.pdf
# - Extracted 12 pages, 8,453 tokens
# - Created 17 chunks
# - Generated embeddings (batch 1/2)
# - Stored in vector DB
# ...
# ✓ Ingestion complete: 137 papers, 2,341 chunks, 3.2M tokens`}
      />

      <h3 id="stage-5-testing">Testing & Validation</h3>

      <p>
        Before deploying, validate your RAG system with test queries:
      </p>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          1. Factual Accuracy Test
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p>Ask questions with known answers from your dataset:</p>
          <CodeBlock
        language="sql"
        code={`Q: "What is the Technology Acceptance Model (TAM)?"
Expected: Definition from Davis (1989) with proper citation

Q: "Which factors influence EHR adoption in developing countries?"
Expected: List of factors with citations from relevant papers`}
      />
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          2. Retrieval Quality Test
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p>Check if the most relevant papers are retrieved:</p>
          <CodeBlock
        language="sql"
        code={`python test_retrieval.py \\
  --config rag_config.yaml \\
  --queries test_queries.txt \\
  --output retrieval_report.html

# Metrics:
# - Precision@5: 0.87
# - Recall@5: 0.72
# - MRR (Mean Reciprocal Rank): 0.81
# - Average response time: 0.43s`}
      />
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          3. Citation Accuracy Test
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p>Verify that citations match the source material:</p>
          <ul className="text-sm space-y-2">
            <li>✓ Each claim has a citation</li>
            <li>✓ Citations are correctly formatted [Author, Year]</li>
            <li>✓ Cited paper actually supports the claim</li>
            <li>✓ No hallucinated citations (verify DOI/title exists)</li>
          </ul>
        </div>
      </details>

      <h3 id="stage-5-interface">User Interface Options</h3>

      <p>
        ScholarRAG provides multiple interfaces for interacting with your RAG system:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">💻 CLI Interface</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Command-line interface for quick queries
          </p>
          <CodeBlock
        language="sql"
        code={`python cli.py \\
  --config rag_config.yaml

> What factors influence...
[Thinking...] ✓
Answer: ...`}
      />
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">🌐 Web Interface</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Streamlit app with chat UI
          </p>
          <CodeBlock
        language="text"
        code={`streamlit run web_app.py

# Launches at:
# http://localhost:8501`}
      />
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">🔌 API Server</h4>
          <p className="text-sm text-muted-foreground mb-3">
            FastAPI REST endpoint
          </p>
          <CodeBlock
        language="bash"
        code={`python api_server.py

# POST /query
# GET /papers
# GET /health`}
      />
        </div>
      </div>

      <h3 id="stage-5-deployment">Deployment</h3>

      <p>
        Once validated, deploy your RAG system:
      </p>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">🚀 Deployment Checklist</p>
        <ul className="text-sm space-y-1">
          <li>✅ Test queries return accurate results with citations</li>
          <li>✅ Response times are acceptable (&lt;2 seconds)</li>
          <li>✅ API keys are stored securely (environment variables)</li>
          <li>✅ Vector database is backed up</li>
          <li>✅ Logging is configured for monitoring</li>
          <li>✅ Documentation is complete for users</li>
          <li>✅ Error handling is robust</li>
        </ul>
      </div>

      <h2 id="stage-7">Stage 7: Documentation Writing</h2>

      <p>
        The final stage generates comprehensive documentation of your systematic literature review, including PRISMA 2020 flow diagrams, search strategy documentation, and research reports.
      </p>

      <h3 id="stage-7-prisma">PRISMA 2020 Flow Diagram</h3>

      <p>
        Generate the standardized PRISMA flowchart showing your screening process:
      </p>

      <CodeBlock
        language="bash"
        code={`# Generate PRISMA diagram
python scripts/07_generate_prisma.py

# Output: outputs/prisma_flow_diagram.png
# Also generates: outputs/prisma_data.json (for replication)`}
      />

      <div className="border rounded-lg p-4 my-6 bg-gray-50">
        <h4 className="font-semibold mb-2">Generated PRISMA Diagram Includes:</h4>
        <ul className="text-sm space-y-1">
          <li>✅ <strong>Identification</strong>: Records from each database (Semantic Scholar, OpenAlex, arXiv)</li>
          <li>✅ <strong>Screening</strong>: Records removed before screening, after screening</li>
          <li>✅ <strong>Included</strong>: Studies included in review with reasons for exclusion</li>
          <li>✅ <strong>Metadata</strong>: Date of search, search terms, inclusion/exclusion criteria</li>
        </ul>
      </div>

      <h3 id="stage-7-search-strategy">Search Strategy Documentation</h3>

      <p>
        Document your complete search strategy for reproducibility:
      </p>

      <CodeBlock
        language="markdown"
        code={`# Search Strategy Document (Auto-Generated)

## Databases Searched
1. **Semantic Scholar**: 450 records
2. **OpenAlex**: 380 records
3. **arXiv**: 120 records
Total: 950 records

## Search Terms
((chatbot OR "conversational agent" OR "dialogue system") AND
 ("language learning" OR "second language" OR "L2 acquisition"))

## Inclusion Criteria
- Published 2015-2024
- Empirical studies with quantitative or qualitative data
- Focus on speaking skills improvement
- Full text available in English

## Exclusion Criteria
- Review papers, editorials, commentaries
- Studies without learning outcome measures
- Non-English publications

## Date of Search
2025-10-15`}
      />

      <h3 id="stage-7-research-report">Research Summary Report</h3>

      <p>
        Generate a summary report of findings from your RAG conversations:
      </p>

      <CodeBlock
        language="bash"
        code={`# Generate research summary
python generate_report.py \\
  --conversations conversations/ \\
  --output outputs/research_summary.md

# Includes:
# - Key themes identified
# - Most cited papers (top 20)
# - Research gaps discovered
# - Methodology distribution
# - Geographic coverage
# - Timeline of publications`}
      />

      <div className="callout callout-success">
        <p className="font-semibold mb-2">📄 Documentation Deliverables</p>
        <p className="text-sm mb-2">Stage 7 produces publication-ready documentation:</p>
        <ul className="text-sm space-y-1 mb-0">
          <li>✅ <strong>PRISMA diagram</strong> (PNG/SVG) for manuscript figures</li>
          <li>✅ <strong>Search strategy</strong> (Markdown/Word) for supplementary materials</li>
          <li>✅ <strong>Included papers list</strong> (CSV/BibTeX) for references</li>
          <li>✅ <strong>Exclusion log</strong> (CSV) with reasons for each excluded paper</li>
          <li>✅ <strong>Research summary</strong> (Markdown/PDF) with key findings</li>
          <li>✅ <strong>Replication package</strong> (config.yaml + data/) for open science</li>
        </ul>
      </div>

      <h3 id="stage-7-export">Exporting for Publication</h3>

      <p>
        Export your findings in various formats for different publication venues:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📝 For Journal Submission</h4>
          <ul className="text-sm space-y-1">
            <li>• PRISMA diagram (300 DPI PNG)</li>
            <li>• Reference list (BibTeX/RIS)</li>
            <li>• Supplementary materials (ZIP)</li>
            <li>• Data availability statement</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">🎓 For Thesis/Dissertation</h4>
          <ul className="text-sm space-y-1">
            <li>• Methodology chapter section</li>
            <li>• Literature review synthesis</li>
            <li>• Appendices (search terms, criteria)</li>
            <li>• Full citation list with abstracts</li>
          </ul>
        </div>
      </div>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">🔗 Open Science & Reproducibility</p>
        <p className="text-sm mb-0">
          Stage 7 documentation ensures your research is <strong>fully reproducible</strong>. Share your <code>config.yaml</code>, search strategy, and PRISMA diagram so other researchers can replicate or extend your work. This meets requirements for preregistration platforms like OSF and PROSPERO.
        </p>
      </div>

      <h2 id="real-world-example">Complete Real-World Example</h2>

      <p>
        Let's walk through a complete implementation from start to finish using a real research question.
      </p>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-6 my-6">
        <h3 className="text-lg font-semibold mb-3">📚 Case Study: LLM Applications in Education Research</h3>

        <p className="mb-4">
          <strong>Research Question:</strong> "How are large language models being applied in K-12 education, and what are the reported learning outcomes?"
        </p>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold mb-1">Stage 1: Domain Setup (15 min)</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Defined scope: K-12 (excluding higher ed)</li>
              <li>Key concepts: LLM, GPT, ChatGPT, prompt engineering, personalized learning</li>
              <li>Timeframe: 2020-2024 (post-GPT-3 release)</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-1">Stage 2: Query Strategy (10 min)</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Databases: Semantic Scholar, OpenAlex, arXiv</li>
              <li>Query: <code>("large language model*" OR "LLM" OR "GPT" OR "ChatGPT") AND ("K-12" OR "primary education" OR "secondary education") AND ("learning outcomes" OR "student performance")</code></li>
              <li>Expected results: 200-400 papers</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-1">Stage 3: PRISMA Configuration (20 min)</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Defined inclusion criteria: empirical studies, quantitative data, K-12 only</li>
              <li>Exclusion criteria: opinion pieces, higher ed, non-English</li>
              <li>Configured AI screening with Claude API</li>
              <li>Set up PRISMA tracking spreadsheet</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-1">Stage 4: RAG Design (15 min)</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Vector DB: ChromaDB (sufficient for expected ~50 papers)</li>
              <li>Embeddings: text-embedding-3-small</li>
              <li>Chunking: 500 tokens, 50 overlap</li>
              <li>Retrieval: top-5, threshold 0.7</li>
              <li>LLM: Claude Sonnet 4.5</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-1">Stage 5: Execution Plan (10 min)</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Validated all configurations with <code>scholarag_cli.py validate</code></li>
              <li>Reviewed pipeline: fetch → deduplicate → screen → download → build</li>
              <li>Confirmed disk space (5GB) and API keys set</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-1">Stage 6: Research Conversation (2.5 hrs automated)</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Fetched: 347 papers (Semantic Scholar: 180, OpenAlex: 145, arXiv: 22)</li>
              <li>After deduplication: 289 unique papers</li>
              <li>After AI screening: 78 papers passed</li>
              <li>PDFs downloaded: 43 papers (55% success rate)</li>
              <li>Ingestion: 43 papers → 487 chunks</li>
              <li>Testing: 15 test queries, 92% accuracy</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-1">Stage 7: Documentation (1 hr)</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Generated PRISMA 2020 flow diagram (347 → 43 included)</li>
              <li>Exported search strategy documentation</li>
              <li>Created BibTeX file with all 43 references</li>
              <li>Generated research summary with key themes</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-4 bg-background rounded border">
          <p className="font-semibold mb-2">✨ Final Results:</p>
          <ul className="text-sm space-y-1">
            <li>✅ Total time: 4.5 hours (vs. weeks for manual literature review)</li>
            <li>✅ Papers retrieved: 347 → 43 included (PRISMA compliant)</li>
            <li>✅ Query response: &lt;1 second with citations</li>
            <li>✅ Total cost: &lt;$5 (embeddings + API calls)</li>
            <li>✅ Reproducible workflow with full documentation</li>
            <li>✅ Publication-ready PRISMA diagram and search strategy</li>
          </ul>
        </div>
      </div>

      <h2 id="troubleshooting">Common Implementation Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          🔴 Issue: "Too few papers after PRISMA screening"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Possible causes:</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Inclusion criteria too restrictive</li>
            <li>• Search query too narrow</li>
            <li>• Missing key databases</li>
            <li>• Synonyms not fully captured</li>
          </ul>
          <p className="font-semibold mt-3">Solutions:</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>✓ Broaden timeframe (e.g., 10→15 years)</li>
            <li>✓ Add more synonyms to query</li>
            <li>✓ Relax one non-essential criterion</li>
            <li>✓ Check additional databases</li>
          </ul>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          🟡 Issue: "RAG returns irrelevant results"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Possible causes:</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Similarity threshold too low</li>
            <li>• Chunks too large (losing specificity)</li>
            <li>• Embedding model mismatch</li>
            <li>• Poor metadata filtering</li>
          </ul>
          <p className="font-semibold mt-3">Solutions:</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>✓ Increase threshold from 0.7 to 0.75-0.8</li>
            <li>✓ Reduce chunk size to 300-400 tokens</li>
            <li>✓ Add re-ranking with cross-encoder</li>
            <li>✓ Filter by metadata (year, journal, etc.)</li>
          </ul>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          🟠 Issue: "PDF extraction failing or producing garbage text"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Possible causes:</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Scanned PDFs (images, not text)</li>
            <li>• Complex layouts (two-column, tables)</li>
            <li>• Non-standard fonts or encoding</li>
            <li>• Protected/encrypted PDFs</li>
          </ul>
          <p className="font-semibold mt-3">Solutions:</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>✓ Enable OCR with Tesseract for scanned PDFs</li>
            <li>✓ Try alternative parsers (PyMuPDF → pdfplumber)</li>
            <li>✓ Pre-process with layout detection (Unstructured)</li>
            <li>✓ Manual extraction for problematic papers</li>
          </ul>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          🔵 Issue: "Slow query response times (&gt;5 seconds)"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Possible causes:</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Vector DB not optimized</li>
            <li>• Embedding generation on every query</li>
            <li>• Large context sent to LLM</li>
            <li>• Network latency (API calls)</li>
          </ul>
          <p className="font-semibold mt-3">Solutions:</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>✓ Switch to FAISS for faster similarity search</li>
            <li>✓ Cache query embeddings</li>
            <li>✓ Reduce top_k from 10 to 5</li>
            <li>✓ Use streaming responses for better UX</li>
          </ul>
        </div>
      </details>

      <h2 id="next-steps">Next Steps</h2>

      <p>
        You now have a complete understanding of how to implement ScholarRAG from start to finish. Here's what to do next:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link href="/guide/05-advanced-topics" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <h3 className="font-semibold mb-2">📚 Chapter 5: Advanced Topics</h3>
          <p className="text-sm text-muted-foreground">
            Explore advanced features like custom embeddings, multi-language support, and performance optimization.
          </p>
        </Link>

        <Link href="/guide/06-best-practices" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <h3 className="font-semibold mb-2">✨ Chapter 6: Best Practices</h3>
          <p className="text-sm text-muted-foreground">
            Learn research best practices, citation management, and how to ensure reproducibility.
          </p>
        </Link>
      </div>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">🎉 Ready to Build?</p>
        <p className="mb-0">
          You have all the knowledge needed to implement your own ScholarRAG system. Start with <strong>Stage 1</strong> and work through each stage systematically. Remember: the prompt templates in <code>docs/prompts/</code> are designed to guide Claude Code through each stage—use them!
        </p>
      </div>
    </GuideLayout>
  )
}
