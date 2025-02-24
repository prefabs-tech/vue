import{e as b,o as v}from"./DzangolabVue3Form.es-CpaDvokg.js";import{d as k,z as g,A as C,B as y,r as c,s as I,j as V,o as x,w as u,C as e,e as a,t as p,g as i,u as l,D as $}from"./index-CVjUtB44.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang-DaPY-vu5.js";const S={class:"section-content"},O={class:"section-content"},_={class:"section-content"},B={class:"section-content"},L={name:"CheckboxInput"},D=k({...L,setup(w){const{t:n}=g(),f=C.string().array().min(6,{message:n("form.errors.checkbox.min",{min:6})});let r=y({disabled:c(["car"]),inputWithValidation:c(),multiCheckbox:c([]),noLabelInput:c()});const h=[{label:n("form.label.title"),value:1},{label:n("form.label.solutions"),value:2},{label:n("form.label.deliverableList"),value:3},{label:n("form.label.workInProgress"),value:4},{label:n("form.label.summary"),value:5},{label:n("form.label.next"),value:6},{label:n("form.label.assumptions"),value:7},{label:n("form.label.generalQuestions"),value:8},{label:n("form.label.consequences"),value:9},{label:n("form.label.other"),value:10}],d=[{label:n("form.label.bike"),value:"bike"},{label:n("form.label.car"),value:"car"},{label:n("form.label.truck"),value:"truck"}];return(t,o)=>{const m=I("SshPre");return x(),V(z,{title:t.$t("form.label.checkbox"),class:"demo"},{toolbar:u(()=>[i(l($),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:o[0]||(o[0]=s=>t.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e(),a("section",null,[a("h2",null,p(t.$t("form.label.basicInput")),1),e(),a("div",S,[i(l(b),{checked:l(r).noLabelInput,"onUpdate:checked":o[1]||(o[1]=s=>l(r).noLabelInput=s),"input-label":t.$t("form.label.accept"),name:"basic"},null,8,["checked","input-label"]),e(),i(m,{language:"html-vue"},{default:u(()=>[e(`
          <template>
            <CheckboxInput
              v-model:checked="input"
              :input-label="Accept"
              name="input"
            />
          </template>

          <script setup lang="ts">
          import { CheckboxInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref();
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(t.$t("form.label.multiCheckbox")),1),e(),a("div",O,[i(l(b),{modelValue:l(r).multiCheckbox,"onUpdate:modelValue":o[2]||(o[2]=s=>l(r).multiCheckbox=s),label:t.$t("form.label.vehicle"),options:d,name:"multi-checkbox"},null,8,["modelValue","label"]),e(),i(m,{language:"html-vue"},{default:u(()=>[e(`
          <template>
            <CheckboxInput
              v-model="input"
              :options="vehicleOptions"
              label="Vehicle"
              name="checkbox"
            />
          </template>

          <script setup lang="ts">
          import { CheckboxInput } from "@dzangolab/vue3-form";
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(t.$t("form.label.disabled")),1),e(),a("div",_,[i(l(b),{modelValue:l(r).disabled,"onUpdate:modelValue":o[3]||(o[3]=s=>l(r).disabled=s),label:t.$t("form.label.vehicle"),options:d,direction:"horizontal",disabled:"",name:"disabled-checkbox"},null,8,["modelValue","label"]),e(),i(m,{language:"html-vue"},{default:u(()=>[e(`
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
          import { CheckboxInput } from "@dzangolab/vue3-form";
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(t.$t("form.label.inputWithValidation")),1),e(),a("div",B,[i(l(v),null,{default:u(()=>[i(l(b),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":o[4]||(o[4]=s=>l(r).inputWithValidation=s),label:t.$t("form.label.dailySynchro"),options:h,schema:l(f),name:"daily-synchro"},null,8,["modelValue","label","schema"])]),_:1}),e(),i(m,{language:"html-vue"},{default:u(()=>[e(`
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
          import { Form, CheckboxInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{D as default};
