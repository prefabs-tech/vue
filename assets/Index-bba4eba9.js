import{t as m,J as f}from"./DzangolabVue3Form.es-51baa5bd.js";import{d as P,a7 as V,p as $,j as c,K as b,o as I,c as z,w as d,L as a,C as e,M as i,f as l,E as o,e as _}from"./index-4dbfb8c7-0110dc13.js";import{m as S}from"./index-f3c29e5f.js";import{_ as y}from"./FormPage.vue_vue_type_style_index_0_lang-328842f1.js";const U={class:"section-content"},F={class:"section-content"},L={class:"section-content"},E={class:"section-content"},O={class:"section-content"},k={class:"section-content"},q={class:"section-content"},M={class:"section-content"},W={name:"PasswordInputField"},D=P({...W,setup(C){const{t:u}=V(),h=S.string({invalid_type_error:u("form.errors.password.invalid"),required_error:u("form.errors.input.required")}).min(8,{message:u("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,u("form.errors.password.invalid")),g={required:u("form.errors.input.required"),weak:u("form.errors.password.invalid")},w={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let t=$({customValidationInput:c(),disabled:c("P@ssw0rd"),input:c(),inputWithValidation:c(),noLabelInput:c(),passwordInput:c()});return(n,r)=>{const v=b("router-link"),p=b("SshPre");return I(),z(y,{title:n.$t("form.label.password"),class:"demo"},{toolbar:d(()=>[a(v,{to:{name:"form"},class:"back"},{default:d(()=>[e(i(n.$t("common.back")),1)]),_:1})]),default:d(()=>[e(),l("section",null,[l("h2",null,i(n.$t("form.label.basicInput")),1),e(),l("div",U,[a(o(m),{modelValue:o(t).noLabelInput,"onUpdate:modelValue":r[0]||(r[0]=s=>o(t).noLabelInput=s),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","placeholder"]),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
          <template>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.labelInput")),1),e(),l("div",F,[a(o(m),{modelValue:o(t).input,"onUpdate:modelValue":r[1]||(r[1]=s=>o(t).input=s),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.disabled")),1),e(),l("div",L,[a(o(m),{modelValue:o(t).disabled,"onUpdate:modelValue":r[2]||(r[2]=s=>o(t).disabled=s),label:n.$t("form.label.password"),disabled:""},null,8,["modelValue","label"]),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.withI18n")),1),e(),l("div",E,[a(o(m),{modelValue:o(t).input,"onUpdate:modelValue":r[3]||(r[3]=s=>o(t).input=s),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.iconSlot")),1),e(),l("div",O,[a(o(m),{modelValue:o(t).input,"onUpdate:modelValue":r[4]||(r[4]=s=>o(t).input=s),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password")},{icon:d(({showPassword:s})=>[l("i",{class:_(`pi ${s?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"]),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.inputWithValidation")),1),e(),l("div",k,[a(o(f),null,{default:d(()=>[a(o(m),{modelValue:o(t).inputWithValidation,"onUpdate:modelValue":r[5]||(r[5]=s=>o(t).inputWithValidation=s),label:n.$t("form.label.password"),options:o(w),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","options","placeholder"])]),_:1}),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.customErrorMessageInput")),1),e(),l("div",q,[a(o(f),null,{default:d(()=>[a(o(m),{modelValue:o(t).passwordInput,"onUpdate:modelValue":r[6]||(r[6]=s=>o(t).passwordInput=s),label:n.$t("form.label.password"),"error-messages":o(g),options:o(w),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1}),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(n.$t("form.label.customValidationInput")),1),e(),l("div",M,[a(o(f),null,{default:d(()=>[a(o(m),{modelValue:o(t).customValidationInput,"onUpdate:modelValue":r[7]||(r[7]=s=>o(t).customValidationInput=s),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password"),schema:o(h),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),a(p,{language:"html-vue"},{default:d(()=>[e(`
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
