<template>
  <a-tabs
    class="page-tabs"
    v-model:activeKey="activePaneKey"
    type="editable-card"
    :tabBarStyle="{ margin: 0 }"
    size="small"
    hideAdd
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

<style scoped>
.page-tabs {
  background-color: white;
}
</style>
