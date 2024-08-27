import{d as c,u as y,b as v,e as h,o as A,c as T,w as i,a as r,t as f,f as e,g as a,h as l,r as g}from"./index-2888608e.js";import{m as L,T as p,$ as D}from"./DzangolabVue3Form.es-2f02f091.js";const I={class:"demo-section"},V={class:"demo-section"},S={class:"demo-section"},$={class:"demo-section"},P={class:"demo-section"},C={class:"demo-section"},_={name:"InputField"},M=c({..._,setup(k){const{t:m}=y(),b=L.string().min(3,{message:m("form.errors.input.min",{length:3})}),u=[{value:"Roslabel",label:"Roslabel - A fragrant flower often associated with romance"},{value:"Tulip",label:"Tulip - A bright, cup-shaped flower popular in spring"},{value:"Daisy",label:"Daisy - A simple, white flower with a yellow center"},{value:"Sunflower",label:"Sunflower - A tall plant with a large, yellow flower head"},{value:"Lily",label:"Lily - An elegant flower often used in bouquets"},{value:"Orchid",label:"Orchid - An exotic flower with a unique shape"},{value:"Marigold",label:"Marigold - A vibrant, orange or yellow flower"},{value:"Lavender",label:"Lavender - A fragrant flower known for its calming scent"},{value:"Peony",label:"Peony - A lush, full flower often used in weddings"},{value:"Chrysanthemum",label:"Chrysanthemum - A hardy flower with a variety of colors"},{value:"Daffodil",label:"Daffodil - A bright, yellow flower that blooms in spring"},{value:"Hydrangea",label:"Hydrangea - A large, cluster-like flower that changes color"}];let o=v({disabled:h("Lily"),input:h(),inputWithValidation:h(),noLabelInput:h()});return(n,t)=>{const d=g("SshPre"),w=g("Page");return A(),T(w,{title:n.$t("form.label.typeahead")},{default:i(()=>[r("section",I,[r("h3",null,f(n.$t("form.label.basicInput")),1),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(l(p),{modelValue:l(o).noLabelInput,"onUpdate:modelValue":t[0]||(t[0]=s=>l(o).noLabelInput=s),placeholder:n.$t("form.placeholder.input"),suggestions:u,class:"form-field"},null,8,["modelValue","placeholder"])]),e(),r("section",V,[r("h3",null,f(n.$t("form.label.labelInput")),1),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(l(p),{modelValue:l(o).input,"onUpdate:modelValue":t[1]||(t[1]=s=>l(o).input=s),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:u,class:"form-field"},null,8,["modelValue","label","placeholder"])]),e(),r("section",S,[r("h3",null,f(n.$t("form.label.disabled")),1),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(l(p),{modelValue:l(o).disabled,"onUpdate:modelValue":t[2]||(t[2]=s=>l(o).disabled=s),label:n.$t("form.label.disabled"),suggestions:u,class:"form-field",type:"text",disabled:""},null,8,["modelValue","label"])]),e(),r("section",$,[r("h3",null,f(n.$t("form.label.debouncedTypeahead")),1),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
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
      `)]),_:1}),e(),a(l(p),{modelValue:l(o).input,"onUpdate:modelValue":t[3]||(t[3]=s=>l(o).input=s),"debounce-time":1e3,label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:u,class:"form-field"},null,8,["modelValue","label","placeholder"])]),e(),r("section",P,[r("h3",null,f(n.$t("form.label.inputWithValidation")),1),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
        <template>
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
        </template>

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
      `)]),_:1}),e(),a(l(D),null,{default:i(()=>[a(l(p),{modelValue:l(o).inputWithValidation,"onUpdate:modelValue":t[4]||(t[4]=s=>l(o).inputWithValidation=s),label:n.$t("form.label.typeahead"),name:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),schema:l(b),suggestions:u,class:"form-field",type:"text"},null,8,["modelValue","label","name","placeholder","schema"])]),_:1})]),e(),r("section",C,[r("h3",null,f(n.$t("form.label.customStyleInput")),1),e(),a(d,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <Typeahead
            v-model="input"
            :suggestions="suggestionItems"
            class="custom-style-typeahead"
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
        <style lang="css">
      `)]),_:1}),e(),a(l(p),{modelValue:l(o).input,"onUpdate:modelValue":t[5]||(t[5]=s=>l(o).input=s),label:n.$t("form.label.typeahead"),placeholder:n.$t("form.placeholder.input"),suggestions:u,class:"form-field custom-style-typeahead"},null,8,["modelValue","label","placeholder"])])]),_:1},8,["title"])}}});export{M as default};
