import { Eyebrow } from '../Eyebrow';

const guarantees = [
  {
    t: 'Working dashboards by week two',
    d: 'You see and validate real value early, not after months with nothing to show.',
  },
  {
    t: 'Fixed scope, agreed upfront',
    d: 'You know what ships, when, and what it costs before we start. No hourly surprises.',
  },
  {
    t: 'One definition per KPI',
    d: 'A governed semantic layer so revenue, margin, and churn mean one thing everywhere.',
  },
  {
    t: 'Built in your tenant, you own it',
    d: 'Your data, workspaces, and reports stay yours. No lock-in, no dependency on us.',
  },
  {
    t: 'Senior, Microsoft-certified team',
    d: 'The people who scope your project are the ones who build it. No juniors on your budget.',
  },
  {
    t: 'Governed from day one',
    d: 'Row-level security, Purview, and DLP ship with the build, not as cleanup after an audit.',
  },
];

export function Guarantees() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{ backgroundImage: 'radial-gradient(900px 480px at 15% 110%, rgba(255,106,26,.16), transparent 60%)' }}
      />
      <div className="relative mx-auto max-w-shell px-6">
        <div className="max-w-2xl">
          <Eyebrow onDark>Our commitments</Eyebrow>
          <h2 className="mt-4 font-display text-display-sm font-semibold text-white">
            Built to remove your risk, not add to it.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">
            Data projects fail quietly: they run long, drift in scope, and hand back numbers nobody
            trusts. Every engagement is set up to make that impossible.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g) => (
            <div key={g.t} className="flex gap-4">
              <span
                aria-hidden
                className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-lg bg-accent/15 text-accent"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                  <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{g.t}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-white/60">{g.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
