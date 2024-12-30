/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        wave: 'polygon(0 50%, 50% 100%, 100% 50%, 100% 100%, 0 100%)',
      },
  },
  plugins: [],
  }}