import{d as v,r as b,I as $,e as S,o as M,i as l,E as s,f as t,g as o,t as u,u as i,a5 as r,x as c}from"./index-ZtXTidSn.js";import{_ as w}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Cn0B06S8.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-DkX7SyiZ.js";import"./DzangolabVue3TanstackTable.es-BMrdeF5W.js";import"./DzangolabVue3Form.es-BLOpTug6.js";const C={class:"section-content"},k={class:"section-content"},z={class:"section-content"},I={class:"section-content"},N={class:"section-content"},T=v({__name:"Index",setup(D){const m=b(!0),p=[{description:"Emitted when the close icon is clicked.",name:"close",payload:"-"}],g=[{default:"false",description:"Displays a close icon if true, allowing the message to be dismissed.",prop:"enableClose",type:"Boolean"},{default:"-",description:"Icon to display alongside the message.",prop:"icon",type:"String"},{default:"-",description:"The message text to display in the component.",prop:"message",type:"String"}],d=[{description:"Slot for message. Overrides the message content.",name:"default"},{description:"Slot for custom icon. Overrides the `icon` prop if provided.",name:"icon"}];return(n,e)=>{const a=$("SshPre");return M(),S(y,{"sub-title":n.$t("ui.message.subtitle"),title:n.$t("ui.message.title"),class:"demo-message"},{toolbar:l(()=>[o(i(c),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=f=>n.$router.push("/ui"))},null,8,["label"])]),default:l(()=>[e[18]||(e[18]=s()),t("section",null,[t("h2",null,u(n.$t("ui.message.usage.basic")),1),e[4]||(e[4]=s()),t("div",C,[o(i(r),{message:n.$t("ui.message.contents.content1")},null,8,["message"]),e[3]||(e[3]=s()),o(a,{language:"html-vue"},{default:l(()=>e[2]||(e[2]=[s(`
          <template>
            <Message message="Season sale: Up to 50% off selected items!" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[19]||(e[19]=s()),t("section",null,[t("h2",null,u(n.$t("ui.message.usage.icons.icon")),1),e[7]||(e[7]=s()),t("div",k,[o(i(r),{message:n.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"]),e[6]||(e[6]=s()),o(a,{language:"html-vue"},{default:l(()=>e[5]||(e[5]=[s(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[20]||(e[20]=s()),t("section",null,[t("h2",null,u(n.$t("ui.message.usage.icons.iconSlot")),1),e[11]||(e[11]=s()),t("div",z,[o(i(r),{message:n.$t("ui.message.contents.content3")},{icon:l(()=>e[8]||(e[8]=[t("i",{class:"fa-regular fa-bell"},null,-1)])),_:1},8,["message"]),e[10]||(e[10]=s()),o(a,{language:"html-vue"},{default:l(()=>e[9]||(e[9]=[s(`
          <template>
            <Message
              message="New Year, New You: Start fresh with our services!"
            >
              <template #icon>
                <i class="fa-regular fa-bell" />
              </template>
            </Message>
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[21]||(e[21]=s()),t("section",null,[t("h2",null,u(n.$t("ui.message.usage.enableClose")),1),e[14]||(e[14]=s()),t("div",I,[o(i(r),{message:n.$t("ui.message.contents.content4"),icon:"pi pi-comments","enable-close":"",onClose:e[1]||(e[1]=f=>m.value=!1)},null,8,["message"]),e[13]||(e[13]=s()),o(a,{language:"html-vue"},{default:l(()=>e[12]||(e[12]=[s(`
          <template>
            <Message
              icon="pi pi-comments"
              message="We value your feedback: take our quick survey!"
              enable-close
              @close="showEnableCloseSection = false"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showEnableCloseSection = ref(true);
          <\/script>
        `)])),_:1})])]),e[22]||(e[22]=s()),t("section",null,[t("h2",null,u(n.$t("ui.message.usage.withI18n")),1),e[17]||(e[17]=s()),t("div",N,[o(i(r),{message:n.$t("ui.message.contents.content1")},null,8,["message"]),e[16]||(e[16]=s()),o(a,{language:"html-vue"},{default:l(()=>e[15]||(e[15]=[s(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[23]||(e[23]=s()),o(w,{"events-data":p,"props-data":g,"props-table-title":n.$t("common.properties",{value:"MessageProperties"}),"slots-data":d},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{T as default};
