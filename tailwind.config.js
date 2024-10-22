/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'pop': ['Poppins',],
      'pod': ['Podkova',],
      'frank': ['Frank Ruhl Libre',],
      },
      colors: {
        'headerBg': '#FAE3B6',
        'borderBg': '#FDBB57',
        'counterBg': '#FEECC8',
        'footerBG': '#CFA485',
        'footerStar': '#FFAF37',
        'footertext': '#C4C4C4',
      },
      maxWidth: {
        'headerContainer': '1180px',
      },
    },
  },
  plugins: [],
}
