import{d as g,r as p,s as d,j as f,o as h,w as a,B as e,e as s,t as i,g as t,u as o,Y as u,C as v}from"./index-Cc4iPlXT.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-DxERaYRa.js";const $={class:"section-content"},_={class:"section-content"},C={class:"section-content"},M=s("i",{class:"fa-regular fa-bell"},null,-1),w={class:"section-content"},S={class:"section-content"},y=g({__name:"Index",setup(k){const c=p(!0);return(n,m)=>{const l=d("SshPre");return h(),f(b,{title:n.$t("ui.message.title"),class:"demo-message"},{toolbar:a(()=>[t(o(v),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:m[0]||(m[0]=r=>n.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[e(),s("section",null,[s("h2",null,i(n.$t("ui.message.usage.basic")),1),e(),s("div",$,[t(o(u),{message:n.$t("ui.message.contents.content1")},null,8,["message"]),e(),t(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message message="Season sale: Up to 50% off selected items!" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,i(n.$t("ui.message.usage.icons.icon")),1),e(),s("div",_,[t(o(u),{message:n.$t("ui.message.contents.content2"),icon:"pi pi-android"},null,8,["message"]),e(),t(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message
              icon="pi pi-android"
              message="New features just launched! Check them out!"
            />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,i(n.$t("ui.message.usage.icons.iconSlot")),1),e(),s("div",C,[t(o(u),{message:n.$t("ui.message.contents.content3")},{icon:a(()=>[M]),_:1},8,["message"]),e(),t(l,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,i(n.$t("ui.message.usage.enableClose")),1),e(),s("div",w,[t(o(u),{message:n.$t("ui.message.contents.content4"),icon:"pi pi-comments","enable-close":"",onClose:m[1]||(m[1]=r=>c.value=!1)},null,8,["message"]),e(),t(l,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e()])]),e(),s("section",null,[s("h2",null,i(n.$t("ui.message.usage.withI18n")),1),e(),s("div",S,[t(o(u),{message:n.$t("ui.message.contents.content1")},null,8,["message"]),e(),t(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Message :message="t('ui.message.description')" />
          </template>
          
          <script setup lang="ts">
            import { Message } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{y as default};
