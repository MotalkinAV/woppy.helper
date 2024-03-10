<script setup>
import {
  ref,
  onMounted,
  defineProps,
  onUpdated,
  onUnmounted,
  onBeforeUnmount,
  onBeforeMount,
} from "vue";

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

function changeVideoURL(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|^)([^"&?\/\s]{11})/
  );
  return `https://www.youtube.com/embed/${match ? match[1] : null}`;
}

onMounted(() => {
  setYoutubeURL(changeVideoURL(props.youtubeLink));
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
      class="rounded"
      :src="youtubeURL"
      frameborder="0"
    />
  </div>
</template>
