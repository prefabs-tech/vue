import{m as w,n as d,Z as p}from"./DzangolabVue3Form.es-66293d03.js";import{d as V,u as I,b as S,e as c,r as f,o as _,c as $,w as a,f as l,g as e,t as r,a as t,h as n}from"./index-d455476b.js";const F={class:"section-content"},z={class:"section-content"},k={class:"section-content"},U={class:"section-content"},P={class:"section-content"},W={name:"SwitchInput"},L=V({...W,setup(B){const{t:b}=I(),h=w.coerce.boolean().refine(o=>o===!0,{message:b("form.errors.switch.invalid")});let s=S({disabled:c(!0),input:c(),inputWithValidation:c(!1),noLabelInput:c()});return(o,u)=>{const v=f("router-link"),m=f("SshPre"),g=f("Page");return _(),$(g,{title:o.$t("form.label.switch"),class:"demo"},{toolbar:a(()=>[l(v,{to:{name:"form"},class:"back"},{default:a(()=>[e(r(o.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),t("section",null,[t("h2",null,r(o.$t("form.label.basicInput")),1),e(),t("div",F,[l(m,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <SwitchInput
              v-model="input"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),l(n(p),null,{default:a(()=>[l(n(d),{modelValue:n(s).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=i=>n(s).noLabelInput=i)},null,8,["modelValue"])]),_:1})])]),e(),t("section",null,[t("h2",null,r(o.$t("form.label.labelInput")),1),e(),t("div",z,[l(m,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <SwitchInput 
              v-model="input"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),l(n(p),null,{default:a(()=>[l(n(d),{modelValue:n(s).input,"onUpdate:modelValue":u[1]||(u[1]=i=>n(s).input=i),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),e(),t("section",null,[t("h2",null,r(o.$t("form.label.disabled")),1),e(),t("div",k,[l(m,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(p),null,{default:a(()=>[l(n(d),{modelValue:n(s).disabled,"onUpdate:modelValue":u[2]||(u[2]=i=>n(s).disabled=i),label:o.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),t("section",null,[t("h2",null,r(o.$t("form.label.withI18n")),1),e(),t("div",U,[l(m,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(p),null,{default:a(()=>[l(n(d),{modelValue:n(s).input,"onUpdate:modelValue":u[3]||(u[3]=i=>n(s).input=i),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),e(),t("section",null,[t("h2",null,r(o.$t("form.label.inputWithValidation")),1),e(),t("div",P,[l(m,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(p),null,{default:a(()=>[l(n(d),{modelValue:n(s).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=i=>n(s).inputWithValidation=i),label:o.$t("form.label.switch"),schema:n(h)},null,8,["modelValue","label","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{L as default};
