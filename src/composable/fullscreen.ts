import { ref } from "vue";

function getFullScreen() {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement
  );
}
function openFullScreen() {
  if (document.requestFullscreen) {
    document.requestFullscreen();
  } else if (document.mozRequestFullScreen) {
    document.mozRequestFullScreen();
  } else if (document.webkitRequestFullscreen) {
    document.webkitRequestFullscreen();
  } else if (document.msRequestFullscreen) {
    document.msRequestFullscreen();
  }
}
function closeFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

export default function useFullScreen() {
  const isFullScreen = ref(getFullScreen());
  const toggleFullScreen = function () {
    isFullScreen.value = !isFullScreen.value;
    // if (isFullScreen.value) openFullScreen(); else closeFullScreen();
  };
  return {
    isFullScreen,
    toggleFullScreen,
  };
}
