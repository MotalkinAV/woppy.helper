<script setup>
import BaseYouTubePlayer from "./BaseYouTubePlayer.vue";

const props = defineProps({
  helpData: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <div class="offcanvas-body">
    <div
      v-if="helpData && helpData.body"
      class=""
      v-html="helpData.body"
    ></div>
    <img
      v-if="helpData && helpData.img"
      :src="helpData.img"
      class="rounded w-100 img-fluid mt-4"
      :alt="helpData.img"
    />
    <BaseYouTubePlayer
      v-if="helpData && helpData.youtubeLink"
      :youtubeLink="helpData.youtubeLink"
    />
    <a
      v-if="helpData && helpData.extraLink"
      class="btn btn-primary mt-4 w-100"
      :href="helpData.extraLink"
    >
      Подробнее
    </a>
  </div>
</template>

