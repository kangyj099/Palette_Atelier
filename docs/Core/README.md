# Palette Atelier

> **A Design System Workbench**
>
> Build, Preview, Validate, Compare and Document Design Systems in one place.

---

## Overview

Palette Atelier is a browser-based design system workspace for building and validating design tokens.

Instead of editing CSS variables manually, Palette Atelier provides a visual environment where designers and developers can preview components, inspect tokens, compare palettes, and validate accessibility in real time.

Originally created as an internal tool for the Digital Closet project, Palette Atelier is evolving into a standalone design system workbench.

---

## Goals

Palette Atelier aims to become the single workspace for design system development.

Instead of spreading work across multiple tools, Palette Atelier keeps the entire workflow in one place.

- Build design tokens
- Preview UI components
- Validate accessibility
- Compare design systems
- Document token usage
- Export for production

---

## Philosophy

### Preview First

Every visual decision should be immediately visible.

If it cannot be previewed,
it is difficult to verify.

---

### CSS Owns Design

CSS is the single source of truth for visual values.

JavaScript never owns colors.

JavaScript reads tokens.

CSS defines them.

---

### AI Assists, Rules Decide

AI can suggest.

Rules validate.

Palette Atelier prefers deterministic rule engines over AI-generated decisions whenever possible.

---

### MVP First

Build the smallest useful tool first.

Expand only after the current workflow is complete.

---

### Soft, Not Weak

The visual identity emphasizes calmness and clarity.

Soft colors should never reduce readability or accessibility.

---

## Current Features

- Design Token Preview
- Primitive Token Preview
- Semantic Token Preview
- Component Showcase
- Interactive Inspector
- Mode Switching
- Dynamic Palette Rendering
- Responsive Preview
- Accessibility Foundation

---

## Planned Features

See Product/ROADMAP.md for the current plan.

---

## Architecture

```
Tokens
    ↓
Renderer
    ↓
Preview
    ↓
Inspector
    ↓
Validation
```

Future versions will extend this architecture with:

```
Rule Engine
Exporter
Plugin System
Workspace
```

---

## Project Structure

```
src/

├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── preview.css
│   └── utilities.css
│
├── js/
│   ├── app.js
│   ├── state.js
│   ├── renderer.js
│   ├── preview-engine.js
│   ├── palette-engine.js
│   └── utils.js
│
└── index.html
```

---

## Documentation

Project documentation is organized separately.

| Document | Purpose |
|----------|----------|
| Development/SESSION.md | Current development status |
| Product/ROADMAP.md | Development roadmap |
| Core/PROJECT_RULES.md | Development rules |
| Core/VISION.md | Product vision |
| Reference/DECISIONS.md | Important architectural decisions |
| Product/IDEA_BACKLOG.md | Future ideas |
| Core/ARCHITECTURE.md | System architecture |

See `document_index.md` for the complete documentation map.

---

## Design Principles

Palette Atelier follows several core principles.

- Everything Visual Must Be Previewable
- Accessibility by Default
- One Source of Truth
- Preview Before Export
- Consistency Over Complexity

---

## Development Workflow

```
Idea

↓

Decision

↓

Implementation

↓

Preview

↓

Review

↓

Commit
```

Every logical change should produce a working preview.

---

## Target Users

- Frontend Developers
- UI Designers
- Design System Engineers
- Indie Developers
- Product Designers

---

## Long-term Vision

Palette Atelier is not intended to replace design tools.

Instead, it focuses on becoming the best workspace for designing, validating and maintaining design systems.

The long-term goal is to provide a deterministic environment where every design decision can be previewed, measured and documented before entering production.

---

## Status

Current version, milestone, and development status: see Development/SESSION.md.

License

TBD