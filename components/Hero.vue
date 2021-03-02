<template>
  <div class="hero">
    <div class="glass">
      <div class="content">
        <div>
          <h1>
            <slot />
          </h1>
        </div>
        <div>
          <img :src="imageSrc" :alt="imageAlt">
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
    height: 80vh;
    width: 100vw;
  }

  .glass {
    @apply w-full h-full shadow-xl bg-opacity-50 bg-gray-200 rounded-b-3xl flex justify-center items-end py-32 px-8;
  }

  strong {
    @apply text-green-500 font-extrabold;
  }

  .content {
    @apply container flex flex-col-reverse justify-between space-y-8 space-y-reverse;
  }

  .content > div {
    @apply w-full text-center;
  }

  @screen lg {
    .content {
      @apply flex-row space-x-8;
    }

    .content > div {
      @apply w-full text-left;
    }
  }
</style>
