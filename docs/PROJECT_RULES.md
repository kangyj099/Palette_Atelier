# PROJECT_RULES.md

Version: v1.0.0

---

# Purpose

이 문서는 Palette Atelier 프로젝트의 개발 규칙을 정의한다.

AI와 사람이 함께 개발할 때 항상 따라야 하는 규칙이다.

PROJECT_CONTEXT.md가 프로젝트를 설명한다면,

PROJECT_RULES.md는 작업 방식을 정의한다.

---

# Core Principle

설명보다 코드.

긴 기획보다
실제 작업물을 우선한다.

새로운 아이디어보다
현재 Release를 완성하는 것을 우선한다.

한 응답에서 반드시 최소 1개의 실제 프로젝트 파일을 생성한다.

---

# Development Flow

모든 작업은 아래 순서를 따른다.

Issue

↓

Commit

↓

Review

↓

Git Commit

↓

Next Commit

한 번에 큰 기능을 만들지 않는다.

작은 커밋을 계속 쌓는다.

---

# Commit Rule

하나의 Commit은

하나의 논리적 변경만 포함한다.

좋은 예

feat(tokens): add primitive color tokens

feat(button): implement primary button

docs(tokens): document semantic token layer

좋지 않은 예

feat: update everything

---

# File Rule

가능하면

한 Commit에서 수정하는 파일 수를 최소화한다.

단,

논리적으로 하나의 변경이라면

여러 파일 수정은 허용한다.

예)

Button 추가

↓

button.css

button.js

button.md

preview.html

동시에 수정 가능

---

# MVP Rule

현재 Release 범위를 변경하지 않는다.

새로운 기능은

ROADMAP.md

에만 기록한다.

즉시 구현하지 않는다.

---

# Design Rule

새로운 Component를 만들기 전에

반드시

Semantic Token

존재 여부를 확인한다.

필요하면

Token부터 만든다.

---

Component는

HEX 값을 직접 사용하지 않는다.

Color Token도 직접 사용하지 않는다.

Semantic Token만 사용한다.

---

# Documentation Rule

새로운 기능은

반드시 Documentation을 가진다.

최소 작성 항목

- Purpose
- Usage
- Accessibility
- Token
- Example

---

# Naming Rule

CSS Variable

--color-primary-500

--surface-base

--text-primary

Component

c-button

c-card

Layout

l-sidebar

l-header

Utility

u-flex

u-hidden

JavaScript

camelCase

themeState

paletteEngine

previewRenderer

---

# CSS Rule

CSS는 역할별로 분리한다.

tokens.css

↓

디자인 토큰

base.css

↓

Reset

Typography

Global

layout.css

↓

Grid

Header

Sidebar

components.css

↓

Button

Card

Badge

preview.css

↓

Phone Preview

Desktop Preview

utilities.css

↓

Utility Class

---

# JavaScript Rule

state.js

↓

현재 상태

palette-engine.js

↓

Theme 변경

renderer.js

↓

UI 갱신

preview-engine.js

↓

Preview 렌더링

utils.js

↓

공통 함수

---

# Docs Rule

docs/

ref_00_architecture.md

ref_01_glossary.md

ref_02_design-principles.md

ref_03_project-brief.md

ref_04_token-guidelines.md

ref_05_component-guidelines.md

ref_06_accessibility.md

log_07_adr/

ref_ : 참고/정적 문서

log_ : 의사결정 등 누적 문서

새로운 시스템이 추가되면

관련 문서를 함께 작성한다.

---

# AI Rule

AI는

기획을 계속 확장하지 않는다.

Roadmap에만 기록한다.

---

AI는

기존 네이밍을 변경하지 않는다.

새로운 용어를 만들지 않는다.

---

AI는

설명보다

코드를 우선한다.

---

AI는

기존 구조를 존중한다.

큰 리팩토링은

ADR 작성 후 진행한다.

---

# Quality Checklist

Commit 전에 확인한다.

- 기존 구조를 깨지 않았는가?
- Semantic Token을 사용했는가?
- 접근성을 고려했는가?
- Documentation을 작성했는가?
- Preview를 추가했는가?
- Naming Convention을 지켰는가?

---

# Release Rule

Release는

항상 실행 가능해야 한다.

Build Error가 없어야 한다.

index.html을 실행하면

항상 정상 동작해야 한다.

---

# Long-term Goal

Palette Atelier는

단순한 컬러 도구가 아니다.

Palette Atelier는

OOTD App의

Design Source of Truth

이다.

모든 디자인 변경은

Palette Atelier에서 먼저 검증한 후

실제 프로젝트에 반영한다.