# REVIEW_LOG

> Running log of code review outcomes for Palette Atelier.
>
> Three kinds of entries live here:
> 1. Non-essential review feedback that was judged and intentionally left unapplied.
> 2. Out-of-scope improvement/refactor suggestions raised during review — not yet triaged into Product/IDEA_BACKLOG.md or Product/ROADMAP.md.
> 3. Violations of a documented project principle found in AI-produced work — logged whether or not they were fixed immediately.
>
> Entries are surfaced to the maintainer at test handoff (see Core/PROJECT_RULES.md § Test Handoff). Types 1-2 are pruned once triaged or dismissed; type 3 entries stay as a record even after being fixed.
>
> This is a working document, not a source of truth. See "Working Documents" in document_index.md.

---

# Format

Each entry:

```
## [YYYY-MM-DD] Commit or feature — one-line summary

Type: Deferred Feedback | Out-of-Scope Suggestion | Principle Violation

What: ...

Why not applied now: ...                    (Deferred Feedback / Out-of-Scope Suggestion)
Principle violated: ...                     (Principle Violation)
Resolution: Fixed in this commit | Left as-is because ...   (Principle Violation)
```

---

# Log

## [2026-07-23] 73d2376 feat(inspector): add Copy + Toast to complete Phase 1 (Viewer) scope

Type: Out-of-Scope Suggestion

What: Copy/Toast logic (`copyHex`, `showToast`, `initInspectorActions`) was added to `renderer.js` alongside the existing `inspectToken`/`initTabs`. Core/ARCHITECTURE.md's planned "Future" folder structure names a dedicated `inspector.js` module, separate from the renderer.

Why not applied now: The addition is ~20 lines and `inspector.js` doesn't exist yet — splitting it out now would be a premature module for a small feature (PROJECT_RULES § Refactoring Rule / Avoid unnecessary abstractions). Worth revisiting once Inspector picks up more scope (Component Information, Usage Information per Product/ROADMAP.md), at which point `renderer.js` growing further would justify the split called out in ARCHITECTURE.md.
