import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Page from "../../Index.vue";

describe("Page", () => {
  it("renders title in custom element when titleElement is provided", () => {
    const wrapper = mount(Page, {
      props: { title: "My Page", titleElement: "h2" },
    });

    expect(wrapper.find(".title h2").exists()).toBe(true);
  });

  it("does not render titleTag when titleTag prop is absent", () => {
    const wrapper = mount(Page, { props: { title: "My Page" } });

    expect(wrapper.find(".title-tag").exists()).toBe(false);
  });

  it("filters out toolbar actions with display set to false", async () => {
    const wrapper = mount(Page, {
      props: {
        toolbarActionsMenu: [
          { label: "Visible Action", display: true },
          { label: "Hidden Action", display: false },
        ],
      },
    });

    const html = wrapper.find(".page-toolbar").html();

    expect(html).toContain("Visible Action");
    expect(html).not.toContain("Hidden Action");
  });

  it("emits action:click with the selected action when a toolbar button is clicked", async () => {
    const action = { label: "Save" };

    const wrapper = mount(Page, {
      props: {
        toolbarActionsMenu: [action],
      },
    });

    const button = wrapper
      .find(".page-toolbar")
      .findAll("button")
      .find((b) => b.text().includes("Save"));

    await button?.trigger("click");

    const emitted = wrapper.emitted("action:click");

    expect(emitted).toBeTruthy();
    expect(emitted?.[0][0]).toMatchObject({ label: "Save" });
  });
});
