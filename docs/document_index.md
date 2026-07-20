# DOCUMENT_INDEX

> Documentation map for Palette Atelier.
>
> This document provides an overview of all project documentation
> and explains when each document should be referenced.

---

# Reading Order

New contributors and AI assistants should read the documentation
in the following order.

1. README.md
2. VISION.md
3. PROJECT_RULES.md
4. ARCHITECTURE.md
5. ENGINEERING_GUIDE.md
6. ROADMAP.md
7. SESSION.md

Reference documents may be consulted as needed.

---

# Core Documents

## README.md

Project overview.

Read first.

Contains

- Project introduction
- Features
- Folder structure
- Quick start

---

## VISION.md

Defines why Palette Atelier exists.

Read when making product decisions.

Contains

- Mission
- Vision
- Product philosophy
- Long-term direction

---

## PROJECT_RULES.md

Defines development rules.

Read before implementing features.

Contains

- Development workflow
- Commit rules
- Documentation rules
- AI collaboration rules
- Refactoring principles

---

## ARCHITECTURE.md

Explains project structure.

Read before changing architecture.

Contains

- Layer structure
- Module responsibilities
- Data flow
- Dependency rules

---

## ENGINEERING_GUIDE.md

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

## ROADMAP.md

Product planning.

Contains

- Current MVP
- Future phases
- Planned features

---

## IDEA_BACKLOG.md

Future ideas.

Contains ideas that are intentionally postponed.

Nothing inside this document should be implemented
without moving it into the roadmap first.

---

## CHANGELOG.md

Release history.

Contains only completed work.

---

# Development Documents

## SESSION.md

Current working context.

Always update after each logical change.

Contains

- Current task
- Last completed
- Next task
- MVP progress

---

## TESTING.md

Testing strategy.

Contains

- Manual testing
- Regression testing
- Accessibility testing

---

## RELEASE_CHECKLIST.md

Pre-release verification.

Used before publishing a release.

---

## CONTRIBUTING.md

Contribution guide.

Used by external contributors.

---

# Reference Documents

## Glossary

Official terminology.

Always reuse existing terms before introducing new ones.

---

## Design Principles

Design philosophy.

Defines visual consistency.

---

## ADR

Architecture Decision Records.

Documents important architectural decisions.

Never change major architecture without recording an ADR.

---

# Source of Truth

Each concern has exactly one owner.

| Topic | Source |
|--------|--------|
| Product Vision | VISION.md |
| Development Rules | PROJECT_RULES.md |
| Architecture | ARCHITECTURE.md |
| Coding Style | ENGINEERING_GUIDE.md |
| Product Planning | ROADMAP.md |
| Current Session | SESSION.md |
| Release History | CHANGELOG.md |
| Future Ideas | IDEA_BACKLOG.md |
| Design Principles | Design Principles |
| Terminology | Glossary |

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