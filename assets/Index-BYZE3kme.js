import{e as d,G as I}from"./DzangolabVue3Form.es-DhvwW6mt.js";import{d as k,J as z,L as $,M as O,r as m,I as R,e as S,o as B,i as s,E as n,f as t,t as b,g as a,u as l,x as g}from"./index-CS6scmA6.js";import{_ as C}from"./FormPage.vue_vue_type_style_index_0_lang-BT0-Gq40.js";const F={class:"section-content"},G={class:"section-content"},U={class:"section-content"},W={class:"section-content"},h={name:"RadioInput"},P=k({...h,setup(q){const{t:u}=z(),V=$.string({required_error:u("form.errors.radio.required")});let i=O({disabled:m("car"),i18nInput:m(),input:m(),inputWithValidation:m(),noLabelInput:m()});const f=[{label:u("form.label.male"),value:"male"},{label:u("form.label.female"),value:"female"}],v=[{label:u("form.label.bike"),value:"bike"},{label:u("form.label.car"),value:"car"},{label:u("form.label.truck"),value:"truck"}];return(o,e)=>{const p=R("SshPre");return B(),S(C,{title:o.$t("form.label.radio"),class:"demo"},{toolbar:s(()=>[a(l(g),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=r=>o.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e[18]||(e[18]=n()),t("section",null,[t("h2",null,b(o.$t("form.label.basicInput")),1),e[7]||(e[7]=n()),t("div",F,[a(l(d),{modelValue:l(i).input,"onUpdate:modelValue":e[1]||(e[1]=r=>l(i).input=r),label:o.$t("form.label.gender"),options:f,direction:"horizontal",name:"label-input"},null,8,["modelValue","label"]),e[6]||(e[6]=n()),a(p,{language:"html-vue"},{default:s(()=>e[5]||(e[5]=[n(`
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
        `)])),_:1})])]),e[19]||(e[19]=n()),t("section",null,[t("h2",null,b(o.$t("form.label.disabled")),1),e[10]||(e[10]=n()),t("div",G,[a(l(d),{modelValue:l(i).disabled,"onUpdate:modelValue":e[2]||(e[2]=r=>l(i).disabled=r),label:o.$t("form.label.vehicle"),options:v,disabled:"",name:"disabled-input"},null,8,["modelValue","label"]),e[9]||(e[9]=n()),a(p,{language:"html-vue"},{default:s(()=>e[8]||(e[8]=[n(`
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
        `)])),_:1})])]),e[20]||(e[20]=n()),t("section",null,[t("h2",null,b(o.$t("form.label.withI18n")),1),e[13]||(e[13]=n()),t("div",U,[a(l(d),{modelValue:l(i).i18nInput,"onUpdate:modelValue":e[3]||(e[3]=r=>l(i).i18nInput=r),label:o.$t("form.label.vehicle"),options:v,direction:"horizontal",name:"i18n-input"},null,8,["modelValue","label"]),e[12]||(e[12]=n()),a(p,{language:"html-vue"},{default:s(()=>e[11]||(e[11]=[n(`
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
        `)])),_:1})])]),e[21]||(e[21]=n()),t("section",null,[t("h2",null,b(o.$t("form.label.inputWithValidation")),1),e[17]||(e[17]=n()),t("div",W,[a(l(I),null,{default:s(()=>[a(l(d),{modelValue:l(i).inputWithValidation,"onUpdate:modelValue":e[4]||(e[4]=r=>l(i).inputWithValidation=r),label:o.$t("form.label.gender"),options:f,schema:l(V)},null,8,["modelValue","label","schema"]),e[14]||(e[14]=n()),a(l(g),{label:l(u)("form.label.submit")},null,8,["label"])]),_:1}),e[16]||(e[16]=n()),a(p,{language:"html-vue"},{default:s(()=>e[15]||(e[15]=[n(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{P as default};
