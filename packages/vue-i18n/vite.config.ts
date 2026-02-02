import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    build: {
      lib: {
        entry: resolve(dirname(fileURLToPath(import.meta.url)), "src/index.ts"),
        fileName: (format) => `PrefabsTechVue3I18n.${format}.js`,
        name: "PrefabsTechVue3I18n",
      },
      rollupOptions: {
        external: ["@prefabs.tech/vue3-config", "pinia", "vue", "vue-i18n"],
        output: {
          exports: "named",
          globals: {
            "@prefabs.tech/vue3-config": "PrefabsTechVue3Config",
            pinia: "Pinia",
            vue: "Vue",
            "vue-i18n": "VueI18n",
          },
        },
      },
      target: "esnext",
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@/": new URL("src/", import.meta.url).pathname,
      },
    },
    test: {
      coverage: {
        provider: "istanbul",
        reporter: ["text", "json", "html"],
      },
    },
  };
});
