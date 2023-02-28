import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SubPane from "../../../components/SubPane.vue";
import TabbedPanel from "../../Index.vue";

describe("TabbedPanel", () => {
  const contents = {
    first: {
      content: "This is the first tab",
      title: "Tab 1",
    },
    second: {
      content: "This is the second tab",
      title: "Tab 2",
    },
  };

  const wrapper = mount(TabbedPanel, {
    global: {
      components: { SubPane },
    },
    props: {
      position: "bottom",
    },
    slots: {
      default: `
        <SubPane title="${contents.first.title}" icon="home.svg">
          <p>${contents.first.content}</p>
        </SubPane>
        <SubPane title="${contents.second.title}">
          <p>${contents.second.content}</p>
        </SubPane>
      `,
    },
  });

  it("should have the correct position", () => {
    expect(wrapper.find(".tabbed-panel").classes()).toContain("bottom");
  });

  it("should show correct tab on click", async () => {
    const firstTab = wrapper.find(
      ".tabbed-panel > div[role='tablist'] > button:first-child"
    );
    await firstTab.trigger("click");

    expect(wrapper.find(".tabbed-panel > .sub-pane > p").text()).toBe(
      contents.first.content
    );
  });

  it("should show correct tab on multiple tab click", async () => {
    const firstTab = wrapper.find(
      ".tabbed-panel > div[role='tablist'] > button:first-child"
    );
    const secondTab = wrapper.find(
      ".tabbed-panel > div[role='tablist'] > button:last-child"
    );
    await firstTab.trigger("click");
    await secondTab.trigger("click");

    expect(wrapper.find(".tabbed-panel > .sub-pane > p").text()).toBe(
      contents.second.content
    );
  });
});
