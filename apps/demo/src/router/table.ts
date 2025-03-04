const Table = () => import("@/views/Table/Index.vue");
const BasicTable = () => import("@/views/Table/BasicTable.vue");


const routes = [
  {
    path: "/table",
    children: [
      {
        component: Table,
        name: "table",
        path: "",
      },
      {
        component: BasicTable,
        name: "basicTable",
        path: "basic",
      },
    ],
  },
];

export default routes;
