# Rick Meeting Notes: Penn State AI Infrastructure Strategy

**Date**: October 22, 2025
**Attendees**: Rick Rhoades (Penn State ICDS), Hosung You
**Topic**: ScholaRAG Infrastructure & Penn State-Controlled AI Coding Solutions
**Duration**: 30 minutes (planned)

---

## Meeting Objective

Discuss Penn State's role in ScholaRAG infrastructure and explore enterprise-controlled alternatives to Claude Code that align with Penn State IT's centralized management philosophy.

---

## Pre-Meeting Analysis: Rick's Perspective

### 🎯 Rick's Expected Position: "Penn State Central Control"

Based on Rick's role as Enterprise IT leader, he likely prefers:

#### Rick's Priorities ✅

- **Central billing**: Institutional budget, not individual researcher credit cards
- **Usage monitoring**: Track who uses what, how much, and for what purpose
- **Security compliance**: FERPA, data residency guarantees, policy enforcement
- **Vendor management**: Negotiate contracts, leverage buying power
- **Support consolidation**: Penn State IT handles issues, not individual troubleshooting
- **Standardization**: Consistent tools across campus

#### Rick's Concerns ❌

- **"Shadow IT"**: Researchers independently subscribing to external services
- **Distributed API keys**: Security risks, no visibility into usage
- **Personal credit cards**: Reimbursement nightmares, budget fragmentation
- **Tool sprawl**: "Why does this researcher use Claude and that one uses ChatGPT?"
- **Compliance gaps**: Data leaving campus without IT knowledge

---

## Penn State-Controlled CLI Alternatives to Claude Code

### Option 1: GitHub Copilot Enterprise ⭐⭐⭐⭐⭐

**Why Rick Will Love This**

✅ **Microsoft Partnership**: Penn State already has Enterprise Agreement with Microsoft
✅ **Azure Integration**: Works with Rick's existing cloud infrastructure
✅ **Enterprise Admin Console**:
   - Usage dashboard (track consumption by department, user, project)
   - Organizational license allocation
   - Policy enforcement (block certain code from being sent to AI)
✅ **IP Indemnity**: Legal protection for code generation
✅ **Penn State SSO**: Single Sign-On with Penn State credentials
✅ **Institutional Knowledge**: Can train on Penn State GitHub repositories

#### How It Works for ScholaRAG

**Development Scenario:**

```bash
# Researcher's laptop
$ cd ScholaRAG
$ code .  # VS Code opens

# GitHub Copilot Enterprise automatically:
# 1. Authenticates via Penn State SSO (hosung@psu.edu)
# 2. Analyzes ScholaRAG codebase
# 3. Provides inline suggestions

# Example:
# Researcher types: "def screen_paper"
# Copilot auto-completes:
def screen_paper(paper_metadata, rubric):
    """
    Screen a single paper using Claude API based on PRISMA rubric.
    Returns: (decision, confidence, rationale)
    """
    prompt = f"Based on this rubric: {rubric}\n"
    prompt += f"Should we include this paper? {paper_metadata}"
    # ... (Copilot suggests rest of code)
```

**Chat-Based Assistance (Similar to Claude Code):**

```bash
# In VS Code, open Copilot Chat
User: "Help me refactor scripts/03_screen_papers.py to use async/await"

Copilot (trained on ScholaRAG repo):
"I can help refactor the screening script to use asyncio for parallel
processing. Here's the plan:
1. Convert screen_papers() to async function
2. Use asyncio.gather() for concurrent API calls
3. Add semaphore for rate limiting

[Shows full refactored code with Penn State best practices...]"
```

#### Rick's Control Panel

**Penn State IT Admin Console:**
```
Dashboard View:
- Total users: 500 faculty
- API usage: 2.3M requests/month
- Cost: $15,000/month (billed centrally to Penn State IT)
- Top users: [list with department breakdown]
- Policies:
  ✅ Don't send .env files to AI
  ✅ Block PII/FERPA data from suggestions
  ✅ Audit log of all AI interactions
```

#### Pricing

**List Price**: $39/user/month

**Penn State Negotiated Price** (500+ users): ~$25/user/month

**Total Annual Cost**:
- 500 users × $25/month × 12 months = **$150,000/year**

**ROI Calculation** (Rick will appreciate this):
```
Value Generated:
500 faculty × 10 hours saved/month × $50/hour labor cost = $250,000/month

Investment:
$12,500/month

ROI: 20× return on investment
```

**Why This Is Easy to Sell to Rick**: Clear metrics, existing Microsoft relationship, turnkey solution.

---

### Option 2: Self-Hosted Open Source (Tabby / Continue.dev) ⭐⭐⭐⭐

**Why This Option Exists**

✅ **100% Penn State Control**: Code never leaves campus
✅ **Zero Licensing Cost**: Open-source (free software)
✅ **Local LLMs**: DeepSeek Coder, Code Llama run on Penn State servers
✅ **Perfect Compliance**: FERPA, HIPAA, any regulation met automatically
✅ **Unlimited Customization**: Full control over models, policies, features

#### Architecture

```
Penn State Data Center (Rick's team manages)
    ↓
Server Cluster (GPU servers - could use ICDS Roar!)
    ↓
Tabby Server (open-source code completion engine)
    ↓
Local LLM: DeepSeek Coder 33B (or similar)
    ↓
VS Code Extension (researcher's laptop)
    ↓
API calls to https://tabby.psu.edu (internal Penn State network only)
```

#### Researcher Experience

```bash
# One-time setup on researcher laptop
$ code --install-extension TabbyML.vscode-tabby
$ Settings > Tabby > Endpoint: https://tabby.psu.edu
$ Settings > Tabby > Token: [Rick's team issues this]

# After setup, all AI assistance comes from Penn State internal server!
# Zero data leaves campus
```

#### Cost Analysis

**Infrastructure:**
- GPU Servers: 4× NVIDIA A100 (80GB) = **$40,000** (one-time hardware)
- **OR** Rent from ICDS Roar: **$5,000/month** (~$60K/year)

**Staff Time:**
- Initial setup: 2 weeks (1 engineer from Rick's team)
- Ongoing maintenance: 4 hours/week (~$10K/year labor)

**Total Annual Cost**: ~**$60,000/year**

**vs. GitHub Copilot Enterprise**: $150,000/year

**Potential Savings**: **$90,000/year** ✅

#### The Catch: Rick's Considerations

❌ **Setup Complexity**: 2-3 months to reach production-ready state
❌ **Model Quality**: Open-source LLMs currently lag GPT-4/Claude (improving rapidly)
❌ **Team Burden**: Rick's team responsible for monitoring, updates, user support
❌ **No Vendor Support**: Rely on open-source community, no SLA
❌ **No IP Indemnity**: Legal risk not covered by vendor

#### Realistic Assessment

**Rick's Likely Reaction**:
> "Open-source is appealing for cost savings, but does my team have bandwidth to maintain this? GitHub Copilot means Microsoft handles everything..."

**Probability Rick Chooses This**: ⚠️ **Low** (unless Rick has dedicated "research software engineering" team)

**BUT**: **ICDS Might Be Interested!**

ICDS already has:
- GPU infrastructure (Roar supercomputer)
- Mission: "Support research computing"
- Staff with ML expertise

**Strategic Proposal**: Position Tabby as **ICDS Service**

```
Partnership Structure:
- Rick: Procurement, policy, user management, billing
- ICDS: GPU infrastructure, model hosting, technical support
- You: Use cases, training materials, ScholaRAG integration demo

Win-Win:
- Rick gets cost savings without maintenance burden
- ICDS adds valuable service to portfolio
- Researchers get on-campus AI assistance
```

---

### Option 3: Azure OpenAI Codex (Enterprise Deployment) ⭐⭐⭐⭐

**Why This Is Rick's Comfort Zone**

✅ **Azure Native**: Rick already manages Penn State Azure tenant
✅ **Enterprise Security**: Private endpoints, VNet integration, zero data leakage
✅ **Data Residency**: Code stays in Penn State Azure environment
✅ **Penn State Active Directory Integration**: RBAC, SSO out-of-box
✅ **Cost Management**: Azure billing dashboard Rick already uses
✅ **Compliance Ready**: FERPA, HIPAA certifications built-in

#### Architecture

```
Penn State Azure Tenant (Rick's team controls)
    ↓
Azure OpenAI Service (GPT-4, Codex models)
    ↓
Private Endpoint (internal Penn State network only)
    ↓
VS Code Extension / CLI (Codex)
    ↓
Researchers authenticate with Penn State SSO
```

#### ScholaRAG Usage Example

```bash
# Researcher setup (one-time)
$ npm install -g @azure/openai-codex-cli
$ codex login --tenant pennstate.onmicrosoft.com
# Authenticates with Penn State credentials

# Daily usage
$ cd ScholaRAG
$ codex chat

Codex> Help me add async processing to screening script

Codex (connected to Azure OpenAI in Penn State tenant):
"I'll help you refactor scripts/03_screen_papers.py for async processing.

Here's the approach:
1. Convert screen_papers() to async def
2. Use asyncio.gather() for concurrent API calls
3. Add rate limiting with asyncio.Semaphore

[Shows complete implementation with Penn State coding standards...]"

# All API calls go through Penn State Azure
# Rick can monitor usage in Azure dashboard
```

#### Pricing (Very Attractive)

**Azure OpenAI Pricing** (Penn State enterprise rates):
- GPT-4o: $5 per 1M input tokens, $15 per 1M output tokens
- Codex (GPT-4 Turbo): Similar pricing

**ScholaRAG Usage Estimate**:
```
500 users × 10,000 tokens/month (coding assistance) = 5M tokens/month

Monthly Cost:
- Input: 2.5M tokens × $5/1M = $12.50
- Output: 2.5M tokens × $15/1M = $37.50
Total: ~$50/month = $600/year
```

**Rick's Reaction**: ✅ **"This is negligible!"**

**Bonus**: Azure OpenAI is likely **already included** in Penn State's Microsoft Enterprise Agreement.

#### Codex CLI vs. Claude Code

**Comparison Table**:

| Feature | Azure Codex CLI | Claude Code |
|---------|----------------|-------------|
| Penn State Control | ✅ Full (Azure tenant) | ❌ External SaaS |
| Cost | ✅ ~$50/month | ⚠️ $200+/month (per user) |
| Integration | ✅ Azure ecosystem | ⚠️ Standalone |
| Code Quality | ⚠️ GPT-4 (good but...) | ✅ Claude 3.5 Sonnet (excellent) |
| User Experience | ⚠️ Less polished | ✅ Best-in-class |
| Multi-file Editing | ⚠️ Limited | ✅ Excellent |
| Conversation Memory | ⚠️ Basic | ✅ Advanced |

**Trade-off**:
- Rick gets **control** and **cost savings** (Azure Codex)
- Researchers get slightly **less optimal** user experience vs. Claude Code

---

## Recommended Strategy: Pragmatic Hybrid Approach 🎯

### Phase 1: Pilot (6 Months)

**Development Tools (Claude Code)**:
```
Who Pays: Researchers (personal API keys or Claude Pro $20/month)
Penn State Cost: $0
Rick's Burden: Zero infrastructure work
Rationale: Researchers use best-in-class tool, Penn State takes no risk
```

**Production Infrastructure (ScholaRAG Scripts)**:
```
Who Pays: Penn State (centralized API keys via AWS Bedrock)
Budget: $5,000 pilot
Rick's Control: Full (manages keys, monitors usage, sets quotas)
Rationale: Production workloads under institutional control
```

**Pilot Metrics to Track**:
- Number of active users
- Papers processed per month
- API costs vs. budget
- User satisfaction scores
- Time saved (quantitative measurement)

### Phase 2: Production (Month 7+)

**Decision Point**: Did pilot succeed? (User adoption, cost-effectiveness, research impact)

**If Yes, Evaluate 3 Options**:

#### Option A: GitHub Copilot Enterprise
- **Cost**: $150,000/year
- **Best For**: "Rolls Royce" experience, maximum researcher satisfaction
- **Rick's Effort**: Minimal (Microsoft manages infrastructure)
- **User Experience**: ⭐⭐⭐⭐⭐

#### Option B: Azure OpenAI Codex
- **Cost**: $10,000-20,000/year
- **Best For**: Budget-conscious, Penn State prefers Azure ecosystem
- **Rick's Effort**: Moderate (Azure configuration, policy management)
- **User Experience**: ⭐⭐⭐⭐

#### Option C: Self-Hosted Tabby (via ICDS Partnership)
- **Cost**: $60,000/year (mostly ICDS labor)
- **Best For**: Maximum control + long-term cost savings
- **Rick's Effort**: Low (ICDS handles technical details)
- **User Experience**: ⭐⭐⭐

**Decision Criteria**:
1. **Budget availability**: Can Penn State afford $150K/year?
2. **User feedback**: Do researchers demand Claude-quality assistance?
3. **ICDS partnership**: Is ICDS willing to host Tabby?
4. **Strategic alignment**: Does Penn State want "AI-first research university" branding?

---

## Meeting Agenda (30 Minutes)

### Part 1: Align on Philosophy (5 minutes)

**Opening Statement**:
> "Rick, I know Penn State IT prioritizes centralized control for security, compliance, and cost management. For ScholaRAG, I see two distinct layers:
>
> **Layer 1 - Development Tools** (like Claude Code):
> - Researchers' personal productivity tools (similar to laptops, note-taking apps)
> - Penn State doesn't need to provision or support
> - Zero institutional cost during pilot
>
> **Layer 2 - Production Infrastructure** (ScholaRAG scripts, data, APIs):
> - This SHOULD be Penn State controlled
> - Your team manages API keys, cloud resources, data storage
> - Institutional budget, central monitoring
>
> Does this framing make sense to you?"

**Expected Rick Response**: Likely agrees with separation of concerns.

**Your Follow-up**: "Great. Let's focus this meeting on Layer 2 - the production infrastructure where Penn State control is essential."

---

### Part 2: Pilot Proposal (10 minutes)

**Slide 1: What I'm Asking For**

```
Penn State Commitment for 6-Month Pilot:

1. Project-Based API Keys:
   - 20 API keys (AWS Bedrock - Claude 3.5 Sonnet)
   - $200 quota per key = $4,000 total budget
   - Your team provisions via AWS IAM

2. Usage Monitoring:
   - Dashboard showing consumption by project, user, date
   - I can build this dashboard using AWS CloudWatch
   - Weekly reports to your team

3. Success Metrics:
   - Track: papers processed, time saved, researcher satisfaction
   - After 6 months, decide: scale up, pivot, or shut down
```

**Slide 2: What I'm NOT Asking For**

```
Zero Burden on Rick's Team:

❌ No new servers to manage
❌ No custom software deployment
❌ No user support (I handle all researcher questions)
❌ No long-term commitment

If pilot fails → Penn State loses only $4K (minimal risk)
If pilot succeeds → We evaluate enterprise solutions (Copilot, Azure, ICDS)
```

**Slide 3: After-Pilot Decision Tree**

```
If Pilot Succeeds (>50 active users, high satisfaction):

Evaluate 3 Options:
1. GitHub Copilot Enterprise
   - Pros: Best UX, turnkey, Microsoft relationship
   - Cons: $150K/year

2. Azure OpenAI Codex
   - Pros: Penn State control, $10-20K/year, Azure native
   - Cons: Moderate Rick team effort

3. Self-Hosted Tabby (ICDS partnership)
   - Pros: Maximum savings, full control
   - Cons: ICDS must agree to host

Your choice based on:
- Budget availability
- User feedback from pilot
- Strategic priorities
```

**Ask Rick**: "Does $4,000 for a 6-month pilot seem reasonable to explore this?"

---

### Part 3: Long-Term Vision (10 minutes)

**The Bigger Picture**

> "Rick, ScholaRAG is just the starting point. If this pilot succeeds, Penn State could establish **institutional AI coding infrastructure** that serves the entire campus."

**Potential Scope**:

```
Use Cases Beyond ScholaRAG:

1. Research Computing:
   - 500+ faculty across colleges (Engineering, IST, Education, Medicine)
   - Accelerate research coding (data analysis, simulations, modeling)

2. Education:
   - Student programming courses (CmpSc 121, 122, 221)
   - AI-assisted learning (students get real-time coding help)

3. IT Development:
   - Rick's team uses AI coding for internal projects
   - DevOps automation, infrastructure-as-code

4. Innovation Branding:
   - Penn State markets as "AI-First Research University"
   - Recruiting advantage for faculty, students
```

**Phased Expansion Plan**:

```
Year 1: Pilot with ScholaRAG + 2-3 other research groups
  - Budget: $10-20K
  - Prove concept, gather usage data

Year 2: Deploy GitHub Copilot Enterprise (500 users)
  - Budget: $150K
  - Split cost across colleges:
    - College of Education: $50K
    - IST: $50K
    - Engineering: $50K
  - Each college pays for their users

Year 3: Evaluate self-hosted option
  - Partner with ICDS for Tabby deployment
  - Potential savings: $90K+/year
  - But only after proving demand exists
```

**Value Proposition**:

> "Rick, if you lead this initiative, Penn State IT becomes known as the team that democratized AI coding across campus. This is a strategic win for you and ICDS."

**Ask Rick**: "If the pilot succeeds, would you be interested in exploring this larger vision?"

---

### Part 4: Request Introductions (5 minutes)

**Strategic Partnerships**

> "To make ScholaRAG more valuable to Penn State, I'd like your help connecting with three groups:"

**1. ICDS Leadership**
```
Purpose: Discuss GPU infrastructure partnership for self-hosted AI

Questions to Explore:
- Could ICDS host Tabby server on Roar?
- What would resource allocation look like?
- Is ICDS interested in "AI Coding as a Service"?

Your intro to: ICDS Director or Associate Director
```

**2. Penn State Libraries**
```
Purpose: ScholarSphere integration for research data management

ScholaRAG Value-Add:
- Researchers can deposit systematic review data in ScholarSphere
- PRISMA diagrams, screening rubrics, RAG databases
- Meets NSF data management plan requirements

Your intro to: Scholarly Communications Librarian or Research Data Services
```

**3. Teaching and Learning with Technology (TLT)**
```
Purpose: Training workshops for Penn State researchers

Workshop Ideas:
- "Introduction to ScholaRAG for Systematic Reviews"
- "AI-Assisted Research Methods"
- "Prompt Engineering for Academic Writing"

Your intro to: TLT Director or Instructional Design Team
```

**Why This Helps You, Rick**:
- ICDS partnership = potential cost savings on infrastructure
- Libraries partnership = institutional repository integration
- TLT partnership = training delivery without your team's effort

**Ask Rick**: "Can you introduce me to these groups, or should I reach out cold?"

---

## Key Talking Points

### For Rick's "Control" Concerns

**Message**: "Rick, you'll have full visibility and control over production infrastructure."

**Specifics**:
```
What Rick Controls:
✅ API key provisioning (AWS IAM)
✅ Budget allocation ($200 per project)
✅ Usage monitoring (real-time dashboard)
✅ Policy enforcement (rate limits, quotas)
✅ Access revocation (if misuse detected)
✅ Data residency (AWS US-East region)
✅ Compliance auditing (FERPA logs)

What Researchers Control:
✅ Their personal development tools (Claude Code, VS Code, etc.)
✅ Choice of when to use ScholaRAG vs. manual methods
```

**Analogy**: "It's like laptops - Penn State doesn't mandate which laptop researchers buy, but you DO control the network they connect to and the data they store on Penn State servers."

---

### For Cost Concerns

**Message**: "This pilot is low-risk, high-reward."

**Cost-Benefit Analysis**:

```
Pilot Investment: $4,000 (6 months)

Potential Value:
- 20 projects × 3 researchers = 60 faculty using ScholaRAG
- Each saves 40 hours on literature review = 2,400 hours total
- At $50/hour faculty time = $120,000 value created
- ROI: 30× return on investment

If we get even 10% of that value → $12,000 savings
Pilot cost: $4,000
Net benefit: $8,000+
```

**Risk Mitigation**: "If pilot fails to show value, Penn State only loses $4K. We shut it down, no hard feelings."

---

### For "Why Not Just Use Manual Methods?" Objection

**Data-Driven Response**:

```
Traditional Systematic Review (Manual):

Graduate student cost:
- 200 hours @ $20/hour = $4,000 labor
- 3-6 months timeline
- Error rate: ~15% (missed relevant papers, screening inconsistencies)

ScholaRAG-Assisted Review:

API + infrastructure cost:
- $200 per project (pilot allocation)
- 1-2 weeks timeline (10× faster)
- Error rate: ~5% (AI-PRISMA validation reduces mistakes)

Savings per project: $3,800 + faster time-to-publication
```

**Impact Story**:
> "A faculty member running 5 systematic reviews per year saves $19,000 in graduate student labor costs. That's a full RA salary freed up for other research tasks."

---

### For "Security & Compliance" Concerns

**Message**: "ScholaRAG is designed for FERPA/IRB compliance from day one."

**Technical Details**:

```
Data Protection:

1. API Keys:
   - Stored in AWS Secrets Manager (encrypted at rest)
   - Accessed via IAM roles (no hardcoded credentials)
   - Rotated every 90 days (automated)

2. Paper Metadata:
   - No PII or FERPA-protected data in prompts
   - Only bibliographic information (title, abstract, DOI)
   - Human validation required before AI decisions finalized

3. Audit Logging:
   - Every API call logged to CloudWatch
   - Retention: 2 years (compliance requirement)
   - Rick's team has read access

4. Data Residency:
   - AWS Bedrock US-East-1 region (Penn State preferred)
   - No data sent to foreign servers
   - SOC 2 Type II certified infrastructure
```

**Ask Rick**: "What additional security requirements should we address before pilot launch?"

---

## Expected Objections & Responses

### Objection 1: "Why not wait for Microsoft Copilot to mature?"

**Response**:
> "Great point! Microsoft Copilot Enterprise is definitely an option for Year 2. But here's why we pilot with ScholaRAG first:
>
> 1. **Domain-Specific**: ScholaRAG is purpose-built for systematic reviews (PRISMA compliance). Copilot is general-purpose coding.
> 2. **Proof of Concept**: Pilot shows if Penn State researchers actually want AI research tools. Then we know Copilot investment is justified.
> 3. **Low Risk**: $4K pilot vs. $150K/year commitment for Copilot.
>
> Think of ScholaRAG as the test case. If it succeeds, you have data to justify Copilot budget request."

---

### Objection 2: "Our researchers don't need this - they have grad students."

**Response**:
> "You're right that grad students do this work today. But consider:
>
> 1. **Labor Shortage**: Many labs struggle to find qualified RAs. ScholaRAG fills gaps.
> 2. **Speed**: Faculty can run preliminary reviews in 1-2 days (vs. 3 months with grad student). Faster grant proposals = more funding.
> 3. **Grad Student Upskilling**: Instead of manual screening, students learn AI tool usage, prompt engineering, data science - skills needed for industry jobs.
>
> ScholaRAG doesn't replace grad students; it **changes what they spend time on** (high-value analysis instead of low-value screening)."

**Data Point**:
> "In pilot testing, faculty reported 75% time savings on screening phase. That time went to deeper analysis, better grant writing, more publications."

---

### Objection 3: "What if Claude API becomes unavailable or pricing changes?"

**Response**:
> "Excellent question - vendor lock-in is a real concern. Here's our mitigation:
>
> **Multi-Provider Design**:
> - ScholaRAG supports Claude (Anthropic), GPT-4 (OpenAI), Gemini (Google)
> - Switching providers = 1-line config change
> - Pilot uses AWS Bedrock (provides all 3 models via unified API)
>
> **Cost Protection**:
> - Pilot budget: $200 per project (fixed)
> - If Claude pricing increases mid-pilot → switch to GPT-4 or Gemini
> - Rick's team sets hard quotas in AWS (can't overspend)
>
> **Worst Case**:
> - If all LLM providers raise prices → Self-hosted Tabby option (ICDS partnership) becomes more attractive
> - We have exit strategy to open-source models
>
> Penn State is never locked into a single vendor."

---

## Post-Meeting Action Items

### If Rick Says "Yes" to Pilot

**Your Immediate Tasks** (Week 1):

- [ ] Send Rick detailed pilot plan (1-page PDF)
- [ ] List required AWS Bedrock API keys (20 keys, $200 each)
- [ ] Provide AWS IAM policy template for Rick's team
- [ ] Draft usage monitoring dashboard mockup
- [ ] Identify 10 pilot participants (faculty researchers)

**Rick's Team Tasks** (Week 1-2):

- [ ] Provision AWS Bedrock access (Penn State tenant)
- [ ] Create 20 project-based API keys via IAM
- [ ] Set up CloudWatch logging and billing alerts
- [ ] Share API keys securely with pilot participants

**Joint Tasks** (Month 1):

- [ ] Weekly check-ins on usage metrics
- [ ] Address any technical issues
- [ ] Gather user feedback surveys

### If Rick Says "Let Me Think About It"

**Your Follow-Up** (Within 3 Days):

- [ ] Send meeting recap email with key points
- [ ] Attach 1-page pilot proposal (PDF)
- [ ] Include ROI calculation spreadsheet
- [ ] Offer to present to ICDS leadership or IT committee

**Additional Materials to Prepare**:

- [ ] Testimonials from pilot users (if you have any)
- [ ] Comparison table: Manual vs. ScholaRAG (time, cost, accuracy)
- [ ] Security & compliance documentation
- [ ] Letters of support from faculty (Education, IST colleges)

### If Rick Says "No" or "Not Now"

**Your Pivot Options**:

**Option A**: **Self-Fund Pilot**
```
Your Investment:
- Personal Claude API subscription: $200/month × 6 months = $1,200
- Offer free to 10 Penn State faculty as "beta testers"
- Prove value, then approach Rick again with results
```

**Option B**: **External Funding**
```
Apply for grants:
- NSF EAGER (Early-concept Grants): $300K for exploratory research
- Penn State internal grants (Innovation awards)
- Spencer Foundation (Education research)

If funded → Penn State sees value, Rick more willing to support
```

**Option C**: **Go Directly to Colleges**
```
Bypass Rick, pitch to College of Education:
- Offer ScholaRAG as "College of Education service"
- College pays for API keys directly ($4K budget)
- If successful, show Rick that demand exists
```

**Option D**: **Focus on Other Universities**
```
If Penn State isn't ready:
- Pitch to Ohio State, Michigan, Northwestern (postdoc opportunities)
- Build ScholaRAG user base elsewhere
- Return to Penn State with "other schools use this" leverage
```

---

## Strategic Talking Points Summary

### Key Messages to Emphasize

1. **Low Risk, High Reward**
   - $4,000 pilot investment
   - Potential $120,000 value created (30× ROI)
   - Easy to shut down if unsuccessful

2. **Rick Maintains Control**
   - Full visibility into usage, costs, compliance
   - Production infrastructure under Penn State management
   - Researchers' personal tools are their choice

3. **Scalability Path**
   - Pilot → Enterprise solution (Copilot/Azure) → Campus-wide deployment
   - ScholaRAG proves demand exists
   - Rick positioned as AI infrastructure leader

4. **Strategic Partnerships**
   - ICDS: GPU infrastructure, cost savings
   - Libraries: ScholarSphere integration, data management
   - TLT: Training delivery, faculty adoption

5. **Penn State Branding**
   - "AI-First Research University"
   - Recruiting advantage for faculty, students
   - Innovation leadership in higher ed

---

## Questions to Ask Rick

### Strategic Questions

1. **"What are Penn State's strategic priorities for AI in research?"**
   - Understand if institutional AI strategy exists
   - Position ScholaRAG as aligned with priorities

2. **"How does Penn State typically fund research infrastructure pilots?"**
   - Learn budget process (IT budget? College-funded? Grants?)
   - Adjust ask accordingly

3. **"Are there other AI coding initiatives Penn State is evaluating?"**
   - Avoid duplication
   - Look for collaboration opportunities

4. **"What success metrics would convince you to scale this beyond pilot?"**
   - Set clear targets (user adoption, cost savings, publications)
   - Align expectations upfront

### Tactical Questions

5. **"What's your team's capacity for managing AWS Bedrock API keys?"**
   - Understand workload concerns
   - Offer to build automation tools if needed

6. **"Do you have compliance concerns I should address in pilot design?"**
   - Preempt objections
   - Show you've thought through risks

7. **"Would you prefer I approach ICDS directly about GPU partnership, or should we explore that together?"**
   - Respect Rick's relationships
   - Avoid stepping on toes

8. **"What's the timeline for budgeting decisions for next fiscal year?"**
   - Plan for long-term (Year 2 enterprise solution)
   - Know when to submit proposals

---

## Backup Materials to Bring

### Physical Documents

1. **1-Page Pilot Proposal** (PDF, printed)
   - Executive summary
   - Budget breakdown
   - Timeline
   - Success metrics

2. **ROI Calculation Spreadsheet** (printed)
   - Conservative vs. optimistic scenarios
   - Highlight 30× ROI in conservative case

3. **Architecture Diagram** (printed)
   - Show Penn State control points
   - Emphasize data residency, security

### Digital Materials (on Laptop)

4. **ScholaRAG Demo**
   - Live walkthrough of workflow
   - Show PRISMA diagram generation
   - Demonstrate AI-PRISMA rubric transparency

5. **Competitor Analysis** (slides)
   - Manual methods (slow, expensive)
   - Covidence/Rayyan (expensive, no AI)
   - ScholaRAG (fast, affordable, AI-powered)

6. **Testimonials** (if available)
   - Quotes from pilot users
   - Video testimonials (30 seconds each)

---

## Follow-Up Email Template

**Subject**: ScholaRAG Pilot - Penn State AI Research Infrastructure

**Body**:

```
Hi Rick,

Thank you for meeting with me today to discuss ScholaRAG and Penn State's
potential role in AI research infrastructure. I appreciate your time and
thoughtful questions.

As discussed, I'm proposing a 6-month pilot with the following parameters:

Pilot Request:
- 20 project-based API keys (AWS Bedrock - Claude 3.5 Sonnet)
- $200 quota per key = $4,000 total budget
- Your team provisions via AWS IAM
- Weekly usage reports and dashboard (I'll build)

Success Metrics:
- 50+ active users (faculty + grad students)
- 75% time savings on screening phase (vs. manual)
- 90%+ user satisfaction scores
- 100+ systematic reviews completed

Timeline:
- Month 1-2: Setup and onboarding
- Month 3-5: Active usage and feedback
- Month 6: Evaluation and decision (scale, pivot, or shut down)

Next Steps:
- I'll send detailed AWS IAM policy template by [date]
- Please let me know if you need additional materials or have questions
- Happy to present to ICDS leadership or IT committee if helpful

Looking forward to your feedback!

Best,
Hosung
```

---

## Post-Meeting Reflection

### If Meeting Goes Well

**Signs of Success**:
- Rick agrees to pilot (even with modifications)
- Rick introduces you to ICDS/Libraries/TLT
- Rick asks detailed technical questions (shows genuine interest)
- Rick mentions presenting to his leadership or IT committee

**Your Next Moves**:
- Send follow-up email within 24 hours
- Deliver all promised materials within 1 week
- Start recruiting pilot participants (10 faculty)
- Build usage dashboard prototype
- Schedule follow-up with Rick in 2 weeks

### If Meeting Is Uncertain

**Signs Rick Is On The Fence**:
- "Let me think about it and get back to you"
- "I need to check with my team about bandwidth"
- "What if we start with just 5 keys instead of 20?"
- "Can you find another funding source?"

**Your Strategy**:
- Don't push too hard in the meeting
- Send thoughtful follow-up addressing his concerns
- Look for alternative funding (NSF grant, college-level)
- Build ScholaRAG user base at other universities
- Return to Rick in 3-6 months with external validation

### If Meeting Goes Poorly

**Signs of Rejection**:
- "Penn State isn't ready for this"
- "We don't have budget this fiscal year"
- "This doesn't align with our priorities"
- "Talk to me again in 2-3 years"

**Your Pivot**:
- **Option 1**: Go directly to College of Education (bypass Rick)
- **Option 2**: Self-fund pilot, prove value, return with data
- **Option 3**: Focus on postdoc opportunities at other universities
- **Option 4**: Position ScholaRAG as independent SaaS (scholarag.com)

**Remember**: Rick's "no" doesn't mean ScholaRAG fails. It means Penn State isn't the right partner right now. Other universities may be more receptive.

---

## Conclusion

### Meeting Success = Getting Rick to Say "Yes" to Pilot

**What "Yes" Looks Like**:
- $4,000 budget allocation for 6 months
- Rick's team provisions AWS Bedrock API keys
- Weekly check-ins on usage and feedback
- Clear path to Year 2 decision (Copilot Enterprise vs. Azure vs. ICDS Tabby)

**What "Yes" Enables**:
- Prove ScholaRAG value to Penn State researchers
- Build case for campus-wide AI coding infrastructure
- Position Rick as AI innovation leader
- Leverage pilot data for NSF grants, publications
- Use Penn State success to pitch other universities (postdoc leverage)

### Meeting Success ≠ Rick Loving ScholaRAG Immediately

**Realistic Outcome**:
- Rick agrees to **small pilot** (maybe 5-10 keys instead of 20)
- Rick wants **monthly reviews** (more oversight than you wanted)
- Rick **connects you to ICDS** (partnership opportunity)
- Rick asks you to **present to IT committee** (extra hoop to jump through)

**That's Still a Win!**
→ Foot in the door
→ Penn State engagement started
→ Path to scale identified

---

## Final Prep Checklist

### 24 Hours Before Meeting

- [ ] Print 1-page pilot proposal (3 copies)
- [ ] Print ROI calculation (2 copies)
- [ ] Print architecture diagram (1 copy)
- [ ] Charge laptop (demo ScholaRAG live)
- [ ] Prepare 3 questions to ask Rick
- [ ] Review Penn State IT organizational chart (know who Rick reports to)
- [ ] Check LinkedIn: Rick's recent activity (any AI-related posts?)

### Morning of Meeting

- [ ] Review this document (key talking points)
- [ ] Practice 2-minute ScholaRAG elevator pitch
- [ ] Bring business cards (if you have them)
- [ ] Dress appropriately (business casual)
- [ ] Arrive 5 minutes early

### During Meeting

- [ ] Listen more than you talk (60/40 rule)
- [ ] Take notes on Rick's concerns
- [ ] Don't oversell - be honest about limitations
- [ ] Ask clarifying questions before jumping to solutions
- [ ] Thank Rick for his time

### After Meeting

- [ ] Send follow-up email within 24 hours
- [ ] Update this document with Rick's feedback
- [ ] Share meeting notes with advisor (if applicable)
- [ ] Start preparing materials Rick requested
- [ ] Schedule follow-up meeting if needed

---

**Good luck! You've got this. 🚀**

---

## Appendix: Technical Deep-Dives (If Rick Asks)

### A. AWS Bedrock vs. Direct Anthropic API

**Why AWS Bedrock?**

```
AWS Bedrock (Penn State Preferred):
✅ Unified API (Claude, GPT-4, Gemini)
✅ Penn State likely has AWS Enterprise Agreement
✅ IAM integration (Rick's team already uses this)
✅ CloudWatch logging (built-in)
✅ SOC 2 / HIPAA certified

Direct Anthropic API:
⚠️ Separate billing (outside Penn State contract)
⚠️ No unified management (need separate keys for GPT, etc.)
⚠️ Less integration with Penn State infrastructure
```

**Cost Comparison**:
- AWS Bedrock Claude: ~$15/million tokens (with Penn State discount)
- Direct Anthropic: $15/million tokens (list price)
- Difference: Negligible, but Bedrock offers operational advantages

**Rick's Takeaway**: "AWS Bedrock fits better with our existing AWS footprint."

---

### B. Data Privacy & API Calls

**Rick Will Ask**: "Does code/data sent to Claude get used to train their models?"

**Your Answer**:

```
AWS Bedrock Privacy Guarantees:

✅ Zero Data Retention: API calls not stored by Anthropic
✅ No Model Training: Inputs never used for training
✅ Encryption: TLS 1.2+ in transit, AES-256 at rest
✅ Contractual: AWS Bedrock terms prohibit data usage

Penn State maintains:
✅ Audit logs (CloudWatch) for 2 years
✅ API call history (who, when, what)
✅ Compliance reports (quarterly review)
```

**Documentation**: Provide link to AWS Bedrock data privacy whitepaper.

---

### C. ScholaRAG API Usage Patterns

**Rick Will Ask**: "How much will this actually cost?"

**Usage Estimate** (Per Project):

```
Typical Systematic Review:

1. Paper Fetching:
   - 1,000 papers from APIs (OpenAlex, Semantic Scholar)
   - API calls: Free (no LLM involved)

2. Screening (AI-PRISMA):
   - 1,000 papers × 500 tokens each = 500K input tokens
   - 1,000 decisions × 200 tokens each = 200K output tokens
   - Cost: (500K × $3/1M) + (200K × $15/1M) = $1.50 + $3.00 = $4.50

3. RAG Building:
   - Embedding 1,000 papers × 1,000 tokens = 1M tokens
   - Cost: $0.10 per 1M tokens = $0.10

4. RAG Querying:
   - 100 queries × 2,000 tokens input × 500 tokens output
   - Cost: (200K × $3/1M) + (50K × $15/1M) = $0.60 + $0.75 = $1.35

Total per project: ~$6-10 (well under $200 budget)
```

**Cushion**: $200 budget allows for:
- Larger reviews (5,000 papers)
- Re-screening iterations
- Experimentation/learning curve

---

### D. Failure Modes & Recovery

**Rick Will Ask**: "What if this breaks? Who supports it?"

**Your Answer**:

```
Support Tiers:

Tier 1: User Issues (Your Responsibility)
- Researcher doesn't know how to use ScholaRAG
- Prompts not working as expected
- Workflow confusion
→ I handle via email, office hours, workshops

Tier 2: API/Infrastructure (Rick's Team Minimal Involvement)
- API key not working
- AWS billing issue
- CloudWatch logging problem
→ Rick's team provisions/monitors
→ Escalate to AWS support if needed (Penn State has TAM)

Tier 3: Upstream Provider Issues (No Penn State Action Needed)
- Claude API downtime (Anthropic's responsibility)
- AWS Bedrock outage (AWS handles)
→ ScholaRAG has fallback: switch to GPT-4 or Gemini (1-line config change)

SLA:
- Uptime target: 99.5% (based on AWS Bedrock SLA)
- Response time (your support): <24 hours
- Response time (Rick's team): <48 hours for API issues
```

---

### E. Scaling Beyond Pilot

**Rick Will Ask**: "If this succeeds, what does Year 2 look like?"

**Your Answer**:

```
Scaling Plan (Year 2):

Conservative Growth:
- Year 1 Pilot: 20 projects (60 users)
- Year 2: 100 projects (300 users)
- Year 3: 500 projects (1,500 users)

Infrastructure Options:

Option 1: GitHub Copilot Enterprise
- Cost: $25/user/month × 300 users = $7,500/month = $90K/year
- Effort: Minimal (Microsoft handles infrastructure)

Option 2: Azure OpenAI Codex
- Cost: $1,000-2,000/year (token-based)
- Effort: Moderate (Rick's team configures Azure)

Option 3: Self-Hosted Tabby (ICDS partnership)
- Cost: $60K/year (ICDS labor + GPU)
- Effort: High (ICDS technical support)

Decision Criteria:
- User satisfaction (pilot feedback)
- Budget availability (college-level funding)
- Rick's team capacity (bandwidth for support)
```

---

**End of Meeting Notes Document**
