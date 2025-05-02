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
        // Existing custom colors
        burgundy: '#800020',
        gold: '#D4A017',
        // New custom colors using CSS variables
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#1e40af',
        secondary: '#3b82f6',
        accent: '#db2777',
      },
      fontFamily: {
        // Existing custom fonts
        playfair: ['Playfair Display', 'serif'],
        lora: ['Lora', 'serif'],
        // New custom fonts
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      screens: {
        // Default Tailwind breakpoints
        'sm': '640px',   // Small (mobile)
        'md': '768px',   // Medium (tablet)
        'lg': '1024px',  // Large (laptop)
        'xl': '1280px',  // Extra large
        '2xl': '1536px', // 2x large screens
      },
    },
  },
  plugins: [],
};
