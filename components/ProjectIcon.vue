<template>
  <nuxt-link :to="to">
    <div class="item">
      <img class="icon" :src="iconSrc">
      <span class="title">{{ title }}</span>
      <span class="description">{{ description }}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProjectIcon',
  props: {
    iconSrc: {
      type: String,
      default: ''
    },
    to: {
      type: [Object, String],
      default: '#'
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .item {
    @apply flex flex-col items-center transition duration-300 ease-in-out;
  }

  .icon {
    @apply w-full bg-cover bg-center rounded-3xl transition duration-300 ease-in-out;
    max-width: 8rem;
  }

  .title {
    @apply text-center font-bold pt-4 text-xl font-display;
  }

  .description {
    @apply text-center;
  }

  .item:hover .icon {
    @apply shadow-xl;
  }

  .item:hover {
    @apply  transform -translate-y-1;
  }
</style>
