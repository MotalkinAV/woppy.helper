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

const isTestBtnActive = ref(false)

watch(showOffcanvas, (value) => {
  document.body.style.overflow = value ? "hidden" : "auto";
});
</script>

<template>
  <div>
    <Teleport to="body">
      <div class="position-absolute fixed-bottom" v-if="isTestBtnActive">
        <BaseWikiButton v-if="!showOffcanvas" v-click-helper="'example'" />
      </div>
      <Transition name="trans-fade">
        <BaseModalMask v-if="showOffcanvas" @click="closeHelp" />
      </Transition>
    </Teleport>

    <Transition name="trans-moveside">
      <div
        v-if="showOffcanvas"
        class="offcanvas offcanvas-end show visible w-100 w-lg-50 px-lg-4 pb-2"
      >
        <div class="offcanvas-header mb-3">
          <div class="py-2">
            <h2 v-if="helpData && helpData.title" class="mb-0 fs-4">
              {{ helpData.title }}
            </h2>
            <h3
              v-if="helpData && helpData.subtitle"
              class="fs-5 mt-2 text-muted opacity-75 fw-normal mb-0"
            >
              {{ helpData.subtitle }}
            </h3>
          </div>
          <button
            type="button"
            class="btn-close text-reset align-self-start mt-1"
            aria-label="Закрыть"
            @click="closeHelp"
          ></button>
        </div>
        <BaseLoader v-if="loadHelper" />
        <template v-else>
          <BaseError v-if="helpError" :error="helpError" />
          <HelperBody v-if="helpData" :help-data="helpData" />
        </template>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.offcanvas {
  z-index: 5000 !important;
}

.trans-fade-enter-active,
.trans-fade-leave-active,
.trans-moveside-enter-active,
.trans-moveside-leave-active {
  transition: all 0.4s ease !important;
}

.trans-moveside-enter-from,
.trans-moveside-leave-to {
  transform: translateX(100%) !important;
}

.trans-fade-enter-from,
.trans-fade-leave-to {
  opacity: 0;
}

@media (min-width: 992px) {
  .w-lg-50 {
    width: 50% !important;
  }
}
</style>
