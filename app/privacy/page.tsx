import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'PrimeDirectory privacy policy.',
  path: '/privacy/',
});

export default function PrivacyPage() {
  return (
    <>
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Privacy', path: '/privacy/' }]} />
        </div>
      </div>
      <section className="mx-auto max-w-3xl px-4 py-12 prose-clean">
        <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-slate-600">Last updated: April 2026</p>
        <p className="mt-4 text-slate-600">
          PrimeDirectory respects your privacy. We collect only the information needed
          to operate the directory and improve recommendations. We do not sell personal
          data to third parties.
        </p>
        <h2 className="mt-8 text-xl font-bold text-slate-900">Information we collect</h2>
        <p className="mt-3 text-slate-600">
          Aggregated analytics (page views, referrers, device class) and any
          information you submit voluntarily through our contact form.
        </p>
        <h2 className="mt-8 text-xl font-bold text-slate-900">Cookies</h2>
        <p className="mt-3 text-slate-600">
          We use cookies for analytics and to remember your preferences. You can
          disable cookies in your browser settings.
        </p>
        <h2 className="mt-8 text-xl font-bold text-slate-900">Your rights</h2>
        <p className="mt-3 text-slate-600">
          Email us to access, correct, or delete personal data we hold about you.
        </p>
      </section>
    </>
  );
}
