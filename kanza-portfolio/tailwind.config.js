/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141110",
        panel: "#1c1917",
        clay: "#e8703a",
        clayDark: "#c85a2a",
        cream: "#f7f2ea",
        stone: "#efe8dc",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 30px -10px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
