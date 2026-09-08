import { notFound } from 'next/navigation';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { ArrowLink, CtaBand } from '@/components/ui';
import { getService, services } from '@/data/services';
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, serviceJsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} (${service.abbr})`,
    description: service.summary,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: service.name, path: `/services/${service.slug}/` },
        ])}
      />

      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: `${service.accent}22` }}
        />
        <div className="shell pb-16 pt-40 md:pt-48">
          <nav aria-label="Breadcrumb" className="text-[13px] text-chalk-400">
            <Link href="/services/" className="hover:text-chalk-100">
              Services
            </Link>
            <span className="px-2">/</span>
            <span className="text-chalk-200">{service.abbr}</span>
          </nav>

          <h1 className="display mt-8 max-w-4xl text-[clamp(2.5rem,6.5vw,5rem)] leading-[0.98]">
            {service.name}
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-chalk-300 md:text-[20px]">
            {service.summary}
          </p>
        </div>
      </section>

      <section className="shell grid gap-16 border-t border-white/[0.08] py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
        <Reveal>
          <p className="text-[17px] leading-relaxed text-chalk-200 md:text-[19px]">
            {service.description}
          </p>

          <h2 className="mt-16 text-[13px] uppercase tracking-[0.2em] text-chalk-400">
            What we deliver
          </h2>
          <ul className="mt-6 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-4 py-4 text-[15px] text-chalk-200">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: service.accent }}
                />
                {d}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-8">
            <h2 className="text-[13px] uppercase tracking-[0.2em] text-chalk-400">
              What we report
            </h2>
            <dl className="mt-6 space-y-6">
              {service.signals.map((s) => (
                <div key={s.label}>
                  <dt className="text-[16px] font-medium text-chalk-50">{s.label}</dt>
                  <dd className="mt-1 text-[14px] leading-relaxed text-chalk-300">{s.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      <section className="shell border-t border-white/[0.08] py-20">
        <h2 className="text-[13px] uppercase tracking-[0.2em] text-chalk-400">Questions</h2>
        <Reveal stagger className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {service.faqs.map((f) => (
            <div key={f.q} className="grid gap-4 py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
              <h3 className="text-[19px] font-medium tracking-tight text-chalk-50">{f.q}</h3>
              <p className="text-[15px] leading-relaxed text-chalk-300">{f.a}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="shell py-16">
        <h2 className="text-[13px] uppercase tracking-[0.2em] text-chalk-400">
          Often paired with
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {others.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}/`} className="card card-hover p-7">
              <span
                aria-hidden
                className="block h-1 w-8 rounded-full"
                style={{ backgroundColor: s.accent }}
              />
              <h3 className="mt-6 text-[18px] font-medium tracking-tight text-chalk-50">
                {s.name}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-chalk-300">{s.kicker}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <ArrowLink href="/services/">All services</ArrowLink>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
