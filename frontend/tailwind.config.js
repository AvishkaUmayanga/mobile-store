/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '363px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'login-bg': "url('./images/login-bg.jpg')"
      },
    },
  },
  plugins: [],
}

