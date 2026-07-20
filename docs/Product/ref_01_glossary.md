# Palette Atelier Glossary

> 이 문서는 Palette Atelier 프로젝트의 공식 용어집이다.
>
> 프로젝트 내에서 사용하는 용어는 이 문서를 기준(Source of Truth)으로 한다.
> 새로운 용어를 만들기 전에 기존 용어를 재사용할 수 있는지 먼저 확인한다.

---

# Project

## Palette Atelier

독립형 Design System Workbench.

OOTD(Outfit Of The Day) 앱 개발 과정에서 출발했으며,
현재는 특정 앱에 종속되지 않는 독립적인 디자인 시스템 도구로 발전하고 있다.

제품 비전에 대한 자세한 내용은 VISION.md를 참고한다.

---

# Color

## Palette

하나의 색상 컬렉션.

예)

- Linen Serenity
- Morning Sky
- Editorial
- Romantic

Palette는 여러 Color Token으로 구성된다.

---

## Theme

현재 활성화된 Palette.

애플리케이션은 항상 하나의 Theme만 가진다.

Theme가 변경되면 모든 UI는 자동으로 갱신된다.

---

## Color Token

실제 색상값을 추상화한 디자인 토큰.

예)

```css
--color-primary-500
--color-gray-100
--color-success-500
```

Color Token은 HEX 값을 직접 참조한다.

---

## Semantic Token

UI의 의미를 표현하는 토큰.

예)

```css
--button-primary-bg

--text-primary

--surface-base
```

Semantic Token은 Color Token을 참조한다.

컴포넌트는 Color Token이나 HEX 값을 직접 사용하지 않는다.

---

# UI

## Component

재사용 가능한 UI 단위.

예)

- Button
- Card
- Badge
- Chip
- Input
- Dialog

---

## Preview

현재 Theme가 실제 앱에서 어떻게 보이는지 보여주는 화면.

Preview는 디자인 검증을 위한 기능이다.

---

## Inspector

선택한 Component의 정보를 보여주는 패널.

예)

- 사용 중인 Token
- Radius
- Shadow
- Typography

---

## Surface

배경 역할을 하는 영역.

예)

- App Background
- Card
- Modal
- Sheet

Surface는 Elevation에 따라 시각적으로 구분된다.

---

## Elevation

Surface의 시각적 깊이.

Elevation은 Shadow와 Background를 함께 결정한다.

---

# Foundation

## Design Token

디자인 시스템을 구성하는 최소 단위.

예)

- Color
- Typography
- Radius
- Shadow
- Motion
- Spacing

---

## Typography

텍스트 스타일 정의.

예)

- Display
- Headline
- Title
- Body
- Label
- Caption

---

## Spacing

레이아웃 간격 시스템.

Palette Atelier는 8pt Grid System을 기본으로 사용한다.

---

## Radius

컴포넌트의 Corner Radius.

예)

- XS
- SM
- MD
- LG
- XL

---

## Motion

애니메이션 속도 및 동작 규칙.

예)

- Fast
- Default
- Slow

---

# Accessibility

## Contrast

텍스트와 배경의 명도 대비.

Palette Atelier는 WCAG AA 이상을 기본 목표로 한다.

---

## Color Blind Safe

색약 환경에서도 의미를 구분할 수 있는 색상 설계.

색상만으로 정보를 전달하지 않는다.

---

# Development

## Source of Truth

프로젝트의 공식 기준 문서.

Palette Atelier에서는 다음 문서가 Source of Truth이다.

- Glossary
- Design Tokens
- Component Documentation
- ADR

---

## ADR

Architecture Decision Record.

설계 결정을 기록하는 문서.

예)

ADR-0001

Semantic Token을 사용한다.

---

# Naming Rules

## CSS Variable

```text
--color-primary-500
--color-gray-100

--surface-base
--surface-elevated

--text-primary
--text-secondary
```

---

## CSS Class

```text
c-button
c-card

l-sidebar
l-header

u-hidden
u-flex
```

접두어 규칙

| Prefix | 의미 |
|---------|------|
| c- | Component |
| l- | Layout |
| u- | Utility |

---

## JavaScript

camelCase를 사용한다.

예)

```text
paletteEngine

themeState

componentRegistry

previewRenderer
```

---

# Project Principles

프로젝트 디자인 원칙은 ref_02_design-principles.md를 참고한다.

---

Last Updated

v1.0.0-alpha.1