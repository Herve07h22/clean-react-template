/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39ff14',
        'neon-pink': '#ff2079',
        'neon-blue': '#18cafc',
        'neon-yellow': '#f5ff42',
        'neon-red': '#ff073a',
      },
      boxShadow: {
        neon: '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 0, 150, 0.8)',
      },
    },
  },
  plugins: [],
};
