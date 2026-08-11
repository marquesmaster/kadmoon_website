import { footer } from '@/lib/content';
import { siteConfig } from '@/lib/site';
import { Wordmark } from '../Wordmark';

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-shell px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{footer.tagline}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-block font-mono text-sm text-navy underline decoration-accent decoration-2 underline-offset-4"
            >
              {siteConfig.email}
            </a>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[15px] text-ink-2 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-ink-3">
            {siteConfig.legalName} · {siteConfig.city}, {siteConfig.region} · {siteConfig.country}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="/privacy" className="font-mono text-xs text-ink-3 transition-colors hover:text-ink">
              Privacy
            </a>
            <a href="/terms" className="font-mono text-xs text-ink-3 transition-colors hover:text-ink">
              Terms
            </a>
            <p className="font-mono text-xs text-ink-3">© 2026 {siteConfig.legalName}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
