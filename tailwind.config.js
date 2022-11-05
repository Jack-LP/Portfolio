/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          100: '#1a191d',
          200: '#201f23',
          300: '#0e0e0e',
        },
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'mono'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(200px)' },
          '50%': { opacity: 0 },
          '100%': { opacity: 100, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        fadeInUp: 'fadeInUp 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
