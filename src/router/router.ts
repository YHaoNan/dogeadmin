import { createWebHashHistory, createRouter } from "vue-router";
import LoginPage from "@components/LoginPage.vue";
import AppRoot from "@components/AppRoot.vue";
import subroutes from "./subrouter";

// import DashBoard from "@components/subui/DashBoard.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/main",
      component: AppRoot,
      redirect: "/main/dashboard",
      children: subroutes,
    },
  ],
});
