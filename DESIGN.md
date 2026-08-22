---
name: Aperlo Design System
description: Precision screenshot builder and store asset generator for Android & indie developers
colors:
  bg: "#F5F7F5"
  surface: "#FFFFFF"
  surface-raised: "#EEF1EE"
  surface-muted: "#E7EBE7"
  border-subtle: "#DCE0DC"
  border-default: "#C8CEC8"
  border-strong: "#A0A8A0"
  ink-primary: "#141A14"
  ink-secondary: "#475247"
  ink-muted: "#7D877D"
  ink-disabled: "#B0B8B0"
  accent: "#1A6B4A"
  accent-hover: "#145A3D"
  accent-tint: "#E8F3ED"
  accent-on: "#FFFFFF"
  mint-glow: "#4ADE80"
  destructive: "#C0392B"
  window-close: "#E74C3C"
  window-min: "#F39C12"
  window-max: "#2ECC71"
  preset-blue: "#1A3A5C"
  preset-deep-emerald: "#0E4830"
  preset-terracotta: "#3A1A12"
  preset-sage: "#2A3D2E"
  preset-forest-deep: "#1E241E"
  preset-forest-card: "#273327"
  preset-forest-border: "#2F3D2F"
  preset-forest-muted: "#8E9E8E"
  preset-green: "#16A34A"
  oled-bg: "#111318"
  oled-surface: "#1C2026"
  oled-card: "#151921"
  oled-border: "#1F2530"
  oled-highlight: "#283240"
  ocean-deep: "#0D3B6E"
  neutral-dark: "#1C1C1E"
typography:
  display:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(38px, 7vw, 76px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-2.5px"
  headline:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(28px, 4.5vw, 52px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-1.2px"
  title:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(20px, 3vw, 34px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.8px"
  title-alt:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(22px, 3vw, 34px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.8px"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "12.5px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.5px"
rounded:
  xs: "4px"
  sm: "6px"
  md-sm: "7px"
  md: "10px"
  lg-sm: "12px"
  lg: "18px"
  xl: "22px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "48px"
  xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-on}"
    rounded: "{rounded.lg-sm}"
    padding: "13px 26px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.lg-sm}"
    padding: "13px 26px"
  badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
---

# Design System: Aperlo

## Overview

**Creative North Star: "The Precision Drafting Room"**

Aperlo's visual system evokes the precision, restraint, and tactile confidence of specialized drafting software. Rather than feeling like generic marketing SaaS or a playful consumer editor, the interface treats store asset creation as an architectural discipline: crisp 1px borders, high-contrast typography, deep forest obsidian tones, and deliberate white space.

The aesthetic philosophy centers on the canvas: controls, panels, and badges recede into warm structural neutrals (`#F5F7F5`, `#DCE0DC`), allowing the vivid templates and exported screenshot mockups to command total visual dominance.

**Key Characteristics:**
- **Restrained Materiality**: Clean planar surfaces with crisp hairline borders (`1px solid #DCE0DC`) rather than heavy blurred drop-shadows.
- **Architectural Typography**: Geometric, characterful headlines in Syne paired with surgical, readable body prose in DM Sans.
- **Deep Emerald Accent**: High-authority forest emerald (`#1A6B4A`) as the singular focal accent, complemented by organic mint highlights (`#4ADE80`).
- **Tactile Micro-Interactions**: Direct spring transitions, active tap scaling (`whileTap={{ scale: 0.98 }}`), and clean in-view reveals without layout jitter.

---

## Colors

A high-contrast natural palette anchored by Deep Forest Obsidian, Architectural Surface Whites, and a singular Emerald Green accent, supported by curated template preview neutrals:

- **Primary Accent (`#1A6B4A`)**: Forest Emerald. Used for primary CTAs, active numbers, status dots, and brand emphasis.
- **Surface Neutrals (`#F5F7F5`, `#FFFFFF`, `#EEF1EE`)**: Clean canvas backgrounds and raised cards with subtle tonal separation.
- **Ink Tones (`#141A14`, `#475247`, `#7D877D`)**: Obsidian dark inks offering clear optical hierarchy across headlines, subtitles, and telemetry labels.
- **Borders (`#DCE0DC`, `#C8CEC8`)**: Precision framing that anchors cards and separates sections without visual weight.
- **Template Gallery Accents (`#111318`, `#1C2026`, `#0D3B6E`, `#1C1C1E`)**: Curated OLED, Ocean, and Studio neutrals representing real exported device presets.
- **Window & Preset Signals (`#E74C3C`, `#F39C12`, `#2ECC71`, `#1A3A5C`, `#3A1A12`)**: Functional canvas mockups and template style presets.

---

## Typography

Typographic hierarchy pairs Syne's distinct geometric display cuts with DM Sans' clarity:

- **Display (`clamp(38px, 7vw, 76px)`)**: Syne 800, tight tracking (`-2.5px`), 1.04 line-height. Used for the Hero headline.
- **Headline (`clamp(28px, 4.5vw, 52px)`)**: Syne 800, tracking (`-1.2px`), 1.1 line-height. Used for major section headers.
- **Title (`clamp(20px, 3vw, 34px)`)**: Syne 700, tracking (`-0.8px`), 1.15 line-height. Used for feature cards and step titles.
- **Body (`15px – 16px`)**: DM Sans 400/500, 1.6 line-height. Used for narrative copy and feature explanations.
- **Label / Tag (`11px – 13px`)**: DM Sans 600/700 or Syne Mono, tracking (`0.5px`). Used for telemetry, badges, and platform chips.

---

## Layout

- **Max Width**: `1200px` centered page container with responsive `20px` to `24px` horizontal gutters.
- **Section Spacing**: `70px – 100px` vertical padding between landing sections.
- **Grid Systems**:
  - Template Showcase: Responsive auto-fill grid (`grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr))`).
  - How It Works: 3-column desktop layout (`repeat(3, 1fr)`) collapsing into a single-column linear stack on mobile.
  - Stats Bar: 6-item desktop grid collapsing into a balanced 2-column grid on mobile.

---

## Elevation & Depth

Elevation is achieved primarily through **tonal planar contrast** and **subtle architectural diffusion**:

- **Card Ambient Shadow**: `0 4px 20px rgba(20,26,20,0.05)`
- **Lifted / Hover Shadow**: `0 20px 48px rgba(20,26,20,0.12)`
- **Accent Glow**: `0 4px 18px rgba(26,107,74,0.25)`
- **Backdrop Blur**: `backdrop-filter: blur(20px)` on sticky header (`rgba(245,247,245,0.88)`).

---

## Shapes

- **Micro (`4px – 6px`)**: Feature badges, tag pills, mini element handles.
- **Small (`7px – 10px`)**: Nested phone frame previews, UI toolbars, mockup layers.
- **Medium (`12px`)**: Primary buttons, store specification containers.
- **Large (`18px – 22px`)**: Template cards, feature modules, manifesto cards, testimonial container.
- **Pill (`999px`)**: Section badges, category indicators, floating pills.

---

## Components

### Buttons
- **Primary Button**: Emerald background (`#1A6B4A`), white typography, `13px 26px` padding, `12px` radius, subtle glow shadow.
- **Secondary Button**: White surface background, `1.5px solid #C8CEC8` border, obsidian typography, hover tint transition.

### Section Badge
- Capsule pill (`border-radius: 999px`) with white background, subtle border, inline SVG icon, and emerald label typography.

### Template Card
- Vertical `440px` card (`400px` on mobile) with `18px` rounded corners, `1px solid #DCE0DC` hairline border, nested canvas preview, and title/badge metadata strip.

### Step Cards
- Clean vertical card with circular step index (`01`, `02`, `03`) in `#E8F3ED` accent tint, Syne title, and interactive visual demo.

---

## Do's and Don'ts

### Do:
- **Preserve Tonal Contrast**: Always place `#FFFFFF` surface cards on `#F5F7F5` background with hairline borders (`#DCE0DC`).
- **Maintain Tight Display Tracking**: Keep letter-spacing negative on Syne headlines (`-0.8px` to `-2.5px`).
- **Respect Mobile Touch**: Use native scroll physics on mobile, with touch tap feedback (`whileTap={{ scale: 0.98 }}`).

### Don't:
- **No Unearned Gradients**: Never introduce multi-color rainbow gradients; stick to obsidian-to-emerald linear fills.
- **No Heavy Drop Shadows**: Avoid pitch-black, harsh shadows (`rgba(0,0,0,0.3)`); use soft diffused ambient occlusion (`rgba(20,26,20,0.05)`).
- **No Dead Pin Spacers**: Avoid scroll-hijacking pin spacers that generate empty vertical gaps.
