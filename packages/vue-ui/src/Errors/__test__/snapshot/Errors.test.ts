import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Index from "../../Index.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("Errors", () => {
  it("should matches snapshot", () => {
    const wrapper: VueWrapper = shallowMount(Index, {
      props: {
        errors: [
          {
            code: "401",
            message: "Invalid_Credentials",
          },
        ],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("should matches snapshot for more than one error", () => {
    const wrapper: VueWrapper = shallowMount(Index, {
      props: {
        errors: [
          {
            code: "401",
            message: "Invalid_Credentials",
          },
          {
            code: "404",
            message: "Page not found",
          },
        ],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
