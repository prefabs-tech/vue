import{d as P,u as V,b as _,e as p,o as $,c as y,w as d,a as t,t as m,f as n,g as s,h as e,r as w}from"./index-3e12d54f.js";import{m as I,U as u,z as c}from"./DzangolabVue3Form.es-0c514279.js";const S={class:"demo-section"},z={class:"demo-section"},U={class:"demo-section"},F={class:"demo-section"},E={class:"demo-section"},L={class:"demo-section"},O={class:"demo-section"},q={name:"PasswordInputField"},B=P({...q,setup(M){const{t:f}=V(),g=I.string({invalid_type_error:f("form.errors.password.invalid"),required_error:f("form.errors.input.required")}).min(8,{message:f("form.errors.password.min",{length:8})}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,f("form.errors.password.invalid")),h={required:f("form.errors.input.required"),weak:f("form.errors.password.invalid")},b={minLength:10,minLowercase:1,minUppercase:1,minSymbols:1};let l=_({customStyleInput:p(),customValidationInput:p(),disabled:p("P@ssw0rd"),input:p(),inputWithValidation:p(),noLabelInput:p(),passwordInput:p()});return(o,a)=>{const i=w("SshPre"),v=w("Page");return $(),y(v,{title:o.$t("form.label.password")},{default:d(()=>[t("section",S,[t("h3",null,m(o.$t("form.label.basicInput")),1),n(),s(i,{language:"html-vue"},{default:d(()=>[n(`
        <template>
          <Password 
            v-model="input"
            placeholder="Enter a password"
          />
        </template>

        <script setup lang="ts">
        import { Password } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),n(),s(e(u),{modelValue:e(l).noLabelInput,"onUpdate:modelValue":a[0]||(a[0]=r=>e(l).noLabelInput=r),placeholder:o.$t("form.placeholder.password"),class:"form-field"},null,8,["modelValue","placeholder"])]),n(),t("section",z,[t("h3",null,m(o.$t("form.label.labelInput")),1),n(),s(i,{language:"html-vue"},{default:d(()=>[n(`
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
      `)]),_:1}),n(),s(e(u),{modelValue:e(l).input,"onUpdate:modelValue":a[1]||(a[1]=r=>e(l).input=r),label:o.$t("form.label.password"),placeholder:o.$t("form.placeholder.password"),class:"form-field"},null,8,["modelValue","label","placeholder"])]),n(),t("section",U,[t("h3",null,m(o.$t("form.label.disabled")),1),n(),s(i,{language:"html-vue"},{default:d(()=>[n(`
        <template>
          <Password 
            v-model="input"
            label="Disabled"
            disabled
          />
        </template>

        <script setup lang="ts">
        import { Password } from "@dzangolab/vue3-form";
        import { ref } from vue;

        const input = ref("P@ssw0rd");
        <\/script>
      `)]),_:1}),n(),s(e(u),{modelValue:e(l).disabled,"onUpdate:modelValue":a[2]||(a[2]=r=>e(l).disabled=r),label:o.$t("form.label.disabled"),class:"form-field",disabled:""},null,8,["modelValue","label"])]),n(),t("section",F,[t("h3",null,m(o.$t("form.label.inputWithValidation")),1),n(),s(i,{language:"html-vue"},{default:d(()=>[n(`
        <template>
          <Form>
            <Password 
              v-model="input"
              :options="validationOptions"
              label="Password"
              placeholder="Enter a password"
            />
          </Form>
        </template>

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
      `)]),_:1}),n(),s(e(c),null,{default:d(()=>[s(e(u),{modelValue:e(l).inputWithValidation,"onUpdate:modelValue":a[3]||(a[3]=r=>e(l).inputWithValidation=r),label:o.$t("form.label.password"),options:e(b),placeholder:o.$t("form.placeholder.password"),class:"form-field"},null,8,["modelValue","label","options","placeholder"])]),_:1})]),n(),t("section",E,[t("h3",null,m(o.$t("form.label.customErrorMessageInput")),1),n(),s(i,{language:"html-vue"},{default:d(()=>[n(`
        <template>
          <Form>
            <Password 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Password"
              placeholder="Enter a password"
            />
          </Form>
        </template>

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
      `)]),_:1}),n(),s(e(c),null,{default:d(()=>[s(e(u),{modelValue:e(l).passwordInput,"onUpdate:modelValue":a[4]||(a[4]=r=>e(l).passwordInput=r),label:o.$t("form.label.password"),"error-messages":e(h),options:e(b),placeholder:o.$t("form.placeholder.password"),class:"form-field"},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})]),n(),t("section",L,[t("h3",null,m(o.$t("form.label.customValidationInput")),1),n(),s(i,{language:"html-vue"},{default:d(()=>[n(`
        <template>
          <Form>
            <Password 
              v-model="input"
              :schema="inputSchema"
              label="Password"
              placeholder="Enter a password"
              name="input"
            />
          </Form>
        </template>

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
      `)]),_:1}),n(),s(e(c),null,{default:d(()=>[s(e(u),{modelValue:e(l).customValidationInput,"onUpdate:modelValue":a[5]||(a[5]=r=>e(l).customValidationInput=r),label:o.$t("form.label.password"),placeholder:o.$t("form.placeholder.password"),schema:e(g),class:"form-field",name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})]),n(),t("section",O,[t("h3",null,m(o.$t("form.label.customStyleInput")),1),n(),s(i,{language:"html-vue"},{default:d(()=>[n(`
        <template>
          <Password 
            v-model="input"
            class="custom-style-input"
            label="Password"
            placeholder="Enter a password"
          />
        </template>

        <script setup lang="ts">
        import { Password } from "@dzangolab/vue3-form";
        <\/script>

        <style>
        .custom-style-input input {
          --_input-field-border-color: #007aff;
          --_input-field-border-radius: 0.5em;
          --_input-field-label-color: #007aff;
          --_input-field-padding-h: 0.5em;
          --_input-field-padding-v: 0.5em;

          color: #007aff;
        }

        .custom-style-input input:focus {
          box-shadow: 0 0 0 0.25rem #03449e9a;
        }
        </style>
      `)]),_:1}),n(),s(e(u),{modelValue:e(l).customStyleInput,"onUpdate:modelValue":a[6]||(a[6]=r=>e(l).customStyleInput=r),label:o.$t("form.label.password"),placeholder:o.$t("form.placeholder.password"),class:"form-field custom-style-input"},null,8,["modelValue","label","placeholder"])])]),_:1},8,["title"])}}});export{B as default};
