<template>
  <a-layout-header class="main-top-bar">
    <MenuUnfoldOutlined
      v-if="!drawerOrSiderShowing"
      class="trigger"
      @click="toggleDrawerOrSiderShowing(true)"
    />
    <MenuFoldOutlined
      v-else
      class="trigger"
      @click="toggleDrawerOrSiderShowing(false)"
    />
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
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  SearchOutlined,
  MessageOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
import LanguageSelector from "./LanguageSelector.vue";
import SmallUserComponent from "./SmallUserComponent.vue";
import useBreadCrumbWithRoute from "@/composable/breadcrumb";
import useFullScreen from "@/composable/fullscreen";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { currentRoutes } = useBreadCrumbWithRoute(t);
const { isFullScreen, toggleFullScreen } = useFullScreen();

defineProps({
  drawerOrSiderShowing: Boolean,
});
const emit = defineEmits(["update:drawerOrSiderShowing"]);
const toggleDrawerOrSiderShowing = (showing) => {
  emit("update:drawerOrSiderShowing", showing);
};
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
  margin-left: 10px;
}
.option-btns {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
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
@media screen and (max-width: 800px) {
  .breadcrumb {
    display: none;
  }
}
</style>
