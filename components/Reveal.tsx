'use client';

import { useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Animate each direct child in sequence instead of the wrapper as one block. */
  stagger?: boolean;
  /** Seconds before the animation starts. */
  delay?: number;
}

/**
 * Scroll reveal built on IntersectionObserver + CSS transitions rather than
 * ScrollTrigger: it cannot desync from smooth scrolling, and if the observer
 * never fires the effect below still unhides the content.
 */
export default function Reveal({ children, className, stagger = false, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? (Array.from(el.children) as HTMLElement[]) : [el];

    const show = () => {
      targets.forEach((node, i) => {
        node.style.transitionDelay = `${delay + (stagger ? i * 0.08 : 0)}s`;
        node.classList.add('is-revealed');
      });
    };

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      show();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        show();
        io.disconnect();
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    io.observe(el);

    return () => io.disconnect();
  }, [stagger, delay]);

  const marker = stagger ? { 'data-reveal-stagger': '' } : { 'data-reveal': '' };

  return (
    <div ref={ref} className={className} {...marker}>
      {children}
    </div>
  );
}
