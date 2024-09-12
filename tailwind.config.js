/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      tablet: { min: "768px", max: "1023px" },
      mobile: { max: "767px" },
    },
  },
  plugins: [],
};
