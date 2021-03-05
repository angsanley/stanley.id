<template>
  <footer class="footer">
    <div class="container mx-auto">
      <div class="social-media">
        <a href="#"><client-only><unicon name="linkedin" /></client-only></a>
        <a href="#"><client-only><unicon name="instagram" /></client-only></a>
        <a href="#"><client-only><unicon name="twitter" /></client-only></a>
        <a href="#"><client-only><unicon name="github" /></client-only></a>
      </div>
      <div>
        Copyright &copy; 2021 Stanley Ang.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
  .footer {
    @apply mt-16 h-36 bg-gray-100 text-sm;
  }

  .container {
    @apply flex flex-col lg:flex-row h-full justify-around lg:justify-between items-center;
  }

  .social-media {
    @apply flex space-x-2 fill-current;
  }

  .social-media > a {
    @apply transition duration-300 ease-in-out;
  }

  .social-media > a:hover {
    @apply text-green-600;
  }
</style>
