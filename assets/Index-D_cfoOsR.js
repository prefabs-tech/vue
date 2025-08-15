import{E as m,$ as v}from"./PrefabsTechVue3Form.es-Cp66sc_V.js";import{d as w,G as V,I,L as g,r as d,H as S,e as $,o as h,j as u,B as t,f as o,t as p,h as s,u as e,v as L}from"./index-B2kpz5D5.js";import{_ as F}from"./FormPage.vue_vue_type_style_index_0_lang-DxHfEpv_.js";const y={class:"section-content"},O={class:"section-content"},U={class:"section-content"},k={class:"section-content"},B={class:"section-content"},C={class:"section-content"},N={name:"SwitchInput"},P=w({...N,setup(W){const{t:f}=V(),b=I.coerce.boolean().refine(n=>n===!0,{message:f("form.errors.switch.invalid")});let i=g({disabled:d(!0),input:d(),inputWithValidation:d(!1),noLabelInput:d(),onOffLabel:d()});return(n,l)=>{const r=S("SshPre");return h(),$(F,{title:n.$t("form.label.switch"),class:"demo"},{toolbar:u(()=>[s(e(L),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=a=>n.$router.push("/form"))},null,8,["label"])]),default:u(()=>[l[25]||(l[25]=t()),o("section",null,[o("h2",null,p(n.$t("form.label.basicInput")),1),l[9]||(l[9]=t()),o("div",y,[s(e(m),{modelValue:e(i).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=a=>e(i).noLabelInput=a)},null,8,["modelValue"]),l[8]||(l[8]=t()),s(r,{language:"html-vue"},{default:u(()=>l[7]||(l[7]=[t(`
          <template>
            <SwitchInput v-model="input" />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),l[26]||(l[26]=t()),o("section",null,[o("h2",null,p(n.$t("form.label.labelInput")),1),l[12]||(l[12]=t()),o("div",O,[s(e(m),{modelValue:e(i).input,"onUpdate:modelValue":l[2]||(l[2]=a=>e(i).input=a),label:n.$t("form.label.switch")},null,8,["modelValue","label"]),l[11]||(l[11]=t()),s(r,{language:"html-vue"},{default:u(()=>l[10]||(l[10]=[t(`
          <Form>
            <SwitchInput v-model="input" label="Switch" />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),l[27]||(l[27]=t()),o("section",null,[o("h2",null,p(n.$t("form.label.disabled")),1),l[15]||(l[15]=t()),o("div",U,[s(e(m),{modelValue:e(i).disabled,"onUpdate:modelValue":l[3]||(l[3]=a=>e(i).disabled=a),label:n.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),l[14]||(l[14]=t()),s(r,{language:"html-vue"},{default:u(()=>l[13]||(l[13]=[t(`
          <template>
            <SwitchInput 
              v-model="disabled"
              disabled
              label="Disabled"
            />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const disabled = ref(true);
          <\/script>
        `)])),_:1})])]),l[28]||(l[28]=t()),o("section",null,[o("h2",null,p(n.$t("form.label.withOnOffLabel")),1),l[18]||(l[18]=t()),o("div",k,[s(e(m),{modelValue:e(i).onOffLabel,"onUpdate:modelValue":l[4]||(l[4]=a=>e(i).onOffLabel=a),label:n.$t("form.label.switch"),"off-label":n.$t("form.label.no"),"on-label":n.$t("form.label.yes")},null,8,["modelValue","label","off-label","on-label"]),l[17]||(l[17]=t()),s(r,{language:"html-vue"},{default:u(()=>l[16]||(l[16]=[t(`
          <Form>
            <SwitchInput
              v-model="input"
              :label="$t('form.label.switch')"
              off-label="No"
              on-label="Yes"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          <\/script>

          <style>
            .switch input[type=checkbox] {
              --_width: 5rem;
            }
          </style>
        `)])),_:1})])]),l[29]||(l[29]=t()),o("section",null,[o("h2",null,p(n.$t("form.label.withI18n")),1),l[21]||(l[21]=t()),o("div",B,[s(e(m),{modelValue:e(i).input,"onUpdate:modelValue":l[5]||(l[5]=a=>e(i).input=a),label:n.$t("form.label.switch")},null,8,["modelValue","label"]),l[20]||(l[20]=t()),s(r,{language:"html-vue"},{default:u(()=>l[19]||(l[19]=[t(`
          <template>
            <SwitchInput 
              v-model="input"
              :label="t('form.label.switch')"
            />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),l[30]||(l[30]=t()),o("section",null,[o("h2",null,p(n.$t("form.label.inputWithValidation")),1),l[24]||(l[24]=t()),o("div",C,[s(e(v),null,{default:u(()=>[s(e(m),{modelValue:e(i).inputWithValidation,"onUpdate:modelValue":l[6]||(l[6]=a=>e(i).inputWithValidation=a),label:n.$t("form.label.switch"),schema:e(b)},null,8,["modelValue","label","schema"])]),_:1}),l[23]||(l[23]=t()),s(r,{language:"html-vue"},{default:u(()=>l[22]||(l[22]=[t(`
          <Form>
            <SwitchInput 
              v-model="disabled"
              :schema="inputSchema"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { Form, SwitchInput } from "@prefabs.tech/vue3-form";

          const inputSchema = z.coerce
            .boolean()
            .refine((value) => value === true, {
              message: t("form.errors.switch.invalid"),
            });
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{P as default};
