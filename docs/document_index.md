# DOCUMENT_INDEX

> Documentation map for Palette Atelier.
>
> This document provides an overview of all project documentation
> and explains when each document should be referenced.

---

# Reading Order

New contributors and AI assistants should read the documentation
in the following order.

1. Core/ReadMe.md
2. Product/VISION.md
3. Core/PROJECT_RULES.md
4. Core/ref_00_architecture.md
5. Engineering/ENGINEERING_GUIDE.md
6. Product/ROADMAP.md
7. Core/SESSION.md

Reference documents may be consulted as needed.

---

# Core Documents

## Core/ReadMe.md

Project overview.

Read first.

Contains

- Project introduction
- Features
- Folder structure
- Quick start

---

## Product/VISION.md

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

## Core/ref_00_architecture.md

Explains project structure.

Read before changing architecture.

Contains

- Layer structure
- Module responsibilities
- Data flow
- Dependency rules

---

## Engineering/ENGINEERING_GUIDE.md

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

---

## Engineering/ChangeLog.md

Release history.

Contains only completed work.

---

# Development Documents

## Core/SESSION.md

Current working context.

Always update after each logical change.

Contains

- Current task
- Last completed
- Next task
- MVP progress

---

## Engineering/Testing.md

Testing strategy.

Contains

- Manual testing
- Regression testing
- Accessibility testing

---

## Engineering/ReleaseChecklist.md

Pre-release verification.

Used before publishing a release.

---

## Community/Contributing.md

Contribution guide.

Used by external contributors.

---

# Reference Documents

## Glossary — Product/ref_01_glossary.md

Official terminology.

Always reuse existing terms before introducing new ones.

---

## Design Principles — Product/ref_02_design-principles.md

Design philosophy.

Defines visual consistency.

---

## ADR — Core/DECISIONS.md

Architecture Decision Records.

Documents important architectural decisions.

Never change major architecture without recording an ADR.

---

# Source of Truth

Each concern has exactly one owner.

| Topic | Source |
|--------|--------|
| Product Vision | Product/VISION.md |
| Development Rules | Core/PROJECT_RULES.md |
| Architecture | Core/ref_00_architecture.md |
| Coding Style | Engineering/ENGINEERING_GUIDE.md |
| Product Planning | Product/ROADMAP.md |
| Current Session | Core/SESSION.md |
| Release History | Engineering/ChangeLog.md |
| Future Ideas | Product/IDEA_BACKLOG.md |
| Architectural Decisions | Core/DECISIONS.md |
| Design Principles | Product/ref_02_design-principles.md |
| Terminology | Product/ref_01_glossary.md |

---

# Documentation Principles

Documentation should remain

- concise
- current
- authoritative

Avoid duplicate information.

Prefer linking to the correct document
instead of repeating content.

---

# Guiding Principle

When documentation conflicts,

follow the document that owns the topic.

One topic.

One source of truth.