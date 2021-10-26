<template>
  <div class="big-user-component">
    <img class="avater" :src="avater" alt="" />
    <div class="main-container">
      <div class="title">
        {{ title }}
      </div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
    <div class="schedules-container">
      <div class="schedule-item">
        <div class="schedule-title">待办</div>
        <div class="schedule-info">{{ todo.finished }} / {{ todo.total }}</div>
      </div>
      <div class="schedule-item">
        <div class="schedule-title">项目</div>
        <div class="schedule-info">
          {{ projects }}
        </div>
      </div>
      <div class="schedule-item">
        <div class="schedule-title">团队</div>
        <div class="schedule-info">
          {{ teams }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import defaultIcon from "@assets/imgs/g.jfif?url";
import { PropType, computed } from "vue";
interface Todo {
  finished: number;
  total: number;
}
const props = defineProps({
  avater: {
    type: String,
    default: defaultIcon,
  },
  username: {
    type: String,
    default: "NONAME",
  },
  subtitle: {
    type: String,
    default: "不要等待机会，而要创造机会。",
  },
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
  projects: {
    type: Number,
    require: true,
  },
  teams: {
    type: Number,
    require: true,
  },
});

const title = computed(() => {
  return `早安，${props.username}，开始新一天的工作吧！`;
});
</script>

<style scoped>
.big-user-component {
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  padding-top: 30px;
}
.avater {
  display: inline-block;
  width: 60px;
  border-radius: 360px;
}
.main-container {
  margin-left: 20px;
  flex: 1;
}
.title {
  font-size: 1.4em;
}
.subtitle {
  color: #8e8e8e;
}
.schedules-container {
  display: flex;
  flex-direction: row;
  text-align: right;
}
.schedule-item {
  margin: 0px 20px;
}
.schedule-title {
  color: #8e8e8e;
}
.schedule-info {
  font-size: 1.4em;
}
@media screen and (max-width: 990px) {
  .big-user-component {
    flex-direction: column;
  }
  .title {
    text-align: center;
    font-size: 1.2em;
  }
  .subtitle {
    text-align: center;
  }
  .main-container {
    margin-top: 10px;
  }
  .schedules-container {
    margin-top: 10px;
  }
  .schedule-item {
    text-align: center;
  }
}
</style>
