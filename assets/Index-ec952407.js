import{m as P,K as p,Q as u}from"./DzangolabVue3Form.es-58590b96.js";import{d as V,u as _,b as $,e as f,r as b,o as I,c as y,w as a,a as o,t as m,f as n,g as l,h as e}from"./index-73b31e6e.js";const F={class:"section-content"},S={class:"section-content"},z={class:"section-content"},U={class:"section-content"},E={class:"section-content"},L={class:"section-content"},O={class:"section-content"},q={class:"section-content"},M={name:"PasswordInputField"},C=V({...M,setup(W){const{t:c}=_(),g=P.string({invalid_type_error:c("form.errors.password.invalid"),required_error:c("form.errors.input.required")}).min(8,{message:c("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,c("form.errors.password.invalid")),h={required:c("form.errors.input.required"),weak:c("form.errors.password.invalid")},w={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let t=$({customStyleInput:f(),customValidationInput:f(),disabled:f("P@ssw0rd"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(s,r)=>{const i=b("SshPre"),v=b("Page");return I(),y(v,{title:s.$t("form.label.password"),class:"demo"},{default:a(()=>[o("section",null,[o("h2",null,m(s.$t("form.label.basicInput")),1),n(),o("div",F,[l(i,{language:"html-vue"},{default:a(()=>[n(`
          <From>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </From>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),l(e(u),null,{default:a(()=>[l(e(p),{modelValue:e(t).noLabelInput,"onUpdate:modelValue":r[0]||(r[0]=d=>e(t).noLabelInput=d),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","placeholder"])]),_:1})])]),n(),o("section",null,[o("h2",null,m(s.$t("form.label.labelInput")),1),n(),o("div",S,[l(i,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <Password 
              v-model="input"
              label="Password"
              placeholder="Enter a password"
            />
          </Form>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),n(),l(e(u),null,{default:a(()=>[l(e(p),{modelValue:e(t).input,"onUpdate:modelValue":r[1]||(r[1]=d=>e(t).input=d),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),o("section",null,[o("h2",null,m(s.$t("form.label.disabled")),1),n(),o("div",z,[l(i,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <Password 
              v-model="input"
              label="Password"
              disabled
            />
          </Form>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const input = ref("P@ssw0rd");
          <\/script>
        `)]),_:1}),n(),l(e(u),null,{default:a(()=>[l(e(p),{modelValue:e(t).disabled,"onUpdate:modelValue":r[2]||(r[2]=d=>e(t).disabled=d),label:s.$t("form.label.password"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),n(),o("section",null,[o("h2",null,m(s.$t("form.label.withI18n")),1),n(),o("div",U,[l(i,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <Password 
              v-model="input"
              :label="t('form.label.password')"
              :placeholder="t('form.placeholder.password')"
            />
          </Form>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),n(),l(e(u),null,{default:a(()=>[l(e(p),{modelValue:e(t).input,"onUpdate:modelValue":r[3]||(r[3]=d=>e(t).input=d),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1})])]),n(),o("section",null,[o("h2",null,m(s.$t("form.label.inputWithValidation")),1),n(),o("div",E,[l(i,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <Password 
              v-model="input"
              :options="validationOptions"
              label="Password"
              placeholder="Enter a password"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Password } from "@dzangolab/vue3-form";
          
          import type { StrongPasswordOptions } from "@dzangolab/vue3-form";

          const validationOptions = {
            minLength: 10,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1,
          } as StrongPasswordOptions;
          <\/script>
        `)]),_:1}),n(),l(e(u),null,{default:a(()=>[l(e(p),{modelValue:e(t).inputWithValidation,"onUpdate:modelValue":r[4]||(r[4]=d=>e(t).inputWithValidation=d),label:s.$t("form.label.password"),options:e(w),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),n(),o("section",null,[o("h2",null,m(s.$t("form.label.customErrorMessageInput")),1),n(),o("div",L,[l(i,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <Password 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Password"
              placeholder="Enter a password"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Password } from "@dzangolab/vue3-form";
          import type { PasswordErrorMessages, StrongPasswordOptions } from "@dzangolab/vue3-form";

          const validationMessages = {
            required: "The field should not be empty",
            weak: "Please provide a strong password",
          } as PasswordErrorMessages;

          const validationOptions = {
            minLength: 10,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1,
          } as StrongPasswordOptions;
          <\/script>
        `)]),_:1}),n(),l(e(u),null,{default:a(()=>[l(e(p),{modelValue:e(t).passwordInput,"onUpdate:modelValue":r[5]||(r[5]=d=>e(t).passwordInput=d),label:s.$t("form.label.password"),"error-messages":e(h),options:e(w),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})])]),n(),o("section",null,[o("h2",null,m(s.$t("form.label.customValidationInput")),1),n(),o("div",O,[l(i,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <Password 
              v-model="input"
              :schema="inputSchema"
              label="Password"
              placeholder="Enter a password"
              name="input"
            />
          </Form>
  
          <script setup lang="ts">
          import { Form, Password } from "@dzangolab/vue3-form";
          import { z } from "zod";
  
          const inputSchema = z
            .string({
              invalid_type_error: "Please provide a strong password",
              required_error: "The field is required"
            })
            .min(8, { message: "Input must be at least 8 character(s)" })
            .regex(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).+$/,
              "Please provide a strong password"
            );
          <\/script>
        `)]),_:1}),n(),l(e(u),null,{default:a(()=>[l(e(p),{modelValue:e(t).customValidationInput,"onUpdate:modelValue":r[6]||(r[6]=d=>e(t).customValidationInput=d),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password"),schema:e(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),n(),o("section",null,[o("h2",null,m(s.$t("form.label.customStyleInput")),1),n(),o("div",q,[l(i,{language:"html-vue"},{default:a(()=>[n(`
          <Form>
            <Password 
              v-model="input"
              class="custom-style-input"
              label="Password"
              placeholder="Enter a password"
            />
          </Form>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
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
        `)]),_:1}),n(),l(e(u),null,{default:a(()=>[l(e(p),{modelValue:e(t).customStyleInput,"onUpdate:modelValue":r[7]||(r[7]=d=>e(t).customStyleInput=d),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password"),class:"custom-style-input"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{C as default};
