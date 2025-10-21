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
        This chapter walks you through the complete implementation process of ResearcherRAG, from initial setup to final deployment. We'll cover all seven stages in detail with real-world examples, practical tips, and troubleshooting advice to help you build your own systematic literature review RAG system.
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
          Make sure you've completed the <Link href="/guide/02-getting-started">Getting Started</Link> guide and understand the <Link href="/guide/03-core-concepts">Core Concepts</Link>. This implementation guide assumes you have ResearcherRAG installed and your API keys configured.
        </p>
      </div>

      <h2 id="overview">Implementation Overview</h2>

      <p>
        ResearcherRAG's seven-stage workflow is designed to guide you through building a RAG system systematically. Each stage builds upon the previous one, and the prompts are carefully crafted to help Claude Code understand your research domain and generate appropriate code.
      </p>

      <div className="callout callout-warning my-6">
        <p className="font-semibold mb-2">📋 Note: Two Workflow Perspectives</p>
        <div className="text-sm space-y-2">
          <p>
            <strong>Chapter 2 (Getting Started)</strong> presents the 7 stages as <em>sequential execution steps</em>: Domain Setup → Query Strategy → PRISMA Config → Paper Retrieval → Screening & Validation → RAG Building → Research & Documentation
          </p>
          <p>
            <strong>This chapter (Implementation Guide)</strong> presents the 7 stages as <em>Claude Code conversation phases</em>: You configure settings (Stages 1-5), then automation handles the work (Stage 6), then you document (Stage 7).
          </p>
          <p className="text-muted-foreground">
            Both describe the same workflow—just different viewpoints. Chapter 2 focuses on <em>what happens</em>, this chapter focuses on <em>how you interact with Claude Code</em>.
          </p>
        </div>
      </div>

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
        Navigate to the <code>docs/prompts/01_research_domain_setup.md</code> file in your ResearcherRAG repository. This prompt template guides you through defining your research domain.
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
          name: 'ResearcherRAG/',
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
ls -la ResearcherRAG/

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
          Many academic databases require institutional subscriptions. If you don't have access, start with <strong>PubMed</strong> (biomedical) and <strong>CORE</strong> (open access) which offer free APIs. ResearcherRAG includes helper scripts for both.
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
        ResearcherRAG provides scripts to automate parts of the PRISMA process:
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
          name: 'ResearcherRAG/',
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


      <h2 id="next-part">Continue to Part B</h2>
      
      <p>
        You have completed the planning and PRISMA configuration stages. Continue to the next chapter to learn about RAG system design, execution, and research conversation.
      </p>

      <div className="my-6">
        <Link href="/guide/04b-rag-research" className="border rounded-lg p-6 block hover:bg-muted/30 transition-colors">
          <h3 className="font-semibold mb-2">📚 Next: Chapter 4b - RAG & Research</h3>
          <p className="text-sm text-muted-foreground">
            Continue with Stages 4-7: RAG System Design, Execution Plan, Research Conversation, and Documentation.
          </p>
        </Link>
      </div>
    </GuideLayout>
  )
}
