import{d as g,u as w,b as v,e as d,o as S,c as V,w as u,a as s,t as r,f as e,g as l,h as t,r as c}from"./index-8250d14f.js";import{m as _,K as p,z as I}from"./DzangolabVue3Form.es-629a960f.js";const y={class:"demo-section"},z={class:"demo-section"},$={class:"demo-section"},k={class:"demo-section"},U={class:"demo-section"},P={name:"SwitchInput"},D=g({...P,setup(W){const{t:f}=w(),h=_.coerce.boolean().refine(n=>n===!0,{message:f("form.errors.switch.invalid")});let a=v({customStyleInput:d(),disabled:d(!0),input:d(),inputWithValidation:d(!1),noLabelInput:d()});return(n,o)=>{const m=c("SshPre"),b=c("Page");return S(),V(b,{title:n.$t("form.label.switch")},{default:u(()=>[s("section",y,[s("h3",null,r(n.$t("form.label.basicInput")),1),e(),l(m,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <SwitchInput
            v-model="input"
          />
        </template>

        <script setup lang="ts">
        import { SwitchInput } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),l(t(p),{modelValue:t(a).noLabelInput,"onUpdate:modelValue":o[0]||(o[0]=i=>t(a).noLabelInput=i),class:"form-field"},null,8,["modelValue"])]),e(),s("section",z,[s("h3",null,r(n.$t("form.label.labelInput")),1),e(),l(m,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <SwitchInput 
            v-model="input"
            label="Switch"
          />
        </template>

        <script setup lang="ts">
        import { SwitchInput } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),l(t(p),{modelValue:t(a).input,"onUpdate:modelValue":o[1]||(o[1]=i=>t(a).input=i),label:n.$t("form.label.switch"),class:"form-field"},null,8,["modelValue","label"])]),e(),s("section",$,[s("h3",null,r(n.$t("form.label.disabled")),1),e(),l(m,{language:"html-vue"},{default:u(()=>[e(`
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
      `)]),_:1}),e(),l(t(p),{modelValue:t(a).disabled,"onUpdate:modelValue":o[2]||(o[2]=i=>t(a).disabled=i),label:n.$t("form.label.disabled"),class:"form-field",disabled:""},null,8,["modelValue","label"])]),e(),s("section",k,[s("h3",null,r(n.$t("form.label.inputWithValidation")),1),e(),l(m,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <Form>
            <SwitchInput 
              v-model="disabled"
              :schema="inputSchema"
              label="Switch"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, SwitchInput } from "@dzangolab/vue3-form";

        const inputSchema = z.coerce
          .boolean()
          .refine((value) => value === true, {
            message: t("form.errors.switch.invalid"),
          });
        <\/script>
      `)]),_:1}),e(),l(t(I),null,{default:u(()=>[l(t(p),{modelValue:t(a).inputWithValidation,"onUpdate:modelValue":o[3]||(o[3]=i=>t(a).inputWithValidation=i),label:n.$t("form.label.switch"),schema:t(h),class:"form-field"},null,8,["modelValue","label","schema"])]),_:1})]),e(),s("section",U,[s("h3",null,r(n.$t("form.label.customStyleInput")),1),e(),l(m,{language:"html-vue"},{default:u(()=>[e(`
        <template>
          <SwitchInput 
            v-model="input"
            class="custom-style-input"
            label="Switch"
          />
        </template>

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
      `)]),_:1}),e(),l(t(p),{modelValue:t(a).input,"onUpdate:modelValue":o[4]||(o[4]=i=>t(a).input=i),label:n.$t("form.label.switch"),class:"custom-style-input"},null,8,["modelValue","label"])])]),_:1},8,["title"])}}});export{D as default};
