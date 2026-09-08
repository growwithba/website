import Reveal from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/ui';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Contact — book a search and AI visibility diagnostic',
  description:
    'Start with a three-week diagnostic across SEO, answer engines and generative assistants. Email Bridging Associates to scope it.',
  path: '/contact/',
});

const expect = [
  {
    step: '01',
    title: 'A 30-minute scoping call',
    body: 'What you sell, who you compete with, and what has already been tried. No deck.',
  },
  {
    step: '02',
    title: 'A written diagnostic scope',
    body: 'Exactly what we will audit, the prompt set we will benchmark, and the fee. Fixed.',
  },
  {
    step: '03',
    title: 'Three weeks later, the findings',
    body: 'A prioritised backlog and a share-of-model benchmark. Yours whether we continue or not.',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact/' },
        ])}
      />

      <section className="shell pb-16 pt-40 md:pt-48">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Start with the diagnostic."
            lead="One email is enough. Tell us the domain and the markets that matter, and we will come back with a scope."
          />
        </Reveal>
      </section>

      <section className="shell grid gap-14 border-t border-white/[0.08] py-16 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:py-24">
        <Reveal>
          <div className="card p-8 md:p-12">
            <div className="eyebrow">Direct line</div>
            <a
              href={`mailto:${SITE.email}?subject=Diagnostic%20enquiry`}
              className="mt-6 block text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium tracking-tight text-chalk-50 underline decoration-white/20 underline-offset-8 transition-colors hover:decoration-signal-blue"
            >
              {SITE.email}
            </a>
            <p className="mt-8 text-[15px] leading-relaxed text-chalk-300">
              Include your domain, your two closest competitors and the queries you wish you
              owned. That is enough for us to run a first look before we even speak.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-[13px] uppercase tracking-[0.2em] text-chalk-400">
            What happens next
          </h2>
          <div className="mt-6 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {expect.map((e) => (
              <div key={e.step} className="flex gap-6 py-7">
                <span className="text-[13px] tabular-nums text-chalk-400">{e.step}</span>
                <div>
                  <h3 className="text-[18px] font-medium tracking-tight text-chalk-50">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-chalk-300">{e.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
