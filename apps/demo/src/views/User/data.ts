export const allUsers = [
  {
    disabled: false,
    email: "john@dzangolab.com",
    givenName: "John",
    id: "user-1",
    invitedBy: null,
    isActiveUser: true,
    roles: ["USER"],
    signedUpAt: "2023-08-10T08:00:00Z",
    surname: "Doe",
    username: "johndoe",
  },
  {
    disabled: true,
    email: "jane@dzangolab.com",
    givenName: "Jane",
    id: "invitation-123",
    invitedBy: {
      email: "admin@dzangolab.com",
      givenName: "Admin",
      id: "user-2",
      isActiveUser: true,
      roles: ["USER"],
      surname: "User",
      username: "admin",
    },
    isActiveUser: false,
    roles: ["ADMIN"],
    surname: "Smith",
    username: "janesmith",
  },
  {
    disabled: false,
    email: "alice@dzangolab.com",
    givenName: "Alice",
    id: "user-3",
    invitedBy: null,
    isActiveUser: true,
    roles: ["USER"],
    signedUpAt: "2023-08-08T10:30:00Z",
    surname: "Johnson",
    username: "alicej",
  },
  {
    disabled: false,
    email: "bob@dzangolab.com",
    givenName: "Bob",
    id: "invitation-456",
    invitedBy: {
      email: "charlie@dzangolab.com",
      givenName: "Charlie",
      id: "user-4",
      isActiveUser: true,
      roles: ["USER"],
      surname: "Brown",
      username: "charlieb",
    },
    isActiveUser: false,
    roles: ["ADMIN"],
    surname: "Williams",
    username: "bobw",
  },
  {
    disabled: true,
    email: "george@dzangolab.com",
    givenName: "george",
    id: "user-6",
    invitedBy: null,
    isActiveUser: true,
    roles: ["USER"],
    signedUpAt: "2023-10-10T08:00:00Z",
    surname: "williams",
    username: "george",
  },
];

export const apps = [
  {
    id: 1,
    name: "app-vue",
    origin: "app-vue-origin",
    supportedRoles: [
      {
        id: 1,
        name: "USER",
      },
    ],
  },
  {
    id: 2,
    name: "app-react",
    origin: "app-react-origin",
    supportedRoles: [
      {
        id: 1,
        name: "USER",
      },
    ],
  },
  {
    id: 3,
    name: "admin-react",
    origin: "admin-react-origin",
    supportedRoles: [
      {
        id: 2,
        name: "ADMIN",
      },
      {
        id: 3,
        name: "SUPERADMIN",
      },
    ],
  },
  {
    id: 4,
    name: "admin-vue",
    origin: "admin-vue-origin",
    supportedRoles: [
      {
        id: 2,
        name: "ADMIN",
      },
      {
        id: 3,
        name: "SUPERADMIN",
      },
    ],
  },
];
