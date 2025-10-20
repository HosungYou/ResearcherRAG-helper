"""
Document Embedding Pipeline for ScholarRAG Helper Chatbot

Embeds all documentation files into ChromaDB for RAG retrieval.
"""

import os
import glob
from pathlib import Path
from typing import List, Dict
import chromadb
from chromadb.config import Settings
from sentence_transformers import SentenceTransformer


class DocumentEmbedder:
    """Embed markdown documents into ChromaDB"""

    def __init__(self, docs_dir: str, vector_db_path: str):
        """
        Initialize embedder

        Args:
            docs_dir: Path to docs directory
            vector_db_path: Path to ChromaDB storage
        """
        self.docs_dir = Path(docs_dir)
        self.vector_db_path = Path(vector_db_path)

        # Initialize embedding model
        print("Loading embedding model...")
        self.embedding_model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

        # Initialize ChromaDB
        print("Initializing ChromaDB...")
        self.vector_db_path.mkdir(parents=True, exist_ok=True)
        self.client = chromadb.PersistentClient(
            path=str(self.vector_db_path),
            settings=Settings(anonymized_telemetry=False)
        )

        # Create or get collection
        self.collection = self.client.get_or_create_collection(
            name="scholarag_docs",
            metadata={"description": "ScholarRAG documentation for chatbot RAG"}
        )

    def load_documents(self) -> List[Dict[str, str]]:
        """Load all markdown documents"""
        documents = []

        # Find all markdown files
        md_files = list(self.docs_dir.rglob("*.md")) + list(self.docs_dir.rglob("*.mdx"))

        print(f"Found {len(md_files)} markdown files")

        for file_path in md_files:
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Skip empty files
                if not content.strip():
                    continue

                # Get relative path for metadata
                rel_path = file_path.relative_to(self.docs_dir)

                documents.append({
                    'content': content,
                    'path': str(rel_path),
                    'filename': file_path.name,
                    'type': 'documentation'
                })

                print(f"  ✓ Loaded: {rel_path}")

            except Exception as e:
                print(f"  ✗ Error loading {file_path}: {e}")

        return documents

    def chunk_document(self, content: str, chunk_size: int = 1000, overlap: int = 200) -> List[str]:
        """
        Chunk document into smaller pieces

        Args:
            content: Document content
            chunk_size: Maximum chunk size in characters
            overlap: Overlap between chunks

        Returns:
            List of text chunks
        """
        chunks = []
        start = 0

        while start < len(content):
            end = start + chunk_size

            # Try to break at paragraph boundary
            if end < len(content):
                # Look for double newline (paragraph break)
                newline_pos = content.rfind('\n\n', start, end)
                if newline_pos != -1:
                    end = newline_pos

            chunk = content[start:end].strip()
            if chunk:
                chunks.append(chunk)

            start = end - overlap if end < len(content) else end

        return chunks

    def embed_documents(self, documents: List[Dict[str, str]]):
        """Embed documents into ChromaDB"""
        print(f"\nEmbedding {len(documents)} documents...")

        all_chunks = []
        all_metadatas = []
        all_ids = []

        chunk_id = 0

        for doc in documents:
            # Chunk document
            chunks = self.chunk_document(doc['content'])

            for i, chunk in enumerate(chunks):
                all_chunks.append(chunk)
                all_metadatas.append({
                    'path': doc['path'],
                    'filename': doc['filename'],
                    'type': doc['type'],
                    'chunk_index': i,
                    'total_chunks': len(chunks)
                })
                all_ids.append(f"doc_{chunk_id}")
                chunk_id += 1

        print(f"Total chunks: {len(all_chunks)}")

        # Embed in batches
        batch_size = 100
        for i in range(0, len(all_chunks), batch_size):
            batch_end = min(i + batch_size, len(all_chunks))

            batch_chunks = all_chunks[i:batch_end]
            batch_metadatas = all_metadatas[i:batch_end]
            batch_ids = all_ids[i:batch_end]

            # Generate embeddings
            embeddings = self.embedding_model.encode(batch_chunks).tolist()

            # Add to ChromaDB
            self.collection.add(
                documents=batch_chunks,
                metadatas=batch_metadatas,
                ids=batch_ids,
                embeddings=embeddings
            )

            print(f"  Embedded chunks {i}-{batch_end}/{len(all_chunks)}")

        print(f"✓ Embedding complete! Total chunks: {len(all_chunks)}")

    def get_stats(self) -> Dict:
        """Get collection statistics"""
        count = self.collection.count()
        return {
            'total_chunks': count,
            'collection_name': self.collection.name
        }


def main():
    """Main embedding pipeline"""
    # Paths
    project_root = Path(__file__).parent.parent.parent
    docs_dir = project_root / "docs"
    vector_db_path = project_root / "chatbot" / "vector_db"

    print("=" * 60)
    print("ScholarRAG Helper - Document Embedding Pipeline")
    print("=" * 60)
    print(f"Docs directory: {docs_dir}")
    print(f"Vector DB path: {vector_db_path}")
    print()

    # Initialize embedder
    embedder = DocumentEmbedder(str(docs_dir), str(vector_db_path))

    # Load documents
    documents = embedder.load_documents()

    if not documents:
        print("No documents found!")
        return

    # Embed documents
    embedder.embed_documents(documents)

    # Print stats
    stats = embedder.get_stats()
    print(f"\n{'=' * 60}")
    print("Embedding Statistics")
    print("=" * 60)
    print(f"Collection: {stats['collection_name']}")
    print(f"Total chunks: {stats['total_chunks']}")
    print()


if __name__ == "__main__":
    main()
