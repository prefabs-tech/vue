import{Q as d,U as I}from"./DzangolabVue3Form.es-tfmYdqFo.js";import{d as k,L as z,M as $,N as O,r as m,K as R,f as S,o as B,i as s,E as e,g as t,t as b,h as a,u as l,x as g}from"./index-BBut1mgF.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-Bm8pizdm.js";const C={class:"section-content"},F={class:"section-content"},N={class:"section-content"},W={class:"section-content"},h={name:"RadioInput"},w=k({...h,setup(q){const{t:u}=z(),V=$.string({required_error:u("form.errors.radio.required")});let i=O({disabled:m("car"),i18nInput:m(),input:m(),inputWithValidation:m(),noLabelInput:m()});const f=[{label:u("form.label.male"),value:"male"},{label:u("form.label.female"),value:"female"}],v=[{label:u("form.label.bike"),value:"bike"},{label:u("form.label.car"),value:"car"},{label:u("form.label.truck"),value:"truck"}];return(o,n)=>{const p=R("SshPre");return B(),S(U,{title:o.$t("form.label.radio"),class:"demo"},{toolbar:s(()=>[a(l(g),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=r=>o.$router.push("/form"))},null,8,["label"])]),default:s(()=>[n[18]||(n[18]=e()),t("section",null,[t("h2",null,b(o.$t("form.label.basicInput")),1),n[7]||(n[7]=e()),t("div",C,[a(l(d),{modelValue:l(i).input,"onUpdate:modelValue":n[1]||(n[1]=r=>l(i).input=r),label:o.$t("form.label.gender"),options:f,direction:"horizontal",name:"label-input"},null,8,["modelValue","label"]),n[6]||(n[6]=e()),a(p,{language:"html-vue"},{default:s(()=>n[5]||(n[5]=[e(`
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
        `)])),_:1})])]),n[19]||(n[19]=e()),t("section",null,[t("h2",null,b(o.$t("form.label.disabled")),1),n[10]||(n[10]=e()),t("div",F,[a(l(d),{modelValue:l(i).disabled,"onUpdate:modelValue":n[2]||(n[2]=r=>l(i).disabled=r),label:o.$t("form.label.vehicle"),options:v,disabled:"",name:"disabled-input"},null,8,["modelValue","label"]),n[9]||(n[9]=e()),a(p,{language:"html-vue"},{default:s(()=>n[8]||(n[8]=[e(`
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
        `)])),_:1})])]),n[20]||(n[20]=e()),t("section",null,[t("h2",null,b(o.$t("form.label.withI18n")),1),n[13]||(n[13]=e()),t("div",N,[a(l(d),{modelValue:l(i).i18nInput,"onUpdate:modelValue":n[3]||(n[3]=r=>l(i).i18nInput=r),label:o.$t("form.label.vehicle"),options:v,direction:"horizontal",name:"i18n-input"},null,8,["modelValue","label"]),n[12]||(n[12]=e()),a(p,{language:"html-vue"},{default:s(()=>n[11]||(n[11]=[e(`
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
        `)])),_:1})])]),n[21]||(n[21]=e()),t("section",null,[t("h2",null,b(o.$t("form.label.inputWithValidation")),1),n[17]||(n[17]=e()),t("div",W,[a(l(I),null,{default:s(()=>[a(l(d),{modelValue:l(i).inputWithValidation,"onUpdate:modelValue":n[4]||(n[4]=r=>l(i).inputWithValidation=r),label:o.$t("form.label.gender"),options:f,schema:l(V)},null,8,["modelValue","label","schema"]),n[14]||(n[14]=e()),a(l(g),{label:l(u)("form.label.submit")},null,8,["label"])]),_:1}),n[16]||(n[16]=e()),a(p,{language:"html-vue"},{default:s(()=>n[15]||(n[15]=[e(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{w as default};
