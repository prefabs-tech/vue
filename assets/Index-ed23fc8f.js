import{d as p,j as d,K as m,o as f,c as _,w as a,L as t,C as e,M as o,f as s,E as i,aC as u}from"./index-6962cf42-46e4151e.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-081924df.js";const v={class:"section-content"},b={class:"section-content"},$={class:"section-content"},M=s("i",{class:"fa-regular fa-bell"},null,-1),C={class:"section-content"},k={class:"section-content"},y=p({__name:"Index",setup(w){const g=d(!0);return(n,c)=>{const r=m("router-link"),l=m("SshPre");return f(),_(h,{title:n.$t("ui.message.title"),class:"demo-message"},{toolbar:a(()=>[t(r,{to:{name:"ui"},class:"back"},{default:a(()=>[e(o(n.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.basic")),1),e(),s("div",v,[t(i(u),{message:n.$t("ui.message.contents.content1")},null,8,["message"]),e(),t(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message message="Season sale: Up to 50% off selected items!" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.icons.icon")),1),e(),s("div",b,[t(i(u),{message:n.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"]),e(),t(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.icons.iconSlot")),1),e(),s("div",$,[t(i(u),{message:n.$t("ui.message.contents.content3")},{icon:a(()=>[M]),_:1},8,["message"]),e(),t(l,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.enableClose")),1),e(),s("div",C,[t(i(u),{message:n.$t("ui.message.contents.content4"),icon:"pi pi-comments","enable-close":"",onClose:c[0]||(c[0]=S=>g.value=!1)},null,8,["message"]),e(),t(l,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.withI18n")),1),e(),s("div",k,[t(i(u),{message:n.$t("ui.message.contents.content1")},null,8,["message"]),e(),t(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{y as default};
