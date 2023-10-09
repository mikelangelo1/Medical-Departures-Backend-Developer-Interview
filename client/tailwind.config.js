/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "medify-blue": {
          DEFAULT: "#1A2DD8",
          light: "#4A9DFF",
        },
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
