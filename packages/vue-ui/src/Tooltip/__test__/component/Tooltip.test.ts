import { mount } from "@vue/test-utils";
import { describe, expect, it, vi, afterEach } from "vitest";

import Tooltip from "../../Index.vue";

import type { VueWrapper } from "@vue/test-utils";

const flushMicrotasks = async () => {
  await Promise.resolve();
  await Promise.resolve();
};

// Helper to mock getBoundingClientRect for jsdom
const mockBoundingClientRect = (
  element: HTMLElement,
  rect: Partial<DOMRect>,
) => {
  element.getBoundingClientRect = () =>
    ({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      ...rect,
    }) as DOMRect;
};

// Helper to show tooltip (handles all the setup)
const showTooltip = async (wrapper: VueWrapper, delay = 0) => {
  const triggerElement = wrapper.find(".tooltip-trigger")
    .element as HTMLElement;
  mockBoundingClientRect(triggerElement, {
    bottom: 120,
    height: 20,
    left: 100,
    right: 120,
    top: 100,
    width: 20,
  });

  await wrapper.find(".tooltip-container").trigger("mouseenter");
  vi.advanceTimersByTime(delay);
  await flushMicrotasks();
  await wrapper.vm.$nextTick();

  const contentElement = wrapper.find(".tooltip-content")
    .element as HTMLElement;
  if (contentElement) {
    mockBoundingClientRect(contentElement, {
      bottom: 20,
      height: 20,
      left: 0,
      right: 80,
      top: 0,
      width: 80,
    });
  }

  await wrapper.vm.$nextTick();
};

describe("Tooltip (component)", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows tooltip after delay on hover", async () => {
    vi.useFakeTimers();

    const wrapper = mount(Tooltip, {
      props: { delay: 50 },
      slots: {
        content: "<div>Tooltip content</div>",
        default: "<button>Trigger</button>",
      },
    });

    const triggerElement = wrapper.find(".tooltip-trigger")
      .element as HTMLElement;
    mockBoundingClientRect(triggerElement, {
      bottom: 120,
      height: 20,
      left: 100,
      right: 120,
      top: 100,
      width: 20,
    });

    await wrapper.find(".tooltip-container").trigger("mouseenter");
    expect(wrapper.find(".tooltip-content").exists()).toBe(false);

    vi.advanceTimersByTime(60);
    await flushMicrotasks();
    await wrapper.vm.$nextTick();

    const contentElement = wrapper.find(".tooltip-content")
      .element as HTMLElement;
    mockBoundingClientRect(contentElement, {
      bottom: 20,
      height: 20,
      left: 0,
      right: 80,
      top: 0,
      width: 80,
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.find(".tooltip-content").exists()).toBe(true);
    expect(wrapper.find(".tooltip-content").text()).toContain(
      "Tooltip content",
    );
  });

  it("locks tooltip open when clicked in clickable mode", async () => {
    vi.useFakeTimers();

    const wrapper = mount(Tooltip, {
      props: { clickable: true, delay: 0 },
      slots: {
        content: "<div>Tooltip content</div>",
        default: "<button>Trigger</button>",
      },
    });

    await showTooltip(wrapper, 0);
    expect(wrapper.find(".tooltip-content").exists()).toBe(true);

    // Click to lock
    await wrapper.find(".tooltip-container").trigger("click");
    await wrapper.vm.$nextTick();

    // Mouseleave should NOT hide when locked
    await wrapper.find(".tooltip-container").trigger("mouseleave");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".tooltip-content").exists()).toBe(true);

    // Click again to unlock
    await wrapper.find(".tooltip-container").trigger("click");
    await wrapper.vm.$nextTick();

    // Now mouseleave should hide
    await wrapper.find(".tooltip-container").trigger("mouseleave");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".tooltip-content").exists()).toBe(false);
  });

  it("hides tooltip on mouseleave when not locked", async () => {
    vi.useFakeTimers();

    const wrapper = mount(Tooltip, {
      props: { delay: 0 },
      slots: {
        content: "<div>Tooltip content</div>",
        default: "<button>Trigger</button>",
      },
    });

    await showTooltip(wrapper, 0);
    expect(wrapper.find(".tooltip-content").exists()).toBe(true);

    await wrapper.find(".tooltip-container").trigger("mouseleave");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".tooltip-content").exists()).toBe(false);
  });
});
