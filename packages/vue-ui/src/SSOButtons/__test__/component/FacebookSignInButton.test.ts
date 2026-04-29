import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import FacebookSignInButton from "../../FacebookSignInButton.vue";

describe("FacebookSignInButton", () => {
  it("passes disabled prop to the base button", () => {
    const wrapper = mount(FacebookSignInButton, {
      props: { title: "Sign in with Facebook", disabled: true },
    });

    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });
});
