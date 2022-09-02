/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width:{
        "100": "50vh",

      },
      height:{
        "100": "70vh"
      },
      backgroundImage: {
        'hero-image': "url('./src/assets/hero1.jpg')",
        'hero-image1': "url('./src/assets/hero.jpg')",
        'mobile-hero-image': "url('./src/assets/hero2.jpg')",
        'career-image': "url('./src/assets/careerpath.jpg')",
        'career-image1': "url('./src/assets/careerpath2.jpg')",
        'career-image2': "url('./src/assets/careerpath3.jpg')",
        'auth-image': "url('./src/assets/auth.jpg')",
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors:{
        primary: '#fe4066',
        'dark-text': '#8c8889',
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
