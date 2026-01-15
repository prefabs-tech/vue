import{_ as m,w}from"./PrefabsTechVue3Form.es-CI4G5F8T.js";import{d as v,I as V,L as I,M as g,r as d,J as S,e as $,o as h,i as u,f as n,B as t,t as p,h as s,u as e}from"./index-CJbrnafS.js";import{_ as L}from"./FormPage.vue_vue_type_style_index_0_lang-Eg_8sElb.js";const F={class:"section-content"},U={class:"section-content"},y={class:"section-content"},O={class:"section-content"},B={class:"section-content"},N={class:"section-content"},W={name:"SwitchInput"},P=v({...W,setup(k){const{t:f}=V(),b=I.coerce.boolean().refine(o=>o===!0,{message:f("form.errors.switch.invalid")});let i=g({disabled:d(!0),input:d(),inputWithValidation:d(!1),noLabelInput:d(),onOffLabel:d()});return(o,l)=>{const r=S("SshPre");return h(),$(L,{title:o.$t("form.label.switch"),class:"demo"},{default:u(()=>[n("section",null,[n("h2",null,p(o.$t("form.label.basicInput")),1),l[8]||(l[8]=t()),n("div",F,[s(e(m),{modelValue:e(i).noLabelInput,"onUpdate:modelValue":l[0]||(l[0]=a=>e(i).noLabelInput=a)},null,8,["modelValue"]),l[7]||(l[7]=t()),s(r,{language:"html-vue"},{default:u(()=>l[6]||(l[6]=[t(`
          <template>
            <SwitchInput v-model="input" />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),l[24]||(l[24]=t()),n("section",null,[n("h2",null,p(o.$t("form.label.labelInput")),1),l[11]||(l[11]=t()),n("div",U,[s(e(m),{modelValue:e(i).input,"onUpdate:modelValue":l[1]||(l[1]=a=>e(i).input=a),label:o.$t("form.label.switch")},null,8,["modelValue","label"]),l[10]||(l[10]=t()),s(r,{language:"html-vue"},{default:u(()=>l[9]||(l[9]=[t(`
          <Form>
            <SwitchInput v-model="input" label="Switch" />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),l[25]||(l[25]=t()),n("section",null,[n("h2",null,p(o.$t("form.label.disabled")),1),l[14]||(l[14]=t()),n("div",y,[s(e(m),{modelValue:e(i).disabled,"onUpdate:modelValue":l[2]||(l[2]=a=>e(i).disabled=a),label:o.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),l[13]||(l[13]=t()),s(r,{language:"html-vue"},{default:u(()=>l[12]||(l[12]=[t(`
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
        `)])),_:1})])]),l[26]||(l[26]=t()),n("section",null,[n("h2",null,p(o.$t("form.label.withOnOffLabel")),1),l[17]||(l[17]=t()),n("div",O,[s(e(m),{modelValue:e(i).onOffLabel,"onUpdate:modelValue":l[3]||(l[3]=a=>e(i).onOffLabel=a),label:o.$t("form.label.switch"),"off-label":o.$t("form.label.no"),"on-label":o.$t("form.label.yes")},null,8,["modelValue","label","off-label","on-label"]),l[16]||(l[16]=t()),s(r,{language:"html-vue"},{default:u(()=>l[15]||(l[15]=[t(`
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
        `)])),_:1})])]),l[27]||(l[27]=t()),n("section",null,[n("h2",null,p(o.$t("form.label.withI18n")),1),l[20]||(l[20]=t()),n("div",B,[s(e(m),{modelValue:e(i).input,"onUpdate:modelValue":l[4]||(l[4]=a=>e(i).input=a),label:o.$t("form.label.switch")},null,8,["modelValue","label"]),l[19]||(l[19]=t()),s(r,{language:"html-vue"},{default:u(()=>l[18]||(l[18]=[t(`
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
        `)])),_:1})])]),l[28]||(l[28]=t()),n("section",null,[n("h2",null,p(o.$t("form.label.inputWithValidation")),1),l[23]||(l[23]=t()),n("div",N,[s(e(w),null,{default:u(()=>[s(e(m),{modelValue:e(i).inputWithValidation,"onUpdate:modelValue":l[5]||(l[5]=a=>e(i).inputWithValidation=a),label:o.$t("form.label.switch"),schema:e(b)},null,8,["modelValue","label","schema"])]),_:1}),l[22]||(l[22]=t()),s(r,{language:"html-vue"},{default:u(()=>l[21]||(l[21]=[t(`
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
