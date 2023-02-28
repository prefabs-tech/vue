import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Password from "../../Password.vue";

describe("Password", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Password, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        label: "Password",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
