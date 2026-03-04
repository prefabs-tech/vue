import{C as f,x as c}from"./PrefabsTechVue3Form.es-Cu5ZqXtw.js";import{d as A,L as D,M as T,o as L,e as V,f as u,h as t,t as m,z as l,a as o,u as a,O as I,r as g,i as b,N as S}from"./index-CFIu6tXg.js";import{_ as $}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Dku7DACa.js";import{_ as C}from"./FormPage.vue_vue_type_style_index_0_lang-DnZ6t3a5.js";import"./PrefabsTechVue3TanstackTable.es-8JyZI6Uz.js";const P={class:"section-content"},k={class:"section-content"},q={class:"section-content"},M={class:"section-content"},O={class:"section-content"},R={class:"section-content"},H={name:"TypeaheadDemo"},F=A({...H,setup(N){const{t:r}=D();let i=I({disabled:g("Lily"),input:g(),inputWithValidation:g(),noLabelInput:g()});const p=[{value:"Roslabel",label:"Roslabel - A fragrant flower often associated with romance"},{value:"Tulip",label:"Tulip - A bright, cup-shaped flower popular in spring"},{value:"Daisy",label:"Daisy - A simple, white flower with a yellow center"},{value:"Sunflower",label:"Sunflower - A tall plant with a large, yellow flower head"},{value:"Lily",label:"Lily - An elegant flower often used in bouquets"},{value:"Orchid",label:"Orchid - An exotic flower with a unique shape"},{value:"Marigold",label:"Marigold - A vibrant, orange or yellow flower"},{value:"Lavender",label:"Lavender - A fragrant flower known for its calming scent"},{value:"Peony",label:"Peony - A lush, full flower often used in weddings"},{value:"Chrysanthemum",label:"Chrysanthemum - A hardy flower with a variety of colors"},{value:"Daffodil",label:"Daffodil - A bright, yellow flower that blooms in spring"},{value:"Hydrangea",label:"Hydrangea - A large, cluster-like flower that changes color"}],h=b(()=>[{description:r("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"value: string | number"}]),w=b(()=>S.string().min(3,{message:r("form.errors.input.min",{length:3})})),y=b(()=>[{default:"500",description:r("form.documentation.propsDescription.typeahead.debounceTime"),prop:"debounceTime",type:"Number"},{default:"false",description:r("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:"-",description:r("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:r("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | Number | null | undefined"},{default:"-",description:r("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:r("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:r("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | object>"},{default:"-",description:r("form.documentation.propsDescription.typeahead.suggestions",{required:!0}),prop:"suggestions",type:"{label?: string; value?: string | number;}"},{default:'"text"',description:r("form.documentation.propsDescription.input.type"),prop:"type",type:"String"}]),v=b(()=>[{description:r("form.documentation.slotDescription.typeahead.suggestion"),name:"suggestion",props:"{ suggestion: {label?: string; value?: string | number;} }"}]);return(n,e)=>{const d=T("SshPre");return L(),V(C,{subtitle:n.$t("form.subtitle.typeahead"),title:n.$t("form.label.typeahead"),class:"demo"},{default:u(()=>[t("section",null,[t("h2",null,m(n.$t("form.label.basicInput")),1),e[8]||(e[8]=l()),t("div",P,[o(a(f),{modelValue:a(i).noLabelInput,"onUpdate:modelValue":e[0]||(e[0]=s=>a(i).noLabelInput=s),placeholder:n.$t("form.placeholder.input"),suggestions:p},null,8,["modelValue","placeholder"]),e[7]||(e[7]=l()),o(d,{language:"html-vue"},{default:u(()=>[...e[6]||(e[6]=[l(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@prefabs.tech/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          <\/script>
        `,-1)])]),_:1})])]),e[24]||(e[24]=l()),t("section",null,[t("h2",null,m(n.$t("form.label.labelInput")),1),e[11]||(e[11]=l()),t("div",k,[o(a(f),{modelValue:a(i).input,"onUpdate:modelValue":e[1]||(e[1]=s=>a(i).input=s),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:p,name:"label-input"},null,8,["modelValue","label","placeholder"]),e[10]||(e[10]=l()),o(d,{language:"html-vue"},{default:u(()=>[...e[9]||(e[9]=[l(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              label="Typeahead"
              name="typeahead"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@prefabs.tech/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          <\/script>
        `,-1)])]),_:1})])]),e[25]||(e[25]=l()),t("section",null,[t("h2",null,m(n.$t("form.label.disabled")),1),e[14]||(e[14]=l()),t("div",q,[o(a(f),{modelValue:a(i).disabled,"onUpdate:modelValue":e[2]||(e[2]=s=>a(i).disabled=s),label:n.$t("form.label.disabled"),suggestions:p,name:"disabled-input",type:"text",disabled:""},null,8,["modelValue","label"]),e[13]||(e[13]=l()),o(d,{language:"html-vue"},{default:u(()=>[...e[12]||(e[12]=[l(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              label="Disabled"
              name="disabled-input"
              type="text"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@prefabs.tech/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          <\/script>
        `,-1)])]),_:1})])]),e[26]||(e[26]=l()),t("section",null,[t("h2",null,m(n.$t("form.label.withI18n")),1),e[17]||(e[17]=l()),t("div",M,[o(a(f),{modelValue:a(i).input,"onUpdate:modelValue":e[3]||(e[3]=s=>a(i).input=s),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:p,name:"i18n-input"},null,8,["modelValue","label","placeholder"]),e[16]||(e[16]=l()),o(d,{language:"html-vue"},{default:u(()=>[...e[15]||(e[15]=[l(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              :label="t('form.label.typeahead')"
              :placeholder="t('form.placeholder.input')"
              name="typeahed"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          <\/script>
        `,-1)])]),_:1})])]),e[27]||(e[27]=l()),t("section",null,[t("h2",null,m(n.$t("form.label.debouncedTypeahead")),1),e[20]||(e[20]=l()),t("div",O,[o(a(f),{modelValue:a(i).input,"onUpdate:modelValue":e[4]||(e[4]=s=>a(i).input=s),"debounce-time":1e3,"empty-message":n.$t("form.label.noResults"),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:p,name:"delay-input"},null,8,["modelValue","empty-message","label","placeholder"]),e[19]||(e[19]=l()),o(d,{language:"html-vue"},{default:u(()=>[...e[18]||(e[18]=[l(`
          <template>
            <Typeahead
              v-model="input"
              :debounce-time="1000"
              :suggestions="suggestionItems"
              empty-message="No results found"
              label="Typeahead"
              name="typeahead"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@prefabs.tech/vue3-form";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];
          <\/script>
        `,-1)])]),_:1})])]),e[28]||(e[28]=l()),t("section",null,[t("h2",null,m(n.$t("form.label.inputWithValidation")),1),e[23]||(e[23]=l()),t("div",R,[o(a(c),null,{default:u(()=>[o(a(f),{modelValue:a(i).inputWithValidation,"onUpdate:modelValue":e[5]||(e[5]=s=>a(i).inputWithValidation=s),label:n.$t("form.label.typeahead"),name:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),schema:w.value,suggestions:p,type:"text"},null,8,["modelValue","label","name","placeholder","schema"])]),_:1}),e[22]||(e[22]=l()),o(d,{language:"html-vue"},{default:u(()=>[...e[21]||(e[21]=[l(`
          <Form>
            <Typeahead
              v-model="inputWithValidation"
              :schema="inputSchema"
              :suggestions="suggestionItems"
              label="Input"
              name="typeahead"
              placeholder="Enter input"
              type="text"
            />
          </Form>

          <script setup lang="ts">
          import { Form, Typeahead } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const suggestionItems = [
            {
              value: "Roslabel",
              label: "Roslabel - A fragrant flower often associated with romance",
            },
            { 
              value: "Tulip",
              label: "Tulip - A bright, cup-shaped flower popular in spring"
            },
            {
              value: "Daisy",
              label: "Daisy - A simple, white flower with a yellow center"
            },
            {
              value: "Sunflower",
              label: "Sunflower - A tall plant with a large, yellow flower head",
            },
            {
              value: "Lily",
              label: "Lily - An elegant flower often used in bouquets"
            },
            {
              value: "Orchid",
              label: "Orchid - An exotic flower with a unique shape"
            },
            {
              value: "Marigold",
              label: "Marigold - A vibrant, orange or yellow flower"
            },
            {
              value: "Lavender",
              label: "Lavender - A fragrant flower known for its calming scent"
            },
            {
              value: "Peony",
              label: "Peony - A lush, full flower often used in weddings"
            },
            {
              value: "Chrysanthemum",
              label: "Chrysanthemum - A hardy flower with a variety of colors"
            },
            {
              value: "Daffodil",
              label: "Daffodil - A bright, yellow flower that blooms in spring"
            },
            {
              value: "Hydrangea",
              label: "Hydrangea - A large, cluster-like flower that changes color",
            },
          ];

          const inputSchema = z.string()
            .min(3, { message: "Input must be at least 3 character(s)" });        
          <\/script>
        `,-1)])]),_:1})])]),e[29]||(e[29]=l()),o($,{"events-data":h.value,"props-data":y.value,"props-table-title":n.$t("common.properties",{value:"TypeaheadProperties"}),"slots-data":v.value},null,8,["events-data","props-data","props-table-title","slots-data"])]),_:1},8,["subtitle","title"])}}});export{F as default};
