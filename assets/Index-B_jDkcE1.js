import{A as d,O as I}from"./PrefabsTechVue3Form.es-DWKF08Q0.js";import{d as k,I as O,L as $,M as h,r as m,J as R,e as z,o as S,j as u,C as n,f as t,t as b,h as a,u as l,v as g}from"./index-CT2_3BjD.js";import{_ as B}from"./FormPage.vue_vue_type_style_index_0_lang-nPZemLtw.js";const C={class:"section-content"},F={class:"section-content"},c={class:"section-content"},U={class:"section-content"},W={name:"RadioInput"},w=k({...W,setup(q){const{t:s}=O(),V=$.string({required_error:s("form.errors.radio.required")});let i=h({disabled:m("car"),i18nInput:m(),input:m(),inputWithValidation:m(),noLabelInput:m()});const f=[{label:s("form.label.male"),value:"male"},{label:s("form.label.female"),value:"female"}],v=[{label:s("form.label.bike"),value:"bike"},{label:s("form.label.car"),value:"car"},{label:s("form.label.truck"),value:"truck"}];return(o,e)=>{const p=R("SshPre");return S(),z(B,{title:o.$t("form.label.radio"),class:"demo"},{toolbar:u(()=>[a(l(g),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=r=>o.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e[18]||(e[18]=n()),t("section",null,[t("h2",null,b(o.$t("form.label.basicInput")),1),e[7]||(e[7]=n()),t("div",C,[a(l(d),{modelValue:l(i).input,"onUpdate:modelValue":e[1]||(e[1]=r=>l(i).input=r),label:o.$t("form.label.gender"),options:f,direction:"horizontal",name:"label-input"},null,8,["modelValue","label"]),e[6]||(e[6]=n()),a(p,{language:"html-vue"},{default:u(()=>e[5]||(e[5]=[n(`
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
        `)])),_:1})])]),e[19]||(e[19]=n()),t("section",null,[t("h2",null,b(o.$t("form.label.disabled")),1),e[10]||(e[10]=n()),t("div",F,[a(l(d),{modelValue:l(i).disabled,"onUpdate:modelValue":e[2]||(e[2]=r=>l(i).disabled=r),label:o.$t("form.label.vehicle"),options:v,disabled:"",name:"disabled-input"},null,8,["modelValue","label"]),e[9]||(e[9]=n()),a(p,{language:"html-vue"},{default:u(()=>e[8]||(e[8]=[n(`
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
        `)])),_:1})])]),e[20]||(e[20]=n()),t("section",null,[t("h2",null,b(o.$t("form.label.withI18n")),1),e[13]||(e[13]=n()),t("div",c,[a(l(d),{modelValue:l(i).i18nInput,"onUpdate:modelValue":e[3]||(e[3]=r=>l(i).i18nInput=r),label:o.$t("form.label.vehicle"),options:v,direction:"horizontal",name:"i18n-input"},null,8,["modelValue","label"]),e[12]||(e[12]=n()),a(p,{language:"html-vue"},{default:u(()=>e[11]||(e[11]=[n(`
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
        `)])),_:1})])]),e[21]||(e[21]=n()),t("section",null,[t("h2",null,b(o.$t("form.label.inputWithValidation")),1),e[17]||(e[17]=n()),t("div",U,[a(l(I),null,{default:u(()=>[a(l(d),{modelValue:l(i).inputWithValidation,"onUpdate:modelValue":e[4]||(e[4]=r=>l(i).inputWithValidation=r),label:o.$t("form.label.gender"),options:f,schema:l(V)},null,8,["modelValue","label","schema"]),e[14]||(e[14]=n()),a(l(g),{label:l(s)("form.label.submit")},null,8,["label"])]),_:1}),e[16]||(e[16]=n()),a(p,{language:"html-vue"},{default:u(()=>e[15]||(e[15]=[n(`
          <template>
            <Form>
              <RadioInput 
                v-model="input"
                :options="genderOptions"
                :schema="inputSchema"
                label="Gender"
              />

              <ButtonElement label="Submit" />
            </Form>
          </template>

          <script setup lang="ts">
          import { Form, RadioInput } from "@prefabs.tech/vue3-form";
          import { ButtonElement } from "@prefabs.tech/vue3-ui";

          const inputSchema = z.string({
            required_error: "Please choose one option",
          });

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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{w as default};
