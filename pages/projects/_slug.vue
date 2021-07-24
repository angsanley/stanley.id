<template>
  <div>
    <div class="hero">
      <div class="introduction">
        <img :src="article.icon" :alt="article.title" class="icon">
        <h1>{{ article.title }}</h1>
        <span class="description">{{ article.description }}</span>
      </div>

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
  .introduction {
    @apply text-xl;
  }

  .description {
    @apply opacity-75 text-base;
  }

  .hero {
    @apply pt-20 space-y-8 container mx-auto;
  }

  .icon {
    @apply w-24 mb-4 rounded-3xl;
  }
</style>
