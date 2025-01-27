const Layout = () => import("@/views/Layout/Index.vue");
const StickyCollapsibleFooter = () => import("@/views/Layout/stickyCollapsibleFooter/Index.vue");
const routes = [
  {
    path: "/layout",
    children: [
      {
        component: StickyCollapsibleFooter,
        name: "stickyCollapsibleFooter",
        path: "sticky-collapsible-footer",
      },
      {
        component: Layout,
        name: "layout",
        path: "",
      },
    ],
  },
];

export default routes;
