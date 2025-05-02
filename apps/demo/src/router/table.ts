const Table = () => import("@/views/Table/Index.vue");
const BasicTable = () => import("@/views/Table/BasicTable.vue");
const FilesPresentation = () => import("@/views/Table/FilesPresentation.vue");
const FilesTable = () => import("@/views/Table/FilesTable.vue");
const PersistentTable = () => import("@/views/Table/PersistentTable.vue");
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
        component: FilesPresentation,
        name: "filesPresentation",
        path: "files",
      },
      {
        component: FilesTable,
        name: "filesTable",
        path: "files",
      },
      {
        component: PersistentTable,
        name: "persistentTable",
        path: "persistent",
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
