# DOCUMENT_INDEX

> Documentation map for Palette Atelier.
>
> This document provides an overview of all project documentation
> and explains when each document should be referenced.

---

# Reading Order

New contributors and AI assistants should read the documentation
in the following order.

1. Core/README.md
2. Core/VISION.md
3. Core/PROJECT_RULES.md
4. Core/ARCHITECTURE.md
5. Core/ENGINEERING_GUIDE.md
6. Product/ROADMAP.md
7. Development/SESSION.md

Reference documents may be consulted as needed.

---

# Core Documents

## Core/README.md

Project overview.

Read first.

Contains

- Project introduction
- Features
- Folder structure
- Quick start

---

## Core/VISION.md

Defines why Palette Atelier exists.

Read when making product decisions.

Contains

- Mission
- Vision
- Product philosophy
- Long-term direction

---

## Core/PROJECT_RULES.md

Defines development rules.

Read before implementing features.

Contains

- Development workflow
- Commit rules
- Documentation rules
- AI collaboration rules
- Refactoring principles

---

## Core/ARCHITECTURE.md

Explains project structure.

Read before changing architecture.

Contains

- Layer structure
- Module responsibilities
- Data flow
- Dependency rules

---

## Core/ENGINEERING_GUIDE.md

Defines coding conventions.

Read before writing code.

Contains

- CSS architecture
- JavaScript architecture
- Naming conventions
- Token usage
- Review checklist

---

# Product Documents

## Product/ROADMAP.md

Product planning.

Contains

- Current MVP
- Future phases
- Planned features

---

## Product/IDEA_BACKLOG.md

Future ideas.

Contains ideas that are intentionally postponed.

Nothing inside this document should be implemented
without moving it into the roadmap first.

This document is a brainstorming space, not a single
source of truth. It is exempt from the "avoid duplicate
information" rule below — its content may legitimately
overlap with ROADMAP.md, VISION.md, ARCHITECTURE.md, or
any other owning document.

---

## Product/CHANGELOG.md

Release history.

Contains only completed work.

---

# Development Documents

## Development/SESSION.md

Current working context.

Always update after each logical change.

Contains

- Current task
- Last completed
- Next task
- MVP progress

---

## Development/TESTING.md

Testing strategy.

Contains

- Manual testing
- Regression testing
- Accessibility testing

---

## Development/RELEASE_CHECKLIST.md

Pre-release verification.

Used before publishing a release.

---

## Development/CONTRIBUTING.md

Contribution guide.

Used by external contributors.

---

# Reference Documents

## Glossary — Reference/GLOSSARY.md

Official terminology.

Always reuse existing terms before introducing new ones.

---

## Design Principles — Reference/DESIGN_PRINCIPLES.md

Design philosophy.

Defines visual consistency.

---

## ADR — Reference/DECISIONS.md

Architecture Decision Records.

Documents important architectural decisions.

Never change major architecture without recording an ADR.

---

# Source of Truth

Each concern has exactly one owner.

| Topic | Source |
|--------|--------|
| Product Vision | Core/VISION.md |
| Development Rules | Core/PROJECT_RULES.md |
| Architecture | Core/ARCHITECTURE.md |
| Coding Style | Core/ENGINEERING_GUIDE.md |
| Product Planning | Product/ROADMAP.md |
| Current Session | Development/SESSION.md |
| Release History | Product/CHANGELOG.md |
| Future Ideas | Product/IDEA_BACKLOG.md |
| Architectural Decisions | Reference/DECISIONS.md |
| Design Principles | Reference/DESIGN_PRINCIPLES.md |
| Terminology | Reference/GLOSSARY.md |

---

# Documentation Principles

Documentation should remain

- concise
- current
- authoritative

Avoid duplicate information.

Prefer linking to the correct document
instead of repeating content.

Exception: Product/IDEA_BACKLOG.md is a brainstorming
space, not a single source of truth. Overlap between it
and other documents is expected and does not violate this
rule. See its entry above.

Exception — Stable Principle Exception: cross-cutting
principles that rarely change (e.g. One Source of Truth,
Prefer Extension) may keep a short local restatement
(1-2 lines, no rationale) in the documents where they are
operationally relevant, so a reader doesn't have to leave
the document for the gist. The full definition, examples,
and rationale still live in exactly one place — normally
the relevant Reference/DECISIONS.md entry or
Core/ARCHITECTURE.md. Only that one place may be edited
when the principle's wording changes; local restatements
should be re-copied from it verbatim, not independently
rephrased.

---

# Guiding Principle

When documentation conflicts,

follow the document that owns the topic.

One topic.

One source of truth.
