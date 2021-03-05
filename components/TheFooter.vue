<template>
  <footer class="footer">
    <div class="container mx-auto">
      <div class="social-media">
        <a href="#"><client-only><unicon name="linkedin" /></client-only></a>
        <a href="#"><client-only><unicon name="instagram" /></client-only></a>
        <a href="#"><client-only><unicon name="twitter" /></client-only></a>
        <a href="#"><client-only><unicon name="github" /></client-only></a>
      </div>
      <div class="footer-content">
        <div>
          <github-button href="https://github.com/angsanley/stanley.id" data-icon="octicon-star" data-show-count="true" aria-label="Star angsanley/stanley.id on GitHub">
            Star
          </github-button>
          <github-button href="https://github.com/angsanley/stanley.id/fork" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork angsanley/stanley.id on GitHub">
            Fork
          </github-button>
        </div>
        <div>Copyright &copy; 2021 Stanley Ang.</div>
      </div>
    </div>
  </footer>
</template>

<script>
import GithubButton from 'vue-github-button'
export default {
  name: 'TheFooter',
  components: { GithubButton }
}
</script>

<style scoped>
  .footer {
    @apply mt-16 h-36 bg-gray-100 text-sm;
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
    @apply text-green-600;
  }

  .footer-content {
    @apply flex flex-col text-center lg:text-right;
  }
</style>
