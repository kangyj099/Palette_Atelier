# Palette Atelier Design Principles

> 본 문서는 Palette Atelier의 디자인 철학을 정의한다.
>
> 새로운 기능이나 컴포넌트를 추가할 때는 반드시 이 문서를 먼저 확인한다.
>
> 이 문서는 프로젝트의 Design Source of Truth이다.

---

# 1. Product Vision

Palette Atelier의 Product Vision은 Core/VISION.md를 참고한다.

---

# 2. Core Philosophy

## Photos First

사용자가 기록한 사진이 항상 가장 중요하다.

UI는 사진을 꾸미는 역할이 아니라,
사진을 더 잘 보여주는 역할을 한다.

### Guidelines

- 불필요한 장식 금지
- 강한 그림자 최소화
- 과한 Gradient 사용 금지
- 사진보다 눈에 띄는 UI 금지

---

## Soft, Not Weak

Palette Atelier는 부드러운 분위기를 추구한다.

하지만 흐릿하거나
대비가 부족한 UI를 의미하지 않는다.

감성은 유지하되
정보 전달은 명확해야 한다.

### DO

- 따뜻한 중립색
- 절제된 블루
- 낮은 채도의 포인트 컬러

### DON'T

- 과한 파스텔
- 과도한 비비드 컬러
- 회색만으로 구성된 UI

---

## Elegant Simplicity

복잡한 UI보다
이해하기 쉬운 UI를 만든다.

새로운 기능보다
일관성을 우선한다.

---

## Visual Direction

Inspiration

- Apple Human Interface Guidelines
- Linear
- Raycast
- Vercel
- Arc Browser

Keywords

- Warm
- Elegant
- Editorial
- Soft
- Minimal
- Timeless

---

# 3. Color Principles

## Neutral First

Neutral Color는 프로젝트의 기반이다.

Primary Color보다 먼저 설계한다.

Neutral은

- Background
- Surface
- Divider
- Text

를 담당한다.

---

## Accent Is Rare

Accent Color는 제한적으로 사용한다.

사용 예

- Badge
- Notification
- Selected State
- Highlight

Accent는 화면의 5~10%를 넘지 않는 것을 권장한다.

---

## Information Has Priority

정보 전달 색상은 감성보다 우선한다.

Primary보다 Success, Warning, Danger의 구분이 더 중요하다.

모든 상태 색상은 색약 환경에서도 구분 가능해야 한다.

---

## Core Palette Direction

메인 컬러는 Warm Ivory, Warm Beige, Linen, Sky Blue, Serenity Blue 계열을 중심으로 한다.

과도한 비비드 컬러는 사용하지 않는다.

---

# 4. Accessibility

접근성은 기능이 아니다.

기본값이다.

Palette Atelier는 WCAG AA를 기본 목표로 한다.

### Principles

- 색상만으로 정보를 전달하지 않는다.
- Hover만 존재하는 기능을 만들지 않는다.
- Focus State를 항상 제공한다.
- Keyboard Navigation을 고려한다.

---

# 5. Components

모든 컴포넌트는

Semantic Token

↓

Component

↓

Preview

↓

Documentation

순서로 제작한다.

HEX 값을 직접 사용하는 컴포넌트는 허용하지 않는다.

---

# 6. Design Tokens

모든 시각 요소는 Design Token으로 관리한다.

포함 대상

- Color
- Typography
- Radius
- Shadow
- Motion
- Spacing

---

# 7. Motion

Motion은 정보를 보조하는 역할이다.

애니메이션은 눈에 띄기 위해 존재하지 않는다.

권장

- 150~250ms
- Ease Out
- 자연스러운 감속

지양

- Bounce
- Elastic
- 과도한 Scale Animation

---

# 8. Layout

8pt Grid System을 사용한다.

예외적으로

- Border
- Divider
- Hairline

은 1px 사용 가능하다.

---

# 9. Documentation

모든 주요 기능은 문서를 가진다.

새로운 컴포넌트를 추가할 경우 반드시 다음을 작성한다.

- 사용 목적
- 사용 예시
- 사용하지 말아야 할 사례
- 사용 Token
- Accessibility Notes

---

# 10. Long-term Goal

Palette Atelier의 장기 목표는 Core/VISION.md를 참고한다.

---

# Checklist

새로운 기능을 만들기 전 확인한다.

- [ ] 기존 컴포넌트를 재사용할 수 있는가?
- [ ] Semantic Token을 사용하는가?
- [ ] 접근성을 고려했는가?
- [ ] 사진을 방해하지 않는가?
- [ ] 문서를 함께 작성했는가?

---

Last Updated

v1.0.0-alpha.1