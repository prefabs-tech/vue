import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv } from "vite";

import { peerDependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    build: {
      lib: {
        entry: resolve(dirname(fileURLToPath(import.meta.url)), "src/index.ts"),
        fileName: (format) => `DzangolabVue3Layout.${format}.js`,
        name: "@prefabs.tech/vue3-layout",
      },
      rollupOptions: {
        external: [...Object.keys(peerDependencies)],
        output: {
          exports: "named",
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            "@prefabs.tech/vue3-config": "DzangolabVue3Config",
            "@prefabs.tech/vue3-i18n": "DzangolabVue3I18n",
            "@prefabs.tech/vue3-ui": "DzangolabVue3UI",
            "@vueuse/core": 'VueuseCore',
            vue: "Vue",
            "vue-router": "VueRouter",
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
