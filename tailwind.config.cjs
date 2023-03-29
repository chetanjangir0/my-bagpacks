/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        majorMono:"'Major Mono Display', monospace",
        montserrat:"'Montserrat Alternates', sans-serif",
        josefin:"'Josefin Slab', serif"
      }
    },
  },
  plugins: [],
}
