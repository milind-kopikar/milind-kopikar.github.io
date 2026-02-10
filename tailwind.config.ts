import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { 600: '#2563eb', 700: '#1d4ed8' },
        accent: { 500: '#8b5cf6', 600: '#7c3aed' },
      },
    },
  },
  plugins: [],
};
export default config;
