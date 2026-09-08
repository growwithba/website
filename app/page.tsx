import Link from 'next/link';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import SurfaceDemo from '@/components/SurfaceDemo';
import { JsonLd } from '@/components/JsonLd';
import { ArrowLink, CtaBand, Marquee, SectionHeading } from '@/components/ui';
import { coreServices, services } from '@/data/services';
import { caseStudies } from '@/data/work';
import { phases, faqs } from '@/data/approach';
import { buildMetadata, faqJsonLd } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = buildMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs.slice(0, 3))} />
      <Hero />

      <div className="hairline">
        <Marquee
          items={[
            'Technical SEO',
            'Answer engine optimization',
            'Generative engine optimization',
            'Share of model tracking',
            'Content systems',
            'Ecommerce growth',
            'Digital PR',
            'Core Web Vitals',
          ]}
        />
      </div>

      {/* Three surfaces */}
      <section className="shell py-24 md:py-36">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="The problem"
              title="One query. Three places to win."
              lead="The same search now resolves three different ways depending on where your customer asks it. Winning one surface and ignoring the other two is how brands quietly disappear."
            />
            <ul className="mt-10 space-y-5">
              {coreServices.map((s) => (
                <li key={s.slug} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: s.accent }}
                  />
                  <p className="text-[15px] leading-relaxed text-chalk-300">
                    <span className="font-medium text-chalk-50">{s.abbr}</span> — {s.summary}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <SurfaceDemo />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="shell py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Six disciplines, one backlog."
            lead="Every engagement draws from the same practice. What changes is the sequence — set by what your diagnostic says is costing you most right now."
          />
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="card card-hover group flex flex-col p-8"
            >
              <span
                aria-hidden
                className="h-1 w-10 rounded-full"
                style={{ backgroundColor: s.accent }}
              />
              <h3 className="mt-7 text-[22px] font-medium tracking-tight text-chalk-50">
                {s.name}
              </h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-chalk-300">{s.summary}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-[14px] text-chalk-200">
                {s.kicker}
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* Approach */}
      <section className="border-y border-white/[0.08] bg-ink-800/60">
        <div className="shell py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Approach"
              title="Diagnose, sequence, ship, compound."
              lead="No twelve-month strategy documents. A three-week diagnostic, one ordered backlog, and five numbers reported every Friday."
            />
          </Reveal>

          <Reveal stagger className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase) => (
              <div key={phase.id} className="bg-ink-800 p-8">
                <div className="flex items-baseline justify-between">
                  <span className="text-[13px] tabular-nums text-chalk-400">{phase.id}</span>
                  <span className="text-[12px] uppercase tracking-[0.16em] text-chalk-400">
                    {phase.duration}
                  </span>
                </div>
                <h3 className="mt-6 text-[22px] font-medium tracking-tight text-chalk-50">
                  {phase.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-chalk-300">{phase.summary}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <ArrowLink href="/approach/">Read the full method</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section className="shell py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Work"
            title="Systems we run, not slides we present."
            lead="A sample of engagements across ecommerce, retail and hospitality."
          />
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-4 md:grid-cols-2">
          {caseStudies.slice(0, 4).map((c) => (
            <Link
              key={c.slug}
              href={`/work/#${c.slug}`}
              className="card card-hover flex flex-col p-8 md:p-10"
            >
              <div className="flex flex-wrap items-center gap-2">
                {c.disciplines.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-chalk-400"
                  >
                    {d}
                  </span>
                ))}
              </div>
              <div className="mt-8 text-[13px] uppercase tracking-[0.18em] text-chalk-400">
                {c.client}
              </div>
              <h3 className="mt-3 text-[24px] font-medium leading-snug tracking-tight text-chalk-50">
                {c.headline}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-chalk-300">{c.outcome}</p>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="shell pb-8 md:pb-16">
        <Reveal>
          <SectionHeading eyebrow="Questions" title="The ones we get asked first." />
        </Reveal>
        <Reveal stagger className="mt-14 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.slice(0, 3).map((f) => (
            <div key={f.q} className="grid gap-4 py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
              <h3 className="text-[19px] font-medium tracking-tight text-chalk-50">{f.q}</h3>
              <p className="text-[15px] leading-relaxed text-chalk-300">{f.a}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
