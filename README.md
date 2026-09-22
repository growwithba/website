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
scraper/                 # Google Maps scraper kit + import_to_site.py
data/
  scraped/               # real listings (category/city.json)
  categories.ts          # 10 high-CPC categories
  cities.ts              # 100 US cities
  businesses.ts          # deterministic business generator
lib/
  seo.ts                 # metadata + JSON-LD helpers
  site.ts                # site-wide constants
components/              # Header, Footer, BusinessCard, Breadcrumbs, JsonLd
```

## Real listings (Google Maps scraper)

`scraper/` vendors [google-maps-scraper-kit](https://github.com/Mahanaicoach/google-maps-scraper-kit)
(wraps `gosom/google-maps-scraper`, MIT — see `scraper/CREDITS.md`).

```bash
cd scraper && docker compose up -d && cd ..          # scraper on localhost:8080
python3 scraper/scripts/import_to_site.py list        # valid slugs
python3 scraper/scripts/import_to_site.py run --category plumbers --city austin-tx
python3 scraper/scripts/import_to_site.py run --category all --city austin-tx,dallas-tx --depth 3
python3 scraper/scripts/import_to_site.py import results.csv --category dentists --city denver-co
npm run build
```

Results land in `data/scraped/<category>/<city>.json` (top 20 by rating, emails
dropped). `getBusinesses()` in `data/businesses.ts` uses them when present and
falls back to deterministic generated listings otherwise. `run` skips pairs that
already have data (use `--overwrite` to refresh), pauses between jobs, and stops
on the first failed job to avoid Google rate limits. Scraping Maps is against
Google's ToS — keep volume low and use proxies for big runs.
