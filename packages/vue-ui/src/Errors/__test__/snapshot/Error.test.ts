import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Error from "../../Error.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("Error", () => {
  it("should matches snapshot", () => {
    const wrapper: VueWrapper = shallowMount(Error, {
      props: {
        error: {
          code: "401",
          message: "Invalid_Credentials",
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
