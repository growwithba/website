import Link from 'next/link';
import type { Metadata } from 'next';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'All Service Categories — Local Pro Directory',
  description:
    'Browse all 10 high-stakes local service categories: lawyers, mortgage brokers, insurance agents, HVAC, roofing, plumbing, dentists, web hosting, CPAs, and real estate.',
  path: '/categories/',
});

export default function CategoriesIndex() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories/' },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
          All service categories
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          {categories.length} high-stakes local service categories. Each category
          covers all {cities.length} cities in our directory.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}/`}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-md"
            >
              <span className="rounded-md bg-brand-50 px-2 py-1 text-xs font-semibold tracking-wider text-brand-700">
                {c.emoji}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                {c.name}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-slate-600">{c.description}</p>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {cities.length} cities · {c.services.length} services
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
