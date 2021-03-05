<template>
  <div>
    <Hero :image-src="page.image" :image-alt="page.alt" image-tooltip="Hi there!">
      <nuxt-content :document="page" />
    </Hero>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
export default {
  components: { Hero },
  async asyncData ({ $content }) {
    const page = await $content('index').fetch()

    return {
      page
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
      title: `${this.page.title} - Stanley Ang`,
      meta: [
        {
          content: this.page.description
        }
      ]
    }
  }
}
</script>

<style>
</style>
