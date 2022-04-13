import { createApp } from "vue";
import App from "./app.vue";
import i18n from "./i18n";
import router from "./router";
import store from "./store";

// Import Quasar and css
import { Quasar } from "quasar";
import quasarIconSet from 'quasar/icon-set/mdi-v6'
// Import Quasar css
import 'quasar/dist/quasar.css'
// Import Quasar icon libraries
import '@quasar/extras/mdi-v6/mdi-v6.css'

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
app.use(Quasar, {
  plugins: {},
  iconSet: quasarIconSet,
});

app.mount("#app");
