import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import StepperContent from "../../_components/StepperContent.vue";

import type { StepProperties } from "../../../types/stepper";

const steps: StepProperties[] = [
  { step: "1", label: "Step 1", content: "Content of step 1" },
  { step: "2", label: "Step 2", content: "Content of step 2" },
  { step: "3", label: "Step 3", content: "Content of step 3" },
];

describe("StepperContent", () => {
  it("shows 'Next' button with primary severity on non-final steps", () => {
    const wrapper = mount(StepperContent, {
      props: { steps, activeIndex: 0 },
    });

    const nextButton = wrapper
      .findAll("button")
      .find((b) => b.text().includes("Next"));
    expect(nextButton?.exists()).toBe(true);
    expect(nextButton?.classes()).toContain("primary");
  });

  it("shows 'Finish' button with success severity on the last step", () => {
    const wrapper = mount(StepperContent, {
      props: { steps, activeIndex: 2 },
    });

    const finishButton = wrapper
      .findAll("button")
      .find((b) => b.text().includes("Finish"));
    expect(finishButton?.exists()).toBe(true);
    expect(finishButton?.classes()).toContain("success");
  });

  it("renders component content when stepItem.content is a component", () => {
    const ComponentContent = {
      template: "<div class='custom-component'>Custom Component</div>",
    };

    const stepsWithComponent: StepProperties[] = [
      { step: "1", label: "Step 1", content: ComponentContent },
    ];

    const wrapper = mount(StepperContent, {
      props: { steps: stepsWithComponent, activeIndex: 0 },
    });

    expect(wrapper.find(".custom-component").exists()).toBe(true);
    expect(wrapper.text()).toContain("Custom Component");
  });
});
