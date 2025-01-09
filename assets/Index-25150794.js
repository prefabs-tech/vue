import{d,j as f,K as r,o as g,c as _,w as a,L as t,C as e,M as o,f as s,E as i,aB as u,a as h,g as v}from"./index-8e1c3ab6-8617714e.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-773e1d70.js";const $={class:"section-content"},k={class:"section-content"},C={class:"section-content"},M=s("i",{class:"fa-regular fa-bell"},null,-1),w={key:0},S={class:"section-content"},N={class:"section-content"},I=d({__name:"Index",setup(y){const c=f(!0);return(n,m)=>{const p=r("router-link"),l=r("SshPre");return g(),_(b,{title:n.$t("ui.message.title"),class:"demo-message"},{toolbar:a(()=>[t(p,{to:{name:"ui"},class:"back"},{default:a(()=>[e(o(n.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.basic")),1),e(),s("div",$,[t(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message message="Season sale: Up to 50% off selected items!" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content1")},null,8,["message"])])]),e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.icons.icon")),1),e(),s("div",k,[t(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"])])]),e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.icons.iconSlot")),1),e(),s("div",C,[t(l,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content3")},{icon:a(()=>[M]),_:1},8,["message"])])]),e(),c.value?(g(),h("section",w,[s("h2",null,o(n.$t("ui.message.usage.enableClose")),1),e(),s("div",S,[t(l,{language:"html-vue"},{default:a(()=>[e(`
          <template v-if="showEnableCloseSection">
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
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content4"),icon:"pi pi-comments","enable-close":"",onClose:m[0]||(m[0]=z=>c.value=!1)},null,8,["message"])])])):v("",!0),e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.withI18n")),1),e(),s("div",N,[t(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content1")},null,8,["message"])])])]),_:1},8,["title"])}}});export{I as default};
