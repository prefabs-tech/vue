import configPlugin from "@dzangolab/vue3-config";
import i18nPlugin from "@dzangolab/vue3-i18n";
import uiPlugin from "@dzangolab/vue3-ui";
import layoutPlugin from "@dzangolab/vue3-layout";
import Notifications from "@kyvg/vue3-notification";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import config from "./config";
import router from "./router";

import "@dzangolab/vue3-i18n/dist/DzangolabVue3I18n.css";
import "@dzangolab/vue3-layout/dist/DzangolabVue3Layout.css";
import "@dzangolab/vue3-ui/dist/DzangolabVue3UI.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(configPlugin, { config });
app.use(i18nPlugin, { config });
app.use(uiPlugin);
app.use(layoutPlugin, { translations: config.i18n.messages });

app.use(router);

app.use(Notifications);

app.mount("#app");
