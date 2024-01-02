/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: "Inter, monospace"
    },
    extend: {
      height: {
        screen: "100dvh"
      }
    },
  },
  plugins: [],
};
