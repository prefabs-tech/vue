import{d as E,u as V,b as z,e as u,o as I,c as y,w as s,a as m,t as d,f as e,g as n,h as l,r as g}from"./index-8250d14f.js";import{m as $,H as p,z as f}from"./DzangolabVue3Form.es-629a960f.js";const w={class:"demo-section"},F={class:"demo-section"},S={class:"demo-section"},O={class:"demo-section"},U={class:"demo-section"},q={class:"demo-section"},M={class:"demo-section"},P={class:"demo-section"},W={name:"EmailInputField"},N=E({...W,setup(B){const{t:c}=V(),h=$.string().email({message:c("form.errors.email.invalid")}),v={required:c("form.errors.input.required"),invalid:c("form.errors.email.invalid",{list:"(dzangolab.com, dzango.com, gmail.com)"})},b={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:["dzangolab.com","dzango.com","gmail.com"],require_display_name:!1};let o=z({customStyleInput:u(),customValidationInput:u(),disabled:u("monorepo@dzangolab.com"),input:u(),inputWithValidation:u(),noLabelInput:u(),textInput:u()});return(a,t)=>{const r=g("SshPre"),_=g("Page");return I(),y(_,{title:a.$t("form.label.email")},{default:s(()=>[m("section",w,[m("h3",null,d(a.$t("form.label.basicInput")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Email 
            v-model="input"
            placeholder="Enter a email"
          />
        </template>

        <script setup lang="ts">
        import { Email } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),n(l(p),{modelValue:l(o).noLabelInput,"onUpdate:modelValue":t[0]||(t[0]=i=>l(o).noLabelInput=i),placeholder:a.$t("form.placeholder.email")},null,8,["modelValue","placeholder"])]),e(),m("section",F,[m("h3",null,d(a.$t("form.label.labelInput")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Email 
            v-model="input"
            label="Email"
            placeholder="Enter a email"
          />
        </template>

        <script setup lang="ts">
        import { Email } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),n(l(p),{modelValue:l(o).input,"onUpdate:modelValue":t[1]||(t[1]=i=>l(o).input=i),label:a.$t("form.label.email"),placeholder:a.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),e(),m("section",S,[m("h3",null,d(a.$t("form.label.disabled")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Email 
            v-model="input"
            label="Email"
            disabled
          />
        </template>

        <script setup lang="ts">
        import { Email } from "@dzangolab/vue3-form";
        import { ref } from vue;

        const input = ref("monorepo@dzangolab.com");
        <\/script>
      `)]),_:1}),e(),n(l(p),{modelValue:l(o).disabled,"onUpdate:modelValue":t[2]||(t[2]=i=>l(o).disabled=i),label:a.$t("form.label.email"),disabled:""},null,8,["modelValue","label"])]),e(),m("section",O,[m("h3",null,d(a.$t("form.label.withI18n")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Email 
            v-model="input"
            :label="t('form.label.email')"
            :placeholder="t('form.placeholder.email')"
          />
        </template>

        <script setup lang="ts">
        import { Email } from "@dzangolab/vue3-form";
        import { useI18n } from "@dzangolab/vue3-i18n";

        const { t } = useI18n();
        <\/script>
      `)]),_:1}),e(),n(l(p),{modelValue:l(o).input,"onUpdate:modelValue":t[3]||(t[3]=i=>l(o).input=i),label:l(c)("form.label.email"),placeholder:l(c)("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),e(),m("section",U,[m("h3",null,d(a.$t("form.label.inputWithValidation")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Form>
            <Email 
              v-model="input"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, Email } from "@dzangolab/vue3-form";
        
        import type { IsEmailOptions } from "@dzangolab/vue3-form";

        const validationOptions = {
          allow_display_name: false,
          allow_utf8_local_part: true,
          host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
          require_display_name: false,
        } as IsEmailOptions;
        <\/script>
      `)]),_:1}),e(),n(l(f),null,{default:s(()=>[n(l(p),{modelValue:l(o).inputWithValidation,"onUpdate:modelValue":t[4]||(t[4]=i=>l(o).inputWithValidation=i),label:a.$t("form.label.email"),options:l(b),placeholder:a.$t("form.placeholder.email")},null,8,["modelValue","label","options","placeholder"])]),_:1})]),e(),m("section",q,[m("h3",null,d(a.$t("form.label.customErrorMessageInput")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Form>
            <Email 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, Email } from "@dzangolab/vue3-form";
        
        import type { EmailErrorMessages, IsEmailOptions } from "@dzangolab/vue3-form";

        const validationMessages = {
          required: "The field should not be empty",
          invalid: "Please provide a valid email (dzangolab.com, dzango.com, gmail.com)"
        } as EmailErrorMessages;

        const validationOptions = {
          allow_display_name: false,
          allow_utf8_local_part: true,
          host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
          require_display_name: false,
        } as IsEmailOptions;
        <\/script>
      `)]),_:1}),e(),n(l(f),null,{default:s(()=>[n(l(p),{modelValue:l(o).textInput,"onUpdate:modelValue":t[5]||(t[5]=i=>l(o).textInput=i),label:a.$t("form.label.email"),"error-messages":l(v),options:l(b),placeholder:a.$t("form.placeholder.email")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})]),e(),m("section",M,[m("h3",null,d(a.$t("form.label.customValidationInput")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Form>
            <Email 
              v-model="input"
              :schema="inputSchema"
              label="Email"
              placeholder="Enter a email"
              name="input"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, Email } from "@dzangolab/vue3-form";
        import { z } from "zod";

        const inputSchema = z.string()
          .email({ message: "Please provide a valid email" });
        <\/script>
      `)]),_:1}),e(),n(l(f),null,{default:s(()=>[n(l(p),{modelValue:l(o).customValidationInput,"onUpdate:modelValue":t[6]||(t[6]=i=>l(o).customValidationInput=i),label:a.$t("form.label.email"),placeholder:a.$t("form.placeholder.email"),schema:l(h),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})]),e(),m("section",P,[m("h3",null,d(a.$t("form.label.customStyleInput")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Email 
            v-model="input"
            class="custom-style-input"
            label="Email"
            placeholder="Enter a email"
          />
        </template>

        <script setup lang="ts">
        import { Email } from "@dzangolab/vue3-form";
        <\/script>

        <style>
        .custom-style-input input {
          --_input-field-border-color: #007aff;
          --_input-field-border-radius: 0.5em;
          --_input-field-label-color: #007aff;
          --_input-field-padding-h: 0.5em;
          --_input-field-padding-v: 0.5em;

          color: #007aff;
        }

        .custom-style-input input:focus {
          box-shadow: 0 0 0 0.25rem #03449e9a;
        }
        </style>
      `)]),_:1}),e(),n(l(p),{modelValue:l(o).customStyleInput,"onUpdate:modelValue":t[7]||(t[7]=i=>l(o).customStyleInput=i),label:a.$t("form.label.email"),placeholder:a.$t("form.placeholder.email"),class:"custom-style-input"},null,8,["modelValue","label","placeholder"])])]),_:1},8,["title"])}}});export{N as default};
