import vueConfig from "@prefabs.tech/eslint-config/vue.js";

export default [
  ...vueConfig,
  {
    files: ["**/__test__/**/*.ts"],
    rules: {
      "vue/one-component-per-file": "off",
    },
  },
];
