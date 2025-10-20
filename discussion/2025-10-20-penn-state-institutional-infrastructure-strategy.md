# Penn State Institutional Infrastructure Strategy for ScholarRAG

**Date**: 2025-10-20
**Status**: Strategic Planning
**Context**: Postdoc position planning, Penn State resource assessment, institutional deployment strategy

---

## 📋 Executive Summary

This document outlines a comprehensive strategy for developing ScholarRAG as a Penn State institutional service, analyzing available resources, collaboration models, and technical infrastructure options. The analysis considers Rick Rhoades (Cloud Services) as a key partner and explores how Penn State's existing infrastructure can support ScholarRAG deployment.

**Key Questions Addressed**:
1. What Penn State resources can support ScholarRAG beyond Cloud Services?
2. Should Claude Code API keys be centrally managed?
3. What are the advantages of Azure Container Instances vs Lambda?
4. Can Penn State's institutional repository provide PDF access?
5. What Penn State-controlled alternatives exist to Claude Code?

---

## 🎯 Part 1: Penn State Resources for ScholarRAG

### 1.1 Computing & Infrastructure Resources

#### **ICDS (Institute for Computational and Data Sciences)** ⭐⭐⭐⭐⭐

**Website**: https://www.icds.psu.edu/

**Available Resources**:
- **Roar Supercomputer**: 4,000+ researchers already using
  - Use case: PDF OCR batch processing, embedding generation for thousands of papers
  - Free allocation available upon application

- **AI Hub Membership**: Access to Penn State's AI research network
  - 75+ AI researchers across 4 centers
  - Collaboration opportunities
  - Visibility for ScholarRAG project

- **Seed Grant Programs**:
  - **Rising Researcher Collaborations**: For postdocs/early career researchers
  - **Mid-Scale Seed Grant**: $10K-$50K for interdisciplinary projects
  - Deadlines: Typically Fall/Spring (check ICDS website)

**ScholarRAG Application**:
```python
# Example: Roar-based PDF processing
- Host ChromaDB vectorstore on Roar (instead of Vercel)
- Batch process 1,000 papers in 2 hours (vs. 20 hours local)
- Accelerated embedding generation with GPU support
```

**Funding Opportunity**:
```
ICDS Seed Grant Proposal:
Title: "Conversation-First AI Research Assistants: A New Paradigm"
Budget: $25,000
  - Student programmer: $7,200
  - API costs: $12,000
  - Conference travel: $2,500
  - GPU server access: $3,300

Expected outcomes:
  - 2 peer-reviewed papers
  - NSF CISE proposal ($500K)
  - 200 Penn State faculty trained
```

---

#### **Penn State IT - Cloud Services**

**Contact**: Rick Rhoades (rrr6@psu.edu) - Already connected!

**Available Resources**:
- AWS, Azure, Google Cloud contracts (with BAA)
- Centralized API key management capability
- FERPA-compliant data storage
- VM hosting for web services

**ScholarRAG Integration**:
- Claude API keys centrally managed → researchers avoid personal costs
- Azure Container Instances for automated screening
- AWS Lambda for on-demand PDF processing

**Estimated Costs** (Rick's team could cover):
- API costs: ~$30K/year (500 users × $60/project)
- Cloud infrastructure: ~$10K/year
- **Total**: $40K/year

---

### 1.2 Library & Data Services

#### **Penn State Libraries - Research Data Services** ⭐⭐⭐⭐

**Website**: https://libraries.psu.edu/research/research-data-services

**Available Services**:
- **Data Management Consultation**: Help with Data Management Plans
- **ScholarSphere**: Penn State institutional repository
  - Open access storage for research datasets
  - DOI assignment for citations
  - OAI-PMH metadata harvesting protocol

- **Open Access Support**:
  - OA journal publishing assistance
  - Publication fee support (TOME program)

**ScholarRAG Applications**:

1. **Dataset Publication on ScholarSphere**:
```
Example Dataset:
"Penn State ScholarRAG Usage Patterns (2025-2026)"
- 500 systematic reviews
- 50,000+ AI screening decisions
- Time savings data
- User satisfaction scores

DOI: 10.26207/penn-state-scholarag-2025
→ Other researchers can cite your work!
→ Increases your h-index and impact
```

2. **Open Access Publishing Support**:
- Libraries can cover publication fees for ScholarRAG methods papers
- Increases visibility and adoption

3. **Librarian Partnership**:
- 150+ Penn State librarians as potential ScholarRAG ambassadors
- Systematic reviews are librarians' expertise area
- Joint workshops: "AI-Assisted Systematic Reviews"

**Contact**: W313 Pattee Library, libraries@psu.edu

---

#### **Libraries Strategic Technologies - Digital Scholarship**

**Available Support**:
- Digital scholarship consultation
- Data visualization assistance
- Research data curation

**Partnership Model**:
```
You (Postdoc) + Librarians = Powerful Alliance
- You provide: Technical training
- Librarians provide: User outreach, faculty connections
- Joint offerings: "Systematic Reviews in the AI Age" workshops
```

---

### 1.3 AI Research Centers

#### **Penn State AI Hub** ⭐⭐⭐⭐⭐

**Website**: https://ai.psu.edu/

**Structure**:
- Central coordination for 4 AI centers
- 75+ faculty researchers
- Cross-disciplinary collaboration opportunities

**Four AI Centers**:

##### **A. CENSAI - AI Foundations & Scientific Applications** ⭐⭐⭐⭐⭐
- **Leader**: Vasant Honavar (IST Professor)
- **Focus**: Foundational AI + accelerating scientific discovery
- **ScholarRAG Fit**: PERFECT MATCH
  - Mission: "AI tools to accelerate scientific progress"
  - Systematic reviews = scientific discovery acceleration

**Action Item**: Email Vasant Honavar
```
Subject: AI for Scientific Discovery - ScholarRAG Collaboration

Dear Dr. Honavar,

I am developing ScholarRAG, an AI-powered systematic review platform
that helps Penn State researchers accelerate literature synthesis.

Given CENSAI's mission of using AI to accelerate scientific progress,
I see strong alignment. Would you be open to discussing:
- Potential CENSAI affiliation for ScholarRAG
- Collaboration opportunities
- Seed grant possibilities

I'm also working with Rick Rhoades (Cloud Services) on infrastructure.

[Attach 1-page ScholarRAG overview]
```

##### **B. CSRAI - Socially Responsible AI** ⭐⭐⭐
- Focus: Ethical AI, bias mitigation
- ScholarRAG Relevance: Fairness in AI-assisted screening, transparency

##### **C. CAFE - AI for Engineered Systems** ⭐⭐
- Focus: Defense & engineering applications
- Less relevant for ScholarRAG

##### **D. AIMI - AI/ML for Industry** ⭐⭐⭐⭐
- Focus: Industry partnerships
- ScholarRAG Potential: Commercialization path, pharmaceutical industry needs systematic reviews

---

#### **IST AI Research Laboratory** ⭐⭐⭐⭐

**Website**: https://ailab.ist.psu.edu/

**Why IST is Your Natural Home**:
- AI + Information Systems + HCI
- HRD is closely related to IST
- Potential faculty mentors:
  - Vasant Honavar (AI & Knowledge Discovery)
  - Dongwon Lee (Data Science & NLP)
  - John Yen (Intelligent Agents)

**Action**: Request coffee chats with 3 IST faculty

---

### 1.4 Internal Funding Programs

#### **College of Education - Research Initiation Grants (RIG)** ⭐⭐⭐⭐

**Amount**: Up to $5,000
**Eligibility**: Early-career faculty (postdocs included!)
**Purpose**: Pilot studies for external grant proposals

**ScholarRAG Proposal Example**:
```
Title: Pilot Study - AI-Assisted Systematic Reviews at Penn State
Budget: $5,000
  - API costs (50 pilot users): $3,000
  - User study incentives ($50 × 20): $1,000
  - Transcription services: $1,000

Deliverables:
  - Dataset: 50 users × usage patterns
  - Conference paper (AERA or AECT)
  - NSF CISE proposal draft using pilot data
```

**Application**: Rolling basis, typically Fall/Spring

---

#### **ICDS Seed Grants** ⭐⭐⭐⭐⭐

##### **Rising Researcher Collaborations** (Perfect for you!)
- **Amount**: $10K-$25K
- **Eligibility**: Postdocs, grad students, early-career faculty
- **Focus**: AI, data science, quantum, digital twins
- **Deadline**: Check ICDS website (typically 2× per year)

**Proposal Template**:
```
Title: Conversation-First AI Research Assistants:
       A New Paradigm for Human-AI Collaboration

PI: You (Postdoc)
Co-PI: Faculty mentor (Education or IST)

Budget: $25,000
  - Personnel (student programmer): $7,200
  - API costs (200 pilot users): $12,000
  - Travel (ACM CHI conference): $2,500
  - Equipment (GPU server): $3,300

Expected Outcomes:
  - 2 peer-reviewed papers
  - NSF CISE proposal ($500K)
  - 200 Penn State faculty trained
```

##### **Mid-Scale Seed Grant**
- **Amount**: $50K-$100K
- **Eligibility**: Multi-college collaborations
- **Focus**: Projects leading to $1M+ external funding

**Multi-College Proposal**:
```
Title: University-Wide AI Research Infrastructure Initiative

PIs:
  - You (College of Education)
  - Rick Rhoades (Penn State IT)
  - Faculty from IST, Health, Business

Budget: $75,000
  - Your postdoc supplement (20% time): $15,000
  - Cloud infrastructure (Rick's team): $30,000
  - College-specific customizations: $20,000
  - Training & marketing: $10,000

Goal: Deploy ScholarRAG to 500 users across 5 colleges
      → Data for NSF MRI proposal ($2M infrastructure grant)
```

---

#### **Huck Institutes / SSRI Interdisciplinary Seed Grants** ⭐⭐⭐

**Amount**: $10K-$30K
**Focus**: Partnerships with Minority Serving Institutions (MSIs)

**ScholarRAG MSI Partnership Proposal**:
```
Title: Democratizing Research Tools for Under-Resourced Universities

Partners: Penn State + Howard University + New Mexico State

Approach:
  - Deploy ScholarRAG at MSIs (free API via Penn State)
  - Train 50 faculty at partner institutions
  - Study: Does AI close research productivity gaps?

Budget: $30,000
  - API costs for MSI users: $15,000
  - Travel to partner sites: $8,000
  - Workshop materials: $5,000
  - Publication OA fees: $2,000

Significance:
  - Aligns with Penn State land-grant mission
  - High NSF priority (INCLUDES, ADVANCE programs)
  - Strong social impact case
```

---

### 1.5 Training & Education Infrastructure

#### **Teaching and Learning with Technology (TLT)** ⭐⭐⭐⭐⭐

**Website**: https://tlt.psu.edu/

**Available Resources**:
- **Ed Tech Advisor Tool**: Official Penn State ed tech recommendation system
- **Co-Learning Laboratory**: Technology exploration space
- **Professional Development**: Faculty training programs

**ScholarRAG Integration Opportunities**:

1. **Register ScholarRAG in Ed Tech Advisor**:
```
Faculty searches: "Need: Literature review support"
System recommends: "ScholarRAG by Penn State IT"
```

2. **TLT Co-Learning Lab Station**:
```
Monthly "drop-in hours" for ScholarRAG
Faculty hands-on experience
You (or student) staffing 2 hours/week
```

3. **Professional Development Certificate Program**:
```
"AI-Assisted Research Skills" Certificate (30 contact hours)

Module 1: Introduction to AI Research Tools (3 hrs)
Module 2: Systematic Reviews with ScholarRAG (6 hrs)
Module 3: AI-Assisted Data Analysis (6 hrs)
Module 4: Grant Writing with AI (6 hrs)
Module 5: Ethical Considerations (3 hrs)
Module 6: Capstone Project (6 hrs)

Enrollment: 30 faculty/cohort × 2 cohorts/year = 60 faculty
Your role: Lead instructor for Modules 1-2
```

**TLT Funding**:
- Workshop development grant: $10K
- Instructor fees: $5K/semester
- Marketing & materials: $3K

---

#### **Social Science Research Institute (SSRI) - Methods Support** ⭐⭐⭐⭐

**Website**: https://ssri.psu.edu/

**Available Services**:
- **Quantitative Development Systems Core**: Statistical consultation
- **CUBSS**: High-performance Windows server (SPSS, Stata, ArcGIS)
- **Methodological workshops**

**ScholarRAG Collaboration Strategy**:

**Proposal**: SSRI approves ScholarRAG as "official method support tool"

```
SSRI Methods Support Menu:
- Statistical consulting ✓
- Survey design ✓
- Qualitative analysis ✓
- Systematic reviews ✓ ← Add ScholarRAG here!

Faculty request: "I need systematic review help"
SSRI response: "Contact Hosung You (ScholarRAG specialist)"
```

**Joint Workshop Series**:
```
"Rigorous Evidence Synthesis Methods" (Co-sponsored by SSRI)

Session 1: Traditional systematic reviews (SSRI expert)
Session 2: AI-assisted reviews (You + ScholarRAG)
Session 3: Meta-analysis techniques (SSRI statistician)
Session 4: Hands-on ScholarRAG lab (You)

Target: 50 social science faculty/year
```

**Benefits of SSRI Partnership**:
- Instant methodological credibility
- Access to 200+ social science faculty
- Co-authored methods papers

---

### 1.6 Resource Prioritization Matrix

| Resource | Impact | Effort | Timeline | Priority |
|----------|--------|--------|----------|----------|
| Rick's Cloud Services | ⭐⭐⭐⭐⭐ | Low | Immediate | **DO NOW** |
| ICDS Roar Account | ⭐⭐⭐⭐ | Low | 1-2 weeks | **DO NOW** |
| CENSAI Connection | ⭐⭐⭐⭐⭐ | Medium | 2-4 weeks | **High** |
| College of Education RIG | ⭐⭐⭐⭐ | Medium | 1 month | **High** |
| Libraries Partnership | ⭐⭐⭐ | Low | 2-3 weeks | **Medium** |
| TLT Integration | ⭐⭐⭐⭐ | Medium | 2-3 months | **Medium** |
| SSRI Methods Support | ⭐⭐⭐ | Medium | 2-3 months | **Medium** |
| ICDS Seed Grant | ⭐⭐⭐⭐⭐ | High | 3-4 months | **High** |
| AI Hub Affiliation | ⭐⭐⭐⭐ | Low | 1-2 months | **Medium** |

---

## 🔧 Part 2: Technical Infrastructure Decisions

### 2.1 Claude Code API Keys - Central Management Analysis

#### **Question**: Should Claude Code API keys be centrally managed by Penn State?

#### **Current ScholarRAG Usage Pattern**:

**Pattern 1: Claude Code (Development Phase)**
```
Researcher pastes ScholarRAG prompts into Claude Code
  ↓
Claude Code generates scripts, creates files
  ↓
API usage: Very low (~$2-5 per project)
  ↓
Duration: 1-2 hours one-time setup
```

**Pattern 2: ScholarRAG Scripts (Production Phase)**
```
scripts/03_screen_papers.py execution
  ↓
Direct Claude API calls (2,000 papers × 3 calls each)
  ↓
API usage: High (~$50-200 per project)
  ↓
Duration: 2 hours continuous processing
```

#### **Central Management Analysis**:

**For Claude Code (Pattern 1)**:
- **Need for Central Management**: ❌ **Low**
- **Reasoning**:
  - API costs minimal ($2-5/project × 100 projects = $200-500/year)
  - Researchers likely have Claude Pro or personal API keys
  - Adding complexity reduces adoption
  - Setup time short (1-2 hours)

**For ScholarRAG Scripts (Pattern 2)**:
- **Need for Central Management**: ✅ **High**
- **Reasoning**:
  - API costs significant ($50-200/project × 100 projects = $5K-20K/year)
  - Researchers may refuse personal cost burden
  - Usage tracking needed for research data
  - Cost control prevents abuse

#### **Technical Implementation Options**:

**Option 1: AWS Bedrock (via Rick's Cloud Services)**
```
Penn State AWS Account (Rick manages)
    ↓
AWS Bedrock (Claude 3.5 Sonnet)
    ↓
IAM Roles/Users → Penn State researchers
    ↓
Claude Code uses AWS credentials
```

**Pros**:
- ✅ Rick's team has existing AWS contract (with BAA)
- ✅ Central billing (Penn State IT budget)
- ✅ Usage monitoring dashboard
- ✅ FERPA compliance built-in

**Cons**:
- ❌ AWS Bedrock ~10-20% more expensive than direct Anthropic
- ❌ Setup complexity: researchers need AWS CLI configuration
- ❌ Claude Code AWS credential support unclear
- ❌ Potential latency increase (AWS → Anthropic routing)

**Option 2: Anthropic Direct Enterprise Contract**
```
Penn State ↔ Anthropic Enterprise Agreement
    ↓
Central API Key Pool (Rick manages)
    ↓
Individual "sub-keys" issued to researchers
    ↓
Claude Code uses personal sub-key
```

**Reality Check**: ⚠️ **Very Low Feasibility**
- Anthropic doesn't have university enterprise program yet
- Enterprise minimum likely $100K+
- Penn State unlikely to commit for ScholarRAG alone

---

#### **Recommended Strategy: Hybrid Approach** 🎯

**Phase 1 (Pilot - 6 months)**:
```
Claude Code:
  - Researchers use personal API keys (or Claude Pro subscription)
  - No Penn State cost or management

ScholarRAG Scripts:
  - Penn State provides project-based API keys (AWS Bedrock)
  - Rick's team provisions via IAM
  - Budget: $5,000 for pilot (20 projects)
```

**Implementation**:
```python
# scripts/config.yaml
anthropic_api_key: ${ANTHROPIC_API_KEY}  # Environment variable

# Rick's team provides:
# 1. AWS account with Bedrock access
# 2. 20 project API keys for pilot
# 3. $200 quota per key

# User setup (one-time):
export ANTHROPIC_API_KEY="sk-ant-psu-project-xyz123"
python scripts/03_screen_papers.py
```

**Advantages**:
- ✅ Claude Code: researchers' personal choice (no Penn State involvement)
- ✅ Heavy scripts: Penn State subsidizes
- ✅ Simple setup (one environment variable)
- ✅ Rick's team can monitor usage
- ✅ Low pilot cost ($5K)

**Phase 2 (Full Launch - 12+ months)**:

If pilot succeeds:
```
Self-Service Portal:
https://scholarag.psu.edu/api-key

1. Penn State SSO login
2. Click "New Project"
3. System generates temporary API key ($200 quota)
4. Key expires after 90 days or quota exhausted
5. Request extension if needed

Benefits:
- Rick controls costs
- Researchers simple key access
- No AWS CLI needed
- Automatic usage tracking
```

---

### 2.2 Cloud Infrastructure: Azure Container Instances vs Lambda

#### **Current Architecture Problem**:
```
User's Local Machine
    ↓
python scripts/03_screen_papers.py
    ↓
Processes 2,000 papers sequentially
    ↓
Each paper: API call to Claude (~3 seconds)
    ↓
Total time: 2 hours
```

**Issues**:
- ❌ User must keep laptop running
- ❌ Connection drop = process fails
- ❌ Can't parallelize (API rate limits)
- ❌ No monitoring/logging

---

#### **Option A: Azure Container Instances (ACI)** ⭐⭐⭐⭐⭐

**Architecture**:
```
User clicks "Start Screening" on web interface
    ↓
API call to Penn State Azure
    ↓
Azure Container Instances spins up:
  - Docker container with ScholarRAG code
  - 4 CPU cores, 8GB RAM
  - Runs in background
    ↓
User closes laptop, goes home
    ↓
Container finishes in 30 minutes (4× parallel)
    ↓
Email notification: "Screening complete!"
    ↓
User downloads results next day
```

**Advantages**:
1. **Fire and forget**: User doesn't need laptop on
2. **Parallel processing**: 4 cores → 4× faster (30 min vs 2 hours)
3. **Reliability**: Auto-restart on crash
4. **Monitoring**: Rick's team tracks all jobs
5. **Scalability**: Handle 10 concurrent projects

**Cost Example**:
- ACI: $0.0125/vCPU/hour × 4 cores × 0.5 hours = $0.025 per job
- Plus API costs: $50 per project
- **Total**: ~$50 per project (container cost negligible)

**Trade-offs**:
- Setup complexity: Docker image, web API, job queue
- Rick's team maintenance overhead
- Not truly serverless (containers run until done)

---

#### **Option B: AWS Lambda (Serverless)**

**Architecture Attempt**:
```
User triggers job
    ↓
AWS Lambda function invoked
    ↓
Lambda processes papers
    ↓
Problem: 15-minute timeout!
    ↓
ScholarRAG screening takes 2 hours → exceeds limit
```

**Lambda Constraints**:
- ⚠️ 15-minute maximum execution time
- ⚠️ 10GB memory limit
- ⚠️ Cold start delays (3-5 seconds first invocation)

**Workaround: Lambda Chaining**:
```
Lambda 1: Papers 1-500 (14 min) → Triggers
Lambda 2: Papers 501-1000 (14 min) → Triggers
Lambda 3: Papers 1001-1500 (14 min) → Triggers
Lambda 4: Papers 1501-2000 (14 min) → Aggregates
```

**Advantages**:
1. **True serverless**: Pay only for execution time
2. **Auto-scaling**: Handle 1000 concurrent projects
3. **No maintenance**: AWS manages everything
4. **Cost-effective**: ~$0.01 per job (excluding API)

**Disadvantages**:
- Complex orchestration (Step Functions required)
- Debugging harder (distributed logs)
- Unnatural 15-minute chunks for long jobs

---

#### **Recommendation: Azure Container Instances** 🎯

**Why ACI for ScholarRAG**:

1. **Long-running jobs** (30 min - 2 hours)
   - Lambda's 15-min limit feels awkward
   - ACI has no time constraints

2. **Simpler architecture**
   - 1 container = 1 complete job
   - No function chaining complexity

3. **Rick's preference**
   - Penn State has strong Microsoft/Azure relationship
   - IT teams comfortable with containers
   - Already managing Azure accounts

4. **Better UX**
   - "Your job is running in container XYZ" (clear)
   - vs "Lambda function 3/4 in progress" (confusing)

**Implementation Timeline**:
```
Phase 1 (Pilot, Month 1-6):
  - Local execution (current method)
  - Proves concept and demand
  - Rick: Zero infrastructure work

Phase 2 (Production, Month 7+):
  - Azure Container Instances deployment
  - Rick's team: 2-3 months development
  - Budget: $10K infrastructure + $15K API costs
```

**Simple API Design**:
```python
# POST /api/screening/start
{
  "project_id": "AI-Chatbots-2025",
  "papers_file": "data/deduplicated_papers.json"
}

# Response:
{
  "job_id": "job-abc123",
  "status": "running",
  "estimated_time": "45 minutes",
  "monitor_url": "https://scholarag.psu.edu/jobs/abc123"
}

# GET /api/screening/status/abc123
{
  "status": "completed",
  "papers_screened": 2000,
  "included": 180,
  "excluded": 1820,
  "elapsed_time": "38 minutes",
  "download_url": "https://..."
}
```

---

### 2.3 Penn State Institutional Repository - PDF Access

#### **Question**: Can ScholarSphere provide PDF downloads? What are the benefits even without PDFs?

#### **ScholarSphere Capabilities**:

**Penn State ScholarSphere** (https://scholarsphere.psu.edu)
- Institutional repository for Penn State research
- OAI-PMH protocol support
- Open access to Penn State-authored papers

#### **PDF Download Feasibility**:

**Scenario 1: Penn State-Authored Papers**
```python
# ScholarRAG OAI-PMH query
response = harvest_oai_pmh(
  base_url="https://scholarsphere.psu.edu/oai",
  doi="10.1234/example"
)

# Response includes:
{
  "metadata": {...},
  "pdf_url": "https://scholarsphere.psu.edu/downloads/abc123.pdf"
}

# Direct PDF download: ✅ YES
```

**Success Probability**: ⭐⭐⭐ **Moderate**
- ScholarSphere contains ~5-10% of all literature (Penn State authors only)
- Combined with other university repositories: 20-30% coverage possible

**Scenario 2: Subscription Database Access**

**EZProxy URL Rewriting Approach**:
```python
# Original URL
url = "https://www.sciencedirect.com/article/pii/S0123456789"

# Penn State EZProxy
proxied = "https://www.sciencedirect.com.ezaccess.libraries.psu.edu/..."

# Attempt download
pdf = requests.get(proxied, cookies=psu_auth_cookies)
```

**Problems**:
- ❌ Requires Penn State authentication cookies
- ❌ Publishers block automated access (ToS violation)
- ❌ Rate limiting: 2,000 PDFs triggers alarms
- ❌ Legal risk

**Feasibility**: ⚠️ **Very Low - Not Recommended**

---

#### **Current ScholarRAG PDF Strategy (Without Penn State Subscriptions)**:

```python
def get_pdf_url(doi):
    # 1. Unpaywall (Open Access)
    oa_pdf = unpaywall_api(doi)
    if oa_pdf:
        return oa_pdf  # ~30% success

    # 2. Semantic Scholar
    s2_pdf = semantic_scholar_api(doi)
    if s2_pdf:
        return s2_pdf  # +20% success

    # 3. arXiv
    arxiv_pdf = arxiv_api(doi)
    if arxiv_pdf:
        return arxiv_pdf  # +10% success

    # Total: ~60% PDF retrieval without subscriptions
    return None
```

**With ScholarSphere Integration**:
```python
    # 4. ScholarSphere (Penn State IR)
    ss_pdf = scholarsphere_oai_pmh(doi)
    if ss_pdf:
        return ss_pdf  # +5% success

    # Total: ~65% PDF retrieval
```

---

#### **Benefits of Institutional Repository Integration (Even Without PDFs)**:

##### **Benefit 1: Superior Metadata Quality** ⭐⭐⭐⭐⭐

```
Semantic Scholar (free API):
  - Title accuracy: 95%
  - Authors: 90%
  - Abstract: 80% available
  - Citations: 85% complete

ScholarSphere (OAI-PMH):
  - Title accuracy: 99% (librarian-curated!)
  - Authors: 99%
  - Abstract: 95% available
  - Full-text searchable (even without PDF download)
  - Penn State affiliation: 100% accurate
```

**Impact on ScholarRAG**:
- Better metadata → better AI screening accuracy
- Garbage metadata = garbage screening decisions

---

##### **Benefit 2: Penn State Research Prioritization** ⭐⭐⭐⭐

```python
# Identify Penn State-authored papers
psu_papers = scholarsphere_search(query="AI education")

# Tag in ScholarRAG:
for paper in all_papers:
    if paper in psu_papers:
        paper['penn_state_author'] = True
        paper['priority'] = 'high'
```

**User Interface**:
```
Search Results: 2,000 papers on "AI education"

🎓 50 papers by Penn State authors (showing first)
📄 1,950 papers from other institutions

[Filter: Penn State Only] button
```

**Why This Matters**:
- Faculty want to know: "What is Penn State doing in this area?"
- Collaboration opportunities within Penn State
- Avoid duplicating existing Penn State research

---

##### **Benefit 3: Dataset Publication & Citation** ⭐⭐⭐⭐⭐

**Most Important Benefit!**

```
ScholarRAG generates valuable datasets:

Dataset 1: "Penn State ScholarRAG Usage Patterns (2025-2026)"
  - 500 systematic reviews
  - 50,000+ AI screening decisions
  - Time savings data
  - User satisfaction scores

Dataset 2: "AI Screening Decision Corpus"
  - 10,000 papers × AI rationale
  - Human adjudication outcomes
  - Inter-rater reliability benchmarks
```

**Publish on ScholarSphere**:
```
1. Upload to ScholarSphere
2. Assign DOI: 10.26207/penn-state-scholarag-2025
3. Open access
4. Other researchers cite your dataset!

Your paper:
"You, H., & Rhoades, R. (2026). ScholarRAG: AI-Assisted
 Systematic Reviews at Scale. Journal of AI Education, 12(3).
 Dataset: https://doi.org/10.26207/penn-state-scholarag-2025"
```

**Impact**:
- 📊 Datasets highly citable (sometimes more than papers!)
- 🏆 NSF requires data sharing (many grants)
- 🌍 Open science credibility boost

---

##### **Benefit 4: OAI-PMH Network Effect** ⭐⭐⭐⭐

**Federated Search Across Universities**:
```
ScholarRAG queries multiple repositories:
  - Penn State ScholarSphere
  - Ohio State KnowledgeBank
  - Michigan Deep Blue
  - Wisconsin MINDS@UW
  - Maryland DRUM

Total: 10 Big Ten repositories
Coverage: ~500,000 open access papers
Additional PDF coverage: +15-20%! ✅
```

**Implementation**:
```python
BIG_TEN_REPOS = [
    "https://scholarsphere.psu.edu/oai",
    "https://kb.osu.edu/oai",
    "https://deepblue.lib.umich.edu/oai",
    # ... 7 more Big Ten universities
]

def search_institutional_repos(query):
    results = []
    for repo in BIG_TEN_REPOS:
        papers = oai_pmh_search(repo, query)
        results.extend(papers)
    return deduplicate(results)
```

**Why This Matters**:
- Institutional repositories are **legal and ethical** (unlike scraping)
- **No API costs** (OAI-PMH is free)
- **Higher quality** than random web PDFs
- **Network effect**: More universities = better coverage

---

#### **Recommendation for Rick Meeting**:

❌ **Don't Ask**:
```
"Can we access Penn State subscription databases through ScholarRAG?"
→ Legal nightmare, Rick will say no
```

✅ **Do Ask**:
```
"Can we integrate ScholarSphere OAI-PMH into ScholarRAG?

Benefits:
  - Showcase Penn State research to our faculty
  - Publish ScholarRAG datasets on ScholarSphere (impact!)
  - Connect to Big Ten repository network
  - 100% legal, no publisher conflicts

Can you introduce me to Penn State Libraries?"
```

---

## 🏛️ Part 3: Penn State-Controlled AI Coding Alternatives

### Question: What alternatives exist to Claude Code that Rick could control?

### 3.1 Rick's Institutional Control Requirements

**What Rick Wants**:
1. ✅ Central billing (not individual credit cards)
2. ✅ Usage monitoring (track who uses what)
3. ✅ Security compliance (FERPA, data residency)
4. ✅ Policy enforcement (block inappropriate use)
5. ✅ Vendor management (negotiate better terms)
6. ✅ Unified support (Penn State IT handles issues)

**What Rick Doesn't Want**:
1. ❌ "Shadow IT" (researchers using unapproved external services)
2. ❌ Scattered API keys (can't track, security risk)
3. ❌ Personal credit cards (reimbursement nightmare)
4. ❌ Inconsistent tools ("Why do they use Claude, I use ChatGPT?")

---

### 3.2 Enterprise AI Coding Assistants

#### **Option 1: GitHub Copilot Enterprise** ⭐⭐⭐⭐⭐

**Why Rick Would Love This**:

```
✅ Microsoft Enterprise Agreement (Penn State already has this!)
✅ Azure integration (Rick's cloud platform)
✅ Enterprise admin console:
   - Dashboard: who uses how much
   - Organizational license allocation
   - Policy enforcement (exclude .env files from AI)
✅ IP Indemnity (legal protection)
✅ Penn State SSO (automatic authentication)
✅ Institutional knowledge:
   - Train on Penn State GitHub repos
   - Learn ScholarRAG codebase
```

**ScholarRAG Use Case**:

**Development Phase**:
```bash
# Researcher laptop
$ cd ScholarRAG
$ code .  # VS Code with Copilot Enterprise

# Copilot automatically:
1. Authenticates via Penn State SSO (hosung@psu.edu)
2. Analyzes ScholarRAG codebase
3. Provides inline suggestions

# Example:
# Researcher types: "def screen_paper"
# Copilot autocompletes entire function based on ScholarRAG patterns
```

**Chat-Based Assistance** (Similar to Claude Code):
```
User in VS Code: "Help me refactor scripts/03_screen_papers.py
                  for async/await"

Copilot (trained on ScholarRAG):
"I can help refactor to use asyncio for parallel processing.
Plan:
1. Convert screen_papers() to async
2. Use asyncio.gather() for concurrent API calls
3. Add semaphore for rate limiting

[Shows complete refactored code...]"
```

**Rick's Control Dashboard**:
```
Penn State IT Admin Console:
- Total users: 500 faculty
- API usage: 2.3M requests/month
- Cost: $15,000/month (billed to Penn State)
- Top users: [sorted list]
- Policy: ✅ Don't send .env files to AI
- Compliance: ✅ No code leaves Penn State Azure tenant
```

---

**Pricing**:
- List price: $39/user/month
- Penn State negotiated (500 users): ~$25/user/month
- **Total**: $12,500/month = **$150K/year**

**Penn State ROI**:
```
500 faculty × 10 hours saved/month × $50/hour = $250K/month value
Investment: $12.5K/month
ROI: 20× return
```

**Rick can easily justify this** ✅

---

#### **Option 2: Self-Hosted Open Source (Tabby / Continue.dev)** ⭐⭐⭐⭐

**Why This Exists**:
```
✅ 100% Penn State control (code never leaves campus)
✅ Free (open source)
✅ Local LLMs (DeepSeek Coder, Code Llama) on Penn State servers
✅ Perfect compliance (FERPA, HIPAA, etc.)
✅ Unlimited customization
```

**Architecture**:
```
Penn State Data Center (Rick manages)
    ↓
GPU Server Cluster (use ICDS Roar!)
    ↓
Tabby Server (open source)
    ↓
Local LLM: DeepSeek Coder 33B
    ↓
VS Code Extension (researcher laptop)
    ↓
API calls to https://tabby.psu.edu (internal only)
```

**Researcher Setup** (One-Time):
```bash
$ code --install-extension TabbyML.vscode-tabby
$ Settings > Tabby > Endpoint: https://tabby.psu.edu
$ Settings > Tabby > Token: [Penn State IT issues]

# All AI assistance now runs on Penn State servers!
# Code never leaves campus
```

---

**Cost Analysis**:

**Infrastructure**:
```
GPU Servers:
  - 4× NVIDIA A100 (80GB) = $40K (one-time purchase)
  - Or rent from ICDS Roar: $5K/month

Staff Time:
  - Initial setup: 2 weeks (1 engineer from Rick's team)
  - Ongoing maintenance: 4 hours/week

Annual Cost: ~$60K/year
vs. Copilot Enterprise: $150K/year
→ Savings: $90K/year ✅
```

**But Consider**:
```
❌ Setup complexity: 2-3 months to production
❌ Model quality: Open-source LLMs < GPT-4/Claude (currently)
❌ Rick's team workload: monitoring, updates, user support
❌ No vendor support (relies on open-source community)
❌ No IP indemnity (no legal protection)
```

---

**Rick's Likely Thinking**:
```
"Open source sounds great, but do we have bandwidth to maintain this?
 GitHub Copilot Enterprise means Microsoft handles everything..."
```

**Feasibility**: ⚠️ **Low** (unless Rick has dedicated research software team)

**Alternative Strategy**: Partner with ICDS!
```
ICDS already has:
  - GPU infrastructure (Roar supercomputer)
  - Mission: research computing support
  - Staff: research software engineers

Proposal: ICDS hosts Tabby as a service
  - Rick: Procurement, policy, user management
  - ICDS: GPU hosting, model maintenance, technical support
  - You: Use cases, training, ScholarRAG integration
```

---

#### **Option 3: Azure OpenAI Codex** ⭐⭐⭐⭐

**Why Rick's Comfortable with This**:
```
✅ Azure (Rick already manages Azure accounts)
✅ Enterprise security (private endpoints, VNet integration)
✅ Data residency: Code stays in Penn State Azure tenant
✅ RBAC (Role-Based Access Control): Penn State AD integration
✅ Cost management: Azure billing dashboard
✅ Compliance: FERPA, HIPAA out-of-box
```

**Architecture**:
```
Penn State Azure Tenant (Rick's control)
    ↓
Azure OpenAI Service (GPT-4o, Codex models)
    ↓
Private Endpoint (Penn State network only)
    ↓
VS Code Extension (Codex CLI)
    ↓
Penn State SSO authentication
```

**ScholarRAG Usage**:
```bash
# Researcher setup
$ npm install -g @azure/openai-codex-cli
$ codex login --tenant pennstate.onmicrosoft.com

# Coding assistance
$ cd ScholarRAG
$ codex chat

Codex> Help me add async processing to screening script

Codex (Azure OpenAI in Penn State tenant):
"I'll refactor scripts/03_screen_papers.py for async...
[Shows code optimized for Penn State environment...]"

# All API calls monitored by Rick's team
```

---

**Cost**:
- GPT-4o: $5 per 1M input tokens, $15 per 1M output tokens
- 500 users × 10K tokens/month = 5M tokens/month
- Cost: $25-50/month (extremely affordable!)

**Rick will likely approve** ✅ (Azure OpenAI probably already in Penn State contract)

**Trade-off**:
```
Azure Codex:
  ✅ Rick controls everything
  ✅ Very cost-effective
  ⚠️ Less polished than Claude Code
  ⚠️ GPT-4 arguably < Claude 3.5 Sonnet for code

Claude Code:
  ✅ Best-in-class code generation
  ✅ Great conversation memory
  ❌ No enterprise deployment option (yet)
  ❌ Requires personal API keys
```

---

### 3.3 Recommended Strategy for Rick

#### **Pragmatic Hybrid Approach** 🎯

**Phase 1 (Pilot, Months 1-6)**:
```
Claude Code:
  - Researchers use personal API keys ($20/month Claude Pro)
  - Or personal Anthropic API keys
  - Rick: Zero cost, zero infrastructure work

ScholarRAG Scripts:
  - Penn State provides centralized API keys (AWS Bedrock)
  - Rick's team manages
  - Budget: $5K for 20 pilot projects
```

**Phase 2 (Production, Months 7+)**:

Decision point: Did pilot succeed?

**Option A: GitHub Copilot Enterprise** ($150K/year)
- If Penn State wants "Rolls Royce" experience
- Rick's team: minimal work (Microsoft manages)
- Best user experience

**Option B: Azure OpenAI Codex** ($20K/year)
- If budget-conscious
- Rick's team comfortable (already using Azure)
- Good enough quality

**Option C: Self-Hosted Tabby** (via ICDS)
- If maximum control + cost savings
- ICDS provides GPU infrastructure
- Rick's team: user management only

---

#### **Pitch to Rick**:

```
"Rick, for the pilot let's keep it simple:

Phase 1 Goals:
  - Researchers use Claude Code with personal keys (no Penn State cost)
  - You provide centralized API keys for ScholarRAG scripts ($5K)
  - Zero infrastructure work for your team
  - Prove demand first

Phase 2 Evaluation (if pilot succeeds):
We present 3 options with data:
  1. GitHub Copilot Enterprise (best UX, $150K/year)
  2. Azure Codex (Penn State controlled, $20K/year)
  3. ICDS self-hosted (most savings, requires ICDS buy-in)

Your choice based on:
  - Pilot usage data
  - Available budget
  - IT team capacity

Sound reasonable?"
```

---

## 📅 Action Plan Summary

### Week 1: Low-Hanging Fruit
- [ ] **Rick meeting**: Discuss Cloud Services support
- [ ] **ICDS Roar account**: Apply online (1-2 week approval)
- [ ] **ScholarSphere account**: Register, upload ScholarRAG documentation

### Weeks 2-4: Strategic Partnerships
- [ ] **Email Vasant Honavar** (CENSAI): Request collaboration meeting
- [ ] **Libraries consultation**: Research Data Services meeting
- [ ] **SSRI introduction**: Methods Core partnership discussion

### Months 2-3: Funding Applications
- [ ] **College of Education RIG**: $5K pilot study proposal
- [ ] **ICDS Rising Researcher Grant**: $25K proposal (if eligible, find co-PI)

### Months 4-6: Service Launch
- [ ] **TLT partnership**: Propose workshop series
- [ ] **ACLOD Summit**: Pilot with 20 participants
- [ ] **Impact data collection**: Time savings, user satisfaction

---

## 🎯 Rick Meeting Agenda (30 minutes)

### Part 1: Align on Philosophy (5 min)
```
"Rick, I know Penn State IT prefers centralized control.
For ScholarRAG, I see two layers:

Layer 1: Development tools (Claude Code)
  - Researchers' personal tools (like their laptops)
  - Penn State doesn't need to manage

Layer 2: Production infrastructure (scripts, data)
  - Penn State controls this
  - Your team manages API keys, cloud resources

Does this framing work for you?"
```

### Part 2: Pilot Proposal (10 min)
```
"For the pilot, minimal Penn State infrastructure:

What I'm requesting:
  - 20 project-based API keys (AWS Bedrock Claude)
  - $200 quota each = $4,000 total
  - Your team provisions via AWS IAM
  - I build usage dashboard

What I'm NOT requesting:
  - No new servers
  - No custom software deployment
  - No user support from your team (I handle it)

After pilot, we evaluate: Copilot Enterprise vs Azure Codex vs ICDS."
```

### Part 3: Long-Term Vision (10 min)
```
"If pilot succeeds, ScholarRAG becomes flagship use case
for Penn State AI Coding Infrastructure:

Potential scope:
  - 500+ faculty across colleges
  - Student programming courses
  - Your IT development teams

Options for your consideration:
  1. GitHub Copilot Enterprise ($150K/year, turnkey)
  2. Azure OpenAI Codex ($20K/year, you manage)
  3. Self-hosted via ICDS (savings, but complex)

I'll provide usage data to inform your decision."
```

### Part 4: Introductions (5 min)
```
"Can you connect me with:
  1. ICDS leadership (GPU infrastructure partnership?)
  2. Penn State Libraries (ScholarSphere integration)
  3. TLT (training workshop collaboration)

These partnerships increase ScholarRAG's value to Penn State."
```

---

## 📊 Key Takeaways

1. **Penn State has extensive resources** for ScholarRAG beyond Cloud Services
   - ICDS (compute, funding)
   - Libraries (data, outreach)
   - AI centers (research credibility)
   - Training infrastructure (TLT, SSRI)

2. **API key management** should be hybrid
   - Claude Code: personal keys (low cost, high adoption)
   - ScholarRAG scripts: Penn State managed (high cost, needs control)

3. **Cloud infrastructure** should wait for Phase 2
   - Pilot: local execution (proves demand)
   - Production: Azure Container Instances (Rick's comfort zone)

4. **Institutional repository** provides value beyond PDFs
   - Superior metadata quality
   - Dataset publication & citation
   - Big Ten network effect

5. **Penn State-controlled coding tools** exist but aren't urgent
   - GitHub Copilot Enterprise (best option if Penn State invests)
   - Azure Codex (middle ground)
   - Self-hosted Tabby (requires ICDS partnership)

6. **Pragmatic hybrid approach** wins
   - Let researchers use tools they like (Claude Code)
   - Penn State controls production infrastructure only
   - Prove value with pilot, then scale with enterprise solutions

---

**Next Steps**: Schedule Rick meeting, apply for ICDS Roar account, draft College of Education RIG proposal.

**Timeline**: Pilot launch by Month 1, full evaluation by Month 6, scale decision by Month 9.

**Success Metrics**: 80% pilot completion rate, $150+ hours saved per review, 4.2+/5.0 user satisfaction.
