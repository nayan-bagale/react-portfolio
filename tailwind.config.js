/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        svg: 'calc(100% + 1.3px)'
      }
    },
  },
  plugins: [],
};

