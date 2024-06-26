/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'retro': ['retro'],
        'retroca': ['retroca'],
        'stre': ['stre'],
        'Vilaka': ['Vilaka'],
        'dream': ['dream'],
        
       'quick': ["Quicksand", 'sans-serif'],
        'dm': ["DM Serif Text"],

        'Soria': ["Soria", 'sans-serif'],
        'Neue': ["Neue", 'sans-serif'],
        'league': ["League Spartan"],

      },
      colors: {
        'my-clr': {
          100: 'rgb(224,124,158)',
        
        },
    },
  },
  plugins: [],

}
}

