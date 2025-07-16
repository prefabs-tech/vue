import{d as b,J as y,r as $,I as w,e as M,o as c,i as a,C as s,f as t,g as o,t as m,u as i,a6 as l,v as C}from"./index-DX2jmBYK.js";import{_ as S}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-DRsFQClr.js";import{_ as k}from"./UiPage.vue_vue_type_style_index_0_lang-DS06c_gF.js";import"./DzangolabVue3TanstackTable.es-C1vpQb9L.js";import"./DzangolabVue3Form.es-5hyG2a3n.js";const D={class:"section-content"},N={class:"section-content"},z={class:"section-content"},I={class:"section-content"},B={class:"section-content"},Y={class:"section-content"},J=b({__name:"Index",setup(E){const{t:u}=y(),p=$(!0),g=[{description:u("ui.message.documentation.eventDescription.close"),name:"close",payload:"-"}],d=[{default:"false",description:u("ui.message.documentation.propsDescription.enableClose"),prop:"enableClose",type:"Boolean"},{default:"-",description:u("ui.message.documentation.propsDescription.icon"),prop:"icon",type:"String"},{default:"-",description:u("ui.message.documentation.propsDescription.message"),prop:"message",type:"String"},{default:'"info"',description:u("ui.message.documentation.propsDescription.severity"),prop:"severity",type:'"danger" | "info" | "success" | "warning"'},{default:"true",description:u("ui.message.documentation.propsDescription.showIcon"),prop:"showIcon",type:"Boolean"}],f=[{description:u("ui.message.documentation.slotDescription.default"),name:"default"},{description:u("ui.message.documentation.slotDescription.icon"),name:"icon"}];return(n,e)=>{const r=w("SshPre");return c(),M(k,{"sub-title":n.$t("ui.message.subtitle"),title:n.$t("ui.message.title"),class:"demo-message"},{toolbar:a(()=>[o(i(C),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=v=>n.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e[24]||(e[24]=s()),t("section",null,[t("h2",null,m(n.$t("ui.message.usage.basic")),1),e[4]||(e[4]=s()),t("div",D,[o(i(l),{message:n.$t("ui.message.contents.content1")},null,8,["message"]),e[3]||(e[3]=s()),o(r,{language:"html-vue"},{default:a(()=>e[2]||(e[2]=[s(`
          <template>
            <Message message="Season sale: Up to 50% off selected items!" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[25]||(e[25]=s()),t("section",null,[t("h2",null,m(n.$t("ui.message.usage.icons.icon")),1),e[7]||(e[7]=s()),t("div",N,[o(i(l),{message:n.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"]),e[6]||(e[6]=s()),o(r,{language:"html-vue"},{default:a(()=>e[5]||(e[5]=[s(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[26]||(e[26]=s()),t("section",null,[t("h2",null,m(n.$t("ui.message.usage.icons.iconSlot")),1),e[11]||(e[11]=s()),t("div",z,[o(i(l),{message:n.$t("ui.message.contents.content3")},{icon:a(()=>e[8]||(e[8]=[t("i",{class:"fa-regular fa-bell"},null,-1)])),_:1},8,["message"]),e[10]||(e[10]=s()),o(r,{language:"html-vue"},{default:a(()=>e[9]||(e[9]=[s(`
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
        `)])),_:1})])]),e[27]||(e[27]=s()),t("section",null,[t("h2",null,m(n.$t("ui.message.usage.enableClose")),1),e[14]||(e[14]=s()),t("div",I,[o(i(l),{message:n.$t("ui.message.contents.content4"),"show-icon":!1,"enable-close":"",onClose:e[1]||(e[1]=v=>p.value=!1)},null,8,["message"]),e[13]||(e[13]=s()),o(r,{language:"html-vue"},{default:a(()=>e[12]||(e[12]=[s(`
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
        `)])),_:1})])]),e[28]||(e[28]=s()),t("section",null,[t("h2",null,m(n.$t("ui.message.usage.withI18n")),1),e[17]||(e[17]=s()),t("div",B,[o(i(l),{message:n.$t("ui.message.contents.content1")},null,8,["message"]),e[16]||(e[16]=s()),o(r,{language:"html-vue"},{default:a(()=>e[15]||(e[15]=[s(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[29]||(e[29]=s()),t("section",null,[t("h2",null,m(n.$t("ui.message.usage.severity")),1),e[23]||(e[23]=s()),t("div",Y,[o(i(l),{message:n.$t("ui.message.contents.content2"),severity:"info"},null,8,["message"]),e[19]||(e[19]=s()),o(i(l),{message:n.$t("ui.message.contents.content3"),severity:"success"},null,8,["message"]),e[20]||(e[20]=s()),o(i(l),{message:n.$t("ui.message.contents.content4"),severity:"danger"},null,8,["message"]),e[21]||(e[21]=s()),o(i(l),{message:n.$t("ui.message.contents.content5"),severity:"warning"},null,8,["message"]),e[22]||(e[22]=s()),o(r,{language:"html-vue"},{default:a(()=>e[18]||(e[18]=[s(`
          <template>
            <Message
              message="New features just launched! Check them out!"
              severity="info"
            />
            <Message
              :message="New Year, New You: Start fresh with our services!"
              severity="success"
            />
            <Message
              :message="We value your feedback: take our quick survey!"
              severity="danger"
            />
            <Message
              :message="Warning: Limited time only! Sale ends soon!"
              severity="warning"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[30]||(e[30]=s()),o(S,{"events-data":g,"props-data":d,"props-table-title":n.$t("common.properties",{value:"MessageProperties"}),"slots-data":f},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{J as default};
