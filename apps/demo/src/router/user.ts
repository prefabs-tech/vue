const InvitationForm = () => import("@/views/User/invitationForm/Index.vue");
const User = () => import("@/views/User/Index.vue");

const routes = [
  {
    path: "/user",
    children: [
      {
        component: InvitationForm,
        name: "invitationForm",
        path: "invitation-form",
      },
      {
        component: User,
        name: "user",
        path: "",
      },
    ],
  },
];

export default routes;
