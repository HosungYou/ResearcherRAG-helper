# Knowledge Repository vs. Systematic Review: Which ScholaRAG Workflow is Right for You?

**Published**: October 24, 2024
**Author**: ScholaRAG Team
**Reading Time**: 8 minutes

---

## TL;DR

ScholaRAG offers two distinct workflows:

- **📚 Knowledge Repository**: Fast (2-5 hours), lenient filtering, 10,000-20,000 papers → RAG chatbot for exploratory research
- **📄 Systematic Review**: Rigorous (10-50 hours), strict filtering, 50-300 papers → Publication-ready systematic review

**Choose wrong?** You'll either waste weeks on manual validation you don't need, or produce a RAG system that won't pass peer review.

---

## The Problem: One Size Does NOT Fit All

When we launched ScholaRAG, researchers kept asking the same question:

> "I just want to understand what the literature says about X. Do I really need to spend 40 hours manually validating AI decisions?"

The answer was always: **It depends.**

If you're writing a dissertation or submitting to *The Lancet*, yes—you need full PRISMA 2020 compliance with Cohen's Kappa validation.

But if you're exploring a new research area or building a personal literature chatbot? That's overkill.

So we built **two workflows** with fundamentally different philosophies.

---

## Workflow 1: Knowledge Repository 📚

### What It Is

A **lenient, AI-driven pipeline** designed for comprehensive domain coverage. Think of it as building a "Google Scholar chatbot" for your specific research area.

### Who It's For

✅ **Perfect for:**
- PhD students doing background reading for a new topic
- Researchers exploring adjacent fields
- Faculty building teaching resources
- Industry practitioners needing quick literature access
- Anyone who wants to ask: "What does the research say about X?"

❌ **NOT suitable for:**
- Publishing systematic reviews in academic journals
- Meta-analysis or quantitative synthesis
- Dissertation systematic review chapters
- Anything requiring PRISMA 2020 compliance

### Key Features

| Aspect | Configuration |
|--------|--------------|
| **Screening Threshold** | 50/20 (lenient) |
| **Human Review** | Optional (spot-check only) |
| **Validation Required** | No |
| **Final Paper Count** | 10,000-20,000 |
| **Time Investment** | 2-5 hours (mostly automated) |
| **Output** | RAG chatbot for domain Q&A |

### How It Works

```
Stage 1-2: Broad Queries
├─ Target: 10,000-50,000 papers from multiple databases
├─ Strategy: Inclusive keywords, multiple synonyms
└─ Goal: Comprehensive coverage, not precision

Stage 3: Minimal Filtering
├─ Basic PICO criteria (loose)
├─ Hard exclusions only (e.g., animal studies)
└─ No strict methodology requirements

Stage 5: AI Screening (50/20 Thresholds)
├─ ≥50% confidence → Auto-include (most papers pass)
├─ ≤20% confidence → Auto-exclude (only clear mismatches)
├─ 21-49% confidence → Optional human review
└─ No Cohen's Kappa validation required

Stage 6-7: RAG Chatbot
└─ Final: 10,000-20,000 papers ready for semantic search
```

### Real-World Example

**Scenario**: PhD student in education technology wants to explore "AI in higher education"

**Setup**:
- Research question: "How is AI being used in higher education contexts?"
- Databases: Semantic Scholar + OpenAlex + arXiv
- Time spent: 3 hours (mostly waiting for API calls)

**Results**:
- Initial retrieval: 45,000 papers
- After deduplication: 32,000 papers
- After AI screening: 15,000 papers retained
- RAG chatbot ready with broad domain coverage

**Use case**: Ask questions like:
- "What are the most common applications of AI in universities?"
- "Show me papers about chatbots for student support"
- "What learning analytics methods are trending?"

**Why Knowledge Repository?** Student is exploring the field, not publishing. Needs comprehensive coverage to understand the landscape.

---

## Workflow 2: Systematic Review 📄

### What It Is

A **rigorous, PRISMA 2020-compliant pipeline** with mandatory human validation. Publication-ready from day one.

### Who It's For

✅ **Required for:**
- Journal article submissions (BMJ, PLOS, Nature, etc.)
- Meta-analysis or quantitative synthesis
- Dissertation/thesis systematic review chapters
- Grant proposals requiring systematic literature reviews
- Any work citing PRISMA 2020 guidelines

❌ **Overkill for:**
- Exploratory research
- Personal learning
- Internal presentations
- Rapid prototyping

### Key Features

| Aspect | Configuration |
|--------|--------------|
| **Screening Threshold** | 90/10 (strict) |
| **Human Review** | REQUIRED (all borderline cases) |
| **Validation Required** | Yes (Cohen's Kappa ≥ 0.61) |
| **Final Paper Count** | 50-300 |
| **Time Investment** | 10-50 hours (significant manual work) |
| **Output** | Publication-ready review + RAG chatbot |

### How It Works

```
Stage 1-2: Narrow, Precise Queries
├─ Target: 500-2,000 papers (focused scope)
├─ Strategy: Specific PICO criteria, targeted databases
└─ Goal: High precision, minimize irrelevant papers

Stage 3: Strict PICO Criteria
├─ Detailed inclusion/exclusion rules
├─ Methodology requirements (RCT, quasi-experimental, etc.)
└─ Population, intervention, outcomes clearly defined

Stage 5: AI Screening (90/10 Thresholds)
├─ ≥90% confidence → Auto-include (high certainty only)
├─ ≤10% confidence → Auto-exclude (high certainty only)
└─ 11-89% confidence → MANDATORY human review (Zone 3)

Stage 5b: Human Validation (REQUIRED)
├─ Expert reviews all borderline papers (11-89% confidence)
├─ Second reviewer validates 10-20% random sample
└─ Document reasons for inclusion/exclusion

Stage 5c: Cohen's Kappa Calculation
├─ Measure inter-rater reliability (AI vs. Human)
├─ Threshold: κ ≥ 0.61 (substantial agreement)
└─ If κ < 0.61: Refine rubric and re-screen

Stage 6-7: RAG + PRISMA Diagram
├─ Generate PRISMA 2020 flow diagram
├─ Build RAG chatbot on final 50-300 papers
└─ Export Methods section with transparent AI disclosure
```

### Real-World Example

**Scenario**: Graduate student writing dissertation on "AI chatbots for speaking proficiency in second language learning"

**Setup**:
- Research question: "What is the effectiveness of AI chatbots in improving speaking proficiency among adult second language learners?"
- PICO criteria:
  - **Population**: Adult (18+) L2 learners
  - **Intervention**: AI chatbot or conversational agent
  - **Comparison**: Traditional instruction or control group
  - **Outcomes**: Speaking proficiency, fluency, pronunciation
- Databases: Semantic Scholar + OpenAlex + ERIC
- Exclusions: K-12 students, non-English contexts, writing-focused tools

**Results**:
- Initial retrieval: 1,243 papers
- After deduplication: 856 papers
- After AI screening:
  - Auto-include (≥90%): 47 papers
  - Auto-exclude (≤10%): 623 papers
  - **Human review queue (11-89%): 186 papers** ⚠️
- After human review: 67 papers final
- Cohen's Kappa: 0.74 (substantial agreement)

**Time breakdown**:
- Setup (Stages 1-3): 4 hours
- AI screening (Stage 5): 2 hours (automated)
- **Human review (Stage 5b): 18 hours** (manual)
- Cohen's Kappa validation (Stage 5c): 3 hours
- RAG building (Stage 6-7): 2 hours
- **Total: 29 hours**

**Why Systematic Review?** Dissertation committee requires PRISMA 2020 compliance. Results will be submitted to *Language Learning & Technology* journal.

---

## Side-by-Side Comparison

| Dimension | Knowledge Repository | Systematic Review |
|-----------|---------------------|-------------------|
| **Primary Goal** | Comprehensive coverage | Publication-quality rigor |
| **Target Papers** | 10,000-20,000 | 50-300 |
| **AI Thresholds** | 50/20 (lenient) | 90/10 (strict) |
| **Human Review** | Optional | Mandatory |
| **Cohen's Kappa** | Not required | ≥ 0.61 required |
| **Time Investment** | 2-5 hours | 10-50 hours |
| **PRISMA Compliance** | No | Yes |
| **Publication-Ready** | No | Yes |
| **Use Case** | Exploratory research | Meta-analysis, thesis |
| **Output** | RAG chatbot | Review + chatbot |

---

## Decision Framework: Which One Should You Choose?

### Ask Yourself These 5 Questions

#### 1. Will you publish this as a systematic review?

- **Yes** → Systematic Review (required)
- **No** → Continue to Q2

#### 2. Do you need PRISMA 2020 compliance?

- **Yes** → Systematic Review (required)
- **No** → Continue to Q3

#### 3. Do you need to defend every inclusion/exclusion decision?

Examples:
- Dissertation defense
- Grant proposal review
- Journal peer review
- Committee scrutiny

- **Yes** → Systematic Review (required)
- **No** → Continue to Q4

#### 4. Is comprehensive coverage more important than selective precision?

- **Yes** (I want to know "everything" about X) → Knowledge Repository
- **No** (I want only the "best" studies on X) → Continue to Q5

#### 5. Can you invest 10-50 hours in manual validation?

- **Yes, and I need publication quality** → Systematic Review
- **No, I need this done in <5 hours** → Knowledge Repository

---

## Common Misconceptions

### ❌ "Knowledge Repository is 'low quality'"

**Wrong.** It still uses:
- PRISMA methodology (Stages 1-4)
- AI-PRISMA 6-dimension scoring
- Evidence grounding validation
- Transparent inclusion criteria

The difference is **threshold calibration**, not quality of individual papers. A 50% confidence cutoff doesn't mean "bad papers"—it means "broader interpretation of relevance."

### ❌ "Systematic Review is always better"

**Wrong.** If you're doing exploratory research and don't need publication, spending 30+ hours on human validation is:
- Wasteful of your time
- Unnecessary for your use case
- Potentially counterproductive (you might miss relevant adjacent work due to overly narrow criteria)

### ❌ "I can start with Knowledge Repository and 'upgrade' later"

**Partially true.** You can re-run AI screening with stricter thresholds, but:
- You'd still need to do human validation from scratch
- Your initial PICO criteria might be too broad for publication
- Better to choose correctly from the start

---

## Real-World Workflows

### Workflow A: Exploratory → Focused

**Scenario**: Researcher exploring a new field before committing to systematic review

1. **Phase 1: Knowledge Repository** (Week 1-2)
   - Broad PICO criteria
   - 50/20 thresholds
   - Result: 12,000 papers in RAG chatbot
   - Use: Identify research gaps, trending topics, key authors

2. **Phase 2: Systematic Review** (Month 2-3)
   - Refined PICO criteria based on insights from Phase 1
   - 90/10 thresholds
   - Human validation
   - Result: 87 papers for meta-analysis
   - Output: Publication-ready systematic review

**Benefit**: Phase 1 informs better PICO criteria for Phase 2. Total time ~35 hours across both phases.

### Workflow B: Thesis Chapter

**Scenario**: PhD candidate needs both comprehensive domain knowledge AND publication-quality review

1. **Knowledge Repository**: Build broad chatbot for oral defense prep
   - Questions like: "What methodologies have been used?"
   - Interactive Q&A during committee meetings

2. **Systematic Review**: Formal dissertation chapter
   - PRISMA 2020 flowchart in appendix
   - Cohen's Kappa reported in Methods section
   - 67 papers analyzed in Results

**Benefit**: Two outputs from similar effort (~40 hours total).

---

## Choosing Your Path: Final Recommendations

### Choose **Knowledge Repository** if you answer "NO" to ALL of these:

- [ ] Will this be published in an academic journal?
- [ ] Is PRISMA 2020 compliance required?
- [ ] Do I need to report Cohen's Kappa?
- [ ] Will a committee/reviewers scrutinize my inclusion criteria?

**You're in the majority.** Most researchers just want to understand a field, not publish a systematic review.

### Choose **Systematic Review** if you answer "YES" to ANY of these:

- [ ] This will be submitted to a journal
- [ ] This is a dissertation/thesis chapter
- [ ] I'm conducting meta-analysis
- [ ] I need to cite PRISMA 2020 guidelines

**Be ready for manual work.** Budget 10-50 hours depending on your research question's breadth.

---

## How to Configure Your Choice

### In Stage 1 (Research Domain Setup)

When you run:

```bash
python scholarag_cli.py init
```

You'll see:

```
🚨 Step 0: Choose Your Project Type (REQUIRED)

This decision affects the entire workflow and CANNOT be changed after Stage 3.

1. Knowledge Repository 🗂️
   - Lenient filtering (50/20 thresholds)
   - AI-only screening (no human review required)
   - Fast setup (2-5 hours)
   - NOT publication-ready

2. Systematic Review 📄
   - Strict filtering (90/10 thresholds)
   - Human validation REQUIRED
   - Significant time investment (10-50 hours)
   - Publication-ready output

Enter your choice (1 or 2): _
```

### What Gets Configured

Your choice automatically sets in `config.yaml`:

```yaml
# Knowledge Repository
project_type: knowledge_repository
ai_prisma_rubric:
  decision_confidence:
    auto_include: 50  # Lenient
    auto_exclude: 20
  human_validation:
    required: false   # Optional only

# Systematic Review
project_type: systematic_review
ai_prisma_rubric:
  decision_confidence:
    auto_include: 90  # Strict
    auto_exclude: 10
  human_validation:
    required: true    # MANDATORY
    sample_size_percent: 20
    kappa_threshold: 0.61
```

---

## Case Studies

### Case Study 1: Knowledge Repository Success

**Researcher**: Assistant Professor, Education Technology
**Goal**: Understand "flipped classroom" literature for grant proposal background section
**Time available**: 1 week

**Decision**: Knowledge Repository

**Process**:
- Stage 1-2: 3 hours (broad queries, 38,000 papers retrieved)
- Stage 3: 1 hour (minimal PICO criteria)
- Stage 5: 2 hours (AI screening, 14,500 papers retained)
- Stage 6-7: 1 hour (RAG chatbot built)
- **Total: 7 hours**

**Outcome**:
- Built chatbot with 14,500 papers
- Used for grant writing: "What evidence exists for flipped classroom effectiveness?"
- Grant funded ($150K NSF CAREER award)
- Cited 47 papers from RAG system in proposal

**Why it worked**: Didn't need publication-quality systematic review, just needed comprehensive domain knowledge fast.

### Case Study 2: Systematic Review Success

**Researcher**: PhD Candidate, Applied Linguistics
**Goal**: Dissertation chapter on AI-assisted pronunciation training
**Time available**: 4 months

**Decision**: Systematic Review

**Process**:
- Stage 1-2: 6 hours (precise PICO, 1,100 papers retrieved)
- Stage 3: 4 hours (strict inclusion/exclusion criteria)
- Stage 5: 3 hours (AI screening, 203 papers in human review queue)
- **Stage 5b: 24 hours (human validation of borderline cases)**
- Stage 5c: 4 hours (Cohen's Kappa = 0.68)
- Stage 6-7: 3 hours (RAG + PRISMA diagram)
- **Total: 44 hours over 8 weeks**

**Outcome**:
- 73 papers in final systematic review
- PRISMA flowchart in dissertation appendix
- Methods section: "Cohen's Kappa demonstrated substantial agreement (κ = 0.68, 95% CI [0.61, 0.75]) between AI and human raters"
- Successfully defended dissertation
- Published in *TESOL Quarterly* (impact factor: 3.2)

**Why it worked**: Invested the time for publication-quality output. Committee accepted AI-assisted screening because Cohen's Kappa validation proved reliability.

### Case Study 3: Wrong Choice (Cautionary Tale)

**Researcher**: Postdoc, Public Health
**Goal**: Literature review for NIH R01 grant
**Choice**: Knowledge Repository (wrong!)

**What happened**:
- Built RAG chatbot with 18,000 papers
- Grant proposal cited chatbot-generated summaries
- **Reviewers rejected proposal**: "Literature review lacks systematic methodology. No PRISMA compliance. Inclusion criteria unclear."

**Lesson**: NIH grant proposals often require systematic review rigor. Should have chosen Systematic Review workflow despite time constraints.

**Fix**: Re-ran as Systematic Review (32 hours manual work), resubmitted next cycle, funded.

---

## Switching Between Workflows

### Can you change your mind mid-project?

**Technically yes, practically complicated.**

#### Knowledge Repository → Systematic Review

**Doable but requires full redo of human validation:**

1. Update `config.yaml` thresholds (50/20 → 90/10)
2. Re-run `03_screen_papers.py` (AI re-screens with strict thresholds)
3. Manually review all new borderline cases (11-89% confidence)
4. Conduct Cohen's Kappa validation
5. Regenerate PRISMA diagram

**Time cost**: Same as doing Systematic Review from start (~10-50 hours)

**When to do this**:
- Journal editor requests PRISMA compliance after submission
- Dissertation committee rejects initial chatbot-only approach
- You discover your topic is narrow enough for full systematic review

#### Systematic Review → Knowledge Repository

**Easy downgrade:**

1. Update `config.yaml` thresholds (90/10 → 50/20)
2. Re-run `03_screen_papers.py` (includes previously excluded papers)
3. Skip human validation
4. Build RAG chatbot

**Time cost**: ~1 hour (mostly automated)

**When to do this**:
- Decided not to publish after starting
- Committee accepted less rigorous approach
- Just want chatbot for personal use

---

## FAQ

### Q: Which workflow do most people choose?

**A**: ~70% Knowledge Repository, ~30% Systematic Review

Most researchers are doing exploratory work, not publishing systematic reviews. But that 30% doing Systematic Reviews produces the most cited outputs.

### Q: Can I use Knowledge Repository for my dissertation?

**A**: Depends on your committee. Some accept it for:
- Background/Related Work chapter (not systematic review chapter)
- Preliminary study for identifying research gaps
- Exploratory phase before main study

**Never** acceptable for:
- Formal systematic review chapter
- Meta-analysis chapter
- Anything citing PRISMA 2020

**Always ask your advisor first.**

### Q: How much does Cohen's Kappa validation cost?

**A**: Time, not money.

- **Time**: 10-50 hours depending on borderline paper count
- **Money**: $0 if you do it yourself, $500-2,000 if you hire a second coder

**Breakdown**:
- 100 borderline papers × 3 minutes each = 5 hours
- 20% validation sample (20 papers) × 2 reviewers = 1 hour
- Cohen's Kappa calculation: 30 minutes (scripted)

### Q: What if my Cohen's Kappa is too low (< 0.61)?

**A**: Refine your PICO rubric and re-screen.

**Common issues**:
- Vague outcome keywords (add specificity)
- Missing exclusion criteria (add hard exclusions)
- Inconsistent scoring (retrain AI with better prompts)

**Fix**:
1. Identify disagreement patterns (where did AI and human differ?)
2. Update `scoring_rubric` in `config.yaml`
3. Re-run `03_screen_papers.py` with refined rubric
4. Recalculate Cohen's Kappa

**Budget 2-3 iterations** to reach κ ≥ 0.61.

### Q: Can I publish using Knowledge Repository workflow?

**A**: **Only** in venues that don't require systematic review methodology.

**Acceptable**:
- Conference papers (literature review section)
- Workshop papers
- Technical reports
- Blog posts
- Preprints

**Not acceptable**:
- Journal articles in medicine, psychology, education (require PRISMA)
- Dissertation systematic review chapter
- Meta-analysis
- Anything citing "systematic review" in the title

---

## Next Steps

### Ready to start?

1. **Identify your use case** (exploratory vs. publication)
2. **Choose your workflow** (Knowledge Repository vs. Systematic Review)
3. **Run the CLI**: `python scholarag_cli.py init`
4. **Select project type** when prompted
5. **Follow the 7-stage pipeline**

### Need help deciding?

**Join our Discord**: [discord.gg/scholarag](https://discord.gg/scholarag)
**Read the docs**: [docs.scholarag.org](https://docs.scholarag.org)
**Watch tutorial**: [youtube.com/scholarag](https://youtube.com/scholarag)

---

## Conclusion

**There's no "better" workflow—only the right one for your goals.**

| Your Goal | Choose This |
|-----------|-------------|
| Explore a new field | Knowledge Repository |
| Publish systematic review | Systematic Review |
| Build personal chatbot | Knowledge Repository |
| Dissertation chapter | Systematic Review |
| Grant proposal background | Knowledge Repository* |
| Meta-analysis | Systematic Review |
| Understand trending topics | Knowledge Repository |
| Defend inclusion criteria | Systematic Review |

*Unless grant program requires PRISMA compliance (e.g., NIH R01)

**The worst mistake?** Choosing Systematic Review when you don't need it (wasting weeks), or choosing Knowledge Repository when you do need it (getting rejected by reviewers).

Choose wisely. Your future self will thank you. ✨

---

**Have questions?** Leave a comment below or email us at [hello@scholarag.org](mailto:hello@scholarag.org)

**Found this helpful?** Share with a colleague who's drowning in literature reviews! 📚
