import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Data from "../../Index.vue";

describe("Data", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Data, {
      props: {
        label: "Email",
        value: "john.doe@example.com",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
