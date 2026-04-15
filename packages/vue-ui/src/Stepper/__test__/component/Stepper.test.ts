import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Stepper from "../../Index.vue";

import type { StepProperties } from "../../../types/stepper";

const steps: StepProperties[] = [
  { step: "1", label: "Step 1", content: "Content of step 1" },
  { step: "2", label: "Step 2", content: "Content of step 2" },
  { step: "3", label: "Step 3", content: "Content of step 3" },
];

describe("Stepper", () => {
  it("applies vertical direction class when direction is vertical", () => {
    const wrapper = mount(Stepper, {
      props: { steps, direction: "vertical" },
    });

    expect(wrapper.find(".stepper").classes()).toContain("vertical");
  });

  it("syncs active step to activeIndex prop in controlled mode", async () => {
    const wrapper = mount(Stepper, {
      props: { steps, activeIndex: 1 },
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
      props: { steps, activeIndex: 1 },
    });

    wrapper.vm.onPrevious();
    await wrapper.vm.$nextTick();

    const stepItems = wrapper.findAll(".step");

    expect(stepItems[0].classes()).toContain("active");
  });

  it("emits complete when onNext is called on the last step", async () => {
    const wrapper = mount(Stepper, {
      props: { steps, activeIndex: 2 },
    });

    wrapper.vm.onNext();

    expect(wrapper.emitted("complete")).toBeTruthy();
  });

  it("onNext is a no-op when hideButtons is true", async () => {
    const wrapper = mount(Stepper, {
      props: { steps, hideButtons: true },
    });

    wrapper.vm.onNext();
    await wrapper.vm.$nextTick();

    const stepItems = wrapper.findAll(".step");

    expect(stepItems[0].classes()).toContain("active");
    expect(wrapper.emitted("update:activeIndex")).toBeFalsy();
  });

  it("onPrevious is a no-op when hideButtons is true", async () => {
    const wrapper = mount(Stepper, {
      props: { steps, activeIndex: 1, hideButtons: true },
    });

    wrapper.vm.onPrevious();
    await wrapper.vm.$nextTick();

    const stepItems = wrapper.findAll(".step");

    expect(stepItems[1].classes()).toContain("active");
  });
});
