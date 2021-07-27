<template>
  <div>
    <div class="hero">
      <div class="introduction">
        <h1>🛠<br>Projects</h1>
        Here's the list of things that I do recently.
      </div>
      <div class="things">
        <ProjectIcon
          v-for="project in projects"
          :key="project.slug"
          :to="{ name: 'projects-slug', params: { slug: project.slug } }"
          :icon-src="project.icon"
          :title="project.title"
          :description="project.subtitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  name: 'Projects',
  components: { },
  async asyncData ({ $content }) {
    const projects = await $content('projects')
      .only(['title', 'subtitle', 'icon', 'slug', 'date'])
      .sortBy('date', 'asc')
      .fetch()

    return {
      projects
    }
  },
  head () {
    return {
      title: 'Projects - Stanley Ang',
      meta: [
        ...this.meta
      ]
    }
  },
  computed: {
    meta () {
      const metaData = {
        type: 'article',
        title: 'Projects - Stanley Ang',
        description: 'Here\'s the list of things that I do recently.'
      }
      return getSiteMeta(metaData)
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

  .things {
    @apply grid grid-flow-row grid-cols-2 auto-rows-auto gap-16 pt-4;
  }

  @screen md {
    .things {
      @apply grid-cols-3 auto-rows-auto gap-24;
    }
  }

  @screen lg {
    .things {
      @apply grid-cols-4 auto-rows-auto gap-32;
    }
  }
</style>
