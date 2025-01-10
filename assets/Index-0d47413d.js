import{Y as m,$ as f}from"./DzangolabVue3Form.es-4259c31d.js";import{d as P,a7 as V,p as $,j as c,K as b,o as I,c as z,w as d,L as a,C as e,M as i,f as l,E as o,e as _}from"./index-8e1c3ab6-d459558c.js";import{m as S}from"./index-882509c2.js";import{_ as y}from"./FormPage.vue_vue_type_style_index_0_lang-b92c84d7.js";const U={class:"section-content"},F={class:"section-content"},L={class:"section-content"},E={class:"section-content"},O={class:"section-content"},k={class:"section-content"},q={class:"section-content"},M={class:"section-content"},W={name:"PasswordInputField"},D=P({...W,setup(C){const{t:u}=V(),h=S.string({invalid_type_error:u("form.errors.password.invalid"),required_error:u("form.errors.input.required")}).min(8,{message:u("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,u("form.errors.password.invalid")),g={required:u("form.errors.input.required"),weak:u("form.errors.password.invalid")},w={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let r=$({customValidationInput:c(),disabled:c("P@ssw0rd"),input:c(),inputWithValidation:c(),noLabelInput:c(),passwordInput:c()});return(n,t)=>{const v=b("router-link"),p=b("SshPre");return I(),z(y,{title:n.$t("form.label.password"),class:"demo"},{toolbar:d(()=>[a(v,{to:{name:"form"},class:"back"},{default:d(()=>[e(i(n.$t("common.back")),1)]),_:1})]),default:d(()=>[e(),l("section",null,[l("h2",null,i(n.$t("form.label.basicInput")),1),e(),l("div",U,[a(o(m),{modelValue:o(r).noLabelInput,"onUpdate:modelValue":t[0]||(t[0]=s=>o(r).noLabelInput=s),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","placeholder"]),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
          <template>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.labelInput")),1),e(),l("div",F,[a(o(m),{modelValue:o(r).input,"onUpdate:modelValue":t[1]||(t[1]=s=>o(r).input=s),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
          <template>
            <Password 
              v-model="input"
              label="Password"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.disabled")),1),e(),l("div",L,[a(o(m),{modelValue:o(r).disabled,"onUpdate:modelValue":t[2]||(t[2]=s=>o(r).disabled=s),label:n.$t("form.label.password"),disabled:""},null,8,["modelValue","label"]),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
          <template>
            <Password 
              v-model="input"
              label="Password"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          import { ref } from vue;
  
          const input = ref("P@ssw0rd");
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.withI18n")),1),e(),l("div",E,[a(o(m),{modelValue:o(r).input,"onUpdate:modelValue":t[3]||(t[3]=s=>o(r).input=s),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
          <template>
            <Password 
              v-model="input"
              :label="t('form.label.password')"
              :placeholder="t('form.placeholder.password')"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.iconSlot")),1),e(),l("div",O,[a(o(m),{modelValue:o(r).input,"onUpdate:modelValue":t[4]||(t[4]=s=>o(r).input=s),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password")},{icon:d(({showPassword:s})=>[l("i",{class:_(`pi ${s?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"]),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
          <template>
            <Password 
              v-model="input"
              :label="t('form.label.password')"
              :placeholder="t('form.placeholder.password')"
            >
              <template #icon="{ showPassword }">
                <i :class="\`pi \${ showPassword ? 'pi-eye' : 'pi-eye-slash'}\`" />
              </template>
            <Password>
          </template>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.inputWithValidation")),1),e(),l("div",k,[a(o(f),null,{default:d(()=>[a(o(m),{modelValue:o(r).inputWithValidation,"onUpdate:modelValue":t[5]||(t[5]=s=>o(r).inputWithValidation=s),label:n.$t("form.label.password"),options:o(w),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","options","placeholder"])]),_:1}),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.customErrorMessageInput")),1),e(),l("div",q,[a(o(f),null,{default:d(()=>[a(o(m),{modelValue:o(r).passwordInput,"onUpdate:modelValue":t[6]||(t[6]=s=>o(r).passwordInput=s),label:n.$t("form.label.password"),"error-messages":o(g),options:o(w),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1}),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.customValidationInput")),1),e(),l("div",M,[a(o(f),null,{default:d(()=>[a(o(m),{modelValue:o(r).customValidationInput,"onUpdate:modelValue":t[7]||(t[7]=s=>o(r).customValidationInput=s),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password"),schema:o(h),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{D as default};
