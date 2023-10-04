/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");



module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage:{
        'pageHeader':"url('./image/page-header-bg.jpg')",
        'background':"url('./image/cta-two-bg.jpg')",
        'pageHeader2':"url('./image/you_can_help_bg.jpg')",
        'pageHeader3':"url('./image/testimonials-two-bg.jpg')",
        'pageHeader4':"url('./image/testimonials-two-shape.png')",
        'donation_1':"url('./image/donation_1.jpg')",
        'SignIn_BG_1':"url('./image/SignIn_BG.jpg')",
      },
      fontFamily:{
        'abril':['Abril Fatface'],
        'shadows':['Shadows Into Light'],
        'rubic':['Rubik'],
        'poppins':['Poppins'],
      },
      colors:{
        'darkBrown':'rgba(35, 31, 41, .92)',
        'darkShadow':'rgba(44, 39, 52, .50)',
        'borderColor':'rgba(255, 255, 255, 0.5)',
        'box_shadow':'rgba(0, 0, 0, 0.5)',
      }

      backgroundImage: {
        'pageHeader': "url('./images/page-header-bg.jpg')",
      },
      fontFamily: {
        'abril': ['Abril Fatface'],
        'shadows':['Shadows Into Light'],
        'rubik':['Rubik'],

      },

    },
  },
  darkMode: "class",
  plugins: [nextui()],
  plugins: [],
}