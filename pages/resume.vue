<template>
  <div class="container mx-auto">
    🚜 Coming soon
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  name: 'Resume',
  head () {
    return {
      title: 'Resume - Stanley Ang',
      meta: [
        ...this.meta
      ]
    }
  },
  computed: {
    meta () {
      const metaData = {
        type: 'article',
        title: 'Resume - Stanley Ang',
        description: 'Coming soon.'
      }
      return getSiteMeta(metaData)
    }
  }
}
</script>

<style scoped>

</style>
