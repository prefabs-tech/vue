import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Message from "../../Index.vue";

describe("Message", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Message, {
      props: {
        enableClose: true,
        message: "This is a very important message.",
      },
      slots: {
        icon: "<i class='pi pi-bell' />",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
