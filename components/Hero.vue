<template>
  <div class="hero">
    <div class="glass">
      <div class="content">
        <div class="content-container">
          <slot />
        </div>

        <div class="image-container">
          <img class="hero-image" :src="imageSrc" :alt="imageAlt">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    imageSrc: {
      type: String,
      default: ''
    },
    imageAlt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .hero {
    @apply rounded-b-3xl;
    background: url("../assets/bg-radial.svg") no-repeat right top;
    width: 100vw;
  }

  .glass {
    @apply w-full h-full shadow-xl bg-opacity-50 bg-gray-200 rounded-b-3xl flex justify-center items-end py-32 px-8 mb-8;
    min-height: 80vh;
  }

  strong {
    @apply text-green-500 font-extrabold;
  }

  .content {
    @apply container flex flex-col-reverse justify-between space-y-8 space-y-reverse items-center;
  }

  .content > .content-container {
    @apply text-center;
  }

  .image-container {
    height: 24rem;
  }

  .hero-image {
    @apply object-cover rounded-3xl w-full h-full;
  }

  @screen lg {
    .content {
      @apply flex-row space-x-8 space-y-0 items-end;
    }

    .content > .content-container {
      @apply text-left w-1/2;
    }

    .content > .image-container {
      @apply w-1/2;
    }

    .hero-image {
      @apply w-full;
    }
  }
</style>
