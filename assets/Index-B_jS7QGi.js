import{d as v,r as b,I as y,e as $,o as w,i as a,C as s,f as n,g as o,t as r,u as i,a6 as l,v as M}from"./index-B3ldsAXT.js";import{_ as S}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CmUK5edk.js";import{_ as k}from"./UiPage.vue_vue_type_style_index_0_lang-CGZ_KFnb.js";import"./DzangolabVue3TanstackTable.es-gJoIB9kA.js";import"./DzangolabVue3Form.es-WWxDZ8iF.js";const C={class:"section-content"},c={class:"section-content"},N={class:"section-content"},z={class:"section-content"},D={class:"section-content"},I={class:"section-content"},W=v({__name:"Index",setup(B){const m=b(!0),g=[{description:"Emitted when the close icon is clicked.",name:"close",payload:"-"}],p=[{default:"false",description:"Displays a close icon if true, allowing the message to be dismissed.",prop:"enableClose",type:"Boolean"},{default:"-",description:"Icon to display alongside the message.",prop:"icon",type:"String"},{default:"-",description:"The message text to display in the component.",prop:"message",type:"String"},{default:'"info"',description:"Defines the message background color style.",prop:"severity",type:'"danger" | "info" | "success" | "warning"'},{default:"true",description:"Displays a icon before message if true.",prop:"showIcon",type:"Boolean"}],d=[{description:"Slot for message. Overrides the message content.",name:"default"},{description:"Slot for custom icon. Overrides the `icon` prop if provided.",name:"icon"}];return(t,e)=>{const u=y("SshPre");return w(),$(k,{"sub-title":t.$t("ui.message.subtitle"),title:t.$t("ui.message.title"),class:"demo-message"},{toolbar:a(()=>[o(i(M),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=f=>t.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e[24]||(e[24]=s()),n("section",null,[n("h2",null,r(t.$t("ui.message.usage.basic")),1),e[4]||(e[4]=s()),n("div",C,[o(i(l),{message:t.$t("ui.message.contents.content1")},null,8,["message"]),e[3]||(e[3]=s()),o(u,{language:"html-vue"},{default:a(()=>e[2]||(e[2]=[s(`
          <template>
            <Message message="Season sale: Up to 50% off selected items!" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[25]||(e[25]=s()),n("section",null,[n("h2",null,r(t.$t("ui.message.usage.icons.icon")),1),e[7]||(e[7]=s()),n("div",c,[o(i(l),{message:t.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"]),e[6]||(e[6]=s()),o(u,{language:"html-vue"},{default:a(()=>e[5]||(e[5]=[s(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[26]||(e[26]=s()),n("section",null,[n("h2",null,r(t.$t("ui.message.usage.icons.iconSlot")),1),e[11]||(e[11]=s()),n("div",N,[o(i(l),{message:t.$t("ui.message.contents.content3")},{icon:a(()=>e[8]||(e[8]=[n("i",{class:"fa-regular fa-bell"},null,-1)])),_:1},8,["message"]),e[10]||(e[10]=s()),o(u,{language:"html-vue"},{default:a(()=>e[9]||(e[9]=[s(`
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
        `)])),_:1})])]),e[27]||(e[27]=s()),n("section",null,[n("h2",null,r(t.$t("ui.message.usage.enableClose")),1),e[14]||(e[14]=s()),n("div",z,[o(i(l),{message:t.$t("ui.message.contents.content4"),"show-icon":!1,"enable-close":"",onClose:e[1]||(e[1]=f=>m.value=!1)},null,8,["message"]),e[13]||(e[13]=s()),o(u,{language:"html-vue"},{default:a(()=>e[12]||(e[12]=[s(`
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
        `)])),_:1})])]),e[28]||(e[28]=s()),n("section",null,[n("h2",null,r(t.$t("ui.message.usage.withI18n")),1),e[17]||(e[17]=s()),n("div",D,[o(i(l),{message:t.$t("ui.message.contents.content1")},null,8,["message"]),e[16]||(e[16]=s()),o(u,{language:"html-vue"},{default:a(()=>e[15]||(e[15]=[s(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[29]||(e[29]=s()),n("section",null,[n("h2",null,r(t.$t("ui.message.usage.severity")),1),e[23]||(e[23]=s()),n("div",I,[o(i(l),{message:t.$t("ui.message.contents.content2"),severity:"info"},null,8,["message"]),e[19]||(e[19]=s()),o(i(l),{message:t.$t("ui.message.contents.content3"),severity:"success"},null,8,["message"]),e[20]||(e[20]=s()),o(i(l),{message:t.$t("ui.message.contents.content4"),severity:"danger"},null,8,["message"]),e[21]||(e[21]=s()),o(i(l),{message:t.$t("ui.message.contents.content5"),severity:"warning"},null,8,["message"]),e[22]||(e[22]=s()),o(u,{language:"html-vue"},{default:a(()=>e[18]||(e[18]=[s(`
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
        `)])),_:1})])]),e[30]||(e[30]=s()),o(S,{"events-data":g,"props-data":p,"props-table-title":t.$t("common.properties",{value:"MessageProperties"}),"slots-data":d},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{W as default};
