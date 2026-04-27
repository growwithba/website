import type { Category } from './categories';
import type { City } from './cities';

export interface Business {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  phone: string;
  address: string;
  zip: string;
  yearsInBusiness: number;
  website: string;
  tagline: string;
  hours: string;
  verified: boolean;
}

// Deterministic PRNG so SSG output is stable across builds.
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const BUSINESS_NAME_PARTS: Record<string, { prefix: string[]; suffix: string[] }> = {
  'personal-injury-lawyers': {
    prefix: ['Anderson', 'Hartwell', 'Sterling', 'Reyes', 'Kingston', 'Whitman', 'Ortega', 'Bennett', 'Caldwell', 'Maddox'],
    suffix: ['Law Group', 'Injury Attorneys', '& Associates', 'Trial Lawyers', 'Legal', 'Law Firm'],
  },
  'mortgage-brokers': {
    prefix: ['Summit', 'Cornerstone', 'Liberty', 'Pacific Crest', 'Heritage', 'BlueRidge', 'Foundation', 'Anchor', 'Beacon', 'Apex'],
    suffix: ['Mortgage', 'Home Loans', 'Lending', 'Capital', 'Mortgage Group', 'Home Funding'],
  },
  'insurance-agents': {
    prefix: ['Reliance', 'Guardian', 'Patriot', 'Crestline', 'Allwest', 'Sentinel', 'Trinity', 'Vantage', 'Northshore', 'Stillwater'],
    suffix: ['Insurance', 'Insurance Group', 'Coverage Partners', 'Risk Advisors', 'Insurance Agency'],
  },
  'hvac-contractors': {
    prefix: ['ProAir', 'Comfort', 'Climate', 'TrueBreeze', 'Polar', 'Allegiant', 'Highland', 'Dependable', 'Crisp', 'Frontline'],
    suffix: ['Heating & Air', 'HVAC', 'Climate Control', 'Air Solutions', 'Mechanical', 'Cooling & Heating'],
  },
  'roofing-contractors': {
    prefix: ['Ironclad', 'Skyline', 'Summit', 'Granite', 'Apex', 'Stormshield', 'Heritage', 'Rooftop', 'Bluepeak', 'Rainier'],
    suffix: ['Roofing', 'Roofing Co.', 'Roof & Exterior', 'Roofing Group', 'Roofing Specialists'],
  },
  plumbers: {
    prefix: ['Allflow', 'BlueDrop', 'Mainline', 'Crestwood', 'Reliable', 'Steadfast', 'Maverick', 'Ironpipe', 'Hometown', 'PrimePoint'],
    suffix: ['Plumbing', 'Plumbing Co.', '& Drain', 'Plumbing Services', 'Plumbing Pros'],
  },
  dentists: {
    prefix: ['Bright Smile', 'Lakeside', 'Parkview', 'Cornerstone', 'Riverbend', 'Maple', 'Hillcrest', 'Beacon', 'Family', 'Modern'],
    suffix: ['Dental', 'Dentistry', 'Family Dentistry', 'Dental Group', 'Dental Care'],
  },
  'web-hosting': {
    prefix: ['CloudCore', 'Hyper', 'Stack', 'Vortex', 'Rocket', 'Nimbus', 'Ironhost', 'Bluepulse', 'Quantum', 'Veloce'],
    suffix: ['Hosting', 'Servers', 'Cloud', 'Networks', 'Web Services'],
  },
  'accountants-cpas': {
    prefix: ['Northstar', 'Ledger', 'Apex', 'Heritage', 'Beacon', 'Cornerstone', 'Sterling', 'Pinnacle', 'Crestline', 'Trustline'],
    suffix: ['CPA', 'Accounting', '& Associates CPAs', 'Tax & Accounting', 'CPA Group'],
  },
  'real-estate-agents': {
    prefix: ['Premier', 'Hometown', 'Skyline', 'Summit', 'Coastal', 'Magnolia', 'Heritage', 'Frontier', 'Vantage', 'Beacon'],
    suffix: ['Realty', 'Real Estate', 'Properties', 'Realty Group', 'Realty Partners'],
  },
};

const TAGLINES: Record<string, string[]> = {
  'personal-injury-lawyers': [
    'No fees unless we win your case',
    'Aggressive representation, compassionate service',
    '40+ years of trial experience on your side',
    'Maximum compensation, minimum hassle',
    'Local trial attorneys who fight insurance companies',
  ],
  'mortgage-brokers': [
    'Compare rates from 40+ lenders in minutes',
    'Close in as little as 17 days',
    'Same-day pre-approval, low rates',
    'Local lender relationships, national pricing',
    'Personalized loan options for every borrower',
  ],
  'insurance-agents': [
    'Independent agency saving customers up to 38%',
    'Compare quotes from top-rated carriers',
    'Family-owned since the 1980s',
    'Bundle and save with personalized coverage',
    'Local agent, national network',
  ],
  'hvac-contractors': [
    'Same-day service, upfront pricing',
    '24/7 emergency repair available',
    'Lifetime workmanship warranty',
    'Energy-efficient installs, factory-trained techs',
    'Trusted comfort specialists since 1998',
  ],
  'roofing-contractors': [
    'Storm damage and insurance claim experts',
    'Free inspections, lifetime warranties',
    'GAF Master Elite certified contractor',
    'Locally owned and fully insured',
    'Quality roofing built to last decades',
  ],
  plumbers: [
    'Master plumbers on every job',
    'Flat-rate pricing, 24/7 emergency service',
    'Family-owned, hometown trusted',
    'Same-day drain cleaning and water heaters',
    'Licensed, bonded, insured—and on time',
  ],
  dentists: [
    'New patient specials and same-day appointments',
    'Comprehensive family and cosmetic dentistry',
    'Modern technology, gentle care',
    'In-network with most major insurance plans',
    'Beautiful smiles, comfortable visits',
  ],
  'web-hosting': [
    'Lightning-fast SSD servers and 24/7 support',
    'Managed WordPress hosting with free migration',
    '99.99% uptime SLA and free SSL',
    'Built for speed, scaled for growth',
    'Developer-friendly cloud hosting',
  ],
  'accountants-cpas': [
    'Tax planning that saves clients thousands',
    'Year-round advisory for businesses and families',
    'Audit-ready bookkeeping, fixed monthly fee',
    'Trusted CPAs with 30+ years of experience',
    'Personal service, big-firm expertise',
  ],
  'real-estate-agents': [
    'Top 1% producer in the local market',
    'Aggressive marketing, personal service',
    'Sells homes in 18 days on average',
    'Hyper-local expertise across every neighborhood',
    'Concierge service for buyers and sellers',
  ],
};

const STREETS = ['Main St', 'Oak Ave', 'Maple Dr', 'Elm Ct', 'Washington Blvd', 'Lincoln Way', 'Park Pl', 'Lake Rd', '1st Ave', 'Highland St', 'Sunset Blvd', 'Madison Ave'];
const HOURS = [
  'Mon–Fri 8am–6pm, Sat 9am–2pm',
  'Mon–Sat 7am–7pm',
  '24/7 Emergency Service',
  'Mon–Fri 9am–5pm',
  'Mon–Sun 8am–8pm',
];

export function generateBusinesses(category: Category, city: City, count = 12): Business[] {
  const seed = hashSeed(`${category.slug}|${city.slug}`);
  const rand = mulberry32(seed);
  const parts = BUSINESS_NAME_PARTS[category.slug];
  const taglines = TAGLINES[category.slug];

  const usedNames = new Set<string>();
  const list: Business[] = [];

  for (let i = 0; i < count; i++) {
    let name = '';
    let attempts = 0;
    do {
      const prefix = parts.prefix[Math.floor(rand() * parts.prefix.length)];
      const suffix = parts.suffix[Math.floor(rand() * parts.suffix.length)];
      const includesCity = rand() < 0.25;
      name = includesCity ? `${city.name} ${prefix} ${suffix}` : `${prefix} ${suffix}`;
      attempts++;
    } while (usedNames.has(name) && attempts < 20);
    usedNames.add(name);

    const rating = Math.round((4.2 + rand() * 0.8) * 10) / 10;
    const reviewCount = 18 + Math.floor(rand() * 580);
    const yearsInBusiness = 4 + Math.floor(rand() * 32);
    const street = STREETS[Math.floor(rand() * STREETS.length)];
    const streetNum = 100 + Math.floor(rand() * 9800);
    const zipBase = 10000 + Math.floor(rand() * 89999);
    const phoneArea = 200 + Math.floor(rand() * 700);
    const phoneMid = 200 + Math.floor(rand() * 700);
    const phoneEnd = 1000 + Math.floor(rand() * 8999);
    const tagline = taglines[Math.floor(rand() * taglines.length)];
    const hours = HOURS[Math.floor(rand() * HOURS.length)];
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    list.push({
      id: `${category.slug}-${city.slug}-${i}`,
      name,
      rating,
      reviewCount,
      phone: `(${phoneArea}) ${phoneMid}-${phoneEnd}`,
      address: `${streetNum} ${street}, ${city.name}, ${city.stateCode}`,
      zip: String(zipBase),
      yearsInBusiness,
      website: `https://${slug}.example.com`,
      tagline,
      hours,
      verified: rand() < 0.55,
    });
  }

  return list.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
}
