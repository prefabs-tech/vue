import{d,e as f,r as g,o as r,c as h,w as a,a as s,t as l,f as e,g as t,h as i,aa as u,D as v,E as _}from"./index-3fcf3b87.js";const b={class:"section-content"},$={class:"section-content"},w={class:"section-content"},C=s("i",{class:"fa-regular fa-bell"},null,-1),M={key:0},S={class:"section-content"},k={class:"section-content"},E=d({__name:"Index",setup(N){const c=f(!0);return(n,m)=>{const o=g("SshPre"),p=g("Page");return r(),h(p,{title:n.$t("ui.message.title"),class:"demo-message"},{default:a(()=>[s("section",null,[s("h2",null,l(n.$t("ui.message.usage.basic")),1),e(),s("div",b,[t(o,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message message="Season sale: Up to 50% off selected items!" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content1")},null,8,["message"])])]),e(),s("section",null,[s("h2",null,l(n.$t("ui.message.usage.icons.icon")),1),e(),s("div",$,[t(o,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"])])]),e(),s("section",null,[s("h2",null,l(n.$t("ui.message.usage.icons.iconSlot")),1),e(),s("div",w,[t(o,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content3")},{icon:a(()=>[C]),_:1},8,["message"])])]),e(),c.value?(r(),v("section",M,[s("h2",null,l(n.$t("ui.message.usage.enableClose")),1),e(),s("div",S,[t(o,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content4"),icon:"pi pi-comments","enable-close":"",onClose:m[0]||(m[0]=y=>c.value=!1)},null,8,["message"])])])):_("",!0),e(),s("section",null,[s("h2",null,l(n.$t("ui.message.usage.withI18n")),1),e(),s("div",k,[t(o,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),t(i(u),{message:n.$t("ui.message.contents.content1")},null,8,["message"])])])]),_:1},8,["title"])}}});export{E as default};
