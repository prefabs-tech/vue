import{C as i,$ as w}from"./PrefabsTechVue3Form.es-DkZwwYlu.js";import{d as P,E as V,I as $,L as I,r as f,H as h,e as y,o as S,j as d,B as o,f as n,t as m,h as t,u as s,z as U,v as F}from"./index-7DYOETMS.js";import{_ as L}from"./FormPage.vue_vue_type_style_index_0_lang-CvhChv8p.js";const O={class:"section-content"},z={class:"section-content"},E={class:"section-content"},q={class:"section-content"},C={class:"section-content"},k={class:"section-content"},M={class:"section-content"},W={class:"section-content"},B={name:"PasswordInputField"},Z=P({...B,setup(N){const{t:u}=V(),v=$.string({invalid_type_error:u("form.errors.password.invalid"),required_error:u("form.errors.input.required")}).min(8,{message:u("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,u("form.errors.password.invalid")),g={required:u("form.errors.input.required"),weak:u("form.errors.password.invalid")},b={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let a=I({customValidationInput:f(),disabled:f("P@ssw0rd"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(l,e)=>{const p=h("SshPre");return S(),y(L,{title:l.$t("form.label.password"),class:"demo"},{toolbar:d(()=>[t(s(F),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=r=>l.$router.push("/form"))},null,8,["label"])]),default:d(()=>[e[33]||(e[33]=o()),n("section",null,[n("h2",null,m(l.$t("form.label.basicInput")),1),e[11]||(e[11]=o()),n("div",O,[t(s(i),{modelValue:s(a).noLabelInput,"onUpdate:modelValue":e[1]||(e[1]=r=>s(a).noLabelInput=r),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","placeholder"]),e[10]||(e[10]=o()),t(p,{language:"html-vue"},{default:d(()=>e[9]||(e[9]=[o(`
          <template>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[34]||(e[34]=o()),n("section",null,[n("h2",null,m(l.$t("form.label.labelInput")),1),e[14]||(e[14]=o()),n("div",z,[t(s(i),{modelValue:s(a).input,"onUpdate:modelValue":e[2]||(e[2]=r=>s(a).input=r),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e[13]||(e[13]=o()),t(p,{language:"html-vue"},{default:d(()=>e[12]||(e[12]=[o(`
          <template>
            <Password 
              v-model="input"
              label="Password"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[35]||(e[35]=o()),n("section",null,[n("h2",null,m(l.$t("form.label.disabled")),1),e[17]||(e[17]=o()),n("div",E,[t(s(i),{modelValue:s(a).disabled,"onUpdate:modelValue":e[3]||(e[3]=r=>s(a).disabled=r),label:l.$t("form.label.password"),disabled:""},null,8,["modelValue","label"]),e[16]||(e[16]=o()),t(p,{language:"html-vue"},{default:d(()=>e[15]||(e[15]=[o(`
          <template>
            <Password 
              v-model="input"
              label="Password"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const input = ref("P@ssw0rd");
          <\/script>
        `)])),_:1})])]),e[36]||(e[36]=o()),n("section",null,[n("h2",null,m(l.$t("form.label.withI18n")),1),e[20]||(e[20]=o()),n("div",q,[t(s(i),{modelValue:s(a).input,"onUpdate:modelValue":e[4]||(e[4]=r=>s(a).input=r),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e[19]||(e[19]=o()),t(p,{language:"html-vue"},{default:d(()=>e[18]||(e[18]=[o(`
          <template>
            <Password 
              v-model="input"
              :label="t('form.label.password')"
              :placeholder="t('form.placeholder.password')"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[37]||(e[37]=o()),n("section",null,[n("h2",null,m(l.$t("form.label.iconSlot")),1),e[23]||(e[23]=o()),n("div",C,[t(s(i),{modelValue:s(a).input,"onUpdate:modelValue":e[5]||(e[5]=r=>s(a).input=r),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password")},{icon:d(({showPassword:r})=>[n("i",{class:U(`pi ${r?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"]),e[22]||(e[22]=o()),t(p,{language:"html-vue"},{default:d(()=>e[21]||(e[21]=[o(`
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
          import { Password } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[38]||(e[38]=o()),n("section",null,[n("h2",null,m(l.$t("form.label.inputWithValidation")),1),e[26]||(e[26]=o()),n("div",k,[t(s(w),null,{default:d(()=>[t(s(i),{modelValue:s(a).inputWithValidation,"onUpdate:modelValue":e[6]||(e[6]=r=>s(a).inputWithValidation=r),label:l.$t("form.label.password"),options:b,placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1}),e[25]||(e[25]=o()),t(p,{language:"html-vue"},{default:d(()=>e[24]||(e[24]=[o(`
          <Form>
            <Password 
              v-model="input"
              :options="validationOptions"
              label="Password"
              placeholder="Enter a password"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Password } from "@prefabs.tech/vue3-form";
          
          import type { StrongPasswordOptions } from "@prefabs.tech/vue3-form";

          const validationOptions = {
            minLength: 10,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1,
          } as StrongPasswordOptions;
          <\/script>
        `)])),_:1})])]),e[39]||(e[39]=o()),n("section",null,[n("h2",null,m(l.$t("form.label.customErrorMessageInput")),1),e[29]||(e[29]=o()),n("div",M,[t(s(w),null,{default:d(()=>[t(s(i),{modelValue:s(a).passwordInput,"onUpdate:modelValue":e[7]||(e[7]=r=>s(a).passwordInput=r),label:l.$t("form.label.password"),"error-messages":g,options:b,placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1}),e[28]||(e[28]=o()),t(p,{language:"html-vue"},{default:d(()=>e[27]||(e[27]=[o(`
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
          import { Form, Password } from "@prefabs.tech/vue3-form";
          import type { PasswordErrorMessages, StrongPasswordOptions } from "@prefabs.tech/vue3-form";

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
        `)])),_:1})])]),e[40]||(e[40]=o()),n("section",null,[n("h2",null,m(l.$t("form.label.customValidationInput")),1),e[32]||(e[32]=o()),n("div",W,[t(s(w),null,{default:d(()=>[t(s(i),{modelValue:s(a).customValidationInput,"onUpdate:modelValue":e[8]||(e[8]=r=>s(a).customValidationInput=r),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password"),schema:s(v),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[31]||(e[31]=o()),t(p,{language:"html-vue"},{default:d(()=>e[30]||(e[30]=[o(`
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
          import { Form, Password } from "@prefabs.tech/vue3-form";
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
