<template>
  <div class="navbar-container">
    <div class="content" :class="{ 'content-bg' : scrollPosition >= 10, '!text-white' : scrollPosition < 10 && !noHero }">
      <div class="container mx-auto flex justify-between items-center h-full">
        <div class="nav-button lg:hidden" />
        <nuxt-link to="/">
          <div class="branding" :class="{ 'branding-top': scrollPosition < 10 }">
            <img class="icon" src="@/assets/icons/stanley.png">
            <span>Stanley Ang</span>
          </div>
        </nuxt-link>

        <div class="hidden lg:block">
          <nav-items class="nav-items" :class="{ '!text-white' : scrollPosition < 10 && !noHero }" />
        </div>

        <button class="nav-button" @click="openBottomSheet()">
          <client-only><unicon name="bars" :fill="scrollPosition < 10 && !noHero && 'white'" /></client-only>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavItems from '~/components/NavItems'
export default {
  name: 'TheNavbar',
  components: { NavItems },
  props: {
    noHero: {
      type: Boolean,
      default: false
    }
  },
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
    @apply w-full h-24 bg-opacity-0 transition-all;
  }

  .content-bg {
    @apply bg-white bg-opacity-90 backdrop-blur-xl h-20 text-gray-dark;
  }

  .branding {
    @apply flex items-center font-bold font-display text-xl transition-all;
  }

  .icon {
    @apply h-6 pr-2;
  }

  .branding-top {
    @apply text-2xl;
  }

  .nav-button {
    @apply w-8 h-8 flex justify-center items-center fill-current text-gray-dark lg:hidden;
  }

  .nav-items {
    @apply flex font-medium text-gray-dark text-lg lg:w-full;
  }
</style>
