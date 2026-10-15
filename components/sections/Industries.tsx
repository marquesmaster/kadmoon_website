import { industries, industryPages } from '@/lib/content';
import { Section } from '../Section';
import { SectionHeader } from '../SectionHeader';
import { Reveal } from '../Reveal';

const slugFor = (name: string) => industryPages.find((ip) => ip.name === name)?.slug;

export function Industries() {
  return (
    <Section id="industries" tone="mist">
      <SectionHeader
        eyebrow={industries.eyebrow}
        title={industries.title}
        sub={industries.sub}
        action={
          <a
            href="/industries"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink-2 transition-colors hover:border-ink-3/40 hover:text-ink"
          >
            All industries <span aria-hidden>→</span>
          </a>
        }
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.items.map((item, i) => {
          const slug = slugFor(item.name);
          const inner = (
            <>
              <div className="mb-3 flex items-center justify-between gap-2">
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
                    item.flagship ? 'text-[#8FB8FF]' : 'text-accent'
                  }`}
                >
                  {item.count}
                </span>
                {item.flagship && (
                  <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
                    Flagship
                  </span>
                )}
              </div>
              <h3
                className={`font-display text-lg font-semibold tracking-[-0.02em] ${
                  item.flagship ? 'text-white' : 'text-ink'
                }`}
              >
                {item.name}
              </h3>
              <p
                className={`mt-3 flex-1 text-[15px] leading-relaxed ${
                  item.flagship ? 'text-white/75' : 'text-ink-2'
                }`}
              >
                {item.body}
              </p>
              {slug && (
                <span
                  className={`mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] ${
                    item.flagship ? 'text-white' : 'text-navy'
                  }`}
                >
                  Explore
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              )}
            </>
          );

          const cls = `group flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
            item.flagship
              ? 'border-navy/15 bg-navy text-white shadow-card-hover sm:col-span-2 lg:col-span-2'
              : 'border-line bg-white shadow-card hover:shadow-card-hover'
          }`;

          return (
            <Reveal as="div" key={item.name} delay={(i % 4) * 70}>
              {slug ? (
                <a href={`/industries/${slug}`} className={cls}>
                  {inner}
                </a>
              ) : (
                <article className={cls}>{inner}</article>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
