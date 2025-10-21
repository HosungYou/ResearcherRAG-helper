import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function TroubleshootingPage() {
  return (
    <GuideLayout>
      <h1>Troubleshooting & Common Issues</h1>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Solutions to common problems you might encounter while building and using your ResearcherRAG system. This guide covers installation issues, API errors, performance problems, and best practices for debugging.
      </p>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 Quick Debugging Tips</p>
        <ul className="text-sm space-y-1">
          <li>✓ Always check API keys and rate limits first</li>
          <li>✓ Verify your ChromaDB instance is running</li>
          <li>✓ Check Claude Code logs for error messages</li>
          <li>✓ Test with a small dataset before scaling up</li>
        </ul>
      </div>

      <h2 id="installation-issues">Installation & Setup Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          "ModuleNotFoundError" when running scripts
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="text-sm"><strong>Problem:</strong> Python can't find researcherRAG modules</p>
          <p className="text-sm"><strong>Solution:</strong></p>
          <CodeBlock
            language="bash"
            code={`# 1. Verify you're in the correct directory
cd /path/to/ResearcherRAG

# 2. Check if virtual environment is activated
which python  # Should point to venv/bin/python

# 3. Reinstall dependencies
pip install -r requirements.txt

# 4. Verify installation
python -c "import chromadb; print('ChromaDB OK')"`}
          />
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          ChromaDB connection errors
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="text-sm"><strong>Problem:</strong> Cannot connect to ChromaDB server</p>
          <p className="text-sm"><strong>Solution:</strong></p>
          <CodeBlock
            language="bash"
            code={`# Check if ChromaDB is running
ps aux | grep chroma

# Restart ChromaDB
pkill -f chroma
chroma run --path ./chroma_db --port 8000

# Or use persistent mode
docker run -p 8000:8000 chromadb/chroma`}
          />
        </div>
      </details>

      <h2 id="api-errors">API & Rate Limiting Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          "429 Too Many Requests" errors
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="text-sm"><strong>Problem:</strong> Hitting API rate limits</p>
          <p className="text-sm"><strong>Solutions by API:</strong></p>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Semantic Scholar:</p>
              <ul className="ml-4 space-y-1">
                <li>• Free tier: 100 requests/5 min (5,000/day)</li>
                <li>• Get free API key for 10× higher limits</li>
                <li>• Add delay between requests: <code>time.sleep(1)</code></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">OpenAlex:</p>
              <ul className="ml-4 space-y-1">
                <li>• Polite pool: 10 req/sec (add email to user-agent)</li>
                <li>• Without email: 1 req/sec</li>
                <li>• Add <code>mailto=your@email.com</code> to requests</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Anthropic Claude:</p>
              <ul className="ml-4 space-y-1">
                <li>• Tier-based limits (see dashboard)</li>
                <li>• Implement exponential backoff</li>
                <li>• Batch requests when possible</li>
              </ul>
            </div>
          </div>
          <CodeBlock
            language="python"
            code={`# Add exponential backoff
import time
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(
    stop=stop_after_attempt(5),
    wait=wait_exponential(multiplier=1, min=2, max=60)
)
def api_call_with_retry():
    response = requests.get(url)
    response.raise_for_status()
    return response.json()`}
          />
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          "Invalid API key" errors
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="text-sm"><strong>Problem:</strong> API authentication failing</p>
          <p className="text-sm"><strong>Solution:</strong></p>
          <CodeBlock
            language="bash"
            code={`# 1. Check environment variables
echo $ANTHROPIC_API_KEY
echo $OPENAI_API_KEY

# 2. Verify .env file exists and is loaded
cat .env | grep API_KEY

# 3. Test API key manually
curl -H "x-api-key: YOUR_KEY" https://api.anthropic.com/v1/messages

# 4. Regenerate key if needed (go to provider dashboard)`}
          />
        </div>
      </details>

      <h2 id="performance-issues">Performance & Memory Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          Slow query responses (&gt;10 seconds)
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="text-sm"><strong>Problem:</strong> RAG queries taking too long</p>
          <p className="text-sm"><strong>Solutions:</strong></p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold">1. Reduce search space:</p>
              <CodeBlock
                language="python"
                code={`# Limit number of retrieved chunks
results = collection.query(
    query_texts=["your query"],
    n_results=5  # Reduce from 10+ to 3-5
)`}
              />
            </div>
            <div>
              <p className="font-semibold">2. Use smaller embedding model:</p>
              <CodeBlock
                language="python"
                code={`# Switch from text-embedding-3-large to text-embedding-3-small
embedding_model = "text-embedding-3-small"  # Faster, 95% accuracy`}
              />
            </div>
            <div>
              <p className="font-semibold">3. Index optimization:</p>
              <CodeBlock
                language="bash"
                code={`# Rebuild ChromaDB index
chroma utils rebuild-index --path ./chroma_db`}
              />
            </div>
          </div>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          "Out of memory" errors during PDF processing
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="text-sm"><strong>Problem:</strong> System runs out of RAM</p>
          <p className="text-sm"><strong>Solutions:</strong></p>
          <CodeBlock
            language="python"
            code={`# Process PDFs in batches instead of all at once
import gc

def process_pdfs_in_batches(pdf_paths, batch_size=10):
    for i in range(0, len(pdf_paths), batch_size):
        batch = pdf_paths[i:i+batch_size]

        # Process batch
        for pdf_path in batch:
            process_single_pdf(pdf_path)

        # Clear memory
        gc.collect()

print(f"Processing {len(pdf_paths)} PDFs in batches of 10...")`}
          />
        </div>
      </details>

      <h2 id="data-quality">Data Quality Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          RAG citing papers not in database
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="text-sm"><strong>Problem:</strong> AI hallucinating citations</p>
          <p className="text-sm"><strong>Solutions:</strong></p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold">1. Update system prompt:</p>
              <CodeBlock
                language="python"
                code={`system_prompt = """
You are a research assistant. CRITICAL RULES:
- ONLY cite papers from the retrieved context below
- NEVER invent citations or use your training data
- If the context doesn't contain relevant information, say "Not found in database"
- Always include [Author, Year] format for citations
"""`}
              />
            </div>
            <div>
              <p className="font-semibold">2. Add citation validation:</p>
              <CodeBlock
                language="python"
                code={`def validate_citations(response, database_papers):
    """Check if cited papers exist in database"""
    cited_papers = extract_citations(response)  # [Author, Year]

    for citation in cited_papers:
        if citation not in database_papers:
            print(f"⚠️  Hallucinated citation: {citation}")

    return len(cited_papers) == len([c for c in cited_papers if c in database_papers])`}
              />
            </div>
          </div>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          Low PDF download success rate (&lt; 30%)
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="text-sm"><strong>Problem:</strong> Can't find PDFs for most papers</p>
          <p className="text-sm"><strong>Solutions:</strong></p>
          <ul className="text-sm space-y-2 ml-4">
            <li>• <strong>Use automation-friendly databases</strong>: Semantic Scholar, OpenAlex, arXiv (50-60% PDF rate)</li>
            <li>• <strong>Add Unpaywall API</strong>: Free service, adds ~10-15% more PDFs</li>
            <li>• <strong>Configure institutional access</strong>: Use VPN/proxy for subscriptions</li>
            <li>• <strong>Email authors</strong>: 80% response rate for recent papers</li>
            <li>• <strong>Accept abstract-only</strong>: Still useful for initial screening</li>
          </ul>
        </div>
      </details>

      <h2 id="claude-code-issues">Claude Code Integration Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          Claude Code not following stage prompts
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="text-sm"><strong>Problem:</strong> Claude Code generates unexpected code</p>
          <p className="text-sm"><strong>Solutions:</strong></p>
          <ul className="text-sm space-y-2 ml-4">
            <li>1. <strong>Verify prompt file path</strong>: Make sure you're copying from <code>prompts/0X_stage_name.md</code></li>
            <li>2. <strong>Include full context</strong>: Paste entire prompt, not just sections</li>
            <li>3. <strong>Check CLAUDE.md</strong>: Ensure it's in project root and up to date</li>
            <li>4. <strong>Reset conversation</strong>: Start fresh chat if Claude is confused</li>
            <li>5. <strong>Be explicit</strong>: "Please follow the Stage 3 prompt exactly as written"</li>
          </ul>
        </div>
      </details>

      <h2 id="best-practices">Prevention & Best Practices</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-3">✅ Do This</h3>
          <ul className="text-sm space-y-2">
            <li>• Test with 10-20 papers first before scaling</li>
            <li>• Use version control (git) for all changes</li>
            <li>• Document your API keys and rate limits</li>
            <li>• Keep backup of vector database</li>
            <li>• Monitor costs regularly (OpenAI, Anthropic)</li>
            <li>• Validate outputs with spot checks</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-3">❌ Avoid This</h3>
          <ul className="text-sm space-y-2">
            <li>• Don't commit API keys to git</li>
            <li>• Don't skip validation steps</li>
            <li>• Don't process 1000+ papers without testing</li>
            <li>• Don't ignore rate limit warnings</li>
            <li>• Don't trust AI citations blindly</li>
            <li>• Don't delete intermediate files prematurely</li>
          </ul>
        </div>
      </div>

      <h2 id="getting-help">Getting Help</h2>

      <div className="border rounded-lg p-6 my-6">
        <h3 className="font-semibold mb-3">📞 Support Resources</h3>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold">GitHub Issues:</p>
            <p className="text-muted-foreground">
              Report bugs or request features at{' '}
              <a href="https://github.com/HosungYou/researcherRAG/issues" target="_blank" rel="noopener" className="text-blue-600 underline">
                github.com/HosungYou/researcherRAG/issues
              </a>
            </p>
          </div>
          <div>
            <p className="font-semibold">Email Support:</p>
            <p className="text-muted-foreground">
              Contact the developer: <a href="mailto:hfy5138@psu.edu" className="text-blue-600 underline">hfy5138@psu.edu</a>
            </p>
          </div>
          <div>
            <p className="font-semibold">Documentation:</p>
            <p className="text-muted-foreground">
              Review the{' '}
              <Link href="/guide/01-introduction" className="text-blue-600 underline">
                full documentation
              </Link>
              {' '}or{' '}
              <Link href="/guide/workflow-map" className="text-blue-600 underline">
                workflow map
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">💡 Still Stuck?</p>
        <p className="mb-0 text-sm">
          When reporting issues, include: (1) Error message, (2) ResearcherRAG version, (3) Python/Node version,
          (4) Operating system, (5) Steps to reproduce. This helps us help you faster!
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
