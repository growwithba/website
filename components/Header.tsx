import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-brand-700">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-600 text-white text-sm">
            PD
          </span>
          {SITE.name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/categories/" className="hover:text-brand-700">Categories</Link>
          <Link href="/cities/" className="hover:text-brand-700">Cities</Link>
          <Link href="/about/" className="hover:text-brand-700">About</Link>
          <Link href="/contact/" className="hover:text-brand-700">Contact</Link>
        </nav>
        <Link
          href="/contact/"
          className="hidden rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 sm:inline-block"
        >
          List your business
        </Link>
      </div>
    </header>
  );
}
