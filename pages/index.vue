<template>
  <div>
    <div class="container mx-auto">
      <h1>👋🏼 Halo! I’m <emphasize>Stanley</emphasize>.</h1>
    </div>
  </div>
</template>

<script>
export default {
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
  .centered {
    @apply text-center;
  }

  .hero-image {
    @apply w-full rounded-2xl object-cover;
    height: 24rem;
  }
</style>
