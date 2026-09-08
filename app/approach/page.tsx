import Reveal from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { CtaBand, SectionHeading } from '@/components/ui';
import { phases, principles, faqs } from '@/data/approach';
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Approach — how we sequence SEO, AEO and GEO',
  description:
    'A three-week diagnostic, one ordered backlog, weekly leading indicators. How Bridging Associates runs search, answer and generative-engine work as a single programme.',
  path: '/approach/',
});

export default function ApproachPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Approach', path: '/approach/' },
        ])}
      />

      <section className="shell pb-16 pt-40 md:pt-48">
        <Reveal>
          <SectionHeading
            eyebrow="Approach"
            title="A method you can audit, not a black box."
            lead="Most agency proposals are a list of activities. Ours is a sequence with owners, dates and a measurement plan agreed before anyone writes a word."
          />
        </Reveal>
      </section>

      <section className="shell border-t border-white/[0.08] py-16 md:py-24">
        <Reveal stagger className="space-y-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06]">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="grid gap-8 bg-ink-900 p-8 md:grid-cols-[auto_1fr_1.2fr] md:gap-14 md:p-12"
            >
              <div className="text-[13px] tabular-nums text-chalk-400">{phase.id}</div>
              <div>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-tight text-chalk-50">
                  {phase.name}
                </h2>
                <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-chalk-400">
                  {phase.duration}
                </div>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-chalk-300">
                  {phase.summary}
                </p>
              </div>
              <ul className="space-y-3">
                {phase.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] text-chalk-200">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-blue"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="border-y border-white/[0.08] bg-ink-800/60">
        <div className="shell py-24 md:py-32">
          <Reveal>
            <SectionHeading eyebrow="Principles" title="How we decide what not to do." />
          </Reveal>
          <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="card p-8 md:p-10">
                <h3 className="text-[20px] font-medium tracking-tight text-chalk-50">{p.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-chalk-300">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="shell py-24">
        <Reveal>
          <SectionHeading eyebrow="Questions" title="Before you ask." />
        </Reveal>
        <Reveal stagger className="mt-14 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((f) => (
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
