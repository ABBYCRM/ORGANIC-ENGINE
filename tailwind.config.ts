import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        brand: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bce5ff',
          300: '#8ed4ff',
          400: '#58baff',
          500: '#329cff',
          600: '#1e7df5',
          700: '#1864dc',
          800: '#1a52b3',
          900: '#1b478d',
        },
        accent: {
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        prose: '70ch',
        content: '1180px',
      },
    },
  },
  plugins: [],
};

export default config;