<template>
  <div>
    <div class="hero">
      <div class="introduction">
        <h1>{{ heroContent.emoji }}<br>{{ heroContent.title }}</h1>
        {{ heroContent.description }}
      </div>
      <p>
        <nuxt-content :document="heroContent" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  components: { },
  async asyncData ({ $content }) {
    const heroContent = await $content('projects/hero').fetch()

    return {
      heroContent
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
  .introduction {
    @apply text-xl max-w-2xl;
  }

  .hero {
    @apply pt-20 space-y-8 container mx-auto ;
  }
</style>
