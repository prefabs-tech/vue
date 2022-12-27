import { createRouter, createWebHistory } from "vue-router";

const Test = {
  name: "Test",
  template: `<h1>Test</h1>`,
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: Test,
      path: "/",
    },
  ],
});

export default router;
