# Frontend Folder - Claude Code Instructions

## 📁 Purpose

Next.js 15 application for the ResearcherRAG homepage and documentation website.

## 🏗️ Structure

```
frontend/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Homepage (marketing landing)
│   ├── layout.tsx           # Root layout
│   ├── guide/               # Documentation (7 chapters)
│   │   ├── page.tsx         # Guide overview
│   │   ├── 01-introduction/
│   │   ├── 02-getting-started/
│   │   ├── 03-core-concepts/
│   │   ├── 04-implementation/
│   │   ├── 05-advanced-topics/
│   │   ├── 06-research-conversation/
│   │   └── 07-documentation-writing/
│   ├── chat/                # AI chatbot interface
│   ├── dashboard/           # Analytics dashboard
│   └── resources/           # Additional resources
├── components/              # Reusable React components
│   ├── GuideLayout.tsx     # Documentation layout with TOC
│   ├── SearchBar.tsx       # Documentation search (NEW)
│   ├── ChatWidget.tsx      # AI assistant widget
│   ├── CodeBlock.tsx       # Syntax-highlighted code
│   ├── Mermaid.tsx         # Diagram rendering
│   └── ...                 # UI components
├── lib/                     # Utilities and helpers
├── public/                  # Static assets
└── package.json            # Dependencies

