/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          primary:'#1d1d1d',
          secondary:'#5bbcf8',
        },
    },
  },
  plugins: [],
}