# ScholaRAG Penn State Architecture Redesign
**Rick's Lab Pilot - 25 Researchers, 3 Months**

**Date**: October 22, 2025
**Context**: Rick의 지원을 활용하여 ScholaRAG를 Penn State 환경에 맞게 재구성

---

## Part 1: 현재 ScholaRAG 아키텍처 분석

### 현재 구조 (개인 사용자 기준)

```
ScholaRAG (로컬 실행)
│
├─ Stage 1-2: 연구 설계
│   └─ 로컬 YAML config 생성
│
├─ Stage 3: 논문 검색
│   ├─ scripts/01_fetch_papers.py
│   ├─ OpenAlex API (무료)
│   ├─ Semantic Scholar API (무료)
│   └─ arXiv API (무료)
│
├─ Stage 4: 중복 제거
│   └─ scripts/02_deduplicate.py (로컬)
│
├─ Stage 5: AI 스크리닝 ⭐ (Claude API 필요)
│   ├─ scripts/03_screen_papers.py
│   ├─ ANTHROPIC_API_KEY (개인 .env 파일)
│   └─ Claude 3.5 Sonnet API 호출
│
├─ Stage 6: PDF 다운로드
│   └─ scripts/04_download_pdfs.py (오픈 액세스만)
│
├─ Stage 7: RAG 구축 ⭐ (OpenAI API 필요)
│   ├─ scripts/05_build_rag.py
│   ├─ OPENAI_API_KEY (개인 .env 파일)
│   ├─ text-embedding-3-large (embedding)
│   └─ ChromaDB (로컬 vector store)
│
└─ Stage 8: RAG 쿼리 ⭐ (Claude API 필요)
    ├─ scripts/06_query_rag.py
    └─ Claude 3.5 Sonnet API 호출
```

### 현재 API 의존성

| Component | API Provider | Cost | Auth Method |
|-----------|--------------|------|-------------|
| **Paper screening** | Anthropic Claude | $3/1M input, $15/1M output | `ANTHROPIC_API_KEY` |
| **Embeddings** | OpenAI | $0.13/1M tokens | `OPENAI_API_KEY` |
| **RAG queries** | Anthropic Claude | $3/1M input, $15/1M output | `ANTHROPIC_API_KEY` |

**현재 문제점**:
- ❌ 각 연구자가 개인 API key 관리 (비용, 보안)
- ❌ 사용량 추적 불가능
- ❌ 데이터 거버넌스 없음
- ❌ Penn State SSO 통합 없음

---

## Part 2: Penn State 환경 재구성 - Rick's 지원 활용

### 목표:
1. **Rick's team이 제공하는 것** 최대한 활용
2. **당신이 개발하는 것** 최소화 (핵심 ScholaRAG 로직만)
3. **Penn State SSO** 통합
4. **중앙 관리** (Rick's team이 API key, 비용 추적)

### 재구성된 아키텍처

```
┌─────────────────────────────────────────────────────────────────┐
│                   Penn State Infrastructure                      │
│                  (Rick's Cloud Services Team)                    │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌──────────────┐      ┌──────────────┐     ┌──────────────┐
│ AWS Bedrock  │      │ Penn State   │     │ Penn State   │
│ (Claude API) │      │ SSO (SAML)   │     │ CloudWatch   │
└──────────────┘      └──────────────┘     └──────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  scholarag.psu.edu│
                    │  (Your Proxy)     │
                    └──────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌──────────────┐      ┌──────────────┐     ┌──────────────┐
│ Researcher 1 │      │ Researcher 2 │     │ Researcher 25│
│ (Local CLI)  │      │ (Local CLI)  │     │ (Local CLI)  │
└──────────────┘      └──────────────┘     └──────────────┘
```

---

## Part 3: 역할 분담 - "You" vs. "Rick's Team"

### Rick's Cloud Services Team이 제공하는 것 ✅

#### **1. AWS Infrastructure (Rick's specialty)**

**What Rick provides**:
```
Penn State AWS Account
    ├─ AWS Bedrock 활성화
    │   └─ Claude 3.5 Sonnet model access
    │
    ├─ AWS Secrets Manager
    │   └─ Bedrock API credentials (25개 researchers용)
    │
    ├─ AWS IAM Identity Center
    │   └─ Penn State AD SAML integration
    │
    ├─ AWS CloudWatch
    │   ├─ Usage monitoring
    │   └─ Cost tracking (per researcher)
    │
    └─ AWS Lambda (optional)
        └─ Proxy function (if Rick's team wants to manage)
```

**Rick's responsibility**:
- AWS 계정 생성 (Rick's lab sub-account)
- Bedrock 활성화 및 model access 신청
- Secrets Manager에 API credentials 저장
- CloudWatch 대시보드 설정 (usage/cost tracking)
- 월별 billing report 제공

#### **2. Penn State SSO Integration (Rick's team already manages)**

**What Rick provides**:
```
Penn State Active Directory
    ├─ SAML 2.0 IdP (이미 존재)
    │   ├─ Used for: Canvas, Zoom, AWS, Azure
    │   └─ Can add: scholarag.psu.edu
    │
    └─ User accounts (25 researchers)
        └─ Automatic provisioning via Penn State AD
```

**Rick's responsibility**:
- scholarag.psu.edu를 Penn State SAML apps에 추가
- SAML metadata 제공 (Sign-on URL, certificate)
- 25명 연구자 Penn State AD group 생성 (`ScholarAG-Pilot-Users`)

#### **3. Penn State Infrastructure (Rick's team provides)**

**What Rick provides**:
```
Penn State Network
    ├─ DNS: scholarag.psu.edu
    │   └─ Rick's team이 PSU IT에 요청
    │
    ├─ SSL Certificate
    │   └─ Penn State wildcard cert (*.psu.edu)
    │
    └─ (Optional) EC2 instance
        └─ 당신의 proxy server 호스팅 (if needed)
```

**Rick's responsibility**:
- DNS record 생성 요청 (Penn State IT 통해)
- SSL certificate 발급
- (Optional) EC2 instance 제공 및 관리

#### **4. Monitoring & Support (Rick's Solutions Engagement Specialists)**

**What Rick's team provides**:
- ✅ Architecture review (proxy server 설계 검토)
- ✅ Security review (Penn State ISO와 협업)
- ✅ Usage monitoring setup (CloudWatch dashboards)
- ✅ Monthly reports (usage, cost, issues)
- ✅ Troubleshooting support (AWS infrastructure 문제)

---

### 당신(Hosung)이 개발하는 것 🔨

#### **1. ScholaRAG Core Logic (이미 개발 완료)**

**What you already have**:
```
ScholaRAG/scripts/
    ├─ 01_fetch_papers.py ✅ (no changes needed)
    ├─ 02_deduplicate.py ✅ (no changes needed)
    ├─ 03_screen_papers.py ⚠️ (API key 부분만 수정)
    ├─ 04_download_pdfs.py ✅ (no changes needed)
    ├─ 05_build_rag.py ⚠️ (API key 부분만 수정)
    ├─ 06_query_rag.py ⚠️ (API key 부분만 수정)
    └─ 07_generate_prisma.py ✅ (no changes needed)
```

**What you need to modify**:
```python
# 현재 (개인 API key):
load_dotenv()
api_key = os.getenv('ANTHROPIC_API_KEY')
client = anthropic.Anthropic(api_key=api_key)

# 수정 (Penn State proxy):
api_endpoint = "https://scholarag.psu.edu/api/claude"
client = anthropic.Anthropic(
    api_key="penn-state-sso-token",  # Penn State SSO에서 받은 token
    base_url=api_endpoint
)
```

#### **2. Proxy Server (scholarag.psu.edu)**

**Your responsibility**:
```
scholarag.psu.edu (FastAPI server)
│
├─ /auth/login (Penn State SSO)
│   ├─ Redirect to Penn State SAML IdP
│   ├─ Validate SAML assertion
│   └─ Issue JWT token (1-hour expiry)
│
├─ /api/claude (Proxy to AWS Bedrock)
│   ├─ Validate JWT token
│   ├─ Get AWS Bedrock credentials from Secrets Manager
│   ├─ Forward request to AWS Bedrock
│   ├─ Log usage (researcher_id, tokens, timestamp)
│   └─ Return response
│
└─ /api/usage (Usage dashboard)
    └─ Show researcher's own usage (tokens, cost)
```

**Tech stack** (당신이 선택):
- **Backend**: FastAPI (Python) - ScholaRAG와 동일 언어
- **Auth**: `python-saml` library (Penn State SAML integration)
- **AWS SDK**: `boto3` (Bedrock API calls)
- **Logging**: `structlog` → CloudWatch
- **Hosting**: Penn State EC2 (Rick's team provides) or Render.com (무료)

**Code size estimate**: ~500 lines of Python

#### **3. CLI Tool for Researchers (선택사항)**

**Your responsibility** (선택사항):
```bash
# scholarag CLI tool
$ scholarag login
Opening Penn State SSO in browser...
✓ Logged in as hxy5275@psu.edu

$ scholarag screen --project my-project
Screening 1,234 papers...
Progress: [████████░░] 80% (987/1234)
✓ Screening complete. 234 papers included.

$ scholarag usage
Your usage this month:
  Tokens: 1.2M input, 0.3M output
  Cost: $5.10 / $200 quota (2.5% used)
  Remaining: $194.90
```

**Tech stack**:
- **Python Click** (CLI framework)
- **Requests** (HTTP calls to scholarag.psu.edu)
- **Rich** (pretty terminal output)

**Code size estimate**: ~300 lines of Python

---

## Part 4: 구체적인 구현 계획

### Phase 1: Rick's Team Setup (Week 1-2)

**Rick's team actions**:

#### **Week 1: AWS Infrastructure**
```bash
# Rick's team executes:

# 1. AWS 계정 생성
aws organizations create-account \
  --account-name "ScholarAG-Pilot" \
  --email scholarag-pilot@psu.edu

# 2. AWS Bedrock 활성화
aws bedrock list-foundation-models \
  --region us-east-1 \
  --by-provider anthropic

aws bedrock-runtime invoke-model \
  --model-id anthropic.claude-3-5-sonnet-20241022 \
  --body '{"messages":[{"role":"user","content":"test"}]}'

# 3. Secrets Manager에 credentials 저장
aws secretsmanager create-secret \
  --name "scholarag/bedrock-credentials" \
  --secret-string '{"access_key":"xxx","secret_key":"yyy"}'

# 4. CloudWatch 대시보드 생성
aws cloudwatch put-dashboard \
  --dashboard-name "ScholarAG-Pilot" \
  --dashboard-body file://dashboard.json
```

**Deliverables from Rick's team**:
- ✅ AWS account ID: `123456789012`
- ✅ Bedrock endpoint: `https://bedrock-runtime.us-east-1.amazonaws.com`
- ✅ Secrets Manager ARN: `arn:aws:secretsmanager:us-east-1:123456789012:secret:scholarag/bedrock-credentials`
- ✅ CloudWatch dashboard URL: `https://console.aws.amazon.com/cloudwatch/dashboards/ScholarAG-Pilot`

#### **Week 2: Penn State SSO Integration**
```bash
# Rick's team executes:

# 1. Penn State SAML metadata 제공
# Rick's team sends you:
# - Sign-on URL: https://sso.psu.edu/saml/login
# - SAML certificate: psu-saml-cert.pem
# - Entity ID: https://sso.psu.edu

# 2. scholarag.psu.edu를 SAML apps에 추가
# Rick's team configures in Penn State IdP:
# - Service Provider Entity ID: https://scholarag.psu.edu
# - Assertion Consumer Service URL: https://scholarag.psu.edu/auth/callback
# - NameID format: email
# - Attributes: email, displayName, groups

# 3. DNS record 생성 요청
# Rick's team submits ticket to Penn State IT:
# - Type: A record
# - Name: scholarag.psu.edu
# - Value: <your-server-ip>
```

**Deliverables from Rick's team**:
- ✅ SAML metadata XML file
- ✅ Penn State certificate (psu-saml-cert.pem)
- ✅ DNS: scholarag.psu.edu pointing to your server
- ✅ SSL certificate (*.psu.edu wildcard)

---

### Phase 2: Your Development (Week 3-5)

**Your actions**:

#### **Week 3: Proxy Server Development**

**File structure**:
```
scholarag-proxy/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI app
│   ├── auth.py              # Penn State SAML auth
│   ├── bedrock.py           # AWS Bedrock proxy
│   ├── models.py            # Pydantic models
│   └── config.py            # Configuration
├── requirements.txt
├── Dockerfile
└── README.md
```

**Core code** (`app/main.py`):
```python
from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from onelogin.saml2.auth import OneLogin_Saml2_Auth
import boto3
import jwt
import os
from datetime import datetime, timedelta

app = FastAPI(title="ScholaRAG Penn State Proxy")
security = HTTPBearer()

# ============================================================
# AUTH: Penn State SSO
# ============================================================

@app.get("/auth/login")
def login(request: Request):
    """Redirect to Penn State SSO"""
    saml_auth = OneLogin_Saml2_Auth(request, get_saml_settings())
    return RedirectResponse(saml_auth.login())

@app.post("/auth/callback")
def callback(request: Request):
    """Handle SAML assertion from Penn State"""
    saml_auth = OneLogin_Saml2_Auth(request, get_saml_settings())
    saml_auth.process_response()

    if not saml_auth.is_authenticated():
        raise HTTPException(401, "SAML authentication failed")

    # Extract user info
    email = saml_auth.get_nameid()  # hxy5275@psu.edu
    name = saml_auth.get_attribute("displayName")[0]

    # Issue JWT token (1 hour expiry)
    token = jwt.encode({
        "email": email,
        "name": name,
        "exp": datetime.utcnow() + timedelta(hours=1)
    }, os.getenv("JWT_SECRET"), algorithm="HS256")

    return {"access_token": token, "token_type": "bearer"}

def get_saml_settings():
    """Load Penn State SAML settings"""
    return {
        "sp": {
            "entityId": "https://scholarag.psu.edu",
            "assertionConsumerService": {
                "url": "https://scholarag.psu.edu/auth/callback"
            }
        },
        "idp": {
            "entityId": "https://sso.psu.edu",
            "singleSignOnService": {
                "url": "https://sso.psu.edu/saml/login"
            },
            "x509cert": open("psu-saml-cert.pem").read()
        }
    }

# ============================================================
# API: Claude Proxy (AWS Bedrock)
# ============================================================

@app.post("/api/claude")
async def claude_proxy(
    request: Request,
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    """Proxy Claude API requests to AWS Bedrock"""

    # 1. Validate JWT token
    try:
        payload = jwt.decode(
            credentials.credentials,
            os.getenv("JWT_SECRET"),
            algorithms=["HS256"]
        )
        researcher_email = payload["email"]
    except jwt.ExpiredSignatureError:
        raise HTTPException(401, "Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(401, "Invalid token")

    # 2. Get AWS Bedrock credentials from Secrets Manager
    secrets_client = boto3.client('secretsmanager', region_name='us-east-1')
    secret = secrets_client.get_secret_value(
        SecretId='scholarag/bedrock-credentials'
    )
    creds = json.loads(secret['SecretString'])

    # 3. Call AWS Bedrock
    bedrock_client = boto3.client(
        'bedrock-runtime',
        region_name='us-east-1',
        aws_access_key_id=creds['access_key'],
        aws_secret_access_key=creds['secret_key']
    )

    body = await request.json()

    response = bedrock_client.invoke_model(
        modelId='anthropic.claude-3-5-sonnet-20241022',
        body=json.dumps(body)
    )

    # 4. Log usage
    log_usage(
        researcher_email=researcher_email,
        input_tokens=body.get("max_tokens", 0),
        timestamp=datetime.utcnow()
    )

    return response['body'].read()

# ============================================================
# USAGE TRACKING
# ============================================================

@app.get("/api/usage")
def get_usage(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """Get researcher's usage stats"""
    payload = jwt.decode(
        credentials.credentials,
        os.getenv("JWT_SECRET"),
        algorithms=["HS256"]
    )

    # Query CloudWatch logs
    logs_client = boto3.client('logs', region_name='us-east-1')

    # (Implementation: query CloudWatch for researcher's usage)
    # Returns: { tokens: 1.2M, cost: $5.10, quota: $200 }

    return {
        "email": payload["email"],
        "usage_this_month": {
            "input_tokens": 1200000,
            "output_tokens": 300000,
            "cost_usd": 5.10,
            "quota_usd": 200.00,
            "remaining_usd": 194.90
        }
    }

def log_usage(researcher_email: str, input_tokens: int, timestamp: datetime):
    """Log usage to CloudWatch"""
    logs_client = boto3.client('logs', region_name='us-east-1')

    logs_client.put_log_events(
        logGroupName='/scholarag/usage',
        logStreamName=researcher_email,
        logEvents=[{
            'timestamp': int(timestamp.timestamp() * 1000),
            'message': json.dumps({
                'email': researcher_email,
                'input_tokens': input_tokens,
                'timestamp': timestamp.isoformat()
            })
        }]
    )
```

**Deployment** (Rick's team이 EC2 제공하면):
```bash
# Your server
$ git clone https://github.com/HosungYou/scholarag-proxy
$ cd scholarag-proxy
$ pip install -r requirements.txt
$ uvicorn app.main:app --host 0.0.0.0 --port 443 --ssl-keyfile psu-key.pem --ssl-certfile psu-cert.pem
```

**Or use Render.com** (무료, easier):
```yaml
# render.yaml
services:
  - type: web
    name: scholarag-proxy
    env: python
    buildCommand: pip install -r requirements.txt
    startCommand: uvicorn app.main:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: JWT_SECRET
        generateValue: true
      - key: AWS_ACCESS_KEY_ID
        sync: false
      - key: AWS_SECRET_ACCESS_KEY
        sync: false
```

#### **Week 4: ScholaRAG Scripts 수정**

**Modify `scripts/03_screen_papers.py`**:
```python
# OLD (개인 API key):
load_dotenv()
api_key = os.getenv('ANTHROPIC_API_KEY')
client = anthropic.Anthropic(api_key=api_key)

# NEW (Penn State proxy):
import requests

SCHOLARAG_API = "https://scholarag.psu.edu/api/claude"

def get_penn_state_token():
    """Get Penn State SSO token (cached for 1 hour)"""
    token_file = Path.home() / ".scholarag" / "token"

    if token_file.exists():
        token_data = json.loads(token_file.read_text())
        if datetime.fromisoformat(token_data["expires"]) > datetime.now():
            return token_data["token"]

    # Token expired or doesn't exist - redirect to SSO
    print("🔐 Penn State authentication required")
    print("   Opening browser to login.psu.edu...")

    # Open browser for SSO login
    import webbrowser
    webbrowser.open("https://scholarag.psu.edu/auth/login")

    # Wait for user to complete SSO and paste token
    token = input("   Paste your access token: ")

    # Save token
    token_file.parent.mkdir(exist_ok=True)
    token_file.write_text(json.dumps({
        "token": token,
        "expires": (datetime.now() + timedelta(hours=1)).isoformat()
    }))

    return token

def call_claude(prompt: str) -> str:
    """Call Claude via Penn State proxy"""
    token = get_penn_state_token()

    response = requests.post(
        SCHOLARAG_API,
        headers={"Authorization": f"Bearer {token}"},
        json={
            "model": "claude-3-5-sonnet-20241022",
            "max_tokens": 1024,
            "messages": [{"role": "user", "content": prompt}]
        }
    )

    if response.status_code == 401:
        # Token expired
        os.remove(Path.home() / ".scholarag" / "token")
        return call_claude(prompt)  # Retry with new token

    response.raise_for_status()
    return response.json()["content"][0]["text"]
```

**Modify `scripts/05_build_rag.py`** (OpenAI embedding):
```python
# For now, keep using personal OPENAI_API_KEY
# (Rick's team doesn't broker OpenAI, only AWS Bedrock)

# FUTURE: Switch to AWS Bedrock embeddings
# (Titan Embeddings or Cohere Embed)
```

#### **Week 5: CLI Tool (선택사항)**

**File**: `scholarag-cli/scholarag.py`
```python
import click
import requests
import webbrowser
from rich.console import Console
from rich.progress import Progress

console = Console()

SCHOLARAG_API = "https://scholarag.psu.edu"

@click.group()
def cli():
    """ScholaRAG CLI - Penn State Edition"""
    pass

@cli.command()
def login():
    """Login with Penn State SSO"""
    console.print("🔐 Opening Penn State SSO in browser...")
    webbrowser.open(f"{SCHOLARAG_API}/auth/login")

    token = console.input("   Paste your access token: ")

    # Save token
    token_file = Path.home() / ".scholarag" / "token"
    token_file.parent.mkdir(exist_ok=True)
    token_file.write_text(json.dumps({
        "token": token,
        "expires": (datetime.now() + timedelta(hours=1)).isoformat()
    }))

    console.print("✓ Logged in successfully", style="green")

@cli.command()
@click.option("--project", required=True, help="Project directory")
def screen(project):
    """Screen papers using Penn State Claude API"""
    console.print(f"📋 Screening papers in {project}...")

    # Call original script, but with Penn State proxy
    subprocess.run([
        "python", "scripts/03_screen_papers.py",
        "--project", project,
        "--api-endpoint", f"{SCHOLARAG_API}/api/claude"
    ])

@cli.command()
def usage():
    """Show your usage stats"""
    token = get_token()

    response = requests.get(
        f"{SCHOLARAG_API}/api/usage",
        headers={"Authorization": f"Bearer {token}"}
    )

    data = response.json()

    console.print("\n📊 Your usage this month:")
    console.print(f"   Tokens: {data['usage_this_month']['input_tokens']:,} input, "
                  f"{data['usage_this_month']['output_tokens']:,} output")
    console.print(f"   Cost: ${data['usage_this_month']['cost_usd']:.2f} / "
                  f"${data['usage_this_month']['quota_usd']:.0f} quota")
    console.print(f"   Remaining: ${data['usage_this_month']['remaining_usd']:.2f}")

if __name__ == "__main__":
    cli()
```

---

### Phase 3: Testing & Launch (Week 6-7)

#### **Week 6: Internal Testing**

**Rick's team tests**:
- AWS Bedrock connectivity
- CloudWatch logging working
- Cost tracking accurate

**You test**:
- Penn State SSO login flow
- Proxy correctly forwards to Bedrock
- ScholaRAG scripts work with proxy
- Error handling (token expiry, rate limits)

**Beta testers** (5 researchers from Rick's lab):
```bash
# Beta tester workflow:
$ pip install scholarag-cli
$ scholarag login
🔐 Opening Penn State SSO in browser...
[Browser opens, logs in with PSU credentials]
✓ Logged in as abc123@psu.edu

$ cd my-research-project
$ scholarag screen --project .
📋 Screening 1,234 papers...
Progress: [████████████] 100% (1234/1234)
✓ Screening complete. 234 papers included.

$ scholarag usage
📊 Your usage this month:
   Tokens: 245,000 input, 62,000 output
   Cost: $1.67 / $200 quota (0.8% used)
   Remaining: $198.33
```

#### **Week 7: Training & Soft Launch**

**Training workshop** (2 hours, Rick's lab):
1. **Hour 1**: ScholaRAG overview (당신이 설명)
   - What is systematic literature review?
   - 7-stage pipeline walkthrough
   - Demo: Live paper screening

2. **Hour 2**: Penn State setup (Rick's team 설명)
   - How to login with Penn State SSO
   - How to check usage quota
   - Troubleshooting (who to contact)

**Soft launch**:
- 25 researchers get access
- Monitor for first week (daily check-ins)
- Rick's team monitors CloudWatch (cost tracking)

---

## Part 5: 책임 분담 요약

### Rick's Cloud Services Team

| Task | Effort | Timeline |
|------|--------|----------|
| AWS Bedrock 활성화 | 2 hours | Week 1 |
| Secrets Manager 설정 | 1 hour | Week 1 |
| CloudWatch 대시보드 | 3 hours | Week 1 |
| Penn State SSO 설정 | 4 hours | Week 2 |
| DNS/SSL 설정 | 2 hours | Week 2 |
| EC2 instance 제공 (optional) | 1 hour | Week 3 |
| Architecture review | 2 hours | Week 4 |
| Security review | 4 hours | Week 5 |
| Beta testing support | 2 hours | Week 6 |
| **Total** | **21 hours** | **7 weeks** |

**Rick's team workload**: ~3 hours/week (매우 합리적!)

### You (Hosung)

| Task | Effort | Timeline |
|------|--------|----------|
| Proxy server development | 16 hours | Week 3-4 |
| ScholaRAG scripts 수정 | 4 hours | Week 4 |
| CLI tool (선택) | 8 hours | Week 5 |
| Testing | 8 hours | Week 6 |
| Training workshop prep | 4 hours | Week 7 |
| **Total** | **40 hours** | **5 weeks** |

**Your workload**: ~8 hours/week (1 full day per week)

---

## Part 6: 비용 분석 (Penn State 재구성 후)

### Pilot Budget Breakdown (3 months, 25 researchers)

| Component | Provider | Cost | Who Pays? |
|-----------|----------|------|-----------|
| **AWS Bedrock (Claude API)** | AWS | $5,000 | Rick's lab account |
| **Penn State infrastructure** | Penn State IT | $0 | Rick's team (existing) |
| **EC2 hosting (optional)** | AWS | ~$50 | Rick's lab account |
| **Your development time** | N/A | $0 | Your time (thesis work) |
| **Rick's team time** | Penn State IT | $0 | Their job (supporting research) |
| **Total** | | **$5,050** | **Rick's lab** |

**Rick에게 요청할 예산**: $5,050 (기존 $5K와 거의 동일)

---

## Part 7: Rick 미팅에서 보여줄 것

### Demo Script (5분)

**Slide 1: Current Problem**
```
현재: 연구자들이 개인 API key 사용
  ❌ $200/month per person (unaffordable)
  ❌ 데이터 거버넌스 없음
  ❌ 사용량 추적 불가능
```

**Slide 2: Proposed Solution**
```
Penn State 재구성:
  ✅ Rick's team이 AWS Bedrock broker
  ✅ Penn State SSO 통합
  ✅ Central management (Rick's team)
  ✅ Usage tracking (CloudWatch)
```

**Slide 3: Architecture Diagram**
```
[Show diagram from Part 2]

연구자 → scholarag.psu.edu (Penn State SSO)
       → AWS Bedrock (Rick's team manages)
       → CloudWatch (Rick's team monitors)
```

**Slide 4: What I Need from Rick**
```
Rick's team provides:
  1. AWS Bedrock access (Week 1)
  2. Penn State SSO setup (Week 2)
  3. DNS: scholarag.psu.edu (Week 2)
  4. (Optional) EC2 instance (Week 3)

I provide:
  1. Proxy server code (Week 3-4)
  2. ScholaRAG scripts (already done, minor mods)
  3. User training (Week 7)
```

**Slide 5: Timeline & Budget**
```
Timeline: 7 weeks from today to pilot launch
Budget: $5,050 (3 months)
  - $5,000: AWS Bedrock (Claude API)
  - $50: EC2 hosting (if needed)

Rick's team effort: ~3 hours/week (21 hours total)
My effort: ~8 hours/week (40 hours total)
```

---

## Part 8: 핵심 메시지

### Rick이 듣고 싶은 말:

✅ "I want to **use your existing AWS infrastructure**"
✅ "You already broker AWS Bedrock - I just need access"
✅ "Penn State SSO is already set up - just add scholarag.psu.edu"
✅ "I'll build the proxy server - you manage the AWS backend"
✅ "Total cost: $5K (same as original estimate)"

### Rick이 듣기 싫은 말:

❌ "Penn State needs to buy new services"
❌ "We need to change university policies"
❌ "This requires lots of your team's time"
❌ "I need you to develop the application"

---

## 결론

당신의 자원(ScholaRAG scripts)과 Rick의 자원(AWS Bedrock, Penn State SSO)을 결합하면:

**Before (개인 사용자)**:
- 연구자 개인이 모든 것 관리
- API key, 비용, 보안 모두 개인 책임
- Penn State 통제 없음

**After (Penn State 재구성)**:
- **Rick's team**: AWS infrastructure, SSO, monitoring (그들의 specialty)
- **You**: ScholaRAG logic, proxy server (당신의 specialty)
- **Researchers**: 그냥 사용하기만 하면 됨 (Penn State 로그인 → ScholaRAG 실행)

**Win-Win**:
- Rick: 좋은 사례 연구 ("How we support AI research")
- You: Infrastructure 걱정 없이 ScholaRAG 연구에 집중
- Researchers: 무료로 SOTA AI 도구 사용

**Realistic? ✅ Yes!**
- Rick's team effort: 21 hours over 7 weeks (합리적)
- Your effort: 40 hours over 5 weeks (thesis 범위 내)
- Budget: $5,050 (Rick's lab 감당 가능)
