<template>
  <div>
    <Hero :image-src="require('../assets/pictures/index-hero.jpg')" image-alt="Picture of me" image-tooltip="Hi there!">
      <h1>
        👋<br>
        Halo! I'm <strong v-tippy="tippyConfig" content="That's my name!">Stanley</strong>.
      </h1>
      <h3 class="mb-4">
        I design and develop meaningful apps.
      </h3>
      <p>
        I'm a Computer Science student at BINUS University currently studying Mobile Application and Technology.
        I love everything tech-related, from designing UI/UX to creating real-world problem-solving apps.
      </p>
    </Hero>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
export default {
  components: { Hero },
  data () {
    return {
      tippyConfig: {
        placement: 'top',
        arrow: true,
        followCursor: true
      }
    }
  }
}
</script>

<style>
</style>
