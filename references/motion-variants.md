# Framer Motion Variants — Churchwin Pitch Deck
# Reference file for web-pitch-deck skill implementation
# Import this into components/motion/variants.ts

## Core Animation Variants

### fadeUp (primary entrance — used on 80% of slide content)
```typescript
export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}
```

### fadeIn (subtle — used for background elements, logos, overlays)
```typescript
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
}
```

### scaleIn (hero elements — cover slide, section number badges)
```typescript
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}
```

### slideFromLeft (narrative split slides — content side)
```typescript
export const slideFromLeft = {
  hidden:  { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}
```

### slideFromRight (narrative split slides — visual side)
```typescript
export const slideFromRight = {
  hidden:  { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}
```

### staggerContainer (parent wrapper — controls children stagger)
```typescript
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden:  {},
  visible: {
    transition: { staggerChildren, delayChildren }
  }
})
```

### statCardEntrance (for StatCard components — slight overshoot)
```typescript
export const statCardEntrance = {
  hidden:  { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 18 }
  }
}
```

### chartEntrance (for chart containers — reveals after content)
```typescript
export const chartEntrance = {
  hidden:  { opacity: 0, scaleY: 0, originY: 1 },
  visible: {
    opacity: 1, scaleY: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }
  }
}
```

### progressBarFill (ProgressBar component — driven by Swiper index)
```typescript
// Not a variant — use motion.div with style prop:
// style={{ scaleX: progressMotionValue }}
// Transform origin: left
```

---

## Per-Slide Animation Map

Use this table when implementing each slide. Reference the variant exports above.

| Slide # | Name | Headline | Body/Stats | Visual | Notes |
|---|---|---|---|---|---|
| 01 | Cover | `scaleIn` + `fadeUp` | `fadeUp` (stagger 80ms) | `fadeIn` | Logo appears last |
| 02 | Section Break | `scaleIn` (number badge) | `slideFromLeft` (title) | — | Fast: 400ms total |
| 03 | Problem | `fadeUp` | `staggerContainer` stat cards | `slideFromRight` | Cards stagger 120ms |
| 04 | Market Comparison | `fadeUp` | `fadeUp` | `chartEntrance` | Chart after 300ms delay |
| 05 | Strategic Solution | `slideFromLeft` | `staggerContainer` | `slideFromRight` | Split layout |
| 06 | Section Break | Same as 02 | — | — | |
| 07–09 | Roadmap | `fadeUp` | `staggerContainer` timeline | — | Phase cards stagger 150ms |
| 10 | Section Break | Same as 02 | — | — | |
| 11 | Sales Engine | `fadeUp` | `staggerContainer` | `slideFromRight` | |
| 12 | Capabilities | `fadeUp` | `staggerContainer` | `scaleIn` | Feature cards |
| 13 | Section Break | Same as 02 | — | — | |
| 14-16 | Data / Charts | `fadeUp` | `fadeUp` | `chartEntrance` | GDP, SME data |
| 17 | Impact | `fadeUp` + `scaleIn` | `staggerContainer` | `slideFromRight` | Emotional slide — slower |
| 18 | Section Break | Same as 02 | — | — | |
| 19 | CTA | `scaleIn` | `fadeUp` | — | Button: spring entrance |

---

## useSlideEnter Hook Pattern

```typescript
// components/motion/useSlideEnter.ts
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export function useSlideEnter(isActive: boolean) {
  const controls = useAnimation()

  useEffect(() => {
    if (isActive) {
      controls.start('visible')
    } else {
      controls.start('hidden')  // Reset for re-entry
    }
  }, [isActive, controls])

  return controls
}

// Usage in slide component:
// const controls = useSlideEnter(isActiveSlide)
// <motion.div animate={controls} variants={staggerContainer()} initial="hidden">
```

---

## Micro-Interaction Specs (Whimsy Injector Layer)

These are CSS/Framer additions applied AFTER core animations are working.

### Navigation Arrows
```css
.swiper-button-next, .swiper-button-prev {
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.swiper-button-next:hover, .swiper-button-prev:hover {
  transform: scale(1.1);
  box-shadow: 0 0 0 2px var(--brand-orange);
}
```

### CTA Button Shimmer
```css
.cta-button {
  position: relative;
  overflow: hidden;
}
.cta-button::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%);
  transform: translateX(-100%);
  transition: transform 600ms ease;
}
.cta-button:hover::after {
  transform: translateX(100%);
}
```

### StatCard Hover Lift
```css
.stat-card {
  transition: transform 250ms ease, box-shadow 250ms ease;
}
.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(1, 39, 135, 0.25);
}
```

### Number Count-Up (on slide enter)
```typescript
// Use react-countup with startOnMount: false
// Trigger via useSlideEnter hook isActive === true
import CountUp from 'react-countup'

<CountUp
  start={0}
  end={statValue}
  duration={1.8}
  separator=","
  useEasing={true}
  start={isActive ? 0 : undefined}  // Restart when slide re-enters
/>
```
