import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import GoogleSignInButton from "../../GoogleSignInButton.vue";

describe("GoogleSignInButton", () => {
  it("passes disabled prop to the base button", () => {
    const wrapper = mount(GoogleSignInButton, {
      props: { title: "Sign in with Google", disabled: true },
    });

    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });
});
