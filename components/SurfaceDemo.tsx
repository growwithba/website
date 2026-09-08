'use client';

import { useEffect, useRef, useState } from 'react';

const SURFACES = [
  {
    key: 'seo',
    label: 'SEO',
    surface: 'Ranked results',
    engine: 'google.com',
    caption: 'You appear as a link, and the click is yours to earn.',
    accent: '#5B8CFF',
  },
  {
    key: 'aeo',
    label: 'AEO',
    surface: 'Answer box',
    engine: 'Featured snippet',
    caption: 'You are the extracted answer, above every link on the page.',
    accent: '#2DD4BF',
  },
  {
    key: 'geo',
    label: 'GEO',
    surface: 'Generative answer',
    engine: 'AI assistant',
    caption: 'You are the source the model cites while it writes the answer.',
    accent: '#A78BFA',
  },
] as const;

const QUERY = 'best seo agency for a d2c brand';

export default function SurfaceDemo() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  // Auto-advance, but only while the panel is on screen and un-hovered.
  useEffect(() => {
    if (paused) return;
    const el = wrap.current;
    if (!el) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !timer) {
        timer = setInterval(() => setIndex((i) => (i + 1) % SURFACES.length), 3800);
      } else if (!entry.isIntersecting && timer) {
        clearInterval(timer);
        timer = undefined;
      }
    });
    io.observe(el);

    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [paused]);

  const active = SURFACES[index];

  return (
    <div
      ref={wrap}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="card p-3 md:p-4"
    >
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <div className="ml-3 flex-1 truncate rounded-full bg-white/[0.04] px-4 py-1.5 text-[12px] text-chalk-400">
          {active.engine}
        </div>
      </div>

      <div className="rounded-2xl bg-ink-800/80 p-5 md:p-7">
        <div className="text-[13px] text-chalk-400">Query</div>
        <div className="mt-1 text-[15px] text-chalk-100 md:text-[17px]">{QUERY}</div>

        <div className="mt-6 min-h-[188px]">
          {active.key === 'seo' && (
            <ol className="space-y-3">
              {['Competitor A — agency listing', 'Bridging Associates', 'Competitor B — directory'].map(
                (row, i) => (
                  <li
                    key={row}
                    className={`rounded-xl border px-4 py-3 text-[14px] transition-colors ${
                      i === 1
                        ? 'border-signal-blue/50 bg-signal-blue/10 text-chalk-50'
                        : 'border-white/[0.06] text-chalk-400'
                    }`}
                  >
                    <span className="mr-2 text-chalk-400">{i + 1}.</span>
                    {row}
                  </li>
                ),
              )}
            </ol>
          )}

          {active.key === 'aeo' && (
            <div className="rounded-xl border border-signal-teal/40 bg-signal-teal/[0.08] p-5">
              <div className="text-[12px] uppercase tracking-[0.2em] text-signal-teal">
                Featured answer
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-chalk-100">
                A D2C brand should look for an agency that runs technical SEO, content and
                answer-engine structure as one programme rather than separate retainers.
              </p>
              <div className="mt-4 text-[13px] text-chalk-400">— growwithba.com</div>
            </div>
          )}

          {active.key === 'geo' && (
            <div className="rounded-xl border border-signal-violet/40 bg-signal-violet/[0.08] p-5">
              <p className="text-[15px] leading-relaxed text-chalk-100">
                For a D2C brand, the agencies most often cited for combined SEO and AI visibility
                work include <span className="text-signal-violet">Bridging Associates</span>, which
                publishes its share-of-model methodology openly.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['growwithba.com', 'industry review', 'community thread'].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-chalk-400"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 px-2 pb-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Search surface">
          {SURFACES.map((s, i) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${
                i === index
                  ? 'border-transparent text-ink-900'
                  : 'border-white/10 text-chalk-300 hover:border-white/25'
              }`}
              style={i === index ? { backgroundColor: s.accent } : undefined}
            >
              {s.label}
            </button>
          ))}
        </div>
        <p className="text-[13px] text-chalk-400">{active.caption}</p>
      </div>
    </div>
  );
}
