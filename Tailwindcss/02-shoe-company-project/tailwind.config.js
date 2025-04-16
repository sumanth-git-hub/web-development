/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'media1200': '1200px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}
