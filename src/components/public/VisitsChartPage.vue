<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="流量趋势" :force-render="true">
      <div id="visit-amount-chart-container"></div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="访问量" :force-render="true">
      <div id="visit-count-chart-container"></div>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import useVisitcountByMonthChart from "@/composable/visitcount_bymonth_chart";
import useVisitamountByHoursChart from "@/composable/visitamount_by_hours";

const { initVisitcountByMonthChart } = useVisitcountByMonthChart(
  "visit-count-chart-container"
);
const { initVisitamountByHoursChart } = useVisitamountByHoursChart(
  "visit-amount-chart-container"
);

const pageInitialized: Map<string, boolean> = new Map();
onMounted(() => {
  initVisitamountByHoursChart();
  initVisitcountByMonthChart();
});

// const onPageChanged = function (pageKey: string) {
//   if (pageInitialized.get(pageKey)) return;
//   if (pageKey == "1") {
//     initVisitamountByHoursChart();
//     pageInitialized.set(pageKey, true);
//   } else if (pageKey == "2") {
//     initVisitcountByMonthChart();
//     pageInitialized.set(pageKey, true);
//   }
// };
const activeKey = ref("1");
</script>

<style scoped></style>
