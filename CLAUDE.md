# CLAUDE.md - ResearcherRAG-helper

## 🎯 Repository Purpose

**ResearcherRAG-helper** is the **public-facing homepage and documentation website** for the ResearcherRAG project.

**Key Distinction**:
- **This repo (ResearcherRAG-helper)**: Homepage, documentation, guides, marketing content (https://researcher-rag-helper.vercel.app/)
- **Main repo (researcherRAG)**: Actual research automation code, prompts, scripts for researchers

## 🏗️ Architecture

### Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Content**: MDX for interactive documentation
- **Deployment**: Vercel (auto-deploys from main branch)
- **Components**: React with TypeScript

### Project Structure

```
ResearcherRAG-helper/
├── frontend/                    # Next.js application
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage (marketing landing)
│   │   ├── guide/             # Documentation chapters (7 guides)
│   │   ├── chat/              # AI chatbot interface
│   │   ├── dashboard/         # Analytics dashboard
│   │   └── resources/         # Additional resources
│   ├── components/            # React components
│   │   ├── GuideLayout.tsx   # Documentation layout with TOC
│   │   ├── SearchBar.tsx     # Documentation search
│   │   ├── ChatWidget.tsx    # AI assistant widget
│   │   └── ...               # UI components
│   └── lib/                   # Utilities and helpers
├── docs/                       # Markdown documentation source
├── discussion/                 # Design discussions and planning
├── chatbot/                    # AI chatbot backend (optional)
├── examples/                   # Example projects
└── downloads/                  # Downloadable resources
```

## 🎨 Content Strategy

### Homepage (app/page.tsx)

**Purpose**: Convert visitors into users
- Hero section with value proposition
- Feature showcase
- Quick start guide
- Social proof / testimonials
- Call-to-action (Start Building, View Docs)

### Documentation (app/guide/)

**7 Comprehensive Chapters**:
1. **Introduction**: Overview, PRISMA+RAG concept, target audience
2. **Getting Started**: Installation, setup, first project
3. **Core Concepts**: PRISMA methodology, RAG architecture, technical details
4. **Implementation Guide**: Step-by-step workflow from planning to execution
5. **Practical Guide**: Advanced topics, optimization, troubleshooting
6. **Research Conversation**: Querying RAG, extracting insights, AI interaction
7. **Documentation & Writing**: Report generation, PRISMA flowcharts, publication

### Search Functionality (NEW)

**Implemented**: OpenAlex-style search bar
- **Location**: Header on all documentation pages
- **Features**:
  - Real-time search across all guides
  - Keyboard shortcuts (⌘K / Ctrl+K)
  - Fuzzy matching with relevance scoring
  - Arrow key navigation
  - Direct navigation to sections
- **Index**: `components/SearchBar.tsx` contains searchable content

## 🔧 Development Workflow

### Local Development

```bash
cd frontend
npm install
npm run dev
# Visit http://localhost:3000
```

### Building for Production

```bash
cd frontend
npm run build
npm start
```

### Deployment

**Automatic Deployment via Vercel**:
1. Push to `main` branch
2. Vercel automatically builds and deploys
3. Preview deployments for PRs

**Vercel Configuration**: `vercel.json` in root

## 📝 Content Management Guidelines

### Adding New Guide Chapter

1. Create `frontend/app/guide/0X-chapter-name/page.tsx`
2. Update `frontend/components/GuideLayout.tsx` chapters array
3. Add to `frontend/components/SearchBar.tsx` searchIndex
4. Follow existing chapter structure:
   - Title and description
   - Key concepts section
   - Step-by-step walkthrough
   - Code examples
   - Navigation to next chapter

### Updating Search Index

When adding new content, update `SearchBar.tsx`:

```typescript
const searchIndex: SearchResult[] = [
  {
    title: 'Your New Page Title',
    href: '/guide/new-page',
    excerpt: 'Brief description for search results',
    chapter: 'Chapter X' // optional
  },
  // ... existing entries
]
```

### Documentation Style Guide

- **Tone**: Friendly, professional, educational
- **Audience**: Academic researchers (PhD students, postdocs, professors)
- **Complexity**: Balance simplicity with technical accuracy
- **Examples**: Always include practical examples
- **Visuals**: Use diagrams, flowcharts, code blocks
- **Cross-references**: Link to related sections

## 🔍 Search Implementation Details

### Search Features

- **Client-side search**: No server required, instant results
- **Fuzzy matching**: Matches partial terms
- **Relevance scoring**: Title matches (3x) + excerpt matches (1x)
- **Keyboard shortcuts**: ⌘K/Ctrl+K to focus, Escape to close, Arrow keys to navigate
- **Responsive**: Works on mobile and desktop

### Extending Search

To add more searchable content:

1. **Update searchIndex** in `SearchBar.tsx`
2. **Add metadata** for better SEO and search discovery
3. **Include common synonyms** in excerpt text

Example:
```typescript
{
  title: 'Vector Database',
  href: '/guide/03-core-concepts#vector-database',
  excerpt: 'ChromaDB, embeddings, semantic search, vector store, similarity search'
}
```

## 🤖 AI Chatbot Integration

### Purpose

Provide real-time assistance to documentation visitors

### Implementation

- **Component**: `components/ChatWidget.tsx`
- **Backend**: `chatbot/` folder (optional RAG system)
- **API**: Anthropic Claude API for conversational AI

### Chatbot Knowledge Base

The chatbot should be aware of:
- All 7 documentation chapters
- Common troubleshooting issues
- Installation steps
- PRISMA and RAG concepts
- Code repository structure

## 🔗 External References

### Official Links

- **Homepage**: https://researcher-rag-helper.vercel.app/
- **GitHub**: https://github.com/HosungYou/ResearcherRAG-helper
- **Main Code Repo**: https://github.com/HosungYou/researcherRAG
- **Vercel Dashboard**: https://vercel.com/hosung-yous-projects/researcher-rag-helper

### Related Documentation

- OpenAlex Docs (design inspiration): https://docs.openalex.org/
- PRISMA 2020 Guidelines: http://www.prisma-statement.org/
- Next.js Documentation: https://nextjs.org/docs

## ⚠️ Important Notes for Claude Code

### When Working with This Repo

1. **Don't confuse repos**:
   - ResearcherRAG-helper = Homepage/docs (this repo)
   - researcherRAG = Research code (different repo)

2. **Deployment considerations**:
   - Changes to `frontend/` trigger Vercel rebuilds
   - Test locally before pushing to main
   - Vercel auto-deploys within 2-3 minutes

3. **Search maintenance**:
   - Always update `SearchBar.tsx` when adding content
   - Test search queries manually
   - Ensure all guide chapters are indexed

4. **Content updates**:
   - Update homepage if major features change
   - Keep guides in sync with main repo code
   - Version documentation appropriately

### Common Tasks

**Adding a new guide section**:
1. Create page in `frontend/app/guide/`
2. Update `GuideLayout.tsx` chapters array
3. Add to `SearchBar.tsx` index
4. Test locally
5. Push to main

**Updating existing content**:
1. Edit `.tsx` file directly
2. Test locally
3. Push to main (Vercel auto-deploys)

**Fixing search**:
1. Update `SearchBar.tsx` searchIndex
2. Check fuzzy matching logic
3. Test with common queries

## 📊 Analytics and Metrics

### Tracking

- Vercel Analytics (built-in)
- Track popular searches (potential future feature)
- Monitor guide engagement

### Success Metrics

- Documentation visits
- Search usage
- Chatbot interactions
- GitHub repo stars/forks

## 🚀 Future Enhancements

### Planned Features

1. **Advanced search**: Filters by chapter, content type
2. **Search analytics**: Track popular queries
3. **Multilingual support**: Korean translation
4. **Interactive examples**: Live code playground
5. **Video tutorials**: Embedded walkthroughs
6. **Community contributions**: Guide suggestions

### Maintenance Tasks

- Keep dependencies updated (`npm update`)
- Monitor Vercel deployment logs
- Review and respond to user feedback
- Sync content with main repo updates
