import Link from 'next/link';
import { SITE } from '@/lib/site';
import { categories } from '@/data/categories';
import { cities } from '@/data/cities';

export default function Footer() {
  const topCities = cities.slice(0, 12);

  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="text-lg font-bold text-brand-700">{SITE.name}</div>
          <p className="mt-3 text-sm text-slate-600">{SITE.tagline}</p>
          <p className="mt-4 text-sm text-slate-600">{SITE.email}</p>
          <p className="text-sm text-slate-600">{SITE.phone}</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Categories</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {categories.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}/`} className="hover:text-brand-700">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Top Cities</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {topCities.map((c) => (
              <li key={c.slug}>
                <Link href={`/cities/${c.slug}/`} className="hover:text-brand-700">
                  {c.name}, {c.stateCode}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/about/" className="hover:text-brand-700">About</Link></li>
            <li><Link href="/contact/" className="hover:text-brand-700">Contact</Link></li>
            <li><Link href="/privacy/" className="hover:text-brand-700">Privacy</Link></li>
            <li><Link href="/terms/" className="hover:text-brand-700">Terms</Link></li>
            <li><Link href="/categories/" className="hover:text-brand-700">All Categories</Link></li>
            <li><Link href="/cities/" className="hover:text-brand-700">All Cities</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. Listings are illustrative; verify
        before contacting.
      </div>
    </footer>
  );
}
