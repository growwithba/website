import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'PrimeDirectory terms of service.',
  path: '/terms/',
});

export default function TermsPage() {
  return (
    <>
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms/' }]} />
        </div>
      </div>
      <section className="mx-auto max-w-3xl px-4 py-12 prose-clean">
        <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
        <p className="mt-4 text-slate-600">Last updated: April 2026</p>
        <p className="mt-4 text-slate-600">
          By using PrimeDirectory you agree to these terms. Listings are provided for
          informational purposes only. Always verify credentials, license status,
          and pricing directly with the listed business.
        </p>
        <h2 className="mt-8 text-xl font-bold text-slate-900">No professional advice</h2>
        <p className="mt-3 text-slate-600">
          Information on this site does not constitute legal, financial, medical, or
          tax advice. Consult a qualified professional for advice on your situation.
        </p>
        <h2 className="mt-8 text-xl font-bold text-slate-900">Liability</h2>
        <p className="mt-3 text-slate-600">
          PrimeDirectory is provided "as is" without warranties of any kind. We are
          not liable for transactions or interactions between users and listed
          businesses.
        </p>
      </section>
    </>
  );
}
