/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      sans: ["Montserrat Alternates"],
    },
    extend: {
      colors: {
        black: "#1A1E20",
        transparent: "transparent",
        current: "currentColor",
        purple: "#3f3cbb",
        basecolor: "#E3C6A5",
      },
    },
  },
  plugins: [],
};
