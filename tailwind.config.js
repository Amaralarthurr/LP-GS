/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'main-green': '#E3FF47',
        'second-green': '#5e7f39',
        'footer-gray': '#484848'
      },
      fontFamily: {
        title: ["Michroma"],
        text: ["Futura"]
      }
    },
  },
  plugins: [],
}

