import vueConfig from "@prefabs.tech/eslint-config/vue.js";

export default [
  ...vueConfig,
  {
    files: ["**/__test__/**"],
    rules: {
      "unicorn/filename-case": "off",
    },
  },
  {
    files: ["**/__test__/**/*.ts"],
    rules: {
      "vue/one-component-per-file": "off",
      "no-useless-assignment": "off",
    },
  },
];
