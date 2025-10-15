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

👉 **[researcher-rag-helper.vercel.app](https://researcher-rag-helper.vercel.app)**

🎓 Interactive documentation with copy-paste code examples, visual workflows, and AI chatbot support!

### Run Locally

```bash
# 1. Clone repository with submodules
git clone --recurse-submodules https://github.com/HosungYou/ResearcherRAG-helper.git
cd ResearcherRAG-helper

# If you already cloned without --recurse-submodules:
git submodule update --init --recursive

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
├── submodules/                    # Git submodules
│   └── researcherRAG/            # Main ResearcherRAG repository
│       ├── scripts/              # 7-stage Python scripts
│       ├── prompts/              # Stage prompts (01-07)
│       ├── researcherrag_cli.py  # CLI tool
│       └── requirements.txt      # Python dependencies
│
├── researcherrag_cli.py          # Symlink → submodules/researcherRAG/
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
│   ├── prompts/                  # Symlink → submodules/researcherRAG/prompts
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

## 🔗 Git Submodule Integration

This repository uses **git submodules** to reference shared code from the main ResearcherRAG repository, eliminating duplication.

### What's Referenced via Submodule?
- `researcherrag_cli.py` → CLI tool from main repo
- `docs/prompts/` → All 7 stage prompts (01-07) from main repo

### First-Time Setup
Already done if you cloned with `--recurse-submodules` (see Quick Start above).

If submodule folder is empty:
```bash
git submodule update --init --recursive
```

### Updating to Latest Main Repo
```bash
git submodule update --remote submodules/researcherRAG
```

### Detailed Guide
See [SUBMODULE_GUIDE.md](./SUBMODULE_GUIDE.md) for:
- How submodules work
- Troubleshooting empty folders
- Contributing guidelines
- Verifying on GitHub

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

| Chapter | Topic | Web | Source |
|---------|-------|-----|--------|
| 1 | Introduction to ResearcherRAG | [View](https://researcher-rag-helper.vercel.app/guide/introduction) | [MDX](./docs/chapters/01-introduction.mdx) |
| 2 | 5-Stage Workflow Deep Dive | [View](https://researcher-rag-helper.vercel.app/guide/workflow) | [MDX](./docs/chapters/02-workflow.mdx) |
| 3 | PRISMA Configuration Guide | [View](https://researcher-rag-helper.vercel.app/guide/prisma) | [MDX](./docs/chapters/03-prisma.mdx) |
| 4 | RAG System Design Patterns | [View](https://researcher-rag-helper.vercel.app/guide/rag-design) | [MDX](./docs/chapters/04-rag-design.mdx) |
| 5 | Case Studies & Examples | [View](https://researcher-rag-helper.vercel.app/guide/case-studies) | [MDX](./docs/chapters/05-case-studies.mdx) |
| 6 | Troubleshooting & FAQ | [View](https://researcher-rag-helper.vercel.app/guide/troubleshooting) | [MDX](./docs/chapters/06-troubleshooting.mdx) |
| 7 | Advanced Topics | [View](https://researcher-rag-helper.vercel.app/guide/advanced) | [MDX](./docs/chapters/07-advanced.mdx) |

**New Features** (Phase 2):
- ✅ **66 Code Blocks** with copy-to-clipboard buttons
- ✅ **FileTree Components** for project structure visualization
- ✅ **Validation Commands** with expected results for each stage
- ✅ **GitHub Integration** linking code examples to source files

---

## 🔗 GitHub-Website Integration

This platform features seamless integration between the GitHub repository and live website:

### From Website → GitHub
Every code example and script in the documentation includes a **"📄 View Source"** link that takes you directly to the corresponding file in the GitHub repository. For example:

- **PRISMA Scripts**: Each of the 5 automation scripts (`01_fetch_papers.py` through `05_full_text_review.py`) links to its source code
- **Stage Prompts**: All 5 stage prompts link to the original markdown files in `docs/prompts/`
- **Configuration Examples**: Template files link to the `/templates` directory

### From GitHub → Website
The repository README provides:
- Direct links to interactive documentation chapters on the live site
- Table format showing both web view and source MDX for each chapter
- Quick access to copy-paste ready code examples

### Bidirectional Learning Flow
1. **Read the guide** on the website with visual diagrams and explanations
2. **Copy code** using the one-click copy button
3. **View source** on GitHub to see full implementation details
4. **Browse examples** in the `/examples` directory
5. **Return to website** for troubleshooting tips

This integration ensures you can easily move between documentation and implementation!

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
