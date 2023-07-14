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
          200: '#7C3AED',
        },
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        spaceMono: ['Space Mono', 'mono'],
      },
      keyframes: {
        bounceSmall: {
          '50%': { transform: 'translateY(-10%)' },
        },
      },
      animation: {
        bounceSmall: 'bounceSmall 1s infinite ease',
      },
    },
  },
  plugins: [],
};
