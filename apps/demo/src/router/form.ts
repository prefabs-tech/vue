const Form = () => import("@/views/Form/Index.vue");

const routes = [
  {
    path: "/form",
    children: [
      {
        component: Form,
        name: "form",
        path: "",
      },
    ],
  },
];

export default routes;
