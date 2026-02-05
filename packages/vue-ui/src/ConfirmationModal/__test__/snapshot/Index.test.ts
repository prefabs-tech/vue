import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { ref } from "vue";

import ConfirmationModal from "../../Index.vue";

describe("ConfirmationModal", () => {
  it("matches snapshot", async () => {
    const dzangolabVueDialogMock = ref<HTMLDialogElement>();
    const wrapper = mount(ConfirmationModal, {
      global: {
        mocks: {
          dzangolabVueDialog: dzangolabVueDialogMock,
        },
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });
});
