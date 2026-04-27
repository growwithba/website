# PrimeDirectory

A programmatic-SEO directory site built with Next.js 15 (App Router) that
generates **1,000+ statically rendered pages** targeting high-CPC service
categories across 100 US cities.

## What's inside

- **10 high-paying categories** — Personal Injury Lawyers, Mortgage Brokers,
  Insurance Agents, HVAC, Roofing, Plumbing, Dentists, Web Hosting, CPAs,
  Real Estate
- **100 US cities** by population
- **1,000 `[category]/[city]` programmatic landing pages** (10 × 100)
- **10 category index pages** + **100 city index pages**
- **Static pages:** home, categories, cities, about, contact, privacy, terms
- **Total static pages: ~1,116**

## SEO features

- Per-page dynamic `<title>`, meta description, canonical, OpenGraph, Twitter
- Schema.org JSON-LD: `WebSite`, `LocalBusiness`, `ItemList`,
  `BreadcrumbList`, `FAQPage`
- Auto-generated `sitemap.xml` (covers all 1,116 URLs)
- `robots.txt`
- Internal linking: nearby cities, related categories, sitewide nav
- Mobile-first responsive design with Tailwind
- Static export (`next build`) — deployable on any CDN

## Run

```bash
npm install
npm run dev      # dev server
npm run build    # static export to ./out
```

## Project layout

```
app/                     # Next.js 15 App Router pages
  [category]/[city]/     # 1000 programmatic pages
  [category]/            # 10 category index pages
  cities/[city]/         # 100 city index pages
  cities/                # all-cities index
  categories/            # all-categories index
  sitemap.ts             # dynamic sitemap
  robots.ts              # robots.txt
data/
  categories.ts          # 10 high-CPC categories
  cities.ts              # 100 US cities
  businesses.ts          # deterministic business generator
lib/
  seo.ts                 # metadata + JSON-LD helpers
  site.ts                # site-wide constants
components/              # Header, Footer, BusinessCard, Breadcrumbs, JsonLd
```

## Notes

Business listings are generated deterministically from a seeded PRNG so SSG
output is stable. Replace `data/businesses.ts` with a real data source
(Google Places API, internal DB, CSV import) for production.
