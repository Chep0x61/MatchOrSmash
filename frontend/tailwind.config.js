/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'komikz': ['Komikz', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
