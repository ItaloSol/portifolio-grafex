/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#1a237e',
          950: '#0d1b2a',
        },
      },
    },
  },
  plugins: [],
};