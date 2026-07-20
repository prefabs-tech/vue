import{D as e,E as t,On as n,St as r,_ as i,g as a,gn as o,k as s,mt as c,qt as l,tr as u,v as d,vn as f}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{o as p}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{p as m}from"./vee-validate-D3u_EqLN.js";import{E as h}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as g}from"./FormPage-qAqvgJ-r.js";import{i as _,o as v}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as y}from"./ComponentDocumentation-BPcopVAa.js";var b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w=s({name:`RadioInputDemo`,setup(s){let{t:w}=h(),T=o({disabled:f(`car`),i18nInput:f(),input:f(),inputWithValidation:f(),noLabelInput:f()}),E=a(()=>[{description:w(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`value: string`}]),D=a(()=>[{label:w(`form.label.male`),value:`male`},{label:w(`form.label.female`),value:`female`}]),O=a(()=>m({required_error:w(`form.errors.radio.required`)}).nonempty({message:w(`form.errors.radio.required`)})),k=a(()=>[{default:`-`,description:w(`form.documentation.propsDescription.radio.direction`),prop:`direction`,type:`"vertical" | "horizontal"`},{default:`false`,description:w(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`-`,description:w(`form.documentation.propsDescription.input.helperText`),prop:`helperText`,type:`String`},{default:`-`,description:w(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`""`,description:w(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`String | Number`},{default:`"radio"`,description:w(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:w(`form.documentation.propsDescription.radio.options`),prop:`options`,type:`InputOption[]`},{default:`-`,description:w(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number | boolean>`}]),A=a(()=>[{label:w(`form.label.bike`),value:`bike`},{label:w(`form.label.car`),value:`car`},{label:w(`form.label.truck`),value:`truck`}]);return(a,o)=>{let s=r(`SshPre`);return c(),d(g,{subtitle:a.$t(`form.subtitle.radio`),title:a.$t(`form.label.radio`),class:`demo`},{default:l(()=>[i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.basicInput`)),1),o[6]||=t(),i(`div`,b,[e(n(v),{modelValue:n(T).input,"onUpdate:modelValue":o[0]||=e=>n(T).input=e,label:a.$t(`form.label.gender`),options:D.value,direction:`horizontal`,name:`label-input`},null,8,[`modelValue`,`label`,`options`]),o[5]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[4]||=[t(`
          <template>
            <RadioInput
              v-model="input"
              :options="genderOptions"
              direction="horizontal"
              label="Gender"
              name="gender"
            />
          </template>

          <script setup lang="ts">
          import { RadioInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          
          const genderOptions = [
            {
              label: "Male",
              value: "male",
            },
            {
              label: "Female",
              value: "female",
            },
          ];
          const input = ref();
          <\/script>
        `,-1)]]),_:1})])]),o[18]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.disabled`)),1),o[9]||=t(),i(`div`,x,[e(n(v),{modelValue:n(T).disabled,"onUpdate:modelValue":o[1]||=e=>n(T).disabled=e,label:a.$t(`form.label.vehicle`),options:A.value,disabled:``,name:`disabled-input`},null,8,[`modelValue`,`label`,`options`]),o[8]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[7]||=[t(`
          <template>
            <RadioInput 
              v-model="input"
              :options="vehicleOptions"
              disabled
              label="Vehicle"
              name="vehicle"
            />
          </template>

          <script setup lang="ts">
          import { RadioInput } from "@prefabs.tech/vue3-form";
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
        `,-1)]]),_:1})])]),o[19]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.withI18n`)),1),o[12]||=t(),i(`div`,S,[e(n(v),{modelValue:n(T).i18nInput,"onUpdate:modelValue":o[2]||=e=>n(T).i18nInput=e,label:a.$t(`form.label.vehicle`),options:A.value,direction:`horizontal`,name:`i18n-input`},null,8,[`modelValue`,`label`,`options`]),o[11]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[10]||=[t(`
          <template>
            <RadioInput 
              v-model="input"
              :label="t('form.label.vehicle')"
              :options="vehicleOptions"
              direction="horizontal"
              name="vehicle"
            />
          </template>

          <script setup lang="ts">
          import { RadioInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();

          const vehicleOptions = [
            {
              label: t("form.label.bike"),
              value: "bike",
            },
            {
              label: t("form.label.car"),
              value: "car",
            },
            {
              label: t("form.label.truck"),
              value: "truck",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[20]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.inputWithValidation`)),1),o[16]||=t(),i(`div`,C,[e(n(_),null,{default:l(()=>[e(n(v),{modelValue:n(T).inputWithValidation,"onUpdate:modelValue":o[3]||=e=>n(T).inputWithValidation=e,label:a.$t(`form.label.gender`),options:D.value,schema:O.value,name:`gender`},null,8,[`modelValue`,`label`,`options`,`schema`]),o[13]||=t(),e(n(p),{label:n(w)(`form.label.submit`)},null,8,[`label`])]),_:1}),o[15]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[14]||=[t(`
          <template>
            <Form>
              <RadioInput 
                v-model="input"
                :options="genderOptions"
                :schema="inputSchema"
                label="Gender"
                name="gender"
              />

              <ButtonElement label="Submit" />
            </Form>
          </template>

          <script setup lang="ts">
          import { Form, RadioInput } from "@prefabs.tech/vue3-form";
          import { ButtonElement } from "@prefabs.tech/vue3-ui";

          const inputSchema = z
            .string({
              required_error: "Please choose one option",
            })
            .nonempty({ message: "Please choose one option" });

          const genderOptions = [
            {
              label: "Male",
              value: "male",
            },
            {
              label: "Female",
              value: "female",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[21]||=t(),e(y,{"events-data":E.value,"props-data":k.value,"props-table-title":a.$t(`common.properties`,{value:`RadioInputProperties`})},null,8,[`events-data`,`props-data`,`props-table-title`]),o[22]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[17]||=[t(`
      interface InputOption {
        label: string;
        value: string | number;
      }
    `,-1)]]),_:1})]),_:1},8,[`subtitle`,`title`])}}});export{w as default};