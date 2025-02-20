import{s as p,o as c}from"./DzangolabVue3Form.es-Cf29nzIN.js";import{d as g,x as v,y as P,z as V,r as f,s as $,j as I,o as z,w as d,A as e,e as n,t as m,g as s,u as o,i as y,B as S}from"./index-j9ugvOHR.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-CciDNi3U.js";const F={class:"section-content"},O={class:"section-content"},_={class:"section-content"},L={class:"section-content"},E={class:"section-content"},q={class:"section-content"},k={class:"section-content"},M={class:"section-content"},W={name:"PasswordInputField"},T=g({...W,setup(C){const{t:u}=v(),b=P.string({invalid_type_error:u("form.errors.password.invalid"),required_error:u("form.errors.input.required")}).min(8,{message:u("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,u("form.errors.password.invalid")),h={required:u("form.errors.input.required"),weak:u("form.errors.password.invalid")},w={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let r=V({customValidationInput:f(),disabled:f("P@ssw0rd"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(l,a)=>{const i=$("SshPre");return z(),I(U,{title:l.$t("form.label.password"),class:"demo"},{toolbar:d(()=>[s(o(S),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:a[0]||(a[0]=t=>l.$router.push("/form"))},null,8,["label"])]),default:d(()=>[e(),n("section",null,[n("h2",null,m(l.$t("form.label.basicInput")),1),e(),n("div",F,[s(o(p),{modelValue:o(r).noLabelInput,"onUpdate:modelValue":a[1]||(a[1]=t=>o(r).noLabelInput=t),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","placeholder"]),e(),s(i,{language:"html-vue"},{default:d(()=>[e(`
          <template>
            <Password 
              v-model="input"
              placeholder="Enter a password"
            />
          </template>

          <script setup lang="ts">
          import { Password } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.labelInput")),1),e(),n("div",O,[s(o(p),{modelValue:o(r).input,"onUpdate:modelValue":a[2]||(a[2]=t=>o(r).input=t),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e(),s(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.disabled")),1),e(),n("div",_,[s(o(p),{modelValue:o(r).disabled,"onUpdate:modelValue":a[3]||(a[3]=t=>o(r).disabled=t),label:l.$t("form.label.password"),disabled:""},null,8,["modelValue","label"]),e(),s(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.withI18n")),1),e(),n("div",L,[s(o(p),{modelValue:o(r).input,"onUpdate:modelValue":a[4]||(a[4]=t=>o(r).input=t),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),e(),s(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.iconSlot")),1),e(),n("div",E,[s(o(p),{modelValue:o(r).input,"onUpdate:modelValue":a[5]||(a[5]=t=>o(r).input=t),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password")},{icon:d(({showPassword:t})=>[n("i",{class:y(`pi ${t?"pi-eye":"pi-eye-slash"}`)},null,2)]),_:1},8,["modelValue","label","placeholder"]),e(),s(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.inputWithValidation")),1),e(),n("div",q,[s(o(c),null,{default:d(()=>[s(o(p),{modelValue:o(r).inputWithValidation,"onUpdate:modelValue":a[6]||(a[6]=t=>o(r).inputWithValidation=t),label:l.$t("form.label.password"),options:o(w),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","options","placeholder"])]),_:1}),e(),s(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.customErrorMessageInput")),1),e(),n("div",k,[s(o(c),null,{default:d(()=>[s(o(p),{modelValue:o(r).passwordInput,"onUpdate:modelValue":a[7]||(a[7]=t=>o(r).passwordInput=t),label:l.$t("form.label.password"),"error-messages":o(h),options:o(w),placeholder:l.$t("form.placeholder.password")},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1}),e(),s(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,m(l.$t("form.label.customValidationInput")),1),e(),n("div",M,[s(o(c),null,{default:d(()=>[s(o(p),{modelValue:o(r).customValidationInput,"onUpdate:modelValue":a[8]||(a[8]=t=>o(r).customValidationInput=t),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password"),schema:o(b),name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),s(i,{language:"html-vue"},{default:d(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{T as default};
