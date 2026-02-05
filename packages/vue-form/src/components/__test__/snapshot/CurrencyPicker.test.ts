import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import CurrencyPicker from "../../CurrencyPicker.vue";

import type { CurrencyOption } from "../../../types";

describe("CurrencyPicker", () => {
  const options = [
    { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
    { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
    { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
    { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
    { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
  ] as CurrencyOption[];

  it("matches snapshot", async () => {
    const wrapper = mount(CurrencyPicker, {
      props: {
        label: "Currency Picker",
        modelValue: ["AUD", "GBP"],
        multiple: true,
        name: "currency-picker",
        options: options,
        placeholder: "Select a currency",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
