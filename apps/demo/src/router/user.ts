const InvitationForm = () => import("@/views/User/invitationForm/Index.vue");
const InvitationModal = () => import("@/views/User/InvitationModal.vue");
const InvitationTable = () => import("@/views/User/InvitationTable.vue");
const User = () => import("@/views/User/Index.vue");
const UsersTable = () => import("@/views/User/UsersTable.vue");

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
        component: InvitationTable,
        name: "invitationTable",
        path: "invitation-table",
      },
      {
        component: User,
        name: "user",
        path: "",
      },
      {
        component: UsersTable,
        name: "usersTable",
        path: "users-table",
      },
    ],
  },
];

export default routes;
