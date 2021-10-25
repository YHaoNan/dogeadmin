<template>
  <div class="simple-top-bar">
    <div class="icon-and-title">
      <img src="@assets/imgs/doge-icon-21.png" alt="" />
      <h2 class="web-title">DOGE Admin</h2>
    </div>
    <LanguageSelector class="language-selector" />
  </div>
</template>

<script setup lang="ts">
import LanguageSelector from "@/components/public/LanguageSelector.vue";
</script>

<style scoped>
.simple-top-bar {
  display: flex;
  flex-direction: row;
}
.icon-and-title {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icon-and-title img {
  display: inline-block;
  width: 40px;
  margin-right: 10px;
}
.icon-and-title h2 {
  color: white;
  font-size: 1.4em;
}
</style>
