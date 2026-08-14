import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Public_Sans, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { FloatingContact } from '@/components/FloatingContact';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CookieConsent } from '@/components/CookieConsent';

// Serif display + humanist sans, matching the Kadmoon editorial identity.
const display = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const sans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const viewport: Viewport = {
  themeColor: '#0C1017',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: siteConfig.url,
    languages: { 'en-US': siteConfig.url, 'x-default': siteConfig.url },
    types: { 'application/rss+xml': `${siteConfig.url}/feed.xml` },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: siteConfig.ogImageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-US"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        {/* Google Consent Mode: deny all until the user accepts (see the
            cookie banner). Must run before GTM loads. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});`}
        </Script>
        {siteConfig.gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${siteConfig.gtmId}');`}
          </Script>
        )}
      </head>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        {siteConfig.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="gtm"
            />
          </noscript>
        )}
        <ScrollProgress />
        <JsonLd />
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}

        <FloatingContact />
        <CookieConsent />
      </body>
    </html>
  );
}
