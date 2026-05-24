/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          cream:           "#FDF6EE",
          cream2:          "#F5EBD8",
          caramel:         "#C8842A",
          "caramel-soft":  "#E8A84A",
          "brown-deep":    "#3B1F0A",
          "brown-mid":     "#7A4A1E",
          "brown-light":   "#B07840",
          "text-mid":      "#6B4423",
          muted:           "#A07850",
          border:          "#E0C9A8",
          card:            "#FFFDF9",
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
