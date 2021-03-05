<template>
  <div>
    <Hero :image-src="heroContent.image" :image-alt="heroContent.alt" image-tooltip="Hi there!">
      <nuxt-content :document="heroContent" />
    </Hero>

    <div class="container w-full mx-auto pt-6 centered">
      <nuxt-content :document="whatIDoContent" />
    </div>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
export default {
  components: { Hero },
  async asyncData ({ $content }) {
    const heroContent = await $content('index/hero').fetch()
    const whatIDoContent = await $content('index/what-i-do').fetch()

    return {
      heroContent, whatIDoContent
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

<style scoped>
  .centered {
    @apply text-center;
  }
</style>
