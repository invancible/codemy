/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/*.html",
    "./core/templates/core/*.html",
  ],
  theme: {
    fontFamily: {
      'body': ['Play'],
      'logo': ['PressStart'],
      'title1': ['PlayBold'],
      'title2': ['ChangaSemiBold'],
      'subtitle': ['ChangaMedium'],
    },
    extend: {
      colors: {
        // primary: '#2b2f47',
        primaryLight: '#3e4761',
        secondary: '#7691b0',
        secondaryDark: '#596b87',
        tertiary: '#3a5f2a',
        tertiaryLight: '#47792b',
        // background: '#141127',
        primary: '#141127',
        background: '#2b2f47'
      },
    },
  },
  plugins: [],
}
