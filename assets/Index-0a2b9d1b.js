import{m as g,n as d,Z as p}from"./DzangolabVue3Form.es-00064c82.js";import{d as w,a4 as V,l as I,j as c,G as f,o as S,c as _,w as a,K as e,C as l,S as r,f as t,D as n}from"./index-96491301-e3ed59ee.js";import{_ as $}from"./FormPage.vue_vue_type_style_index_0_lang-b094b513.js";import"./index-3ecf5c1a.js";const F={class:"section-content"},z={class:"section-content"},k={class:"section-content"},U={class:"section-content"},C={class:"section-content"},D={name:"SwitchInput"},Z=w({...D,setup(W){const{t:b}=V(),h=g.coerce.boolean().refine(o=>o===!0,{message:b("form.errors.switch.invalid")});let s=I({disabled:c(!0),input:c(),inputWithValidation:c(!1),noLabelInput:c()});return(o,i)=>{const v=f("router-link"),m=f("SshPre");return S(),_($,{title:o.$t("form.label.switch"),class:"demo"},{toolbar:a(()=>[e(v,{to:{name:"form"},class:"back"},{default:a(()=>[l(r(o.$t("common.back")),1)]),_:1})]),default:a(()=>[l(),t("section",null,[t("h2",null,r(o.$t("form.label.basicInput")),1),l(),t("div",F,[e(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <SwitchInput
              v-model="input"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l(),e(n(p),null,{default:a(()=>[e(n(d),{modelValue:n(s).noLabelInput,"onUpdate:modelValue":i[0]||(i[0]=u=>n(s).noLabelInput=u)},null,8,["modelValue"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(o.$t("form.label.labelInput")),1),l(),t("div",z,[e(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <SwitchInput 
              v-model="input"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l(),e(n(p),null,{default:a(()=>[e(n(d),{modelValue:n(s).input,"onUpdate:modelValue":i[1]||(i[1]=u=>n(s).input=u),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(o.$t("form.label.disabled")),1),l(),t("div",k,[e(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <SwitchInput 
              v-model="disabled"
              disabled
              label="Disabled"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const disabled = ref(true);
          <\/script>
        `)]),_:1}),l(),e(n(p),null,{default:a(()=>[e(n(d),{modelValue:n(s).disabled,"onUpdate:modelValue":i[2]||(i[2]=u=>n(s).disabled=u),label:o.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(o.$t("form.label.withI18n")),1),l(),t("div",U,[e(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <SwitchInput 
              v-model="input"
              :label="t('form.label.switch')"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),l(),e(n(p),null,{default:a(()=>[e(n(d),{modelValue:n(s).input,"onUpdate:modelValue":i[3]||(i[3]=u=>n(s).input=u),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(o.$t("form.label.inputWithValidation")),1),l(),t("div",C,[e(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <SwitchInput 
              v-model="disabled"
              :schema="inputSchema"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";

          const inputSchema = z.coerce
            .boolean()
            .refine((value) => value === true, {
              message: t("form.errors.switch.invalid"),
            });
          <\/script>
        `)]),_:1}),l(),e(n(p),null,{default:a(()=>[e(n(d),{modelValue:n(s).inputWithValidation,"onUpdate:modelValue":i[4]||(i[4]=u=>n(s).inputWithValidation=u),label:o.$t("form.label.switch"),schema:n(h)},null,8,["modelValue","label","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{Z as default};
