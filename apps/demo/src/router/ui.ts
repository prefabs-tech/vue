const EasyTable = () => import("@/views/UI/EasyTable.vue");
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
        component: EasyTable,
        name: "easy-table",
        path: "easy-table",
      },
    ],
  },
];

export default routes;
