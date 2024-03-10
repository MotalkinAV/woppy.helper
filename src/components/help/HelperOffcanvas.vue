<script setup>
import BaseLoader from "./BaseLoader.vue";
import BaseWikiButton from "./BaseWikiButton.vue";
import BaseModalMask from "./BaseModalMask.vue";
import BaseError from "./BaseError.vue";
import HelperBody from "./HelperBody.vue";
import { storeToRefs } from "pinia";
import { useHelperStore } from "../../stores/useHelperStore.js";
import { ref, watch } from "vue";
import vClickHelper from "../../directives/help.directive.js";

const helperStore = useHelperStore();

const { showOffcanvas, loadHelper, helpData, helpError } =
  storeToRefs(helperStore);

const closeHelp = helperStore.closeHelpOffcanvas;

watch(showOffcanvas, (value) => {
  document.body.style.overflow = value ? "hidden" : "auto";
});
</script>

<template>
  <div>
    <Teleport v-if="!showOffcanvas" to="body">
      <div class="position-absolute fixed-bottom">
        <BaseWikiButton v-click-helper="'example'" />
      </div>
    </Teleport>

    <Teleport v-if="showOffcanvas" to="body">
      <BaseModalMask @click="closeHelp" />
    </Teleport>

    <Transition name="trans-moveside">
      <div
        v-if="showOffcanvas"
        class="offcanvas offcanvas-end show visible w-90 w-lg-50"
      >
        <div class="offcanvas-header">
          <div>
            <h2 v-if="helpData && helpData.title" class="mb-0">
              {{ helpData.title }}
            </h2>
          </div>
          <button
            type="button"
            class="btn-close text-reset my-1"
            aria-label="Закрыть"
            @click="closeHelp"
          ></button>
        </div>
        <BaseLoader v-if="loadHelper" />
        <BaseError v-if="helpError" :error="helpError"/>
        <HelperBody v-if="helpData" :helpData="helpData" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trans-moveside-enter-active,
.trans-moveside-leave-active {
  transition: all 0.5s ease;
}

.trans-moveside-enter-from,
.trans-moveside-leave-to {
  transform: translateX(100%) !important;
}

@media (min-width: 992px) {
  .w-lg-50 {
    width: 50% !important;
  }
}
</style>
