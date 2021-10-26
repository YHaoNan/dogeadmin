<template>
  <div id="analyse-page">
    <div id="cards">
      <DataCard
        class="card"
        card-title="访问数"
        card-flag="月"
        card-flag-color="#65B442"
        card-message="$2,000"
        :card-icon="img1"
        card-footer-message="总访问数"
        card-footer-message2="120,000"
      ></DataCard>
      <DataCard
        class="card"
        card-title="访问数"
        card-flag="月"
        card-flag-color="#1ABAF8"
        card-message="$2,000"
        :card-icon="img2"
        card-footer-message="总访问数"
        card-footer-message2="120,000"
      ></DataCard>
      <DataCard
        class="card"
        card-title="访问数"
        card-flag="月"
        card-flag-color="#FFA547"
        card-message="$2,000"
        :card-icon="img1"
        card-footer-message="总访问数"
        card-footer-message2="120,000"
      ></DataCard>
      <DataCard
        class="card"
        card-title="访问数"
        card-flag="月"
        card-flag-color="#541EAB"
        card-message="$2,000"
        :card-icon="img2"
        card-footer-message="总访问数"
        card-footer-message2="120,000"
      ></DataCard>
    </div>

    <a-card id="visit-chart">
      <VisitsChartPage></VisitsChartPage>
    </a-card>

    <div style="height: 1000px"></div>
  </div>
</template>

<script setup lang="ts">
import VisitsChartPage from "@components/public/VisitsChartPage.vue";
import DataCard from "@components/public/DataCard.vue";
import img1 from "@assets/imgs/6.png";
import img2 from "@assets/imgs/11.png";
</script>

<style scoped>
#analyse-page {
  padding: 20px;
  height: 100%;
}
#visit-chart {
  margin-top: 20px;
}
#cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card {
  flex: 1;
  transition: all 0.4s ease;
  margin: 0 10px;
}
.card:first-child {
  margin-left: 0;
}
.card:last-child {
  margin-right: 0;
}

@media screen and (max-width: 880px) {
  #cards {
    flex-direction: column;
  }
  .card {
    margin: 10px 0;
  }
  .card:first-child {
    margin-top: 0;
  }
  .card:last-child {
    margin-bottom: 0;
  }
}
</style>
