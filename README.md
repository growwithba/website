# growwithba.com

Marketing site for **Bridging Associates** — an SEO, AEO and GEO agency.
Built with Next.js 15 (App Router), Tailwind CSS and a WebGL hero, exported as
a static site.

## Stack

- **Next.js 15** App Router, `output: 'export'` (static, deployable to any CDN)
- **Tailwind CSS** with a dark design system (`ink` / `chalk` / `signal` scales)
- **three + @react-three/fiber** — full-screen fragment shader in the hero
- **GSAP** — hero type intro
- **Lenis** — smooth scrolling
- **IntersectionObserver + CSS transitions** — scroll reveals

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero, three-surface explainer, services, approach, work, FAQ |
| `/services/` | Index of the six disciplines |
| `/services/[slug]/` | SEO, AEO, GEO, Content Engine, Technical SEO, Ecommerce Growth |
| `/approach/` | Diagnose → Sequence → Ship → Compound, principles, FAQ |
| `/work/` | Case studies |
| `/about/` | Positioning and how the verticals are organised |
| `/contact/` | Diagnostic enquiry |
| `/privacy/`, `/terms/` | Legal |

## SEO / AEO / GEO features

- Per-page title, description, canonical, OpenGraph and Twitter metadata
- JSON-LD: `ProfessionalService`, `WebSite`, `Service`, `BreadcrumbList`, `FAQPage`
- Answer-shaped FAQ blocks on the home, approach and service pages so the
  content is extractable by answer engines
- `sitemap.xml` and `robots.txt` generated at build time

## Motion and accessibility

- All animation is gated behind `prefers-reduced-motion`
- Scroll-revealed content is hidden only after an inline boot script confirms
  JS and motion are available, so no-JS visitors and crawlers see everything
- The hero shader stops rendering once it scrolls out of view
- Skip-to-content link, focus-visible states, semantic headings

## Run

```bash
npm install
npm run dev      # dev server
npm run build    # static export to ./out
```

## Layout

```
app/
  page.tsx               # home
  services/[slug]/       # six service pages
  approach/ work/ about/ contact/ privacy/ terms/
  sitemap.ts robots.ts icon.svg globals.css
components/
  Hero.tsx HeroCanvas.tsx    # WebGL aurora hero
  SurfaceDemo.tsx            # SEO vs AEO vs GEO interactive panel
  Reveal.tsx SmoothScroll.tsx
  Header.tsx Footer.tsx ui.tsx JsonLd.tsx
data/
  services.ts approach.ts work.ts
lib/
  seo.ts site.ts
```

## Content note

Case studies describe what was done and what changed operationally. No
performance percentages are published unless they can be sourced from client
reporting.
