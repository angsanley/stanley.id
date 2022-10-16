import getSiteMeta from './utils/getSiteMeta'
const meta = getSiteMeta()

let posts = []

const createSitemapRoutes = async () => {
  const routes = []
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0) { posts = await $content('projects').fetch() }
  for (const post of posts) {
    routes.push(`projects/${post.slug}`)
  }
  return routes
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    gaTrackingId: process.env.GA_TRACKING_ID
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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#6CBC8A' },
      { name: 'msapplication-TileColor', content: '#8acb88' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/transitions/fade-in-up.css',
    '@/assets/css/emoji.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-unicons', mode: 'client' },
    { src: '~/plugins/vue-gtag.client.js' },
    { src: '~/plugins/vue-gtag.server.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
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
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleFonts: {
    families: {
      // 'Balsamiq Sans': [400, 700],
      // 'Source Serif Pro': [400, 700],
      // Inter: [400, 700]
      'Plus Jakarta Sans': [400, 500, 600, 700, 800]
    }
  },

  router: {
    middleware: ['routeChange']
  },

  sitemap: {
    hostname: process.env.APP_URL || 'https://stanley.id',
    routes: createSitemapRoutes
  },

  server: {
    host: '0.0.0.0'
  }
}
