/** @type {import('next').NextConfig} */

// Content Security Policy. Uses 'unsafe-inline' for scripts/styles because
// Next.js injects inline hydration scripts and the app uses inline styles and
// JSON-LD; a nonce-based policy would need middleware on every route. This
// still blocks script/frame injection from unapproved origins.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com",
  "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
  "frame-src 'self' https://www.googletagmanager.com",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Consolidate www -> non-www (canonical is https://kadmoon.com).
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kadmoon.com' }],
        destination: 'https://kadmoon.com/:path*',
        permanent: true,
      },
      // Old /en/* URLs (previous site) no longer exist; send to the closest
      // new page so indexed links keep their value instead of 404ing.
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/contato', destination: '/#contact', permanent: true },
      { source: '/en/contact', destination: '/#contact', permanent: true },
      { source: '/en/blog/:slug*', destination: '/blog', permanent: true },
      { source: '/en/:path*', destination: '/', permanent: true },

      // Retired custom-software pages (pivot to Microsoft data platform).
      { source: '/software-house', destination: '/services', permanent: true },
      { source: '/software-development-company', destination: '/services', permanent: true },
      { source: '/custom-software-development-company', destination: '/services', permanent: true },
      { source: '/enterprise-software-development', destination: '/services', permanent: true },
      { source: '/saas-development-company', destination: '/services', permanent: true },
      { source: '/mobile-app-development-company', destination: '/services/power-platform', permanent: true },
      { source: '/staff-augmentation', destination: '/services', permanent: true },
      { source: '/dedicated-development-team', destination: '/services', permanent: true },
      { source: '/hire-ai-engineers', destination: '/services/analytics-and-ai', permanent: true },
      { source: '/solutions', destination: '/industries', permanent: true },
      { source: '/solutions/:slug*', destination: '/industries', permanent: true },

      // Old service/industry slugs -> closest Microsoft data platform page.
      { source: '/services/data-and-ai', destination: '/services/analytics-and-ai', permanent: true },
      { source: '/services/enterprise-systems', destination: '/services', permanent: true },
      { source: '/services/saas-platforms', destination: '/services', permanent: true },
      { source: '/services/mobile-apps', destination: '/services/power-platform', permanent: true },
      { source: '/services/integrations-and-apis', destination: '/services/data-engineering', permanent: true },
      { source: '/services/legacy-modernization', destination: '/services/tenant-to-tenant-migration', permanent: true },
      { source: '/industries/trade-and-supply-chain', destination: '/industries/supply-chain', permanent: true },
      { source: '/industries/government-and-enterprise', destination: '/industries', permanent: true },
    ];
  },
};

module.exports = nextConfig;
