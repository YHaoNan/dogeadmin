<script setup lang="ts">
import { DatePicker } from 'ant-design-vue'
</script>

<template>
  <h2>{{ $route.params.msg }}</h2>
  <date-picker></date-picker>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
