import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Enterprise Software Development in the US | Kadmoon',
  description:
    'Kadmoon builds enterprise software in Austin, TX: ERPs, CRMs, and operational platforms with the integrations, security, and scale large operations need, on a senior in-house team, code you own.',
  keywords: [
    'enterprise software development',
    'enterprise software development company',
    'enterprise application development',
    'custom erp development',
    'enterprise system integration',
    'enterprise software development services',
  ],
  alternates: { canonical: `${siteConfig.url}/enterprise-software-development` },
  openGraph: {
    title: 'Kadmoon: enterprise software development',
    description:
      'Enterprise software built for how your operation runs: ERPs, CRMs, integrations, and platforms with the security and scale large teams need.',
    url: `${siteConfig.url}/enterprise-software-development`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What is enterprise software development?',
    a: 'Enterprise software development builds the systems a large organization runs on: ERPs, CRMs, operational platforms, and the integrations that tie them together. It differs from a small app in the demands around it, such as many concurrent users, role-based access, audit trails, integrations with existing systems, security and compliance, and uptime. The software has to fit established processes and hold up under real load.',
  },
  {
    q: 'How is enterprise software different from off-the-shelf business software?',
    a: 'Off-the-shelf enterprise products assume a standard process and ask you to adapt to it. Custom enterprise software is shaped around how your operation actually works, which matters when your process is a competitive edge or when no product covers the specific mix of steps, integrations, and rules you run. The trade-off is that you own and control the system instead of renting it.',
  },
  {
    q: 'How does enterprise software integrate with our existing systems?',
    a: 'Through a deliberate integration layer rather than brittle point-to-point scripts. We connect legacy ERPs, databases, payment and identity providers, and third-party APIs with middleware that handles retries, dead-letter queues, and idempotency, so data stays in sync and failures are visible and recoverable. Our writing on system integration and legacy modernization covers the patterns.',
  },
  {
    q: 'How do you handle security and compliance in enterprise software?',
    a: 'Security is built in from the architecture: role-based access control, audit logging, encryption in transit and at rest, and least-privilege access to data. For regulated verticals we design around the relevant framework, whether that is HIPAA in healthcare or trade rules in customs. Compliance is a design constraint from day one, not a checklist bolted on before launch.',
  },
  {
    q: 'Should we replace our legacy system all at once or gradually?',
    a: 'Gradually, in almost every case. A big-bang rewrite carries the most risk because you cut over everything at once. We usually apply the strangler pattern: build the new system alongside the old one, move functionality across in slices, and retire the legacy pieces as they are replaced, so the business keeps running the whole time.',
  },
];

export default function EnterpriseSoftwareDevelopmentPage() {
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
              items={[{ label: 'Home', href: '/' }, { label: 'Enterprise software development' }]}
            />
            <div className="mt-6">
              <Eyebrow>Enterprise software development</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Enterprise software built for how your operation runs.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Kadmoon builds enterprise software from Austin, Texas: ERPs, CRMs, and operational
                platforms with the integrations, security, and scale a large operation needs. We
                design the modules around your real workflow, spec each one with measurable
                acceptance criteria, and hand you the code and infrastructure on delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Start a project <span aria-hidden>→</span>
                </Button>
                <Button href="/services/enterprise-systems" size="lg" variant="ghost">
                  See enterprise systems
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-8">
          <div className="prose">
            <h2>What enterprise software development involves</h2>
            <p>
              Enterprise software is the set of systems a large organization runs on, and building it
              well means handling the demands around the software as much as the features inside it:
              many concurrent users, role-based access, audit trails, integration with existing
              systems, security and compliance, and uptime. We build{' '}
              <a href="/services/enterprise-systems">enterprise systems</a> as a{' '}
              <a href="/custom-software-development-company">custom software development company</a>,
              so the system fits your process rather than forcing your team to fit a product.
            </p>

            <h2>Integration and legacy modernization</h2>
            <p>
              Most enterprise pain lives in the seams between systems. We build a deliberate{' '}
              <a href="/services/integrations-and-apis">integration layer</a> with retries,
              dead-letter queues, and observability, and we modernize legacy systems incrementally
              with the strangler pattern instead of a risky big-bang rewrite. Our guides on{' '}
              <a href="/blog/legacy-system-integration">legacy system integration</a> and{' '}
              <a href="/blog/microservices-vs-monolith-architecture">microservices versus monolith</a>{' '}
              go into the architecture.
            </p>

            <h2>Why Kadmoon for enterprise software</h2>
            <p>
              Kadmoon runs on a senior in-house team with two-week sprints and a working demo each
              cycle, on a modern stack (React, Next.js, Node.js, Python, PostgreSQL, Kubernetes,
              Terraform). Our flagship practice is{' '}
              <a href="/industries/trade-and-supply-chain">trade and supply chain software</a>, and
              we build across <a href="/industries">ten-plus industries</a>. See the{' '}
              <a href="/cases">systems we have delivered</a>, compare us against a{' '}
              <a href="/software-house">software house</a>, or read the{' '}
              <a href="/blog">blog</a> for practical, data-backed guides.
            </p>
          </div>
        </section>

        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              Enterprise software development: frequently asked questions
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
            Planning an enterprise software project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us about your operation and get a technical proposal within one business day.
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
