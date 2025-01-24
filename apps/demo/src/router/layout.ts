const Layout = () => import("@/views/Layout/Index.vue");

const routes = [
  {
    path: "/layout",
    children: [
      {
        component: Layout,
        name: "layout",
        path: "",
      },
    ],
  },
];

export default routes;
