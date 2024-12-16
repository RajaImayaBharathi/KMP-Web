/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        bellota: ["Bellota Text"], 
      },
      /* minHeight: {
        'screen-minus-350': 'calc(100vh - 350px)',
        'screen-minus-300': 'calc(100vh - 300px)',
        'screen-minus-250': 'calc(100vh - 250px)',
        'screen-minus-200': 'calc(100vh - 200px)',
        'screen-minus-150': 'calc(100vh - 150px)',
      }, */
    },
  },
  plugins: [],
}