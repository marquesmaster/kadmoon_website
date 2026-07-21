import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        mist: 'rgb(var(--mist) / <alpha-value>)',
        ice: 'rgb(var(--ice) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          2: 'rgb(var(--ink-2) / <alpha-value>)',
          3: 'rgb(var(--ink-3) / <alpha-value>)',
        },
        navy: 'rgb(var(--navy) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(40px, 5.5vw, 76px)', { lineHeight: '0.98', letterSpacing: '-0.035em', fontWeight: '600' }],
        'display-lg': ['clamp(32px, 4.4vw, 56px)', { lineHeight: '1.04', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-md': ['clamp(28px, 3.6vw, 44px)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-sm': ['clamp(22px, 2.4vw, 30px)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      maxWidth: {
        shell: '1280px',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.21, 0.47, 0.32, 0.98) forwards',
        marquee: 'marquee 60s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        card: '0 1px 2px rgb(10 22 40 / 0.04), 0 12px 32px -18px rgb(10 22 40 / 0.18)',
        'card-hover': '0 2px 4px rgb(10 22 40 / 0.05), 0 24px 48px -22px rgb(10 22 40 / 0.28)',
      },
    },
  },
  plugins: [],
};

export default config;
