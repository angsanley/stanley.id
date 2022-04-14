module.exports = {
  purge: [
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
    extend: {},
    fontFamily: {
      body: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      display: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      // article: ['Source Serif Pro', 'Times New Roman', 'Times', 'serif']
      article: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    colors: {
      green: {
        lightest: '#E4FDE1',
        light: '#A8F99F',
        DEFAULT: '#4EAA4B',
        dark: '#648381',
        darkest: '#506865'
      },
      teal: {
        DEFAULT: '#6DBC8A'
      },
      gray: {
        dark: '#46464A',
        light: '#575761'
      },
      white: {
        DEFAULT: '#FFFFFF',
        darker: '#F4F4F4'
      },
      black: {
        DEFAULT: '#000000'
      },
      orange: {
        DEFAULT: '#E09200',
        light: '#FFBF46',
        lighter: '#FFC938'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
}
