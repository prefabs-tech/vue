const UI = () => import("@/views/UI/Index.vue");

const routes = [
  {
    path: "/ui",
    children: [
      {
        component: UI,
        name: "ui",
        path: "",
      },
    ],
  },
];

export default routes;
