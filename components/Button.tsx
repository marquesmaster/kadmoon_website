import type { ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'light';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-all focus-visible:outline-2';

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-[15px]',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-navy text-white shadow-card hover:-translate-y-0.5 hover:bg-navy/90 hover:shadow-card-hover',
  ghost:
    'border border-line bg-paper text-ink hover:-translate-y-0.5 hover:border-ink-3/60 hover:shadow-card',
  light:
    'bg-white text-navy shadow-card hover:-translate-y-0.5 hover:bg-white/90',
};

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? 'button'} className={cls}>
      {children}
    </button>
  );
}
