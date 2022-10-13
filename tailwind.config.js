/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
};
