<script setup>
import { ref, onMounted, defineProps, onUnmounted } from "vue";
import { _createVideoURL } from "../../utils/_createURLs.js";

const props = defineProps({
  youtubeLink: {
    type: String,
    default: "",
  },
});

const youtubeURL = ref("");

function setYoutubeURL(value) {
  youtubeURL.value = value;
}

onMounted(() => {
  setYoutubeURL(_createVideoURL(props.youtubeLink));
});
onUnmounted(() => {
  setYoutubeURL("");
});
</script>

<template>
  <div class="ratio ratio-16x9 rounded mt-4 w-100">
    <iframe
      id="ytplayer"
      type="text/html"
      class="rounded bg-dark"
      :src="youtubeURL"
      frameborder="0"
    />
  </div>
</template>
