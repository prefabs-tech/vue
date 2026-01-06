import{g as d,p as V}from"./PrefabsTechVue3Form.es-DyUjwyEB.js";import{d as I,I as k,L as h,M as c,r as m,J as O,e as $,o as R,i as u,f as t,B as n,t as b,h as o,u as l,q as B}from"./index-BWoU1sNs.js";import{_ as S}from"./FormPage.vue_vue_type_style_index_0_lang-C6GHd3tt.js";const z={class:"section-content"},q={class:"section-content"},F={class:"section-content"},w={class:"section-content"},C={name:"RadioInput"},M=I({...C,setup(P){const{t:i}=k(),g=h.string({required_error:i("form.errors.radio.required")}).nonempty({message:i("form.errors.radio.required")});let r=c({disabled:m("car"),i18nInput:m(),input:m(),inputWithValidation:m(),noLabelInput:m()});const f=[{label:i("form.label.male"),value:"male"},{label:i("form.label.female"),value:"female"}],v=[{label:i("form.label.bike"),value:"bike"},{label:i("form.label.car"),value:"car"},{label:i("form.label.truck"),value:"truck"}];return(a,e)=>{const p=O("SshPre");return R(),$(S,{title:a.$t("form.label.radio"),class:"demo"},{default:u(()=>[t("section",null,[t("h2",null,b(a.$t("form.label.basicInput")),1),e[6]||(e[6]=n()),t("div",z,[o(l(d),{modelValue:l(r).input,"onUpdate:modelValue":e[0]||(e[0]=s=>l(r).input=s),label:a.$t("form.label.gender"),options:f,direction:"horizontal",name:"label-input"},null,8,["modelValue","label"]),e[5]||(e[5]=n()),o(p,{language:"html-vue"},{default:u(()=>e[4]||(e[4]=[n(`
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
        `)])),_:1})])]),e[17]||(e[17]=n()),t("section",null,[t("h2",null,b(a.$t("form.label.disabled")),1),e[9]||(e[9]=n()),t("div",q,[o(l(d),{modelValue:l(r).disabled,"onUpdate:modelValue":e[1]||(e[1]=s=>l(r).disabled=s),label:a.$t("form.label.vehicle"),options:v,disabled:"",name:"disabled-input"},null,8,["modelValue","label"]),e[8]||(e[8]=n()),o(p,{language:"html-vue"},{default:u(()=>e[7]||(e[7]=[n(`
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
        `)])),_:1})])]),e[18]||(e[18]=n()),t("section",null,[t("h2",null,b(a.$t("form.label.withI18n")),1),e[12]||(e[12]=n()),t("div",F,[o(l(d),{modelValue:l(r).i18nInput,"onUpdate:modelValue":e[2]||(e[2]=s=>l(r).i18nInput=s),label:a.$t("form.label.vehicle"),options:v,direction:"horizontal",name:"i18n-input"},null,8,["modelValue","label"]),e[11]||(e[11]=n()),o(p,{language:"html-vue"},{default:u(()=>e[10]||(e[10]=[n(`
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
        `)])),_:1})])]),e[19]||(e[19]=n()),t("section",null,[t("h2",null,b(a.$t("form.label.inputWithValidation")),1),e[16]||(e[16]=n()),t("div",w,[o(l(V),null,{default:u(()=>[o(l(d),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":e[3]||(e[3]=s=>l(r).inputWithValidation=s),label:a.$t("form.label.gender"),options:f,schema:l(g),name:"gender"},null,8,["modelValue","label","schema"]),e[13]||(e[13]=n()),o(l(B),{label:l(i)("form.label.submit")},null,8,["label"])]),_:1}),e[15]||(e[15]=n()),o(p,{language:"html-vue"},{default:u(()=>e[14]||(e[14]=[n(`
          <template>
            <Form>
              <RadioInput 
                v-model="input"
                :options="genderOptions"
                :schema="inputSchema"
                label="Gender"
                name="gender"
              />

              <ButtonElement label="Submit" />
            </Form>
          </template>

          <script setup lang="ts">
          import { Form, RadioInput } from "@prefabs.tech/vue3-form";
          import { ButtonElement } from "@prefabs.tech/vue3-ui";

          const inputSchema = z
            .string({
              required_error: "Please choose one option",
            })
            .nonempty({ message: "Please choose one option" });

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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{M as default};
