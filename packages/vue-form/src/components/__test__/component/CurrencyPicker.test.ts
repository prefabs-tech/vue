import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import CurrencyPicker from "../../CurrencyPicker.vue";

describe("CurrencyPicker", () => {
  const currencyOptions = [
    { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
    { code: "EUR", label: "Euro", symbol: "€", value: "EUR" },
    { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
  ];

  it("enables custom search by default", () => {
    const wrapper = mount(CurrencyPicker, {
      props: {
        options: currencyOptions,
      },
    });
    const selectInput = wrapper.findComponent({ name: "SelectInput" });

    expect(selectInput.props("enableCustomSearch")).toBe(true);
  });

  it("filters options by label", async () => {
    const wrapper = mount(CurrencyPicker, {
      props: {
        options: currencyOptions,
      },
    });
    const selectInput = wrapper.findComponent({ name: "SelectInput" });

    await selectInput.vm.$emit("update:searchInput", "euro");
    await wrapper.vm.$nextTick();

    expect(selectInput.props("options").length).toBe(1);
    expect(selectInput.props("options")[0].code).toBe("EUR");
  });

  it("filters options by code", async () => {
    const wrapper = mount(CurrencyPicker, {
      props: {
        options: currencyOptions,
      },
    });
    const selectInput = wrapper.findComponent({ name: "SelectInput" });

    await selectInput.vm.$emit("update:searchInput", "usd");
    await wrapper.vm.$nextTick();

    expect(selectInput.props("options").length).toBe(1);
    expect(selectInput.props("options")[0].code).toBe("USD");
  });

  it("filters options by symbol", async () => {
    const wrapper = mount(CurrencyPicker, {
      props: {
        options: currencyOptions,
      },
    });
    const selectInput = wrapper.findComponent({ name: "SelectInput" });

    await selectInput.vm.$emit("update:searchInput", "£");
    await wrapper.vm.$nextTick();

    expect(selectInput.props("options").length).toBe(1);
    expect(selectInput.props("options")[0].code).toBe("GBP");
  });

  it("emits update:modelValue", async () => {
    const wrapper = mount(CurrencyPicker, {
      props: {
        options: currencyOptions,
      },
    });
    const selectInput = wrapper.findComponent({ name: "SelectInput" });

    await selectInput.vm.$emit("update:modelValue", "USD");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["USD"]);
  });

  it("emits update:searchInput", async () => {
    const wrapper = mount(CurrencyPicker, {
      props: {
        options: currencyOptions,
      },
    });
    const selectInput = wrapper.findComponent({ name: "SelectInput" });

    await selectInput.vm.$emit("update:searchInput", "test");

    expect(wrapper.emitted("update:searchInput")).toBeTruthy();
    expect(wrapper.emitted("update:searchInput")?.[0]).toEqual(["test"]);
  });
});
