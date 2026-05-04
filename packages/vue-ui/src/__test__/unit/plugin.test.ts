import { describe, expect, it, vi } from "vitest";
import { createApp } from "vue";

import LoadingButton from "../../components/LoadingButton.vue";
import LoadingIcon from "../../components/LoadingIcon.vue";
import plugin from "../../index";
import Page from "../../Page/Index.vue";

describe("Vue Plugin (default export)", () => {
  it("registers LoadingButton globally on install", () => {
    const app = createApp({});
    const spy = vi.spyOn(app, "component");

    app.use(plugin);

    expect(spy).toHaveBeenCalledWith("LoadingButton", LoadingButton);
  });

  it("registers LoadingIcon globally on install", () => {
    const app = createApp({});
    const spy = vi.spyOn(app, "component");

    app.use(plugin);

    expect(spy).toHaveBeenCalledWith("LoadingIcon", LoadingIcon);
  });

  it("registers Page globally on install", () => {
    const app = createApp({});
    const spy = vi.spyOn(app, "component");

    app.use(plugin);

    expect(spy).toHaveBeenCalledWith("Page", Page);
  });
});
