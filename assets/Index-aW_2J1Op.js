import{F as a}from"./PrefabsTechVue3TanstackTable.es-tYQ9Q_f_.js";import{d as g,u as E,i as z,j as d,r as C,o as S,h as D,w as m,a as i,t as f,b as n,e as s,f as t,k as b}from"./index-uzHpboRu.js";import{_ as U}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BdGsaLCI.js";import{_ as $}from"./FormPage.vue_vue_type_style_index_0_lang-DPEJ2tjc.js";const y={class:"section-content"},w={class:"section-content"},I={class:"editable-group"},q={class:"section-content"},B={class:"section-content"},k={class:"editable-group"},N={name:"EditableContentDemo"},j=g({...N,setup(P){const{t:u}=E();let l=z({basic:d(u("form.label.basicInput")),content:d(u("form.label.input")),disabled:d(u("form.label.title")),fullSize:d("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),italic:d(u("form.label.input")),largeSize:d("Editable"),mediumSize:d("Editable"),smallSize:d("Editable"),underline:d(u("form.label.input"))});const v=b(()=>[{description:u("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | undefined"}]),V=b(()=>[{default:"true",description:u("form.documentation.propsDescription.editableContent.allowEdit"),prop:"allowEdit",type:"Boolean"},{default:'"p"',description:u("form.documentation.propsDescription.editableContent.contentElement"),prop:"contentElement",type:"String"},{default:"-",description:u("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"string | number | undefined"},{default:"-",description:u("form.documentation.propsDescription.editableContent.placeholder"),prop:"placeholder",type:"String"},{default:'"none"',description:u("form.documentation.propsDescription.editableContent.resize"),prop:"resize",type:"String"},{default:'"small"',description:u("form.documentation.propsDescription.editableContent.size"),prop:"size",type:'"small" | "medium" | "large" | "full"'}]);return(r,e)=>{const p=C("SshPre");return S(),D($,{subtitle:r.$t("form.subtitle.editableContent"),title:r.$t("form.label.editableContent"),class:"demo"},{default:m(()=>[i("section",null,[i("h2",null,f(r.$t("form.label.basicInput")),1),e[11]||(e[11]=n()),i("div",y,[s(t(a),{modelValue:t(l).basic,"onUpdate:modelValue":e[0]||(e[0]=o=>t(l).basic=o)},null,8,["modelValue"]),e[10]||(e[10]=n()),s(p,{language:"html-vue"},{default:m(()=>[...e[9]||(e[9]=[n(`
          <EditableContent v-model="input" />
  
          <script setup lang="ts">
          import { EditableContent } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref("Basic");
          <\/script>
        `,-1)])]),_:1})])]),e[26]||(e[26]=n()),i("section",null,[i("h2",null,f(r.$t("form.label.contentElement")),1),e[16]||(e[16]=n()),i("div",w,[i("div",I,[s(t(a),{modelValue:t(l).content,"onUpdate:modelValue":e[1]||(e[1]=o=>t(l).content=o),"content-element":"h3"},null,8,["modelValue"]),e[12]||(e[12]=n()),s(t(a),{modelValue:t(l).underline,"onUpdate:modelValue":e[2]||(e[2]=o=>t(l).underline=o),"content-element":"i"},null,8,["modelValue"]),e[13]||(e[13]=n()),s(t(a),{modelValue:t(l).italic,"onUpdate:modelValue":e[3]||(e[3]=o=>t(l).italic=o),"content-element":"u"},null,8,["modelValue"])]),e[15]||(e[15]=n()),s(p,{language:"html-vue"},{default:m(()=>[...e[14]||(e[14]=[n(`
          <EditableContent v-model="input1" content-element="h3" />
          <EditableContent v-model="input2" content-element="i" />
          <EditableContent v-model="input3" content-element="u" />
  
          <script setup lang="ts">
          import { EditableContent } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input1 = ref("Input");
          const input2 = ref("Input");
          const input3 = ref("Input");
          <\/script>
        `,-1)])]),_:1})])]),e[27]||(e[27]=n()),i("section",null,[i("h2",null,f(r.$t("form.label.disabled")),1),e[19]||(e[19]=n()),i("div",q,[s(t(a),{modelValue:t(l).disabled,"onUpdate:modelValue":e[4]||(e[4]=o=>t(l).disabled=o),"allow-edit":!1},null,8,["modelValue"]),e[18]||(e[18]=n()),s(p,{language:"html-vue"},{default:m(()=>[...e[17]||(e[17]=[n(`
          <EditableContent v-model="input" :allow-edit="false" />
  
          <script setup lang="ts">
          import { EditableContent } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref("Title");
          <\/script>
        `,-1)])]),_:1})])]),e[28]||(e[28]=n()),i("section",null,[i("h2",null,f(r.$t("form.label.size")),1),e[25]||(e[25]=n()),i("div",B,[i("div",k,[s(t(a),{modelValue:t(l).smallSize,"onUpdate:modelValue":e[5]||(e[5]=o=>t(l).smallSize=o),size:"small"},null,8,["modelValue"]),e[20]||(e[20]=n()),s(t(a),{modelValue:t(l).mediumSize,"onUpdate:modelValue":e[6]||(e[6]=o=>t(l).mediumSize=o),size:"medium"},null,8,["modelValue"]),e[21]||(e[21]=n()),s(t(a),{modelValue:t(l).largeSize,"onUpdate:modelValue":e[7]||(e[7]=o=>t(l).largeSize=o),size:"large"},null,8,["modelValue"])]),e[23]||(e[23]=n()),s(t(a),{modelValue:t(l).fullSize,"onUpdate:modelValue":e[8]||(e[8]=o=>t(l).fullSize=o),size:"full"},null,8,["modelValue"]),e[24]||(e[24]=n()),s(p,{language:"html-vue"},{default:m(()=>[...e[22]||(e[22]=[n(`
          <EditableContent v-model="input1" size="small" />
          <EditableContent v-model="input2" size="medium" />
          <EditableContent v-model="input3" size="large" />
          <EditableContent v-model="input4" size="full" />
  
          <script setup lang="ts">
          import { EditableContent } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input1 = ref("Editable");
          const input2 = ref("Editable");
          const input3 = ref("Editable");
          const input4 = ref("Lorem ipsum...");
          <\/script>
        `,-1)])]),_:1})])]),e[29]||(e[29]=n()),s(U,{"events-data":v.value,"props-data":V.value,"props-table-title":r.$t("common.properties",{value:"EditableContentProperties"})},null,8,["events-data","props-data","props-table-title"])]),_:1},8,["subtitle","title"])}}});export{j as default};
