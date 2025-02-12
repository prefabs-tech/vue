import{n as c,J as g}from"./DzangolabVue3Form.es-1e6cc6ce.js";import{d as S,a5 as V,p as I,j as s,J as f,o as $,c as F,w as i,K as t,W as e,L as p,f as a,D as l}from"./index-729398ab-7d472bf5.js";import{m as z}from"./index-a5e12811.js";import{_ as D}from"./FormPage.vue_vue_type_style_index_0_lang-d580c839.js";const L={class:"section-content"},N={class:"section-content"},U={class:"section-content"},G={class:"section-content"},H={class:"section-content"},W={class:"section-content"},k={class:"section-content"},y={class:"section-content"},w={class:"section-content"},M={class:"section-content"},P={name:"SelectInputField"},K=S({...P,setup(_){const{t:b}=V(),h=z.string({invalid_type_error:b("form.errors.multiselect.invalid")}).array().min(1,{message:b("form.errors.multiselect.invalid")});let o=I({disabled:s("de"),disabledMultiselect:s(["be","de"]),disabledSortInput:s(),i18nSelect:s(),input:s(),inputWithValidation:s([]),multiselect:s(),multiselectSearch:s(),noLabelInput:s(),selectWithSearch:s()});const m=s([{value:"fr",label:b("form.label.french")},{value:"de",label:b("form.label.german")},{value:"be",label:b("form.label.dutch")},{value:"np",label:b("form.label.nepali")},{value:"hi",label:b("form.label.hindi")}]);return(n,u)=>{const v=f("router-link"),d=f("SshPre");return $(),F(D,{title:n.$t("form.label.select"),class:"demo"},{toolbar:i(()=>[t(v,{to:{name:"form"},class:"back"},{default:i(()=>[e(p(n.$t("common.back")),1)]),_:1})]),default:i(()=>[e(),a("section",null,[a("h2",null,p(n.$t("form.label.basicInput")),1),e(),a("div",L,[t(l(c),{modelValue:l(o).noLabelInput,"onUpdate:modelValue":u[0]||(u[0]=r=>l(o).noLabelInput=r),options:m.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","options","placeholder"]),e(),t(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(n.$t("form.label.labelInput")),1),e(),a("div",N,[t(l(c),{modelValue:l(o).input,"onUpdate:modelValue":u[1]||(u[1]=r=>l(o).input=r),label:n.$t("form.label.language"),options:m.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),t(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(n.$t("form.label.disabled")),1),e(),a("div",U,[t(l(c),{modelValue:l(o).disabled,"onUpdate:modelValue":u[2]||(u[2]=r=>l(o).disabled=r),label:n.$t("form.label.language"),options:m.value,disabled:""},null,8,["modelValue","label","options"]),e(),t(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(n.$t("form.label.withSearch")),1),e(),a("div",G,[t(l(c),{modelValue:l(o).selectWithSearch,"onUpdate:modelValue":u[3]||(u[3]=r=>l(o).selectWithSearch=r),label:n.$t("form.label.language"),options:m.value,placeholder:n.$t("form.placeholder.language"),"search-placeholder":n.$t("form.placeholder.search"),"enable-search":""},null,8,["modelValue","label","options","placeholder","search-placeholder"]),e(),t(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(n.$t("form.label.disableSort")),1),e(),a("div",H,[t(l(c),{modelValue:l(o).disabledSortInput,"onUpdate:modelValue":u[4]||(u[4]=r=>l(o).disabledSortInput=r),"has-sorted-options":!1,label:n.$t("form.label.language"),options:m.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),t(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(n.$t("form.label.withI18n")),1),e(),a("div",W,[t(l(c),{modelValue:l(o).i18nSelect,"onUpdate:modelValue":u[5]||(u[5]=r=>l(o).i18nSelect=r),label:n.$t("form.label.language"),options:m.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),t(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(n.$t("form.label.multiselect")),1),e(),a("div",k,[t(l(c),{modelValue:l(o).multiselect,"onUpdate:modelValue":u[6]||(u[6]=r=>l(o).multiselect=r),label:n.$t("form.label.language"),options:m.value,placeholder:n.$t("form.placeholder.languages"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e(),t(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(n.$t("form.label.disabledMultiselect")),1),e(),a("div",y,[t(l(c),{modelValue:l(o).disabledMultiselect,"onUpdate:modelValue":u[7]||(u[7]=r=>l(o).disabledMultiselect=r),label:n.$t("form.label.language"),options:m.value,disabled:"",multiple:""},null,8,["modelValue","label","options"]),e(),t(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(n.$t("form.label.multiselectSearch")),1),e(),a("div",w,[t(l(c),{modelValue:l(o).multiselectSearch,"onUpdate:modelValue":u[8]||(u[8]=r=>l(o).multiselectSearch=r),label:n.$t("form.label.language"),options:m.value,placeholder:n.$t("form.placeholder.languages"),"search-placeholder":n.$t("form.placeholder.search"),"enable-search":"",multiple:""},null,8,["modelValue","label","options","placeholder","search-placeholder"]),e(),t(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,p(n.$t("form.label.inputWithValidation")),1),e(),a("div",M,[t(l(g),null,{default:i(()=>[t(l(c),{modelValue:l(o).inputWithValidation,"onUpdate:modelValue":u[9]||(u[9]=r=>l(o).inputWithValidation=r),label:n.$t("form.label.language"),options:m.value,placeholder:n.$t("form.placeholder.languages"),schema:l(h),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),e(),t(d,{language:"html-vue"},{default:i(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{K as default};
