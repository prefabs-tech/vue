import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Country from "../../Country.vue";

describe("Country", () => {
  it("matches snapshot", async () => {
    const wrapper = mount(Country, {
      props: {
        code: "FR",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
