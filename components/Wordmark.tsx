import { nav } from '@/lib/content';

/** "Kadmoon" wordmark with the small "INC." suffix. */
export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
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
  );
}
