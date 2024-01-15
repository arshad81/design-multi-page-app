/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'stiletto': '#333136',
        'peach':'#E7816B'
      },
      margin:{
        '50p':'50%',
      }
    },
  },
  plugins: [],
}

