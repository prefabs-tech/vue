import{d as b,r as u,o as m,c as v,w as i,g as a,f as e,t as o,a as l,h as t,a4 as s,a0 as h,a1 as _,_ as f}from"./index-007b8084.js";const r=c=>(h("data-v-ca6c209d"),c=c(),_(),c),B={class:"section-content"},y={class:"section-content"},$={class:"section-content"},k={class:"section-content"},I={class:"container"},w={class:"section-content"},z={class:"container"},S={class:"section-content"},L={class:"container"},P={class:"section-content"},C={class:"container"},N={class:"section-content"},R={class:"container"},V=r(()=>l("i",{class:"pi pi-check"},null,-1)),A=r(()=>l("i",{class:"pi pi-times"},null,-1)),D=b({__name:"Index",setup(c){return(n,U)=>{const g=u("router-link"),d=u("SshPre"),p=u("Page");return m(),v(p,{title:n.$t("ui.badge.title"),class:"demo-badge"},{toolbar:i(()=>[a(g,{to:{name:"ui"},class:"back"},{default:i(()=>[e(o(n.$t("common.back")),1)]),_:1})]),default:i(()=>[e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.basic")),1),e(),l("div",B,[a(d,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Basic" /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),a(t(s),{label:n.$t("ui.badge.label.basic")},null,8,["label"])])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.withI18n")),1),e(),l("div",y,[a(d,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge :label=t("ui.badge.label.addedIn") /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),a(t(s),{label:n.$t("ui.badge.label.addedIn")},null,8,["label"])])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.rounded")),1),e(),l("div",$,[a(d,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Rounded" rounded /> 
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),a(t(s),{label:n.$t("ui.badge.label.rounded"),rounded:""},null,8,["label"])])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.severity")),1),e(),l("div",k,[a(d,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Primary" severity="primary" />
            <Badge label="Secondary" severity="secondary" />
            <Badge label="Alternate" severity="alternate" />
            <Badge label="Success" severity="success" />
            <Badge label="Danger" severity="danger" />
            <Badge label="Warning" severity="warning" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",I,[a(t(s),{label:n.$t("ui.badge.label.primary"),severity:"primary"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.secondary"),severity:"secondary"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.alternate"),severity:"alternate"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.success"),severity:"success"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.danger"),severity:"danger"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.warning"),severity:"warning"},null,8,["label"])])])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.icon")),1),e(),l("div",w,[a(d,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge icon-left="pi pi-thumbs-up" />
            <Badge icon-right="pi pi-thumbs-down" />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",z,[a(t(s),{"icon-left":"pi pi-thumbs-up"}),e(),a(t(s),{"icon-right":"pi pi-thumbs-down"})])])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.iconPackage")),1),e(),l("div",S,[a(d,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="fa-solid fa-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",L,[a(t(s),{label:n.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.unLocked"),"icon-right":"fa-solid fa-lock-open",severity:"success"},null,8,["label"])])])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.iconAndLabel")),1),e(),l("div",P,[a(d,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Locked" icon-left="pi pi-lock" />
            <Badge label="Unlocked" icon-right="pi pi-lock-open" severity="success />
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",C,[a(t(s),{label:n.$t("ui.badge.label.locked"),"icon-left":"pi pi-lock"},null,8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.unLocked"),"icon-right":"pi pi-lock-open",severity:"success"},null,8,["label"])])])]),e(),l("section",null,[l("h2",null,o(n.$t("ui.badge.usage.iconElement")),1),e(),l("div",N,[a(d,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <Badge label="Correct">
              <template #iconLeft>
                <i class="pi pi-check" >
              </template>
            </Badge>

            <Badge label="Wrong" severity="danger">
              <template #iconRight>
                <i class="pi pi-times" >
              </template>
            </Badge>
          </template>
          
          <script setup lang="ts">
            import { Badge } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),l("div",R,[a(t(s),{label:n.$t("ui.badge.label.correct")},{iconLeft:i(()=>[V]),_:1},8,["label"]),e(),a(t(s),{label:n.$t("ui.badge.label.wrong"),severity:"danger"},{iconRight:i(()=>[A]),_:1},8,["label"])])])])]),_:1},8,["title"])}}});const E=f(D,[["__scopeId","data-v-ca6c209d"]]);export{E as default};
