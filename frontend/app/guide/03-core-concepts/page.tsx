import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Mermaid from '@/components/Mermaid'
import { CodeBlock } from '@/components/CodeBlock'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export default function CoreConceptsPage() {
  return (
    <GuideLayout>
      <h1 id="core-concepts">Core Concepts</h1>

      <p className="text-xl text-muted mt-6 mb-8">
        Understand the key technologies and methodologies behind ScholaRAG: why we use PRISMA for systematic reviews, why RAG beats generic chatbots, and why these specific tools were chosen.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 For Researchers</p>
        <p className="mb-0">
          This chapter explains <strong>why</strong> ScholaRAG works this way, not <strong>how</strong> to code it. Technical implementation details are in the <Link href="/codebook" className="underline">Codebook</Link>.
        </p>
      </div>

      <h2 id="prisma-methodology">PRISMA: The Gold Standard for Systematic Reviews</h2>

      <p>
        <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer" className="underline">PRISMA</a> (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is an evidence-based framework for conducting transparent, reproducible literature reviews. Updated in 2020, it's the standard for academic systematic reviews and meta-analyses.
      </p>

      <h3 id="why-prisma">Why ScholaRAG Uses PRISMA</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border border-border rounded-lg p-6">
          <h4 className="font-semibold mb-3 text-lg">🚫 Generic RAG Systems</h4>
          <ul className="text-sm space-y-2 text-muted">
            <li>❌ Dump random PDFs into vector DB</li>
            <li>❌ No quality control or screening</li>
            <li>❌ Can't defend why papers were included</li>
            <li>❌ Mix high-quality and low-quality sources</li>
            <li>❌ Not reproducible by other researchers</li>
            <li>❌ Can't publish findings</li>
          </ul>
          <p className="text-xs mt-4 text-muted-foreground italic">
            "I threw 500 random PDFs from Google Scholar into a database."
          </p>
        </div>

        <div className="border-2 border-gray-900 rounded-lg p-6 bg-gray-50">
          <h4 className="font-semibold mb-3 text-lg">✅ ScholaRAG with PRISMA</h4>
          <ul className="text-sm space-y-2 text-gray-900">
            <li>✓ Systematic database search with documented queries</li>
            <li>✓ Clear inclusion/exclusion criteria</li>
            <li>✓ AI-powered screening with transparent rubric</li>
            <li>✓ Only high-quality, relevant papers included</li>
            <li>✓ Fully reproducible methodology</li>
            <li>✓ Publication-ready systematic review</li>
          </ul>
          <p className="text-xs mt-4 font-medium">
            "67 papers screened from 1,243 using PRISMA 2020 guidelines."
          </p>
        </div>
      </div>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Critical Understanding</p>
        <p className="mb-0">
          PRISMA is <strong>NOT</strong> optional—it's what makes your RAG system academically valid. Stages 1-3 (PRISMA screening) happen BEFORE building your vector database (Stages 4-5).
        </p>
      </div>

      <h3 id="prisma-flow">PRISMA 2020 Flow</h3>

      <Mermaid chart={`
graph TD
    A[Identification:<br/>Search databases] --> B[Screening:<br/>Remove duplicates]
    B --> C[Screening:<br/>Title/abstract review]
    C --> D[Eligibility:<br/>Full-text review]
    D --> E[Included:<br/>Build RAG system]

    A --> A1[Semantic Scholar<br/>OpenAlex<br/>arXiv]
    B --> B1[2,000 papers → 1,200 unique]
    C --> C1[AI-PRISMA screening]
    D --> D1[Manual validation]
    E --> E1[Vector Database]

    style E fill:#dcfce7
    style E1 fill:#dcfce7
      `} />

      <p className="mt-6">
        <strong>ScholaRAG automates</strong> the screening stages (C and D) using AI-PRISMA rubrics, saving weeks of manual work while maintaining academic rigor.
      </p>

      <h2 id="ai-prisma">AI-PRISMA: Transparent Automated Screening</h2>

      <p>
        <strong>AI-PRISMA</strong> is ScholaRAG's approach to combining PRISMA 2020 systematic review methodology with AI automation. Unlike traditional "black box" human screening, AI-PRISMA makes every decision transparent, traceable, and verifiable.
      </p>

      <h3 id="human-ai-collaboration">Human-AI Collaboration Model</h3>

      <p>
        AI-PRISMA follows a <strong>3-zone hybrid workflow</strong> where AI and humans collaborate based on decision confidence and task type:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="border rounded-lg p-4 bg-green-50">
          <h4 className="font-semibold mb-2">✅ Zone 1: 100% AI Automation</h4>
          <p className="text-sm mb-2"><strong>Deduplication</strong></p>
          <ul className="text-xs space-y-1">
            <li>• Exact duplicate detection (DOI, arXiv ID)</li>
            <li>• Title similarity matching (≥90%)</li>
            <li>• No human review needed</li>
            <li>• Deterministic, verifiable rules</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 bg-yellow-50">
          <h4 className="font-semibold mb-2">⚠️ Zone 2: AI-Assisted</h4>
          <p className="text-sm mb-2"><strong>High-confidence screening</strong></p>
          <ul className="text-xs space-y-1">
            <li>• Score ≥90% or ≤10%: Auto-include/exclude</li>
            <li>• 10-20% random sample validation</li>
            <li>• Cohen's Kappa ≥ 0.61 required</li>
            <li>• AI provides transparent rationale</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 bg-orange-50">
          <h4 className="font-semibold mb-2">👤 Zone 3: Human-Required</h4>
          <p className="text-sm mb-2"><strong>Borderline cases</strong></p>
          <ul className="text-xs space-y-1">
            <li>• Score 11-89%: Manual dual screening</li>
            <li>• AI provides dimension breakdown</li>
            <li>• Human makes final decision</li>
            <li>• Required for Systematic Review workflow</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4 text-sm">
        <strong>💡 Project Type Determines Thresholds:</strong>
        <ul className="mt-2 space-y-1">
          <li>• <strong>Systematic Review:</strong> 90/10 thresholds (strict) - Zone 3 human review required</li>
          <li>• <strong>Knowledge Repository:</strong> 50/20 thresholds (lenient) - Zone 3 optional, AI-only screening acceptable</li>
        </ul>
      </div>

      <h3 id="multi-dimensional-scoring">Multi-Dimensional Scoring System</h3>

      <p>
        Unlike simple keyword matching, AI-PRISMA uses <strong>6 weighted dimensions</strong> to score each paper. This provides transparency and prevents arbitrary decisions. Total score range: <strong>-20 to 50 points</strong>.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border-b">Dimension</th>
              <th className="text-left p-3 border-b">Points</th>
              <th className="text-left p-3 border-b">Evaluates</th>
              <th className="text-left p-3 border-b">Example Keywords</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-semibold">Domain</td>
              <td className="p-3">0-10</td>
              <td className="p-3">Core research area relevance</td>
              <td className="p-3 text-xs">"language learning", "chatbot", "AI tutor"</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Intervention</td>
              <td className="p-3">0-10</td>
              <td className="p-3">Specific treatment/tool</td>
              <td className="p-3 text-xs">"conversational agent", "dialogue system", "feedback"</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Method</td>
              <td className="p-3">0-5</td>
              <td className="p-3">Study design quality</td>
              <td className="p-3 text-xs">"RCT", "quasi-experimental", "qualitative"</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Outcomes</td>
              <td className="p-3">0-10</td>
              <td className="p-3">Measured results</td>
              <td className="p-3 text-xs">"speaking fluency", "pronunciation", "motivation"</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Exclusion</td>
              <td className="p-3">-20 to 0</td>
              <td className="p-3">Hard exclusions (penalize)</td>
              <td className="p-3 text-xs">"animal study", "K-12", "non-English"</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">Title Bonus</td>
              <td className="p-3">0 or 10</td>
              <td className="p-3">Direct title-query match</td>
              <td className="p-3 text-xs">Title contains all query keywords</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border rounded-lg p-4 my-4 text-sm">
        <strong>🔍 Evidence Grounding:</strong> All dimension scores must be supported by direct quotes from the abstract. If the AI cannot find supporting evidence, the dimension receives 0 points. Hallucinated quotes result in a -20 confidence penalty.
      </div>

      <div className="bg-gray-50 border rounded-lg p-5 my-6">
        <h4 className="font-semibold mb-3">📊 Example Scoring</h4>
        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border">
            <p className="font-semibold mb-2">Paper: "AI Chatbots for Speaking Practice in EFL Classrooms"</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>Domain: 10/10 (language learning)</div>
              <div>Intervention: 10/10 (conversational AI)</div>
              <div>Method: 4/5 (quasi-experimental)</div>
              <div>Outcomes: 9/10 (speaking fluency)</div>
              <div>Exclusion: 0 (no exclusion criteria)</div>
              <div>Title Bonus: 10 (all keywords match)</div>
            </div>
            <p className="font-bold mt-2 text-green-600">Total: 43/50 (86% confidence) → AUTO-INCLUDE (Zone 2)</p>
          </div>

          <div className="bg-white p-3 rounded border border-yellow-400">
            <p className="font-semibold mb-2">Paper: "Using Mobile Apps for Pronunciation Feedback"</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>Domain: 7/10 (language, not chatbots)</div>
              <div>Intervention: 5/10 (app, not conversational)</div>
              <div>Method: 3/5 (descriptive study)</div>
              <div>Outcomes: 8/10 (pronunciation)</div>
              <div>Exclusion: 0 (no exclusion criteria)</div>
              <div>Title Bonus: 0 (missing keywords)</div>
            </div>
            <p className="font-bold mt-2 text-yellow-600">Total: 23/50 (46% confidence) → HUMAN REVIEW (Zone 3)</p>
          </div>

          <div className="bg-white p-3 rounded border">
            <p className="font-semibold mb-2">Paper: "Grammar Checkers in K-12 Writing Instruction"</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>Domain: 3/10 (writing, not speaking)</div>
              <div>Intervention: 2/10 (grammar tool)</div>
              <div>Method: 3/5 (descriptive study)</div>
              <div>Outcomes: 0/10 (writing outcomes)</div>
              <div>Exclusion: -15 (K-12 excluded)</div>
              <div>Title Bonus: 0 (no keyword match)</div>
            </div>
            <p className="font-bold mt-2 text-red-600">Total: -7/50 (-14% confidence) → AUTO-EXCLUDE (Zone 2)</p>
          </div>
        </div>
      </div>

      <h3 id="transparency-validation">Transparency & Validation</h3>

      <p>
        AI-PRISMA generates <strong>detailed audit trails</strong> for every decision:
      </p>

      <ul className="space-y-2 my-4 text-sm">
        <li>✓ <strong>Score breakdown</strong>: Which keywords matched, how many points per dimension</li>
        <li>✓ <strong>AI rationale</strong>: Why the paper was included/excluded (generated by LLM)</li>
        <li>✓ <strong>Confidence score</strong>: How certain is the AI (0-100%)</li>
        <li>✓ <strong>Human override</strong>: Researchers can correct AI decisions, providing reasons</li>
        <li>✓ <strong>Exportable reports</strong>: CSV with all scores, PRISMA flowchart with counts</li>
      </ul>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">🔬 Academic Validation Status</p>
        <p className="text-sm mb-2">
          AI-PRISMA is currently <strong>under academic validation</strong>. The multi-dimensional scoring system and confidence thresholds require empirical validation for:
        </p>
        <ul className="text-sm space-y-1 mb-2">
          <li>• Inter-rater reliability (AI vs. human agreement rates)</li>
          <li>• Domain-specific weight optimization (education, medicine, etc.)</li>
          <li>• Threshold calibration (auto-include/exclude cutoffs)</li>
        </ul>
        <p className="text-sm mb-0">
          Early adopters should <strong>manually validate a sample</strong> of AI decisions (recommend 10-20% random sample) and report findings to help refine the methodology.
        </p>
      </div>

      <h3 id="project-type-thresholds">Project Type: Different Workflows</h3>

      <p>
        ScholaRAG supports two distinct project types with different workflows, thresholds, and validation requirements. Choose based on your research goals:
      </p>

      <Tabs defaultValue="systematic" className="my-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="systematic">📄 Systematic Review</TabsTrigger>
          <TabsTrigger value="repository">📚 Knowledge Repository</TabsTrigger>
        </TabsList>

        <TabsContent value="systematic" className="space-y-4">
          <h4 className="font-semibold text-lg">Systematic Review: Publication-Quality Rigor</h4>
          <p className="text-sm">
            For meta-analysis, dissertation chapters, and journal publications requiring PRISMA 2020 compliance.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-4">
            <h5 className="font-semibold mb-3">✅ Requirements (MANDATORY)</h5>
            <ul className="text-sm space-y-2">
              <li>• PICO-based 6-dimension scoring rubric</li>
              <li>• Human validation on 10-20% random sample</li>
              <li>• Cohen's Kappa ≥ 0.61 (substantial agreement)</li>
              <li>• PRISMA 2020 flow diagram with AI transparency</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 bg-white my-4">
            <h5 className="font-semibold mb-2">📊 Characteristics</h5>
            <ul className="text-sm space-y-1">
              <li><strong>Thresholds:</strong> 90/10 (strict auto-include/exclude)</li>
              <li><strong>Human review:</strong> Required for all 11-89% confidence papers</li>
              <li><strong>Final papers:</strong> 50-300 (highly selective)</li>
              <li><strong>Validation:</strong> Cohen's Kappa ≥ 0.61 on 10-20% sample</li>
              <li><strong>Output:</strong> Publication-ready systematic review + RAG chatbot</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50 my-4">
            <h5 className="font-semibold mb-2">🔄 Workflow Overview</h5>
            <div className="text-xs space-y-2 font-mono">
              <div>Stage 1-2: <span className="text-blue-600">Narrow, precise queries</span> → Target 500-2,000 papers</div>
              <div>Stage 3: <span className="text-blue-600">Strict PICO criteria</span> → Define inclusion/exclusion rules</div>
              <div>Stage 5: <span className="text-blue-600">AI screening (90/10 thresholds)</span> → 3-zone separation</div>
              <div className="ml-4">→ Zone 2: Auto-include (≥90% confidence)</div>
              <div className="ml-4">→ Zone 2: Auto-exclude (≤10% confidence)</div>
              <div className="ml-4 text-orange-600">→ Zone 3: Human review (11-89% confidence) ⚠️</div>
              <div>Stage 5b: <span className="text-orange-600">Human validation</span> → Expert review of borderline cases</div>
              <div>Stage 5c: <span className="text-orange-600">Cohen's Kappa</span> → Calculate inter-rater reliability</div>
              <div>Stage 6-7: <span className="text-green-600">RAG + PRISMA diagram</span> → Final 50-300 papers</div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 text-sm">
            <strong>⚠️ Important:</strong> This path requires significant manual effort (10-50 hours for human review). Only choose if you need publication-quality output.
          </div>
        </TabsContent>

        <TabsContent value="repository" className="space-y-4">
          <h4 className="font-semibold text-lg">Knowledge Repository: Comprehensive Coverage</h4>
          <p className="text-sm">
            For exploratory research, background reading, and building broad domain RAG chatbots without publication intent.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 my-4">
            <h5 className="font-semibold mb-3">📊 Characteristics</h5>
            <ul className="text-sm space-y-2">
              <li>• Lenient thresholds (50/20 confidence)</li>
              <li>• AI-only screening (human review optional)</li>
              <li>• No Cohen's Kappa validation required</li>
              <li>• Output: RAG chatbot for domain Q&A</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 bg-white my-4">
            <h5 className="font-semibold mb-2">🎯 Use Cases</h5>
            <ul className="text-sm space-y-1">
              <li><strong>Exploratory research:</strong> "What does the literature say about X?"</li>
              <li><strong>Background reading:</strong> Getting up to speed on a new domain</li>
              <li><strong>Broad Q&A:</strong> Interactive chatbot for literature queries</li>
              <li><strong>Rapid prototyping:</strong> Testing research questions before committing to systematic review</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50 my-4">
            <h5 className="font-semibold mb-2">🔄 Workflow Overview</h5>
            <div className="text-xs space-y-2 font-mono">
              <div>Stage 1-2: <span className="text-purple-600">Broad queries</span> → Target 10,000-50,000 papers</div>
              <div>Stage 3: <span className="text-purple-600">Minimal filtering</span> → Basic relevance criteria only</div>
              <div>Stage 5: <span className="text-purple-600">AI screening (50/20 thresholds)</span> → Lenient filtering</div>
              <div className="ml-4">→ Auto-include: ≥50% confidence (retain most papers)</div>
              <div className="ml-4">→ Auto-exclude: ≤20% confidence (only clear mismatches)</div>
              <div className="ml-4 text-gray-500">→ Human review: Optional spot-check only</div>
              <div>Stage 6-7: <span className="text-green-600">RAG chatbot</span> → Final 10,000-20,000 papers</div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-300 rounded-lg p-4 text-sm">
            <strong>✓ Advantage:</strong> Fast setup (2-5 hours total), no manual validation required. Perfect for exploratory research and rapid prototyping.
          </div>

          <div className="bg-red-50 border border-red-300 rounded-lg p-4 text-sm mt-4">
            <strong>⛔ Not Suitable For:</strong>
            <ul className="mt-2 space-y-1 text-xs">
              <li>• Academic journal publication</li>
              <li>• Meta-analysis or quantitative synthesis</li>
              <li>• Dissertation systematic review chapter</li>
              <li>• Any work requiring PRISMA 2020 compliance</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <h5 className="font-semibold mb-2">💡 Decision Guide</h5>
        <div className="text-sm space-y-2">
          <p><strong>Choose Systematic Review if:</strong></p>
          <ul className="ml-4 space-y-1 text-xs">
            <li>✓ You plan to publish in academic journals (BMJ, Lancet, PLOS, etc.)</li>
            <li>✓ You're writing a dissertation/thesis systematic review chapter</li>
            <li>✓ You need meta-analysis or quantitative synthesis</li>
            <li>✓ You require PRISMA 2020 compliance</li>
          </ul>
          <p className="mt-3"><strong>Choose Knowledge Repository if:</strong></p>
          <ul className="ml-4 space-y-1 text-xs">
            <li>✓ You're doing exploratory research or background reading</li>
            <li>✓ You need comprehensive domain coverage (10,000+ papers)</li>
            <li>✓ You want a RAG chatbot for quick literature queries</li>
            <li>✓ You do NOT plan to publish a systematic review paper</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-muted mt-6">
        <strong>Configuration:</strong> Project type is set in Stage 1 (Research Domain Setup) and cannot be changed after Stage 3. The system auto-adjusts all screening behavior, thresholds, and validation requirements based on your choice. See <a href="/guide/04-tutorial" className="underline">Stage 3 tutorial</a> for detailed PRISMA configuration.
      </p>

      <h2 id="database-strategy">Database Strategy: Open Access + Institutional</h2>

      <p>
        ScholaRAG supports two types of academic databases: <strong>open-access APIs</strong> (with PDFs) and <strong>institutional subscription APIs</strong> (metadata only).
      </p>

      <h3 id="open-access-databases">Open-Access Databases (Primary)</h3>

      <p>
        These databases provide <strong>direct PDF access</strong> through their APIs, enabling full automation without institutional subscriptions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="border rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">
            <a href="https://www.semanticscholar.org/" target="_blank" rel="noopener noreferrer" className="underline">
              Semantic Scholar
            </a>
          </h4>
          <p className="text-sm text-muted mb-3">AI-powered academic search</p>
          <div className="space-y-1 text-xs">
            <p><strong>Coverage:</strong> 200M+ papers across all fields</p>
            <p><strong>Open Access:</strong> ~40% have PDF URLs</p>
            <p><strong>API:</strong> Free, no authentication required</p>
            <p><strong>Best for:</strong> Broad interdisciplinary searches</p>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">
            <a href="https://openalex.org/" target="_blank" rel="noopener noreferrer" className="underline">
              OpenAlex
            </a>
          </h4>
          <p className="text-sm text-muted mb-3">Open catalog of scholarly papers</p>
          <div className="space-y-1 text-xs">
            <p><strong>Coverage:</strong> 240M+ works</p>
            <p><strong>Open Access:</strong> ~50% with OA URLs</p>
            <p><strong>API:</strong> Free, polite pool available</p>
            <p><strong>Best for:</strong> Comprehensive coverage</p>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">
            <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" className="underline">
              arXiv
            </a>
          </h4>
          <p className="text-sm text-muted mb-3">Preprint repository</p>
          <div className="space-y-1 text-xs">
            <p><strong>Coverage:</strong> 2.4M+ preprints</p>
            <p><strong>Open Access:</strong> 100% free PDFs</p>
            <p><strong>API:</strong> Free XML API</p>
            <p><strong>Best for:</strong> CS, physics, math, stats</p>
          </div>
        </div>
      </div>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">✅ Combined Strategy</p>
        <p className="text-sm mb-2">
          ScholaRAG queries <strong>all three</strong> and deduplicates by DOI/title. This achieves:
        </p>
        <ul className="text-sm space-y-1 mb-0">
          <li>✓ ~50-60% overall PDF retrieval success</li>
          <li>✓ Maximum coverage across domains</li>
          <li>✓ Fallback when one source is incomplete</li>
          <li>✓ No institutional subscriptions required</li>
        </ul>
      </div>

      <h3 id="institutional-databases">Institutional Databases (Optional)</h3>

      <p>
        If your institution has subscriptions to Scopus, Web of Science, or PubMed, ScholaRAG can fetch <strong>metadata only</strong> through their APIs. PDFs must be downloaded separately.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="border rounded-lg p-4 bg-gray-50">
          <h4 className="font-semibold mb-2">
            <a href="https://dev.elsevier.com/sc_apis.html" target="_blank" rel="noopener noreferrer" className="underline">
              Scopus
            </a>
          </h4>
          <p className="text-sm text-muted mb-3">Elsevier's abstract & citation database</p>
          <div className="space-y-1 text-xs">
            <p><strong>Coverage:</strong> 84M+ records, all fields</p>
            <p><strong>API Access:</strong> Requires institutional API key + Inst Token</p>
            <p><strong>Data Available:</strong> Title, abstract, DOI, authors, citations</p>
            <p><strong>PDFs:</strong> ❌ Not available via API (metadata only)</p>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-gray-50">
          <h4 className="font-semibold mb-2">
            <a href="https://developer.clarivate.com/apis/wos" target="_blank" rel="noopener noreferrer" className="underline">
              Web of Science
            </a>
          </h4>
          <p className="text-sm text-muted mb-3">Clarivate's research database</p>
          <div className="space-y-1 text-xs">
            <p><strong>Coverage:</strong> 171M+ records, curated journals</p>
            <p><strong>API Access:</strong> Requires institutional API key</p>
            <p><strong>Data Available:</strong> Title, abstract, DOI, authors, WoS ID</p>
            <p><strong>PDFs:</strong> ❌ Not available via API (metadata only)</p>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-gray-50">
          <h4 className="font-semibold mb-2">
            <a href="https://www.ncbi.nlm.nih.gov/home/develop/api/" target="_blank" rel="noopener noreferrer" className="underline">
              PubMed
            </a>
          </h4>
          <p className="text-sm text-muted mb-3">NCBI's biomedical database</p>
          <div className="space-y-1 text-xs">
            <p><strong>Coverage:</strong> 36M+ biomedical literature</p>
            <p><strong>API Access:</strong> Free (E-utilities API), no key required</p>
            <p><strong>Data Available:</strong> Title, abstract, PMID, authors, MeSH terms</p>
            <p><strong>PDFs:</strong> ⚠️ Some via PubMed Central (PMC), most metadata-only</p>
          </div>
        </div>
      </div>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Important: Metadata-Only Limitation</p>
        <p className="text-sm mb-2">
          Institutional APIs provide <strong>bibliographic metadata</strong> (title, abstract, DOI) but <strong>NOT PDF files</strong>. You must:
        </p>
        <ul className="text-sm space-y-1 mb-2">
          <li>1. Fetch metadata via API (automated)</li>
          <li>2. Download PDFs manually via your institution's library portal (or use DOI links)</li>
          <li>3. Match filenames to DOIs using ScholaRAG's PDF matcher</li>
        </ul>
        <p className="text-sm mb-0">
          <strong>Why metadata-only?</strong> Publisher licensing restrictions prevent API-based PDF distribution. Even with institutional access, PDFs must be accessed through authenticated library gateways (e.g., EZProxy, Shibboleth).
        </p>
      </div>

      <h3 id="when-to-use-institutional">When to Use Institutional Databases</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="border rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-3">✅ Good Use Cases</h4>
          <ul className="text-sm space-y-2">
            <li><strong>High-quality metadata</strong>: Need accurate citation counts, journal rankings, or curated indexes</li>
            <li><strong>Complementary search</strong>: Combine with open-access APIs to maximize coverage</li>
            <li><strong>Domain-specific</strong>: PubMed for medicine, Scopus for engineering</li>
            <li><strong>Publication-ready</strong>: Scopus/WoS required for some journal submissions</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 bg-gray-50">
          <h4 className="font-semibold mb-3">❌ Not Ideal For</h4>
          <ul className="text-sm space-y-2">
            <li><strong>Full automation</strong>: Manual PDF download breaks workflow</li>
            <li><strong>Large-scale projects</strong>: Downloading 1,000+ PDFs manually is impractical</li>
            <li><strong>No institutional access</strong>: API keys require institutional subscription</li>
            <li><strong>PDF-only needs</strong>: If you only need full text, stick to open-access APIs</li>
          </ul>
        </div>
      </div>

      <h3 id="setup-institutional">Setup Instructions (Brief)</h3>

      <p className="text-sm">
        To enable institutional databases in ScholaRAG:
      </p>

      <div className="bg-gray-50 border rounded-lg p-4 my-4">
        <p className="text-sm font-semibold mb-2">1. Obtain API Keys</p>
        <ul className="text-xs space-y-1 mb-3">
          <li>• <strong>Scopus</strong>: Request from your library → Get API Key + Inst Token</li>
          <li>• <strong>Web of Science</strong>: Contact Clarivate rep → Get API Key</li>
          <li>• <strong>PubMed</strong>: Optional (no key required, but recommended for higher rate limits)</li>
        </ul>

        <p className="text-sm font-semibold mb-2">2. Add to <code className="text-xs">.env</code> file</p>
        <CodeBlock language="bash" code={`SCOPUS_API_KEY=your_scopus_key_here
SCOPUS_INST_TOKEN=your_institution_token
WOS_API_KEY=your_wos_key_here
PUBMED_API_KEY=your_pubmed_key  # Optional`} />

        <p className="text-sm font-semibold mb-2 mt-3">3. Enable in <code className="text-xs">config.yaml</code></p>
        <CodeBlock language="yaml" code={`databases:
  open_access:
    semantic_scholar: true
    openalex: true
    arxiv: true

  institutional:  # NEW: Enable institutional APIs
    scopus:
      enabled: true
    web_of_science:
      enabled: true
    pubmed:
      enabled: false  # Only if needed`} />
      </div>

      <p className="text-sm text-muted">
        <strong>Full guide:</strong> See <code className="text-xs">docs/INSTITUTIONAL_APIS.md</code> in the ScholaRAG repository for detailed setup, query syntax, and troubleshooting.
      </p>

      <h3 id="hybrid-workflow">Recommended Hybrid Workflow</h3>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
        <h4 className="font-semibold mb-3">🎯 Best Practice: Open Access First</h4>
        <ol className="text-sm space-y-2 ml-4">
          <li><strong>Stage 1:</strong> Fetch from Semantic Scholar + OpenAlex + arXiv (get ~50-60% PDFs automatically)</li>
          <li><strong>Stage 2:</strong> Run PRISMA screening on available metadata</li>
          <li><strong>Stage 3:</strong> Identify high-priority papers missing PDFs</li>
          <li><strong>Stage 4:</strong> Query Scopus/WoS for those specific DOIs (fill metadata gaps)</li>
          <li><strong>Stage 5:</strong> Manually download remaining PDFs via library portal (batch ~50-200 papers, not 10,000)</li>
        </ol>
        <p className="text-xs text-muted mt-3">
          This minimizes manual work while maximizing coverage. Most papers (80%+) come from open-access APIs with PDFs included.
        </p>
      </div>

      <h2 id="rag-vs-chatgpt">RAG vs. Generic Chatbots: Why RAG?</h2>

      <p>
        You might wonder: "Why not just ask ChatGPT or Claude about my research topic?" Here's why RAG is essential for academic work:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg p-5 bg-white">
          <h4 className="font-semibold mb-3">❌ Direct ChatGPT/Claude</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold mb-1">Training Data Cutoff</p>
              <p className="text-muted">Doesn't know papers published after training</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Hallucinations</p>
              <p className="text-muted">Can invent citations that don't exist</p>
            </div>
            <div>
              <p className="font-semibold mb-1">No Verification</p>
              <p className="text-muted">Can't check if claims are accurate</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Generic Knowledge</p>
              <p className="text-muted">Doesn't focus on your specific corpus</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-gray-900 rounded-lg p-5 bg-gray-50">
          <h4 className="font-semibold mb-3">✅ ScholaRAG System</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold mb-1">Current & Complete</p>
              <p className="text-gray-900">Searches up-to-date databases (2025)</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Grounded Answers</p>
              <p className="text-gray-900">Every claim backed by actual paper in your DB</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Verifiable Citations</p>
              <p className="text-gray-900">Includes paper titles, authors, page numbers</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Your Curated Knowledge</p>
              <p className="text-gray-900">Only searches PRISMA-screened papers</p>
            </div>
          </div>
        </div>
      </div>

      <h3 id="rag-workflow">How RAG Works</h3>

      <Mermaid chart={`
sequenceDiagram
    participant U as Researcher
    participant R as ScholaRAG
    participant V as Vector DB<br/>(Your 67 Papers)
    participant L as Claude/GPT

    U->>R: "What are the main findings?"
    R->>V: Search similar content
    V-->>R: 5 most relevant paper chunks
    R->>L: Context + Question
    L-->>R: Answer based ONLY on context
    R-->>U: Answer + Citations

    Note over V: Semantic Search<br/>(finds relevant papers)
    Note over L: Grounded Generation<br/>(no hallucinations)
      `} />

      <p className="mt-6">
        <strong>Key insight:</strong> The LLM (Claude/GPT) doesn't "remember" papers—it only sees the 5-10 most relevant chunks you give it. This prevents hallucinations and ensures citations are real.
      </p>

      <h2 id="vector-databases">Why Vector Databases?</h2>

      <p>
        Traditional databases use exact keyword matching. Vector databases enable <strong>semantic search</strong>—finding papers by meaning, not just keywords.
      </p>

      <div className="bg-gray-50 border rounded-lg p-5 my-6">
        <h4 className="font-semibold mb-3">Example: Semantic Search</h4>
        <div className="space-y-3 text-sm">
          <div className="bg-white p-3 rounded border">
            <p className="font-semibold mb-1">Your Question:</p>
            <p>"What are the benefits of conversational AI for pronunciation?"</p>
          </div>
          <div className="bg-white p-3 rounded border">
            <p className="font-semibold mb-1">Papers Found (semantically similar):</p>
            <ul className="mt-2 space-y-1">
              <li>✓ "Effects of chatbot interaction on L2 speaking fluency"</li>
              <li>✓ "Dialogue systems for accent reduction in ESL learners"</li>
              <li>✓ "AI-powered feedback on oral proficiency"</li>
            </ul>
            <p className="text-xs text-muted mt-2">
              Note: None use exact words "conversational AI" or "pronunciation"
            </p>
          </div>
        </div>
      </div>

      <h3 id="chromadb-choice">Why ChromaDB for ScholaRAG?</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">
            <a href="https://www.trychroma.com/" target="_blank" rel="noopener noreferrer" className="underline">
              ChromaDB
            </a> (Recommended)
          </h4>
          <ul className="text-sm space-y-2">
            <li>✓ Zero configuration setup</li>
            <li>✓ Works locally (no cloud required)</li>
            <li>✓ Handles 50-500 papers easily</li>
            <li>✓ Python-native integration</li>
            <li>✓ Open-source and free</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 bg-gray-50">
          <h4 className="font-semibold mb-2">Alternatives</h4>
          <p className="text-sm mb-3"><strong>FAISS:</strong> For 10,000+ papers (complex setup)</p>
          <p className="text-sm mb-3"><strong>Qdrant:</strong> For cloud deployment (requires server)</p>
          <p className="text-sm mb-0"><strong>pgvector:</strong> For PostgreSQL users (complex)</p>
        </div>
      </div>

      <div className="callout">
        <p className="font-semibold mb-2">📝 ScholaRAG Default</p>
        <p className="mb-0">
          Start with <strong>ChromaDB</strong>. It's what Claude Code sets up automatically. You can migrate to FAISS/Qdrant later if you scale to thousands of papers.
        </p>
      </div>

      <h2 id="embeddings-simple">What Are Embeddings? (Simplified)</h2>

      <p>
        Embeddings convert text into numbers (vectors) that capture meaning. Similar concepts get similar numbers, enabling semantic search.
      </p>

      <div className="bg-gray-50 border rounded-lg p-5 my-6">
        <h4 className="font-semibold mb-3">Intuitive Example</h4>
        <div className="space-y-2 text-sm font-mono">
          <p>"Machine Learning" → [0.23, -0.45, 0.12, ...] <span className="text-xs text-muted">(768 numbers)</span></p>
          <p>"Artificial Intelligence" → [0.21, -0.43, 0.15, ...] <span className="text-xs text-muted">(close to above)</span></p>
          <p>"Pizza Recipe" → [-0.67, 0.82, -0.34, ...] <span className="text-xs text-muted">(far from above)</span></p>
        </div>
        <p className="text-xs text-muted mt-3">
          The database calculates distance between vectors to find similar papers.
        </p>
      </div>

      <h3 id="embedding-model-choice">Which Embedding Model?</h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border-b">Model</th>
              <th className="text-left p-3 border-b">Cost</th>
              <th className="text-left p-3 border-b">Quality</th>
              <th className="text-left p-3 border-b">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-semibold">
                <a href="https://openai.com/index/new-embedding-models-and-api-updates/" target="_blank" rel="noopener noreferrer" className="underline">
                  OpenAI text-embedding-3-small
                </a>
              </td>
              <td className="p-3">$0.02 / 1M tokens</td>
              <td className="p-3">⭐⭐⭐⭐</td>
              <td className="p-3">Most users (default)</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">
                <a href="https://huggingface.co/sentence-transformers" target="_blank" rel="noopener noreferrer" className="underline">
                  sentence-transformers
                </a>
              </td>
              <td className="p-3">Free (local)</td>
              <td className="p-3">⭐⭐⭐</td>
              <td className="p-3">Budget-conscious</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">Voyage AI</td>
              <td className="p-3">$0.10 / 1M tokens</td>
              <td className="p-3">⭐⭐⭐⭐⭐</td>
              <td className="p-3">Highest accuracy needed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout">
        <p className="font-semibold mb-2">📝 ScholaRAG Default</p>
        <p className="mb-0">
          Uses <strong>OpenAI text-embedding-3-small</strong>. For a typical project (100 papers), embedding costs ~$0.50 total. High quality, low cost.
        </p>
      </div>

      <h2 id="putting-it-together">Putting It All Together</h2>

      <Mermaid chart={`
graph TD
    A[PRISMA Screening<br/>Stages 1-3] --> B[1,243 papers]
    B --> C[AI-PRISMA Rubric]
    C --> D[67 screened papers]
    D --> E[Download PDFs]
    E --> F[Chunk into passages]
    F --> G[Generate embeddings<br/>OpenAI API]
    G --> H[ChromaDB<br/>Vector Database]
    H --> I[Ready for RAG queries]

    style A fill:#e0e7ff
    style C fill:#fce7f3
    style H fill:#dcfce7
    style I fill:#dcfce7
      `} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="text-xs font-semibold text-gray-600 mb-2">STEP 1-3</p>
          <p className="font-semibold mb-2">PRISMA Screening</p>
          <p className="text-sm text-muted">Ensures only high-quality, relevant papers</p>
        </div>
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="text-xs font-semibold text-gray-600 mb-2">STEP 4-5</p>
          <p className="font-semibold mb-2">Vector Database</p>
          <p className="text-sm text-muted">Enables semantic search across papers</p>
        </div>
        <div className="border rounded-lg p-4 bg-gray-50">
          <p className="text-xs font-semibold text-gray-600 mb-2">STEP 6-7</p>
          <p className="font-semibold mb-2">RAG Queries</p>
          <p className="text-sm text-muted">Grounded answers with real citations</p>
        </div>
      </div>

      <h2 id="next-steps">What's Next?</h2>

      <p>
        Now that you understand <strong>why</strong> ScholaRAG uses these technologies, you're ready to build your own system. The <Link href="/guide/04-tutorial" className="underline">Complete Tutorial</Link> walks you through all 7 stages with a real example.
      </p>

      <h2 id="further-reading">Learn More</h2>

      <div className="space-y-3 my-6 text-sm">
        <p>
          <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            PRISMA 2020 Official Guidelines
          </a> — Comprehensive guide to systematic reviews
        </p>
        <p>
          <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            RAG Paper (Lewis et al., 2020)
          </a> — Original research on Retrieval-Augmented Generation
        </p>
        <p>
          <a href="https://www.trychroma.com/docs" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            ChromaDB Documentation
          </a> — Learn more about vector databases
        </p>
        <p>
          <a href="https://www.anthropic.com/news/contextual-retrieval" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            Contextual Retrieval (Anthropic)
          </a> — Advanced RAG techniques
        </p>
      </div>
    </GuideLayout>
  )
}
