import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

export function SectionHeader({
  eyebrow,
  title,
  sub,
  align = 'left',
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center';
  onDark?: boolean;
}) {
  const center = align === 'center';
  return (
    <Reveal
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}
    >
      <Eyebrow center={center} onDark={onDark}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={`mt-4 font-display text-display-md ${
          onDark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base leading-relaxed sm:mt-5 md:text-lg ${
            onDark ? 'text-white/70' : 'text-ink-2'
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
