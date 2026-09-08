export interface Service {
  slug: string;
  name: string;
  abbr: string;
  kicker: string;
  summary: string;
  description: string;
  accent: string;
  deliverables: string[];
  signals: { label: string; detail: string }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'seo',
    name: 'Search Engine Optimization',
    abbr: 'SEO',
    kicker: 'Rank',
    summary:
      'Classic organic search — technical foundations, content architecture and authority built so the ten blue links still send you compounding demand.',
    description:
      'SEO is still the largest addressable channel most brands ignore. We treat it as an engineering problem first: crawlability, render budget, internal link topology and Core Web Vitals, then a content architecture built around real demand rather than keyword lists. Every engagement runs on the same loop — audit, fix, publish, measure, compound.',
    accent: '#5B8CFF',
    deliverables: [
      'Technical audit + prioritised fix backlog',
      'Information architecture and internal linking model',
      'Keyword-to-page mapping across the full funnel',
      'Content production system with editorial QA',
      'Digital PR and link acquisition',
      'Core Web Vitals and render performance work',
    ],
    signals: [
      { label: 'Crawl health', detail: 'Indexable ratio, orphan pages, log-file coverage' },
      { label: 'Share of voice', detail: 'Ranking distribution against named competitors' },
      { label: 'Assisted revenue', detail: 'Organic contribution across the whole journey' },
    ],
    faqs: [
      {
        q: 'How long before SEO shows results?',
        a: 'Technical fixes can move impressions within weeks. Content and authority compound over two to three quarters. We report leading indicators monthly so you are never waiting blind.',
      },
      {
        q: 'Do you work with ecommerce catalogues?',
        a: 'Yes. Faceted navigation, collection architecture, variant handling and product schema are a core part of our ecommerce practice.',
      },
    ],
  },
  {
    slug: 'aeo',
    name: 'Answer Engine Optimization',
    abbr: 'AEO',
    kicker: 'Answer',
    summary:
      'Structured for the answer box. Entity clarity, schema and question-shaped content so assistants quote you instead of paraphrasing a competitor.',
    description:
      'Search increasingly ends without a click. AEO makes your brand the extractable answer — clean entity definitions, schema that machines trust, and content shaped around the questions people actually ask. The work is unglamorous and highly technical: disambiguating your entity, structuring facts so they survive extraction, and earning the citations that make an engine confident enough to quote you.',
    accent: '#2DD4BF',
    deliverables: [
      'Entity audit and knowledge-graph alignment',
      'Schema.org implementation and validation',
      'Question and intent mapping from real query data',
      'Answer-shaped content blocks and FAQ systems',
      'Featured snippet and People Also Ask capture',
      'Citation and mention building across trusted sources',
    ],
    signals: [
      { label: 'Answer capture', detail: 'Snippets, PAA and zero-click surfaces owned' },
      { label: 'Entity confidence', detail: 'How consistently engines resolve your brand' },
      { label: 'Extractability', detail: 'Share of pages that parse cleanly into answers' },
    ],
    faqs: [
      {
        q: 'What is the difference between AEO and SEO?',
        a: 'SEO optimises for a ranked list of links. AEO optimises for being the answer that a search engine or assistant returns directly — which depends far more on structure, entity clarity and citation quality than on position alone.',
      },
      {
        q: 'Does AEO cannibalise clicks?',
        a: 'Some queries were never going to click. Owning the answer protects brand recall and feeds the assisted journeys that do convert. We measure both, not just sessions.',
      },
    ],
  },
  {
    slug: 'geo',
    name: 'Generative Engine Optimization',
    abbr: 'GEO',
    kicker: 'Be cited',
    summary:
      'Visibility inside ChatGPT, Gemini, Perplexity and AI Overviews — measured, tracked and moved with a repeatable citation strategy.',
    description:
      'Generative engines synthesise an answer from sources they trust. GEO is the practice of becoming one of those sources. We benchmark how often your brand appears across assistants for the prompts that matter, diagnose why the incumbents get cited instead, and build the corpus, structure and third-party presence that changes the outcome. This is the newest discipline in search, and it rewards the teams who start measuring first.',
    accent: '#A78BFA',
    deliverables: [
      'Prompt-set design and share-of-model benchmarking',
      'Citation gap analysis against cited competitors',
      'Source-corpus strategy across owned and third-party surfaces',
      'LLM-readable content structuring and fact hygiene',
      'Reddit, forum, review and community presence work',
      'Monthly AI visibility tracking and drift reporting',
    ],
    signals: [
      { label: 'Share of model', detail: 'Mention rate across a fixed prompt set' },
      { label: 'Citation rate', detail: 'How often you are linked, not just named' },
      { label: 'Sentiment drift', detail: 'How assistants characterise you over time' },
    ],
    faqs: [
      {
        q: 'Can you actually influence what an AI says about a brand?',
        a: 'Not directly, and anyone claiming otherwise is selling something. What you can influence is the source material the model retrieves and trusts — structured owned content, third-party coverage, reviews and community discussion. That is where GEO does its work.',
      },
      {
        q: 'How do you measure AI visibility?',
        a: 'A fixed prompt set is run on a schedule across the major assistants. We log mentions, citations and sentiment, then track movement month over month against the same set so the numbers stay comparable.',
      },
    ],
  },
  {
    slug: 'content-engine',
    name: 'Content Engine',
    abbr: 'Content',
    kicker: 'Publish',
    summary:
      'A production system, not a freelancer queue — briefs, subject-matter input, editing and publishing on a predictable cadence.',
    description:
      'Most SEO programmes stall because publishing stalls. We run content as an operating system: demand-led briefs, a writer bench matched to the subject, editorial QA against a house standard, and a publishing calendar that survives a busy quarter. Every piece ships with schema, internal links and an owner.',
    accent: '#FF8A5B',
    deliverables: [
      'Editorial strategy and topical map',
      'Brief templates with search and entity requirements',
      'Writer sourcing, onboarding and QA',
      'Design and asset support for every published piece',
      'Refresh programme for decaying pages',
    ],
    signals: [
      { label: 'Cadence held', detail: 'Pieces shipped against plan each month' },
      { label: 'Page decay', detail: 'Share of library refreshed on schedule' },
      { label: 'Topical depth', detail: 'Coverage of the cluster versus competitors' },
    ],
    faqs: [
      {
        q: 'Do you use AI to write?',
        a: 'We use AI for research, structuring and first-pass drafting where it genuinely helps, and humans for judgement, expertise and edit. Nothing ships without a named editor behind it.',
      },
    ],
  },
  {
    slug: 'technical-seo',
    name: 'Technical SEO & Performance',
    abbr: 'Technical',
    kicker: 'Fix',
    summary:
      'Crawl, render, index, speed. The unglamorous layer that decides whether anything else you do gets counted.',
    description:
      'If a page cannot be crawled, rendered and understood cheaply, no amount of content strategy will save it. We work in the codebase — rendering strategy, hydration cost, sitemap and canonical logic, faceted URL control, migration safety and Core Web Vitals — alongside your engineering team rather than throwing a PDF over the wall.',
    accent: '#5B8CFF',
    deliverables: [
      'Full crawl and log-file analysis',
      'Rendering and hydration strategy review',
      'Core Web Vitals remediation plan',
      'Migration planning and post-launch monitoring',
      'Structured data validation in CI',
    ],
    signals: [
      { label: 'INP and LCP', detail: 'Field data across templates, not lab scores' },
      { label: 'Index coverage', detail: 'Valid pages against submitted pages' },
      { label: 'Crawl efficiency', detail: 'Bot requests spent on pages that matter' },
    ],
    faqs: [
      {
        q: 'Will you work directly in our repo?',
        a: 'Where the team allows it, yes — we ship pull requests. Otherwise we deliver spec-level tickets your engineers can implement without translation.',
      },
    ],
  },
  {
    slug: 'ecommerce-growth',
    name: 'Ecommerce Growth',
    abbr: 'Ecommerce',
    kicker: 'Sell',
    summary:
      'Shopify and marketplace growth run end to end — organic, paid, after-order and the operations behind them.',
    description:
      'Search rarely works in isolation for a store. We run the full loop: catalogue and collection SEO, paid acquisition, after-order confirmation and retention, and the reporting that ties spend to contribution. It is the same practice we run for our own brands, which is why the operational detail is not an afterthought.',
    accent: '#2DD4BF',
    deliverables: [
      'Collection and product page SEO architecture',
      'Meta and marketplace ad management',
      'Order confirmation and RTO reduction programmes',
      'Stock, dispatch and fulfilment reporting',
      'Blended ROAS and contribution reporting',
    ],
    signals: [
      { label: 'Blended ROAS', detail: 'Across paid and organic, not channel-siloed' },
      { label: 'Confirmation rate', detail: 'Orders confirmed against orders placed' },
      { label: 'Contribution', detail: 'Margin after spend, not top-line revenue' },
    ],
    faqs: [
      {
        q: 'Do you only work on Shopify?',
        a: 'Shopify is where most of our work sits, but the practice covers marketplaces and headless builds too.',
      },
    ],
  },
];

export const coreServices = services.slice(0, 3);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
