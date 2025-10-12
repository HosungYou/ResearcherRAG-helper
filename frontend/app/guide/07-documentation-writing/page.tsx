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
        <div className="border-l-4 border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-900 p-4">
          <h4 className="font-semibold mb-2">Methods Section</h4>
          <p className="text-sm mb-2">Prompt your RAG system:</p>
          <pre className="bg-black text-white p-3 rounded text-xs"><code>{`"Generate a Methods section for my systematic review. Include:
- Databases: [PubMed, CORE, Web of Science]
- Search dates: [2010-01-01 to 2024-12-31]
- Search strategy: [Your Boolean query]
- Inclusion criteria: [List your criteria]
- Screening process: [Describe PRISMA workflow]
- Total papers: [N identified, N screened, N included]

Format in PRISMA style."`}</code></pre>
        </div>

        <div className="border-l-4 border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-900 p-4">
          <h4 className="font-semibold mb-2">Results Section</h4>
          <p className="text-sm mb-2">Prompt your RAG system:</p>
          <pre className="bg-black text-white p-3 rounded text-xs"><code>{`"Synthesize findings on [specific theme]:
1. How many papers discuss this theme?
2. What are the main findings? (with citations)
3. Are there contradictions or consensus?
4. Organize by sub-themes if applicable.

Create a summary table with: Theme | Key Finding | Supporting Papers"`}</code></pre>
        </div>

        <div className="border-l-4 border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-900 p-4">
          <h4 className="font-semibold mb-2">Discussion Section</h4>
          <p className="text-sm mb-2">Prompt your RAG system:</p>
          <pre className="bg-black text-white p-3 rounded text-xs"><code>{`"Compare my findings to existing literature:
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

      <p className="text-sm mb-3">
        The easiest way to create a publication-ready PRISMA diagram is using <strong>Mermaid Live Editor</strong>:
      </p>

      <div className="border rounded-lg my-6">
        <div className="border-b p-4 bg-muted/30">
          <h4 className="font-semibold">📊 Steps to Create Your PRISMA Diagram</h4>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <p className="font-semibold text-sm mb-2">Step 1: Copy the Mermaid code above</p>
            <p className="text-sm text-muted-foreground">
              Select the PRISMA flow diagram code shown in the example above
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm mb-2">Step 2: Open Mermaid Live Editor</p>
            <p className="text-sm text-muted-foreground mb-2">
              Visit <a href="https://mermaid.live" target="_blank" rel="noopener" className="text-blue-600 underline">https://mermaid.live</a>
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm mb-2">Step 3: Paste and edit with your numbers</p>
            <p className="text-sm text-muted-foreground">
              Replace the example numbers with your actual counts:
            </p>
            <pre className="bg-black text-white p-3 rounded text-xs mt-2"><code>{`A[Records Identified<br/>n = YOUR_NUMBER]
B[Records Screened<br/>n = YOUR_NUMBER<br/>XX duplicates removed]
...`}</code></pre>
          </div>

          <div>
            <p className="font-semibold text-sm mb-2">Step 4: Export as PNG or SVG</p>
            <p className="text-sm text-muted-foreground">
              Click "Actions" → "PNG" or "SVG" to download. SVG is recommended for publications (scalable, 300+ DPI quality).
            </p>
          </div>
        </div>
      </div>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 Pro Tip: Automate with Python (Advanced)</p>
        <p className="text-sm mb-2">
          If you need to generate many PRISMA diagrams programmatically, you can use Python with the Graphviz or Matplotlib libraries.
          However, for most researchers, the Mermaid Live Editor approach above is simpler and produces publication-quality results.
        </p>
        <p className="text-sm mb-0">
          See <a href="https://github.com/HosungYou/researcherRAG/tree/main/examples" target="_blank" rel="noopener" className="text-blue-600 underline">GitHub examples/</a> for Python automation scripts.
        </p>
      </div>

      <h2 id="bibliography">Citation & Bibliography Management</h2>

      <p>
        Export your citations in standard formats for reference managers:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📚 Export BibTeX</h4>
          <pre className="bg-black text-white p-2 rounded text-xs"><code>{`python export_bibliography.py \\
  --format bibtex \\
  --output references.bib

# Import into LaTeX, Overleaf`}</code></pre>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📑 Export RIS</h4>
          <pre className="bg-black text-white p-2 rounded text-xs"><code>{`python export_bibliography.py \\
  --format ris \\
  --output references.ris

# Import into EndNote, Zotero`}</code></pre>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📄 Export APA</h4>
          <pre className="bg-black text-white p-2 rounded text-xs"><code>{`python export_bibliography.py \\
  --format apa \\
  --output references.docx

# Word document with formatted references`}</code></pre>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">🌐 Export HTML</h4>
          <pre className="bg-black text-white p-2 rounded text-xs"><code>{`python export_bibliography.py \\
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
            <span className="font-bold">📊</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S1: Complete Search Strategies</p>
              <p className="text-xs text-muted-foreground">Full Boolean queries for each database with dates</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold">📋</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S2: Inclusion/Exclusion Criteria (Detailed)</p>
              <p className="text-xs text-muted-foreground">Full documentation with examples and edge cases</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold">📑</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S3: List of Included Studies</p>
              <p className="text-xs text-muted-foreground">All papers with full citations and DOIs</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold">📈</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S4: Data Extraction Forms</p>
              <p className="text-xs text-muted-foreground">Template used for extracting data from papers</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold">⚙️</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S5: RAG System Configuration</p>
              <p className="text-xs text-muted-foreground">Document AI tools used, models, and validation process</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold">✅</span>
            <div className="flex-1">
              <p className="font-semibold text-sm">S6: PRISMA Checklist (Completed)</p>
              <p className="text-xs text-muted-foreground">Official 27-item PRISMA 2020 checklist</p>
            </div>
          </div>
        </div>
      </div>

      <h3 id="generate-supplementary">Generate Supplementary Materials</h3>

      <pre className="bg-black text-white p-3 rounded text-sm my-4"><code>{`# Generate all supplementary files at once
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

      <div className="border-l-4 border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-900 p-4 my-6">
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
        Complete transparency about AI use is essential for credibility and reproducibility. ResearcherRAG uses AI at multiple stages—disclosure should reflect this accurately.
      </p>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Important: Distinguish AI Roles</p>
        <p className="text-sm mb-2">ResearcherRAG uses AI differently across stages:</p>
        <ul className="text-sm space-y-1">
          <li>• <strong>Stages 1-3:</strong> AI assists protocol development (search queries, criteria)</li>
          <li>• <strong>Stages 4-5:</strong> AI assists screening (recommendations, not decisions)</li>
          <li>• <strong>Stages 6-7:</strong> AI assists synthesis (analysis, not interpretation)</li>
        </ul>
        <p className="text-sm mt-2">Your disclosure must clarify that <strong>humans made all final decisions</strong>.</p>
      </div>

      <h3 id="disclosure-template">Complete Disclosure Template</h3>

      <p className="text-sm mb-3">
        Use this comprehensive template for your Methods section. Replace bracketed text with your specifics:
      </p>

      <div className="bg-muted/30 border rounded p-4 my-6">
        <p className="text-sm font-semibold mb-3">2.3 Study Selection (AI-Augmented PRISMA Screening)</p>
        <div className="text-sm space-y-3">
          <p>
            We followed PRISMA 2020 guidelines with AI augmentation to enhance efficiency while maintaining methodological rigor.
          </p>

          <div>
            <p className="font-semibold">AI System Configuration:</p>
            <ul className="ml-4 space-y-1 text-xs">
              <li>• <strong>Model:</strong> Claude 3.5 Sonnet (Anthropic, version 2024-10-22)</li>
              <li>• <strong>Architecture:</strong> Retrieval-Augmented Generation (RAG) with ChromaDB vector database</li>
              <li>• <strong>Training:</strong> System configured with pre-defined inclusion/exclusion criteria, calibrated on [20] papers jointly screened by all reviewers</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Screening Process:</p>
            <p className="text-xs mt-1"><strong>1. Title/Abstract Screening (n=[1,247]):</strong></p>
            <ul className="ml-4 space-y-1 text-xs">
              <li>• AI provided recommendations (Include/Exclude) with justifications</li>
              <li>• Two independent reviewers ([XX, YY]) made final decisions</li>
              <li>• Reviewers could see AI justifications but were not bound by them</li>
              <li>• Conservative rule: Any uncertainty → proceed to full-text</li>
              <li>• Inter-rater reliability (human-human): Cohen's kappa = [0.87]</li>
              <li>• AI-human agreement: [98.6%] ([18] overrides, all documented)</li>
            </ul>

            <p className="text-xs mt-2"><strong>2. Full-Text Review (n=[264]):</strong></p>
            <ul className="ml-4 space-y-1 text-xs">
              <li>• AI extracted relevant sections (methods, population, outcomes)</li>
              <li>• Two reviewers independently assessed eligibility</li>
              <li>• Conflicts resolved through discussion (n=[12]) or third reviewer (n=[3])</li>
              <li>• Final included: n=[137]</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Validation:</p>
            <ul className="ml-4 space-y-1 text-xs">
              <li>• Manual re-screening of [100] randomly selected AI exclusions: [0] false negatives</li>
              <li>• Blind comparison (reviewers unaware of AI recommendations): kappa = [0.89]</li>
              <li>• Supplementary Table S7 provides complete AI-human decision comparison</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Data Extraction and Synthesis (Stages 6-7):</p>
            <p className="text-xs">
              The [137] included papers were processed using the RAG system for automated data extraction (verified by human reviewers), thematic analysis, and cross-study synthesis with citation tracking. All extracted data were spot-checked against source documents ([25%] random sample showed [98%] accuracy).
            </p>
          </div>

          <div>
            <p className="font-semibold">Ethical Considerations:</p>
            <p className="text-xs">
              This approach was reviewed by [institution] as not involving human subjects. We maintain that AI augmentation enhances consistency, improves efficiency (~40 hours saved), maintains rigor (qualified human reviewers made all decisions), and ensures transparency (complete logs and code publicly available).
            </p>
          </div>

          <div>
            <p className="font-semibold">Reproducibility:</p>
            <p className="text-xs">
              Complete methodology including AI configuration, prompts, screening logs, and source code: <a href="https://github.com/HosungYou/researcherRAG" target="_blank" rel="noopener" className="text-blue-600 underline">https://github.com/HosungYou/researcherRAG</a>
            </p>
          </div>
        </div>
      </div>

      <h3 id="addressing-criticisms">Addressing Reviewer Criticisms</h3>

      <p className="text-sm mb-4">
        Expect these criticisms when using AI in systematic reviews. Prepare your responses:
      </p>

      <div className="space-y-4 my-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            🔴 Criticism 1: "AI might miss relevant papers"
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm font-semibold">Your Response:</p>
            <div className="bg-muted/30 p-3 rounded text-sm">
              <p className="mb-2">"We implemented a conservative screening approach:</p>
              <ul className="ml-4 space-y-1 text-xs">
                <li>1. <strong>High recall:</strong> AI configured to flag any potentially relevant papers</li>
                <li>2. <strong>Human verification:</strong> All AI exclusions reviewed by researchers</li>
                <li>3. <strong>Validation:</strong> Manual check of random sample (n=100) found zero false negatives</li>
                <li>4. <strong>Traditional backup:</strong> Two independent reviewers for all borderline cases</li>
              </ul>
              <p className="mt-2 text-xs">See Supplementary Table S7.2 for false negative analysis."</p>
            </div>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            🟠 Criticism 2: "AI has inherent biases"
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm font-semibold">Your Response:</p>
            <div className="bg-muted/30 p-3 rounded text-sm">
              <p className="mb-2">"We acknowledge this and took mitigation steps:</p>
              <ul className="ml-4 space-y-1 text-xs">
                <li>1. <strong>Diverse prompt testing:</strong> Multiple phrasings tested for consistency</li>
                <li>2. <strong>Blind validation:</strong> Human reviewers blinded to AI recommendations (n=50 subset), kappa=0.89</li>
                <li>3. <strong>Bias monitoring:</strong> Tracked AI recommendation patterns, found no systematic bias</li>
                <li>4. <strong>Transparency:</strong> All AI decisions and justifications publicly available</li>
              </ul>
              <p className="mt-2 text-xs">See Supplementary Figure S7.1 for AI confidence score distribution."</p>
            </div>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            🟡 Criticism 3: "This isn't a 'real' systematic review"
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm font-semibold">Your Response:</p>
            <div className="bg-muted/30 p-3 rounded text-sm">
              <p className="mb-2">"Our approach fully adheres to PRISMA 2020:</p>
              <ul className="ml-4 space-y-1 text-xs">
                <li>✓ Pre-registered protocol</li>
                <li>✓ Comprehensive search strategy</li>
                <li>✓ Dual independent screening (humans made final decisions)</li>
                <li>✓ Quality assessment by qualified reviewers</li>
                <li>✓ Transparent reporting</li>
              </ul>
              <p className="mt-2 text-xs">
                AI augmentation enhanced efficiency while maintaining rigor. Analogous to: spell-checkers don't invalidate writing.
                We argue AI-augmented screening, when properly validated, improves consistency and reduces reviewer fatigue
                while maintaining human oversight."
              </p>
            </div>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            🔵 Criticism 4: "Results cannot be reproduced"
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm font-semibold">Your Response:</p>
            <div className="bg-muted/30 p-3 rounded text-sm">
              <p className="mb-2">"We provide complete reproducibility package:</p>
              <ul className="ml-4 space-y-1 text-xs">
                <li>1. <strong>Exact model:</strong> Claude 3.5 Sonnet version 2024-10-22 with API timestamp</li>
                <li>2. <strong>Configuration:</strong> All prompts, parameters, embedding settings</li>
                <li>3. <strong>Logs:</strong> Complete screening decisions with AI scores and human overrides</li>
                <li>4. <strong>Code:</strong> Open-source under MIT license</li>
                <li>5. <strong>Docker:</strong> Containerized environment for exact replication</li>
                <li>6. <strong>Fallback:</strong> Traditional 'human-only' protocol also provided</li>
              </ul>
              <p className="mt-2 text-xs">Repository: <a href="https://github.com/HosungYou/researcherRAG" className="text-blue-600 underline">github.com/HosungYou/researcherRAG</a>"</p>
            </div>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            🟣 Criticism 5: "AI use raises ethical concerns"
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm font-semibold">Your Response:</p>
            <div className="bg-muted/30 p-3 rounded text-sm">
              <p className="mb-2">"We consulted ethics board (IRB approved as non-human-subject research). Key principles maintained:</p>
              <ul className="ml-4 space-y-1 text-xs">
                <li>1. <strong>Transparency:</strong> Full AI disclosure in methods</li>
                <li>2. <strong>Accountability:</strong> Humans responsible for all decisions</li>
                <li>3. <strong>Privacy:</strong> No patient data processed by AI</li>
                <li>4. <strong>Fairness:</strong> AI assisted, didn't replace human judgment</li>
                <li>5. <strong>Beneficence:</strong> Faster evidence synthesis benefits patients/policy</li>
              </ul>
              <p className="mt-2 text-xs">
                We argue that NOT using validated AI assistance may be less ethical: increases researcher burden,
                delays important findings, wastes funding on repetitive tasks."
              </p>
            </div>
          </div>
        </details>
      </div>

      <h3 id="supplementary-validation">Supplementary Materials: AI Validation Tables</h3>

      <p className="text-sm mb-3">
        Include these validation tables in your supplementary materials to demonstrate AI reliability:
      </p>

      <div className="border rounded-lg my-6">
        <div className="border-b p-4 bg-muted/30">
          <h4 className="font-semibold">Table S7.1: AI vs Human Screening Decisions</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Screening Stage</th>
                <th className="text-left p-3">Total</th>
                <th className="text-left p-3">AI Include</th>
                <th className="text-left p-3">AI Exclude</th>
                <th className="text-left p-3">Human Override</th>
                <th className="text-left p-3">Agreement (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Title/Abstract</td>
                <td className="p-3">1,247</td>
                <td className="p-3">264</td>
                <td className="p-3">983</td>
                <td className="p-3">18 (1.4%)</td>
                <td className="p-3 font-semibold">98.6%</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Full-text</td>
                <td className="p-3">264</td>
                <td className="p-3">142</td>
                <td className="p-3">122</td>
                <td className="p-3">5 (1.9%)</td>
                <td className="p-3 font-semibold">98.1%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border rounded-lg my-6">
        <div className="border-b p-4 bg-muted/30">
          <h4 className="font-semibold">Table S7.2: False Negative Analysis</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Validation Sample</th>
                <th className="text-left p-3">Papers Checked</th>
                <th className="text-left p-3">False Negatives</th>
                <th className="text-left p-3">False Negative Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Random AI exclusions</td>
                <td className="p-3">100</td>
                <td className="p-3 font-semibold">0</td>
                <td className="p-3 font-semibold">0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-muted/10">
          <p className="text-xs text-muted-foreground">
            <strong>Method:</strong> Two senior researchers independently re-screened 100 randomly selected papers that AI recommended for exclusion.
            No papers were incorrectly excluded, confirming high specificity of AI screening.
          </p>
        </div>
      </div>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">✅ Best Practice: Validation Strategy</p>
        <p className="text-sm mb-0">
          The most convincing evidence for reviewers is your validation data. Always include: (1) AI-human agreement rates,
          (2) false negative analysis, (3) blind comparison study, and (4) confidence score distributions. This demonstrates
          you've thoroughly validated your AI-augmented approach.
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
