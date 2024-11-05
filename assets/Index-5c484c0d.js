import{m as P,t as p,Z as u}from"./DzangolabVue3Form.es-07bd90a1.js";import{d as V,u as $,b as _,e as f,r as b,o as I,c as y,w as a,a as l,t as m,f as o,g as n,h as e,H as F}from"./index-9530d6e2.js";const z={class:"section-content"},S={class:"section-content"},U={class:"section-content"},E={class:"section-content"},L={class:"section-content"},O={class:"section-content"},q={class:"section-content"},M={class:"section-content"},W={class:"section-content"},k={name:"PasswordInputField"},N=V({...k,setup(C){const{t:c}=$(),g=P.string({invalid_type_error:c("form.errors.password.invalid"),required_error:c("form.errors.input.required")}).min(8,{message:c("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,c("form.errors.password.invalid")),h={required:c("form.errors.input.required"),weak:c("form.errors.password.invalid")},w={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let r=_({customStyleInput:f(),customValidationInput:f(),disabled:f("P@ssw0rd"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(s,d)=>{const i=b("SshPre"),v=b("Page");return I(),y(v,{title:s.$t("form.label.password"),class:"demo"},{default:a(()=>[l("section",null,[l("h2",null,m(s.$t("form.label.basicInput")),1),o(),l("div",z,[n(i,{language:"html-vue"},{default:a(()=>[o(`
          <From>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </From>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(p),{modelValue:e(r).noLabelInput,"onUpdate:modelValue":d[0]||(d[0]=t=>e(r).noLabelInput=t),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,m(s.$t("form.label.labelInput")),1),o(),l("div",S,[n(i,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(p),{modelValue:e(r).input,"onUpdate:modelValue":d[1]||(d[1]=t=>e(r).input=t),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,m(s.$t("form.label.disabled")),1),o(),l("div",U,[n(i,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(p),{modelValue:e(r).disabled,"onUpdate:modelValue":d[2]||(d[2]=t=>e(r).disabled=t),label:s.$t("form.label.password"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),o(),l("section",null,[l("h2",null,m(s.$t("form.label.withI18n")),1),o(),l("div",E,[n(i,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(p),{modelValue:e(r).input,"onUpdate:modelValue":d[3]||(d[3]=t=>e(r).input=t),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,m(s.$t("form.label.iconSlot")),1),o(),l("div",L,[n(i,{language:"html-vue"},{default:a(()=>[o(`
          <Form>
            <Password 
              v-model="input"
              :label="t('form.label.password')"
              :placeholder="t('form.placeholder.password')"
            >
              <template #icon="{ showPassword }">
                <i :class="\`pi \${ showPassword ? 'pi-eye' : 'pi-eye-slash'}\`" />
              </template>
            <Password>
          </Form>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(p),{modelValue:e(r).input,"onUpdate:modelValue":d[4]||(d[4]=t=>e(r).input=t),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},{icon:a(({showPassword:t})=>[l("i",{class:F(`pi ${t?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,m(s.$t("form.label.inputWithValidation")),1),o(),l("div",O,[n(i,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(p),{modelValue:e(r).inputWithValidation,"onUpdate:modelValue":d[5]||(d[5]=t=>e(r).inputWithValidation=t),label:s.$t("form.label.password"),options:e(w),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,m(s.$t("form.label.customErrorMessageInput")),1),o(),l("div",q,[n(i,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(p),{modelValue:e(r).passwordInput,"onUpdate:modelValue":d[6]||(d[6]=t=>e(r).passwordInput=t),label:s.$t("form.label.password"),"error-messages":e(h),options:e(w),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,m(s.$t("form.label.customValidationInput")),1),o(),l("div",M,[n(i,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(p),{modelValue:e(r).customValidationInput,"onUpdate:modelValue":d[7]||(d[7]=t=>e(r).customValidationInput=t),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password"),schema:e(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),o(),l("section",null,[l("h2",null,m(s.$t("form.label.customStyleInput")),1),o(),l("div",W,[n(i,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(p),{modelValue:e(r).customStyleInput,"onUpdate:modelValue":d[8]||(d[8]=t=>e(r).customStyleInput=t),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password"),class:"custom-style-input"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{N as default};
