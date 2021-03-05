<template>
  <div>
    <div class="sheet-container">
      <div class="bottom-sheet" :class="{ 'sheet-visible': isOpened }">
        <div class="container mx-auto">
          <div class="px-4 py-6">
            <div :is="header" class="header" />
            <div :is="body" class="body" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="isOpened" class="overlay" @click="hideBottomSheet()" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'BottomSheet',
  computed: {
    isOpened () {
      return this.$store.state.bottomSheet.bottomSheetVisible
    },
    header () {
      return this.$store.state.bottomSheet.bottomSheetHeader
    },
    body () {
      return this.$store.state.bottomSheet.bottomSheetContent
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.$store.commit('bottomSheet/showBottomSheet', {
    //     header: require('../components/Logo').default,
    //     body: require('../components/Logo').default
    //   })
    // }, 1000)
  },
  methods: {
    ...mapMutations({
      hideBottomSheet: 'bottomSheet/hideBottomSheet'
    })
  }

}
</script>

<style scoped>
  .sheet-container {
    @apply flex justify-center;
  }

  .bottom-sheet {
    @apply fixed z-50 -bottom-full bg-white w-screen rounded-t-3xl shadow-xl transition-all duration-500 ease-in-out overflow-scroll;
    min-height: 25vh;
    max-height: 90vh;
    max-width: 40rem;
  }

  .sheet-visible {
    @apply bottom-0;
  }

  .overlay {
    @apply fixed top-0 z-40 bg-black opacity-25 w-screen h-screen transition-all duration-500;
  }

  .header {
    @apply flex justify-center font-bold text-xl mb-4;
  }

  .fade-enter-active, .fade-leave-active {
    @apply transition-opacity duration-200 ease-in-out
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    @apply opacity-0
  }
</style>
