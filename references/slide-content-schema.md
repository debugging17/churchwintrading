# Slide Content Schema — Churchwin Pitch Deck
# Reference for web-pitch-deck skill
# Defines the content contract each slide expects — decouples copy from code

## Purpose
This schema tells developers exactly what props/data each slide component accepts.
Content writers fill this schema; developers implement it. They never need to touch each other's work.

---

## Slide Type Definitions

### type: `section-title`
```typescript
interface SectionTitleSlide {
  sectionNumber: string      // e.g. "01", "02"
  sectionLabel: string       // e.g. "The Challenge"
  accentColor?: string       // Default: var(--brand-orange)
  bgVariant?: 'navy' | 'deep-navy'  // Default: 'navy'
}
```

### type: `split-content`
```typescript
interface SplitContentSlide {
  label?: string             // Small eyebrow label above headline
  headline: string           // Main slide headline
  subheadline?: string       // Optional supporting headline
  body: string[]             // Array of body paragraphs
  cta?: { label: string; href: string }  // Optional inline CTA
  visual: {
    type: 'image' | 'chart' | 'custom'
    src?: string             // For type: 'image'
    alt?: string
    chartId?: string         // For type: 'chart' — matches chart registry
  }
  layout: 'content-left' | 'content-right'
  bgVariant?: 'navy' | 'cream' | 'white'
}
```

### type: `stat-showcase`
```typescript
interface StatShowcaseSlide {
  headline: string
  body?: string
  stats: Array<{
    value: string            // e.g. "$150K", "11", "80%"
    label: string            // e.g. "Monthly Revenue Gap"
    sublabel?: string        // e.g. "vs. industry benchmark"
    trend?: 'up' | 'down' | 'neutral'
    countUp?: boolean        // Animate number on enter
  }>
  bgVariant?: 'navy' | 'cream'
}
```

### type: `roadmap`
```typescript
interface RoadmapSlide {
  headline: string
  phases: Array<{
    number: string           // "01", "02", "03"
    label: string            // "Phase Name"
    duration: string         // "Months 1-6"
    items: string[]          // Bullet points (max 4)
    status?: 'planned' | 'active' | 'complete'
  }>
  bgVariant?: 'navy'
}
```

### type: `data-chart`
```typescript
interface DataChartSlide {
  headline: string
  context?: string           // 1-2 sentence framing
  chartType: 'bar' | 'line' | 'area' | 'pie' | 'radial'
  chartDataId: string        // Key into /data/charts.ts registry
  insight: string            // The key takeaway — shown below chart
  bgVariant?: 'navy' | 'cream'
}
```

### type: `gallery`
```typescript
interface GallerySlide {
  headline: string
  subheadline?: string
  products: Array<{
    name: string
    spec?: string            // e.g. "100% Raw, Unrefined"
    image: string            // /images/products/[filename]
    highlight?: string       // Orange badge text
  }>
  bgVariant?: 'navy'
}
```

### type: `cta`
```typescript
interface CTASlide {
  eyebrow?: string
  headline: string
  subheadline?: string
  body?: string
  primaryCTA: {
    label: string
    href: string             // URL or anchor
    trackingId?: string
  }
  contactLine?: string       // e.g. "Or email: contact@churchwintrading.com"
  bgVariant?: 'navy'
}
```

---

## Content Registry (Slide Index)

Each entry maps a slide index to its type and content source.

```typescript
// /data/slides.ts — populated by content team, consumed by slide renderer

export const slides: SlideDefinition[] = [
  {
    id: 'slide-01',
    type: 'cover',
    data: {
      headline: 'Churchwin Trading',
      subheadline: 'Filling the Missing Middle',
      tagline: 'Institutionalizing access to premium African ingredients.',
      bgImage: '/images/backgrounds/hero-shea.webp'
    }
  },
  {
    id: 'slide-02',
    type: 'section-title',
    data: { sectionNumber: '01', sectionLabel: 'The Opportunity' }
  },
  // ... continue for all 19 slides
]
```

---

## Chart Data Registry

```typescript
// /data/charts.ts — Recharts data, imported by ChartSlide components

export const chartData = {
  'gdp-comparison': {
    type: 'line',
    title: 'GDP Per Capita: West Africa vs South Korea (1960–2020)',
    data: [
      { year: '1960', westAfrica: 180, southKorea: 158 },
      { year: '1980', westAfrica: 310, southKorea: 1700 },
      { year: '2000', westAfrica: 420, southKorea: 11300 },
      { year: '2020', westAfrica: 1900, southKorea: 31000 }
    ],
    xKey: 'year',
    lines: [
      { key: 'westAfrica', color: 'var(--brand-orange)', label: 'West Africa' },
      { key: 'southKorea', color: 'var(--brand-white)', label: 'South Korea' }
    ]
  },
  'sme-distribution': {
    // ... Recharts data for SME missing middle diagram
  },
  'revenue-projection': {
    // ... 18-month revenue projection data
  }
}
```
