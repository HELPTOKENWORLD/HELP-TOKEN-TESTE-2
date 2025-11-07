import type { Config } from 'tailwindcss';
export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#16a34a', dark: '#0f7a36' } },
      container: { center: true, padding: '1rem' }
    }
  },
  plugins: []
} satisfies Config;
