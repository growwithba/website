'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui';

// WebGL is decorative: load it only on the client, after the type is painted.
const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false });

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-hero-line] > span', {
        yPercent: 115,
        duration: 1.25,
        ease: 'expo.out',
        stagger: 0.09,
      });
      gsap.from('[data-hero-fade]', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.45,
        stagger: 0.1,
        ease: 'expo.out',
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-ink-900">
        <HeroCanvas />
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink-900 to-transparent"
      />

      <div className="shell flex min-h-[92vh] flex-col justify-end pb-16 pt-40 md:pb-24">
        <p data-hero-fade className="eyebrow">
          <span className="inline-block h-1 w-1 rounded-full bg-signal-teal" />
          SEO · AEO · GEO
        </p>

        <h1 className="display mt-8 text-[clamp(2.75rem,8vw,7rem)] leading-[0.94]">
          {['Stop ranking.', 'Start being', 'the answer.'].map((line) => (
            <span key={line} data-hero-line className="block overflow-hidden">
              <span className="block">{line}</span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_auto] md:items-end">
          <p data-hero-fade className="max-w-xl text-[17px] leading-relaxed text-chalk-300 md:text-[19px]">
            Search no longer ends at ten blue links. We build visibility across ranked
            results, answer boxes and the AI assistants your customers now ask first —
            as one sequenced programme, not three retainers.
          </p>
          <div data-hero-fade className="flex flex-wrap gap-3">
            <Button href="/contact/">Book a diagnostic</Button>
            <Button href="/services/" variant="ghost">
              What we do
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
