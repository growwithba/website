import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#050609',
          800: '#0A0C12',
          700: '#11141C',
          600: '#181C27',
          500: '#232839',
        },
        chalk: {
          50: '#FAFAFC',
          100: '#EEEFF4',
          200: '#C9CCD8',
          300: '#9BA0B2',
          400: '#6E7488',
        },
        signal: {
          blue: '#5B8CFF',
          teal: '#2DD4BF',
          violet: '#A78BFA',
          coral: '#FF8A5B',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        shell: '80rem',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
