import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { categories, getCategoryBySlug } from '@/data/categories';
import { cities } from '@/data/cities';
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';

interface Params {
  category: string;
}

export function generateStaticParams(): Params[] {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return buildMetadata({
    title: `${category.name} Directory — Local Pros in 100 Cities`,
    description: `${category.description} Browse top-rated ${category.name.toLowerCase()} in 100 US cities.`,
    path: `/${category.slug}/`,
  });
}

export default async function CategoryIndexPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: category.name, path: `/${category.slug}/` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(category.faqs)} />

      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="inline-flex items-center gap-2 rounded-md bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          {category.emoji}
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {category.name} Directory
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{category.description}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <h2 className="text-2xl font-bold text-slate-900">Common services</h2>
        <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2 md:grid-cols-3">
          {category.services.map((s) => (
            <li key={s} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">
          Find {category.name.toLowerCase()} by city
        </h2>
        <p className="mt-2 text-slate-600">
          Browse vetted {category.singular.toLowerCase()}s in all {cities.length} covered metros.
        </p>
        <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/${category.slug}/${c.slug}/`}
              className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-brand-200 hover:text-brand-700"
            >
              {c.name}, {c.stateCode}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {category.faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                {f.q}
              </summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
