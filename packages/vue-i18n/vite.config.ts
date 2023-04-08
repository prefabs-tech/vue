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
        fileName: (format) => `DzangolabVue3I18n.${format}.js`,
        name: "@dzangolab/vue3-i18n",
      },
      rollupOptions: {
        external: ["@dzangolab/vue3-config", "pinia", "vue", "vue-i18n"],
        output: {
          exports: "named",
          globals: {
            "@dzangolab/vue3-config": "DzangolabVue3Config",
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
        "@/": new URL("./src/", import.meta.url).pathname,
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
