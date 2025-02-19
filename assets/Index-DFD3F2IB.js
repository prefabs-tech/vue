import{v as f,o as b}from"./DzangolabVue3Form.es-CmcHs4Xu.js";import{d as w,x as c,y as v,z as y,r as p,s as A,j as L,o as D,w as s,A as e,e as a,t as h,g as t,u as l,B as T}from"./index-hG40rBrG.js";import{_ as I}from"./FormPage.vue_vue_type_style_index_0_lang-DzjKvpBT.js";const V={class:"section-content"},$={class:"section-content"},S={class:"section-content"},k={class:"section-content"},C={class:"section-content"},P={class:"section-content"},O={name:"InputField"},z=w({...O,setup(q){const{t:g}=c(),m=v.string().min(3,{message:g("form.errors.input.min",{length:3})}),u=[{value:"Roslabel",label:"Roslabel - A fragrant flower often associated with romance"},{value:"Tulip",label:"Tulip - A bright, cup-shaped flower popular in spring"},{value:"Daisy",label:"Daisy - A simple, white flower with a yellow center"},{value:"Sunflower",label:"Sunflower - A tall plant with a large, yellow flower head"},{value:"Lily",label:"Lily - An elegant flower often used in bouquets"},{value:"Orchid",label:"Orchid - An exotic flower with a unique shape"},{value:"Marigold",label:"Marigold - A vibrant, orange or yellow flower"},{value:"Lavender",label:"Lavender - A fragrant flower known for its calming scent"},{value:"Peony",label:"Peony - A lush, full flower often used in weddings"},{value:"Chrysanthemum",label:"Chrysanthemum - A hardy flower with a variety of colors"},{value:"Daffodil",label:"Daffodil - A bright, yellow flower that blooms in spring"},{value:"Hydrangea",label:"Hydrangea - A large, cluster-like flower that changes color"}];let r=y({disabled:p("Lily"),input:p(),inputWithValidation:p(),noLabelInput:p()});return(n,o)=>{const d=A("SshPre");return D(),L(I,{title:n.$t("form.label.typeahead"),class:"demo"},{toolbar:s(()=>[t(l(T),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:o[0]||(o[0]=i=>n.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e(),a("section",null,[a("h2",null,h(n.$t("form.label.basicInput")),1),e(),a("div",V,[t(l(f),{modelValue:l(r).noLabelInput,"onUpdate:modelValue":o[1]||(o[1]=i=>l(r).noLabelInput=i),placeholder:n.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","placeholder"]),e(),t(d,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,h(n.$t("form.label.labelInput")),1),e(),a("div",$,[t(l(f),{modelValue:l(r).input,"onUpdate:modelValue":o[2]||(o[2]=i=>l(r).input=i),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","label","placeholder"]),e(),t(d,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,h(n.$t("form.label.disabled")),1),e(),a("div",S,[t(l(f),{modelValue:l(r).disabled,"onUpdate:modelValue":o[3]||(o[3]=i=>l(r).disabled=i),label:n.$t("form.label.disabled"),suggestions:u,type:"text",disabled:""},null,8,["modelValue","label"]),e(),t(d,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,h(n.$t("form.label.withI18n")),1),e(),a("div",k,[t(l(f),{modelValue:l(r).input,"onUpdate:modelValue":o[4]||(o[4]=i=>l(r).input=i),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","label","placeholder"]),e(),t(d,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,h(n.$t("form.label.debouncedTypeahead")),1),e(),a("div",C,[t(l(f),{modelValue:l(r).input,"onUpdate:modelValue":o[5]||(o[5]=i=>l(r).input=i),"debounce-time":1e3,label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","label","placeholder"]),e(),t(d,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])]),e(),a("section",null,[a("h2",null,h(n.$t("form.label.inputWithValidation")),1),e(),a("div",P,[t(l(b),null,{default:s(()=>[t(l(f),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":o[6]||(o[6]=i=>l(r).inputWithValidation=i),label:n.$t("form.label.typeahead"),name:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),schema:l(m),suggestions:u,type:"text"},null,8,["modelValue","label","name","placeholder","schema"])]),_:1}),e(),t(d,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{z as default};
