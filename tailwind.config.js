/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,html}",
    "./components/**/*.{ts,html}",
    "./app/**/*.{ts,html}",
    "./src/**/*.{ts,html}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [],
};
