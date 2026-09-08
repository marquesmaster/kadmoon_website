import type { ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'light';

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-full font-medium leading-none tracking-[-0.005em] transition-all focus-visible:outline-2';

const sizes = {
  md: 'px-[22px] py-[14px] text-[15px]',
  lg: 'px-[26px] py-[16px] text-base',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:-translate-y-px hover:bg-[#E55A0D]',
  ghost:
    'border border-ink-3/40 bg-transparent text-ink hover:border-ink',
  light:
    'bg-white text-navy shadow-card hover:-translate-y-px hover:bg-white/90',
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
