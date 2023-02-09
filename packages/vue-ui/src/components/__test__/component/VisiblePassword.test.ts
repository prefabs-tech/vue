import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import VisiblePassword from "../../VisiblePassword.vue";

describe("VisiblePassword", async () => {
  const wrapper = mount(VisiblePassword);

  it("should show password widget with hidden password", async () => {
    expect(wrapper.find(".password > input").attributes("type")).toBe(
      "password"
    );
  });

  it("should show password widget with visible password", async () => {
    await wrapper.find(".password > button").trigger("click");

    expect(wrapper.find(".password > input").attributes("type")).toBe("text");
  });

  it("should show password widget with hidden password", async () => {
    await wrapper.find(".password > button").trigger("click");

    expect(wrapper.find(".password > input").attributes("type")).toBe(
      "password"
    );
  });
});
