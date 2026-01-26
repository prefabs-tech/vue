import{c as m,D as V}from"./PrefabsTechVue3Form.es-Cni582VJ.js";import{d as I,I as y,L as $,M as w,r as f,J as D,e as S,o as h,i,f as o,B as t,h as p,t as d,u as n}from"./index-CTAJGeeo.js";import{_ as U}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-C2budLv3.js";import{_ as T}from"./FormPage.vue_vue_type_style_index_0_lang-CjU1P2I5.js";import"./PrefabsTechVue3TanstackTable.es-DJK4eGFK.js";const z={class:"section-content"},B={class:"section-content"},E={class:"section-content"},W={class:"section-content"},F={class:"section-content"},L={class:"section-content"},P={name:"InputField"},M=I({...P,setup(C){const{t:s}=y(),b=[{description:s("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | null | undefined"}],g=$.string().min(3,{message:s("form.errors.input.min",{length:3})}),v=[{default:"false",description:s("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:"-",description:s("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | null | undefined"},{default:'"input"',description:s("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | object>"},{default:'"text"',description:s("form.documentation.propsDescription.input.type"),prop:"type",type:"String"}];let a=w({disabled:f("monorepo@gmail.com"),input:f(),inputWithValidation:f(),noLabelInput:f(),passwordInput:f()});return(l,e)=>{const u=D("SshPre");return h(),S(T,{subtitle:n(s)("form.subtitle.input"),title:l.$t("form.label.input"),class:"demo"},{default:i(()=>[o("section",null,[o("h2",null,d(l.$t("form.label.basicInput")),1),e[8]||(e[8]=t()),o("div",z,[p(n(m),{modelValue:n(a).noLabelInput,"onUpdate:modelValue":e[0]||(e[0]=r=>n(a).noLabelInput=r),placeholder:l.$t("form.placeholder.username"),name:"basic",type:"text"},null,8,["modelValue","placeholder"]),e[7]||(e[7]=t()),p(u,{language:"html-vue"},{default:i(()=>e[6]||(e[6]=[t(`
          <template>
            <Input 
              v-model="username"
              placeholder="Enter username"
              type="text"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[24]||(e[24]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.labelInput")),1),e[11]||(e[11]=t()),o("div",B,[p(n(m),{modelValue:n(a).input,"onUpdate:modelValue":e[1]||(e[1]=r=>n(a).input=r),label:l.$t("form.label.username"),placeholder:l.$t("form.placeholder.username"),name:"labeled"},null,8,["modelValue","label","placeholder"]),e[10]||(e[10]=t()),p(u,{language:"html-vue"},{default:i(()=>e[9]||(e[9]=[t(`
          <template>
            <Input 
              v-model="username"
              label="Username"
              placeholder="Enter username"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
  
          const username = ref(null as string);
          <\/script>
        `)])),_:1})])]),e[25]||(e[25]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.inputWithType")),1),e[14]||(e[14]=t()),o("div",E,[p(n(m),{modelValue:n(a).passwordInput,"onUpdate:modelValue":e[2]||(e[2]=r=>n(a).passwordInput=r),label:l.$t("form.label.password"),placeholder:l.$t("form.placeholder.password"),name:"password",type:"password"},null,8,["modelValue","label","placeholder"]),e[13]||(e[13]=t()),p(u,{language:"html-vue"},{default:i(()=>e[12]||(e[12]=[t(`
          <template>
            <Input 
              v-model="password"
              label="Password"
              placeholder="Enter password"
              type="password"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[26]||(e[26]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.disabled")),1),e[17]||(e[17]=t()),o("div",W,[p(n(m),{modelValue:n(a).disabled,"onUpdate:modelValue":e[3]||(e[3]=r=>n(a).disabled=r),label:l.$t("form.label.email"),disabled:"",name:"disabled",type:"email"},null,8,["modelValue","label"]),e[16]||(e[16]=t()),p(u,{language:"html-vue"},{default:i(()=>e[15]||(e[15]=[t(`
          <template>
            <Input 
              v-model="email"
              label="Email"
              type="email"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[27]||(e[27]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.withI18n")),1),e[20]||(e[20]=t()),o("div",F,[p(n(m),{modelValue:n(a).input,"onUpdate:modelValue":e[4]||(e[4]=r=>n(a).input=r),label:l.$t("form.label.username"),placeholder:l.$t("form.placeholder.username")},null,8,["modelValue","label","placeholder"]),e[19]||(e[19]=t()),p(u,{language:"html-vue"},{default:i(()=>e[18]||(e[18]=[t(`
          <template>
            <Input 
              v-model="username"
              :label="t('form.label.username')"
              :placeholder="t('form.placeholder.username')"
            />
          </template>

          <script setup lang="ts">
          import { Input } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[28]||(e[28]=t()),o("section",null,[o("h2",null,d(l.$t("form.label.inputWithValidation")),1),e[23]||(e[23]=t()),o("div",L,[p(n(V),null,{default:i(()=>[p(n(m),{modelValue:n(a).inputWithValidation,"onUpdate:modelValue":e[5]||(e[5]=r=>n(a).inputWithValidation=r),label:l.$t("form.label.title"),placeholder:l.$t("form.placeholder.title"),schema:n(g),name:"title",type:"text"},null,8,["modelValue","label","placeholder","schema"])]),_:1}),e[22]||(e[22]=t()),p(u,{language:"html-vue"},{default:i(()=>e[21]||(e[21]=[t(`
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
          import { Form, Input } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(3, { message: "Title must be at least 3 character(s)" });        
          <\/script>
        `)])),_:1})])]),e[29]||(e[29]=t()),p(U,{"events-data":b,"props-data":v,"props-table-title":l.$t("common.properties",{value:"InputProperties"})},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{M as default};
