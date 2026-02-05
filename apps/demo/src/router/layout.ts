const Layout = () => import("@/views/Layout/Index.vue");
const StickyCollapsibleFooter = () =>
  import("@/views/Layout/stickyCollapsibleFooter/Index.vue");
const routes = [
  {
    path: "/layout",
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
  },
];

export default routes;
