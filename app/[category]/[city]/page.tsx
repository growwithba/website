import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { categories, getCategoryBySlug } from '@/data/categories';
import { cities, getCityBySlug } from '@/data/cities';
import { generateBusinesses } from '@/data/businesses';
import {
  buildMetadata,
  itemListJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import BusinessCard from '@/components/BusinessCard';
import Breadcrumbs from '@/components/Breadcrumbs';

interface Params {
  category: string;
  city: string;
}

export function generateStaticParams(): Params[] {
  const params: Params[] = [];
  for (const cat of categories) {
    for (const city of cities) {
      params.push({ category: cat.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category: categorySlug, city: citySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const city = getCityBySlug(citySlug);
  if (!category || !city) return {};

  const title = `Top 10 ${category.name} in ${city.name}, ${city.stateCode} (2026)`;
  const description = `Compare the ${cities.length > 0 ? 'best' : ''} ${category.name.toLowerCase()} in ${city.name}, ${city.stateCode}. Verified ratings, hours, pricing, and reviews. Free quotes from local ${category.singular.toLowerCase()}s near you.`;

  return buildMetadata({
    title,
    description,
    path: `/${category.slug}/${city.slug}/`,
  });
}

export default async function CategoryCityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category: categorySlug, city: citySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const city = getCityBySlug(citySlug);
  if (!category || !city) notFound();

  const businesses = generateBusinesses(category, city);
  const top = businesses.slice(0, 10);

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: category.name, path: `/${category.slug}/` },
    { name: `${city.name}, ${city.stateCode}`, path: `/${category.slug}/${city.slug}/` },
  ];

  // Pull 6 nearby/popular cities for internal linking
  const otherCities = cities
    .filter((c) => c.slug !== city.slug)
    .sort((a, b) => Math.abs(a.lat - city.lat) - Math.abs(b.lat - city.lat))
    .slice(0, 8);

  const otherCategories = categories
    .filter((c) => c.slug !== category.slug)
    .slice(0, 6);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={itemListJsonLd(top, category, city)} />
      <JsonLd data={faqJsonLd(category.faqs)} />

      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-md bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              {category.emoji} · {city.name}
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Best {category.name} in {city.name}, {city.stateCode}
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              Updated for 2026. We compared {businesses.length} local {category.name.toLowerCase()} in
              {' '}{city.name} based on rating, review volume, years in business, and verified
              credentials. Here are the top {top.length} for {city.name}-area customers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href="#listings"
                className="rounded-md bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700"
              >
                See top picks
              </a>
              <a
                href="#faq"
                className="rounded-md border border-slate-200 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50"
              >
                Read FAQs
              </a>
            </div>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="text-sm font-semibold text-slate-900">Quick facts</div>
            <dl className="mt-3 space-y-2 text-sm text-slate-600">
              <div className="flex justify-between"><dt>City</dt><dd className="font-medium text-slate-900">{city.name}, {city.stateCode}</dd></div>
              <div className="flex justify-between"><dt>Population</dt><dd>{city.population.toLocaleString()}</dd></div>
              <div className="flex justify-between"><dt>Listings</dt><dd>{businesses.length}</dd></div>
              <div className="flex justify-between"><dt>Avg rating</dt><dd>{(businesses.reduce((s, b) => s + b.rating, 0) / businesses.length).toFixed(1)} ★</dd></div>
              <div className="flex justify-between"><dt>Verified</dt><dd>{businesses.filter((b) => b.verified).length}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6" id="listings">
        <h2 className="text-2xl font-bold text-slate-900">
          Top {top.length} {category.name} in {city.name}
        </h2>
        <p className="mt-2 text-slate-600">
          Ranked by verified rating, review volume, and years serving the {city.name} area.
        </p>
        <div className="mt-6 grid gap-4">
          {top.map((b, i) => (
            <BusinessCard key={b.id} business={b} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">
          Services offered by {category.name.toLowerCase()} in {city.name}
        </h2>
        <ul className="mt-4 grid gap-2 text-slate-600 sm:grid-cols-2 md:grid-cols-3">
          {category.services.map((s) => (
            <li key={s} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12" id="faq">
        <h2 className="text-2xl font-bold text-slate-900">
          {category.name} in {city.name} — FAQ
        </h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {category.faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer font-semibold text-slate-900 marker:hidden">
                {f.q}
              </summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl grid gap-10 px-4 py-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {category.name} in nearby cities
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
              {otherCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${category.slug}/${c.slug}/`}
                    className="hover:text-brand-700"
                  >
                    {category.singular}s in {c.name}, {c.stateCode}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Other services in {city.name}
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
              {otherCategories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}/${city.slug}/`}
                    className="hover:text-brand-700"
                  >
                    {c.name} in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
