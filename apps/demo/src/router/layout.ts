const Layout = () => import("@/views/Layout/Index.vue");
const StickyCollapsibleFooter = () =>
  import("@/views/Layout/stickyCollapsibleFooter/Index.vue");
const routes = [
  {
    children: [
      {
        component: Layout,
        name: "layout",
        path: "",
      },
      {
        component: StickyCollapsibleFooter,
        name: "stickyCollapsibleFooter",
        path: "sticky-collapsible-footer",
      },
    ],
    path: "/layout",
  },
];

export default routes;
