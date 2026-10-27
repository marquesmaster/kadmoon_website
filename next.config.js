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

const retiredBlogSlugs = [
  'ace-integration-software-guide',
  'agile-software-development-explained',
  'api-first-development',
  'austin-custom-software-development-company',
  'b2b-saas-mvp-development',
  'benefits-of-custom-software',
  'best-tech-stack-for-enterprise-apps',
  'build-vs-buy-software-decision',
  'cbp-ace-abi-integration',
  'choosing-a-tech-stack-for-startups',
  'ci-cd-explained-for-business',
  'cloud-migration-strategy',
  'cobol-migration-strategy',
  'cost-to-build-a-custom-crm',
  'cost-to-build-a-custom-erp',
  'cost-to-build-a-mobile-app',
  'cost-to-build-a-saas-application',
  'cost-to-build-an-mvp',
  'cross-platform-vs-native-apps',
  'custom-3pl-software',
  'custom-customs-brokerage-software',
  'custom-software-contract-terms-to-negotiate',
  'custom-software-development-process',
  'custom-software-for-competitive-advantage',
  'custom-software-for-construction',
  'custom-software-for-distribution',
  'custom-software-for-financial-services',
  'custom-software-for-government',
  'custom-software-for-healthcare',
  'custom-software-for-insurance',
  'custom-software-for-logistics',
  'custom-software-for-manufacturing',
  'custom-software-for-retail',
  'custom-software-maintenance-cost',
  'custom-software-pricing-models-explained',
  'custom-software-rfp-template-and-guide',
  'custom-software-roi',
  'custom-software-vs-off-the-shelf',
  'custom-software-vs-platform-solutions',
  'custom-software-vs-saas',
  'custom-transportation-management-software',
  'custom-us-customs-software',
  'custom-warehouse-management-software',
  'customs-entry-automation',
  'dedicated-team-vs-fixed-project-cost',
  'definition-of-done-software',
  'delphi-application-modernization',
  'denied-party-screening-software',
  'disadvantages-of-off-the-shelf-software',
  'do-you-own-the-source-code',
  'drayage-management-software',
  'edi-integration-for-supply-chain',
  'enterprise-api-strategy',
  'enterprise-mobile-app-development',
  'erp-integration-guide',
  'field-service-mobile-apps',
  'fixed-price-vs-time-and-materials',
  'freight-forwarding-software',
  'gathering-software-requirements',
  'hidden-costs-of-custom-software',
  'how-a-software-house-works',
  'how-custom-software-scales-with-your-business',
  'how-much-does-custom-software-cost',
  'how-to-budget-for-a-software-project',
  'how-to-build-a-b2b-mobile-app',
  'how-to-build-a-saas-application',
  'how-to-choose-a-custom-software-development-company',
  'how-to-compare-software-development-vendors',
  'how-to-evaluate-a-software-development-proposal',
  'how-to-modernize-legacy-software',
  'how-to-scale-a-saas-platform',
  'how-to-scope-a-custom-software-project',
  'how-to-vet-a-software-development-vendor',
  'how-to-write-a-software-requirements-document',
  'hts-classification-software',
  'import-export-compliance-software',
  'in-house-vs-outsourced-software-development',
  'internal-tool-to-saas-product',
  'ios-vs-android-first',
  'landed-cost-calculation-software',
  'legacy-system-integration',
  'legacy-system-replacement-guide',
  'low-code-vs-custom-development',
  'managing-technical-debt',
  'microservices-vs-monolith-architecture',
  'middleware-and-integration-platforms',
  'mobile-app-development-process',
  'monolith-to-microservices-migration',
  'multi-tenant-saas-architecture',
  'netsuite-integration-guide',
  'nodejs-vs-python-for-backend',
  'offline-first-mobile-apps',
  'offshore-vs-onshore-vs-nearshore-development',
  'postgresql-for-enterprise-applications',
  'progressive-web-app-vs-native',
  'questions-to-ask-a-software-development-company',
  'react-native-vs-flutter',
  'react-native-vs-native-development',
  'real-time-shipment-tracking-software',
  'red-flags-when-hiring-a-software-development-firm',
  'saas-billing-and-subscription-systems',
  'saas-onboarding-and-user-management',
  'saas-security-and-compliance',
  'signs-your-business-needs-custom-software',
  'software-discovery-phase',
  'software-house-engagement-models',
  'software-house-vs-agency',
  'software-house-vs-freelancers',
  'software-house-vs-staff-augmentation',
  'software-qa-process',
  'software-vendor-due-diligence-checklist',
  'sprint-planning-for-clients',
  'sql-vs-nosql-databases',
  'staff-augmentation-vs-managed-team',
  'strangler-fig-pattern-modernization',
  'stripe-integration-for-saas',
  'supply-chain-erp-integration',
  'supply-chain-visibility-software',
  'texas-software-development-companies-guide',
  'trade-compliance-automation',
  'vb6-application-migration',
  'webhooks-vs-polling',
  'what-is-a-software-house',
  'what-is-bespoke-software',
  'what-is-custom-software-development',
  'what-is-system-integration',
  'what-to-expect-working-with-a-software-house',
  'what-to-look-for-in-a-software-development-partner',
  'when-to-build-custom-software',
  'when-to-hire-a-software-house',
  'when-to-use-microservices',
  'white-label-saas-development',
  'who-owns-custom-software-ip',
  'why-choose-a-us-based-software-house',
  'why-custom-software-costs-what-it-does',
  'why-nextjs-for-web-applications',
  'writing-acceptance-criteria',
];

// Retired URLs that still draw real search impressions on trade-relevant
// queries. Point each to the closest NEW page instead of the generic /blog
// or /services, so a clicker lands somewhere relevant and Google can transfer
// the topical signal to the rebranded content. First-match wins, so these are
// spread into the redirects list BEFORE the blanket retired maps below.
const retargetedBlogRedirects = {
  'custom-customs-brokerage-software': '/industries/customs-brokers',
  'custom-us-customs-software': '/industries/customs-brokers',
  'customs-entry-automation': '/industries/customs-brokers',
  'custom-customs-software': '/industries/customs-brokers',
  'denied-party-screening-software': '/blog/denied-party-screening',
  'hts-classification-software': '/blog/hts-classification-accuracy',
  'import-export-compliance-software': '/services/customs-compliance',
  'trade-compliance-automation': '/services/customs-compliance',
  'landed-cost-calculation-software': '/blog/landed-cost-calculation',
  'real-time-shipment-tracking-software': '/blog/shipment-visibility-software',
  'supply-chain-visibility-software': '/blog/shipment-visibility-software',
  'custom-transportation-management-software': '/services/supply-chain-logistics',
  'custom-warehouse-management-software': '/services/inventory-wms',
  'custom-3pl-software': '/industries/third-party-logistics',
  'freight-forwarding-software': '/industries/freight-forwarders',
  'drayage-management-software': '/blog/drayage-first-mile-cost',
  'cbp-ace-abi-integration': '/blog/edi-ace-integration-for-trade',
  'ace-integration-software-guide': '/blog/edi-ace-integration-for-trade',
  'edi-integration-for-supply-chain': '/blog/edi-ace-integration-for-trade',
  'supply-chain-erp-integration': '/services/trade-integrations',
  'custom-software-for-logistics': '/industries/freight-forwarders',
  'custom-software-for-distribution': '/industries/manufacturers-distributors',
  'demand-forecasting-software': '/blog/forecast-accuracy-cross-border-inventory',
  'predictive-analytics-for-supply-chain': '/blog/forecast-accuracy-cross-border-inventory',
  'power-bi-kpis-for-logistics': '/blog/trade-control-tower',
};

// Retired Power BI / Fabric blog articles that still draw Microsoft-stack
// search demand. A trade buyer who runs Microsoft should land on how we deliver
// trade analytics on that stack, not on a dead generic BI article. Spread
// before the blanket retiredPowerBiBlogSlugs map (first match wins).
const retargetedMicrosoftBlogRedirects = {
  'what-is-microsoft-fabric': '/blog/microsoft-fabric-for-trade-data',
  'azure-synapse-vs-microsoft-fabric': '/blog/microsoft-fabric-for-trade-data',
  'microsoft-fabric-capacity-planning': '/blog/microsoft-fabric-for-trade-data',
  'medallion-architecture-fabric': '/blog/microsoft-fabric-for-trade-data',
  'direct-lake-explained': '/blog/microsoft-fabric-for-trade-data',
  'import-vs-directquery-vs-direct-lake': '/blog/microsoft-fabric-for-trade-data',
  'power-bi-premium-to-fabric': '/blog/microsoft-fabric-for-trade-data',
  'building-a-data-warehouse': '/blog/microsoft-fabric-for-trade-data',
  'power-bi-premium-vs-fabric-cost': '/pricing',
  'what-is-a-semantic-model': '/blog/semantic-layer-trade-kpi',
  'power-bi-semantic-model-best-practices': '/blog/semantic-layer-trade-kpi',
  'star-schema-for-power-bi': '/blog/semantic-layer-trade-kpi',
  'row-level-security-power-bi': '/blog/semantic-layer-trade-kpi',
  'power-bi-incremental-refresh': '/blog/trade-data-freshness',
  'power-bi-vs-excel-for-reporting': '/blog/power-bi-for-trade-reporting',
  'business-intelligence-dashboards': '/blog/power-bi-for-trade-reporting',
  'dax-patterns-for-business': '/blog/power-bi-for-trade-reporting',
  'data-pipeline-architecture': '/docs/data-integration',
  'power-bi-governance-guide': '/platform',
  'power-bi-governance-overhaul-signs': '/platform',
  'power-bi-adoption-playbook': '/platform',
  'power-bi-deployment-pipelines-alm': '/platform',
  'power-platform-center-of-excellence-guide': '/platform',
  'managed-power-bi-services': '/platform',
  'in-house-bi-analyst-vs-managed-power-bi': '/docs/engagement-models',
  'power-bi-consulting-rates': '/pricing',
  'how-much-does-a-power-bi-project-cost': '/pricing',
  'how-to-choose-a-power-bi-consultant': '/pricing',
  'tableau-to-power-bi-migration-cost': '/platform',
  'tableau-vs-power-bi': '/platform',
  'cognos-to-power-bi-what-changes': '/platform',
  'qlik-to-power-bi-what-carries-over': '/platform',
  'tenant-to-tenant-migration-guide': '/platform',
};

const retiredPowerBiBlogSlugs = [
  'ai-document-processing', 'anomaly-detection-for-business', 'azure-synapse-vs-microsoft-fabric',
  'building-a-data-warehouse', 'business-intelligence-dashboards', 'cognos-to-power-bi-what-changes',
  'data-pipeline-architecture', 'dax-patterns-for-business', 'demand-forecasting-software',
  'direct-lake-explained', 'how-much-does-a-power-bi-project-cost', 'how-to-choose-a-power-bi-consultant',
  'import-vs-directquery-vs-direct-lake', 'in-house-bi-analyst-vs-managed-power-bi',
  'llm-integration-for-business', 'managed-power-bi-services', 'medallion-architecture-fabric',
  'microsoft-fabric-capacity-planning', 'power-bi-adoption-playbook', 'power-bi-consulting-rates',
  'power-bi-deployment-pipelines-alm', 'power-bi-governance-guide', 'power-bi-governance-overhaul-signs',
  'power-bi-incremental-refresh', 'power-bi-kpis-for-financial-services', 'power-bi-kpis-for-healthcare',
  'power-bi-kpis-for-logistics', 'power-bi-kpis-for-manufacturing', 'power-bi-kpis-for-retail',
  'power-bi-premium-to-fabric', 'power-bi-premium-vs-fabric-cost', 'power-bi-semantic-model-best-practices',
  'power-bi-vs-excel-for-reporting', 'power-platform-center-of-excellence-guide',
  'predictive-analytics-for-supply-chain', 'qlik-to-power-bi-what-carries-over', 'rag-for-business-applications',
  'row-level-security-power-bi', 'star-schema-for-power-bi', 'tableau-to-power-bi-migration-cost',
  'tableau-vs-power-bi', 'tenant-to-tenant-migration-guide', 'what-is-a-semantic-model', 'what-is-microsoft-fabric',
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
      // Old /en/* URLs (previous site) no longer exist.
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/blog/:slug*', destination: '/blog', permanent: true },
      { source: '/en/:path*', destination: '/', permanent: true },
      // Renamed case study.
      {
        source: '/cases/freight-visibility-platform',
        destination: '/cases/shipment-visibility-portal',
        permanent: true,
      },

      // Retired Power BI / Microsoft service pages. The analytics stack
      // (Fabric, Power BI, Azure) is how we deliver, so these point to the
      // platform ("Built on the Microsoft cloud") rather than a generic list:
      // a trade buyer who runs Microsoft lands on proof we deliver there.
      { source: '/services/power-bi', destination: '/platform', permanent: true },
      { source: '/services/microsoft-fabric', destination: '/platform', permanent: true },
      { source: '/services/power-platform', destination: '/platform', permanent: true },
      { source: '/services/power-platform-coe', destination: '/platform', permanent: true },
      { source: '/services/data-engineering', destination: '/services/trade-integrations', permanent: true },
      { source: '/services/analytics-and-ai', destination: '/platform', permanent: true },
      { source: '/services/data-governance', destination: '/services/customs-compliance', permanent: true },
      { source: '/services/tenant-to-tenant-migration', destination: '/platform', permanent: true },
      { source: '/services/bi-sustainment', destination: '/platform', permanent: true },
      { source: '/services/discovery-assessment', destination: '/platform', permanent: true },

      // Retired Power BI migration landing pages -> the platform (we deliver
      // trade analytics on the Microsoft stack, in your own tenant).
      { source: '/tableau-to-power-bi-migration', destination: '/platform', permanent: true },
      { source: '/qlik-to-power-bi-migration', destination: '/platform', permanent: true },
      { source: '/cognos-to-power-bi-migration', destination: '/platform', permanent: true },
      { source: '/synapse-to-fabric-migration', destination: '/platform', permanent: true },

      // Retired subscription and dashboards pages.
      { source: '/packages', destination: '/services', permanent: true },
      { source: '/dashboards', destination: '/cases', permanent: true },

      // Old retired Power BI industry slugs -> new trade industries.
      { source: '/industries/retail', destination: '/industries/manufacturers-distributors', permanent: true },
      { source: '/industries/financial-services', destination: '/industries', permanent: true },
      { source: '/industries/manufacturing', destination: '/industries/manufacturers-distributors', permanent: true },
      { source: '/industries/logistics', destination: '/industries/freight-forwarders', permanent: true },
      { source: '/industries/healthcare', destination: '/industries', permanent: true },
      { source: '/industries/education', destination: '/industries', permanent: true },
      { source: '/industries/supply-chain', destination: '/industries/third-party-logistics', permanent: true },

      // Older retired pages from previous iterations.
      { source: '/software-house', destination: '/services', permanent: true },
      { source: '/software-development-company', destination: '/services', permanent: true },
      { source: '/custom-software-development-company', destination: '/services', permanent: true },
      { source: '/enterprise-software-development', destination: '/services', permanent: true },
      { source: '/saas-development-company', destination: '/services', permanent: true },
      { source: '/mobile-app-development-company', destination: '/services', permanent: true },
      { source: '/staff-augmentation', destination: '/services', permanent: true },
      { source: '/dedicated-development-team', destination: '/services', permanent: true },
      { source: '/hire-ai-engineers', destination: '/services', permanent: true },
      { source: '/solutions', destination: '/services', permanent: true },
      // Trade-relevant legacy /solutions/* page still drawing impressions.
      { source: '/solutions/customs-broker-software', destination: '/industries/customs-brokers', permanent: true },
      { source: '/solutions/:slug*', destination: '/services', permanent: true },

      // Legacy URLs still indexed per Search Console (incl. old Portuguese
      // case slugs) that no longer exist. Redirect so the rebrand deploy does
      // not create fresh 404s on pages Google still knows.
      { source: '/cases/migracao-qlik-powerbi', destination: '/platform', permanent: true },
      { source: '/cases/plataforma-dados-fabric-varejo', destination: '/platform', permanent: true },
      { source: '/blog/saas-metrics-and-analytics', destination: '/blog', permanent: true },

      // Retired programmatic solution x city pages.
      { source: '/custom-software-development', destination: '/services', permanent: true },
      { source: '/custom-software-development/:city*', destination: '/services', permanent: true },
      // Microsoft-stack programmatic pages -> the platform (how we deliver).
      { source: '/power-bi', destination: '/platform', permanent: true },
      { source: '/power-bi/:city*', destination: '/platform', permanent: true },
      { source: '/microsoft-fabric', destination: '/platform', permanent: true },
      { source: '/microsoft-fabric/:city*', destination: '/platform', permanent: true },
      { source: '/power-platform', destination: '/platform', permanent: true },
      { source: '/power-platform/:city*', destination: '/platform', permanent: true },
      { source: '/power-apps-development', destination: '/services', permanent: true },
      { source: '/power-apps-development/:city*', destination: '/services', permanent: true },
      { source: '/azure-data-engineering', destination: '/platform', permanent: true },
      { source: '/azure-data-engineering/:city*', destination: '/platform', permanent: true },
      { source: '/copilot-consulting', destination: '/services', permanent: true },
      { source: '/copilot-consulting/:city*', destination: '/services', permanent: true },
      { source: '/data-governance', destination: '/services/customs-compliance', permanent: true },
      { source: '/data-governance/:city*', destination: '/services/customs-compliance', permanent: true },
      { source: '/power-bi-migration', destination: '/platform', permanent: true },
      { source: '/power-bi-migration/:city*', destination: '/platform', permanent: true },

      // Trade-relevant retired URLs retargeted to the closest new page (must
      // precede the blanket maps below, since the first matching rule wins).
      ...Object.entries(retargetedBlogRedirects).map(([slug, destination]) => ({
        source: `/blog/${slug}`,
        destination,
        permanent: true,
      })),

      // Retired blog articles from previous iterations.
      ...retiredBlogSlugs.map((slug) => ({
        source: `/blog/${slug}`,
        destination: '/blog',
        permanent: true,
      })),
      // Microsoft-stack retired blog articles retargeted to the platform and
      // trade-framed content (must precede the blanket map below).
      ...Object.entries(retargetedMicrosoftBlogRedirects).map(([slug, destination]) => ({
        source: `/blog/${slug}`,
        destination,
        permanent: true,
      })),

      // Retired Power BI blog articles (rebrand to foreign trade).
      ...retiredPowerBiBlogSlugs.map((slug) => ({
        source: `/blog/${slug}`,
        destination: '/blog',
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
