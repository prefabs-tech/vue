import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import LoadingButton from "../../LoadingButton.vue";

describe("LoadingButton", () => {
  const options = [true, false];

  for (const loading of options) {
    it(`matches snapshot based on loading props: ${loading}`, () => {
      const wrapper = shallowMount(LoadingButton, {
        props: {
          label: "Login",
          loading,
        },
      });

      expect(wrapper.element).toMatchSnapshot();
    });
  }
});
