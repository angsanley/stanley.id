<template>
  <div>
    <Hero>
      <div class="container mx-auto">
        <div class="flex flex-col space-y-4 text-center text-xl py-20">
          <div class="text-5xl normal-emoji-weight">
            🛠
          </div>
          <h1 class="py-4 text-7xl font-extrabold">
            Projects
          </h1>
          <p>Every problems has their own stories behind it ✨. As a software engineer I always try to solve these problems using what I'm good at, technology. Here you can find the stories of how I try to solve the problems that I've encountered.</p>
        </div>
      </div>
    </Hero>
    <div class="container mx-auto mt-24">
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
    @apply text-lg max-w-2xl;
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
