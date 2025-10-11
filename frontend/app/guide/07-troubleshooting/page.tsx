import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'

export default function TroubleshootingPage() {
  return (
    <GuideLayout>
      <h1>Troubleshooting</h1>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Even with careful implementation, you may encounter issues when building and running your ResearcherRAG system. This chapter provides comprehensive troubleshooting guidance, common error solutions, debugging strategies, and a detailed FAQ to help you resolve problems quickly and get back to your research.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="border rounded-lg p-4">
          <div className="text-2xl mb-2">🔴</div>
          <h3 className="font-semibold mb-2">Installation Issues</h3>
          <p className="text-sm text-muted-foreground">
            Python versions, dependencies, and environment setup problems
          </p>
        </div>
        <div className="border rounded-lg p-4">
          <div className="text-2xl mb-2">🟡</div>
          <h3 className="font-semibold mb-2">API & Network</h3>
          <p className="text-sm text-muted-foreground">
            API key errors, rate limits, and connection failures
          </p>
        </div>
        <div className="border rounded-lg p-4">
          <div className="text-2xl mb-2">🟢</div>
          <h3 className="font-semibold mb-2">Performance Issues</h3>
          <p className="text-sm text-muted-foreground">
            Slow queries, memory problems, and optimization tips
          </p>
        </div>
      </div>

      <h2 id="installation-issues">Installation & Environment Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-red-700 dark:text-red-400">
          🔴 Error: "ModuleNotFoundError: No module named 'langchain'"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">Dependencies not installed or wrong Python environment active.</p>

          <p className="font-semibold mt-3">Solution:</p>
          <pre className="bg-muted p-3 rounded text-sm"><code>{`# Verify you're in the correct environment
which python
# Should show: /path/to/your/venv/bin/python

# Activate environment if needed
source venv/bin/activate  # macOS/Linux
# or
venv\\Scripts\\activate  # Windows

# Install dependencies
pip install -r requirements.txt

# Verify installation
pip list | grep langchain`}</code></pre>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-red-700 dark:text-red-400">
          🔴 Error: "Python version 3.12 not compatible"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">Some dependencies don't support Python 3.12+ yet.</p>

          <p className="font-semibold mt-3">Solution:</p>
          <pre className="bg-muted p-3 rounded text-sm"><code>{`# Check your Python version
python --version

# If 3.12+, install Python 3.11
# macOS with Homebrew:
brew install python@3.11

# Create new environment with 3.11
python3.11 -m venv venv
source venv/bin/activate
pip install -r requirements.txt`}</code></pre>

          <div className="callout callout-info mt-3">
            <p className="text-sm mb-0">
              <strong>Recommended:</strong> Use Python 3.9, 3.10, or 3.11 for best compatibility.
            </p>
          </div>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-red-700 dark:text-red-400">
          🔴 Error: "Microsoft Visual C++ required" (Windows)
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">Some Python packages require C++ build tools on Windows.</p>

          <p className="font-semibold mt-3">Solution:</p>
          <ol className="text-sm space-y-2 ml-4">
            <li>1. Download and install Microsoft C++ Build Tools: <a href="https://visualstudio.microsoft.com/visual-cpp-build-tools/" className="text-blue-600 underline" target="_blank" rel="noopener">https://visualstudio.microsoft.com/visual-cpp-build-tools/</a></li>
            <li>2. During installation, select "Desktop development with C++"</li>
            <li>3. Restart your terminal</li>
            <li>4. Retry: <code>pip install -r requirements.txt</code></li>
          </ol>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-red-700 dark:text-red-400">
          🔴 Error: "No space left on device"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">Vector databases and PDF storage can consume significant disk space.</p>

          <p className="font-semibold mt-3">Solution:</p>
          <pre className="bg-muted p-3 rounded text-sm"><code>{`# Check disk space
df -h

# Check size of vector DB and PDFs
du -sh chroma_db/
du -sh pdfs/

# Clean up unnecessary files
rm -rf chroma_db/.cache
rm -rf pdfs/.temp

# Or move to external drive
mv chroma_db/ /Volumes/ExternalDrive/project/`}</code></pre>

          <p className="text-sm text-muted-foreground mt-2">
            <strong>Space estimates:</strong> 100 papers ≈ 500MB PDFs + 200MB vector DB
          </p>
        </div>
      </details>

      <h2 id="api-issues">API & Authentication Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-yellow-700 dark:text-yellow-400">
          🟡 Error: "OpenAI API key not found"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">Environment variable not set or .env file not loaded.</p>

          <p className="font-semibold mt-3">Solution:</p>
          <pre className="bg-muted p-3 rounded text-sm"><code>{`# Check if .env file exists
ls -la .env

# Verify contents (should have OPENAI_API_KEY=sk-...)
cat .env

# If missing, create .env:
echo "OPENAI_API_KEY=sk-your-key-here" >> .env

# Verify it loads in Python:
python -c "import os; from dotenv import load_dotenv; load_dotenv(); print(os.getenv('OPENAI_API_KEY'))"

# Should output: sk-...`}</code></pre>

          <div className="callout callout-warning mt-3">
            <p className="text-sm mb-0">
              <strong>Security:</strong> Never commit .env to git! Add it to .gitignore.
            </p>
          </div>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-yellow-700 dark:text-yellow-400">
          🟡 Error: "Rate limit exceeded (429)"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">Too many API requests in short time period.</p>

          <p className="font-semibold mt-3">Solutions:</p>

          <p className="text-sm font-semibold">1. Add retry logic with exponential backoff:</p>
          <pre className="bg-muted p-3 rounded text-sm"><code>{`from tenacity import retry, wait_exponential, stop_after_attempt

@retry(
    wait=wait_exponential(multiplier=1, min=4, max=60),
    stop=stop_after_attempt(5)
)
def call_openai_api(prompt):
    return client.chat.completions.create(...)

# Automatically retries with delays: 4s, 8s, 16s, 32s, 60s`}</code></pre>

          <p className="text-sm font-semibold mt-3">2. Reduce batch size:</p>
          <pre className="bg-muted p-3 rounded text-sm"><code>{`# Instead of processing 100 embeddings at once:
embeddings = embed_model.encode(texts)

# Process in smaller batches:
import time
batch_size = 20
for i in range(0, len(texts), batch_size):
    batch = texts[i:i+batch_size]
    embeddings = embed_model.encode(batch)
    time.sleep(1)  # 1 second between batches`}</code></pre>

          <p className="text-sm font-semibold mt-3">3. Upgrade API tier:</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Free tier: 3 requests/minute</li>
            <li>• Pay-as-you-go: 3,500 requests/minute</li>
            <li>• Check: <a href="https://platform.openai.com/account/rate-limits" className="text-blue-600 underline" target="_blank" rel="noopener">platform.openai.com/account/rate-limits</a></li>
          </ul>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-yellow-700 dark:text-yellow-400">
          🟡 Error: "Invalid API key or insufficient credits"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">API key is incorrect, expired, or account has no credits.</p>

          <p className="font-semibold mt-3">Solution:</p>
          <ol className="text-sm space-y-2 ml-4">
            <li>1. Verify API key at: <a href="https://platform.openai.com/api-keys" className="text-blue-600 underline" target="_blank" rel="noopener">platform.openai.com/api-keys</a></li>
            <li>2. Check billing: <a href="https://platform.openai.com/account/billing" className="text-blue-600 underline" target="_blank" rel="noopener">platform.openai.com/account/billing</a></li>
            <li>3. Ensure you have payment method added</li>
            <li>4. Test with small request:
              <pre className="bg-muted p-2 rounded text-xs mt-2"><code>{`curl https://api.openai.com/v1/models \\
  -H "Authorization: Bearer $OPENAI_API_KEY"`}</code></pre>
            </li>
          </ol>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-yellow-700 dark:text-yellow-400">
          🟡 Error: "Connection timeout / Network error"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Causes:</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Firewall blocking API requests</li>
            <li>• VPN interfering with connections</li>
            <li>• Network instability</li>
            <li>• OpenAI service outage</li>
          </ul>

          <p className="font-semibold mt-3">Solutions:</p>
          <ol className="text-sm space-y-2 ml-4">
            <li>1. Check OpenAI status: <a href="https://status.openai.com" className="text-blue-600 underline" target="_blank" rel="noopener">status.openai.com</a></li>
            <li>2. Test connection:
              <pre className="bg-muted p-2 rounded text-xs mt-2"><code>ping api.openai.com</code></pre>
            </li>
            <li>3. Try disabling VPN temporarily</li>
            <li>4. Increase timeout in code:
              <pre className="bg-muted p-2 rounded text-xs mt-2"><code>{`client = OpenAI(timeout=60.0)  # 60 seconds`}</code></pre>
            </li>
          </ol>
        </div>
      </details>

      <h2 id="pdf-issues">PDF Processing Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-orange-700 dark:text-orange-400">
          🟠 Error: "Cannot extract text from PDF"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">PDF is scanned image (no text layer) or has complex layout.</p>

          <p className="font-semibold mt-3">Solution:</p>

          <p className="text-sm font-semibold">1. Use OCR for scanned PDFs:</p>
          <pre className="bg-muted p-3 rounded text-sm"><code>{`# Install Tesseract OCR
# macOS:
brew install tesseract

# Ubuntu:
sudo apt-get install tesseract-ocr

# Install Python wrapper:
pip install pytesseract pdf2image

# Use OCR fallback:
import pytesseract
from pdf2image import convert_from_path

def extract_with_ocr(pdf_path):
    images = convert_from_path(pdf_path)
    text = ""
    for img in images:
        text += pytesseract.image_to_string(img)
    return text`}</code></pre>

          <p className="text-sm font-semibold mt-3">2. Try alternative parsers:</p>
          <pre className="bg-muted p-3 rounded text-sm"><code>{`# PyMuPDF (default)
import fitz
doc = fitz.open(pdf_path)
text = "".join([page.get_text() for page in doc])

# If that fails, try pdfplumber:
import pdfplumber
with pdfplumber.open(pdf_path) as pdf:
    text = "".join([page.extract_text() for page in pdf.pages])

# Or Unstructured (best for complex layouts):
from unstructured.partition.pdf import partition_pdf
elements = partition_pdf(pdf_path)
text = "\\n".join([str(el) for el in elements])`}</code></pre>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-orange-700 dark:text-orange-400">
          🟠 Issue: "Extracted text has gibberish or encoding errors"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">PDF uses non-standard fonts or encoding.</p>

          <p className="font-semibold mt-3">Solution:</p>
          <pre className="bg-muted p-3 rounded text-sm"><code>{`import re

def clean_extracted_text(text):
    # Remove non-printable characters
    text = re.sub(r'[^\\x20-\\x7E\\n]', '', text)

    # Fix common issues
    text = text.replace('ﬁ', 'fi')  # Fix ligatures
    text = text.replace('ﬂ', 'fl')

    # Remove excessive whitespace
    text = re.sub(r'\\n\\s*\\n', '\\n\\n', text)
    text = re.sub(r' +', ' ', text)

    return text.strip()

# Apply cleaning
text = extract_text_from_pdf(pdf_path)
text = clean_extracted_text(text)`}</code></pre>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-orange-700 dark:text-orange-400">
          🟠 Issue: "Two-column layout mixed together"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">Most parsers read left-to-right, mixing columns.</p>

          <p className="font-semibold mt-3">Solution:</p>
          <p className="text-sm">Use Unstructured with layout detection:</p>
          <pre className="bg-muted p-3 rounded text-sm"><code>{`from unstructured.partition.pdf import partition_pdf

# Enable layout analysis
elements = partition_pdf(
    pdf_path,
    strategy="hi_res",  # High-resolution mode
    infer_table_structure=True,
    include_page_breaks=True
)

# Extract text in correct order
text = "\\n".join([str(el) for el in elements])`}</code></pre>
        </div>
      </details>

      <h2 id="vector-db-issues">Vector Database Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-blue-700 dark:text-blue-400">
          🔵 Error: "ChromaDB collection already exists"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">Trying to create a collection that already exists.</p>

          <p className="font-semibold mt-3">Solution:</p>
          <pre className="bg-muted p-3 rounded text-sm"><code>{`import chromadb

client = chromadb.PersistentClient(path="./chroma_db")

# Option 1: Get existing collection
try:
    collection = client.get_collection(name="papers")
except:
    collection = client.create_collection(name="papers")

# Option 2: Delete and recreate
client.delete_collection(name="papers")
collection = client.create_collection(name="papers")

# Option 3: Get or create
collection = client.get_or_create_collection(name="papers")`}</code></pre>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-blue-700 dark:text-blue-400">
          🔵 Error: "Dimension mismatch: expected 1536, got 768"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">Embeddings from different models have different dimensions.</p>

          <p className="font-semibold mt-3">Solution:</p>
          <ol className="text-sm space-y-2 ml-4">
            <li>1. Use consistent embedding model throughout</li>
            <li>2. If switching models, recreate vector DB:
              <pre className="bg-muted p-2 rounded text-xs mt-2"><code>{`# Delete old database
rm -rf chroma_db/

# Re-ingest with new model
python ingest_papers.py --embedding-model text-embedding-3-small`}</code></pre>
            </li>
            <li>3. Or use dimensionality reduction:
              <pre className="bg-muted p-2 rounded text-xs mt-2"><code>{`from sklearn.decomposition import PCA

# Reduce 1536 → 768
pca = PCA(n_components=768)
reduced_embeddings = pca.fit_transform(embeddings)`}</code></pre>
            </li>
          </ol>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-blue-700 dark:text-blue-400">
          🔵 Issue: "Vector search returns irrelevant results"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Causes & Solutions:</p>

          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-3">
              <p className="text-sm font-semibold">1. Similarity threshold too low</p>
              <pre className="bg-muted p-2 rounded text-xs mt-1"><code>{`# Increase threshold from 0.5 to 0.7
results = collection.query(
    query_embeddings=[query_emb],
    n_results=5,
    where={"similarity": {"$gte": 0.7}}  # Add filter
)`}</code></pre>
            </div>

            <div className="border-l-4 border-green-500 pl-3">
              <p className="text-sm font-semibold">2. Chunks too large or too small</p>
              <p className="text-xs mt-1">Experiment with chunk size: 300, 500, 800 tokens</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-3">
              <p className="text-sm font-semibold">3. Wrong embedding model for domain</p>
              <p className="text-xs mt-1">Try domain-specific model (SciBERT, BioBERT)</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-3">
              <p className="text-sm font-semibold">4. Need re-ranking</p>
              <pre className="bg-muted p-2 rounded text-xs mt-1"><code>{`from sentence_transformers import CrossEncoder

reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')
scores = reranker.predict([(query, doc) for doc in results])
best_results = sorted(zip(results, scores), key=lambda x: x[1], reverse=True)[:3]`}</code></pre>
            </div>
          </div>
        </div>
      </details>

      <h2 id="performance-issues">Performance & Memory Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-green-700 dark:text-green-400">
          🟢 Issue: "Queries taking &gt;10 seconds"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Solutions:</p>

          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold">1. Enable caching:</p>
              <pre className="bg-muted p-2 rounded text-xs"><code>{`from functools import lru_cache

@lru_cache(maxsize=100)
def get_embedding(text):
    return embed_model.encode(text)`}</code></pre>
            </div>

            <div>
              <p className="text-sm font-semibold">2. Switch to FAISS for large datasets:</p>
              <pre className="bg-muted p-2 rounded text-xs"><code>{`import faiss
import numpy as np

# Create FAISS index
dimension = 1536
index = faiss.IndexFlatIP(dimension)  # Inner product (cosine)
index.add(np.array(embeddings))

# Fast search
D, I = index.search(query_embedding, k=5)  # <100ms`}</code></pre>
            </div>

            <div>
              <p className="text-sm font-semibold">3. Reduce context size sent to LLM:</p>
              <pre className="bg-muted p-2 rounded text-xs"><code>{`# Instead of top-5, use top-3
results = vector_db.search(query_emb, k=3)  # Fewer chunks

# Or truncate long chunks
max_chunk_length = 500  # tokens
truncated = [chunk[:max_chunk_length] for chunk in chunks]`}</code></pre>
            </div>
          </div>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-green-700 dark:text-green-400">
          🟢 Error: "Out of memory (OOM)"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">Loading too many embeddings or large models into RAM.</p>

          <p className="font-semibold mt-3">Solutions:</p>

          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold">1. Process in batches:</p>
              <pre className="bg-muted p-2 rounded text-xs"><code>{`# Don't load all PDFs at once
batch_size = 10
for i in range(0, len(pdf_files), batch_size):
    batch = pdf_files[i:i+batch_size]
    process_batch(batch)
    # Memory freed after each batch`}</code></pre>
            </div>

            <div>
              <p className="text-sm font-semibold">2. Use smaller embedding model:</p>
              <pre className="bg-muted p-2 rounded text-xs"><code>{`# Instead of text-embedding-3-large (3072 dim)
# Use text-embedding-3-small (1536 dim)
# Or all-MiniLM-L6-v2 (384 dim) for local`}</code></pre>
            </div>

            <div>
              <p className="text-sm font-semibold">3. Increase system memory or use disk-based storage:</p>
              <pre className="bg-muted p-2 rounded text-xs"><code>{`# Use persistent vector DB instead of in-memory
client = chromadb.PersistentClient(path="./chroma_db")  # ✓
# Not: chromadb.Client()  # ✗ In-memory only`}</code></pre>
            </div>
          </div>
        </div>
      </details>

      <h2 id="rag-quality">RAG Quality Issues</h2>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-purple-700 dark:text-purple-400">
          🟣 Issue: "LLM hallucinates citations"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Solutions:</p>

          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold">1. Improve system prompt:</p>
              <pre className="bg-muted p-2 rounded text-xs"><code>{`system_prompt = """You are a research assistant. Follow these rules STRICTLY:

1. ONLY cite papers provided in the context below
2. Every claim MUST have a citation in [Author, Year] format
3. If information is not in the context, say "I don't have information about that"
4. NEVER make up citations or author names
5. Include the paper's main finding when citing

Context:
{context}

Question: {question}"""`}</code></pre>
            </div>

            <div>
              <p className="text-sm font-semibold">2. Add citation validation:</p>
              <pre className="bg-muted p-2 rounded text-xs"><code>{`def validate_response(response, retrieved_papers):
    # Extract citations
    citations = extract_citations(response)

    # Check each citation exists
    valid_authors = {p['author'] for p in retrieved_papers}
    for citation in citations:
        if citation['author'] not in valid_authors:
            return False, f"Invalid citation: {citation}"

    return True, "All citations valid"`}</code></pre>
            </div>

            <div>
              <p className="text-sm font-semibold">3. Use lower temperature:</p>
              <pre className="bg-muted p-2 rounded text-xs"><code>{`response = client.chat.completions.create(
    model="claude-3-5-sonnet-20241022",
    messages=[...],
    temperature=0,  # Most deterministic, least creative
    max_tokens=2048
)`}</code></pre>
            </div>
          </div>
        </div>
      </details>

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30 text-purple-700 dark:text-purple-400">
          🟣 Issue: "Answers are too generic or don't cite papers"
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p className="font-semibold">Cause:</p>
          <p className="text-sm">LLM relying on pre-training instead of retrieved context.</p>

          <p className="font-semibold mt-3">Solutions:</p>

          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold">1. Make context more prominent:</p>
              <pre className="bg-muted p-2 rounded text-xs"><code>{`prompt = """Based EXCLUSIVELY on these research papers:

===== PAPER 1 =====
[Smith, 2023] Technology Adoption in Healthcare
Key finding: 78% adoption rate in developed countries
...

===== PAPER 2 =====
[Johnson, 2022] Barriers to EHR Implementation
Key finding: Cost is primary barrier (65% of cases)
...

Now answer this question using ONLY the information above: {question}

Remember: Cite every claim with [Author, Year]"""`}</code></pre>
            </div>

            <div>
              <p className="text-sm font-semibold">2. Retrieve more specific chunks:</p>
              <p className="text-xs mt-1">Increase similarity threshold to get more focused results</p>
            </div>

            <div>
              <p className="text-sm font-semibold">3. Add explicit instruction to cite:</p>
              <pre className="bg-muted p-2 rounded text-xs"><code>{`question_with_instruction = f"""{question}

Provide a detailed answer with citations for every claim."""`}</code></pre>
            </div>
          </div>
        </div>
      </details>

      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-4 my-8">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            How many papers should I include in my RAG system?
          </summary>
          <div className="p-4 pt-0 border-t">
            <p className="text-sm mb-2"><strong>Recommended range:</strong> 30-300 papers</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>&lt;30 papers:</strong> May not have sufficient coverage</li>
              <li>• <strong>30-100 papers:</strong> Ideal for focused reviews</li>
              <li>• <strong>100-300 papers:</strong> Comprehensive systematic reviews</li>
              <li>• <strong>&gt;300 papers:</strong> Consider filtering criteria or use distributed vector DB</li>
            </ul>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            What's the cost of running ResearcherRAG?
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm font-semibold">Typical costs for 100 papers:</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Embeddings:</strong> $0.50-2.00 (one-time, during ingestion)</li>
              <li>• <strong>LLM queries:</strong> $0.01-0.05 per query</li>
              <li>• <strong>Total setup:</strong> ~$5-10</li>
              <li>• <strong>Ongoing:</strong> ~$10-50/month depending on usage</li>
            </ul>
            <p className="text-sm mt-3">
              <strong>Cost-saving tips:</strong> Use text-embedding-3-small, cache queries, use local models
            </p>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Can I use ResearcherRAG offline / air-gapped?
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm"><strong>Yes, with local models:</strong></p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Embeddings:</strong> Use sentence-transformers (e.g., all-MiniLM-L6-v2)</li>
              <li>• <strong>LLM:</strong> Use Ollama with Llama 3 or Mistral</li>
              <li>• <strong>Vector DB:</strong> ChromaDB or FAISS (both local)</li>
            </ul>
            <p className="text-sm mt-3">
              <strong>Trade-off:</strong> Lower quality than OpenAI/Claude, but fully offline
            </p>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            How do I update my RAG system with new papers?
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm">Use incremental ingestion:</p>
            <pre className="bg-muted p-2 rounded text-xs"><code>{`# Add new papers without rebuilding entire DB
python ingest_papers.py \\
  --input new_papers.csv \\
  --append  # Don't delete existing papers

# Or use the incremental update script
python incremental_update.py \\
  --since 2024-01-01  # Only fetch papers after this date`}</code></pre>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Should I use ChromaDB or FAISS?
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Feature</th>
                  <th className="text-left p-2">ChromaDB</th>
                  <th className="text-left p-2">FAISS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Ease of use</td>
                  <td className="p-2">✓ Very easy</td>
                  <td className="p-2">⚠️ Moderate</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Speed (&lt;1000 docs)</td>
                  <td className="p-2">✓ Fast</td>
                  <td className="p-2">✓ Very fast</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Speed (&gt;10000 docs)</td>
                  <td className="p-2">⚠️ Slower</td>
                  <td className="p-2">✓ Excellent</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Metadata filtering</td>
                  <td className="p-2">✓ Built-in</td>
                  <td className="p-2">⚠️ Manual</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Persistence</td>
                  <td className="p-2">✓ Auto-save</td>
                  <td className="p-2">⚠️ Manual save</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm mt-3">
              <strong>Recommendation:</strong> Start with ChromaDB, switch to FAISS if &gt;500 papers
            </p>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            How do I handle non-English papers?
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm"><strong>Two approaches:</strong></p>

            <div className="space-y-2">
              <div className="border-l-4 border-blue-500 pl-3">
                <p className="text-sm font-semibold">1. Multilingual embeddings (no translation):</p>
                <pre className="bg-muted p-2 rounded text-xs mt-1"><code>{`model = SentenceTransformer('intfloat/multilingual-e5-large')
# Can search across languages in same vector space`}</code></pre>
              </div>

              <div className="border-l-4 border-green-500 pl-3">
                <p className="text-sm font-semibold">2. Translate during ingestion:</p>
                <pre className="bg-muted p-2 rounded text-xs mt-1"><code>{`import deepl
translator = deepl.Translator(api_key)
english_text = translator.translate_text(text, target_lang="EN-US")`}</code></pre>
              </div>
            </div>
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            Can I export my RAG results for publication?
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <p className="text-sm"><strong>Yes, ResearcherRAG includes export tools:</strong></p>
            <pre className="bg-muted p-2 rounded text-xs"><code>{`# Export PRISMA flow diagram
python export_prisma.py --format png

# Export bibliography (BibTeX)
python export_bibliography.py --format bibtex

# Export query logs for reproducibility
python export_logs.py --output query_log.csv

# Generate summary statistics
python generate_stats.py --output summary_report.html`}</code></pre>
          </div>
        </details>
      </div>

      <h2 id="debugging">Debugging Strategies</h2>

      <p>
        When encountering issues, follow this systematic debugging approach:
      </p>

      <div className="border rounded-lg my-6 divide-y">
        <div className="p-4 bg-muted/30">
          <h4 className="font-semibold">Step-by-Step Debugging</h4>
        </div>

        <div className="p-4">
          <h5 className="font-semibold mb-2">1. Isolate the Problem</h5>
          <p className="text-sm mb-2">Determine which component is failing:</p>
          <pre className="bg-muted p-2 rounded text-xs"><code>{`# Test each component separately:

# 1. Embedding generation
test_embedding = embed_model.encode("test text")
print(f"Embedding shape: {test_embedding.shape}")

# 2. Vector DB connection
collection = client.get_collection("papers")
print(f"Collection size: {collection.count()}")

# 3. Retrieval
results = collection.query(query_embeddings=[test_embedding], n_results=5)
print(f"Retrieved {len(results['ids'][0])} results")

# 4. LLM generation
response = client.chat.completions.create(...)
print(f"Response: {response.choices[0].message.content}")`}</code></pre>
        </div>

        <div className="p-4 bg-muted/10">
          <h5 className="font-semibold mb-2">2. Enable Verbose Logging</h5>
          <pre className="bg-muted p-2 rounded text-xs"><code>{`import logging

logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    filename='debug.log'
)

logger = logging.getLogger(__name__)
logger.debug("Starting query processing...")
logger.info(f"Retrieved {len(results)} results")
logger.error(f"Failed to process: {error}")`}</code></pre>
        </div>

        <div className="p-4">
          <h5 className="font-semibold mb-2">3. Inspect Intermediate Results</h5>
          <pre className="bg-muted p-2 rounded text-xs"><code>{`# Save intermediate outputs for inspection
import json

# Save retrieved chunks
with open('debug_retrieval.json', 'w') as f:
    json.dump({
        'query': query,
        'retrieved_chunks': results,
        'similarities': similarities
    }, f, indent=2)

# Save LLM prompt
with open('debug_prompt.txt', 'w') as f:
    f.write(f"SYSTEM: {system_prompt}\\n\\n")
    f.write(f"CONTEXT: {context}\\n\\n")
    f.write(f"QUESTION: {question}")`}</code></pre>
        </div>

        <div className="p-4 bg-muted/10">
          <h5 className="font-semibold mb-2">4. Use Minimal Test Case</h5>
          <p className="text-sm">Create smallest possible example that reproduces the error:</p>
          <pre className="bg-muted p-2 rounded text-xs"><code>{`# minimal_test.py
# Remove all complexity, test one thing

import chromadb

client = chromadb.Client()
collection = client.create_collection("test")
collection.add(
    ids=["1"],
    documents=["Test document"],
    embeddings=[[0.1] * 1536]
)
results = collection.query(query_embeddings=[[0.1] * 1536], n_results=1)
print(results)  # Should work`}</code></pre>
        </div>
      </div>

      <h2 id="getting-help">Getting Help</h2>

      <p>
        If you're still stuck after trying the solutions above:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">📚 Documentation</h4>
          <ul className="text-sm space-y-1">
            <li>• <a href="https://github.com/YourRepo/ResearcherRAG" className="text-blue-600 underline">ResearcherRAG GitHub</a></li>
            <li>• <a href="https://docs.trychroma.com" className="text-blue-600 underline">ChromaDB Docs</a></li>
            <li>• <a href="https://python.langchain.com" className="text-blue-600 underline">LangChain Docs</a></li>
            <li>• <a href="https://platform.openai.com/docs" className="text-blue-600 underline">OpenAI API Docs</a></li>
          </ul>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-2">💬 Community Support</h4>
          <ul className="text-sm space-y-1">
            <li>• GitHub Issues (for bugs/features)</li>
            <li>• GitHub Discussions (for questions)</li>
            <li>• Discord/Slack community</li>
            <li>• Stack Overflow (tag: researcherrag)</li>
          </ul>
        </div>
      </div>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">🐛 Reporting Bugs</p>
        <p className="text-sm mb-2">When reporting issues, include:</p>
        <ul className="text-sm space-y-1">
          <li>✓ Python version (<code>python --version</code>)</li>
          <li>✓ Package versions (<code>pip freeze</code>)</li>
          <li>✓ Complete error message with traceback</li>
          <li>✓ Minimal code to reproduce the issue</li>
          <li>✓ What you've already tried</li>
        </ul>
      </div>

      <h2 id="conclusion">Conclusion</h2>

      <p>
        You've now completed the ResearcherRAG guide! You should have everything you need to build, deploy, and troubleshoot a production-ready RAG system for systematic literature reviews.
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border rounded-lg p-6 my-8">
        <h3 className="font-semibold mb-3">🎉 What You've Learned</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div>
            <p className="font-semibold mb-1">Fundamentals:</p>
            <ul className="space-y-1 ml-4">
              <li>✓ PRISMA methodology</li>
              <li>✓ RAG architecture</li>
              <li>✓ Vector databases</li>
              <li>✓ Embeddings & search</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-1">Implementation:</p>
            <ul className="space-y-1 ml-4">
              <li>✓ 5-stage workflow</li>
              <li>✓ Query strategies</li>
              <li>✓ Paper screening</li>
              <li>✓ System deployment</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-1">Advanced Topics:</p>
            <ul className="space-y-1 ml-4">
              <li>✓ Custom embeddings</li>
              <li>✓ Multi-language support</li>
              <li>✓ Performance optimization</li>
              <li>✓ Production monitoring</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-1">Best Practices:</p>
            <ul className="space-y-1 ml-4">
              <li>✓ Research methodology</li>
              <li>✓ Citation management</li>
              <li>✓ Reproducibility</li>
              <li>✓ Ethical considerations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center my-8">
        <Link href="/" className="inline-block border rounded-lg px-6 py-3 font-semibold hover:bg-muted/30 transition-colors">
          ← Back to Home
        </Link>
      </div>

      <div className="callout callout-success">
        <p className="font-semibold mb-2">🚀 Ready to Start Building?</p>
        <p className="mb-0">
          Head to the <Link href="/guide/01-introduction">Introduction</Link> to begin your ResearcherRAG journey, or jump directly to <Link href="/guide/02-getting-started">Getting Started</Link> if you're ready to install and set up your system.
        </p>
      </div>
    </GuideLayout>
  )
}
