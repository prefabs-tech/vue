import{o as p,l as c}from"./DzangolabVue3Form.es-db631682.js";import{d as g,a5 as v,p as P,j as f,J as V,o as $,c as I,w as d,K as a,D as o,ao as z,W as e,f as n,L as m,e as y}from"./index-729398ab-b294403d.js";import{m as S}from"./index-6bf42b23.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-c07c697e.js";const F={class:"section-content"},L={class:"section-content"},O={class:"section-content"},_={class:"section-content"},E={class:"section-content"},q={class:"section-content"},W={class:"section-content"},k={class:"section-content"},M={name:"PasswordInputField"},A=g({...M,setup(C){const{t:u}=v(),b=S.string({invalid_type_error:u("form.errors.password.invalid"),required_error:u("form.errors.input.required")}).min(8,{message:u("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,u("form.errors.password.invalid")),h={required:u("form.errors.input.required"),weak:u("form.errors.password.invalid")},w={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let t=P({customValidationInput:f(),disabled:f("P@ssw0rd"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(l,s)=>{const i=V("SshPre");return $(),I(U,{title:l.$t("form.label.password"),class:"demo"},{toolbar:d(()=>[a(o(z),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:s[0]||(s[0]=r=>l.$router.push("/form"))},null,8,["label"])]),default:d(()=>[e(),n("section",null,[n("h2",null,m(l.$t("form.label.basicInput")),1),e(),n("div",F,[a(o(p),{modelValue:o(t).noLabelInput,"onUpdate:modelValue":s[1]||(s[1]=r=>o(t).noLabelInput=r),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","placeholder"]),e(),a(i,{language:"html-vue"},{default:d(()=>[e(`
          <template>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.labelInput")),1),e(),n("div",L,[a(o(p),{modelValue:o(t).input,"onUpdate:modelValue":s[2]||(s[2]=r=>o(t).input=r),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e(),a(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.disabled")),1),e(),n("div",O,[a(o(p),{modelValue:o(t).disabled,"onUpdate:modelValue":s[3]||(s[3]=r=>o(t).disabled=r),label:l.$t("form.label.password"),disabled:""},null,8,["modelValue","label"]),e(),a(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.withI18n")),1),e(),n("div",_,[a(o(p),{modelValue:o(t).input,"onUpdate:modelValue":s[4]||(s[4]=r=>o(t).input=r),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e(),a(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.iconSlot")),1),e(),n("div",E,[a(o(p),{modelValue:o(t).input,"onUpdate:modelValue":s[5]||(s[5]=r=>o(t).input=r),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password")},{icon:d(({showPassword:r})=>[n("i",{class:y(`pi ${r?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"]),e(),a(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.inputWithValidation")),1),e(),n("div",q,[a(o(c),null,{default:d(()=>[a(o(p),{modelValue:o(t).inputWithValidation,"onUpdate:modelValue":s[6]||(s[6]=r=>o(t).inputWithValidation=r),label:l.$t("form.label.password"),options:o(w),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","options","placeholder"])]),_:1}),e(),a(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.customErrorMessageInput")),1),e(),n("div",W,[a(o(c),null,{default:d(()=>[a(o(p),{modelValue:o(t).passwordInput,"onUpdate:modelValue":s[7]||(s[7]=r=>o(t).passwordInput=r),label:l.$t("form.label.password"),"error-messages":o(h),options:o(w),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1}),e(),a(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.customValidationInput")),1),e(),n("div",k,[a(o(c),null,{default:d(()=>[a(o(p),{modelValue:o(t).customValidationInput,"onUpdate:modelValue":s[8]||(s[8]=r=>o(t).customValidationInput=r),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password"),schema:o(b),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),a(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{A as default};
