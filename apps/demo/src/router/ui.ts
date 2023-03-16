const EasyTable = () => import("@/views/UI/EasyTable.vue");
const UI = () => import("@/views/UI/Index.vue");

const routes = [
  {
    path: "/ui",
    children: [
      {
        component: EasyTable,
        name: "easy-table",
        path: "easy-table",
      },
      {
        component: UI,
        name: "ui",
        path: "",
      },
    ],
  },
];

export default routes;
