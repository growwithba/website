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
  businesses.ts          # getBusinesses() — real data w/ synthetic fallback
  listings.generated.json # Google Places cache (built by fetch:places)
lib/
  seo.ts                 # metadata + JSON-LD helpers
  site.ts                # site-wide constants
  places.ts              # Google Places API (New) client + mapping
scripts/
  fetch-places.ts        # build the listings cache from Google Places
components/              # Header, Footer, BusinessCard, Breadcrumbs, JsonLd
```

## Business data (Google Places)

Pages resolve listings through `getBusinesses(category, city)` in
`data/businesses.ts`. It returns **real Google Places data** when present in
`data/listings.generated.json`, and otherwise falls back to a deterministic
seeded-PRNG generator so the site always builds — even before any data is
fetched.

To populate real listings:

```bash
cp .env.example .env            # then set GOOGLE_PLACES_API_KEY
npm run fetch:places            # fetches all 1,000 category×city pairs
```

The fetch script (`scripts/fetch-places.ts`) is incremental — re-running it
skips pairs already cached, so an interrupted run resumes. Useful flags:

```bash
# Test a small slice before a full run
npm run fetch:places -- --categories=plumbers --cities=austin-tx,miami-fl
npm run fetch:places -- --delay=300        # slow down to respect rate limits
npm run fetch:places -- --fresh            # ignore cache and refetch everything
```

Requires the **Places API (New)** enabled in Google Cloud with billing on. The
field mask requests only the fields the site renders to keep per-request cost
down. Pairs returning zero results stay uncached and fall back to synthetic
data.

Static export (`next build`) reads the cache at build time, so the deployed
site is fully static with no runtime API calls.
