'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

/**
 * Fade-up on scroll using IntersectionObserver. Respects prefers-reduced-motion
 * (the .reveal CSS in globals.css disables the transform for that case). The
 * `delay` staggers grouped items without pulling in an animation library.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
