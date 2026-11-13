import type { SVGProps } from 'react';

/**
 * Kadmoon logo mark: three ascending bars, a clean bar-chart glyph for a
 * business-intelligence brand. The two shorter bars use currentColor so the
 * mark adapts to light and dark headers; the tallest bar carries the accent.
 */
export function LogoMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <rect x="3.25" y="12" width="4.5" height="8.75" rx="1.3" fill="currentColor" opacity="0.5" />
      <rect x="9.75" y="8" width="4.5" height="12.75" rx="1.3" fill="currentColor" opacity="0.8" />
      <rect x="16.25" y="3.25" width="4.5" height="17.5" rx="1.3" fill="#145CE6" />
    </svg>
  );
}
