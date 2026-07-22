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

제품 비전에 대한 자세한 내용은 Core/VISION.md를 참고한다.

---

## Design System Workbench

Palette Atelier의 제품 정체성.

색상 관리 도구를 넘어, 디자인 시스템을 만들고(Build), 미리보고(Preview), 검증하고(Validate), 비교하고(Compare), 문서화하고(Document), 내보내는(Export) 전 과정을 다루는 작업 환경.

단순 팔레트 생성기나 CSS 플레이그라운드가 아니다.

자세한 근거는 Reference/DECISIONS.md D-006을 참고한다.

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

현재 적용 중인 Palette와 Mode의 조합.

색상 자체를 가리킬 때는 Palette, 밝기(명암) 축을 가리킬 때는 Mode라고 지칭한다. 둘을 섞어 쓰지 않는다.

애플리케이션은 항상 하나의 Theme(= 하나의 Palette + 하나의 Mode)만 가진다.

Theme가 변경되면(Palette가 바뀌거나 Mode가 바뀌거나) 모든 UI는 자동으로 갱신된다.

자세한 근거는 Reference/DECISIONS.md D-015를 참고한다.

---

## Mode

Theme를 구성하는 밝기(명암) 축. Palette와 독립적으로 전환된다.

예)

- Light
- Dark

동일한 Palette라도 Mode에 따라 다르게 렌더링될 수 있다.

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

## Workspace

사용자가 Palette를 만들고, 미리보고, 검증하는 상호작용 환경 전체.

Preview, Inspector 등 개별 화면을 담는 상위 개념이다.

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

# Validation

## Rule Engine

측정 가능한 규칙으로 디자인 시스템을 평가하는 시스템.

예)

- Contrast
- Naming
- Typography
- Spacing
- Consistency

주관적 AI 평가가 아닌, 결정론적(deterministic) 규칙으로 동작한다.

자세한 근거는 Reference/DECISIONS.md D-003, D-004를 참고한다.

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

프로젝트 디자인 원칙은 Reference/DESIGN_PRINCIPLES.md를 참고한다.

---

This is a living document — reviewed and updated as terminology evolves, not tied to a release version.