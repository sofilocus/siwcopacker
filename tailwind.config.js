/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          1: "#ffbe00",
          2: "#C40090",
          3: "#25519C",
          4: "#C01010",
          5: "#37AC1A",
        },
      },
      container: {
        center: true,
        padding: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
