import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Mermaid from '@/components/Mermaid'

export default function BestPracticesPage() {
  return (
    <GuideLayout>
      <h1>Best Practices</h1>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Building a high-quality RAG system for systematic literature reviews requires more than just technical implementation. This chapter covers research methodology best practices, citation management, reproducibility guidelines, and ethical considerations to ensure your ResearcherRAG system produces reliable, trustworthy results that meet academic standards.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg p-6">
          <div className="text-3xl mb-3">📚</div>
          <h3 className="font-semibold mb-2">Research Methodology</h3>
          <p className="text-sm text-muted-foreground">
            Follow systematic review standards and PRISMA guidelines for transparent, reproducible research.
          </p>
        </div>
        <div className="border rounded-lg p-6">
          <div className="text-3xl mb-3">✅</div>
          <h3 className="font-semibold mb-2">Quality Assurance</h3>
          <p className="text-sm text-muted-foreground">
            Implement validation checks, citation accuracy verification, and regular system audits.
          </p>
        </div>
        <div className="border rounded-lg p-6">
          <div className="text-3xl mb-3">🔄</div>
          <h3 className="font-semibold mb-2">Reproducibility</h3>
          <p className="text-sm text-muted-foreground">
            Document every decision, version your data, and ensure others can replicate your work.
          </p>
        </div>
        <div className="border rounded-lg p-6">
          <div className="text-3xl mb-3">⚖️</div>
          <h3 className="font-semibold mb-2">Ethics & Integrity</h3>
          <p className="text-sm text-muted-foreground">
            Maintain academic integrity, handle data responsibly, and avoid AI-generated biases.
          </p>
        </div>
      </div>

      <h2 id="research-questions">Formulating Research Questions</h2>

      <p>
        A well-defined research question is the foundation of any systematic review. Use structured frameworks to clarify your question before building your RAG system.
      </p>

      <h3 id="pico-framework">PICO Framework</h3>

      <p>
        For clinical and health research, use the <strong>PICO</strong> framework:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 p-4">
          <h4 className="font-semibold mb-2">P - Population/Problem</h4>
          <p className="text-sm mb-2">Who are you studying?</p>
          <p className="text-sm text-muted-foreground italic">
            Example: "Healthcare organizations in developing countries"
          </p>
        </div>
        <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20 p-4">
          <h4 className="font-semibold mb-2">I - Intervention</h4>
          <p className="text-sm mb-2">What is being implemented?</p>
          <p className="text-sm text-muted-foreground italic">
            Example: "Electronic health record (EHR) systems"
          </p>
        </div>
        <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20 p-4">
          <h4 className="font-semibold mb-2">C - Comparison</h4>
          <p className="text-sm mb-2">Compared to what?</p>
          <p className="text-sm text-muted-foreground italic">
            Example: "Traditional paper-based systems or no EHR"
          </p>
        </div>
        <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20 p-4">
          <h4 className="font-semibold mb-2">O - Outcome</h4>
          <p className="text-sm mb-2">What are you measuring?</p>
          <p className="text-sm text-muted-foreground italic">
            Example: "Adoption success rates, barriers, facilitators"
          </p>
        </div>
      </div>

      <div className="bg-muted/30 border-l-4 border-blue-500 p-4 my-6">
        <p className="font-semibold mb-2">PICO Research Question:</p>
        <p className="italic">
          "In <strong>healthcare organizations in developing countries</strong> (P), how does the implementation of <strong>electronic health record systems</strong> (I) compared to <strong>traditional paper-based systems</strong> (C) affect <strong>adoption success rates and identify barriers/facilitators</strong> (O)?"
        </p>
      </div>

      <h3 id="spider-framework">SPIDER Framework</h3>

      <p>
        For qualitative and mixed-methods research, use the <strong>SPIDER</strong> framework:
      </p>

      <ul className="space-y-2 my-4">
        <li><strong>S - Sample:</strong> Who is the sample or population?</li>
        <li><strong>P - Phenomenon of Interest:</strong> What are you studying?</li>
        <li><strong>D - Design:</strong> What study designs are relevant?</li>
        <li><strong>E - Evaluation:</strong> What outcomes or themes?</li>
        <li><strong>R - Research type:</strong> Qualitative, quantitative, mixed?</li>
      </ul>

      <Mermaid chart={'graph TD\n    A[Broad Research Area] --> B{Choose Framework}\n    B -->|Clinical/Health| C[PICO]\n    B -->|Qualitative/Mixed| D[SPIDER]\n    B -->|Technology/Social| E[5W1H]\n\n    C --> F[Define Each Component]\n    D --> F\n    E --> F\n\n    F --> G[Combine into<br/>Research Question]\n    G --> H{Specific Enough?}\n    H -->|No| I[Add Constraints<br/>Time/Geography]\n    I --> H\n    H -->|Yes| J[Translate to<br/>Search Keywords]\n    J --> K[Ready for<br/>Query Strategy]\n\n    style A fill:#e0e7ff\n    style K fill:#dcfce7\n    style B fill:#fef3c7\n    style H fill:#fef3c7'} />

      <h2 id="inclusion-criteria">Designing Inclusion Criteria</h2>

      <p>
        Clear, well-defined inclusion and exclusion criteria are essential for PRISMA compliance and reproducibility.
      </p>

      <h3 id="criteria-checklist">Criteria Checklist</h3>

      <p>
        Ensure your criteria cover all necessary dimensions:
      </p>

      <div className="border rounded-lg my-6">
        <div className="border-b p-4 bg-muted/30">
          <h4 className="font-semibold">Essential Criteria Dimensions</h4>
        </div>
        <div className="p-4 space-y-4">
          <details className="border-l-4 border-blue-500 pl-4">
            <summary className="cursor-pointer font-semibold mb-2">1. Publication Type</summary>
            <ul className="text-sm space-y-1 ml-4">
              <li>✓ Peer-reviewed journal articles</li>
              <li>✓ Conference papers (with full text)</li>
              <li>✓ Book chapters (if academically rigorous)</li>
              <li>✗ Abstracts only, posters, white papers</li>
              <li>✗ Opinion pieces, editorials, news articles</li>
            </ul>
          </details>

          <details className="border-l-4 border-green-500 pl-4">
            <summary className="cursor-pointer font-semibold mb-2">2. Study Design</summary>
            <ul className="text-sm space-y-1 ml-4">
              <li>✓ Empirical studies (quantitative/qualitative)</li>
              <li>✓ Case studies with sufficient detail</li>
              <li>✓ Systematic reviews (if meta-analysis)</li>
              <li>✗ Literature reviews without original data</li>
              <li>✗ Purely theoretical papers (unless specified)</li>
            </ul>
          </details>

          <details className="border-l-4 border-yellow-500 pl-4">
            <summary className="cursor-pointer font-semibold mb-2">3. Temporal Scope</summary>
            <ul className="text-sm space-y-1 ml-4">
              <li>✓ Define publication date range (e.g., 2010-2024)</li>
              <li>✓ Justify timeframe based on field evolution</li>
              <li>✓ Consider landmark papers outside range if foundational</li>
            </ul>
          </details>

          <details className="border-l-4 border-purple-500 pl-4">
            <summary className="cursor-pointer font-semibold mb-2">4. Geographic Scope</summary>
            <ul className="text-sm space-y-1 ml-4">
              <li>✓ Specify regions if location matters</li>
              <li>✓ Include/exclude based on research context</li>
              <li>✓ Consider developed vs. developing countries</li>
            </ul>
          </details>

          <details className="border-l-4 border-red-500 pl-4">
            <summary className="cursor-pointer font-semibold mb-2">5. Language</summary>
            <ul className="text-sm space-y-1 ml-4">
              <li>✓ English-only (most common, but acknowledge limitation)</li>
              <li>✓ Multi-language (requires translation resources)</li>
              <li>✓ Document language restrictions in methodology</li>
            </ul>
          </details>

          <details className="border-l-4 border-pink-500 pl-4">
            <summary className="cursor-pointer font-semibold mb-2">6. Domain-Specific</summary>
            <ul className="text-sm space-y-1 ml-4">
              <li>✓ Specific technologies, methods, or contexts</li>
              <li>✓ Population characteristics (age, setting, etc.)</li>
              <li>✓ Outcome measures or variables of interest</li>
            </ul>
          </details>
        </div>
      </div>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Avoid Overly Restrictive Criteria</p>
        <p className="mb-0">
          While specificity is important, overly restrictive criteria can result in too few papers (&lt;30) for meaningful analysis. If your initial screening yields very few results, consider: (1) broadening timeframe, (2) including related methodologies, or (3) expanding geographic scope.
        </p>
      </div>

      <h2 id="citation-management">Citation Management</h2>

      <p>
        Accurate citations are critical for academic integrity. Your RAG system should maintain rigorous citation practices.
      </p>

      <h3 id="citation-formats">Supported Citation Formats</h3>

      <pre className="bg-muted p-3 rounded overflow-x-auto text-sm my-4"><code>{`# citation_formats.yaml

formats:
  apa:
    template: "{authors} ({year}). {title}. {journal}, {volume}({issue}), {pages}. {doi}"
    example: "Smith, J., & Johnson, M. (2023). Technology adoption in healthcare. Journal of Medical Informatics, 45(2), 123-145. https://doi.org/10.1234/jmi.2023.456"

  chicago:
    template: "{authors}. \\"{title}.\\" {journal} {volume}, no. {issue} ({year}): {pages}. {doi}."
    example: "Smith, John, and Mary Johnson. \\"Technology Adoption in Healthcare.\\" Journal of Medical Informatics 45, no. 2 (2023): 123-145. https://doi.org/10.1234/jmi.2023.456."

  ieee:
    template: "{authors}, \\"{title},\\" {journal}, vol. {volume}, no. {issue}, pp. {pages}, {year}. doi: {doi}"
    example: "J. Smith and M. Johnson, \\"Technology adoption in healthcare,\\" Journal of Medical Informatics, vol. 45, no. 2, pp. 123-145, 2023. doi: 10.1234/jmi.2023.456"

  inline:
    template: "[{author_surname}, {year}]"
    example: "[Smith, 2023]"`}</code></pre>

      <h3 id="citation-validation">Citation Validation Pipeline</h3>

      <Mermaid chart={'sequenceDiagram\n    participant R as RAG System\n    participant L as LLM\n    participant V as Validator\n    participant D as DOI Registry\n\n    R->>L: Generate answer with citations\n    L-->>R: Response with [Author, Year]\n    R->>V: Validate each citation\n\n    loop For each citation\n        V->>V: Check citation exists in DB\n        V->>V: Verify claim matches source\n        V->>D: Verify DOI is valid\n        D-->>V: DOI metadata\n        V->>V: Compare metadata\n    end\n\n    V-->>R: Validation report\n    R->>R: Flag invalid citations\n    R->>R: Add links to full papers\n    R-->>R: Return validated response'} />

      <p>
        Implement automatic citation validation:
      </p>

      <pre className="bg-muted p-3 rounded overflow-x-auto text-sm my-4"><code>{`import re
from typing import List, Dict

def validate_citations(response_text: str, source_papers: List[Dict]) -> Dict:
    """Validate citations in LLM response"""

    # Extract citations (format: [Author, Year])
    citation_pattern = r'\\[([^,]+),\\s*(\\d{4})\\]'
    citations = re.findall(citation_pattern, response_text)

    validation_results = {
        'total_citations': len(citations),
        'valid': [],
        'invalid': [],
        'warnings': []
    }

    # Build lookup index
    paper_index = {
        f"{p['author_surname']}, {p['year']}": p
        for p in source_papers
    }

    for author, year in citations:
        key = f"{author}, {year}"

        # Check if citation exists
        if key not in paper_index:
            validation_results['invalid'].append({
                'citation': f"[{author}, {year}]",
                'reason': 'Paper not in knowledge base',
                'severity': 'error'
            })
            continue

        paper = paper_index[key]

        # Verify the cited paper was actually retrieved for this query
        if paper['chunk_id'] not in retrieved_chunk_ids:
            validation_results['warnings'].append({
                'citation': f"[{author}, {year}]",
                'reason': 'Paper exists but was not retrieved for this query',
                'severity': 'warning'
            })

        # Verify DOI if available
        if paper.get('doi'):
            doi_valid = verify_doi(paper['doi'])
            if not doi_valid:
                validation_results['warnings'].append({
                    'citation': f"[{author}, {year}]",
                    'reason': 'DOI validation failed',
                    'severity': 'warning'
                })

        validation_results['valid'].append({
            'citation': f"[{author}, {year}]",
            'paper': paper,
            'doi': paper.get('doi'),
            'url': f"https://doi.org/{paper['doi']}" if paper.get('doi') else None
        })

    return validation_results`}</code></pre>

      <h2 id="reproducibility">Ensuring Reproducibility</h2>

      <p>
        Reproducibility is a cornerstone of scientific research. Document every aspect of your RAG system to allow others to replicate your work.
      </p>

      <h3 id="documentation-checklist">Reproducibility Checklist</h3>

      <div className="border rounded-lg my-6">
        <div className="grid grid-cols-1 divide-y">
          <div className="p-4 bg-muted/30">
            <h4 className="font-semibold flex items-center gap-2">
              <span className="text-green-600">✓</span> What to Document
            </h4>
          </div>

          <div className="p-4">
            <h5 className="font-semibold mb-2">1. Search Strategy</h5>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Exact query strings for each database</li>
              <li>• Date range and filters applied</li>
              <li>• Number of results per database</li>
              <li>• Search date (YYYY-MM-DD)</li>
            </ul>
          </div>

          <div className="p-4 bg-muted/10">
            <h5 className="font-semibold mb-2">2. PRISMA Process</h5>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Complete inclusion/exclusion criteria</li>
              <li>• Number of papers at each stage</li>
              <li>• Exclusion reasons (with counts)</li>
              <li>• PRISMA flow diagram</li>
              <li>• Screening decisions (with rationale for borderline cases)</li>
            </ul>
          </div>

          <div className="p-4">
            <h5 className="font-semibold mb-2">3. RAG Configuration</h5>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Embedding model (exact version)</li>
              <li>• Vector database settings</li>
              <li>• Chunking strategy (size, overlap)</li>
              <li>• Retrieval parameters (top-k, threshold)</li>
              <li>• LLM model and settings (temperature, max_tokens)</li>
            </ul>
          </div>

          <div className="p-4 bg-muted/10">
            <h5 className="font-semibold mb-2">4. Software Versions</h5>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Python version</li>
              <li>• All package versions (requirements.txt with pinned versions)</li>
              <li>• Operating system</li>
              <li>• Hardware specifications (if relevant)</li>
            </ul>
          </div>

          <div className="p-4">
            <h5 className="font-semibold mb-2">5. Data Provenance</h5>
            <ul className="text-sm space-y-1 ml-4">
              <li>• List of all papers in final dataset (with DOIs)</li>
              <li>• Metadata for each paper (title, authors, year, journal)</li>
              <li>• Access dates for all papers</li>
              <li>• Any data transformations applied</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 id="metadata-schema">Metadata Schema</h3>

      <p>
        Maintain comprehensive metadata for each paper in your system:
      </p>

      <pre className="bg-muted p-3 rounded overflow-x-auto text-sm my-4"><code>{`# paper_metadata_schema.json
{
  "paper_id": "smith2023_tech_adoption",
  "doi": "10.1234/jmi.2023.456",
  "title": "Technology Adoption in Healthcare Organizations",
  "authors": [
    {"name": "John Smith", "affiliation": "University of Health"},
    {"name": "Mary Johnson", "affiliation": "Medical Institute"}
  ],
  "year": 2023,
  "journal": "Journal of Medical Informatics",
  "volume": 45,
  "issue": 2,
  "pages": "123-145",
  "abstract": "This study investigates...",
  "keywords": ["technology adoption", "healthcare", "EHR"],

  # PRISMA metadata
  "prisma": {
    "date_retrieved": "2024-01-15",
    "database_source": "PubMed",
    "inclusion_decision": "include",
    "screening_date": "2024-01-20",
    "screener": "Researcher A"
  },

  # RAG system metadata
  "rag": {
    "ingestion_date": "2024-01-25",
    "num_chunks": 17,
    "chunk_ids": ["smith2023_chunk_001", "smith2023_chunk_002", ...],
    "full_text_available": true,
    "extraction_method": "pymupdf"
  },

  # Citation metadata
  "citations": {
    "cited_by_count": 12,
    "references_count": 45,
    "citation_context": "Widely cited in EHR adoption literature"
  }
}`}</code></pre>

      <h2 id="quality-assurance">Quality Assurance</h2>

      <p>
        Implement regular quality checks to maintain system accuracy and reliability.
      </p>

      <h3 id="validation-tests">Regular Validation Tests</h3>

      <div className="grid grid-cols-1 gap-4 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📊 Weekly: Golden Dataset Testing</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Maintain a set of 20-30 test queries with known correct answers
          </p>
          <pre className="bg-muted p-2 rounded text-xs"><code>{`# Run weekly validation
python validate_golden_dataset.py \\
  --queries golden_queries.json \\
  --expected golden_answers.json \\
  --threshold 0.85

# Report:
# - 28/30 queries passed (93.3%)
# - 2 queries with low similarity
# - Average response quality: 0.91`}</code></pre>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">🔍 Monthly: Citation Audit</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Manually verify a random sample of 50 citations
          </p>
          <ul className="text-sm space-y-1">
            <li>✓ Citation exists in knowledge base</li>
            <li>✓ Cited claim matches source material</li>
            <li>✓ No hallucinated citations</li>
            <li>✓ DOI/URL is valid and accessible</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📈 Quarterly: Retrieval Metrics</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Measure retrieval quality with standard IR metrics
          </p>
          <ul className="text-sm space-y-1">
            <li>• <strong>Precision@5:</strong> Proportion of top-5 results that are relevant</li>
            <li>• <strong>Recall@5:</strong> Proportion of relevant docs in top-5</li>
            <li>• <strong>MRR:</strong> Mean Reciprocal Rank of first relevant result</li>
            <li>• <strong>NDCG:</strong> Normalized Discounted Cumulative Gain</li>
          </ul>
        </div>
      </div>

      <h2 id="ethical-considerations">Ethical Considerations</h2>

      <p>
        Using AI for systematic reviews introduces unique ethical considerations that must be addressed.
      </p>

      <h3 id="transparency">Transparency Requirements</h3>

      <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20 p-4 my-6">
        <h4 className="font-semibold mb-2">🔍 Disclosure Checklist</h4>
        <p className="text-sm mb-3">When publishing research based on ResearcherRAG, disclose:</p>
        <ul className="text-sm space-y-2">
          <li>✓ <strong>AI-assisted screening:</strong> Clearly state that LLM was used for PRISMA screening</li>
          <li>✓ <strong>Models used:</strong> Specify embedding model, LLM version, and all parameters</li>
          <li>✓ <strong>Human oversight:</strong> Describe manual review process and validation steps</li>
          <li>✓ <strong>Limitations:</strong> Acknowledge potential biases introduced by AI models</li>
          <li>✓ <strong>Reproducibility:</strong> Provide access to code, configuration, and (if possible) data</li>
        </ul>
      </div>

      <h3 id="bias-mitigation">AI Bias Mitigation</h3>

      <p>
        LLMs can introduce biases. Implement these strategies to minimize bias:
      </p>

      <div className="space-y-4 my-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            1. Diverse Training Data Awareness
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm">
              LLMs may have biases toward:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Western/English-language research</li>
              <li>• Recent publications (recency bias)</li>
              <li>• High-impact journals</li>
              <li>• Certain research methodologies</li>
            </ul>
            <p className="text-sm font-semibold mt-3">Mitigation:</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>→ Include non-English databases if relevant</li>
              <li>→ Don't rely solely on LLM screening—use human review</li>
              <li>→ Balance inclusion criteria to avoid methodology bias</li>
            </ul>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            2. Confirmation Bias in Retrieval
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm">
              RAG systems may preferentially retrieve papers that confirm existing hypotheses.
            </p>
            <p className="text-sm font-semibold mt-3">Mitigation:</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>→ Explicitly search for contradictory evidence</li>
              <li>→ Use diverse query formulations</li>
              <li>→ Review papers with low similarity scores manually</li>
            </ul>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            3. Citation Bias
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm">
              LLMs may favor citing frequently-cited papers or recent work.
            </p>
            <p className="text-sm font-semibold mt-3">Mitigation:</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>→ Validate all citations against source material</li>
              <li>→ Ensure diverse paper representation in answers</li>
              <li>→ Flag when only a subset of papers is cited repeatedly</li>
            </ul>
          </div>
        </details>
      </div>

      <h3 id="data-privacy">Data Privacy & Copyright</h3>

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Copyright Considerations</p>
        <ul className="text-sm space-y-1">
          <li>• <strong>Fair use:</strong> Storing papers for research may be covered by fair use, but check your jurisdiction</li>
          <li>• <strong>API terms:</strong> Some databases (Elsevier, etc.) restrict bulk downloads</li>
          <li>• <strong>Redistribution:</strong> Do not publicly share full-text papers unless open access</li>
          <li>• <strong>Embeddings:</strong> Storing embeddings is generally acceptable (transformative use)</li>
          <li>• <strong>Institutional access:</strong> Ensure you have proper access rights to all papers</li>
        </ul>
      </div>

      <h2 id="version-control">Version Control Best Practices</h2>

      <p>
        Maintain clear version control for both your code and your knowledge base:
      </p>

      <Mermaid chart={'graph LR\n    A[Initial Build<br/>v1.0.0] --> B[Add 10 Papers<br/>v1.1.0]\n    B --> C[Update Embeddings<br/>v1.1.1]\n    C --> D[Major Update<br/>+50 Papers<br/>v2.0.0]\n    D --> E[Fix Citation Bug<br/>v2.0.1]\n    E --> F[New LLM Model<br/>v2.1.0]\n\n    A -.-> G[(Snapshot 1.0.0)]\n    D -.-> H[(Snapshot 2.0.0)]\n    F -.-> I[(Snapshot 2.1.0)]\n\n    style A fill:#e0e7ff\n    style D fill:#fce7f3\n    style F fill:#dcfce7'} />

      <h3 id="semantic-versioning">Semantic Versioning for RAG Systems</h3>

      <pre className="bg-muted p-3 rounded overflow-x-auto text-sm my-4"><code>{`# Use semantic versioning: MAJOR.MINOR.PATCH

MAJOR version (v2.0.0):
- Breaking changes to knowledge base structure
- Significant changes to retrieval algorithm
- New embedding model (incompatible)
- Large-scale paper additions (>30% growth)

MINOR version (v1.3.0):
- New features (e.g., hybrid search)
- Incremental paper additions (<30% growth)
- Non-breaking configuration changes
- Performance improvements

PATCH version (v1.2.1):
- Bug fixes
- Citation corrections
- Metadata updates
- Minor prompt refinements`}</code></pre>

      <h2 id="peer-review">Preparing for Peer Review</h2>

      <p>
        When submitting RAG-assisted systematic reviews for publication, prepare comprehensive supplementary materials:
      </p>

      <div className="grid grid-cols-1 gap-4 my-6">
        <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-950/20">
          <h4 className="font-semibold mb-2">📄 Supplementary Materials Checklist</h4>
          <ul className="text-sm space-y-1">
            <li>✓ Complete PRISMA checklist</li>
            <li>✓ PRISMA flow diagram</li>
            <li>✓ Full list of included papers (with DOIs)</li>
            <li>✓ Search strategies for all databases</li>
            <li>✓ Inclusion/exclusion criteria (detailed)</li>
            <li>✓ RAG system configuration file</li>
            <li>✓ Code repository (GitHub link)</li>
            <li>✓ Validation test results</li>
            <li>✓ Example queries and responses</li>
            <li>✓ AI disclosure statement</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 bg-green-50 dark:bg-green-950/20">
          <h4 className="font-semibold mb-2">💬 Responding to Reviewer Concerns</h4>
          <p className="text-sm mb-2">Common reviewer questions about AI-assisted reviews:</p>
          <ul className="text-sm space-y-1">
            <li><strong>Q:</strong> "How do you ensure AI didn't miss relevant papers?"</li>
            <li><strong>A:</strong> Describe validation process, golden dataset testing, manual review</li>
            <li className="mt-2"><strong>Q:</strong> "What about AI hallucinations?"</li>
            <li><strong>A:</strong> Explain citation validation pipeline, manual verification</li>
            <li className="mt-2"><strong>Q:</strong> "Can others reproduce this?"</li>
            <li><strong>A:</strong> Point to public repository, exact versions, configuration files</li>
          </ul>
        </div>
      </div>

      <h2 id="continuous-improvement">Continuous Improvement</h2>

      <p>
        Treat your RAG system as a living system that improves over time:
      </p>

      <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20 p-4 my-6">
        <h4 className="font-semibold mb-2">🔄 Improvement Cycle</h4>
        <ol className="text-sm space-y-2 ml-4">
          <li><strong>1. Monitor:</strong> Track query performance, user feedback, citation accuracy</li>
          <li><strong>2. Analyze:</strong> Identify patterns in failures or low-quality responses</li>
          <li><strong>3. Iterate:</strong> Adjust prompts, retrieval params, or add missing papers</li>
          <li><strong>4. Test:</strong> Validate improvements with golden dataset</li>
          <li><strong>5. Document:</strong> Record changes and version bump</li>
          <li><strong>6. Deploy:</strong> Release updated system with changelog</li>
        </ol>
      </div>

      <h2 id="next-steps">Final Chapter</h2>

      <p>
        You now understand the best practices for building trustworthy, reproducible RAG systems for systematic literature reviews. Continue to the final chapter for troubleshooting common issues:
      </p>

      <div className="my-6">
        <Link href="/guide/07-troubleshooting" className="border rounded-lg p-6 block hover:bg-muted/30 transition-colors">
          <h3 className="font-semibold mb-2">🔧 Chapter 7: Troubleshooting</h3>
          <p className="text-sm text-muted-foreground">
            Common issues, debugging strategies, comprehensive FAQ, and where to get help when things go wrong.
          </p>
        </Link>
      </div>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">🎓 Research Integrity First</p>
        <p className="mb-0">
          Always prioritize research integrity, transparency, and reproducibility. ResearcherRAG is a powerful tool, but human judgment, critical thinking, and ethical considerations remain paramount in conducting systematic reviews.
        </p>
      </div>
    </GuideLayout>
  )
}
