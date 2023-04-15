import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Email from "../../Email.vue";

describe("Email", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Email, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        label: "Email",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
