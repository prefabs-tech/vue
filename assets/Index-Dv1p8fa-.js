import{C as p,$ as w}from"./DzangolabVue3Form.es-CZwI-83-.js";import{d as P,J as V,L as $,M as I,r as f,I as z,e as y,o as S,i as d,E as l,f as s,t as m,g as t,u as n,B as U,x as F}from"./index-Bbtt5foX.js";import{_ as L}from"./FormPage.vue_vue_type_style_index_0_lang-BYdoovlO.js";const O={class:"section-content"},E={class:"section-content"},q={class:"section-content"},C={class:"section-content"},M={class:"section-content"},k={class:"section-content"},W={class:"section-content"},h={class:"section-content"},B={name:"PasswordInputField"},Z=P({...B,setup(N){const{t:u}=V(),g=$.string({invalid_type_error:u("form.errors.password.invalid"),required_error:u("form.errors.input.required")}).min(8,{message:u("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,u("form.errors.password.invalid")),v={required:u("form.errors.input.required"),weak:u("form.errors.password.invalid")},b={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let a=I({customValidationInput:f(),disabled:f("P@ssw0rd"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(e,o)=>{const i=z("SshPre");return S(),y(L,{title:e.$t("form.label.password"),class:"demo"},{toolbar:d(()=>[t(n(F),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:o[0]||(o[0]=r=>e.$router.push("/form"))},null,8,["label"])]),default:d(()=>[o[33]||(o[33]=l()),s("section",null,[s("h2",null,m(e.$t("form.label.basicInput")),1),o[11]||(o[11]=l()),s("div",O,[t(n(p),{modelValue:n(a).noLabelInput,"onUpdate:modelValue":o[1]||(o[1]=r=>n(a).noLabelInput=r),placeholder:e.$t("form.placeholder.password")},null,8,["modelValue","placeholder"]),o[10]||(o[10]=l()),t(i,{language:"html-vue"},{default:d(()=>o[9]||(o[9]=[l(`
          <template>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),o[34]||(o[34]=l()),s("section",null,[s("h2",null,m(e.$t("form.label.labelInput")),1),o[14]||(o[14]=l()),s("div",E,[t(n(p),{modelValue:n(a).input,"onUpdate:modelValue":o[2]||(o[2]=r=>n(a).input=r),label:e.$t("form.label.password"),placeholder:e.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),o[13]||(o[13]=l()),t(i,{language:"html-vue"},{default:d(()=>o[12]||(o[12]=[l(`
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
        `)])),_:1})])]),o[35]||(o[35]=l()),s("section",null,[s("h2",null,m(e.$t("form.label.disabled")),1),o[17]||(o[17]=l()),s("div",q,[t(n(p),{modelValue:n(a).disabled,"onUpdate:modelValue":o[3]||(o[3]=r=>n(a).disabled=r),label:e.$t("form.label.password"),disabled:""},null,8,["modelValue","label"]),o[16]||(o[16]=l()),t(i,{language:"html-vue"},{default:d(()=>o[15]||(o[15]=[l(`
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
        `)])),_:1})])]),o[36]||(o[36]=l()),s("section",null,[s("h2",null,m(e.$t("form.label.withI18n")),1),o[20]||(o[20]=l()),s("div",C,[t(n(p),{modelValue:n(a).input,"onUpdate:modelValue":o[4]||(o[4]=r=>n(a).input=r),label:e.$t("form.label.password"),placeholder:e.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),o[19]||(o[19]=l()),t(i,{language:"html-vue"},{default:d(()=>o[18]||(o[18]=[l(`
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
        `)])),_:1})])]),o[37]||(o[37]=l()),s("section",null,[s("h2",null,m(e.$t("form.label.iconSlot")),1),o[23]||(o[23]=l()),s("div",M,[t(n(p),{modelValue:n(a).input,"onUpdate:modelValue":o[5]||(o[5]=r=>n(a).input=r),label:e.$t("form.label.password"),placeholder:e.$t("form.placeholder.password")},{icon:d(({showPassword:r})=>[s("i",{class:U(`pi ${r?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"]),o[22]||(o[22]=l()),t(i,{language:"html-vue"},{default:d(()=>o[21]||(o[21]=[l(`
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
        `)])),_:1})])]),o[38]||(o[38]=l()),s("section",null,[s("h2",null,m(e.$t("form.label.inputWithValidation")),1),o[26]||(o[26]=l()),s("div",k,[t(n(w),null,{default:d(()=>[t(n(p),{modelValue:n(a).inputWithValidation,"onUpdate:modelValue":o[6]||(o[6]=r=>n(a).inputWithValidation=r),label:e.$t("form.label.password"),options:b,placeholder:e.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1}),o[25]||(o[25]=l()),t(i,{language:"html-vue"},{default:d(()=>o[24]||(o[24]=[l(`
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
        `)])),_:1})])]),o[39]||(o[39]=l()),s("section",null,[s("h2",null,m(e.$t("form.label.customErrorMessageInput")),1),o[29]||(o[29]=l()),s("div",W,[t(n(w),null,{default:d(()=>[t(n(p),{modelValue:n(a).passwordInput,"onUpdate:modelValue":o[7]||(o[7]=r=>n(a).passwordInput=r),label:e.$t("form.label.password"),"error-messages":v,options:b,placeholder:e.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1}),o[28]||(o[28]=l()),t(i,{language:"html-vue"},{default:d(()=>o[27]||(o[27]=[l(`
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
        `)])),_:1})])]),o[40]||(o[40]=l()),s("section",null,[s("h2",null,m(e.$t("form.label.customValidationInput")),1),o[32]||(o[32]=l()),s("div",h,[t(n(w),null,{default:d(()=>[t(n(p),{modelValue:n(a).customValidationInput,"onUpdate:modelValue":o[8]||(o[8]=r=>n(a).customValidationInput=r),label:e.$t("form.label.password"),placeholder:e.$t("form.placeholder.password"),schema:n(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),o[31]||(o[31]=l()),t(i,{language:"html-vue"},{default:d(()=>o[30]||(o[30]=[l(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{Z as default};
