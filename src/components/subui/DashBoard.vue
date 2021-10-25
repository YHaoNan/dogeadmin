<template>
  <div id="dashboard">
    <h1>DASHBOARD</h1>
    <a-card>
      <VisitsChartPage></VisitsChartPage>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import VisitsChartPage from "../public/VisitsChartPage.vue";
</script>

<style scoped>
#dashboard {
  padding: 20px;
  background-color: #f0f2f5;
  height: 100%;
}
</style>
