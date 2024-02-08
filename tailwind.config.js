/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "'Inter', sans-serif"
      },
      
      colors: {
        darkBlue: "hsl(240, 38%, 20%)",
        grayishBlue: "hsl(240, 18%, 77%)"
      }
    },
  },
  plugins: [],
}

