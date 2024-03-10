<template>
  <div class="modal-mask"></div>
</template>

<style scoped>
.modal-mask {
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  overflow-y: hidden;
}
</style>