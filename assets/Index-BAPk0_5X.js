import{c as r,o as c}from"./DzangolabVue3Form.es-k-Xjvcvt.js";import{d as h,z as v,A as w,r as p,s as g,j as V,o as I,w as u,B as e,e as n,t as d,g as a,u as l,C as S}from"./index-CqimUq5D.js";import{z as $}from"./index-mSkvzYyn.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang-g4uxL8pa.js";const F={class:"section-content"},L={class:"section-content"},y={class:"section-content"},O={class:"section-content"},U={class:"section-content"},_={class:"section-content"},k={name:"SwitchInput"},P=h({...k,setup(C){const{t:f}=v(),b=$.coerce.boolean().refine(t=>t===!0,{message:f("form.errors.switch.invalid")});let i=w({disabled:p(!0),input:p(),inputWithValidation:p(!1),noLabelInput:p(),onOffLabel:p()});return(t,o)=>{const m=g("SshPre");return I(),V(z,{title:t.$t("form.label.switch"),class:"demo"},{toolbar:u(()=>[a(l(S),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:o[0]||(o[0]=s=>t.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e(),n("section",null,[n("h2",null,d(t.$t("form.label.basicInput")),1),e(),n("div",F,[a(l(r),{modelValue:l(i).noLabelInput,"onUpdate:modelValue":o[1]||(o[1]=s=>l(i).noLabelInput=s)},null,8,["modelValue"]),e(),a(m,{language:"html-vue"},{default:u(()=>[e(`
          <template>
            <SwitchInput v-model="input" />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(t.$t("form.label.labelInput")),1),e(),n("div",L,[a(l(r),{modelValue:l(i).input,"onUpdate:modelValue":o[2]||(o[2]=s=>l(i).input=s),label:t.$t("form.label.switch")},null,8,["modelValue","label"]),e(),a(m,{language:"html-vue"},{default:u(()=>[e(`
          <Form>
            <SwitchInput v-model="input" label="Switch" />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(t.$t("form.label.disabled")),1),e(),n("div",y,[a(l(r),{modelValue:l(i).disabled,"onUpdate:modelValue":o[3]||(o[3]=s=>l(i).disabled=s),label:t.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),e(),a(m,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(t.$t("form.label.withOnOffLabel")),1),e(),n("div",O,[a(l(r),{modelValue:l(i).onOffLabel,"onUpdate:modelValue":o[4]||(o[4]=s=>l(i).onOffLabel=s),label:t.$t("form.label.switch"),"off-label":t.$t("form.label.no"),"on-label":t.$t("form.label.yes")},null,8,["modelValue","label","off-label","on-label"]),e(),a(m,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(t.$t("form.label.withI18n")),1),e(),n("div",U,[a(l(r),{modelValue:l(i).input,"onUpdate:modelValue":o[5]||(o[5]=s=>l(i).input=s),label:t.$t("form.label.switch")},null,8,["modelValue","label"]),e(),a(m,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,d(t.$t("form.label.inputWithValidation")),1),e(),n("div",_,[a(l(c),null,{default:u(()=>[a(l(r),{modelValue:l(i).inputWithValidation,"onUpdate:modelValue":o[6]||(o[6]=s=>l(i).inputWithValidation=s),label:t.$t("form.label.switch"),schema:l(b)},null,8,["modelValue","label","schema"])]),_:1}),e(),a(m,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{P as default};
