import{n as d,J as h}from"./DzangolabVue3Form.es-b51db7e8.js";import{d as S,a5 as V,p as I,j as c,J as f,o as $,c as F,w as s,K as t,W as e,L as r,f as n,D as l}from"./index-729398ab-c88618b2.js";import{m as z}from"./index-7eca6f7f.js";import{_ as D}from"./FormPage.vue_vue_type_style_index_0_lang-61bbebf7.js";const L={class:"section-content"},N={class:"section-content"},_={class:"section-content"},U={class:"section-content"},G={class:"section-content"},H={class:"section-content"},k={class:"section-content"},y={class:"section-content"},W={name:"SelectInputField"},J=S({...W,setup(M){const{t:b}=V(),v=z.string({invalid_type_error:b("form.errors.multiSelect.invalid")}).array().min(1,{message:b("form.errors.multiSelect.invalid")});let o=I({disabled:c("de"),disabledMultiSelect:c(["be","de"]),input:c(),inputWithValidation:c([]),multiSelect:c(),noLabelInput:c()});const p=c([{value:"fr",label:b("form.label.french")},{value:"de",label:b("form.label.german")},{value:"be",label:b("form.label.dutch")},{value:"np",label:b("form.label.nepali")},{value:"hi",label:b("form.label.hindi")}]);return(a,u)=>{const g=f("router-link"),m=f("SshPre");return $(),F(D,{title:a.$t("form.label.select"),class:"demo"},{toolbar:s(()=>[t(g,{to:{name:"form"},class:"back"},{default:s(()=>[e(r(a.$t("common.back")),1)]),_:1})]),default:s(()=>[e(),n("section",null,[n("h2",null,r(a.$t("form.label.basicInput")),1),e(),n("div",L,[t(l(d),{modelValue:l(o).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=i=>l(o).noLabelInput=i),options:p.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","options","placeholder"]),e(),t(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput
              v-model="input"
              :options="options"
              placeholder="Select a language"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,r(a.$t("form.label.labelInput")),1),e(),n("div",N,[t(l(d),{modelValue:l(o).input,"onUpdate:modelValue":u[1]||(u[1]=i=>l(o).input=i),label:a.$t("form.label.language"),options:p.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),t(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Language"
              placeholder="Select a language"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,r(a.$t("form.label.disabled")),1),e(),n("div",_,[t(l(d),{modelValue:l(o).disabled,"onUpdate:modelValue":u[2]||(u[2]=i=>l(o).disabled=i),label:a.$t("form.label.language"),options:p.value,disabled:""},null,8,["modelValue","label","options"]),e(),t(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Language"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const disabled = ref("de");

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,r(a.$t("form.label.disableSort")),1),e(),n("div",U,[t(l(d),{modelValue:l(o).input,"onUpdate:modelValue":u[3]||(u[3]=i=>l(o).input=i),"has-sorted-options":!1,label:a.$t("form.label.language"),options:p.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),t(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="input"
              :has-sorted-options="false"
              :options="options"
              label="Language"
              placeholder="Select a language"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,r(a.$t("form.label.withI18n")),1),e(),n("div",G,[t(l(d),{modelValue:l(o).input,"onUpdate:modelValue":u[4]||(u[4]=i=>l(o).input=i),label:a.$t("form.label.language"),options:p.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),t(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.language')"
              :placeholder="t('form.placeholder.language')"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { value: "fr", label: t("form.label.french") },
            { value: "de", label: t("form.label.german") },
            { value: "be", label: t("form.label.dutch") },
            { value: "np", label: t("form.label.nepali") },
            { value: "hi", label: t("form.label.hindi") },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,r(a.$t("form.label.multiSelect")),1),e(),n("div",H,[t(l(d),{modelValue:l(o).multiSelect,"onUpdate:modelValue":u[5]||(u[5]=i=>l(o).multiSelect=i),label:a.$t("form.label.language"),options:p.value,placeholder:a.$t("form.placeholder.languages"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e(),t(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Language"
              multiple
              placeholder="Select languages"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,r(a.$t("form.label.disabledMultiSelect")),1),e(),n("div",k,[t(l(d),{modelValue:l(o).disabledMultiSelect,"onUpdate:modelValue":u[6]||(u[6]=i=>l(o).disabledMultiSelect=i),label:a.$t("form.label.language"),options:p.value,disabled:"",multiple:""},null,8,["modelValue","label","options"]),e(),t(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Language"
              multiple
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const disabled = ref(["be", "de"]);

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,r(a.$t("form.label.inputWithValidation")),1),e(),n("div",y,[t(l(h),null,{default:s(()=>[t(l(d),{modelValue:l(o).inputWithValidation,"onUpdate:modelValue":u[7]||(u[7]=i=>l(o).inputWithValidation=i),label:a.$t("form.label.language"),options:p.value,placeholder:a.$t("form.placeholder.languages"),schema:l(v),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),e(),t(m,{language:"html-vue"},{default:s(()=>[e(`
          <Form>
            <SelectInput 
              v-model="input"
              :options="options"
              :schema="inputSchema"
              label="Language"
              multiple
              placeholder="Select languages"
            />
          </Form>

          <script setup lang="ts">
          import { Form, SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const inputSchema = z
            .string({invalid_type_error: "Please select at least one valid option"})
            .array()
            .min(1, { message: "Please select at least one valid option" });

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{J as default};
