<template>
  <div class="icon-and-title">
    <img src="@assets/imgs/doge-icon-21.png" alt="" />
    <h2 v-if="showTitle" class="web-title">DOGE Admin</h2>
  </div>
</template>

<script setup lang="ts">
defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.icon-and-title {
  display: flex;
  height: 40px;
  flex-direction: row;
  align-items: center;
}
.icon-and-title img {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.icon-and-title h2 {
  display: inline-block;
  color: white;
  font-size: 1.4em;
  word-break: keep-all; /* 不换行 */
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow: ellipsis;
}
</style>
