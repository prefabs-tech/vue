import{m as v,o as h,Z as p}from"./DzangolabVue3Form.es-613b07ef.js";import{d as A,u as L,b as D,e as g,r as m,o as T,c as I,w as t,f as a,g as e,t as u,a as o,h as l}from"./index-577793d9.js";const V={class:"section-content"},_={class:"section-content"},S={class:"section-content"},k={class:"section-content"},$={class:"section-content"},P={class:"section-content"},C={class:"section-content"},q={name:"InputField"},O=A({...q,setup(F){const{t:b}=L(),w=v.string().min(3,{message:b("form.errors.input.min",{length:3})}),d=[{value:"Roslabel",label:"Roslabel - A fragrant flower often associated with romance"},{value:"Tulip",label:"Tulip - A bright, cup-shaped flower popular in spring"},{value:"Daisy",label:"Daisy - A simple, white flower with a yellow center"},{value:"Sunflower",label:"Sunflower - A tall plant with a large, yellow flower head"},{value:"Lily",label:"Lily - An elegant flower often used in bouquets"},{value:"Orchid",label:"Orchid - An exotic flower with a unique shape"},{value:"Marigold",label:"Marigold - A vibrant, orange or yellow flower"},{value:"Lavender",label:"Lavender - A fragrant flower known for its calming scent"},{value:"Peony",label:"Peony - A lush, full flower often used in weddings"},{value:"Chrysanthemum",label:"Chrysanthemum - A hardy flower with a variety of colors"},{value:"Daffodil",label:"Daffodil - A bright, yellow flower that blooms in spring"},{value:"Hydrangea",label:"Hydrangea - A large, cluster-like flower that changes color"}];let r=D({disabled:g("Lily"),input:g(),inputWithValidation:g(),noLabelInput:g()});return(n,i)=>{const c=m("router-link"),f=m("SshPre"),y=m("Page");return T(),I(y,{title:n.$t("form.label.typeahead"),class:"demo"},{toolbar:t(()=>[a(c,{to:{name:"form"},class:"back"},{default:t(()=>[e(u(n.$t("common.back")),1)]),_:1})]),default:t(()=>[e(),o("section",null,[o("h2",null,u(n.$t("form.label.basicInput")),1),e(),o("div",V,[a(f,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e(),a(l(p),null,{default:t(()=>[a(l(h),{modelValue:l(r).noLabelInput,"onUpdate:modelValue":i[0]||(i[0]=s=>l(r).noLabelInput=s),placeholder:n.$t("form.placeholder.input"),suggestions:d},null,8,["modelValue","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,u(n.$t("form.label.labelInput")),1),e(),o("div",_,[a(f,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e(),a(l(p),null,{default:t(()=>[a(l(h),{modelValue:l(r).input,"onUpdate:modelValue":i[1]||(i[1]=s=>l(r).input=s),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:d},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,u(n.$t("form.label.disabled")),1),e(),o("div",S,[a(f,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e(),a(l(p),null,{default:t(()=>[a(l(h),{modelValue:l(r).disabled,"onUpdate:modelValue":i[2]||(i[2]=s=>l(r).disabled=s),label:n.$t("form.label.disabled"),suggestions:d,type:"text",disabled:""},null,8,["modelValue","label"])]),_:1})])]),e(),o("section",null,[o("h2",null,u(n.$t("form.label.withI18n")),1),e(),o("div",k,[a(f,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e(),a(l(p),null,{default:t(()=>[a(l(h),{modelValue:l(r).input,"onUpdate:modelValue":i[3]||(i[3]=s=>l(r).input=s),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:d},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,u(n.$t("form.label.debouncedTypeahead")),1),e(),o("div",$,[a(f,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e(),a(l(p),null,{default:t(()=>[a(l(h),{modelValue:l(r).input,"onUpdate:modelValue":i[4]||(i[4]=s=>l(r).input=s),"debounce-time":1e3,label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:d},null,8,["modelValue","label","placeholder"])]),_:1})])]),e(),o("section",null,[o("h2",null,u(n.$t("form.label.inputWithValidation")),1),e(),o("div",P,[a(f,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e(),a(l(p),null,{default:t(()=>[a(l(h),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":i[5]||(i[5]=s=>l(r).inputWithValidation=s),label:n.$t("form.label.typeahead"),name:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),schema:l(w),suggestions:d,type:"text"},null,8,["modelValue","label","name","placeholder","schema"])]),_:1})])]),e(),o("section",null,[o("h2",null,u(n.$t("form.label.customStyleInput")),1),e(),o("div",C,[a(f,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e(),a(l(p),null,{default:t(()=>[a(l(h),{modelValue:l(r).input,"onUpdate:modelValue":i[6]||(i[6]=s=>l(r).input=s),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:d,class:"custom-style-typeahead"},null,8,["modelValue","label","placeholder"])]),_:1})])])]),_:1},8,["title"])}}});export{O as default};
