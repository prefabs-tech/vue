import configPlugin, { sentry } from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import uiPlugin from "@prefabs.tech/vue3-ui";
import layoutPlugin from "@prefabs.tech/vue3-layout";
// import userPlugin from "@prefabs.tech/vue3-user";
import Vue3Toastify from "vue3-toastify";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import SyntaxHighlighter from "./components/SyntaxHighlighter.vue";
import config from "./config";
import router from "./router";

import type { ToastContainerOptions } from 'vue3-toastify';

import "@prefabs.tech/vue3-ui/dist/PrefabsTechVue3UI.css";
import "@prefabs.tech/vue3-form/dist/PrefabsTechVue3Form.css";
import "@prefabs.tech/vue3-i18n/dist/PrefabsTechVue3I18n.css";
import "@prefabs.tech/vue3-layout/dist/PrefabsTechVue3Layout.css";
import "@prefabs.tech/vue3-tanstack-table/dist/PrefabsTechVue3TanstackTable.css";
import "@prefabs.tech/vue3-user/dist/PrefabsTechVue3User.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "simple-syntax-highlighter/dist/sshpre.css";
import "./assets/css/index.css";
import "primeicons/primeicons.css";
import 'vue3-toastify/dist/index.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(configPlugin, { config });
app.use(sentry, { config, router });
app.use(i18nPlugin, { config });
app.use(uiPlugin);
app.use(layoutPlugin, { config, translations: config.i18n.messages });
// app.use(userPlugin, {
//   config,
//   pinia,
//   router,
//   translations: config.i18n.messages,
// });

app.use(router);

app.use(Vue3Toastify, {
  position: config?.toastNotification?.position ?? "top-center",
} as ToastContainerOptions);

app.component("SshPre", SyntaxHighlighter);

app.mount("#app");
