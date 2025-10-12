# ResearcherRAG Helper - Design System

## Design Philosophy

ResearcherRAG Helper follows a **monochrome, minimal, Geist-inspired** design philosophy. The interface prioritizes clarity, readability, and professional aesthetics suitable for academic researchers.

### Core Principles

1. **Monochrome First**: Use black, white, and grays as primary colors
2. **Minimal Visual Noise**: Let content breathe with generous whitespace
3. **Typography-Driven**: Large, bold headlines with clear hierarchy
4. **Subtle Interactions**: Hover states and transitions, not flashy animations
5. **Academic Professionalism**: Clean, trustworthy, research-appropriate

---

## Color Palette

### Primary Colors (Monochrome)
```
Background:     #FFFFFF (light) / #000000 (dark)
Foreground:     #000000 (light) / #FFFFFF (dark)
Muted:          #666666 / #999999
Border:         #E5E5E5 (light) / #333333 (dark)
Border Strong:  #D4D4D4 (light) / #444444 (dark)
```

### Accent Usage (Minimal)
```
Blue (links):   #0066CC (use sparingly, only for links)
Success:        #000000 with ✓ symbol (NOT green backgrounds)
Warning:        #000000 with ⚠️ symbol (NOT yellow backgrounds)
Error:          #000000 with ✗ symbol (NOT red backgrounds)
```

### ❌ Colors to AVOID
```
Red backgrounds (#FF0000, #FEE)
Green backgrounds (#00FF00, #EFE)
Yellow backgrounds (#FFFF00, #FFE)
Orange backgrounds (#FFA500, #FED)
Purple backgrounds (#800080, #F0E)
```

**Why?** These create visual noise and clash with our monochrome aesthetic. Use symbols (✓✗⚠️) and borders instead.

---

## Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
             "Roboto", "Oxygen", "Ubuntu", "Cantarell",
             "Helvetica Neue", sans-serif;
```

### Hierarchy
```
Hero Headline:    clamp(3rem, 8vw, 5.5rem) / font-bold / tracking-tighter
Page Title (h1):  2.5rem (40px) / font-bold / tracking-tight
Section (h2):     2rem (32px) / font-bold
Subsection (h3):  1.5rem (24px) / font-semibold
Body:             1rem (16px) / font-normal
Small:            0.875rem (14px) / text-muted-foreground
```

---

## Component Patterns

### Code Blocks

**✅ CORRECT (Chapter 1 style - Black background)**
```tsx
<pre className="bg-black text-white p-4 rounded-md text-sm">
  <code>{`python interfaces/claude_code_interface.py`}</code>
</pre>
```

**❌ INCORRECT (Colored backgrounds)**
```tsx
<pre className="bg-muted p-4">  // Too light, low contrast
<pre className="bg-red-50">      // Colored, breaks monochrome
```

### Example Boxes

**✅ CORRECT (Monochrome with border)**
```tsx
<div className="border-l-4 border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-900 p-4">
  <p className="font-semibold mb-2">Example Session Flow:</p>
  <div className="space-y-2 text-sm">
    <p><strong>Q1:</strong> "How many papers?"</p>
    <p><strong>Q2:</strong> "What are the themes?"</p>
  </div>
</div>
```

**❌ INCORRECT (Colored backgrounds)**
```tsx
<div className="bg-blue-50">       // Colored
<div className="bg-green-100">     // Colored
<div className="bg-yellow-50">     // Colored
```

### Callout Boxes

**✅ CORRECT (Monochrome with symbols)**
```tsx
// Success
<div className="border border-gray-300 rounded-lg p-4 bg-white">
  <p className="font-semibold mb-2">✅ Success</p>
  <p className="text-sm">Content here</p>
</div>

// Warning
<div className="border border-gray-400 rounded-lg p-4 bg-gray-50">
  <p className="font-semibold mb-2">⚠️ Warning</p>
  <p className="text-sm">Content here</p>
</div>

// Error
<div className="border border-gray-600 rounded-lg p-4 bg-gray-100">
  <p className="font-semibold mb-2">❌ Error</p>
  <p className="text-sm">Content here</p>
</div>
```

**❌ INCORRECT (Colored backgrounds)**
```tsx
<div className="bg-green-50 text-green-800">   // Colored
<div className="bg-yellow-50 text-yellow-800"> // Colored
<div className="bg-red-50 text-red-800">       // Colored
```

### Comparison Tables

**✅ CORRECT (Neutral with semantic boldness)**
```tsx
<table>
  <tr>
    <td className="p-3">General knowledge</td>
    <td className="p-3 font-bold">YOUR Vector Database</td>
  </tr>
</table>
```

**❌ INCORRECT (Green/red text)**
```tsx
<td className="text-green-600">  // Colored text
<td className="text-red-600">    // Colored text
```

### Buttons

**✅ CORRECT (Monochrome variants)**
```tsx
// Primary
<button className="bg-foreground text-background hover:bg-gray-800">

// Secondary
<button className="border border-border hover:border-border-strong">

// Ghost
<button className="text-muted hover:text-foreground">
```

---

## Layout Principles

### Spacing Scale
```
xs:  0.25rem  (4px)
sm:  0.5rem   (8px)
md:  1rem     (16px)
lg:  1.5rem   (24px)
xl:  2rem     (32px)
2xl: 3rem     (48px)
3xl: 4rem     (64px)
```

### Container Widths
```
Content:     max-w-4xl  (896px)
Wide:        max-w-5xl  (1024px)
Full-width:  max-w-7xl  (1280px)
```

### Borders
```
Default:  1px solid border-color
Strong:   2px solid border-color
Accent:   4px solid (left border for emphasis)
```

---

## Interaction Patterns

### Hover States
```tsx
// Links
hover:text-foreground transition-colors

// Buttons
hover:bg-gray-800 transition-colors

// Cards
hover:border-border-strong transition-all
```

### Focus States
```tsx
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
```

### Transitions
```css
transition-colors: 150ms ease
transition-all: 200ms ease
```

---

## Examples: Before & After

### ❌ BEFORE (Colorful, busy)
```tsx
<div className="bg-red-50 border border-red-300 rounded-lg p-4">
  <p className="text-red-800 font-semibold">Error: Something went wrong</p>
</div>

<div className="bg-green-50 border border-green-300 rounded-lg p-4">
  <p className="text-green-800 font-semibold">Success: Task completed</p>
</div>
```

### ✅ AFTER (Monochrome, clean)
```tsx
<div className="border-2 border-gray-900 rounded-lg p-4 bg-white">
  <p className="font-semibold">❌ Error: Something went wrong</p>
</div>

<div className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50">
  <p className="font-semibold">✅ Success: Task completed</p>
</div>
```

---

## File Structure

```
frontend/
├── DESIGN.md                    # This file - design system documentation
├── app/
│   ├── globals.css             # Tailwind + custom CSS variables
│   └── page.tsx                # Homepage (design reference)
├── components/
│   ├── GuideLayout.tsx         # Layout with monochrome nav
│   └── ui/                     # Reusable UI components
└── tailwind.config.js          # Design tokens
```

---

## Implementation Checklist

When creating new UI components, verify:

- [ ] Uses only black, white, gray colors
- [ ] Code blocks have black background with white text
- [ ] Example boxes use borders, not colored backgrounds
- [ ] Callouts use symbols (✓✗⚠️), not colors
- [ ] Tables use bold text for emphasis, not green/red
- [ ] Buttons follow monochrome variants
- [ ] Hover states are subtle (not flashy)
- [ ] Typography follows hierarchy
- [ ] Spacing is consistent with scale
- [ ] Looks professional and academic

---

## Maintenance

**When adding new features:**
1. Check this DESIGN.md first
2. Match existing component patterns
3. Use monochrome palette only
4. Test in both light/dark modes
5. Ensure accessibility (WCAG AA)

**When updating designs:**
1. Update this DESIGN.md
2. Apply changes consistently across all pages
3. Document rationale in commit message

---

## References

- [Geist Design System](https://vercel.com/geist/introduction) - Inspiration
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) - Scale
- [Inter Font](https://rsms.me/inter/) - Modern, neutral typeface
- [Monochrome UI Patterns](https://www.supremo.co.uk/typeterms/monochrome/) - Theory

---

**Last Updated:** 2025-01-11
**Maintained by:** ResearcherRAG Team
