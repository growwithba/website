import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { categories } from '@/data/categories';
import { cities, getCityBySlug } from '@/data/cities';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';

interface Params {
  city: string;
}

export function generateStaticParams(): Params[] {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return buildMetadata({
    title: `Local Services Directory — ${city.name}, ${city.stateCode}`,
    description: `Find top-rated lawyers, mortgage brokers, insurance agents, HVAC techs, plumbers, dentists, and more in ${city.name}, ${city.stateCode}.`,
    path: `/cities/${city.slug}/`,
  });
}

export default async function CityIndexPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Cities', path: '/cities/' },
    { name: `${city.name}, ${city.stateCode}`, path: `/cities/${city.slug}/` },
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
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Local Services in {city.name}, {city.stateCode}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Population {city.population.toLocaleString()}. Browse vetted local
          professionals across {categories.length} high-stakes service categories
          serving the {city.name} metro area.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Browse {city.name} pros by category
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}/${city.slug}/`}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-brand-50 px-2 py-1 text-xs font-semibold tracking-wider text-brand-700">
                  {c.emoji}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                {c.name} in {city.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
