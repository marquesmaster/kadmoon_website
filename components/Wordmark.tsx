import { nav } from '@/lib/content';
import { LogoMark } from './LogoMark';

/** Brand lockup: the chart mark, "Kadmoon", and the "Business Intelligence" descriptor. */
export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className={`h-6 w-6 ${onDark ? 'text-white' : 'text-ink'}`} />
      <span className="inline-flex items-baseline gap-2">
        <span
          className={`font-display text-xl font-bold tracking-[-0.03em] ${
            onDark ? 'text-white' : 'text-ink'
          }`}
        >
          {nav.wordmark}
        </span>
        <span className="hidden whitespace-nowrap font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-accent sm:inline">
          {nav.suffix}
        </span>
      </span>
    </span>
  );
}
