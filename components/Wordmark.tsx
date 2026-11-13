import { nav } from '@/lib/content';
import { LogoMark } from './LogoMark';

/** Brand lockup: the chart mark, then "Kadmoon" with "Business Intelligence" stacked beneath it. */
export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className={`h-7 w-7 ${onDark ? 'text-white' : 'text-ink'}`} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-bold leading-none tracking-[-0.03em] ${
            onDark ? 'text-white' : 'text-ink'
          }`}
        >
          {nav.wordmark}
        </span>
        <span className="mt-1 whitespace-nowrap font-mono text-[9px] font-medium uppercase leading-none tracking-[0.11em] text-accent">
          {nav.suffix}
        </span>
      </span>
    </span>
  );
}
