import{D as e,E as t,On as n,St as r,_ as i,g as a,gn as o,k as s,mt as c,qt as l,tr as u,v as d,vn as f}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{E as p}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as m}from"./FormPage-qAqvgJ-r.js";import{g as h}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as g}from"./ComponentDocumentation-BPcopVAa.js";var _={class:`section-content`},v={class:`section-content`},y={class:`editable-group`},b={class:`section-content`},x={class:`section-content`},S={class:`editable-group`},C=s({name:`EditableContentDemo`,setup(s){let{t:C}=p(),w=o({basic:f(C(`form.label.basicInput`)),content:f(C(`form.label.input`)),disabled:f(C(`form.label.title`)),fullSize:f(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`),italic:f(C(`form.label.input`)),largeSize:f(`Editable`),mediumSize:f(`Editable`),smallSize:f(`Editable`),underline:f(C(`form.label.input`))}),T=a(()=>[{description:C(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`string | number | undefined`}]),E=a(()=>[{default:`true`,description:C(`form.documentation.propsDescription.editableContent.allowEdit`),prop:`allowEdit`,type:`Boolean`},{default:`"p"`,description:C(`form.documentation.propsDescription.editableContent.contentElement`),prop:`contentElement`,type:`String`},{default:`-`,description:C(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`string | number | undefined`},{default:`-`,description:C(`form.documentation.propsDescription.editableContent.placeholder`),prop:`placeholder`,type:`String`},{default:`"none"`,description:C(`form.documentation.propsDescription.editableContent.resize`),prop:`resize`,type:`String`},{default:`"small"`,description:C(`form.documentation.propsDescription.editableContent.size`),prop:`size`,type:`"small" | "medium" | "large" | "full"`}]);return(a,o)=>{let s=r(`SshPre`);return c(),d(m,{subtitle:a.$t(`form.subtitle.editableContent`),title:a.$t(`form.label.editableContent`),class:`demo`},{default:l(()=>[i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.basicInput`)),1),o[11]||=t(),i(`div`,_,[e(n(h),{modelValue:n(w).basic,"onUpdate:modelValue":o[0]||=e=>n(w).basic=e},null,8,[`modelValue`]),o[10]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[9]||=[t(`
          <EditableContent v-model="input" />
  
          <script setup lang="ts">
          import { EditableContent } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref("Basic");
          <\/script>
        `,-1)]]),_:1})])]),o[26]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.contentElement`)),1),o[16]||=t(),i(`div`,v,[i(`div`,y,[e(n(h),{modelValue:n(w).content,"onUpdate:modelValue":o[1]||=e=>n(w).content=e,"content-element":`h3`},null,8,[`modelValue`]),o[12]||=t(),e(n(h),{modelValue:n(w).underline,"onUpdate:modelValue":o[2]||=e=>n(w).underline=e,"content-element":`i`},null,8,[`modelValue`]),o[13]||=t(),e(n(h),{modelValue:n(w).italic,"onUpdate:modelValue":o[3]||=e=>n(w).italic=e,"content-element":`u`},null,8,[`modelValue`])]),o[15]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[14]||=[t(`
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
        `,-1)]]),_:1})])]),o[27]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.disabled`)),1),o[19]||=t(),i(`div`,b,[e(n(h),{modelValue:n(w).disabled,"onUpdate:modelValue":o[4]||=e=>n(w).disabled=e,"allow-edit":!1},null,8,[`modelValue`]),o[18]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[17]||=[t(`
          <EditableContent v-model="input" :allow-edit="false" />
  
          <script setup lang="ts">
          import { EditableContent } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref("Title");
          <\/script>
        `,-1)]]),_:1})])]),o[28]||=t(),i(`section`,null,[i(`h2`,null,u(a.$t(`form.label.size`)),1),o[25]||=t(),i(`div`,x,[i(`div`,S,[e(n(h),{modelValue:n(w).smallSize,"onUpdate:modelValue":o[5]||=e=>n(w).smallSize=e,size:`small`},null,8,[`modelValue`]),o[20]||=t(),e(n(h),{modelValue:n(w).mediumSize,"onUpdate:modelValue":o[6]||=e=>n(w).mediumSize=e,size:`medium`},null,8,[`modelValue`]),o[21]||=t(),e(n(h),{modelValue:n(w).largeSize,"onUpdate:modelValue":o[7]||=e=>n(w).largeSize=e,size:`large`},null,8,[`modelValue`])]),o[23]||=t(),e(n(h),{modelValue:n(w).fullSize,"onUpdate:modelValue":o[8]||=e=>n(w).fullSize=e,size:`full`},null,8,[`modelValue`]),o[24]||=t(),e(s,{language:`html-vue`},{default:l(()=>[...o[22]||=[t(`
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
        `,-1)]]),_:1})])]),o[29]||=t(),e(g,{"events-data":T.value,"props-data":E.value,"props-table-title":a.$t(`common.properties`,{value:`EditableContentProperties`})},null,8,[`events-data`,`props-data`,`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{C as default};