/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          cream:          "#F0E6D8",   // primary text
          cream2:         "#3A3228",   // hover surfaces
          caramel:        "#D4915A",   // accent
          "caramel-soft": "#E8A86A",   // lighter accent
          "brown-deep":   "#F0E6D8",   // headings
          "brown-mid":    "#C4A882",   // secondary text
          "brown-light":  "#8A7060",   // muted
          "text-mid":     "#C4A882",   // body text
          muted:          "#6A5848",   // very muted
          border:         "#3A3228",   // borders
          card:           "#2A2218",   // card background
        },
      },
      fontFamily: {
        sans:  ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
