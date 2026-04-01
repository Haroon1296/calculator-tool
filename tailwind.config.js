/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        "soft-xl": "0 20px 50px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};
