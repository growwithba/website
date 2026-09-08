import Reveal from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { CtaBand, SectionHeading } from '@/components/ui';
import { caseStudies } from '@/data/work';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Work — engagements across ecommerce, retail and hospitality',
  description:
    'How Bridging Associates rebuilt search, answer-engine and ecommerce systems for brands including Raddzy, Maharaja Kids, Heera Sweets and Nino’s.',
  path: '/work/',
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work/' },
        ])}
      />

      <section className="shell pb-16 pt-40 md:pt-48">
        <Reveal>
          <SectionHeading
            eyebrow="Work"
            title="What the work actually looks like."
            lead="No invented percentages. Here is the problem each brand had, the sequence we ran, and what changed operationally."
          />
        </Reveal>
      </section>

      <section className="shell space-y-4 pb-16">
        {caseStudies.map((c) => (
          <Reveal key={c.slug}>
            <article
              id={c.slug}
              className="card scroll-mt-28 grid gap-10 p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:p-12"
            >
              <div>
                <div className="text-[13px] uppercase tracking-[0.18em] text-chalk-400">
                  {c.client}
                </div>
                <h2 className="mt-4 text-[clamp(1.6rem,3.2vw,2.25rem)] font-medium leading-tight tracking-tight text-chalk-50">
                  {c.headline}
                </h2>
                <div className="mt-6 text-[14px] text-chalk-400">{c.sector}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.disciplines.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-chalk-300"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[12px] uppercase tracking-[0.2em] text-chalk-400">Problem</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-chalk-200">{c.problem}</p>

                <h3 className="mt-8 text-[12px] uppercase tracking-[0.2em] text-chalk-400">
                  What we did
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {c.approach.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-[15px] text-chalk-300">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-teal"
                      />
                      {a}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-[12px] uppercase tracking-[0.2em] text-chalk-400">
                  Where it landed
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-chalk-200">{c.outcome}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBand
        title="Want the same diagnostic run on your site?"
        body="Three weeks, one document, your data. Whether you continue with us afterwards is a separate conversation."
      />
    </>
  );
}
