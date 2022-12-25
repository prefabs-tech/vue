import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import PageTitle from "../../PageTitle.vue";

describe("PageTitle", () => {
  it("matches snapshot", () => {
    const wrapper = mount(PageTitle, {
      props: {
        title: "Home",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
