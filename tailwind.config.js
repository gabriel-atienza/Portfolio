/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
  coffee: {
    cream: "#FDF6EE",
    cream2: "#F5EBD8",
    // ... (see file for full list)
  }
},
fontFamily: {
  sans:  ["DM Sans", "sans-serif"],
  serif: ["Playfair Display", "serif"],
},
}
