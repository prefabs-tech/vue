import{S as m,w as S}from"./PrefabsTechVue3Form.es-Be_J869o.js";import{d as g,L as I,M as $,o as h,e as y,f as u,h as o,t as d,z as e,a as i,u as l,O as D,r as f,i as b,N as L}from"./index-RPvtGx3x.js";import{_ as c}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BU4nLuL1.js";import{_ as F}from"./FormPage.vue_vue_type_style_index_0_lang-CShZ86aY.js";import"./PrefabsTechVue3TanstackTable.es-Dqi5F_Wh.js";const O={class:"section-content"},U={class:"section-content"},B={class:"section-content"},N={class:"section-content"},z={class:"section-content"},W={class:"section-content"},k={name:"SwitchInput"},j=g({...k,setup(C){const{t:p}=I();let s=D({disabled:f(!0),input:f(),inputWithValidation:f(!1),noLabelInput:f(),onOffLabel:f()});const v=b(()=>[{description:p("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"value: boolean"}]),w=b(()=>L.coerce.boolean().refine(n=>n===!0,{message:p("form.errors.switch.invalid")})),V=b(()=>[{default:"false",description:p("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:"-",description:p("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"false",description:p("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"Boolean"},{default:'"switch"',description:p("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:p("form.documentation.propsDescription.switch.offLabel"),prop:"offLabel",type:"String"},{default:"-",description:p("form.documentation.propsDescription.switch.onLabel"),prop:"onLabel",type:"String"},{default:"-",description:p("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | boolean>"}]);return(n,t)=>{const r=$("SshPre");return h(),y(F,{subtitle:n.$t("form.subtitle.switch"),title:n.$t("form.label.switch"),class:"demo"},{default:u(()=>[o("section",null,[o("h2",null,d(n.$t("form.label.basicInput")),1),t[8]||(t[8]=e()),o("div",O,[i(l(m),{modelValue:l(s).noLabelInput,"onUpdate:modelValue":t[0]||(t[0]=a=>l(s).noLabelInput=a)},null,8,["modelValue"]),t[7]||(t[7]=e()),i(r,{language:"html-vue"},{default:u(()=>[...t[6]||(t[6]=[e(`
          <template>
            <SwitchInput v-model="input" />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),t[24]||(t[24]=e()),o("section",null,[o("h2",null,d(n.$t("form.label.labelInput")),1),t[11]||(t[11]=e()),o("div",U,[i(l(m),{modelValue:l(s).input,"onUpdate:modelValue":t[1]||(t[1]=a=>l(s).input=a),label:n.$t("form.label.switch")},null,8,["modelValue","label"]),t[10]||(t[10]=e()),i(r,{language:"html-vue"},{default:u(()=>[...t[9]||(t[9]=[e(`
          <Form>
            <SwitchInput v-model="input" label="Switch" />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)])]),_:1})])]),t[25]||(t[25]=e()),o("section",null,[o("h2",null,d(n.$t("form.label.disabled")),1),t[14]||(t[14]=e()),o("div",B,[i(l(m),{modelValue:l(s).disabled,"onUpdate:modelValue":t[2]||(t[2]=a=>l(s).disabled=a),label:n.$t("form.label.disabled"),disabled:""},null,8,["modelValue","label"]),t[13]||(t[13]=e()),i(r,{language:"html-vue"},{default:u(()=>[...t[12]||(t[12]=[e(`
          <template>
            <SwitchInput 
              v-model="disabled"
              disabled
              label="Disabled"
            />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const disabled = ref(true);
          <\/script>
        `,-1)])]),_:1})])]),t[26]||(t[26]=e()),o("section",null,[o("h2",null,d(n.$t("form.label.withOnOffLabel")),1),t[17]||(t[17]=e()),o("div",N,[i(l(m),{modelValue:l(s).onOffLabel,"onUpdate:modelValue":t[3]||(t[3]=a=>l(s).onOffLabel=a),label:n.$t("form.label.switch"),"off-label":n.$t("form.label.no"),"on-label":n.$t("form.label.yes")},null,8,["modelValue","label","off-label","on-label"]),t[16]||(t[16]=e()),i(r,{language:"html-vue"},{default:u(()=>[...t[15]||(t[15]=[e(`
          <Form>
            <SwitchInput
              v-model="input"
              :label="$t('form.label.switch')"
              off-label="No"
              on-label="Yes"
            />
          </Form>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          <\/script>

          <style>
            .switch input[type=checkbox] {
              --_width: 5rem;
            }
          </style>
        `,-1)])]),_:1})])]),t[27]||(t[27]=e()),o("section",null,[o("h2",null,d(n.$t("form.label.withI18n")),1),t[20]||(t[20]=e()),o("div",z,[i(l(m),{modelValue:l(s).input,"onUpdate:modelValue":t[4]||(t[4]=a=>l(s).input=a),label:n.$t("form.label.switch")},null,8,["modelValue","label"]),t[19]||(t[19]=e()),i(r,{language:"html-vue"},{default:u(()=>[...t[18]||(t[18]=[e(`
          <template>
            <SwitchInput 
              v-model="input"
              :label="t('form.label.switch')"
            />
          </template>

          <script setup lang="ts">
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)])]),_:1})])]),t[28]||(t[28]=e()),o("section",null,[o("h2",null,d(n.$t("form.label.inputWithValidation")),1),t[23]||(t[23]=e()),o("div",W,[i(l(S),null,{default:u(()=>[i(l(m),{modelValue:l(s).inputWithValidation,"onUpdate:modelValue":t[5]||(t[5]=a=>l(s).inputWithValidation=a),label:n.$t("form.label.switch"),schema:w.value},null,8,["modelValue","label","schema"])]),_:1}),t[22]||(t[22]=e()),i(r,{language:"html-vue"},{default:u(()=>[...t[21]||(t[21]=[e(`
          <Form>
            <SwitchInput 
              v-model="disabled"
              :schema="inputSchema"
              label="Switch"
            />
          </Form>

          <script setup lang="ts">
          import { Form, SwitchInput } from "@prefabs.tech/vue3-form";

          const inputSchema = z.coerce
            .boolean()
            .refine((value) => value === true, {
              message: "The switch value must be true.",
            });
          <\/script>
        `,-1)])]),_:1})])]),t[29]||(t[29]=e()),i(c,{"events-data":v.value,"props-data":V.value,"props-table-title":n.$t("common.properties",{value:"SwitchInputProperties"})},null,8,["events-data","props-data","props-table-title"])]),_:1},8,["subtitle","title"])}}});export{j as default};
