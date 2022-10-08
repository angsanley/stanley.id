<template>
  <div>
    <div class="on-screen">
      <the-navbar class="navbar" :no-hero="noHero" />
      <transition name="fade-in-up">
        <Nuxt class="content" />
      </transition>
    </div>

    <bottom-sheet />

    <footer class="mt-16">
      <the-footer />
    </footer>
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar'
import TheFooter from '~/components/TheFooter'
export default {
  components: { TheFooter, TheNavbar },
  computed: {
    noHero () { return this.$store.state.navbarConfig.noHero }
  }
}
</script>

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
    @apply fixed z-30 w-screen top-0 transform;
  }

  .content {
  }

  .on-screen {
    min-height: calc(100vh - 19rem);
  }
</style>
