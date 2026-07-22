import type { SVGProps } from 'react';

/**
 * Kadmoon logo mark: a crescent moon (the "moon" in Kadmoon) with the orange
 * accent as a star. The crescent uses currentColor so it inverts on dark
 * sections; the star is always the brand accent.
 */
export function LogoMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="currentColor"
      />
      <circle cx="16.5" cy="6" r="1.7" fill="#EA5A1F" />
    </svg>
  );
}
