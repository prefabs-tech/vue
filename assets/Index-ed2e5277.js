import{Z as d,n as p}from"./DzangolabVue3Form.es-886b912a.js";import{d as g,a6 as w,p as V,j as c,K as f,o as I,c as S,w as a,L as e,C as n,M as r,f as t,E as l}from"./index-66214709-91038599.js";import{m as _}from"./index-280454ac.js";import{_ as $}from"./FormPage.vue_vue_type_style_index_0_lang-08a2f5e9.js";const F={class:"section-content"},z={class:"section-content"},k={class:"section-content"},U={class:"section-content"},C={class:"section-content"},L={name:"SwitchInput"},Z=g({...L,setup(W){const{t:b}=w(),h=_.coerce.boolean().refine(o=>o===!0,{message:b("form.errors.switch.invalid")});let s=V({disabled:c(!0),input:c(),inputWithValidation:c(!1),noLabelInput:c()});return(o,i)=>{const v=f("router-link"),m=f("SshPre");return I(),S($,{title:o.$t("form.label.switch"),class:"demo"},{toolbar:a(()=>[e(v,{to:{name:"form"},class:"back"},{default:a(()=>[n(r(o.$t("common.back")),1)]),_:1})]),default:a(()=>[n(),t("section",null,[t("h2",null,r(o.$t("form.label.basicInput")),1),n(),t("div",F,[e(m,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <SwitchInput
              v-model="input"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),e(l(d),null,{default:a(()=>[e(l(p),{modelValue:l(s).noLabelInput,"onUpdate:modelValue":i[0]||(i[0]=u=>l(s).noLabelInput=u)},null,8,["modelValue"])]),_:1})])]),n(),t("section",null,[t("h2",null,r(o.$t("form.label.labelInput")),1),n(),t("div",z,[e(m,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <SwitchInput 
              v-model="input"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),e(l(d),null,{default:a(()=>[e(l(p),{modelValue:l(s).input,"onUpdate:modelValue":i[1]||(i[1]=u=>l(s).input=u),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,r(o.$t("form.label.disabled")),1),n(),t("div",k,[e(m,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),e(l(d),null,{default:a(()=>[e(l(p),{modelValue:l(s).disabled,"onUpdate:modelValue":i[2]||(i[2]=u=>l(s).disabled=u),label:o.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,r(o.$t("form.label.withI18n")),1),n(),t("div",U,[e(m,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),e(l(d),null,{default:a(()=>[e(l(p),{modelValue:l(s).input,"onUpdate:modelValue":i[3]||(i[3]=u=>l(s).input=u),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),n(),t("section",null,[t("h2",null,r(o.$t("form.label.inputWithValidation")),1),n(),t("div",C,[e(m,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),e(l(d),null,{default:a(()=>[e(l(p),{modelValue:l(s).inputWithValidation,"onUpdate:modelValue":i[4]||(i[4]=u=>l(s).inputWithValidation=u),label:o.$t("form.label.switch"),schema:l(h)},null,8,["modelValue","label","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{Z as default};
