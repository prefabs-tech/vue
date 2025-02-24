import{l as d,o as f}from"./DzangolabVue3Form.es-k-Xjvcvt.js";import{d as v,z as E,A as V,r as p,s as z,j as _,o as $,w as s,B as l,e as a,t as u,g as o,u as e,C as I}from"./index-CqimUq5D.js";import{z as F}from"./index-mSkvzYyn.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-g4uxL8pa.js";const y={class:"section-content"},O={class:"section-content"},U={class:"section-content"},W={class:"section-content"},q={class:"section-content"},M={class:"section-content"},S={class:"section-content"},C={class:"section-content"},k={name:"EmailInputField"},T=v({...k,setup(B){const{t:c}=E(),g=F.string().email({message:c("form.errors.email.invalid")}),h={required:c("form.errors.input.required"),invalid:c("form.errors.email.invalid",{list:"(dzangolab.com, dzango.com, gmail.com)"})},b={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:["dzangolab.com","dzango.com","gmail.com"],require_display_name:!1};let i=V({customValidationInput:p(),disabled:p("monorepo@dzangolab.com"),input:p(),inputWithValidation:p(),noLabelInput:p(),textInput:p()});return(n,t)=>{const r=z("SshPre");return $(),_(w,{title:n.$t("form.label.email"),class:"demo"},{toolbar:s(()=>[o(e(I),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=m=>n.$router.push("/form"))},null,8,["label"])]),default:s(()=>[l(),a("section",null,[a("h2",null,u(n.$t("form.label.basicInput")),1),l(),a("div",y,[o(e(d),{modelValue:e(i).noLabelInput,"onUpdate:modelValue":t[1]||(t[1]=m=>e(i).noLabelInput=m),placeholder:n.$t("form.placeholder.email")},null,8,["modelValue","placeholder"]),l(),o(r,{language:"html-vue"},{default:s(()=>[l(`
          <template>
            <Email 
              v-model="input"
              placeholder="Enter a email"
            />
          </template>
  
          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,u(n.$t("form.label.labelInput")),1),l(),a("div",O,[o(e(d),{modelValue:e(i).input,"onUpdate:modelValue":t[2]||(t[2]=m=>e(i).input=m),label:n.$t("form.label.email"),placeholder:n.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l(),o(r,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,u(n.$t("form.label.disabled")),1),l(),a("div",U,[o(e(d),{modelValue:e(i).disabled,"onUpdate:modelValue":t[3]||(t[3]=m=>e(i).disabled=m),label:n.$t("form.label.email"),disabled:""},null,8,["modelValue","label"]),l(),o(r,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,u(n.$t("form.label.withI18n")),1),l(),a("div",W,[o(e(d),{modelValue:e(i).input,"onUpdate:modelValue":t[4]||(t[4]=m=>e(i).input=m),label:e(c)("form.label.email"),placeholder:e(c)("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l(),o(r,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,u(n.$t("form.label.inputWithValidation")),1),l(),a("div",q,[o(e(f),null,{default:s(()=>[o(e(d),{modelValue:e(i).inputWithValidation,"onUpdate:modelValue":t[5]||(t[5]=m=>e(i).inputWithValidation=m),label:n.$t("form.label.email"),placeholder:n.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l(),o(r,{language:"html-vue"},{default:s(()=>[l(`
          <Form>
            <Email 
              v-model="input"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Email } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,u(n.$t("form.label.inputWithValidationOptions")),1),l(),a("div",M,[o(e(f),null,{default:s(()=>[o(e(d),{modelValue:e(i).inputWithValidation,"onUpdate:modelValue":t[6]||(t[6]=m=>e(i).inputWithValidation=m),label:n.$t("form.label.email"),options:e(b),placeholder:n.$t("form.placeholder.email")},null,8,["modelValue","label","options","placeholder"])]),_:1}),l(),o(r,{language:"html-vue"},{default:s(()=>[l(`
          <Form>
            <Email 
              v-model="input"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>

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
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,u(n.$t("form.label.customErrorMessageInput")),1),l(),a("div",S,[o(e(f),null,{default:s(()=>[o(e(d),{modelValue:e(i).textInput,"onUpdate:modelValue":t[7]||(t[7]=m=>e(i).textInput=m),label:n.$t("form.label.email"),"error-messages":e(h),options:e(b),placeholder:n.$t("form.placeholder.email")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1}),l(),o(r,{language:"html-vue"},{default:s(()=>[l(`
          <Form>
            <Email 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>

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
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,u(n.$t("form.label.customValidationInput")),1),l(),a("div",C,[o(e(f),null,{default:s(()=>[o(e(d),{modelValue:e(i).customValidationInput,"onUpdate:modelValue":t[8]||(t[8]=m=>e(i).customValidationInput=m),label:n.$t("form.label.email"),placeholder:n.$t("form.placeholder.email"),schema:e(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),l(),o(r,{language:"html-vue"},{default:s(()=>[l(`
          <Form>
            <Email 
              v-model="input"
              :schema="inputSchema"
              label="Email"
              placeholder="Enter a email"
              name="input"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Email } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .email({ message: "Please provide a valid email" });
          <\/script>
        `)]),_:1}),l()])])]),_:1},8,["title"])}}});export{T as default};
