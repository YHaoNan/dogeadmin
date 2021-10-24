import { createI18n } from "vue-i18n";
import en from "./languages/en";
import zh from "./languages/zh";

const messages = {
  en,
  zh,
};

const i18n = createI18n({
  locale: "zh",
  fallbackLocale: "en",
  messages,
});

export default i18n;
