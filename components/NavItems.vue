<template>
  <div>
    <nuxt-link to="/" exact active-class="active">
      Home
    </nuxt-link>
    <nuxt-link to="/projects" active-class="active">
      Projects
    </nuxt-link>
    <nuxt-link to="/resume" active-class="active">
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
</style>
