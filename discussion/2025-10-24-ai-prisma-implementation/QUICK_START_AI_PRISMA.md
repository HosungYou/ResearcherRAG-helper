# Quick Start: Testing AI-PRISMA 6-Dimension Scoring

**Updated**: 2024-10-24
**Version**: Week 2 Implementation (Tasks 8 & 9 Complete)

---

## 🚀 Quick Test (5 minutes)

### Prerequisites
```bash
# 1. Set API key
export ANTHROPIC_API_KEY="sk-ant-api03-xxxxx"

# Or add to .env file:
echo "ANTHROPIC_API_KEY=sk-ant-api03-xxxxx" > /tmp/scholarag/.env
```

### Run Test
```bash
cd /tmp/scholarag

# Generate test data (6 sample papers)
python scripts/test_ai_prisma_scoring.py

# Run AI-PRISMA screening
python scripts/03_screen_papers.py \
    --project test_projects/ai-prisma-test \
    --question "How do AI chatbots improve speaking proficiency in second language learning?"
```

### Expected Output
```
============================================================
🔍 PAPER SCREENING
============================================================

Research Question: How do AI chatbots improve speaking proficiency...
Total papers to screen: 6
Estimated time: 0.3 minutes
Estimated cost: $0.06 (Claude API)

⏳ Starting screening...

   [1/6] AI Chatbots Improve Speaking Proficiency in Seco... → ✅ auto-include (score: 45, conf: 95%)
   [2/6] The Role of Physical Exercise in Cardiovascular ... → ⛔ auto-exclude (score: -15, conf: 5%)
   [3/6] Technology-Enhanced Language Teaching: A Survey o... → ⚠️ human-review (score: 24, conf: 65%)
   [4/6] Automated Feedback Systems for Writing Improveme... → ⚠️ human-review (score: 28, conf: 70%)
   [5/6] Chatbot Applications in Customer Service: Indust... → ⛔ auto-exclude (score: 5, conf: 10%)
   [6/6] Virtual Reality Simulation for Speaking Anxiety ... → ⚠️ human-review (score: 32, conf: 75%)

============================================================
📊 AI-PRISMA SCREENING RESULTS
============================================================

Total papers: 6
✅ Auto-include (≥90% confidence): 1 (17%)
⛔ Auto-exclude (≤10% confidence): 2 (33%)
⚠️  Human review required (11-89%): 3 (50%)

Total Score Distribution:
  Mean: 19.8
  Median: 26.0
  Range: -15 to 45

💾 Auto-included papers: test_projects/ai-prisma-test/data/02_screening/auto_included.csv
💾 Auto-excluded papers: test_projects/ai-prisma-test/data/02_screening/auto_excluded.csv
💾 Human review queue: test_projects/ai-prisma-test/data/02_screening/human_review_queue.csv
💾 All papers with AI-PRISMA scores: test_projects/ai-prisma-test/data/02_screening/all_screened_papers.csv
```

---

## 📊 Verify Results

### 1. Check Auto-Included Papers
```bash
cat test_projects/ai-prisma-test/data/02_screening/auto_included.csv | head -5
```

**Expected**: 1 paper (AI Chatbots RCT study)
- Total score: 40-50
- Confidence: ≥90%
- All 6 dimensions scored

### 2. Check Human Review Queue
```bash
cat test_projects/ai-prisma-test/data/02_screening/human_review_queue.csv | head -5
```

**Expected**: 3 papers (Technology survey, Writing feedback, VR speaking)
- Total scores: 20-35
- Confidence: 11-89%
- Mixed dimension scores

### 3. Compare with Expected Outcomes
```bash
cat test_projects/ai-prisma-test/EXPECTED_OUTCOMES.txt
```

---

## 📋 Validation Checklist

- [ ] All 6 papers processed without errors
- [ ] **Paper 1** (AI Chatbots): Auto-included with score 40-50
- [ ] **Paper 2** (Cardiovascular): Auto-excluded with score < 5
- [ ] **Papers 3, 4, 6**: Human-review with scores 15-40
- [ ] **Paper 5** (Customer service): Auto-excluded with exclusion penalty
- [ ] No hallucination warnings in output
- [ ] All `evidence_quotes` populated
- [ ] CSV files created in `data/02_screening/`

---

## 🔍 Deep Dive: Understanding the Scores

### Sample Auto-Included Paper

**Title**: AI Chatbots Improve Speaking Proficiency in Second Language Learners: An RCT Study

**Scores**:
```
Domain (0-10):        10  ← Keywords: "second language", "language learners"
Intervention (0-10):  10  ← Keywords: "AI chatbots", "conversational AI"
Method (0-5):          5  ← Keywords: "RCT", "randomized controlled trial"
Outcomes (0-10):      10  ← Keywords: "speaking proficiency", "speaking skills"
Exclusion (-20 to 0):  0  ← No exclusion keywords found
Title Bonus (0/10):   10  ← Domain keywords in title
─────────────────────────
Total Score:          45  ← Auto-include (≥30 AND confidence ≥90%)
Confidence:           95%
Decision:        ✅ auto-include
```

### Sample Auto-Excluded Paper

**Title**: The Role of Physical Exercise in Cardiovascular Health Among Elderly Populations

**Scores**:
```
Domain (0-10):         0  ← No language learning keywords
Intervention (0-10):   0  ← No chatbot keywords
Method (0-5):          5  ← Meta-analysis methodology
Outcomes (0-10):       0  ← No speaking proficiency keywords
Exclusion (-20 to 0): -20 ← "cardiovascular" = hard exclusion
Title Bonus (0/10):    0  ← No domain keywords in title
─────────────────────────
Total Score:         -15  ← Auto-exclude (score < 0)
Confidence:            5%
Decision:        ⛔ auto-exclude
```

### Sample Human-Review Paper

**Title**: Technology-Enhanced Language Teaching: A Survey of Current Practices

**Scores**:
```
Domain (0-10):         8  ← "language" keyword
Intervention (0-10):   0  ← No specific chatbot mention
Method (0-5):          0  ← Survey methodology (not prioritized)
Outcomes (0-10):       0  ← No specific speaking outcomes
Exclusion (-20 to 0):  0  ← No exclusion keywords
Title Bonus (0/10):   10  ← "Language" in title
─────────────────────────
Total Score:          18  ← Human-review (11-89% confidence)
Confidence:           65%
Decision:        ⚠️ human-review
```

---

## 🎯 Understanding Decision Logic

### Auto-Include Rules
```python
if confidence >= 90 AND total_score >= 30:
    decision = "auto-include"
```

**Meaning**: High confidence (≥90%) that paper meets criteria + strong scoring (≥30 points)

### Auto-Exclude Rules
```python
if confidence <= 10 OR total_score < 0:
    decision = "auto-exclude"
```

**Meaning**: Very low confidence (≤10%) OR negative score (exclusion penalty applied)

### Human-Review Rules
```python
else:  # confidence 11-89%
    decision = "human-review"
```

**Meaning**: Medium confidence - AI unsure, requires expert judgment

---

## 🔧 Customizing the Rubric

### Edit Test Config
```bash
nano test_projects/ai-prisma-test/config.yaml
```

### Example Modifications

#### Change Thresholds
```yaml
ai_prisma_rubric:
  decision_confidence:
    auto_include: 95  # More strict (default: 90)
    auto_exclude: 5   # More strict (default: 10)
```

#### Add Keywords
```yaml
ai_prisma_rubric:
  scoring_rubric:
    domain_keywords:
      - keyword: "TESOL"
        weight: 9
      - keyword: "applied linguistics"
        weight: 8
```

#### Add Exclusion Keywords
```yaml
ai_prisma_rubric:
  scoring_rubric:
    exclusion_keywords:
      - keyword: "animal study"
        penalty: -20  # Hard exclusion (instant fail)
      - keyword: "undergraduate"
        penalty: -5   # Soft penalty (reduces score)
```

### Re-run After Changes
```bash
# Delete previous results
rm -rf test_projects/ai-prisma-test/data/02_screening/*

# Re-run screening
python scripts/03_screen_papers.py \
    --project test_projects/ai-prisma-test \
    --question "How do AI chatbots improve speaking proficiency in second language learning?"
```

---

## 📈 Next Steps After Testing

### 1. If Results Match Expectations ✅
```bash
# Proceed to real research project
python scripts/scholarag_cli.py init

# Follow prompts to create config.yaml with your rubric
# Then run full pipeline
```

### 2. If Results Don't Match ❌
```bash
# Tune keyword weights in config.yaml
# Adjust thresholds (90/10 vs 95/5)
# Add/remove keywords
# Re-test until satisfied
```

### 3. For Systematic Reviews (Week 3)
```bash
# After screening, conduct human validation
python scripts/03b_human_review.py --project <path>

# Calculate Cohen's Kappa
python scripts/validate_human_ai_agreement.py \
    --ai-labels <ai_results.csv> \
    --human-labels <human_results.csv>
```

---

## 🐛 Troubleshooting

### Error: "ANTHROPIC_API_KEY not found"
```bash
# Check .env file exists
ls -la /tmp/scholarag/.env

# Or export in terminal
export ANTHROPIC_API_KEY="sk-ant-api03-xxxxx"
```

### Error: "No abstract available for screening"
```bash
# Some test papers might have empty abstracts
# Check CSV file:
cat test_projects/ai-prisma-test/data/01_identification/deduplicated.csv
```

### Hallucination Warning
```
⚠️  WARNING: Hallucination detected in evidence quotes
```

**Meaning**: AI generated a quote not found in original abstract
**Action**: Confidence automatically reduced by 20 points
**Fix**: Review paper manually or improve prompt

### Unexpected Scores
```bash
# Check individual dimension scores in output CSV
cat data/02_screening/all_screened_papers.csv | csvcut -c title,domain_score,intervention_score,total_score

# Review rubric keywords in config.yaml
cat config.yaml | grep -A 20 "scoring_rubric:"
```

---

## 📚 Additional Resources

### Documentation
- `/tmp/scholarag/docs/WEEK2_TASK8_COMPLETION_SUMMARY.md` - Technical implementation details
- `/tmp/WEEK2_PROGRESS_UPDATE.md` - Progress summary
- `/tmp/scholarag/docs/AI_PRISMA_IMPLEMENTATION_PLAN.md` - Original implementation plan
- `/tmp/scholarag/docs/VALIDATION_PROTOCOL.md` - Human-AI collaboration protocol

### Sample Configs
- `/tmp/scholarag/test_projects/ai-prisma-test/config.yaml` - Test rubric
- `/tmp/scholarag/config_template.yaml` - Production template

---

## 💡 Pro Tips

### 1. Start with Lenient Thresholds
```yaml
decision_confidence:
  auto_include: 70  # Lenient
  auto_exclude: 30  # Lenient
```

**Why**: Get more papers into human-review queue initially, then tune rubric based on patterns

### 2. Use Title Bonus Strategically
```yaml
# Title bonus awards +10 if domain keywords appear in title
# This is because titles are higher-signal than abstracts
```

**Example**: "AI Chatbots for **Language Learning**" gets +10 bonus

### 3. Hard vs Soft Exclusions
```yaml
exclusion_keywords:
  - keyword: "animal study"
    penalty: -20  # Hard exclusion (guarantees failure)
  - keyword: "secondary school"
    penalty: -5   # Soft penalty (reduces score but not fatal)
```

### 4. Monitor Score Distribution
```bash
# Check mean/median scores
cat data/02_screening/all_screened_papers.csv | csvstat -c total_score

# If mean is too high/low, adjust keyword weights
```

---

**Ready to test? Run the Quick Test section above! 🚀**
