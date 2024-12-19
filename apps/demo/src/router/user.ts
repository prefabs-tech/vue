const InvitationForm = () => import("@/views/User/invitationForm/Index.vue");
const InvitationModal = () => import("@/views/User/InvitationModal.vue");
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
        component: InvitationModal,
        name: "invitationModal",
        path: "invitation-modal",
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
