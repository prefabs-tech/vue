import{u as d,o as g}from"./DzangolabVue3Form.es-CpaDvokg.js";import{d as V,z as I,A as k,B as z,r as m,s as $,j as O,o as _,w as s,C as e,e as l,t as b,g as a,u as n,D as v}from"./index-CVjUtB44.js";import{_ as R}from"./FormPage.vue_vue_type_style_index_0_lang-DaPY-vu5.js";const B={class:"section-content"},S={class:"section-content"},C={class:"section-content"},F={class:"section-content"},U={name:"RadioInput"},N=V({...U,setup(W){const{t:u}=I(),h=k.string({required_error:u("form.errors.radio.required")});let i=z({disabled:m("car"),i18nInput:m(),input:m(),inputWithValidation:m(),noLabelInput:m()});const c=[{label:u("form.label.male"),value:"male"},{label:u("form.label.female"),value:"female"}],f=[{label:u("form.label.bike"),value:"bike"},{label:u("form.label.car"),value:"car"},{label:u("form.label.truck"),value:"truck"}];return(t,o)=>{const p=$("SshPre");return _(),O(R,{title:t.$t("form.label.radio"),class:"demo"},{toolbar:s(()=>[a(n(v),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:o[0]||(o[0]=r=>t.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e(),l("section",null,[l("h2",null,b(t.$t("form.label.basicInput")),1),e(),l("div",B,[a(n(d),{modelValue:n(i).input,"onUpdate:modelValue":o[1]||(o[1]=r=>n(i).input=r),label:t.$t("form.label.gender"),options:c,direction:"horizontal",name:"label-input"},null,8,["modelValue","label"]),e(),a(p,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,b(t.$t("form.label.disabled")),1),e(),l("div",S,[a(n(d),{modelValue:n(i).disabled,"onUpdate:modelValue":o[2]||(o[2]=r=>n(i).disabled=r),label:t.$t("form.label.vehicle"),options:f,disabled:"",name:"disabled-input"},null,8,["modelValue","label"]),e(),a(p,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,b(t.$t("form.label.withI18n")),1),e(),l("div",C,[a(n(d),{modelValue:n(i).i18nInput,"onUpdate:modelValue":o[3]||(o[3]=r=>n(i).i18nInput=r),label:t.$t("form.label.vehicle"),options:f,direction:"horizontal",name:"i18n-input"},null,8,["modelValue","label"]),e(),a(p,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,b(t.$t("form.label.inputWithValidation")),1),e(),l("div",F,[a(n(g),null,{default:s(()=>[a(n(d),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":o[4]||(o[4]=r=>n(i).inputWithValidation=r),label:t.$t("form.label.gender"),options:c,schema:n(h)},null,8,["modelValue","label","schema"]),e(),a(n(v),{label:n(u)("form.label.submit")},null,8,["label"])]),_:1}),e(),a(p,{language:"html-vue"},{default:s(()=>[e(`
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
