<template>
  <a-card class="data-card" :body-style="{ padding: '0.6em 1em' }">
    <div class="card-header">
      <span class="card-title">{{ cardTitle }}</span>
      <span class="card-flag">
        <span class="card-flag-bg"></span>
        {{ cardFlag }}
      </span>
    </div>
    <a-divider class="card-divider"></a-divider>
    <div class="card-content">
      <span class="card-message">{{ cardMessage }}</span>
      <img class="card-icon" :src="cardIcon" alt="" />
    </div>
    <div class="card-footer">
      <span class="card-footer-left">{{ cardFooterMessage }}</span>
      <span class="card-footer-right">{{ cardFooterMessage2 }}</span>
    </div>
  </a-card>
</template>

<script setup lang="ts">
const props = defineProps({
  cardTitle: String,
  cardFlag: String,
  cardMessage: String,
  cardIcon: String,
  cardFooterMessage: String,
  cardFooterMessage2: String,
  cardFlagColor: String,
});
</script>

<style scoped>
.card-header {
  display: flex;
}
.card-title {
  flex: 1;
}

.card-flag {
  width: 2em;
  height: 2em;
  line-height: 2em;
  font-size: 0.8em;
  text-align: center;
  position: relative;
  color: v-bind(cardFlagColor);
  border: v-bind(cardFlagColor) 1px solid;
  border-radius: 0.2em;
}
.card-flag-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: v-bind(cardFlagColor);
  opacity: 0.5;
  border-radius: 0.2em;
}
.card-divider {
  margin: 10px 0;
}
.card-content {
  display: flex;
  flex-direction: row;
  margin: 0 1.6em;
  margin-top: 20px;
}
.card-message {
  flex: 1;
  font-size: 1.8em;
}
.card-icon {
  margin-left: 10px;
}
.card-footer {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

.card-footer-left {
  flex: 1;
}
</style>
