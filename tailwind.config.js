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
        'pageFooter': "url('./images/site_footer_bg.jpg')",
        'campaignDetails': "url('./images/campaign-details-img-1.jpg')",
        'summaryImage1': "url('./images/summary-img-1.jpg')",
        'summaryImage2': "url('./images/summary-img-2.jpg')",
        'comment1': "url('./images/comment-1-1.png')",
        'comment2': "url('./images/comment-1-2.png')",
        'organizer': "url('./images/organizer-img-1.png')",
        'donation1': "url('./images/recent-donation-img-1.jpg')",
        'donation2': "url('./images/recent-donation-img-2.jpg')",
        'donation3': "url('./images/recent-donation-img-3.jpg')",
        'SignIn_BG': "url('./images/SignIn_BG.jpg')",

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