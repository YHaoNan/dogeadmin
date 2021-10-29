<template>
  <div class="simple-top-bar">
    <IconTitleBanner id="icon-and-title" />
    <LanguageSelector class="language-selector" />
  </div>
</template>

<script setup lang="ts">
import LanguageSelector from "@/components/public/LanguageSelector.vue";
import IconTitleBanner from "@/components/public/IconTitleBanner.vue";
</script>

<style scoped>
.simple-top-bar {
  display: flex;
  flex-direction: row;
}
#icon-and-title {
  flex: 1;
}
</style>
