# ResearcherRAG Example Projects

This directory contains complete, real-world examples of ResearcherRAG projects demonstrating the full 7-stage workflow.

## Available Examples

### 1. [AI Chatbots for Language Learning](./chatbot-language-learning/)
**Research Question**: "Do AI chatbots improve speaking proficiency in university-level language learners?"

**Domain**: Education (Language Learning / Second Language Acquisition)

**What's Included**:
- Complete 7-stage workflow from research question to documentation
- Sample configuration files (`config.yaml`, PRISMA criteria)
- Example queries and outputs for each stage
- PRISMA flow diagram and search strategy
- Research summary with key findings

**Timeline**: 4.5 hours (vs. 2-3 weeks manual)
**Cost**: $4.50 (API usage)
**Papers**: 347 identified → 43 included

**Key Learnings**:
- How to choose databases for interdisciplinary topics (education + AI)
- Balancing query breadth vs. precision
- AI-assisted screening validation strategies
- Managing PDF access challenges

**Use Case**: Perfect for dissertation/thesis literature review chapters or systematic review journal submissions

---

## How to Use These Examples

### Option 1: Study the Structure
Browse the example projects to understand what outputs each stage produces and how they connect.

### Option 2: Follow as Tutorial
Step through each stage folder in order, reading the markdown files to understand the decision-making process.

### Option 3: Use as Template
Copy an example project structure and modify it for your research domain:

```bash
# Copy example structure
cp -r examples/chatbot-language-learning ../my-research-project
cd ../my-research-project

# Update config.yaml with your research question
# Modify PRISMA criteria for your domain
# Run through stages 1-7
```

---

## Example Project Structure

Each example follows this consistent structure:

```
example-project-name/
├── README.md                          # Complete project documentation
├── config.yaml                        # Project configuration (query, criteria, RAG settings)
├── stage1_research_domain/            # Research scope and feasibility
│   ├── research_scope.md
│   └── feasibility_notes.md
├── stage2_query_strategy/             # Boolean queries for each database
│   ├── query_design.md
│   └── synonym_analysis.md
├── stage3_prisma_config/              # PRISMA inclusion/exclusion criteria
│   ├── inclusion_criteria.md
│   ├── exclusion_criteria.md
│   └── screening_config.yaml
├── stage4_rag_design/                 # RAG system configuration
│   ├── rag_config.yaml
│   └── embedding_strategy.md
├── stage5_execution_plan/             # Pre-flight validation
│   ├── execution_checklist.md
│   └── pipeline_sequence.md
├── stage6_research_queries/           # Automated execution outputs
│   ├── data/                          # Fetched, screened, deduplicated papers
│   ├── rag/chroma_db/                 # Vector database
│   ├── conversations/                 # Research query logs
│   └── screening_log.csv
└── stage7_documentation/              # Publication-ready documentation
    ├── prisma_diagram.png
    ├── search_strategy.md
    ├── references.bib
    ├── research_summary.md
    └── methods_section.md
```

---

## What Makes a Good Example?

If you've completed a ResearcherRAG project and want to contribute an example, it should:

✅ **Complete**: Include all 7 stages with outputs
✅ **Realistic**: Use real research questions, not toy examples
✅ **Documented**: Explain decisions and trade-offs at each stage
✅ **Reproducible**: Include all configuration files and search strategies
✅ **Insightful**: Share what worked well and what challenges were encountered

---

## Contributing Examples

We welcome community-contributed examples! To contribute:

1. **Fork** the ResearcherRAG-helper repository
2. **Create** a new directory in `examples/` (e.g., `examples/medical-ai-diagnosis/`)
3. **Follow** the structure shown above
4. **Document** your decisions and learnings
5. **Submit** a pull request

**Please ensure**:
- No personally identifiable information
- No copyrighted full-text papers (only metadata and references)
- Clear licensing (CC0 or CC-BY for example materials)

---

## Domains Covered

Currently available examples:

- ✅ **Education**: Language learning / Applied linguistics
- 🔜 **Medicine**: (planned)
- 🔜 **Psychology**: (planned)
- 🔜 **Computer Science**: (planned)
- 🔜 **Social Science**: (planned)

Want to see an example in your domain? [Open an issue](https://github.com/HosungYou/ResearcherRAG-helper/issues) or contribute one!

---

## FAQs

### Q: Can I use these examples for my own research?
**A**: Yes! All examples are provided under open licenses. You can copy, modify, and adapt them. Just cite ResearcherRAG if you publish.

### Q: Are these examples peer-reviewed?
**A**: These are demonstration projects. While they follow best practices (PRISMA 2020, systematic methods), they are not peer-reviewed systematic reviews themselves.

### Q: How do I know if an example matches my research needs?
**A**: Check the README of each example. Look for:
- Similar research domain
- Similar target paper count
- Similar methodology (quantitative vs qualitative vs mixed)
- Similar publication goals (thesis vs journal)

### Q: Can I request an example in my specific domain?
**A**: Yes! Open an issue with the `example-request` label and describe your research domain and use case. We'll prioritize popular requests.

---

## License

All example projects in this directory are released under:
- **Code/Configuration**: MIT License
- **Documentation**: CC-BY 4.0

You are free to:
- ✅ Use for commercial or non-commercial purposes
- ✅ Modify and adapt for your research
- ✅ Share with colleagues and students

You must:
- ✅ Provide attribution to ResearcherRAG
- ✅ Indicate if changes were made

---

## Citation

If you use these examples in your research or teaching, please cite:

```bibtex
@software{researcherrag_examples2024,
  title={ResearcherRAG Example Projects},
  author={You, Hosung},
  year={2024},
  url={https://github.com/HosungYou/ResearcherRAG-helper/tree/main/examples},
  note={Accessed: YYYY-MM-DD}
}
```

---

## Questions or Feedback?

- **Documentation**: https://researcher-rag-helper.vercel.app/guide
- **Issues**: https://github.com/HosungYou/ResearcherRAG-helper/issues
- **Discussions**: https://github.com/HosungYou/ResearcherRAG-helper/discussions

---

**Last Updated**: 2024-10-15
**Examples Count**: 1 (more coming soon!)
