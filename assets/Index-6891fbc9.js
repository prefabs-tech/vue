import{a as b,J as V}from"./DzangolabVue3Form.es-e9efd21c.js";import{d as k,a5 as I,p as _,j as m,J as v,o as z,c as $,w as r,K as a,W as e,L as p,f as l,D as n,aq as O}from"./index-35228b09-5de2cbe6.js";import{m as R}from"./index-e4278714.js";import{_ as S}from"./FormPage.vue_vue_type_style_index_0_lang-a62ec854.js";const B={class:"section-content"},F={class:"section-content"},W={class:"section-content"},q={class:"section-content"},C={name:"RadioInput"},P=k({...C,setup(U){const{t:s}=I(),h=R.string({required_error:s("form.errors.radio.required")});let o=_({disabled:m("car"),i18nInput:m(),input:m(),inputWithValidation:m(),noLabelInput:m()});const c=[{label:s("form.label.male"),value:"male"},{label:s("form.label.female"),value:"female"}],f=[{label:s("form.label.bike"),value:"bike"},{label:s("form.label.car"),value:"car"},{label:s("form.label.truck"),value:"truck"}];return(t,i)=>{const g=v("router-link"),d=v("SshPre");return z(),$(S,{title:t.$t("form.label.radio"),class:"demo"},{toolbar:r(()=>[a(g,{to:{name:"form"},class:"back"},{default:r(()=>[e(p(t.$t("common.back")),1)]),_:1})]),default:r(()=>[e(),l("section",null,[l("h2",null,p(t.$t("form.label.basicInput")),1),e(),l("div",B,[a(n(b),{modelValue:n(o).input,"onUpdate:modelValue":i[0]||(i[0]=u=>n(o).input=u),label:t.$t("form.label.gender"),options:c,direction:"horizontal",name:"label-input"},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,p(t.$t("form.label.disabled")),1),e(),l("div",F,[a(n(b),{modelValue:n(o).disabled,"onUpdate:modelValue":i[1]||(i[1]=u=>n(o).disabled=u),label:t.$t("form.label.vehicle"),options:f,disabled:"",name:"disabled-input"},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,p(t.$t("form.label.withI18n")),1),e(),l("div",W,[a(n(b),{modelValue:n(o).i18nInput,"onUpdate:modelValue":i[2]||(i[2]=u=>n(o).i18nInput=u),label:t.$t("form.label.vehicle"),options:f,direction:"horizontal",name:"i18n-input"},null,8,["modelValue","label"]),e(),a(d,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,p(t.$t("form.label.inputWithValidation")),1),e(),l("div",q,[a(n(V),null,{default:r(()=>[a(n(b),{modelValue:n(o).inputWithValidation,"onUpdate:modelValue":i[3]||(i[3]=u=>n(o).inputWithValidation=u),label:t.$t("form.label.gender"),options:c,schema:n(h)},null,8,["modelValue","label","schema"]),e(),a(n(O),{label:n(s)("form.label.submit")},null,8,["label"])]),_:1}),e(),a(d,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{P as default};
