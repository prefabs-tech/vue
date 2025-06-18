import{j as s}from"./DzangolabVue3Form.es-zgb0MArI.js";import{d as b,L as v,N as V,r as d,K as g,f as z,o as E,i as m,E as l,g as i,t as f,h as u,u as t,x as C}from"./index-DuON4g_W.js";import{_ as S}from"./FormPage.vue_vue_type_style_index_0_lang-4uJNg6tI.js";const U={class:"section-content"},$={class:"section-content"},I={class:"editable-group"},q={class:"section-content"},k={class:"section-content"},B={class:"editable-group"},N={name:"EmailInputField"},x=b({...N,setup(w){const{t:r}=v();let n=V({basic:d(r("form.label.basicInput")),content:d(r("form.label.input")),disabled:d(r("form.label.title")),fullSize:d("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),italic:d(r("form.label.input")),largeSize:d("Editable"),mediumSize:d("Editable"),smallSize:d("Editable"),underline:d(r("form.label.input"))});return(a,e)=>{const p=g("SshPre");return E(),z(S,{title:a.$t("form.label.editableContent"),class:"demo"},{toolbar:m(()=>[u(t(C),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=o=>a.$router.push("/form"))},null,8,["label"])]),default:m(()=>[e[27]||(e[27]=l()),i("section",null,[i("h2",null,f(a.$t("form.label.basicInput")),1),e[12]||(e[12]=l()),i("div",U,[u(t(s),{modelValue:t(n).basic,"onUpdate:modelValue":e[1]||(e[1]=o=>t(n).basic=o)},null,8,["modelValue"]),e[11]||(e[11]=l()),u(p,{language:"html-vue"},{default:m(()=>e[10]||(e[10]=[l(`
          <EditableContent v-model="input" />
  
          <script setup lang="ts">
          import { EditableContent } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref("Basic");
          <\/script>
        `)])),_:1})])]),e[28]||(e[28]=l()),i("section",null,[i("h2",null,f(a.$t("form.label.contentElement")),1),e[17]||(e[17]=l()),i("div",$,[i("div",I,[u(t(s),{modelValue:t(n).content,"onUpdate:modelValue":e[2]||(e[2]=o=>t(n).content=o),"content-element":"h3"},null,8,["modelValue"]),e[13]||(e[13]=l()),u(t(s),{modelValue:t(n).underline,"onUpdate:modelValue":e[3]||(e[3]=o=>t(n).underline=o),"content-element":"i"},null,8,["modelValue"]),e[14]||(e[14]=l()),u(t(s),{modelValue:t(n).italic,"onUpdate:modelValue":e[4]||(e[4]=o=>t(n).italic=o),"content-element":"u"},null,8,["modelValue"])]),e[16]||(e[16]=l()),u(p,{language:"html-vue"},{default:m(()=>e[15]||(e[15]=[l(`
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
        `)])),_:1})])]),e[29]||(e[29]=l()),i("section",null,[i("h2",null,f(a.$t("form.label.disabled")),1),e[20]||(e[20]=l()),i("div",q,[u(t(s),{modelValue:t(n).disabled,"onUpdate:modelValue":e[5]||(e[5]=o=>t(n).disabled=o),"allow-edit":!1},null,8,["modelValue"]),e[19]||(e[19]=l()),u(p,{language:"html-vue"},{default:m(()=>e[18]||(e[18]=[l(`
          <EditableContent v-model="input" :allow-edit="false" />
  
          <script setup lang="ts">
          import { EditableContent } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const input = ref("Title");
          <\/script>
        `)])),_:1})])]),e[30]||(e[30]=l()),i("section",null,[i("h2",null,f(a.$t("form.label.size")),1),e[26]||(e[26]=l()),i("div",k,[i("div",B,[u(t(s),{modelValue:t(n).smallSize,"onUpdate:modelValue":e[6]||(e[6]=o=>t(n).smallSize=o),size:"small"},null,8,["modelValue"]),e[21]||(e[21]=l()),u(t(s),{modelValue:t(n).mediumSize,"onUpdate:modelValue":e[7]||(e[7]=o=>t(n).mediumSize=o),size:"medium"},null,8,["modelValue"]),e[22]||(e[22]=l()),u(t(s),{modelValue:t(n).largeSize,"onUpdate:modelValue":e[8]||(e[8]=o=>t(n).largeSize=o),size:"large"},null,8,["modelValue"])]),e[24]||(e[24]=l()),u(t(s),{modelValue:t(n).fullSize,"onUpdate:modelValue":e[9]||(e[9]=o=>t(n).fullSize=o),size:"full"},null,8,["modelValue"]),e[25]||(e[25]=l()),u(p,{language:"html-vue"},{default:m(()=>e[23]||(e[23]=[l(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{x as default};
