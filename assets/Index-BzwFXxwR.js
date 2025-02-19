import{d as b,o as v}from"./DzangolabVue3Form.es-CmcHs4Xu.js";import{d as h,x as g,y as S,z as V,r as p,s as I,j as $,o as z,w as s,A as e,e as a,t as d,g as u,u as l,C as L,h as F,B as N}from"./index-hG40rBrG.js";import{_ as D}from"./FormPage.vue_vue_type_style_index_0_lang-DzjKvpBT.js";const U={class:"section-content"},G={class:"section-content"},H={class:"section-content"},y={class:"section-content"},W={class:"section-content"},C={class:"section-content"},k={class:"section-content"},w={class:"section-content"},B={class:"section-content"},M={class:"section-content"},P=a("i",{class:"pi pi-user"},null,-1),j={class:"section-content"},A={name:"SelectInputField"},K=h({...A,setup(O){const{t:c}=g(),f=S.string({invalid_type_error:c("form.errors.multiselect.invalid")}).array().min(1,{message:c("form.errors.multiselect.invalid")});let i=V({customLabelSelect:p(),disabled:p("de"),disabledMultiselect:p(["be","de"]),disabledSortInput:p(),i18nSelect:p(),input:p(),inputWithValidation:p([]),multiselect:p(),multiselectSearch:p(),noLabelInput:p(),selectWithSearch:p()});const r=p([{label:c("form.label.french"),value:"fr"},{label:c("form.label.german"),value:"de"},{disabled:!0,label:c("form.label.dutch"),value:"be"},{label:c("form.label.nepali"),value:"np"},{label:c("form.label.hindi"),value:"hi"}]);return(n,o)=>{const m=I("SshPre");return z(),$(D,{title:n.$t("form.label.select"),class:"demo"},{toolbar:s(()=>[u(l(N),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:o[0]||(o[0]=t=>n.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e(),a("section",null,[a("h2",null,d(n.$t("form.label.basicInput")),1),e(),a("div",U,[u(l(b),{modelValue:l(i).noLabelInput,"onUpdate:modelValue":o[1]||(o[1]=t=>l(i).noLabelInput=t),options:r.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","options","placeholder"]),e(),u(m,{language:"html-vue"},{default:s(()=>[e(`
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
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,d(n.$t("form.label.labelInput")),1),e(),a("div",G,[u(l(b),{modelValue:l(i).input,"onUpdate:modelValue":o[2]||(o[2]=t=>l(i).input=t),label:n.$t("form.label.language"),options:r.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),u(m,{language:"html-vue"},{default:s(()=>[e(`
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
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,d(n.$t("form.label.disabled")),1),e(),a("div",H,[u(l(b),{modelValue:l(i).disabled,"onUpdate:modelValue":o[3]||(o[3]=t=>l(i).disabled=t),label:n.$t("form.label.language"),options:r.value,disabled:""},null,8,["modelValue","label","options"]),e(),u(m,{language:"html-vue"},{default:s(()=>[e(`
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
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,d(n.$t("form.label.withSearch")),1),e(),a("div",y,[u(l(b),{modelValue:l(i).selectWithSearch,"onUpdate:modelValue":o[4]||(o[4]=t=>l(i).selectWithSearch=t),label:n.$t("form.label.language"),options:r.value,placeholder:n.$t("form.placeholder.language"),"search-placeholder":n.$t("form.placeholder.search"),"enable-search":""},null,8,["modelValue","label","options","placeholder","search-placeholder"]),e(),u(m,{language:"html-vue"},{default:s(()=>[e(`
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
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,d(n.$t("form.label.disableSort")),1),e(),a("div",W,[u(l(b),{modelValue:l(i).disabledSortInput,"onUpdate:modelValue":o[5]||(o[5]=t=>l(i).disabledSortInput=t),"has-sorted-options":!1,label:n.$t("form.label.language"),options:r.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),u(m,{language:"html-vue"},{default:s(()=>[e(`
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
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,d(n.$t("form.label.withI18n")),1),e(),a("div",C,[u(l(b),{modelValue:l(i).i18nSelect,"onUpdate:modelValue":o[6]||(o[6]=t=>l(i).i18nSelect=t),label:n.$t("form.label.language"),options:r.value,placeholder:n.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),e(),u(m,{language:"html-vue"},{default:s(()=>[e(`
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
            { label: t("form.label.french"), value: "fr"},
            { label: t("form.label.german"), value: "de"},
            { disabled: true, label: t("form.label.dutch"), value: "be", },
            { label: t("form.label.nepali"), value: "np",  },
            { label: t("form.label.hindi"), value: "hi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,d(n.$t("form.label.multiselect")),1),e(),a("div",k,[u(l(b),{modelValue:l(i).multiselect,"onUpdate:modelValue":o[7]||(o[7]=t=>l(i).multiselect=t),label:n.$t("form.label.language"),options:r.value,placeholder:n.$t("form.placeholder.languages"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e(),u(m,{language:"html-vue"},{default:s(()=>[e(`
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
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,d(n.$t("form.label.disabledMultiselect")),1),e(),a("div",w,[u(l(b),{modelValue:l(i).disabledMultiselect,"onUpdate:modelValue":o[8]||(o[8]=t=>l(i).disabledMultiselect=t),label:n.$t("form.label.language"),options:r.value,disabled:"",multiple:""},null,8,["modelValue","label","options"]),e(),u(m,{language:"html-vue"},{default:s(()=>[e(`
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
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,d(n.$t("form.label.multiselectSearch")),1),e(),a("div",B,[u(l(b),{modelValue:l(i).multiselectSearch,"onUpdate:modelValue":o[9]||(o[9]=t=>l(i).multiselectSearch=t),label:n.$t("form.label.language"),options:r.value,placeholder:n.$t("form.placeholder.languages"),"search-placeholder":n.$t("form.placeholder.search"),"enable-search":"",multiple:""},null,8,["modelValue","label","options","placeholder","search-placeholder"]),e(),u(m,{language:"html-vue"},{default:s(()=>[e(`
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
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,d(n.$t("form.label.customLabel")),1),e(),a("div",M,[u(l(b),{modelValue:l(i).customLabelSelect,"onUpdate:modelValue":o[10]||(o[10]=t=>l(i).customLabelSelect=t),label:n.$t("form.label.language"),options:r.value,placeholder:n.$t("form.placeholder.language"),multiple:""},L({_:2},[F(r.value,(t,T)=>({name:t.value,fn:s(()=>[a("span",null,[P,e(" "+d(t.label),1)])])}))]),1032,["modelValue","label","options","placeholder"]),e(),u(m,{language:"html-vue"},{default:s(()=>[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.language')"
              :placeholder="t('form.placeholder.language')"
              multiple
            >
              <template
                v-for="(option, index) in options"
                #[option.value]
              >
                <span>
                  <i class="pi pi-user" />
                  {{ option.label }}
                </span>
              </template>
            </SelectInput>
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,d(n.$t("form.label.inputWithValidation")),1),e(),a("div",j,[u(l(v),null,{default:s(()=>[u(l(b),{modelValue:l(i).inputWithValidation,"onUpdate:modelValue":o[11]||(o[11]=t=>l(i).inputWithValidation=t),label:n.$t("form.label.language"),options:r.value,placeholder:n.$t("form.placeholder.languages"),schema:l(f),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),e(),u(m,{language:"html-vue"},{default:s(()=>[e(`
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
              { label: "French", value: "fr"},
              { label: "German", value: "de"},
              { disabled: true, label: "Dutch", value: "be", },
              { label: "Nepali", value: "np",  },
              { label: "Hindi", value: "hi" },
            ]);
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{K as default};
