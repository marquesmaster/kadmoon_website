import { footer } from '@/lib/content';
import { siteConfig } from '@/lib/site';

function BarMark() {
  return (
    <span
      aria-hidden
      className="inline-flex h-7 w-7 items-end gap-[3px] rounded-lg p-1.5"
      style={{ background: 'linear-gradient(150deg,#F0553B,#E1421F)' }}
    >
      <span className="w-[3px] rounded-[2px] bg-white" style={{ height: 6 }} />
      <span className="w-[3px] rounded-[2px] bg-white" style={{ height: 10 }} />
      <span className="w-[3px] rounded-[2px] bg-white" style={{ height: 14 }} />
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-[#E7E4DE]">
      <div className="mx-auto max-w-shell px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-12">
          <div className="max-w-sm">
            <a href="/" aria-label="Kadmoon home" className="inline-flex items-center gap-3">
              <BarMark />
              <span className="font-display text-xl font-semibold tracking-[-0.01em] text-[#F6F3EE]">
                Kadmoon
              </span>
            </a>
            <p className="mt-5 text-[15px] leading-relaxed text-[#9AA0A9]">{footer.tagline}</p>
            <div className="mt-6 inline-flex items-center gap-2.5 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-[#9AA0A9]">
              <span
                aria-hidden
                className="h-[7px] w-[7px] rounded-full bg-accent"
                style={{ boxShadow: '0 0 0 4px rgba(232,73,43,.16)' }}
              />
              {siteConfig.city}, {siteConfig.regionCode} · United States
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[#71767F]">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[15px] text-[#C9CCD2] transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#71767F]">
            © 2026 {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#9AA0A9]">
              Built 100% on Microsoft
            </span>
            <a href="/privacy" className="text-[13px] text-[#71767F] transition-colors hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="text-[13px] text-[#71767F] transition-colors hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
