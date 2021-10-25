<template>
  <div>
    <h1>DASHBOARD</h1>
    <h3>{{ dashStore.state.visitCount }}</h3>
  </div>
</template>

<script setup lang="ts">
import { dashStateKey } from "@/store/dashStore";
import { useStore } from "vuex";

const dashStore = useStore(dashStateKey);
console.log(dashStore.state);
</script>

<style scoped></style>
