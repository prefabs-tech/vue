import{m as v,J as d,Z as i}from"./DzangolabVue3Form.es-dfaaf9a3.js";import{d as I,a3 as V,l as $,j as f,E as c,o as F,c as _,w as o,J as n,C as e,Z as m,f as a,N as l}from"./index-66214709-7b57635f.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-2c538954.js";import"./index-2f944215.js";const y={class:"section-content"},z={class:"section-content"},U={class:"section-content"},k={class:"section-content"},E={class:"section-content"},S={class:"section-content"},T={name:"InputField"},L=I({...T,setup(W){const{t:b}=V(),h=v.string().min(3,{message:b("form.errors.input.min",{length:3})});let r=$({disabled:f("monorepo@gmail.com"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(t,s)=>{const g=c("router-link"),p=c("SshPre");return F(),_(w,{title:t.$t("form.label.input"),class:"demo"},{toolbar:o(()=>[n(g,{to:{name:"form"},class:"back"},{default:o(()=>[e(m(t.$t("common.back")),1)]),_:1})]),default:o(()=>[e(),a("section",null,[a("h2",null,m(t.$t("form.label.basicInput")),1),e(),a("div",y,[n(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <Input 
              v-model="username"
              placeholder="Enter username"
              type="text"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(l(i),null,{default:o(()=>[n(l(d),{modelValue:l(r).noLabelInput,"onUpdate:modelValue":s[0]||(s[0]=u=>l(r).noLabelInput=u),placeholder:t.$t("form.placeholder.username"),type:"text"},null,8,["modelValue","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,m(t.$t("form.label.labelInput")),1),e(),a("div",z,[n(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <Input 
              v-model="username"
              label="Username"
              placeholder="Enter username"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const username = ref(null as string);
          <\/script>
        `)]),_:1}),e(),n(l(i),null,{default:o(()=>[n(l(d),{modelValue:l(r).input,"onUpdate:modelValue":s[1]||(s[1]=u=>l(r).input=u),label:t.$t("form.label.username"),placeholder:t.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,m(t.$t("form.label.inputWithType")),1),e(),a("div",U,[n(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <Input 
              v-model="password"
              label="Password"
              placeholder="Enter password"
              type="password"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(l(i),null,{default:o(()=>[n(l(d),{modelValue:l(r).passwordInput,"onUpdate:modelValue":s[2]||(s[2]=u=>l(r).passwordInput=u),label:t.$t("form.label.password"),placeholder:t.$t("form.placeholder.password"),type:"password"},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,m(t.$t("form.label.disabled")),1),e(),a("div",k,[n(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <Input 
              v-model="email"
              label="Email"
              type="email"
              disabled
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>
        `)]),_:1}),e(),n(l(i),null,{default:o(()=>[n(l(d),{modelValue:l(r).disabled,"onUpdate:modelValue":s[3]||(s[3]=u=>l(r).disabled=u),label:t.$t("form.label.email"),type:"email",disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),a("section",null,[a("h2",null,m(t.$t("form.label.withI18n")),1),e(),a("div",E,[n(p,{language:"html-vue"},{default:o(()=>[e(`
          <Form>
            <Input 
              v-model="username"
              :label="t('form.label.username')"
              :placeholder="t('form.placeholder.username')"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),n(l(i),null,{default:o(()=>[n(l(d),{modelValue:l(r).input,"onUpdate:modelValue":s[4]||(s[4]=u=>l(r).input=u),label:t.$t("form.label.username"),placeholder:t.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),a("section",null,[a("h2",null,m(t.$t("form.label.inputWithValidation")),1),e(),a("div",S,[n(p,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e(),n(l(i),null,{default:o(()=>[n(l(d),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":s[5]||(s[5]=u=>l(r).inputWithValidation=u),label:t.$t("form.label.title"),placeholder:t.$t("form.placeholder.title"),schema:l(h),name:"title",type:"text"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])])]),_:1},8,["title"])}}});export{L as default};
