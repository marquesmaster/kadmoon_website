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
    <section className="relative overflow-hidden bg-accent py-20 md:py-28">
      <div className="relative mx-auto max-w-shell px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2.5">
            <span aria-hidden className="h-1.5 w-6 rounded-full bg-ink" />
            <span className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-ink">
              Our commitments
            </span>
          </span>
          <h2 className="mt-4 font-display text-display-sm font-bold text-ink">
            Built to remove your risk, not add to it.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">
            Data projects fail quietly: they run long, drift in scope, and hand back numbers nobody
            trusts. Every engagement is set up to make that impossible.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g) => (
            <div key={g.t} className="flex gap-4">
              <span
                aria-hidden
                className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-lg bg-ink text-white"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                  <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{g.t}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink/70">{g.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
