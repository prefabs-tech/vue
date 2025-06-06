import{d as p,r as d,K as f,f as v,o as b,i as l,E as s,g as n,t as u,h as o,u as a,a5 as m,x as $}from"./index-DJ2A_cv8.js";import{_ as M}from"./UiPage.vue_vue_type_style_index_0_lang-BlpEmk3X.js";const C={class:"section-content"},w={class:"section-content"},S={class:"section-content"},k={class:"section-content"},z={class:"section-content"},I=p({__name:"Index",setup(N){const r=d(!0);return(t,e)=>{const i=f("SshPre");return b(),v(M,{title:t.$t("ui.message.title"),class:"demo-message"},{toolbar:l(()=>[o(a($),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=g=>t.$router.push("/ui"))},null,8,["label"])]),default:l(()=>[e[18]||(e[18]=s()),n("section",null,[n("h2",null,u(t.$t("ui.message.usage.basic")),1),e[4]||(e[4]=s()),n("div",C,[o(a(m),{message:t.$t("ui.message.contents.content1")},null,8,["message"]),e[3]||(e[3]=s()),o(i,{language:"html-vue"},{default:l(()=>e[2]||(e[2]=[s(`
          <template>
            <Message message="Season sale: Up to 50% off selected items!" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[19]||(e[19]=s()),n("section",null,[n("h2",null,u(t.$t("ui.message.usage.icons.icon")),1),e[7]||(e[7]=s()),n("div",w,[o(a(m),{message:t.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"]),e[6]||(e[6]=s()),o(i,{language:"html-vue"},{default:l(()=>e[5]||(e[5]=[s(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),e[20]||(e[20]=s()),n("section",null,[n("h2",null,u(t.$t("ui.message.usage.icons.iconSlot")),1),e[11]||(e[11]=s()),n("div",S,[o(a(m),{message:t.$t("ui.message.contents.content3")},{icon:l(()=>e[8]||(e[8]=[n("i",{class:"fa-regular fa-bell"},null,-1)])),_:1},8,["message"]),e[10]||(e[10]=s()),o(i,{language:"html-vue"},{default:l(()=>e[9]||(e[9]=[s(`
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
        `)])),_:1})])]),e[21]||(e[21]=s()),n("section",null,[n("h2",null,u(t.$t("ui.message.usage.enableClose")),1),e[14]||(e[14]=s()),n("div",k,[o(a(m),{message:t.$t("ui.message.contents.content4"),icon:"pi pi-comments","enable-close":"",onClose:e[1]||(e[1]=g=>r.value=!1)},null,8,["message"]),e[13]||(e[13]=s()),o(i,{language:"html-vue"},{default:l(()=>e[12]||(e[12]=[s(`
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
        `)])),_:1})])]),e[22]||(e[22]=s()),n("section",null,[n("h2",null,u(t.$t("ui.message.usage.withI18n")),1),e[17]||(e[17]=s()),n("div",z,[o(a(m),{message:t.$t("ui.message.contents.content1")},null,8,["message"]),e[16]||(e[16]=s()),o(i,{language:"html-vue"},{default:l(()=>e[15]||(e[15]=[s(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{I as default};
