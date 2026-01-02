import{b as m,p as w}from"./PrefabsTechVue3Form.es-DNjZRi9h.js";import{d as y,I,L as h,M as S,r as f,J as D,e as M,o as U,i,f as n,B as o,h as l,t as u,u as s,z as q}from"./index-_KTl89S5.js";import{_ as E}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Bahs9Lcd.js";import{_ as F}from"./FormPage.vue_vue_type_style_index_0_lang-Bo69T1F6.js";import"./PrefabsTechVue3TanstackTable.es-C1ruhRIR.js";const L={class:"section-content"},O={class:"section-content"},z={class:"section-content"},k={class:"section-content"},c={class:"section-content"},W={class:"section-content"},B={class:"section-content"},T={class:"section-content"},C={name:"PasswordInputField"},H=y({...C,setup(A){const{t:r}=I(),g=[{description:r("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | null | undefined"}],v=h.string({invalid_type_error:r("form.errors.password.invalid"),required_error:r("form.errors.input.required")}).min(8,{message:r("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,r("form.errors.password.invalid")),P=[{default:"false",description:r("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:'{ required: "A password is required", weak: "This password is too weak" }',description:r("form.documentation.propsDescription.input.errorMessages"),prop:"errorMessages",type:"PasswordErrorMessages"},{default:"null",description:r("form.documentation.propsDescription.input.label"),prop:"label",type:"string | null | undefined"},{default:"null",description:r("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"string | null | undefined"},{default:'"password"',description:r("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:r("form.documentation.propsDescription.input.options"),prop:"options",type:"StrongPasswordOptions"},{default:"-",description:r("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:r("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | object>"}],V=[{description:r("form.documentation.slotDescription.password.icon"),name:"icon",props:"{ showPassword: boolean }"}],$={required:r("form.errors.input.required"),weak:r("form.errors.password.invalid")},b={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let p=S({customValidationInput:f(),disabled:f("P@ssw0rd"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(t,e)=>{const d=D("SshPre");return U(),M(F,{subtitle:s(r)("form.subtitle.password"),title:t.$t("form.label.password"),class:"demo"},{default:i(()=>[n("section",null,[n("h2",null,u(t.$t("form.label.basicInput")),1),e[10]||(e[10]=o()),n("div",L,[l(s(m),{modelValue:s(p).noLabelInput,"onUpdate:modelValue":e[0]||(e[0]=a=>s(p).noLabelInput=a),placeholder:t.$t("form.placeholder.password"),name:"basic"},null,8,["modelValue","placeholder"]),e[9]||(e[9]=o()),l(d,{language:"html-vue"},{default:i(()=>e[8]||(e[8]=[o(`
          <template>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[33]||(e[33]=o()),n("section",null,[n("h2",null,u(t.$t("form.label.labelInput")),1),e[13]||(e[13]=o()),n("div",O,[l(s(m),{modelValue:s(p).input,"onUpdate:modelValue":e[1]||(e[1]=a=>s(p).input=a),label:t.$t("form.label.password"),placeholder:t.$t("form.placeholder.password"),name:"labeled"},null,8,["modelValue","label","placeholder"]),e[12]||(e[12]=o()),l(d,{language:"html-vue"},{default:i(()=>e[11]||(e[11]=[o(`
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
        `)])),_:1})])]),e[34]||(e[34]=o()),n("section",null,[n("h2",null,u(t.$t("form.label.disabled")),1),e[16]||(e[16]=o()),n("div",z,[l(s(m),{modelValue:s(p).disabled,"onUpdate:modelValue":e[2]||(e[2]=a=>s(p).disabled=a),label:t.$t("form.label.password"),disabled:"",name:"disabled"},null,8,["modelValue","label"]),e[15]||(e[15]=o()),l(d,{language:"html-vue"},{default:i(()=>e[14]||(e[14]=[o(`
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
        `)])),_:1})])]),e[35]||(e[35]=o()),n("section",null,[n("h2",null,u(t.$t("form.label.withI18n")),1),e[19]||(e[19]=o()),n("div",k,[l(s(m),{modelValue:s(p).input,"onUpdate:modelValue":e[3]||(e[3]=a=>s(p).input=a),label:t.$t("form.label.password"),placeholder:t.$t("form.placeholder.password"),name:"i18n"},null,8,["modelValue","label","placeholder"]),e[18]||(e[18]=o()),l(d,{language:"html-vue"},{default:i(()=>e[17]||(e[17]=[o(`
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
        `)])),_:1})])]),e[36]||(e[36]=o()),n("section",null,[n("h2",null,u(t.$t("form.label.iconSlot")),1),e[22]||(e[22]=o()),n("div",c,[l(s(m),{modelValue:s(p).input,"onUpdate:modelValue":e[4]||(e[4]=a=>s(p).input=a),label:t.$t("form.label.password"),placeholder:t.$t("form.placeholder.password"),name:"icon-slot"},{icon:i(({showPassword:a})=>[n("i",{class:q(`pi ${a?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"]),e[21]||(e[21]=o()),l(d,{language:"html-vue"},{default:i(()=>e[20]||(e[20]=[o(`
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
        `)])),_:1})])]),e[37]||(e[37]=o()),n("section",null,[n("h2",null,u(t.$t("form.label.inputWithValidation")),1),e[25]||(e[25]=o()),n("div",W,[l(s(w),null,{default:i(()=>[l(s(m),{modelValue:s(p).inputWithValidation,"onUpdate:modelValue":e[5]||(e[5]=a=>s(p).inputWithValidation=a),label:t.$t("form.label.password"),options:b,placeholder:t.$t("form.placeholder.password"),name:"validation"},null,8,["modelValue","label","placeholder"])]),_:1}),e[24]||(e[24]=o()),l(d,{language:"html-vue"},{default:i(()=>e[23]||(e[23]=[o(`
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
        `)])),_:1})])]),e[38]||(e[38]=o()),n("section",null,[n("h2",null,u(t.$t("form.label.customErrorMessageInput")),1),e[28]||(e[28]=o()),n("div",B,[l(s(w),null,{default:i(()=>[l(s(m),{modelValue:s(p).passwordInput,"onUpdate:modelValue":e[6]||(e[6]=a=>s(p).passwordInput=a),label:t.$t("form.label.password"),"error-messages":$,options:b,placeholder:t.$t("form.placeholder.password"),name:"custom-error"},null,8,["modelValue","label","placeholder"])]),_:1}),e[27]||(e[27]=o()),l(d,{language:"html-vue"},{default:i(()=>e[26]||(e[26]=[o(`
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
        `)])),_:1})])]),e[39]||(e[39]=o()),n("section",null,[n("h2",null,u(t.$t("form.label.customValidationInput")),1),e[31]||(e[31]=o()),n("div",T,[l(s(w),null,{default:i(()=>[l(s(m),{modelValue:s(p).customValidationInput,"onUpdate:modelValue":e[7]||(e[7]=a=>s(p).customValidationInput=a),label:t.$t("form.label.password"),placeholder:t.$t("form.placeholder.password"),schema:s(v),name:"custom-input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[30]||(e[30]=o()),l(d,{language:"html-vue"},{default:i(()=>e[29]||(e[29]=[o(`
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
        `)])),_:1})])]),e[40]||(e[40]=o()),l(E,{"events-data":g,"props-data":P,"props-table-title":t.$t("common.properties",{value:"PasswordProperties"}),"slots-data":V},null,8,["props-table-title"]),e[41]||(e[41]=o()),l(d,{language:"html-vue"},{default:i(()=>e[32]||(e[32]=[o(`
      interface PasswordErrorMessages {
        required?: string;
        weak?: string;
      }
    `)])),_:1})]),_:1},8,["subtitle","title"])}}});export{H as default};
