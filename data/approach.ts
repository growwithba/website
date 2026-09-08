export const phases = [
  {
    id: '01',
    name: 'Diagnose',
    duration: 'Weeks 1–3',
    summary:
      'We benchmark where you actually stand across all three surfaces before recommending anything.',
    points: [
      'Technical crawl, log-file and render audit',
      'Entity and schema audit for answer surfaces',
      'Share-of-model benchmark across a fixed prompt set',
      'Competitor citation gap analysis',
    ],
  },
  {
    id: '02',
    name: 'Sequence',
    duration: 'Week 4',
    summary:
      'One backlog, ordered by effort against expected impact. No parallel workstreams competing for the same engineer.',
    points: [
      'Prioritised fix and content backlog',
      'Named owners on both sides',
      'Measurement plan agreed before work starts',
      'Quarterly targets set against leading indicators',
    ],
  },
  {
    id: '03',
    name: 'Ship',
    duration: 'Ongoing',
    summary:
      'Weekly execution against the backlog — fixes, publishing and citation work running on a fixed cadence.',
    points: [
      'Technical fixes delivered as tickets or pull requests',
      'Content shipped on a held calendar with schema attached',
      'Digital PR and third-party citation building',
      'Weekly scorecard: five numbers and a status, every Friday',
    ],
  },
  {
    id: '04',
    name: 'Compound',
    duration: 'Quarter 2 onward',
    summary:
      'Refresh, expand and defend. The library becomes an asset instead of an archive.',
    points: [
      'Decay monitoring and scheduled refresh',
      'Prompt-set re-runs to catch AI visibility drift',
      'Expansion into adjacent clusters once a cluster holds',
      'Quarterly strategy reset against real data',
    ],
  },
];

export const principles = [
  {
    title: 'One backlog, not three retainers',
    body: 'SEO, AEO and GEO compete for the same engineering hours and the same content calendar. Run them as separate contracts and they cannibalise each other. We sequence them as one.',
  },
  {
    title: 'Leading indicators, weekly',
    body: 'Rankings and revenue lag. Crawl health, publishing cadence, citation count and share of model do not. Five numbers and a status colour every Friday — that is the whole reporting ritual.',
  },
  {
    title: 'We run our own brands',
    body: 'The ecommerce and content systems we sell are the ones we operate daily on our own stores. Nothing in the playbook is theoretical.',
  },
  {
    title: 'No vanity dashboards',
    body: 'If a metric cannot change a decision next week, it does not go in the report. You get the numbers that drive the backlog and nothing else.',
  },
];

export const faqs = [
  {
    q: 'What is the difference between SEO, AEO and GEO?',
    a: 'SEO earns a position in a ranked list of links. AEO earns the extracted answer — featured snippets, People Also Ask and assistant responses — which depends on entity clarity and structured data. GEO earns a citation inside a generative answer from ChatGPT, Gemini, Perplexity or AI Overviews, which depends on the corpus those models retrieve and trust. Most brands need all three, sequenced rather than bought separately.',
  },
  {
    q: 'Do I need GEO if my SEO is already working?',
    a: 'Increasingly, yes. A growing share of high-intent research now happens inside an assistant that never shows your ranked page. If a model does not cite you, that demand is invisible to your analytics and to you. The first step is measurement — benchmark your share of model before deciding how much to invest.',
  },
  {
    q: 'How do you report progress?',
    a: 'A weekly scorecard with five leading numbers and a green/amber/red status, plus a monthly review covering plan against actual. Two red weeks in a row triggers a working session with a proposed fix, not a status update.',
  },
  {
    q: 'What size of business do you work with?',
    a: 'Mostly founder-led brands and ecommerce operations that already have traction and need a system rather than a first website. We take a small number of engagements at a time so the leads doing the work are the ones you meet.',
  },
  {
    q: 'How quickly can we start?',
    a: 'The diagnostic can start within a week of scoping. It runs three weeks, and you own the output whether or not you continue with us.',
  },
];
