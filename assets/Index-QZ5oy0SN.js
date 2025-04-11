import{R as b,B as k}from"./DzangolabVue3Form.es-ybitm5cg.js";import{d as h,I as g,J as C,K as I,r as p,H as y,e as V,o as x,h as u,C as e,f as o,t as d,g as i,u as n,p as $}from"./index-DdKKv4d1.js";import{_ as S}from"./FormPage.vue_vue_type_style_index_0_lang-DTy6mm1W.js";const z={class:"section-content"},O={class:"section-content"},B={class:"section-content"},L={class:"section-content"},P={name:"CheckboxInput"},N=h({...P,setup(U){const{t}=g(),v=C.string().array().min(6,{message:t("form.errors.checkbox.min",{min:6})});let r=I({disabled:p(["car"]),inputWithValidation:p(),multiCheckbox:p([]),noLabelInput:p()});const c=[{label:t("form.label.title"),value:1},{label:t("form.label.solutions"),value:2},{label:t("form.label.deliverableList"),value:3},{label:t("form.label.workInProgress"),value:4},{label:t("form.label.summary"),value:5},{label:t("form.label.next"),value:6},{label:t("form.label.assumptions"),value:7},{label:t("form.label.generalQuestions"),value:8},{label:t("form.label.consequences"),value:9},{label:t("form.label.other"),value:10}],f=[{label:t("form.label.bike"),value:"bike"},{label:t("form.label.car"),value:"car"},{label:t("form.label.truck"),value:"truck"}];return(a,l)=>{const m=y("SshPre");return x(),V(S,{title:a.$t("form.label.checkbox"),class:"demo"},{toolbar:u(()=>[i(n($),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=s=>a.$router.push("/form"))},null,8,["label"])]),default:u(()=>[l[17]||(l[17]=e()),o("section",null,[o("h2",null,d(a.$t("form.label.basicInput")),1),l[7]||(l[7]=e()),o("div",z,[i(n(b),{checked:n(r).noLabelInput,"onUpdate:checked":l[1]||(l[1]=s=>n(r).noLabelInput=s),"input-label":a.$t("form.label.accept"),name:"basic"},null,8,["checked","input-label"]),l[6]||(l[6]=e()),i(m,{language:"html-vue"},{default:u(()=>l[5]||(l[5]=[e(`
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
        `)])),_:1})])]),l[18]||(l[18]=e()),o("section",null,[o("h2",null,d(a.$t("form.label.multiCheckbox")),1),l[10]||(l[10]=e()),o("div",O,[i(n(b),{modelValue:n(r).multiCheckbox,"onUpdate:modelValue":l[2]||(l[2]=s=>n(r).multiCheckbox=s),label:a.$t("form.label.vehicle"),options:f,name:"multi-checkbox"},null,8,["modelValue","label"]),l[9]||(l[9]=e()),i(m,{language:"html-vue"},{default:u(()=>l[8]||(l[8]=[e(`
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
        `)])),_:1})])]),l[19]||(l[19]=e()),o("section",null,[o("h2",null,d(a.$t("form.label.disabled")),1),l[13]||(l[13]=e()),o("div",B,[i(n(b),{modelValue:n(r).disabled,"onUpdate:modelValue":l[3]||(l[3]=s=>n(r).disabled=s),label:a.$t("form.label.vehicle"),options:f,direction:"horizontal",disabled:"",name:"disabled-checkbox"},null,8,["modelValue","label"]),l[12]||(l[12]=e()),i(m,{language:"html-vue"},{default:u(()=>l[11]||(l[11]=[e(`
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
        `)])),_:1})])]),l[20]||(l[20]=e()),o("section",null,[o("h2",null,d(a.$t("form.label.inputWithValidation")),1),l[16]||(l[16]=e()),o("div",L,[i(n(k),null,{default:u(()=>[i(n(b),{modelValue:n(r).inputWithValidation,"onUpdate:modelValue":l[4]||(l[4]=s=>n(r).inputWithValidation=s),label:a.$t("form.label.dailySynchro"),options:c,schema:n(v),name:"daily-synchro"},null,8,["modelValue","label","schema"])]),_:1}),l[15]||(l[15]=e()),i(m,{language:"html-vue"},{default:u(()=>l[14]||(l[14]=[e(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{N as default};
