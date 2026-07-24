import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Software Development Company in the US | Kadmoon',
  description:
    'Kadmoon is a US software development company in Austin, TX building custom web, mobile, SaaS, and AI systems with a senior in-house team, fixed acceptance criteria, and code you own.',
  keywords: [
    'software development company',
    'software development company usa',
    'software development firm',
    'software development services',
    'best software development company',
    'software development company austin',
  ],
  alternates: { canonical: `${siteConfig.url}/software-development-company` },
  openGraph: {
    title: 'Kadmoon: a US software development company',
    description:
      'A US software development company building custom systems you own. Senior in-house team, two-week sprints, measurable acceptance criteria.',
    url: `${siteConfig.url}/software-development-company`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What is a software development company?',
    a: 'A software development company designs, builds, and maintains software for other businesses. That ranges from a single web or mobile app to full enterprise systems, SaaS platforms, integrations, and data and AI features. A custom company builds each system around one client instead of selling a shared product, so the software fits your process rather than the other way around.',
  },
  {
    q: 'How do I choose the best software development company?',
    a: 'There is no single best for every project. The right company for you employs its engineers full-time rather than passing work to subcontractors, writes measurable acceptance criteria into the contract, shows working software early, hands you the code and infrastructure on delivery, and has real cases in your industry. Check those five things and most of the field sorts itself out.',
  },
  {
    q: 'Should I hire an in-house, onshore, or offshore software development company?',
    a: 'The split that matters most is not geography but employment: are the engineers full-time staff or rotating freelancers. Cascading subcontracting is the top cause of projects that slip and lose quality, and it happens onshore and offshore alike. A US company with a permanent in-house team gives you time-zone overlap, clear accountability, and a team that stays on your project from start to finish.',
  },
  {
    q: 'How much does a software development company charge?',
    a: 'Price tracks scope: the number of features, integrations, data volume, and compliance requirements. A focused internal tool can land in the low tens of thousands, while a multi-tenant platform with billing and public APIs runs much higher. A good company scopes the work with acceptance criteria per feature, so the price maps to something you can verify instead of an open-ended hourly meter.',
  },
  {
    q: 'What services does a full-service software development company offer?',
    a: 'Discovery and requirements, architecture and design, development in sprints, automated and manual QA, deployment and infrastructure, and support after go-live. Kadmoon covers all six across enterprise systems, SaaS, mobile, integrations, data and AI, and legacy modernization, so one team owns the system end to end.',
  },
];

export default function SoftwareDevelopmentCompanyPage() {
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
              items={[{ label: 'Home', href: '/' }, { label: 'Software development company' }]}
            />
            <div className="mt-6">
              <Eyebrow>Software development company</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                A US software development company that builds systems you own.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Kadmoon is a software development company based in Austin, Texas. We build custom web
                and mobile apps, SaaS platforms, enterprise systems, and AI for companies that want
                software built for their exact process. Every engineer is on our permanent in-house
                team, every feature ships with measurable acceptance criteria, and you own the code,
                infrastructure, and documentation on delivery.
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
            <h2>What a software development company does</h2>
            <p>
              A software development company turns a business problem into working software and keeps
              it running. The work spans discovery, architecture, development, QA, deployment, and
              support. Some companies specialize in one layer, like a{' '}
              <a href="/mobile-app-development-company">mobile app development company</a> or a{' '}
              <a href="/saas-development-company">SaaS development company</a>. Kadmoon works across
              the full stack as a{' '}
              <a href="/custom-software-development-company">custom software development company</a>,
              so one team can take a system from idea to production.
            </p>

            <h2>How to compare software development companies</h2>
            <p>
              Most companies look similar on a website. These are the questions that actually
              separate them:
            </p>
            <ul>
              <li>
                <strong>Who writes the code.</strong> Full-time, in-house engineers beat cascading
                subcontractors, the top cause of projects that slip and lose quality.
              </li>
              <li>
                <strong>What is in the contract.</strong> Measurable acceptance criteria per feature,
                not a vague statement of work.
              </li>
              <li>
                <strong>Ownership.</strong> You receive the Git repository, CI/CD pipelines,
                credentials, and a runbook on delivery. No lock-in.
              </li>
              <li>
                <strong>Cadence.</strong> Working software early, with a demo every two weeks.
              </li>
              <li>
                <strong>After go-live.</strong> A defined SLA and a plan to keep the product evolving.
              </li>
            </ul>

            <h2>The Kadmoon model</h2>
            <p>
              Kadmoon runs on a senior in-house team with two-week sprints and a working demo each
              cycle, and we engineer AI into the architecture from day one on a modern stack (React,
              Next.js, Node.js, Python, PostgreSQL, Kubernetes, Terraform). Our flagship practice is{' '}
              <a href="/industries/trade-and-supply-chain">trade and supply chain software</a>, and
              we build{' '}
              <a href="/enterprise-software-development">enterprise software</a> across{' '}
              <a href="/industries">ten-plus industries</a>. Explore the{' '}
              <a href="/services">capabilities</a> we deliver, see the{' '}
              <a href="/cases">systems we have delivered</a>, or compare us against a{' '}
              <a href="/software-house">software house</a>.
            </p>
          </div>
        </section>

        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              Software development company: frequently asked questions
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
            Looking for a software development company?
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
