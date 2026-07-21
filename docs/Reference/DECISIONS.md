# DECISIONS

> Architectural and product decisions for Palette Atelier.
>
> This document records *why* important decisions were made.
> Features may evolve.
> Principles should remain stable.

---

# Decision Policy

Every important decision should answer:

- Why was this chosen?
- What alternatives existed?
- Why were they rejected?
- What future impact does this decision have?

The purpose of this document is to preserve reasoning, not history.

---

# D-001

## CSS Owns Design

Status

✅ Accepted

---

### Decision

Visual values belong to CSS.

JavaScript may **read** tokens.

JavaScript must never **own** them.

---

### Why

Separating visual definition from application logic keeps the system predictable.

A token should exist in exactly one place.

---

### Benefits

- Single Source of Truth
- Easy Export
- Better Maintainability
- Theme Ready
- Framework Independent

---

### Rejected Alternative

Store colors inside JavaScript.

Reason:

Visual values become duplicated.

---

# D-002

## Preview First

Status

✅ Accepted

---

### Decision

Every visual feature must be previewable.

---

### Why

Design decisions are difficult to evaluate without visual feedback.

Preview shortens the design-feedback cycle.

---

### Implications

Every new feature should eventually appear inside the Preview Workspace.

---

# D-003

## AI Assists, Rules Decide

Status

✅ Accepted

---

### Decision

AI may suggest.

Rules validate.

---

### Why

AI is inconsistent.

Accessibility and design validation require deterministic behavior.

---

### Examples

Allowed

- Documentation Drafting
- Naming Suggestions
- Idea Generation

Not Allowed

- Accessibility Validation
- Design Score
- Rule Checking

Those should always use algorithms.

---

# D-004

## Rule Engine Before AI

Status

✅ Accepted

---

### Decision

Design validation should be implemented using measurable rules.

---

### Why

Users must always understand why a result is produced.

Explainability is a product goal.

---

# D-005

## MVP First

Status

✅ Accepted

---

### Decision

Every phase should produce a usable product.

---

### Why

Finished software creates value.

Incomplete ideas do not.

---

### Consequence

Interesting ideas belong in IDEA_BACKLOG until their time arrives.

---

# D-006

## Palette Atelier is a Workbench

Status

✅ Accepted

---

### Decision

Palette Atelier is not merely a palette preview tool.

It is a Design System Workbench.

---

### Why

The product has evolved beyond color management.

Its focus is now the complete lifecycle of design systems.

---

### Future Scope

- Build
- Preview
- Validate
- Compare
- Document
- Export

---

# D-007

## Inspector is a Debugging Tool

Status

✅ Accepted

---

### Decision

The Inspector should explain design systems.

Not merely display values.

---

### Scope Reference

See Core/ARCHITECTURE.md for the current feature list.

---

# D-008

## Explain Before Automating

Status

✅ Accepted

---

### Decision

Users should understand why a design is good or bad before receiving automatic suggestions.

---

### Why

Education creates better designers.

Automation without explanation creates dependency.

---

# D-009

## Accessibility by Default

Status

✅ Accepted

---

### Decision

Accessibility should never become an optional add-on.

It must be integrated into the workflow.

---

### Examples

- Contrast
- Focus Ring
- Touch Targets
- Typography

---

# D-010

## One Source of Truth

Status

✅ Accepted

---

### Decision

Every piece of information should have exactly one authoritative location.

---

### Examples

Colors

→ tokens.css

Current Status

→ Development/SESSION.md

Roadmap

→ Product/ROADMAP.md

Ideas

→ Product/IDEA_BACKLOG.md

Architecture

→ Core/ARCHITECTURE.md

---

### Why

Duplicate documentation eventually becomes inconsistent.

---

# D-011

## Living Documentation

Status

✅ Accepted

---

### Decision

Project documents should evolve continuously.

---

### Why

Documentation should reflect reality.

Not history.

---

### Consequence

Documents are updated instead of duplicated.

---

# D-012

## Soft, Not Weak

Status

✅ Accepted

---

### Decision

Visual softness should never reduce usability.

---

### Product Meaning

Palette Atelier values

- Calmness
- Elegance
- Clarity

without sacrificing

- Contrast
- Hierarchy
- Accessibility

---

# D-013

## Preview Before Export

Status

✅ Accepted

---

### Decision

Nothing should be exported before being previewed.

---

### Workflow

```
Edit

↓

Preview

↓

Validate

↓

Export
```

---

# D-014

## Build for Release

Status

✅ Accepted

---

### Decision

Internal tooling should be developed with public release quality.

---

### Why

Good internal tools often become valuable standalone products.

Palette Atelier follows this philosophy.

---

# Future Decisions

Future architectural decisions should continue using this format.

```
D-015

Title

Status

Decision

Why

Benefits

Rejected Alternatives

Future Impact
```

---

# Guiding Principle

When uncertainty exists,

prefer the decision that improves

- clarity
- consistency
- explainability
- maintainability

over the decision that merely reduces implementation time.