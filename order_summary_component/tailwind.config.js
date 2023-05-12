/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        paleBlue: {
          100: 'hsl(225, 100%, 94%)',
          200:'hsl(245, 75%, 52%)',
          300:'hsl(225, 100%, 98%)',
          400:'hsl(224, 23%, 55%)',
          500:'hsl(223, 47%, 23%)',
        }
      },
      fontFamily:{
        body:['Red Hat Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}

