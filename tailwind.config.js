/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#55328b",
        primary: "#f5e9f3",
        secondary: "#fff",
      },
    },
  },
  plugins: [],
};
