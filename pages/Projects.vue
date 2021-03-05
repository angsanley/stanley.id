<template>
  <div>
    <hero :reversed="false">
      <template #left>
        <h1>{{ heroContent.title }}</h1>
      </template>

      <template #right>
        {{ heroContent.description }}
      </template>
    </hero>

    <div class="container mx-auto">
      <nuxt-content :document="heroContent" />
    </div>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
export default {
  name: 'Projects',
  components: { Hero },
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

</style>
