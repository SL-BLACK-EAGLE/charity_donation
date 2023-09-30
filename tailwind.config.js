/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pageHeader': "url('./images/page-header-bg.jpg')",
      },
      fontFamily: {
        'abril': ['Abril Fatface'],
        'shadows':['Shadows Into Light'],

      },
    },
  },
  plugins: [],
}