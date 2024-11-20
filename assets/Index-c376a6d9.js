import{m as V,t as m,Z as u}from"./DzangolabVue3Form.es-66293d03.js";import{d as $,u as I,b as _,e as f,r as w,o as F,c as z,w as a,f as n,g as o,t as i,a as l,h as e,H as S}from"./index-d455476b.js";const y={class:"section-content"},U={class:"section-content"},L={class:"section-content"},O={class:"section-content"},k={class:"section-content"},E={class:"section-content"},q={class:"section-content"},M={class:"section-content"},W={name:"PasswordInputField"},N=$({...W,setup(C){const{t:c}=I(),g=V.string({invalid_type_error:c("form.errors.password.invalid"),required_error:c("form.errors.input.required")}).min(8,{message:c("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,c("form.errors.password.invalid")),h={required:c("form.errors.input.required"),weak:c("form.errors.password.invalid")},b={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let t=_({customValidationInput:f(),disabled:f("P@ssw0rd"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(s,d)=>{const v=w("router-link"),p=w("SshPre"),P=w("Page");return F(),z(P,{title:s.$t("form.label.password"),class:"demo"},{toolbar:a(()=>[n(v,{to:{name:"form"},class:"back"},{default:a(()=>[o(i(s.$t("common.back")),1)]),_:1})]),default:a(()=>[o(),l("section",null,[l("h2",null,i(s.$t("form.label.basicInput")),1),o(),l("div",y,[n(p,{language:"html-vue"},{default:a(()=>[o(`
          <From>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </From>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(m),{modelValue:e(t).noLabelInput,"onUpdate:modelValue":d[0]||(d[0]=r=>e(t).noLabelInput=r),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,i(s.$t("form.label.labelInput")),1),o(),l("div",U,[n(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(m),{modelValue:e(t).input,"onUpdate:modelValue":d[1]||(d[1]=r=>e(t).input=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,i(s.$t("form.label.disabled")),1),o(),l("div",L,[n(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(m),{modelValue:e(t).disabled,"onUpdate:modelValue":d[2]||(d[2]=r=>e(t).disabled=r),label:s.$t("form.label.password"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),o(),l("section",null,[l("h2",null,i(s.$t("form.label.withI18n")),1),o(),l("div",O,[n(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(m),{modelValue:e(t).input,"onUpdate:modelValue":d[3]||(d[3]=r=>e(t).input=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,i(s.$t("form.label.iconSlot")),1),o(),l("div",k,[n(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(m),{modelValue:e(t).input,"onUpdate:modelValue":d[4]||(d[4]=r=>e(t).input=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},{icon:a(({showPassword:r})=>[l("i",{class:S(`pi ${r?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,i(s.$t("form.label.inputWithValidation")),1),o(),l("div",E,[n(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(m),{modelValue:e(t).inputWithValidation,"onUpdate:modelValue":d[5]||(d[5]=r=>e(t).inputWithValidation=r),label:s.$t("form.label.password"),options:e(b),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,i(s.$t("form.label.customErrorMessageInput")),1),o(),l("div",q,[n(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(m),{modelValue:e(t).passwordInput,"onUpdate:modelValue":d[6]||(d[6]=r=>e(t).passwordInput=r),label:s.$t("form.label.password"),"error-messages":e(h),options:e(b),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})])]),o(),l("section",null,[l("h2",null,i(s.$t("form.label.customValidationInput")),1),o(),l("div",M,[n(p,{language:"html-vue"},{default:a(()=>[o(`
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
        `)]),_:1}),o(),n(e(u),null,{default:a(()=>[n(e(m),{modelValue:e(t).customValidationInput,"onUpdate:modelValue":d[7]||(d[7]=r=>e(t).customValidationInput=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password"),schema:e(g),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{N as default};
