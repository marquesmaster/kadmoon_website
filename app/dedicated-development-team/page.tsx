import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Hire a Dedicated Development Team | Kadmoon',
  description:
    'Hire a dedicated development team from Kadmoon: a senior squad of engineers, a designer, and an architect embedded on your roadmap. Two-week sprints, direct backlog control, and code you own.',
  keywords: [
    'dedicated development team',
    'dedicated software development team',
    'dedicated team model',
    'hire a dedicated team',
    'offshore dedicated team',
  ],
  alternates: { canonical: `${siteConfig.url}/dedicated-development-team` },
  openGraph: {
    title: 'Kadmoon: hire a dedicated development team',
    description:
      'A senior dedicated software development team embedded on your roadmap. Engineers, designer, and architect working two-week sprints under your backlog control.',
    url: `${siteConfig.url}/dedicated-development-team`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What is a dedicated development team?',
    a: 'A dedicated development team is a fixed squad of senior engineers, a designer, and an architect who work only on your roadmap for the length of the engagement. Unlike a fixed-scope project, the team is not tied to a single deliverable; you set priorities through your backlog and they build against them sprint after sprint. The dedicated team model gives you the continuity of an in-house group without hiring, onboarding, and carrying the fixed headcount yourself.',
  },
  {
    q: 'What do you get with a dedicated software development team?',
    a: 'You get a stable, named squad rather than rotating contractors: senior engineers who write the code, a product designer, and an architect who owns technical direction. Everyone is on our permanent in-house team, works your backlog in two-week sprints, and hands you the Git repository, CI/CD pipelines, and credentials as you go. You own the code and the roadmap; we supply the people and the delivery discipline.',
  },
  {
    q: 'How does the dedicated team model work?',
    a: 'The team plans and ships in two-week sprints. You control the backlog and priorities directly, we run planning, a working demo at the end of each sprint, and a retro. Because the same people stay on your product, context compounds instead of resetting, and velocity becomes something you can measure. You can grow or shrink the team as the roadmap changes, with notice rather than a rehire.',
  },
  {
    q: 'Dedicated team vs staff augmentation: what is the difference?',
    a: 'Staff augmentation adds individual engineers into your existing team and management, so you own planning, code review, and delivery. A dedicated development team comes as a self-managed unit with its own architect and cadence, so you steer with the backlog while we run the delivery. Choose staff augmentation when you have strong in-house leadership and just need hands; choose a dedicated team when you want an outcome-owning squad. Our guide to staff augmentation covers the hands-on model in detail.',
  },
  {
    q: 'When does a dedicated team beat a fixed-price project?',
    a: 'A fixed-price project fits a well-defined, unchanging scope with a clear finish line. A dedicated team fits evolving products where priorities shift, the roadmap is ongoing, and you value speed of change over a locked contract. If you cannot fully specify the work up front, or you expect to keep building after launch, the dedicated team model usually costs less in rework and lost time. Our post on dedicated team vs fixed project cost breaks down the numbers.',
  },
];

export default function DedicatedDevelopmentTeamPage() {
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
              items={[{ label: 'Home', href: '/' }, { label: 'Dedicated development team' }]}
            />
            <div className="mt-6">
              <Eyebrow>Dedicated development team</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Hire a dedicated development team embedded on your roadmap.
              </h1>
              {/* Answer-first paragraph (quotable for AI search / featured snippets) */}
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                A dedicated development team is a fixed squad of senior engineers, a designer, and an
                architect who work only on your product for the length of the engagement. Kadmoon
                gives you that squad from our permanent in-house team in Austin, Texas: they build
                against your backlog in two-week sprints, you keep direct control of priorities, and
                you own the code, infrastructure, and documentation as it ships.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Hire a dedicated team <span aria-hidden>→</span>
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
            <h2>What you get in a dedicated software development team</h2>
            <p>
              A dedicated software development team is a stable, named squad rather than a pool of
              rotating contractors. You get senior engineers who write the code, a product designer,
              and an architect who owns technical direction and keeps the system coherent as it
              grows. Everyone is on our permanent in-house team, so context stays with the people
              instead of leaving when a contract ends. You receive the Git repository, CI/CD
              pipelines, credentials, and documentation as work ships, with no lock-in.
            </p>

            <h2>How the dedicated team model works</h2>
            <p>
              The team plans and delivers in two-week sprints. You keep direct control of the
              backlog and priorities; we run sprint planning, a working demo at the end of each
              cycle, and a retrospective. Because the same squad stays on your product, velocity
              becomes measurable and improves as understanding compounds. You can scale the team up
              or down as the roadmap changes, with notice rather than a fresh hiring round every
              time the plan shifts.
            </p>

            <h2>Dedicated team vs staff augmentation vs fixed project</h2>
            <p>
              These three models solve different problems, and the right one depends on how defined
              your scope is and how much delivery you want to run yourself:
            </p>
            <ul>
              <li>
                <strong>Dedicated team.</strong> A self-managed squad with its own architect and
                cadence. You steer with the backlog, we own delivery. Best for evolving products
                and ongoing roadmaps.
              </li>
              <li>
                <strong>
                  <a href="/staff-augmentation">Staff augmentation</a>.
                </strong>{' '}
                Individual senior engineers who plug into your existing team and management. Best
                when you have strong in-house leadership and just need more hands.
              </li>
              <li>
                <strong>Fixed project.</strong> A locked scope with a clear finish line and price.
                Best when the work is fully specified up front and unlikely to change. Our post on{' '}
                <a href="/blog/dedicated-team-vs-fixed-project-cost">
                  dedicated team vs fixed project cost
                </a>{' '}
                breaks down the trade-off.
              </li>
            </ul>

            <h2>When a dedicated team fits</h2>
            <p>
              A dedicated team is the right call when your product keeps evolving, when priorities
              shift faster than a fixed contract can absorb, or when you want the continuity of an
              in-house group without carrying the headcount. It also fits teams looking for an
              offshore dedicated team alternative that trades time-zone gaps and turnover for a
              senior US-based squad you can plan around. Compare us against a{' '}
              <a href="/software-house">software house</a>, explore the{' '}
              <a href="/services">capabilities</a> we deliver, or read the <a href="/blog">blog</a>{' '}
              for practical, data-backed guides.
            </p>
          </div>
        </section>

        {/* FAQ (rendered + schema above) */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              Dedicated development team: frequently asked questions
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
            Ready to hire a dedicated development team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us about your roadmap and get a technical proposal within one business day.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/#contact" size="lg">
              Hire a dedicated team <span aria-hidden>→</span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
