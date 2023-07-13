/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#404040',
          200: '#222222',
          300: '#151515',
        },
        plum: {
          100: '#a78bfa',
        },
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        spaceMono: ['Space Mono', 'mono'],
      },
    },
  },
  plugins: [],
};
