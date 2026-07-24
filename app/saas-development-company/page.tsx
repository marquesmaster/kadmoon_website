import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'SaaS Development Company in the US | Kadmoon',
  description:
    'Kadmoon is a US SaaS development company in Austin, TX. We build multi-tenant SaaS platforms with billing, auth, analytics, and public APIs, on a senior in-house team, with code you own.',
  keywords: [
    'saas development company',
    'saas development company usa',
    'saas application development company',
    'multi-tenant saas development',
    'b2b saas development',
    'saas development services',
  ],
  alternates: { canonical: `${siteConfig.url}/saas-development-company` },
  openGraph: {
    title: 'Kadmoon: a US SaaS development company',
    description:
      'A US SaaS development company building multi-tenant platforms you own. Billing, auth, analytics, and APIs, delivered by a senior in-house team.',
    url: `${siteConfig.url}/saas-development-company`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What does a SaaS development company do?',
    a: 'A SaaS development company builds multi-tenant software delivered over the web, where many customers share one secure codebase and their data stays isolated. Beyond the core features, that means designing tenancy, authentication, billing and subscriptions, role-based access, analytics, and public APIs so the product can onboard customers and scale. Kadmoon builds each of these as a system you own, not a template you rent.',
  },
  {
    q: 'How much does it cost to build a SaaS product?',
    a: 'A focused first version of a B2B SaaS with core workflows, auth, and billing typically starts in the low-to-mid six figures, depending on how many features and integrations ship at launch. Cost scales with tenancy model, compliance needs, and how much of the platform you build before your first paying customers. A fixed scope with acceptance criteria keeps the price mapped to verifiable deliverables.',
  },
  {
    q: 'What is multi-tenant SaaS architecture?',
    a: 'Multi-tenant architecture serves many customers from one application while keeping each tenant\'s data logically or physically separated. It lowers cost per customer and makes updates ship to everyone at once, but it demands careful design of data isolation, per-tenant configuration, and noisy-neighbor limits. The tenancy model you pick early shapes security, scaling, and pricing for the life of the product.',
  },
  {
    q: 'Should I build an MVP or a full SaaS platform first?',
    a: 'Start with a focused MVP that proves the core workflow with real users, then expand in phases. Building the full platform before validation is the most common way SaaS budgets get spent on features nobody uses. A good development partner ships a usable version early and grows it based on how customers actually behave.',
  },
  {
    q: 'Do I own the SaaS platform and its code?',
    a: 'You should. With Kadmoon you receive the Git repository, CI/CD pipelines, infrastructure, and credentials on delivery, with no lock-in. Confirm IP ownership and handover terms in the contract before work begins, since some vendors keep the code or license it back to you.',
  },
];

export default function SaasDevelopmentCompanyPage() {
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
              items={[{ label: 'Home', href: '/' }, { label: 'SaaS development company' }]}
            />
            <div className="mt-6">
              <Eyebrow>SaaS development company</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                A US SaaS development company that ships platforms you own.
              </h1>
              {/* Answer-first paragraph (quotable for AI search / featured snippets) */}
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Kadmoon is a SaaS development company based in Austin, Texas. We build multi-tenant
                SaaS platforms with the parts that actually make them work: tenancy, authentication,
                billing and subscriptions, role-based access, analytics, and public APIs. Every
                engineer is on our permanent in-house team, every feature ships with measurable
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
            <h2>What a SaaS development company builds</h2>
            <p>
              A SaaS development company builds multi-tenant software delivered over the web, where
              many customers share one secure codebase while their data stays isolated. The work goes
              well beyond features: tenancy and data isolation, authentication and role-based access,
              billing and subscriptions, usage analytics, admin tooling, and public APIs. The output
              is a platform that can onboard customers, meter usage, and scale, and one you own.
            </p>

            <h2>The parts that make or break a SaaS product</h2>
            <ul>
              <li>
                <strong>Tenancy model.</strong> How you isolate customer data shapes security,
                scaling, and pricing for the life of the product. Decide it early.
              </li>
              <li>
                <strong>Billing and subscriptions.</strong> Plans, trials, proration, and dunning are
                where SaaS revenue leaks if they are bolted on late.
              </li>
              <li>
                <strong>Auth and permissions.</strong> Role-based access, SSO, and audit logs are
                table stakes for selling to businesses.
              </li>
              <li>
                <strong>Analytics and APIs.</strong> Customers expect to see their usage and to
                integrate with their own stack.
              </li>
            </ul>
            <p>
              We cover the details in our guides to{' '}
              <a href="/blog/multi-tenant-saas-architecture">multi-tenant SaaS architecture</a>,{' '}
              <a href="/blog/saas-billing-and-subscription-systems">SaaS billing and subscriptions</a>,
              and <a href="/blog/how-to-build-a-saas-application">how to build a SaaS application</a>.
            </p>

            <h2>Start with an MVP, then scale</h2>
            <p>
              The most common way SaaS budgets get wasted is building the full platform before real
              users validate the core workflow. We ship a focused MVP that proves the workflow with
              real customers, then expand in phases based on how people actually behave. See our take
              on <a href="/blog/b2b-saas-mvp-development">B2B SaaS MVP development</a> and{' '}
              <a href="/blog/how-to-scale-a-saas-platform">scaling a SaaS platform</a>.
            </p>

            <h2>Why Kadmoon</h2>
            <p>
              Kadmoon runs on a senior in-house team with two-week sprints and a working demo each
              cycle, on a modern stack (React, Next.js, Node.js, Python, PostgreSQL, Kubernetes,
              Terraform). We are a <a href="/software-house">software house</a> and{' '}
              <a href="/custom-software-development-company">custom software development company</a>{' '}
              that builds across <a href="/industries">ten-plus industries</a>. Explore the{' '}
              <a href="/services">capabilities</a> we deliver, see the{' '}
              <a href="/cases">systems we have delivered</a>, or read the{' '}
              <a href="/blog">blog</a> for practical, data-backed guides.
            </p>
          </div>
        </section>

        {/* FAQ (rendered + schema above) */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              SaaS development: frequently asked questions
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
            Looking for a SaaS development company?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us about your product and get a technical proposal within one business day.
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
