# Chatbot Folder - Claude Code Instructions

## 📁 Purpose

Backend implementation for the AI chatbot assistant on the ResearcherRAG homepage.

## 🏗️ Structure

```
chatbot/
├── rag/            # RAG system for chatbot knowledge
├── api/            # API endpoints for chat
├── vector_db/      # Vector database for documentation
└── CLAUDE.md       # (this file)
```

## 🤖 Chatbot Purpose

Provides real-time assistance to documentation visitors:
- Answer questions about ResearcherRAG
- Guide users through installation
- Explain PRISMA and RAG concepts
- Troubleshoot common issues
- Suggest relevant documentation sections

## 🔧 Implementation Notes

### Frontend Integration

- **Component**: `frontend/components/ChatWidget.tsx`
- **Display**: Floating chat button (bottom-right corner)
- **API**: Connects to Anthropic Claude API

### Knowledge Base

The chatbot should know:
1. **All 7 documentation chapters**:
   - Introduction
   - Getting Started
   - Core Concepts
   - Implementation Guide
   - Practical Guide
   - Research Conversation
   - Documentation & Writing

2. **Common troubleshooting**:
   - Installation issues
   - Configuration problems
   - API key setup
   - Deployment errors

3. **PRISMA & RAG concepts**:
   - What is PRISMA 2020?
   - How does RAG work?
   - Why combine them?
   - When to use what

### Development

```bash
# If implementing RAG backend
cd chatbot
# Setup vector database with documentation
# Implement API endpoints
# Test with frontend widget
```

## 📝 Future Enhancements

- [ ] Build RAG system with documentation as knowledge base
- [ ] Add conversation memory
- [ ] Track common questions for FAQ
- [ ] Multi-language support
- [ ] Citation to specific doc sections
