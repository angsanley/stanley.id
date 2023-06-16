<template>
  <div class="tile-bg min-h-[46rem] h-full relative items-center flex text-white">
    <slot />
    <div class="wave-pattern h-20 absolute bottom-0 w-full" />
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    reversed: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    this.$store.commit('navbarConfig/setNoHero', false)
  }
}
</script>

<style scoped>
.wave-pattern {
  background: url("/img/wave-tile-footer.png") repeat-x;
  background-position: center bottom;
  background-size: 64rem;

  /* Workaround for Windows scaling where sometimes there's 1px gap */
  margin-bottom: -1px;
}

.tile-bg {
  background: url('/img/bg-tile-green.jpg');
}
</style>
