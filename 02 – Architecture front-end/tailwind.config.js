module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        'orange': '#FBAF41',
        'black': '#000000',
        'white': '#FFFFFF',
        'grey': '#646464',
        'light-grey': '#646464',
        'bcg-grey': '#DCDCDC',
        'bcg-lightgrey': '#ECECEC',
        'extraLightGrey': '#EFEFEF',
        'green': '#2DD393',
        'green-1': '#5ABFAB',
        'green-2': '#56AE9C',
        'green-3': '#42AA94',
        'green-4': '#379D88',
        'green-5': '#298572',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
