import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import FacebookSignInButton from "../../FacebookSignInButton.vue";

describe("FacebookSignInButton", () => {
  it("renders the title text", () => {
    const wrapper = mount(FacebookSignInButton, {
      props: { title: "Sign in with Facebook" },
    });

    expect(wrapper.text()).toContain("Sign in with Facebook");
  });

  it("emits click event when the button is clicked", async () => {
    const wrapper = mount(FacebookSignInButton, {
      props: { title: "Sign in with Facebook" },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("passes disabled prop to the base button", () => {
    const wrapper = mount(FacebookSignInButton, {
      props: { title: "Sign in with Facebook", disabled: true },
    });

    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });
});
