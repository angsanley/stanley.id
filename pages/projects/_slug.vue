<template>
  <div>
    <div class="hero">
      <div class="introduction">
        <section class="title-section">
          <img :src="article.icon" :alt="article.title" class="icon">
          <h1>{{ article.title }}</h1>
          <span class="description">{{ article.description }}</span>
        </section>

        <span class="published">Published {{ article.createdAt | formatDate }} · {{ readingTime(article.text) }} min read</span>
      </div>
    </div>

    <article>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Slug',
  filters: {
    formatDate (date) {
      return moment(date).calendar().replace(/\b[A-Z]/, match => match.toLowerCase())
    }
  },
  async asyncData ({ $content, params }) {
    const article = await $content('projects', params.slug, { text: true }).fetch()
    return { article }
  },
  methods: {
    readingTime (text) {
      if (text) {
        const wpm = 225
        const words = text.trim().split(/\s+/).length
        return Math.ceil(words / wpm)
      }
      return 0
    }
  }
}
</script>

<style scoped>
  .introduction {
    @apply text-xl flex flex-col items-center px-2 py-8 space-y-4;
  }

  .title-section {
    @apply flex flex-col items-center;
  }

  .description {
    @apply opacity-75 text-lg;
  }

  .published {
    @apply opacity-75 text-sm;
  }

  .hero {
    @apply pt-20 space-y-8 container mx-auto;
  }

  article {
    @apply mx-auto px-3 font-article;
    max-width: 768px;
  }

  .icon {
    @apply w-24 mb-4 rounded-3xl;
  }
</style>
