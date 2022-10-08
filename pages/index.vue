<template>
  <div>
    <Hero>
      <div class="container mx-auto">
        <div class="flex flex-col space-y-4 text-center text-xl py-20">
          <div class="text-5xl normal-emoji-weight">
            👋
          </div>
          <div class="text-3xl">
            Apa kabar,
          </div>
          <h1 class="py-4 text-7xl font-extrabold">
            <Emphasize>Stanley</Emphasize> here!
          </h1>
          <p>I’m a software developer from Indonesia graduating from BINUS University studying Mobile Application and Technology. I enjoy developing modern mobile and web apps. <b>Let’s build stuff together! 🚀</b></p>
        </div>
      </div>
    </Hero>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import getSiteMeta from '~/utils/getSiteMeta'
import Emphasize from '~/components/Emphasize.vue'
export default {
  components: { Emphasize, Hero },
  async asyncData ({ $content }) {
    const heroContent = await $content('index/hero').fetch()
    const whatIDoContent = await $content('index/what-i-do').fetch()

    return {
      heroContent, whatIDoContent
    }
  },
  data () {
  },
  head () {
    return {
      title: 'Stanley Ang',
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      meta: [
        ...this.meta
      ]
    }
  },
  computed: {
    meta () {
      return getSiteMeta()
    }
  }
}
</script>

<style scoped>
</style>
