import { credibility } from '@/lib/content';
import { Reveal } from '../Reveal';

export function Credibility() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Reveal>
          <span aria-hidden className="block h-1.5 w-10 rounded-full bg-accent" />
          <p
            className="mt-7 font-display text-2xl font-medium leading-[1.3] tracking-[-0.01em] text-ink md:text-[32px] md:leading-[1.25]"
            style={{ textWrap: 'balance' }}
          >
            {credibility.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
