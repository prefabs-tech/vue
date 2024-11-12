import{m as I,J as d,Z as i}from"./DzangolabVue3Form.es-8d7c7642.js";import{d as V,u as _,b as y,e as c,r as f,o as $,c as F,w as a,f as n,g as e,t as m,a as o,h as l}from"./index-17339f3a.js";const w={class:"section-content"},z={class:"section-content"},U={class:"section-content"},S={class:"section-content"},k={class:"section-content"},E={class:"section-content"},P={class:"section-content"},T={name:"InputField"},C=V({...T,setup(W){const{t:b}=_(),h=I.string().min(3,{message:b("form.errors.input.min",{length:3})});let u=y({disabled:c("monorepo@gmail.com"),input:c(),inputWithValidation:c(),noLabelInput:c(),numberInput:c(),passwordInput:c()});return(t,r)=>{const g=f("router-link"),p=f("SshPre"),v=f("Page");return $(),F(v,{title:t.$t("form.label.input"),class:"demo"},{toolbar:a(()=>[n(g,{to:{name:"form"},class:"back"},{default:a(()=>[e(m(t.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),o("section",null,[o("h2",null,m(t.$t("form.label.basicInput")),1),e(),o("div",w,[n(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),n(l(i),null,{default:a(()=>[n(l(d),{modelValue:l(u).noLabelInput,"onUpdate:modelValue":r[0]||(r[0]=s=>l(u).noLabelInput=s),placeholder:t.$t("form.placeholder.username"),type:"text"},null,8,["modelValue","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,m(t.$t("form.label.labelInput")),1),e(),o("div",z,[n(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),n(l(i),null,{default:a(()=>[n(l(d),{modelValue:l(u).input,"onUpdate:modelValue":r[1]||(r[1]=s=>l(u).input=s),label:t.$t("form.label.username"),placeholder:t.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,m(t.$t("form.label.inputWithType")),1),e(),o("div",U,[n(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),n(l(i),null,{default:a(()=>[n(l(d),{modelValue:l(u).passwordInput,"onUpdate:modelValue":r[2]||(r[2]=s=>l(u).passwordInput=s),label:t.$t("form.label.password"),placeholder:t.$t("form.placeholder.password"),type:"password"},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,m(t.$t("form.label.disabled")),1),e(),o("div",S,[n(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),n(l(i),null,{default:a(()=>[n(l(d),{modelValue:l(u).disabled,"onUpdate:modelValue":r[3]||(r[3]=s=>l(u).disabled=s),label:t.$t("form.label.email"),type:"email",disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),o("section",null,[o("h2",null,m(t.$t("form.label.withI18n")),1),e(),o("div",k,[n(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),n(l(i),null,{default:a(()=>[n(l(d),{modelValue:l(u).input,"onUpdate:modelValue":r[4]||(r[4]=s=>l(u).input=s),label:t.$t("form.label.username"),placeholder:t.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,m(t.$t("form.label.inputWithValidation")),1),e(),o("div",E,[n(p,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),n(l(i),null,{default:a(()=>[n(l(d),{modelValue:l(u).inputWithValidation,"onUpdate:modelValue":r[5]||(r[5]=s=>l(u).inputWithValidation=s),label:t.$t("form.label.title"),placeholder:t.$t("form.placeholder.title"),schema:l(h),name:"title",type:"text"},null,8,["modelValue","label","placeholder","schema"])]),_:1})])]),e(),o("section",null,[o("h2",null,m(t.$t("form.label.customStyleInput")),1),e(),o("div",P,[n(p,{language:"html-vue"},{default:a(()=>[e(`
          <Form>
            <Input 
              v-model="number"
              class="custom-style-input"
              label="Number"
              placeholder="Enter a number"
              type="number"
            />
          </Form>

          <script setup lang="ts">
          import { Input } from "@dzangolab/vue3-form";
          <\/script>

          <style>
          .custom-style-input {
            flex-direction: row;
            align-items: center;
          }

          .custom-style-input input {
            --_input-field-border-color: #007aff;
            --_input-field-border-radius: 1em;
            --_input-field-padding-h: 0.5em;
            --_input-field-padding-v: 0.5em;
          }

          .custom-style-input input:focus {
            box-shadow: 0 0 0 .25rem #004da08e;
          }
          </style>
        `)]),_:1}),e(),n(l(i),null,{default:a(()=>[n(l(d),{modelValue:l(u).numberInput,"onUpdate:modelValue":r[6]||(r[6]=s=>l(u).numberInput=s),label:t.$t("form.label.number"),placeholder:t.$t("form.placeholder.number"),class:"custom-style-input",type:"number"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{C as default};
