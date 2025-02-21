import{F as p,o as b}from"./DzangolabVue3Form.es-IsnEOczk.js";import{d as h,z as g,A as v,r as d,s as I,j as V,o as $,w as m,B as e,e as t,t as i,g as o,u as l,C as w}from"./index-Cc4iPlXT.js";import{z}from"./index-mSkvzYyn.js";import{_ as y}from"./FormPage.vue_vue_type_style_index_0_lang-BZlBAyks.js";const U={class:"section-content"},F={class:"section-content"},S={class:"section-content"},C={class:"section-content"},E={class:"section-content"},T={class:"section-content"},W={name:"InputField"},D=h({...W,setup(k){const{t:f}=g(),c=z.string().min(3,{message:f("form.errors.input.min",{length:3})});let s=v({disabled:d("monorepo@gmail.com"),input:d(),inputWithValidation:d(),noLabelInput:d(),passwordInput:d()});return(n,a)=>{const u=I("SshPre");return $(),V(y,{title:n.$t("form.label.input"),class:"demo"},{toolbar:m(()=>[o(l(w),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:a[0]||(a[0]=r=>n.$router.push("/form"))},null,8,["label"])]),default:m(()=>[e(),t("section",null,[t("h2",null,i(n.$t("form.label.basicInput")),1),e(),t("div",U,[o(l(p),{modelValue:l(s).noLabelInput,"onUpdate:modelValue":a[1]||(a[1]=r=>l(s).noLabelInput=r),placeholder:n.$t("form.placeholder.username"),type:"text"},null,8,["modelValue","placeholder"]),e(),o(u,{language:"html-vue"},{default:m(()=>[e(`
          <template>
            <Input 
              v-model="username"
              placeholder="Enter username"
              type="text"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,i(n.$t("form.label.labelInput")),1),e(),t("div",F,[o(l(p),{modelValue:l(s).input,"onUpdate:modelValue":a[2]||(a[2]=r=>l(s).input=r),label:n.$t("form.label.username"),placeholder:n.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"]),e(),o(u,{language:"html-vue"},{default:m(()=>[e(`
          <template>
            <Input 
              v-model="username"
              label="Username"
              placeholder="Enter username"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const username = ref(null as string);
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,i(n.$t("form.label.inputWithType")),1),e(),t("div",S,[o(l(p),{modelValue:l(s).passwordInput,"onUpdate:modelValue":a[3]||(a[3]=r=>l(s).passwordInput=r),label:n.$t("form.label.password"),placeholder:n.$t("form.placeholder.password"),type:"password"},null,8,["modelValue","label","placeholder"]),e(),o(u,{language:"html-vue"},{default:m(()=>[e(`
          <template>
            <Input 
              v-model="password"
              label="Password"
              placeholder="Enter password"
              type="password"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,i(n.$t("form.label.disabled")),1),e(),t("div",C,[o(l(p),{modelValue:l(s).disabled,"onUpdate:modelValue":a[4]||(a[4]=r=>l(s).disabled=r),label:n.$t("form.label.email"),type:"email",disabled:""},null,8,["modelValue","label"]),e(),o(u,{language:"html-vue"},{default:m(()=>[e(`
          <template>
            <Input 
              v-model="email"
              label="Email"
              type="email"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,i(n.$t("form.label.withI18n")),1),e(),t("div",E,[o(l(p),{modelValue:l(s).input,"onUpdate:modelValue":a[5]||(a[5]=r=>l(s).input=r),label:n.$t("form.label.username"),placeholder:n.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"]),e(),o(u,{language:"html-vue"},{default:m(()=>[e(`
          <template>
            <Input 
              v-model="username"
              :label="t('form.label.username')"
              :placeholder="t('form.placeholder.username')"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e()])]),e(),t("section",null,[t("h2",null,i(n.$t("form.label.inputWithValidation")),1),e(),t("div",T,[o(l(b),null,{default:m(()=>[o(l(p),{modelValue:l(s).inputWithValidation,"onUpdate:modelValue":a[6]||(a[6]=r=>l(s).inputWithValidation=r),label:n.$t("form.label.title"),placeholder:n.$t("form.placeholder.title"),schema:l(c),name:"title",type:"text"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e(),o(u,{language:"html-vue"},{default:m(()=>[e(`
          <Form>
            <Input 
              v-model="courseTitle"
              :schema="inputSchema"
              label="Title"
              placeholder="Enter course title"
              type="text"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Input } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(3, { message: "Title must be at least 3 character(s)" });        
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{D as default};
