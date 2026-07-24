import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Custom Software Development Company in the US | Kadmoon',
  description:
    'Kadmoon is a US custom software development company in Austin, TX. We build enterprise systems, SaaS, mobile, and AI with a senior in-house team, measurable scope, and code you own.',
  keywords: [
    'custom software development company',
    'custom software development company usa',
    'custom software development services',
    'enterprise software development company',
    'bespoke software development company',
    'software development company austin',
  ],
  alternates: { canonical: `${siteConfig.url}/custom-software-development-company` },
  openGraph: {
    title: 'Kadmoon — a US custom software development company',
    description:
      'A US custom software development company building systems you own. Senior in-house team, two-week sprints, measurable acceptance criteria.',
    url: `${siteConfig.url}/custom-software-development-company`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What does a custom software development company do?',
    a: 'A custom software development company designs, builds, and maintains software tailored to one business instead of selling a ready-made product. That covers discovery, architecture, development, QA, deployment, and support for systems like ERPs, SaaS platforms, mobile apps, and integrations. The result is software shaped around your exact process rather than a subscription you bend your workflow to fit.',
  },
  {
    q: 'How much does custom software development cost?',
    a: 'Cost tracks scope: the number of features, integrations, data volume, and compliance requirements. A focused internal tool can land in the low tens of thousands, while a multi-tenant SaaS with billing and public APIs runs much higher. A good company gives you a fixed scope with acceptance criteria so the price maps to something you can verify, not an open-ended estimate.',
  },
  {
    q: 'How do I choose a custom software development company in the USA?',
    a: 'Confirm who writes the code (full-time in-house engineers beat cascading subcontractors), demand measurable acceptance criteria per feature, ask for concrete cases in your industry, and require that you receive the repository, infrastructure, and credentials on delivery. Frequent demos and a defined post-launch SLA separate reliable partners from the rest.',
  },
  {
    q: 'Do I own the code a custom software company builds?',
    a: 'You should. With Kadmoon you receive the Git repository, CI/CD pipelines, credentials, and a runbook on delivery, with no lock-in. Always confirm IP ownership and handover terms in the contract before work starts, since some vendors retain the code or license it back to you.',
  },
  {
    q: 'How long does a custom software project take?',
    a: 'A first usable version of a focused system often ships in a few months, with a working demo every two weeks along the way. Larger platforms grow in phases rather than one long build. Cadence matters more than a single end date: you should see working software early instead of waiting for a big reveal.',
  },
];

export default function CustomSoftwareDevelopmentCompanyPage() {
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
              items={[{ label: 'Home', href: '/' }, { label: 'Custom software development company' }]}
            />
            <div className="mt-6">
              <Eyebrow>Custom software development company</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                A US custom software development company that builds systems you own.
              </h1>
              {/* Answer-first paragraph (quotable for AI search / featured snippets) */}
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Kadmoon is a custom software development company based in Austin, Texas. We build
                bespoke enterprise systems, SaaS platforms, mobile apps, and AI for companies that
                want software built for their exact process, not forced into off-the-shelf tools.
                Every engineer is on our permanent in-house team, every feature ships with measurable
                acceptance criteria, and you own the code, infrastructure, and documentation on
                delivery.
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
            <h2>What a custom software development company delivers</h2>
            <p>
              A custom software development company builds software tailored to one business rather
              than selling a single ready-made product. The work spans discovery, architecture,
              development, QA, deployment, and ongoing support, and the output is a system you own:
              ERPs and CRMs, multi-tenant SaaS products, mobile apps, integrations, and data and AI
              features shaped around how your team actually works.
            </p>

            <h2>When custom software beats off-the-shelf</h2>
            <p>
              Off-the-shelf tools are the right call when your process is standard and a mature
              product already fits. Custom development wins when the software is a competitive edge,
              when you are stitching together several tools with brittle exports, or when licensing
              and per-seat costs climb faster than the value you get back. Our guide to{' '}
              <a href="/blog/build-vs-buy-software-decision">build versus buy</a> walks through the
              decision with numbers.
            </p>

            <h2>What separates a strong development company</h2>
            <p>
              After delivering software across regulated verticals, these are the criteria we would
              use to judge any development company, including ours:
            </p>
            <ul>
              <li>
                <strong>Who writes the code.</strong> Full-time, in-house engineers beat cascading
                subcontractors, the top cause of projects that slip and lose quality.
              </li>
              <li>
                <strong>What is in the contract.</strong> Measurable acceptance criteria per feature,
                not vague promises about how it will turn out.
              </li>
              <li>
                <strong>Ownership.</strong> You receive the Git repository, CI/CD pipelines,
                credentials, and a runbook on delivery. No lock-in.
              </li>
              <li>
                <strong>Cadence.</strong> Working software early, with a demo every two weeks, not a
                single reveal at the end.
              </li>
              <li>
                <strong>After go-live.</strong> A defined SLA and a plan to keep evolving the product.
              </li>
            </ul>

            <h2>Why Kadmoon</h2>
            <p>
              Kadmoon runs on a senior in-house team with two-week sprints and a working demo each
              cycle, and we engineer AI into the architecture from day one on a modern stack (React,
              Next.js, Node.js, Python, PostgreSQL, Kubernetes, Terraform). Our flagship practice is{' '}
              <a href="/industries/trade-and-supply-chain">trade and supply chain software</a>, and
              we build across <a href="/industries">ten-plus industries</a>. Explore the{' '}
              <a href="/services">capabilities</a> we deliver, compare us against a{' '}
              <a href="/software-house">software house</a>, or read the{' '}
              <a href="/blog">blog</a> for practical, data-backed guides.
            </p>
          </div>
        </section>

        {/* FAQ (rendered + schema above) */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              Custom software development: frequently asked questions
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
            Looking for a custom software development company?
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
