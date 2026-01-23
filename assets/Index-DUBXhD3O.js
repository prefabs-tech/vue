import{d as f,I as v,J as c,e as y,o as w,i as u,f as n,B as s,h as o,t as m,u as i,T as a}from"./index-DoIY9s04.js";import{_ as b}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BduynALj.js";import{_ as $}from"./UiPage.vue_vue_type_style_index_0_lang-DrtmNUAy.js";import"./PrefabsTechVue3TanstackTable.es-CRmWjXeO.js";import"./PrefabsTechVue3Form.es-DfEd4Dds.js";const M={class:"section-content"},k={class:"section-content"},D={class:"section-content"},S={class:"section-content"},C={class:"section-content"},I={class:"section-content"},q=f({__name:"Index",setup(N){const{t:r}=v(),p=[{description:r("ui.message.documentation.eventDescription.close"),name:"close",payload:"-"}],g=[{default:"true",description:r("ui.message.documentation.propsDescription.enableClose"),prop:"enableClose",type:"Boolean"},{default:"-",description:r("ui.message.documentation.propsDescription.icon"),prop:"icon",type:"String"},{default:"-",description:r("ui.message.documentation.propsDescription.message"),prop:"message",type:"String | Array<string>"},{default:'"info"',description:r("ui.message.documentation.propsDescription.severity"),prop:"severity",type:'"danger" | "info" | "success" | "tip" | "warning"'},{default:"true",description:r("ui.message.documentation.propsDescription.showIcon"),prop:"showIcon",type:"Boolean"}],d=[{description:r("ui.message.documentation.slotDescription.default"),name:"default"},{description:r("ui.message.documentation.slotDescription.icon"),name:"icon"}];return(t,e)=>{const l=c("SshPre");return w(),y($,{subtitle:t.$t("ui.message.subtitle"),title:t.$t("ui.message.title"),class:"demo-message"},{default:u(()=>[n("section",null,[n("h2",null,m(t.$t("ui.message.usage.basic")),1),e[6]||(e[6]=s()),n("div",M,[o(i(a),{message:t.$t("ui.message.contents.info"),severity:"info"},null,8,["message"]),e[1]||(e[1]=s()),o(i(a),{message:t.$t("ui.message.contents.success"),severity:"success"},null,8,["message"]),e[2]||(e[2]=s()),o(i(a),{message:t.$t("ui.message.contents.danger"),severity:"danger"},null,8,["message"]),e[3]||(e[3]=s()),o(i(a),{message:t.$t("ui.message.contents.warning"),severity:"warning"},null,8,["message"]),e[4]||(e[4]=s()),o(i(a),{message:t.$t("ui.message.contents.tip"),severity:"tip"},null,8,["message"]),e[5]||(e[5]=s()),o(l,{language:"html-vue"},{default:u(()=>e[0]||(e[0]=[s(`
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
        `)])),_:1})])]),e[23]||(e[23]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.enableClose")),1),e[9]||(e[9]=s()),n("div",k,[o(i(a),{"enable-close":!1,message:t.$t("ui.message.contents.content4"),"show-icon":!1},null,8,["message"]),e[8]||(e[8]=s()),o(l,{language:"html-vue"},{default:u(()=>e[7]||(e[7]=[s(`
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
        `)])),_:1})])]),e[24]||(e[24]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.withI18n")),1),e[12]||(e[12]=s()),n("div",D,[o(i(a),{message:t.$t("ui.message.contents.content2")},null,8,["message"]),e[11]||(e[11]=s()),o(l,{language:"html-vue"},{default:u(()=>e[10]||(e[10]=[s(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
            import { useI18n } from "@prefabs.tech/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),e[25]||(e[25]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.icons.icon")),1),e[15]||(e[15]=s()),n("div",S,[o(i(a),{message:t.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"]),e[14]||(e[14]=s()),o(l,{language:"html-vue"},{default:u(()=>e[13]||(e[13]=[s(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[26]||(e[26]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.icons.iconSlot")),1),e[19]||(e[19]=s()),n("div",C,[o(i(a),{message:t.$t("ui.message.contents.content3")},{icon:u(()=>e[16]||(e[16]=[n("i",{class:"fa-regular fa-bell"},null,-1)])),_:1},8,["message"]),e[18]||(e[18]=s()),o(l,{language:"html-vue"},{default:u(()=>e[17]||(e[17]=[s(`
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
        `)])),_:1})])]),e[27]||(e[27]=s()),n("section",null,[n("h2",null,m(t.$t("ui.message.usage.messageArray")),1),e[22]||(e[22]=s()),n("div",I,[o(i(a),{message:[t.$t("ui.message.contents.content1"),t.$t("ui.message.contents.content2"),t.$t("ui.message.contents.content3"),t.$t("ui.message.contents.content4")]},null,8,["message"]),e[21]||(e[21]=s()),o(l,{language:"html-vue"},{default:u(()=>e[20]||(e[20]=[s(`
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
        `)])),_:1})])]),e[28]||(e[28]=s()),o(b,{"events-data":p,"props-data":g,"props-table-title":t.$t("common.properties",{value:"MessageProperties"}),"slots-data":d},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{q as default};
