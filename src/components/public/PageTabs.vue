<template>
  <a-tabs
    v-model:activeKey="activePaneKey"
    type="editable-card"
    @edit="onPaneEdit"
    @change="onPaneChanged"
  >
    <a-tab-pane
      v-for="pane in panes"
      :key="pane.key"
      :tab="pane.title"
      :closable="pane.closable"
    >
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import usePageTabs from "@/composable/pagetabs";
const { activePaneKey, panes, onPaneChanged, onPaneEdit } = usePageTabs();
</script>

<style scoped></style>
