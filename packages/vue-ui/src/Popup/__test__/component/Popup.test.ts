import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

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

  it("does not render popup content when content slot is not provided", () => {
    const wrapper = mount(Popup, {
      slots: {
        default: "<button>Trigger</button>",
      },
    });

    expect(wrapper.find(".popup-content").exists()).toBe(false);
  });

  it("applies custom ariaLabel to trigger", () => {
    const wrapper = mount(Popup, {
      props: {
        ariaLabel: "custom popup label",
      },
      slots: {
        default: "<button>Trigger</button>",
        content: "<div>Popup content</div>",
      },
    });

    expect(wrapper.find(".popup-trigger").attributes("aria-label")).toBe(
      "custom popup label",
    );
  });

  it("cleans up event listeners on unmount", async () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

    const wrapper = mount(Popup, {
      slots: {
        default: "<button>Trigger</button>",
        content: "<div>Popup content</div>",
      },
    });

    // Open popup to attach listeners
    await wrapper.find(".popup-trigger").trigger("click");
    await wrapper.vm.$nextTick();

    // Unmount
    wrapper.unmount();

    // Verify cleanup
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
    );
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function),
    );

    removeEventListenerSpy.mockRestore();
  });
});
