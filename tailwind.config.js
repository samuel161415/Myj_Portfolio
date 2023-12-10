/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Open Sans', 'sans-serif'],
        'serif': ['Georgia', 'Cambria', 'serif'],
        'display': ['Montserrat', 'Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

