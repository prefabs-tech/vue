import{m as V,G as d,Z as p}from"./DzangolabVue3Form.es-8d7c7642.js";import{d as I,u as z,b as y,e as c,r as b,o as $,c as F,w as t,f as n,g as e,t as r,a,h as l}from"./index-17339f3a.js";const w={class:"section-content"},S={class:"section-content"},O={class:"section-content"},U={class:"section-content"},k={class:"section-content"},q={class:"section-content"},M={class:"section-content"},P={class:"section-content"},W={name:"EmailInputField"},N=I({...W,setup(B){const{t:f}=z(),h=V.string().email({message:f("form.errors.email.invalid")}),v={required:f("form.errors.input.required"),invalid:f("form.errors.email.invalid",{list:"(dzangolab.com, dzango.com, gmail.com)"})},g={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:["dzangolab.com","dzango.com","gmail.com"],require_display_name:!1};let i=y({customStyleInput:c(),customValidationInput:c(),disabled:c("monorepo@dzangolab.com"),input:c(),inputWithValidation:c(),noLabelInput:c(),textInput:c()});return(o,m)=>{const _=b("router-link"),u=b("SshPre"),E=b("Page");return $(),F(E,{title:o.$t("form.label.email"),class:"demo"},{toolbar:t(()=>[n(_,{to:{name:"form"},class:"back"},{default:t(()=>[e(r(o.$t("common.back")),1)]),_:1})]),default:t(()=>[e(),a("section",null,[a("h2",null,r(o.$t("form.label.basicInput")),1),e(),a("div",w,[n(u,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              placeholder="Enter a email"
            />
          </Form>
  
          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(l(p),null,{default:t(()=>[n(l(d),{modelValue:l(i).noLabelInput,"onUpdate:modelValue":m[0]||(m[0]=s=>l(i).noLabelInput=s),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,r(o.$t("form.label.labelInput")),1),e(),a("div",S,[n(u,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>

          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(l(p),null,{default:t(()=>[n(l(d),{modelValue:l(i).input,"onUpdate:modelValue":m[1]||(m[1]=s=>l(i).input=s),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,r(o.$t("form.label.disabled")),1),e(),a("div",O,[n(u,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              label="Email"
              disabled
            />
          </Form>

          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const input = ref("monorepo@dzangolab.com");
          <\/script>
        `)]),_:1}),e(),n(l(p),null,{default:t(()=>[n(l(d),{modelValue:l(i).disabled,"onUpdate:modelValue":m[2]||(m[2]=s=>l(i).disabled=s),label:o.$t("form.label.email"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,r(o.$t("form.label.withI18n")),1),e(),a("div",U,[n(u,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              :label="t('form.label.email')"
              :placeholder="t('form.placeholder.email')"
            />
          </Form>

          <script setup lang="ts">
          import { Email } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),n(l(p),null,{default:t(()=>[n(l(d),{modelValue:l(i).input,"onUpdate:modelValue":m[3]||(m[3]=s=>l(i).input=s),label:l(f)("form.label.email"),placeholder:l(f)("form.placeholder.email")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,r(o.$t("form.label.inputWithValidation")),1),e(),a("div",k,[n(u,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e(),n(l(p),null,{default:t(()=>[n(l(d),{modelValue:l(i).inputWithValidation,"onUpdate:modelValue":m[4]||(m[4]=s=>l(i).inputWithValidation=s),label:o.$t("form.label.email"),options:l(g),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,r(o.$t("form.label.customErrorMessageInput")),1),e(),a("div",q,[n(u,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e(),n(l(p),null,{default:t(()=>[n(l(d),{modelValue:l(i).textInput,"onUpdate:modelValue":m[5]||(m[5]=s=>l(i).textInput=s),label:o.$t("form.label.email"),"error-messages":l(v),options:l(g),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,r(o.$t("form.label.customValidationInput")),1),e(),a("div",M,[n(u,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e(),n(l(p),null,{default:t(()=>[n(l(d),{modelValue:l(i).customValidationInput,"onUpdate:modelValue":m[6]||(m[6]=s=>l(i).customValidationInput=s),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email"),schema:l(h),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),e(),a("section",null,[a("h2",null,r(o.$t("form.label.customStyleInput")),1),e(),a("div",P,[n(u,{language:"html-vue"},{default:t(()=>[e(`
          <Form>
            <Email 
              v-model="input"
              class="custom-style-input"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>

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
        `)]),_:1}),e(),n(l(p),null,{default:t(()=>[n(l(d),{modelValue:l(i).customStyleInput,"onUpdate:modelValue":m[7]||(m[7]=s=>l(i).customStyleInput=s),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email"),class:"custom-style-input"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{N as default};
