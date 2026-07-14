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
      "unicorn/no-unused-array-method-return": "off",
    },
  },
  {
    rules: {
      "unicorn/prefer-spread": "off", // Node 20 compat (toArray() unsupported)
    }
  }
];
