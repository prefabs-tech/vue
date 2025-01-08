import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import FormActions from "../../FormActions.vue";

describe("FormActions", () => {
  it("matches snapshot", () => {
    const wrapper = mount(FormActions, {
      global: {
        stubs: {
          ButtonElement: true,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
