import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

const title = 'Qlik to Power BI Migration';
const description =
  'We move QlikView and Qlik Sense reporting to Power BI: load scripts translated to Power Query, set analysis rebuilt in DAX, section access mapped to row-level security, validated wave by wave in your own Microsoft tenant.';

const route = '/qlik-to-power-bi-migration';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'qlik to power bi migration',
    'qlikview to power bi',
    'qlik sense to power bi migration',
    'migrate qlik to power bi',
  ],
  alternates: { canonical: `${siteConfig.url}${route}` },
  openGraph: {
    title: `${title} | Kadmoon`,
    description,
    url: `${siteConfig.url}${route}`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What does a Qlik to Power BI migration actually involve?',
    a: 'A Qlik to Power BI migration rebuilds your QlikView or Qlik Sense reporting on the Microsoft stack: Qlik load scripts become Power Query and a governed semantic model, set analysis expressions become DAX measures, and section access becomes row-level security. We do not screenshot old apps and repaint them. We inventory what exists, map dependencies, rebuild each report on one trusted definition per KPI, and cut over wave by wave with parity checks so numbers match before anyone loses their old view.',
  },
  {
    q: 'How do you translate set analysis and load scripts?',
    a: 'Qlik set analysis modifiers map cleanly onto DAX filter context using CALCULATE, ALLEXCEPT, and time intelligence functions, so year to date, prior period, and flag based selections carry over as reusable measures. Qlik load scripts, including QVD generation, resident loads, joins, and mapping loads, are re-expressed as Power Query transformations or, where volume warrants it, pushed upstream into the data warehouse and Microsoft Fabric. We document each translation so the logic is auditable rather than buried in an app.',
  },
  {
    q: 'What happens to Qlik section access and data reduction?',
    a: 'Qlik section access and dynamic data reduction become row-level security roles in the Power BI semantic model, driven by the same user or group to territory mapping. Where Qlik reduced data by binding the logged in user to values in the script, we implement the equivalent with RLS filters and, for tenant scale governance, Microsoft Entra groups. Every role is tested with view-as checks so each user sees exactly the rows they saw in Qlik and nothing more.',
  },
  {
    q: 'Will reporting go dark during the switch?',
    a: 'No. We run a phased, wave-by-wave cutover with no information blackout. Qlik stays live while each wave of reports is rebuilt and validated in parallel, and a report is only retired once its Power BI replacement passes parity validation. That keeps the business reporting continuously through the whole engagement.',
  },
  {
    q: 'How long does a Qlik to Power BI migration take?',
    a: 'It depends on the number of apps, the complexity of the scripts, and how many KPIs need reconciling to one definition. Small estates can run as a fixed eight-week migration engagement; larger Qlik environments are scoped into waves so value lands early and often. After a short inventory we give you a wave plan with a realistic range rather than a single optimistic date.',
  },
];

export default function QlikToPowerBiPage() {
  const faqJsonLd = {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Hero */}
        <section className="relative overflow-hidden pb-14 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
          <div className="relative mx-auto max-w-shell px-6">
            <Breadcrumbs
              items={[{ label: 'Home', href: '/' }, { label: 'Qlik to Power BI Migration' }]}
            />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>Migration</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Qlik to Power BI migration, done properly.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-2">
                A Qlik to Power BI migration moves your QlikView or Qlik Sense reporting onto the
                Microsoft stack: load scripts become Power Query, set analysis becomes DAX, and
                section access becomes row-level security. We rebuild on a governed semantic model,
                validate every KPI against the old numbers, and cut over wave by wave with no
                reporting blackout, all inside your own Microsoft tenant.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Talk to an expert <span aria-hidden>→</span>
                </Button>
                <Button href="/dashboards" size="lg" variant="ghost">
                  See dashboards
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Prose body */}
        <section className="mx-auto max-w-3xl px-6 pb-4">
          <div className="prose">
            <h2>Why teams move from Qlik to Power BI</h2>
            <p>
              Most teams do not leave Qlik because it stopped working. They leave because reporting
              logic has drifted into dozens of QlikView documents and Qlik Sense apps that only a
              couple of people fully understand, licensing and infrastructure costs keep climbing,
              and the rest of the business already lives in Microsoft 365. Moving to{' '}
              <a href="/services/power-bi">Power BI</a> puts analytics next to Teams, Excel, and
              Entra identity, and opens the door to <a href="/services/microsoft-fabric">Microsoft Fabric</a>{' '}
              for the heavier data engineering. The goal is not a different tool for its own sake. It
              is one governed definition of each number that the whole organization can trust.
            </p>
            <p>
              A one-for-one copy of every Qlik app would just recreate that sprawl in a new place.
              So we treat the move as a chance to consolidate: fewer, cleaner models, KPIs defined
              once, and a semantic layer the business can extend without calling a specialist every
              time.
            </p>

            <h2>Translating Qlik logic to Power Query and DAX</h2>
            <p>
              The real work of a Qlik to Power BI migration is in the logic, not the visuals.
              QlikView and Qlik Sense concentrate transformation in the load script and calculation
              in set analysis, and both have direct homes on the Microsoft side:
            </p>
            <ul>
              <li>
                <strong>Load scripts to Power Query and the warehouse.</strong> QVD generation,
                resident loads, joins, concatenation, and mapping loads are re-expressed as Power
                Query steps or pushed upstream into a warehouse or{' '}
                <a href="/services/microsoft-fabric">Fabric</a> lakehouse when data volume calls for
                it. Our <a href="/services/data-engineering">data engineering</a> team handles the
                heavier pipelines so the model stays lean.
              </li>
              <li>
                <strong>Set analysis to DAX.</strong> Set analysis modifiers become filter context
                in DAX, expressed with CALCULATE, ALLEXCEPT, and native time intelligence. Year to
                date, prior period, moving averages, and flag based selections become reusable
                measures rather than expressions pasted into every chart.
              </li>
              <li>
                <strong>The Qlik associative model to a star schema.</strong> Qlik&rsquo;s
                associative engine is forgiving about model shape; Power BI and VertiPaq reward a
                clean star schema. We reshape tables into facts and dimensions so relationships,
                performance, and RLS all behave predictably.
              </li>
            </ul>
            <p>
              Every translation is documented, so the logic is auditable and lives in the model
              rather than in one engineer&rsquo;s head.
            </p>

            <h2>Section access to row-level security</h2>
            <p>
              Qlik section access and dynamic data reduction control who sees which rows. In Power
              BI that responsibility moves to row-level security in the semantic model. We take the
              same user or group to territory mapping Qlik used and rebuild it as RLS roles, driven
              by Microsoft Entra groups for tenant scale governance. Each role is verified with
              view-as testing so a regional manager, a plant lead, or an external partner sees
              exactly the rows they saw before, and nothing extra. Getting this right is what makes
              the migration safe to trust, not just visually similar.
            </p>

            <h2>Our method: inventory, rebuild, phased cutover</h2>
            <p>
              We follow the same disciplined path we use for{' '}
              <a href="/services/tenant-to-tenant-migration">tenant-to-tenant migrations</a>, adapted
              to Qlik:
            </p>
            <ul>
              <li>
                <strong>Full inventory.</strong> We catalog every QlikView document and Qlik Sense
                app, its data sources, its load scripts, and its real usage, so decisions are based
                on what people actually run.
              </li>
              <li>
                <strong>Dependency mapping.</strong> We map how apps, QVDs, and sources feed each
                other, so nothing gets rebuilt before the things it depends on.
              </li>
              <li>
                <strong>Rebuild on a governed model.</strong> We rebuild on a governed Power BI
                semantic model with one definition per KPI, rather than copying each app one for
                one. Duplicated and contradictory metrics get reconciled here.
              </li>
              <li>
                <strong>Phased, wave-by-wave cutover.</strong> Reports move in waves. Qlik stays live
                while each wave is rebuilt and validated in parallel, so there is no information
                blackout.
              </li>
              <li>
                <strong>Parity validation at each step.</strong> Before a Qlik report is retired, its
                Power BI replacement is reconciled cell by cell against the original numbers. A wave
                is only signed off once it matches.
              </li>
              <li>
                <strong>Built in your own tenant.</strong> Everything is delivered inside your own
                Microsoft tenant, on your Entra identities and your governance, so you own the result
                outright.
              </li>
            </ul>

            <h2>Risks we handle</h2>
            <p>
              The failures we see in Qlik migrations are predictable, so we plan for them from day
              one:
            </p>
            <ul>
              <li>
                <strong>Numbers that stop matching.</strong> Silent logic differences are caught by
                parity validation on every wave, not discovered by an executive in a meeting.
              </li>
              <li>
                <strong>Metric sprawl carried over.</strong> Consolidating to one KPI definition
                stops the old contradictions from following you into Power BI.
              </li>
              <li>
                <strong>Security gaps.</strong> View-as testing on every RLS role prevents section
                access rules from being lost or loosened in translation.
              </li>
              <li>
                <strong>Undocumented logic.</strong> Scripts and set analysis that only one person
                understood are re-expressed and documented so the knowledge stays with the business.
              </li>
              <li>
                <strong>Big-bang risk.</strong> The phased cutover means there is never a single day
                the whole business depends on the switch going perfectly.
              </li>
            </ul>
            <p>
              Small estates often run as a fixed eight-week migration engagement; larger Qlik
              environments are scoped into waves so value lands early. See{' '}
              <a href="/cases">how this plays out on real work</a> or browse the{' '}
              <a href="/dashboards">dashboards we build</a>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              Qlik to Power BI migration: common questions
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

        {/* Closing CTA */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-display text-display-sm text-ink">
            Ready to move off Qlik without losing a number?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Send us your Qlik estate and get an inventory, a wave plan, and an investment range
            within a few business days. Everything built and validated in your own tenant.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/#contact" size="lg">
              Talk to an expert <span aria-hidden>→</span>
            </Button>
            <Button href="/dashboards" size="lg" variant="ghost">
              See dashboards
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
