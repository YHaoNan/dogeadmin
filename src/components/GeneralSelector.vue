<template>
  <div class="language-selector">
    <a-dropdown>
      <slot></slot>
      <template #overlay>
        <a-menu>
          <a-menu-item
            v-for="option in options"
            :key="option.id"
            :disabled="option.disabled"
            @click="select(option.value)"
          >
            <span :class="{ active: option.value == modelValue }">
              {{ option.label }}
            </span>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
const props = defineProps({
  options: Object,
  modelValue: String,
});
const { modelValue } = toRefs(props);

const select = function (value: string) {
  emit("update:modelValue", value);
  emit("select", value);
};

const emit = defineEmits(["select", "update:modelValue"]);
</script>

<style scoped>
.active {
  color: #40a9ff;
}
</style>
