# SINU — Solomon Islands National University Design System

A modern, editorial-academic design system for SINU's public website: courses, programs, admissions, events, and directory information. Built from scratch for this project; the only provided brand asset was the official logo (`assets/sinu-logo.jpg`).

**Direction:** modern & simple — full-screen navy hero with a floating metrics bar, pill buttons and inputs, Source Serif 4 display over Source Sans 3 UI. Anchored on deep navy `#1b3a6b` with the logo's teal as the accent. Light + dark themes.

## Sources
- `uploads/brand_files-…jpg` — official SINU logo (user-provided).
- **https://www.sinu.edu.sb/** — the live SINU site (WordPress). The information architecture, faculty/school/department names, vision/mission/values wording, contact number, quick links, and footer link groups in this system are taken from it. No brand fonts, Figma, or codebase were provided; the visual layer is original.

## Alignment with the live site
Kept from sinu.edu.sb: announcements bar, quick-links utility row, phone number (+677) 42600, the nav spine (About us · Academic · Programs & courses · Students · Library · News & events), the five faculties (FAFF, FBTS, FEH, FNMHS, FST) with their schools and departments, colleges and centres (UPC, DFL, ORPS, IGDD), vision/mission/values, news + announcements pairing, and the footer groups (About SINU, For staff, For students) with Facebook/LinkedIn/Instagram.

Improved: the 9-level mega-menu is flattened to seven top-level items with one dropdown layer; the promo-image carousel is replaced by a structured hero with real search; faculties become a scannable index instead of nested link lists; announcements get a persistent bar rather than a slider; type, spacing, and contrast are systematised; and every page has a working course/staff search.

## Content fundamentals

**Voice.** Plain, warm, and factual. A national university speaking to its own people — never salesy, never bureaucratic.
- Second person for prospective/current students: "Find your program", "What you'll study".
- Institutional first person plural sparingly: "We welcome applications from…".
- Short sentences. Front-load the useful fact (dates, credits, fees).

**Casing.** Sentence case everywhere — titles, buttons, nav ("Apply now", not "Apply Now"). UPPERCASE only for eyebrows/labels with +0.12em letter-spacing ("SCHOOL OF EDUCATION", "SEMESTER 2 · 2026"). Never all-caps headlines.

**Course codes** always render in mono: `EDU214`, `12 credits`, `Semester 1`. Codes are uppercase, no space between letters and digits.

**Emoji.** None in UI chrome. Lucide icons cover every need.

Examples:
| Context | Don't | Do |
|---|---|---|
| Hero | "Unlock Your Future Today!" | "Learn where you belong." |
| CTA | "Submit Application Form" | "Apply now" |
| Empty search | "No results were found for your query." | "No courses match. Try a broader term?" |
| Deadline | "Applications must be received no later than…" | "Applications close 28 Nov 2026" |

## Visual foundations

- **Color = hierarchy.** Navy is the institutional voice: headers, primary buttons, footer. Teal is the interactive/wayfinding accent: links on hover, active tabs, tags, search focus. Gold is ceremonial only (honors, featured ribbons) — never a button. The page is white; cards are white with hairline borders, and `--surface-sunken` (#f4f6f8) marks recessed areas; dark theme swaps to deep blue-blacks.
- **Type.** Source Serif 4 (500 for display/h1–h3 and big metrics; optical sizing on) — a publishing serif with real academic weight; Source Sans 3 for everything else including card titles (600); Spline Sans Mono for course codes and data. Display/h1 tight (-0.02em). *Substitution flag: fonts are Google Fonts stand-ins — supply official brand fonts if they exist.*
- **Backgrounds.** Flat white for content; the one gradient in the system is the hero's soft navy radial. Full-bleed navy bands for hero/footer; paper for content. Photography slots (campus, students) use plain rounded containers, no overlays — lift captions with solid capsules, not scrims.
- **Borders & shadows.** Hairlines `--line-1/2` do most separation; shadows (`--sh-1..3`) only for raised cards, menus, dialogs. No inner shadows.
- **Radii.** Buttons, tags, search, and nav pills are fully rounded (--r-pill); cards 16px, panels 20–28px, inputs 10px.
- **Motion.** `--ease-out` entrances, `--ease-in-out` state changes; 120/200/320ms. Fades and 4–8px rises only — no bounces, no parallax.
- **Hover:** links navy→teal; cards raise `--sh-1`→`--sh-2` and hairline darkens; buttons darken one step. **Press:** darken + scale 0.98 @120ms. **Focus:** always-visible teal ring `--ring`.
- **Layout.** 1160px container (760px for prose), 12-col grid, generous `--sp-16/20` section rhythm. Sticky top nav (white, hairline) over navy utility bar. No transparency/blur except optional dialog scrim `rgba(11,24,48,.5)`.

## Iconography
Lucide via CDN (`lucide` UMD or inline SVG copies), 1.75px stroke, `currentColor`. Sizes: 16 inline/meta, 20 buttons/nav, 24 feature rows, 40+ empty states. No emoji, no unicode dingbats. The only brand mark is the provided logo jpg — never redraw it.

## Index
- `styles.css` → `tokens/` (fonts, colors, typography, spacing, effects)
- `assets/sinu-logo.jpg` — official logo (white background; use on white or in a white capsule on navy)
- `guidelines/` — specimen cards for the Design System tab
- `components/actions/` — Button, IconButton · `components/forms/` — Input, Select, Checkbox, Radio, Switch, SearchBar · `components/navigation/` — Tabs, Breadcrumb, Pagination · `components/feedback/` — Badge, Tag, Toast, Tooltip, Dialog · `components/surfaces/` — Card, StatBlock
- `components/catalog/` — CourseCard, ProgramCard, EventCard, PersonCard (intentional additions: the site's core content objects)
- `ui_kits/website/` — Homepage, Catalog, CourseDetail, Program, Admissions, EventsNews, Directory + interactive `index.html`
- `SKILL.md` — agent skill entry point

**Intentional additions** beyond the standard set: catalog components above — a university site is unbuildable without its content-object cards; each maps 1:1 to a screen in the UI kit.
