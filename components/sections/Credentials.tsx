import { earnedCredentials } from '@/lib/credentials';

// Renders the Microsoft trust badges — but only the ones marked earned in
// lib/credentials.ts. If none are earned yet it renders nothing, so the site
// never shows a badge that is not true.
export function Credentials() {
  const items = earnedCredentials();
  if (items.length === 0) return null;

  return (
    <section className="border-y border-line bg-mist">
      <div className="mx-auto max-w-shell px-6 py-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
          Microsoft credentials
        </p>
        <ul className="mt-5 flex flex-wrap gap-3">
          {items.map((c) => (
            <li
              key={c.label}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2"
            >
              <span
                aria-hidden
                className={`h-2 w-2 rounded-full ${c.kind === 'partner' ? 'bg-accent' : 'bg-ink'}`}
              />
              <span className="text-[14px] font-medium text-ink">{c.label}</span>
              {c.detail && <span className="font-mono text-[11px] text-ink-3">{c.detail}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
