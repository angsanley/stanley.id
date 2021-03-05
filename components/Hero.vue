<template>
  <!--  -mt-24 for resetting margin from default layout-->
  <div class="flex w-full mb-8 -mt-24">
    <div class="hero">
      <div class="glass">
        <div class="container content">
          <div class="content-container">
            <slot name="left" />
          </div>

          <div class="content-container">
            <slot name="right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
  .hero {
    @apply rounded-b-3xl;
    background: url("../assets/bg-radial.svg") no-repeat right top fixed;
    background-size: cover;
    width: 100vw;
  }

  .glass {
    @apply w-full h-full shadow-inner bg-opacity-50 bg-gray-200 rounded-b-3xl flex justify-center items-end pt-32 pb-16 lg:pb-32;
  }

  strong {
    @apply text-green-500 font-extrabold;
  }

  .content {
    @apply flex flex-col-reverse justify-between space-y-8 space-y-reverse items-center;
  }

  .content > .content-container {
    @apply text-center;
  }

  @screen lg {
    .hero {
      backdrop-filter: blur(10px);
    }

    .content {
      @apply flex-row space-x-8 space-y-0 items-end;
    }

    .content > .content-container {
      @apply text-left w-1/2;
    }
  }
</style>
