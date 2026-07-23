# PROJECT_RULES

> Working rules for Palette Atelier.
>
> These rules define how the project is developed.
> They are intended for both humans and AI assistants.
>
> When a rule conflicts with convenience, the rule wins.

---

# Core Philosophy

Palette Atelier follows an **MVP First** philosophy.

The objective is to deliver a usable product as early as possible while maintaining long-term maintainability.

Every change should improve the project without increasing unnecessary complexity.

---

# Working Principles

## 1. MVP First

Always complete the smallest usable version before expanding.

Good ideas are valuable.

Finished software is more valuable.

Future ideas belong in **Product/IDEA_BACKLOG.md** until they become priorities.

---

## 2. One Logical Change per Commit

A commit should represent exactly one logical change.

Examples

✅ Add Button Component

✅ Improve Token Naming

✅ Add Inspector

Avoid

❌ Buttons + Palette + Refactor + README

---

## 3. Build for Release

Every feature should be implemented with release quality.

Avoid "temporary" implementations that are expected to remain permanently.

---

## 4. Explain Before Expanding

When introducing new functionality:

1. Explain the purpose.
2. Keep the implementation simple.
3. Expand only when necessary.

---

# Documentation Rules

Documentation is part of the product.

Code is not complete until its documentation reflects reality.

---

## Living Documents

Existing documents should be updated.

Avoid creating duplicate documentation.

---

## Development/SESSION.md

Update after every completed logical change.

Always maintain:

- Current Task
- Last Completed
- Next Task
- MVP Progress

---

## Product/ROADMAP.md

Update only when project priorities change.

Do not record implementation history.

---

## Product/IDEA_BACKLOG.md

Store valuable ideas that are intentionally postponed.

Do not mix future ideas into the MVP roadmap.

---

## Reference/DECISIONS.md

Every important architectural or product decision should be recorded.

Document the reasoning, not just the result.

---

# Architecture Rules

Architecture is preserved over implementation speed.

---

## Single Responsibility

Every module should have one clear responsibility.

Avoid multi-purpose modules.

---

## One Source of Truth

Every piece of information has exactly one owner (Colors → tokens.css, Application State → state.js, Architecture → Core/ARCHITECTURE.md).

Full definition: Core/ARCHITECTURE.md § One Source of Truth. Decision rationale: Reference/DECISIONS.md D-010.

---

## Read, Don't Duplicate

Modules consume data.

They never redefine it.

---

## Prefer Extension

Add modules instead of growing existing ones (e.g. `+ rule-engine.js` instead of a 5,000-line `renderer.js`).

Full principle: Core/ARCHITECTURE.md § Scalability.

---

# Refactoring Rule

Refactor only when it improves future development.

Do not refactor for personal preference.

Every refactoring should satisfy at least one of the following:

- Reduce duplication
- Improve readability
- Improve maintainability
- Simplify future features
- Remove technical debt

---

## Preserve Existing Patterns

Before introducing a new solution, check whether an existing pattern already solves the problem.

Prefer extending established patterns over creating new ones.

---

# CSS & JavaScript Rules

CSS owns the design system.

JavaScript controls behavior, not visual design.

Detailed CSS layering, token usage, and JavaScript architecture rules are owned by Core/ENGINEERING_GUIDE.md.

---

# Preview Rules

Every major feature should become visible inside the Preview.

Preview is the primary validation environment.

---

# Inspector & Rule Engine

The Inspector exists to explain the design system, not merely display data.

Validation should always be deterministic. Avoid subjective scoring.

Detailed Inspector and Rule Engine responsibilities are owned by Core/ARCHITECTURE.md.

---

# AI Collaboration Rules

AI is a collaborator.

Not the project owner.

---

## AI Should

- Follow project architecture
- Respect existing conventions
- Update documentation
- Explain major decisions

---

## AI Should Not

- Rewrite unrelated code
- Change architecture without discussion
- Introduce unnecessary abstractions
- Expand MVP scope

---

# Review Rules

Reviews focus on quality, not style preferences.

Priorities

P0 — Critical

P1 — High

P2 — Medium

P3 — Low

Maximum:

Five findings per review unless critical issues exist.

---

## Commit Review Workflow

Every commit gets one lightweight review pass.

The reviewer reviews. It never writes code.

No infinite review loops. No manufactured feedback — if there is nothing worth flagging, say so.

The implementer fixes findings and resubmits until the review passes clean.

Non-essential feedback that is judged and intentionally not applied is not dropped silently — it is logged in Works/REVIEW_LOG.md.

Findings that call for work beyond the current commit's scope (cross-module refactors, architecture changes) are not turned into Development/SESSION.md tasks automatically. They are logged in Works/REVIEW_LOG.md instead, for the maintainer to triage.

Any violation of a documented project principle (this document, Core/ARCHITECTURE.md, Core/ENGINEERING_GUIDE.md, etc.) found in AI-produced work is logged in Works/REVIEW_LOG.md — whether caught by review, self-caught, or pointed out by the maintainer, and whether or not it gets fixed immediately. Fixing it silently, without a log entry, is incomplete.

---

## Test Handoff

When a Development/SESSION.md MVP Progress sub-group (e.g. Inspector, Palette Management) is fully complete, request user testing.

At that point, surface Works/REVIEW_LOG.md's entries for that work so the maintainer can triage deferred feedback and out-of-scope suggestions alongside testing.

---

# Commit Rules

Commit messages should follow Conventional Commits.

Examples

```
feat(preview): add semantic palette rendering

fix(button): restore focus ring

refactor(tokens): simplify semantic naming

docs(architecture): add rule engine layer
```

---

# Decision Rules

When multiple solutions exist, prefer the one that improves:

- Clarity
- Consistency
- Explainability
- Maintainability

Avoid choosing an approach solely because it is shorter.

---

# Product Identity

Palette Atelier is a **Design System Workbench**.

Every feature should reinforce one or more of the following capabilities:

- Build
- Preview
- Validate
- Compare
- Document
- Export

If a feature does not contribute to these goals, reconsider its priority.

---

# Final Rule

When in doubt,

protect the architecture,

not the shortcut.