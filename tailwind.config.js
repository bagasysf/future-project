/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        "fp-primary-20": "#262652",
        "fp-primary-40": "#6C6C9E",
        "fp-primary-80": "#D0D0FF",
        "fp-primary-99": "#F5F5FF",
        "fp-secondary-40": "#F93202",
        "fp-secondary-99": "#FFF2EE",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
