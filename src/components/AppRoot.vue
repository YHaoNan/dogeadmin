<template>
  <div>{{ userStore.state.user?.username }}</div>
</template>

<script setup lang="ts">
import { userStateKey } from "@/store/userStore";
import { useStore } from "vuex";

const userStore = useStore(userStateKey);
console.log(userStore.state);
</script>

<style scoped></style>
