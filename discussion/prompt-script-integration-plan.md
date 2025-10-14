# Prompt-Script Integration Plan
**Vision**: Seamless researcher experience through prompt-driven automation

**Created**: 2025-10-14
**Status**: Planning Phase
**Priority**: Critical (Core Product Vision)

---

## 🎯 Core Philosophy

**Current Vision**:
> "Researchers should only need to read prompts and talk to Claude Code. Scripts execute automatically. Researchers proceed without knowing Python."

**Problem**:
Currently, there's a **disconnection**:
1. Researcher reads `prompts/01_research_domain_setup.md`
2. Researcher talks to Claude Code
3. Claude Code generates `config.yaml`
4. ⚠️ **GAP**: Researcher must manually run `python scripts/01_fetch_papers.py`
5. ⚠️ **GAP**: Researcher must know command-line arguments
6. ⚠️ **GAP**: If conversation diverges, researcher gets lost

**Goal**:
- **Tight coupling**: Prompt → Claude conversation → Script auto-executes
- **Stage awareness**: Claude knows which stage researcher is in
- **Protocol adherence**: Prevent divergence, guide back if needed
- **Zero Python knowledge**: Researcher never touches terminal directly

---

## 📊 Current State Analysis

### Current Workflow (Disconnected):

```
┌─────────────────┐
│  prompts/*.md   │ ← Researcher reads
└────────┬────────┘
         │ Copy/paste
         ▼
┌─────────────────┐
│  Claude Code    │ ← Conversation
│   (in VSCode)   │
└────────┬────────┘
         │ Generates
         ▼
┌─────────────────┐
│  config.yaml    │ ← Configuration
└────────┬────────┘
         │
         │ ⚠️ MANUAL STEP
         ▼
┌─────────────────┐
│ Terminal        │ ← Researcher must:
│ python scripts/ │   - Open terminal
│ 01_fetch_...py  │   - Type commands
└─────────────────┘   - Handle errors
```

**Pain Points**:
1. ❌ Requires terminal knowledge
2. ❌ Researchers don't know which script to run
3. ❌ No feedback if conversation diverges
4. ❌ Claude Code doesn't auto-execute scripts
5. ❌ No stage tracking

---

## 🎯 Target State (Integrated):

```
┌─────────────────────────────────────────────┐
│        ResearcherRAG Prompt System          │
│  (Stage-aware, Protocol-enforcing)          │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│  Stage 1 Prompt (01_research_domain_setup)  │
│  ├── Conversation script                    │
│  ├── Validation rules                       │
│  ├── Output schema (config.yaml)            │
│  └── ✨ Auto-execute: init project          │
└──────────────────┬──────────────────────────┘
                   │ Researcher talks to Claude
                   ▼
┌─────────────────────────────────────────────┐
│           Claude Code (Enhanced)            │
│  ├── Reads prompt with metadata             │
│  ├── Tracks current stage                   │
│  ├── Validates researcher input             │
│  ├── Generates config.yaml                  │
│  └── ✨ Auto-runs: researcherrag init       │
└──────────────────┬──────────────────────────┘
                   │ Seamless transition
                   ▼
┌─────────────────────────────────────────────┐
│  Stage 2 Prompt (02_query_strategy)         │
│  ├── Conversation script                    │
│  ├── Query design templates                 │
│  ├── Database selection logic               │
│  └── ✨ Auto-execute: scripts/01_fetch      │
└─────────────────────────────────────────────┘
```

**Benefits**:
1. ✅ Zero terminal commands
2. ✅ Claude knows which stage
3. ✅ Auto-detects divergence
4. ✅ Scripts execute automatically
5. ✅ Progress tracked visually

---

## 🔧 Implementation Strategy

### Phase 1: Enhanced Prompt Structure (Week 1-2)

**Goal**: Make prompts machine-readable + human-readable

**New Prompt Format**:

```markdown
<!-- METADATA
stage: 1
stage_name: "Research Domain Setup"
previous_stage: null
next_stage: 2
expected_duration: "15 minutes"
cli_commands:
  - command: "researcherrag init"
    when: "after config.yaml generated"
    auto_execute: true
scripts_triggered:
  - none (initialization only)
validation_rules:
  - research_question: "required, min 10 words"
  - research_field: "required, one of [education, medicine, etc.]"
  - year_range: "optional, format: YYYY-YYYY"
output_files:
  - "config.yaml"
  - "projects/{project_name}/README.md"
-->

# Stage 1: Research Domain Setup Prompt

**🎯 Your Current Stage**: Stage 1 of 7 - Research Domain Setup
**⏱️ Expected Time**: 15 minutes
**📁 Output**: `config.yaml` with your research parameters

---

## What You'll Do in This Stage

In this conversation, Claude Code will help you:
1. ✅ Define your research question clearly
2. ✅ Set inclusion/exclusion criteria
3. ✅ Choose target databases
4. ✅ Estimate expected paper counts

**At the end**: Claude will automatically initialize your project structure.

---

## Copy This to Claude Code:

I want to build a RAG system for my research project.

**My Research Topic**: [Describe your research topic in 1-2 sentences]

**Research Field**: [e.g., Education, Medicine, Psychology, Economics, Sociology, etc.]

**Research Questions**:
- [Question 1]
- [Question 2]
- [Optional: Question 3]

... [rest of prompt]

---

<!-- CONVERSATION FLOW

Expected conversation pattern:

1. USER pastes prompt
2. CLAUDE asks clarifying questions:
   - "What specific aspect of [topic] interests you?"
   - "Who is your target population?"
   - "What outcomes are you measuring?"
3. USER answers (2-3 exchanges)
4. CLAUDE generates config.yaml draft
5. USER approves/modifies
6. CLAUDE runs: `researcherrag init --config config.yaml`
7. CLAUDE confirms: "✅ Stage 1 complete. Ready for Stage 2?"

Divergence handling:
- IF user asks about PDF download → "That's Stage 4. Let's finish domain setup first."
- IF user asks about RAG configuration → "That's Stage 4-5. Current focus: research scope."
- IF user provides vague research question → "Let's make this more specific. What exactly do you want to know about [topic]?"

-->

---

## ✅ Stage 1 Completion Checklist

Before moving to Stage 2, ensure you have:
- [ ] Clear, specific research question (10+ words)
- [ ] Defined research field
- [ ] Set year range (if applicable)
- [ ] Listed inclusion/exclusion criteria
- [ ] Estimated target paper count
- [ ] `config.yaml` file generated
- [ ] Project folder created

**Next Stage**: [Stage 2: Query Strategy Design →](02_query_strategy.md)
```

**Key Additions**:
1. **Metadata block** (machine-readable)
2. **Conversation flow** (expected pattern)
3. **Divergence handling** (keep on track)
4. **Auto-execute commands**
5. **Stage checklist**
6. **Visual progress indicators**

---

### Phase 2: Claude Code Integration Layer (Week 3-4)

**Goal**: Make Claude Code stage-aware and auto-executing

**Implementation Options**:

#### Option A: Enhanced Prompts + CLAUDE.md (Recommended)

Update `/Volumes/External SSD/Projects/CLAUDE.md`:

```markdown
## ResearcherRAG Stage-Based Workflow

### Stage Detection

When a user pastes a prompt from `prompts/*.md`, Claude Code should:

1. **Parse metadata block** to identify:
   - Current stage number
   - Expected commands
   - Validation rules
   - Next stage

2. **Track conversation state**:
   - Which stage user is in
   - Which checklist items completed
   - Whether ready to auto-execute

3. **Auto-execute when appropriate**:
   ```python
   # After config.yaml generated in Stage 1
   if stage == 1 and config_yaml_exists:
       run_command("researcherrag init")

   # After queries designed in Stage 2
   if stage == 2 and queries_approved:
       run_command("python scripts/01_fetch_papers.py --project {project}")
   ```

### Stage Transition Protocol

**Stage 1 → Stage 2**:
```
CLAUDE: ✅ Stage 1 complete! You now have:
        - config.yaml with research parameters
        - Project folder: projects/2025-10-14_YourProject

        📊 Summary:
        - Research question: "..."
        - Year range: 2015-2025
        - Target: 50-100 papers

        Ready to move to Stage 2 (Query Strategy)?

USER: Yes

CLAUDE: Great! For Stage 2, please paste the prompt from:
        prompts/02_query_strategy.md

        Or I can show you the prompt now. Which do you prefer?
```

### Divergence Detection

**Common divergences**:

1. **User jumps ahead**: "Can you help me download PDFs?"
   ```
   CLAUDE: That's Stage 4 (PDF Download).
           You're currently in Stage 1 (Research Domain Setup).

           Let's complete Stage 1 first:
           - [ ] Define research question
           - [ ] Set inclusion/exclusion criteria

           Once done, we'll move through stages 2-3 before PDFs.
   ```

2. **User goes off-protocol**: "Can you write the Python code for me?"
   ```
   CLAUDE: The Python code is already written in scripts/!
           You don't need to write code - just talk to me.

           Current stage: Stage 2 (Query Strategy)
           Next step: Tell me your research keywords, and I'll
                      configure the search automatically.
   ```

3. **User confused about stage**: "Where am I?"
   ```
   CLAUDE: 📍 Current Progress:

           ✅ Stage 1: Research Domain Setup (completed)
           ➡️ Stage 2: Query Strategy (in progress)
           ⏸️ Stage 3: PRISMA Screening (not started)
           ⏸️ Stage 4: PDF Download (not started)

           In Stage 2, we're designing search queries for:
           - Semantic Scholar
           - OpenAlex
           - arXiv
   ```
```

---

#### Option B: Custom VSCode Extension (Advanced, Future)

Create `researcherrag-vscode` extension:

**Features**:
1. **Stage indicator** in status bar
2. **Auto-paste next prompt** button
3. **Progress visualization** sidebar
4. **One-click script execution**

**Future consideration** (v2.0.0)

---

### Phase 3: Script Enhancement (Week 5-6)

**Goal**: Make scripts more "prompt-aware"

**Enhancement 1: Stage-based CLI**

Current:
```bash
python scripts/01_fetch_papers.py --project my-project --query "AI chatbot"
```

Enhanced:
```bash
# Simpler: auto-detects project from context
researcherrag fetch-papers

# Or with conversation context
researcherrag run-stage 2
```

**Enhancement 2: Conversation Context File**

Create `.researcherrag/context.json`:
```json
{
  "current_stage": 2,
  "project_name": "AI-Chatbots-Language-Learning",
  "conversation_history": [
    {
      "stage": 1,
      "completed": true,
      "timestamp": "2025-10-14T10:30:00Z",
      "outputs": ["config.yaml"]
    },
    {
      "stage": 2,
      "completed": false,
      "timestamp": "2025-10-14T10:45:00Z",
      "queries_designed": ["query1", "query2"]
    }
  ],
  "last_checkpoint": {
    "stage": 2,
    "step": "query_design",
    "ready_to_execute": false
  }
}
```

Scripts read this to:
- Know which stage they're in
- Skip already-completed steps
- Provide contextual error messages

---

### Phase 4: Frontend Updates (Week 7-8)

**Goal**: Documentation reflects prompt-driven workflow

**New Documentation Structure**:

```
ResearcherRAG Documentation

1. Introduction
   ├── What is ResearcherRAG?
   └── Two Ways to Use It ← NEW
       ├── Option A: Prompt-Driven (Recommended for Researchers)
       └── Option B: Script-Driven (For Developers)

2. Quick Start
   ├── 5-Minute Prompt Walkthrough ← NEW
   │   ├── Stage 1: Copy prompt → Talk to Claude → Project created
   │   ├── Stage 2: Copy prompt → Talk to Claude → Papers fetched
   │   └── [visual flowchart]
   └── Traditional Setup (for developers)

3. Prompt Guide ← NEW SECTION
   ├── How Prompts Work
   │   ├── Prompt Structure
   │   ├── Metadata Blocks
   │   ├── Conversation Flow
   │   └── Stage Transitions
   ├── Stage 1: Research Domain Setup
   │   ├── Prompt Template
   │   ├── Example Conversation
   │   ├── Expected Outputs
   │   ├── Troubleshooting
   │   └── Next Steps
   ├── Stage 2: Query Strategy
   └── ... [all 7 stages]

4. Script Reference (for developers)
   ├── When to Use Scripts Directly
   ├── 01_fetch_papers.py
   └── ...

5. Troubleshooting
   ├── "I'm lost - which stage am I in?"
   ├── "Claude isn't auto-running scripts"
   └── "Conversation went off-track"
```

---

## 📋 Detailed Implementation Checklist

### Phase 1: Enhanced Prompt Structure ✅ (Week 1-2)

- [ ] **Task 1.1**: Add metadata blocks to all 7 prompts
  - [ ] 01_research_domain_setup.md
  - [ ] 02_query_strategy.md
  - [ ] 03_prisma_configuration.md
  - [ ] 04_rag_design.md
  - [ ] 05_execution_plan.md
  - [ ] 06_research_conversation.md
  - [ ] 07_documentation_writing.md

- [ ] **Task 1.2**: Add conversation flow guides
  - [ ] Expected conversation patterns
  - [ ] Divergence detection rules
  - [ ] Transition protocols

- [ ] **Task 1.3**: Add stage checklists
  - [ ] Completion criteria
  - [ ] Validation rules
  - [ ] Next stage pointers

- [ ] **Task 1.4**: Add visual progress indicators
  - [ ] Stage badges (✅ ➡️ ⏸️)
  - [ ] Time estimates
  - [ ] File output indicators

**Deliverables**:
- Enhanced prompts with metadata
- Stage transition map
- Divergence handling guide

---

### Phase 2: Claude Code Integration (Week 3-4)

- [ ] **Task 2.1**: Update CLAUDE.md
  - [ ] Add stage detection logic
  - [ ] Add auto-execution rules
  - [ ] Add divergence handling
  - [ ] Add conversation state tracking

- [ ] **Task 2.2**: Create conversation context system
  - [ ] Design `.researcherrag/context.json` schema
  - [ ] Implement context writer in CLI
  - [ ] Implement context reader in scripts

- [ ] **Task 2.3**: Add stage awareness to CLI
  - [ ] `researcherrag status` (show current stage)
  - [ ] `researcherrag next` (show next prompt)
  - [ ] `researcherrag run-stage N` (execute stage)

- [ ] **Task 2.4**: Test conversation flows
  - [ ] Happy path (no divergence)
  - [ ] User jumps ahead
  - [ ] User asks off-topic
  - [ ] User confused about stage

**Deliverables**:
- Stage-aware CLAUDE.md
- Conversation context system
- Enhanced CLI commands

---

### Phase 3: Script Enhancement (Week 5-6)

- [ ] **Task 3.1**: Add context awareness to scripts
  - [ ] Read `.researcherrag/context.json`
  - [ ] Auto-detect current stage
  - [ ] Skip completed steps
  - [ ] Update context after execution

- [ ] **Task 3.2**: Improve script output formatting
  - [ ] Add stage headers to output
  - [ ] Show progress within stage
  - [ ] Display next steps after completion

- [ ] **Task 3.3**: Add validation hooks
  - [ ] Validate inputs against prompt metadata
  - [ ] Warn if skipping stages
  - [ ] Suggest corrections for common errors

- [ ] **Task 3.4**: Create unified CLI wrapper
  - [ ] `researcherrag run-stage 1` → init project
  - [ ] `researcherrag run-stage 2` → fetch papers
  - [ ] `researcherrag run-stage 3` → screen papers
  - [ ] Auto-detect project context

**Deliverables**:
- Context-aware scripts
- Unified CLI wrapper
- Validation system

---

### Phase 4: Frontend Documentation (Week 7-8)

- [ ] **Task 4.1**: Create "Prompt Guide" section
  - [ ] New page: `/guide/03-prompt-guide`
  - [ ] Overview: How prompts work
  - [ ] Visual flowchart: Prompt → Conversation → Script
  - [ ] Detailed guide for each of 7 stages

- [ ] **Task 4.2**: Create stage-by-stage pages
  - [ ] `/guide/03-prompt-guide/stage-1`
  - [ ] `/guide/03-prompt-guide/stage-2`
  - [ ] ... (all 7 stages)
  - [ ] Each includes:
    - Prompt template
    - Example conversation
    - Expected outputs
    - Troubleshooting

- [ ] **Task 4.3**: Update navigation
  - [ ] Add "Prompt Guide" to menu
  - [ ] Add "Script Reference" (for developers)
  - [ ] Clear distinction: Researcher vs Developer paths

- [ ] **Task 4.4**: Create troubleshooting guide
  - [ ] "I'm lost - which stage?"
  - [ ] "Conversation went off-track"
  - [ ] "Scripts not auto-running"

**Deliverables**:
- Prompt Guide documentation
- Stage-by-stage pages
- Updated navigation
- Troubleshooting guide

---

## 🎬 Example: End-to-End Flow

### Researcher Journey (After Implementation):

**Step 1: Start Project**

Researcher visits: https://researcherrag.vercel.app

```
Welcome to ResearcherRAG!

Two ways to use:
┌─────────────────────────────────┐
│ 🎓 For Researchers              │
│ Use prompts + Claude Code       │
│ No coding required              │
│ → Start with Prompt Guide       │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 💻 For Developers               │
│ Use scripts directly            │
│ Full control                    │
│ → See Script Reference          │
└─────────────────────────────────┘

[Click: Prompt Guide →]
```

**Step 2: Read Prompt Guide**

```
Prompt Guide / Stage 1: Research Domain Setup

📍 Stage 1 of 7
⏱️ 15 minutes
🎯 Goal: Define your research scope

[Copy This Prompt] button

---

What You'll Do:
1. Paste prompt to Claude Code
2. Answer Claude's questions (3-5 minutes)
3. Claude generates config.yaml
4. Claude auto-initializes project
5. You're done! Move to Stage 2.

---

Prompt:
[Full prompt text here]

---

Example Conversation:
[See how another researcher did it]
```

**Step 3: Paste to Claude Code**

Researcher copies prompt → Opens VSCode → Pastes to Claude Code:

```
USER: [Pastes Stage 1 prompt]

CLAUDE: Great! Let's set up your research project.

        I see you want to study AI chatbots in language learning.
        Let me ask a few questions to refine your scope:

        1. What specific aspect interests you most?
           - Speaking practice
           - Grammar correction
           - Vocabulary building
           - All of the above

USER: Speaking practice

CLAUDE: Perfect! And what population?
        - K-12 students
        - University students
        - Adult learners

USER: University students

CLAUDE: Excellent. Year range?

USER: 2015-2025

CLAUDE: Great! I've designed your config.yaml:

        [Shows config.yaml]

        Does this look correct?

USER: Yes

CLAUDE: ✅ Creating your project...

        [Runs: researcherrag init]

        ✅ Stage 1 Complete!

        📁 Created:
        - config.yaml
        - projects/2025-10-14_AI-Chatbots-Speaking/

        📊 Your Setup:
        - Topic: AI chatbots for speaking practice
        - Population: University students
        - Years: 2015-2025
        - Target: 60-80 papers

        🎯 Next: Stage 2 (Query Strategy Design)

        Ready to continue? I can show you the Stage 2 prompt.
```

**Step 4: Stage 2 Auto-flows**

```
USER: Yes, let's continue

CLAUDE: [Shows Stage 2 prompt]

        For Stage 2, we'll design search queries for:
        - Semantic Scholar
        - OpenAlex
        - arXiv

        Based on your topic, I suggest starting with...

        [Conversation continues]

        [At end of Stage 2]

CLAUDE: ✅ Queries designed! Running paper fetch...

        [Runs: python scripts/01_fetch_papers.py]

        ⏳ This will take ~15 minutes. I'll update you as results come in.
```

**Result**: Researcher never opened terminal, never wrote code, just talked to Claude!

---

## 📊 Success Metrics

### Quantitative Metrics:

1. **Completion Rate**:
   - Target: 80% of researchers complete all 7 stages
   - Current: Unknown (need tracking)

2. **Time to First Result**:
   - Target: <2 hours (Stage 1-3 complete)
   - Current: Unknown

3. **Divergence Rate**:
   - Target: <10% of conversations go off-track
   - Track: How often Claude redirects to protocol

4. **Terminal Usage**:
   - Target: <5% of researchers use terminal directly
   - Measure: CLI logs vs. prompt usage

### Qualitative Metrics:

1. **User Feedback**:
   - "I didn't need to touch terminal at all!"
   - "Claude kept me on track"
   - "Clear what to do next"

2. **Confusion Points**:
   - Track: Where do users get stuck?
   - Track: What questions do users ask?

---

## 🚧 Implementation Priorities

### Must Have (v1.1.0) - 4 weeks:

1. ✅ Enhanced prompts with metadata (Phase 1)
2. ✅ Stage-aware CLAUDE.md (Phase 2)
3. ✅ Conversation context system (Phase 2)
4. ✅ Prompt Guide documentation (Phase 4)

**Result**: Researchers can follow prompts → Claude tracks stages → Clear next steps

---

### Should Have (v1.2.0) - 2 months:

1. ✅ Context-aware scripts (Phase 3)
2. ✅ Unified CLI wrapper (Phase 3)
3. ✅ Script Reference documentation (Phase 4)
4. ✅ Troubleshooting guide (Phase 4)

**Result**: Seamless auto-execution + Developer-friendly

---

### Nice to Have (v2.0.0) - 6 months:

1. ⏸️ VSCode extension (visual stage tracking)
2. ⏸️ Web-based UI (no VSCode needed)
3. ⏸️ Real-time collaboration
4. ⏸️ Template library

**Result**: Production-grade platform

---

## 🔍 Open Questions

### Technical:

1. **How does Claude Code auto-execute scripts?**
   - Option A: Claude Code's built-in tool use
   - Option B: Custom VSCode extension
   - Option C: CLI with monitoring daemon
   - **Recommendation**: Test Option A first

2. **How to handle script failures?**
   - Option A: Claude retries with different parameters
   - Option B: Claude asks user for help
   - Option C: Claude logs error and continues
   - **Recommendation**: Option A → B fallback

3. **How granular should stage tracking be?**
   - Option A: 7 stages (coarse)
   - Option B: 20+ sub-steps (fine)
   - Option C: Dynamic (adapts to project)
   - **Recommendation**: Option A + checklist items

### UX:

1. **What if researcher wants to skip stages?**
   - Allow? (flexibility)
   - Block? (enforce protocol)
   - Warn? (middle ground)
   - **Recommendation**: Warn + allow

2. **What if researcher wants to modify scripts?**
   - Encourage? (customization)
   - Discourage? (maintain protocol)
   - Support both paths?
   - **Recommendation**: Two paths (Researcher vs Developer)

3. **How to handle multiple projects?**
   - Single conversation per project?
   - Multi-project context switching?
   - **Recommendation**: Single project per conversation (simpler)

---

## 📞 Next Steps

### Immediate (This Week):

1. **Validate approach**: Review this plan with users
2. **Prototype Phase 1**: Enhance 1-2 prompts with metadata
3. **Test conversation**: Run through Stage 1 with enhanced prompt
4. **Iterate**: Based on testing results

### Short-term (Next Month):

1. **Complete Phase 1**: All 7 prompts enhanced
2. **Complete Phase 2**: Stage-aware CLAUDE.md + context system
3. **Begin Phase 4**: Start Prompt Guide documentation
4. **User testing**: 3-5 researchers test prompts

### Long-term (Q1 2026):

1. **Complete all phases**: Full prompt-script integration
2. **Production release**: v1.1.0 or v1.2.0
3. **User studies**: Measure success metrics
4. **Iterate**: Based on real-world usage

---

## 💡 Key Insights

### Why This Matters:

1. **Accessibility**: Opens RAG to non-programmers
2. **Reproducibility**: Protocol ensures consistency
3. **Guidance**: Prevents researchers from getting lost
4. **Efficiency**: Auto-execution saves time
5. **Education**: Researchers learn workflow by doing

### What Makes This Unique:

Most documentation:
- Shows code → User must execute manually
- Tutorial-style → One-way communication
- Static → Can't adapt to user

ResearcherRAG (after implementation):
- **Conversational** → Two-way with Claude
- **Adaptive** → Detects divergence, guides back
- **Automated** → Scripts execute automatically
- **Progressive** → Stage-by-stage, can't get lost

This is **next-generation documentation**: Not just reading, but **guided doing**.

---

## 📚 References

- [OpenAlex Docs](https://docs.openalex.org/) - API reference style
- [PRISMA 2020](http://www.prisma-statement.org/) - Systematic review protocol
- [Anthropic Claude Docs](https://docs.anthropic.com/) - Conversation design patterns

---

**Status**: 📝 Planning Complete - Ready for Implementation

**Next**: Validate with team → Prototype Phase 1 → User testing
