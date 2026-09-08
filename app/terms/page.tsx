import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description: `Terms governing use of the ${SITE.name} website.`,
  path: '/terms/',
});

const sections = [
  {
    title: 'Use of this site',
    body: 'This website is provided for information about our services. You may read, link to and quote it with attribution. You may not republish it wholesale or present it as your own.',
  },
  {
    title: 'No guarantee of results',
    body: 'Search, answer-engine and generative-engine visibility depend on third-party systems we do not control. Nothing on this site is a guarantee of rankings, citations, traffic or revenue. Case study descriptions record what was done and what changed operationally, not a promise of the same outcome elsewhere.',
  },
  {
    title: 'Engagements',
    body: 'Client work is governed by the signed scope and contract for that engagement, which takes precedence over anything stated here.',
  },
  {
    title: 'Third-party links',
    body: 'Where we link to external sites or tools, we are not responsible for their content, availability or practices.',
  },
  {
    title: 'Changes',
    body: `We may update these terms. The current version always lives at this URL. Questions go to ${SITE.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Terms', path: '/terms/' },
        ])}
      />
      <section className="shell max-w-3xl pb-24 pt-40 md:pt-48">
        <h1 className="display text-[clamp(2.25rem,5vw,3.5rem)]">Terms of Service</h1>
        <p className="mt-4 text-[14px] text-chalk-400">Last updated: September 2026</p>

        <div className="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {sections.map((s) => (
            <section key={s.title} className="py-8">
              <h2 className="text-[20px] font-medium tracking-tight text-chalk-50">{s.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-chalk-300">{s.body}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
