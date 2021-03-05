<template>
  <div>
    <!--    <draggable-div class="navbar">-->
    <the-navbar class="navbar" />
    <!--    </draggable-div>-->
    <Nuxt />
  </div>
</template>

<style>
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<style scoped>
  .navbar {
    @apply fixed z-30 w-screen top-5 transform;
  }
</style>

<script>
import TheNavbar from '~/components/TheNavbar'
export default {
  components: { TheNavbar }
}
</script>
