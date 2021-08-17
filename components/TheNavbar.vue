<template>
  <div class="navbar-container">
    <div class="content" :class="{ 'content-bg' : scrollPosition >= 10 }">
      <div class="nav-button lg:hidden" />

      <nuxt-link to="/">
        <div class="branding" :class="{ 'branding-top': scrollPosition < 10 }">
          <img class="icon" src="@/assets/icons/stanley.png">
          <span>Stanley Ang</span>
        </div>
      </nuxt-link>

      <div class="hidden lg:block">
        <nav-items class="nav-items" />
      </div>

      <button class="nav-button" @click="openBottomSheet()">
        <client-only><unicon name="bars" /></client-only>
      </button>
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
    },

    openBottomSheet () {
      this.$store.commit('bottomSheet/showBottomSheet', require('../components/BottomSheetNavContent').default)
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
    @apply flex items-center font-bold font-display text-xl transition-all duration-500;
  }

  .icon {
    @apply h-6 pr-2;
  }

  .branding-top {
    @apply text-2xl;
  }

  .branding:hover {
    @apply text-green;
  }

  .nav-button {
    @apply w-8 h-8 flex justify-center items-center fill-current text-gray-dark lg:hidden;
  }

  .nav-items {
    @apply flex font-medium text-gray-dark text-lg;
  }
</style>
