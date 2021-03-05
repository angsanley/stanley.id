<template>
  <div class="navbar-container">
    <div class="content" :class="{ 'content-bg' : scrollPosition >= 10 }">
      <div class="nav-button lg:hidden" />

      <div class="branding" :class="{ 'branding-top': scrollPosition < 10 }">
        <nuxt-link to="/">
          Stanley Ang
        </nuxt-link>
      </div>

      <div class="hidden lg:block">
        <nav-items class="nav-items" />
      </div>

      <div class="nav-button lg:hidden">
        a
      </div>
    </div>
  </div>
</template>

<script>
import NavItems from '~/components/NavItems'
export default {
  name: 'TheNavbar',
  components: { NavItems },
  data () {
    return {
      scrollPosition: null
    }
  },

  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },

  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  }

}
</script>

<style scoped>
  .navbar-container {
    @apply flex justify-center w-screen;
  }

  .content {
    @apply w-full max-w-7xl h-16 bg-opacity-0 flex justify-between items-center mx-4 transition-all duration-300 rounded-2xl;
    backdrop-filter: blur(5px);
  }

  .content-bg {
    @apply bg-white bg-opacity-80 shadow-md px-8;
  }

  .branding {
    @apply font-bold font-display text-xl transition-all duration-500;
  }

  .branding-top {
    @apply text-2xl;
  }

  .branding:hover {
    @apply text-green-600;
  }

  .nav-button {
    @apply w-8 h-8;
  }

  .nav-items {
    @apply flex space-x-6;
  }
</style>
