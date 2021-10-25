<template>
  <div class="main-top-bar">
    <a-breadcrumb class="breadcrumb" :routes="currentRoutes">
      <template #itemRender="{ route, routes, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="`/${paths[paths.length - 1]}`">
          {{ route.breadcrumbName }}
        </router-link>
      </template>
    </a-breadcrumb>
    <div class="option-btns">
      <SearchOutlined class="option-btn" />
      <MessageOutlined class="option-btn" />
      <FullscreenOutlined
        v-if="!isFullScreen"
        @click="toggleFullScreen"
        class="option-btn"
      />
      <FullscreenExitOutlined
        v-if="isFullScreen"
        @click="toggleFullScreen"
        class="option-btn"
      />
      <LanguageSelector color="black" class="option-btn" />
    </div>
    <SmallUserComponent />
    <SettingOutlined class="setting" />
  </div>
</template>

<script setup lang="ts">
import {
  SearchOutlined,
  MessageOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import LanguageSelector from "./LanguageSelector.vue";
import SmallUserComponent from "./SmallUserComponent.vue";
import useBreadCrumbWithRoute from "@/composable/breadcrumb";
import useFullScreen from "@/composable/fullscreen";
import SmallUserComponent1 from "./SmallUserComponent.vue";

const { currentRoutes } = useBreadCrumbWithRoute();
const { isFullScreen, toggleFullScreen } = useFullScreen();
</script>

<style scoped>
.main-top-bar {
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  padding: 0 1em;
  background-color: white;
  border-bottom: #eee 0.4px solid;
}
.breadcrumb {
  flex: 1;
}
.option-btns {
  display: flex;
  flex-direction: row;
}
.option-btns {
  display: flex;
  flex-direction: row;
}
.option-btn {
  margin: 0 0.5em;
}
.setting {
  margin-left: 10px;
}
</style>
