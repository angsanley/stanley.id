<template>
  <nuxt-link v-if="!external" :to="to" class="link">
    <slot />
  </nuxt-link>
  <a v-else rel="noopener" :href="to" class="link" target="_blank">
    <slot /> <span class="material-icons">&#xE895;</span>
  </a>
</template>

<script>
export default {
  name: 'Hyperlink',
  props: {
    external: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .link {
    @apply text-orange transition duration-200 ease-in-out;
  }

  .material-icons {
    @apply align-middle;
  }

  .link:hover {
    @apply text-orange-light;
  }
</style>
