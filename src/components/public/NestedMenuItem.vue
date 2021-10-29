<template>
  <template v-if="menuItem.children">
    <a-sub-menu :key="menuItem.key">
      <template #icon v-if="menuItem.icon">
        <component :is="menuItem.icon"></component>
      </template>
      <template #title>{{ menuItem.title }}</template>
      <NestedMenuItem
        :key="subItem.key"
        :menu-item="subItem"
        v-for="subItem in menuItem.children"
      ></NestedMenuItem>
    </a-sub-menu>
  </template>
  <template v-else>
    <a-menu-item :key="menuItem.key">
      <template #icon v-if="menuItem.icon">
        <component :is="menuItem.icon"></component>
      </template>
      {{ menuItem.title }}
    </a-menu-item>
  </template>
</template>

<script setup lang="ts">
import { MenuItem } from "@/global/global";
import { PropType } from "vue";
import Icon from "@ant-design/icons-vue";
defineProps({
  menuItem: {
    type: Object as PropType<MenuItem>,
    required: true,
  },
});
</script>

<style scoped></style>
