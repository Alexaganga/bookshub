/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#800020',
        gold: '#D4A017',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#1e40af',
        secondary: '#3b82f6',
        accent: '#db2777',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lora: ['Lora', 'serif'],
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};