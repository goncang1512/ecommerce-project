/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      cursi: ["Great Vibes", "cursive"],
    },
  },
  plugins: [require("daisyui")],
};
