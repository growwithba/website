import Link from 'next/link';
import type { Metadata } from 'next';
import { cities } from '@/data/cities';
import { categories } from '@/data/categories';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'All Cities — Local Service Directory',
  description: `Browse local service professionals across ${100} US cities and ${10} high-stakes service categories.`,
  path: '/cities/',
});

export default function CitiesIndex() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Cities', path: '/cities/' },
  ];

  // Group cities by state
  const byState = cities.reduce<Record<string, typeof cities>>((acc, c) => {
    (acc[c.state] ||= []).push(c);
    return acc;
  }, {});

  const states = Object.keys(byState).sort();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">All cities</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Browse local pros in {cities.length} US cities across {states.length} states,
          spanning {categories.length} categories.
        </p>

        <div className="mt-10 space-y-8">
          {states.map((state) => (
            <div key={state}>
              <h2 className="text-lg font-semibold text-slate-900">{state}</h2>
              <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {byState[state].map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/cities/${c.slug}/`}
                      className="block rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:border-brand-200 hover:text-brand-700"
                    >
                      {c.name}, {c.stateCode}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
