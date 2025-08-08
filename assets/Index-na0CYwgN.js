import{d as b,E as c,r as y,H as $,e as w,o as M,j as l,B as s,f as n,h as o,t as m,u as i,a6 as a,v as k}from"./index-CLuekKiD.js";import{_ as S}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-DymaumAE.js";import{_ as C}from"./UiPage.vue_vue_type_style_index_0_lang-B9pS0-jz.js";import"./PrefabsTechVue3TanstackTable.es-BN7AeWfP.js";import"./PrefabsTechVue3Form.es-Bo0L2q17.js";const N={class:"section-content"},D={class:"section-content"},Y={class:"section-content"},I={class:"section-content"},B={class:"section-content"},j={class:"section-content"},E={class:"section-content"},H=b({__name:"Index",setup(W){const{t:u}=c(),p=y(!0),g=[{description:u("ui.message.documentation.eventDescription.close"),name:"close",payload:"-"}],d=[{default:"false",description:u("ui.message.documentation.propsDescription.enableClose"),prop:"enableClose",type:"Boolean"},{default:"-",description:u("ui.message.documentation.propsDescription.icon"),prop:"icon",type:"String"},{default:"-",description:u("ui.message.documentation.propsDescription.message"),prop:"message",type:"String | Array<string>"},{default:'"info"',description:u("ui.message.documentation.propsDescription.severity"),prop:"severity",type:'"danger" | "info" | "success" | "warning"'},{default:"true",description:u("ui.message.documentation.propsDescription.showIcon"),prop:"showIcon",type:"Boolean"}],f=[{description:u("ui.message.documentation.slotDescription.default"),name:"default"},{description:u("ui.message.documentation.slotDescription.icon"),name:"icon"}];return(t,e)=>{const r=$("SshPre");return M(),w(C,{"sub-title":t.$t("ui.message.subtitle"),title:t.$t("ui.message.title"),class:"demo-message"},{toolbar:l(()=>[o(i(k),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=v=>t.$router.push("/ui"))},null,8,["label"])]),default:l(()=>[e[28]||(e[28]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.basic")),1),e[4]||(e[4]=s()),n("div",N,[o(i(a),{message:t.$t("ui.message.contents.content3")},null,8,["message"]),e[3]||(e[3]=s()),o(r,{language:"html-vue"},{default:l(()=>e[2]||(e[2]=[s(`
          <template>
            <Message message="New Year, New You: Start fresh with our services!" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[29]||(e[29]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.severity")),1),e[11]||(e[11]=s()),n("div",D,[o(i(a),{message:t.$t("ui.message.contents.content2"),"enable-close":"",severity:"info"},null,8,["message"]),e[6]||(e[6]=s()),o(i(a),{message:t.$t("ui.message.contents.content3"),"enable-close":"",severity:"success"},null,8,["message"]),e[7]||(e[7]=s()),o(i(a),{message:t.$t("ui.message.contents.content4"),"enable-close":"",severity:"danger"},null,8,["message"]),e[8]||(e[8]=s()),o(i(a),{message:t.$t("ui.message.contents.content5"),"enable-close":"",severity:"warning"},null,8,["message"]),e[9]||(e[9]=s()),o(i(a),{message:t.$t("ui.message.contents.content4"),"enable-close":"",severity:"tip"},null,8,["message"]),e[10]||(e[10]=s()),o(r,{language:"html-vue"},{default:l(()=>e[5]||(e[5]=[s(`
          <template>
            <Message
              message="New features just launched! Check them out!"
              enable-close
              severity="info"
            />
            <Message
              :message="New Year, New You: Start fresh with our services!"
              enable-close
              severity="success"
            />
            <Message
              :message="We value your feedback: take our quick survey!"
              enable-close
              severity="danger"
            />
            <Message
              :message="Warning: Limited time only! Sale ends soon!"
              enable-close
              severity="warning"
            />
            <Message
              :message="We value your feedback: take our quick survey!"
              enable-close
              severity="tip"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[30]||(e[30]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.enableClose")),1),e[14]||(e[14]=s()),n("div",Y,[o(i(a),{message:t.$t("ui.message.contents.content4"),"show-icon":!1,"enable-close":"",onClose:e[1]||(e[1]=v=>p.value=!1)},null,8,["message"]),e[13]||(e[13]=s()),o(r,{language:"html-vue"},{default:l(()=>e[12]||(e[12]=[s(`
          <template>
            <Message
              :show-icon="false"
              message="We value your feedback: take our quick survey!"
              enable-close
              @close="showEnableCloseSection = false"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const showEnableCloseSection = ref(true);
          <\/script>
        `)])),_:1})])]),e[31]||(e[31]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.withI18n")),1),e[17]||(e[17]=s()),n("div",I,[o(i(a),{message:t.$t("ui.message.contents.content2")},null,8,["message"]),e[16]||(e[16]=s()),o(r,{language:"html-vue"},{default:l(()=>e[15]||(e[15]=[s(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
            import { useI18n } from "@prefabs.tech/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[32]||(e[32]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.icons.icon")),1),e[20]||(e[20]=s()),n("div",B,[o(i(a),{message:t.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"]),e[19]||(e[19]=s()),o(r,{language:"html-vue"},{default:l(()=>e[18]||(e[18]=[s(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[33]||(e[33]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.icons.iconSlot")),1),e[24]||(e[24]=s()),n("div",j,[o(i(a),{message:t.$t("ui.message.contents.content3")},{icon:l(()=>e[21]||(e[21]=[n("i",{class:"fa-regular fa-bell"},null,-1)])),_:1},8,["message"]),e[23]||(e[23]=s()),o(r,{language:"html-vue"},{default:l(()=>e[22]||(e[22]=[s(`
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
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[34]||(e[34]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.messageArray")),1),e[27]||(e[27]=s()),n("div",E,[o(i(a),{message:[t.$t("ui.message.contents.content1"),t.$t("ui.message.contents.content2"),t.$t("ui.message.contents.content3"),t.$t("ui.message.contents.content4")],"enable-close":""},null,8,["message"]),e[26]||(e[26]=s()),o(r,{language:"html-vue"},{default:l(()=>e[25]||(e[25]=[s(`
          <template>
            <Message
              enable-close
              message="[
                'Season Sale: Enjoy massive discounts with up to 50% off on a wide range of selected items — from fashion to electronics, don’t miss out on these limited-time offers!',
                'New features just launched! Check them out!',
                'New Year, New You: Start fresh with our services!',
                'We value your feedback: take our quick survey!',
              ]"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[35]||(e[35]=s()),o(S,{"events-data":g,"props-data":d,"props-table-title":t.$t("common.properties",{value:"MessageProperties"}),"slots-data":f},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{H as default};
