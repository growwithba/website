import Link from 'next/link';
import { SITE } from '@/lib/site';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden border-t border-white/[0.08] bg-ink-800">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-signal-blue via-signal-violet to-signal-teal text-[13px] font-semibold text-ink-900">
              BA
            </span>
            <span className="text-[15px] font-medium text-chalk-50">{SITE.name}</span>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-chalk-300">
            Search, answer and generative-engine visibility run as one system.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-6 inline-block text-[15px] text-chalk-100 underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/60"
          >
            {SITE.email}
          </a>
        </div>

        <div>
          <div className="eyebrow">Services</div>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}/`}
                  className="text-[15px] text-chalk-300 transition-colors hover:text-chalk-50"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Company</div>
          <ul className="mt-5 space-y-3">
            {[
              { label: 'Approach', href: '/approach/' },
              { label: 'Work', href: '/work/' },
              { label: 'About', href: '/about/' },
              { label: 'Contact', href: '/contact/' },
              { label: 'Privacy', href: '/privacy/' },
              { label: 'Terms', href: '/terms/' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-chalk-300 transition-colors hover:text-chalk-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-white/[0.06] py-8 text-[13px] text-chalk-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p>SEO · AEO · GEO</p>
      </div>
    </footer>
  );
}
