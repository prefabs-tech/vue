const TanstackTable = () => import("@/views/UI/TanstackTable.vue");
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
      {
        component: TanstackTable,
        name: "table",
        path: "table",
      },
    ],
  },
];

export default routes;
