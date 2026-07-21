import { clientLogos } from '@/lib/content';

/** Renders only when real client names exist. Never shows fabricated logos. */
export function ClientLogos() {
  if (clientLogos.length === 0) return null;

  const items = clientLogos.length < 8 ? [...clientLogos, ...clientLogos] : clientLogos;

  return (
    <section className="border-y border-line bg-paper py-10">
      <div className="mx-auto mb-5 max-w-shell px-6">
        <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-2">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
          Teams that operate with Kadmoon
        </div>
      </div>
      <div className="marquee-mask marquee-pause overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...items, ...items].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex h-14 flex-shrink-0 items-center border-r border-line px-8 font-display text-lg font-medium tracking-[-0.02em] text-ink"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
