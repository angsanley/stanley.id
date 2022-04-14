<template>
  <footer class="flex flex-col mt-36 h-64">
    <div class="wave-pattern h-20"></div>
    <div class="footer">
      <div class="container mx-auto">
        <div class="flex flex-col space-y-2">
          <div class="text-2xl font-extrabold">Stanley Ang</div>
          <p>Let's build stuff together! 🚀</p>
        </div>
        <div>
          Copyright &copy; 2021 Stanley Ang.
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
  @apply bg-white text-sm text-gray-dark h-full;
}

.wave-pattern {
  background: url("/img/wave-tile-footer.png") repeat-x;
  background-position: bottom;
}

.container {
  @apply flex flex-col lg:flex-row h-full justify-evenly lg:justify-between items-center;
}

.social-media {
  @apply flex space-x-2 fill-current;
}

.social-media > a {
  @apply transition duration-300 ease-in-out;
}

.social-media > a:hover {
  @apply text-green;
}
</style>
