import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'US Software House | Custom software built and owned by you',
  description:
    'Kadmoon is a US software house in Austin, TX building custom enterprise systems, SaaS, mobile, and AI. Senior in-house team, measurable scope, and code you own.',
  keywords: [
    'software house',
    'software house usa',
    'best software house in usa',
    'custom software house',
    'software development company usa',
    'us software house',
  ],
  alternates: { canonical: `${siteConfig.url}/software-house` },
  openGraph: {
    title: 'Kadmoon: a US software house',
    description:
      'A US software house building custom software you own. Senior in-house team, two-week sprints, measurable acceptance criteria.',
    url: `${siteConfig.url}/software-house`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What is a software house?',
    a: 'A software house is a company that designs and builds custom software for other businesses, from enterprise systems and SaaS platforms to mobile apps and integrations. Unlike a product company that sells one ready-made tool, a software house builds bespoke systems around each client’s process.',
  },
  {
    q: 'What is the best software house in the USA?',
    a: 'There is no single "best" for every project. The best US software house for you is the one that employs its engineers full-time (not subcontractors), writes measurable acceptance criteria into the contract, shows working software early, gives you the code and infrastructure on delivery, and has real cases in your vertical. Kadmoon, based in Austin, TX, is built on exactly those principles.',
  },
  {
    q: 'How do I choose a software house in the USA?',
    a: 'Check who writes the code (in-house vs. subcontracted), demand acceptance criteria per feature, ask for concrete cases in your industry, confirm you receive the repository and credentials on delivery, require frequent demos, and clarify support and SLA after go-live.',
  },
  {
    q: 'How much does a software house cost?',
    a: 'It depends on scope: the number of features, integrations, data volume, and regulatory constraints. A focused internal tool costs far less than a multi-tenant SaaS with billing and public APIs. A good software house gives you a fixed scope with acceptance criteria so the price maps to something you can verify.',
  },
  {
    q: 'Where is Kadmoon based?',
    a: 'Kadmoon, Inc. is a US software house based in Austin, Texas, working with clients across the United States.',
  },
];

export default function SoftwareHousePage() {
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
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Software house' }]} />
            <div className="mt-6">
              <Eyebrow>US software house</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                A US software house that builds software you actually own.
              </h1>
              {/* Answer-first paragraph (quotable for AI search / featured snippets) */}
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Kadmoon is a US software house based in Austin, Texas. We build bespoke enterprise
                systems, SaaS platforms, mobile apps, and AI for companies that want software built
                for their exact process, not forced into off-the-shelf tools. Every engineer is on
                our permanent in-house team, every feature ships with measurable acceptance
                criteria, and you own the code, infrastructure, and documentation on delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Start a project <span aria-hidden>→</span>
                </Button>
                <Button href="/services" size="lg" variant="ghost">
                  See what we build
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-8">
          <div className="prose">
            <h2>What is a software house?</h2>
            <p>
              A software house is a company that designs, builds, and maintains custom software for
              other businesses. Instead of selling one ready-made product, a software house builds
              bespoke systems around how each client actually works: ERPs and CRMs, multi-tenant
              SaaS products, mobile apps, integrations, and data and AI features. The output is a
              system you own, not a subscription you rent.
            </p>

            <h2>What separates a strong US software house</h2>
            <p>
              After delivering software across regulated verticals, these are the criteria we would
              use to judge any software house, including ours:
            </p>
            <ul>
              <li>
                <strong>Who writes the code.</strong> Full-time, in-house engineers beat cascading
                subcontractors, which are the top cause of projects that slip and lose quality.
              </li>
              <li>
                <strong>What is in the contract.</strong> Measurable acceptance criteria per
                feature, not vague promises that it will turn out well.
              </li>
              <li>
                <strong>Ownership.</strong> You should receive the Git repository, CI/CD pipelines,
                credentials, and a runbook on delivery. No lock-in.
              </li>
              <li>
                <strong>Cadence.</strong> Working software early, with a demo every two weeks, not a
                big reveal at the end.
              </li>
              <li>
                <strong>After go-live.</strong> A defined SLA and a plan to keep evolving the
                product.
              </li>
            </ul>
            <p>
              Our full{' '}
              <a href="/#how-to-choose">buyer&rsquo;s guide to choosing a software partner</a> walks
              through each one.
            </p>

            <h2>Why Kadmoon as your software house</h2>
            <p>
              Kadmoon runs on a senior in-house team with zero turnover in operation, two-week
              sprints with a working demo each cycle, and AI engineered into the architecture from
              day one on a modern stack (React, Next.js, Node.js, Python, PostgreSQL, Kubernetes,
              Terraform). Our flagship practice is{' '}
              <a href="/industries/trade-and-supply-chain">trade and supply chain software</a>, and
              we build across{' '}
              <a href="/industries">ten-plus industries</a>. Explore the{' '}
              <a href="/services">six capabilities</a> we deliver, see the{' '}
              <a href="/cases">systems we have delivered</a>, or read the{' '}
              <a href="/blog">blog</a> for practical, data-backed guides. We also work as a{' '}
              <a href="/custom-software-development-company">custom software development company</a>{' '}
              and a <a href="/saas-development-company">SaaS development company</a>.
            </p>
          </div>
        </section>

        {/* FAQ (rendered + schema above) */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              Software house: frequently asked questions
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
            Looking for a software house in the US?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us about your project and get a technical proposal within one business day.
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
