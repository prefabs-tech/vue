import{m as P,t as m,Z as u}from"./DzangolabVue3Form.es-cc31c001.js";import{d as V,a4 as $,l as _,j as c,G as b,o as I,c as F,w as a,K as l,C as e,S as i,f as n,D as o,e as z}from"./index-41cc4917-0590814e.js";import{_ as S}from"./FormPage.vue_vue_type_style_index_0_lang-0a91faf3.js";import"./index-777a9b00.js";const y={class:"section-content"},U={class:"section-content"},L={class:"section-content"},O={class:"section-content"},k={class:"section-content"},E={class:"section-content"},q={class:"section-content"},M={class:"section-content"},W={name:"PasswordInputField"},T=V({...W,setup(C){const{t:f}=$(),h=P.string({invalid_type_error:f("form.errors.password.invalid"),required_error:f("form.errors.input.required")}).min(8,{message:f("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,f("form.errors.password.invalid")),g={required:f("form.errors.input.required"),weak:f("form.errors.password.invalid")},w={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let t=_({customValidationInput:c(),disabled:c("P@ssw0rd"),input:c(),inputWithValidation:c(),noLabelInput:c(),passwordInput:c()});return(s,d)=>{const v=b("router-link"),p=b("SshPre");return I(),F(S,{title:s.$t("form.label.password"),class:"demo"},{toolbar:a(()=>[l(v,{to:{name:"form"},class:"back"},{default:a(()=>[e(i(s.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),n("section",null,[n("h2",null,i(s.$t("form.label.basicInput")),1),e(),n("div",y,[l(p,{language:"html-vue"},{default:a(()=>[e(`
          <From>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </From>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),l(o(u),null,{default:a(()=>[l(o(m),{modelValue:o(t).noLabelInput,"onUpdate:modelValue":d[0]||(d[0]=r=>o(t).noLabelInput=r),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","placeholder"])]),_:1})])]),e(),n("section",null,[n("h2",null,i(s.$t("form.label.labelInput")),1),e(),n("div",U,[l(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(o(u),null,{default:a(()=>[l(o(m),{modelValue:o(t).input,"onUpdate:modelValue":d[1]||(d[1]=r=>o(t).input=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),n("section",null,[n("h2",null,i(s.$t("form.label.disabled")),1),e(),n("div",L,[l(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(o(u),null,{default:a(()=>[l(o(m),{modelValue:o(t).disabled,"onUpdate:modelValue":d[2]||(d[2]=r=>o(t).disabled=r),label:s.$t("form.label.password"),disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),n("section",null,[n("h2",null,i(s.$t("form.label.withI18n")),1),e(),n("div",O,[l(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(o(u),null,{default:a(()=>[l(o(m),{modelValue:o(t).input,"onUpdate:modelValue":d[3]||(d[3]=r=>o(t).input=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),n("section",null,[n("h2",null,i(s.$t("form.label.iconSlot")),1),e(),n("div",k,[l(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(o(u),null,{default:a(()=>[l(o(m),{modelValue:o(t).input,"onUpdate:modelValue":d[4]||(d[4]=r=>o(t).input=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password")},{icon:a(({showPassword:r})=>[n("i",{class:z(`pi ${r?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"])]),_:1})])]),e(),n("section",null,[n("h2",null,i(s.$t("form.label.inputWithValidation")),1),e(),n("div",E,[l(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(o(u),null,{default:a(()=>[l(o(m),{modelValue:o(t).inputWithValidation,"onUpdate:modelValue":d[5]||(d[5]=r=>o(t).inputWithValidation=r),label:s.$t("form.label.password"),options:o(w),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","options","placeholder"])]),_:1})])]),e(),n("section",null,[n("h2",null,i(s.$t("form.label.customErrorMessageInput")),1),e(),n("div",q,[l(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(o(u),null,{default:a(()=>[l(o(m),{modelValue:o(t).passwordInput,"onUpdate:modelValue":d[6]||(d[6]=r=>o(t).passwordInput=r),label:s.$t("form.label.password"),"error-messages":o(g),options:o(w),placeholder:s.$t("form.placeholder.password")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})])]),e(),n("section",null,[n("h2",null,i(s.$t("form.label.customValidationInput")),1),e(),n("div",M,[l(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),l(o(u),null,{default:a(()=>[l(o(m),{modelValue:o(t).customValidationInput,"onUpdate:modelValue":d[7]||(d[7]=r=>o(t).customValidationInput=r),label:s.$t("form.label.password"),placeholder:s.$t("form.placeholder.password"),schema:o(h),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{T as default};
