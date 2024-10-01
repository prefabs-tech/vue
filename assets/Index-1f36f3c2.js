import{m as v,t as d,U as m}from"./DzangolabVue3Form.es-8b88b2f5.js";import{d as w,u as _,b as I,e as p,o as V,c as S,w as a,a as t,t as c,f as e,g as l,h as n,r as f}from"./index-60629793.js";const y={class:"section-content"},F={class:"section-content"},$={class:"section-content"},z={class:"section-content"},U={class:"section-content"},k={class:"section-content"},P={name:"SwitchInput"},D=w({...P,setup(W){const{t:b}=_(),h=v.coerce.boolean().refine(o=>o===!0,{message:b("form.errors.switch.invalid")});let s=I({customStyleInput:p(),disabled:p(!0),input:p(),inputWithValidation:p(!1),noLabelInput:p()});return(o,u)=>{const r=f("SshPre"),g=f("Page");return V(),S(g,{title:o.$t("form.label.switch"),class:"demo"},{default:a(()=>[t("section",null,[t("h2",null,c(o.$t("form.label.basicInput")),1),e(),t("div",y,[l(r,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <SwitchInput
              v-model="input"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),l(n(m),null,{default:a(()=>[l(n(d),{modelValue:n(s).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=i=>n(s).noLabelInput=i)},null,8,["modelValue"])]),_:1})])]),e(),t("section",null,[t("h2",null,c(o.$t("form.label.labelInput")),1),e(),t("div",F,[l(r,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <SwitchInput 
              v-model="input"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),l(n(m),null,{default:a(()=>[l(n(d),{modelValue:n(s).input,"onUpdate:modelValue":u[1]||(u[1]=i=>n(s).input=i),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),e(),t("section",null,[t("h2",null,c(o.$t("form.label.disabled")),1),e(),t("div",$,[l(r,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(m),null,{default:a(()=>[l(n(d),{modelValue:n(s).disabled,"onUpdate:modelValue":u[2]||(u[2]=i=>n(s).disabled=i),label:o.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),t("section",null,[t("h2",null,c(o.$t("form.label.withI18n")),1),e(),t("div",z,[l(r,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(m),null,{default:a(()=>[l(n(d),{modelValue:n(s).input,"onUpdate:modelValue":u[3]||(u[3]=i=>n(s).input=i),label:o.$t("form.label.switch")},null,8,["modelValue","label"])]),_:1})])]),e(),t("section",null,[t("h2",null,c(o.$t("form.label.inputWithValidation")),1),e(),t("div",U,[l(r,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(m),null,{default:a(()=>[l(n(d),{modelValue:n(s).inputWithValidation,"onUpdate:modelValue":u[4]||(u[4]=i=>n(s).inputWithValidation=i),label:o.$t("form.label.switch"),schema:n(h)},null,8,["modelValue","label","schema"])]),_:1})])]),e(),t("section",null,[t("h2",null,c(o.$t("form.label.customStyleInput")),1),e(),t("div",k,[l(r,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(n(m),null,{default:a(()=>[l(n(d),{modelValue:n(s).input,"onUpdate:modelValue":u[5]||(u[5]=i=>n(s).input=i),label:o.$t("form.label.switch"),class:"custom-style-input"},null,8,["modelValue","label"])]),_:1})])])]),_:1},8,["title"])}}});export{D as default};
