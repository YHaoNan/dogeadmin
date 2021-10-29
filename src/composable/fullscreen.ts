import { ref } from "vue";

function openFullScreen() {
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  }
}
function closeFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

export default function useFullScreen() {
  window.onresize = function () {
    isFullScreen.value = document.fullscreenElement != undefined;
  };
  const isFullScreen = ref(document.fullscreen);
  const toggleFullScreen = function () {
    if (!isFullScreen.value) openFullScreen();
    else closeFullScreen();
  };
  return {
    isFullScreen,
    toggleFullScreen,
  };
}
