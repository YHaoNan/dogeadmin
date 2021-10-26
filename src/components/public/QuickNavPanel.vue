<template>
  <a-card title="快捷导航" :bodyStyle="{ padding: 0 }">
    <div class="nav-panel">
      <a-card
        class="nav-item"
        v-for="(nav, index) in quickNav"
        :key="index"
        :hoverable="true"
      >
        <img :src="nav.icon" alt="" />
        <span>{{ nav.title }}</span>
      </a-card>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import useQuickNav from "@/composable/quicknav";
const { quickNav } = useQuickNav();
</script>

<style scoped>
.nav-panel {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.nav-item {
  border-radius: 0;
  width: 33.3333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav-item img {
  display: inline-block;
  width: 1.8em;
  margin-bottom: 6px;
}
</style>
