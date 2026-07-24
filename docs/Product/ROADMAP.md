# ROADMAP

> Development roadmap for Palette Atelier.
> This document defines project priorities, implementation phases and long-term direction.

---

# Current Status

For current version, milestone, and progress, see Development/SESSION.md — this document tracks planning only, not implementation status.

---

# Development Strategy

Palette Atelier follows an **MVP First** strategy.

Every phase must produce a usable product before expanding into more advanced capabilities.

Features are prioritized by practical value rather than technical complexity.

---

# Phase 1 — MVP

Goal:

Deliver a complete and usable Design System Workbench.

> Completion state for every item below is tracked in Development/SESSION.md § MVP Progress, not here.

## Design Tokens

- Primitive Tokens
- Semantic Tokens
- Component Tokens

---

## Foundation

- Base Styles
- Layout System
- Components
- Utilities

---

## Preview

- Primitive Preview
- Semantic Preview
- Component Showcase
- Dynamic Palette Rendering
- Mode Switching
- Phone Preview
- Accessibility Preview

---

## Inspector

- Token Inspector
- Sticky Inspector Improvements
- Component Information
- Usage Information

---

## Palette Management

- Add Palette
- Edit Palette
- Delete Palette
- Import Palette
- Export Palette

---

## Export

- CSS Export
- JSON Export

---

## Completion Criteria

Phase 1 is complete when a user can:

- Create palettes
- Preview every token
- Inspect token information
- Validate accessibility
- Preview components
- Export production-ready tokens

---

# Phase 2 — Design Validation

Goal:

Help users evaluate design quality instead of only displaying tokens.

## Rule Engine

- Design Rules
- Accessibility Rules
- Naming Rules
- Consistency Rules
- Token Validation

---

## Accessibility

- WCAG Contrast
- Touch Target Size
- Typography Validation
- Color Blind Preview

---

## Preview Frame

Separate Preview Mode (device-width simulation) out of
palette-engine.js into its own dedicated module.

Phase 1's Preview Mode only simulates layout width — it does not
emulate device-specific behavior, browser APIs, or media features.
Revisit once Preview Mode grows (device chrome, more breakpoints,
real emulation) enough to justify its own module.

---

## Design Score

Automatic scoring based on measurable rules.

Examples:

- Contrast
- Consistency
- Naming
- Spacing
- Typography
- Component Coverage

---

## Component Playground

Interactive editing environment.

Users can modify:

- Tokens
- Components
- States

and immediately observe changes.

---

## Palette Comparison

Compare two palettes side by side.

Show:

- Changed Colors
- Contrast Difference
- Token Difference
- Component Difference

---

## Documentation

Automatic documentation generation.

Examples:

- Token Reference
- Component Reference
- Color Documentation

---

# Phase 3 — Design System Workbench

Goal:

Turn Palette Atelier into a complete design system platform.

## Workspace

Multiple projects

Multiple themes

Workspace management

---

## Dependency Graph

Visualize relationships between:

Tokens

↓

Components

↓

Screens

---

## Design Audit

Analyze an entire design system.

Examples:

- Duplicate Tokens
- Unused Tokens
- Missing States
- Inconsistent Components

---

## Multi Theme

A Theme is a Palette + Mode combination (see Reference/GLOSSARY.md).

Support:

- Mode: Light / Dark
- Additional Palettes: Brand, Seasonal, etc.

---

## Plugin System

Allow external modules to extend Palette Atelier.

Examples:

- Export Plugins
- Validation Plugins
- Theme Plugins

---

# Future Ideas

The following ideas are intentionally postponed.

They are valuable, but should never delay the MVP.

## Learning Mode

Explain design decisions while users edit.

---

## Design Recipes

Provide reusable token presets.

Examples:

- Minimal
- Material
- Apple-inspired
- KRDS
- Soft UI

---

## Palette Genetics

Generate palette variations while preserving design intent.

---

## Design Diff

Compare two versions of a design system.

Highlight:

- Added Tokens
- Removed Tokens
- Modified Tokens

---

## Dependency Heatmap

Visualize how frequently tokens are used.

---

## Animation Preview

Preview transition and motion tokens.

---

## Responsive Preview

Desktop

Tablet

Mobile

Large Display

---

## Accessibility Simulator

Preview:

- Low Vision
- Color Blindness
- High Contrast
- Reduced Motion

---

## Token History

Track every change made to design tokens.

---

## Design System Timeline

Visual history of project evolution.

---

# Ideas Under Research

These concepts require further validation before implementation.

- AI-assisted Design Review
- AI-generated Token Suggestions
- Automatic Design Refactoring
- Screenshot Analysis
- Design Import from Images

AI should always remain optional.

---

# Prioritization Rules

When deciding whether to implement a feature:

1. Does it improve the MVP?
2. Does it improve the current workflow?
3. Can it be implemented without increasing unnecessary complexity?
4. Does it align with the product vision?

If the answer is **No**, move the feature to a later phase.

---

# Definition of Success

Palette Atelier succeeds when users can:

✔ Build

✔ Preview

✔ Validate

✔ Compare

✔ Document

their design system without switching tools.

---

# Roadmap Policy

This roadmap is a living document.

Implementation order may change.

Product philosophy must not.