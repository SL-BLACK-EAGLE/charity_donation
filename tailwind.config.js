/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
}