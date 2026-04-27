import Link from 'next/link';
import type { Metadata } from 'next';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';
import { SITE } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: `${SITE.name} — Find Trusted Local Pros in 100 Cities`,
  description: SITE.description,
  alternates: { canonical: SITE.url + '/' },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  const featuredCities = cities.slice(0, 24);
  const totalListings = categories.length * cities.length;

  return (
    <>
      <JsonLd data={websiteJsonLd} />

      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
            {totalListings.toLocaleString()}+ vetted local listings
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Find the best local pros in <span className="text-brand-700">100 US cities</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            From personal injury attorneys to mortgage brokers, HVAC techs to CPAs —
            connect with vetted, top-rated specialists in your city.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/categories/"
              className="rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Browse all categories
            </Link>
            <Link
              href="/cities/"
              className="rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Browse by city
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Top categories</h2>
            <p className="mt-2 text-slate-600">
              Hand-selected service categories with the highest commercial demand.
            </p>
          </div>
          <Link href="/categories/" className="hidden text-sm font-semibold text-brand-700 hover:underline sm:inline">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}/`}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-brand-50 px-2 py-1 text-xs font-semibold tracking-wider text-brand-700">
                  {c.emoji}
                </span>
                <span className="text-xs text-slate-400">{cities.length} cities</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                {c.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Popular cities</h2>
              <p className="mt-2 text-slate-600">Browse local pros in major US metros.</p>
            </div>
            <Link href="/cities/" className="hidden text-sm font-semibold text-brand-700 hover:underline sm:inline">
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredCities.map((c) => (
              <Link
                key={c.slug}
                href={`/cities/${c.slug}/`}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:border-brand-200 hover:text-brand-700"
              >
                {c.name}, {c.stateCode}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Why PrimeDirectory</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-6">
            <div className="text-2xl font-bold text-brand-700">10</div>
            <div className="mt-2 font-semibold text-slate-900">High-stakes categories</div>
            <p className="mt-2 text-sm text-slate-600">
              Curated specifically for the services where finding the right pro matters most.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <div className="text-2xl font-bold text-brand-700">100</div>
            <div className="mt-2 font-semibold text-slate-900">US cities covered</div>
            <p className="mt-2 text-sm text-slate-600">
              Local listings spanning every major metro from coast to coast.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <div className="text-2xl font-bold text-brand-700">1,000+</div>
            <div className="mt-2 font-semibold text-slate-900">Curated guides</div>
            <p className="mt-2 text-sm text-slate-600">
              Every city × category page is its own buyer’s guide with FAQs and pricing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
