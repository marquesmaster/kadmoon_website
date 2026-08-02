import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'IT Staff Augmentation Services | Kadmoon',
  description:
    'Kadmoon provides IT staff augmentation services from a senior in-house team in Austin, TX. Augment your team with software engineers who work in your workflow, with code you own.',
  keywords: [
    'it staff augmentation',
    'staff augmentation services',
    'software staff augmentation',
    'staff augmentation company',
    'augment your team',
  ],
  alternates: { canonical: `${siteConfig.url}/staff-augmentation` },
  openGraph: {
    title: 'Kadmoon: IT staff augmentation services',
    description:
      'Augment your team with senior in-house software engineers. Direct backlog control, two-week sprints, and code you own.',
    url: `${siteConfig.url}/staff-augmentation`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What is IT staff augmentation?',
    a: 'IT staff augmentation is a model where you add outside software engineers to your existing team to fill skill or capacity gaps, while keeping full control of the roadmap and process. The engineers work inside your workflow, attend your standups, and report to your leads, but they are employed and supported by the provider. You scale headcount up or down without the time and cost of permanent hiring.',
  },
  {
    q: 'What is the difference between staff augmentation and a dedicated team?',
    a: 'With staff augmentation you plug individual engineers into your team and you run the project. With a dedicated team you get a self-managed group, usually with its own lead, that owns a workstream end to end. A managed project goes further: the provider takes responsibility for delivering a defined scope for a fixed price. Staff augmentation gives you the most control; a managed project gives you the most offloaded accountability.',
  },
  {
    q: 'What roles can you provide through staff augmentation?',
    a: 'We provide senior software engineers across frontend (React, Next.js), backend (Node.js, Python), mobile, DevOps and platform (Kubernetes, Terraform, cloud), data and AI, and QA. We can also supply technical leads and architects. Every person is a permanent member of our in-house team, not a rotating freelancer sourced per project, so you get consistent quality and continuity.',
  },
  {
    q: 'How fast can augmented engineers start?',
    a: 'Because our engineers are already on staff and work together, onboarding is measured in days rather than the months a permanent hire takes. After a short scoping call to confirm the skills and seniority you need, we match people from the in-house team and get them into your repositories, tools, and standups. Ramp-up is faster still when the work sits near stacks we already run every day.',
  },
  {
    q: 'When does staff augmentation make sense?',
    a: 'Staff augmentation fits when you have a clear roadmap and in-house leadership but need more hands or a specific skill you lack, when you want to move fast on a deadline without permanent headcount, or when you need to test capacity before committing to hires. If you would rather hand off an entire outcome, a dedicated team or a fixed-scope managed project is usually the better fit.',
  },
];

export default function StaffAugmentationPage() {
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
              items={[{ label: 'Home', href: '/' }, { label: 'Staff augmentation' }]}
            />
            <div className="mt-6">
              <Eyebrow>IT staff augmentation services</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Augment your team with senior engineers who work the way you do.
              </h1>
              {/* Answer-first paragraph (quotable for AI search / featured snippets) */}
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                IT staff augmentation is how you add software engineers to your existing team to
                close skill or capacity gaps while you keep control of the roadmap. Kadmoon is a US
                staff augmentation company in Austin, Texas. We embed senior engineers from our
                permanent in-house team directly into your workflow, sprints, and backlog, with no
                rotating freelancers, and you own the code, infrastructure, and documentation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Augment your team <span aria-hidden>→</span>
                </Button>
                <Button href="/solutions" size="lg" variant="ghost">
                  See our solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-8">
          <div className="prose">
            <h2>What software staff augmentation delivers</h2>
            <p>
              Staff augmentation services give you the engineers you need without the overhead of
              permanent hiring. You define the roles and seniority, we supply people from our
              in-house team, and they work inside your process: your repositories, your standups,
              your backlog. You get more delivery capacity and specific skills on demand, and you
              scale the team up or down as the work changes, instead of carrying fixed headcount
              through quiet periods.
            </p>

            <h2>Staff augmentation vs a dedicated team vs a managed project</h2>
            <p>
              These three models trade control for offloaded accountability, and the right one
              depends on how much of the delivery you want to run yourself.
            </p>
            <ul>
              <li>
                <strong>Staff augmentation.</strong> You add individual engineers to your team and
                you manage the work. Most control, most flexibility, and the fastest way to close a
                capacity or skills gap.
              </li>
              <li>
                <strong>Dedicated team.</strong> A self-managed group, often with its own lead, owns
                a whole workstream. You set direction; they organize the day-to-day.
              </li>
              <li>
                <strong>Managed project.</strong> We take responsibility for delivering a defined
                scope with acceptance criteria, so accountability for the outcome sits with us.
              </li>
            </ul>
            <p>
              We break the tradeoffs down further in{' '}
              <a href="/blog/staff-augmentation-vs-managed-team">
                staff augmentation vs a managed team
              </a>
              .
            </p>

            <h2>Roles and skills we provide</h2>
            <p>
              Every engineer is a permanent member of our in-house team on a modern stack, so you
              get consistent quality and continuity rather than whoever was available that month:
            </p>
            <ul>
              <li>
                <strong>Frontend.</strong> React and Next.js engineers for web apps and design
                systems.
              </li>
              <li>
                <strong>Backend.</strong> Node.js and Python engineers for APIs, services, and data
                pipelines.
              </li>
              <li>
                <strong>Platform and DevOps.</strong> Kubernetes, Terraform, and cloud engineers for
                infrastructure and CI/CD.
              </li>
              <li>
                <strong>Data, AI, and QA.</strong> Specialists to build features, models, and test
                coverage, plus technical leads and architects when you need them.
              </li>
            </ul>

            <h2>When it fits and how fast we onboard</h2>
            <p>
              Staff augmentation is the right call when you have a clear roadmap and in-house
              leadership but need more hands or a specific skill, or when you want to move on a
              deadline without adding permanent headcount. Because our engineers already work
              together, onboarding takes days, not the months a permanent hire needs. If you would
              rather hand off a whole outcome, a fixed-scope build from our{' '}
              <a href="/software-house">software house</a> is the better fit. Either way, explore our{' '}
              <a href="/solutions">solutions</a> to see how we can help.
            </p>
          </div>
        </section>

        {/* FAQ (rendered + schema above) */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              IT staff augmentation: frequently asked questions
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
            Ready to augment your team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us the roles and skills you need and get a staffing proposal within one business
            day.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/#contact" size="lg">
              Augment your team <span aria-hidden>→</span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
