const Table = () => import("@/views/Table/Index.vue");
const BasicTable = () => import("@/views/Table/BasicTable.vue");
const TableFilters = () => import("@/views/Table/TableFilters.vue");

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
      {
        component: TableFilters,
        name: "tableFilters",
        path: "filters",
      },
    ],
  },
];

export default routes;
