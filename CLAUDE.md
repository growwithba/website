# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

**PrimeDirectory** — a programmatic-SEO directory site built with **Next.js 15
(App Router)**. It statically renders **~1,116 pages**: 1,000 `[category]/[city]`
programmatic landing pages (10 high-CPC categories × 100 US cities), plus
category/city index pages and static pages (home, about, contact, etc.).

Output is a fully static export (`next build` → `./out`), deployable on any CDN.

## Commands

```bash
npm install
npm run dev      # dev server
npm run build    # static export to ./out
```

## Layout

```
app/                     # Next.js 15 App Router pages
  [category]/[city]/     # 1000 programmatic pages
  [category]/            # 10 category index pages
  cities/[city]/         # 100 city index pages
  cities/ , categories/  # index pages
  sitemap.ts , robots.ts # generated sitemap.xml + robots.txt
data/
  categories.ts          # 10 high-CPC categories
  cities.ts              # 100 US cities
  businesses.ts          # deterministic (seeded PRNG) business generator
lib/
  seo.ts                 # metadata + Schema.org JSON-LD helpers
  site.ts                # site-wide constants
components/              # Header, Footer, BusinessCard, Breadcrumbs, JsonLd
```

## Conventions

- Business listings are generated **deterministically** from a seeded PRNG so
  SSG output is stable. For production, replace `data/businesses.ts` with a real
  data source (Google Places API, internal DB, CSV import).
- SEO is central: every page sets dynamic `<title>`, meta description,
  canonical, OpenGraph/Twitter, and Schema.org JSON-LD. Keep these intact when
  editing pages.
- Static export only — avoid server-only Next.js features that break
  `output: export`.

## External references

- **LTX-2** — Lightricks' open-source, DiT-based foundation model for
  synchronized **audio-video generation** (text-to-video, image-to-video,
  audio-to-video, interpolation, editing). Python inference + LoRA trainer;
  monorepo of `ltx-core`, `ltx-pipelines`, `ltx-trainer`; ComfyUI integration.
  Repo: https://github.com/Lightricks/LTX-2
  (Reference only — not currently integrated into this site.)
