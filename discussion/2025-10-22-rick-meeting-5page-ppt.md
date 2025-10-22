# Rick Meeting - 5-Page PPT
**ScholaRAG Pilot: Technical Consultation Request**

**Date**: October 22, 2025
**Duration**: 10 minutes (2 min per slide)
**Presenter**: Hosung You

---

## Slide 1: Introduction & The Problem (2 min)

### ScholaRAG: AI-Assisted Systematic Literature Review

**What is ScholaRAG?**
- Open-source tool for automated paper screening using Claude AI
- 7-stage pipeline: Search → Screen → Download → RAG → Query
- Target: Graduate students doing systematic literature reviews

**The Problem**

| Challenge | Current State | Impact |
|-----------|--------------|--------|
| **AI Tool Cost** | $200/month per researcher (Claude Code) | Only 10% of IST grad students can afford |
| **No Institutional Control** | Personal API keys | Data governance unclear |
| **No Usage Tracking** | Individual subscriptions | Can't measure research productivity |
| **Fragmented Access** | Each researcher figures it out | Inefficient, inconsistent quality |

**ScholaRAG Use Case**
- **Need**: Claude API for paper screening (Stage 3)
- **Scale**: 25 researchers (initial pilot)
- **Duration**: 3 months
- **Estimated cost**: $5,000 (AWS Bedrock usage)

**Why I'm Here**
I need your consultation on:
1. Technical feasibility (Can Penn State Cloud Services support this?)
2. Funding path (Where should I seek the $5K budget?)
3. Implementation approach (AWS Bedrock vs. alternatives)

---

## Slide 2: Technical Requirements & Questions for Rick (2 min)

### What I'm Asking From Cloud Services

**Technical Support Needed** (Rick's Team)

| Component | What's Needed | Penn State Has This? |
|-----------|---------------|---------------------|
| **AWS Bedrock** | Claude 3.5 Sonnet API access | ❓ Need Rick's confirmation |
| **Penn State SSO** | SAML integration for scholarag.psu.edu | ✅ Yes (Rick's email confirmed) |
| **DNS/SSL** | scholarag.psu.edu subdomain | ❓ Need Rick's team to set up |
| **Monitoring** | CloudWatch usage tracking | ✅ Yes (AWS service) |
| **Proxy Hosting** | EC2 instance (optional) | ❓ Or I can use Render.com |

**Funding Path** (NOT from Rick's Team)

I understand Cloud Services provides infrastructure, not funding.
I'm considering these options for the $5K AWS usage cost:

- **Option A**: IST Dean's research support budget (60% likely)
- **Option B**: College of Education budget (my advisor's college) (50% likely)
- **Option C**: Advisor's existing grant (70% likely if budget available)
- **Option D**: Penn State internal grant (40% likely, competitive)

**Key Questions for Rick**

1. **Technical Feasibility**:
   - Does Penn State Cloud Services already provide AWS Bedrock to researchers?
   - If not, can it be enabled for this pilot?
   - What's the approval process on your side?

2. **Funding Advice**:
   - Which funding path do you typically see work for research IT pilots?
   - Can you introduce me to IST Associate Dean for Research?
   - Have you seen similar projects get institutional funding?

3. **Timeline**:
   - If I secure funding in 2-3 weeks, how long for technical setup?
   - What information do you need from me to provide a technical support letter?

**What I'm NOT Asking**:
- ❌ Rick's team to fund the $5K (I'll find funding)
- ❌ Rick to approve the pilot (IST/CoE Dean approves)
- ❌ Rick to build ScholaRAG (I already built it)

**What I AM Asking**:
- ✅ Technical consultation (Is this feasible?)
- ✅ Letter of support (Confirming Cloud Services can provide tech infrastructure)
- ✅ Guidance on funding path (Who should I talk to?)

---

## Slide 3: Technical Architecture & Rick's Role (2 min)

### How It Would Work (If Funding Approved)

**Architecture Diagram**

```
┌─────────────────────────────────────────────────────────┐
│         Penn State Infrastructure (Rick's Team)          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ AWS Bedrock  │  │ Penn State   │  │ CloudWatch   │  │
│  │ (Claude API) │  │ SSO (SAML)   │  │ (Monitoring) │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↓
              ┌────────────────────────┐
              │  scholarag.psu.edu     │
              │  (My Proxy Server)     │
              └────────────────────────┘
                          ↓
        ┌─────────────────┼─────────────────┐
        ↓                 ↓                 ↓
  Researcher 1      Researcher 2      Researcher 25
  (ScholaRAG CLI)   (ScholaRAG CLI)   (ScholaRAG CLI)
```

**User Experience (After Setup)**

```bash
# Researcher's terminal
$ scholarag login
[Browser opens → Penn State SSO → Authenticated]
✓ Logged in as abc123@psu.edu

$ scholarag screen --project my-literature-review
📋 Screening 1,234 papers using Claude 3.5 Sonnet...
Progress: [████████████] 100% (1234/1234)
✓ Screening complete. 234 papers included.

$ scholarag usage
📊 Your usage this month:
   Tokens: 1.2M input, 0.3M output
   Cost: $5.10 / $200 quota (2.5% used)
   Remaining: $194.90
```

**Rick's Team Responsibilities** (Technical Infrastructure)

**Phase 1: Consultation** (Week 1) - 2 hours
- ✅ Meet with me to discuss technical feasibility
- ✅ Advise on AWS Bedrock vs. alternatives
- ✅ Recommend funding path

**Phase 2: Letter of Support** (Week 2) - 1 hour
- ✅ Provide letter confirming Cloud Services can support pilot
- ✅ Technical details for IST Dean proposal

**Phase 3: Infrastructure Setup** (Week 5-7, IF funding approved) - 20 hours
- ✅ Enable AWS Bedrock on Penn State account
- ✅ Set up Penn State SSO (SAML) for scholarag.psu.edu
- ✅ Configure DNS/SSL (scholarag.psu.edu)
- ✅ Set up CloudWatch monitoring
- ✅ (Optional) Provide EC2 instance for proxy hosting

**Phase 4: Ongoing Support** (Week 8-20, during pilot) - 10 hours
- ✅ Troubleshooting (if technical issues arise)
- ✅ Monthly usage reports
- ✅ Security monitoring

**Total Rick's Team Effort**: ~33 hours over 5 months

**My Responsibilities** (ScholaRAG Development)

- ✅ Build proxy server (scholarag.psu.edu) - Already 80% done
- ✅ Modify ScholaRAG scripts to use Penn State proxy
- ✅ Secure funding ($5K from IST/CoE/Grant)
- ✅ User training (2-hour workshop)
- ✅ Data collection (adoption, satisfaction, cost)
- ✅ Final report to IST Dean

**Cost Breakdown**

| Item | Cost | Who Pays? |
|------|------|-----------|
| **AWS Bedrock usage** | $4,500 | IST/CoE/Grant (seeking) |
| **EC2 proxy hosting** | $150 | IST/CoE/Grant (or I use Render.com $0) |
| **Contingency** | $350 | IST/CoE/Grant |
| **Rick's team time** | ~$4,000 value | Penn State Cloud Services (free to pilot) |
| **Penn State infrastructure** | Priceless | Existing (Penn State AWS, SSO, AD) |
| **My development time** | $0 | PhD thesis work |

**Total Funding Needed**: $5,000
**Total Value Provided**: $9,000+

---

## Slide 4: Implementation Timeline & Next Steps (2 min)

### Realistic 21-Week Timeline (If All Goes Well)

**Phase 1: Funding Approval** (Week 1-4)

```
Week 1: Rick Meeting
  - You: Technical consultation (today's meeting)
  - Me: Understand feasibility, get advice

Week 2: Rick's Letter + IST Proposal
  - You: Provide technical support letter
  - Me: Meet with IST Associate Dean for Research
  - Me: Submit pilot proposal (with your letter)

Week 3-4: IST Dean Review
  - IST Dean: Review proposal
  - Rick (if needed): Answer technical questions
  - Decision: Approve $5K or Deny
```

**Phase 2: Technical Setup** (Week 5-7, IF approved)

```
Week 5: AWS Bedrock Setup
  - Rick's team: Enable Bedrock on Penn State account
  - Rick's team: Request Claude 3.5 Sonnet access
  - Rick's team: Create IAM roles for pilot users

Week 6: SSO & Infrastructure
  - Rick's team: Set up Penn State SAML for scholarag.psu.edu
  - Rick's team: Configure DNS/SSL
  - Me: Deploy proxy server (Penn State EC2 or Render.com)

Week 7: Monitoring & Security
  - Rick's team: Set up CloudWatch dashboards
  - Rick's team: Penn State IT security review
  - Me: Final testing
```

**Phase 3: Pilot Execution** (Week 8-20)

```
Week 8: Launch
  - Me: Training workshop (2 hours, 25 researchers)
  - Rick's team: Monitor first week closely

Week 9-20: Pilot Runs (3 months)
  - Researchers: Use ScholaRAG for their literature reviews
  - Rick's team: Monthly usage reports
  - Me: Collect data (adoption, satisfaction, productivity)

Week 20: Completion
  - Me: Final report to IST Dean
  - Rick's team: Final usage/cost report
```

**Phase 4: Results & Expansion** (Week 21+)

```
Week 21: Evaluation
  - IF pilot succeeds (80%+ adoption, high satisfaction):
    → Expansion proposal to IST-wide (250 researchers, $25K/semester)
    → Rick: Advise on expansion process

  - IF pilot fails or neutral:
    → Lessons learned
    → Stop at $5K
```

**Total Timeline**: 21 weeks (5 months) from today to pilot completion

**Critical Success Factors**

| Factor | Probability | Mitigation |
|--------|------------|------------|
| **IST funding approval** | 60% | Strong proposal + Rick's letter + Advisor support |
| **Technical setup success** | 90% | Rick's team expertise + Proven technology (AWS Bedrock) |
| **User adoption** | 80% | Good training + Free for users + Genuine need |
| **Budget adherence** | 85% | CloudWatch monitoring + Hard quota limits ($200/user) |

**Overall Success Probability**: ~40% (0.6 × 0.9 × 0.8 × 0.85)

**Fallback Plans**

IF IST funding denied:
- **Plan B**: Try College of Education budget (advisor's college)
- **Plan C**: Apply for Penn State IT Innovation Fund (competitive, 3 months process)
- **Plan D**: Include in advisor's next grant proposal

IF technical issues arise:
- **Plan B**: Use Azure OpenAI instead (Penn State already has Azure)
- **Plan C**: Direct Anthropic API (personal API keys, no SSO)

---

## Slide 5: Specific Asks & Questions for Rick (2 min)

### What I Need From You Today

**Immediate Asks** (Today's Meeting)

**1. Confirmation on Technical Feasibility**
```
Question: Can Penn State Cloud Services support this pilot technically?

Specifically:
- Does Penn State already provide AWS Bedrock to researchers?
- If not, can it be enabled? What's the approval process?
- Does Penn State SSO (SAML) already support custom apps like scholarag.psu.edu?
- Can your team provide DNS/SSL for scholarag.psu.edu?
```

**2. Guidance on Funding Path**
```
Question: Which funding path would you recommend?

Options I'm considering:
A) IST Dean's research support budget → Your recommendation?
B) College of Education budget → Have you worked with CoE before?
C) Advisor's existing grant → Fastest if budget available?
D) Internal grants (IST Strategic Initiatives Fund) → Worth pursuing?

Your advice:
- Which path typically works for research IT pilots?
- What data/justification do decision-makers want to see?
- Common pitfalls to avoid?
```

**3. Introduction to Decision-Makers**
```
Question: Can you introduce me to the right people?

Specifically:
- IST Associate Dean for Research (for $5K pilot funding)
- Penn State IT Security (for compliance review)
- Anyone else I should know?
```

**Follow-Up Asks** (Next 1-2 Weeks)

**4. Letter of Technical Support**
```
Request: Letter confirming Cloud Services can provide infrastructure

Content needed:
- Penn State Cloud Services has capability to support AWS Bedrock pilot
- Technical infrastructure (AWS, SSO, DNS/SSL, monitoring) can be provided
- Estimated setup timeline: 3 weeks after funding approval
- Ongoing support available during pilot

Purpose: Attach to IST Dean proposal (shows technical feasibility)

Timeline: Can I have this by [date 1 week from now]?
```

**5. Template/Example Pilot Proposal**
```
Request: If you have template for research IT pilot proposals

This would help me:
- Structure proposal in format IST Dean expects
- Include right technical details
- Address common concerns proactively

Even just bullet points of what to include would be helpful.
```

**Long-Term Asks** (IF Pilot Succeeds)

**6. Expansion Consultation**
```
IF pilot succeeds (80%+ adoption, high satisfaction, under budget):

Question: How do we expand to IST-wide (250 researchers, $25K/semester)?

Process:
- Present results to IST Dean
- Scale AWS Bedrock infrastructure (25 → 250 users)
- Larger budget approval process

Your role:
- Advise on expansion process
- Technical feasibility for 250 users
- Letter of support for IST-wide funding
```

**What Success Looks Like**

**End of Today's Meeting**:
- ✅ Rick confirms technical feasibility (yes/no/maybe)
- ✅ Rick advises on best funding path (IST/CoE/Grant)
- ✅ Rick commits to providing technical support letter
- ✅ Rick introduces me to IST Associate Dean (email intro)

**End of Week 2**:
- ✅ Rick's technical support letter received
- ✅ Meeting scheduled with IST Associate Dean
- ✅ Pilot proposal submitted (with Rick's letter)

**End of Week 4**:
- ✅ IST Dean decision (approved or denied)
- ✅ IF approved: Kickoff meeting with Rick's Solutions Engagement Specialists

**End of Week 20** (Pilot Complete):
- ✅ 80%+ adoption among 25 researchers
- ✅ 90%+ satisfaction (4.5/5 average)
- ✅ Budget adherence ($4.2K spent of $5K)
- ✅ Rick's team: "This was a successful pilot, we'd support expansion"

**Mutual Benefits**

**For Rick's Cloud Services Team**:
- ✅ Case study: "How we enabled AI research at Penn State"
- ✅ Demonstrate value to IST Dean (support research innovation)
- ✅ Learn AI workload patterns (inform future capacity planning)
- ✅ Potential expansion to other colleges (if IST pilot succeeds)

**For Me (ScholaRAG)**:
- ✅ Penn State infrastructure (don't need to manage AWS myself)
- ✅ Institutional credibility (not just student side project)
- ✅ Scalability (can expand if successful)
- ✅ Data governance (Penn State SSO, audit logs)

**For Penn State Researchers**:
- ✅ Free AI tools (included in being Penn State affiliate)
- ✅ No personal API key management
- ✅ Faster literature reviews (AI-assisted screening)
- ✅ Better research quality (access to SOTA models)

**Win-Win-Win!**

---

## Closing Remarks

**Summary**

**What I'm proposing**:
- Small pilot (25 researchers, 3 months, $5K)
- Prove ScholaRAG value for IST research community
- Learn together (what works, what doesn't)

**What I need from Rick**:
- Technical consultation (today)
- Letter of support (next week)
- Infrastructure setup (if funding approved)

**What I'll do**:
- Find funding (IST/CoE/Grant)
- Build proxy server
- Run pilot
- Collect data
- Report results

**Next Steps**:
1. Rick: Confirm technical feasibility
2. Rick: Provide letter of support
3. Rick: Introduce me to IST Associate Dean
4. Me: Submit pilot proposal
5. Wait for IST Dean decision (2-3 weeks)
6. IF approved → Kickoff with Rick's team

**Thank you for your time and consideration!**

**Contact**:
- Hosung You
- hxy5275@psu.edu
- GitHub: github.com/HosungYou/ScholaRAG

**Questions?**

---

# Speaker Notes

## Slide 1 (2 min)

"Good morning Rick. Thank you for reaching out about the ACLOD Innovation Summit. Let me tell you about ScholaRAG.

ScholaRAG is a tool I built for AI-assisted systematic literature review. The problem is that graduate students need Claude API for paper screening, but it costs $200/month - only 10% of IST students can afford this. I want to pilot this with 25 researchers for 3 months, estimated $5K AWS Bedrock usage.

I'm here today to ask for your consultation on three things: Is this technically feasible for Penn State Cloud Services? Where should I seek the $5K funding? And how should I approach implementation?"

## Slide 2 (2 min)

"Here's what I'm asking from Cloud Services. For technical support, I need AWS Bedrock access, Penn State SSO integration, DNS/SSL for scholarag.psu.edu, and monitoring. You mentioned in your email that you broker AWS access - does that include Bedrock?

For funding, I understand your team provides infrastructure, not research funding. I'm considering IST Dean's budget, my advisor's College of Education, my advisor's grant, or internal Penn State grants.

My key questions: Does Penn State already provide AWS Bedrock? If not, can it be enabled? Which funding path do you typically see work? And can you introduce me to IST decision-makers?

To be clear, I'm NOT asking you to fund this or approve it. I AM asking for technical consultation, a letter of support, and guidance on the funding process."

## Slide 3 (2 min)

"Here's how the architecture would work if funding gets approved. Penn State infrastructure - your team - would provide AWS Bedrock, Penn State SSO, and CloudWatch monitoring. I'd build the proxy server at scholarag.psu.edu. Researchers would use ScholaRAG CLI with Penn State SSO login.

Your team's responsibilities would be consultation today, a support letter next week, infrastructure setup if funded - about 33 hours total over 5 months. I'd handle securing funding, building the proxy, training users, and collecting data.

The cost breakdown: $5K total funding needed - $4,500 for AWS Bedrock usage, $150 for hosting. But the total value is over $9,000 when you include your team's time and Penn State's existing infrastructure. Pretty good ROI for a $5K investment."

## Slide 4 (2 min)

"Here's a realistic 21-week timeline. Weeks 1-4: funding approval - today's meeting, your letter next week, IST Dean review. Weeks 5-7: your team sets up AWS Bedrock, SSO, and monitoring. Weeks 8-20: pilot runs for 3 months. Week 21: we evaluate results.

Success probability is about 40% overall - 60% for IST funding approval, 90% for technical setup, 80% for user adoption. If IST denies funding, we have fallback plans: try College of Education, apply for internal grants, or include in advisor's next grant proposal.

The critical path is IST funding approval in weeks 3-4. Everything else depends on that decision."

## Slide 5 (2 min)

"Let me be specific about what I need from you today. First, confirmation on technical feasibility - can Penn State Cloud Services support this? Does Penn State already have AWS Bedrock, and if not, can it be enabled?

Second, guidance on the funding path. Which of the four options would you recommend? IST Dean, College of Education, advisor's grant, or internal grants?

Third, introductions to decision-makers, especially IST Associate Dean for Research.

For follow-up, I'd need a letter of technical support by next week to attach to my IST Dean proposal. And if you have a template for research IT pilot proposals, that would be incredibly helpful.

What success looks like: by end of today, you confirm feasibility and advise on funding. By end of week 2, I have your letter and have met with IST Associate Dean. By week 4, IST Dean decides. And by week 20, we have a successful pilot with 80% adoption and high satisfaction.

This is win-win-win. Your team gets a great case study. ScholaRAG gets Penn State infrastructure and credibility. And Penn State researchers get free AI tools for their work.

Thank you for your time. I'm happy to answer any questions."
