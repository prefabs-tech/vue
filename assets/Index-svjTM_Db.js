import{n as u}from"./DzangolabVue3Form.es-DW0jlrL_.js";import{d as b,z as c,B as v,r as s,s as V,j as g,o as z,w as m,C as t,e as i,t as f,g as a,u as e,D as E}from"./index-B_oNSRZ1.js";import{_ as C}from"./FormPage.vue_vue_type_style_index_0_lang-CnRrHglt.js";const S={class:"section-content"},U={class:"section-content"},$={class:"editable-group"},I={class:"section-content"},q={class:"section-content"},B={class:"editable-group"},_={name:"EmailInputField"},N=b({..._,setup(h){const{t:r}=c();let n=v({basic:s(r("form.label.basicInput")),content:s(r("form.label.input")),disabled:s(r("form.label.title")),fullSize:s("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),italic:s(r("form.label.input")),largeSize:s("Editable"),mediumSize:s("Editable"),smallSize:s("Editable"),underline:s(r("form.label.input"))});return(d,l)=>{const p=V("SshPre");return z(),g(C,{title:d.$t("form.label.editableContent"),class:"demo"},{toolbar:m(()=>[a(e(E),{label:d.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=o=>d.$router.push("/form"))},null,8,["label"])]),default:m(()=>[t(),i("section",null,[i("h2",null,f(d.$t("form.label.basicInput")),1),t(),i("div",S,[a(e(u),{modelValue:e(n).basic,"onUpdate:modelValue":l[1]||(l[1]=o=>e(n).basic=o)},null,8,["modelValue"]),t(),a(p,{language:"html-vue"},{default:m(()=>[t(`
          <EditableContent v-model="input" />
  
          <script setup lang="ts">
          import { EditableContent } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref("Basic");
          <\/script>
        `)]),_:1}),t()])]),t(),i("section",null,[i("h2",null,f(d.$t("form.label.contentElement")),1),t(),i("div",U,[i("div",$,[a(e(u),{modelValue:e(n).content,"onUpdate:modelValue":l[2]||(l[2]=o=>e(n).content=o),"content-element":"h3"},null,8,["modelValue"]),t(),a(e(u),{modelValue:e(n).underline,"onUpdate:modelValue":l[3]||(l[3]=o=>e(n).underline=o),"content-element":"i"},null,8,["modelValue"]),t(),a(e(u),{modelValue:e(n).italic,"onUpdate:modelValue":l[4]||(l[4]=o=>e(n).italic=o),"content-element":"u"},null,8,["modelValue"])]),t(),a(p,{language:"html-vue"},{default:m(()=>[t(`
          <EditableContent v-model="input1" content-element="h3" />
          <EditableContent v-model="input2" content-element="i" />
          <EditableContent v-model="input3" content-element="u" />
  
          <script setup lang="ts">
          import { EditableContent } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input1 = ref("Input");
          const input2 = ref("Input");
          const input3 = ref("Input");
          <\/script>
        `)]),_:1}),t()])]),t(),i("section",null,[i("h2",null,f(d.$t("form.label.disabled")),1),t(),i("div",I,[a(e(u),{modelValue:e(n).disabled,"onUpdate:modelValue":l[5]||(l[5]=o=>e(n).disabled=o),"allow-edit":!1},null,8,["modelValue"]),t(),a(p,{language:"html-vue"},{default:m(()=>[t(`
          <EditableContent v-model="input" :allow-edit="false" />
  
          <script setup lang="ts">
          import { EditableContent } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref("Title");
          <\/script>
        `)]),_:1}),t()])]),t(),i("section",null,[i("h2",null,f(d.$t("form.label.size")),1),t(),i("div",q,[i("div",B,[a(e(u),{modelValue:e(n).smallSize,"onUpdate:modelValue":l[6]||(l[6]=o=>e(n).smallSize=o),size:"small"},null,8,["modelValue"]),t(),a(e(u),{modelValue:e(n).mediumSize,"onUpdate:modelValue":l[7]||(l[7]=o=>e(n).mediumSize=o),size:"medium"},null,8,["modelValue"]),t(),a(e(u),{modelValue:e(n).largeSize,"onUpdate:modelValue":l[8]||(l[8]=o=>e(n).largeSize=o),size:"large"},null,8,["modelValue"])]),t(),a(e(u),{modelValue:e(n).fullSize,"onUpdate:modelValue":l[9]||(l[9]=o=>e(n).fullSize=o),size:"full"},null,8,["modelValue"]),t(),a(p,{language:"html-vue"},{default:m(()=>[t(`
          <EditableContent v-model="input1" size="small" />
          <EditableContent v-model="input2" size="medium" />
          <EditableContent v-model="input3" size="large" />
          <EditableContent v-model="input4" size="full" />
  
          <script setup lang="ts">
          import { EditableContent } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input1 = ref("Editable");
          const input2 = ref("Editable");
          const input3 = ref("Editable");
          const input4 = ref("Lorem ipsum...");
          <\/script>
        `)]),_:1}),t()])])]),_:1},8,["title"])}}});export{N as default};
