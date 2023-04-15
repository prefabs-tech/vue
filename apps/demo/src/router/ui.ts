const Accordion = () => import("@/views/UI/accordion/Index.vue");
const TanstackTable = () => import("@/views/UI/TanstackTable.vue");
const Typography = () => import("@/views/UI/typography/Index.vue");
const UI = () => import("@/views/UI/Index.vue");

const routes = [
  {
    path: "/ui",
    children: [
      {
        component: Accordion,
        name: "accordion",
        path: "accordion",
      },
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
      {
        component: Typography,
        name: "typography",
        path: "typography",
      },
    ],
  },
];

export default routes;
