/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          cream:          "#E8E0D5",   // warm off-white text
          cream2:         "#2A2420",   // subtle surface hover
          caramel:        "#D4915A",   // warm amber accent
          "caramel-soft": "#C47A42",   // deeper amber
          "brown-deep":   "#E8E0D5",   // primary text (light on dark)
          "brown-mid":    "#B09880",   // secondary text
          "brown-light":  "#8A7060",   // muted text
          "text-mid":     "#C8B8A8",   // body text
          muted:          "#7A6858",   // placeholder / subtle text
          border:         "#3A3028",   // warm charcoal border
          card:           "#242018",   // card surface
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
