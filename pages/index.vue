<template>
  <div>
    <div class="container mx-auto hero">
      <h1>👋🏼 Halo! I’m <emphasize>Stanley</emphasize>.</h1>
      <p class="introduction">
        I’m a software developer from 🇮🇩 Indonesia graduating from 🎓
        <hyperlink to="https://binus.ac.id" external>
          BINUS University
        </hyperlink> studying Mobile Application and Technology.
        I enjoy developing modern 📱 mobile and 🌎 web apps.
      </p>
    </div>
  </div>
</template>

<script>
import Hyperlink from '~/components/Hyperlink'
export default {
  components: { Hyperlink },
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
      title: `${this.heroContent.title} - Stanley Ang`,
      meta: [
        {
          content: this.heroContent.description
        }
      ]
    }
  }
}
</script>

<style scoped>
  .hero {
    @apply pt-20 space-y-4;
  }

  .introduction {
    @apply text-xl max-w-2xl;
  }
</style>
