# PROJECT_CONTEXT.md

# Palette Atelier

Version: v1.0.0-alpha.1

---

# Project Overview

Palette Atelier는 OOTD(Outfit Of The Day) 아카이빙 앱을 위한 디자인 시스템이자 디자인 플레이그라운드이다.

Palette Atelier는 단순한 컬러 팔레트 뷰어가 아니라,

- Design System
- Component Library
- Theme Playground
- Accessibility Playground
- Design Documentation

역할을 동시에 수행한다.

Palette Atelier는 실제 OOTD App과 동일한 디자인 언어를 사용하며,
프로젝트의 Design Source of Truth 역할을 한다.

---

# Primary Goal

가장 중요한 목표는

"OOTD 앱을 빠르고 일관성 있게 개발할 수 있는 디자인 시스템"

을 구축하는 것이다.

Palette Atelier 자체가 목적이 아니라,
OOTD App 개발을 위한 기반이다.

---

# Design Philosophy

## Photos First

사용자가 기록한 OOTD 사진이 가장 중요하다.

모든 UI는 사진을 방해하지 않는다.

---

## Soft but Clear

감성적이고 부드러운 분위기를 추구한다.

그러나

- 흐릿한 UI
- 낮은 대비
- 정보 전달이 어려운 색상

은 허용하지 않는다.

감성보다 정보 전달을 우선한다.

---

## Elegant Minimalism

장식을 줄이고

여백

비율

타이포그래피

컬러

로 분위기를 만든다.

---

# Visual Direction

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

# Color Strategy

메인 컬러는

- Warm Ivory
- Warm Beige
- Linen
- Sky Blue
- Serenity Blue

계열을 중심으로 한다.

과도한 비비드 컬러는 사용하지 않는다.

Accent는 제한적으로 사용한다.

Information Colors는 감성보다 시인성을 우선한다.

모든 상태 색상은 색약 환경에서도 구분 가능하도록 설계한다.

WCAG AA를 기본 목표로 한다.

---

# Technical Stack

Vanilla HTML

Vanilla CSS

Vanilla JavaScript

빌드 과정 없이

index.html을 바로 실행할 수 있어야 한다.

React

Vue

Svelte

TypeScript

Build Tool은 사용하지 않는다.

---

# Project Structure

palette-atelier/

README.md

CHANGELOG.md

ROADMAP.md

LICENSE

docs/

src/

exports/

---

# Docs Structure

docs/

00-glossary.md

01-design-principles.md

02-project-brief.md

03-architecture.md

04-token-guidelines.md

05-component-guidelines.md

06-accessibility.md

07-adr/

---

# Development Principles

모든 기능은

Semantic Versioning

을 따른다.

예)

v1.0.0-alpha.1

---

Commit 단위로 개발한다.

커밋 하나는

하나의 논리적 변경만 포함한다.

---

새로운 기능은

즉시 구현하지 않는다.

ROADMAP에 먼저 기록한다.

---

MVP를 먼저 완성한다.

추가 기능은 v2 이후로 미룬다.

---

# MVP Scope

Palette

Theme Engine

Preview

Accessibility

Export

여기까지를 v1의 범위로 한다.

---

# Architecture

Primitive Token

↓

Semantic Token

↓

Component Token

↓

Component

↓

Preview

모든 컴포넌트는

Semantic Token만 참조한다.

HEX 값을 직접 사용하지 않는다.

---

# Design Tokens

Layer 1

Primitive

실제 색상

예)

--color-blue-500

---

Layer 2

Semantic

의미 기반 토큰

예)

--surface-base

--text-primary

--border-default

---

Layer 3

Component

컴포넌트 전용 토큰

예)

--button-primary-bg

--card-bg

---

# Naming Convention

CSS Variables

--color-primary-500

--surface-base

--text-primary

Component Class

c-button

c-card

Layout Class

l-sidebar

l-header

Utility Class

u-hidden

u-flex

JavaScript

camelCase

예)

themeState

paletteEngine

previewRenderer

componentRegistry

---

# Foundation

Spacing

8pt Grid 기반

4pt 단위도 지원한다.

---

Radius

XS

SM

MD

LG

XL

FULL

---

Typography

Display

Headline

Title

Body

Label

Caption

---

Shadow

SM

MD

LG

---

Motion

Fast

Default

Slow

---

# Accessibility

접근성은 기능이 아니라 기본값이다.

반드시 고려한다.

- WCAG AA
- Keyboard Navigation
- Focus Visible
- Color Blind Safe
- 색상만으로 의미 전달 금지

---

# Documentation Rule

새로운 컴포넌트를 추가할 경우

반드시 함께 작성한다.

- Documentation
- Preview
- Token
- Accessibility Notes

---

# AI Development Rule

AI는 새로운 기능을 제안하지 않는다.

새로운 아이디어는

ROADMAP.md

에만 기록한다.

현재 Release의 범위를 변경하지 않는다.

---

AI는

설명보다

코드 생산을 우선한다.

---

# Current Status

Completed

✅ Project Skeleton

✅ Glossary

✅ Design Principles

Next

Design Token Foundation

파일

src/css/tokens.css

---

# Long-term Goal

Palette Atelier는

OOTD 앱과 함께 성장하는 디자인 시스템이다.

Palette Atelier는

디자인 시스템

+

디자인 문서

+

컴포넌트 플레이그라운드

+

접근성 검증 도구

역할을 수행한다.

모든 디자인 변경은 Palette Atelier에서 먼저 검증한 후 실제 OOTD App에 적용한다.