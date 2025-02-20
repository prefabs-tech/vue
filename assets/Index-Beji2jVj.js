import{e as b,o as v}from"./DzangolabVue3Form.es-Cf29nzIN.js";import{d as k,x as g,y,z as C,r as c,s as x,j as I,o as V,w as u,A as e,e as a,t as p,g as i,u as l,B as $}from"./index-j9ugvOHR.js";import{_ as S}from"./FormPage.vue_vue_type_style_index_0_lang-CciDNi3U.js";const z={class:"section-content"},O={class:"section-content"},_={class:"section-content"},B={class:"section-content"},L={name:"CheckboxInput"},F=k({...L,setup(w){const{t:n}=g(),f=y.string().array().min(6,{message:n("form.errors.checkbox.min",{min:6})});let r=C({disabled:c(["car"]),inputWithValidation:c(),multiCheckbox:c([]),noLabelInput:c()});const h=[{label:n("form.label.title"),value:1},{label:n("form.label.solutions"),value:2},{label:n("form.label.deliverableList"),value:3},{label:n("form.label.workInProgress"),value:4},{label:n("form.label.summary"),value:5},{label:n("form.label.next"),value:6},{label:n("form.label.assumptions"),value:7},{label:n("form.label.generalQuestions"),value:8},{label:n("form.label.consequences"),value:9},{label:n("form.label.other"),value:10}],d=[{label:n("form.label.bike"),value:"bike"},{label:n("form.label.car"),value:"car"},{label:n("form.label.truck"),value:"truck"}];return(o,t)=>{const m=x("SshPre");return V(),I(S,{title:o.$t("form.label.checkbox"),class:"demo"},{toolbar:u(()=>[i(l($),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=s=>o.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e(),a("section",null,[a("h2",null,p(o.$t("form.label.basicInput")),1),e(),a("div",z,[i(l(b),{checked:l(r).noLabelInput,"onUpdate:checked":t[1]||(t[1]=s=>l(r).noLabelInput=s),"input-label":o.$t("form.label.accept"),name:"basic"},null,8,["checked","input-label"]),e(),i(m,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(o.$t("form.label.multiCheckbox")),1),e(),a("div",O,[i(l(b),{modelValue:l(r).multiCheckbox,"onUpdate:modelValue":t[2]||(t[2]=s=>l(r).multiCheckbox=s),label:o.$t("form.label.vehicle"),options:d,name:"multi-checkbox"},null,8,["modelValue","label"]),e(),i(m,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(o.$t("form.label.disabled")),1),e(),a("div",_,[i(l(b),{modelValue:l(r).disabled,"onUpdate:modelValue":t[3]||(t[3]=s=>l(r).disabled=s),label:o.$t("form.label.vehicle"),options:d,direction:"horizontal",disabled:"",name:"disabled-checkbox"},null,8,["modelValue","label"]),e(),i(m,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(o.$t("form.label.inputWithValidation")),1),e(),a("div",B,[i(l(v),null,{default:u(()=>[i(l(b),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":t[4]||(t[4]=s=>l(r).inputWithValidation=s),label:o.$t("form.label.dailySynchro"),options:h,schema:l(f),name:"daily-synchro"},null,8,["modelValue","label","schema"])]),_:1}),e(),i(m,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{F as default};
