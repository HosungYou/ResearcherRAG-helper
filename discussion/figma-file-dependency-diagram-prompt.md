# Figma AI Prompt: ScholaRAG File Dependency Map

## Overview
Create a data pipeline architecture diagram showing how files flow through the ScholaRAG system. This is a **sequential data processing pipeline** (like AWS data flow diagrams), NOT an access control system.

---

## Canvas Setup

**Canvas Size**: 1600px wide × 1200px tall
**Background**: White (#FFFFFF)
**Grid**: 8px grid for alignment

---

## Visual Structure (4 Layers from Top to Bottom)

### LAYER 1: User & Conversation Setup (Top Section)
**Position**: Top of canvas
**Background**: Large rounded rectangle (1400px × 180px)
- Fill: Light yellow (#FFF9E6)
- Border: 3px dashed orange (#F59E0B)
- Corner radius: 12px
- Title in top-left: "🎯 Layer 1: User & Conversation"

**Components inside (arrange horizontally, left to right):**
1. User box (160px × 60px, light blue #E1F5FF, border #01579B)
2. Stage 1 box (150px × 60px, pale yellow #FFF9C4, border #F57F17)
3. Stage 2 box (150px × 60px, pale yellow #FFF9C4, border #F57F17)
4. Stage 3 box (150px × 60px, pale yellow #FFF9C4, border #F57F17)
5. CLI box (160px × 60px, light green #C8E6C9, border #2E7D32)
6. Config base box (160px × 60px, pale yellow #FFF9C4, border #F57F17)

**Arrows**: Connect left to right with solid black arrows, numbered labels (1, 2, 3, 4, 5, 6)

---

### LAYER 2: Configuration Hub (Middle Section)
**Position**: Center of canvas, below Layer 1
**Background**: Rounded rectangle (400px × 160px)
- Fill: Light green (#E8F5E9)
- Border: 4px solid dark green (#2E7D32)
- Corner radius: 12px
- Drop shadow (blur 8px, opacity 20%)
- Title in top-left: "⭐ Layer 2: Configuration Hub"

**Component inside (centered):**
1. config.yaml box (280px × 80px)
   - Fill: Medium green (#A5D6A7)
   - Border: 4px solid dark green (#2E7D32)
   - Corner radius: 10px
   - Drop shadow (blur 12px, opacity 30%)
   - Text: "config.yaml" (bold, 16px)
   - Subtext: "Single Source of Truth" (regular, 12px)

**Arrow from Layer 1**: Thick arrow pointing down from Layer 1 to config.yaml

---

### LAYER 3 & 4: Side-by-Side Execution & Storage (Bottom Section)

#### LAYER 3: Execution Pipeline (Left Side)
**Position**: Bottom-left
**Background**: Rounded rectangle (450px × 700px)
- Fill: Light purple (#F3E5F5)
- Border: 3px solid purple (#6A1B9A)
- Corner radius: 12px
- Title at top: "🔧 Layer 3: Execution Pipeline"

**Components inside (stacked vertically, 20px spacing):**
1. 01_fetch_papers.py (200px × 70px, purple #E1BEE7, border #6A1B9A)
2. 02_deduplicate.py (200px × 70px, purple #E1BEE7, border #6A1B9A)
3. 03_screen_papers.py (200px × 80px, light red #FFCDD2, border #C62828, bold text)
   - Add small badge: "⚠️ CRITICAL"
4. 04_download_pdfs.py (200px × 70px, purple #E1BEE7, border #6A1B9A)
5. 05_build_rag.py (200px × 70px, purple #E1BEE7, border #6A1B9A)
6. 06_query_rag.py (200px × 70px, purple #E1BEE7, border #6A1B9A)
7. 07_generate_prisma.py (200px × 80px, light red #FFCDD2, border #C62828, bold text)
   - Add small badge: "⚠️ CRITICAL"

**Arrows**: Vertical arrows connecting each script (top to bottom)

#### LAYER 4: Data Storage (Right Side)
**Position**: Bottom-right, aligned with Layer 3
**Background**: Rounded rectangle (450px × 700px)
- Fill: Light gray (#F5F5F5)
- Border: 2px solid gray (#757575)
- Corner radius: 12px
- Title at top: "💾 Layer 4: Data Storage"

**Components inside (stacked vertically, aligned with Layer 3 scripts):**
1. data/01_identification/ (200px × 70px, gray #E0E0E0, border #424242)
2. (empty space to align with 02_deduplicate)
3. data/02_screening/ (200px × 70px, gray #E0E0E0, border #424242)
4. data/pdfs/ (200px × 70px, gray #E0E0E0, border #424242)
5. data/chroma/ (200px × 70px, gray #E0E0E0, border #424242)
6. (empty space to align with 06_query)
7. outputs/prisma_diagram.png (200px × 70px, gray #E0E0E0, border #424242)

**Arrows**: Horizontal arrows connecting scripts to data (left to right), with labels like "writes", "reads"

---

## Critical Connections (Red Dashed Arrows)

**From config.yaml to critical scripts:**
1. Thick red dashed arrow (3px, #C62828) from config.yaml to 03_screen_papers.py
   - Label: "project_type: 50% vs 90%"

2. Thick red dashed arrow (3px, #C62828) from config.yaml to 07_generate_prisma.py
   - Label: "project_type: title"

---

## Arrow Specifications

### Standard Arrows (Main Flow)
- Width: 2px
- Color: Dark gray (#666666)
- Style: Solid line with arrowhead
- Labels: 11px regular text, positioned above arrow

### Data Exchange Arrows (Script ↔ Storage)
- Width: 2px
- Color: Medium gray (#999999)
- Style: Solid line with arrowhead
- Labels: Small text (10px) like "writes CSV", "reads PDFs"

### Critical Branching Arrows
- Width: 3px
- Color: Red (#C62828)
- Style: Dashed line (5px dash, 5px gap) with arrowhead
- Labels: Bold red text (11px)

---

## Typography

**Layer Titles**:
- Font: Inter Bold
- Size: 14px
- Color: Dark gray (#333333)

**Box Labels**:
- Main text: Inter Semi-Bold, 12px, black (#000000)
- Subtext: Inter Regular, 10px, gray (#666666)

**Arrow Labels**:
- Inter Regular, 10px-11px, dark gray (#555555)

---

## Legend (Bottom-Right Corner)

Create a small legend box (300px × 180px):
- Background: White with light gray border
- Title: "Legend" (bold, 12px)

**Color swatches (20px × 20px squares with labels):**
- Light blue: "User Interaction"
- Pale yellow: "Conversation Prompts"
- Light green: "Configuration"
- Light purple: "Execution Scripts"
- Light red: "Critical Branching"
- Light gray: "Data Storage"

**Arrow examples:**
- Solid black: "Main Flow"
- Red dashed: "Critical Branching (project_type)"

---

## Component Details (Text Inside Boxes)

### User Box
```
👤 User
via Claude Code
```

### Stage Boxes
```
📝 Stage 1
Research Setup
```

### Script Boxes (Example)
```
📥 01_fetch_papers.py
Query APIs
```

### Critical Script Boxes (Example)
```
⚠️ 03_screen_papers.py
AI Relevance Check
CRITICAL: project_type
```

### Data Boxes (Example)
```
💾 data/01_identification/
Raw Papers CSV
```

### Config.yaml (Highlighted)
```
⭐ config.yaml
Single Source of Truth
Controls: project_type, queries, PRISMA rules
```

---

## Design Principles

1. **Hierarchy**: Larger background boxes (layers) contain smaller component boxes
2. **Spacing**: 20px minimum between components, 40px between layers
3. **Alignment**: All boxes align to 8px grid
4. **Shadows**: Only on Layer 2 (config.yaml) for emphasis
5. **Colors**: Consistent with specified hex codes
6. **Flow**: Top-to-bottom and left-to-right reading order

---

## Example Positioning (Approximate Coordinates)

```
Layer 1: x=100, y=50, width=1400, height=180

config.yaml (Layer 2): x=600, y=280, width=400, height=160

Layer 3: x=100, y=500, width=450, height=700
Layer 4: x=600, y=500, width=450, height=700

Legend: x=1100, y=1000, width=300, height=180
```

---

## Final Output

- Export as PNG at 2× resolution (3200px × 2400px)
- Ensure all text is crisp and readable
- Colors exactly match specified hex codes
- All arrows have proper arrowheads
- Drop shadows only where specified

This diagram should look like a professional AWS architecture diagram: clean, clear, and easy to follow the data flow from user input through configuration to automated execution and storage.
