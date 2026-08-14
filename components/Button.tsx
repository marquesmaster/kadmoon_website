import type { ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'light';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-[-0.005em] transition-all focus-visible:outline-2';

const sizes = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-4 text-[15px]',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white shadow-[0_16px_34px_-14px_rgba(232,73,43,.7)] hover:-translate-y-0.5 hover:bg-accent/90',
  ghost:
    'border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-ink-3/60 hover:shadow-card',
  light:
    'bg-white text-ink shadow-card hover:-translate-y-0.5 hover:bg-white/90',
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
