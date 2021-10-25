<template>
  <div class="button-group"><slot></slot></div>
</template>

<script setup lang="ts">
defineProps({
  direction: {
    validator (v: string): boolean {
      return ['row', 'column'].includes(v)
    },
    default: 'row'
  },
})
</script>

<style scoped>
.button-group {
  display: flex;
  flex-direction: v-bind(direction);
}
</style>