import{d as f,I as v,J as y,e as c,o as b,j as r,C as s,f as n,h as o,t as m,u as i,S as a,v as w}from"./index-DZBiIt1T.js";import{_ as $}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CiXcespY.js";import{_ as M}from"./UiPage.vue_vue_type_style_index_0_lang-Bp16KHLC.js";import"./PrefabsTechVue3TanstackTable.es-DI0udD31.js";import"./PrefabsTechVue3Form.es-CSd3ZVa3.js";const k={class:"section-content"},D={class:"section-content"},S={class:"section-content"},C={class:"section-content"},I={class:"section-content"},N={class:"section-content"},W=f({__name:"Index",setup(Y){const{t:l}=v(),p=[{description:l("ui.message.documentation.eventDescription.close"),name:"close",payload:"-"}],g=[{default:"true",description:l("ui.message.documentation.propsDescription.enableClose"),prop:"enableClose",type:"Boolean"},{default:"-",description:l("ui.message.documentation.propsDescription.icon"),prop:"icon",type:"String"},{default:"-",description:l("ui.message.documentation.propsDescription.message"),prop:"message",type:"String | Array<string>"},{default:'"info"',description:l("ui.message.documentation.propsDescription.severity"),prop:"severity",type:'"danger" | "info" | "success" | "tip" | "warning"'},{default:"true",description:l("ui.message.documentation.propsDescription.showIcon"),prop:"showIcon",type:"Boolean"}],d=[{description:l("ui.message.documentation.slotDescription.default"),name:"default"},{description:l("ui.message.documentation.slotDescription.icon"),name:"icon"}];return(t,e)=>{const u=y("SshPre");return b(),c(M,{"sub-title":t.$t("ui.message.subtitle"),title:t.$t("ui.message.title"),class:"demo-message"},{toolbar:r(()=>[o(i(w),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=B=>t.$router.push("/ui"))},null,8,["label"])]),default:r(()=>[e[24]||(e[24]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.basic")),1),e[7]||(e[7]=s()),n("div",k,[o(i(a),{message:t.$t("ui.message.contents.info"),severity:"info"},null,8,["message"]),e[2]||(e[2]=s()),o(i(a),{message:t.$t("ui.message.contents.success"),severity:"success"},null,8,["message"]),e[3]||(e[3]=s()),o(i(a),{message:t.$t("ui.message.contents.danger"),severity:"danger"},null,8,["message"]),e[4]||(e[4]=s()),o(i(a),{message:t.$t("ui.message.contents.warning"),severity:"warning"},null,8,["message"]),e[5]||(e[5]=s()),o(i(a),{message:t.$t("ui.message.contents.tip"),severity:"tip"},null,8,["message"]),e[6]||(e[6]=s()),o(u,{language:"html-vue"},{default:r(()=>e[1]||(e[1]=[s(`
          <template>
            <Message
              message="Your profile has been updated. Changes may take a few minutes to appear across all devices."
              severity="info"
            />
            <Message
              :message="Payment received! Your order is now being processed and you’ll receive a confirmation email shortly."
              severity="success"
            />
            <Message
              :message="Invalid credentials. Please check your email or password and try again."
              severity="danger"
            />
            <Message
              :message="Your session is about to expire in 2 minutes. Save your work to avoid losing changes."
              severity="warning"
            />
            <Message
              :message="Use a password with at least 8 characters to make your password stronger."
              severity="tip"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[25]||(e[25]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.enableClose")),1),e[10]||(e[10]=s()),n("div",D,[o(i(a),{"enable-close":!1,message:t.$t("ui.message.contents.content4"),"show-icon":!1},null,8,["message"]),e[9]||(e[9]=s()),o(u,{language:"html-vue"},{default:r(()=>e[8]||(e[8]=[s(`
          <template>
            <Message
              :enable-close="false"
              :show-icon="false"
              message="We value your feedback: take our quick survey!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";
          <\/script>
        `)])),_:1})])]),e[26]||(e[26]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.withI18n")),1),e[13]||(e[13]=s()),n("div",S,[o(i(a),{message:t.$t("ui.message.contents.content2")},null,8,["message"]),e[12]||(e[12]=s()),o(u,{language:"html-vue"},{default:r(()=>e[11]||(e[11]=[s(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
            import { useI18n } from "@prefabs.tech/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[27]||(e[27]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.icons.icon")),1),e[16]||(e[16]=s()),n("div",C,[o(i(a),{message:t.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"]),e[15]||(e[15]=s()),o(u,{language:"html-vue"},{default:r(()=>e[14]||(e[14]=[s(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[28]||(e[28]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.icons.iconSlot")),1),e[20]||(e[20]=s()),n("div",I,[o(i(a),{message:t.$t("ui.message.contents.content3")},{icon:r(()=>e[17]||(e[17]=[n("i",{class:"fa-regular fa-bell"},null,-1)])),_:1},8,["message"]),e[19]||(e[19]=s()),o(u,{language:"html-vue"},{default:r(()=>e[18]||(e[18]=[s(`
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
        `)])),_:1})])]),e[29]||(e[29]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.messageArray")),1),e[23]||(e[23]=s()),n("div",N,[o(i(a),{message:[t.$t("ui.message.contents.content1"),t.$t("ui.message.contents.content2"),t.$t("ui.message.contents.content3"),t.$t("ui.message.contents.content4")]},null,8,["message"]),e[22]||(e[22]=s()),o(u,{language:"html-vue"},{default:r(()=>e[21]||(e[21]=[s(`
          <template>
            <Message
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
        `)])),_:1})])]),e[30]||(e[30]=s()),o($,{"events-data":p,"props-data":g,"props-table-title":t.$t("common.properties",{value:"MessageProperties"}),"slots-data":d},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{W as default};
