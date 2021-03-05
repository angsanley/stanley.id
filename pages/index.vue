<template>
  <div>
    <Hero :image-src="heroContent.image" :image-alt="heroContent.alt" image-tooltip="Hi there!">
      <nuxt-content :document="heroContent" />
    </Hero>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
export default {
  components: { Hero },
  async asyncData ({ $content }) {
    const heroContent = await $content('index/hero').fetch()

    return {
      heroContent
    }
  },
  data () {
    return {
      tippyConfig: {
        placement: 'top',
        arrow: true,
        followCursor: true
      }
    }
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

<style>
</style>
