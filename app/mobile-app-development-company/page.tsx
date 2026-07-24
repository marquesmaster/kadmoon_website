import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in the US | Kadmoon',
  description:
    'Kadmoon is a US mobile app development company in Austin, TX building native and React Native apps for iOS and Android, with offline-first UX, backend integration, and code you own.',
  keywords: [
    'mobile app development company',
    'mobile app development company usa',
    'ios app development company',
    'android app development company',
    'react native development company',
    'custom mobile app development',
  ],
  alternates: { canonical: `${siteConfig.url}/mobile-app-development-company` },
  openGraph: {
    title: 'Kadmoon: a US mobile app development company',
    description:
      'A US mobile app development company building native and React Native apps you own. Offline-first, backend-integrated, product-grade UX.',
    url: `${siteConfig.url}/mobile-app-development-company`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What does a mobile app development company do?',
    a: 'A mobile app development company designs, builds, ships, and maintains apps for iOS and Android. That covers UX and interface design, the app itself, the backend and APIs it talks to, app store release, and updates after launch. A good one builds the app as part of your wider system rather than a standalone island that cannot reach your data.',
  },
  {
    q: 'Should I build a native app or use React Native?',
    a: 'React Native lets one codebase serve both iOS and Android, which usually cuts cost and keeps the two platforms in sync, and it is a strong default for most business and field apps. Native (Swift or Kotlin) earns its extra cost when you need heavy graphics, deep device features, or the last bit of performance. We pick per project and are honest about the trade-off instead of defaulting to one answer.',
  },
  {
    q: 'How much does it cost to build a mobile app?',
    a: 'Cost tracks scope: the number of screens and flows, whether it works offline, how many systems it integrates with, and whether you need one platform or both. A focused single-platform app costs far less than a cross-platform app with offline sync, payments, and a custom backend. We scope the build with acceptance criteria per feature so the price is something you can check.',
  },
  {
    q: 'Do you build the backend and API for the app too?',
    a: 'Yes. Most mobile apps are only as good as the backend behind them. We build the APIs, data model, authentication, and sync layer alongside the app, or integrate cleanly with the systems you already run, so the app is part of one coherent system rather than a disconnected front end.',
  },
  {
    q: 'Do I own the app code and the App Store listing?',
    a: 'Yes. On delivery you receive the source code, the backend, the CI/CD pipeline, and the credentials, and the App Store and Play Store listings are published under your own developer accounts. No lock-in and no dependency that leaves you unable to ship an update without us.',
  },
];

export default function MobileAppDevelopmentCompanyPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />

        <section className="relative overflow-hidden pb-10 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-6">
            <Breadcrumbs
              items={[{ label: 'Home', href: '/' }, { label: 'Mobile app development company' }]}
            />
            <div className="mt-6">
              <Eyebrow>Mobile app development company</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                A US mobile app development company that ships apps you own.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Kadmoon is a mobile app development company based in Austin, Texas. We build native
                and React Native apps for iOS and Android, with product-grade UX, offline-first data
                when the job needs it, and direct integration with your backend. You own the app, the
                backend, and the store listings on delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Start a project <span aria-hidden>→</span>
                </Button>
                <Button href="/services/mobile-apps" size="lg" variant="ghost">
                  See our mobile work
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-8">
          <div className="prose">
            <h2>What a mobile app development company delivers</h2>
            <p>
              A mobile app development company takes an idea to a shipped app and keeps it healthy.
              That means interface and UX design, the app for iOS and Android, the backend and APIs
              behind it, release to the App Store and Play Store, and updates after launch. We build
              the app as part of your system, so it reads and writes the same data as the rest of
              your operation instead of living on its own.
            </p>

            <h2>Native or cross-platform</h2>
            <p>
              For most business, field, and customer apps, React Native lets one codebase serve both
              platforms and keeps them in step, which usually lowers cost. Native pays off when you
              need heavy graphics, deep hardware access, or maximum performance. We choose per
              project and explain the reasoning. Our guides on{' '}
              <a href="/blog/react-native-vs-native-development">React Native versus native</a> and{' '}
              <a href="/blog/offline-first-mobile-apps">offline-first apps</a> go deeper.
            </p>

            <h2>Why Kadmoon for mobile</h2>
            <p>
              Kadmoon runs on a senior in-house team with two-week sprints and a working build each
              cycle, so you are testing the app on a real device early. We handle the{' '}
              <a href="/services/mobile-apps">mobile app service</a> and the{' '}
              <a href="/services/data-and-ai">data and AI</a> behind it, work as a broader{' '}
              <a href="/software-development-company">software development company</a>, and can show
              you the <a href="/cases">systems we have delivered</a>. Read the{' '}
              <a href="/blog">blog</a> for practical, data-backed guides.
            </p>
          </div>
        </section>

        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              Mobile app development: frequently asked questions
            </h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="font-display text-base font-medium text-ink md:text-lg">{f.q}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-display-sm text-ink">
            Looking for a mobile app development company?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us about your app and get a technical proposal within one business day.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/#contact" size="lg">
              Start a project <span aria-hidden>→</span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
