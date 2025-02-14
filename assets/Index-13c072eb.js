import{l as r,J as c}from"./DzangolabVue3Form.es-81449376.js";import{d as h,a5 as v,p as w,j as p,J as g,o as V,c as I,w as u,K as a,D as e,ao as S,W as l,f as n,L as d}from"./index-729398ab-97e0bd19.js";import{m as $}from"./index-4c2549d2.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang-ebb70898.js";const L={class:"section-content"},F={class:"section-content"},y={class:"section-content"},O={class:"section-content"},U={class:"section-content"},_={class:"section-content"},k={name:"SwitchInput"},J=h({...k,setup(W){const{t:f}=v(),b=$.coerce.boolean().refine(t=>t===!0,{message:f("form.errors.switch.invalid")});let i=w({disabled:p(!0),input:p(),inputWithValidation:p(!1),noLabelInput:p(),onOffLabel:p()});return(t,o)=>{const m=g("SshPre");return V(),I(z,{title:t.$t("form.label.switch"),class:"demo"},{toolbar:u(()=>[a(e(S),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:o[0]||(o[0]=s=>t.$router.push("/form"))},null,8,["label"])]),default:u(()=>[l(),n("section",null,[n("h2",null,d(t.$t("form.label.basicInput")),1),l(),n("div",L,[a(e(r),{modelValue:e(i).noLabelInput,"onUpdate:modelValue":o[1]||(o[1]=s=>e(i).noLabelInput=s)},null,8,["modelValue"]),l(),a(m,{language:"html-vue"},{default:u(()=>[l(`
          <template>
            <SwitchInput v-model="input" />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l()])]),l(),n("section",null,[n("h2",null,d(t.$t("form.label.labelInput")),1),l(),n("div",F,[a(e(r),{modelValue:e(i).input,"onUpdate:modelValue":o[2]||(o[2]=s=>e(i).input=s),label:t.$t("form.label.switch")},null,8,["modelValue","label"]),l(),a(m,{language:"html-vue"},{default:u(()=>[l(`
          <Form>
            <SwitchInput v-model="input" label="Switch" />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l()])]),l(),n("section",null,[n("h2",null,d(t.$t("form.label.disabled")),1),l(),n("div",y,[a(e(r),{modelValue:e(i).disabled,"onUpdate:modelValue":o[3]||(o[3]=s=>e(i).disabled=s),label:t.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),l(),a(m,{language:"html-vue"},{default:u(()=>[l(`
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
        `)]),_:1}),l()])]),l(),n("section",null,[n("h2",null,d(t.$t("form.label.withOnOffLabel")),1),l(),n("div",O,[a(e(r),{modelValue:e(i).onOffLabel,"onUpdate:modelValue":o[4]||(o[4]=s=>e(i).onOffLabel=s),label:t.$t("form.label.switch"),"off-label":t.$t("form.label.no"),"on-label":t.$t("form.label.yes")},null,8,["modelValue","label","off-label","on-label"]),l(),a(m,{language:"html-vue"},{default:u(()=>[l(`
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
        `)]),_:1}),l()])]),l(),n("section",null,[n("h2",null,d(t.$t("form.label.withI18n")),1),l(),n("div",U,[a(e(r),{modelValue:e(i).input,"onUpdate:modelValue":o[5]||(o[5]=s=>e(i).input=s),label:t.$t("form.label.switch")},null,8,["modelValue","label"]),l(),a(m,{language:"html-vue"},{default:u(()=>[l(`
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
        `)]),_:1}),l()])]),l(),n("section",null,[n("h2",null,d(t.$t("form.label.inputWithValidation")),1),l(),n("div",_,[a(e(c),null,{default:u(()=>[a(e(r),{modelValue:e(i).inputWithValidation,"onUpdate:modelValue":o[6]||(o[6]=s=>e(i).inputWithValidation=s),label:t.$t("form.label.switch"),schema:e(b)},null,8,["modelValue","label","schema"])]),_:1}),l(),a(m,{language:"html-vue"},{default:u(()=>[l(`
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
        `)]),_:1}),l()])])]),_:1},8,["title"])}}});export{J as default};
