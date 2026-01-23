import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import CountryPicker from "../../CountryPicker/Index.vue";

describe("CountryPicker", () => {
  it("matches snapshot", async () => {
    const wrapper = mount(CountryPicker);

    expect(wrapper.element).toMatchSnapshot();
  });
});
