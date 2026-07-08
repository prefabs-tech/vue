import vueConfig from "@prefabs.tech/eslint-config/vue.js";

export default [
  ...vueConfig,
  {
    files: ["**/__test__/**"],
    rules: {
      "unicorn/filename-case": "off",
    },
  },
];
