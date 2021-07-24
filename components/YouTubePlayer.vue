<template>
  <div class="video-container">
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${id}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: 'YouTubePlayer',
  props: {
    id: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .video-container iframe {
    @apply rounded-2xl;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
