# ENGINEERING_GUIDE

> Engineering conventions for Palette Atelier.
>
> This document defines how code should be written,
> organized, and maintained.
>
> PROJECT_RULES explains **how we work**.
> ENGINEERING_GUIDE explains **how we write code**.

---

# Engineering Philosophy

Code should optimize for

- Readability
- Predictability
- Maintainability
- Reusability

Avoid clever solutions.

Prefer obvious solutions.

---

# Technology Stack

Palette Atelier is built with vanilla HTML, CSS, and JavaScript.

No build step is used. `index.html` must run directly in the browser.

Frameworks such as React, Vue, Svelte, and TypeScript are not used.

---

# Folder Structure

```
src/

css/
js/
assets/
docs/

index.html
```

Every folder should own one responsibility.

---

# CSS Architecture

Palette Atelier uses layered CSS.

```
Primitive

↓

Semantic

↓

Component

↓

Layout

↓

Preview

↓

Utilities
```

Dependencies flow downward only.

---

## Primitive Layer

Defines raw values.

Examples

- Gray Scale
- Primary Scale
- Radius
- Spacing
- Duration

Never reference Semantic Tokens.

---

## Semantic Layer

Defines meaning.

Examples

```
--surface-base

--text-primary

--border-default
```

Components should consume only Semantic Tokens.

---

## Component Layer

Reusable UI.

Examples

```
Button

Input

Card

Badge
```

No hardcoded values.

---

## Layout Layer

Application layout only.

Examples

```
Sidebar

Header

Grid

Container
```

Should not define component styles.

---

## Preview Layer

Preview-only UI.

Never reuse Preview components inside production UI.

---

## Utilities

Small helper classes.

Keep minimal.

Avoid replacing Components with Utilities.

---

# JavaScript Architecture

JavaScript is organized by responsibility.

```
App

↓

State

↓

Renderer

↓

Feature Engines

↓

Utilities
```

---

## app.js

Application bootstrap.

No business logic.

---

## state.js

Application state.

Single Source of Truth.

---

## renderer.js

Converts state into DOM.

No business rules.

---

## Feature Engines

Each engine owns exactly one feature.

Examples

```
palette-engine.js

preview-engine.js

theme-engine.js

rule-engine.js

export-engine.js
```

---

## Utilities

Pure helper functions.

Avoid side effects.

---

# Naming

Files

```
kebab-case
```

Classes

```
Component

Preview

Layout

Utility
```

Examples

```
.c-button

.l-sidebar

.p-card

.u-hidden
```

Variables

```
camelCase
```

Constants

```
UPPER_SNAKE_CASE
```

---

# Token Usage

Never hardcode

- Colors
- Radius
- Shadows
- Typography
- Spacing
- Motion

Always use tokens.

Bad

```css
padding:16px;
```

Good

```css
padding:var(--space-4);
```

---

# Component Rules

Every component should define

- Default
- Hover
- Focus
- Active
- Disabled

when applicable.

Accessibility comes first.

---

# JavaScript Rules

JavaScript may

- Read Tokens
- Change State
- Render UI

JavaScript must not

- Define Colors
- Duplicate Tokens
- Own Typography

---

# Accessibility

Every interactive element should support

- Keyboard Navigation
- Focus Visible
- Disabled State

Avoid mouse-only interactions.

---

# Responsive Design

Desktop first.

Responsive behavior should preserve functionality.

Do not hide critical interactions.

---

# Performance

Prefer

- CSS transitions
- Event delegation
- State-driven rendering

Avoid

- Excessive DOM updates
- Unnecessary re-rendering
- Duplicated state

---

# Documentation

Complex logic requires explanation.

If future developers must "figure it out,"

the implementation is incomplete.

---

# Refactoring

Refactor only when it improves

- readability
- maintainability
- scalability

Separate refactoring from feature work whenever possible.

---

# Code Review Checklist

Before merging, verify

- No hardcoded values
- Uses semantic tokens
- Follows folder responsibility
- Accessibility preserved
- Responsive behavior maintained
- Documentation updated
- SESSION.md updated if applicable

---

# Guiding Principle

Readable code scales.

Predictable architecture lasts.