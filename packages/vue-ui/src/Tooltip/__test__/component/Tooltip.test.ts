import { mount } from "@vue/test-utils";
import { describe, expect, it, vi, afterEach } from "vitest";

import Tooltip from "../../Index.vue";

const flushMicrotasks = async () => {
  // Enough for promise callbacks scheduled by timers + Vue nextTick.
  await Promise.resolve();
  await Promise.resolve();
};

describe("Tooltip (component)", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows tooltip after delay on hover when content slot exists", async () => {
    vi.useFakeTimers();

    const wrapper = mount(Tooltip, {
      props: { delay: 50 },
      slots: {
        default: "<button>Trigger</button>",
        content: "<div>Tooltip content</div>",
      },
    });

    // Ensure positioning logic doesn't immediately hide tooltip in jsdom.
    const triggerElement = wrapper.find(".tooltip-trigger")
      .element as HTMLElement;
    triggerElement.getBoundingClientRect = () =>
      ({
        top: 100,
        left: 100,
        right: 120,
        bottom: 120,
        width: 20,
        height: 20,
      }) as DOMRect;

    await wrapper.find(".tooltip-container").trigger("mouseenter");
    expect(wrapper.find(".tooltip-content").exists()).toBe(false);

    vi.advanceTimersByTime(60);
    await flushMicrotasks();
    await wrapper.vm.$nextTick();

    const contentElement = wrapper.find(".tooltip-content")
      .element as HTMLElement;
    contentElement.getBoundingClientRect = () =>
      ({
        top: 0,
        left: 0,
        right: 80,
        bottom: 20,
        width: 80,
        height: 20,
      }) as DOMRect;

    await wrapper.vm.$nextTick();
    expect(wrapper.find(".tooltip-content").exists()).toBe(true);
    expect(wrapper.find(".tooltip-content").text()).toContain(
      "Tooltip content",
    );
  });

  it("toggles tooltip visibility by click when clickable=true", async () => {
    vi.useFakeTimers();

    const wrapper = mount(Tooltip, {
      props: { clickable: true, delay: 0 },
      slots: {
        default: "<button>Trigger</button>",
        content: "<div>Tooltip content</div>",
      },
    });

    const triggerElement = wrapper.find(".tooltip-trigger")
      .element as HTMLElement;
    triggerElement.getBoundingClientRect = () =>
      ({
        top: 100,
        left: 100,
        right: 120,
        bottom: 120,
        width: 20,
        height: 20,
      }) as DOMRect;

    // Tooltip becomes visible via hover; click "locks" it open.
    await wrapper.find(".tooltip-container").trigger("mouseenter");
    vi.advanceTimersByTime(0);
    await flushMicrotasks();
    await wrapper.vm.$nextTick();

    const contentElement = wrapper.find(".tooltip-content")
      .element as HTMLElement;
    contentElement.getBoundingClientRect = () =>
      ({
        top: 0,
        left: 0,
        right: 80,
        bottom: 20,
        width: 80,
        height: 20,
      }) as DOMRect;

    await wrapper.vm.$nextTick();
    expect(wrapper.find(".tooltip-content").exists()).toBe(true);

    await wrapper.find(".tooltip-container").trigger("click");
    await wrapper.vm.$nextTick();

    // With clickable=true and clicked, mouseleave should not hide.
    await wrapper.find(".tooltip-container").trigger("mouseleave");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".tooltip-content").exists()).toBe(true);

    await wrapper.find(".tooltip-container").trigger("click");
    await wrapper.vm.$nextTick();

    // Once unlocked, leaving hides it.
    await wrapper.find(".tooltip-container").trigger("mouseleave");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".tooltip-content").exists()).toBe(false);
  });
});
