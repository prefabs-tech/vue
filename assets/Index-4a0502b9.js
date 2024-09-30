import{m as y,l as f,U as h}from"./DzangolabVue3Form.es-7a1ee2cd.js";import{d as v,u as A,b as L,e as g,o as D,c as T,w as t,a,t as p,f as l,g as o,h as e,r as m}from"./index-88ab4981.js";const I={class:"section-content"},V={class:"section-content"},S={class:"section-content"},_={class:"section-content"},$={class:"section-content"},P={class:"section-content"},C={class:"section-content"},k={name:"InputField"},M=v({...k,setup(q){const{t:b}=A(),w=y.string().min(3,{message:b("form.errors.input.min",{length:3})}),u=[{value:"Roslabel",label:"Roslabel - A fragrant flower often associated with romance"},{value:"Tulip",label:"Tulip - A bright, cup-shaped flower popular in spring"},{value:"Daisy",label:"Daisy - A simple, white flower with a yellow center"},{value:"Sunflower",label:"Sunflower - A tall plant with a large, yellow flower head"},{value:"Lily",label:"Lily - An elegant flower often used in bouquets"},{value:"Orchid",label:"Orchid - An exotic flower with a unique shape"},{value:"Marigold",label:"Marigold - A vibrant, orange or yellow flower"},{value:"Lavender",label:"Lavender - A fragrant flower known for its calming scent"},{value:"Peony",label:"Peony - A lush, full flower often used in weddings"},{value:"Chrysanthemum",label:"Chrysanthemum - A hardy flower with a variety of colors"},{value:"Daffodil",label:"Daffodil - A bright, yellow flower that blooms in spring"},{value:"Hydrangea",label:"Hydrangea - A large, cluster-like flower that changes color"}];let r=L({disabled:g("Lily"),input:g(),inputWithValidation:g(),noLabelInput:g()});return(n,i)=>{const d=m("SshPre"),c=m("Page");return D(),T(c,{title:n.$t("form.label.typeahead"),class:"demo"},{default:t(()=>[a("section",null,[a("h2",null,p(n.$t("form.label.basicInput")),1),l(),a("div",I,[o(d,{language:"html-vue"},{default:t(()=>[l(`
          <Form>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              placeholder="Enter Input"
            />
          </Form>

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
        `)]),_:1}),l(),o(e(h),null,{default:t(()=>[o(e(f),{modelValue:e(r).noLabelInput,"onUpdate:modelValue":i[0]||(i[0]=s=>e(r).noLabelInput=s),placeholder:n.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","placeholder"])]),_:1})])]),l(),a("section",null,[a("h2",null,p(n.$t("form.label.labelInput")),1),l(),a("div",V,[o(d,{language:"html-vue"},{default:t(()=>[l(`
          <Form>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              label="Typeahead"
              placeholder="Enter Input"
            />
          </Form>

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
        `)]),_:1}),l(),o(e(h),null,{default:t(()=>[o(e(f),{modelValue:e(r).input,"onUpdate:modelValue":i[1]||(i[1]=s=>e(r).input=s),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","label","placeholder"])]),_:1})])]),l(),a("section",null,[a("h2",null,p(n.$t("form.label.disabled")),1),l(),a("div",S,[o(d,{language:"html-vue"},{default:t(()=>[l(`
          <Form>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              label="Disabled"
              type="text"
              disabled
            />
          </Form>

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
        `)]),_:1}),l(),o(e(h),null,{default:t(()=>[o(e(f),{modelValue:e(r).disabled,"onUpdate:modelValue":i[2]||(i[2]=s=>e(r).disabled=s),label:n.$t("form.label.disabled"),suggestions:u,type:"text",disabled:""},null,8,["modelValue","label"])]),_:1})])]),l(),a("section",null,[a("h2",null,p(n.$t("form.label.withI18n")),1),l(),a("div",_,[o(d,{language:"html-vue"},{default:t(()=>[l(`
          <Form>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              :label="t('form.label.typeahead')"
              :placeholder="t('form.placeholder.input')"
            />
          </Form>

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
        `)]),_:1}),l(),o(e(h),null,{default:t(()=>[o(e(f),{modelValue:e(r).input,"onUpdate:modelValue":i[3]||(i[3]=s=>e(r).input=s),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","label","placeholder"])]),_:1})])]),l(),a("section",null,[a("h2",null,p(n.$t("form.label.debouncedTypeahead")),1),l(),a("div",$,[o(d,{language:"html-vue"},{default:t(()=>[l(`
          <Form>
            <Typeahead
              v-model="input"
              :debounce-time="1000"
              :suggestions="suggestionItems"
              label="Typeahead"
              placeholder="Enter Input"
            />
          </Form>

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
        `)]),_:1}),l(),o(e(h),null,{default:t(()=>[o(e(f),{modelValue:e(r).input,"onUpdate:modelValue":i[4]||(i[4]=s=>e(r).input=s),"debounce-time":1e3,label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:u},null,8,["modelValue","label","placeholder"])]),_:1})])]),l(),a("section",null,[a("h2",null,p(n.$t("form.label.inputWithValidation")),1),l(),a("div",P,[o(d,{language:"html-vue"},{default:t(()=>[l(`
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
        `)]),_:1}),l(),o(e(h),null,{default:t(()=>[o(e(f),{modelValue:e(r).inputWithValidation,"onUpdate:modelValue":i[5]||(i[5]=s=>e(r).inputWithValidation=s),label:n.$t("form.label.typeahead"),name:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),schema:e(w),suggestions:u,type:"text"},null,8,["modelValue","label","name","placeholder","schema"])]),_:1})])]),l(),a("section",null,[a("h2",null,p(n.$t("form.label.customStyleInput")),1),l(),a("div",C,[o(d,{language:"html-vue"},{default:t(()=>[l(`
          <Form>
            <Typeahead
              v-model="input"
              :suggestions="suggestionItems"
              class="custom-style-typeahead"
              label="Typeahead"
              placeholder="Enter Input"
            />
          </Form>

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

          <style lang="css">
            .custom-style-typeahead {
              flex-direction: row;
              align-items: center;
            }

            .custom-style-typeahead input {
              --_input-field-border-color: #007aff;
              --_input-field-border-radius: 1em;
              --_input-field-padding-h: 0.5em;
              --_input-field-padding-v: 0.5em;
            }

            .custom-style-typeahead input:focus {
              box-shadow: 0 0 0 .25rem #004da08e;
            }

            .custom-style-typeahead li.suggestion:hover {
              --_typeahead-suggestion-hover-color: var(--dz-success-color);
            }

            .custom-style-typeahead ul.suggestion-list  {
              --_typeahead-suggestions-border-radius: 0.75rem;
            }
          </style>
        `)]),_:1}),l(),o(e(h),null,{default:t(()=>[o(e(f),{modelValue:e(r).input,"onUpdate:modelValue":i[6]||(i[6]=s=>e(r).input=s),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:u,class:"custom-style-typeahead"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{M as default};
