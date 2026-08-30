/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0B0D',
          900: '#111318',
          800: '#181B21',
          700: '#22262E',
          600: '#2E333D',
          500: '#454C58',
          400: '#6B7280',
          300: '#9CA3AF',
          200: '#D1D5DB',
          100: '#E9EAEC',
          50: '#F6F6F7',
        },
        paper: {
          DEFAULT: '#FAFAF9',
          dim: '#F1F1EF',
        },
        signal: {
          DEFAULT: '#2F9E52',
          dim: '#1F7A3E',
          bright: '#3FC96B',
          soft: 'rgba(47, 158, 82, 0.12)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(127,127,127,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(127,127,127,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        rise: 'rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
