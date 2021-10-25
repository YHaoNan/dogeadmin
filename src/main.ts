import { createApp } from "vue";
import i18n from "@/global/i18n_config";
import App from "./App.vue";
import router from "@router/router";
import { userState, userStateKey } from "@store/userStore";
import { dashState, dashStateKey } from "@store/dashStore";
import "@css/public.css";

createApp(App)
  .use(router)
  .use(i18n)
  .use(userState, userStateKey)
  .use(dashState, dashStateKey)
  .mount("#app");
