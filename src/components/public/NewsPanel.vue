<template>
  <a-card title="动态">
    <template #extra>
      <a href="#">更多</a>
    </template>
    <a-list :bordered="false" :data-source="news">
      <template #renderItem="{ item }">
        <a-list-item class="news-item">
          <img class="news-avater" :src="item.avater" alt="" />
          <div class="news-content">
            <div class="news-title">{{ item.action }}</div>
            <div class="news-time">{{ item.time }}</div>
          </div>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<script setup lang="ts">
import useNews from "@/composable/news";

const { news } = useNews();
</script>

<style scoped>
.news-avater {
  display: inline-block;
  width: 40px;
  border-radius: 360px;
}
.news-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.news-content {
  margin-left: 20px;
}
.news-time {
  color: #8e8e8e;
}
</style>
