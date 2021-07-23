<template>
  <div>
    <nuxt-link to="/" exact active-class="active" class="link">
      🏠 Home
    </nuxt-link>
    <nuxt-link to="/projects" active-class="active" class="link">
      Projects
    </nuxt-link>
    <nuxt-link to="/resume" active-class="active" class="link">
      Resume
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavItems'
}
</script>

<style scoped>
  .active {
    @apply text-green font-bold;
  }

  .link {
    @apply transition duration-300 ease-in-out;
  }

  .link:hover {
    @apply text-orange-light;
  }
</style>
