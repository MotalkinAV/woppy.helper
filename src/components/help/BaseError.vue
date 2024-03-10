<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <div class="offcanvas-body">
    <div class="card w-100 text-center border-danger">
      <p class="text-uppercase text-danger fw-bold mt-3">
        {{ `ошибка: ${error.message}` }}
      </p>
    </div>
  </div>
</template>

