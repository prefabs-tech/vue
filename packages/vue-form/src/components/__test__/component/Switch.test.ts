import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Switch from "../../Switch.vue";

describe("Switch", () => {
  it("emits update:modelValue when changed", async () => {
    const wrapper = mount(Switch);

    const input = wrapper.find('input[type="checkbox"]');
    (input.element as HTMLInputElement).checked = true;
    await input.trigger("change");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });

  it("applies labeled class when onLabel or offLabel is provided", () => {
    const wrapper = mount(Switch, {
      props: {
        onLabel: "On",
        offLabel: "Off",
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    expect(input.classes()).toContain("labeled");
    expect(input.attributes("data-on")).toBe("On");
    expect(input.attributes("data-off")).toBe("Off");
  });
});
