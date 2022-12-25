import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import LoadingIcon from "../../LoadingIcon.vue";

describe("LoadingIcon", () => {
  it("matches snapshot", () => {
    const wrapper = mount(LoadingIcon, {
      props: {
        label: "Login",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
