import{l as r,J as b}from"./DzangolabVue3Form.es-b047fed9.js";import{d as h,a5 as v,p as g,j as p,J as w,o as V,c as I,w as u,K as o,D as l,ao as S,W as e,f as t,L as d}from"./index-729398ab-97e0bd19.js";import{m as $}from"./index-10489b7d.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang-0e434bf3.js";const _={class:"section-content"},F={class:"section-content"},U={class:"section-content"},W={class:"section-content"},k={class:"section-content"},C={name:"SwitchInput"},y=h({...C,setup(D){const{t:c}=v(),f=$.coerce.boolean().refine(n=>n===!0,{message:c("form.errors.switch.invalid")});let i=g({disabled:p(!0),input:p(),inputWithValidation:p(!1),noLabelInput:p()});return(n,a)=>{const m=w("SshPre");return V(),I(z,{title:n.$t("form.label.switch"),class:"demo"},{toolbar:u(()=>[o(l(S),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:a[0]||(a[0]=s=>n.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e(),t("section",null,[t("h2",null,d(n.$t("form.label.basicInput")),1),e(),t("div",_,[o(l(r),{modelValue:l(i).noLabelInput,"onUpdate:modelValue":a[1]||(a[1]=s=>l(i).noLabelInput=s)},null,8,["modelValue"]),e(),o(m,{language:"html-vue"},{default:u(()=>[e(`
          <template>
            <SwitchInput v-model="input" />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,d(n.$t("form.label.labelInput")),1),e(),t("div",F,[o(l(r),{modelValue:l(i).input,"onUpdate:modelValue":a[2]||(a[2]=s=>l(i).input=s),label:n.$t("form.label.switch")},null,8,["modelValue","label"]),e(),o(m,{language:"html-vue"},{default:u(()=>[e(`
          <Form>
            <SwitchInput v-model="input" label="Switch" />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,d(n.$t("form.label.disabled")),1),e(),t("div",U,[o(l(r),{modelValue:l(i).disabled,"onUpdate:modelValue":a[3]||(a[3]=s=>l(i).disabled=s),label:n.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),e(),o(m,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,d(n.$t("form.label.withI18n")),1),e(),t("div",W,[o(l(r),{modelValue:l(i).input,"onUpdate:modelValue":a[4]||(a[4]=s=>l(i).input=s),label:n.$t("form.label.switch")},null,8,["modelValue","label"]),e(),o(m,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,d(n.$t("form.label.inputWithValidation")),1),e(),t("div",k,[o(l(b),null,{default:u(()=>[o(l(r),{modelValue:l(i).inputWithValidation,"onUpdate:modelValue":a[5]||(a[5]=s=>l(i).inputWithValidation=s),label:n.$t("form.label.switch"),schema:l(f)},null,8,["modelValue","label","schema"])]),_:1}),e(),o(m,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{y as default};
