export interface Category {
  slug: string;
  name: string;
  singular: string;
  emoji: string;
  description: string;
  avgCpc: number;
  serviceQuery: string;
  faqs: { q: string; a: string }[];
  services: string[];
}

// Selected for highest commercial intent and CPC. Average CPC ranges sourced
// from public Google Ads benchmarks; numbers are illustrative for layout.
export const categories: Category[] = [
  {
    slug: 'personal-injury-lawyers',
    name: 'Personal Injury Lawyers',
    singular: 'Personal Injury Lawyer',
    emoji: 'BAL',
    avgCpc: 119,
    description:
      'Top-rated personal injury attorneys handling auto accidents, slip and fall, wrongful death, and serious injury claims. Free consultations and no fees unless you win.',
    serviceQuery: 'personal injury law firm',
    services: [
      'Car & truck accidents',
      'Motorcycle accidents',
      'Slip and fall',
      'Workers compensation',
      'Wrongful death',
      'Medical malpractice',
    ],
    faqs: [
      {
        q: 'How much does a personal injury lawyer cost?',
        a: 'Most personal injury lawyers work on contingency, meaning you pay nothing unless they win your case. Standard fees range from 25% to 40% of the settlement.',
      },
      {
        q: 'How long do I have to file a personal injury claim?',
        a: 'The statute of limitations varies by state, typically 1 to 4 years from the date of injury. Contact a local attorney as soon as possible to preserve your rights.',
      },
      {
        q: 'What is my injury case worth?',
        a: 'Case value depends on medical bills, lost wages, pain and suffering, and long-term impact. A free consultation with a local attorney provides a realistic estimate.',
      },
    ],
  },
  {
    slug: 'mortgage-brokers',
    name: 'Mortgage Brokers',
    singular: 'Mortgage Broker',
    emoji: 'HOM',
    avgCpc: 47,
    description:
      'Licensed mortgage brokers offering competitive rates on conventional, FHA, VA, and jumbo loans. Compare offers from multiple lenders and lock in your best rate.',
    serviceQuery: 'mortgage broker',
    services: [
      'Conventional loans',
      'FHA & VA loans',
      'Jumbo mortgages',
      'Refinance',
      'First-time buyer programs',
      'Investment property loans',
    ],
    faqs: [
      {
        q: 'Mortgage broker vs bank: which is better?',
        a: 'Brokers shop multiple lenders to find the lowest rate, while banks only offer their own products. Brokers typically save borrowers 0.25% to 0.75% on rates.',
      },
      {
        q: 'How much does a mortgage broker charge?',
        a: 'Most brokers are paid by the lender (lender-paid compensation) so the borrower pays nothing directly. When borrower-paid, fees are typically 1% to 2% of the loan.',
      },
      {
        q: 'What credit score do I need?',
        a: 'Conventional loans typically require 620+, FHA loans 580+, and VA loans have no minimum. Higher scores get better rates.',
      },
    ],
  },
  {
    slug: 'insurance-agents',
    name: 'Insurance Agents',
    singular: 'Insurance Agent',
    emoji: 'INS',
    avgCpc: 62,
    description:
      'Independent insurance agents comparing quotes for auto, home, life, business, and umbrella coverage. Save up to 40% by bundling and shopping with a local pro.',
    serviceQuery: 'insurance agency',
    services: [
      'Auto insurance',
      'Homeowners insurance',
      'Life insurance',
      'Commercial insurance',
      'Umbrella policies',
      'Health insurance',
    ],
    faqs: [
      {
        q: 'Independent agent vs captive agent?',
        a: 'Independent agents represent multiple carriers and shop for your best deal. Captive agents (like State Farm) sell only one company’s products.',
      },
      {
        q: 'How can I lower my insurance premium?',
        a: 'Bundle policies, raise deductibles, maintain good credit, ask about loyalty and safe-driver discounts, and re-shop your coverage every 2 to 3 years.',
      },
      {
        q: 'Do I need umbrella insurance?',
        a: 'If your assets exceed your standard liability limits (typically $300K–$500K), umbrella coverage at $1M+ is inexpensive insurance against lawsuits.',
      },
    ],
  },
  {
    slug: 'hvac-contractors',
    name: 'HVAC Contractors',
    singular: 'HVAC Contractor',
    emoji: 'HVC',
    avgCpc: 42,
    description:
      'Licensed HVAC contractors providing AC repair, furnace installation, heat pump service, and 24/7 emergency response. Upfront pricing and same-day service.',
    serviceQuery: 'HVAC company',
    services: [
      'AC repair & installation',
      'Furnace service',
      'Heat pump installation',
      'Duct cleaning',
      'Indoor air quality',
      '24/7 emergency repair',
    ],
    faqs: [
      {
        q: 'How much does a new HVAC system cost?',
        a: 'A complete residential HVAC replacement typically runs $5,000 to $12,000 installed, depending on home size, SEER rating, and brand. Heat pumps trend higher.',
      },
      {
        q: 'How often should HVAC be serviced?',
        a: 'Tune up your AC each spring and your furnace each fall. Annual maintenance extends equipment life by 5 to 10 years and cuts energy bills 10% to 20%.',
      },
      {
        q: 'Should I repair or replace my HVAC?',
        a: 'If the system is over 12 years old or repairs cost more than 50% of replacement, replacement usually delivers better long-term value due to efficiency gains.',
      },
    ],
  },
  {
    slug: 'roofing-contractors',
    name: 'Roofing Contractors',
    singular: 'Roofing Contractor',
    emoji: 'ROF',
    avgCpc: 39,
    description:
      'Licensed and insured roofing contractors specializing in asphalt shingle, metal, tile, and flat roof repair and replacement. Free inspections and insurance claim help.',
    serviceQuery: 'roofing company',
    services: [
      'Roof replacement',
      'Storm damage repair',
      'Asphalt shingle roofing',
      'Metal roofing',
      'Roof inspections',
      'Insurance claim assistance',
    ],
    faqs: [
      {
        q: 'How much does a new roof cost?',
        a: 'Asphalt shingle roofs run $5 to $9 per square foot installed, or roughly $9,000 to $20,000 for an average single-family home. Metal and tile cost 2 to 3x more.',
      },
      {
        q: 'How long does a roof last?',
        a: 'Architectural asphalt shingles last 25 to 30 years, metal roofs 50+ years, and tile roofs 50 to 100 years with proper maintenance.',
      },
      {
        q: 'Will my insurance cover roof damage?',
        a: 'Most policies cover sudden damage from storms, hail, or fallen trees. Wear and tear is typically excluded. A licensed roofer can document damage for your claim.',
      },
    ],
  },
  {
    slug: 'plumbers',
    name: 'Plumbers',
    singular: 'Plumber',
    emoji: 'PLB',
    avgCpc: 35,
    description:
      'Licensed master plumbers handling drain cleaning, water heater installation, leak repair, and 24/7 emergency plumbing. Upfront flat-rate pricing.',
    serviceQuery: 'plumbing company',
    services: [
      'Drain cleaning',
      'Water heater service',
      'Leak detection & repair',
      'Sewer line repair',
      'Fixture installation',
      'Emergency plumbing',
    ],
    faqs: [
      {
        q: 'How much do plumbers charge per hour?',
        a: 'Most plumbers charge $75 to $200 per hour, with a typical service call ranging $150 to $450. Many use flat-rate pricing for predictability.',
      },
      {
        q: 'Tankless vs traditional water heater?',
        a: 'Tankless heaters cost 2 to 3x more upfront but last twice as long, save 25% to 40% on energy, and never run out of hot water.',
      },
      {
        q: 'Why is my water bill so high?',
        a: 'Hidden leaks at toilets, irrigation, and slab pipes account for most spikes. A plumber can pressure-test the system to locate the source.',
      },
    ],
  },
  {
    slug: 'dentists',
    name: 'Dentists',
    singular: 'Dentist',
    emoji: 'DEN',
    avgCpc: 28,
    description:
      'Family, cosmetic, and implant dentists accepting most insurance and offering same-day emergency appointments. New patient specials and flexible financing.',
    serviceQuery: 'dental practice',
    services: [
      'General checkups & cleanings',
      'Cosmetic dentistry',
      'Dental implants',
      'Invisalign',
      'Emergency dental care',
      'Pediatric dentistry',
    ],
    faqs: [
      {
        q: 'How often should I see a dentist?',
        a: 'The ADA recommends a checkup and cleaning every 6 months. High-risk patients (gum disease, smokers) may need quarterly visits.',
      },
      {
        q: 'How much do dental implants cost?',
        a: 'A single implant with abutment and crown typically costs $3,000 to $5,000. Full-mouth implant solutions range from $20,000 to $50,000.',
      },
      {
        q: 'Does dental insurance cover cosmetic work?',
        a: 'Most plans exclude purely cosmetic procedures (whitening, veneers) but may cover crowns and orthodontics with medical necessity.',
      },
    ],
  },
  {
    slug: 'web-hosting',
    name: 'Web Hosting Providers',
    singular: 'Web Hosting Provider',
    emoji: 'WEB',
    avgCpc: 78,
    description:
      'Compare top-rated web hosting providers offering shared, VPS, dedicated, and managed WordPress hosting with SSD storage, free SSL, and 24/7 support.',
    serviceQuery: 'web hosting service',
    services: [
      'Shared hosting',
      'WordPress hosting',
      'VPS hosting',
      'Dedicated servers',
      'Cloud hosting',
      'Reseller hosting',
    ],
    faqs: [
      {
        q: 'Which hosting type do I need?',
        a: 'Most small sites do well on shared hosting ($3–$10/mo). High-traffic sites need VPS ($20–$80/mo) or managed WordPress ($25–$50/mo).',
      },
      {
        q: 'Why does hosting matter for SEO?',
        a: 'Page speed and uptime are direct ranking factors. Quality hosts deliver TTFB under 200ms and 99.9%+ uptime, which Google rewards.',
      },
      {
        q: 'Do I need a separate domain registrar?',
        a: 'No, but separating domain and hosting reduces vendor lock-in and makes future migrations far easier.',
      },
    ],
  },
  {
    slug: 'accountants-cpas',
    name: 'Accountants & CPAs',
    singular: 'Accountant / CPA',
    emoji: 'CPA',
    avgCpc: 37,
    description:
      'Certified public accountants providing tax preparation, bookkeeping, IRS representation, and small business accounting. Year-round support and free consultations.',
    serviceQuery: 'accounting firm',
    services: [
      'Tax preparation',
      'Bookkeeping',
      'IRS representation',
      'Payroll services',
      'Business advisory',
      'Audit & assurance',
    ],
    faqs: [
      {
        q: 'Should I hire a CPA or use tax software?',
        a: 'For W-2 only filers, software works. Once you add 1099 income, rental property, equity comp, or a business, a CPA typically saves more than they charge.',
      },
      {
        q: 'How much does a CPA cost?',
        a: 'Personal returns run $200 to $600. Small business returns and bookkeeping packages run $1,500 to $5,000+ annually.',
      },
      {
        q: 'When should I incorporate my business?',
        a: 'Most CPAs recommend forming an S-corp once net profit consistently exceeds $50,000 to optimize self-employment taxes.',
      },
    ],
  },
  {
    slug: 'real-estate-agents',
    name: 'Real Estate Agents',
    singular: 'Real Estate Agent',
    emoji: 'RES',
    avgCpc: 24,
    description:
      'Top-producing real estate agents and brokers helping you buy or sell with local market expertise, professional photography, and aggressive marketing.',
    serviceQuery: 'real estate brokerage',
    services: [
      'Buyer representation',
      'Listing & seller services',
      'Luxury homes',
      'New construction',
      'Investment properties',
      'Relocation services',
    ],
    faqs: [
      {
        q: 'How much commission do agents charge?',
        a: 'Following 2024 rule changes, commissions are fully negotiable. Listing-side fees typically run 2.5% to 3%, with buyer-agent fees set in the buyer agreement.',
      },
      {
        q: 'How do I choose the right agent?',
        a: 'Look for an agent with 20+ recent transactions in your specific neighborhood and a list-to-sale price ratio above 98%. Always interview at least three.',
      },
      {
        q: 'Should I sell before buying?',
        a: 'In most markets, yes—contingent offers are weaker. A bridge loan or HELOC can fund the down payment if you find your next home first.',
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);
