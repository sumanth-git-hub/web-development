 /** @type {import('tailwindcss').Config} */
 const plugin = require('tailwindcss/plugin')
 export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'media1200': '1200px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("color-change", ".color-change&");
      addVariant("turn-active", ".turn-active&");
    })
  ],
}
