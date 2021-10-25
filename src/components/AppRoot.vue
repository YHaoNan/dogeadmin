<template>
  <MainTopBar></MainTopBar>
  <router-view></router-view>
</template>

<script setup lang="ts">
import MainTopBar from "./public/MainTopBar.vue";
import { userStateKey } from "@/store/userStore";
import { useStore } from "vuex";

const userStore = useStore(userStateKey);
</script>

<style scoped></style>
