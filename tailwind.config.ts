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
        // Aliases mapping the imported dashboard components' design tokens onto
        // Kadmoon's palette, so those components render without class edits.
        bg: {
          DEFAULT: 'rgb(var(--paper) / <alpha-value>)',
          card: 'rgb(var(--paper) / <alpha-value>)',
          soft: 'rgb(var(--mist) / <alpha-value>)',
          ink: 'rgb(var(--navy) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--line) / <alpha-value>)',
          strong: 'rgb(var(--ink-3) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--ink) / <alpha-value>)',
          secondary: 'rgb(var(--ink-2) / <alpha-value>)',
          muted: 'rgb(var(--ink-3) / <alpha-value>)',
          onink: '#ffffff',
        },
        brand: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          deep: '#B8461A',
          soft: 'rgba(234, 90, 31, 0.10)',
        },
        warning: '#D9822B',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(42px, 5.8vw, 82px)', { lineHeight: '0.96', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-lg': ['clamp(33px, 4.6vw, 60px)', { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-md': ['clamp(28px, 3.6vw, 46px)', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-sm': ['clamp(22px, 2.4vw, 31px)', { lineHeight: '1.18', letterSpacing: '-0.022em', fontWeight: '600' }],
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
        card: '0 1px 2px rgb(21 25 30 / 0.04), 0 14px 34px -20px rgb(21 25 30 / 0.16)',
        'card-hover': '0 2px 4px rgb(21 25 30 / 0.05), 0 26px 54px -30px rgb(21 25 30 / 0.28)',
      },
    },
  },
  plugins: [],
};

export default config;
