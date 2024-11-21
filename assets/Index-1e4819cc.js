import{m as w,n as d,Z as p}from"./DzangolabVue3Form.es-f6c872e7.js";import{d as V,a4 as I,l as S,j as c,G as f,o as _,c as $,w as a,K as l,C as n,S as r,f as t,D as e}from"./index-d658739c-63af44b8.js";import"./index-bc5452e9.js";const F={class:"section-content"},z={class:"section-content"},k={class:"section-content"},U={class:"section-content"},C={class:"section-content"},D={name:"SwitchInput"},N=V({...D,setup(P){const{t:b}=I(),h=w.coerce.boolean().refine(o=>o===!0,{message:b("form.errors.switch.invalid")});let s=S({disabled:c(!0),input:c(),inputWithValidation:c(!1),noLabelInput:c()});return(o,i)=>{const v=f("router-link"),m=f("SshPre"),g=f("Page");return _(),$(g,{title:o.$t("form.label.switch"),class:"demo"},{toolbar:a(()=>[l(v,{to:{name:"form"},class:"back"},{default:a(()=>[n(r(o.$t("common.back")),1)]),_:1})]),default:a(()=>[n(),t("section",null,[t("h2",null,r(o.$t("form.label.basicInput")),1),n(),t("div",F,[l(m,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <SwitchInput
              v-model="input"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(s).noLabelInput,"onUpdate:modelValue":i[0]||(i[0]=u=>e(s).noLabelInput=u)},null,8,["modelValue"])]),_:1})])]),n(),t("section",null,[t("h2",null,r(o.$t("form.label.labelInput")),1),n(),t("div",z,[l(m,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <SwitchInput 
              v-model="input"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(s).input,"onUpdate:modelValue":i[1]||(i[1]=u=>e(s).input=u),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,r(o.$t("form.label.disabled")),1),n(),t("div",k,[l(m,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(s).disabled,"onUpdate:modelValue":i[2]||(i[2]=u=>e(s).disabled=u),label:o.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,r(o.$t("form.label.withI18n")),1),n(),t("div",U,[l(m,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(s).input,"onUpdate:modelValue":i[3]||(i[3]=u=>e(s).input=u),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,r(o.$t("form.label.inputWithValidation")),1),n(),t("div",C,[l(m,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),l(e(p),null,{default:a(()=>[l(e(d),{modelValue:e(s).inputWithValidation,"onUpdate:modelValue":i[4]||(i[4]=u=>e(s).inputWithValidation=u),label:o.$t("form.label.switch"),schema:e(h)},null,8,["modelValue","label","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{N as default};
