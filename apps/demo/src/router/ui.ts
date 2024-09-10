const Accordion = () => import("@/views/UI/accordion/Index.vue");
const Badge = () => import("@/views/UI/badge/Index.vue");
const Button = () => import("@/views/UI/button/Index.vue");
const SubPane = () => import("@/views/UI/SubPanePage.vue");
const TabbedPanel = () => import("@/views/UI/tabbed-panel/Index.vue");
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
        component: SubPane,
        name: "subpane",
        path: "subpane",
      },
      {
        component: TabbedPanel,
        name: "tabbedPanel",
        path: "tabbed-panel",
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
      {
        component: Button,
        name: "button",
        path: "button",
      },
      {
        component: Badge,
        name: "badge",
        path: "badge",
      },
    ],
  },
];

export default routes;
