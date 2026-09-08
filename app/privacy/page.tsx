import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `How ${SITE.name} handles personal data collected through this website and client engagements.`,
  path: '/privacy/',
});

const sections = [
  {
    title: 'What we collect',
    body: [
      'Aggregated analytics such as page views, referrers and device class.',
      'Any information you send us directly by email, including your name, company and the details of your enquiry.',
      'For client engagements, the access you grant us to analytics, search console and advertising accounts.',
    ],
  },
  {
    title: 'How we use it',
    body: [
      'To respond to enquiries and scope work.',
      'To deliver and report on engagements you have contracted us for.',
      'To understand which pages of this site are useful, in aggregate.',
    ],
  },
  {
    title: 'What we do not do',
    body: [
      'We do not sell personal data.',
      'We do not use client account access for anything outside the agreed scope of work.',
      'We do not share client data between engagements.',
    ],
  },
  {
    title: 'Retention and access',
    body: [
      'Enquiry correspondence is retained while a conversation is active and for a reasonable period afterwards.',
      'Client account access is revoked at the end of an engagement on request.',
      `To request access to, correction of, or deletion of your data, email ${SITE.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Privacy', path: '/privacy/' },
        ])}
      />
      <section className="shell max-w-3xl pb-24 pt-40 md:pt-48">
        <h1 className="display text-[clamp(2.25rem,5vw,3.5rem)]">Privacy Policy</h1>
        <p className="mt-4 text-[14px] text-chalk-400">Last updated: September 2026</p>
        <p className="mt-8 text-[16px] leading-relaxed text-chalk-300">
          {SITE.name} collects only what it needs to answer enquiries and deliver work.
          This page sets out what that means in practice.
        </p>

        <div className="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {sections.map((s) => (
            <section key={s.title} className="py-8">
              <h2 className="text-[20px] font-medium tracking-tight text-chalk-50">{s.title}</h2>
              <ul className="mt-4 space-y-3">
                {s.body.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[15px] leading-relaxed text-chalk-300">
                    <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-signal-blue" />
                    {line}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
