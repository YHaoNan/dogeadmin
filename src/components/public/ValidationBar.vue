<template>
  <div class="validation-bar">
    <transition name="fade">
      <div v-if="hasError" class="error">{{ errorMessage }}</div>
    </transition>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
defineProps({
  errorMessage: {
    type: String,
    default: "Error",
  },
  hasError: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}
.validation-bar {
  text-align: left;
}
.error {
  color: tomato;
}
</style>
