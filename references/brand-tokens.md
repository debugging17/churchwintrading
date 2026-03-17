# Churchwin Trading — Brand Tokens & Design System
*Status: 🔒 LOCKED for Web Pitch Deck Build*
*Date: March 2026*

## Overview
This document locks the exact visual design system parameters for the Churchwin Trading web pitch deck. All web code (Tailwind configuration, CSS variables, Framer Motion defaults) MUST conform to these tokens to ensure a premium, institutional B2B aesthetic.

---

## 🎨 1. Color System

The colour palette represents the transition from local agriculture to global institutional platform.

### Primary Colors
- **Churchwin Navy:** `#012787` (Primary background, heavy weight text, institutional trust)
- **Churchwin Orange:** `#FF6A00` (Call to action, highlight, momentum, African warmth)
- **True White:** `#FFFFFF` (Primary text on dark backgrounds, primary surface for cards)

### Secondary / Structural Colors
- **Navy Dark:** `#011A5A` (Used for deeper gradients and depths behind Navy)
- **Navy Light / Slate:** `#1A3B8E` (Secondary buttons, card borders on dark mode)
- **Premium Grey (Text):** `#4A4A4A` (Body text on light backgrounds for less eye strain than pure black)
- **Surface Grey (Light):** `#F8F9FA` (Alternate card backgrounds to create depth against True White)
- **Gold Accent:** `#D4AF37` (Used ONLY for Stanford Seed badges, premium trust signals, or certification stamps)

---

## 🔤 2. Typography

We use modern, highly legible sans-serif fonts to communicate clarity and operational maturity.

### Font Families
- **Headlines & Display:** `Inter` (Sans-serif) — Clean, institutional, optimized for screen reading.
- **Body Text:** `Inter` or system sans-serif (San Francisco, Roboto, Segoe UI)
- **Numbers/Data:** `Inter` (for tabular lining figures)

### Font Weights
- **Display Headlines:** 700 (Bold) or 800 (ExtraBold)
- **Section Titles:** 600 (SemiBold)
- **Body Text:** 400 (Regular)
- **Small Caps / UI Labels:** 600 (SemiBold) + `tracking-wider`

### Typographic Scale (Tailwind)
- `text-6xl` or `text-7xl` — Main presentation titles (Slide 1)
- `text-4xl` or `text-5xl` — Slide Headlines
- `text-2xl` — Sub-headlines and major pull quotes
- `text-lg` or `text-xl` — Standard presentation body text (larger than standard web body for readability on screens/projectors)
- `text-sm` — Captions, data sources, footer text

---

## 📏 3. Spacing & Layout Structure

The layout must breathe. Generous negative space communicates premium positioning.

### Grid System
- **Max Width:** `max-w-7xl` (1280px) container for slide content.
- **Side Padding:** `px-8` or `px-12` minimum to prevent edge-crowding.
- **Vertical Rhythm:** 
  - `pt-20` for slide header clearance.
  - `gap-8` or `gap-12` between major flex/grid blocks.

### Section Breaks
- Used to signify a narrative shift.
- Full bleed background: `bg-[#012787]`
- Centered typography: `text-white text-5xl font-bold`

---

## 💨 4. Motion & Interaction (Framer Motion)

Motion must be purposeful, fluid, and never distracting. Refer to `references/motion-variants.md` for full technical specs, but core principles are locked here:

- **Easing:** `cubic-bezier(0.25, 1, 0.5, 1)` (Fast out, slow in).
- **Default Duration:** `0.6s` to `0.8s`.
- **Entrance:** Elements should fade up (`y: 30` to `y: 0`) and fade in (`opacity: 0` to `opacity: 1`) sequentially.
- **Stagger:** Lists and grids must stagger their children by `0.1s` or `0.15s`.

---

## 🖼️ 5. UI Elements & Components

### Buttons
- **Primary CTA:** Background `#FF6A00`, Text `#FFFFFF`, sharp corners or slight rounding (`rounded-md`), hover scale `1.05`.
- **Secondary / UI:** Ghost button or outline border `border-[#012787] text-[#012787]`.

### Cards & Surfaces
- **Glassmorphism:** Allowed sparingly over images. Requires `backdrop-blur-md` and a semi-transparent white/dark overlay.
- **Shadows:** Soft, diffused shadows (`shadow-xl` or `shadow-2xl` in Tailwind) — avoid harsh, short-drop shadows.

### Border Radii
- Structural elements (cards, images): `rounded-xl` or `rounded-2xl`. No harsh 90-degree corners on imagery.

---
*End of Protocol. All developers and design modules must adhere to this document.*
