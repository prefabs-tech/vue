import{m as V,t as m,Z as u}from"./DzangolabVue3Form.es-f6c872e7.js";import{d as $,a4 as I,l as _,j as f,G as w,o as F,c as z,w as a,K as l,C as o,S as i,f as n,D as e,e as S}from"./index-d658739c-63af44b8.js";import"./index-bc5452e9.js";const y={class:"section-content"},U={class:"section-content"},L={class:"section-content"},O={class:"section-content"},k={class:"section-content"},E={class:"section-content"},q={class:"section-content"},M={class:"section-content"},W={name:"PasswordInputField"},N=$({...W,setup(C){const{t:c}=I(),g=V.string({invalid_type_error:c("form.errors.password.invalid"),required_error:c("form.errors.input.required")}).min(8,{message:c("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,c("form.errors.password.invalid")),h={required:c("form.errors.input.required"),weak:c("form.errors.password.invalid")},b={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let t=_({customValidationInput:f(),disabled:f("P@ssw0rd"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(s,d)=>{const v=w("router-link"),p=w("SshPre"),P=w("Page");return F(),z(P,{title:s.$t("form.label.password"),class:"demo"},{toolbar:a(()=>[l(v,{to:{name:"form"},class:"back"},{default:a(()=>[o(i(s.$t("common.back")),1)]),_:1})]),default:a(()=>[o(),n("section",null,[n("h2",null,i(s.$t("form.label.basicInput")),1),o(),n("div",y,[l(p,{language:"html-vue"},{default:a(()=>[o(`
          <From>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </From>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),o(),l(e(u),null,{default:a(()=>[l(e(m),{modelValue:e(t).noLabelInput,"onUpdate:modelValue":d[0]||(d[0]=r=>e(t).noLabelInput=r),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","placeholder"])]),_:1})])]),o(),n("section",null,[n("h2",null,i(s.$t("form.label.labelInput")),1),o(),n("div",U,[l(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),l(e(u),null,{default:a(()=>[l(e(m),{modelValue:e(t).input,"onUpdate:modelValue":d[1]||(d[1]=r=>e(t).input=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1})])]),o(),n("section",null,[n("h2",null,i(s.$t("form.label.disabled")),1),o(),n("div",L,[l(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),l(e(u),null,{default:a(()=>[l(e(m),{modelValue:e(t).disabled,"onUpdate:modelValue":d[2]||(d[2]=r=>e(t).disabled=r),label:s.$t("form.label.password"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),o(),n("section",null,[n("h2",null,i(s.$t("form.label.withI18n")),1),o(),n("div",O,[l(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),l(e(u),null,{default:a(()=>[l(e(m),{modelValue:e(t).input,"onUpdate:modelValue":d[3]||(d[3]=r=>e(t).input=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1})])]),o(),n("section",null,[n("h2",null,i(s.$t("form.label.iconSlot")),1),o(),n("div",k,[l(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),l(e(u),null,{default:a(()=>[l(e(m),{modelValue:e(t).input,"onUpdate:modelValue":d[4]||(d[4]=r=>e(t).input=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},{icon:a(({showPassword:r})=>[n("i",{class:S(`pi ${r?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"])]),_:1})])]),o(),n("section",null,[n("h2",null,i(s.$t("form.label.inputWithValidation")),1),o(),n("div",E,[l(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),l(e(u),null,{default:a(()=>[l(e(m),{modelValue:e(t).inputWithValidation,"onUpdate:modelValue":d[5]||(d[5]=r=>e(t).inputWithValidation=r),label:s.$t("form.label.password"),options:e(b),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),o(),n("section",null,[n("h2",null,i(s.$t("form.label.customErrorMessageInput")),1),o(),n("div",q,[l(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),l(e(u),null,{default:a(()=>[l(e(m),{modelValue:e(t).passwordInput,"onUpdate:modelValue":d[6]||(d[6]=r=>e(t).passwordInput=r),label:s.$t("form.label.password"),"error-messages":e(h),options:e(b),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})])]),o(),n("section",null,[n("h2",null,i(s.$t("form.label.customValidationInput")),1),o(),n("div",M,[l(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),l(e(u),null,{default:a(()=>[l(e(m),{modelValue:e(t).customValidationInput,"onUpdate:modelValue":d[7]||(d[7]=r=>e(t).customValidationInput=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password"),schema:e(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{N as default};
