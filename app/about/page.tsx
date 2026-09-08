import Reveal from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { CtaBand, SectionHeading } from '@/components/ui';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'About — the team behind GrowWithBA',
  description:
    'Bridging Associates is a multi-vertical growth agency running search, content, ecommerce and AI visibility for client brands and its own stores.',
  path: '/about/',
});

const verticals = [
  {
    name: 'Digital',
    body: 'SEO, AEO, GEO and website work. The practice that owns organic and AI visibility end to end.',
  },
  {
    name: 'Ecommerce',
    body: 'Store operations, paid acquisition, after-order conversion and fulfilment reporting for our own brands and clients.',
  },
  {
    name: 'Creative & Social',
    body: 'Content production, design and social output that feeds the publishing calendar rather than running beside it.',
  },
  {
    name: 'Growth & AI',
    body: 'Internal automation, AI agents and the operating cadence that keeps every vertical reporting the same way.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/' },
        ])}
      />

      <section className="shell pb-16 pt-40 md:pt-48">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="An operator's agency."
            lead="Bridging Associates runs growth for client brands and for its own ecommerce operations. The playbooks we sell are the ones we use on our own P&L, which is why the operational detail is not an afterthought."
          />
        </Reveal>
      </section>

      <section className="shell border-t border-white/[0.08] py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal>
            <h2 className="text-[13px] uppercase tracking-[0.2em] text-chalk-400">
              Why we exist
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-chalk-300 md:text-[17px]">
              <p>
                Most brands buy search in fragments. An SEO retainer here, a content
                freelancer there, an agency somewhere else promising AI visibility. Each
                one reports its own numbers, and none of them own the outcome.
              </p>
              <p>
                We were built the other way around. One backlog covers technical fixes,
                publishing and citation work. One scorecard covers all of it. And the
                person who explains the plan is the person who runs it.
              </p>
              <p>
                We take a small number of engagements at a time because the alternative is
                the account-manager layer that made agencies feel expensive and slow.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-[13px] uppercase tracking-[0.2em] text-chalk-400">
              How we are organised
            </h2>
            <div className="mt-6 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {verticals.map((v) => (
                <div key={v.name} className="py-6">
                  <h3 className="text-[18px] font-medium tracking-tight text-chalk-50">
                    {v.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-chalk-300">{v.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[15px] leading-relaxed text-chalk-300">
              Each vertical has a lead who owns their numbers and reports a status every
              Friday. Two amber weeks in a row triggers a working session, not a longer
              report.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell border-t border-white/[0.08] py-16">
        <Reveal>
          <p className="max-w-2xl text-[17px] leading-relaxed text-chalk-200 md:text-[19px]">
            Partnerships and new engagements go directly to{' '}
            <a
              href={`mailto:${SITE.email}`}
              className="text-chalk-50 underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white/70"
            >
              {SITE.email}
            </a>
            .
          </p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
