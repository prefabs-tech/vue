import{Z as u,J as f}from"./DzangolabVue3Form.es-ae9e23e3.js";import{d as V,a5 as _,p as z,j as p,J as g,o as $,c as I,w as s,K as o,W as l,L as r,f as a,D as e}from"./index-729398ab-c88618b2.js";import{m as F}from"./index-8fc5d489.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-df90fcad.js";const y={class:"section-content"},O={class:"section-content"},U={class:"section-content"},W={class:"section-content"},k={class:"section-content"},q={class:"section-content"},M={class:"section-content"},S={class:"section-content"},L={name:"EmailInputField"},N=V({...L,setup(P){const{t:c}=_(),h=F.string().email({message:c("form.errors.email.invalid")}),v={required:c("form.errors.input.required"),invalid:c("form.errors.email.invalid",{list:"(dzangolab.com, dzango.com, gmail.com)"})},b={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:["dzangolab.com","dzango.com","gmail.com"],require_display_name:!1};let t=z({customValidationInput:p(),disabled:p("monorepo@dzangolab.com"),input:p(),inputWithValidation:p(),noLabelInput:p(),textInput:p()});return(n,i)=>{const E=g("router-link"),d=g("SshPre");return $(),I(w,{title:n.$t("form.label.email"),class:"demo"},{toolbar:s(()=>[o(E,{to:{name:"form"},class:"back"},{default:s(()=>[l(r(n.$t("common.back")),1)]),_:1})]),default:s(()=>[l(),a("section",null,[a("h2",null,r(n.$t("form.label.basicInput")),1),l(),a("div",y,[o(e(u),{modelValue:e(t).noLabelInput,"onUpdate:modelValue":i[0]||(i[0]=m=>e(t).noLabelInput=m),placeholder:n.$t("form.placeholder.email")},null,8,["modelValue","placeholder"]),l(),o(d,{language:"html-vue"},{default:s(()=>[l(`
          <template>
            <Email 
              v-model="input"
              placeholder="Enter a email"
            />
          </template>
  
          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,r(n.$t("form.label.labelInput")),1),l(),a("div",O,[o(e(u),{modelValue:e(t).input,"onUpdate:modelValue":i[1]||(i[1]=m=>e(t).input=m),label:n.$t("form.label.email"),placeholder:n.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l(),o(d,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,r(n.$t("form.label.disabled")),1),l(),a("div",U,[o(e(u),{modelValue:e(t).disabled,"onUpdate:modelValue":i[2]||(i[2]=m=>e(t).disabled=m),label:n.$t("form.label.email"),disabled:""},null,8,["modelValue","label"]),l(),o(d,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,r(n.$t("form.label.withI18n")),1),l(),a("div",W,[o(e(u),{modelValue:e(t).input,"onUpdate:modelValue":i[3]||(i[3]=m=>e(t).input=m),label:e(c)("form.label.email"),placeholder:e(c)("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l(),o(d,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,r(n.$t("form.label.inputWithValidation")),1),l(),a("div",k,[o(e(f),null,{default:s(()=>[o(e(u),{modelValue:e(t).inputWithValidation,"onUpdate:modelValue":i[4]||(i[4]=m=>e(t).inputWithValidation=m),label:n.$t("form.label.email"),placeholder:n.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1}),l(),o(d,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,r(n.$t("form.label.inputWithValidationOptions")),1),l(),a("div",q,[o(e(f),null,{default:s(()=>[o(e(u),{modelValue:e(t).inputWithValidation,"onUpdate:modelValue":i[5]||(i[5]=m=>e(t).inputWithValidation=m),label:n.$t("form.label.email"),options:e(b),placeholder:n.$t("form.placeholder.email")},null,8,["modelValue","label","options","placeholder"])]),_:1}),l(),o(d,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,r(n.$t("form.label.customErrorMessageInput")),1),l(),a("div",M,[o(e(f),null,{default:s(()=>[o(e(u),{modelValue:e(t).textInput,"onUpdate:modelValue":i[6]||(i[6]=m=>e(t).textInput=m),label:n.$t("form.label.email"),"error-messages":e(v),options:e(b),placeholder:n.$t("form.placeholder.email")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1}),l(),o(d,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])]),l(),a("section",null,[a("h2",null,r(n.$t("form.label.customValidationInput")),1),l(),a("div",S,[o(e(f),null,{default:s(()=>[o(e(u),{modelValue:e(t).customValidationInput,"onUpdate:modelValue":i[7]||(i[7]=m=>e(t).customValidationInput=m),label:n.$t("form.label.email"),placeholder:n.$t("form.placeholder.email"),schema:e(h),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),l(),o(d,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l()])])]),_:1},8,["title"])}}});export{N as default};
