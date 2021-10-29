<template>
  <NestedMenu :menu-items="pageItems" @select="onPageSelected"></NestedMenu>
</template>

<script setup lang="ts">
import usePageMenus from "@/composable/pagemenus";
import NestedMenu from "./NestedMenu.vue";
const { pageItems, onPageSelected } = usePageMenus();
</script>

<style scoped>
.menu-tree-node,
.menu-tree-leaf {
  color: white;
  display: inline-block;
  height: 4em;
  width: 100%;
}
</style>
