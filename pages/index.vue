<template>
  <div>
    <div class="container mx-auto hero">
      <div class="introduction">
        <nuxt-content :document="heroContent" />
      </div>

      <div class="things">
        <project-icon :icon-src="require('@/assets/icons/adab.png')" title="ADAB" description="Ayo Dengar Ayo Bicara" to="/projects/adab" />
        <project-icon :icon-src="require('@/assets/icons/rokaru.png')" title="Rokaru" description="Empowering small and medium-sized enterprises" to="/projects/rokaru" />
        <project-icon :icon-src="require('@/assets/icons/assignoti.png')" title="Assignoti" description="Tasks and assignment management" to="/projects/assignoti" />
        <project-icon :icon-src="require('@/assets/icons/tamago2.png')" title="Tamago" description="Digital piggy bank" to="/projects/tamago" />
      </div>

      <div>
        <Hyperlink to="/projects">
          ➡️ See more
        </Hyperlink>
      </div>
    </div>
  </div>
</template>

<script>
import Hyperlink from '~/components/Hyperlink'
import ProjectIcon from '~/components/ProjectIcon'
import getSiteMeta from '~/utils/getSiteMeta'
export default {
  components: { ProjectIcon, Hyperlink },
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
      title: 'Stanley Ang',
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      meta: [
        ...this.meta
      ]
    }
  },
  computed: {
    meta () {
      return getSiteMeta()
    }
  }
}
</script>

<style scoped>
  .hero {
    @apply pt-20 space-y-8;
  }

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
