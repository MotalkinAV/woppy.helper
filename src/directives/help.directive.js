import { useHelperStore } from "../stores/useHelperStore.js";

export default {
  mounted(el, binding) {
    const helperStore = useHelperStore();

    el.addEventListener("click", () => {
      helperStore.openHelpOffcanvas(binding.value);
    });
  },
};
