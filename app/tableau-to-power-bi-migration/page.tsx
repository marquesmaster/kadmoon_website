import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Eyebrow } from '@/components/Eyebrow';
import { Button } from '@/components/Button';
import { siteConfig } from '@/lib/site';

const route = '/tableau-to-power-bi-migration';
const title = 'Tableau to Power BI migration';
const description =
  'A Tableau to Power BI migration moves your workbooks, calculated fields, and data sources onto a governed Power BI semantic model in your own Microsoft tenant, with parity validation at every wave and no reporting blackout.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'tableau to power bi migration',
    'migrate tableau to power bi',
    'tableau to power bi',
    'tableau vs power bi migration',
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
    q: 'What is a Tableau to Power BI migration?',
    a: 'It is the move of your reporting from Tableau to Power BI: workbooks and dashboards are rebuilt as Power BI reports, Tableau calculated fields are re-expressed as DAX measures, and your data sources are repointed onto a governed Power BI semantic model in your own Microsoft tenant. Done well it is a rebuild on a single, trusted definition of each KPI rather than a pixel-for-pixel copy of every Tableau sheet.',
  },
  {
    q: 'Why do teams migrate from Tableau to Power BI?',
    a: 'The common drivers are cost per user, ecosystem fit, and Fabric. Power BI licensing is typically lower per seat and often already bundled with Microsoft 365, so consolidating tools removes a separate Tableau contract. Teams that live in Excel, Teams, and Azure get tighter integration, and Microsoft Fabric brings the lakehouse, pipelines, and semantic model under one governed platform.',
  },
  {
    q: 'What carries over, and what has to be rebuilt?',
    a: 'Your data sources, business logic, and the intent of each dashboard carry over. What does not transfer automatically: Tableau workbooks (.twb/.twbx) have no import path into Power BI, so reports are rebuilt; calculated fields and LOD expressions are re-authored as DAX; and Tableau row-level security is re-implemented as RLS roles on the Power BI model. We treat these as an opportunity to consolidate duplicate metrics into one definition.',
  },
  {
    q: 'How do you avoid a reporting blackout during the migration?',
    a: 'We run a phased, wave-by-wave cutover. Tableau stays live while we rebuild and validate each wave of reports against it for parity, then switch users over one wave at a time. Nobody loses access to a number they rely on mid-migration, and each wave is signed off before the next begins.',
  },
  {
    q: 'Can this be done as a fixed engagement?',
    a: 'Yes. Once the inventory and dependency map are complete we can scope the rebuild as a fixed engagement, and a fixed 8-week migration is a common shape for a focused portfolio. The exact timeline depends on the number of workbooks, the complexity of the calculations, and the state of the underlying data sources, so we confirm it after the inventory rather than promising it upfront.',
  },
];

export default function TableauToPowerBiPage() {
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
              items={[{ label: 'Home', href: '/' }, { label: 'Tableau to Power BI migration' }]}
            />
            <div className="mt-6 max-w-3xl">
              <Eyebrow>Migration</Eyebrow>
              <h1 className="mt-4 font-display text-display-lg text-ink">
                Tableau to Power BI migration.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                A Tableau to Power BI migration moves your workbooks, calculated fields, and data
                sources onto a governed{' '}
                <a href="/services/power-bi" className="text-accent underline-offset-4 hover:underline">
                  Power BI
                </a>{' '}
                semantic model in your own Microsoft tenant. We rebuild on one definition per KPI,
                validate parity wave by wave, and cut over without a reporting blackout.
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

        {/* Body */}
        <section className="mx-auto max-w-3xl px-6 py-8 md:py-12">
          <div className="prose">
            <h2>Why teams move from Tableau to Power BI</h2>
            <p>
              The move is rarely about one tool being better in the abstract. It is usually about
              three concrete pressures. The first is cost per user: Power BI seats are typically
              lower per head, and many organizations already pay for them inside Microsoft 365, so a
              consolidation retires a standalone Tableau contract. The second is ecosystem fit. If
              your teams already work in Excel, Teams, SharePoint, and Azure, Power BI drops into the
              tools people use every day instead of sitting beside them.
            </p>
            <p>
              The third is{' '}
              <a href="/services/microsoft-fabric">Microsoft Fabric</a>. Fabric puts the lakehouse,
              data pipelines, and the semantic model under one governed platform, so the report layer
              and the{' '}
              <a href="/services/data-engineering">data engineering</a> layer stop being two separate
              worlds. When a Tableau vs Power BI migration is really a bet on a single Microsoft data
              platform, Fabric is usually the reason the decision holds up over the next few years.
            </p>

            <h2>What carries over, and what does not</h2>
            <p>
              The honest answer is that intent and data carry over, and surface artifacts get
              rebuilt. There is no import button that turns a Tableau workbook into a Power BI report,
              so anyone promising a one-click migration is glossing over the actual work. Here is how
              each piece maps:
            </p>
            <ul>
              <li>
                <strong>Workbooks and dashboards</strong> (.twb / .twbx) are rebuilt as Power BI
                reports. This is deliberate: it is the moment to drop dead sheets and consolidate
                near-duplicate views rather than carry clutter across.
              </li>
              <li>
                <strong>Calculated fields and LOD expressions</strong> are re-authored as DAX
                measures on the shared model. Tableau logic that lived inside a single worksheet
                becomes a reusable measure every report can trust.
              </li>
              <li>
                <strong>Data sources</strong> are repointed onto a governed semantic model instead of
                each workbook connecting on its own. One model, one refresh, one set of relationships.
              </li>
              <li>
                <strong>Row-level security</strong> is re-implemented as RLS roles on the Power BI
                model, mapped to your Entra ID groups, so the same person sees the same slice they saw
                in Tableau.
              </li>
            </ul>

            <h2>How we run the migration</h2>
            <p>
              We do not copy Tableau one sheet at a time. We rebuild on a governed foundation so the
              output is cleaner than what you are leaving. The method is the same every time:
            </p>
            <ul>
              <li>
                <strong>Full inventory.</strong> We catalog every workbook, dashboard, sheet, and
                data source, including who actually uses each one. Low-value and abandoned reports are
                flagged before anyone spends effort rebuilding them.
              </li>
              <li>
                <strong>Dependency mapping.</strong> We trace each report back through its
                calculations to its source tables, so we know what a change touches and what shares
                logic. This is where duplicate KPI definitions surface.
              </li>
              <li>
                <strong>Rebuild on a governed semantic model.</strong> We author one definition per
                KPI in a single Power BI semantic model, so every report reads the same number instead
                of each workbook redefining revenue its own way.
              </li>
              <li>
                <strong>Phased, wave-by-wave cutover.</strong> We migrate in waves and validate parity
                against Tableau at each step. Tableau stays live until a wave is signed off, so there
                is no information blackout.
              </li>
              <li>
                <strong>Built in your own tenant.</strong> Everything is built inside your Microsoft
                tenant, on your data and your governance, so there is nothing to hand back at the end.
              </li>
            </ul>
            <p>
              Once the inventory and dependency map are done, a focused portfolio often scopes into a
              fixed 8-week migration engagement. We confirm the timeline after we can see the real
              shape of the work, not before.
            </p>

            <h2>Risks we handle up front</h2>
            <p>
              Most migrations fail on the same predictable risks, so we design for them from the
              start. Parity drift is caught by validating each wave against the live Tableau report
              rather than trusting a rebuild by eye. Metric sprawl, where the same KPI has three
              slightly different Tableau definitions, is resolved at the model layer before anyone
              argues about which number is right. Access and security gaps are covered by porting RLS
              into governed roles rather than leaving them for later. And the blackout risk that scares
              stakeholders is removed by keeping Tableau running through the cutover.
            </p>
            <p>
              If your move also involves consolidating tenants or Microsoft 365 environments, we run
              that alongside as a{' '}
              <a href="/services/tenant-to-tenant-migration">tenant-to-tenant migration</a>. And if
              you want to see the kind of reporting this produces, look at our{' '}
              <a href="/dashboards">dashboards</a> and{' '}
              <a href="/cases">case studies</a>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-display-sm text-ink">
              Tableau to Power BI migration: common questions
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
            Ready to move off Tableau?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">
            Send us your Tableau footprint and we will come back with an inventory-based plan and an
            investment range within a few business days. No blackout, no lift-and-shift, built in your
            own tenant.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/#contact" size="lg">
              Talk to an expert <span aria-hidden>→</span>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
