import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { CtaBand, SectionHeading } from '@/components/ui';
import { services } from '@/data/services';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Services — SEO, AEO, GEO and the systems behind them',
  description:
    'Technical SEO, answer engine optimization, generative engine optimization, content systems and ecommerce growth — run as one sequenced programme.',
  path: '/services/',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
        ])}
      />

      <section className="shell pb-16 pt-40 md:pt-48">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Everything that decides whether you get found."
            lead="Six disciplines that share one backlog, one measurement plan and one weekly report. Buy them separately and they compete for the same engineering hours."
          />
        </Reveal>
      </section>

      <section className="shell pb-8">
        <Reveal stagger className="divide-y divide-white/[0.08] border-t border-white/[0.08]">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="group grid gap-6 py-10 transition-colors md:grid-cols-[auto_1fr_auto] md:items-start md:gap-12 md:py-14"
            >
              <span className="text-[13px] tabular-nums text-chalk-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: s.accent }}
                  />
                  <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium tracking-tight text-chalk-50">
                    {s.name}
                  </h2>
                </div>
                <p className="mt-4 text-[16px] leading-relaxed text-chalk-300 md:text-[17px]">
                  {s.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.deliverables.slice(0, 3).map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-chalk-400"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <span
                aria-hidden
                className="hidden text-chalk-300 transition-transform duration-300 group-hover:translate-x-1 md:block"
              >
                →
              </span>
            </Link>
          ))}
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
