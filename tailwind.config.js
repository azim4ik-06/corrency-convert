/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button':
          {
            "-webkit-appearance": "none",
            margin: "0",
          },
        'input[type="number"]': {
          "-moz-appearance": "textfield", // Для Firefox
        },
      });
    }),
  ],
};
