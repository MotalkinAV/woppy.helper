import { ref, computed } from "vue";
import { defineStore } from "pinia";
import _createFetchURL from "../utils/_create.fetch.url.js";
import _fetchHelp from "../utils/_fetch.help.js";

export const useHelperStore = defineStore("helper", () => {
  const helpData = ref(null);
  const loadHelper = ref(true);
  const showOffcanvas = ref(false);
  const helpError = ref(null);

  function setHelpData(value) {
    helpData.value = value;
  }

  function clearHelpData() {
    helpData.value = null;
  }

  function setHelpError(error) {
    helpError.value = error;
  }

  function clearHelpError() {
    helpError.value = null;
  }

  function setLoadHelper(value) {
    loadHelper.value = value;
  }

  function setShowOffcanvas(value) {
    showOffcanvas.value = value;
  }

  function closeHelpOffcanvas() {
    setShowOffcanvas(false);
    clearHelpData();
    clearHelpError();
  }

  async function openHelpOffcanvas(nid) {
    try {
      setShowOffcanvas(true);
      setLoadHelper(true);
      const data = await _fetchHelp(_createFetchURL(nid));

      if (data.items.length) {
        setHelpData(...data.items);
      }
      if (!data.items.length) {
        throw new Error('Запись не найдена');
      }

      setLoadHelper(false);
    } catch (error) {
      setHelpError(error)
      setLoadHelper(false)
    }
  }

  return {
    helpData,
    loadHelper,
    showOffcanvas,
    helpError,
    openHelpOffcanvas,
    closeHelpOffcanvas,
  };
});
