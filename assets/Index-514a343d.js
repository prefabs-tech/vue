import{d as E,u as V,b as z,e as d,o as I,c as y,w as s,a as i,t as p,f as e,g as n,h as l,r as g}from"./index-3bb8d7f9.js";import{m as $,H as u,z as c}from"./DzangolabVue3Form.es-ceb02955.js";const w={class:"demo-section"},F={class:"demo-section"},S={class:"demo-section"},O={class:"demo-section"},U={class:"demo-section"},q={class:"demo-section"},M={class:"demo-section"},P={name:"EmailInputField"},D=E({...P,setup(W){const{t:f}=V(),h=$.string().email({message:f("form.errors.email.invalid")}),v={required:f("form.errors.input.required"),invalid:f("form.errors.email.invalid",{list:"(dzangolab.com, dzango.com, gmail.com)"})},b={allow_display_name:!1,allow_utf8_local_part:!0,host_whitelist:["dzangolab.com","dzango.com","gmail.com"],require_display_name:!1};let o=z({customStyleInput:d(),customValidationInput:d(),disabled:d("monorepo@dzangolab.com"),input:d(),inputWithValidation:d(),noLabelInput:d(),textInput:d()});return(a,t)=>{const r=g("SshPre"),_=g("Page");return I(),y(_,{title:a.$t("form.label.textInput")},{default:s(()=>[i("section",w,[i("h3",null,p(a.$t("form.label.basicInput")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Email 
            v-model="input"
            placeholder="Enter a email"
          />
        </template>

        <script setup lang="ts">
        import { Email } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),n(l(u),{modelValue:l(o).noLabelInput,"onUpdate:modelValue":t[0]||(t[0]=m=>l(o).noLabelInput=m),placeholder:a.$t("form.placeholder.email"),class:"form-field"},null,8,["modelValue","placeholder"])]),e(),i("section",F,[i("h3",null,p(a.$t("form.label.labelInput")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Email 
            v-model="input"
            label="Email"
            placeholder="Enter a email"
          />
        </template>

        <script setup lang="ts">
        import { Email } from "@dzangolab/vue3-form";
        <\/script>
      `)]),_:1}),e(),n(l(u),{modelValue:l(o).input,"onUpdate:modelValue":t[1]||(t[1]=m=>l(o).input=m),label:a.$t("form.label.email"),placeholder:a.$t("form.placeholder.email"),class:"form-field"},null,8,["modelValue","label","placeholder"])]),e(),i("section",S,[i("h3",null,p(a.$t("form.label.disabled")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Email 
            v-model="input"
            label="Disabled"
            disabled
          />
        </template>

        <script setup lang="ts">
        import { Email } from "@dzangolab/vue3-form";
        import { ref } from vue;

        const input = ref("monorepo@dzangolab.com");
        <\/script>
      `)]),_:1}),e(),n(l(u),{modelValue:l(o).disabled,"onUpdate:modelValue":t[2]||(t[2]=m=>l(o).disabled=m),label:a.$t("form.label.disabled"),class:"form-field",disabled:""},null,8,["modelValue","label"])]),e(),i("section",O,[i("h3",null,p(a.$t("form.label.inputWithValidation")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Form>
            <Email 
              v-model="input"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, Email } from "@dzangolab/vue3-form";
        
        import type { IsEmailOptions } from "@dzangolab/vue3-form";

        const validationOptions = {
          allow_display_name: false,
          allow_utf8_local_part: true,
          host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
          require_display_name: false,
        } as IsEmailOptions;
        <\/script>
      `)]),_:1}),e(),n(l(c),null,{default:s(()=>[n(l(u),{modelValue:l(o).inputWithValidation,"onUpdate:modelValue":t[3]||(t[3]=m=>l(o).inputWithValidation=m),label:a.$t("form.label.email"),options:l(b),placeholder:a.$t("form.placeholder.email"),class:"form-field"},null,8,["modelValue","label","options","placeholder"])]),_:1})]),e(),i("section",U,[i("h3",null,p(a.$t("form.label.customErrorMessageInput")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Form>
            <Email 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, Email } from "@dzangolab/vue3-form";
        
        import type { EmailErrorMessages, IsEmailOptions } from "@dzangolab/vue3-form";

        const validationMessages = {
          required: "The field should not be empty",
          invalid: "Please provide a valid email (dzangolab.com, dzango.com, gmail.com)"
        } as EmailErrorMessages;

        const validationOptions = {
          allow_display_name: false,
          allow_utf8_local_part: true,
          host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
          require_display_name: false,
        } as IsEmailOptions;
        <\/script>
      `)]),_:1}),e(),n(l(c),null,{default:s(()=>[n(l(u),{modelValue:l(o).textInput,"onUpdate:modelValue":t[4]||(t[4]=m=>l(o).textInput=m),label:a.$t("form.label.email"),"error-messages":l(v),options:l(b),placeholder:a.$t("form.placeholder.email"),class:"form-field"},null,8,["modelValue","label","error-messages","options","placeholder"])]),_:1})]),e(),i("section",q,[i("h3",null,p(a.$t("form.label.customValidationInput")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Form>
            <Email 
              v-model="input"
              :schema="inputSchema"
              label="Email"
              placeholder="Enter a email"
              name="input"
            />
          </Form>
        </template>

        <script setup lang="ts">
        import { Form, Email } from "@dzangolab/vue3-form";
        import { z } from "zod";

        const inputSchema = z.string()
          .email({ message: "Please provide a valid email" });
        <\/script>
      `)]),_:1}),e(),n(l(c),null,{default:s(()=>[n(l(u),{modelValue:l(o).customValidationInput,"onUpdate:modelValue":t[5]||(t[5]=m=>l(o).customValidationInput=m),label:a.$t("form.label.email"),placeholder:a.$t("form.placeholder.email"),schema:l(h),class:"form-field",name:"custom_input"},null,8,["modelValue","label","placeholder","schema"])]),_:1})]),e(),i("section",M,[i("h3",null,p(a.$t("form.label.customStyleInput")),1),e(),n(r,{language:"html-vue"},{default:s(()=>[e(`
        <template>
          <Email 
            v-model="input"
            class="custom-style-input"
            label="Email"
            placeholder="Enter a email"
          />
        </template>

        <script setup lang="ts">
        import { Email } from "@dzangolab/vue3-form";
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
      `)]),_:1}),e(),n(l(u),{modelValue:l(o).customStyleInput,"onUpdate:modelValue":t[6]||(t[6]=m=>l(o).customStyleInput=m),label:a.$t("form.label.email"),placeholder:a.$t("form.placeholder.email"),class:"form-field custom-style-input"},null,8,["modelValue","label","placeholder"])])]),_:1},8,["title"])}}});export{D as default};
