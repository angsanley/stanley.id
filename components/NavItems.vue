<template>
  <div>
    <nuxt-link to="/" exact active-class="active" class="link">
      <span class="normal-emoji-weight">🏠</span> Home
    </nuxt-link>
    <nuxt-link to="/projects" active-class="active" class="link">
      <span class="normal-emoji-weight">🛠</span> Projects
    </nuxt-link>
    <nuxt-link to="/resume" active-class="active" class="link">
      <span class="normal-emoji-weight">📄</span> Resume
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
    @apply text-green lg:bg-green lg:bg-opacity-20;
  }

  .link {
    @apply transition duration-300 ease-in-out lg:py-2 px-4 rounded-full;
  }

  .link:hover {
    @apply lg:bg-green lg:bg-opacity-30;
  }

</style>
