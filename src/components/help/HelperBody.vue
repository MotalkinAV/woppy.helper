<script setup>
import BaseYouTubePlayer from "./BaseYouTubePlayer.vue";
import { _createImgURL } from "../../utils/_createURLs.js"

const props = defineProps({
  helpData: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <div class="offcanvas-body">
    <h3 v-if="helpData && helpData.subtitle" class="mt-4">
      {{ helpData.subtitle }}
    </h3>
    <div
      v-if="helpData && helpData.body"
      class="mt-4"
      v-html="helpData.body"
    ></div>
    <img
      v-if="helpData && helpData.img"
      :src="_createImgURL(helpData.id, helpData.img)"
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
      target="_blank"
    >
      {{ helpData.extraLink }}
    </a>
  </div>
</template>

