import { createI18n } from "vue-i18n";
import alerts from "./app/alerts/alerts.i18n";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "pt", // set locale
  fallbackLocale: "en", // set fallback locale
  messages: {
    ...alerts, // set locale messages
  },
});

export default i18n;
