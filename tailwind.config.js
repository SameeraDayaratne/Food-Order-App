/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mealCard : '#1d1a16',
        mealPrice : '#312c1d'
      }
    },
  },
  plugins: [],
}

