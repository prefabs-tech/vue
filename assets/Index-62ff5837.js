import{m as w,n as d,Z as c}from"./DzangolabVue3Form.es-8d7c7642.js";import{d as _,u as I,b as V,e as p,r as f,o as S,c as y,w as a,f as t,g as n,t as r,a as l,h as e}from"./index-17339f3a.js";const $={class:"section-content"},F={class:"section-content"},k={class:"section-content"},z={class:"section-content"},U={class:"section-content"},P={class:"section-content"},W={name:"SwitchInput"},L=_({...W,setup(B){const{t:b}=I(),h=w.coerce.boolean().refine(o=>o===!0,{message:b("form.errors.switch.invalid")});let s=V({customStyleInput:p(),disabled:p(!0),input:p(),inputWithValidation:p(!1),noLabelInput:p()});return(o,u)=>{const g=f("router-link"),m=f("SshPre"),v=f("Page");return S(),y(v,{title:o.$t("form.label.switch"),class:"demo"},{toolbar:a(()=>[t(g,{to:{name:"form"},class:"back"},{default:a(()=>[n(r(o.$t("common.back")),1)]),_:1})]),default:a(()=>[n(),l("section",null,[l("h2",null,r(o.$t("form.label.basicInput")),1),n(),l("div",$,[t(m,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <SwitchInput
              v-model="input"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),t(e(c),null,{default:a(()=>[t(e(d),{modelValue:e(s).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=i=>e(s).noLabelInput=i)},null,8,["modelValue"])]),_:1})])]),n(),l("section",null,[l("h2",null,r(o.$t("form.label.labelInput")),1),n(),l("div",F,[t(m,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <SwitchInput 
              v-model="input"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),t(e(c),null,{default:a(()=>[t(e(d),{modelValue:e(s).input,"onUpdate:modelValue":u[1]||(u[1]=i=>e(s).input=i),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),n(),l("section",null,[l("h2",null,r(o.$t("form.label.disabled")),1),n(),l("div",k,[t(m,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),t(e(c),null,{default:a(()=>[t(e(d),{modelValue:e(s).disabled,"onUpdate:modelValue":u[2]||(u[2]=i=>e(s).disabled=i),label:o.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),n(),l("section",null,[l("h2",null,r(o.$t("form.label.withI18n")),1),n(),l("div",z,[t(m,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),t(e(c),null,{default:a(()=>[t(e(d),{modelValue:e(s).input,"onUpdate:modelValue":u[3]||(u[3]=i=>e(s).input=i),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),n(),l("section",null,[l("h2",null,r(o.$t("form.label.inputWithValidation")),1),n(),l("div",U,[t(m,{language:"html-vue"},{default:a(()=>[n(`
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
        `)]),_:1}),n(),t(e(c),null,{default:a(()=>[t(e(d),{modelValue:e(s).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=i=>e(s).inputWithValidation=i),label:o.$t("form.label.switch"),schema:e(h)},null,8,["modelValue","label","schema"])]),_:1})])]),n(),l("section",null,[l("h2",null,r(o.$t("form.label.customStyleInput")),1),n(),l("div",P,[t(m,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <SwitchInput 
              v-model="input"
              class="custom-style-input"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>

          <style lang="css">
            .custom-style-input {
              --_switch-field-direction: row;
              --_switch-field-gap: 1rem;

              align-items: center;
            }

            .custom-style-input .switch input[type="checkbox"] {
              --_switch-unchecked-bg-color: var(--dz-danger-color);
            }
  
            .custom-style-input .switch input:checked {
              --_switch-checked-bg-color: var(--dz-success-color);
            }
          </style>
        `)]),_:1}),n(),t(e(c),null,{default:a(()=>[t(e(d),{modelValue:e(s).input,"onUpdate:modelValue":u[5]||(u[5]=i=>e(s).input=i),label:o.$t("form.label.switch"),class:"custom-style-input"},null,8,["modelValue","label"])]),_:1})])])]),_:1},8,["title"])}}});export{L as default};
