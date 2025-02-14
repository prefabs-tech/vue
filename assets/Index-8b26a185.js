import{a as d,J as g}from"./DzangolabVue3Form.es-81449376.js";import{d as V,a5 as I,p as k,j as m,J as $,o as z,c as O,w as s,K as t,D as n,ao as v,W as e,f as l,L as b}from"./index-729398ab-97e0bd19.js";import{m as _}from"./index-4c2549d2.js";import{_ as R}from"./FormPage.vue_vue_type_style_index_0_lang-ebb70898.js";const S={class:"section-content"},B={class:"section-content"},C={class:"section-content"},F={class:"section-content"},W={name:"RadioInput"},N=V({...W,setup(U){const{t:u}=I(),h=_.string({required_error:u("form.errors.radio.required")});let i=k({disabled:m("car"),i18nInput:m(),input:m(),inputWithValidation:m(),noLabelInput:m()});const c=[{label:u("form.label.male"),value:"male"},{label:u("form.label.female"),value:"female"}],f=[{label:u("form.label.bike"),value:"bike"},{label:u("form.label.car"),value:"car"},{label:u("form.label.truck"),value:"truck"}];return(a,o)=>{const p=$("SshPre");return z(),O(R,{title:a.$t("form.label.radio"),class:"demo"},{toolbar:s(()=>[t(n(v),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:o[0]||(o[0]=r=>a.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e(),l("section",null,[l("h2",null,b(a.$t("form.label.basicInput")),1),e(),l("div",S,[t(n(d),{modelValue:n(i).input,"onUpdate:modelValue":o[1]||(o[1]=r=>n(i).input=r),label:a.$t("form.label.gender"),options:c,direction:"horizontal",name:"label-input"},null,8,["modelValue","label"]),e(),t(p,{language:"html-vue"},{default:s(()=>[e(`
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
          import { RadioInput } from "@dzangolab/vue3-form";
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,b(a.$t("form.label.disabled")),1),e(),l("div",B,[t(n(d),{modelValue:n(i).disabled,"onUpdate:modelValue":o[2]||(o[2]=r=>n(i).disabled=r),label:a.$t("form.label.vehicle"),options:f,disabled:"",name:"disabled-input"},null,8,["modelValue","label"]),e(),t(p,{language:"html-vue"},{default:s(()=>[e(`
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
          import { RadioInput } from "@dzangolab/vue3-form";
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,b(a.$t("form.label.withI18n")),1),e(),l("div",C,[t(n(d),{modelValue:n(i).i18nInput,"onUpdate:modelValue":o[3]||(o[3]=r=>n(i).i18nInput=r),label:a.$t("form.label.vehicle"),options:f,direction:"horizontal",name:"i18n-input"},null,8,["modelValue","label"]),e(),t(p,{language:"html-vue"},{default:s(()=>[e(`
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
          import { RadioInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,b(a.$t("form.label.inputWithValidation")),1),e(),l("div",F,[t(n(g),null,{default:s(()=>[t(n(d),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":o[4]||(o[4]=r=>n(i).inputWithValidation=r),label:a.$t("form.label.gender"),options:c,schema:n(h)},null,8,["modelValue","label","schema"]),e(),t(n(v),{label:n(u)("form.label.submit")},null,8,["label"])]),_:1}),e(),t(p,{language:"html-vue"},{default:s(()=>[e(`
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
          import { Form, RadioInput } from "@dzangolab/vue3-form";
          import { ButtonElement } from "@dzangolab/vue3-ui";

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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{N as default};
