<template>
  <div class="content">
    <nav-items class="items" />
  </div>
</template>

<script>
export default {
  name: 'BottomSheetNavContent'
}
</script>

<style scoped>
  .content {
    @apply flex flex-col items-center space-y-8;
  }

  .items {
    @apply flex flex-col items-center text-xl font-medium space-y-6 text-gray-dark;
  }
</style>
