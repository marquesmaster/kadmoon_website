import type { ReactNode } from 'react';

export function Section({
  id,
  children,
  className = '',
  tone = 'paper',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: 'paper' | 'mist' | 'ice' | 'navy';
}) {
  const tones = {
    paper: 'bg-paper',
    mist: 'bg-mist',
    ice: 'bg-ice',
    navy: 'bg-navy',
  };
  return (
    <section id={id} className={`${tones[tone]} py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-shell px-6">{children}</div>
    </section>
  );
}
