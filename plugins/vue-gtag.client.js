import Vue from 'vue'
import VueGtag from 'vue-gtag'

/**
 * @type {import('@nuxt/types').Plugin}
 */
const vueGtag = ({ app, env }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: env.GA_TRACKING_ID },
      disabled: true // Here you could ignore user privacy and set to true
    },
    app.router
  )
}

export default vueGtag
