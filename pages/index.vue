<template>
  <div>
    <div class="container mx-auto hero">
      <h1>👋🏼 Halo! I’m <emphasize>Stanley</emphasize>.</h1>
      <p class="introduction">
        I’m a software developer from 🇮🇩 Indonesia graduating from 🎓
        <hyperlink to="https://binus.ac.id" external>
          BINUS University
        </hyperlink> studying Mobile Application and Technology.
        I enjoy developing modern 📱 mobile and 🌎 web apps.
      </p>

      <p class="introduction">
        Here’s some of the things that I worked on:
      </p>

      <div class="things">
        <project-icon :icon-src="require('@/assets/icons/adab.png')" title="ADAB" description="Ayo Dengar Ayo Bicara" />
        <project-icon :icon-src="require('@/assets/icons/rokaru.png')" title="Rokaru" description="Digital platform for MSME" />
        <project-icon :icon-src="require('@/assets/icons/assignoti.png')" title="Assignoti" description="Tasks and assignment management" />
        <project-icon :icon-src="require('@/assets/icons/tamago2.png')" title="Tamago" description="Digital piggy bank" />
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
  .hero {
    @apply pt-20 space-y-8;
  }

  .introduction {
    @apply text-xl max-w-2xl;
  }

  .things {
    @apply grid grid-flow-col grid-cols-2 grid-rows-2 gap-16 pt-4;
  }

  @screen md {
    .things {
      @apply grid-cols-4 grid-rows-1 gap-24;
    }
  }

  @screen lg {
    .things {
      @apply grid-cols-4 grid-rows-1 gap-32;
    }
  }
</style>
