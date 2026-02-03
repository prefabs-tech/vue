import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import TableBody from "../../TableBody.vue";
import { mockedTable } from "../table";

describe("TableBody", () => {
  it("matches snapshot", () => {
    const wrapper = mount(TableBody, {
      props: {
        table: mockedTable,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
