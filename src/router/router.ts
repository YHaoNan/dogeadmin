import { createWebHashHistory, createRouter } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";

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
  ],
});
