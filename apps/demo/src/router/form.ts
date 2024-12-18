const DatePicker = () => import("@/views/Form/datePicker/Index.vue");
const DaysInput = () => import("@/views/Form/daysInput/Index.vue");
const Email = () => import("@/views/Form/emailInput/Index.vue");
const Form = () => import("@/views/Form/Index.vue");
const Input = () => import("@/views/Form/input/Index.vue");
const NumberInput = () => import("@/views/Form/numberInput/Index.vue");
const Password = () => import("@/views/Form/passwordInput/Index.vue");
const SelectInput = () => import("@/views/Form/selectInput/Index.vue");
const SwitchInput = () => import("@/views/Form/switchInput/Index.vue");
const TextareaInput = () => import("@/views/Form/textareaInput/Index.vue");
const TextInput = () => import("@/views/Form/textInput/Index.vue");
const Typeahead = () => import("@/views/Form/typeahead/Index.vue");

const routes = [
  {
    path: "/form",
    children: [
      {
        component: DatePicker,
        name: "datePicker",
        path: "date-picker",
      },
      {
        component: DaysInput,
        name: "daysInput",
        path: "days-input",
      },
      {
        component: Email,
        name: "emailInput",
        path: "email-input",
      },
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
        component: NumberInput,
        name: "numberInput",
        path: "number-input",
      },
      {
        component: Password,
        name: "passwordInput",
        path: "password-input",
      },
      {
        component: SelectInput,
        name: "selectInput",
        path: "select-input",
      },
      {
        component: SwitchInput,
        name: "switchInput",
        path: "switch-input",
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
      {
        component: Typeahead,
        name: "typeahead",
        path: "typeahead",
      },
    ],
  },
];

export default routes;
