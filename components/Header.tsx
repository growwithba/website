'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV, SITE } from '@/lib/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? 'border-b border-white/[0.08] bg-ink-900/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label={`${SITE.name} home`}
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-signal-blue via-signal-violet to-signal-teal text-[13px] font-semibold text-ink-900">
            BA
          </span>
          <span className="text-[15px] font-medium tracking-tight text-chalk-50">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] text-chalk-200 transition-colors hover:text-chalk-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact/"
            className="hidden rounded-full bg-chalk-50 px-5 py-2.5 text-[14px] font-medium text-ink-900 transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
          >
            Book a diagnostic
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-[1.5px] w-4 bg-chalk-50 transition-transform duration-300 ${
                  open ? 'top-[5px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-4 bg-chalk-50 transition-transform duration-300 ${
                  open ? 'top-[5px] -rotate-45' : 'top-[10px]'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="shell flex flex-col gap-1 pb-8 md:hidden">
          {[...NAV, { label: 'Contact', href: '/contact/' }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/[0.06] py-4 text-2xl tracking-tight text-chalk-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
