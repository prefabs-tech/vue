import{C as m,P as w}from"./PrefabsTechVue3Form.es-AW7XjjcA.js";import{d as y,I,L as h,M as S,r as f,J as D,e as M,o as O,j as i,C as o,f as t,h as l,t as u,u as s,A as U,v as q}from"./index-CcONflj6.js";import{_ as E}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-DQO2zJ6R.js";import{_ as F}from"./FormPage.vue_vue_type_style_index_0_lang-Dmadt9ZM.js";import"./PrefabsTechVue3TanstackTable.es--EHRuAoA.js";const L={class:"section-content"},k={class:"section-content"},z={class:"section-content"},C={class:"section-content"},W={class:"section-content"},T={class:"section-content"},A={class:"section-content"},B={class:"section-content"},N={name:"PasswordInputField"},Q=y({...N,setup(Z){const{t:a}=I(),g=[{description:a("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | null | undefined"}],v=h.string({invalid_type_error:a("form.errors.password.invalid"),required_error:a("form.errors.input.required")}).min(8,{message:a("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,a("form.errors.password.invalid")),P=[{default:"false",description:a("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ required: "A password is required", weak: "This password is too weak" }',description:a("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"PasswordErrorMessages"},{default:"null",description:a("form.documentation.propsDescription.input.label"),prop:"label",type:"string | null | undefined"},{default:"null",description:a("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"string | null | undefined"},{default:'"password"',description:a("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:a("form.documentation.propsDescription.input.options"),prop:"options",type:"StrongPasswordOptions"},{default:"-",description:a("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:a("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | object>"}],V=[{description:a("form.documentation.slotDescription.password.icon"),name:"icon",props:"{ showPassword: boolean }"}],$={required:a("form.errors.input.required"),weak:a("form.errors.password.invalid")},b={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let p=S({customValidationInput:f(),disabled:f("P@ssw0rd"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(n,e)=>{const d=D("SshPre");return O(),M(F,{subtitle:s(a)("form.subtitle.password"),title:n.$t("form.label.password"),class:"demo"},{toolbar:i(()=>[l(s(q),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=r=>n.$router.push("/form"))},null,8,["label"])]),default:i(()=>[e[34]||(e[34]=o()),t("section",null,[t("h2",null,u(n.$t("form.label.basicInput")),1),e[11]||(e[11]=o()),t("div",L,[l(s(m),{modelValue:s(p).noLabelInput,"onUpdate:modelValue":e[1]||(e[1]=r=>s(p).noLabelInput=r),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","placeholder"]),e[10]||(e[10]=o()),l(d,{language:"html-vue"},{default:i(()=>e[9]||(e[9]=[o(`
          <template>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[35]||(e[35]=o()),t("section",null,[t("h2",null,u(n.$t("form.label.labelInput")),1),e[14]||(e[14]=o()),t("div",k,[l(s(m),{modelValue:s(p).input,"onUpdate:modelValue":e[2]||(e[2]=r=>s(p).input=r),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e[13]||(e[13]=o()),l(d,{language:"html-vue"},{default:i(()=>e[12]||(e[12]=[o(`
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
        `)])),_:1})])]),e[36]||(e[36]=o()),t("section",null,[t("h2",null,u(n.$t("form.label.disabled")),1),e[17]||(e[17]=o()),t("div",z,[l(s(m),{modelValue:s(p).disabled,"onUpdate:modelValue":e[3]||(e[3]=r=>s(p).disabled=r),label:n.$t("form.label.password"),disabled:""},null,8,["modelValue","label"]),e[16]||(e[16]=o()),l(d,{language:"html-vue"},{default:i(()=>e[15]||(e[15]=[o(`
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
        `)])),_:1})])]),e[37]||(e[37]=o()),t("section",null,[t("h2",null,u(n.$t("form.label.withI18n")),1),e[20]||(e[20]=o()),t("div",C,[l(s(m),{modelValue:s(p).input,"onUpdate:modelValue":e[4]||(e[4]=r=>s(p).input=r),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e[19]||(e[19]=o()),l(d,{language:"html-vue"},{default:i(()=>e[18]||(e[18]=[o(`
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
        `)])),_:1})])]),e[38]||(e[38]=o()),t("section",null,[t("h2",null,u(n.$t("form.label.iconSlot")),1),e[23]||(e[23]=o()),t("div",W,[l(s(m),{modelValue:s(p).input,"onUpdate:modelValue":e[5]||(e[5]=r=>s(p).input=r),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password")},{icon:i(({showPassword:r})=>[t("i",{class:U(`pi ${r?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"]),e[22]||(e[22]=o()),l(d,{language:"html-vue"},{default:i(()=>e[21]||(e[21]=[o(`
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
        `)])),_:1})])]),e[39]||(e[39]=o()),t("section",null,[t("h2",null,u(n.$t("form.label.inputWithValidation")),1),e[26]||(e[26]=o()),t("div",T,[l(s(w),null,{default:i(()=>[l(s(m),{modelValue:s(p).inputWithValidation,"onUpdate:modelValue":e[6]||(e[6]=r=>s(p).inputWithValidation=r),label:n.$t("form.label.password"),options:b,placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1}),e[25]||(e[25]=o()),l(d,{language:"html-vue"},{default:i(()=>e[24]||(e[24]=[o(`
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
        `)])),_:1})])]),e[40]||(e[40]=o()),t("section",null,[t("h2",null,u(n.$t("form.label.customErrorMessageInput")),1),e[29]||(e[29]=o()),t("div",A,[l(s(w),null,{default:i(()=>[l(s(m),{modelValue:s(p).passwordInput,"onUpdate:modelValue":e[7]||(e[7]=r=>s(p).passwordInput=r),label:n.$t("form.label.password"),"error-messages":$,options:b,placeholder:n.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1}),e[28]||(e[28]=o()),l(d,{language:"html-vue"},{default:i(()=>e[27]||(e[27]=[o(`
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
        `)])),_:1})])]),e[41]||(e[41]=o()),t("section",null,[t("h2",null,u(n.$t("form.label.customValidationInput")),1),e[32]||(e[32]=o()),t("div",B,[l(s(w),null,{default:i(()=>[l(s(m),{modelValue:s(p).customValidationInput,"onUpdate:modelValue":e[8]||(e[8]=r=>s(p).customValidationInput=r),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password"),schema:s(v),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[31]||(e[31]=o()),l(d,{language:"html-vue"},{default:i(()=>e[30]||(e[30]=[o(`
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
        `)])),_:1})])]),e[42]||(e[42]=o()),l(E,{"events-data":g,"props-data":P,"props-table-title":n.$t("common.properties",{value:"PasswordProperties"}),"slots-data":V},null,8,["props-table-title"]),e[43]||(e[43]=o()),l(d,{language:"html-vue"},{default:i(()=>e[33]||(e[33]=[o(`
      interface PasswordErrorMessages {
        required?: string;
        weak?: string;
      }
    `)])),_:1})]),_:1},8,["subtitle","title"])}}});export{Q as default};
