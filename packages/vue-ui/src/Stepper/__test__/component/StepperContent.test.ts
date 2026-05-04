import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import type { StepProperties } from "../../../types/stepper";

import StepperContent from "../../_components/StepperContent.vue";

const steps: StepProperties[] = [
  { content: "Content of step 1", label: "Step 1", step: "1" },
  { content: "Content of step 2", label: "Step 2", step: "2" },
  { content: "Content of step 3", label: "Step 3", step: "3" },
];

describe("StepperContent", () => {
  it("shows 'Next' button with primary severity on non-final steps", () => {
    const wrapper = mount(StepperContent, {
      props: { activeIndex: 0, steps },
    });

    const nextButton = wrapper
      .findAll("button")
      .find((b) => b.text().includes("Next"));
    expect(nextButton?.exists()).toBe(true);
    expect(nextButton?.classes()).toContain("primary");
  });

  it("shows 'Finish' button with success severity on the last step", () => {
    const wrapper = mount(StepperContent, {
      props: { activeIndex: 2, steps },
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
      { content: ComponentContent, label: "Step 1", step: "1" },
    ];

    const wrapper = mount(StepperContent, {
      props: { activeIndex: 0, steps: stepsWithComponent },
    });

    expect(wrapper.find(".custom-component").exists()).toBe(true);
    expect(wrapper.text()).toContain("Custom Component");
  });
});
