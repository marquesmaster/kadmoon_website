import type { SVGProps } from 'react';

/**
 * A small, cohesive line-icon set (stroke-based, currentColor). Inline SVG so
 * there is no icon-font dependency and colors follow the design tokens.
 */
const paths: Record<string, string> = {
  // Capabilities
  enterprise: 'M3 21h18 M5 21V7l7-4 7 4v14 M9 21v-4h6v4 M9 9h.01 M12 9h.01 M15 9h.01 M9 13h.01 M12 13h.01 M15 13h.01',
  saas: 'M12 3v12 M8 11l4 4 4-4 M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3',
  mobile: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M11 18h2',
  integrations: 'M6 3v6 M6 15v6 M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 9a9 9 0 0 1-9 9',
  dataai: 'M9 3H5a2 2 0 0 0-2 2v4 M15 3h4a2 2 0 0 1 2 2v4 M9 21H5a2 2 0 0 1-2-2v-4 M15 21h4a2 2 0 0 1 2-2v-4 M12 8v3l2 1 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  legacy: 'M3 12a9 9 0 1 0 3-6.7L3 8 M3 3v5h5',
  // Why
  key: 'M15.5 7.5a3.5 3.5 0 1 1-4.9 4.9L4 19l-1 3 3-1 6.6-6.6a3.5 3.5 0 0 1 2.9-6.9z M16 8l2 2',
  team: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13A4 4 0 0 1 16 11',
  contract: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 15l2 2 4-4',
  sparkle: 'M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z M19 15l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z',
  stack: 'M12 2l9 5-9 5-9-5 9-5z M3 12l9 5 9-5 M3 17l9 5 9-5',
  delivery: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 0z M12 15l-3-3a22 22 0 0 1 8-11c3 0 5 2 5 5a22 22 0 0 1-11 8z M9 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z',
  // Process
  discovery: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.3-4.3',
  architecture: 'M4 4h16v6H4z M4 14h7v6H4z M14 14h6v6h-6z',
  code: 'M8 6l-6 6 6 6 M16 6l6 6-6 6',
  qa: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
  deploy: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 0z M12 15l-3-3a22 22 0 0 1 8-11c3 0 5 2 5 5a22 22 0 0 1-11 8z M9 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z',
  support: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4.9 4.9l4.3 4.3 M14.8 14.8l4.3 4.3 M14.8 9.2l4.3-4.3 M4.9 19.1l4.3-4.3',
  // Engagement / misc
  target: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  arrows: 'M3 12a9 9 0 1 0 3-6.7L3 8 M3 3v5h5',
  bolt: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
};

export function Icon({ name, ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  const d = paths[name] ?? paths.bolt;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {d.split(' M').map((seg, i) => (
        <path key={i} d={i === 0 ? seg : `M${seg}`} />
      ))}
    </svg>
  );
}
