# TESTING

> Testing strategy for Palette Atelier.

---

# Testing Philosophy

Every feature should be validated before release.

Testing focuses on

- Functionality
- Accessibility
- Consistency
- Responsiveness
- Regression

---

# Manual Testing Checklist

## Tokens

- Semantic tokens resolve correctly
- No hardcoded values
- Theme switching updates all tokens

---

## Components

Every component should verify

- Default
- Hover
- Focus
- Active
- Disabled

---

## Layout

Verify

- Desktop
- Tablet
- Mobile

No broken layouts.

---

## Accessibility

Verify

- Keyboard navigation
- Focus visibility
- Contrast
- Screen reader labels (future)

---

## Inspector

Verify

- Token selection
- Token metadata
- Contrast values
- Usage information

---

## Preview

Verify

- Palette rendering
- Component rendering
- Theme switching

---

## Regression Testing

After every feature

Verify

- Existing components
- Existing themes
- Existing preview
- Existing inspector

Nothing previously working should break.

---

# Performance Checklist

- No unnecessary re-rendering
- No duplicated state
- Smooth interactions

---

# Testing Principle

Test user behavior.

Not implementation details.