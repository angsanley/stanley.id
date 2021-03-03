<template>
  <div class="navbar-container">
    <div class="content">
      <div class="branding">
        <nuxt-link to="/">
          Stanley Ang
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped>
  .navbar-container {
    @apply flex justify-center w-screen;
  }

  .content {
    @apply w-full max-w-7xl h-16 bg-white rounded-b-2xl shadow-md bg-opacity-60 flex items-center px-8;

    backdrop-filter: blur(10px);
  }

  .branding {
    @apply font-bold font-display text-xl transition duration-500;
  }

  .branding:hover {
    @apply text-green-600;
  }
</style>
