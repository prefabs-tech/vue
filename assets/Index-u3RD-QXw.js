import{D as e,E as t,On as n,St as r,_ as i,gn as a,k as o,mt as s,qt as c,tr as l,v as u,vn as d}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{p as f}from"./vee-validate-D3u_EqLN.js";import{E as p}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as m}from"./FormPage-qAqvgJ-r.js";import{h,i as g,n as _}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";var v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w=o({name:`CheckboxInputDemo`,setup(o){let{t:w}=p(),T=f().array().min(6,{message:w(`form.errors.checkbox.min`,{min:6})}),E=a({disabled:d([`car`]),inputWithValidation:d(),multiCheckbox:d([]),noLabelInput:d()}),D=[{label:w(`form.label.title`),value:1},{label:w(`form.label.solutions`),value:2},{label:w(`form.label.deliverableList`),value:3},{label:w(`form.label.workInProgress`),value:4},{label:w(`form.label.summary`),value:5},{label:w(`form.label.next`),value:6},{label:w(`form.label.assumptions`),value:7},{label:w(`form.label.generalQuestions`),value:8},{label:w(`form.label.consequences`),value:9},{label:w(`form.label.other`),value:10}],O=[{accessorKey:`name`,header:`Name`},{accessorKey:`description`,header:`Description`}],k=[{description:`Triggers on single checkbox input state change`,id:1,name:`update:checked`},{description:`Triggers on selected value of multiple checkboxes input change`,id:1,name:`update:modelValue`}],A=[{accessorKey:`name`,header:`Property`},{accessorKey:`type`,header:`Type`},{accessorKey:`default`,header:`Default`},{accessorKey:`description`,header:`Description`}],j=[{default:`false`,description:`Determines the checked state of a single checkbox.`,id:1,name:`checked`,type:`boolean`},{default:`-`,description:`Defines the layout direction for multiple checkboxes.`,id:2,name:`direction`,type:`"horizontal" | "vertical"`},{default:`-`,description:`Disables the checkbox input.`,id:3,name:`disabled`,type:`boolean`},{default:`-`,description:`Label for the single checkbox.`,id:4,name:`inputLabel`,type:`string`},{default:`-`,description:`Label for the group of checkboxes.`,id:5,name:`label`,type:`string`},{default:`-`,description:`Array of selected values for multiple checkboxes.`,id:6,name:`modelValue`,type:`string[]`},{default:`checkbox`,description:`The name attribute for the checkbox input.`,id:7,name:`name`,type:`string`},{default:`[]`,description:`Options for multiple checkboxes.`,id:8,name:`options`,type:`Array<{ value, label }>`},{default:`[]`,description:`Determines the validation schema for checkbox input`,id:9,name:`schema`,type:`ZodType`}],M=[{label:w(`form.label.bike`),value:`bike`},{label:w(`form.label.car`),value:`car`},{label:w(`form.label.truck`),value:`truck`}];return(a,o)=>{let d=r(`SshPre`);return s(),u(m,{subtitle:a.$t(`form.subtitle.checkbox`),title:a.$t(`form.label.checkbox`),class:`demo`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.basicInput`)),1),o[6]||=t(),i(`div`,v,[e(n(h),{checked:n(E).noLabelInput,"onUpdate:checked":o[0]||=e=>n(E).noLabelInput=e,"input-label":a.$t(`form.label.accept`),name:`basic`},null,8,[`checked`,`input-label`]),o[5]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[4]||=[t(`
          <template>
            <CheckboxInput
              v-model:checked="input"
              :input-label="Accept"
              name="input"
            />
          </template>

          <script setup lang="ts">
          import { CheckboxInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          <\/script>
        `,-1)]]),_:1})])]),o[18]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.multiCheckbox`)),1),o[9]||=t(),i(`div`,y,[e(n(h),{modelValue:n(E).multiCheckbox,"onUpdate:modelValue":o[1]||=e=>n(E).multiCheckbox=e,label:a.$t(`form.label.vehicle`),options:M,name:`multi-checkbox`},null,8,[`modelValue`,`label`]),o[8]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[7]||=[t(`
          <template>
            <CheckboxInput
              v-model="input"
              :options="vehicleOptions"
              label="Vehicle"
              name="checkbox"
            />
          </template>

          <script setup lang="ts">
          import { CheckboxInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const vehicleOptions = [
            {
              label: "Bike",
              value: "bike",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Truck",
              value: "truck",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[19]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.disabled`)),1),o[12]||=t(),i(`div`,b,[e(n(h),{modelValue:n(E).disabled,"onUpdate:modelValue":o[2]||=e=>n(E).disabled=e,label:a.$t(`form.label.vehicle`),options:M,direction:`horizontal`,disabled:``,name:`disabled-checkbox`},null,8,[`modelValue`,`label`]),o[11]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[10]||=[t(`
          <template>
            <CheckboxInput
              v-model="input"
              :options="vehicleOptions"
              direction="horizontal"
              disabled
              label="Vehicle"
              name="checkbox"
            />
          </template>

          <script setup lang="ts">
          import { CheckboxInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref(["car"]);
          const vehicleOptions = [
            {
              label: "Bike",
              value: "bike",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Truck",
              value: "truck",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[20]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.inputWithValidation`)),1),o[15]||=t(),i(`div`,x,[e(n(g),null,{default:c(()=>[e(n(h),{modelValue:n(E).inputWithValidation,"onUpdate:modelValue":o[3]||=e=>n(E).inputWithValidation=e,label:a.$t(`form.label.dailySynchro`),options:D,schema:n(T),name:`daily-synchro`},null,8,[`modelValue`,`label`,`schema`])]),_:1}),o[14]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[13]||=[t(`
          <template>
            <Form>
              <CheckboxInput
                v-model="input"
                :label="t('form.label.dailySynchro')"
                :options="dailySynchroOptions"
                :schema="inputSchema"
                name="checkbox"
              />
            </Form>
          </template>

          <script setup lang="ts">
          import { Form, CheckboxInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from "vue";

          const { t } = useI18n();

          const inputSchema = z
            .string()
            .array()
            .min(6, { message: t("form.errors.checkbox.min", { min: 6 }) });

          const input = ref();
          const dailySynchroOptions = [
            {
              label: t("form.label.title"),
              value: 1,
            },
            {
              label: t("form.label.solutions"),
              value: 2,
            },
            {
              label: t("form.label.deliverableList"),
              value: 3,
            },
            {
              label: t("form.label.workInProgress"),
              value: 4,
            },
            {
              label: t("form.label.summary"),
              value: 5,
            },
            {
              label: t("form.label.next"),
              value: 6,
            },
            {
              label: t("form.label.assumptions"),
              value: 7,
            },
            {
              label: t("form.label.generalQuestions"),
              value: 8,
            },
            {
              label: t("form.label.consequences"),
              value: 9,
            },
            {
              label: t("form.label.other"),
              value: 10,
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[21]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`common.properties`,{value:`CheckboxInputProperties`})),1),o[16]||=t(),i(`div`,S,[e(n(_),{"columns-data":A,data:j,paginated:!1,"persist-state":!1})])]),o[22]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`common.events`)),1),o[17]||=t(),i(`div`,C,[e(n(_),{"columns-data":O,data:k,paginated:!1,"persist-state":!1})])])]),_:1},8,[`subtitle`,`title`])}}});export{w as default};