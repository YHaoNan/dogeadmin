<template>
  <div class="small-user-component">
    <img class="user-avater" :src="avater" alt="" />
    <span>{{ username }}</span>
  </div>
</template>

<script setup lang="ts">
import defaultIcon from "@assets/imgs/g.jfif?url";
defineProps({
  avater: {
    type: String,
    default: defaultIcon,
  },
  username: {
    type: String,
    default: "NONAME",
  },
});
</script>

<style scoped>
.small-user-component {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  transition: all 0.4s ease;
  height: 100%;
  cursor: pointer;
}
.small-user-component:hover {
  background-color: #eee;
}
.user-avater {
  display: inline-block;
  width: 26px;
  margin-right: 14px;
  border-radius: 360px;
}
</style>
