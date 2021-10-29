<template>
  <a-layout>
    <a-layout-sider
      id="layout-sider"
      :collapsed="!isDrawerOrSiderShowing"
      :trigger="null"
      collapsible
      collapsedWidth="60px"
      :style="{ padding: '10px' }"
      v-if="isHasEnoughWidthToShowSider"
    >
      <IconTitleBanner :show-title="isDrawerOrSiderShowing" />
      <PageMenu />
    </a-layout-sider>
    <a-drawer
      id="drawer-menu"
      v-model:visible="isDrawerOrSiderShowing"
      :mask="true"
      :closable="false"
      :drawerStyle="{ background: '#001529' }"
      placement="left"
      v-else
    >
      <IconTitleBanner :show-title="isDrawerOrSiderShowing" />
      <PageMenu />
    </a-drawer>
    <a-layout>
      <a-layout-content>
        <MainTopBar
          v-model:drawer-or-sider-showing="isDrawerOrSiderShowing"
        ></MainTopBar>
        <PageTabs></PageTabs>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import MainTopBar from "./public/MainTopBar.vue";
import PageTabs from "./public/PageTabs.vue";
import IconTitleBanner from "./public/IconTitleBanner.vue";
import PageMenu from "./public/PageMenu.vue";
import { userStateKey } from "@/store/userStore";
import { useStore } from "vuex";
import useAutoChangeDrawerAndSider from "@/composable/auto_change_drawer_sider";

const userStore = useStore(userStateKey);
const { isDrawerOrSiderShowing, isHasEnoughWidthToShowSider } =
  useAutoChangeDrawerAndSider();
</script>

<style scoped></style>
