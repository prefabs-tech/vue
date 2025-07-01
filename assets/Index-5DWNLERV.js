import{l as f,a as w}from"./DzangolabVue3Form.es-By31cb8c.js";import{d as h,J as v,L as y,M as A,r as g,I as c,e as L,o as D,i as s,E as l,f as o,t as p,g as t,u as n,x as T}from"./index-CTueix5X.js";import{_ as I}from"./FormPage.vue_vue_type_style_index_0_lang-wbxSYK0S.js";const V={class:"section-content"},$={class:"section-content"},S={class:"section-content"},k={class:"section-content"},C={class:"section-content"},P={class:"section-content"},M={name:"InputField"},z=h({...M,setup(O){const{t:m}=v(),b=y.string().min(3,{message:m("form.errors.input.min",{length:3})}),u=[{value:"Roslabel",label:"Roslabel - A fragrant flower often associated with romance"},{value:"Tulip",label:"Tulip - A bright, cup-shaped flower popular in spring"},{value:"Daisy",label:"Daisy - A simple, white flower with a yellow center"},{value:"Sunflower",label:"Sunflower - A tall plant with a large, yellow flower head"},{value:"Lily",label:"Lily - An elegant flower often used in bouquets"},{value:"Orchid",label:"Orchid - An exotic flower with a unique shape"},{value:"Marigold",label:"Marigold - A vibrant, orange or yellow flower"},{value:"Lavender",label:"Lavender - A fragrant flower known for its calming scent"},{value:"Peony",label:"Peony - A lush, full flower often used in weddings"},{value:"Chrysanthemum",label:"Chrysanthemum - A hardy flower with a variety of colors"},{value:"Daffodil",label:"Daffodil - A bright, yellow flower that blooms in spring"},{value:"Hydrangea",label:"Hydrangea - A large, cluster-like flower that changes color"}];let r=A({disabled:g("Lily"),input:g(),inputWithValidation:g(),noLabelInput:g()});return(a,e)=>{const d=c("SshPre");return D(),L(I,{title:a.$t("form.label.typeahead"),class:"demo"},{toolbar:s(()=>[t(n(T),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>a.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e[25]||(e[25]=l()),o("section",null,[o("h2",null,p(a.$t("form.label.basicInput")),1),e[9]||(e[9]=l()),o("div",V,[t(n(f),{modelValue:n(r).noLabelInput,"onUpdate:modelValue":e[1]||(e[1]=i=>n(r).noLabelInput=i),placeholder:a.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","placeholder"]),e[8]||(e[8]=l()),t(d,{language:"html-vue"},{default:s(()=>e[7]||(e[7]=[l(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@dzangolab/vue3-form";

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
        `)])),_:1})])]),e[26]||(e[26]=l()),o("section",null,[o("h2",null,p(a.$t("form.label.labelInput")),1),e[12]||(e[12]=l()),o("div",$,[t(n(f),{modelValue:n(r).input,"onUpdate:modelValue":e[2]||(e[2]=i=>n(r).input=i),label:a.$t("form.label.typeahead"),placeholder:a.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","label","placeholder"]),e[11]||(e[11]=l()),t(d,{language:"html-vue"},{default:s(()=>e[10]||(e[10]=[l(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              label="Typeahead"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@dzangolab/vue3-form";

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
        `)])),_:1})])]),e[27]||(e[27]=l()),o("section",null,[o("h2",null,p(a.$t("form.label.disabled")),1),e[15]||(e[15]=l()),o("div",S,[t(n(f),{modelValue:n(r).disabled,"onUpdate:modelValue":e[3]||(e[3]=i=>n(r).disabled=i),label:a.$t("form.label.disabled"),suggestions:u,type:"text",disabled:""},null,8,["modelValue","label"]),e[14]||(e[14]=l()),t(d,{language:"html-vue"},{default:s(()=>e[13]||(e[13]=[l(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              label="Disabled"
              type="text"
              disabled
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@dzangolab/vue3-form";

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
        `)])),_:1})])]),e[28]||(e[28]=l()),o("section",null,[o("h2",null,p(a.$t("form.label.withI18n")),1),e[18]||(e[18]=l()),o("div",k,[t(n(f),{modelValue:n(r).input,"onUpdate:modelValue":e[4]||(e[4]=i=>n(r).input=i),label:a.$t("form.label.typeahead"),placeholder:a.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","label","placeholder"]),e[17]||(e[17]=l()),t(d,{language:"html-vue"},{default:s(()=>e[16]||(e[16]=[l(`
          <template>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              :label="t('form.label.typeahead')"
              :placeholder="t('form.placeholder.input')"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

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
        `)])),_:1})])]),e[29]||(e[29]=l()),o("section",null,[o("h2",null,p(a.$t("form.label.debouncedTypeahead")),1),e[21]||(e[21]=l()),o("div",C,[t(n(f),{modelValue:n(r).input,"onUpdate:modelValue":e[5]||(e[5]=i=>n(r).input=i),"debounce-time":1e3,label:a.$t("form.label.typeahead"),placeholder:a.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","label","placeholder"]),e[20]||(e[20]=l()),t(d,{language:"html-vue"},{default:s(()=>e[19]||(e[19]=[l(`
          <template>
            <Typeahead
              v-model="input"
              :debounce-time="1000"
              :suggestions="suggestionItems"
              label="Typeahead"
              placeholder="Enter Input"
            />
          </template>

          <script setup lang="ts">
          import { Typeahead } from "@dzangolab/vue3-form";

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
        `)])),_:1})])]),e[30]||(e[30]=l()),o("section",null,[o("h2",null,p(a.$t("form.label.inputWithValidation")),1),e[24]||(e[24]=l()),o("div",P,[t(n(w),null,{default:s(()=>[t(n(f),{modelValue:n(r).inputWithValidation,"onUpdate:modelValue":e[6]||(e[6]=i=>n(r).inputWithValidation=i),label:a.$t("form.label.typeahead"),name:a.$t("form.label.typeahead"),placeholder:a.$t("form.placeholder.input"),schema:n(b),suggestions:u,type:"text"},null,8,["modelValue","label","name","placeholder","schema"])]),_:1}),e[23]||(e[23]=l()),t(d,{language:"html-vue"},{default:s(()=>e[22]||(e[22]=[l(`
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
          import { Form, Typeahead } from "@dzangolab/vue3-form";
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{z as default};
