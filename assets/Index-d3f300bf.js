import{l as d,J as v}from"./DzangolabVue3Form.es-521f667e.js";import{d as g,a5 as w,p as V,j as p,J as c,o as I,c as S,w as u,K as a,W as e,L as m,f as l,D as t}from"./index-35228b09-5de2cbe6.js";import{m as _}from"./index-24897c11.js";import{_ as $}from"./FormPage.vue_vue_type_style_index_0_lang-f3bbd4a3.js";const z={class:"section-content"},k={class:"section-content"},F={class:"section-content"},U={class:"section-content"},W={class:"section-content"},D={name:"SwitchInput"},P=g({...D,setup(L){const{t:f}=w(),b=_.coerce.boolean().refine(n=>n===!0,{message:f("form.errors.switch.invalid")});let o=V({disabled:p(!0),input:p(),inputWithValidation:p(!1),noLabelInput:p()});return(n,s)=>{const h=c("router-link"),r=c("SshPre");return I(),S($,{title:n.$t("form.label.switch"),class:"demo"},{toolbar:u(()=>[a(h,{to:{name:"form"},class:"back"},{default:u(()=>[e(m(n.$t("common.back")),1)]),_:1})]),default:u(()=>[e(),l("section",null,[l("h2",null,m(n.$t("form.label.basicInput")),1),e(),l("div",z,[a(t(d),{modelValue:t(o).noLabelInput,"onUpdate:modelValue":s[0]||(s[0]=i=>t(o).noLabelInput=i)},null,8,["modelValue"]),e(),a(r,{language:"html-vue"},{default:u(()=>[e(`
          <template>
            <SwitchInput v-model="input" />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,m(n.$t("form.label.labelInput")),1),e(),l("div",k,[a(t(d),{modelValue:t(o).input,"onUpdate:modelValue":s[1]||(s[1]=i=>t(o).input=i),label:n.$t("form.label.switch")},null,8,["modelValue","label"]),e(),a(r,{language:"html-vue"},{default:u(()=>[e(`
          <Form>
            <SwitchInput v-model="input" label="Switch" />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,m(n.$t("form.label.disabled")),1),e(),l("div",F,[a(t(d),{modelValue:t(o).disabled,"onUpdate:modelValue":s[2]||(s[2]=i=>t(o).disabled=i),label:n.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),e(),a(r,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,m(n.$t("form.label.withI18n")),1),e(),l("div",U,[a(t(d),{modelValue:t(o).input,"onUpdate:modelValue":s[3]||(s[3]=i=>t(o).input=i),label:n.$t("form.label.switch")},null,8,["modelValue","label"]),e(),a(r,{language:"html-vue"},{default:u(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,m(n.$t("form.label.inputWithValidation")),1),e(),l("div",W,[a(t(v),null,{default:u(()=>[a(t(d),{modelValue:t(o).inputWithValidation,"onUpdate:modelValue":s[4]||(s[4]=i=>t(o).inputWithValidation=i),label:n.$t("form.label.switch"),schema:t(b)},null,8,["modelValue","label","schema"])]),_:1}),e(),a(r,{language:"html-vue"},{default:u(()=>[e(`
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
