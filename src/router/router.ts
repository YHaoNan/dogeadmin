import { createWebHashHistory, createRouter } from "vue-router";
import LoginPage from "@components/LoginPage.vue";
import AppRoot from "@components/AppRoot.vue";

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
    },
  ],
});
