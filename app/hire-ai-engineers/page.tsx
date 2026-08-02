import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Hire AI Engineers | AI Development Team | Kadmoon',
  description:
    'Hire AI engineers from Kadmoon, a US software house in Austin, TX. A senior in-house AI development team that builds LLM and RAG features, ML models, and data pipelines you own.',
  keywords: [
    'hire ai engineers',
    'hire ai developers',
    'ai development team',
    'ai engineers for hire',
    'llm engineers',
  ],
  alternates: { canonical: `${siteConfig.url}/hire-ai-engineers` },
  openGraph: {
    title: 'Hire AI engineers: a senior in-house AI development team',
    description:
      'Hire AI engineers who build LLM and RAG features, ML models, and data pipelines engineered into your architecture, not bolted on. Senior in-house team, code you own.',
    url: `${siteConfig.url}/hire-ai-engineers`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What do AI engineers do?',
    a: 'AI engineers build software that uses machine learning and large language models to do work that plain code cannot, then integrate it into a real production system. That covers LLM and RAG features that answer questions over your own data, ML models for forecasting and classification, anomaly detection, and the data pipelines that feed all of it. A good AI engineer is a software engineer first, so the model ships behind clean APIs, tests, and monitoring rather than living in a notebook.',
  },
  {
    q: 'How do I hire AI engineers or an AI development team?',
    a: 'You can hire individual AI developers to add to your team, or engage a full in-house AI development team that owns a piece of work end to end. With Kadmoon you get a senior team that handles discovery, model selection, data pipelines, evaluation, and deployment, with a working demo every two weeks. Confirm who writes the code, ask to see how they evaluate model quality, and require that you receive the repository, models, and infrastructure on delivery.',
  },
  {
    q: 'How do you vet AI engineers?',
    a: 'Look past the model names on a resume and check the engineering underneath. Strong AI engineers can explain how they measure output quality (evaluation sets, not vibes), how they handle hallucination and edge cases, how they keep costs and latency in check, and how the model gets retrained or updated after launch. Ask them to walk through a real system they built end to end. If someone can only talk about calling an API and cannot talk about data, evaluation, and production behavior, that is a warning sign.',
  },
  {
    q: 'What is the difference between AI engineers and data scientists?',
    a: 'Data scientists focus on analysis and building models to answer a question. AI engineers focus on shipping those models as reliable software: APIs, pipelines, evaluation, monitoring, and cost control in production. The two overlap, and on smaller teams one person may do both, but if your goal is a working AI feature in your product, an AI engineer is who takes it the last mile.',
  },
  {
    q: 'When should a company hire AI engineers?',
    a: 'Hire AI engineers when you have a concrete problem where a model earns its keep: search and support over your own documents, forecasting demand, classifying or routing incoming work, or catching anomalies in real time. It fits best when you already have data and a clear metric to improve. If the goal is vague or the data is not there yet, start with a short discovery engagement before committing a full team.',
  },
];

export default function HireAiEngineersPage() {
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
              items={[{ label: 'Home', href: '/' }, { label: 'Hire AI engineers' }]}
            />
            <div className="mt-6">
              <Eyebrow>Hire AI engineers</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Hire AI engineers who ship models into production.
              </h1>
              {/* Answer-first paragraph (quotable for AI search / featured snippets) */}
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Kadmoon is a US software house in Austin, Texas, and our AI engineers for hire build
                real AI features: LLM and RAG systems over your own data, ML models for forecasting
                and classification, anomaly detection, and the data pipelines behind them. Every
                engineer is on our permanent in-house team, we engineer AI into the architecture
                rather than bolting it on, and you own the code, models, and infrastructure on
                delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Hire AI engineers <span aria-hidden>→</span>
                </Button>
                <Button href="/services/data-and-ai" size="lg" variant="ghost">
                  See our data and AI work
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-8">
          <div className="prose">
            <h2>What our AI engineers build</h2>
            <p>
              An AI development team is only useful when the model ends up in production doing real
              work. Our AI engineers and{' '}
              <a href="/services/data-and-ai">data and AI</a> practice build the full range:
            </p>
            <ul>
              <li>
                <strong>LLM and RAG features.</strong> Assistants, search, and support that answer
                from your own documents and data, with retrieval, guardrails, and evaluation so the
                output stays grounded.
              </li>
              <li>
                <strong>ML models for forecasting and classification.</strong> Demand and revenue
                forecasting, lead and ticket routing, scoring, and other models tied to a metric you
                already track.
              </li>
              <li>
                <strong>Anomaly detection.</strong> Catching fraud, outages, and outliers in real
                time so problems surface before they cost you.
              </li>
              <li>
                <strong>Data pipelines.</strong> The ingestion, cleaning, and feature work that feed
                every model, built to run reliably, not once in a notebook.
              </li>
            </ul>

            <h2>AI engineered into the architecture, not bolted on</h2>
            <p>
              A lot of AI work fails because a model gets stapled onto a system as an afterthought,
              with no evaluation, no cost control, and no plan for when it drifts. We engineer AI
              into the architecture from day one: clean APIs around each model, evaluation sets that
              measure quality, monitoring for latency and cost, and a path to retrain or swap models
              as your data changes. That is the difference between an AI demo and an AI feature you
              can run.
            </p>

            <h2>How to hire and vet AI engineers</h2>
            <p>
              After building AI across production systems, these are the criteria we would use to
              judge any AI development team, including ours:
            </p>
            <ul>
              <li>
                <strong>Software first.</strong> AI engineers who can also ship, test, and deploy
                software, not just call a model API.
              </li>
              <li>
                <strong>Evaluation, not vibes.</strong> A concrete way to measure output quality and
                catch regressions before they reach users.
              </li>
              <li>
                <strong>Data and cost sense.</strong> A grip on the data behind the model and on
                latency and token cost in production.
              </li>
              <li>
                <strong>Ownership.</strong> You receive the repository, models, pipelines, and
                infrastructure on delivery. No lock-in.
              </li>
              <li>
                <strong>Cadence.</strong> A working demo every two weeks and direct control of the
                backlog, not a black box.
              </li>
            </ul>

            <h2>Engagement options and when it fits</h2>
            <p>
              You can add individual AI developers to an existing team, or engage a full in-house AI
              development team that owns the work end to end. It fits best when you have a concrete
              problem and data to match: search over your documents, forecasting, classification, or
              anomaly detection. Browse the{' '}
              <a href="/solutions">solutions</a> we deliver, compare us against a{' '}
              <a href="/software-house">software house</a>, or read more about our{' '}
              <a href="/services/data-and-ai">data and AI engineering</a>. If the goal is still
              taking shape, we start with a short discovery engagement before committing a team.
            </p>
          </div>
        </section>

        {/* FAQ (rendered + schema above) */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              Hiring AI engineers: frequently asked questions
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
            Ready to hire AI engineers?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Tell us about your project and get a technical proposal within one business day.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/#contact" size="lg">
              Hire AI engineers <span aria-hidden>→</span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
