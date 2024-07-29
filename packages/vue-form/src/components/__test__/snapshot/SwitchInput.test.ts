import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SwitchInput from "../../SwitchInput.vue";

describe("SwitchInput", () => {
  it("matches snapshot", () => {
    const wrapper = mount(SwitchInput, {
      props: {
        label: "Switch input",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
