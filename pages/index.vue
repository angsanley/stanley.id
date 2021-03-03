<template>
  <div>
    <Hero :image-src="require('../assets/pictures/index-hero.jpg')">
      <h1>
        👋<br>
        Halo! I'm <strong>Stanley</strong>.
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
  components: { Hero }
}
</script>

<style>
</style>
