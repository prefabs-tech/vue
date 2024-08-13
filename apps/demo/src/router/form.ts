const Form = () => import("@/views/Form/Index.vue");
const Input = () => import("@/views/Form/input/Index.vue");
const TextareaInput = () => import("@/views/Form/textareaInput/Index.vue");
const TextInput = () => import("@/views/Form/textInput/Index.vue");

const routes = [
  {
    path: "/form",
    children: [
      {
        component: Form,
        name: "form",
        path: "",
      },
      {
        component: Input,
        name: "input",
        path: "input",
      },
      {
        component: TextareaInput,
        name: "textareaInput",
        path: "textarea-input",
      },
      {
        component: TextInput,
        name: "textInput",
        path: "text-input",
      },
    ],
  },
];

export default routes;
