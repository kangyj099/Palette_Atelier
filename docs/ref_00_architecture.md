# Palette Atelier Architecture

Palette -> State -> Renderer -> Components -> Preview

---

# Screen Structure

Header

Sidebar

Main

Footer

---

## Header

Palette Atelier 타이틀 영역.

---

## Sidebar

- Palette
- Theme
- Contrast (Accessibility)

---

## Main

탭 기반 Preview 영역.

Tabs

- Primitive
- Semantic
- Components
- App

현재 선택된 Palette / Theme 기준으로 선택된 탭의 Preview를 보여준다.

---

## Footer

Inspector

- Token Name
- HEX
- Contrast
- WCAG
- Used By

---

# Main Tabs

## Primitive

Primitive Color Token Preview.

## Semantic

Semantic Token Preview.

## Components

Button / Input / Badge / Card 등 실제 Component Preview.

## App

실제 OOTD App 화면 기준 Preview.

---

# Reference

Main Reference

```
┌──────────────────────────────────────────────────────────────┐
│ Palette Atelier                                              │
├──────────────┬───────────────────────────────────────────────┤
│              │                                               │
│ Palette      │  [Primitive] [Semantic] [Components] [App]    │
│ Theme        │                                               │
│ Contrast     │  ← 현재 탭                                   │
│              │                                               │
│              │  해당 탭의 Preview                           │
│              │                                               │
├──────────────┼───────────────────────────────────────────────┤
│ Inspector    │  Token Name                                  │
│              │  HEX                                          │
│              │  Contrast                                     │
│              │  WCAG                                         │
│              │  Used By                                      │
└──────────────┴───────────────────────────────────────────────┘
```

Sub Reference

```
┌─────────────────────────────────────────────────────────────────────┐
│ Palette Atelier                                      Theme  Export  │
├───────────────┬─────────────────────────────────────────────────────┤
│               │                                                     │
│ Palette List  │   Component Showcase                               │
│               │                                                     │
│ ○ Palette 1   │  Buttons                                            │
│ ○ Palette 2   │  [Primary] [Secondary] [Danger] [Disabled]          │
│ ○ Palette 3   │                                                     │
│ ○ Palette 4   │  Inputs                                             │
│ ○ Palette 5   │  ┌──────────────────────────────┐                   │
│               │  │ Default                      │                   │
│ Theme         │  └──────────────────────────────┘                   │
│ ○ Light       │                                                     │
│ ○ Dark        │  Badges                                             │
│               │  Default Info Success Warning Danger                │
│ Accessibility │                                                     │
│ ☑ Contrast    │  Card                                               │
│ ☑ Focus Ring  │  ┌──────────────────────────────┐                   │
│               │  │ Card Title                   │                   │
│               │  │ Description                  │                   │
│               │  │            [Action Button]   │                   │
│               │  └──────────────────────────────┘                   │
│               │                                                     │
│               │ Primitive Colors                                   │
│               │ █ █ █ █ █ █ █ █ █ █                                │
│               │ █ █ █ █ █ █ █ █ █ █                                │
│               │                                                     │
├───────────────┴─────────────────────────────────────────────────────┤
│ Inspector / Token Information / Accessibility Result               │
└─────────────────────────────────────────────────────────────────────┘
```
