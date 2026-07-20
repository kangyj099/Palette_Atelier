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

Future ideas belong in **IDEA_BACKLOG.md** until they become priorities.

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

## SESSION.md

Update after every completed logical change.

Always maintain:

- Current Task
- Last Completed
- Next Task
- MVP Progress

---

## ROADMAP.md

Update only when project priorities change.

Do not record implementation history.

---

## IDEA_BACKLOG.md

Store valuable ideas that are intentionally postponed.

Do not mix future ideas into the MVP roadmap.

---

## DECISIONS.md

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

Every piece of information has exactly one owner.

Examples

Colors

→ tokens.css

Application State

→ state.js

Architecture

→ ARCHITECTURE.md

---

## Read, Don't Duplicate

Reuse existing data.

Never redefine it.

---

## Prefer Extension

Add modules.

Avoid increasing coupling.

Preferred

```
+ rule-engine.js
```

Avoid

```
renderer.js
(5000+ lines)
```
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

# CSS Rules

CSS owns the design system.

---

## Tokens First

Never hardcode visual values.

Always use tokens.

Avoid

```css
color: #394550;
```

Prefer

```css
color: var(--text-primary);
```

---

## Layer Order

Primitive

↓

Semantic

↓

Component

↓

Preview

↓

Utilities

Higher layers depend on lower layers.

Never the opposite.

---

## Components

Components consume semantic tokens.

They never reference primitive tokens directly.

---

## Accessibility

Accessibility is mandatory.

Always include:

- Focus States
- Disabled States
- Keyboard Navigation
- Contrast Awareness

---

# JavaScript Rules

JavaScript controls behavior.

Not visual design.

---

## Never Own Design Values

JavaScript may

✅ Read Tokens

✅ Switch Themes

✅ Update State

JavaScript must not

❌ Store Colors

❌ Define Typography

❌ Duplicate Tokens

---

## State Driven

Rendering should always depend on state.

Avoid direct DOM manipulation when state changes are available.

---

## Small Modules

Prefer several focused files over one large file.

---

# Preview Rules

Every major feature should become visible inside the Preview.

Preview is the primary validation environment.

---

# Inspector Rules

The Inspector exists to explain the design system.

Not merely display data.

Future Inspector responsibilities

- Token Details
- Usage
- Dependencies
- Accessibility
- Rule Results

---

# Rule Engine

Validation should always be deterministic.

Avoid subjective scoring.

Every rule should produce:

- Result
- Reason
- Recommendation

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