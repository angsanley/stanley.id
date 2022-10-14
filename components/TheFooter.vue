<template>
  <footer class="flex flex-col py-8">
    <div class="footer">
      <div class="container mx-auto">
        <div class="flex flex-col space-y-2 w-full lg:w-1/3 text-center lg:text-left">
          <div class="text-2xl font-extrabold">
            Stanley Ang
          </div>
          <p>Let's build stuff together! 🚀</p>
        </div>
        <div class="space-y-2">
          <div class="social-media">
            <a rel="noopener" href="https://www.linkedin.com/in/angsanley/" target="_blank"><client-only><unicon name="linkedin" /></client-only></a>
            <a rel="noopener" href="https://instagram.com/angsanley" target="_blank"><client-only><unicon name="instagram" /></client-only></a>
            <a rel="noopener" href="https://twitter.com/angsanley" target="_blank"><client-only><unicon name="twitter" /></client-only></a>
            <a rel="noopener" href="https://github.com/angsanley" target="_blank"><client-only><unicon name="github" /></client-only></a>
          </div>
          <div>Copyright &copy; 2022 Stanley Ang.</div>
        </div>
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
  @apply text-sm h-full;
}

.container {
  @apply flex flex-col lg:flex-row h-full justify-evenly lg:justify-between items-center space-y-6 lg:space-y-0;
}

.social-media {
  @apply flex space-x-2 fill-current justify-center lg:justify-end;
}

.social-media > a {
  @apply transition duration-300 ease-in-out;
}

.social-media > a:hover {
  @apply text-green;
}
</style>
