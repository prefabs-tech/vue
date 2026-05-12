import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import type { StepProperties } from "../../../types/stepper";

import Stepper from "../../Index.vue";

const steps: StepProperties[] = [
  { content: "Content of step 1", label: "Step 1", step: "1" },
  { content: "Content of step 2", label: "Step 2", step: "2" },
  { content: "Content of step 3", label: "Step 3", step: "3" },
];

describe("Stepper", () => {
  it("applies vertical direction class when direction is vertical", () => {
    const wrapper = mount(Stepper, {
      props: { direction: "vertical", steps },
    });

    expect(wrapper.find(".stepper").classes()).toContain("vertical");
  });

  it("syncs active step to activeIndex prop in controlled mode", async () => {
    const wrapper = mount(Stepper, {
      props: { activeIndex: 1, steps },
    });

    const stepItems = wrapper.findAll(".step");

    expect(stepItems[1].classes()).toContain("active");
  });

  it("exposes onNext which advances to next step", async () => {
    const wrapper = mount(Stepper, { props: { steps } });

    wrapper.vm.onNext();
    await wrapper.vm.$nextTick();

    const stepItems = wrapper.findAll(".step");

    expect(stepItems[1].classes()).toContain("active");
  });

  it("emits update:activeIndex when advancing to next step", async () => {
    const wrapper = mount(Stepper, { props: { steps } });

    wrapper.vm.onNext();

    expect(wrapper.emitted("update:activeIndex")).toBeTruthy();
    expect(wrapper.emitted("update:activeIndex")?.[0][0]).toBe(1);
  });

  it("exposes onPrevious which goes back a step", async () => {
    const wrapper = mount(Stepper, {
      props: { activeIndex: 1, steps },
    });

    wrapper.vm.onPrevious();
    await wrapper.vm.$nextTick();

    const stepItems = wrapper.findAll(".step");

    expect(stepItems[0].classes()).toContain("active");
  });

  it("emits complete when onNext is called on the last step", async () => {
    const wrapper = mount(Stepper, {
      props: { activeIndex: 2, steps },
    });

    wrapper.vm.onNext();

    expect(wrapper.emitted("complete")).toBeTruthy();
  });

  it("onNext is a no-op when hideButtons is true", async () => {
    const wrapper = mount(Stepper, {
      props: { hideButtons: true, steps },
    });

    wrapper.vm.onNext();
    await wrapper.vm.$nextTick();

    const stepItems = wrapper.findAll(".step");

    expect(stepItems[0].classes()).toContain("active");
    expect(wrapper.emitted("update:activeIndex")).toBeFalsy();
  });

  it("onPrevious is a no-op when hideButtons is true", async () => {
    const wrapper = mount(Stepper, {
      props: { activeIndex: 1, hideButtons: true, steps },
    });

    wrapper.vm.onPrevious();
    await wrapper.vm.$nextTick();

    const stepItems = wrapper.findAll(".step");

    expect(stepItems[1].classes()).toContain("active");
  });
});
