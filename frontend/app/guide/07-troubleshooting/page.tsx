import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Mermaid from '@/components/Mermaid'

export default function DocumentationWritingPage() {
  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/researcherRAG/blob/main/prompts/07_documentation_writing.md"
      githubLabel="View Stage 7 Prompt"
    >
      <h1>Documentation & Writing</h1>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Transform your RAG-assisted research into publishable documentation. This chapter covers structuring systematic reviews, generating PRISMA diagrams, managing bibliographies, and preparing publication-ready materials with RAG assistance.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">📋 Prerequisites</p>
        <ul className="text-sm space-y-1">
          <li>✓ Completed Stage 6 (Research conversations and analysis)</li>
          <li>✓ Research notes with verified citations</li>
          <li>✓ Key findings and evidence organized</li>
        </ul>
      </div>

      <h2 id="structure">Structuring Your Literature Review</h2>

      <p>
        A systematic review follows the PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) format. Here's the standard structure:
      </p>

      <Mermaid chart={`
graph TD
    A[Title & Abstract] --> B[Introduction]
    B --> C[Methods]
    C --> D[Results]
    D --> E[Discussion]
    E --> F[Conclusion]

    C --> C1[Protocol]
    C --> C2[Eligibility Criteria]
    C --> C3[Information Sources]
    C --> C4[Search Strategy]
    C --> C5[Data Collection]

    D --> D1[PRISMA Flow Diagram]
    D --> D2[Study Characteristics]
    D --> D3[Synthesis of Results]

    style A fill:#e0e7ff
    style B fill:#ddd6fe
    style C fill:#fce7f3
    style D fill:#fef3c7
    style E fill:#dcfce7
    style F fill:#bbf7d0
      `} />

      <h3 id="prisma-outline">PRISMA Systematic Review Outline</h3>

      <div className="border rounded-lg my-6">
        <details className="border-b">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            1. Title & Abstract (250-300 words)
          </summary>
          <div className="p-4 pt-0 space-y-3">
            <div className="bg-muted/30 p-3 rounded">
              <p className="text-sm font-semibold mb-2">Abstract Structure:</p>
              <ul className="text-sm space-y-1">
                <li>• <strong>Background:</strong> Why is this review needed?</li>
                <li>• <strong>Objective:</strong> What is your research question?</li>
                <li>• <strong>Methods:</strong> PRISMA, databases, inclusion criteria</li>
                <li>• <strong>Results:</strong> Number of papers, main findings</li>
                <li>• <strong>Conclusions:</strong> Implications and significance</li>
              </ul>
            </div>
          </div>
        </details>

        <details className="border-b">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            2. Introduction
          </summary>
          <div className="p-4 pt-0 space-y-3">
            <p className="text-sm"><strong>3.1 Rationale:</strong> What gap does this review address?</p>
            <p className="text-sm"><strong>3.2 Objectives:</strong> Specific research questions (PICO/SPIDER)</p>
          </div>
        </details>

        <details className="border-b">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            3. Methods (Most Critical Section)
          </summary>
          <div className="p-4 pt-0 space-y-3">
            <ul className="text-sm space-y-2">
              <li>• <strong>4.1 Protocol:</strong> Pre-registration (PROSPERO, OSF)</li>
              <li>• <strong>4.2 Eligibility Criteria:</strong> Inclusion/exclusion with justification</li>
              <li>• <strong>4.3 Information Sources:</strong> Databases searched (with dates)</li>
              <li>• <strong>4.4 Search Strategy:</strong> Full Boolean queries</li>
              <li>• <strong>4.5 Study Selection:</strong> Screening process (PRISMA flow)</li>
              <li>• <strong>4.6 Data Collection:</strong> Extraction process and tools used</li>
              <li>• <strong>4.7 Risk of Bias:</strong> Quality assessment method</li>
            </ul>
            <div className="callout callout-warning mt-3">
              <p className="text-sm mb-0">
                <strong>⚠️ Disclose AI Usage:</strong> State that you used an AI-assisted RAG system for paper screening and data extraction, with human oversight and validation.
              </p>
            </div>
          </div>
        </details>

        <details className="border-b">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            4. Results
          </summary>
          <div className="p-4 pt-0 space-y-3">
            <ul className="text-sm space-y-2">
              <li>• <strong>5.1 Study Selection:</strong> PRISMA flow diagram with numbers</li>
              <li>• <strong>5.2 Study Characteristics:</strong> Table of included studies</li>
              <li>• <strong>5.3 Risk of Bias:</strong> Quality assessment results</li>
              <li>• <strong>5.4 Synthesis:</strong> Organized by themes or outcomes</li>
            </ul>
          </div>
        </details>

        <details className="border-b">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            5. Discussion
          </summary>
          <div className="p-4 pt-0 space-y-3">
            <ul className="text-sm space-y-2">
              <li>• <strong>Summary of Evidence:</strong> What did you find?</li>
              <li>• <strong>Limitations:</strong> Of included studies and your review</li>
              <li>• <strong>Implications:</strong> For practice, policy, research</li>
            </ul>
          </div>
        </details>

        <details>
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            6. Conclusion
          </summary>
          <div className="p-4 pt-0 space-y-3">
            <p className="text-sm">Concise summary of main findings and implications. Future research directions.</p>
          </div>
        </details>
      </div>

      <h2 id="rag-writing-assistance">Writing with RAG Assistance</h2>

      <p>
        Use your RAG system to help draft sections of your review. Here are effective prompts for each section:
      </p>

      <div className="grid grid-cols-1 gap-4 my-8">
        <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 p-4">
          <h4 className="font-semibold mb-2">Methods Section</h4>
          <p className="text-sm mb-2">Prompt your RAG system:</p>
          <pre className="bg-white dark:bg-gray-900 p-3 rounded text-xs"><code>{`"Generate a Methods section for my systematic review. Include:
- Databases: [PubMed, CORE, Web of Science]
- Search dates: [2010-01-01 to 2024-12-31]
- Search strategy: [Your Boolean query]
- Inclusion criteria: [List your criteria]
- Screening process: [Describe PRISMA workflow]
- Total papers: [N identified, N screened, N included]

Format in PRISMA style."`}</code></pre>
        </div>

        <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20 p-4">
          <h4 className="font-semibold mb-2">Results Section</h4>
          <p className="text-sm mb-2">Prompt your RAG system:</p>
          <pre className="bg-white dark:bg-gray-900 p-3 rounded text-xs"><code>{`"Synthesize findings on [specific theme]:
1. How many papers discuss this theme?
2. What are the main findings? (with citations)
3. Are there contradictions or consensus?
4. Organize by sub-themes if applicable.

Create a summary table with: Theme | Key Finding | Supporting Papers"`}</code></pre>
        </div>

        <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20 p-4">
          <h4 className="font-semibold mb-2">Discussion Section</h4>
          <p className="text-sm mb-2">Prompt your RAG system:</p>
          <pre className="bg-white dark:bg-gray-900 p-3 rounded text-xs"><code>{`"Compare my findings to existing literature:
1. What are the main patterns across studies?
2. Which findings are well-established (cited in 5+ papers)?
3. Where are the contradictions or gaps?
4. What are the limitations mentioned by authors?
5. What future research directions are suggested?"`}</code></pre>
        </div>
      </div>

      <h2 id="prisma-diagram">PRISMA Flow Diagram</h2>

      <p>
        The PRISMA flow diagram visualizes your systematic review process. Here's how to generate it:
      </p>

      <Mermaid chart={`
graph TD
    A[Records Identified<br/>n = 1,247] --> B[Records Screened<br/>n = 1,189<br/>58 duplicates removed]
    B --> C{Title/Abstract<br/>Screening}
    C -->|Excluded<br/>n = 925| D[Exclusion Reasons:<br/>- Not relevant: 623<br/>- Wrong population: 201<br/>- No full text: 101]
    C -->|Included| E[Full-text Articles<br/>Assessed<br/>n = 264]
    E --> F{Eligibility<br/>Assessment}
    F -->|Excluded<br/>n = 127| G[Exclusion Reasons:<br/>- Wrong methodology: 67<br/>- Insufficient data: 42<br/>- Duplicate data: 18]
    F -->|Included| H[Studies Included<br/>in Synthesis<br/>n = 137]

    style A fill:#e0e7ff
    style B fill:#ddd6fe
    style E fill:#fce7f3
    style H fill:#dcfce7
      `} />

      <h3 id="generate-diagram">Generate Your PRISMA Diagram</h3>

      <p className="text-sm mb-3">Use this script to create a publication-ready PRISMA diagram:</p>

      <pre className="bg-muted p-3 rounded text-sm my-4"><code>{`python generate_prisma_diagram.py \\
  --identified 1247 \\
  --duplicates 58 \\
  --screened 1189 \\
  --excluded_abstract 925 \\
  --fulltext_assessed 264 \\
  --excluded_fulltext 127 \\
  --included 137 \\
  --output prisma_flow.png

# Generates a 300 DPI PNG suitable for publication`}</code></pre>

      <h2 id="bibliography">Citation & Bibliography Management</h2>

      <p>
        Export your citations in standard formats for reference managers:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📚 Export BibTeX</h4>
          <pre className="bg-muted p-2 rounded text-xs"><code>{`python export_bibliography.py \\
  --format bibtex \\
  --output references.bib

# Import into LaTeX, Overleaf`}</code></pre>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📑 Export RIS</h4>
          <pre className="bg-muted p-2 rounded text-xs"><code>{`python export_bibliography.py \\
  --format ris \\
  --output references.ris

# Import into EndNote, Zotero`}</code></pre>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📄 Export APA</h4>
          <pre className="bg-muted p-2 rounded text-xs"><code>{`python export_bibliography.py \\
  --format apa \\
  --output references.docx

# Word document with formatted references`}</code></pre>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">🌐 Export HTML</h4>
          <pre className="bg-muted p-2 rounded text-xs"><code>{`python export_bibliography.py \\
  --format html \\
  --output references.html

# Interactive reference list with DOI links`}</code></pre>
        </div>
      </div>

      <h2 id="supplementary">Supplementary Materials</h2>

      <p>
        Journals often require supplementary materials for systematic reviews. Prepare these files:
      </p>

      <div className="border rounded-lg my-6">
        <div className="border-b p-4 bg-muted/30">
          <h4 className="font-semibold">Supplementary Files Checklist</h4>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">📊</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S1: Complete Search Strategies</p>
              <p className="text-xs text-muted-foreground">Full Boolean queries for each database with dates</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">📋</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S2: Inclusion/Exclusion Criteria (Detailed)</p>
              <p className="text-xs text-muted-foreground">Full documentation with examples and edge cases</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">📑</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S3: List of Included Studies</p>
              <p className="text-xs text-muted-foreground">All papers with full citations and DOIs</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">📈</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S4: Data Extraction Forms</p>
              <p className="text-xs text-muted-foreground">Template used for extracting data from papers</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">⚙️</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S5: RAG System Configuration</p>
              <p className="text-xs text-muted-foreground">Document AI tools used, models, and validation process</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">✅</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S6: PRISMA Checklist (Completed)</p>
              <p className="text-xs text-muted-foreground">Official 27-item PRISMA 2020 checklist</p>
            </div>
          </div>
        </div>
      </div>

      <h3 id="generate-supplementary">Generate Supplementary Materials</h3>

      <pre className="bg-muted p-3 rounded text-sm my-4"><code>{`# Generate all supplementary files at once
python generate_supplementary.py \\
  --config rag_config.yaml \\
  --output supplementary/

# Creates:
# - S1_search_strategies.pdf
# - S2_criteria_detailed.pdf
# - S3_included_studies.xlsx
# - S4_data_extraction_form.xlsx
# - S5_rag_system_config.pdf
# - S6_prisma_checklist.pdf`}</code></pre>

      <h2 id="reproducibility">Reproducibility Package</h2>

      <p>
        Make your research fully reproducible by providing a complete reproducibility package:
      </p>

      <div className="bg-muted/30 border-l-4 border-green-500 p-4 my-6">
        <h4 className="font-semibold mb-3">📦 Reproducibility Package Contents</h4>
        <div className="space-y-2 text-sm">
          <p>✓ <strong>Code Repository:</strong> GitHub link to your RAG system setup</p>
          <p>✓ <strong>Configuration Files:</strong> Exact settings (rag_config.yaml)</p>
          <p>✓ <strong>Data Files:</strong> CSV of all papers (with metadata)</p>
          <p>✓ <strong>Search Logs:</strong> Complete search history with dates</p>
          <p>✓ <strong>Documentation:</strong> Step-by-step guide to reproduce</p>
          <p>✓ <strong>Docker Image (Optional):</strong> Containerized environment</p>
        </div>
      </div>

      <h2 id="publication-prep">Preparing for Publication</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Before Submission</h3>
          <ul className="text-sm space-y-2">
            <li>✓ Verify all citations are accurate</li>
            <li>✓ Check PRISMA flow diagram numbers match text</li>
            <li>✓ Complete PRISMA 2020 checklist</li>
            <li>✓ Prepare supplementary materials</li>
            <li>✓ Disclose AI tool usage in Methods</li>
            <li>✓ Have co-authors review</li>
            <li>✓ Proofread for formatting consistency</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Common Reviewer Questions</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold">Q: "How did you ensure AI didn't miss relevant papers?"</p>
              <p className="text-muted-foreground">A: Describe validation, manual review, and spot-checking process</p>
            </div>
            <div>
              <p className="font-semibold">Q: "Can this be reproduced?"</p>
              <p className="text-muted-foreground">A: Point to reproducibility package, public repository, exact versions</p>
            </div>
            <div>
              <p className="font-semibold">Q: "What about AI biases?"</p>
              <p className="text-muted-foreground">A: Explain human oversight, verification steps, and limitations addressed</p>
            </div>
          </div>
        </div>
      </div>

      <h2 id="ai-disclosure">AI Disclosure Statement</h2>

      <p>
        Include this in your Methods section to maintain transparency:
      </p>

      <div className="bg-muted/30 border rounded p-4 my-6">
        <p className="text-sm font-semibold mb-2">Example AI Disclosure:</p>
        <p className="text-sm italic">
          "We utilized a Retrieval-Augmented Generation (RAG) system built on [ChromaDB/FAISS] and [Claude 3.5 Sonnet/GPT-4] to assist with systematic screening and data extraction. The system was configured with [specify parameters]. All AI-generated decisions were validated by human reviewers [specify process]. Inclusion/exclusion decisions were made by [number] independent reviewers with [X%] agreement (Cohen's kappa = X.XX). The complete RAG system configuration and code are available at [GitHub URL] for reproducibility."
        </p>
      </div>

      <h2 id="final-checklist">Final Publishing Checklist</h2>

      <div className="border rounded-lg my-6">
        <div className="p-4 space-y-2">
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm">PRISMA 2020 checklist completed and included</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm">PRISMA flow diagram with correct numbers</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm">All citations verified for accuracy</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm">Supplementary materials prepared (S1-S6)</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm">AI usage disclosed in Methods section</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm">Reproducibility package available (GitHub/OSF)</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm">Bibliography exported in journal's required format</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm">All co-authors have reviewed and approved</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm">Conflicts of interest declared</span>
          </label>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" />
            <span className="text-sm">Funding acknowledgments included</span>
          </label>
        </div>
      </div>

      <h2 id="conclusion">Conclusion: From Research to Publication</h2>

      <p>
        You've now completed the full ResearcherRAG workflow—from defining your research question (Stage 1) through building your RAG system (Stages 2-5), conducting research conversations (Stage 6), and finally writing up your findings (Stage 7).
      </p>

      <Mermaid chart={`
graph LR
    A[Stage 1-5<br/>Build RAG] --> B[Stage 6<br/>Research Analysis]
    B --> C[Stage 7<br/>Write Up]
    C --> D[Publication<br/>Ready]

    style A fill:#e0e7ff
    style B fill:#ddd6fe
    style C fill:#fce7f3
    style D fill:#dcfce7
      `} />

      <div className="callout callout-success">
        <p className="font-semibold mb-2">🎉 Congratulations!</p>
        <p className="mb-0">
          You've learned how to leverage AI-assisted RAG systems for systematic literature reviews while maintaining academic rigor, transparency, and reproducibility. Your systematic review is now ready for submission. Good luck with your publication!
        </p>
      </div>

      <div className="text-center my-8">
        <Link href="/guide/01-introduction" className="inline-block border rounded-lg px-6 py-3 font-semibold hover:bg-muted/30 transition-colors">
          ← Back to Introduction
        </Link>
      </div>
    </GuideLayout>
  )
}
