import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Message from "../../Index.vue";

describe("Message", () => {
  const propsData = {
    enableClose: true,
    message: "This is a test message.",
    icon: "test-icon"
  };

  const wrapper = mount(Message, {
    props: propsData,
  });

  it("should render the message text correctly", () => {
    expect(wrapper.find(".message-content").text()).toEqual(propsData.message);
  });

  it("should render close icon correctly", () => {
    expect(wrapper.find(".message>.close-message").exists).toBeTruthy;
  });

  it("should render <i> element when icon is passed", () => {
    expect(wrapper.find(".message>.icon>i").classes()).toContain("test-icon");
  });

  it("should render icon slot content when passed", () => {
    const slotData = {
      icon: `<i class="test test-icon"></i>`,
    };

    const messageWrapper = mount(Message, {
      props: propsData,
      slots: slotData,
    });
    
    expect(messageWrapper.find(".message>.icon").html()).toContain(slotData.icon);
  });

  it("should emit close event when close icon is clicked", async () => {
    await wrapper.find(".message>.close-message").trigger('click');
    
    expect(wrapper.emitted("close")).toBeTruthy;
  });
});
