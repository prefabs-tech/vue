import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Modal from "../../Index.vue";

describe("Modal", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Modal, {
      props: {
        show: true,
        title: "Test",
      },
      slots: {
        default: "<p>This is test content</p>",
        footer: "<p>Modal footer</p>",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
