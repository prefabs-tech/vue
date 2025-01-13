import{z as h,$ as c}from"./DzangolabVue3Form.es-d1fadff1.js";import{d as y,a7 as v,p as A,j as p,K as g,o as L,c as D,w as s,L as o,C as e,M as u,f as a,E as l}from"./index-8e1c3ab6-475a9ed5.js";import{m as T}from"./index-f29306f7.js";import{_ as I}from"./FormPage.vue_vue_type_style_index_0_lang-ca62b900.js";const V={class:"section-content"},$={class:"section-content"},k={class:"section-content"},S={class:"section-content"},C={class:"section-content"},P={class:"section-content"},M={name:"InputField"},_=y({...M,setup(q){const{t:m}=v(),b=T.string().min(3,{message:m("form.errors.input.min",{length:3})}),d=[{value:"Roslabel",label:"Roslabel - A fragrant flower often associated with romance"},{value:"Tulip",label:"Tulip - A bright, cup-shaped flower popular in spring"},{value:"Daisy",label:"Daisy - A simple, white flower with a yellow center"},{value:"Sunflower",label:"Sunflower - A tall plant with a large, yellow flower head"},{value:"Lily",label:"Lily - An elegant flower often used in bouquets"},{value:"Orchid",label:"Orchid - An exotic flower with a unique shape"},{value:"Marigold",label:"Marigold - A vibrant, orange or yellow flower"},{value:"Lavender",label:"Lavender - A fragrant flower known for its calming scent"},{value:"Peony",label:"Peony - A lush, full flower often used in weddings"},{value:"Chrysanthemum",label:"Chrysanthemum - A hardy flower with a variety of colors"},{value:"Daffodil",label:"Daffodil - A bright, yellow flower that blooms in spring"},{value:"Hydrangea",label:"Hydrangea - A large, cluster-like flower that changes color"}];let t=A({disabled:p("Lily"),input:p(),inputWithValidation:p(),noLabelInput:p()});return(n,r)=>{const w=g("router-link"),f=g("SshPre");return L(),D(I,{title:n.$t("form.label.typeahead"),class:"demo"},{toolbar:s(()=>[o(w,{to:{name:"form"},class:"back"},{default:s(()=>[e(u(n.$t("common.back")),1)]),_:1})]),default:s(()=>[e(),a("section",null,[a("h2",null,u(n.$t("form.label.basicInput")),1),e(),a("div",V,[o(l(h),{modelValue:l(t).noLabelInput,"onUpdate:modelValue":r[0]||(r[0]=i=>l(t).noLabelInput=i),placeholder:n.$t("form.placeholder.input"),suggestions:d},null,8,["modelValue","placeholder"]),e(),o(f,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,u(n.$t("form.label.labelInput")),1),e(),a("div",$,[o(l(h),{modelValue:l(t).input,"onUpdate:modelValue":r[1]||(r[1]=i=>l(t).input=i),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:d},null,8,["modelValue","label","placeholder"]),e(),o(f,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,u(n.$t("form.label.disabled")),1),e(),a("div",k,[o(l(h),{modelValue:l(t).disabled,"onUpdate:modelValue":r[2]||(r[2]=i=>l(t).disabled=i),label:n.$t("form.label.disabled"),suggestions:d,type:"text",disabled:""},null,8,["modelValue","label"]),e(),o(f,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,u(n.$t("form.label.withI18n")),1),e(),a("div",S,[o(l(h),{modelValue:l(t).input,"onUpdate:modelValue":r[3]||(r[3]=i=>l(t).input=i),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:d},null,8,["modelValue","label","placeholder"]),e(),o(f,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,u(n.$t("form.label.debouncedTypeahead")),1),e(),a("div",C,[o(l(h),{modelValue:l(t).input,"onUpdate:modelValue":r[4]||(r[4]=i=>l(t).input=i),"debounce-time":1e3,label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:d},null,8,["modelValue","label","placeholder"]),e(),o(f,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,u(n.$t("form.label.inputWithValidation")),1),e(),a("div",P,[o(l(c),null,{default:s(()=>[o(l(h),{modelValue:l(t).inputWithValidation,"onUpdate:modelValue":r[5]||(r[5]=i=>l(t).inputWithValidation=i),label:n.$t("form.label.typeahead"),name:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),schema:l(b),suggestions:d,type:"text"},null,8,["modelValue","label","name","placeholder","schema"])]),_:1}),e(),o(f,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{_ as default};
