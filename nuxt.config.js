import getSiteMeta from './utils/getSiteMeta'
const meta = getSiteMeta()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    googleAnalyticsTrackingID: process.env.GA_TRACKING_ID || ''
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Stanley Ang',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/main.css',
    '@/assets/css/transitions/fade-in-up.css',
    '@/assets/css/emoji.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-tippy.js', mode: 'client' },
    { src: '~/plugins/vue-unicons', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-material-design-icons',
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: process.env.googleAnalyticsTrackingID,
    pageTracking: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleFonts: {
    families: {
      'Balsamiq Sans': [400, 700],
      'Source Serif Pro': [400, 700]
    }
  },

  router: {
    middleware: ['routeChange']
  },

  server: {
    host: '0.0.0.0'
  }
}
