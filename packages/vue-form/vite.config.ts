import vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";

import { dependencies, peerDependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    build: {
      cssCodeSplit: true,
      lib: {
        entry: resolve(dirname(fileURLToPath(import.meta.url)), "src/index.ts"),
        fileName: (format) => `PrefabsTechVue3Form.${format}.js`,
        name: "PrefabsTechVue3Form",
      },
      rollupOptions: {
        external: [
          ...Object.keys(peerDependencies),
          ...Object.keys(dependencies),
        ],
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.names?.includes("index.css")) {
              return "vue3-form.css";
            }

            return assetInfo.names?.[0];
          },
          exports: "named",
          globals: {
            "@prefabs.tech/vue3-ui": "PrefabsTechVue3UI",
            "@vee-validate/i18n": "VeeValidateI18n",
            "@vee-validate/rules": "VeeValidateRules",
            "@vee-validate/zod": "VeeValidateZod",
            validator: "Validator",
            "vee-validate": "VeeValidate",
            vue: "Vue",
            zod: "Zod",
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
