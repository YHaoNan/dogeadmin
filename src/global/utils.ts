import { Ref } from "vue";
function delaySetRef<T>(ref: Ref<T>, value: T, delay: number) {
  setTimeout(() => {
    ref.value = value;
  }, delay);
}

export { delaySetRef };
