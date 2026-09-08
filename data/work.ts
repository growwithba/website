export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  disciplines: string[];
  headline: string;
  problem: string;
  approach: string[];
  outcome: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'raddzy',
    client: 'Raddzy',
    sector: 'Direct-to-consumer ecommerce',
    disciplines: ['Ecommerce Growth', 'Technical SEO'],
    headline: 'A Shopify store run as one loop instead of four teams',
    problem:
      'Paid acquisition, organic, after-order calling and warehouse operations each reported their own numbers. Nobody could say what an order actually cost or why confirmed orders were leaking before dispatch.',
    approach: [
      'Rebuilt reporting around blended ROAS and contribution rather than channel-level ROAS',
      'Instrumented the after-order calling flow so confirmation and RTO became daily numbers',
      'Cleaned up collection architecture, product schema and internal linking across the catalogue',
      'Set a single weekly scorecard the whole team fills — ads, ops and organic on one sheet',
    ],
    outcome:
      'One operating rhythm across ads, site and fulfilment, with confirmation rate and cost per order visible daily instead of reconstructed at month end.',
  },
  {
    slug: 'maharaja-kids',
    client: 'Maharaja Kids',
    sector: 'Kidswear retail',
    disciplines: ['Content Engine', 'AEO'],
    headline: 'Turning a social-first brand into a searchable one',
    problem:
      'Strong creative output on social, near-zero organic surface area. The brand was invisible the moment a customer searched rather than scrolled.',
    approach: [
      'Mapped real category and occasion demand into a topical structure',
      'Built question-shaped content around sizing, fabric and gifting queries',
      'Implemented product and FAQ schema so listings could be extracted cleanly',
      'Connected the social production calendar to the publishing calendar so one feeds the other',
    ],
    outcome:
      'A repeatable publishing cadence with search and social planned together, and category pages structured to be quoted rather than skipped.',
  },
  {
    slug: 'heera-sweets',
    client: 'Heera Sweets',
    sector: 'Food and gifting',
    disciplines: ['Local SEO', 'AEO'],
    headline: 'Owning the answer for a seasonal, local-intent category',
    problem:
      'Demand spikes hard around festivals and collapses between them. Generic pages could not compete with aggregators during the window that mattered.',
    approach: [
      'Built occasion-led landing structures that stay live year-round and sharpen seasonally',
      'Cleaned entity and location data so the brand resolves consistently across surfaces',
      'Targeted the question set customers actually ask before a festival order',
    ],
    outcome:
      'A page set that holds relevance outside peak and is structured to capture answer surfaces when the season arrives.',
  },
  {
    slug: 'ninos',
    client: "Nino's",
    sector: 'Hospitality',
    disciplines: ['SEO', 'Technical SEO'],
    headline: 'Fixing the foundations before spending on content',
    problem:
      'A slow, thin site with duplicated URLs and no structured data. Content investment would have been poured into a leaking bucket.',
    approach: [
      'Full technical audit with a prioritised, effort-scored fix backlog',
      'Canonical and URL cleanup, then Core Web Vitals remediation on the worst templates',
      'Structured data added and validated as part of the release process',
    ],
    outcome:
      'A crawlable, fast base that makes every future content and PR investment countable.',
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
