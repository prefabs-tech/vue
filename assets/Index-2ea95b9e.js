import{a as d,J as V}from"./DzangolabVue3Form.es-51baa5bd.js";import{d as k,a7 as _,p as O,j as b,K as v,o as z,c as $,w as s,L as a,C as e,M as m,f as l,E as n,as as R}from"./index-4dbfb8c7-0110dc13.js";import{m as S}from"./index-f3c29e5f.js";import{_ as B}from"./FormPage.vue_vue_type_style_index_0_lang-328842f1.js";const w={class:"section-content"},C={class:"section-content"},F={class:"section-content"},U={class:"section-content"},L={class:"section-content"},T={name:"RadioInput"},P=k({...T,setup(W){const{t:o}=_(),h=S.string({required_error:o("form.errors.radio.required")}),g=[{label:o("form.label.one"),value:1},{label:o("form.label.two"),value:2},{label:o("form.label.three"),value:3}];let i=O({disabled:b("car"),i18nInput:b(),input:b(),inputWithValidation:b(),noLabelInput:b()});const c=[{label:o("form.label.male"),value:"male"},{label:o("form.label.female"),value:"female"}],f=[{label:o("form.label.bike"),value:"bike"},{label:o("form.label.car"),value:"car"},{label:o("form.label.truck"),value:"truck"}];return(t,u)=>{const I=v("router-link"),p=v("SshPre");return z(),$(B,{title:t.$t("form.label.radio"),class:"demo"},{toolbar:s(()=>[a(I,{to:{name:"form"},class:"back"},{default:s(()=>[e(m(t.$t("common.back")),1)]),_:1})]),default:s(()=>[e(),l("section",null,[l("h2",null,m(t.$t("form.label.basicInput")),1),e(),l("div",w,[a(n(d),{modelValue:n(i).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=r=>n(i).noLabelInput=r),options:g,name:"basic"},null,8,["modelValue"]),e(),a(p,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <RadioInput
              v-model="input"
              :options="inputOptions"
              name="input"
            />
          </template>

          <script setup lang="ts">
          import { RadioInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const inputOptions = [
            {
              label: "One",
              value: 1,
            },
            {
              label: "Two",
              value: 2,
            },
            {
              label: "Three",
              value: 3,
            },
          ];
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,m(t.$t("form.label.labelInput")),1),e(),l("div",C,[a(n(d),{modelValue:n(i).input,"onUpdate:modelValue":u[1]||(u[1]=r=>n(i).input=r),label:t.$t("form.label.gender"),options:c,direction:"horizontal",name:"label-input"},null,8,["modelValue","label"]),e(),a(p,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,m(t.$t("form.label.disabled")),1),e(),l("div",F,[a(n(d),{modelValue:n(i).disabled,"onUpdate:modelValue":u[2]||(u[2]=r=>n(i).disabled=r),label:t.$t("form.label.vehicle"),options:f,disabled:"",name:"disabled-input"},null,8,["modelValue","label"]),e(),a(p,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,m(t.$t("form.label.withI18n")),1),e(),l("div",U,[a(n(d),{modelValue:n(i).i18nInput,"onUpdate:modelValue":u[3]||(u[3]=r=>n(i).i18nInput=r),label:t.$t("form.label.vehicle"),options:f,direction:"horizontal",name:"i18n-input"},null,8,["modelValue","label"]),e(),a(p,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,m(t.$t("form.label.inputWithValidation")),1),e(),l("div",L,[a(n(V),null,{default:s(()=>[a(n(d),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=r=>n(i).inputWithValidation=r),label:t.$t("form.label.gender"),options:c,schema:n(h)},null,8,["modelValue","label","schema"]),e(),a(n(R),{label:n(o)("form.label.submit")},null,8,["label"])]),_:1}),e(),a(p,{language:"html-vue"},{default:s(()=>[e(`
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
