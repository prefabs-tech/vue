import{U as r,q as v}from"./DzangolabVue3Form.es-CVl3nFuh.js";import{d as g,L as w,M as V,N as I,r as p,K as S,f as $,o as z,i as u,D as t,g as o,t as d,h as i,u as n,v as L}from"./index-7No6seO6.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-p8as5YuZ.js";const F={class:"section-content"},y={class:"section-content"},O={class:"section-content"},k={class:"section-content"},N={class:"section-content"},C={class:"section-content"},D={name:"SwitchInput"},P=g({...D,setup(W){const{t:f}=w(),b=V.coerce.boolean().refine(e=>e===!0,{message:f("form.errors.switch.invalid")});let s=I({disabled:p(!0),input:p(),inputWithValidation:p(!1),noLabelInput:p(),onOffLabel:p()});return(e,l)=>{const m=S("SshPre");return z(),$(U,{title:e.$t("form.label.switch"),class:"demo"},{toolbar:u(()=>[i(n(L),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=a=>e.$router.push("/form"))},null,8,["label"])]),default:u(()=>[l[25]||(l[25]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.basicInput")),1),l[9]||(l[9]=t()),o("div",F,[i(n(r),{modelValue:n(s).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=a=>n(s).noLabelInput=a)},null,8,["modelValue"]),l[8]||(l[8]=t()),i(m,{language:"html-vue"},{default:u(()=>l[7]||(l[7]=[t(`
          <template>
            <SwitchInput v-model="input" />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),l[26]||(l[26]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.labelInput")),1),l[12]||(l[12]=t()),o("div",y,[i(n(r),{modelValue:n(s).input,"onUpdate:modelValue":l[2]||(l[2]=a=>n(s).input=a),label:e.$t("form.label.switch")},null,8,["modelValue","label"]),l[11]||(l[11]=t()),i(m,{language:"html-vue"},{default:u(()=>l[10]||(l[10]=[t(`
          <Form>
            <SwitchInput v-model="input" label="Switch" />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),l[27]||(l[27]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.disabled")),1),l[15]||(l[15]=t()),o("div",O,[i(n(r),{modelValue:n(s).disabled,"onUpdate:modelValue":l[3]||(l[3]=a=>n(s).disabled=a),label:e.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),l[14]||(l[14]=t()),i(m,{language:"html-vue"},{default:u(()=>l[13]||(l[13]=[t(`
          <template>
            <SwitchInput 
              v-model="disabled"
              disabled
              label="Disabled"
            />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const disabled = ref(true);
          <\/script>
        `)])),_:1})])]),l[28]||(l[28]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.withOnOffLabel")),1),l[18]||(l[18]=t()),o("div",k,[i(n(r),{modelValue:n(s).onOffLabel,"onUpdate:modelValue":l[4]||(l[4]=a=>n(s).onOffLabel=a),label:e.$t("form.label.switch"),"off-label":e.$t("form.label.no"),"on-label":e.$t("form.label.yes")},null,8,["modelValue","label","off-label","on-label"]),l[17]||(l[17]=t()),i(m,{language:"html-vue"},{default:u(()=>l[16]||(l[16]=[t(`
          <Form>
            <SwitchInput
              v-model="input"
              :label="$t('form.label.switch')"
              off-label="No"
              on-label="Yes"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>

          <style>
            .switch input[type=checkbox] {
              --_width: 5rem;
            }
          </style>
        `)])),_:1})])]),l[29]||(l[29]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.withI18n")),1),l[21]||(l[21]=t()),o("div",N,[i(n(r),{modelValue:n(s).input,"onUpdate:modelValue":l[5]||(l[5]=a=>n(s).input=a),label:e.$t("form.label.switch")},null,8,["modelValue","label"]),l[20]||(l[20]=t()),i(m,{language:"html-vue"},{default:u(()=>l[19]||(l[19]=[t(`
          <template>
            <SwitchInput 
              v-model="input"
              :label="t('form.label.switch')"
            />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),l[30]||(l[30]=t()),o("section",null,[o("h2",null,d(e.$t("form.label.inputWithValidation")),1),l[24]||(l[24]=t()),o("div",C,[i(n(v),null,{default:u(()=>[i(n(r),{modelValue:n(s).inputWithValidation,"onUpdate:modelValue":l[6]||(l[6]=a=>n(s).inputWithValidation=a),label:e.$t("form.label.switch"),schema:n(b)},null,8,["modelValue","label","schema"])]),_:1}),l[23]||(l[23]=t()),i(m,{language:"html-vue"},{default:u(()=>l[22]||(l[22]=[t(`
          <Form>
            <SwitchInput 
              v-model="disabled"
              :schema="inputSchema"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { Form, SwitchInput } from "@dzangolab/vue3-form";

          const inputSchema = z.coerce
            .boolean()
            .refine((value) => value === true, {
              message: t("form.errors.switch.invalid"),
            });
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{P as default};
