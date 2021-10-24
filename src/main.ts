import { createApp } from "vue";
import i18n from "@/global/i18n_config";
import App from "./App.vue";
import router from "@router/router";
import "@css/public.css";

createApp(App).use(router).use(i18n).mount("#app");
