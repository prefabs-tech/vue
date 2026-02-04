import vueConfig from "@prefabs.tech/eslint-config/vue.js";

export default [
  ...vueConfig,
  {
    files: ["vite.config.*"],
    settings: {
      "import/ignore": [
        "@vitejs/plugin-vue",
        "@vitejs/plugin-vue-jsx",
        "vite",
        "rollup",
      ],
    },
  },
];
