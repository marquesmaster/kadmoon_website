import { credibility } from '@/lib/content';
import { Reveal } from '../Reveal';

export function Credibility() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-shell px-6 py-8 md:py-10">
        <Reveal className="flex items-start gap-4">
          <span aria-hidden className="mt-2 h-8 w-1 shrink-0 rounded-full bg-accent" />
          <p className="max-w-4xl text-[15px] leading-relaxed text-ink-2 md:text-base">
            {credibility.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
