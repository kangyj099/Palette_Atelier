# SESSION

> Current development status for Palette Atelier.
> Always keep this document up to date.

---

# Project

Palette Atelier

Version

v1.0.0-alpha.2

Status

🟢 Active Development

---

# Current Milestone

Interactive Design Review

Current Phase

Dynamic Preview

---

# Last Completed

feat(inspector): add Copy + Toast to complete Phase 1 (Viewer) scope

Status

✅ Completed

---

# Current

feat(preview): add Phone Preview

Status

🟡 Ready

Header's disabled "Soon" button becomes a Desktop/Phone toggle
(`data-action="toggle-preview"`), setting `state.previewMode` and
`document.documentElement.dataset.preview`. When `data-preview="phone"`,
each `.l-content > [data-panel]` is capped at a new `--preview-phone-width`
(390px) token, centered with a border — header/footer/tab bar stay
full width. Layout-width simulation only, no device/browser/media
emulation (see Parking Lot / Product/ROADMAP.md Phase 2 § Preview Frame
for splitting this out of palette-engine.js later).

---

# Next

feat(preview): add Accessibility Preview

Finishes the Preview section (5/7 → 7/7). Phone Preview and
Accessibility Preview are the last two Phase 1 Preview items.

---

# MVP Progress

> Item names from "Design Tokens" onward mirror Product/ROADMAP.md's Phase 1 list exactly. This is the single place completion state is tracked — ROADMAP.md holds the plan only.
>
> "Process" below is pre-Roadmap setup work and has no Product/ROADMAP.md counterpart.

## Process

- [x] Project Skeleton
- [x] Project Documents
- [x] Design Principles

## Design Tokens

- [x] Primitive Tokens
- [x] Semantic Tokens
- [x] Component Tokens

## Foundation

- [x] Base Styles
- [x] Layout System
- [x] Components
- [x] Utilities

## Preview

- [x] Primitive Preview
- [x] Semantic Preview
- [x] Component Showcase
- [x] Dynamic Palette Rendering
- [x] Mode Switching
- [ ] Phone Preview
- [ ] Accessibility Preview

## Inspector

- [x] Token Inspector
- [ ] Sticky Inspector Improvements
- [ ] Component Information
- [ ] Usage Information

## Palette Management

- [ ] Add Palette
- [ ] Edit Palette
- [ ] Delete Palette
- [ ] Import Palette
- [ ] Export Palette

## Export

- [ ] CSS Export
- [ ] JSON Export

---

# Current Folder

src/

---

# Current Files

css/
- tokens.css
- base.css
- layout.css
- components.css
- preview.css
- utilities.css

js/
- app.js
- state.js
- renderer.js
- preview-engine.js
- palette-engine.js
- utils.js
- mode-engine.js (empty, unused)
- rule-engine.js (empty, unused)
- export-engine.js (empty, unused)

assets/ (empty, unused)

index.html

---

# Active Rules

- MVP First
- One Logical Change per Commit
- CSS owns design tokens
- JavaScript never owns colors
- Accessibility by Default
- Preview validates tokens
- Explanation < Code

---

# Known Issues

_None._

---

# Parking Lot

- Multi Theme
- Export Tokens
- Component Search
- Design Audit

---

# Ready for Next Commit

✅ Yes

---

# Decision Reminder

Current Release

v1.0 MVP

Current Priority

Complete MVP before expanding scope.

Future ideas belong in Product/IDEA_BACKLOG.md.