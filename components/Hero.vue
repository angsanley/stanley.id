<template>
  <!--  -mt-24 for resetting margin from default layout-->
  <div class="flex w-full mb-8 -mt-24">
    <div class="hero">
      <div class="glass">
        <div class="container content" :class="{ reversed }">
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
  name: 'Hero',
  props: {
    reversed: {
      type: Boolean,
      default: true
    }
  }
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
    @apply w-full h-full shadow-inner bg-opacity-50 rounded-b-3xl flex justify-center items-end pt-32 pb-16 lg:pb-32;
  }

  strong {
    @apply text-green font-extrabold;
  }

  .content {
    @apply flex flex-col justify-between space-y-8 items-center;
  }

  .reversed {
    @apply flex-col-reverse space-y-reverse space-y-8;
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
