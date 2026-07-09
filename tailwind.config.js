/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1EC8A0",
        "gray-01": "#1A1A2E",
        "gray-02": "#4A4A68",
        "gray-03": "#8888A0",
        "gray-04": "#B8B8CC",
        "gray-05": "#F0F0F5",
        "special-mainBg": "#F7F8FC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};