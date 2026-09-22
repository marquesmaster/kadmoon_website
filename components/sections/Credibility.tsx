import { credibility } from '@/lib/content';
import { Reveal } from '../Reveal';

export function Credibility() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Reveal>
          <span aria-hidden className="block h-1.5 w-10 rounded-full bg-accent" />
          <p
            className="mt-7 font-serif text-2xl leading-[1.4] text-ink md:text-[34px] md:leading-[1.32]"
            style={{ textWrap: 'balance' }}
          >
            {credibility.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
