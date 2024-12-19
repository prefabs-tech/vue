import{e as d,r as p}from"./DzangolabVue3Form.es-aac43f24.js";import{d as g,a7 as w,p as V,j as c,K as f,o as I,c as S,w as a,L as n,C as e,M as r,f as t,E as l}from"./index-66214709-ea91fece.js";import{m as _}from"./index-d21a9980.js";import{_ as $}from"./FormPage.vue_vue_type_style_index_0_lang-704fa6d5.js";const F={class:"section-content"},z={class:"section-content"},k={class:"section-content"},U={class:"section-content"},C={class:"section-content"},L={name:"SwitchInput"},j=g({...L,setup(W){const{t:b}=w(),h=_.coerce.boolean().refine(o=>o===!0,{message:b("form.errors.switch.invalid")});let s=V({disabled:c(!0),input:c(),inputWithValidation:c(!1),noLabelInput:c()});return(o,i)=>{const v=f("router-link"),m=f("SshPre");return I(),S($,{title:o.$t("form.label.switch"),class:"demo"},{toolbar:a(()=>[n(v,{to:{name:"form"},class:"back"},{default:a(()=>[e(r(o.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),t("section",null,[t("h2",null,r(o.$t("form.label.basicInput")),1),e(),t("div",F,[n(m,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <SwitchInput
              v-model="input"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(l(d),null,{default:a(()=>[n(l(p),{modelValue:l(s).noLabelInput,"onUpdate:modelValue":i[0]||(i[0]=u=>l(s).noLabelInput=u)},null,8,["modelValue"])]),_:1})])]),e(),t("section",null,[t("h2",null,r(o.$t("form.label.labelInput")),1),e(),t("div",z,[n(m,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <SwitchInput 
              v-model="input"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(l(d),null,{default:a(()=>[n(l(p),{modelValue:l(s).input,"onUpdate:modelValue":i[1]||(i[1]=u=>l(s).input=u),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),e(),t("section",null,[t("h2",null,r(o.$t("form.label.disabled")),1),e(),t("div",k,[n(m,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),n(l(d),null,{default:a(()=>[n(l(p),{modelValue:l(s).disabled,"onUpdate:modelValue":i[2]||(i[2]=u=>l(s).disabled=u),label:o.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),t("section",null,[t("h2",null,r(o.$t("form.label.withI18n")),1),e(),t("div",U,[n(m,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),n(l(d),null,{default:a(()=>[n(l(p),{modelValue:l(s).input,"onUpdate:modelValue":i[3]||(i[3]=u=>l(s).input=u),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),e(),t("section",null,[t("h2",null,r(o.$t("form.label.inputWithValidation")),1),e(),t("div",C,[n(m,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),n(l(d),null,{default:a(()=>[n(l(p),{modelValue:l(s).inputWithValidation,"onUpdate:modelValue":i[4]||(i[4]=u=>l(s).inputWithValidation=u),label:o.$t("form.label.switch"),schema:l(h)},null,8,["modelValue","label","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{j as default};
