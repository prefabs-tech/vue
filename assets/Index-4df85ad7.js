import{$ as d,V as p}from"./DzangolabVue3Form.es-e3591036.js";import{d as g,a7 as V,p as w,j as c,K as f,o as I,c as S,w as a,L as n,C as l,M as r,f as t,E as e}from"./index-8e1c3ab6-d459558c.js";import{m as _}from"./index-32635991.js";import{_ as $}from"./FormPage.vue_vue_type_style_index_0_lang-a26aea77.js";const F={class:"section-content"},z={class:"section-content"},k={class:"section-content"},U={class:"section-content"},C={class:"section-content"},L={name:"SwitchInput"},j=g({...L,setup(W){const{t:b}=V(),h=_.coerce.boolean().refine(o=>o===!0,{message:b("form.errors.switch.invalid")});let s=w({disabled:c(!0),input:c(),inputWithValidation:c(!1),noLabelInput:c()});return(o,i)=>{const v=f("router-link"),m=f("SshPre");return I(),S($,{title:o.$t("form.label.switch"),class:"demo"},{toolbar:a(()=>[n(v,{to:{name:"form"},class:"back"},{default:a(()=>[l(r(o.$t("common.back")),1)]),_:1})]),default:a(()=>[l(),t("section",null,[t("h2",null,r(o.$t("form.label.basicInput")),1),l(),t("div",F,[n(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <SwitchInput
              v-model="input"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l(),n(e(d),null,{default:a(()=>[n(e(p),{modelValue:e(s).noLabelInput,"onUpdate:modelValue":i[0]||(i[0]=u=>e(s).noLabelInput=u)},null,8,["modelValue"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(o.$t("form.label.labelInput")),1),l(),t("div",z,[n(m,{language:"html-vue"},{default:a(()=>[l(`
          <Form>
            <SwitchInput 
              v-model="input"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l(),n(e(d),null,{default:a(()=>[n(e(p),{modelValue:e(s).input,"onUpdate:modelValue":i[1]||(i[1]=u=>e(s).input=u),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(o.$t("form.label.disabled")),1),l(),t("div",k,[n(m,{language:"html-vue"},{default:a(()=>[l(`
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
        `)]),_:1}),l(),n(e(d),null,{default:a(()=>[n(e(p),{modelValue:e(s).disabled,"onUpdate:modelValue":i[2]||(i[2]=u=>e(s).disabled=u),label:o.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(o.$t("form.label.withI18n")),1),l(),t("div",U,[n(m,{language:"html-vue"},{default:a(()=>[l(`
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
        `)]),_:1}),l(),n(e(d),null,{default:a(()=>[n(e(p),{modelValue:e(s).input,"onUpdate:modelValue":i[3]||(i[3]=u=>e(s).input=u),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),l(),t("section",null,[t("h2",null,r(o.$t("form.label.inputWithValidation")),1),l(),t("div",C,[n(m,{language:"html-vue"},{default:a(()=>[l(`
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
        `)]),_:1}),l(),n(e(d),null,{default:a(()=>[n(e(p),{modelValue:e(s).inputWithValidation,"onUpdate:modelValue":i[4]||(i[4]=u=>e(s).inputWithValidation=u),label:o.$t("form.label.switch"),schema:e(h)},null,8,["modelValue","label","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{j as default};
