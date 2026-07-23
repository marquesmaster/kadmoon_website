import type { SVGProps } from 'react';

/**
 * Kadmoon logo mark: a geometric "K" monogram with a small orange accent.
 * Deliberately neutral, no celestial or religious motif.
 */
export function LogoMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <path
        d="M7 4v16 M7 12l9-8 M7 12l9 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16.5" cy="4.2" r="1.7" fill="#EA5A1F" />
    </svg>
  );
}
