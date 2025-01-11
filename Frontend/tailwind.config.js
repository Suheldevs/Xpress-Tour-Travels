/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          primary:'white',
          secondary:'#FFA500',
          bgcolor1:'slate-800',
          bgcolor2:'slate-50',
        },
    },
  },
  plugins: [],
}