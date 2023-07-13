/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"rgb(250 232 255 / 0.9)",
        secondary:"rgb(204 251 241 / 0.7)",
        btnClr : "#8c7ae6",
      },
      fontFamily:{
        Poppins : "'Poppins', sans-serif",
        Belanosima : "'Belanosima', sans-serif",
        Barlow : "'Barlow', sans-serif",
      },
    },
  },
  plugins: [],
};
