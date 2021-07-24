<template>
  <div>
    <div class="hero">
      <heading>
        <h1>{{ article.title }}</h1>
        <span class="description">{{ article.description }}</span>
      </heading>

      <article>
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  async asyncData ({ $content, params }) {
    const article = await $content('projects', params.slug).fetch()
    return { article }
  }
}
</script>

<style scoped>
  .description {
    @apply text-gray-light;
  }

  .hero {
    @apply pt-20 space-y-8 container mx-auto;
  }
</style>
