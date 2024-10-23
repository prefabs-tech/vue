import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Typeahead from "../../Typeahead.vue";

describe("Typeahead", () => {
  const suggestionItems = [
    {
      value: "Roslabel",
      label: "Roslabel - A fragrant flower often associated with romance",
    },
    {
      value: "Tulip",
      label: "Tulip - A bright, cup-shaped flower popular in spring",
    },
    {
      value: "Daisy",
      label: "Daisy - A simple, white flower with a yellow center",
    },
    {
      value: "Sunflower",
      label: "Sunflower - A tall plant with a large, yellow flower head",
    },
    {
      value: "Lily",
      label: "Lily - An elegant flower often used in bouquets",
    },
    {
      value: "Orchid",
      label: "Orchid - An exotic flower with a unique shape",
    },
    {
      value: "Marigold",
      label: "Marigold - A vibrant, orange or yellow flower",
    },
    {
      value: "Lavender",
      label: "Lavender - A fragrant flower known for its calming scent",
    },
    {
      value: "Peony",
      label: "Peony - A lush, full flower often used in weddings",
    },
    {
      value: "Chrysanthemum",
      label: "Chrysanthemum - A hardy flower with a variety of colors",
    },
    {
      value: "Daffodil",
      label: "Daffodil - A bright, yellow flower that blooms in spring",
    },
    {
      value: "Hydrangea",
      label: "Hydrangea - A large, cluster-like flower that changes color",
    },
  ];

  it("matches snapshot", () => {
    const wrapper = mount(Typeahead, {
      global: {
        mocks: {
          showSuggestions: true,
        },
      },
      props: {
        label: "Input",
        placeholder: "Placeholder",
        suggestions: suggestionItems,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
