const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem'
      }
    },
    extend: {
      colors: {
        green: {
          ...colors.green,
          lightest: '#E4FDE1',
          light: '#A8F99F',
          DEFAULT: '#4EAA4B',
          dark: '#648381',
          darkest: '#506865'
        },
        teal: {
          ...colors.teal,
          DEFAULT: '#6DBC8A'
        },
        gray: {
          ...colors.gray,
          dark: '#46464A',
          light: '#575761'
        },
        white: {
          ...colors.white,
          DEFAULT: '#FFFFFF',
          darker: '#F4F4F4'
        },
        black: {
          ...colors.black,
          DEFAULT: '#000000'
        },
        orange: {
          ...colors.orange,
          DEFAULT: '#E09200',
          light: '#FFBF46',
          lighter: '#FFC938'
        }
      }
    },
    fontFamily: {
      body: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      display: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      // article: ['Source Serif Pro', 'Times New Roman', 'Times', 'serif']
      article: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
