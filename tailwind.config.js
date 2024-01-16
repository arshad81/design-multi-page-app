/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'stiletto': '#333136',
        'peach':'#E7816B',
        'light-peach':"#fdf3f0",
      },
      margin:{
        '50p':'50%',
      }
    },
  },
  plugins: [],
}

