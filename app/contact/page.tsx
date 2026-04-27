import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description: 'Get in touch with PrimeDirectory or list your business.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }]} />
        </div>
      </div>
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-900">Contact PrimeDirectory</h1>
        <p className="mt-4 text-lg text-slate-600">
          Questions, feedback, or want to list your business? We typically reply
          within one business day.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Email
            </div>
            <a href={`mailto:${SITE.email}`} className="mt-2 block text-lg font-medium text-brand-700">
              {SITE.email}
            </a>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Phone
            </div>
            <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="mt-2 block text-lg font-medium text-brand-700">
              {SITE.phone}
            </a>
          </div>
        </div>

        <form className="mt-10 grid gap-4 rounded-xl border border-slate-200 bg-white p-6" action="#" method="post">
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="name">Name</label>
            <input id="name" name="name" required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none" />
          </div>
          <button type="submit" className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            Send message
          </button>
        </form>
      </section>
    </>
  );
}
