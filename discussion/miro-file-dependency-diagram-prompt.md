# MIRO Prompt: ScholaRAG File Dependency Map (Version 2 - Enhanced)

## ⚠️ IMPORTANT: This is a DATA PIPELINE diagram, not an access control diagram

**ScholaRAG vs Claude Code - Key Difference:**

| Claude Code Sandboxing | ScholaRAG Pipeline |
|------------------------|-------------------|
| Access control system | Data processing pipeline |
| Allow/Deny decisions | Sequential transformations |
| Security boundaries | Data flow stages |
| File permission checks | File creation and processing |
| Interactive prompts | Automated execution |

**ScholaRAG Behavior:**
- Files FLOW THROUGH stages (not blocked/allowed)
- `config.yaml` CONFIGURES behavior (not controls access)
- Scripts READ config to determine branching logic
- Data TRANSFORMS at each stage (CSV → Screening → PDF → Embeddings)
- No user prompts during execution (fully automated after setup)

**Visual Implication:**
- Use **solid arrows** for data flow (not dashed allow/deny lines)
- Show **transformations** (e.g., "Papers CSV" → "Relevant Papers")
- Highlight **config.yaml as central hub** (not a gatekeeper)
- Emphasize **sequential pipeline** (top-to-bottom or left-to-right flow)

## Diagram Request

Create a professional software architecture diagram showing the file dependency flow for ScholaRAG with:
- **Grouped sections with colored background boxes**
- **Clear visual hierarchy** with distinct layers
- **Vertical flow within horizontal progression** (some components stack vertically)
- **Color-coded boxes** with matching borders
- **Critical decision points** highlighted in red

## CRITICAL: Color & Grouping Instructions

**You MUST apply these colors as BOTH background fill AND border colors:**

### Layer 1: User & Conversation (Top Row)
**Background Box**: Very Light Yellow (#FFF9E6) with Yellow Border (#F59E0B, 3px dashed)
- Contains: User, Stage 1-3 prompts, scholarag_cli.py, config_base.yaml

### Layer 2: Configuration Hub (Middle - HIGHLIGHTED)
**Background Box**: Light Green (#E8F5E9) with Green Border (#2E7D32, 4px solid) + Shadow
- Contains: **config.yaml** (this box should have double border or glow effect)
- Text: "Single Source of Truth" below config.yaml

### Layer 3: Execution Pipeline (Vertical Stack on Right)
**Background Box**: Light Purple (#F3E5F5) with Purple Border (#6A1B9A, 3px solid)
- Contains: All 7 scripts in VERTICAL arrangement (01_fetch through 07_generate)
- Text: "🔧 Automated Processing" at top of this section

### Layer 4: Data Storage (Far Right)
**Background Box**: Light Gray (#F5F5F5) with Gray Border (#757575, 2px solid)
- Contains: All data/ folders and outputs/ folder
- Arranged vertically to match corresponding scripts

## Individual Component Colors (For boxes within grouped sections)

1. **User/Interface** (Light Blue - #E1F5FF border #01579B):
   - User via Claude Code
   - User receiving results

2. **Conversation Prompts** (Light Yellow - #FFF9C4 border #F57F17):
   - Stage 1: 01_research_domain_setup.md
   - Stage 2: 02_query_strategy.md
   - Stage 3: 03_prisma_configuration.md
   - Template: config_base.yaml

3. **Configuration Components** (Light Green - #C8E6C9 border #2E7D32):
   - scholarag_cli.py (Orchestrator)
   - **config.yaml** (Central Hub - with thicker border/highlight)

4. **Execution Scripts** (Light Purple - #E1BEE7 border #6A1B9A):
   - 01_fetch_papers.py
   - 02_deduplicate.py
   - 04_download_pdfs.py
   - 05_build_rag.py
   - 06_query_rag.py

5. **Critical Branching Points** (Light Red - #FFCDD2 border #C62828):
   - 03_screen_papers.py (reads project_type)
   - 07_generate_prisma.py (reads project_type)

6. **Data Storage** (Light Gray - #E0E0E0 border #424242):
   - data/01_identification/*.csv
   - data/02_screening/relevant.csv
   - data/pdfs/*.pdf
   - data/chroma/ (Vector DB)
   - outputs/prisma_diagram.png

## Visual Layout Mockup

The diagram should have this overall structure:

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Layer 1: User & Conversation (Light Yellow Background)       ┃
┃ ┌──────┐ → ┌─────────┐ → ┌──────────┐ → ┌─────────┐       ┃
┃ │ User │   │ Stage 1 │   │ CLI.py   │   │ config  │       ┃
┃ └──────┘   └─────────┘   └──────────┘   └─────────┘       ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                                    ↓
              ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
              ┃ Layer 2: Configuration Hub      ┃
              ┃ (Light Green Background)        ┃
              ┃    ┌─────────────────┐          ┃
              ┃    │  config.yaml ⭐ │          ┃
              ┃    │ (highlighted)   │          ┃
              ┃    └─────────────────┘          ┃
              ┃  "Single Source of Truth"       ┃
              ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                           ↓
       ┏━━━━━━━━━━━━━━━━━━━━━━━━━┓    ┏━━━━━━━━━━━━━━━━━━━┓
       ┃ Layer 3: Execution      ┃ → ┃ Layer 4: Storage  ┃
       ┃ (Light Purple)          ┃    ┃ (Light Gray)      ┃
       ┃ ┌─────────────────────┐ ┃    ┃ ┌───────────────┐ ┃
       ┃ │ 01_fetch_papers.py  │─┼───→┃ │ data/01_...   │ ┃
       ┃ └─────────────────────┘ ┃    ┃ └───────────────┘ ┃
       ┃          ↓              ┃    ┃        ↓          ┃
       ┃ ┌─────────────────────┐ ┃    ┃                   ┃
       ┃ │ 02_deduplicate.py   │ ┃    ┃                   ┃
       ┃ └─────────────────────┘ ┃    ┃                   ┃
       ┃          ↓              ┃    ┃                   ┃
       ┃ ┌─────────────────────┐ ┃    ┃ ┌───────────────┐ ┃
       ┃ │ 03_screen_papers ⚠️ │─┼───→┃ │ data/02_...   │ ┃
       ┃ └─────────────────────┘ ┃    ┃ └───────────────┘ ┃
       ┃   (continues...)        ┃    ┃   (continues...)  ┃
       ┗━━━━━━━━━━━━━━━━━━━━━━━━━┛    ┗━━━━━━━━━━━━━━━━━━━┛
```

**Key Visual Requirements**:
- Each layer MUST have a large background box with colored fill
- Background boxes should have rounded corners (12px radius)
- Component boxes sit INSIDE the background boxes
- Use drop shadows on background boxes for depth
- Vertical arrangement within Layer 3 (scripts stack top to bottom)
- Horizontal progression (left to right): Setup → Config → Execution → Storage

## Diagram Flow Structure

### Row 1: Initial Setup Flow
```
[👤 User] --1. Start project--> [📝 Stage 1: 01_research_domain_setup.md]
  --2. Initialize--> [⚙️ scholarag_cli.py]
  --3. Copy template--> [📄 config_base.yaml]
  --4. Create--> [🎯 config.yaml ⭐]
```

### Row 2: Configuration Updates
```
[📝 Stage 2: 02_query_strategy.md] --5. Add search query--> [config.yaml]
[📝 Stage 3: 03_prisma_configuration.md] --6. Add PRISMA rules--> [config.yaml]
```

### Divider Line
```
═══════════════════════════════════════════════════════
        🔧 Execution Pipeline (Automated)
═══════════════════════════════════════════════════════
```

### Row 3-4: Main Execution Pipeline
```
[📥 01_fetch_papers.py] --Papers CSV--> [💾 data/01_identification/]
  ---> [🔄 02_deduplicate.py]
  --Deduplicated-->
  [✅ 03_screen_papers.py ⚠️]
```

**Critical Connection** (shown with red dashed line):
```
[config.yaml] -.-.project_type (branching).-.> [03_screen_papers.py]
```

### Row 5-10: Continued Pipeline
```
[03_screen_papers.py] --Relevant papers--> [💾 data/02_screening/]
  ---> [📄 04_download_pdfs.py]
  --PDFs--> [💾 data/pdfs/]
  ---> [🗄️ 05_build_rag.py]
  --Embeddings--> [💾 data/chroma/ (Vector DB)]
  ---> [💬 06_query_rag.py]
  --Answers + Citations--> [👤 User]
```

### Parallel Branch: PRISMA Generation
```
[All data folders] ---> [📊 07_generate_prisma.py ⚠️] ---> [💾 outputs/prisma_diagram.png]
```

**Critical Connection** (shown with red dashed line):
```
[config.yaml] -.-.project_type (changes title).-.> [07_generate_prisma.py]
```

## Box Design Specifications

### Standard Box
- **Size**: 200px wide × 80px tall
- **Border**: 2px solid (color depends on type)
- **Border Radius**: 8px rounded corners
- **Padding**: 12px inside
- **Font**:
  - Main label: Bold, 14px
  - Sublabel: Regular, 11px, gray
- **Shadow**: Subtle drop shadow (2px offset, 4px blur)

### Highlighted Box (config.yaml)
- **Size**: 280px wide × 80px tall
- **Border**: 4px solid #2E7D32
- **Additional**: Glowing effect or double border

### Critical Box (project_type branching)
- **Border**: 3px solid #C62828
- **Badge**: Small "⚠️ CRITICAL" label in corner

## Arrow Design

### Standard Arrow
- **Line**: 2px solid #666666
- **Style**: Solid line with arrowhead
- **Label**: Small text above/beside arrow describing data flow
- **Example**: "Papers CSV", "PDFs", "Embeddings"

### Numbered Arrow (Steps 1-6)
- **Label**: Circle with number + description
- **Example**: "① Start project", "② Initialize"

### Critical Connection (Dashed)
- **Line**: 2px dashed #C62828 (red)
- **Style**: Dashed line with arrowhead
- **Label**: "project_type: branching" or "project_type: changes title"

## Special Elements

### Section Divider
- Horizontal dashed line across diagram
- Text centered: "🔧 Execution Pipeline (Automated)"
- Gray color (#CCCCCC)

### Legend (Bottom of Diagram)
Small boxes showing each color type with label:
- [Blue box] User Interaction
- [Yellow box] Conversation Prompts
- [Green box] Configuration Hub
- [Purple box] Execution Scripts
- [Red box] Critical Branching
- [Gray box] Data Storage

## Key Points to Emphasize

1. **config.yaml as Central Hub**: Make it stand out as the most important file
2. **Critical Branching**: Red dashed lines showing project_type connections
3. **Clear Data Flow**: Label every arrow with what data passes through
4. **Logical Layers**: Group related components vertically
5. **Professional Appearance**: Clean, publication-ready quality

## Reference Image Style

The diagram should look similar to:
- Claude Code Sandboxing diagram (clean boxes, clear arrows, professional colors)
- Software architecture diagrams in technical documentation
- AWS/Google Cloud architecture diagrams (clean and modern)

## Output Format

- **File Format**: High-resolution PNG (at least 2000px wide)
- **Background**: White or light gray
- **Export**: Suitable for embedding in documentation websites

---

## MIRO-Specific Instructions

### Step 1: Create Background Layer Boxes FIRST

Before adding any component boxes, create 4 large background rectangles:

1. **Layer 1 Background**:
   - Size: ~1200px wide × 200px tall
   - Fill: Very Light Yellow (#FFF9E6)
   - Border: 3px dashed #F59E0B
   - Label in corner: "Layer 1: User & Conversation"

2. **Layer 2 Background**:
   - Size: ~400px wide × 180px tall
   - Fill: Light Green (#E8F5E9)
   - Border: 4px solid #2E7D32
   - Add drop shadow
   - Label in corner: "Layer 2: Configuration Hub"

3. **Layer 3 Background**:
   - Size: ~300px wide × 800px tall (VERTICAL!)
   - Fill: Light Purple (#F3E5F5)
   - Border: 3px solid #6A1B9A
   - Label at top: "🔧 Execution Pipeline"

4. **Layer 4 Background**:
   - Size: ~300px wide × 800px tall (VERTICAL!)
   - Fill: Light Gray (#F5F5F5)
   - Border: 2px solid #757575
   - Label at top: "Data Storage"

### Step 2: Add Component Boxes INSIDE Background Boxes

Only after creating background layers, add individual component boxes with their own colors.

### Step 3: Connect with Arrows

Add arrows BETWEEN components, crossing background layer boundaries where needed.

### Common MIRO Mistakes to Avoid

❌ **DON'T**: Create only individual boxes without grouping backgrounds
❌ **DON'T**: Use default MIRO colors instead of specified hex codes
❌ **DON'T**: Make all boxes the same size
❌ **DON'T**: Arrange everything horizontally

✅ **DO**: Create large background sections first
✅ **DO**: Use exact hex color codes for fills AND borders
✅ **DO**: Stack Layer 3 components vertically
✅ **DO**: Make config.yaml box larger and more prominent
✅ **DO**: Use different border styles (solid/dashed) as specified

---

## Example of One Complete Flow Path

```
User → Stage 1 Prompt → scholarag_cli.py → config_base.yaml → config.yaml
                                                                    ↓
                                                    (project_type setting)
                                                                    ↓
scholarag_cli.py → 01_fetch_papers.py → data/01_identification/ →
02_deduplicate.py → 03_screen_papers.py [reads project_type ⚠️] →
data/02_screening/ → 04_download_pdfs.py → data/pdfs/ →
05_build_rag.py → data/chroma/ → 06_query_rag.py → User (Results)

Parallel:
All data folders → 07_generate_prisma.py [reads project_type ⚠️] → outputs/
```

This should create a clear, professional File Dependency Map that matches the Claude Code design style!
