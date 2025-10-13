import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Mermaid from '@/components/Mermaid'
import { CodeBlock } from '@/components/CodeBlock'

export default function AdvancedTopicsPage() {
  return (
    <GuideLayout>
      <h1>Advanced Topics</h1>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Once you've mastered the basics of ResearcherRAG, it's time to explore advanced techniques that can significantly enhance your RAG system's capabilities. This chapter covers custom embedding models, multi-language support, incremental updates, hybrid search strategies, and production optimization techniques for high-performance research applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <div className="text-2xl mb-2">🔬</div>
          <h3 className="font-semibold mb-2">Custom Embeddings</h3>
          <p className="text-sm text-muted-foreground">
            Fine-tune domain-specific embedding models for better retrieval accuracy in specialized fields.
          </p>
        </div>
        <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <div className="text-2xl mb-2">🌍</div>
          <h3 className="font-semibold mb-2">Multi-Language</h3>
          <p className="text-sm text-muted-foreground">
            Handle research papers in multiple languages with cross-lingual embeddings and translation.
          </p>
        </div>
        <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <div className="text-2xl mb-2">⚡</div>
          <h3 className="font-semibold mb-2">Production Ready</h3>
          <p className="text-sm text-muted-foreground">
            Scale your system with caching, monitoring, and optimization strategies for real-world use.
          </p>
        </div>
      </div>

      <h2 id="custom-embeddings">Custom Embedding Models</h2>

      <p>
        While OpenAI's <code>text-embedding-3-small</code> works well for general purposes, you can achieve better retrieval accuracy by using domain-specific embedding models or fine-tuning your own.
      </p>

      <h3 id="domain-specific-models">Domain-Specific Pre-trained Models</h3>

      <p>
        Several research groups have released embedding models trained on academic papers:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Model</th>
              <th className="text-left p-2">Domain</th>
              <th className="text-left p-2">Dimensions</th>
              <th className="text-left p-2">Best For</th>
              <th className="text-left p-2">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-semibold">SciBERT</td>
              <td className="p-2">Scientific papers</td>
              <td className="p-2">768</td>
              <td className="p-2">Biology, chemistry, physics</td>
              <td className="p-2">AllenAI</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">BioBERT</td>
              <td className="p-2">Biomedical</td>
              <td className="p-2">768</td>
              <td className="p-2">Medical research, healthcare</td>
              <td className="p-2">DMIS Lab</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">LegalBERT</td>
              <td className="p-2">Legal texts</td>
              <td className="p-2">768</td>
              <td className="p-2">Law, policy, regulations</td>
              <td className="p-2">NLP Aueb</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">SPECTER</td>
              <td className="p-2">Citations/papers</td>
              <td className="p-2">768</td>
              <td className="p-2">Document similarity</td>
              <td className="p-2">AllenAI</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">SPECTER2</td>
              <td className="p-2">Scientific docs</td>
              <td className="p-2">768</td>
              <td className="p-2">Multi-task academic search</td>
              <td className="p-2">AllenAI</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="using-custom-models">Using Custom Models in ResearcherRAG</h3>

      <p>
        To use a custom embedding model, update your <code>rag_config.yaml</code>:
      </p>

      <CodeBlock
        language="sql"
        code={`# rag_config.yaml

embedding:
  type: huggingface  # Changed from 'openai'
  model: allenai/specter2
  dimensions: 768
  device: cuda  # or 'cpu' if no GPU
  batch_size: 32
  normalize: true

# Optional: Use a local model cache
cache:
  embeddings: ./cache/embeddings/
  models: ./cache/models/`}
      />

      <p>
        Install the required dependencies:
      </p>

      <CodeBlock
        language="bash"
        code={`pip install sentence-transformers transformers torch

# For GPU support (optional but recommended)
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118`}
      />

      <p>
        Update your embedding generation code:
      </p>

      <CodeBlock
        language="sql"
        code={`from sentence_transformers import SentenceTransformer

# Load domain-specific model
model = SentenceTransformer('allenai/specter2')

# Generate embeddings
texts = ["Your research paper text here..."]
embeddings = model.encode(
    texts,
    batch_size=32,
    show_progress_bar=True,
    normalize_embeddings=True  # Important for cosine similarity
)

print(f"Generated {len(embeddings)} embeddings of dimension {embeddings[0].shape}")`}
      />

      <div className="callout callout-info">
        <p className="font-semibold mb-2">💡 When to Use Custom Embeddings</p>
        <p className="mb-2">Consider custom models when:</p>
        <ul className="text-sm space-y-1">
          <li>• Your domain has specialized terminology (medical, legal, technical)</li>
          <li>• You're working with non-English papers</li>
          <li>• You need better accuracy than general-purpose models</li>
          <li>• You want to avoid API costs for large-scale projects</li>
          <li>• You need offline/air-gapped deployment</li>
        </ul>
      </div>

      <h3 id="fine-tuning">Fine-Tuning Embeddings</h3>

      <p>
        For maximum performance, fine-tune an embedding model on your specific research domain:
      </p>

      <Mermaid chart={`
graph LR
    A[Base Model<br/>e.g., SPECTER2] --> B[Collect Training Data]
    B --> C[Paper Pairs<br/>Similar/Dissimilar]
    C --> D[Fine-tune with<br/>Contrastive Loss]
    D --> E[Evaluate on<br/>Test Set]
    E --> F{Performance<br/>Improved?}
    F -->|No| G[Adjust Hyperparameters]
    G --> D
    F -->|Yes| H[Deploy Custom Model]

    style A fill:#e0e7ff
    style H fill:#dcfce7
    style F fill:#fef3c7
`} />

      <details className="border rounded-lg my-4">
        <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
          Example: Fine-tuning for Healthcare Technology Adoption
        </summary>
        <div className="p-4 pt-0 border-t space-y-3">
          <p>Create training pairs from your PRISMA dataset:</p>
          <CodeBlock
        language="sql"
        code={`# training_pairs.py
import pandas as pd
from sentence_transformers import InputExample

# Load your papers
papers = pd.read_csv('final_dataset.csv')

# Create positive pairs (papers citing each other)
positive_pairs = []
for idx, paper in papers.iterrows():
    # Papers with shared keywords/topics are similar
    similar = papers[papers['keywords'].apply(
        lambda x: len(set(x.split(','))) & set(paper['keywords'].split(',')) > 3
    )]
    for _, sim_paper in similar.iterrows():
        positive_pairs.append(InputExample(
            texts=[paper['abstract'], sim_paper['abstract']],
            label=1.0
        ))

# Create negative pairs (different research areas)
negative_pairs = []
for idx, paper in papers.iterrows():
    dissimilar = papers[papers['category'] != paper['category']].sample(5)
    for _, dissim_paper in dissimilar.iterrows():
        negative_pairs.append(InputExample(
            texts=[paper['abstract'], dissim_paper['abstract']],
            label=0.0
        ))

train_examples = positive_pairs + negative_pairs
print(f"Created {len(train_examples)} training examples")`}
      />

          <p>Fine-tune the model:</p>
          <CodeBlock
        language="sql"
        code={`from sentence_transformers import SentenceTransformer, losses
from torch.utils.data import DataLoader

# Load base model
model = SentenceTransformer('allenai/specter2')

# Create DataLoader
train_dataloader = DataLoader(train_examples, shuffle=True, batch_size=16)

# Define loss function
train_loss = losses.CosineSimilarityLoss(model)

# Fine-tune
model.fit(
    train_objectives=[(train_dataloader, train_loss)],
    epochs=3,
    warmup_steps=100,
    output_path='./models/custom-healthcare-embeddings'
)

print("Fine-tuning complete! Model saved.")`}
      />

          <p className="text-sm text-muted-foreground">
            Fine-tuning typically improves retrieval accuracy by 10-25% on domain-specific queries.
          </p>
        </div>
      </details>

      <h2 id="multi-language">Multi-Language Support</h2>

      <p>
        Many systematic reviews include papers in multiple languages. ResearcherRAG supports cross-lingual search with multilingual embeddings and optional translation.
      </p>

      <h3 id="multilingual-embeddings">Multilingual Embedding Models</h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Model</th>
              <th className="text-left p-2">Languages</th>
              <th className="text-left p-2">Dimensions</th>
              <th className="text-left p-2">Best Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-semibold">multilingual-e5-large</td>
              <td className="p-2">100+ languages</td>
              <td className="p-2">1024</td>
              <td className="p-2">Cross-lingual search</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">paraphrase-multilingual-mpnet</td>
              <td className="p-2">50+ languages</td>
              <td className="p-2">768</td>
              <td className="p-2">Semantic similarity</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-semibold">LaBSE</td>
              <td className="p-2">109 languages</td>
              <td className="p-2">768</td>
              <td className="p-2">Language pairs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Multilingual embeddings map text from different languages into the same vector space, enabling cross-lingual search:
      </p>

      <Mermaid chart={`
graph TD
    A[English Query:<br/>"technology adoption"] --> B[Multilingual<br/>Embedding Model]
    C[Spanish Paper:<br/>"adopción de tecnología"] --> B
    D[French Paper:<br/>"adoption de technologie"] --> B
    E[Korean Paper:<br/>"기술 채택"] --> B

    B --> F[Shared Vector Space]

    F --> G[Semantic Similarity<br/>Calculation]
    G --> H[Retrieve Relevant Papers<br/>Regardless of Language]

    style A fill:#e0e7ff
    style B fill:#fce7f3
    style F fill:#fef3c7
    style H fill:#dcfce7
`} />

      <h3 id="translation-pipeline">Optional Translation Pipeline</h3>

      <p>
        For better LLM understanding, translate non-English papers to English during ingestion:
      </p>

      <CodeBlock
        language="yaml"
        code={`# translation_config.yaml

translation:
  enabled: true
  source_languages: ['es', 'fr', 'de', 'zh', 'ja', 'ko']
  target_language: 'en'

  # Translation provider
  provider: deepl  # or 'google', 'azure', 'opus-mt'
  api_key: \${DEEPL_API_KEY}

  # When to translate
  translate_on: ingest  # or 'query' or 'both'

  # Keep original text
  store_original: true
  store_translation: true`}
      />

      <p>
        Implement translation in your ingestion pipeline:
      </p>

      <CodeBlock
        language="sql"
        code={`import deepl
from langdetect import detect

def ingest_with_translation(paper_text, metadata):
    """Ingest paper with optional translation"""

    # Detect language
    lang = detect(paper_text)

    # Translate if not English
    if lang != 'en':
        translator = deepl.Translator(os.getenv('DEEPL_API_KEY'))
        translation = translator.translate_text(
            paper_text,
            target_lang='EN-US'
        )
        english_text = translation.text
    else:
        english_text = paper_text

    # Store both versions
    chunk_metadata = {
        **metadata,
        'language': lang,
        'original_text': paper_text if lang != 'en' else None,
        'translated': lang != 'en'
    }

    # Embed and store English version
    embedding = embed_model.encode(english_text)
    vector_db.add(
        text=english_text,
        embedding=embedding,
        metadata=chunk_metadata
    )

    return chunk_metadata`}
      />

      <div className="callout callout-warning">
        <p className="font-semibold mb-2">⚠️ Translation Costs</p>
        <p className="mb-0">
          Machine translation can be expensive for large datasets. DeepL charges ~$20/million characters. Consider: (1) only translating abstracts, not full papers, (2) using open-source models like <strong>NLLB</strong> or <strong>M2M100</strong> for free translation, or (3) using multilingual embeddings without translation.
        </p>
      </div>

      <h2 id="incremental-updates">Incremental Updates</h2>

      <p>
        Research is constantly evolving. Keep your RAG system up-to-date with incremental paper ingestion without rebuilding the entire vector database.
      </p>

      <h3 id="change-detection">Change Detection Strategy</h3>

      <Mermaid chart={`
graph TD
    A[Scheduled Task<br/>Daily/Weekly] --> B[Query Databases<br/>with Date Filter]
    B --> C[Fetch New Papers<br/>published_after=last_update]
    C --> D{New Papers<br/>Found?}
    D -->|No| E[Skip Update]
    D -->|Yes| F[Apply PRISMA Screening]
    F --> G[Download PDFs]
    G --> H[Extract & Chunk]
    H --> I[Generate Embeddings]
    I --> J[Add to Vector DB]
    J --> K[Update Metadata Index]
    K --> L[Log Update Stats]

    style A fill:#e0e7ff
    style D fill:#fef3c7
    style J fill:#dcfce7
    style L fill:#bbf7d0
`} />

      <p>
        Implement incremental updates with a tracking database:
      </p>

      <CodeBlock
        language="sql"
        code={`# incremental_update.py
import json
from datetime import datetime, timedelta

def incremental_update(rag_system, config):
    """Add new papers without rebuilding entire database"""

    # Load last update timestamp
    with open('last_update.json', 'r') as f:
        last_update = datetime.fromisoformat(json.load(f)['timestamp'])

    print(f"Checking for papers published after {last_update}")

    # Query databases with date filter
    new_papers = []
    for db in config['databases']:
        results = query_database(
            db,
            query=config['search_query'],
            date_from=last_update,
            date_to=datetime.now()
        )
        new_papers.extend(results)

    print(f"Found {len(new_papers)} new papers")

    # Apply PRISMA screening
    screened = apply_inclusion_criteria(new_papers, config['criteria'])
    print(f"{len(screened)} papers passed screening")

    # Ingest into RAG system
    added_count = 0
    for paper in screened:
        # Check for duplicates (by DOI or title similarity)
        if not rag_system.exists(paper['doi']):
            rag_system.ingest_paper(paper)
            added_count += 1

    # Update timestamp
    with open('last_update.json', 'w') as f:
        json.dump({'timestamp': datetime.now().isoformat()}, f)

    print(f"✓ Added {added_count} new papers to RAG system")
    return added_count`}
      />

      <h3 id="version-control">Version Control for Knowledge Base</h3>

      <p>
        Track changes to your knowledge base over time:
      </p>

      <CodeBlock
        language="text"
        code={`# knowledge_base_versions/
# ├── v1.0.0_2024-01-15_137papers.snapshot
# ├── v1.1.0_2024-02-01_143papers.snapshot
# ├── v1.2.0_2024-03-15_156papers.snapshot
# └── changelog.md

# Example changelog entry:
## v1.2.0 - 2024-03-15
- Added 13 new papers (2024 publications)
- Removed 0 papers
- Updated metadata for 3 papers (DOI corrections)
- Total papers: 156
- Total chunks: 2,847
- Vector DB size: 1.2 GB`}
      />

      <h2 id="hybrid-search">Hybrid Search Strategies</h2>

      <p>
        Combine semantic search (embeddings) with keyword search (BM25) for better retrieval accuracy:
      </p>

      <Mermaid chart={`
graph LR
    A[User Query] --> B[Semantic Search<br/>Vector Similarity]
    A --> C[Keyword Search<br/>BM25/TF-IDF]

    B --> D[Top-10 Results<br/>Score: 0.85, 0.82, ...]
    C --> E[Top-10 Results<br/>Score: 12.3, 9.8, ...]

    D --> F[Reciprocal Rank Fusion<br/>RRF Algorithm]
    E --> F

    F --> G[Merged Results<br/>Top-5 Final]
    G --> H[Re-ranking<br/>Cross-Encoder]
    H --> I[Top-3 to LLM]

    style A fill:#e0e7ff
    style F fill:#fef3c7
    style H fill:#fce7f3
    style I fill:#dcfce7
`} />

      <p>
        Implement hybrid search with reciprocal rank fusion (RRF):
      </p>

      <CodeBlock
        language="sql"
        code={`from rank_bm25 import BM25Okapi
import numpy as np

def hybrid_search(query, vector_db, bm25_index, k=5):
    """Combine semantic and keyword search"""

    # 1. Semantic search
    query_embedding = embed_model.encode(query)
    semantic_results = vector_db.search(
        query_embedding,
        top_k=20
    )

    # 2. Keyword search (BM25)
    tokenized_query = query.lower().split()
    bm25_scores = bm25_index.get_scores(tokenized_query)
    bm25_results = [
        {'id': idx, 'score': score}
        for idx, score in enumerate(bm25_scores)
    ]
    bm25_results = sorted(bm25_results, key=lambda x: x['score'], reverse=True)[:20]

    # 3. Reciprocal Rank Fusion
    def rrf_score(rank, k=60):
        return 1 / (k + rank)

    fused_scores = {}

    # Add semantic scores
    for rank, result in enumerate(semantic_results):
        doc_id = result['id']
        fused_scores[doc_id] = fused_scores.get(doc_id, 0) + rrf_score(rank)

    # Add BM25 scores
    for rank, result in enumerate(bm25_results):
        doc_id = result['id']
        fused_scores[doc_id] = fused_scores.get(doc_id, 0) + rrf_score(rank)

    # Sort by fused score
    final_results = sorted(
        fused_scores.items(),
        key=lambda x: x[1],
        reverse=True
    )[:k]

    return [{'id': doc_id, 'score': score} for doc_id, score in final_results]`}
      />

      <div className="callout callout-success">
        <p className="font-semibold mb-2">📈 Hybrid Search Benefits</p>
        <ul className="text-sm space-y-1">
          <li>✓ <strong>Better recall:</strong> Catches papers missed by semantic search alone</li>
          <li>✓ <strong>Keyword precision:</strong> Handles exact term matches (acronyms, technical terms)</li>
          <li>✓ <strong>Robust:</strong> Works even when embeddings don't capture nuances</li>
          <li>✓ <strong>Typical improvement:</strong> 10-15% better retrieval accuracy</li>
        </ul>
      </div>

      <h2 id="re-ranking">Advanced Re-Ranking</h2>

      <p>
        After initial retrieval, use a cross-encoder to re-rank results for maximum relevance:
      </p>

      <CodeBlock
        language="sql"
        code={`from sentence_transformers import CrossEncoder

# Load cross-encoder model
cross_encoder = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')

def rerank_results(query, initial_results, top_k=3):
    """Re-rank results with cross-encoder for better accuracy"""

    # Prepare pairs: (query, passage)
    pairs = [(query, result['text']) for result in initial_results]

    # Get relevance scores
    scores = cross_encoder.predict(pairs)

    # Add scores to results
    for result, score in zip(initial_results, scores):
        result['rerank_score'] = float(score)

    # Sort by rerank score
    reranked = sorted(
        initial_results,
        key=lambda x: x['rerank_score'],
        reverse=True
    )[:top_k]

    return reranked

# Example usage
initial_results = hybrid_search(query, vector_db, bm25_index, k=10)
final_results = rerank_results(query, initial_results, top_k=3)
# Send top-3 most relevant chunks to LLM`}
      />

      <h2 id="caching">Performance Optimization with Caching</h2>

      <p>
        Implement multi-level caching to dramatically reduce costs and latency:
      </p>

      <Mermaid chart={`
graph TD
    A[User Query] --> B{Exact Match<br/>in Cache?}
    B -->|Yes| C[Return Cached<br/>Response<br/>~50ms]
    B -->|No| D{Semantic Similar<br/>in Cache?}
    D -->|Yes, >0.95| E[Return Similar<br/>Response<br/>~100ms]
    D -->|No| F[Full RAG Pipeline]
    F --> G[Vector Search]
    G --> H[LLM Generation]
    H --> I[Cache Response]
    I --> J[Return to User<br/>~2000ms]

    style A fill:#e0e7ff
    style B fill:#fef3c7
    style C fill:#dcfce7
    style E fill:#dcfce7
    style J fill:#bbf7d0
`} />

      <CodeBlock
        language="sql"
        code={`import hashlib
from redis import Redis
from datetime import timedelta

class RAGCache:
    """Multi-level caching for RAG queries"""

    def __init__(self, redis_client):
        self.redis = redis_client
        self.embedding_cache = {}  # In-memory cache

    def query_hash(self, query):
        """Generate cache key"""
        return hashlib.sha256(query.encode()).hexdigest()

    def get_cached_response(self, query):
        """Check cache for exact or similar queries"""
        cache_key = self.query_hash(query)

        # Level 1: Exact match (fastest)
        cached = self.redis.get(f"query:{cache_key}")
        if cached:
            return json.loads(cached), 'exact'

        # Level 2: Semantic similarity (fast)
        query_emb = self.get_cached_embedding(query)
        similar_queries = self.find_similar_cached_queries(query_emb, threshold=0.95)
        if similar_queries:
            # Return cached response from most similar query
            return similar_queries[0]['response'], 'similar'

        return None, None

    def cache_response(self, query, response, ttl=timedelta(hours=24)):
        """Cache query and response"""
        cache_key = self.query_hash(query)

        # Store in Redis with TTL
        self.redis.setex(
            f"query:{cache_key}",
            ttl,
            json.dumps(response)
        )

        # Store embedding for semantic similarity
        query_emb = self.get_cached_embedding(query)
        self.redis.hset(
            "query_embeddings",
            cache_key,
            json.dumps(query_emb.tolist())
        )

    def get_cached_embedding(self, text):
        """Cache embeddings to avoid re-computing"""
        cache_key = self.query_hash(text)

        if cache_key in self.embedding_cache:
            return self.embedding_cache[cache_key]

        # Generate and cache
        embedding = embed_model.encode(text)
        self.embedding_cache[cache_key] = embedding
        return embedding`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <h4 className="font-semibold mb-2">💰 Cost Savings</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>50-70% reduction</strong> in LLM costs</li>
            <li>• <strong>80-90% reduction</strong> in embedding costs</li>
            <li>• Especially effective for common queries</li>
          </ul>
        </div>
        <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
          <h4 className="font-semibold mb-2">⚡ Speed Improvements</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Exact cache:</strong> 50ms (40x faster)</li>
            <li>• <strong>Similar cache:</strong> 100ms (20x faster)</li>
            <li>• <strong>Full pipeline:</strong> 2000ms (baseline)</li>
          </ul>
        </div>
      </div>

      <h2 id="monitoring">Production Monitoring</h2>

      <p>
        Implement comprehensive monitoring for production RAG systems:
      </p>

      <h3 id="key-metrics">Key Metrics to Track</h3>

      <div className="grid grid-cols-1 gap-4 my-6">
        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            1. Query Performance Metrics
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <CodeBlock
        language="yaml"
        code={`# Log query metrics
metrics = {
    'timestamp': datetime.now(),
    'query': query,
    'latency_ms': {
        'embedding_generation': 45,
        'vector_search': 23,
        'llm_generation': 1840,
        'total': 1908
    },
    'tokens': {
        'input': 1250,
        'output': 340,
        'context_retrieved': 1100
    },
    'retrieval': {
        'num_results': 5,
        'avg_similarity': 0.78,
        'min_similarity': 0.71
    },
    'cache_hit': False
}`}
      />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            2. Quality Metrics
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <CodeBlock
        language="yaml"
        code={`# Track answer quality
quality_metrics = {
    'citations_count': 3,
    'citations_valid': 3,
    'hallucination_detected': False,
    'user_feedback': {
        'helpful': True,  # User thumbs up/down
        'rating': 4,      # 1-5 stars
        'reported_issue': None
    },
    'confidence_score': 0.87  # LLM self-assessment
}`}
      />
          </div>
        </details>

        <details className="border rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold hover:bg-muted/30">
            3. Cost Tracking
          </summary>
          <div className="p-4 pt-0 border-t space-y-3">
            <CodeBlock
        language="yaml"
        code={`# Calculate per-query costs
cost_breakdown = {
    'embedding_cost': 0.00002,  # $0.02/1M tokens
    'llm_cost': 0.0048,         # $3/1M input + $15/1M output
    'vector_db_cost': 0.00001,  # Negligible for ChromaDB
    'total_cost': 0.00483,
    'monthly_projection': 0.00483 * queries_per_day * 30
}`}
      />
          </div>
        </details>
      </div>

      <h3 id="alerting">Alerting and Anomaly Detection</h3>

      <pre className="bg-black text-white p-3 rounded overflow-x-auto text-sm my-4"><code>{'# monitoring_rules.py\n\n' +
'def check_system_health(metrics):\n' +
'    """Alert on anomalies"""\n' +
'\n' +
'    alerts = []\n' +
'\n' +
'    # Latency alert\n' +
'    if metrics[\'latency_ms\'][\'total\'] > 5000:\n' +
'        alerts.append({\n' +
'            \'severity\': \'warning\',\n' +
'            \'message\': f"High latency: {metrics[\'latency_ms\'][\'total\']}ms",\n' +
'            \'threshold\': 5000\n' +
'        })\n' +
'\n' +
'    # Low similarity alert\n' +
'    if metrics[\'retrieval\'][\'avg_similarity\'] < 0.6:\n' +
'        alerts.append({\n' +
'            \'severity\': \'warning\',\n' +
'            \'message\': f"Low retrieval similarity: {metrics[\'retrieval\'][\'avg_similarity\']}",\n' +
'            \'suggestion\': \'Query may be out of domain or knowledge base needs updating\'\n' +
'        })\n' +
'\n' +
'    # Cost alert\n' +
'    daily_cost = calculate_daily_cost()\n' +
'    if daily_cost > 50:  # $50/day threshold\n' +
'        alerts.append({\n' +
'            \'severity\': \'critical\',\n' +
'            \'message\': f"High daily cost: ${daily_cost}",\n' +
'            \'suggestion\': \'Enable caching or reduce LLM calls\'\n' +
'        })\n' +
'\n' +
'    # Send alerts\n' +
'    for alert in alerts:\n' +
'        send_notification(alert)\n' +
'\n' +
'    return alerts'}</code></pre>

      <h2 id="scaling">Scaling to Large Datasets</h2>

      <p>
        When your systematic review grows beyond 500 papers (~10,000 chunks), consider these scaling strategies:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Dataset Size</th>
              <th className="text-left p-2">Vector DB</th>
              <th className="text-left p-2">Search Strategy</th>
              <th className="text-left p-2">Expected Latency</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">&lt;100 papers</td>
              <td className="p-2">ChromaDB (local)</td>
              <td className="p-2">Simple semantic search</td>
              <td className="p-2">&lt;200ms</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">100-500 papers</td>
              <td className="p-2">ChromaDB or FAISS</td>
              <td className="p-2">Hybrid search</td>
              <td className="p-2">&lt;500ms</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">500-2000 papers</td>
              <td className="p-2">FAISS with IVF index</td>
              <td className="p-2">Hybrid + re-ranking</td>
              <td className="p-2">&lt;1000ms</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">&gt;2000 papers</td>
              <td className="p-2">Qdrant or Pinecone</td>
              <td className="p-2">Distributed search</td>
              <td className="p-2">&lt;1500ms</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout callout-info">
        <p className="font-semibold mb-2">🎯 Optimization Priority</p>
        <p className="mb-2">Focus optimization efforts where they matter most:</p>
        <ol className="text-sm space-y-1 ml-4">
          <li>1. <strong>Caching</strong> (biggest impact for common queries)</li>
          <li>2. <strong>Embedding efficiency</strong> (use smaller/local models)</li>
          <li>3. <strong>Vector DB indexing</strong> (FAISS IVF for large datasets)</li>
          <li>4. <strong>LLM optimization</strong> (prompt caching, smaller context)</li>
        </ol>
      </div>

      <h2 id="next-steps">Next Steps</h2>

      <p>
        You've now learned advanced techniques to take your ResearcherRAG system to the next level. Continue to the final chapters for best practices and troubleshooting:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link href="/guide/06-best-practices" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <h3 className="font-semibold mb-2">✨ Chapter 6: Best Practices</h3>
          <p className="text-sm text-muted-foreground">
            Research methodology best practices, citation management, and reproducibility guidelines.
          </p>
        </Link>

        <Link href="/guide/07-troubleshooting" className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
          <h3 className="font-semibold mb-2">🔧 Chapter 7: Troubleshooting</h3>
          <p className="text-sm text-muted-foreground">
            Common issues, debugging strategies, and comprehensive FAQ section.
          </p>
        </Link>
      </div>
    </GuideLayout>
  )
}
