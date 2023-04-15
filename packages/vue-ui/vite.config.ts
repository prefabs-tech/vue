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
        fileName: (format) => `DzangolabVue3UI.${format}.js`,
        name: "@dzangolab/vue3-ui",
      },
      rollupOptions: {
        external: [...Object.keys(peerDependencies)],
        output: {
          exports: "named",
          globals: {
            "@vee-validate/i18n": "VeeValidateI18n",
            "@vee-validate/rules": "VeeValidateRules",
            "@vee-validate/zod": "VeeValidateZod",
            "vee-validate": "VeeValidate",
            validator: "Validator",
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
