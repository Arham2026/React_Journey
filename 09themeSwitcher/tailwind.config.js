/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // enables darkmode with the class
  // It tells tailwind to apply the dark class in the classes.
  darkMode:'class',
  plugins: [],
}

