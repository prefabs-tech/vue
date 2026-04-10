import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import GoogleSignInButton from "../../GoogleSignInButton.vue";

describe("GoogleSignInButton", () => {
  it("renders the title text", () => {
    const wrapper = mount(GoogleSignInButton, {
      props: { title: "Sign in with Google" },
    });

    expect(wrapper.text()).toContain("Sign in with Google");
  });

  it("emits click event when the button is clicked", async () => {
    const wrapper = mount(GoogleSignInButton, {
      props: { title: "Sign in with Google" },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("passes disabled prop to the base button", () => {
    const wrapper = mount(GoogleSignInButton, {
      props: { title: "Sign in with Google", disabled: true },
    });

    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });
});
