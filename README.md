# ResearcherRAG Helper

**Interactive Documentation and Chatbot Platform for ResearcherRAG**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Powered by Claude](https://img.shields.io/badge/Claude-3.5%20Sonnet-orange)](https://anthropic.com)

---

## 🎯 What is ResearcherRAG Helper?

ResearcherRAG Helper is the **companion platform** for [ResearcherRAG](https://github.com/HosungYou/ResearcherRAG), providing:

- 📚 **Bookdown-style Documentation Site**: Interactive guides with step-by-step tutorials
- 🤖 **AI-Powered Chatbot**: RAG-based Q&A for troubleshooting and learning
- 📥 **Resource Downloads**: Templates, examples, and workshop materials
- 🎥 **Video Tutorials**: Visual walkthroughs of the 5-stage workflow

This is a **demonstration and education platform**, not a production RAG system. For the actual RAG implementation, see the [main ResearcherRAG repository](https://github.com/HosungYou/ResearcherRAG).

---

## 🚀 Quick Start

### Visit the Live Site

👉 **[researcherrag-helper.vercel.app](https://researcherrag-helper.vercel.app)** (Coming soon!)

### Run Locally

```bash
# 1. Clone repository
git clone https://github.com/HosungYou/ResearcherRAG-helper.git
cd ResearcherRAG-helper

# 2. Install frontend dependencies
cd frontend
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Add your ANTHROPIC_API_KEY

# 4. Run development server
npm run dev

# 5. Open http://localhost:3000
```

---

## 📚 Features

### 🌐 Interactive Documentation Site

Bookdown-inspired design with:
- **Dark/Light Mode**: Comfortable reading experience
- **Searchable Sidebar**: Quick navigation across chapters
- **Code Examples**: Syntax-highlighted, copy-to-clipboard
- **Responsive Design**: Works on desktop, tablet, and mobile

**Chapters**:
1. Introduction to ResearcherRAG
2. 5-Stage Workflow Deep Dive
3. PRISMA Configuration Guide
4. RAG System Design Patterns
5. Case Studies (Education, Medicine, Psychology)
6. Troubleshooting & FAQ
7. Advanced Topics

### 🤖 AI Chatbot (RAG-Powered)

Ask questions like:
- "How do I design a focused query for education research?"
- "What's the difference between Semantic Scholar and OpenAlex?"
- "My PRISMA screening returned 0 papers, what should I do?"
- "Show me an example research profile for medical research"

**Technology**:
- **LLM**: Claude 3.5 Sonnet (Anthropic API)
- **Vector DB**: ChromaDB (embedded docs)
- **Embedding**: `sentence-transformers/all-MiniLM-L6-v2`
- **Sources**: CLAUDE.md, prompts, workshop guides, templates

### 📥 Resource Library

Download ready-to-use materials:
- **Templates**: Research profile YAML files for 10+ domains
- **Examples**: Complete RAG projects (AI Education, EHR Fatigue, etc.)
- **Workshop Slides**: 3-hour hands-on workshop materials
- **Sample Data**: Demo PRISMA outputs for testing

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router, React Server Components)
- **Styling**: Tailwind CSS + `@tailwindcss/typography`
- **UI Components**: Headless UI, Lucide Icons
- **Markdown**: MDX (interactive components)
- **Deployment**: Vercel

### Chatbot Backend
- **API**: Next.js API Routes (Serverless Functions)
- **RAG Framework**: LangChain.js
- **Vector DB**: ChromaDB (persistent, local)
- **LLM**: Claude 3.5 Sonnet (Anthropic API)
- **Streaming**: Vercel AI SDK

### DevOps
- **CI/CD**: GitHub Actions → Vercel
- **Monitoring**: Vercel Analytics
- **Error Tracking**: Sentry (optional)

---

## 📂 Project Structure

```
ResearcherRAG-helper/
├── frontend/                      # Next.js application
│   ├── app/                       # App Router pages
│   │   ├── page.tsx              # Home page
│   │   ├── guide/                # Interactive guide chapters
│   │   ├── chat/                 # Chatbot interface
│   │   ├── resources/            # Download center
│   │   └── api/                  # API routes
│   ├── components/               # React components
│   │   ├── Sidebar.tsx           # Navigation sidebar
│   │   ├── ChatWidget.tsx        # Floating chatbot
│   │   ├── CodeBlock.tsx         # Syntax-highlighted code
│   │   └── MDXComponents.tsx     # Custom MDX renderers
│   ├── lib/                      # Utilities
│   │   ├── chatbot.ts            # RAG logic
│   │   └── mdx.ts                # MDX processing
│   └── public/                   # Static assets
│
├── chatbot/                       # Chatbot backend (Python)
│   ├── api/                      # FastAPI (if separate deployment)
│   ├── rag/                      # RAG pipeline
│   │   ├── embedder.py           # Document embedding
│   │   ├── retriever.py          # Vector search
│   │   └── generator.py          # LLM generation
│   └── vector_db/                # ChromaDB instance
│
├── docs/                          # Source documents (for RAG)
│   ├── chapters/                 # Guide chapters (MDX)
│   ├── prompts/                  # 5-stage prompts
│   ├── templates/                # Research profiles
│   └── workshop/                 # Workshop materials
│
├── examples/                      # Example projects
│   ├── ai_education_chatbot/     # Complete RAG example
│   └── medical_ehr_fatigue/      # Medical domain example
│
├── downloads/                     # Downloadable resources
│   ├── templates/                # YAML templates
│   ├── slides/                   # Workshop slides (PDF)
│   └── datasets/                 # Sample data
│
└── README.md                      # This file
```

---

## 🔧 Development

### Prerequisites
- **Node.js 18+** and npm/yarn
- **Python 3.9+** (for chatbot backend, optional)
- **Anthropic API Key** (for chatbot)

### Environment Variables

Create `.env.local` in `frontend/`:

```bash
# Required
ANTHROPIC_API_KEY=sk-ant-...

# Optional
NEXT_PUBLIC_SITE_URL=http://localhost:3000
VECTOR_DB_PATH=../chatbot/vector_db
```

### Run Development Server

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
vercel
```

Or push to GitHub and enable Vercel auto-deployment.

---

## 📖 Documentation Chapters

1. **[Introduction](./docs/chapters/01-introduction.mdx)**: What is ResearcherRAG? Why use it?
2. **[5-Stage Workflow](./docs/chapters/02-workflow.mdx)**: Step-by-step guide
3. **[PRISMA Configuration](./docs/chapters/03-prisma.mdx)**: Screening setup
4. **[RAG Design](./docs/chapters/04-rag-design.mdx)**: Vector DB, embeddings, prompts
5. **[Case Studies](./docs/chapters/05-case-studies.mdx)**: Real-world examples
6. **[Troubleshooting](./docs/chapters/06-troubleshooting.mdx)**: Common issues
7. **[Advanced Topics](./docs/chapters/07-advanced.mdx)**: Meta-analysis, citations

---

## 🤝 Contributing

We welcome contributions!

### Ways to Contribute
- **Improve Docs**: Fix typos, clarify instructions
- **Add Examples**: Share your ResearcherRAG projects
- **Report Bugs**: Open GitHub issues
- **Suggest Features**: Request new chapters or chatbot improvements

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## ���� Related Projects

- **[ResearcherRAG](https://github.com/HosungYou/ResearcherRAG)**: Main repository (prompts, templates, examples)
- **[Claude Code](https://claude.com/claude-code)**: Conversational AI assistant for VS Code

---

## 📞 Contact

- **GitHub Issues**: https://github.com/HosungYou/ResearcherRAG-helper/issues
- **Main Repository**: https://github.com/HosungYou/ResearcherRAG

---

**Built with ❤️ for researchers, by researchers**

_Powered by [Next.js](https://nextjs.org) + [Claude 3.5 Sonnet](https://anthropic.com) 🤖_
