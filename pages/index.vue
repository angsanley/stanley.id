<template>
  <div>
    <Hero>
      <template #left>
        <nuxt-content :document="heroContent" />
      </template>

      <template #right>
        <img
          v-tippy="tippyConfig"
          content="Hi there!"
          class="hero-image"
          :src="heroContent.image"
          :alt="heroContent.alt"
        >
      </template>
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

  .hero-image {
    @apply w-full rounded-2xl object-cover;
    height: 24rem;
  }
</style>
