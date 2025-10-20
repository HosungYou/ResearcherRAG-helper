# API Setup Guide

This guide walks you through setting up all the APIs needed for ScholaRAG.

---

## TL;DR (Quick Setup)

**Minimum Required**: Only Claude API (5 minutes)

```bash
# 1. Get Claude API key from https://console.anthropic.com
# 2. Create .env file in ScholaRAG directory
cd ScholaRAG
cp .env.example .env

# 3. Add your Claude API key to .env
echo "ANTHROPIC_API_KEY=sk-ant-api03-xxxxx" >> .env

# 4. Done! Start using ScholaRAG
```

**All other APIs are optional** - Semantic Scholar, OpenAlex, and arXiv work without API keys!

---

## API Requirements by Feature

| Feature | Required API | Free Tier | Setup Time |
|---------|--------------|-----------|------------|
| Paper Search | None (Public APIs) | ∞ (rate-limited) | 0 min |
| AI Screening | Claude API | $5 credit | 2 min |
| RAG Queries | Claude API | $5 credit | 2 min |
| Embeddings | None (Local model) | ∞ | 0 min |
| Vector Store | None (ChromaDB) | ∞ | 0 min |

**Total Cost for Small Project** (100 papers, 500 queries): **~$20-30**

---

## 1. Claude API (Required)

### What it's used for:
- AI-assisted paper screening (`03_screen_papers.py`)
- Literature review question answering (`06_query_rag.py`)
- Evidence synthesis with citations

### Why Claude?
- Best-in-class reasoning for academic content
- Excellent citation generation
- Long context (200K tokens) for full papers
- Competitive pricing: $3/million input tokens

### Setup Steps:

#### Step 1: Create Anthropic Account
1. Go to [https://console.anthropic.com](https://console.anthropic.com)
2. Click "Sign Up" (top right)
3. Sign up with Google/email
4. Verify your email

#### Step 2: Get API Key
1. After logging in, go to "API Keys" section
2. Click "Create Key"
3. Name it: "ScholaRAG"
4. Copy the key (starts with `sk-ant-api03-`)
5. **⚠️ Save it immediately** - you can't view it again!

#### Step 3: Add to .env File
```bash
# In ScholaRAG directory
nano .env

# Add this line:
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxx
```

#### Step 4: Test Connection
```bash
python -c "import os; from dotenv import load_dotenv; import anthropic; load_dotenv(); client = anthropic.Anthropic(api_key=os.getenv('ANTHROPIC_API_KEY')); print('✓ Claude API connected!')"
```

### Free Tier Details:
- **$5 free credit** upon signup
- Enough for:
  - ~500 paper screenings
  - ~200 literature review queries
  - ~1 week of prototype testing

### Pricing After Free Tier:
- **Claude 3.5 Sonnet**:
  - Input: $3 / million tokens (~$0.003 per paper)
  - Output: $15 / million tokens (~$0.015 per query)
- **Typical project costs**:
  - 100 papers screening: ~$1-2
  - 500 RAG queries: ~$10-20
  - **Total for medium project: $20-30**

### Rate Limits:
- Free tier: 50 requests/minute
- Paid tier: 1000 requests/minute
- **More than enough** for research workflows

---

## 2. Database APIs (Optional - All Free!)

### Why Optional?
All three databases provide **public APIs without authentication**:
- Semantic Scholar: No key needed
- OpenAlex: No key needed (but add email for "polite pool")
- arXiv: No key needed

### Setup:

#### Semantic Scholar (No Action Needed)
- ✅ Already configured in `scripts/01_fetch_papers.py`
- Rate limit: ~100 requests per 5 minutes
- Coverage: 200M+ papers, ~40% with open access PDFs

#### OpenAlex (Optional: Add Email for Higher Limits)
```python
# Edit scripts/01_fetch_papers.py line 167:
mailto = "your.email@university.edu"  # Change this to your email
```

**Benefits of adding email:**
- Default: 100 requests/day
- With email ("polite pool"): 100,000 requests/day (10 req/sec)
- Coverage: 250M+ papers, ~50% open access

**No signup needed** - just add your email to get higher limits!

#### arXiv (No Action Needed)
- ✅ Already configured
- Rate limit: 1 request per 3 seconds (enforced by script)
- Coverage: 2M+ papers, **100% PDF access**

---

## 3. Embedding Models (No API Key Needed)

ScholaRAG uses **local open-source models** by default:

### Default Model: `all-MiniLM-L6-v2`
- Provider: Sentence Transformers (HuggingFace)
- Size: 80MB
- Speed: ~500 sentences/second on CPU
- Quality: Excellent for academic text
- Cost: **$0** (runs locally)

### First Run:
```bash
# Model downloads automatically on first use
python scripts/05_build_rag.py --project projects/my-project

# Output:
# ⏳ Loading embedding model...
# Downloading all-MiniLM-L6-v2... [80MB]
# ✓ Model loaded
```

### Alternative Models (Optional):

**For better quality** (larger models):
```bash
# In scripts/05_build_rag.py, change embedding_model:
--embedding-model sentence-transformers/all-mpnet-base-v2  # 420MB, better quality
```

**For faster speed** (smaller models):
```bash
--embedding-model sentence-transformers/all-MiniLM-L12-v2  # 120MB, balanced
```

**For multilingual** (non-English papers):
```bash
--embedding-model sentence-transformers/paraphrase-multilingual-mpnet-base-v2
```

**All models are free and run locally** - no API key needed!

---

## 4. Vector Database (ChromaDB - No Setup Needed)

ScholaRAG uses **ChromaDB** for vector storage:

### Why ChromaDB?
- ✅ No server/cloud setup required
- ✅ No API keys needed
- ✅ Runs locally as a Python library
- ✅ Stores data in your project folder
- ✅ Persists across sessions automatically

### Storage Location:
```
projects/your-project/
└── data/
    └── 04_rag/
        └── chroma_db/          # Vector database stored here
            ├── index/
            ├── chroma.sqlite3   # SQLite backend
            └── *.parquet        # Vector embeddings
```

### Disk Space:
- **~1-5 MB per paper** (including embeddings)
- 100 papers ≈ 100-500 MB
- 1000 papers ≈ 1-5 GB

### Performance:
- Retrieval: <100ms for 10K chunks
- No internet connection needed after building

### Alternative: Cloud Qdrant (Optional)

If you want **cloud storage** or **multi-user access**:

#### Step 1: Create Qdrant Cloud Account
1. Go to [https://cloud.qdrant.io](https://cloud.qdrant.io)
2. Sign up (free tier: 1GB cluster)

#### Step 2: Create Cluster
1. Click "Create Cluster"
2. Choose region (closest to you)
3. Free tier: 1GB storage, 1M vectors

#### Step 3: Get API Key
1. Click on your cluster
2. Go to "API Keys" tab
3. Copy cluster URL and API key

#### Step 4: Add to .env
```bash
QDRANT_URL=https://xxxxx.aws.cloud.qdrant.io
QDRANT_API_KEY=xxxxxxxxxxxxxxxxxxxxx
```

#### Step 5: Modify Scripts
```python
# In scripts/05_build_rag.py, replace Chroma with Qdrant:
from langchain_community.vectorstores import Qdrant
import qdrant_client

client = qdrant_client.QdrantClient(
    url=os.getenv("QDRANT_URL"),
    api_key=os.getenv("QDRANT_API_KEY")
)

vectorstore = Qdrant(
    client=client,
    collection_name=collection_name,
    embeddings=embeddings
)
```

**For most users, local ChromaDB is sufficient!**

---

## 5. Alternative LLMs (Optional)

If you prefer **OpenAI GPT-4** or **Groq** instead of Claude:

### OpenAI GPT-4

#### Setup:
1. Get API key: [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Add to `.env`:
```bash
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxx
```

#### Modify Scripts:
```python
# In scripts/03_screen_papers.py and scripts/06_query_rag.py
# Replace:
import anthropic
client = anthropic.Anthropic(api_key=os.getenv('ANTHROPIC_API_KEY'))

# With:
from openai import OpenAI
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
```

#### Pricing:
- GPT-4: $10/$30 per million tokens (input/output)
- GPT-3.5-turbo: $0.50/$1.50 per million tokens
- **~2x more expensive than Claude** for same task

### Groq (Fast Inference)

#### Setup:
1. Get API key: [https://console.groq.com](https://console.groq.com)
2. Add to `.env`:
```bash
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxx
```

#### Modify Scripts:
```python
# Replace Anthropic client with Groq
from groq import Groq
client = Groq(api_key=os.getenv('GROQ_API_KEY'))
```

#### Pricing:
- Free tier: 30 requests/minute
- Paid: $0.05-$0.10 per million tokens
- **10x faster** than Claude/GPT-4
- **Best for**: High-volume screening

---

## Cost Calculator

### Example Project: "AI Chatbots in Language Learning"

#### Phase 1: Paper Search (FREE)
- Semantic Scholar: 210 papers
- OpenAlex: 175 papers
- arXiv: 18 papers
- **Total: 403 papers**
- **Cost: $0** (public APIs)

#### Phase 2: Deduplication (FREE)
- Remove duplicates: 102 papers
- **Remaining: 301 papers**
- **Cost: $0** (local processing)

#### Phase 3: AI Screening ($3-6)
- Screen 301 papers
- Avg tokens per paper: 500 (title + abstract)
- Total input: 150K tokens
- Claude cost: $0.45 input + $2-4 output
- **Cost: $3-6**

#### Phase 4: PDF Download (FREE)
- Download 79 PDFs (26% success rate)
- **Cost: $0** (direct downloads)

#### Phase 5: RAG Building (FREE)
- Chunk 79 papers: ~1500 chunks
- Generate embeddings: Local model
- Store in ChromaDB: Local storage
- **Cost: $0**

#### Phase 6: Literature Review ($10-20)
- 200 queries × ~2K tokens avg
- Total: 400K input tokens
- Claude cost: $1.20 input + $10-15 output
- **Cost: $10-20**

#### Phase 7: PRISMA Diagram (FREE)
- Generate visualization
- **Cost: $0** (matplotlib)

### TOTAL PROJECT COST: **$15-30**

---

## Troubleshooting

### Issue: "ANTHROPIC_API_KEY not found"

**Solution:**
```bash
# Check if .env file exists
ls -la .env

# If not, create it:
cp .env.example .env

# Verify key is loaded:
python -c "from dotenv import load_dotenv; import os; load_dotenv(); print(os.getenv('ANTHROPIC_API_KEY'))"
```

### Issue: "Invalid API key"

**Solution:**
```bash
# Test API key directly:
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{"model":"claude-3-5-sonnet-20241022","max_tokens":100,"messages":[{"role":"user","content":"test"}]}'

# If error, regenerate key at console.anthropic.com
```

### Issue: "Rate limit exceeded"

**Solution:**
```bash
# Add delay between API calls in scripts:
import time
time.sleep(1)  # Wait 1 second between calls

# Or reduce batch size:
python scripts/03_screen_papers.py --batch-size 20  # Default: 50
```

### Issue: "Embedding model download fails"

**Solution:**
```bash
# Manually download model:
python -c "from sentence_transformers import SentenceTransformer; SentenceTransformer('all-MiniLM-L6-v2')"

# Or use HuggingFace cache:
export HF_HOME=/path/to/cache
```

---

## Security Best Practices

### 1. Never Commit API Keys
```bash
# Verify .env is in .gitignore:
cat .gitignore | grep .env

# If not:
echo ".env" >> .gitignore
```

### 2. Use Environment Variables (Not Hardcoded)
```python
# ✅ Good:
api_key = os.getenv('ANTHROPIC_API_KEY')

# ❌ Bad:
api_key = "sk-ant-api03-xxxxx"  # Never hardcode!
```

### 3. Rotate Keys Regularly
- Regenerate API keys every 3-6 months
- Delete unused keys from console

### 4. Use Read-Only Keys When Possible
- Some services offer read-only keys
- Use them for production deployments

---

## Next Steps

Once you've set up your API keys:

1. ✅ Test your setup:
```bash
python scripts/01_fetch_papers.py --project projects/test --query "test"
```

2. ✅ Follow the [Quick Start Guide](QUICK_START.md)

3. ✅ Read the [5-Stage Practical Guide](frontend/app/guide/05-advanced-topics/page.tsx)

4. ✅ Join the community (link in README)

---

**Questions?** Open an issue at [GitHub](https://github.com/HosungYou/ScholaRAG/issues)
