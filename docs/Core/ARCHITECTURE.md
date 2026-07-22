# ARCHITECTURE

> High-level architecture of Palette Atelier.
>
> This document describes how the platform is organized,
> how each layer communicates,
> and the responsibilities of every subsystem.

---

# Architecture Philosophy

Palette Atelier follows a modular architecture.

Each module has a single responsibility.

Modules communicate through well-defined interfaces.

No module should own responsibilities belonging to another layer.

---

# Core Principles

## Separation of Concerns

Each layer owns exactly one responsibility.

Visual

↓

Logic

↓

Validation

↓

Export

---

## One Source of Truth

Every piece of information has exactly one authoritative location. Modules and documents consume data from that location — they never redefine it.

Examples

Colors → tokens.css

State → state.js

Preview → renderer.js

Rules → rule-engine.js

Current Status → Development/SESSION.md

Roadmap → Product/ROADMAP.md

Ideas → Product/IDEA_BACKLOG.md

Architecture → Core/ARCHITECTURE.md

Decision rationale: Reference/DECISIONS.md D-010.

---

## Read, Don't Duplicate

Modules consume data.

They never redefine it.

---

# Platform Overview

```
               User
                 │
                 ▼
        ┌─────────────────┐
        │     Workspace    │
        └─────────────────┘
                 │
        ┌────────┴────────┐
        ▼                 ▼
 Preview Engine      Inspector
        │                 │
        └────────┬────────┘
                 ▼
           Design Tokens
                 │
        ┌────────┴────────┐
        ▼                 ▼
 Rule Engine       Export Engine
        │                 │
        └────────┬────────┘
                 ▼
            Production
```

---

# Layer Responsibilities

## 1. Design Tokens

Owns every visual value.

Examples

- Colors
- Typography
- Radius
- Shadows
- Spacing
- Motion

Implementation

```
tokens.css
```

---

## 2. State Layer

Stores application state.

Examples

- Current Theme
- Selected Palette
- Selected Token
- Active Component

Implementation

```
state.js
```

The State Layer never owns visual values.

---

## 3. Rendering Layer

Transforms state into UI.

Responsibilities

- Render Palette
- Render Components
- Render Inspector
- Render Preview

Implementation

```
renderer.js

preview-engine.js

palette-engine.js
```

---

## 4. Validation Layer

Evaluates design quality.

Examples

- Contrast
- WCAG
- Naming
- Consistency
- Typography

Future

```
rule-engine.js
```

Validation never changes tokens.

It only evaluates them.

---

## 5. Export Layer

Converts the current workspace into production assets.

Examples

- CSS
- JSON
- Theme Package

Future

```
export-engine.js
```

---

# Data Flow

```
User

↓

State

↓

Renderer

↓

Preview

↓

Inspector

↓

Validation

↓

Export
```

Every flow is one-directional.

---

# Folder Structure

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

Future

```
js/

app.js

state.js

renderer.js

preview-engine.js

palette-engine.js

rule-engine.js

inspector.js

export-engine.js

mode-engine.js

storage.js
```

---

# CSS Architecture

Palette Atelier follows a layered CSS structure.

```
Primitive

↓

Semantic

↓

Component

↓

Utilities

↓

Preview
```

Each layer depends only on the layer below it.

Example

Primitive

↓

Semantic

↓

Button

Never

Button

↓

Primitive

---

# JavaScript Architecture

JavaScript is divided by responsibility.

```
Application

↓

State

↓

Renderer

↓

Feature Engines

↓

Utilities
```

Feature Engines should never directly manipulate each other.

Communication happens through State.

---

# Rendering Pipeline

```
State Changed

↓

Renderer

↓

DOM Update

↓

Inspector Update

↓

Accessibility Check
```

Future versions may optimize this pipeline with selective rendering.

---

# Inspector

The Inspector is treated as a debugging system.

Responsibilities

- Token Details
- Usage
- Dependencies
- Contrast
- Accessibility
- Rule Results
- Suggestions

The Inspector never owns design data.

It visualizes existing data.

---

# Rule Engine

Future architecture

```
Tokens

↓

Rule Engine

↓

Results

↓

Inspector
```

Examples

Contrast

Spacing

Typography

Naming

Consistency

Every rule should produce

Result

Reason

Recommendation

---

# Theme System

A Theme is composed of two independent axes.

Palette

→ the color collection (e.g. Linen Serenity, Morning Sky)

Mode

→ the brightness axis (Light / Dark)

A Theme is exactly one Palette + one Mode. Palette and Mode switch independently — changing one never changes the other.

Terminology reference: Reference/GLOSSARY.md.

Future

```
Theme

↓

Semantic Tokens

↓

Components

↓

Preview
```

Themes should never duplicate components.

Only semantic tokens change.

---

# Export System

```
Workspace

↓

Exporter

↓

CSS

JSON

Documentation
```

The exporter reads tokens.

It never creates new design values.

---

# Plugin Architecture

Future versions will expose extension points.

Examples

Validation Plugins

Export Plugins

Theme Plugins

Documentation Plugins

Plugins may extend the platform without modifying the core.

---

# Dependency Direction

Allowed

```
Tokens

↓

Renderer

↓

Preview

↓

Inspector
```

Not Allowed

```
Inspector

↓

Renderer

↓

Tokens
```

Lower layers never depend on higher layers.

---

# Scalability

Future growth should happen by adding modules,
not increasing coupling.

Preferred

```
+ rule-engine.js

+ export-engine.js

+ plugin-engine.js
```

Avoid

```
renderer.js

8,000 lines
```

---

# Architecture Goals

Palette Atelier should always remain

- Modular
- Predictable
- Explainable
- Testable
- Extensible
- Maintainable

Every architectural decision should improve at least one of these qualities.

---

# Final Principle

> A feature is complete only when it fits naturally into the architecture.