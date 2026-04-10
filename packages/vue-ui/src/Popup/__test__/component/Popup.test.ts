import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Popup from "../../Index.vue";

describe("Popup (component)", () => {
  it("opens and closes on trigger click when content slot exists", async () => {
    const wrapper = mount(Popup, {
      slots: {
        default: "<button>Trigger</button>",
        content: "<div>Popup content</div>",
      },
    });

    expect(wrapper.find(".popup-content").exists()).toBe(false);
    expect(wrapper.find(".popup-trigger").attributes("aria-expanded")).toBe(
      "false",
    );

    await wrapper.find(".popup-trigger").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".popup-content").exists()).toBe(true);
    expect(wrapper.find(".popup-content").text()).toContain("Popup content");
    expect(wrapper.find(".popup-trigger").attributes("aria-expanded")).toBe(
      "true",
    );

    await wrapper.find(".popup-trigger").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".popup-content").exists()).toBe(false);
    expect(wrapper.find(".popup-trigger").attributes("aria-expanded")).toBe(
      "false",
    );
  });

  it("exposes isVisible and togglePopup for programmatic control", async () => {
    const wrapper = mount(Popup, {
      slots: {
        default: "<button>Trigger</button>",
        content: "<div>Popup content</div>",
      },
    });

    const exposed = wrapper.vm?.$?.exposed as
      | undefined
      | {
          isVisible: { value: boolean };
          togglePopup: () => void;
        };

    expect(exposed).toBeTruthy();
    expect(exposed?.isVisible.value).toBe(false);

    exposed?.togglePopup();
    await wrapper.vm.$nextTick();

    expect(exposed?.isVisible.value).toBe(true);
    expect(wrapper.find(".popup-content").exists()).toBe(true);
  });
});
