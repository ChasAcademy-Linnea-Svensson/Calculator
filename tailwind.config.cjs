/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'calc-purple-dark': '#43337A',
        'calc-purple-light': '#553C9A',
        'calc-orange-dark': '#DA803D',
        'calc-orange-light': '#EC8936',
      },
    },
  },
  plugins: [],
};
