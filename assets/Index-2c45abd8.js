import{d as f,e as h,r as c,o as r,c as _,w as a,f as t,g as e,t as o,a as s,h as i,aa as u,D as v,E as b}from"./index-d455476b.js";const $={class:"section-content"},k={class:"section-content"},w={class:"section-content"},C=s("i",{class:"fa-regular fa-bell"},null,-1),M={key:0},S={class:"section-content"},N={class:"section-content"},I=f({__name:"Index",setup(y){const m=h(!0);return(n,g)=>{const p=c("router-link"),l=c("SshPre"),d=c("Page");return r(),_(d,{title:n.$t("ui.message.title"),class:"demo-message"},{toolbar:a(()=>[t(p,{to:{name:"ui"},class:"back"},{default:a(()=>[e(o(n.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.basic")),1),e(),s("div",$,[t(l,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"])])]),e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.icons.iconSlot")),1),e(),s("div",w,[t(l,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content3")},{icon:a(()=>[C]),_:1},8,["message"])])]),e(),m.value?(r(),v("section",M,[s("h2",null,o(n.$t("ui.message.usage.enableClose")),1),e(),s("div",S,[t(l,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content4"),icon:"pi pi-comments","enable-close":"",onClose:g[0]||(g[0]=z=>m.value=!1)},null,8,["message"])])])):b("",!0),e(),s("section",null,[s("h2",null,o(n.$t("ui.message.usage.withI18n")),1),e(),s("div",N,[t(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content1")},null,8,["message"])])])]),_:1},8,["title"])}}});export{I as default};
