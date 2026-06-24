# THE POSTMORTEM — ARTICLE DESIGN SYSTEM
## Complete Style Guide & Technical Specifications

**Version:** 1.0  
**Last Updated:** June 24, 2026  
**Status:** Master Template for All Articles  
**Platform:** thepostmortems.in

---

## OVERVIEW

All articles on The Postmortem must be formatted as if they were **chapters in a published, professionally-designed book**. This is not a blog. This is journalism formatted for long-form investigation reading. Every article follows this system.

---

## PART 1: TYPOGRAPHY & FONTS

### Primary Font Stack
```
Font Family: Georgia, Garamond, 'Times New Roman', serif
Fallback: serif
Weight: Regular (400) for body, Bold (700) for headers
```

**Why Georgia/Garamond?** Classical, book-like, professional, readable on screen and print.

### Font Sizes

| Element | Size | Line Height | Letter Spacing |
|---------|------|-------------|-----------------|
| **Body Text** | 18px | 1.8 | 0.5px |
| **Section Headers (## level)** | 32px | 1.3 | 0.8px |
| **Part Headers (e.g., PART 1)** | 28px | 1.4 | 1.2px (uppercase) |
| **Subheaders (### level)** | 24px | 1.4 | 0.6px |
| **Quotes (blockquote)** | 20px | 1.9 | 0.3px italic |
| **Meta/Byline text** | 14px | 1.5 | 0.4px |
| **Captions** | 16px | 1.6 | 0.3px |

### Font Weights
- **Headers:** 700 (Bold)
- **Body:** 400 (Regular)
- **Emphasis within text:** 600 (Semibold) — use sparingly
- **Quotes:** 400 Italic

---

## PART 2: TEXT ALIGNMENT & SPACING

### Body Text Alignment
- **Desktop (>768px):** Full justified (`text-align: justify`)
- **Mobile (<768px):** Left-aligned (`text-align: left`)
- **Mobile line-height:** 1.7 (slightly tighter than desktop)

### Paragraph Spacing
```
Margin-bottom: 1.5em (between paragraphs)
Margin-top: 0 (no top margin — rely on bottom spacing)
First paragraph after heading: 0.5em top margin
```

### Letter Spacing (Kerning)
- Body text: 0.5px
- Headers: 0.8–1.2px (increase with header size)
- Justified text: Auto-adjust word spacing; no manual hyphens

---

## PART 3: DROP CAPS (OPENING PARAGRAPH STYLING)

### Drop Cap Implementation
The **first paragraph of each major section** must begin with a **large drop capital**.

```css
.drop-cap {
  float: left;
  font-size: 120px;
  font-weight: 700;
  line-height: 80px;
  padding-right: 12px;
  margin-top: 3px;
  margin-bottom: -20px;
  font-family: Georgia, serif;
  color: #ffffff; /* or per-section color */
}
```

### Rules
- Drop cap letter height: ~4 lines of body text
- Letter should be first character only (e.g., "O", "T", "A")
- Rest of opening paragraph flows around it
- Drop cap applies only to:
  - Opening paragraph of article (The Opening Cut section)
  - Opening paragraph of each MAJOR section (PART 1, PART 2, etc.)

### Visual Reference
Use the provided `dropcap1.png` as design reference for placement and sizing.

---

## PART 4: HEADERS & SECTION BREAKS

### Header Hierarchy

#### Investigation Metadata (Top of Page)
```
Font: 14px, letter-spacing: 2px, color: #999999
Format: INVESTIGATION [CODE] (centered, all caps)
Example: INVESTIGATION WB-SSC-2016-SCAM-001
Margin-bottom: 2em
```

#### Main Title
```
Font: 48px bold, serif
Line-height: 1.2
Letter-spacing: 1.2px
Margin-bottom: 0.5em
Margin-top: 2em
Text alignment: Center (desktop), Left (mobile)
```

#### Subtitle/Excerpt
```
Font: 18px italic, color: #aaaaaa
Line-height: 1.7
Margin-bottom: 2em
Max-width: 90%
```

#### Date & Status Badge
```
Date font: 14px, color: #666666
Status badge: 12px bold, all caps, color: #00FF00 (or #FF0000)
Format: "24 JUNE 2026 | VERIFIED"
Margin-bottom: 2em
```

#### Part Headers (PART 1, PART 2, etc.)
```
Font: 28px bold, all uppercase, letter-spacing: 1.2px
Color: #ffffff
Margin-top: 3em
Margin-bottom: 1.5em
Format: PART [NUMBER] — [TITLE IN CAPS]
Example: PART 1: THE SETUP — WHAT IS THE WBSSC?
```

#### Section Subheaders (## markdown level)
```
Font: 32px bold, title case
Letter-spacing: 0.8px
Margin-top: 2.5em
Margin-bottom: 1.2em
Color: #ffffff
```

#### Subsection Headers (### markdown level)
```
Font: 24px bold, title case
Letter-spacing: 0.6px
Margin-top: 2em
Margin-bottom: 0.8em
Color: #ffffff
```

#### Minor Headers (#### markdown level)
```
Font: 20px bold, title case
Letter-spacing: 0.4px
Margin-top: 1.5em
Margin-bottom: 0.6em
Color: #ffffff
```

---

## PART 5: SPACING & MARGINS (WHITE SPACE)

### Container/Page Margins
```
Desktop (>1024px):
  Left/Right: 15% (page margin)
  Top: 4em
  Bottom: 4em
  Max-width: 900px

Tablet (768px–1024px):
  Left/Right: 10%
  Top: 3em
  Bottom: 3em

Mobile (<768px):
  Left/Right: 20px
  Top: 2em
  Bottom: 2em
```

### Between Major Sections
- **After a Part header:** 1.5em before first paragraph
- **Between parts:** 3em (visual break space)

### Between Subsections
- **After subheader:** 1em
- **After subsection content:** 1.5em

### Paragraph Spacing
- **Between paragraphs:** 1.5em
- **After lists:** 1.5em
- **After tables:** 2em

---

## PART 6: QUOTATIONS & BLOCKQUOTES

### Standalone Blockquote (Quote from source/interview)
```css
blockquote {
  font-size: 20px;
  font-style: italic;
  color: #cccccc;
  border-left: 4px solid #FF0000;
  padding-left: 2em;
  margin-left: 0;
  margin-right: 0;
  margin-top: 2em;
  margin-bottom: 2em;
  line-height: 1.9;
}
```

**Format:**
```
> "Direct quote text here."
> — Attribution (Name, Title, Organization)
```

### Inline Quotes (Within paragraph)
- Wrapped in standard quotation marks
- Italicized
- No separate block styling
- Example: *"The entire selection process has been vitiated and tainted beyond resolution."* — Supreme Court of India

### Opening Quote (After subtitle)
```
Font: 20px italic
Color: #999999
Line-height: 1.8
Margin: 2em 0
Format: Centered, wrapped in > markdown
```

---

## PART 7: LISTS & BULLET POINTS

### Unordered Lists (Bullet Points)
```css
ul {
  margin-left: 2em;
  margin-bottom: 1.5em;
  list-style-type: disc;
}

li {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 0.8em;
  padding-left: 1em;
}
```

### Ordered Lists (Numbered)
```css
ol {
  margin-left: 2em;
  margin-bottom: 1.5em;
  list-style-type: decimal;
}

li {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 0.8em;
  padding-left: 1em;
}
```

### List Items in Tables or Data Sections
Use bullet points only for:
- Key findings
- Court orders
- Sequence of events
- Supporting evidence

**Do NOT use bullets for:** inline metadata, tables (use table format instead)

---

## PART 8: TABLES & DATA PRESENTATION

### Table Styling
```css
table {
  width: 100%;
  border-collapse: collapse;
  margin: 2em 0;
  font-size: 16px;
  line-height: 1.6;
}

th {
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 1.2em;
  text-align: left;
  font-weight: 700;
  border-bottom: 2px solid #FF0000;
  font-size: 16px;
  letter-spacing: 0.5px;
}

td {
  padding: 1em 1.2em;
  border-bottom: 1px solid #333333;
  color: #ffffff;
}

tr:hover {
  background-color: #0a0a0a;
}

tr:last-child td {
  border-bottom: 2px solid #FF0000;
}
```

### Table Data
- **First column (label):** Bold
- **Data columns:** Regular weight
- **Alignment:** Left-align text, center-align numbers
- **Header background:** Dark (#1a1a1a)
- **Border color:** Red accent (#FF0000) for header/footer only

### Quick Facts Table (At end of article)
```
| What | Detail |
|---|---|
| ... | ... |
```
Format as above with left-align, red borders.

---

## PART 9: IMAGES & CAPTIONS

### Image Placement
```css
img {
  max-width: 100%;
  height: auto;
  margin: 2em 0;
  border: none;
}

@media (min-width: 1024px) {
  img {
    max-width: 110%; /* slight bleed for emphasis */
    margin-left: -5%;
  }
}
```

### Image Captions
```css
figcaption {
  font-size: 14px;
  color: #999999;
  line-height: 1.6;
  margin-top: 0.8em;
  font-style: italic;
  text-align: center;
}
```

**Format:**
```
*Photo description here. Photo credit: Name/Source*
```

### Article Featured Images
- Placed immediately after subtitle/excerpt
- Full width with slight top/bottom margin
- Caption below with photo credit

---

## PART 10: EMPHASIS & HIGHLIGHTING

### Bold Text (Important terms, names)
```html
<strong>Text</strong>
```
Use for:
- Key names (Partha Chatterjee)
- Important figures (₹49 crore)
- Critical findings
- Court rulings

### Italic Text
```html
<em>Text</em>
```
Use for:
- Case citations
- Emphasis within sentences
- Quote attribution
- Words in non-English languages

### Combination (Bold + Italic)
```html
<strong><em>Text</em></strong>
```
Use sparingly for critical quotes or rulings.

### Colored Highlight (Semantic)
```html
<span style="color: #FF0000;">Critical text</span>
```
Color: #FF0000 (Red accent)
Use for:
- Court verdicts
- Major accusations
- Final conclusions

---

## PART 11: BACKGROUND COLOR & CONTRAST

### Page Background
```
Background: #000000 (Pure black)
Text: #ffffff (Pure white)
Accent color: #FF0000 (Red for emphasis)
```

### Color Scheme
```
Primary: #000000 (Black background)
Secondary: #ffffff (White text)
Accent 1: #FF0000 (Red — for headers, borders, critical info)
Accent 2: #999999 (Gray — for metadata, captions, subtext)
Accent 3: #00FF00 (Green — for "VERIFIED" badges only)
```

### Link Styling
```css
a {
  color: #FF0000;
  text-decoration: underline;
  font-weight: 600;
}

a:hover {
  color: #ffffff;
  background-color: #FF0000;
  text-decoration: none;
}
```

---

## PART 12: RESPONSIVE DESIGN

### Breakpoints

#### Desktop (1024px and above)
- Full justified alignment
- Full margins (15% left/right)
- Drop caps enabled
- Images at 110% width (slight bleed)
- Sidebar content possible

#### Tablet (768px–1024px)
- Justified alignment maintained
- 10% left/right margins
- Drop caps reduced size (80px)
- Images 100% width
- Stacked layout for tables

#### Mobile (<768px)
- Left-aligned text (not justified)
- 20px left/right margins
- Drop caps disabled (inline large letter only)
- Full-width images
- Tables converted to card layout OR scrollable

### Responsive Typography
```css
/* Desktop */
body { font-size: 18px; line-height: 1.8; }
h2 { font-size: 32px; }
h3 { font-size: 24px; }

/* Tablet */
@media (max-width: 1024px) {
  body { font-size: 17px; line-height: 1.75; }
  h2 { font-size: 28px; }
  h3 { font-size: 22px; }
}

/* Mobile */
@media (max-width: 768px) {
  body { font-size: 16px; line-height: 1.7; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
}
```

---

## PART 13: ARTICLE STRUCTURE (TEMPLATE)

Every article on The Postmortem follows this exact structure:

```
1. PAGE HEADER (navigation bar — consistent across site)

2. INVESTIGATION METADATA
   [INVESTIGATION CODE] centered, small gray text

3. MAIN TITLE
   48px bold, centered, 1–2 lines max

4. PUBLICATION METADATA
   "24 JUNE 2026 | VERIFIED" (date + status badge)

5. ARTICLE EXCERPT/SUBTITLE
   18px italic, gray, 1–2 sentences

6. OPENING QUOTE (optional)
   Blockquote from key source, italicized

7. FEATURED IMAGE
   Full-width image with caption

8. THE OPENING CUT
   [PART HEADER]
   [DROP CAP] [Opening paragraph — establishes narrative]
   [Supporting paragraphs]

9. MAIN SECTIONS
   [PART 2 HEADER]
   [Drop cap paragraph]
   [Subsections as needed]
   [Lists, quotes, data as needed]
   
   [PART 3 HEADER]
   [etc.]

10. FINAL PART
    [Usually: analysis, conclusion, impact]

11. QUICK FACTS TABLE
    Summary data in table format

12. SOURCES & REFERENCES
    Bulleted list of all sources with links

13. FOOTER NOTE
    Publication note, invitation for tips
```

---

## PART 14: SPECIAL FORMATTING ELEMENTS

### Investigation Code Box
```
INVESTIGATION [CODE]
```
**Font:** 14px, uppercase, letter-spacing 2px, color #999999
**Position:** Centered above title
**Example:** INVESTIGATION WB-SSC-2016-SCAM-001

### Status Badge
Options: VERIFIED, ONGOING, BREAKING, IN PROGRESS, CONCLUDED

**Styling:**
```css
.badge {
  display: inline-block;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 2px;
}

.badge-verified { background: #00FF00; color: #000000; }
.badge-ongoing { background: #FFAA00; color: #000000; }
.badge-breaking { background: #FF0000; color: #ffffff; }
.badge-concluded { background: #0099FF; color: #ffffff; }
```

### Chapter Break (Visual Divider)
```
Use a decorative element between major parts:

---

## [PART HEADER]

OR use an ornament character (from dropcap style):

⚜ (or similar, centered, 2em margins above/below)
```

### Citation Format (For sourced quotes)
```
"Quote text here."
— Source Name, Publication, Date
```

Use the citation tagging system for copyright compliance.

---

## PART 15: PRINTING & PDF EXPORT

### Print Styles
```css
@media print {
  body { font-size: 12pt; line-height: 1.6; }
  a { text-decoration: underline; color: #000000; }
  img { break-inside: avoid; }
  h1, h2, h3 { break-after: avoid; }
  .no-print { display: none; }
}
```

### PDF Export
- Article must export cleanly to PDF with proper spacing
- Headers/footers with page numbers
- Table of contents (auto-generate from h2 headers)
- No broken images or missing fonts
- Font embedding: Georgia, Garamond (system fonts OK)

---

## PART 16: TECHNICAL CHECKLIST (BEFORE PUBLISH)

Before publishing any article:

- [ ] **Typography:** All text uses Georgia/Garamond serif
- [ ] **Alignment:** Body text justified (desktop), left-aligned (mobile)
- [ ] **Line-height:** 1.8 (desktop), 1.7 (mobile)
- [ ] **Drop caps:** First paragraph of opening section and each major part
- [ ] **Headers:** Proper hierarchy (h2 for parts, h3 for subsections, h4 for minor)
- [ ] **Spacing:** 1.5em between paragraphs, 3em between major sections
- [ ] **Colors:** Black background, white text, red accents only
- [ ] **Links:** Red color, underlined, hover state works
- [ ] **Images:** Full-width, captions included, alt text present
- [ ] **Tables:** Proper styling, red borders on header/footer
- [ ] **Lists:** Proper indentation, consistent bullet style
- [ ] **Quotes:** Blockquote styling, proper attribution
- [ ] **Metadata:** Investigation code, date, status badge present
- [ ] **Sources:** Full sources & references section at end
- [ ] **Mobile:** Responsive design tested on phones/tablets
- [ ] **Print:** Article exports cleanly to PDF
- [ ] **Citations:** All sourced material properly cited (copyright compliance)

---

## PART 17: IMPLEMENTATION (FOR DEVELOPERS)

### CMS Integration
If using a CMS (WordPress, Webflow, custom platform):

1. **Create a custom post type:** "Investigation"
2. **Create custom fields:**
   - Investigation Code
   - Status (dropdown: Verified, Ongoing, etc.)
   - Featured Image
   - Excerpt
   - Publication Date
3. **Apply this CSS file as default stylesheet for all investigations**
4. **Create a template file** that applies all spacing/typography rules automatically

### CSS File
Save all styling from this guide as:
```
thepostmortem-investigation-stylesheet.css
```

Apply to all article pages automatically.

### Wordpress Example
```php
// Register custom Investigation post type
register_post_type('investigation', [
  'labels' => ['name' => 'Investigations'],
  'public' => true,
  'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
  'menu_icon' => 'dashicons-search'
]);

// Load The Postmortem stylesheet for investigations
function postmortem_styles() {
  wp_enqueue_style('postmortem-investigation', 
    get_stylesheet_directory_uri() . '/thepostmortem-investigation-stylesheet.css');
}
add_action('wp_enqueue_scripts', 'postmortem_styles');
```

---

## PART 18: EXAMPLE ARTICLE HEADER (HTML)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Chalk and the Cash | The Postmortem</title>
  <meta name="description" content="Complete investigation into the WBSSC teacher recruitment scam...">
  <meta name="keywords" content="West Bengal, teacher scam, WBSSC, corruption...">
  <link rel="stylesheet" href="thepostmortem-investigation-stylesheet.css">
</head>
<body class="investigation-article">

  <header class="site-header">
    <!-- Navigation bar -->
  </header>

  <main class="article-container">
    
    <div class="investigation-metadata">
      INVESTIGATION WB-SSC-2016-SCAM-001
    </div>

    <h1 class="article-title">
      The Chalk and the Cash: How West Bengal Sold Its Classrooms
    </h1>

    <div class="article-meta">
      <span class="publish-date">24 JUNE 2026</span>
      <span class="badge badge-verified">VERIFIED</span>
    </div>

    <p class="article-excerpt">
      On April 3, 2025, the Supreme Court cancelled 25,753 teacher jobs in West Bengal...
    </p>

    <blockquote class="opening-quote">
      "The entire selection process has been vitiated and tainted beyond resolution."
      — Supreme Court of India, April 3, 2025
    </blockquote>

    <figure>
      <img src="featured-image.jpg" alt="Protest outside WBSSC headquarters">
      <figcaption>Protest outside West Bengal School Service Commission headquarters, April 2025.</figcaption>
    </figure>

    <article class="article-content">
      <!-- Article content follows here with all styling rules applied -->
    </article>

  </main>

  <footer class="site-footer">
    <!-- Footer -->
  </footer>

</body>
</html>
```

---

## FINAL NOTES

This is the **definitive design system** for The Postmortem. Every article—past, present, and future—should follow these specifications exactly. 

The goal is consistency, professionalism, and readability. Readers should feel like they're opening a published book, not scrolling a blog.

**When in doubt:** refer back to the provided images (article_111.png through article_555.png) as visual reference.

---

**Document prepared for:** The Postmortem (thepostmortems.in)  
**For:** Web Development Team, Content Editors, Design Team  
**Status:** Master Template v1.0  
**Questions?** Contact design lead before publishing articles.

---

*This design system is based on professional book design principles and journalistic best practices. It is binding for all investigations published under The Postmortem brand.*
