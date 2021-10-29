import { ref, onMounted } from "vue";
export default function useAutoChangeDrawerAndSider() {
  const isDrawerOrSiderShowing = ref(true);

  const showSiderThres = 1000;

  const isHasEnoughWidthToShowSider = ref(window.innerWidth >= showSiderThres);

  onMounted(() => {
    window.onresize = function () {
      isHasEnoughWidthToShowSider.value = window.innerWidth >= showSiderThres;
    };
  });

  return { isDrawerOrSiderShowing, isHasEnoughWidthToShowSider };
}
