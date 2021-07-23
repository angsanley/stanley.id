module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
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
      body: ['Balsamiq Sans'],
      display: ['Balsamiq Sans']
    },
    colors: {
      green: {
        lightest: '#E4FDE1',
        light: '#A8F99F',
        DEFAULT: '#4EAA4B',
        dark: '#648381',
        darkest: '#506865'
      },
      gray: {
        dark: '#46464A',
        light: '#575761'
      },
      white: {
        DEFAULT: '#FFFFFF',
        darker: '#d2d2e0'
      },
      black: {
        DEFAULT: '#000000'
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
