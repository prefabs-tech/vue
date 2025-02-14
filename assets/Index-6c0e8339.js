import{n as d,J as h}from"./DzangolabVue3Form.es-81449376.js";import{d as v,a5 as g,p as S,j as s,J as V,o as $,c as I,w as r,K as o,D as l,ao as z,W as e,f as a,L as c}from"./index-729398ab-97e0bd19.js";import{m as F}from"./index-4c2549d2.js";import{_ as D}from"./FormPage.vue_vue_type_style_index_0_lang-ebb70898.js";const L={class:"section-content"},N={class:"section-content"},U={class:"section-content"},G={class:"section-content"},H={class:"section-content"},W={class:"section-content"},y={class:"section-content"},k={class:"section-content"},w={class:"section-content"},C={class:"section-content"},M={name:"SelectInputField"},O=v({...M,setup(P){const{t:b}=g(),f=F.string({invalid_type_error:b("form.errors.multiselect.invalid")}).array().min(1,{message:b("form.errors.multiselect.invalid")});let u=S({disabled:s("de"),disabledMultiselect:s(["be","de"]),disabledSortInput:s(),i18nSelect:s(),input:s(),inputWithValidation:s([]),multiselect:s(),multiselectSearch:s(),noLabelInput:s(),selectWithSearch:s()});const p=s([{value:"fr",label:b("form.label.french")},{value:"de",label:b("form.label.german")},{value:"be",label:b("form.label.dutch")},{value:"np",label:b("form.label.nepali")},{value:"hi",label:b("form.label.hindi")}]);return(n,t)=>{const m=V("SshPre");return $(),I(D,{title:n.$t("form.label.select"),class:"demo"},{toolbar:r(()=>[o(l(z),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=i=>n.$router.push("/form"))},null,8,["label"])]),default:r(()=>[e(),a("section",null,[a("h2",null,c(n.$t("form.label.basicInput")),1),e(),a("div",L,[o(l(d),{modelValue:l(u).noLabelInput,"onUpdate:modelValue":t[1]||(t[1]=i=>l(u).noLabelInput=i),options:p.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","options","placeholder"]),e(),o(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,c(n.$t("form.label.labelInput")),1),e(),a("div",N,[o(l(d),{modelValue:l(u).input,"onUpdate:modelValue":t[2]||(t[2]=i=>l(u).input=i),label:n.$t("form.label.language"),options:p.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),o(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,c(n.$t("form.label.disabled")),1),e(),a("div",U,[o(l(d),{modelValue:l(u).disabled,"onUpdate:modelValue":t[3]||(t[3]=i=>l(u).disabled=i),label:n.$t("form.label.language"),options:p.value,disabled:""},null,8,["modelValue","label","options"]),e(),o(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,c(n.$t("form.label.withSearch")),1),e(),a("div",G,[o(l(d),{modelValue:l(u).selectWithSearch,"onUpdate:modelValue":t[4]||(t[4]=i=>l(u).selectWithSearch=i),label:n.$t("form.label.language"),options:p.value,placeholder:n.$t("form.placeholder.language"),"search-placeholder":n.$t("form.placeholder.search"),"enable-search":""},null,8,["modelValue","label","options","placeholder","search-placeholder"]),e(),o(m,{language:"html-vue"},{default:r(()=>[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              enable-search
              label="Language"
              placeholder="Select a language"
              search-placeholder="Search..."
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,c(n.$t("form.label.disableSort")),1),e(),a("div",H,[o(l(d),{modelValue:l(u).disabledSortInput,"onUpdate:modelValue":t[5]||(t[5]=i=>l(u).disabledSortInput=i),"has-sorted-options":!1,label:n.$t("form.label.language"),options:p.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),o(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,c(n.$t("form.label.withI18n")),1),e(),a("div",W,[o(l(d),{modelValue:l(u).i18nSelect,"onUpdate:modelValue":t[6]||(t[6]=i=>l(u).i18nSelect=i),label:n.$t("form.label.language"),options:p.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),o(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,c(n.$t("form.label.multiselect")),1),e(),a("div",y,[o(l(d),{modelValue:l(u).multiselect,"onUpdate:modelValue":t[7]||(t[7]=i=>l(u).multiselect=i),label:n.$t("form.label.language"),options:p.value,placeholder:n.$t("form.placeholder.languages"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e(),o(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,c(n.$t("form.label.disabledMultiselect")),1),e(),a("div",k,[o(l(d),{modelValue:l(u).disabledMultiselect,"onUpdate:modelValue":t[8]||(t[8]=i=>l(u).disabledMultiselect=i),label:n.$t("form.label.language"),options:p.value,disabled:"",multiple:""},null,8,["modelValue","label","options"]),e(),o(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,c(n.$t("form.label.multiselectSearch")),1),e(),a("div",w,[o(l(d),{modelValue:l(u).multiselectSearch,"onUpdate:modelValue":t[9]||(t[9]=i=>l(u).multiselectSearch=i),label:n.$t("form.label.language"),options:p.value,placeholder:n.$t("form.placeholder.languages"),"search-placeholder":n.$t("form.placeholder.search"),"enable-search":"",multiple:""},null,8,["modelValue","label","options","placeholder","search-placeholder"]),e(),o(m,{language:"html-vue"},{default:r(()=>[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              enable-search
              label="Language"
              multiple
              placeholder="Select languages"
              search-placeholder="Search..."
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,c(n.$t("form.label.inputWithValidation")),1),e(),a("div",C,[o(l(h),null,{default:r(()=>[o(l(d),{modelValue:l(u).inputWithValidation,"onUpdate:modelValue":t[10]||(t[10]=i=>l(u).inputWithValidation=i),label:n.$t("form.label.language"),options:p.value,placeholder:n.$t("form.placeholder.languages"),schema:l(f),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),e(),o(m,{language:"html-vue"},{default:r(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{O as default};
