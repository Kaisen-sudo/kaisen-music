/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'kaisen-purple': '#6C1E75',
        'kaisen-cyan': '#00F2FE',
        'kaisen-pink': '#FF007F',
        'glass-light': 'rgba(255,255,255,0.15)',
        'glass-dark': 'rgba(0,0,0,0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
