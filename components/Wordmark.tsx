import { nav } from '@/lib/content';
import { LogoMark } from './LogoMark';

/** "Kadmoon" wordmark with the crescent mark and the small "INC." suffix. */
export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <LogoMark className={`h-6 w-6 ${onDark ? 'text-white' : 'text-ink'}`} />
      <span className="inline-flex items-baseline gap-1.5">
        <span
          className={`font-display text-xl font-bold tracking-[-0.03em] ${
            onDark ? 'text-white' : 'text-ink'
          }`}
        >
          {nav.wordmark}
        </span>
        <span className="font-mono text-[10px] font-medium tracking-[0.16em] text-accent">
          {nav.suffix}
        </span>
      </span>
    </span>
  );
}
