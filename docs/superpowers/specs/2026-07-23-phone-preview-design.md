# Phone Preview — Design Spec

> Completes the last-but-one item in MVP Progress § Preview (Development/SESSION.md).
> Next after this: Accessibility Preview.

---

## Purpose

Let a user check how the currently active tab's content (Primitive, Semantic, Components, or App) behaves at a narrow, phone-like width, without leaving the tab they're on.

**Scope boundary**: Preview Mode simulates layout width only. It does not emulate device-specific behavior, browser APIs, or media features (no touch emulation, no device pixel ratio, no `hover`/`pointer` media feature overrides). This is a deliberate Phase 1 limit — see Phase 2 note below.

---

## State

`src/js/state.js` gains one flat field, following the existing `currentPalette` / `currentMode` pattern:

```js
previewMode: 'desktop', // 'desktop' | 'phone'
```

---

## HTML

The header's existing disabled placeholder button is replaced with a real toggle:

```html
<!-- before -->
<button class="c-button c-button--secondary" type="button" disabled>Soon</button>

<!-- after -->
<button class="c-button c-button--secondary" type="button" data-action="toggle-preview">Desktop</button>
```

The button's label always reflects the *current* state: starts as "Desktop"; after a click it reads "Phone" (and the frame is active); another click returns it to "Desktop".

No other markup changes — header, footer, and all four tab panels stay exactly as they are. Only the `.l-content` wrapper is affected, via CSS attribute selector (see below).

---

## JavaScript (`src/js/palette-engine.js`)

Mirrors the existing `initMode()` / `setMode()` pair exactly:

```js
initPreviewMode() {
  const button = document.querySelector('[data-action="toggle-preview"]');

  if (!button) return;

  button.addEventListener('click', () => {
    const next = state.previewMode === 'desktop' ? 'phone' : 'desktop';
    this.setPreviewMode(next);
  });
},

setPreviewMode(mode) {
  state.previewMode = mode;
  document.documentElement.dataset.preview = mode;

  const button = document.querySelector('[data-action="toggle-preview"]');
  button.textContent = mode === 'phone' ? 'Phone' : 'Desktop';
},
```

`src/js/app.js` calls `paletteEngine.initPreviewMode();` alongside the other `init*()` calls.

This preserves the established convention: JS only flips a `data-*` attribute on `<html>` (and, here, a button label) — it never touches layout or color directly. CSS owns what `data-preview="phone"` actually does.

---

## CSS

**`src/css/tokens.css`** — one new Foundation token, in a new "Preview" subsection alongside Spacing/Radius/Shadow/Motion:

```css
/* ==========================================================
   Foundation Tokens
   Preview
   ========================================================== */

--preview-phone-width: 390px;
```

**`src/css/layout.css`** — one new rule, near the existing `.l-content` definition:

```css
/* Preview Mode simulates layout width only — it does not emulate
   device-specific behavior, browser APIs, or media features. */
[data-preview="phone"] .l-content > [data-panel] {
  max-width: var(--preview-phone-width);
  margin-inline: auto;

  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
}
```

Every one of the four panels (`primitive`, `semantic`, `components`, `app`) already carries a `data-panel` attribute as a direct child of `.l-content` — this rule targets that existing hook, so no new wrapper element is needed. Header, footer, **and the tab bar** stay full-width in Phone mode — only the active panel's content narrows and centers with a subtle border, like a plain framed box (no device chrome, no notch/bezel).

No new responsive/media-query CSS is added. The whole point of the feature is to reveal how the *existing* flex-wrap layouts (`.p-palette`, `.p-showcase__row`, etc.) already behave at 390px — if something wraps awkwardly, that's the feature doing its job, not a bug to fix in this commit.

---

## Files touched

- `src/js/state.js` — add `previewMode` field
- `src/js/palette-engine.js` — add `initPreviewMode()` / `setPreviewMode()`
- `src/js/app.js` — call `initPreviewMode()`
- `src/index.html` — replace disabled "Soon" button with the toggle
- `src/css/tokens.css` — add `--preview-phone-width` token
- `src/css/layout.css` — add `[data-preview="phone"] .l-content` rule

---

## Phase 2 addition (Product/ROADMAP.md)

New subsection under **Phase 2 — Design Validation**:

```
## Preview Frame

Separate Preview Mode (device-width simulation) out of
palette-engine.js into its own dedicated module.

Phase 1's Preview Mode only simulates layout width — it does not
emulate device-specific behavior, browser APIs, or media features.
Revisit once Preview Mode grows (device chrome, more breakpoints,
real emulation) enough to justify its own module.
```

---

## Out of scope (deliberately not part of this commit)

- Additional breakpoints (tablet, large display) — parked as "Responsive Preview" in ROADMAP.md's Future Ideas.
- Device chrome / bezel styling — user chose the plain-box style explicitly.
- Any change to Components/App tab content itself — Phone Preview only constrains width, it doesn't add mobile-specific variants of components.
