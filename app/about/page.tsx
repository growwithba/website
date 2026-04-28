import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'About PrimeDirectory',
  description:
    'PrimeDirectory connects homeowners and small businesses with vetted, top-rated local pros across the categories that matter most.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }]} />
        </div>
      </div>
      <section className="mx-auto max-w-3xl px-4 py-12 prose-clean">
        <h1 className="text-4xl font-bold text-slate-900">About PrimeDirectory</h1>
        <p className="mt-6 text-lg text-slate-600">
          We built PrimeDirectory because finding a trustworthy local professional in
          high-stakes categories — legal, financial, medical, and home services — is
          one of the highest-friction tasks on the internet.
        </p>
        <p className="mt-4 text-slate-600">
          Our editorial team curates 10 service categories where decision quality
          matters most. For every category, in every covered metro, we publish a
          structured guide with verified ratings, transparent pricing, and FAQs
          written by category experts.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-slate-900">How we rank</h2>
        <p className="mt-3 text-slate-600">
          Listings are ranked by a blended score of verified rating, review volume,
          tenure, and customer-feedback signals. We do not accept payment in exchange
          for editorial placement.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-slate-900">For business owners</h2>
        <p className="mt-3 text-slate-600">
          Claim your free listing or upgrade to a featured profile to stand out in
          your city. Visit our contact page to get started.
        </p>
      </section>
    </>
  );
}
