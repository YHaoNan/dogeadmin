<template>
  <a-menu
    :theme="theme"
    :mode="mode"
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    @select="emitSelect"
  >
    <NestedMenuItem
      v-for="menuItem in menuItems"
      :key="menuItem.key"
      :menu-item="menuItem"
    ></NestedMenuItem>
  </a-menu>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import { MenuItem } from "@/global/global";
import NestedMenuItem from "./NestedMenuItem.vue";

const props = defineProps({
  menuItems: {
    type: Object as PropType<MenuItem[]>,
    required: true,
  },
  theme: {
    type: String,
    default: "dark",
  },
  mode: {
    type: String,
    default: "inline",
  },
  keepOpenOneItem: {
    type: Boolean,
    default: true,
  },
});

const selectedKeys = ref([]);
const openKeys = ref([]);
// const onOpenChange = (_openKeys) => {
//   console.log(openKeys.value);
//   if (props.keepOpenOneItem && openKeys.value.length > 1) {
//     openKeys.value = openKeys.value.splice(0, openKeys.value.length - 1);
//   }
// };

const emit = defineEmits(["select"]);
const emitSelect = (obj) => {
  emit("select", obj);
};
</script>

<style scoped></style>
