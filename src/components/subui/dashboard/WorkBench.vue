<template>
  <div id="workbench">
    <BigUserComponent
      :todo="{ finished: 2, total: 10 }"
      :projects="10"
      :teams="315"
    ></BigUserComponent>
    <div class="main-container">
      <div class="main-left">
        <ProjectPanel id="project-panel"></ProjectPanel>
        <NewsPanel id="news-panel"></NewsPanel>
      </div>
      <div style="width: 20px"></div>
      <div class="main-right">
        <QuickNavPanel></QuickNavPanel>
        <a-card class="img-banner-panel">
          <img src="@assets/svg/illustration.8e82152d.svg" alt="" />
        </a-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BigUserComponent from "@/components/public/BigUserComponent.vue";
import ProjectPanel from "@/components/public/ProjectPanel.vue";
import NewsPanel from "@/components/public/NewsPanel.vue";
import QuickNavPanel from "@/components/public/QuickNavPanel.vue";
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  padding: 20px;
}
.main-left {
  flex: 8;
}
.main-right {
  flex: 4;
}
#news-panel {
  margin-top: 20px;
}
.img-banner-panel {
  text-align: center;
  margin-top: 20px;
  padding: 20px;
}
.img-banner-panel img {
  display: inline-block;
}
@media screen and (max-width: 990px) {
  .main-container {
    flex-direction: column;
  }
  .main-left {
    flex: 1;
  }
  .main-right {
    flex: 1;
    margin-top: 20px;
  }
  .img-banner-panel img {
    max-height: 100px;
  }
}
</style>
