<template>
  <a-card class="project-panel" title="项目" :bodyStyle="{ padding: 0 }">
    <template #extra>
      <a href="#">更多</a>
    </template>
    <div class="projects">
      <a-card
        :hoverable="true"
        class="project-card"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="project-title">
          <img class="project-icon" :src="project.icon" />
          <span class="project-name">{{ project.name }}</span>
        </div>
        <div class="project-description">
          {{ project.description }}
        </div>
        <div class="project-other-info">
          <span class="project-group">{{ project.group }}</span>
          <span class="project-create-time">{{ project.createTime }}</span>
        </div>
      </a-card>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import useProjects from "@/composable/projects";
const { projects } = useProjects();
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.project-card {
  border-radius: 0;
  width: 33.3333333333%;
}
.project-name {
  font-size: 1.4em;
  margin-left: 10px;
}
.project-description {
  color: #8e8e8e;
  margin-top: 10px;
}
.project-other-info {
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  color: #8e8e8e;
}

.project-group {
  flex: 1;
}
@media screen and (max-width: 770px) {
  .projects {
    flex-direction: column;
  }
  .project-card {
    width: 100%;
  }
}
</style>
