import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function CodeReviewPage() {
  return (
    <GuideLayout>
      <div className="max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">Code Review Guide</h1>

        <div className="callout callout-info mb-8">
          <p className="font-semibold mb-2">✅ For Contributors & Code Reviewers</p>
          <p className="mb-0">
            Best practices, testing strategies, and contribution guidelines for ResearcherRAG.
            Follow this guide when submitting PRs or reviewing code.
          </p>
        </div>

        {/* Code Quality Standards */}
        <section className="mb-12">
          <h2>Code Quality Standards</h2>

          <h3>Python Code Style</h3>
          <ul>
            <li><strong>PEP 8 compliance</strong>: Use <code>black</code> formatter and <code>flake8</code> linter</li>
            <li><strong>Type hints</strong>: All function signatures must include type annotations</li>
            <li><strong>Docstrings</strong>: Use Google-style docstrings for all public methods</li>
            <li><strong>Error handling</strong>: Never use bare <code>except:</code> - always catch specific exceptions</li>
          </ul>

          <CodeBlock language="python" code={`# ✅ Good
def screen_paper(self, title: str, abstract: str) -> Dict[str, Any]:
    """
    Screen a single paper using Claude API.

    Args:
        title: Paper title
        abstract: Paper abstract

    Returns:
        Dictionary with screening decision and reasoning

    Raises:
        ValueError: If abstract is empty
        APIError: If Claude API call fails
    """
    if not abstract or not abstract.strip():
        raise ValueError("Abstract cannot be empty")

    try:
        response = self.client.messages.create(...)
        return self._parse_response(response)
    except anthropic.APIError as e:
        raise APIError(f"Claude API failed: {e}")

# ❌ Bad
def screen_paper(self, title, abstract):
    if not abstract:
        return {"error": "no abstract"}
    try:
        response = self.client.messages.create(...)
        return response
    except:  # Too broad!
        return None  # What went wrong?`} />
        </section>

        {/* Testing Requirements */}
        <section className="mb-12">
          <h2>Testing Requirements</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <TestTypeCard
              title="Unit Tests"
              coverage="Required"
              description="Test individual functions in isolation"
              example="Test deduplication logic with known duplicates"
            />
            <TestTypeCard
              title="Integration Tests"
              coverage="Recommended"
              description="Test script end-to-end with mock data"
              example="Run 03_screen_papers.py with sample CSV"
            />
            <TestTypeCard
              title="Manual Testing"
              coverage="Required"
              description="Test with real project before PR"
              example="Run full pipeline with example research question"
            />
          </div>

          <h3>Writing Unit Tests</h3>
          <CodeBlock language="python" code={`# tests/test_deduplication.py
import pytest
from scripts.deduplicate import Deduplicator

def test_exact_doi_match():
    """Test that papers with same DOI are deduplicated"""
    papers = [
        {"doi": "10.1234/abc", "title": "Paper A"},
        {"doi": "10.1234/abc", "title": "Paper A (duplicate)"}
    ]

    dedup = Deduplicator()
    result = dedup.remove_duplicates(papers)

    assert len(result) == 1
    assert result[0]["title"] == "Paper A"

def test_title_similarity():
    """Test that similar titles are detected"""
    dedup = Deduplicator()

    title1 = "AI-Powered Chatbots for Language Learning"
    title2 = "AI Powered Chatbots for Language Learning"  # Minor difference

    assert dedup.is_duplicate_title(title1, title2, threshold=0.9)

def test_different_titles():
    """Test that different titles are not duplicates"""
    dedup = Deduplicator()

    title1 = "Machine Learning in Healthcare"
    title2 = "Deep Learning for Medical Diagnosis"

    assert not dedup.is_duplicate_title(title1, title2, threshold=0.9)`} />

          <h3>Running Tests</h3>
          <CodeBlock language="bash" code={`# Run all tests
pytest

# Run specific test file
pytest tests/test_deduplication.py

# Run with coverage report
pytest --cov=scripts --cov-report=html

# Run only fast tests (skip slow integration tests)
pytest -m "not slow"`} />
        </section>

        {/* Common Code Smells */}
        <section className="mb-12">
          <h2>Common Code Smells to Avoid</h2>

          <div className="space-y-6">
            <CodeSmellCard
              smell="Hardcoded values"
              why="Makes code inflexible and hard to test"
              bad={`def fetch_papers(self):
    url = "https://api.semanticscholar.org/graph/v1/paper/search"
    params = {"limit": 100}  # Hardcoded!`}
              good={`def fetch_papers(self):
    url = "https://api.semanticscholar.org/graph/v1/paper/search"
    limit = self.config.get('retrieval_settings.limit', 100)  # Configurable
    params = {"limit": limit}`}
            />

            <CodeSmellCard
              smell="Missing error context"
              why="Makes debugging impossible"
              bad={`try:
    df = pd.read_csv(file_path)
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)`}
              good={`try:
    df = pd.read_csv(file_path)
except FileNotFoundError:
    print(f"❌ File not found: {file_path}")
    print("   Run 02_deduplicate.py first to generate this file")
    sys.exit(1)
except pd.errors.EmptyDataError:
    print(f"❌ File is empty: {file_path}")
    print("   Check if previous stage succeeded")
    sys.exit(1)`}
            />

            <CodeSmellCard
              smell="Overly complex functions"
              why="Hard to test and maintain"
              bad={`def process_papers(self, papers: List[Dict]) -> List[Dict]:
    # 200 lines of code doing multiple things...
    # Fetching, deduplicating, screening, downloading all in one function!`}
              good={`def process_papers(self, papers: List[Dict]) -> List[Dict]:
    papers = self.deduplicate(papers)
    papers = self.screen(papers)
    papers = self.download_pdfs(papers)
    return papers

# Each method is 20-30 lines and testable independently`}
            />

            <CodeSmellCard
              smell="Ignoring config.yaml schema"
              why="Breaks user projects silently"
              bad={`# Reading config without validation
threshold = config['ai_prisma_rubric']['decision_confidence']['auto_include']
# KeyError if field missing!`}
              good={`# Safe config reading with defaults
threshold = config.get('ai_prisma_rubric', {}).get(
    'decision_confidence', {}
).get('auto_include', 90)

# Even better: validate at load time
def validate_config(self):
    required_fields = ['project_type', 'research_question']
    for field in required_fields:
        if field not in self.config:
            raise ValueError(f"Missing required field: {field}")`}
            />
          </div>
        </section>

        {/* PR Checklist */}
        <section className="mb-12">
          <h2>Pull Request Checklist</h2>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border">
            <h3 className="text-lg font-bold mb-4">Before Submitting PR</h3>

            <div className="space-y-3">
              <ChecklistSection
                title="Code Quality"
                items={[
                  'Run black . to format code',
                  'Run flake8 . and fix all warnings',
                  'Add type hints to all function signatures',
                  'Write docstrings for all public methods'
                ]}
              />

              <ChecklistSection
                title="Testing"
                items={[
                  'Write unit tests for new functions',
                  'Run pytest and ensure all tests pass',
                  'Test with real project end-to-end',
                  'Check coverage: pytest --cov (aim for >80%)'
                ]}
              />

              <ChecklistSection
                title="Documentation"
                items={[
                  'Update ARCHITECTURE.md if file dependencies changed',
                  'Update relevant prompts/*.md if user workflow affected',
                  'Update config_base.yaml if new config fields added',
                  'Add entry to RELEASE_NOTES_vX.X.X.md'
                ]}
              />

              <ChecklistSection
                title="Backward Compatibility"
                items={[
                  'Ensure existing config.yaml files still work',
                  'Add migration guide if breaking changes',
                  'Test with both project_type modes (knowledge_repository + systematic_review)',
                  'Verify old scripts still run with new changes'
                ]}
              />
            </div>
          </div>
        </section>

        {/* Extension Guide */}
        <section className="mb-12">
          <h2>How to Extend ResearcherRAG</h2>

          <h3>Adding a New Database Source</h3>
          <ol className="space-y-3">
            <li>
              <strong>Step 1: Add database to config schema</strong>
              <CodeBlock language="yaml" code={`# templates/config_base.yaml
databases:
  open_access:
    # ... existing databases
    pubmed:  # New database
      enabled: false
      email: ""  # Required for PubMed API`} />
            </li>

            <li>
              <strong>Step 2: Implement fetch method in 01_fetch_papers.py</strong>
              <CodeBlock language="python" code={`def fetch_from_pubmed(self, query: str) -> List[Dict]:
    """Fetch papers from PubMed using Entrez API"""
    # Implementation details...
    pass`} />
            </li>

            <li>
              <strong>Step 3: Update fetch loop</strong>
              <CodeBlock language="python" code={`if self.config['databases']['open_access']['pubmed']['enabled']:
    pubmed_papers = self.fetch_from_pubmed(query)
    self.save_results(pubmed_papers, 'pubmed_results.csv')`} />
            </li>

            <li>
              <strong>Step 4: Update documentation</strong>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Update <code>prompts/02_query_strategy.md</code> to mention PubMed</li>
                <li>• Update <code>ARCHITECTURE.md</code> dependency map</li>
                <li>• Add example to README.md</li>
              </ul>
            </li>

            <li>
              <strong>Step 5: Write tests</strong>
              <CodeBlock language="python" code={`def test_fetch_from_pubmed():
    fetcher = PaperFetcher(project_path)
    papers = fetcher.fetch_from_pubmed("machine learning")
    assert len(papers) > 0
    assert all('title' in p for p in papers)`} />
            </li>
          </ol>

          <h3>Adding a New Screening Criterion</h3>
          <ol className="space-y-3">
            <li>
              <strong>Step 1: Update config schema</strong>
              <CodeBlock language="yaml" code={`ai_prisma_rubric:
  sub_criteria:
    # ... existing criteria
    study_quality:  # New criterion
      description: "Methodological rigor"
      scoring_rubric: |
        100: RCT with blinding
        75: RCT without blinding
        50: Quasi-experimental
        0: Observational`} />
            </li>

            <li>
              <strong>Step 2: Update screening prompt in 03_screen_papers.py</strong>
              <CodeBlock language="python" code={`prompt = f"""
Rate this paper on study quality (0-100):
100 = RCT with blinding
75 = RCT without blinding
...

Title: {title}
Abstract: {abstract}

Respond with: {{"study_quality": score, "reasoning": "..."}}
"""`} />
            </li>

            <li>
              <strong>Step 3: Update aggregation logic</strong>
              <CodeBlock language="python" code={`final_score = (
    response['population'] * 0.2 +
    response['intervention'] * 0.3 +
    response['outcomes'] * 0.3 +
    response['study_quality'] * 0.2  # New criterion
)`} />
            </li>
          </ol>
        </section>

        {/* Debugging Tips */}
        <section className="mb-12">
          <h2>Debugging Tips</h2>

          <div className="space-y-4">
            <DebuggingTipCard
              scenario="Script fails with cryptic error"
              steps={[
                'Check logs/ directory for detailed error messages',
                'Run script with python -v scripts/XX.py for verbose output',
                'Add print statements to identify which line fails',
                'Check if config.yaml has all required fields',
                'Verify previous stage completed successfully'
              ]}
            />

            <DebuggingTipCard
              scenario="Papers not appearing in RAG results"
              steps={[
                'Check if PDFs downloaded: ls data/pdfs/ | wc -l',
                'Verify ChromaDB created: ls data/chroma/',
                'Test embedding generation: python -c "from openai import OpenAI; client = OpenAI(); print(client.embeddings.create(...))"',
                'Reduce retrieval_k in config.yaml to see if any results appear',
                'Try exact phrase from paper title as query'
              ]}
            />

            <DebuggingTipCard
              scenario="AI screening too lenient/strict"
              steps={[
                'Check project_type in config.yaml (knowledge_repository vs systematic_review)',
                'Verify thresholds: auto_include and auto_exclude values',
                'Review AI reasoning in data/02_screening/excluded.csv',
                'Adjust thresholds in config.yaml and re-run 03_screen_papers.py',
                'If needed, modify prompt in 03_screen_papers.py for clearer instructions'
              ]}
            />
          </div>
        </section>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <h3 className="text-xl font-bold mb-3">Ready to Contribute?</h3>
          <p className="mb-4">
            Head to the GitHub repository to find open issues, submit PRs, or start discussions
            about new features.
          </p>
          <a
            href="https://github.com/HosungYou/researcherRAG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </GuideLayout>
  )
}

// Component: Test Type Card
function TestTypeCard({
  title,
  coverage,
  description,
  example
}: {
  title: string;
  coverage: string;
  description: string;
  example: string;
}) {
  const coverageColor = coverage === 'Required' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold">{title}</h4>
        <span className={`text-xs px-2 py-1 rounded font-semibold ${coverageColor}`}>
          {coverage}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      <p className="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
        Example: {example}
      </p>
    </div>
  );
}

// Component: Code Smell Card
function CodeSmellCard({
  smell,
  why,
  bad,
  good
}: {
  smell: string;
  why: string;
  bad: string;
  good: string;
}) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-red-50 dark:bg-red-950 border-b border-red-200 dark:border-red-800 p-4">
        <h4 className="font-bold text-lg mb-1">{smell}</h4>
        <p className="text-sm text-muted-foreground">{why}</p>
      </div>
      <div className="grid md:grid-cols-2 divide-x dark:divide-gray-700">
        <div className="p-4">
          <div className="text-sm font-semibold mb-2 text-red-600 dark:text-red-400">❌ Bad</div>
          <CodeBlock language="python" code={bad} />
        </div>
        <div className="p-4">
          <div className="text-sm font-semibold mb-2 text-green-600 dark:text-green-400">✅ Good</div>
          <CodeBlock language="python" code={good} />
        </div>
      </div>
    </div>
  );
}

// Component: Checklist Section
function ChecklistSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <ul className="space-y-1 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component: Debugging Tip Card
function DebuggingTipCard({ scenario, steps }: { scenario: string; steps: string[] }) {
  return (
    <div className="border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
      <h4 className="font-bold mb-2">🐛 {scenario}</h4>
      <ol className="space-y-1 text-sm list-decimal list-inside">
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
