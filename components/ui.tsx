import Link from 'next/link';

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="inline-block h-1 w-1 rounded-full bg-signal-blue" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="display mt-5 text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.04]">{title}</h2>
      {lead && (
        <p className="mt-6 text-[17px] leading-relaxed text-chalk-300 md:text-[19px]">{lead}</p>
      )}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  tone = 'light',
}: {
  href: string;
  children: React.ReactNode;
  tone?: 'light' | 'dark';
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[15px] font-medium ${
        tone === 'light' ? 'text-chalk-50' : 'text-ink-900'
      }`}
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

export function Button({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium transition-all duration-300';
  const styles =
    variant === 'primary'
      ? 'bg-chalk-50 text-ink-900 hover:scale-[1.03]'
      : 'border border-white/15 text-chalk-100 hover:border-white/35 hover:bg-white/5';
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export function CtaBand({
  title = 'Find out where you actually stand.',
  body = 'A three-week diagnostic across search, answer engines and generative assistants. You keep the output either way.',
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="shell py-24 md:py-32">
      <div className="card grain relative isolate px-8 py-16 md:px-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/2 left-1/2 -z-10 h-[140%] w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,140,255,0.22),transparent)] blur-2xl"
        />
        <div className="max-w-2xl">
          <h2 className="display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05]">{title}</h2>
          <p className="mt-6 text-[17px] leading-relaxed text-chalk-300">{body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact/">Book a diagnostic</Button>
            <Button href="/approach/" variant="ghost">
              See how we work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-14">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap text-[13px] uppercase tracking-[0.2em] text-chalk-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
