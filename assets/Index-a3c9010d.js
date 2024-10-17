import{d as f,e as v,r as g,o as r,c as p,w as a,a as s,t as l,f as e,g as t,h as i,aa as u,E as _}from"./index-66a9a14b.js";const h={class:"section-content"},M={class:"section-content"},b={class:"section-content"},y=s("i",{class:"pi pi-bell"},null,-1),$={class:"section-content"},C={class:"section-content"},k={class:"section-content"},S=f({__name:"Index",setup(N){const c=v(!0);return(n,m)=>{const o=g("SshPre"),d=g("Page");return r(),p(d,{title:n.$t("ui.message.title"),class:"demo-message"},{default:a(()=>[s("section",null,[s("h2",null,l(n.$t("ui.message.usage.basic")),1),e(),s("div",h,[t(o,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message message="Season sale: Up to 50% off selected items!" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content1")},null,8,["message"])])]),e(),s("section",null,[s("h2",null,l(n.$t("ui.message.usage.icons.iconName")),1),e(),s("div",M,[t(o,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message
              message="New features just launched! Check them out!"
              icon="pi pi-android"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"])])]),e(),s("section",null,[s("h2",null,l(n.$t("ui.message.usage.icons.iconElement")),1),e(),s("div",b,[t(o,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message
              message="New Year, New You: Start fresh with our services!"
              icon="true"
            >
              <template #icon>
                <i class="pi pi-bell" />
              </template>
            </Message>
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content3"),icon:"true"},{icon:a(()=>[y]),_:1},8,["message"])])]),e(),s("section",null,[s("h2",null,l(n.$t("ui.message.usage.enableClose")),1),e(),s("div",$,[t(o,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message
              v-if="displayMessage"
              message="We value your feedback: take our quick survey!"
              icon="pi pi-comments"
              enable-close
              @close="onClose()"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const displayMessage = ref(true);

            const onClose = () => {
              displayMessage.value = false;
            }
          <\/script>
        `)]),_:1}),e(),c.value?(r(),p(i(u),{key:0,message:n.$t("ui.message.contents.content4"),icon:"pi pi-comments","enable-close":"",onClose:m[0]||(m[0]=w=>c.value=!1)},null,8,["message"])):_("",!0)])]),e(),s("section",null,[s("h2",null,l(n.$t("ui.message.usage.withI18n")),1),e(),s("div",C,[t(o,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content1")},null,8,["message"])])]),e(),s("section",null,[s("h2",null,l(n.$t("ui.message.usage.customStyle")),1),e(),s("div",k,[t(o,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message
              class="custom-message"
              message="Warning: Limited time only! Sale ends soon!"
              icon="pi pi-exclamation-triangle"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>

          <style lang="css">
            .custom-message {
              --_background-color: #faedc4;
              --_border-color: #816204;
              --_message-color: #816204;
            }
          </style>
        `)]),_:1}),e(),t(i(u),{class:"custom-message",message:n.$t("ui.message.contents.content5"),icon:"pi pi-exclamation-triangle"},null,8,["message"])])])]),_:1},8,["title"])}}});export{S as default};
